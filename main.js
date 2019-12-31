var jsdiv = document.createElement("div");
jsdiv.className = "demo";
document.body.appendChild(jsdiv);
var xp = 0;
var yp = 0;

jsdiv.onmousedown = function (begin) {

    // xbegin和ybegin记录每次移动前的坐标位置
    var xbegin = begin.clientX;
    var ybegin = begin.clientY;
    document.body.onmousemove = function (end) {
        var xmove, ymove;
        xmove = end.clientX - xbegin;
        ymove = end.clientY - ybegin;
        xp += xmove;
        yp += ymove;
        if (xp < 0) {
            xp = 0;
        }
        if (yp < 0) {
            yp = 0;
        }
        if (xp + jsdiv.offsetWidth > document.body.clientWidth) {
            xp = document.body.clientWidth - jsdiv.offsetWidth;
        }
        if (yp + jsdiv.offsetHeight > document.body.clientHeight) {
            yp = document.body.clientHeight - jsdiv.offsetHeight;
        }
        jsdiv.style.transform = translateJS(xp, yp);
        xbegin = end.clientX;
        ybegin = end.clientY;
        window.onmouseup = function () {
            document.body.onmousemove = "null";
        };
    };
};
function translateJS(x, y) {
    var s = "translate(" + x + "px," + y + "px)";
    return s;
}
