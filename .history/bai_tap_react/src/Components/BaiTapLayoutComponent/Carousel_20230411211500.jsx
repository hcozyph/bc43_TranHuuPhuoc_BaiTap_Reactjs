import React, { Component } from "react";

export default class Carousel extends Component {
    render() {
        return (
            <section id="carousel" className="py-5 ">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                        <div
                            id="carousel-content"
                            className="m-4 m-lg-5 fw-bold"
                        >
                            <h1>A warm welcome!</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
