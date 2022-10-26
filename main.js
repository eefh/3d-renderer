import drawLine from "./modules/drawLine.js";
import drawPixel from "./modules/drawPixel.js";
import drawTri from "./modules/drawTri.js";
import clear from "./modules/clear.js";
import drawTriFill from "./modules/drawTriFill.js";
import drawShadedTri from "./modules/drawShadedTri.js";
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let x = 0;

drawShadedTri(
    ctx,
    [300, 100, 1],
    [0, 400, 0.7],
    [800, 400, 0],
    [255, 0, 0, 255]
);
