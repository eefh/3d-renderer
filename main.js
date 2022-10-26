import drawLine from "./modules/drawLine.js";
import drawPixel from "./modules/drawPixel.js";
import drawTri from "./modules/drawTri.js";
import clear from "./modules/clear.js";
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let x = 0;

clear(ctx);
const update = () => {
    draw();
    x += 1;
};

const draw = () => {
    clear(ctx);
    drawTri(ctx, [x, 200], [200, 200], [400, 100], [255, 0, 0, 255]);
};

window.onload = function () {
    setInterval(update, 20);
};
