import drawPixel from "./drawPixel.js";
import interpolate from "./interpolate.js";
const drawLine = (ctx, pos1, pos2, col) => {
    if (Math.abs(pos2[0] - pos1[0]) > Math.abs(pos2[1] - pos1[1])) {
        if (pos1[0] > pos2[0]) {
            [pos1, pos2] = [pos2, pos1];
        }
        let [x1, y1] = pos1;
        let [x2, y2] = pos2;
        let yMap = interpolate(x1, y1, x2, y2);
        for (let x = x1; x < x2; x++) {
            drawPixel(ctx, [x, yMap[x - x1]], col);
        }
    } else {
        if (pos1[1] > pos2[1]) {
            [pos1, pos2] = [pos2, pos1];
        }
        let [x1, y1] = pos1;
        let [x2, y2] = pos2;
        let xMap = interpolate(y1, x1, y2, x2);
        for (let y = y1; y < y2; y++) {
            drawPixel(ctx, [xMap[y - y1], y], col);
        }
    }
};

export default drawLine;
