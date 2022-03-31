import React from "react";
import { Link } from "react-router-dom";
import Numeral, { NumeralProps } from "./Numeral";

export default class Second extends Numeral {
    constructor(props: NumeralProps) {
        super(props, 'second');
    }

    render() {
        return (
            <div className="container p-2">
                <h3 className="bg-info p-1 text-white text-center rounded">Second page</h3>

                <div>{this.state.message}</div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Link to="/first" className="btn btn-link" role="button">
                            First
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="/second" className="btn btn-link disabled" role="button">
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
}
