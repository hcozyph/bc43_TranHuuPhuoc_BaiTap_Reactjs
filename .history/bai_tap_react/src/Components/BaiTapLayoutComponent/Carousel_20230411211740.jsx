import React, { Component } from "react";

export default class Carousel extends Component {
    render() {
        return (
            <section id="carousel" className="py-5 ">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                        <div id="carousel-content" className="m-4 m-lg-5 ">
                            <h1 className="fw-bold display-2">
                                A warm welcome!
                            </h1>
                            <p className="fs-4">
                                Bootstrap utility classes are used to create
                                this jumbotron since the old component has been
                                removed from the framework. Why create custom
                                CSS when you can use utilities?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
