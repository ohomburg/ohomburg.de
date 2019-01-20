(function (window, document, undefined) {
    var bcounter = 0;

    function B() {
        bcounter++;
        var walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        console.log("bfactor", bfactor);
        var n;
        while (n = walk.nextNode()) { BText(n); }
    }

    function BText(node) {
        var regex;
        switch (bcounter) {
        case 0: return;
        case 1: regex = /(^|(?<= ))[bBcC]/g;
        }
    }

    document.addEventListener('paste', (ev) => {
        let data = ev.clipboardData.getData('text/plain');
        if (data.includes("\ud83c\udd71")) {
            B();
        }
    }, false);
})(window, document);
