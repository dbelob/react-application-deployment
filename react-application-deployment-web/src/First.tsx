import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RestDataSource } from "./RestDataSource";

type FirstProps = {};

type FirstState = {
    message: string;
};

export default class First extends Component<FirstProps, FirstState> {
    private dataSource;

    constructor(props: any) {
        super(props);

        this.state = {
            message: ''
        }
        this.dataSource = new RestDataSource();
    }

    render() {
        return (
            <div className="container p-2">
                <h3 className="bg-info p-1 text-white text-center rounded">First page</h3>

                <div>{this.state.message}</div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Link to="/first" className="btn btn-link disabled" role="button">
                            First
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="/second" className="btn btn-link" role="button">
                            Second
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="/third" className="btn btn-link" role="button">
                            Third
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.dataSource.getData(data => this.setState({message: data}));
    }
}
