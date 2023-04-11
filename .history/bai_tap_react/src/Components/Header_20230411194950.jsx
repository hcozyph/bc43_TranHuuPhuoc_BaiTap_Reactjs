import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark ">
                {" "}
                <div className="container px-lg-5">
                    {" "}
                    <a className="navbar-brand text-white" href="#">
                        {" "}
                        Start Bootstrap{" "}
                    </a>{" "}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {" "}
                        <span className="navbar-toggler-icon" />{" "}
                    </button>{" "}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {" "}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {" "}
                            <li className="nav-item">
                                {" "}
                                <a
                                    className="nav-link text-white active"
                                    aria-current="page"
                                    href="#"
                                >
                                    {" "}
                                    Home{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link text-white" href="#">
                                    {" "}
                                    About{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link text-white" href="#">
                                    {" "}
                                    Contact{" "}
                                </a>{" "}
                            </li>{" "}
                        </ul>{" "}
                    </div>{" "}
                </div>{" "}
            </nav>
        );
    }
}
