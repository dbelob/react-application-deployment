import { Component } from 'react';
import { HelloService } from './HelloService';

export type NumeralProps = {}

export type NumeralState = {
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

    componentDidMount() {
        this.helloService.getMessage(this.name)
            .subscribe(data => {
                this.setState({message: data});
            });
    }

    abstract render(): any;
}
