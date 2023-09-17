function bhaskara(ax2, bx, c) {
    var delta = Math.pow(bx, 2) - 4 * ax2 * c;
    if (delta < 0) {
        return console.log("Delta é negativo");;
    } else {
        var x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        var x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        return console.log([x1, x2]);;
    }
}

bhaskara(1, 0, -1)