(function() {
    var notServiceParamRE = /^[a-z]/;
    var item;

    for (var i in localStorage) {
        if (!notServiceParamRE.test(i)) {
            item = localStorage.getItem(i);
            if (item && item.length && item.length > 100) {
                localStorage.removeItem(i);
            }
        }
    }
})();