exports.min = function min(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length !== 0) {
        let numbMin = Math.min(...array);
        return numbMin;
    } else return 0;
};

exports.max = function max(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length !== 0) {
        let numbMax = Math.max(...array);
        return numbMax;
    } else return 0;
};

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length !== 0) {
        let numbAvg = array.reduce((prev, cur) => prev + cur) / array.length;
        return numbAvg;
    } else return 0;
};
