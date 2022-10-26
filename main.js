import drawLine from "./modules/drawLine.js";
import drawPixel from "./modules/drawPixel.js";
import drawTri from "./modules/drawTri.js";

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

drawTri(ctx, [10, 10], [500, 500], [40, 300], [255, 0, 0, 255]);
