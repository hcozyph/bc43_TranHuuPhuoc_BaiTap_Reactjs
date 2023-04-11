import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
            </div>
        );
    }
}
