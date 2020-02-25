var iUtils = {};

iUtils.randomInt = function () {
    var min = _min;
    var max = _max;
    var range = max - min;

    var result = Math.random(0, 1) * range;

    result = parseInt(result);

    return result;
}