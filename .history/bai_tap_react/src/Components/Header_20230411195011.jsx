import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <nav classname="navbar navbar-expand-lg bg-dark ">
                {"{"}" "{"}"}
                <div classname="container px-lg-5">
                    {"{"}" "{"}"}
                    <a classname="navbar-brand text-white" href="#">
                        {"{"}" "{"}"}
                        Start Bootstrap{"{"}" "{"}"}
                    </a>
                    {"{"}" "{"}"}
                    <button
                        classname="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {"{"}" "{"}"}
                        <span classname="navbar-toggler-icon">
                            {"{"}" "{"}"}
                        </span>
                    </button>
                    {"{"}" "{"}"}
                    <div
                        classname="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {"{"}" "{"}"}
                        <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
                            {"{"}" "{"}"}
                            <li classname="nav-item">
                                {"{"}" "{"}"}
                                <a
                                    classname="nav-link text-white active"
                                    aria-current="page"
                                    href="#"
                                >
                                    {"{"}" "{"}"}
                                    Home{"{"}" "{"}"}
                                </a>
                                {"{"}" "{"}"}
                            </li>
                            {"{"}" "{"}"}
                            <li classname="nav-item">
                                {"{"}" "{"}"}
                                <a classname="nav-link text-white" href="#">
                                    {"{"}" "{"}"}
                                    About{"{"}" "{"}"}
                                </a>
                                {"{"}" "{"}"}
                            </li>
                            {"{"}" "{"}"}
                            <li classname="nav-item">
                                {"{"}" "{"}"}
                                <a classname="nav-link text-white" href="#">
                                    {"{"}" "{"}"}
                                    Contact{"{"}" "{"}"}
                                </a>
                                {"{"}" "{"}"}
                            </li>
                            {"{"}" "{"}"}
                        </ul>
                        {"{"}" "{"}"}
                    </div>
                    {"{"}" "{"}"}
                </div>
                {"{"}" "{"}"}
            </nav>
        );
    }
}
