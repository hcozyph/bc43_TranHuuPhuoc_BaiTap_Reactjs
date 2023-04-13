import React, { Component } from "react";

export default class Content extends Component {
    render() {
        return (
            <div className="pt-3">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5 pt-5">
                        {/* 1 */}
                        <div className="col-lg-6 col-xxl-4 mb-5 mt-4 ">
                            <div className="card bg-light border-0 h-100  ">
                                <div className="card-container icon-standard">
                                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 feature-icon">
                                            <i class="fas fa-layer-group fs-3"></i>
                                        </div>
                                        <h4 className="fw-bold mt-4 pt-4">
                                            Fresh new layout
                                        </h4>
                                        <p>
                                            With Bootstrap 5, we've created a
                                            fresh new layout for this template!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="col-lg-6 col-xxl-4 mb-5 mt-4">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 feature-icon">
                                        <i class="fas fa-cloud-download-alt fs-3"></i>
                                    </div>
                                    <h4 className="fw-bold mt-4 pt-4">
                                        Free to download
                                    </h4>
                                    <p>
                                        As always, Start Bootstrap has a
                                        powerful collectin of free templates.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="col-lg-6 col-xxl-4 mb-5 mt-4">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 feature-icon">
                                        <i class="fas fa-file-contract fs-3"></i>
                                    </div>
                                    <h4 className="fw-bold mt-4 pt-4">
                                        Jumbotron hero header
                                    </h4>
                                    <p>
                                        The heroic part of this template is the
                                        jumbotron hero header!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="col-lg-6 col-xxl-4 mb-5 mt-4">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 feature-icon">
                                        <i class="fab fa-bootstrap fs-3"></i>{" "}
                                    </div>
                                    <h4 className="fw-bold mt-4 pt-4">
                                        Feature boxes
                                    </h4>
                                    <p>
                                        We've created some custom feature boxes
                                        using Bootstrap icons!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="col-lg-6 col-xxl-4 mb-5 mt-4">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 feature-icon">
                                        <i class="fas fa-code fs-3"></i>{" "}
                                    </div>
                                    <h4 className="fw-bold mt-4 pt-4">
                                        Simple clean code
                                    </h4>
                                    <p>
                                        We keep our dependencies up to date and
                                        squash bugs as they come!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className="col-lg-6 col-xxl-4 mb-5 mt-4">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 feature-icon">
                                        <i class="fas fa-check-circle fs-3"></i>{" "}
                                    </div>
                                    <h4 className="fw-bold mt-4 pt-4">
                                        A name you trust
                                    </h4>
                                    <p>
                                        Start Bootstrap has been the leader in
                                        free Bootstrap templates since 2013!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
