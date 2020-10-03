exports.min = function min (array) {
    if (array){
        while (array.length){
            return Math.min(...array);
        }
    }
    return 0;
};

exports.max = function max (array) {
    if (array){
        while (array.length){
            return Math.max(...array);
        }
    }
    return 0;
};

exports.avg = function avg (array) {
    if (array){
        while (array.length){
            return array.reduce((a,b) => a + b, 0) / array.length;
        }
    }
    return 0;
};

