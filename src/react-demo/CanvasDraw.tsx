import React, { Component } from "react";

class CanvasDraw extends Component {
    refs: any;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.draw();
    }

    draw() {
        this.canvas = this.refs.canvas;
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext('2d');

        // this.ctx.fillStyle ="#abc";
        // this.ctx.scale(0.5, 0.5);

        // this.ctx.fillRect(100, 100, 100, 100);


        // this.ctx.fillStyle ="#E1E1E1";
        // this.ctx.fillRect(0, 0, 200, 200);

        //初始圆
        this.ctx.arc(200, 200, 50, 0, 2 * Math.PI);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.scale(2, 2);
        //横纵坐标都放大了2倍
        //半径也放大了2倍
        this.ctx.strokeStyle = 'red';
        this.ctx.arc(200, 200, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    render() {
        return (
            <div style={{ border: "2px solid red", height: "810px", width: "810px" }}>
                <canvas id="canvas" ref="canvas"></canvas>
            </div>
        );
    }
}

export default CanvasDraw;