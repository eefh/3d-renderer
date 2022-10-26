import drawLine from "./modules/drawLine.js";
import drawPixel from "./modules/drawPixel.js";
import drawTri from "./modules/drawTri.js";
import clear from "./modules/clear.js";
import drawTriFill from "./modules/drawTriFill.js";
import drawShadedTri from "./modules/drawShadedTri.js";
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let viewWidth = 2.3;
let viewHeight = 1;
let d = 0.8;
const viewportToCanvas = (x, y) => {
    return [
        ((x + 1) * c.width) / viewWidth,
        ((y + 0.3) * c.height) / viewHeight,
    ];
};

const projectVertex = (v) => {
    return viewportToCanvas((v[0] * d) / v[2], (v[1] * d) / v[2]);
};
//front verts
let vAf = [-2, -0.5, 5];
let vBf = [-2, 0.5, 5];
let vCf = [-1, 0.5, 5];
let vDf = [-1, -0.5, 5];
//back verts
let vAb = [-2, -0.5, 6];
let vBb = [-2, 0.5, 6];
let vCb = [-1, 0.5, 6];
let vDb = [-1, -0.5, 6];
let dy = 0;
let dx = 0;
let dz = 0;
let g = 0;
const update = () => {
    clear(ctx);
    window.addEventListener("keydown", (event) => {
        if (event.isComposing || event.code === "KeyW") {
            dz += 0.0008;
        }
        if (event.isComposing || event.code === "KeyS") {
            dz += -0.0008;
        }
        if (event.isComposing || event.code === "KeyA") {
            dx += -0.0008;
        }
        if (event.isComposing || event.code === "KeyD") {
            dx += 0.0008;
        }
    });
    g += 0.0001;
    dy += g;
    vAf[0] += dx;
    vAf[1] += dy;
    vAf[2] += dz;

    vBf[0] += dx;
    vBf[1] += dy;
    vBf[2] += dz;

    vCf[0] += dx;
    vCf[1] += dy;
    vCf[2] += dz;

    vDf[0] += dx;
    vDf[1] += dy;
    vDf[2] += dz;

    vAb[0] += dx;
    vAb[1] += dy;
    vAb[2] += dz;

    vBb[0] += dx;
    vBb[1] += dy;
    vBb[2] += dz;

    vCb[0] += dx;
    vCb[1] += dy;
    vCb[2] += dz;

    vDb[0] += dx;
    vDb[1] += dy;
    vDb[2] += dz;
    dx *= 0.1;
    dz *= 0.1;
    console.log(dy);
    if (vBf[1] > 1 || vCf[1] > 1 || vBb[1] > 1 || vCb > 1) {
        vBf[1] = 1;
        vCf[1] = 1;
        vBb[1] = 1;
        vCb[1] = 1;
        vAf[1] = 0;
        vDf[1] = 0;
        vAb[1] = 0;
        vDb[1] = 0;
        dy *= -1;
    }
    drawLine(ctx, projectVertex(vAf), projectVertex(vBf), [0, 0, 255, 255]);
    drawLine(ctx, projectVertex(vBf), projectVertex(vCf), [0, 0, 255, 255]);
    drawLine(ctx, projectVertex(vCf), projectVertex(vDf), [0, 0, 255, 255]);
    drawLine(ctx, projectVertex(vDf), projectVertex(vAf), [0, 0, 255, 255]);
    //back
    drawLine(ctx, projectVertex(vAb), projectVertex(vBb), [255, 0, 0, 255]);
    drawLine(ctx, projectVertex(vBb), projectVertex(vCb), [255, 0, 0, 255]);
    drawLine(ctx, projectVertex(vCb), projectVertex(vDb), [255, 0, 0, 255]);
    drawLine(ctx, projectVertex(vDb), projectVertex(vAb), [255, 0, 0, 255]);
    //edges
    drawLine(ctx, projectVertex(vAf), projectVertex(vAb), [0, 100, 100, 255]);
    drawLine(ctx, projectVertex(vBf), projectVertex(vBb), [0, 100, 100, 255]);
    drawLine(ctx, projectVertex(vCf), projectVertex(vCb), [0, 100, 100, 255]);
    drawLine(ctx, projectVertex(vDf), projectVertex(vDb), [0, 100, 100, 255]);
};
window.onload = function () {
    setInterval(update, 20);
};
//front
