! function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c2x = NEJ.P,
        eo4s = c2x("nej.g"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        TY7R = c2x("nm.x.ek"),
        l2x = c2x("nm.x");
    if (v2x.bn3x.redefine) return;
    window.GEnc = true;
    var bsL6F = function (czZ1x) {
        var o2x = [];
        k2x.bd3x(czZ1x, function (czX1x) {
            o2x.push(TY7R.emj[czX1x])
        });
        return o2x.join("")
    };
    var czW1x = v2x.bn3x;
    v2x.bn3x = function (Y3x, e2x) {
        var j2x = {},
            e2x = NEJ.X({}, e2x),
            lJ7C = Y3x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y3x) && !(e2x.headers && e2x.headers[eo4s.yV1x] == eo4s.Ff3x) && !e2x.noEnc) {
            if (lJ7C != -1) {
                j2x = k2x.hx5C(Y3x.substring(lJ7C + 1));
                Y3x = Y3x.substring(0, lJ7C)
            }
            if (e2x.query) {
                j2x = NEJ.X(j2x, k2x.fF5K(e2x.query) ? k2x.hx5C(e2x.query) : e2x.query)
            }
            if (e2x.data) {
                j2x = NEJ.X(j2x, k2x.fF5K(e2x.data) ? k2x.hx5C(e2x.data) : e2x.data)
            }
            j2x["csrf_token"] = v2x.gB5G("__csrf");
            Y3x = Y3x.replace("api", "weapi");
            e2x.method = "post";
            delete e2x.query;
            var bBU8M = window.asrsea(JSON.stringify(j2x), bsL6F(["流泪", "强"]), bsL6F(TY7R.md), bsL6F(["爱心", "女孩", "惊恐", "大笑"]));
            e2x.data = k2x.cC3x({
                params: bBU8M.encText,
                encSecKey: bBU8M.encSecKey
            })
        }
        czW1x(Y3x, e2x)
    };
    v2x.bn3x.redefine = true
})();