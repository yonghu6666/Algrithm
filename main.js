var main = (function () {
    function main () {

    }

    main.prototype.init = function () {
        
    }

    main.prototype.testInsertionSort = function () {
        myInsertionSort = new iInsertionSort();
        myInsertionSort.initSrcArr();
    }

    return main;
})();

var dataStructure = new main();

dataStructure.init();
dataStructure.testInsertionSort();