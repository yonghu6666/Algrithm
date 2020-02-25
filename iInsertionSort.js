var iInsertionSort = function () {
    function iInsertionSort () {
        this.iProperties();
    }
    
    iInsertionSort.prototype.iProperties = function () {
        this.srcArr = null;
        this.tarArr = null;
        this.sum = 0;
        this.len = 0;
    }

    //用斐波那契数列构造原始数组
    iInsertionSort.prototype.initSrcArr = function () {
        var srcArrLen = 100;
        var fibonacciSeq = [0, 1];
        var index;

        this.srcArr = [];
        this.tarArr = [];

        this.sum = fibonacciSeq[0] + fibonacciSeq[1];
        this.len = 2;

        //构造斐波那契数组
        for (var i = 2, lenI = srcArrLen; i < lenI; i ++) {
            fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
            this.sum += fibonacciSeq[i];
            this.len++;
        }

        //打乱斐波那契数组，放入源数组
        for (var i = 0, lenI = srcArrLen; i < lenI; i ++) {
            index = iUtils.randomInt(0, 100);
            index = index % this.len;
            
        }
    }

    return iInsertionSort;
}