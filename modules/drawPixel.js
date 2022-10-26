const drawPixel = (ctx, pos, col) => {
    let [x, y] = pos;
    let [r, g, b, a] = col;
    ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
    ctx.fillRect(x, y, 1, 1);
};

export default drawPixel;
