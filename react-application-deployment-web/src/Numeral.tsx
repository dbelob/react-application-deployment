import { Component } from 'react';
import { HelloDataSource } from './HelloDataSource';

export interface NumeralProps {
}

export interface NumeralState {
    message: string;
}

export default abstract class Numeral extends Component<NumeralProps, NumeralState> {
    private name: string;
    private dataSource;

    constructor(props: NumeralProps, name: string) {
        super(props);

        this.state = {
            message: ''
        }
        this.name = name;
        this.dataSource = new HelloDataSource();
    }

    abstract render(): any;

    componentDidMount() {
        this.dataSource.getMessage(this.name)
            .subscribe(response => {
                this.setState({message: response.data});
            });
    }
}
