import drawPixel from "./drawPixel.js";
import interpolate from "./interpolate.js";

const drawTriFill = (ctx, pos1, pos2, pos3, col) => {
    if (pos2[1] < pos1[1]) {
        [pos1, pos2] = [pos2, pos1];
    }
    if (pos3[1] < pos1[1]) {
        [pos1, pos3] = [pos3, pos1];
    }
    if (pos3[1] < pos2[1]) {
        [pos2, pos3] = [pos3, pos2];
    }
    let [x1, y1] = pos1;
    let [x2, y2] = pos2;
    let [x3, y3] = pos3;

    let xPos1toPos2 = interpolate(y1, x1, y2, x2);
    let xPos2toPos3 = interpolate(y2, x2, y3, x3);
    let xPos1toPos3 = interpolate(y1, x1, y3, x3);

    xPos1toPos2.pop();
    let xPos1toPos2toPos3 = xPos1toPos2.concat(xPos2toPos3);
    let xLeft;
    let xRight;
    let middle = Math.floor(xPos1toPos2toPos3.length / 2);
    if (xPos1toPos3[middle] < xPos1toPos2toPos3[middle]) {
        xLeft = xPos1toPos3;
        xRight = xPos1toPos2toPos3;
    } else {
        xLeft = xPos1toPos2toPos3;
        xRight = xPos1toPos3;
    }
    for (let y = y1; y < y3; y++) {
        for (let x = xLeft[y - y1]; x < xRight[y - y1]; x++) {
            drawPixel(ctx, [x, y], col);
        }
    }
};

export default drawTriFill;
