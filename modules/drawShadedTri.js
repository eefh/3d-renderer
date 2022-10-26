import drawPixel from "./drawPixel.js";
import interpolate from "./interpolate.js";

const drawShadedTri = (ctx, pos1, pos2, pos3, col) => {
    let [x1, y1, h1] = pos1;
    let [x2, y2, h2] = pos2;
    let [x3, y3, h3] = pos3;

    let xPos1toPos2 = interpolate(y1, x1, y2, x2);
    let hPos1toPos2 = interpolate(y1, h1, y2, h2);

    let xPos2toPos3 = interpolate(y2, x2, y3, x3);
    let hPos2toPos3 = interpolate(y2, h2, y3, h3);

    let xPos1toPos3 = interpolate(y1, x1, y3, x3);
    let hPos1toPos3 = interpolate(y1, h1, y3, h3);

    xPos1toPos2.pop();
    let xPos1toPos2toPos3 = xPos1toPos2.concat(xPos2toPos3);

    hPos1toPos2.pop();
    let hPos1toPos2toPos3 = hPos1toPos2.concat(hPos2toPos3);

    let middle = Math.floor(xPos1toPos2toPos3.length / 2);
    let xLeft;
    let xRight;
    let hLeft;
    let hRight;
    if (xPos1toPos3[middle] < xPos1toPos2toPos3[middle]) {
        xLeft = xPos1toPos3;
        hLeft = hPos1toPos3;
        xRight = xPos1toPos2toPos3;
        hRight = hPos1toPos2toPos3;
    } else {
        xLeft = xPos1toPos2toPos3;
        hLeft = hPos1toPos2toPos3;
        xRight = xPos1toPos3;
        hRight = hPos1toPos3;
    }
    let xL;
    let xR;
    let hSegment;
    let shadedCol;
    for (let y = y1; y < y3; y++) {
        xL = xLeft[y - y1];
        xR = xRight[y - y1];
        hSegment = interpolate(xL, hLeft[y - y1], xR, hRight[y - y1]);
        for (let x = xL; x < xR; x++) {
            shadedCol = [
                col[0] * hSegment[x - xL],
                col[1] * hSegment[x - xL],
                col[2] * hSegment[x - xL],
                col[3],
            ];
            drawPixel(ctx, [x, y], shadedCol);
        }
    }
};

export default drawShadedTri;
