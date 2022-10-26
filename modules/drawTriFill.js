import drawLine from "./drawLine.js";
const drawTriFill = (ctx, pos1, pos2, pos3, col) => {
    if (pos2 < pos1) {
        [pos1, pos2] = [pos2, pos1];
    }
    if (pos3 < pos1) {
        [pos1, pos3] = [pos3, pos1];
    }
    if (pos3 < pos2) {
        [pos2, pos3] = [pos3, pos2];
    }
};

export default drawTriFill;
