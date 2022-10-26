import drawLine from "./modules/drawLine.js";
import drawPixel from "./modules/drawPixel.js";
import drawTri from "./modules/drawTri.js";
import clear from "./modules/clear.js";
import drawTriFill from "./modules/drawTriFill.js";
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let x = 0;

drawTriFill(ctx, [0, 0], [0, 300], [300, 300], [255, 0, 0, 255]);
drawTriFill(ctx, [0, 0], [300, 0], [300, 300], [0, 255, 40, 255]);
