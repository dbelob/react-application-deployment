import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Third extends Component {
    render() {
        return (
            <div className="container p-2">
                <h3 className="bg-info p-1 text-white text-center rounded">Third page</h3>

                <div>message</div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Link to="/first" className="btn btn-link" role="button">
                            First
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="/second" className="btn btn-link" role="button">
                            Second
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="/third" className="btn btn-link disabled" role="button">
                            Third
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
