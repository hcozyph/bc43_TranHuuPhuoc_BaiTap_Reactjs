import React, { Component } from "react";

export default class Content extends Component {
    render() {
        return (
            <div className="pt-5">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                        <i class="bi bi-collection"></i>
                                    </div>
                                    <h2>Fresh new layout</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
