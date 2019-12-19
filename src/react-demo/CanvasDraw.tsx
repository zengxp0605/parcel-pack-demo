import React, { Component } from "react";

import './style.scss';

class CanvasDraw extends Component {
    refs: any;
    canvas: HTMLCanvasElement;
    canvasTop: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    ctxTop: CanvasRenderingContext2D;
    xGap = 100;
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.canvas = this.refs.canvas;
        this.canvasTop = this.refs.canvasTop;
        this.ctx = this.canvas.getContext('2d');
        this.ctxTop = this.canvasTop.getContext('2d');

        // this.drawTestScale();
        this.drawTop();
    }

    resetCanvasTop() {
        this.ctxTop.clearRect(0, 0, this.canvasTop.width, this.canvasTop.height);
        this.drawCanvasTopGrid();
    }

    listenCanvasTop() {
        const getTouchPos = (e) => {
            const touch = e.touches[0];
            const rect = this.canvasTop.getBoundingClientRect();
            // console.log(touch, rect);

            const posX = touch.clientX - rect.left;
            const posY = touch.clientY - rect.top;
            return { posX, posY }
        }
        const touchMove = (e) => {
            console.log('touchMove');
            const { posX, posY } = getTouchPos(e);

            // this.ctxTop.fillStyle = "red";
            // this.ctxTop.beginPath();
            // this.ctxTop.arc(posX, posY, 3, 0, Math.PI * 2);
            // this.ctxTop.fill();
            this.drawMoveLine(posX);
        }
        const touchStart = (e) => {
            console.log('touchStart');
            const { posX, posY } = getTouchPos(e);
            console.log({ posX, posY });
            this.drawMoveLine(posX);
        }

        const touchEnd = (e) => {
            console.log('touchEnd');
            // const { posX, posY } = getTouchPos(e);
            // console.log({ posX, posY });
            const touch = e.touches[0];
            const rect = this.canvasTop.getBoundingClientRect();
            console.log(e.touches, rect);
            this.resetCanvasTop();
        }
        const touchCancel = (e) => {
            console.log('touchCancel');
        }
        this.canvasTop.addEventListener("touchstart", touchStart, false);
        this.canvasTop.addEventListener("touchmove", touchMove, false);
        this.canvasTop.addEventListener("touchend", touchEnd, false);
        this.canvasTop.addEventListener("touchcancel", touchCancel, false);
    }

    drawMoveLine(posX) {
        this.resetCanvasTop();
        let idx = Math.round(posX / this.xGap);
        console.log({ idx });
        let x = idx * this.xGap;
        this.ctxTop.strokeStyle = "red";
        this.ctxTop.beginPath();
        this.ctxTop.moveTo(x, 0);
        this.ctxTop.lineTo(x, this.canvasTop.height);
        this.ctxTop.stroke();

        this.ctxTop.font = "14px/1.5 Microsoft Yahei";
        this.ctxTop.textAlign = "center";
        this.ctxTop.fillStyle = "red";
        this.ctxTop.fillText(`x:${x},y:100`, x, 100);
    }

    drawCanvasTopGrid() {
        for (let x = this.xGap; x < this.canvasTop.width; x += this.xGap) {
            console.log({ x });
            this.ctxTop.strokeStyle = "#abc";
            this.ctxTop.beginPath();
            this.ctxTop.moveTo(x, 100);
            this.ctxTop.lineTo(x, this.canvasTop.height);
            this.ctxTop.stroke();
        }
    }

    drawTop() {

        this.canvasTop.width = 400;
        this.canvasTop.height = 400;
        this.ctxTop.fillStyle = "#E1E1E1";

        // this.ctxTop.fillRect(0, 0, 400, 400);
        this.ctxTop.lineWidth = 0.5;
        this.ctxTop.strokeStyle = "pink";
        this.ctxTop.beginPath();
        this.ctxTop.moveTo(0, 0);
        this.ctxTop.lineTo(400, 400);
        this.ctxTop.stroke();

        // setTimeout(() => {
        //     this.ctxTop.clearRect(0, 0, 400, 400);
        // }, 2000);
        this.listenCanvasTop();
        this.drawCanvasTopGrid();
    }

    drawTestScale() {
        this.canvas.width = 800;
        this.canvas.height = 800;

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
                <div className="canvas-top-wrap">
                    <canvas id="canvasTop" ref="canvasTop"></canvas>
                </div>
            </div>
        );
    }
}

export default CanvasDraw;