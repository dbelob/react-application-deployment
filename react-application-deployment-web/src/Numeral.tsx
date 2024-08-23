import { Component } from 'react';
import { HelloService } from './HelloService';

export type NumeralProps = {}

export type NumeralState = {
    message: string;
}

export default abstract class Numeral extends Component<NumeralProps, NumeralState> {
    private readonly name: string;
    private helloService = new HelloService();

    protected constructor(props: NumeralProps, name: string) {
        super(props);

        this.state = {
            message: ''
        }
        this.name = name;
    }

    componentDidMount() {
        this.helloService.getMessage(this.name)
            .then(response => this.setState({message: response.data}));
    }

    abstract render(): any;
}
