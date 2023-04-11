import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Content from "./Content";

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Content />
            </div>
        );
    }
}
