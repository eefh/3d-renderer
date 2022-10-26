import drawLine from "./drawLine.js";

const drawTri = (ctx, p1, p2, p3, col) => {
    drawLine(ctx, p1, p2, col);
    drawLine(ctx, p2, p3, col);
    drawLine(ctx, p3, p1, col);
};

export default drawTri;
