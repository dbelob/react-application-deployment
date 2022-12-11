import { Component } from 'react';
import { HelloService } from './HelloService';

export interface NumeralProps {
}

export interface NumeralState {
    message: string;
}

export default abstract class Numeral extends Component<NumeralProps, NumeralState> {
    private name: string;
    private helloService = new HelloService();

    constructor(props: NumeralProps, name: string) {
        super(props);

        this.state = {
            message: ''
        }
        this.name = name;
    }

    abstract render(): any;

    componentDidMount() {
        this.helloService.getMessage(this.name)
            .subscribe(data => {
                this.setState({message: data});
            });
    }
}
