(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (Go3x) {
        if (!Go3x || !Go3x.length) return null;
        var YW9N = window;
        for (var a = Go3x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; YW9N = YW9N[a[i]] = YW9N[a[i]] || {}, i++);
        return YW9N
    };
    NEJ.Q = function (bJ3x, Go3x) {
        bJ3x = bJ3x || NEJ.O;
        var bs3x = Go3x.split(".");
        for (var i = 0, l = bs3x.length; i < l; i++) {
            bJ3x = bJ3x[bs3x[i]];
            if (!bJ3x) break
        }
        return bJ3x
    };
    NEJ.C = function () {
        var bJZ0x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bEo9f = function (D2x, by3x) {
            for (var x in by3x)
                if (D2x == by3x[x]) return x;
            return null
        };
        var bxp7i = {
                cx3x: 0,
                bk3x: 1,
                bD3x: 2,
                bW3x: 3,
                bL3x: 4,
                eZ4d: 5,
                kt6n: 6,
                eD4H: 7
            },
            uh9Y = {
                cF3x: 0,
                bm3x: 1,
                bG3x: 2,
                cg3x: 3,
                bR3x: 4,
                gC5H: 5,
                lk6e: 6,
                gr5w: 7
            };
        return function () {
            var fL5Q = function () {
                this.bEO9F();
                return this.cx3x.apply(this, arguments)
            };
            fL5Q.prototype.bEO9F = NEJ.F;
            fL5Q.prototype.cx3x = NEJ.F;
            fL5Q.N2x = function (AI1x, bKJ0x) {
                if (bJZ0x(AI1x)) return;
                if (bKJ0x == null || !!bKJ0x) NEJ.X(this, AI1x, bJZ0x);
                this.bVm4q = AI1x;
                this.ct3x = AI1x.prototype;
                var bI3x = function () {};
                bI3x.prototype = AI1x.prototype;
                this.prototype = new bI3x;
                var Hy3x = this.prototype;
                Hy3x.constructor = this;
                var ck3x;
                for (var x in bxp7i) {
                    ck3x = bEo9f(bxp7i[x], uh9Y);
                    if (!ck3x || !this.ct3x[x]) continue;
                    Hy3x[x] = function (V3x) {
                        return function () {
                            this[V3x].apply(this, arguments)
                        }
                    }(ck3x)
                }
                var Fm3x = {};
                for (var x in uh9Y) {
                    ck3x = bEo9f(uh9Y[x], bxp7i);
                    if (!ck3x || !this.ct3x[ck3x]) continue;
                    Fm3x[ck3x] = AI1x;
                    Hy3x[x] = function (V3x) {
                        return function () {
                            var o2x, bI3x = this.bxn7g[V3x],
                                VH7A = bI3x.prototype[V3x];
                            this.bxn7g[V3x] = bI3x.bVm4q || AI1x;
                            if (!!VH7A) o2x = VH7A.apply(this, arguments);
                            this.bxn7g[V3x] = AI1x;
                            return o2x
                        }
                    }(ck3x)
                }
                Hy3x.bEO9F = function () {
                    this.bxn7g = NEJ.X({}, Fm3x)
                };
                Hy3x.cIZ3x = Hy3x.cF3x;
                return Hy3x
            };
            return fL5Q
        }
    }();
    NEJ.X = function (gq5v, bP3x, dW4a) {
        if (!gq5v || !bP3x) return gq5v;
        dW4a = dW4a || NEJ.F;
        for (var x in bP3x) {
            if (bP3x.hasOwnProperty(x) && !dW4a(bP3x[x], x)) gq5v[x] = bP3x[x]
        }
        return gq5v
    };
    NEJ.EX = function (gq5v, bP3x) {
        if (!gq5v || !bP3x) return gq5v;
        for (var x in gq5v) {
            if (gq5v.hasOwnProperty(x) && bP3x[x] != null) gq5v[x] = bP3x[x]
        }
        return gq5v
    };
    var Ic3x = Function.prototype;
    Ic3x.eC4G = function (lT7M, wm0x) {
        var f = NEJ.F,
            wm0x = wm0x || f,
            lT7M = lT7M || f,
            du4y = this;
        return function () {
            var d2x = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lT7M(d2x);
            if (!d2x.stopped) {
                d2x.value = du4y.apply(this, d2x.args);
                wm0x(d2x)
            }
            return d2x.value
        }
    };
    Ic3x.g2x = function () {
        var bf3x = arguments,
            gq5v = arguments[0],
            bxg7Z = this;
        return function () {
            var wD0x = NEJ.R.slice.call(bf3x, 1);
            NEJ.R.push.apply(wD0x, arguments);
            return bxg7Z.apply(gq5v || window, wD0x)
        }
    };
    Ic3x.ez4D = function () {
        var bf3x = arguments,
            gq5v = NEJ.R.shift.call(bf3x),
            bxg7Z = this;
        return function () {
            NEJ.R.push.apply(arguments, bf3x);
            return bxg7Z.apply(gq5v || window, arguments)
        }
    };
    var Ic3x = String.prototype;
    if (!Ic3x.trim) {
        Ic3x.trim = function () {
            var dg4k = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(dg4k, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        O2x = c2x("nej.p"),
        uw9n = window.navigator.platform,
        uu9l = window.navigator.userAgent;
    var lm7f = {
        mac: uw9n,
        win: uw9n,
        linux: uw9n,
        ipad: uu9l,
        ipod: uu9l,
        iphone: uw9n,
        android: uu9l
    };
    O2x.Id3x = lm7f;
    for (var x in lm7f) lm7f[x] = (new RegExp(x, "i")).test(lm7f[x]);
    lm7f.ios = lm7f.ipad || lm7f.iphone || lm7f.ipod;
    lm7f.tablet = lm7f.ipad;
    lm7f.desktop = lm7f.mac || lm7f.win || lm7f.linux && !lm7f.android;
    var iy5D = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    O2x.ds4w = iy5D;
    if (/msie\s+(.*?);/i.test(uu9l) || /trident\/.+rv:([\d\.]+)/i.test(uu9l)) {
        iy5D.engine = "trident";
        iy5D.browser = "ie";
        iy5D.version = RegExp.$1;
        iy5D.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mD7w = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        iy5D.release = mD7w[document.documentMode] || mD7w[parseInt(iy5D.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(uu9l)) {
        iy5D.engine = "webkit";
        iy5D.release = RegExp.$1 || "";
        iy5D.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(uu9l)) {
        iy5D.engine = "gecko";
        iy5D.release = RegExp.$1 || "";
        iy5D.browser = "firefox";
        iy5D.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(uu9l)) iy5D.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(uu9l)) {
        iy5D.engine = "presto";
        iy5D.release = RegExp.$1 || "";
        iy5D.browser = "opera";
        iy5D.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(uu9l)) iy5D.version = RegExp.$1 || ""
    }
    if (iy5D.browser == "unknow") {
        var mD7w = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mD7w.length, V3x; i < l; i++) {
            V3x = mD7w[i] == "safari" ? "version" : mD7w[i];
            if ((new RegExp(V3x + "/(.*?)(?=\\s|$)", "i")).test(uu9l)) {
                iy5D.browser = mD7w[i];
                iy5D.version = RegExp.$1.trim();
                break
            }
        }
    }
    O2x.bNc1x = {};
    var beK0x = iy5D.engine != "trident";
    O2x.nr7k = {
        gecko: iy5D.engine != "gecko",
        webkit: iy5D.engine != "webkit",
        presto: iy5D.engine != "presto",
        trident0: beK0x || iy5D.release > "2.0",
        trident1: beK0x || iy5D.release < "6.0",
        trident2: beK0x || iy5D.release > "3.0",
        trident: beK0x || iy5D.release >= "6.0"
    }
})();
(function () {
    var iv5A = NEJ.P("nej.c"),
        R3x = {};
    var bxc7V = function () {
        var dg4k = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y3x) {
            Y3x = Y3x || "";
            if (dg4k.test(Y3x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var PY6S = function () {
        var bPy2x = function (i2x, by3x) {
            if (!i2x || !i2x.length) return;
            for (var i = 0, l = i2x.length, jQ6K; i < l; i++) {
                jQ6K = i2x[i];
                if (jQ6K.indexOf("://") > 0) by3x[bxc7V(jQ6K)] = jQ6K
            }
        };
        var bg3x = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function (bP3x) {
            iv5A.Ih3x("root", bP3x.root || "/res/");
            var bwP7I, gd5i = iv5A.B2x("root");
            for (var x in bg3x) {
                bwP7I = bg3x[x];
                iv5A.Ih3x(x, bP3x[bwP7I.name] || gd5i + bwP7I.dft)
            }
            var Cm2x = bP3x.p_csrf;
            if (Cm2x == !0) {
                Cm2x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iv5A.Ih3x("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, Cm2x));
            R3x.frames = {};
            bPy2x(bP3x.p_frame, R3x.frames);
            R3x.flashs = {};
            bPy2x(bP3x.p_flash, R3x.flashs)
        }
    }();
    iv5A.Ih3x = function (J2x, D2x) {
        R3x[J2x] = D2x
    };
    iv5A.B2x = function (J2x) {
        return R3x[J2x]
    };
    iv5A.bVn4r = function (Y3x) {
        var sT9K = bxc7V(Y3x);
        return R3x.frames[sT9K] || sT9K + "/res/nej_proxy_frame.html"
    };
    iv5A.bVo4s = function (Y3x) {
        return R3x.flashs[bxc7V(Y3x)]
    };
    PY6S(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        iv5A = c2x("nej.c"),
        bP3x = window.NEJ_CONF || NEJ.O;
    if (O2x.nr7k.trident) return;
    iv5A.Ih3x("storage.swf", bP3x.storage || iv5A.B2x("root") + "nej_storage.swf");
    if (O2x.ds4w.release < "4.0") {
        iv5A.Ih3x("blank.png", bP3x.blank || iv5A.B2x("root") + "nej_blank.gif")
    }
    var i2x = bP3x.xdr,
        gD5I = /^(https?:\/\/.*?)(?=\/|$)/i,
        ke6Y = /[\/?=&]/i;
    var bKn0x = function (Y3x) {
        return (gD5I.test(Y3x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i2x && !!i2x.length)
        for (var i = i2x.length - 1, Y3x, J2x; i >= 0; i--) {
            Y3x = i2x[i];
            J2x = bKn0x(Y3x);
            if (!!J2x) iv5A.Ih3x(J2x, Y3x)
        }
    iv5A.cIU3x = function (Y3x) {
        var J2x = bKn0x(Y3x);
        if (!J2x) {
            if (ke6Y.test(Y3x)) {
                J2x = location.protocol + "//" + location.host
            } else if (Y3x.indexOf("://") < 0) {
                J2x = location.protocol + "//" + Y3x
            } else {
                J2x = Y3x
            }
        }
        return iv5A.B2x(J2x) || J2x + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c2x = NEJ.P,
        iv5A = c2x("nej.c"),
        O2x = c2x("nej.g"),
        gK5P = +(new Date);
    O2x.cIT3x = 1e4 - gK5P;
    O2x.bwB7u = 10001 - gK5P;
    O2x.cIR3x = 10002 - gK5P;
    O2x.bSX3x = 10003 - gK5P;
    O2x.bVt4x = 10004 - gK5P;
    O2x.cIP3x = 10005 - gK5P;
    O2x.bwn7g = 10006 - gK5P;
    O2x.bVx4B = 10007 - gK5P;
    O2x.yV1x = "Content-Type";
    O2x.cIL3x = "text/plain";
    O2x.Ff3x = "multipart/form-data";
    O2x.bVC4G = "application/x-www-form-urlencoded";
    O2x.bwc7V = iv5A.B2x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c2x = NEJ.P,
        fy5D = NEJ.R,
        O2x = c2x("nej.p"),
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        be3x = c2x("nej.h");
    var kj6d = O2x.ds4w.prefix,
        bPR2x = O2x.bNc1x,
        bVE4I = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        bVL4P = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        PN6H = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var PY6S = function () {
        var tE9v = be3x.bCc8U();
        bPR2x.css3d = !!tE9v && tE9v.m41 != null;
        var dg4k = /-([a-z])/g;
        for (var x in PN6H) {
            PN6H[bCm8e(x)] = PN6H[x]
        }
    };
    var bCm8e = function () {
        var dg4k = /-([a-z])/g;
        return function (V3x) {
            V3x = V3x || "";
            return V3x.replace(dg4k, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bCs9j = function (V3x) {
        return (!bPR2x.css3d ? bVE4I : bVL4P)[V3x]
    };
    var bCO9F = function () {
        var dg4k = /\s+/;
        return function (fL5Q) {
            fL5Q = (fL5Q || "").trim();
            return !!fL5Q ? fL5Q.split(dg4k) : null
        }
    }();
    var ben0x = function (F2x, u2x, fL5Q) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return;
        k2x.bd3x(bCO9F(fL5Q), function (ec4g) {
            F2x.classList[u2x](ec4g)
        })
    };
    be3x.Im3x = function (i2x) {
        return fy5D.slice.call(i2x, 0)
    };
    be3x.bvI7B = function (F2x) {
        return be3x.Im3x(F2x.children)
    };
    be3x.bvF7y = function (F2x, fL5Q) {
        return be3x.Im3x(F2x.getElementsByClassName(fL5Q))
    };
    be3x.bvC7v = function (F2x, Ip3x) {
        ben0x(F2x, "add", Ip3x)
    };
    be3x.bvx7q = function (F2x, Iq3x) {
        ben0x(F2x, "remove", Iq3x)
    };
    be3x.Re6Y = function (F2x, Iq3x, Ip3x) {
        ben0x(F2x, "remove", Iq3x);
        ben0x(F2x, "add", Ip3x)
    };
    be3x.bvr7k = function (F2x, fL5Q) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return !1;
        var i2x = F2x.classList;
        if (!i2x || !i2x.length) return !1;
        return k2x.dj4n(bCO9F(fL5Q), function (ec4g) {
            return i2x.contains(ec4g)
        }) >= 0
    };
    be3x.bvn7g = function (F2x, ec4g) {};
    be3x.bvm7f = function (F2x) {};
    be3x.bvl7e = function (gj5o, oq8i) {
        gj5o.selectionEnd = oq8i.end || 0;
        gj5o.selectionStart = oq8i.start || 0;
        gj5o.focus()
    };
    be3x.bvk7d = function (gj5o) {
        return {
            end: gj5o.selectionEnd,
            start: gj5o.selectionStart
        }
    };
    be3x.bvj7c = function () {
        var EC2x = function (ec4g, d2x) {
            var F2x = h2x.W3x(d2x);
            if (!F2x.value) a2x.x2x(F2x, ec4g)
        };
        var Ir3x = function (ec4g, d2x) {
            a2x.y2x(h2x.W3x(d2x), ec4g)
        };
        return function (F2x, fe4i, ec4g) {
            if (fe4i == 1) {
                h2x.s2x(F2x, "blur", EC2x.g2x(null, ec4g))
            }
            if (fe4i == 1 || fe4i == -1) {
                h2x.s2x(F2x, "focus", Ir3x.g2x(null, ec4g))
            }
        }
    }();
    be3x.bve7X = function (G2x) {
        return (new XMLSerializer).serializeToString(G2x) || ""
    };
    be3x.bvd7W = function (AG1x) {
        var gd5i = (new DOMParser).parseFromString(AG1x, "text/xml").documentElement;
        return gd5i.nodeName == "parsererror" ? null : gd5i
    };
    be3x.buX7Q = function (F2x) {};
    be3x.oe7X = function (F2x) {
        return null
    };
    be3x.buT7M = function (F2x) {
        return null
    };
    be3x.buQ7J = function (dO4S) {};
    be3x.buE7x = function () {
        var bf3x = be3x.Im3x(arguments);
        bf3x[0] = a2x.B2x(bf3x[0]);
        if (!bf3x[0]) return null;
        bf3x[1] = (bf3x[1] || "").toLowerCase();
        if (!bf3x[1]) return null;
        return bf3x
    };
    be3x.AW1x = function () {
        var wt0x = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            jI6C = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bVM4Q = function (u2x) {
            return (kj6d.evt || kj6d.pro) + u2x
        };
        return function () {
            var bf3x = be3x.buE7x.apply(be3x, arguments);
            if (!bf3x) return;
            var bdY0x = jI6C[bf3x[1]],
                bdW0x = wt0x[bf3x[1]];
            if (!!bdY0x) {
                bf3x[4] = bf3x[1];
                bf3x[1] = bVM4Q(bdY0x)
            } else if (!!bdW0x) {
                var V3x = "on" + bf3x[1];
                if (!(V3x in bf3x[0])) {
                    bf3x[4] = bf3x[1];
                    bf3x[1] = bdW0x
                }
            }
            return bf3x
        }
    }();
    be3x.buq7j = function () {
        var bf3x = arguments;
        bf3x[0].addEventListener(bf3x[1], bf3x[2], !!bf3x[3])
    };
    be3x.bdU0x = function () {
        var bf3x = arguments;
        bf3x[0].removeEventListener(bf3x[1], bf3x[2], !!bf3x[3])
    };
    be3x.bub6V = function (F2x, u2x, e2x) {
        var d2x = document.createEvent("Event");
        d2x.initEvent(u2x, !0, !0);
        NEJ.X(d2x, e2x);
        F2x.dispatchEvent(d2x)
    };
    be3x.bCc8U = function () {
        var gD5I = /\((.*?)\)/,
            ke6Y = /\s*,\s*/,
            i2x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bdQ0x = function (tE9v) {
            var ik5p = {};
            if (gD5I.test(tE9v || "")) {
                k2x.bd3x(RegExp.$1.split(ke6Y), function (D2x, r2x) {
                    ik5p[i2x[r2x]] = D2x || ""
                })
            }
            return ik5p
        };
        return function (tE9v) {
            if (!!window.CSSMatrix) return new CSSMatrix(tE9v);
            var V3x = kj6d.clz + "CSSMatrix";
            if (!!window[V3x]) return new window[V3x](tE9v || "");
            return bdQ0x(tE9v)
        }
    }();
    be3x.bGm9d = function () {
        var dg4k = /\{(.*?)\}/g;
        return function (V3x, by3x) {
            by3x = by3x || o;
            var ph8Z = bCs9j(V3x);
            return !ph8Z ? "" : ph8Z.replace(dg4k, function ($1, $2) {
                var bs3x = $2.split("|");
                return by3x[bs3x[0]] || bs3x[1] || "0"
            })
        }
    }();
    be3x.btS6M = function (F2x, V3x, D2x) {
        F2x.style[be3x.bJN0x(V3x)] = D2x
    };
    be3x.bJN0x = function () {
        var dg4k = /^[a-z]/,
            btO6I = kj6d.css;
        var bVN4R = function (V3x) {
            return V3x.replace(dg4k, function ($1) {
                return btO6I + $1.toUpperCase()
            })
        };
        return function (V3x) {
            V3x = bCm8e(V3x);
            var bVT4X = be3x.bWb4f(V3x, PN6H);
            return bVT4X ? bVN4R(V3x) : V3x
        }
    }();
    be3x.bWb4f = function () {
        var dg4k = /^([a-z]+?)[A-Z]/;
        return function (V3x, by3x) {
            if (!by3x[V3x]) {
                if (dg4k.test(V3x)) V3x = RegExp.$1
            }
            return !!by3x[V3x]
        }
    }();
    be3x.bWc4g = function () {
        var dg4k = /\$<(.*?)>/gi,
            btO6I = "-" + kj6d.css.toLowerCase() + "-";
        return function (kl6f) {
            return kl6f.replace(dg4k, function ($1, $2) {
                var eQ4U = $2,
                    bs3x = eQ4U.split("|"),
                    ph8Z = bCs9j(bs3x[0]);
                if (!!ph8Z) {
                    return be3x.bGm9d(bs3x[0], k2x.hx5C(bs3x[1]))
                }
                return !be3x.bWf4j(eQ4U, PN6H) ? eQ4U : btO6I + eQ4U
            })
        }
    }();
    be3x.bWf4j = function (V3x, by3x) {
        return !!by3x[V3x]
    };
    be3x.btD6x = function (ci3x, kl6f) {
        ci3x.textContent = kl6f
    };
    be3x.btB6v = function (ci3x, kl6f) {
        var yE1x = ci3x.sheet,
            bq3x = yE1x.cssRules.length;
        yE1x.insertRule(kl6f, bq3x);
        return yE1x.cssRules[bq3x]
    };
    be3x.cIy3x = function (F2x, e2x) {};
    be3x.bdJ0x = function (bdH0x) {
        return (bdH0x || "").toLowerCase() != "transparent"
    };
    be3x.bWS4W = function (F2x) {};
    be3x.btt6n = function (F2x, V3x) {
        if (!!F2x.getAttribute) return F2x.getAttribute(V3x);
        return ""
    };
    be3x.bdF0x = function (eO4S) {
        a2x.cJ4N(eO4S)
    };
    PY6S()
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.p"),
        be3x = c2x("nej.h");
    if (O2x.nr7k.trident0) return;
    var gK5P = +(new Date);
    R3x = {};
    be3x.bvn7g = be3x.bvn7g.eC4G(function (d2x) {
        d2x.stopped = !0;
        var bf3x = d2x.args,
            C2x = a2x.lK7D(bf3x[0]),
            J2x = "hover-" + C2x;
        if (!C2x || !!R3x[J2x]) return;
        R3x[J2x] = !0;
        h2x.s2x(C2x, "mouseenter", a2x.y2x.g2x(a2x, C2x, bf3x[1]));
        h2x.s2x(C2x, "mouseleave", a2x.x2x.g2x(a2x, C2x, bf3x[1]))
    });
    be3x.bvm7f = function () {
        var cIw3x = function () {};
        return be3x.bvm7f.eC4G(function (d2x) {
            d2x.stopped = !0;
            var F2x = d2x.args[0],
                C2x = "fixed-" + a2x.lK7D(F2x);
            if (!!R3x[C2x]) return;
            var bg3x = {};
            R3x[C2x] = bg3x
        })
    }();
    be3x.buX7Q = be3x.buX7Q.eC4G(function (d2x) {
        d2x.stopped = !0;
        var F2x = d2x.args[0],
            ci3x = F2x.style,
            bFI9z = a2x.ov8n();
        ci3x.width = bFI9z.scrollWidth + "px";
        ci3x.height = bFI9z.scrollHeight + "px"
    });
    be3x.oe7X = be3x.oe7X.eC4G(function (d2x) {
        d2x.stopped = !0;
        var F2x = d2x.args[0],
            lv7o = R3x[F2x.msk];
        if (!lv7o) {
            F2x.msk = gK5P++;
            lv7o = a2x.dh4l("iframe");
            lv7o.style.position = "absolute";
            R3x[F2x.msk] = lv7o
        }
        d2x.value = lv7o;
        var ci3x = lv7o.style;
        ci3x.top = (parseInt(a2x.de4i(F2x, "top")) || 0) + "px";
        ci3x.left = (parseInt(a2x.de4i(F2x, "left")) || 0) + "px";
        ci3x.width = F2x.offsetWidth + "px";
        ci3x.height = F2x.offsetHeight + "px";
        F2x.insertAdjacentElement("beforeBegin", lv7o)
    });
    be3x.buT7M = be3x.buT7M.eC4G(function (d2x) {
        d2x.stopped = !0;
        var lv7o = R3x[d2x.args[0].msk];
        if (!!lv7o) a2x.mn7g(lv7o)
    })
})();
(function () {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        a2x = c2x("nej.e"),
        be3x = c2x("nej.h");
    if (O2x.nr7k.trident1) return;
    be3x.AW1x = function () {
        var wt0x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be3x.AW1x.eC4G(function (d2x) {
            var bf3x = be3x.buE7x.apply(be3x, d2x.args);
            if (!bf3x) {
                d2x.stopped = !0;
                return
            }
            var u2x = wt0x[bf3x[1]];
            if (!!u2x && ("on" + u2x).toLowerCase() in bf3x[0]) {
                bf3x[4] = bf3x[1];
                bf3x[1] = u2x;
                d2x.stopped = !0;
                d2x.value = bf3x
            }
        })
    }();
    be3x.bdJ0x = function (bdH0x) {
        return !0
    };
    be3x.bdF0x = be3x.bdF0x.eC4G(function (d2x) {
        d2x.stopped = !0;
        var eO4S = d2x.args[0];
        a2x.ba3x(eO4S, "display", "none");
        try {
            eO4S.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        O2x = c2x("nej.p"),
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        be3x = c2x("nej.h"),
        btq6k = {};
    if (O2x.nr7k.trident) return;
    be3x.Im3x = be3x.Im3x.eC4G(function (d2x) {
        d2x.stopped = !0;
        var i2x = d2x.args[0];
        if (!i2x) {
            d2x.value = null;
            return
        }
        var r2x = 0,
            o2x = [];
        while (!!i2x[r2x]) {
            o2x.push(i2x[r2x++])
        }
        d2x.value = o2x
    });
    be3x.bvI7B = be3x.bvI7B.eC4G(function (d2x) {
        d2x.stopped = !0;
        var bs3x = [];
        k2x.bd3x(d2x.args[0].childNodes, function (f2x) {
            if (f2x.nodeType == 1) bs3x.push(f2x)
        });
        d2x.value = bs3x
    });
    be3x.bvF7y = be3x.bvF7y.eC4G(function (d2x) {
        var F2x = d2x.args[0];
        if (!!F2x.getElementsByClassName) return;
        d2x.stopped = !0;
        var o2x = [],
            NG5L = new RegExp("(\\s|^)(?:" + d2x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k2x.bd3x(F2x.getElementsByTagName("*"), function (f2x) {
            if (NG5L.test(f2x.className)) o2x.push(f2x)
        });
        d2x.value = o2x
    });
    be3x.bvl7e = be3x.bvl7e.eC4G(function (d2x) {
        var gj5o = d2x.args[0],
            oq8i = d2x.args[1];
        if (gj5o.selectionStart == null) {
            d2x.stopped = !0;
            var db4f = gj5o.createTextRange();
            db4f.collapse(!0);
            db4f.moveStart("character", oq8i.start);
            db4f.moveEnd("character", oq8i.end - oq8i.start);
            db4f.select();
            gj5o.focus()
        }
    });
    be3x.bvk7d = be3x.bvk7d.eC4G(function (d2x) {
        var gj5o = d2x.args[0];
        gj5o.focus();
        if (gj5o.selectionStart == null) {
            d2x.stopped = !0;
            var bNC1x = document.selection.createRange();
            var bPa2x = gj5o.createTextRange();
            bPa2x.moveToBookmark(bNC1x.getBookmark());
            var bto6i = gj5o.createTextRange();
            bto6i.collapse(!0);
            bto6i.setEndPoint("EndToStart", bPa2x);
            var hu5z = bto6i.text.length;
            d2x.value = {
                start: hu5z,
                end: hu5z + bNC1x.text.length
            }
        }
    });
    be3x.bve7X = be3x.bve7X.eC4G(function (d2x) {
        if (!!window.XMLSerializer) return;
        d2x.stopped = !0;
        var F2x = d2x.args[0];
        d2x.value = F2x.xml != null ? F2x.xml : F2x.outHTML
    });
    be3x.bvd7W = function () {
        var NI5N = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bXf4j = function () {
            try {
                for (var i = 0, l = NI5N.length; i < l; i++) return new ActiveXObject(NI5N[i])
            } catch (ex) {
                return null
            }
        };
        return be3x.bvd7W.eC4G(function (d2x) {
            if (!!window.DOMParser) return;
            d2x.stopped = !0;
            var nQ7J = bXf4j();
            if (!!nQ7J && nQ7J.loadXML(d2x.args[0]) && !nQ7J.parseError.errorCode) d2x.value = nQ7J.documentElement
        })
    }();
    be3x.AW1x = function () {
        var jI6C = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jI6C) btq6k[jI6C[x]] = !0;
        var bXk4o = function (F2x, u2x) {
            if ("on" + u2x in F2x) return null;
            return jI6C[u2x] || ""
        };
        var bXm4q = function (u2x, du4y) {
            var cN4R = du4y;
            switch (u2x) {
                case "readystatechange":
                    cN4R = function (d2x) {
                        var F2x = h2x.W3x(d2x) || this;
                        if (F2x.readyState == "loaded" || F2x.readyState == "complete") {
                            d2x.target = F2x;
                            du4y.call(F2x, d2x)
                        }
                    };
                    break;
                case "propertychange":
                    cN4R = function (d2x) {
                        var F2x = h2x.W3x(d2x) || this;
                        if ("value" in F2x && d2x.propertyName == "value") {
                            d2x.target = F2x;
                            du4y.call(F2x, d2x)
                        }
                    };
                    break
            }
            return cN4R
        };
        return be3x.AW1x.eC4G(function (d2x) {
            var bf3x = be3x.buE7x.apply(be3x, d2x.args);
            if (!bf3x) {
                d2x.stopped = !0;
                return
            }
            var u2x = bXk4o(bf3x[0], bf3x[1]);
            if (!!u2x) {
                d2x.stopped = !0;
                bf3x[4] = bf3x[1];
                bf3x[1] = u2x;
                if (!!bf3x[2]) {
                    bf3x[5] = bf3x[2];
                    bf3x[2] = bXm4q(bf3x[1], bf3x[2])
                }
                d2x.value = bf3x
            }
        }, function (d2x) {
            var bf3x = d2x.value;
            if (!bf3x[0] || !k2x.gG5L(bf3x[2])) return;
            if (!k2x.gG5L(bf3x[5])) bf3x[5] = bf3x[2];
            bf3x[2] = bf3x[2].g2x(bf3x[0])
        })
    }();
    be3x.buq7j = be3x.buq7j.eC4G(function (d2x) {
        var bf3x = d2x.args;
        if (!!btq6k[bf3x[1]] || !document.addEventListener) {
            d2x.stopped = !0;
            bf3x[0].attachEvent("on" + bf3x[1], bf3x[2])
        }
    });
    be3x.bdU0x = be3x.bdU0x.eC4G(function (d2x) {
        var bf3x = d2x.args;
        if (!!btq6k[bf3x[1]] || !document.removeEventListener) {
            d2x.stopped = !0;
            bf3x[0].detachEvent("on" + bf3x[1], bf3x[2])
        }
    });
    be3x.bub6V = be3x.bub6V.eC4G(function (d2x) {
        if (!document.createEvent) {
            d2x.stopped = !0;
            var bf3x = d2x.args,
                bUG4K = document.createEventObject();
            NEJ.X(bUG4K, bf3x[2]);
            try {
                bf3x[0].fireEvent("on" + bf3x[1], bUG4K)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be3x.btS6M = be3x.btS6M.eC4G(function (d2x) {
        var bf3x = d2x.args,
            V3x = bf3x[1].toLowerCase();
        if (V3x == "opacity" && !(V3x in document.body.style)) {
            bf3x[1] = "filter";
            bf3x[2] = "alpha(opacity=" + bf3x[2] * 100 + ")"
        }
    });
    be3x.btD6x = function () {
        var fr5w = 30;
        return be3x.btD6x.eC4G(function (d2x) {
            var F2x = d2x.args[0];
            if (!F2x.styleSheet) return;
            d2x.stopped = !0;
            var kl6f = d2x.args[1];
            var i2x = document.styleSheets;
            if (i2x.length > fr5w) {
                F2x = i2x[fr5w];
                kl6f = F2x.cssText + kl6f
            } else {
                F2x = F2x.styleSheet
            }
            F2x.cssText = kl6f
        })
    }();
    be3x.btB6v = be3x.btB6v.eC4G(function (d2x) {
        var bf3x = d2x.args,
            yE1x = bf3x[0].sheet;
        if (!!yE1x) return;
        d2x.stopped = !0;
        var yE1x = bf3x[0].styleSheet,
            bq3x = yE1x.rules.length,
            bs3x = bf3x[1].split(/[\{\}]/);
        yE1x.addRule(bs3x[0], bs3x[1], bq3x);
        d2x.value = yE1x.rules[bq3x]
    });
    be3x.bvj7c = function () {
        var EC2x = function (ec4g, d2x) {
            a2x.x2x(h2x.W3x(d2x), ec4g)
        };
        return be3x.bvj7c.eC4G(function (d2x) {
            if (O2x.ds4w.release >= "4.0") return;
            var bf3x = d2x.args;
            if (bf3x[1] != 1) {
                h2x.s2x(bf3x[0], "blur", EC2x.g2x(null, bf3x[2]));
                bf3x[1] = -1
            }
        })
    }();
    be3x.bdJ0x = function (bdH0x) {
        return !0
    };
    be3x.btt6n = be3x.btt6n.eC4G(function (d2x) {
        var bf3x = d2x.args,
            f2x = (bf3x[0].attributes || bb3x)[bf3x[1]];
        if (!!f2x) {
            d2x.stopped = !0;
            d2x.value = f2x.value
        }
    }, function (d2x) {
        var bf3x = d2x.args;
        if (bf3x[1] == "maxlength" && d2x.value == 2147483647) d2x.value = ""
    });
    if (O2x.ds4w.release < 5) {
        be3x.buQ7J = function () {
            var ei4m, eO4S, kB6v = [],
                btk6e = "cb-" + +(new Date),
                bo3x = '<script>parent.nej.h["' + btk6e + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCu9l = function () {
                ei4m = window.clearTimeout(ei4m);
                if (!kB6v.length) return;
                var dO4S = kB6v.shift();
                try {
                    var xu0x = eO4S.contentWindow.document;
                    xu0x.open();
                    xu0x.write("<head><title>");
                    xu0x.write(document.title);
                    xu0x.write("</title>");
                    xu0x.write(bo3x.replace("#<HASH>", encodeURIComponent(dO4S)));
                    xu0x.write("</head><body></body>");
                    if (location.hostname != document.domain) xu0x.domain = document.domain;
                    xu0x.close();
                    be3x[btk6e] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    kB6v.unshift(dO4S)
                }
                ei4m = window.setTimeout(bCu9l, 50)
            };
            return be3x.buQ7J.eC4G(function (d2x) {
                d2x.stopped = !0;
                var dO4S = d2x.args[0];
                if (!!be3x[btk6e] || !eO4S && !dO4S) return;
                kB6v.push(dO4S);
                if (!eO4S) eO4S = a2x.bdC0x();
                bCu9l()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function () {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        be3x = c2x("nej.h"),
        O2x = c2x("nej.p"),
        bdB0x = O2x.bNc1x;
    if (O2x.nr7k.gecko) return;
    var PY6S = function () {
        bdB0x.css3d = bdB0x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (jb6V, F2x) {
            if (!jb6V || !F2x) return;
            switch (jb6V) {
                case "beforeEnd":
                    this.appendChild(F2x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(F2x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(F2x) : this.insertBefore(F2x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F2x) : this.parentNode.insertBefore(F2x, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bo3x) {
                this.textContent = bo3x
            })
        }
    };
    be3x.AW1x = function () {
        var gD5I = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be3x.AW1x.eC4G(function (d2x) {
            var bf3x = d2x.args;
            if (gD5I.test(bf3x[1] || "")) {
                d2x.stopped = !0;
                d2x.value = bf3x
            }
        })
    }();
    be3x.bWS4W = function () {
        var bXr4v = function (d2x) {
            h2x.bh3x(d2x);
            h2x.W3x(d2x).control.click()
        };
        return function (F2x) {
            h2x.s2x(F2x, "click", bXr4v)
        }
    }();
    PY6S()
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        be3x = c2x("nej.h");
    var bdy0x = function () {
        var mD7w = !!document.body.classList;
        return function () {
            return mD7w
        }
    }();
    var bFF9w = function () {
        var dg4k = /\s+/g;
        return function (fL5Q) {
            fL5Q = (fL5Q || "").trim();
            return !fL5Q ? null : new RegExp("(\\s|^)(?:" + fL5Q.replace(dg4k, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be3x.Re6Y = be3x.Re6Y.eC4G(function (d2x) {
        if (bdy0x()) return;
        d2x.stopped = !0;
        var bf3x = d2x.args,
            F2x = a2x.B2x(bf3x[0]);
        if (!F2x || !bf3x[1] && !bf3x[2]) return;
        var fL5Q = F2x.className || "";
        var Ip3x = " " + (bf3x[2] || ""),
            Iq3x = bFF9w((bf3x[1] || "") + Ip3x);
        !!Iq3x && (fL5Q = fL5Q.replace(Iq3x, "$1"));
        F2x.className = (fL5Q + Ip3x).replace(/\s+/g, " ").trim()
    });
    be3x.bvC7v = be3x.bvC7v.eC4G(function (d2x) {
        if (bdy0x()) return;
        d2x.stopped = !0;
        var bf3x = d2x.args;
        be3x.Re6Y(bf3x[0], "", bf3x[1])
    });
    be3x.bvx7q = be3x.bvx7q.eC4G(function (d2x) {
        if (bdy0x()) return;
        d2x.stopped = !0;
        var bf3x = d2x.args;
        be3x.Re6Y(bf3x[0], bf3x[1], "")
    });
    be3x.bvr7k = be3x.bvr7k.eC4G(function (d2x) {
        if (bdy0x()) return;
        d2x.stopped = !0;
        var bf3x = d2x.args,
            F2x = a2x.B2x(bf3x[0]);
        if (!F2x) {
            d2x.value = !1;
            return
        }
        var dg4k = bFF9w(bf3x[1]);
        d2x.value = !dg4k ? !1 : dg4k.test(F2x.className || "")
    })
})();
(function () {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        be3x = c2x("nej.h");
    if (O2x.nr7k.webkit) return;
    be3x.bdJ0x = function (bdH0x) {
        return !0
    }
})();
(function () {
    var c2x = NEJ.P,
        be3x = c2x("nej.h"),
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        cX4b = c2x("nej.x"),
        R3x = {};
    var bFK9B = function (F2x) {
        F2x = a2x.B2x(F2x);
        if (!F2x || !R3x[F2x.id]) return;
        var bdx0x = !0,
            C2x = F2x.id;
        k2x.eE4I(R3x[C2x], function () {
            bdx0x = !1;
            return !0
        });
        if (bdx0x) delete R3x[C2x]
    };
    h2x.s2x = cX4b.s2x = function () {
        var bXZ4d = function () {
            var bf3x = be3x.AW1x.apply(be3x, arguments);
            if (!bf3x || !bf3x[2]) return;
            var vM0x = a2x.lK7D(bf3x[0]),
                po8g = R3x[vM0x] || {};
            R3x[vM0x] = po8g;
            vM0x = bf3x[4] || bf3x[1];
            var Dh2x = po8g[vM0x] || [];
            po8g[vM0x] = Dh2x;
            Dh2x.push({
                type: bf3x[1],
                func: bf3x[2],
                capt: !!bf3x[3],
                sfun: bf3x[5] || bf3x[2]
            });
            return bf3x.slice(0, 4)
        };
        return function () {
            var bf3x = bXZ4d.apply(null, arguments);
            if (!!bf3x) be3x.buq7j.apply(be3x, bf3x);
            return this
        }
    }();
    h2x.mv7o = cX4b.mv7o = function () {
        var bYa4e = function () {
            var wD0x = arguments,
                vM0x = a2x.lK7D(wD0x[0]),
                po8g = R3x[vM0x],
                u2x = (wD0x[1] || "").toLowerCase(),
                d2x = wD0x[2];
            if (!po8g || !u2x || !d2x) return;
            po8g = po8g[u2x];
            if (!po8g) return;
            var bYc4g = !!wD0x[3],
                r2x = k2x.dj4n(po8g, function (jI6C) {
                    return d2x == jI6C.sfun && bYc4g == jI6C.capt
                });
            if (r2x < 0) return;
            var jI6C = po8g.splice(r2x, 1)[0];
            return !jI6C ? null : [a2x.B2x(vM0x), jI6C.type, jI6C.func, jI6C.capt]
        };
        return function () {
            var bf3x = bYa4e.apply(null, arguments);
            if (!!bf3x) {
                be3x.bdU0x.apply(be3x, bf3x);
                bFK9B(bf3x[0])
            }
            return this
        }
    }();
    h2x.hg5l = cX4b.hg5l = function () {
        var bKO1x = function () {
            var wD0x = arguments,
                vM0x = a2x.lK7D(wD0x[0]),
                po8g = R3x[vM0x],
                Dh2x = (wD0x[1] || "").toLowerCase();
            if (!po8g || !Dh2x) return;
            var F2x = a2x.B2x(vM0x);
            k2x.nx7q(po8g[Dh2x], function (jI6C, r2x, i2x) {
                be3x.bdU0x(F2x, jI6C.type, jI6C.func, jI6C.capt);
                i2x.splice(r2x, 1)
            });
            delete po8g[Dh2x]
        };
        var bYf4j = function (F2x) {
            F2x = a2x.B2x(F2x);
            if (!F2x) return;
            var C2x = F2x.id;
            k2x.eE4I(R3x[C2x], function (i2x, u2x) {
                bKO1x(C2x, u2x)
            });
            delete R3x[C2x]
        };
        return function (F2x, u2x) {
            !u2x ? bYf4j(F2x) : bKO1x(F2x, u2x);
            bFK9B(F2x);
            return this
        }
    }();
    h2x.W3x = function () {
        var bsR6L;
        var Ib3x = function (V3x, F2x) {
            var bs3x = V3x.split(":");
            if (bs3x.length > 1) {
                if (!bsR6L) bsR6L = {
                    c: a2x.bF3x,
                    d: a2x.t2x,
                    a: a2x.gx5C
                };
                var ID3x = bsR6L[bs3x[0]];
                if (!!ID3x) return !!ID3x(F2x, bs3x[1]);
                V3x = bs3x[1]
            }
            return !!a2x.gx5C(F2x, V3x) || !!a2x.t2x(F2x, V3x) || a2x.bF3x(F2x, V3x)
        };
        return function (d2x) {
            if (!d2x) return null;
            var F2x = d2x.target || d2x.srcElement,
                dW4a = arguments[1];
            if (!dW4a) return F2x;
            if (k2x.fF5K(dW4a)) dW4a = Ib3x.g2x(null, dW4a);
            if (k2x.gG5L(dW4a)) {
                while (F2x) {
                    if (!!dW4a(F2x)) return F2x;
                    F2x = F2x.parentNode
                }
                return null
            }
            return F2x
        }
    }();
    h2x.bh3x = function (d2x) {
        h2x.sX9O(d2x);
        h2x.cr3x(d2x);
        return this
    };
    h2x.sX9O = function (d2x) {
        if (!!d2x) {
            !!d2x.stopPropagation ? d2x.stopPropagation() : d2x.cancelBubble = !0
        }
        return this
    };
    h2x.cr3x = function (d2x) {
        if (!!d2x) {
            !!d2x.preventDefault ? d2x.preventDefault() : d2x.returnValue = !1
        }
        return this
    };
    h2x.cIm3x = function () {
        var qx8p = !1;
        var bYs5x = function () {
            if (qx8p) return;
            qx8p = !0;
            h2x.s2x(document, "click", bYU5Z, !0)
        };
        var bYU5Z = function (d2x) {
            var F2x = h2x.W3x(d2x),
                bYV5a = a2x.t2x(F2x, "stopped");
            if (bYV5a == "true") {
                h2x.bh3x(d2x);
                a2x.t2x(F2x, "stopped", "false")
            }
        };
        return function (d2x) {
            if (!d2x) return;
            if (d2x.type == "click") {
                h2x.bh3x(d2x);
                return
            }
            bYs5x();
            a2x.t2x(h2x.W3x(d2x), "stopped", "true")
        }
    }();
    h2x.jy6s = function (d2x) {
        return d2x.pageX != null ? d2x.pageX : d2x.clientX + a2x.ov8n().scrollLeft
    };
    h2x.lY7R = function (d2x) {
        return d2x.pageY != null ? d2x.pageY : d2x.clientY + a2x.ov8n().scrollTop
    };
    h2x.z2x = cX4b.z2x = function (F2x, u2x, e2x) {
        var bf3x = be3x.AW1x(F2x, u2x);
        if (!!bf3x) be3x.bub6V(bf3x[0], bf3x[1], e2x);
        return this
    };
    c2x("dbg").dumpEV = function () {
        return R3x
    };
    cX4b.isChange = !0
})();
(function () {
    var o = !0,
        w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                        toString: 1
                    }, f).toString != m) p = function (a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function (a, f) {
                var c = 0,
                    b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function (a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function (a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function () {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function (a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function (a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c2x = NEJ.P,
        O2x = c2x("nej.p");
    if (O2x.nr7k.trident0) return;
    JSON.parse = JSON.parse.eC4G(function (d2x) {
        var cK4O = d2x.args[0] || "";
        if (cK4O.length >= 5e5) {
            d2x.stopped = !0;
            d2x.value = eval("(" + cK4O + ")")
        }
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        eo4s = c2x("nej.g"),
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        be3x = c2x("nej.h"),
        cX4b = c2x("nej.x"),
        IF4J, bsI6C = {},
        R3x = document.createDocumentFragment();
    a2x.lK7D = cX4b.lK7D = function (F2x) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return;
        var C2x = !!F2x.id ? F2x.id : "auto-id-" + k2x.OH5M(16);
        F2x.id = C2x;
        if (a2x.B2x(C2x) != F2x) bsI6C[C2x] = F2x;
        return C2x
    };
    a2x.B2x = cX4b.B2x = function (F2x) {
        var f2x = bsI6C["" + F2x];
        if (!!f2x) return f2x;
        if (!k2x.fF5K(F2x) && !k2x.wY0x(F2x)) return F2x;
        return document.getElementById(F2x)
    };
    a2x.dk4o = cX4b.dk4o = function (F2x, ec4g) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return null;
        var i2x = be3x.bvI7B(F2x);
        if (!!ec4g) k2x.nx7q(i2x, function (f2x, r2x) {
            if (!a2x.bF3x(f2x, ec4g)) i2x.splice(r2x, 1)
        });
        return i2x
    };
    a2x.H2x = cX4b.H2x = function (F2x, fL5Q) {
        F2x = a2x.B2x(F2x);
        return !F2x ? null : be3x.bvF7y(F2x, fL5Q.trim())
    };
    a2x.bFo9f = cX4b.bFo9f = function (F2x) {
        F2x = a2x.B2x(F2x);
        if (!!F2x) {
            F2x = F2x.parentNode;
            while (!!F2x) {
                if (F2x.scrollHeight > F2x.clientHeight) break;
                F2x = F2x.parentNode
            }
            if (!!F2x) return F2x
        }
        var po8g = document.body.scrollHeight,
            Dh2x = document.documentElement.scrollHeight;
        return Dh2x >= po8g ? document.documentElement : document.body
    };
    a2x.ov8n = function () {
        var bFE9v = function (i2x) {
            var o2x = 0;
            k2x.bd3x(i2x, function (eG4K) {
                if (!eG4K) return;
                if (!o2x) {
                    o2x = eG4K
                } else {
                    o2x = Math.min(o2x, eG4K)
                }
            });
            return o2x
        };
        return function (xu0x) {
            var IG4K = xu0x || document,
                CI2x = IG4K.body,
                CH2x = IG4K.documentElement,
                o2x = {
                    scrollTop: Math.max(CI2x.scrollTop, CH2x.scrollTop),
                    scrollLeft: Math.max(CI2x.scrollLeft, CH2x.scrollLeft),
                    clientWidth: bFE9v([CI2x.clientWidth, CI2x.offsetWidth, CH2x.clientWidth, CH2x.offsetWidth]),
                    clientHeight: bFE9v([CI2x.clientHeight, CI2x.offsetHeight, CH2x.clientHeight, CH2x.offsetHeight])
                };
            o2x.scrollWidth = Math.max(o2x.clientWidth, CI2x.scrollWidth, CH2x.scrollWidth);
            o2x.scrollHeight = Math.max(o2x.clientHeight, CI2x.scrollHeight, CH2x.scrollHeight);
            return o2x
        }
    }();
    a2x.cIg3x = function (fr5w, pl8d) {
        var o2x = NEJ.X({}, pl8d),
            bIs0x = fr5w.width / fr5w.height,
            bdo0x = pl8d.width / pl8d.height;
        if (bIs0x > bdo0x && pl8d.height > fr5w.height) {
            o2x.height = fr5w.height;
            o2x.width = o2x.height * bdo0x
        }
        if (bIs0x < bdo0x && pl8d.width > fr5w.width) {
            o2x.width = fr5w.width;
            o2x.height = o2x.width / bdo0x
        }
        return o2x
    };
    a2x.cIf3x = function () {
        var dg4k = /\s+/;
        var vX0x = {
            left: function () {
                return 0
            },
            center: function (hz5E, pl8d) {
                return (hz5E.width - pl8d.width) / 2
            },
            right: function (hz5E, pl8d) {
                return hz5E.width - pl8d.width
            },
            top: function () {
                return 0
            },
            middle: function (hz5E, pl8d) {
                return (hz5E.height - pl8d.height) / 2
            },
            bottom: function (hz5E, pl8d) {
                return hz5E.height - pl8d.height
            }
        };
        return function (hz5E, pl8d, oh8Z) {
            var o2x = {},
                bs3x = (oh8Z || "").split(dg4k),
                gy5D = vX0x[bs3x[1]] || vX0x.middle,
                gU5Z = vX0x[bs3x[0]] || vX0x.center;
            o2x.top = gy5D(hz5E, pl8d);
            o2x.left = gU5Z(hz5E, pl8d);
            return o2x
        }
    }();
    a2x.ti9Z = cX4b.ti9Z = function (F2x, ec4g) {
        be3x.bvn7g(F2x, ec4g || a2x.t2x(F2x, "hover") || "js-hover");
        return this
    };
    a2x.IJ4N = cX4b.IJ4N = function (F2x) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return;
        be3x.bvm7f(F2x)
    };
    a2x.bZB5G = cX4b.bZB5G = function () {
        var R3x = {},
            bLF1x = 2;
        var cad5i = function (C2x, ec4g, d2x) {
            R3x[C2x] = [h2x.jy6s(d2x), h2x.lY7R(d2x)];
            a2x.y2x(C2x, ec4g)
        };
        var caj5o = function (C2x, ec4g, d2x) {
            var bM3x = R3x[C2x];
            if (!k2x.eJ4N(bM3x)) return;
            var cat5y = Math.abs(h2x.jy6s(d2x) - bM3x[0]),
                cav5A = Math.abs(h2x.lY7R(d2x) - bM3x[1]);
            if (cat5y > bLF1x || cav5A > bLF1x) bsj6d(C2x, ec4g)
        };
        var bsj6d = function (C2x, ec4g) {
            if (k2x.eJ4N(R3x[C2x])) {
                R3x[C2x] = -1;
                a2x.x2x(C2x, ec4g)
            }
        };
        return function (F2x, ec4g) {
            var C2x = a2x.lK7D(F2x);
            if (!C2x || R3x[C2x] != null) return;
            R3x[C2x] = -1;
            ec4g = ec4g || a2x.t2x(C2x, "highlight") || "js-highlight";
            h2x.s2x(C2x, "touchstart", cad5i.g2x(null, C2x, ec4g));
            h2x.s2x(document, "touchmove", caj5o.g2x(null, C2x, ec4g));
            h2x.s2x(document, "touchend", bsj6d.g2x(null, C2x, ec4g));
            h2x.s2x(document, "touchcancel", bsj6d.g2x(null, C2x, ec4g))
        }
    }();
    a2x.Cr2x = cX4b.Cr2x = function () {
        var caL5Q = function (C2x, ec4g, caM5R) {
            var F2x = a2x.B2x(C2x),
                d2x = {
                    clazz: ec4g,
                    target: F2x
                };
            if (a2x.bF3x(F2x, ec4g)) {
                d2x.toggled = !1;
                a2x.x2x(F2x, ec4g)
            } else {
                d2x.toggled = !0;
                a2x.y2x(F2x, ec4g)
            }
            caM5R.call(null, d2x)
        };
        return function (F2x, e2x) {
            F2x = a2x.B2x(F2x);
            if (!!F2x) {
                var ik5p = {
                    ontoggle: br3x,
                    clazz: "js-toggle",
                    element: F2x.parentNode
                };
                if (k2x.fF5K(e2x)) {
                    var f2x = a2x.B2x(e2x);
                    !!f2x ? ik5p.element = f2x : ik5p.clazz = e2x
                } else {
                    NEJ.EX(ik5p, e2x);
                    ik5p.element = a2x.B2x(ik5p.element)
                }
                var C2x = a2x.lK7D(ik5p.element);
                h2x.s2x(F2x, "click", caL5Q.g2x(null, C2x, ik5p.clazz, ik5p.ontoggle || br3x))
            }
            return this
        }
    }();
    a2x.my7r = cX4b.my7r = function (F2x, e2x) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return;
        var fe4i = 0,
            ec4g = "js-focus";
        if (k2x.wY0x(e2x)) {
            fe4i = e2x
        } else if (k2x.fF5K(e2x)) {
            ec4g = e2x
        } else if (k2x.lG7z(e2x)) {
            fe4i = e2x.mode || fe4i;
            ec4g = e2x.clazz || ec4g
        }
        var D2x = parseInt(a2x.t2x(F2x, "mode"));
        if (!isNaN(D2x)) fe4i = D2x;
        D2x = a2x.t2x(F2x, "focus");
        if (!!D2x) ec4g = D2x;
        be3x.bvj7c(F2x, fe4i, ec4g);
        return this
    };
    a2x.dh4l = function () {
        var by3x = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function (fv5A, fL5Q, bI3x) {
            var F2x = document.createElement(fv5A);
            NEJ.X(F2x, by3x[fv5A.toLowerCase()]);
            if (!!fL5Q) F2x.className = fL5Q;
            bI3x = a2x.B2x(bI3x);
            if (!!bI3x) bI3x.appendChild(F2x);
            return F2x
        }
    }();
    a2x.bdC0x = function () {
        var cbu5z = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cbW5b = function (V3x) {
            V3x = V3x.trim();
            if (!V3x) return a2x.dh4l("iframe");
            var eO4S;
            try {
                eO4S = document.createElement('<iframe name="' + V3x + '"></iframe>');
                eO4S.frameBorder = 0
            } catch (e) {
                eO4S = a2x.dh4l("iframe");
                eO4S.name = V3x
            }
            return eO4S
        };
        return function (e2x) {
            e2x = e2x || bb3x;
            var eO4S = cbW5b(e2x.name || "");
            if (!e2x.visible) eO4S.style.display = "none";
            if (k2x.gG5L(e2x.onload)) h2x.s2x(eO4S, "load", function (d2x) {
                if (!eO4S.src) return;
                h2x.hg5l(eO4S, "load");
                e2x.onload(d2x)
            });
            var bI3x = e2x.parent;
            if (k2x.gG5L(bI3x)) {
                try {
                    bI3x(eO4S)
                } catch (e) {}
            } else {
                (a2x.B2x(bI3x) || document.body).appendChild(eO4S)
            }
            var cR4V = e2x.src || cbu5z();
            window.setTimeout(function () {
                eO4S.src = cR4V
            }, 0);
            return eO4S
        }
    }();
    a2x.cJ4N = cX4b.cJ4N = function () {
        var bTU4Y = function (zC1x) {
            zC1x.src = eo4s.bwc7V
        };
        var bUL4P = function (ej4n) {
            ej4n.src = "about:blank"
        };
        return function (F2x, cco5t) {
            F2x = a2x.B2x(F2x);
            if (!F2x) return this;
            if (!cco5t) h2x.hg5l(F2x);
            delete bsI6C[F2x.id];
            var fv5A = F2x.tagName;
            if (fv5A == "IFRAME") {
                bUL4P(F2x)
            } else if (fv5A == "IMG") {
                bTU4Y(F2x)
            } else if (!!F2x.getElementsByTagName) {
                k2x.bd3x(F2x.getElementsByTagName("img"), bTU4Y);
                k2x.bd3x(F2x.getElementsByTagName("iframe"), bUL4P)
            }
            if (!!F2x.parentNode) {
                F2x.parentNode.removeChild(F2x)
            }
            return this
        }
    }();
    a2x.mn7g = cX4b.mn7g = function (F2x) {
        F2x = a2x.B2x(F2x);
        if (!!F2x) R3x.appendChild(F2x);
        return this
    };
    a2x.byi7b = cX4b.byi7b = function (F2x) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return;
        k2x.nx7q(F2x.childNodes, function (f2x) {
            a2x.cJ4N(f2x)
        })
    };
    a2x.IN4R = cX4b.IN4R = function () {
        var ec4g, gD5I = /\s+/;
        var ccz6t = function () {
            if (!!ec4g) return;
            ec4g = a2x.tw9n(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a2x.bAr8j()
        };
        return function (F2x, e2x) {
            F2x = a2x.B2x(F2x);
            if (!F2x) return;
            ccz6t();
            e2x = e2x || bb3x;
            var bI3x = F2x.parentNode;
            if (!a2x.bF3x(bI3x, ec4g)) {
                bI3x = a2x.dh4l("span", ec4g);
                F2x.insertAdjacentElement("beforeBegin", bI3x);
                bI3x.appendChild(F2x)
            }
            var bBA8s = e2x.nid || "",
                f2x = a2x.H2x(bI3x, bBA8s || ec4g + "-show")[0];
            if (!f2x) {
                var dZ4d = ((e2x.clazz || "") + " " + bBA8s).trim();
                dZ4d = ec4g + "-show" + (!dZ4d ? "" : " ") + dZ4d;
                f2x = a2x.dh4l(e2x.tag || "span", dZ4d);
                bI3x.appendChild(f2x)
            }
            var dZ4d = e2x.clazz;
            if (!!dZ4d) {
                dZ4d = (dZ4d || "").trim().split(gD5I)[0] + "-parent";
                a2x.y2x(bI3x, dZ4d)
            }
            return f2x
        }
    }();
    a2x.t2x = cX4b.t2x = function () {
        var brV6P = {},
            fv5A = "data-",
            dg4k = /\-(.{1})/gi;
        var Ef2x = function (F2x) {
            var C2x = a2x.lK7D(F2x);
            if (!!brV6P[C2x]) return;
            var by3x = {};
            k2x.bd3x(F2x.attributes, function (f2x) {
                var J2x = f2x.nodeName;
                if (J2x.indexOf(fv5A) != 0) return;
                J2x = J2x.replace(fv5A, "").replace(dg4k, function ($1, $2) {
                    return $2.toUpperCase()
                });
                by3x[J2x] = f2x.nodeValue || ""
            });
            brV6P[C2x] = by3x
        };
        return function (F2x, J2x, D2x) {
            F2x = a2x.B2x(F2x);
            if (!F2x) return null;
            var bdh0x = F2x.dataset;
            if (!bdh0x) {
                Ef2x(F2x);
                bdh0x = brV6P[F2x.id]
            }
            if (D2x !== undefined) bdh0x[J2x] = D2x;
            return bdh0x[J2x]
        }
    }();
    a2x.gx5C = cX4b.gx5C = function (F2x, V3x, D2x) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return "";
        if (D2x !== undefined && !!F2x.setAttribute) F2x.setAttribute(V3x, D2x);
        return be3x.btt6n(F2x, V3x)
    };
    a2x.nK7D = function (dR4V) {
        var rv9m = document.createElement("div");
        rv9m.innerHTML = dR4V;
        var i2x = a2x.dk4o(rv9m);
        return i2x.length > 1 ? rv9m : i2x[0]
    };
    a2x.ccS6M = cX4b.ccS6M = function (F2x) {
        F2x = a2x.B2x(F2x);
        return !F2x ? "" : be3x.bve7X(F2x)
    };
    a2x.bEj9a = function (AG1x) {
        AG1x = (AG1x || "").trim();
        return !AG1x ? null : be3x.bvd7W(AG1x)
    };
    a2x.cdp6j = function (cG3x, u2x) {
        cG3x = cG3x || "";
        switch (u2x) {
            case "xml":
                cG3x = a2x.bEj9a(cG3x);
                break;
            case "json":
                try {
                    cG3x = JSON.parse(cG3x)
                } catch (ex) {
                    cG3x = null
                }
                break
        }
        return cG3x
    };
    a2x.hN5S = cX4b.hN5S = function () {
        var cea6U = function (F2x) {
            return F2x == document.body || F2x == document.documentElement
        };
        return function (eb4f, mZ7S) {
            eb4f = a2x.B2x(eb4f);
            if (!eb4f) return null;
            mZ7S = a2x.B2x(mZ7S) || null;
            var o2x = {
                    x: 0,
                    y: 0
                },
                brF6z, dp4t, bdb0x;
            while (!!eb4f && eb4f != mZ7S) {
                brF6z = cea6U(eb4f);
                dp4t = brF6z ? 0 : eb4f.scrollLeft;
                bdb0x = parseInt(a2x.de4i(eb4f, "borderLeftWidth")) || 0;
                o2x.x += eb4f.offsetLeft + bdb0x - dp4t;
                dp4t = brF6z ? 0 : eb4f.scrollTop;
                bdb0x = parseInt(a2x.de4i(eb4f, "borderTopWidth")) || 0;
                o2x.y += eb4f.offsetTop + bdb0x - dp4t;
                eb4f = eb4f.offsetParent
            }
            return o2x
        }
    }();
    a2x.mX7Q = cX4b.mX7Q = function (F2x) {
        var bi3x = a2x.hN5S(F2x);
        window.scrollTo(bi3x.x, bi3x.y);
        return this
    };
    a2x.cHE3x = function (tE9v) {
        tE9v = (tE9v || "").trim();
        return be3x.bCc8U(tE9v)
    };
    a2x.cee6Y = cX4b.cee6Y = function (F2x, V3x, by3x) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return this;
        var D2x = be3x.bGm9d(V3x, by3x);
        if (!D2x) return this;
        a2x.ba3x(F2x, "transform", D2x);
        return this
    };
    a2x.fb4f = cX4b.fb4f = function (F2x, by3x) {
        F2x = a2x.B2x(F2x);
        if (!!F2x) k2x.eE4I(by3x, function (D2x, V3x) {
            a2x.ba3x(F2x, V3x, D2x)
        });
        return this
    };
    a2x.cey6s = cX4b.cey6s = function (gj5o, e2x) {
        gj5o = a2x.B2x(gj5o);
        if (!gj5o) return {
            start: 0,
            end: 0
        };
        if (k2x.wY0x(e2x)) e2x = {
            start: e2x,
            end: e2x
        };
        if (e2x != null) {
            if (e2x.end == null) e2x.end = e2x.start || 0;
            be3x.bvl7e(gj5o, e2x)
        } else {
            e2x = be3x.bvk7d(gj5o)
        }
        return e2x
    };
    a2x.ba3x = cX4b.ba3x = function (F2x, V3x, D2x) {
        F2x = a2x.B2x(F2x);
        if (!!F2x) be3x.btS6M(F2x, V3x, D2x);
        return this
    };
    a2x.de4i = cX4b.de4i = function (F2x, V3x) {
        F2x = a2x.B2x(F2x);
        if (!F2x) return "";
        var hk5p = !window.getComputedStyle ? F2x.currentStyle || bb3x : window.getComputedStyle(F2x, null);
        return hk5p[be3x.bJN0x(V3x)] || ""
    };
    a2x.bIy0x = function () {
        var dg4k = /[\s\r\n]+/gi;
        return function (ci3x) {
            ci3x = (ci3x || "").trim().replace(dg4k, " ");
            if (!ci3x) return;
            var f2x = a2x.dh4l("style");
            document.head.appendChild(f2x);
            be3x.btD6x(f2x, be3x.bWc4g(ci3x));
            return f2x
        }
    }();
    a2x.bIS0x = function (yh0x) {
        try {
            yh0x = yh0x.trim();
            if (!!yh0x) return (new Function(yh0x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a2x.tw9n = function () {
        var dg4k = /#<.*?>/g,
            gK5P = +(new Date);
        return function (kl6f) {
            if (!IF4J) IF4J = [];
            var fL5Q = "auto-" + gK5P++;
            IF4J.push(kl6f.replace(dg4k, fL5Q));
            return fL5Q
        }
    }();
    a2x.bAr8j = function () {
        if (!!IF4J) {
            a2x.bIy0x(IF4J.join(""));
            IF4J = null
        }
        return this
    };
    a2x.cHB3x = function (ci3x, kl6f) {
        ci3x = a2x.B2x(ci3x);
        return !ci3x ? null : be3x.btB6v(ci3x, kl6f)
    };
    a2x.y2x = cX4b.y2x = function () {
        be3x.bvC7v.apply(be3x, arguments);
        return this
    };
    a2x.x2x = cX4b.x2x = function () {
        be3x.bvx7q.apply(be3x, arguments);
        return this
    };
    a2x.fk4o = cX4b.fk4o = function () {
        be3x.Re6Y.apply(be3x, arguments);
        return this
    };
    a2x.bF3x = cX4b.bF3x = function () {
        return be3x.bvr7k.apply(be3x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cX4b.isChange = !0
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        fy5D = NEJ.R,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        be3x = c2x("nej.h"),
        k2x = c2x("nej.u");
    var HJ3x = function (j2x, u2x) {
        try {
            u2x = u2x.toLowerCase();
            if (j2x === null) return u2x == "null";
            if (j2x === undefined) return u2x == "undefined";
            return bb3x.toString.call(j2x).toLowerCase() == "[object " + u2x + "]"
        } catch (e) {
            return !1
        }
    };
    k2x.gG5L = function (j2x) {
        return HJ3x(j2x, "function")
    };
    k2x.fF5K = function (j2x) {
        return HJ3x(j2x, "string")
    };
    k2x.wY0x = function (j2x) {
        return HJ3x(j2x, "number")
    };
    k2x.cHA3x = function (j2x) {
        return HJ3x(j2x, "boolean")
    };
    k2x.Ea2x = function (j2x) {
        return HJ3x(j2x, "date")
    };
    k2x.eJ4N = function (j2x) {
        return HJ3x(j2x, "array")
    };
    k2x.lG7z = function (j2x) {
        return HJ3x(j2x, "object")
    };
    k2x.fw5B = function () {
        var dg4k = /[^\x00-\xfff]/g;
        return function (bo3x) {
            return ("" + (bo3x || "")).replace(dg4k, "**").length
        }
    }();
    k2x.dj4n = function (i2x, p2x) {
        var dW4a = k2x.gG5L(p2x) ? p2x : function (D2x) {
                return D2x === p2x
            },
            r2x = k2x.eE4I(i2x, dW4a);
        return r2x != null ? r2x : -1
    };
    k2x.cHw3x = function () {
        var bLz1x;
        var PI6C = function (i2x, pg8Y, pf8X) {
            if (pg8Y > pf8X) return -1;
            var Ga3x = Math.ceil((pg8Y + pf8X) / 2),
                o2x = bLz1x(i2x[Ga3x], Ga3x, i2x);
            if (o2x == 0) return Ga3x;
            if (o2x < 0) return PI6C(i2x, pg8Y, Ga3x - 1);
            return PI6C(i2x, Ga3x + 1, pf8X)
        };
        return function (i2x, ID3x) {
            bLz1x = ID3x || br3x;
            return PI6C(i2x, 0, i2x.length - 1)
        }
    }();
    k2x.nx7q = function (i2x, cN4R, P2x) {
        if (!i2x || !i2x.length || !k2x.gG5L(cN4R)) return null;
        for (var i = i2x.length - 1; i >= 0; i--)
            if (!!cN4R.call(P2x, i2x[i], i, i2x)) return i;
        return null
    };
    k2x.bd3x = function (i2x, cN4R, P2x) {
        if (!i2x || !i2x.length || !k2x.gG5L(cN4R)) return this;
        if (!!i2x.forEach) {
            i2x.forEach(cN4R, P2x);
            return this
        }
        for (var i = 0, l = i2x.length; i < l; i++) cN4R.call(P2x, i2x[i], i, i2x);
        return this
    };
    k2x.eE4I = function (i2x, cN4R, P2x) {
        if (!i2x || !k2x.gG5L(cN4R)) return null;
        if (i2x.length != null) {
            if (i2x.length > 0)
                for (var i = 0, l = i2x.length; i < l; i++)
                    if (!!cN4R.call(P2x, i2x[i], i, i2x)) return i
        }
        if (k2x.lG7z(i2x)) {
            for (var x in i2x)
                if (i2x.hasOwnProperty(x) && !!cN4R.call(P2x, i2x[x], x, i2x)) return x
        }
        return null
    };
    k2x.cfh6b = function (ji6c, cfl6f, e2x) {
        ji6c = ji6c || [];
        e2x = e2x || bb3x;
        var bPJ2x = !!e2x.union,
            wn0x = !!e2x.begin,
            bcJ0x = e2x.compare,
            cfE6y = bPJ2x && wn0x ? k2x.nx7q : k2x.bd3x;
        cfE6y(cfl6f, function (p2x) {
            if (!!bcJ0x) bcJ0x = bcJ0x.ez4D(p2x);
            var r2x = k2x.dj4n(ji6c, bcJ0x || p2x);
            if (r2x >= 0) ji6c.splice(r2x, 1);
            if (bPJ2x) ji6c[wn0x ? "unshift" : "push"](p2x)
        });
        return ji6c
    };
    k2x.BS2x = function (by3x, bo3x) {
        if (!by3x || !bo3x || !bo3x.replace) return bo3x || "";
        return bo3x.replace(by3x.r, function ($1) {
            var o2x = by3x[!by3x.i ? $1.toLowerCase() : $1];
            return o2x != null ? o2x : $1
        })
    };
    k2x.dG4K = function () {
        var by3x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bo3x) {
            return k2x.BS2x(by3x, bo3x)
        }
    }();
    k2x.BR2x = function () {
        var by3x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bo3x) {
            return k2x.BS2x(by3x, bo3x)
        }
    }();
    k2x.hW5b = function () {
        var by3x = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            cfR6L = ["上午", "下午"],
            cfW6Q = ["A.M.", "P.M."],
            bqz6t = ["日", "一", "二", "三", "四", "五", "六"],
            cgd6X = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cgJ7C = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var QI6C = function (gV5a) {
            gV5a = parseInt(gV5a) || 0;
            return (gV5a < 10 ? "0" : "") + gV5a
        };
        var cgL7E = function (pU8M) {
            return pU8M < 12 ? 0 : 1
        };
        return function (bA3x, IZ4d, cgW7P) {
            if (!bA3x || !IZ4d) return "";
            bA3x = k2x.bcx0x(bA3x);
            by3x.yyyy = bA3x.getFullYear();
            by3x.yy = ("" + by3x.yyyy).substr(2);
            by3x.M = bA3x.getMonth() + 1;
            by3x.MM = QI6C(by3x.M);
            by3x.eM = cgJ7C[by3x.M - 1];
            by3x.cM = cgd6X[by3x.M - 1];
            by3x.d = bA3x.getDate();
            by3x.dd = QI6C(by3x.d);
            by3x.H = bA3x.getHours();
            by3x.HH = QI6C(by3x.H);
            by3x.m = bA3x.getMinutes();
            by3x.mm = QI6C(by3x.m);
            by3x.s = bA3x.getSeconds();
            by3x.ss = QI6C(by3x.s);
            by3x.ms = bA3x.getMilliseconds();
            by3x.w = bqz6t[bA3x.getDay()];
            var bzL8D = cgL7E(by3x.H);
            by3x.ct = cfR6L[bzL8D];
            by3x.et = cfW6Q[bzL8D];
            if (!!cgW7P) {
                by3x.H = by3x.H % 12
            }
            return k2x.BS2x(by3x, IZ4d)
        }
    }();
    k2x.bcx0x = function (bA3x) {
        var cY4c = bA3x;
        if (k2x.fF5K(bA3x)) cY4c = new Date(Date.parse(bA3x));
        if (!k2x.Ea2x(bA3x)) cY4c = new Date(bA3x);
        return cY4c
    };
    k2x.IJ4N = function (chh7a, chA7t) {
        return (new Number(chh7a)).toFixed(chA7t)
    };
    k2x.bqb6V = function () {
        var gD5I = /([^\/:])\/.*$/,
            ke6Y = /\/[^\/]+$/,
            Es2x = /[#\?]/,
            bqa6U = location.href.split(/[?#]/)[0],
            tO9F = document.createElement("a");
        var bpV5a = function (jJ6D) {
            return (jJ6D || "").indexOf("://") > 0
        };
        var bCw9n = function (jJ6D) {
            return (jJ6D || "").split(Es2x)[0].replace(ke6Y, "/")
        };
        var chF7y = function (jJ6D, gd5i) {
            if (jJ6D.indexOf("/") == 0) return gd5i.replace(gD5I, "$1") + jJ6D;
            return bCw9n(gd5i) + jJ6D
        };
        bqa6U = bCw9n(bqa6U);
        return function (jJ6D, gd5i) {
            jJ6D = (jJ6D || "").trim();
            if (!bpV5a(gd5i)) gd5i = bqa6U;
            if (!jJ6D) return gd5i;
            if (bpV5a(jJ6D)) return jJ6D;
            jJ6D = chF7y(jJ6D, gd5i);
            tO9F.href = jJ6D;
            jJ6D = tO9F.href;
            return bpV5a(jJ6D) ? jJ6D : tO9F.getAttribute("href", 4)
        }
    }();
    k2x.chW7P = function () {
        var dg4k = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y3x) {
            if (dg4k.test(Y3x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k2x.bCZ9Q = function (G2x, ik5p) {
        if (!G2x) return ik5p;
        var V3x = G2x.tagName.toLowerCase(),
            i2x = a2x.dk4o(G2x);
        if (!i2x || !i2x.length) {
            ik5p[V3x] = G2x.textContent || G2x.text || "";
            return ik5p
        }
        var ck3x = {};
        ik5p[V3x] = ck3x;
        k2x.bd3x(i2x, function (f2x) {
            k2x.bCZ9Q(f2x, ck3x)
        });
        return ik5p
    };
    k2x.cGZ3x = function (AG1x) {
        try {
            return k2x.bCZ9Q(a2x.bEj9a(AG1x), {})
        } catch (ex) {
            return null
        }
    };
    k2x.Rm6g = function (ia5f, RA6u) {
        var ik5p = {};
        k2x.bd3x((ia5f || "").split(RA6u), function (V3x) {
            var bcm0x = V3x.split("=");
            if (!bcm0x || !bcm0x.length) return;
            var J2x = bcm0x.shift();
            if (!J2x) return;
            ik5p[decodeURIComponent(J2x)] = decodeURIComponent(bcm0x.join("="))
        });
        return ik5p
    };
    k2x.vY0x = function (gq5v, RA6u, cjb7U) {
        if (!gq5v) return "";
        var bs3x = [];
        for (var x in gq5v) {
            bs3x.push(encodeURIComponent(x) + "=" + (!!cjb7U ? encodeURIComponent(gq5v[x]) : gq5v[x]))
        }
        return bs3x.join(RA6u || ",")
    };
    k2x.hx5C = function (bv3x) {
        return k2x.Rm6g(bv3x, "&")
    };
    k2x.cC3x = function (gq5v) {
        return k2x.vY0x(gq5v, "&", !0)
    };
    k2x.cGX3x = function (gq5v) {
        return be3x.Im3x(gq5v)
    };
    k2x.cGW3x = function (i2x, dW4a) {
        var o2x = {};
        k2x.bd3x(i2x, function (p2x) {
            var J2x = p2x;
            if (!!dW4a) {
                J2x = dW4a(p2x)
            }
            o2x[J2x] = p2x
        });
        return o2x
    };
    k2x.cGV3x = function (gV5a, fZ5e) {
        var cje7X = ("" + gV5a).length,
            cjm7f = Math.max(1, parseInt(fZ5e) || 0),
            dp4t = cjm7f - cje7X;
        if (dp4t > 0) {
            gV5a = (new Array(dp4t + 1)).join("0") + gV5a
        }
        return "" + gV5a
    };
    k2x.bcg0x = function (gq5v, V3x) {
        if (!k2x.eJ4N(V3x)) {
            try {
                delete gq5v[V3x]
            } catch (e) {
                gq5v[V3x] = undefined
            }
            return this
        }
        k2x.bd3x(V3x, k2x.bcg0x.g2x(k2x, gq5v));
        return this
    };
    k2x.OH5M = function () {
        var bGG0x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bq3x) {
            bq3x = bq3x || 10;
            var o2x = [];
            for (var i = 0, bGI0x; i < bq3x; ++i) {
                bGI0x = Math.floor(Math.random() * bGG0x.length);
                o2x.push(bGG0x.charAt(bGI0x))
            }
            return o2x.join("")
        }
    }();
    k2x.Bj1x = function (fC5H, fr5w) {
        return Math.floor(Math.random() * (fr5w - fC5H) + fC5H)
    };
    k2x.ob7U = function (bq3x) {
        bq3x = Math.max(0, Math.min(bq3x || 8, 30));
        var fC5H = Math.pow(10, bq3x - 1),
            fr5w = fC5H * 10;
        return k2x.Bj1x(fC5H, fr5w).toString()
    };
    k2x.bce0x = function () {
        var gK5P = +(new Date);
        return function () {
            return "" + gK5P++
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        fy5D = NEJ.R,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        pb8T;
    if (!!O2x.cI3x) return;
    O2x.cI3x = NEJ.C();
    pb8T = O2x.cI3x.prototype;
    O2x.cI3x.A2x = function (e2x) {
        e2x = e2x || {};
        var cz3x = !!this.AY1x && this.AY1x.shift();
        if (!cz3x) {
            cz3x = new this(e2x);
            this.cjr7k = (this.cjr7k || 0) + 1
        }
        cz3x.bk3x(e2x);
        return cz3x
    };
    O2x.cI3x.T3x = function () {
        var SI6C = function (p2x, r2x, i2x) {
            p2x.T3x();
            i2x.splice(r2x, 1)
        };
        return function (cz3x) {
            if (!cz3x) return null;
            if (!k2x.eJ4N(cz3x)) {
                if (!(cz3x instanceof this)) {
                    var fL5Q = cz3x.constructor;
                    if (!!fL5Q.T3x) fL5Q.T3x(cz3x);
                    return null
                }
                if (cz3x == this.fm5r) delete this.fm5r;
                if (cz3x == this.AU1x) delete this.AU1x;
                cz3x.bD3x();
                if (!this.AY1x) this.AY1x = [];
                if (k2x.dj4n(this.AY1x, cz3x) < 0) {
                    this.AY1x.push(cz3x)
                }
                return null
            }
            k2x.nx7q(cz3x, SI6C, this)
        }
    }();
    O2x.cI3x.gp5u = function (e2x) {
        e2x = e2x || {};
        if (!this.fm5r) this.fm5r = this.A2x(e2x);
        return this.fm5r
    };
    O2x.cI3x.bKA0x = function (e2x, rz9q) {
        e2x = e2x || {};
        if (!!rz9q && !!this.AU1x) {
            this.AU1x.T3x();
            delete this.AU1x
        }
        if (!this.AU1x) {
            this.AU1x = this.A2x(e2x)
        } else {
            this.AU1x.bk3x(e2x)
        }
        return this.AU1x
    };
    pb8T.cx3x = function () {
        var gK5P = +(new Date);
        return function () {
            this.id = gK5P++;
            this.lX7Q = {};
            this.bLs1x = {}
        }
    }();
    pb8T.bk3x = function (e2x) {
        this.boU5Z(e2x)
    };
    pb8T.bD3x = function () {
        this.hg5l();
        this.Jl4p()
    };
    pb8T.bX3x = function () {
        var gK5P = +(new Date);
        var cjO7H = function (bf3x) {
            if (!bf3x || bf3x.length < 3) return;
            this.bLs1x["de-" + gK5P++] = bf3x;
            h2x.s2x.apply(h2x, bf3x)
        };
        return function (i2x) {
            k2x.bd3x(i2x, cjO7H, this)
        }
    }();
    pb8T.Jl4p = function () {
        var cjT7M = function (bf3x, J2x, by3x) {
            delete by3x[J2x];
            h2x.mv7o.apply(h2x, bf3x)
        };
        return function () {
            k2x.eE4I(this.bLs1x, cjT7M)
        }
    }();
    pb8T.cGO2x = function (dW4a) {
        dW4a = dW4a || br3x;
        k2x.eE4I(this, function (FO3x, J2x, by3x) {
            if (!!FO3x && !!FO3x.T3x && !dW4a(FO3x)) {
                delete by3x[J2x];
                FO3x.T3x()
            }
        })
    };
    pb8T.T3x = function () {
        this.constructor.T3x(this)
    };
    pb8T.boQ5V = function (u2x) {
        var d2x = this.lX7Q[u2x.toLowerCase()];
        return !!d2x && d2x !== br3x
    };
    pb8T.s2x = function (u2x, d2x) {
        this.wN0x.apply(this, arguments);
        return this
    };
    pb8T.mv7o = function (u2x, d2x) {
        var u2x = (u2x || "").toLowerCase(),
            ed4h = this.lX7Q[u2x];
        if (!k2x.eJ4N(ed4h)) {
            if (ed4h == d2x) delete this.lX7Q[u2x];
            return
        }
        k2x.nx7q(ed4h, function (ev4z, r2x, i2x) {
            if (ev4z == d2x) i2x.splice(r2x, 1)
        })
    };
    pb8T.wN0x = function (u2x, d2x) {
        if (!!u2x && k2x.gG5L(d2x)) this.lX7Q[u2x.toLowerCase()] = d2x;
        return this
    };
    pb8T.boU5Z = function () {
        var cmA8s = function (d2x, u2x) {
            this.wN0x(u2x, d2x)
        };
        return function (ed4h) {
            k2x.eE4I(ed4h, cmA8s, this);
            return this
        }
    }();
    pb8T.hg5l = function () {
        var boJ5O = function (d2x, u2x) {
            this.hg5l(u2x)
        };
        return function (u2x) {
            var u2x = (u2x || "").toLowerCase();
            if (!!u2x) {
                delete this.lX7Q[u2x]
            } else {
                k2x.eE4I(this.lX7Q, boJ5O, this)
            }
            return this
        }
    }();
    pb8T.boH5M = function (u2x, d2x) {
        if (!u2x || !k2x.gG5L(d2x)) return this;
        u2x = u2x.toLowerCase();
        var ed4h = this.lX7Q[u2x];
        if (!ed4h) {
            this.lX7Q[u2x] = d2x;
            return this
        }
        if (!k2x.eJ4N(ed4h)) {
            this.lX7Q[u2x] = [ed4h]
        }
        this.lX7Q[u2x].push(d2x);
        return this
    };
    pb8T.z2x = function (u2x) {
        var d2x = this.lX7Q[(u2x || "").toLowerCase()];
        if (!d2x) return this;
        var bf3x = fy5D.slice.call(arguments, 1);
        if (!k2x.eJ4N(d2x)) return d2x.apply(this, bf3x);
        k2x.bd3x(d2x, function (du4y) {
            try {
                du4y.apply(this, bf3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    O2x.bbS0x = function () {
        var R3x = {};
        return function (C2x, fL5Q, e2x) {
            var fi4m = fL5Q.cnr8j;
            if (!fi4m) {
                fi4m = k2x.OH5M(10);
                fL5Q.cnr8j = fi4m
            }
            var J2x = C2x + "-" + fi4m,
                cz3x = R3x[J2x];
            if (!!e2x && !cz3x) {
                cz3x = fL5Q.A2x(e2x);
                cz3x.T3x = cz3x.T3x.eC4G(function (d2x) {
                    delete R3x[J2x];
                    delete cz3x.T3x
                });
                R3x[J2x] = cz3x
            }
            return cz3x
        }
    }()
})();
(function () {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gB5G = function () {
        var cY4c = new Date,
            cns8k = +cY4c,
            bos5x = 864e5;
        var cnv8n = function (V3x) {
            var rB9s = document.cookie,
                td9U = "\\b" + V3x + "=",
                bbQ0x = rB9s.search(td9U);
            if (bbQ0x < 0) return "";
            bbQ0x += td9U.length - 2;
            var xb0x = rB9s.indexOf(";", bbQ0x);
            if (xb0x < 0) xb0x = rB9s.length;
            return rB9s.substring(bbQ0x, xb0x) || ""
        };
        return function (V3x, j2x) {
            if (j2x === undefined) return cnv8n(V3x);
            if (u.fF5K(j2x)) {
                if (!!j2x) {
                    document.cookie = V3x + "=" + j2x + ";";
                    return j2x
                }
                j2x = {
                    expires: -100
                }
            }
            j2x = j2x || o;
            var rB9s = V3x + "=" + (j2x.value || "") + ";";
            delete j2x.value;
            if (j2x.expires !== undefined) {
                cY4c.setTime(cns8k + j2x.expires * bos5x);
                j2x.expires = cY4c.toGMTString()
            }
            rB9s += u.vY0x(j2x, ";");
            document.cookie = rB9s
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        iv5A = c2x("nej.c"),
        eo4s = c2x("nej.g"),
        a2x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ut.j"),
        k2x = c2x("nej.u"),
        b2x;
    if (!!O2x.Jo4s) return;
    O2x.Jo4s = NEJ.C();
    b2x = O2x.Jo4s.N2x(I2x.cI3x);
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.pK8C = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pK8C, e2x);
        var Cm2x = iv5A.B2x("csrf");
        if ((/^\/[^\/]/.test(this.pK8C.url) || this.pK8C.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Cm2x.cookie && !!Cm2x.param) {
            var bv3x = encodeURIComponent(Cm2x.param) + "=" + encodeURIComponent(v2x.gB5G(Cm2x.cookie) || ""),
                RA6u = this.pK8C.url.indexOf("?") < 0 ? "?" : "&";
            this.pK8C.url += RA6u + bv3x
        }
        this.bbN0x = e2x.headers || {};
        var bo3x = this.bbN0x[eo4s.yV1x];
        if (bo3x == null) this.bbN0x[eo4s.yV1x] = eo4s.bVC4G
    };
    b2x.bD3x = function () {
        this.bG3x();
        delete this.Ax1x;
        delete this.pK8C;
        delete this.bbN0x
    };
    b2x.cnR8J = function (bo3x) {
        var by3x = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pK8C.noescape) {
            return k2x.BS2x(by3x, bo3x)
        } else {
            return bo3x
        }
    };
    b2x.ul9c = function (d2x) {
        var ex4B = d2x.status;
        if (ex4B == -1) {
            this.z2x("onerror", {
                code: eo4s.bSX3x,
                message: "请求[" + this.pK8C.url + "]超时！"
            });
            return
        }
        if (("" + ex4B).indexOf("2") != 0) {
            this.z2x("onerror", {
                data: ex4B,
                code: eo4s.bwn7g,
                message: "服务器返回异常状态[" + ex4B + "]!",
                extData: d2x.result
            });
            return
        }
        this.z2x("onload", a2x.cdp6j(this.cnR8J(d2x.result), this.pK8C.type))
    };
    b2x.cp3x = br3x;
    b2x.bnZ5e = function (j2x) {
        var Y3x = this.pK8C.url;
        if (!Y3x) {
            this.z2x("onerror", {
                code: eo4s.bwB7u,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pK8C.data = j2x == null ? null : j2x;
            var d2x = {
                request: this.pK8C,
                headers: this.bbN0x
            };
            try {
                this.z2x("onbeforerequest", d2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cp3x(d2x)
        } catch (e) {
            this.z2x("onerror", {
                code: eo4s.bwn7g,
                message: "请求[" + Y3x + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b2x.ki6c = br3x
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        be3x = c2x("nej.h"),
        eo4s = c2x("nej.g"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut.j"),
        R3x = {},
        TI7B;
    if (!!O2x.bbI0x) return;
    O2x.bbI0x = NEJ.C();
    TI7B = O2x.bbI0x.N2x(O2x.Jo4s);
    TI7B.bD3x = function () {
        this.bG3x();
        window.clearTimeout(this.ef4j);
        delete this.ef4j;
        try {
            this.rE9v.onreadystatechange = br3x;
            this.rE9v.abort()
        } catch (e) {}
        delete this.rE9v
    };
    TI7B.cp3x = function () {
        var cnT8L = function (D2x, J2x) {
            this.rE9v.setRequestHeader(J2x, D2x)
        };
        return function (e2x) {
            var gl5q = e2x.request,
                oT8L = e2x.headers;
            this.rE9v = be3x.bnU5Z();
            if (oT8L[eo4s.yV1x] === eo4s.Ff3x) {
                delete oT8L[eo4s.yV1x];
                this.rE9v.upload.onprogress = this.gv5A.g2x(this, 1);
                if (gl5q.data.tagName === "FORM") gl5q.data = new FormData(gl5q.data)
            }
            this.rE9v.onreadystatechange = this.gv5A.g2x(this, 2);
            if (gl5q.timeout != 0) {
                this.ef4j = window.setTimeout(this.gv5A.g2x(this, 3), gl5q.timeout)
            }
            this.rE9v.open(gl5q.method, gl5q.url, !gl5q.sync);
            k2x.eE4I(oT8L, cnT8L, this);
            if (!!this.pK8C.cookie && "withCredentials" in this.rE9v) this.rE9v.withCredentials = !0;
            this.rE9v.send(gl5q.data)
        }
    }();
    TI7B.gv5A = function (u2x) {
        switch (u2x) {
            case 1:
                this.z2x("onuploading", arguments[1]);
                break;
            case 2:
                if (this.rE9v.readyState == 4) this.ul9c({
                    status: this.rE9v.status,
                    result: this.rE9v.responseText || ""
                });
                break;
            case 3:
                this.ul9c({
                    status: -1
                });
                break
        }
    };
    TI7B.ki6c = function () {
        this.ul9c({
            status: 0
        });
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Ua7T = {},
        bbG0x = [],
        bEc9T = /\s+/g,
        gK5P = +(new Date),
        Jt4x, bP3x, hK5P;
    var FR3x = function () {
        var gD5I = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            ke6Y = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            Es2x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bnL5Q = /^new\s+/,
            cnV8N = /['"]/;
        var cnX8P = function (D2x) {
            if (gD5I.test(D2x)) return;
            D2x = D2x.split(".")[0].trim();
            if (!D2x || cnV8N.test(D2x)) return;
            D2x = D2x.replace(bnL5Q, "");
            try {
                if (Es2x.test(D2x)) return;
                hK5P[D2x] = 1
            } catch (e) {}
        };
        return function (bo3x) {
            bo3x = bo3x || "";
            if (!bo3x || gD5I.test(bo3x)) return;
            var bs3x = bo3x.split(ke6Y);
            for (var i = 0, l = bs3x.length; i < l; i++) cnX8P(bs3x[i])
        }
    }();
    var cnY8Q = function (dJ4N) {
        if (dJ4N[2] != "in") throw "bad for loop statement: " + dJ4N.join(" ");
        bbG0x.push(dJ4N[1]);
        FR3x(dJ4N[3]);
        return "var __HASH__" + dJ4N[1] + " = " + dJ4N[3] + "," + dJ4N[1] + "," + dJ4N[1] + "_count=0;" + "if (!!__HASH__" + dJ4N[1] + ")" + "for(var " + dJ4N[1] + "_key in __HASH__" + dJ4N[1] + "){" + dJ4N[1] + " = __HASH__" + dJ4N[1] + "[" + dJ4N[1] + "_key];" + "if (typeof(" + dJ4N[1] + ')=="function") continue;' + dJ4N[1] + "_count++;"
    };
    var cnZ8R = function () {
        var dJ4N = bbG0x[bbG0x.length - 1];
        return "}; if(!__HASH__" + dJ4N + "||!" + dJ4N + "_count){"
    };
    var coa8S = function () {
        bbG0x.pop();
        return "};"
    };
    var cob8T = function (dJ4N) {
        if (dJ4N[2] != "as") throw "bad for list loop statement: " + dJ4N.join(" ");
        var UB7u = dJ4N[1].split("..");
        if (UB7u.length > 1) {
            FR3x(UB7u[0]);
            FR3x(UB7u[1]);
            return "for(var " + dJ4N[3] + "," + dJ4N[3] + "_index=0," + dJ4N[3] + "_beg=" + UB7u[0] + "," + dJ4N[3] + "_end=" + UB7u[1] + "," + dJ4N[3] + "_length=parseInt(" + dJ4N[3] + "_end-" + dJ4N[3] + "_beg+1);" + dJ4N[3] + "_index<" + dJ4N[3] + "_length;" + dJ4N[3] + "_index++){" + dJ4N[3] + " = " + dJ4N[3] + "_beg+" + dJ4N[3] + "_index;"
        } else {
            FR3x(dJ4N[1]);
            return "for(var __LIST__" + dJ4N[3] + " = " + dJ4N[1] + "," + dJ4N[3] + "," + dJ4N[3] + "_index=0," + dJ4N[3] + "_length=__LIST__" + dJ4N[3] + ".length;" + dJ4N[3] + "_index<" + dJ4N[3] + "_length;" + dJ4N[3] + "_index++){" + dJ4N[3] + " = __LIST__" + dJ4N[3] + "[" + dJ4N[3] + "_index];"
        }
    };
    var coc8U = function (dJ4N) {
        if (!dJ4N || !dJ4N.length) return;
        dJ4N.shift();
        var V3x = dJ4N[0].split("(")[0];
        return "var " + V3x + " = function" + dJ4N.join("").replace(V3x, "") + "{var __OUT=[];"
    };
    var cok8c = function (dJ4N) {
        if (!dJ4N[1]) throw "bad include statement: " + dJ4N.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bnw5B = function (kj6d, dJ4N) {
        FR3x(dJ4N.slice(1).join(" "));
        return kj6d
    };
    var cor8j = function (dJ4N) {
        return bnw5B("if(", dJ4N)
    };
    var cot8l = function (dJ4N) {
        return bnw5B("}else if(", dJ4N)
    };
    var coJ8B = function (dJ4N) {
        return bnw5B("var ", dJ4N)
    };
    bP3x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cor8j,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cot8l,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cnY8Q,
                pmin: 3
            },
            forelse: {
                pfix: cnZ8R
            },
            "/for": {
                pfix: coa8S
            },
            list: {
                pfix: cob8T,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: coJ8B,
                sfix: ";"
            },
            macro: {
                pfix: coc8U
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function () {
                    Jt4x = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Jt4x = null
                }
            },
            inline: {
                pfix: cok8c,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function (kj6d) {
                return (kj6d || "") + "" + gK5P
            },
            "default": function (D2x, kf6Z) {
                return D2x || kf6Z
            }
        }
    };
    var coN8F = function () {
        var coQ8I = /\\([\{\}])/g;
        return function (bo3x, jz6t) {
            bo3x = bo3x.replace(coQ8I, "$1");
            var dJ4N = bo3x.slice(1, -1).split(bEc9T),
                bg3x = bP3x.def[dJ4N[0]];
            if (!bg3x) {
                bbs9j(bo3x, jz6t);
                return
            }
            if (!!bg3x.pmin && bg3x.pmin >= dJ4N.length) throw "Statement needs more parameters:" + bo3x;
            jz6t.push(!!bg3x.pfix && typeof bg3x.pfix != "string" ? bg3x.pfix(dJ4N) : bg3x.pfix || "");
            if (!!bg3x.sfix) {
                if (dJ4N.length <= 1) {
                    if (!!bg3x.pdft) jz6t.push(bg3x.pdft)
                } else {
                    for (var i = 1, l = dJ4N.length; i < l; i++) {
                        if (i > 1) jz6t.push(" ");
                        jz6t.push(dJ4N[i])
                    }
                }
                jz6t.push(bg3x.sfix)
            }
        }
    }();
    var bJb0x = function (JC4G, jz6t) {
        if (!JC4G || !JC4G.length) return;
        if (JC4G.length == 1) {
            var bnj5o = JC4G.pop();
            FR3x(bnj5o);
            jz6t.push(bnj5o == "" ? '""' : bnj5o);
            return
        }
        var bni5n = JC4G.pop().split(":");
        jz6t.push("__MDF['" + bni5n.shift() + "'](");
        bJb0x(JC4G, jz6t);
        if (bni5n.length > 0) {
            var bf3x = bni5n.join(":");
            FR3x(bf3x);
            jz6t.push("," + bf3x)
        }
        jz6t.push(")")
    };
    var bbs9j = function (bo3x, jz6t) {
        if (!bo3x) return;
        var xs0x = bo3x.split("\n");
        if (!xs0x || !xs0x.length) return;
        for (var i = 0, l = xs0x.length, hw5B; i < l; i++) {
            hw5B = xs0x[i];
            if (!!Jt4x) {
                hw5B = hw5B.trim();
                if (!hw5B) continue
            }
            coU8M(hw5B, jz6t);
            if (!!Jt4x && i < l - 1) jz6t.push("__OUT.push('\\n');")
        }
    };
    var coU8M = function () {
        var cpc8U = /\|\|/g,
            cpd8V = /#@@#/g;
        return function (bo3x, jz6t) {
            var MY5d = "}",
                MZ5e = -1,
                bq3x = bo3x.length,
                wn0x, fP5U, JH4L, bbl9c, Nd5i;
            while (MZ5e + MY5d.length < bq3x) {
                wn0x = "${";
                fP5U = "}";
                JH4L = bo3x.indexOf(wn0x, MZ5e + MY5d.length);
                if (JH4L < 0) break;
                if (bo3x.charAt(JH4L + 2) == "%") {
                    wn0x = "${%";
                    fP5U = "%}"
                }
                bbl9c = bo3x.indexOf(fP5U, JH4L + wn0x.length);
                if (bbl9c < 0) break;
                bbi9Z(bo3x.substring(MZ5e + MY5d.length, JH4L), jz6t);
                Nd5i = bo3x.substring(JH4L + wn0x.length, bbl9c).replace(cpc8U, "#@@#").split("|");
                for (var i = 0, l = Nd5i.length; i < l; Nd5i[i] = Nd5i[i].replace(cpd8V, "||"), i++);
                jz6t.push("__OUT.push(");
                bJb0x(Nd5i, jz6t);
                jz6t.push(");");
                MY5d = fP5U;
                MZ5e = bbl9c
            }
            bbi9Z(bo3x.substring(MZ5e + MY5d.length), jz6t)
        }
    }();
    var bbi9Z = function () {
        var by3x = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cpe8W = function (bo3x) {
            return (bo3x || "").replace(by3x.r, function ($1) {
                return by3x[$1] || $1
            })
        };
        return function (bo3x, jz6t) {
            if (!bo3x) return;
            jz6t.push("__OUT.push('" + cpe8W(bo3x) + "');")
        }
    }();
    var cpf8X = function () {
        var cpi9Z = /\t/g,
            cpj9a = /\n/g,
            cpk9b = /\r\n?/g;
        var bNS1x = function (bo3x, wn0x) {
            var r2x = bo3x.indexOf("}", wn0x + 1);
            while (bo3x.charAt(r2x - 1) == "\\") {
                r2x = bo3x.indexOf("}", r2x + 1)
            }
            return r2x
        };
        var cpO9F = function () {
            var bs3x = [],
                Ez2x = arguments[0];
            for (var x in Ez2x) {
                x = (x || "").trim();
                if (!x) continue;
                bs3x.push(x + "=$v('" + x + "')")
            }
            return bs3x.length > 0 ? "var " + bs3x.join(",") + ";" : ""
        };
        return function (bo3x) {
            hK5P = {};
            bo3x = bo3x.replace(cpk9b, "\n").replace(cpi9Z, "    ");
            var rR9I = ["if(!__CTX) return '';", ""];
            rR9I.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            rR9I.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            rR9I.push("__OUT=[];");
            var EK2x = -1,
                bq3x = bo3x.length;
            var nj7c, JJ4N, No5t, Nq5v, AC1x, Nv5A, bmj5o, ND5I;
            while (EK2x + 1 < bq3x) {
                nj7c = EK2x;
                nj7c = bo3x.indexOf("{", nj7c + 1);
                while (nj7c >= 0) {
                    JJ4N = bNS1x(bo3x, nj7c);
                    No5t = bo3x.substring(nj7c, JJ4N);
                    Nq5v = No5t.match(bP3x.blk);
                    if (!!Nq5v) {
                        AC1x = Nq5v[1].length + 1;
                        Nv5A = bo3x.indexOf("}", nj7c + AC1x);
                        if (Nv5A >= 0) {
                            bmj5o = Nv5A - nj7c - AC1x <= 0 ? "{/" + Nq5v[1] + "}" : No5t.substr(AC1x + 1);
                            AC1x = bo3x.indexOf(bmj5o, Nv5A + 1);
                            if (AC1x >= 0) {
                                bbs9j(bo3x.substring(EK2x + 1, nj7c), rR9I);
                                ND5I = bo3x.substring(Nv5A + 1, AC1x);
                                switch (Nq5v[1]) {
                                    case "cdata":
                                        bbi9Z(ND5I, rR9I);
                                        break;
                                    case "minify":
                                        bbi9Z(ND5I.replace(cpj9a, " ").replace(bEc9T, " "), rR9I);
                                        break;
                                    case "eval":
                                        if (!!ND5I) rR9I.push("__OUT.push((function(){" + ND5I + "})());");
                                        break
                                }
                                nj7c = EK2x = AC1x + bmj5o.length - 1
                            }
                        }
                    } else if (bo3x.charAt(nj7c - 1) != "$" && bo3x.charAt(nj7c - 1) != "\\" && No5t.substr(No5t.charAt(1) == "/" ? 2 : 1).search(bP3x.tag) == 0) {
                        break
                    }
                    nj7c = bo3x.indexOf("{", nj7c + 1)
                }
                if (nj7c < 0) break;
                JJ4N = bNS1x(bo3x, nj7c);
                if (JJ4N < 0) break;
                bbs9j(bo3x.substring(EK2x + 1, nj7c), rR9I);
                coN8F(bo3x.substring(nj7c, JJ4N + 1), rR9I);
                EK2x = JJ4N
            }
            bbs9j(bo3x.substring(EK2x + 1), rR9I);
            rR9I.push(';return __OUT.join("");');
            rR9I[1] = cpO9F(hK5P);
            hK5P = null;
            return new Function("__CTX", "__MDF", rR9I.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gK5P
    };
    TrimPath.merge = function () {
        var NE5J = {};
        TrimPath.dump = function () {
            return {
                func: NE5J,
                text: Ua7T
            }
        };
        return function (fi4m, j2x, jZ6T) {
            try {
                j2x = j2x || {};
                if (!NE5J[fi4m] && !Ua7T[fi4m]) return "";
                if (!NE5J[fi4m]) {
                    NE5J[fi4m] = cpf8X(Ua7T[fi4m]);
                    delete Ua7T[fi4m]
                }
                if (!!jZ6T) {
                    for (var x in bP3x.ext)
                        if (!jZ6T[x]) jZ6T[x] = bP3x.ext[x]
                }
                return NE5J[fi4m](j2x, jZ6T || bP3x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cqc9T = +(new Date);
        return function (bo3x, fi4m) {
            if (!bo3x) return "";
            fi4m = fi4m || "ck_" + cqc9T++;
            Ua7T[fi4m] = bo3x;
            return fi4m
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        ey4C = {},
        bTk3x = {};
    a2x.JS4W = TrimPath.seed;
    a2x.bZ3x = function () {
        var bTV4Z = function (C2x) {
            return !a2x.iG5L ? "" : a2x.iG5L(C2x)
        };
        return function (fi4m, j2x, jZ6T) {
            j2x = NEJ.X(NEJ.X({}, bTk3x), j2x);
            j2x.inline = bTV4Z;
            jZ6T = NEJ.X(NEJ.X({}, ey4C), jZ6T);
            jZ6T.rand = k2x.ob7U;
            jZ6T.format = k2x.hW5b;
            jZ6T.escape = k2x.dG4K;
            jZ6T.inline = bTV4Z;
            return TrimPath.merge(fi4m, j2x, jZ6T)
        }
    }();
    a2x.eu4y = function (bo3x, cqd9U) {
        if (!bo3x) return "";
        var fi4m, F2x = a2x.B2x(bo3x);
        if (!!F2x) {
            fi4m = F2x.id;
            bo3x = F2x.value || F2x.innerText;
            if (!cqd9U) a2x.cJ4N(F2x)
        }
        return TrimPath.parse(bo3x, fi4m)
    };
    a2x.dz4D = function (bI3x, fi4m, j2x, jZ6T) {
        bI3x = a2x.B2x(bI3x);
        if (!!bI3x) bI3x.innerHTML = a2x.bZ3x(fi4m, j2x, jZ6T);
        return this
    };
    a2x.cGb2x = function (by3x) {
        NEJ.X(ey4C, by3x)
    };
    a2x.cqf9W = function (by3x) {
        NEJ.X(bTk3x, by3x)
    };
    c2x("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dw4A = NEJ.P("nej.p"),
        O2x = window,
        lm7f = dw4A.Id3x,
        bxE7x = lm7f.ipad || lm7f.iphone;
    if (!bxE7x && !!O2x.requestAnimationFrame && !!O2x.cancelRequestAnimationFrame) return;
    var kj6d = dw4A.ds4w.prefix.pro;
    if (!bxE7x && !!O2x[kj6d + "RequestAnimationFrame"] && !!O2x[kj6d + "CancelRequestAnimationFrame"]) {
        O2x.requestAnimationFrame = O2x[kj6d + "RequestAnimationFrame"];
        O2x.cancelRequestAnimationFrame = O2x[kj6d + "CancelRequestAnimationFrame"];
        return
    }
    var baV9M = lm7f.desktop ? 80 : lm7f.ios ? 50 : 30;
    O2x.requestAnimationFrame = function (cN4R) {
        return window.setTimeout(function () {
            try {
                cN4R(+(new Date))
            } catch (ex) {}
        }, 1e3 / baV9M)
    };
    O2x.cancelRequestAnimationFrame = function (C2x) {
        window.clearTimeout(C2x);
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        be3x = c2x("nej.h"),
        cX4b = c2x("nej.x"),
        baU9L = c2x("nej.ut.j.cb"),
        gg5l;
    if (!!a2x.rV9M) return;
    a2x.rV9M = cX4b.rV9M = function () {
        var R3x = {},
            gD5I = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d2x) {
            var C2x = decodeURIComponent(d2x.target),
                u2x = d2x.type.toLowerCase();
            var du4y = R3x[C2x + "-on" + u2x];
            if (!!du4y) {
                try {
                    du4y(d2x)
                } catch (e) {}
                return
            }
            var cP4T = R3x[C2x + "-tgt"];
            if (!!cP4T && gD5I.test(u2x)) {
                bzP8H(cP4T, d2x)
            }
        };
        var blE4I = function (e2x) {
            var bI3x = a2x.B2x(e2x.parent) || document.body,
                dR4V = a2x.bZ3x(gg5l, e2x);
            bI3x.insertAdjacentHTML(!e2x.hidden ? "beforeEnd" : "afterBegin", dR4V)
        };
        var bzP8H = function (C2x, d2x) {
            var u2x = d2x.type.toLowerCase();
            requestAnimationFrame(function () {
                h2x.z2x(C2x, u2x)
            })
        };
        var cqm9d = function (hM5R) {
            return !!hM5R && !!hM5R.inited && !!hM5R.inited()
        };
        var NT5Y = function (C2x) {
            var bs3x = [document.embeds[C2x], a2x.B2x(C2x), document[C2x], window[C2x]],
                r2x = k2x.eE4I(bs3x, cqm9d),
                hM5R = bs3x[r2x],
                blB4F = C2x + "-count";
            R3x[blB4F]++;
            if (!!hM5R || R3x[blB4F] > 100) {
                R3x[C2x](hM5R);
                delete R3x[C2x];
                delete R3x[blB4F];
                return
            }
            window.setTimeout(NT5Y.g2x(null, C2x), 300)
        };
        var cqF9w = function (e2x) {
            var C2x = e2x.id,
                cm3x = e2x.params;
            if (!cm3x) {
                cm3x = {};
                e2x.params = cm3x
            }
            var hK5P = cm3x.flashvars || "";
            hK5P += (!hK5P ? "" : "&") + ("id=" + C2x);
            if (!e2x.hidden && (!!e2x.target || be3x.bdJ0x(cm3x.wmode))) {
                var hQ5V = a2x.lK7D(e2x.target) || a2x.lK7D(e2x.parent),
                    baS9J = k2x.bce0x();
                baU9L["cb" + baS9J] = bzP8H.g2x(null, hQ5V);
                hK5P += "&onevent=nej.ut.j.cb.cb" + baS9J;
                R3x[C2x + "-tgt"] = hQ5V
            }
            cm3x.flashvars = hK5P;
            k2x.eE4I(e2x, function (D2x, J2x) {
                if (k2x.gG5L(D2x) && J2x != "onready") {
                    R3x[C2x + "-" + J2x] = D2x
                }
            })
        };
        return function (e2x) {
            e2x = NEJ.X({}, e2x);
            if (!e2x.src) return;
            var C2x = "flash_" + k2x.bce0x();
            e2x.id = C2x;
            cqF9w(e2x);
            blE4I(e2x);
            if (!e2x.onready) return;
            R3x[C2x] = e2x.onready;
            R3x[C2x + "-count"] = 0;
            NT5Y(C2x)
        }
    }();
    gg5l = a2x.eu4y('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cX4b.isChange = !0
})();
(function () {
    var c2x = NEJ.P,
        iv5A = c2x("nej.c"),
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut.j"),
        baU9L = c2x("nej.ut.j.cb"),
        R3x = {},
        gK5P = +(new Date),
        blx4B;
    if (!!O2x.blm4q) return;
    baU9L["ld" + gK5P] = function (J2x, cG3x) {
        var jX6R = R3x[J2x];
        if (!jX6R) return;
        delete R3x[J2x];
        jX6R.ul9c({
            status: 200,
            result: cG3x
        })
    };
    baU9L["er" + gK5P] = function (J2x, ex4B) {
        var jX6R = R3x[J2x];
        if (!jX6R) return;
        delete R3x[J2x];
        jX6R.ul9c({
            status: ex4B || 0
        })
    };
    O2x.blm4q = NEJ.C();
    blx4B = O2x.blm4q.N2x(O2x.Jo4s);
    blx4B.cp3x = function (e2x) {
        var hM5R = R3x.flash;
        if (k2x.eJ4N(hM5R)) {
            hM5R.push(this.cp3x.g2x(this, e2x));
            return
        }
        if (!hM5R) {
            R3x.flash = [this.cp3x.g2x(this, e2x)];
            a2x.rV9M({
                hidden: !0,
                src: iv5A.B2x("ajax.swf"),
                onready: function (hM5R) {
                    if (!hM5R) return;
                    var i2x = R3x.flash;
                    R3x.flash = hM5R;
                    k2x.nx7q(i2x, function (du4y) {
                        try {
                            du4y()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Ax1x = "swf-" + k2x.ob7U();
        R3x[this.Ax1x] = this;
        var j2x = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e2x.request);
        j2x.key = this.Ax1x;
        j2x.headers = e2x.headers;
        j2x.onerror = "nej.ut.j.cb.er" + gK5P;
        j2x.onloaded = "nej.ut.j.cb.ld" + gK5P;
        var bCR9I = iv5A.bVo4s(j2x.url);
        if (!!bCR9I) j2x.policyURL = bCR9I;
        hM5R.request(j2x)
    };
    blx4B.ki6c = function () {
        delete R3x[this.Ax1x];
        this.ul9c({
            status: 0
        });
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        be3x = c2x("nej.h");
    be3x.bCY9P = function () {
        var dg4k = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kL6F) {
            kL6F = kL6F || "";
            if (dg4k.test(kL6F)) return RegExp.$1;
            return "*"
        }
    }();
    be3x.bll4p = function (j2x) {
        return j2x
    };
    be3x.blg4k = function (baM9D, e2x) {
        if (!baM9D.postMessage) return;
        e2x = e2x || bb3x;
        baM9D.postMessage(be3x.bll4p(e2x.data), be3x.bCY9P(e2x.origin))
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.fJ5O) return;
    O2x.fJ5O = NEJ.C();
    b2x = O2x.fJ5O.N2x(O2x.cI3x);
    b2x.cx3x = function () {
        this.S3x = {};
        this.cF3x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.Oc5h = a2x.B2x(e2x.element) || window;
        this.bEL9C(e2x.event);
        this.cqJ9A();
        this.z2x("oninit")
    };
    b2x.bD3x = function () {
        var DS2x = function (D2x, J2x, by3x) {
            if (!k2x.eJ4N(D2x)) {
                k2x.bcg0x(this.Oc5h, J2x)
            }
            delete by3x[J2x]
        };
        return function () {
            this.bG3x();
            k2x.eE4I(this.S3x, DS2x, this);
            delete this.Oc5h
        }
    }();
    b2x.baJ9A = function (F2x, u2x) {
        F2x = a2x.B2x(F2x);
        return F2x == this.Oc5h && (!u2x || !!this.S3x["on" + u2x])
    };
    b2x.bEL9C = function (d2x) {
        if (k2x.fF5K(d2x)) {
            var V3x = "on" + d2x;
            if (!this.S3x[V3x]) {
                this.S3x[V3x] = this.cqK9B.g2x(this, d2x)
            }
            this.bFa9R(d2x);
            return
        }
        if (k2x.eJ4N(d2x)) {
            k2x.bd3x(d2x, this.bEL9C, this)
        }
    };
    b2x.bFa9R = function (u2x) {
        var d2x = "on" + u2x,
            du4y = this.Oc5h[d2x],
            bFf9W = this.S3x[d2x];
        if (du4y != bFf9W) {
            this.baI9z(u2x);
            if (!!du4y && du4y != br3x) this.bFs9j(u2x, du4y);
            this.Oc5h[d2x] = bFf9W
        }
    };
    b2x.bFs9j = function (u2x, du4y, cqN9E) {
        var i2x = this.S3x[u2x];
        if (!i2x) {
            i2x = [];
            this.S3x[u2x] = i2x
        }
        if (k2x.gG5L(du4y)) {
            !cqN9E ? i2x.push(du4y) : i2x.unshift(du4y)
        }
    };
    b2x.baI9z = function (u2x, du4y) {
        var i2x = this.S3x[u2x];
        if (!i2x || !i2x.length) return;
        if (!du4y) {
            delete this.S3x[u2x];
            return
        }
        k2x.nx7q(i2x, function (D2x, r2x, Kc4g) {
            if (du4y === D2x) {
                Kc4g.splice(r2x, 1);
                return !0
            }
        })
    };
    b2x.cqK9B = function (u2x, d2x) {
        d2x = d2x || {
            noargs: !0
        };
        d2x.type = u2x;
        this.z2x("ondispatch", d2x);
        if (!!d2x.stopped) return;
        k2x.bd3x(this.S3x[u2x], function (du4y) {
            try {
                du4y(d2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b2x.cqJ9A = function () {
        var bkM4Q = function (d2x) {
            var bf3x = d2x.args,
                u2x = bf3x[1].toLowerCase();
            if (this.baJ9A(bf3x[0], u2x)) {
                d2x.stopped = !0;
                this.bFa9R(u2x);
                this.bFs9j(u2x, bf3x[2], bf3x[3]);
                this.z2x("oneventadd", {
                    type: u2x,
                    listener: bf3x[2]
                })
            }
        };
        var crq9h = function (d2x) {
            var bf3x = d2x.args,
                u2x = bf3x[1].toLowerCase();
            if (this.baJ9A(bf3x[0], u2x)) {
                d2x.stopped = !0;
                this.baI9z(u2x, bf3x[2])
            }
        };
        var boJ5O = function (d2x) {
            var bf3x = d2x.args,
                u2x = (bf3x[1] || "").toLowerCase();
            if (this.baJ9A(bf3x[0])) {
                if (!!u2x) {
                    this.baI9z(u2x);
                    return
                }
                k2x.eE4I(this.S3x, function (D2x, J2x) {
                    if (k2x.eJ4N(D2x)) {
                        this.baI9z(J2x)
                    }
                }, this)
            }
        };
        var cry9p = function (d2x) {
            var bf3x = d2x.args,
                u2x = bf3x[1].toLowerCase();
            if (this.baJ9A(bf3x[0], u2x)) {
                d2x.stopped = !0;
                bf3x[0]["on" + u2x].apply(bf3x[0], bf3x.slice(2))
            }
        };
        return function () {
            if (!!this.crR9I) return;
            this.crR9I = true;
            h2x.s2x = h2x.s2x.eC4G(bkM4Q.g2x(this));
            h2x.mv7o = h2x.mv7o.eC4G(crq9h.g2x(this));
            h2x.hg5l = h2x.hg5l.eC4G(boJ5O.g2x(this));
            h2x.z2x = h2x.z2x.eC4G(cry9p.g2x(this))
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        be3x = c2x("nej.h"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut");
    if (O2x.nr7k.trident) return;
    if (!!window.postMessage) {
        be3x.bll4p = be3x.bll4p.eC4G(function (d2x) {
            d2x.stopped = !0;
            d2x.value = JSON.stringify(d2x.args[0])
        });
        return
    }
    var J2x = "MSG|",
        kB6v = [];
    var csZ9Q = function () {
        var V3x = unescape(window.name || "").trim();
        if (!V3x || V3x.indexOf(J2x) != 0) return;
        window.name = "";
        var o2x = k2x.Rm6g(V3x.replace(J2x, ""), "|"),
            kL6F = (o2x.origin || "").toLowerCase();
        if (!!kL6F && kL6F != "*" && location.href.toLowerCase().indexOf(kL6F) != 0) return;
        h2x.z2x(window, "message", {
            data: JSON.parse(o2x.data || "null"),
            source: window.frames[o2x.self] || o2x.self,
            origin: be3x.bCY9P(o2x.ref || document.referrer)
        })
    };
    var ctB0x = function () {
        var baD9u;
        var ctM0x = function (by3x, r2x, i2x) {
            if (k2x.dj4n(baD9u, by3x.w) < 0) {
                baD9u.push(by3x.w);
                i2x.splice(r2x, 1);
                by3x.w.name = by3x.d
            }
        };
        return function () {
            baD9u = [];
            k2x.nx7q(kB6v, ctM0x);
            baD9u = null
        }
    }();
    be3x.blg4k = function () {
        var cub0x = function (j2x) {
            var o2x = {};
            j2x = j2x || bb3x;
            o2x.origin = j2x.origin || "";
            o2x.ref = location.href;
            o2x.self = j2x.source;
            o2x.data = JSON.stringify(j2x.data);
            return J2x + k2x.vY0x(o2x, "|", !0)
        };
        return be3x.blg4k.eC4G(function (d2x) {
            d2x.stopped = !0;
            var bf3x = d2x.args;
            kB6v.unshift({
                w: bf3x[0],
                d: escape(cub0x(bf3x[1]))
            })
        })
    }();
    I2x.fJ5O.A2x({
        element: window,
        event: "message"
    });
    window.setInterval(ctB0x, 100);
    window.setInterval(csZ9Q, 20)
})();
(function () {
    var c2x = NEJ.P,
        be3x = c2x("nej.h"),
        a2x = c2x("nej.e"),
        v2x = c2x("nej.j");
    v2x.cuh0x = function () {
        var gM5R = window.name || "_parent",
            cuR0x = {
                gy5D: window.top,
                gM5R: window,
                bI3x: window.parent
            };
        return function (cP4T, e2x) {
            if (typeof cP4T == "string") {
                cP4T = cuR0x[cP4T] || window.frames[cP4T];
                if (!cP4T) return this
            }
            var j2x = NEJ.X({
                origin: "*",
                source: gM5R
            }, e2x);
            be3x.blg4k(cP4T, j2x);
            return this
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        iv5A = c2x("nej.c"),
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j"),
        R3x = {},
        bax9o;
    if (!!O2x.bks4w) return;
    O2x.bks4w = NEJ.C();
    bax9o = O2x.bks4w.N2x(O2x.Jo4s);
    bax9o.cx3x = function () {
        var fd4h = "NEJ-AJAX-DATA:",
            Ef2x = !1;
        var bkr4v = function (d2x) {
            var j2x = d2x.data;
            if (j2x.indexOf(fd4h) != 0) return;
            j2x = JSON.parse(j2x.replace(fd4h, ""));
            var jX6R = R3x[j2x.key];
            if (!jX6R) return;
            delete R3x[j2x.key];
            j2x.result = decodeURIComponent(j2x.result || "");
            jX6R.ul9c(j2x)
        };
        var bkq4u = function () {
            if (!Ef2x) {
                Ef2x = !0;
                h2x.s2x(window, "message", bkr4v)
            }
        };
        return function () {
            this.cF3x();
            bkq4u()
        }
    }();
    bax9o.cp3x = function (e2x) {
        var gl5q = e2x.request,
            jX6R = iv5A.bVn4r(gl5q.url),
            ej4n = R3x[jX6R];
        if (k2x.eJ4N(ej4n)) {
            ej4n.push(this.cp3x.g2x(this, e2x));
            return
        }
        if (!ej4n) {
            R3x[jX6R] = [this.cp3x.g2x(this, e2x)];
            a2x.bdC0x({
                src: jX6R,
                visible: !1,
                onload: function (d2x) {
                    var i2x = R3x[jX6R];
                    R3x[jX6R] = h2x.W3x(d2x).contentWindow;
                    k2x.nx7q(i2x, function (du4y) {
                        try {
                            du4y()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Ax1x = "frm-" + k2x.ob7U();
        R3x[this.Ax1x] = this;
        var j2x = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gl5q);
        j2x.key = this.Ax1x;
        j2x.headers = e2x.headers;
        v2x.cuh0x(R3x[jX6R], {
            data: j2x
        })
    };
    bax9o.ki6c = function () {
        delete R3x[this.Ax1x];
        this.ul9c({
            status: 0
        });
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        eo4s = c2x("nej.g"),
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j"),
        R3x = {},
        Ki4m;
    if (!!O2x.bkl4p) return;
    O2x.bkl4p = NEJ.C();
    Ki4m = O2x.bkl4p.N2x(O2x.Jo4s);
    Ki4m.cx3x = function () {
        var fd4h = "NEJ-UPLOAD-RESULT:",
            Ef2x = !1;
        var bkr4v = function (d2x) {
            var j2x = d2x.data;
            if (j2x.indexOf(fd4h) != 0) return;
            j2x = JSON.parse(j2x.replace(fd4h, ""));
            var jX6R = R3x[j2x.key];
            if (!jX6R) return;
            delete R3x[j2x.key];
            jX6R.ul9c(decodeURIComponent(j2x.result))
        };
        var bkq4u = function () {
            if (!Ef2x) {
                Ef2x = !0;
                h2x.s2x(window, "message", bkr4v)
            }
        };
        return function () {
            this.cF3x();
            bkq4u()
        }
    }();
    Ki4m.bD3x = function () {
        this.bG3x();
        a2x.cJ4N(this.bjZ4d);
        delete this.bjZ4d;
        window.clearTimeout(this.ef4j);
        delete this.ef4j
    };
    Ki4m.ul9c = function (cG3x) {
        var Q3x;
        try {
            Q3x = JSON.parse(cG3x);
            this.z2x("onload", Q3x)
        } catch (e) {
            this.z2x("onerror", {
                code: eo4s.bVt4x,
                message: cG3x
            })
        }
    };
    Ki4m.cp3x = function () {
        var cuU0x = function () {
            var mI7B, cG3x;
            try {
                var mI7B = this.bjZ4d.contentWindow.document.body,
                    cG3x = mI7B.innerText || mI7B.textContent
            } catch (e) {
                return
            }
            this.ul9c(cG3x)
        };
        var bjW4a = function (Y3x, fe4i, rB9s) {
            v2x.bn3x(Y3x, {
                type: "json",
                method: "POST",
                cookie: rB9s,
                mode: parseInt(fe4i) || 0,
                onload: function (j2x) {
                    if (!this.ef4j) return;
                    this.z2x("onuploading", j2x);
                    this.ef4j = window.setTimeout(bjW4a.g2x(this, Y3x, fe4i, rB9s), 1e3)
                }.g2x(this),
                onerror: function (cb3x) {
                    if (!this.ef4j) return;
                    this.ef4j = window.setTimeout(bjW4a.g2x(this, Y3x, fe4i, rB9s), 1e3)
                }.g2x(this)
            })
        };
        return function (e2x) {
            var gl5q = e2x.request,
                oT8L = e2x.headers,
                fh4l = gl5q.data,
                V3x = "fom-" + k2x.ob7U();
            R3x[V3x] = this;
            fh4l.target = V3x;
            fh4l.method = "POST";
            fh4l.enctype = eo4s.Ff3x;
            fh4l.encoding = eo4s.Ff3x;
            var Y3x = fh4l.action || "",
                lJ7C = Y3x.indexOf("?") <= 0 ? "?" : "&";
            fh4l.action = Y3x + lJ7C + "_proxy_=form";
            this.bjZ4d = a2x.bdC0x({
                name: V3x,
                onload: function (d2x) {
                    var ej4n = h2x.W3x(d2x);
                    h2x.s2x(ej4n, "load", cuU0x.g2x(this));
                    fh4l.submit();
                    var bKQ1x = (fh4l.nej_query || bb3x).value;
                    if (!bKQ1x) return;
                    var fe4i = (fh4l.nej_mode || bb3x).value,
                        rB9s = (fh4l.nej_cookie || bb3x).value == "true";
                    this.ef4j = window.setTimeout(bjW4a.g2x(this, bKQ1x, fe4i, rB9s), 100)
                }.g2x(this)
            })
        }
    }();
    Ki4m.ki6c = function () {
        this.z2x("onerror", {
            code: eo4s.bVx4B,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        be3x = c2x("nej.h"),
        O2x = c2x("nej.ut.j");
    be3x.bnU5Z = function () {
        return new XMLHttpRequest
    };
    be3x.bjU4Y = function (fe4i, bam9d, e2x) {
        var by3x = !!bam9d ? {
            2: O2x.bkl4p
        } : {
            2: O2x.bks4w,
            3: O2x.blm4q
        };
        return (by3x[fe4i] || O2x.bbI0x).A2x(e2x)
    }
})();
(function () {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        be3x = c2x("nej.h");
    if (O2x.nr7k.trident) return;
    be3x.bnU5Z = function () {
        var NI5N = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cuV0x = function () {
            for (var i = 0, l = NI5N.length; i < l; i++) {
                try {
                    return new ActiveXObject(NI5N[i])
                } catch (e) {}
            }
            return null
        };
        return be3x.bnU5Z.eC4G(function (d2x) {
            if (!!window.XMLHttpRequest) return;
            d2x.stopped = !0;
            d2x.value = cuV0x()
        })
    }();
    be3x.bjU4Y = function () {
        var Fm3x = {
            0: 2,
            1: 3
        };
        return be3x.bjU4Y.eC4G(function (d2x) {
            var bf3x = d2x.args,
                fe4i = bf3x[0] || 0;
            bf3x[0] = !!bf3x[1] ? 2 : Fm3x[fe4i] || fe4i
        })
    }()
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        be3x = c2x("nej.h"),
        eo4s = c2x("nej.g"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j"),
        nY7R = {},
        Ib3x = br3x;
    v2x.ki6c = function (fi4m) {
        var R3x = nY7R[fi4m];
        if (!R3x) return this;
        R3x.req.ki6c();
        return this
    };
    v2x.beP0x = function (dW4a) {
        Ib3x = dW4a || br3x;
        return this
    };
    v2x.bn3x = function () {
        var jD6x = (location.protocol + "//" + location.host).toLowerCase();
        var cvb0x = function (Y3x) {
            var kL6F = k2x.chW7P(Y3x);
            return !!kL6F && kL6F != jD6x
        };
        var cvc0x = function (oT8L) {
            return (oT8L || bb3x)[eo4s.yV1x] == eo4s.Ff3x
        };
        var cve0x = function (e2x) {
            var bam9d = cvc0x(e2x.headers);
            if (!cvb0x(e2x.url) && !bam9d) return O2x.bbI0x.A2x(e2x);
            return be3x.bjU4Y(e2x.mode, bam9d, e2x)
        };
        var DS2x = function (fi4m) {
            var R3x = nY7R[fi4m];
            if (!R3x) return;
            if (!!R3x.req) R3x.req.T3x();
            delete nY7R[fi4m]
        };
        var bNO1x = function (fi4m, u2x) {
            var R3x = nY7R[fi4m];
            if (!R3x) return;
            DS2x(fi4m);
            try {
                var d2x = {
                    type: u2x,
                    result: arguments[2]
                };
                Ib3x(d2x);
                if (!d2x.stopped)(R3x[u2x] || br3x)(d2x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yo1x = function (fi4m, j2x) {
            bNO1x(fi4m, "onload", j2x)
        };
        var Bd1x = function (fi4m, cb3x) {
            bNO1x(fi4m, "onerror", cb3x)
        };
        return function (Y3x, e2x) {
            e2x = e2x || {};
            var fi4m = k2x.ob7U(),
                R3x = {
                    onload: e2x.onload || br3x,
                    onerror: e2x.onerror || br3x
                };
            nY7R[fi4m] = R3x;
            e2x.onload = yo1x.g2x(null, fi4m);
            e2x.onerror = Bd1x.g2x(null, fi4m);
            if (!!e2x.query) {
                var lJ7C = Y3x.indexOf("?") < 0 ? "?" : "&",
                    bv3x = e2x.query;
                if (k2x.lG7z(bv3x)) bv3x = k2x.cC3x(bv3x);
                if (!!bv3x) Y3x += lJ7C + bv3x
            }
            e2x.url = Y3x;
            R3x.req = cve0x(e2x);
            R3x.req.bnZ5e(e2x.data);
            return fi4m
        }
    }();
    v2x.gT5Y = function (fh4l, e2x) {
        var dM4Q = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(dM4Q, e2x);
        dM4Q.data = fh4l;
        dM4Q.method = "POST";
        dM4Q.timeout = 0;
        dM4Q.headers[eo4s.yV1x] = eo4s.Ff3x;
        return v2x.bn3x(fh4l.action, dM4Q)
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        eo4s = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ut.j"),
        mJ7C, gN5S = 6e4;
    if (!!O2x.OK5P) return;
    O2x.OK5P = NEJ.C();
    mJ7C = O2x.OK5P.N2x(I2x.cI3x);
    mJ7C.cx3x = function () {
        this.cF3x();
        this.OO5T = {
            onerror: this.cvf0x.g2x(this),
            onloaded: this.cvg0x.g2x(this)
        };
        if (!this.constructor.S3x) this.constructor.S3x = {
            loaded: {}
        }
    };
    mJ7C.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.Ks4w = e2x.version;
        this.bjk4o = e2x.timeout;
        this.OO5T.version = this.Ks4w;
        this.OO5T.timeout = this.bjk4o
    };
    mJ7C.bRZ3x = function (J2x) {
        delete this.constructor.S3x[J2x]
    };
    mJ7C.Bi1x = function (J2x) {
        return this.constructor.S3x[J2x]
    };
    mJ7C.bSB3x = function (J2x, j2x) {
        this.constructor.S3x[J2x] = j2x
    };
    mJ7C.bac9T = br3x;
    mJ7C.bSH3x = function (gl5q) {
        h2x.hg5l(gl5q)
    };
    mJ7C.bjd4h = function (gl5q) {
        gl5q.src = this.kK6E;
        document.head.appendChild(gl5q)
    };
    mJ7C.Bl1x = function () {
        var R3x = this.Bi1x(this.kK6E);
        if (!R3x) return;
        window.clearTimeout(R3x.timer);
        this.bSH3x(R3x.request);
        delete R3x.bind;
        delete R3x.timer;
        delete R3x.request;
        this.bRZ3x(this.kK6E);
        this.Bi1x("loaded")[this.kK6E] = !0
    };
    mJ7C.ZX9O = function (V3x) {
        var R3x = this.Bi1x(this.kK6E);
        if (!R3x) return;
        var i2x = R3x.bind;
        this.Bl1x();
        if (!!i2x && i2x.length > 0) {
            var cz3x;
            while (i2x.length) {
                cz3x = i2x.shift();
                try {
                    cz3x.z2x(V3x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cz3x.T3x()
            }
        }
    };
    mJ7C.eK4O = function (cb3x) {
        this.ZX9O("onerror", cb3x)
    };
    mJ7C.bTD3x = function () {
        this.ZX9O("onloaded")
    };
    mJ7C.cvh0x = function (Y3x) {
        this.constructor.A2x(this.OO5T).Ku4y(Y3x)
    };
    mJ7C.bUe4i = function (cb3x) {
        var R3x = this.Bi1x(this.wi0x);
        if (!R3x) return;
        if (!!cb3x) R3x.error++;
        R3x.loaded++;
        if (R3x.loaded < R3x.total) return;
        this.bRZ3x(this.wi0x);
        this.z2x(R3x.error > 0 ? "onerror" : "onloaded")
    };
    mJ7C.cvf0x = function (cb3x) {
        this.bUe4i(!0)
    };
    mJ7C.cvg0x = function () {
        this.bUe4i()
    };
    mJ7C.Ku4y = function (Y3x) {
        Y3x = k2x.bqb6V(Y3x);
        if (!Y3x) {
            this.z2x("onerror", {
                code: eo4s.bwB7u,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kK6E = Y3x;
        if (!!this.Ks4w) this.kK6E += (this.kK6E.indexOf("?") < 0 ? "?" : "&") + this.Ks4w;
        if (this.Bi1x("loaded")[this.kK6E]) {
            try {
                this.z2x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T3x();
            return this
        }
        var R3x = this.Bi1x(this.kK6E),
            gl5q;
        if (!!R3x) {
            R3x.bind.unshift(this);
            R3x.timer = window.clearTimeout(R3x.timer)
        } else {
            gl5q = this.bac9T();
            R3x = {
                request: gl5q,
                bind: [this]
            };
            this.bSB3x(this.kK6E, R3x);
            h2x.s2x(gl5q, "load", this.bTD3x.g2x(this));
            h2x.s2x(gl5q, "error", this.eK4O.g2x(this, {
                code: eo4s.bwn7g,
                message: "无法加载指定资源文件[" + this.kK6E + "]！"
            }))
        }
        if (this.bjk4o != 0) R3x.timer = window.setTimeout(this.eK4O.g2x(this, {
            code: eo4s.bSX3x,
            message: "指定资源文件[" + this.kK6E + "]载入超时！"
        }), this.bjk4o || gN5S);
        if (!!gl5q) this.bjd4h(gl5q);
        this.z2x("onloading");
        return this
    };
    mJ7C.bUn4r = function (i2x) {
        if (!i2x || !i2x.length) {
            this.z2x("onerror", {
                code: eo4s.bwB7u,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.wi0x = k2x.ob7U();
        var R3x = {
            error: 0,
            loaded: 0,
            total: i2x.length
        };
        this.bSB3x(this.wi0x, R3x);
        for (var i = 0, l = i2x.length; i < l; i++) {
            if (!i2x[i]) {
                R3x.total--;
                continue
            }
            this.cvh0x(i2x[i])
        }
        this.z2x("onloading");
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        be3x = c2x("nej.h"),
        O2x = c2x("nej.ut.j"),
        Pe5j;
    if (!!O2x.biJ4N) return;
    O2x.biJ4N = NEJ.C();
    Pe5j = O2x.biJ4N.N2x(O2x.OK5P);
    Pe5j.bac9T = function () {
        var eO4S = a2x.dh4l("iframe");
        eO4S.width = 0;
        eO4S.height = 0;
        eO4S.style.display = "none";
        return eO4S
    };
    Pe5j.bjd4h = function (gl5q) {
        gl5q.src = this.kK6E;
        document.body.appendChild(gl5q)
    };
    Pe5j.eK4O = function (cb3x) {
        var eO4S = (this.Bi1x(this.kK6E) || bb3x).request;
        this.ZX9O("onerror", cb3x);
        be3x.bdF0x(eO4S)
    };
    Pe5j.bTD3x = function () {
        var mI7B = null,
            eO4S = (this.Bi1x(this.kK6E) || bb3x).request;
        try {
            mI7B = eO4S.contentWindow.document.body
        } catch (ex) {}
        this.ZX9O("onloaded", mI7B);
        be3x.bdF0x(eO4S)
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        O2x = c2x("nej.ut.j"),
        biH4L;
    if (!!O2x.ZP9G) return;
    O2x.ZP9G = NEJ.C();
    biH4L = O2x.ZP9G.N2x(O2x.OK5P);
    biH4L.bac9T = function () {
        return a2x.dh4l("link")
    };
    biH4L.bjd4h = function (gl5q) {
        gl5q.href = this.kK6E;
        document.head.appendChild(gl5q)
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        O2x = c2x("nej.ut.j"),
        ZM9D;
    if (!!O2x.ZL9C) return;
    O2x.ZL9C = NEJ.C();
    ZM9D = O2x.ZL9C.N2x(O2x.OK5P);
    ZM9D.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.bxA7t = e2x.async;
        this.biu4y = e2x.charset;
        this.OO5T.async = !1;
        this.OO5T.charset = this.biu4y
    };
    ZM9D.bac9T = function () {
        var gl5q = a2x.dh4l("script");
        if (this.bxA7t != null) gl5q.async = !!this.bxA7t;
        if (this.biu4y != null) gl5q.charset = this.biu4y;
        return gl5q
    };
    ZM9D.bSH3x = function (gl5q) {
        a2x.cJ4N(gl5q)
    }
})();
(function () {
    var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j");
    v2x.cvq0x = function (Y3x, e2x) {
        O2x.ZL9C.A2x(e2x).Ku4y(Y3x);
        return this
    };
    v2x.cvs0x = function (i2x, e2x) {
        O2x.ZL9C.A2x(e2x).bUn4r(i2x);
        return this
    };
    v2x.cEV2x = function (Y3x, e2x) {
        O2x.ZP9G.A2x(e2x).Ku4y(Y3x);
        return this
    };
    v2x.cwk0x = function (i2x, e2x) {
        O2x.ZP9G.A2x(e2x).bUn4r(i2x);
        return this
    };
    v2x.bzv8n = function (Y3x, e2x) {
        O2x.biJ4N.A2x(e2x).Ku4y(Y3x);
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        R3x = {},
        tS9J = +(new Date) + "-";
    a2x.da4e = function () {
        var cH3x = 0;
        var Pj5o = function () {
            if (cH3x > 0) return;
            cH3x = 0;
            h2x.z2x(document, "templateready");
            h2x.hg5l(document, "templateready")
        };
        var ZH9y = function (gj5o, e2x) {
            var cR4V = a2x.t2x(gj5o, "src");
            if (!cR4V) return;
            e2x = e2x || bb3x;
            var gd5i = e2x.root;
            if (!gd5i) {
                gd5i = gj5o.ownerDocument.location.href
            } else {
                gd5i = k2x.bqb6V(gd5i)
            }
            cR4V = cR4V.split(",");
            k2x.bd3x(cR4V, function (D2x, r2x, i2x) {
                i2x[r2x] = k2x.bqb6V(D2x, gd5i)
            });
            return cR4V
        };
        var cwn0x = function (gj5o, e2x) {
            if (!gj5o) return;
            var cR4V = ZH9y(gj5o, e2x);
            if (!!cR4V) v2x.cwk0x(cR4V, {
                version: a2x.t2x(gj5o, "version")
            });
            a2x.bIy0x(gj5o.value)
        };
        var cwo0x = function (D2x) {
            cH3x--;
            a2x.bIS0x(D2x);
            Pj5o()
        };
        var cwr0x = function (gj5o, e2x) {
            if (!gj5o) return;
            var cR4V = ZH9y(gj5o, e2x),
                eQ4U = gj5o.value;
            if (!!cR4V) {
                cH3x++;
                var e2x = {
                    version: a2x.t2x(gj5o, "version"),
                    onloaded: cwo0x.g2x(null, eQ4U)
                };
                window.setTimeout(v2x.cvs0x.g2x(v2x, cR4V, e2x), 0);
                return
            }
            a2x.bIS0x(eQ4U)
        };
        var cws0x = function (mI7B) {
            cH3x--;
            a2x.da4e(mI7B);
            Pj5o()
        };
        var cwt0x = function (gj5o, e2x) {
            if (!gj5o) return;
            var cR4V = ZH9y(gj5o, e2x)[0];
            if (!!cR4V) {
                cH3x++;
                var e2x = {
                    version: a2x.t2x(gj5o, "version"),
                    onloaded: cws0x
                };
                window.setTimeout(v2x.bzv8n.g2x(v2x, cR4V, e2x), 0)
            }
        };
        var cwI0x = function (C2x, cG3x) {
            cH3x--;
            a2x.Kw4A(C2x, cG3x || "");
            Pj5o()
        };
        var cwJ0x = function (gj5o, e2x) {
            if (!gj5o || !gj5o.id) return;
            var C2x = gj5o.id,
                cR4V = ZH9y(gj5o, e2x)[0];
            if (!!cR4V) {
                cH3x++;
                var Y3x = cR4V + (cR4V.indexOf("?") < 0 ? "?" : "&") + (a2x.t2x(gj5o, "version") || ""),
                    e2x = {
                        type: "text",
                        method: "GET",
                        onload: cwI0x.g2x(null, C2x)
                    };
                window.setTimeout(v2x.bn3x.g2x(v2x, Y3x, e2x), 0)
            }
        };
        var cxH0x = function (f2x, e2x) {
            var u2x = f2x.name.toLowerCase();
            switch (u2x) {
                case "jst":
                    a2x.eu4y(f2x, !0);
                    return;
                case "txt":
                    a2x.Kw4A(f2x.id, f2x.value || "");
                    return;
                case "ntp":
                    a2x.ix5C(f2x.value || "", f2x.id);
                    return;
                case "js":
                    cwr0x(f2x, e2x);
                    return;
                case "css":
                    cwn0x(f2x, e2x);
                    return;
                case "html":
                    cwt0x(f2x, e2x);
                    return;
                case "res":
                    cwJ0x(f2x, e2x);
                    return
            }
        };
        I2x.fJ5O.A2x({
            element: document,
            event: "templateready",
            oneventadd: Pj5o
        });
        return function (F2x, e2x) {
            F2x = a2x.B2x(F2x);
            if (!!F2x) {
                var i2x = F2x.tagName == "TEXTAREA" ? [F2x] : F2x.getElementsByTagName("textarea");
                k2x.bd3x(i2x, function (f2x) {
                    cxH0x(f2x, e2x)
                });
                a2x.cJ4N(F2x, !0)
            }
            Pj5o();
            return this
        }
    }();
    a2x.Kw4A = function (J2x, D2x) {
        R3x[J2x] = D2x || "";
        return this
    };
    a2x.iG5L = function (J2x) {
        return R3x[J2x] || ""
    };
    a2x.ix5C = function (F2x, J2x) {
        J2x = J2x || k2x.ob7U();
        F2x = a2x.B2x(F2x) || F2x;
        a2x.Kw4A(tS9J + J2x, F2x);
        a2x.mn7g(F2x);
        return J2x
    };
    a2x.dy4C = function (J2x) {
        if (!J2x) return null;
        J2x = tS9J + J2x;
        var D2x = a2x.iG5L(J2x);
        if (!D2x) return null;
        if (k2x.fF5K(D2x)) {
            D2x = a2x.nK7D(D2x);
            a2x.Kw4A(J2x, D2x)
        }
        return D2x.cloneNode(!0)
    };
    a2x.Bq1x = function () {
        var Ib3x = function (D2x, J2x) {
            return J2x == "offset" || J2x == "limit"
        };
        return function (i2x, p2x, e2x) {
            var bs3x = [];
            if (!i2x || !i2x.length || !p2x) return bs3x;
            e2x = e2x || bb3x;
            var dr4v = i2x.length,
                jO6I = parseInt(e2x.offset) || 0,
                fP5U = Math.min(dr4v, jO6I + (parseInt(e2x.limit) || dr4v)),
                cq3x = {
                    total: i2x.length,
                    range: [jO6I, fP5U]
                };
            NEJ.X(cq3x, e2x, Ib3x);
            for (var i = jO6I, cz3x; i < fP5U; i++) {
                cq3x.index = i;
                cq3x.data = i2x[i];
                cz3x = p2x.A2x(cq3x);
                var C2x = cz3x.FK3x();
                R3x[C2x] = cz3x;
                cz3x.T3x = cz3x.T3x.eC4G(function (C2x, cz3x) {
                    delete R3x[C2x];
                    delete cz3x.T3x
                }.g2x(null, C2x, cz3x));
                bs3x.push(cz3x)
            }
            return bs3x
        }
    }();
    a2x.bCS9J = function (C2x) {
        return R3x[C2x]
    };
    a2x.cEF2x = function (dZ4d, e2x) {
        e2x = e2x || bb3x;
        a2x.da4e(e2x.tid || "template-box");
        h2x.s2x(document, "templateready", function () {
            dZ4d.A2x().z2x("onshow", e2x)
        })
    };
    c2x("dbg").dumpTC = function () {
        return R3x
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ui"),
        b2x;
    if (!!O2x.eg4k) return;
    O2x.eg4k = NEJ.C();
    b2x = O2x.eg4k.N2x(I2x.cI3x);
    b2x.cx3x = function () {
        this.cF3x();
        a2x.bAr8j();
        this.cf3x();
        this.bW3x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.cxQ0x(e2x.clazz);
        this.bDI9z(e2x.parent)
    };
    b2x.bD3x = function () {
        this.bG3x();
        this.bDR9I();
        delete this.gk5p;
        a2x.mn7g(this.n2x);
        a2x.x2x(this.n2x, this.bhZ4d);
        delete this.bhZ4d
    };
    b2x.cf3x = br3x;
    b2x.bW3x = function () {
        if (!this.ce3x) this.Kz4D();
        this.n2x = a2x.dy4C(this.ce3x);
        if (!this.n2x) this.n2x = a2x.dh4l("div", this.mk7d);
        a2x.y2x(this.n2x, this.mk7d)
    };
    b2x.Kz4D = br3x;
    b2x.cxQ0x = function (ec4g) {
        this.bhZ4d = ec4g || "";
        a2x.y2x(this.n2x, this.bhZ4d)
    };
    b2x.cyP1x = function () {
        if (!this.mk7d) return;
        a2x.y2x(this.gk5p, this.mk7d + "-parent")
    };
    b2x.bDR9I = function () {
        if (!this.mk7d) return;
        a2x.x2x(this.gk5p, this.mk7d + "-parent")
    };
    b2x.lA7t = function () {
        return this.n2x
    };
    b2x.bDI9z = function (bI3x) {
        if (!this.n2x) return this;
        this.bDR9I();
        if (k2x.gG5L(bI3x)) {
            this.gk5p = bI3x(this.n2x)
        } else {
            this.gk5p = a2x.B2x(bI3x);
            if (!!this.gk5p) this.gk5p.appendChild(this.n2x)
        }
        this.cyP1x();
        return this
    };
    b2x.L2x = function () {
        if (!this.gk5p || !this.n2x || this.n2x.parentNode == this.gk5p) return this;
        this.gk5p.appendChild(this.n2x);
        return this
    };
    b2x.bt3x = function () {
        a2x.mn7g(this.n2x);
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        be3x = c2x("nej.h"),
        O2x = c2x("nej.ui"),
        wc0x, bFg9X;
    if (!!O2x.Pu5z) return;
    O2x.Pu5z = NEJ.C();
    wc0x = O2x.Pu5z.N2x(O2x.eg4k);
    bFg9X = O2x.Pu5z.ct3x;
    wc0x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.wN0x("oncontentready", e2x.oncontentready || this.cyW1x.g2x(this));
        this.czf1x = !!e2x.nohack;
        this.czg1x = !!e2x.destroyable;
        this.KB4F(e2x.content)
    };
    wc0x.bD3x = function () {
        this.z2x("onbeforerecycle");
        this.bG3x();
        this.ZC9t();
        this.KB4F("");
        a2x.fb4f(this.n2x, {
            top: "",
            left: ""
        })
    };
    wc0x.cyW1x = br3x;
    wc0x.KD4H = br3x;
    wc0x.ZC9t = function () {
        a2x.mn7g(this.n2x);
        if (!!this.oe7X) {
            this.oe7X = be3x.buT7M(this.n2x);
            delete this.oe7X
        }
    };
    wc0x.KB4F = function (bo3x) {
        if (!this.n2x || !this.Br1x || bo3x == null) return this;
        bo3x = bo3x || "";
        k2x.fF5K(bo3x) ? this.Br1x.innerHTML = bo3x : this.Br1x.appendChild(bo3x);
        this.z2x("oncontentready", this.Br1x);
        return this
    };
    wc0x.gL5Q = function (bi3x) {
        var D2x = bi3x.top;
        if (D2x != null) {
            D2x += "px";
            a2x.ba3x(this.n2x, "top", D2x);
            a2x.ba3x(this.oe7X, "top", D2x)
        }
        var D2x = bi3x.left;
        if (D2x != null) {
            D2x += "px";
            a2x.ba3x(this.n2x, "left", D2x);
            a2x.ba3x(this.oe7X, "left", D2x)
        }
        return this
    };
    wc0x.L2x = function () {
        a2x.ba3x(this.n2x, "visibility", "hidden");
        bFg9X.L2x.apply(this, arguments);
        this.KD4H();
        a2x.ba3x(this.n2x, "visibility", "");
        if (!this.czf1x) {
            this.oe7X = be3x.oe7X(this.n2x)
        }
        return this
    };
    wc0x.bt3x = function () {
        this.czg1x ? this.T3x() : this.ZC9t();
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        a2x = c2x("nej.e"),
        O2x = c2x("nej.ui"),
        Bs1x;
    if (!!O2x.ZA9r) return;
    O2x.ZA9r = NEJ.C();
    Bs1x = O2x.ZA9r.N2x(O2x.eg4k);
    Bs1x.bk3x = function (e2x) {
        this.PC6w();
        this.bm3x(this.cAf1x(e2x));
        this.cd3x.onbeforerecycle = this.T3x.g2x(this);
        this.oH8z = this.bhG3x()
    };
    Bs1x.bD3x = function () {
        this.z2x("onbeforerecycle");
        this.bG3x();
        delete this.cd3x;
        a2x.mn7g(this.n2x);
        var Bv1x = this.oH8z;
        if (!!Bv1x) {
            delete this.oH8z;
            Bv1x.T3x()
        }
    };
    Bs1x.bhG3x = br3x;
    Bs1x.cAf1x = function (e2x) {
        var o2x = {};
        k2x.eE4I(e2x, function (p2x, J2x) {
            this.cd3x.hasOwnProperty(J2x) ? this.cd3x[J2x] = p2x : o2x[J2x] = p2x
        }, this);
        return o2x
    };
    Bs1x.PC6w = function () {
        this.cd3x = {
            clazz: "",
            parent: null,
            content: this.n2x,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    Bs1x.L2x = function () {
        if (!!this.oH8z) this.oH8z.L2x();
        this.z2x("onaftershow");
        return this
    };
    Bs1x.bt3x = function () {
        if (!!this.oH8z) this.oH8z.bt3x();
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        eo4s = c2x("nej.g"),
        be3x = c2x("nej.h"),
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.ui"),
        PF6z, bIc0x;
    if (!!O2x.KE4I) return;
    var iS6M = a2x.tw9n(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + eo4s.bwc7V + ");}");
    O2x.KE4I = NEJ.C();
    PF6z = O2x.KE4I.N2x(O2x.eg4k);
    bIc0x = O2x.KE4I.ct3x;
    PF6z.bk3x = function (e2x) {
        this.bm3x(e2x);
        var bo3x = e2x.content || "&nbsp;";
        k2x.fF5K(bo3x) ? this.n2x.innerHTML = bo3x : this.n2x.appendChild(bo3x)
    };
    PF6z.bD3x = function () {
        this.bG3x();
        this.n2x.innerHTML = "&nbsp;"
    };
    PF6z.cf3x = function () {
        this.mk7d = iS6M
    };
    PF6z.L2x = function () {
        be3x.buX7Q(this.n2x);
        bIc0x.L2x.apply(this, arguments);
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.ut"),
        wg0x;
    if (!!O2x.vG0x) return;
    O2x.vG0x = NEJ.C();
    wg0x = O2x.vG0x.N2x(O2x.cI3x);
    wg0x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.cAg1x = !!e2x.overflow;
        this.n2x = a2x.B2x(e2x.body);
        this.Bz1x = a2x.B2x(e2x.view) || a2x.bFo9f(this.n2x);
        this.bJG0x = a2x.B2x(e2x.mbar) || this.n2x;
        this.Zu9l = parseInt(e2x.direction) || 0;
        if (!!e2x.isRelative) {
            this.n2x.style.position = "relative";
            this.bht3x = true;
            this.bhq3x()
        }
        this.bX3x([
            [document, "mouseup", this.bho3x.g2x(this)],
            [document, "mousemove", this.bhk3x.g2x(this)],
            [this.bJG0x, "mousedown", this.PK6E.g2x(this)]
        ])
    };
    wg0x.bhq3x = function () {
        if (!!this.bht3x) {
            this.KJ4N = a2x.hN5S(this.n2x, this.Bz1x);
            this.KJ4N.x -= parseInt(a2x.de4i(this.n2x, "left")) || 0;
            this.KJ4N.y -= parseInt(a2x.de4i(this.n2x, "top")) || 0
        }
    };
    wg0x.bD3x = function () {
        this.bG3x();
        delete this.n2x;
        delete this.bJG0x;
        delete this.Bz1x
    };
    wg0x.bgR1x = function () {
        return {
            x: Math.max(this.Bz1x.clientWidth, this.Bz1x.scrollWidth) - this.n2x.offsetWidth,
            y: Math.max(this.Bz1x.clientHeight, this.Bz1x.scrollHeight) - this.n2x.offsetHeight
        }
    };
    wg0x.PK6E = function (d2x) {
        h2x.bh3x(d2x);
        if (!!this.hS5X) return;
        this.hS5X = {
            x: h2x.jy6s(d2x),
            y: h2x.lY7R(d2x)
        };
        this.bKL0x = this.bgR1x();
        this.z2x("ondragstart", d2x)
    };
    wg0x.bhk3x = function (d2x) {
        if (!this.hS5X) return;
        var bi3x = {
            x: h2x.jy6s(d2x),
            y: h2x.lY7R(d2x)
        };
        var pS8K = bi3x.x - this.hS5X.x,
            pR8J = bi3x.y - this.hS5X.y,
            D2x = {
                top: (parseInt(a2x.de4i(this.n2x, "top")) || 0) + pR8J,
                left: (parseInt(a2x.de4i(this.n2x, "left")) || 0) + pS8K
            };
        if (this.bht3x) {
            this.bhq3x();
            D2x.top = D2x.top + this.KJ4N.y;
            D2x.left = D2x.left + this.KJ4N.x
        }
        this.hS5X = bi3x;
        this.gL5Q(D2x)
    };
    wg0x.bho3x = function (d2x) {
        if (!this.hS5X) return;
        delete this.bKL0x;
        delete this.hS5X;
        this.z2x("ondragend", this.bgP1x())
    };
    wg0x.gL5Q = function (d2x) {
        if (!this.cAg1x) {
            var bLy1x = this.bKL0x || this.bgR1x();
            d2x.top = Math.min(bLy1x.y, Math.max(0, d2x.top));
            d2x.left = Math.min(bLy1x.x, Math.max(0, d2x.left))
        }
        var ci3x = this.n2x.style;
        if (this.bht3x) {
            this.bhq3x();
            d2x.top = d2x.top - this.KJ4N.y;
            d2x.left = d2x.left - this.KJ4N.x
        }
        if (this.Zu9l == 0 || this.Zu9l == 2) ci3x.top = d2x.top + "px";
        if (this.Zu9l == 0 || this.Zu9l == 1) ci3x.left = d2x.left + "px";
        this.z2x("onchange", d2x);
        return this
    };
    wg0x.bgP1x = function () {
        return {
            left: parseInt(a2x.de4i(this.n2x, "left")) || 0,
            top: parseInt(a2x.de4i(this.n2x, "top")) || 0
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = NEJ.P("nej.e"),
        h2x = NEJ.P("nej.v"),
        k2x = NEJ.P("nej.u"),
        I2x = NEJ.P("nej.ut"),
        O2x = NEJ.P("nej.ui"),
        iS6M, gg5l, b2x, K2x;
    if (!!O2x.Zk9b) return;
    O2x.Zk9b = NEJ.C();
    b2x = O2x.Zk9b.N2x(O2x.Pu5z);
    K2x = O2x.Zk9b.ct3x;
    b2x.cx3x = function () {
        this.sd9U = {};
        this.kC6w = {
            onchange: this.bhk3x.g2x(this)
        };
        this.cF3x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.cAt1x(e2x.mask);
        this.cAF1x(e2x.align);
        this.BF2x(e2x.title);
        if (!e2x.draggable) return;
        this.je6Y = I2x.vG0x.A2x(this.kC6w)
    };
    b2x.bD3x = function () {
        this.bG3x();
        delete this.qW8O;
        delete this.PW6Q;
        if (!!this.BJ2x) {
            this.BJ2x.T3x();
            delete this.BJ2x
        }
        if (!!this.je6Y) {
            this.je6Y.T3x();
            delete this.je6Y
        }
    };
    b2x.cf3x = function () {
        this.mk7d = iS6M;
        this.ce3x = gg5l
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.dk4o(this.n2x);
        this.Br1x = i2x[1];
        this.kC6w.mbar = i2x[0];
        this.kC6w.body = this.n2x;
        h2x.s2x(i2x[2], "mousedown", this.cAY1x.g2x(this));
        h2x.s2x(this.kC6w.mbar, "mousedown", this.PK6E.g2x(this));
        this.bOn1x = a2x.dk4o(this.kC6w.mbar)[0]
    };
    b2x.cAY1x = function (d2x) {
        h2x.bh3x(d2x);
        this.z2x("onclose", d2x);
        if (!d2x.stopped) {
            this.bt3x()
        }
    };
    b2x.PK6E = function (d2x) {
        h2x.z2x(document, "click")
    };
    b2x.bhk3x = function (d2x) {
        if (!this.oe7X) return;
        a2x.fb4f(this.oe7X, {
            top: d2x.top + "px",
            left: d2x.left + "px"
        })
    };
    b2x.KD4H = function () {
        var ev4z = [function () {
                return 0
            }, function (oi8a, mC7v, bi3x, J2x) {
                if (J2x == "top" && window.top != window.self) {
                    var Zg9X = 0,
                        Ey2x = 0;
                    if (top.g_topBarHeight) Zg9X = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight) Ey2x = top.g_bottomBarHeight;
                    if (oi8a.top <= Zg9X) {
                        var bgB1x = Math.max(0, (mC7v.height - (Zg9X - oi8a.top) - Ey2x - bi3x.height) / 2);
                        return bgB1x + Zg9X
                    } else {
                        var bgB1x = Math.max(0, (mC7v.height - Ey2x - bi3x.height) / 2);
                        return bgB1x + oi8a.top
                    }
                }
                return Math.max(0, oi8a[J2x] + (mC7v[iq5v[J2x]] - bi3x[iq5v[J2x]]) / 2)
            }, function (oi8a, mC7v, bi3x, J2x) {
                return oi8a[J2x] + (mC7v[iq5v[J2x]] - bi3x[iq5v[J2x]])
            }],
            cBc1x = ["left", "top"],
            iq5v = {
                left: "width",
                top: "height"
            };
        return function () {
            var D2x = {},
                ci3x = this.n2x.style,
                jF6z = a2x.ov8n(),
                oi8a = {
                    left: jF6z.scrollLeft,
                    top: jF6z.scrollTop
                },
                mC7v = {
                    width: jF6z.clientWidth,
                    height: jF6z.clientHeight
                },
                bi3x = {
                    width: this.n2x.offsetWidth,
                    height: this.n2x.offsetHeight
                },
                dp4t = {
                    left: jF6z.clientWidth - this.n2x.offsetWidth,
                    top: jF6z.clientHeight - this.n2x.offsetHeight
                };
            k2x.bd3x(cBc1x, function (J2x, r2x) {
                var du4y = ev4z[this.qW8O[r2x]];
                if (!du4y) return;
                D2x[J2x] = du4y(oi8a, mC7v, bi3x, J2x)
            }, this);
            this.gL5Q(D2x)
        }
    }();
    b2x.cBg1x = function () {
        if (!this.BJ2x) {
            if (!this.PW6Q) return;
            this.sd9U.parent = this.gk5p;
            this.BJ2x = this.PW6Q.A2x(this.sd9U)
        }
        this.BJ2x.L2x()
    };
    b2x.ZC9t = function () {
        if (!!this.BJ2x) this.BJ2x.bt3x();
        K2x.ZC9t.apply(this, arguments)
    };
    b2x.cAt1x = function (lv7o) {
        if (!!lv7o) {
            if (lv7o instanceof O2x.KE4I) {
                this.BJ2x = lv7o;
                return
            }
            if (k2x.gG5L(lv7o)) {
                this.PW6Q = lv7o;
                return
            }
            this.PW6Q = O2x.KE4I;
            if (k2x.fF5K(lv7o)) this.sd9U.clazz = lv7o;
            return
        }
        this.PW6Q = null
    };
    b2x.BF2x = function (em4q, dR4V) {
        if (!!this.bOn1x) {
            var VH7A = !dR4V ? "innerText" : "innerHTML";
            this.bOn1x[VH7A] = em4q || "标题"
        }
        return this
    };
    b2x.cAF1x = function () {
        var dg4k = /\s+/,
            cBj1x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cBp1x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function (oh8Z) {
            this.qW8O = (oh8Z || "").split(dg4k);
            var ck3x = cBj1x[this.qW8O[0]];
            if (ck3x == null) ck3x = 1;
            this.qW8O[0] = ck3x;
            var ck3x = cBp1x[this.qW8O[1]];
            if (ck3x == null) ck3x = 1;
            this.qW8O[1] = ck3x;
            return this
        }
    }();
    b2x.L2x = function () {
        K2x.L2x.apply(this, arguments);
        this.cBg1x();
        return this
    };
    iS6M = a2x.tw9n(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gg5l = a2x.ix5C('<div class="' + iS6M + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ui"),
        bgA1x;
    if (!!O2x.Ze9V) return;
    O2x.Ze9V = NEJ.C();
    bgA1x = O2x.Ze9V.N2x(O2x.ZA9r);
    bgA1x.bhG3x = function () {
        return O2x.Zk9b.A2x(this.cd3x)
    };
    bgA1x.PC6w = function () {
        O2x.Ze9V.ct3x.PC6w.apply(this, arguments);
        this.cd3x.mask = null;
        this.cd3x.title = "标题";
        this.cd3x.align = "";
        this.cd3x.draggable = !1;
        this.cd3x.onclose = null
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        bc3x = c2x("nej.ui"),
        m2x = c2x("nm.l"),
        b2x, K2x;
    m2x.el4p = NEJ.C();
    b2x = m2x.el4p.N2x(bc3x.Ze9V);
    b2x.bk3x = function (e2x) {
        e2x.clazz = "m-layer z-show " + (e2x.clazz || "");
        e2x.nohack = true;
        e2x.draggable = true;
        this.bm3x(e2x)
    };
    b2x.dY4c = function (f2x, bH3x) {
        if (!f2x) return;
        a2x.ba3x(f2x, "display", !bH3x ? "none" : "");
        f2x.lastChild.innerText = bH3x || ""
    };
    b2x.dX4b = function (gF5K, cZ4d, Qf6Z, Qh6b) {
        var dZ4d = "js-lock";
        if (cZ4d === undefined) return a2x.bF3x(gF5K, dZ4d);
        !cZ4d ? a2x.x2x(gF5K, dZ4d) : a2x.y2x(gF5K, dZ4d);
        gF5K.firstChild.innerText = !cZ4d ? Qf6Z : Qh6b
    };
    m2x.el4p.L2x = function (e2x) {
        e2x = e2x || {};
        if (e2x.mask === undefined) e2x.mask = "m-mask";
        if (e2x.parent === undefined) e2x.parent = document.body;
        if (e2x.draggable === undefined) e2x.draggable = true;
        !!this.fm5r && this.fm5r.T3x();
        this.fm5r = this.A2x(e2x);
        this.fm5r.L2x(e2x);
        return this.fm5r
    };
    m2x.el4p.bt3x = function () {
        !!this.fm5r && this.fm5r.T3x()
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        m2x = c2x("nm.l"),
        b2x, K2x;
    m2x.bgq1x = NEJ.C();
    b2x = m2x.bgq1x.N2x(m2x.el4p);
    K2x = m2x.bgq1x.ct3x;
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        if (e2x.bubble === undefined) e2x.bubble = true;
        this.Qi6c = e2x.bubble;
        this.qR8J = e2x.message || ""
    };
    b2x.cf3x = function () {
        this.ce3x = a2x.ix5C('<div class="lyct f-cb f-tc"></div>')
    };
    b2x.bW3x = function () {
        this.cg3x();
        h2x.s2x(this.n2x, "click", this.cL4P.g2x(this))
    };
    b2x.cL4P = function (d2x) {
        var f2x = h2x.W3x(d2x, "d:action");
        if (!f2x) return;
        if (f2x.href) h2x.cr3x(d2x);
        if (a2x.t2x(f2x, "action") == "close") this.bt3x();
        if (this.Qi6c === !1) h2x.sX9O(d2x);
        this.z2x("onaction", a2x.t2x(f2x, "action"))
    };
    b2x.L2x = function () {
        K2x.L2x.call(this);
        this.n2x.innerHTML = this.qR8J
    };
    var gK5P = a2x.eu4y('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l2x.nk7d = function () {
        var ei4m;
        var cz3x;
        var bgo1x = function (eL4P, U3x) {
            if (k2x.gG5L(eL4P, "function") && eL4P(U3x) != -1) cz3x.T3x()
        };
        var BP2x = function () {
            !!cz3x && cz3x.bt3x()
        };
        return function (e2x) {
            clearTimeout(ei4m);
            e2x = e2x || {};
            e2x.title = e2x.title || "提示";
            e2x.clazz = e2x.clazz || "";
            e2x.parent = e2x.parent || document.body;
            e2x.buttons = e2x.buttons || [];
            e2x.message = a2x.bZ3x(gK5P, e2x);
            e2x.onaction = bgo1x.g2x(null, e2x.action);
            if (e2x.mask === undefined) e2x.mask = true;
            if (e2x.draggable === undefined) e2x.draggable = true;
            !!cz3x && cz3x.T3x();
            cz3x = m2x.bgq1x.A2x(e2x);
            cz3x.L2x();
            if (e2x.autoclose) ei4m = setTimeout(BP2x.g2x(null), 2e3);
            return cz3x
        }
    }();
    l2x.fs5x = function (e2x) {
        e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w1";
        e2x.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e2x.btntxt || "确定"
        }];
        var cz3x = l2x.nk7d(e2x);
        return cz3x
    };
    l2x.hq5v = function (e2x) {
        e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w2";
        e2x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e2x.btnok || "确定",
            style: e2x.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e2x.btncc || "取消",
            style: e2x.ccstyle || ""
        }];
        var cz3x = l2x.nk7d(e2x);
        return cz3x
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u");
    a2x.cBs1x = function () {
        var gD5I = /[\r\n]/gi,
            R3x = {};
        var cBw1x = function (cK4O) {
            return (cK4O || "").replace(gD5I, "aa").length
        };
        var byd7W = function (C2x) {
            var bg3x = R3x[C2x],
                byg7Z = a2x.B2x(C2x),
                rh8Z = a2x.B2x(C2x + "-counter");
            if (!byg7Z || !bg3x) return;
            var d2x = {
                input: byg7Z.value
            };
            d2x.length = bg3x.onlength(d2x.input);
            d2x.delta = bg3x.max - d2x.length;
            bg3x.onchange(d2x);
            rh8Z.innerHTML = d2x.value || "剩余" + d2x.delta + "个字"
        };
        return function (F2x, e2x) {
            var C2x = a2x.lK7D(F2x);
            if (!C2x || !!R3x[C2x]) return;
            var bg3x = NEJ.X({}, e2x);
            bg3x.onchange = bg3x.onchange || br3x;
            bg3x.onlength = cBw1x;
            if (!bg3x.max) {
                var byF8x = parseInt(a2x.gx5C(C2x, "maxlength")),
                    byS8K = parseInt(a2x.t2x(C2x, "maxLength"));
                bg3x.max = byF8x || byS8K || 100;
                if (!byF8x && !!byS8K) bg3x.onlength = k2x.fw5B
            }
            R3x[C2x] = bg3x;
            h2x.s2x(C2x, "input", byd7W.g2x(null, C2x));
            var f2x = a2x.IN4R(C2x, {
                nid: bg3x.nid || "js-counter",
                clazz: bg3x.clazz
            });
            bg3x.xid = C2x + "-counter";
            f2x.id = bg3x.xid;
            byd7W(C2x)
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        be3x = c2x("nej.h");
    be3x.bgn1x = function (F2x, ec4g) {}
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        O2x = c2x("nej.p"),
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        be3x = c2x("nej.h");
    if (O2x.nr7k.trident) return;
    be3x.bgn1x = function () {
        var R3x = {};
        var Ir3x = function (d2x) {
            var dm4q = h2x.W3x(d2x);
            if (!!dm4q.value) return;
            a2x.ba3x(a2x.IN4R(dm4q), "display", "none")
        };
        var EC2x = function (d2x) {
            var dm4q = h2x.W3x(d2x);
            if (!!dm4q.value) return;
            a2x.ba3x(a2x.IN4R(dm4q), "display", "")
        };
        var cBE1x = function (dm4q, ec4g) {
            var C2x = a2x.lK7D(dm4q),
                iR6L = a2x.IN4R(dm4q, {
                    tag: "label",
                    clazz: ec4g
                });
            iR6L.htmlFor = C2x;
            var cG3x = a2x.gx5C(dm4q, "placeholder") || "";
            iR6L.innerText = cG3x == "null" ? "" : cG3x;
            var cc3x = dm4q.offsetHeight + "px";
            a2x.fb4f(iR6L, {
                left: 0,
                display: !dm4q.value ? "" : "none"
            })
        };
        return be3x.bgn1x.eC4G(function (d2x) {
            d2x.stopped = !0;
            var bf3x = d2x.args,
                dm4q = a2x.B2x(bf3x[0]);
            if (!!R3x[dm4q.id]) return;
            cBE1x(dm4q, bf3x[1]);
            R3x[dm4q.id] = !0;
            h2x.s2x(dm4q, "blur", EC2x.g2x(null));
            h2x.s2x(dm4q, "focus", Ir3x.g2x(null))
        })
    }()
})();
(function () {
    var c2x = NEJ.P,
        be3x = c2x("nej.h"),
        a2x = c2x("nej.e"),
        cX4b = c2x("nej.x");
    a2x.gn5s = cX4b.gn5s = function (F2x, ec4g) {
        be3x.bgn1x(F2x, a2x.t2x(F2x, "holder") || ec4g || "js-placeholder");
        return this
    };
    cX4b.isChange = !0
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        hR5W;
    if (!!O2x.Qk6e) return;
    O2x.Qk6e = NEJ.C();
    hR5W = O2x.Qk6e.N2x(O2x.cI3x);
    hR5W.cx3x = function () {
        this.cF3x();
        this.GZ3x = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hR5W.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.gm5r = document.forms[e2x.form] || a2x.B2x(e2x.form);
        this.bX3x([
            [this.gm5r, "keypress", this.cBF1x.g2x(this)]
        ]);
        this.qR8J = e2x.message || {};
        this.qR8J.pass = this.qR8J.pass || "&nbsp;";
        var fe4i = this.pH8z(this.gm5r, "focusMode", 1);
        if (!isNaN(fe4i)) {
            this.bAx8p = {
                mode: fe4i,
                clazz: e2x.focus
            }
        }
        this.BT2x = e2x.holder;
        this.GZ3x.tp.clazz = "js-mhd " + (e2x.tip || "js-tip");
        this.GZ3x.ok.clazz = "js-mhd " + (e2x.pass || "js-pass");
        this.GZ3x.er.clazz = "js-mhd " + (e2x.error || "js-error");
        this.bAP8H = e2x.invalid || "js-invalid";
        this.cBM1x(e2x);
        this.gH5M();
        if (!!this.BU2x) this.BU2x.focus()
    };
    hR5W.bD3x = function () {
        this.bG3x();
        delete this.qR8J;
        delete this.BU2x;
        delete this.Hv3x;
        delete this.gm5r;
        delete this.bBQ8I;
        delete this.Qp6j
    };
    hR5W.pH8z = function (f2x, wu0x, u2x) {
        var D2x = a2x.t2x(f2x, wu0x);
        switch (u2x) {
            case 1:
                return parseInt(D2x);
            case 2:
                return (D2x || "").toLowerCase() == "true";
            case 3:
                return this.bfQ1x(D2x)
        }
        return D2x
    };
    hR5W.Cb2x = function (D2x, u2x) {
        if (u2x == "date") return this.bfQ1x(D2x);
        return parseInt(D2x)
    };
    hR5W.YT9K = function () {
        var ke6Y = /^button|submit|reset|image|hidden|file$/i;
        return function (f2x) {
            f2x = this.B2x(f2x) || f2x;
            var u2x = f2x.type;
            return !!f2x.name && !ke6Y.test(f2x.type || "")
        }
    }();
    hR5W.cCa1x = function () {
        var ke6Y = /^hidden$/i;
        return function (f2x) {
            if (this.YT9K(f2x)) return !0;
            f2x = this.B2x(f2x) || f2x;
            var u2x = f2x.type || "";
            return ke6Y.test(u2x)
        }
    }();
    hR5W.bfQ1x = function () {
        var dg4k = /[-\/]/;
        var cCI2x = function (D2x) {
            if (!D2x) return "";
            D2x = D2x.split(dg4k);
            D2x.push(D2x.shift());
            return D2x.join("/")
        };
        return function (D2x) {
            if ((D2x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cCI2x(D2x))
        }
    }();
    hR5W.cBF1x = function (d2x) {
        if (d2x.keyCode != 13) return;
        this.z2x("onenter", d2x)
    };
    hR5W.cCP2x = function (C2x, V3x) {
        var sj9a = this.Qp6j[V3x],
            D2x = this.pH8z(C2x, V3x);
        if (!D2x || !sj9a) return;
        this.YR9I(C2x, sj9a);
        this.bfF1x(C2x, V3x, D2x)
    };
    hR5W.cCU2x = function (C2x, V3x) {
        try {
            var bCX9O = this.pH8z(C2x, V3x);
            if (!bCX9O) return;
            var D2x = new RegExp(bCX9O);
            this.bfF1x(C2x, V3x, D2x);
            this.YR9I(C2x, this.Qp6j[V3x])
        } catch (e) {}
    };
    hR5W.cCV2x = function (C2x, V3x) {
        var sj9a = this.Qp6j[V3x];
        if (!!sj9a && this.pH8z(C2x, V3x, 2)) this.YR9I(C2x, sj9a)
    };
    hR5W.bfA1x = function (C2x, V3x, D2x) {
        D2x = parseInt(D2x);
        if (isNaN(D2x)) return;
        this.bfF1x(C2x, V3x, D2x);
        this.YR9I(C2x, this.Qp6j[V3x])
    };
    hR5W.bDa9R = function (C2x, V3x) {
        this.bfA1x(C2x, V3x, this.pH8z(C2x, V3x))
    };
    hR5W.bDc9T = function (C2x, V3x) {
        this.bfA1x(C2x, V3x, a2x.gx5C(C2x, V3x))
    };
    hR5W.bDf9W = function (C2x, V3x, u2x) {
        var D2x = this.Cb2x(this.pH8z(C2x, V3x), this.pH8z(C2x, "type"));
        this.bfA1x(C2x, V3x, D2x)
    };
    hR5W.cDb2x = function () {
        var gD5I = /^input|textarea$/i;
        var Ir3x = function (d2x) {
            this.pF8x(h2x.W3x(d2x))
        };
        var EC2x = function (d2x) {
            var f2x = h2x.W3x(d2x);
            if (!this.pH8z(f2x, "ignore", 2)) {
                this.bDD9u(f2x)
            }
        };
        return function (f2x) {
            if (this.pH8z(f2x, "autoFocus", 2)) this.BU2x = f2x;
            var qZ8R = a2x.gx5C(f2x, "placeholder");
            if (!!qZ8R && qZ8R != "null") a2x.gn5s(f2x, this.BT2x);
            if (!!this.bAx8p && gD5I.test(f2x.tagName)) a2x.my7r(f2x, this.bAx8p);
            var C2x = a2x.lK7D(f2x);
            this.cCV2x(C2x, "required");
            this.cCP2x(C2x, "type");
            this.cCU2x(C2x, "pattern");
            this.bDc9T(C2x, "maxlength");
            this.bDc9T(C2x, "minlength");
            this.bDa9R(C2x, "maxLength");
            this.bDa9R(C2x, "minLength");
            this.bDf9W(C2x, "min");
            this.bDf9W(C2x, "max");
            var V3x = f2x.name;
            this.qR8J[V3x + "-tip"] = this.pH8z(f2x, "tip");
            this.qR8J[V3x + "-error"] = this.pH8z(f2x, "message");
            this.pF8x(f2x);
            var bz3x = this.Hv3x[C2x],
                j2x = (bz3x || bb3x).data || bb3x,
                QC6w = this.pH8z(f2x, "counter", 2);
            if (QC6w && (j2x.maxlength || j2x.maxLength)) {
                a2x.cBs1x(C2x, {
                    nid: this.GZ3x.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bz3x && gD5I.test(f2x.tagName)) {
                this.bX3x([
                    [f2x, "focus", Ir3x.g2x(this)],
                    [f2x, "blur", EC2x.g2x(this)]
                ])
            } else if (this.pH8z(f2x, "focus", 2)) {
                this.bX3x([
                    [f2x, "focus", Ir3x.g2x(this)]
                ])
            }
        }
    }();
    hR5W.cBM1x = function () {
        var DQ2x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bfQ1x(v))
            }
        };
        var cDc2x = {
            required: function (f2x) {
                var u2x = f2x.type,
                    cDe2x = !f2x.value,
                    cDx2x = (u2x == "checkbox" || u2x == "radio") && !f2x.checked;
                if (cDx2x || cDe2x) return -1
            },
            type: function (f2x, e2x) {
                var dg4k = this.bBQ8I[e2x.type],
                    eQ4U = f2x.value.trim(),
                    cDA2x = !!dg4k.test && !dg4k.test(eQ4U),
                    cDG2x = k2x.gG5L(dg4k) && !dg4k.call(this, eQ4U);
                if (cDA2x || cDG2x) return -2
            },
            pattern: function (f2x, e2x) {
                if (!e2x.pattern.test(f2x.value)) return -3
            },
            maxlength: function (f2x, e2x) {
                if (f2x.value.length > e2x.maxlength) return -4
            },
            minlength: function (f2x, e2x) {
                if (f2x.value.length < e2x.minlength) return -5
            },
            maxLength: function (f2x, e2x) {
                if (k2x.fw5B(f2x.value) > e2x.maxLength) return -4
            },
            minLength: function (f2x, e2x) {
                if (k2x.fw5B(f2x.value) < e2x.minLength) return -5
            },
            min: function (f2x, e2x) {
                var gV5a = this.Cb2x(f2x.value, e2x.type);
                if (isNaN(gV5a) || gV5a < e2x.min) return -6
            },
            max: function (f2x, e2x) {
                var gV5a = this.Cb2x(f2x.value, e2x.type);
                if (isNaN(gV5a) || gV5a > e2x.max) return -7
            }
        };
        return function (e2x) {
            this.bBQ8I = NEJ.X(NEJ.X({}, DQ2x), e2x.type);
            this.Qp6j = NEJ.X(NEJ.X({}, cDc2x), e2x.attr)
        }
    }();
    hR5W.YR9I = function (C2x, zZ1x) {
        if (!k2x.gG5L(zZ1x)) return;
        var bz3x = this.Hv3x[C2x];
        if (!bz3x || !bz3x.func) {
            bz3x = bz3x || {};
            bz3x.func = [];
            this.Hv3x[C2x] = bz3x
        }
        bz3x.func.push(zZ1x)
    };
    hR5W.bfF1x = function (C2x, V3x, D2x) {
        if (!V3x) return;
        var bz3x = this.Hv3x[C2x];
        if (!bz3x || !bz3x.data) {
            bz3x = bz3x || {};
            bz3x.data = {};
            this.Hv3x[C2x] = bz3x
        }
        bz3x.data[V3x] = D2x
    };
    hR5W.bDD9u = function (f2x) {
        f2x = this.B2x(f2x) || f2x;
        var bz3x = this.Hv3x[a2x.lK7D(f2x)];
        if (!f2x || !bz3x || !this.YT9K(f2x)) return !0;
        var o2x;
        k2x.eE4I(bz3x.func, function (ev4z) {
            o2x = ev4z.call(this, f2x, bz3x.data);
            return o2x != null
        }, this);
        if (o2x == null) {
            var d2x = {
                target: f2x,
                form: this.gm5r
            };
            this.z2x("oncheck", d2x);
            o2x = d2x.value
        }
        var d2x = {
            target: f2x,
            form: this.gm5r
        };
        if (o2x != null) {
            d2x.code = o2x;
            this.z2x("oninvalid", d2x);
            if (!d2x.stopped) {
                this.cDF2x(f2x, d2x.value || this.qR8J[f2x.name + o2x])
            }
        } else {
            this.z2x("onvalid", d2x);
            if (!d2x.stopped) this.cDE2x(f2x, d2x.value)
        }
        return o2x == null
    };
    hR5W.zO1x = function () {
        var cDD2x = function (bdY0x, bdW0x) {
            return bdY0x == bdW0x ? "block" : "none"
        };
        var cDC2x = function (f2x, u2x, bH3x) {
            var qZ8R = bFl9c.call(this, f2x, u2x);
            if (!qZ8R && !!bH3x) qZ8R = a2x.IN4R(f2x, this.GZ3x[u2x]);
            return qZ8R
        };
        var bFl9c = function (f2x, u2x) {
            var qZ8R;
            if (u2x == "tp") qZ8R = a2x.B2x(f2x.name + "-tip");
            if (!qZ8R) qZ8R = a2x.H2x(f2x.parentNode, this.GZ3x[u2x].nid)[0];
            return qZ8R
        };
        return function (f2x, bH3x, u2x) {
            f2x = this.B2x(f2x) || f2x;
            if (!f2x) return;
            u2x == "er" ? a2x.y2x(f2x, this.bAP8H) : a2x.x2x(f2x, this.bAP8H);
            var qZ8R = cDC2x.call(this, f2x, u2x, bH3x);
            if (!!qZ8R && !!bH3x) qZ8R.innerHTML = bH3x;
            k2x.eE4I(this.GZ3x, function (D2x, J2x) {
                a2x.ba3x(bFl9c.call(this, f2x, J2x), "display", cDD2x(u2x, J2x))
            }, this)
        }
    }();
    hR5W.pF8x = function (f2x, bH3x) {
        this.zO1x(f2x, bH3x || this.qR8J[f2x.name + "-tip"], "tp");
        return this
    };
    hR5W.cDE2x = function (f2x, bH3x) {
        this.zO1x(f2x, bH3x || this.qR8J[f2x.name + "-pass"] || this.qR8J.pass, "ok");
        return this
    };
    hR5W.cDF2x = function (f2x, bH3x) {
        this.zO1x(f2x, bH3x || this.qR8J[f2x.name + "-error"], "er");
        return this
    };
    hR5W.iU6O = function () {
        var gD5I = /^(?:radio|checkbox)$/i;
        var cDB2x = function (D2x) {
            return D2x == null ? "" : D2x
        };
        var bFv9m = function (D2x, f2x) {
            if (gD5I.test(f2x.type || "")) {
                f2x.checked = D2x == f2x.value
            } else {
                f2x.value = cDB2x(D2x)
            }
        };
        return function (V3x, D2x) {
            var f2x = this.B2x(V3x);
            if (!f2x) return this;
            if (f2x.tagName == "SELECT" || !f2x.length) {
                bFv9m(D2x, f2x)
            } else {
                k2x.bd3x(f2x, bFv9m.g2x(null, D2x))
            }
            return this
        }
    }();
    hR5W.B2x = function (V3x) {
        return this.gm5r.elements[V3x]
    };
    hR5W.cDJ2x = function () {
        return this.gm5r
    };
    hR5W.YH8z = function () {
        var gD5I = /^radio|checkbox$/i,
            ke6Y = /^number|date$/;
        var cDz2x = function (by3x, f2x) {
            var V3x = f2x.name,
                D2x = f2x.value,
                bz3x = by3x[V3x],
                u2x = this.pH8z(f2x, "type");
            if (ke6Y.test(u2x)) D2x = this.Cb2x(D2x, u2x);
            if (gD5I.test(f2x.type) && !f2x.checked) {
                D2x = this.pH8z(f2x, "value");
                if (!D2x) return
            }
            if (!!bz3x) {
                if (!k2x.eJ4N(bz3x)) {
                    bz3x = [bz3x];
                    by3x[V3x] = bz3x
                }
                bz3x.push(D2x)
            } else {
                by3x[V3x] = D2x
            }
        };
        return function () {
            var o2x = {};
            k2x.bd3x(this.gm5r.elements, function (f2x) {
                if (this.cCa1x(f2x)) cDz2x.call(this, o2x, f2x)
            }, this);
            return o2x
        }
    }();
    hR5W.QJ6D = function () {
        var cDy2x = function (f2x) {
            if (this.YT9K(f2x)) this.pF8x(f2x)
        };
        return function () {
            this.gm5r.reset();
            k2x.bd3x(this.gm5r.elements, cDy2x, this);
            return this
        }
    }();
    hR5W.cGs2x = function () {
        this.gm5r.submit();
        return this
    };
    hR5W.gH5M = function () {
        var cDl2x = function (f2x) {
            if (this.YT9K(f2x)) this.cDb2x(f2x)
        };
        return function () {
            this.Hv3x = {};
            k2x.bd3x(this.gm5r.elements, cDl2x, this);
            return this
        }
    }();
    hR5W.cDk2x = function (f2x) {
        f2x = this.B2x(f2x) || f2x;
        if (!!f2x) return this.bDD9u(f2x);
        var o2x = !0;
        k2x.bd3x(this.gm5r.elements, function (f2x) {
            var ky6s = this.cDk2x(f2x);
            o2x = o2x && ky6s
        }, this);
        return o2x
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        m2x = c2x("nm.l"),
        b2x, K2x;
    m2x.YD8v = NEJ.C();
    b2x = m2x.YD8v.N2x(m2x.el4p);
    K2x = m2x.YD8v.ct3x;
    b2x.bW3x = function () {
        this.cg3x();
        h2x.s2x(this.n2x, "click", this.cL4P.g2x(this));
        h2x.s2x(document, "mousewheel", this.Cp2x.g2x(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Cp2x.g2x(this))
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        if (e2x.jst) {
            this.n2x.innerHTML = a2x.bZ3x(e2x.jst, e2x.data)
        } else if (e2x.ntp) {
            this.n2x.appendChild(a2x.dy4C(e2x.ntp))
        } else if (e2x.txt) {
            this.n2x.innerHTML = a2x.iG5L(e2x.txt)
        } else if (e2x.html) {
            this.n2x.innerHTML = e2x.html
        }
        var QS6M = this.n2x.getElementsByTagName("form");
        if (QS6M.length) {
            this.gm5r = I2x.Qk6e.A2x({
                form: QS6M[0]
            })
        }
        this.EO2x = a2x.dk4o(this.n2x)[0]
    };
    b2x.bD3x = function () {
        this.z2x("ondestroy");
        this.bG3x();
        this.n2x.innerHTML = "";
        delete this.EO2x
    };
    b2x.cL4P = function (d2x) {
        var f2x = h2x.W3x(d2x, "d:action"),
            j2x = this.gm5r ? this.gm5r.YH8z() : null,
            d2x = {
                action: a2x.t2x(f2x, "action")
            };
        if (j2x) d2x.data = j2x;
        if (d2x.action) {
            this.z2x("onaction", d2x);
            if (d2x.stopped) return;
            this.bt3x()
        }
    };
    b2x.Cp2x = function (d2x) {
        if (!this.EO2x) return;
        h2x.bh3x(d2x);
        var dp4t = d2x.wheelDelta || -d2x.detail;
        this.EO2x.scrollTop -= dp4t
    };
    l2x.kA6u = function (e2x) {
        e2x.destroyable = e2x.destroyable || true;
        e2x.title = e2x.title || "提示";
        e2x.draggable = true;
        e2x.parent = e2x.parent || document.body;
        e2x.mask = e2x.mask || true;
        var Bv1x = m2x.YD8v.A2x(e2x);
        Bv1x.L2x();
        return Bv1x
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bGW0x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        QT6N = {},
        Fa2x = {};
    for (var i = 0, l = bGW0x.length, c; i < l; i++) {
        c = bGW0x.charAt(i);
        QT6N[i] = c;
        Fa2x[c] = i
    }
    var cDj2x = function (iu5z) {
        var r2x = 0,
            c, o2x = [];
        while (r2x < iu5z.length) {
            c = iu5z[r2x];
            if (c < 128) {
                o2x.push(String.fromCharCode(c));
                r2x++
            } else if (c > 191 && c < 224) {
                o2x.push(String.fromCharCode((c & 31) << 6 | iu5z[r2x + 1] & 63));
                r2x += 2
            } else {
                o2x.push(String.fromCharCode((c & 15) << 12 | (iu5z[r2x + 1] & 63) << 6 | iu5z[r2x + 2] & 63));
                r2x += 3
            }
        }
        return o2x.join("")
    };
    var cDf2x = function () {
        var hw5B = /\r\n/g;
        return function (j2x) {
            j2x = j2x.replace(hw5B, "\n");
            var o2x = [],
                mD7w = String.fromCharCode(237);
            if (mD7w.charCodeAt(0) < 0)
                for (var i = 0, l = j2x.length, c; i < l; i++) {
                    c = j2x.charCodeAt(i);
                    c > 0 ? o2x.push(c) : o2x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = j2x.length, c; i < l; i++) {
                        c = j2x.charCodeAt(i);
                        if (c < 128) o2x.push(c);
                        else if (c > 127 && c < 2048) o2x.push(c >> 6 | 192, c & 63 | 128);
                        else o2x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return o2x
        }
    }();
    var Lf4j = function (iu5z) {
        var r2x = 0,
            o2x = [],
            fe4i = iu5z.length % 3;
        if (fe4i == 1) iu5z.push(0, 0);
        if (fe4i == 2) iu5z.push(0);
        while (r2x < iu5z.length) {
            o2x.push(QT6N[iu5z[r2x] >> 2], QT6N[(iu5z[r2x] & 3) << 4 | iu5z[r2x + 1] >> 4], QT6N[(iu5z[r2x + 1] & 15) << 2 | iu5z[r2x + 2] >> 6], QT6N[iu5z[r2x + 2] & 63]);
            r2x += 3
        }
        if (fe4i == 1) o2x[o2x.length - 1] = o2x[o2x.length - 2] = "=";
        if (fe4i == 2) o2x[o2x.length - 1] = "=";
        return o2x.join("")
    };
    var bIl0x = function () {
        var rz9q = /\n|\r|=/g;
        return function (j2x) {
            var r2x = 0,
                o2x = [];
            j2x = j2x.replace(rz9q, "");
            for (var i = 0, l = j2x.length; i < l; i += 4) o2x.push(Fa2x[j2x.charAt(i)] << 2 | Fa2x[j2x.charAt(i + 1)] >> 4, (Fa2x[j2x.charAt(i + 1)] & 15) << 4 | Fa2x[j2x.charAt(i + 2)] >> 2, (Fa2x[j2x.charAt(i + 2)] & 3) << 6 | Fa2x[j2x.charAt(i + 3)]);
            var bq3x = o2x.length,
                fe4i = j2x.length % 4;
            if (fe4i == 2) o2x = o2x.slice(0, bq3x - 2);
            if (fe4i == 3) o2x = o2x.slice(0, bq3x - 1);
            return o2x
        }
    }();
    p.cDM2x = function (j2x) {
        return cDj2x(bIl0x(j2x))
    };
    p.cDa2x = function (j2x) {
        var iu5z = bIl0x(j2x),
            dr4v = iu5z.length,
            iv5A;
        var r2x = 0;
        while (iv5A = iu5z[r2x]) {
            if (iv5A > 128) {
                iu5z[r2x] = iv5A - 256
            }
            r2x++
        }
        return iu5z
    };
    p.cCZ2x = function (j2x) {
        try {
            return window.btoa(j2x)
        } catch (ex) {
            return Lf4j(cDf2x(j2x))
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        h2x = c2x("nej.v"),
        a2x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        m2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bC3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    m2x.bJd0x = NEJ.C();
    b2x = m2x.bJd0x.N2x(m2x.el4p);
    b2x.cf3x = function () {
        this.ce3x = "m-download-layer"
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.H2x(this.n2x, "j-flag");
        this.bwF7y = i2x[0];
        this.bwx7q = i2x[1];
        this.bJF0x = i2x[2];
        v2x.bn3x("/client/version/get", {
            type: "json",
            onload: this.cCY2x.g2x(this)
        });
        if (O2x.Id3x.mac) {
            a2x.x2x(this.bwF7y.parentNode, "f-hide");
            a2x.y2x(this.bwx7q.parentNode, "f-hide");
            a2x.y2x(this.bJF0x, "f-hide")
        } else {
            a2x.y2x(this.bwF7y.parentNode, "f-hide");
            a2x.x2x(this.bwx7q.parentNode, "f-hide");
            a2x.x2x(this.bJF0x, "f-hide")
        }
    };
    b2x.bk3x = function (e2x) {
        e2x.clazz = " m-layer-down";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "下载";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bm3x(e2x);
        this.bX3x([
            [this.n2x, "click", this.bT3x.g2x(this)]
        ]);
        this.et4x = TYPE_MAP[e2x.type];
        this.hc5h = e2x.id
    };
    b2x.bD3x = function () {
        this.bG3x()
    };
    b2x.Ct2x = function () {
        this.bt3x()
    };
    b2x.FV3x = function (d2x) {
        this.z2x("onok", D2x);
        this.bt3x()
    };
    b2x.bT3x = function (d2x) {
        var f2x = h2x.W3x(d2x, "d:action");
        switch (a2x.t2x(f2x, "action")) {
            case "download":
                this.bt3x();
                window.open(a2x.t2x(f2x, "src"));
                break;
            case "orpheus":
                this.bt3x();
                location.href = "orpheus://" + k2x.cCZ2x(JSON.stringify({
                    type: this.et4x,
                    id: this.hc5h,
                    cmd: "download"
                }));
                break
        }
    };
    b2x.cCY2x = function (d2x) {
        if ((d2x || bb3x).code == 200) {
            this.Ks4w = d2x.data;
            this.bwF7y.innerText = "V" + this.Ks4w.mac;
            this.bwx7q.innerText = "V" + this.Ks4w.pc
        }
    };
    l2x.Li4m = function (e2x) {
        m2x.bJd0x.A2x(e2x).L2x()
    }
})();
(function () {
    var c2x = NEJ.P,
        l2x = c2x("nm.x");
    var FullscreenApi = {};
    var apiMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l2x.FX3x = FullscreenApi
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        k2x = c2x("nej.u"),
        q2x = c2x("nm.d"),
        bP3x = {};
    q2x.B2x = function (J2x) {
        return bP3x[J2x]
    };
    q2x.ny7r = function (J2x, bg3x) {
        bP3x[J2x] = bg3x
    };
    q2x.fg4k = function (j2x) {
        k2x.eE4I(j2x, function (p2x, J2x) {
            var bg3x = bP3x[J2x] || {};
            NEJ.X(bg3x, p2x);
            bP3x[J2x] = bg3x
        })
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        be3x = c2x("nej.h");
    be3x.Yv8n = function (J2x) {
        return localStorage.getItem(J2x)
    };
    be3x.Yu8m = function (J2x, D2x) {
        localStorage.setItem(J2x, D2x)
    };
    be3x.bvP7I = function (J2x) {
        localStorage.removeItem(J2x)
    };
    be3x.bvO7H = function () {
        localStorage.clear()
    };
    be3x.cCX2x = function () {
        var o2x = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o2x.push(localStorage.key(i));
        return o2x
    };
    be3x.buM7F = function () {
        (document.onstorageready || br3x)()
    };
    be3x.buA7t = function () {
        return !0
    }
})();
(function () {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        iv5A = c2x("nej.c"),
        be3x = c2x("nej.h"),
        tn9e;
    if (O2x.nr7k.trident || !!window.localStorage) return;
    var cCW2x = function () {
        var rv9m, ei4m;
        var blE4I = function () {
            rv9m = document.createElement("div");
            NEJ.X(rv9m.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rv9m);
            rv9m.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iv5A.B2x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var NT5Y = function () {
            ei4m = window.clearTimeout(ei4m);
            var hM5R = rv9m.getElementsByTagName("object")[0];
            if (!!hM5R.initStorage) {
                delete rv9m;
                tn9e = hM5R;
                tn9e.initStorage("nej-storage");
                (document.onstorageready || br3x)();
                return
            }
            ei4m = window.setTimeout(NT5Y, 500)
        };
        return function () {
            if (!!tn9e) return;
            blE4I();
            NT5Y()
        }
    }();
    be3x.Yv8n = be3x.Yv8n.eC4G(function (d2x) {
        d2x.stopped = !0;
        if (!tn9e) return;
        d2x.value = tn9e.getItem(d2x.args[0])
    });
    be3x.Yu8m = be3x.Yu8m.eC4G(function (d2x) {
        d2x.stopped = !0;
        if (!tn9e) return;
        var bf3x = d2x.args;
        tn9e.setItem(bf3x[0], bf3x[1])
    });
    be3x.bvP7I = be3x.bvP7I.eC4G(function (d2x) {
        d2x.stopped = !0;
        if (!tn9e) return;
        tn9e.removeItem(d2x.args[0])
    });
    be3x.bvO7H = be3x.bvO7H.eC4G(function (d2x) {
        d2x.stopped = !0;
        if (!!tn9e) tn9e.clear()
    });
    be3x.buM7F = be3x.buM7F.eC4G(function (d2x) {
        d2x.stopped = !0;
        cCW2x()
    });
    be3x.buA7t = be3x.buA7t.eC4G(function (d2x) {
        d2x.stopped = !0;
        d2x.value = !!tn9e
    })
})();
(function () {
    var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        be3x = c2x("nej.h"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        R3x = {};
    v2x.um9d = function (J2x, D2x) {
        var bMh1x = JSON.stringify(D2x);
        try {
            be3x.Yu8m(J2x, bMh1x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bMh1x != be3x.Yv8n(J2x)) R3x[J2x] = D2x;
        return this
    };
    v2x.tm9d = function (J2x) {
        var j2x = JSON.parse(be3x.Yv8n(J2x) || "null");
        return j2x == null ? R3x[J2x] : j2x
    };
    v2x.bNa1x = function (J2x, D2x) {
        var j2x = v2x.tm9d(J2x);
        if (j2x == null) {
            j2x = D2x;
            v2x.um9d(J2x, j2x)
        }
        return j2x
    };
    v2x.Ll4p = function (J2x) {
        delete R3x[J2x];
        be3x.bvP7I(J2x);
        return this
    };
    v2x.cDO2x = function () {
        var bup7i = function (p2x, J2x, by3x) {
            delete by3x[J2x]
        };
        return function () {
            k2x.eE4I(R3x, bup7i);
            be3x.bvO7H();
            return this
        }
    }();
    v2x.cDP2x = function (o2x) {
        o2x = o2x || {};
        k2x.bd3x(be3x.cCX2x(), function (J2x) {
            o2x[J2x] = v2x.tm9d(J2x)
        });
        return o2x
    };
    I2x.fJ5O.A2x({
        element: document,
        event: "storageready",
        oneventadd: function () {
            if (be3x.buA7t()) {
                document.onstorageready()
            }
        }
    });
    var cCT2x = function () {
        var cCR2x = function (D2x, J2x, by3x) {
            be3x.Yu8m(J2x, JSON.stringify(D2x));
            delete by3x[J2x]
        };
        return function () {
            k2x.eE4I(R3x, cCR2x)
        }
    }();
    h2x.s2x(document, "storageready", cCT2x);
    be3x.buM7F()
})();
(function () {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        Ln4r;
    if (!!O2x.btL6F) return;
    O2x.btL6F = NEJ.C();
    Ln4r = O2x.btL6F.N2x(O2x.cI3x);
    Ln4r.cx3x = function () {
        var gK5P = +(new Date),
            nC7v = "dat-" + gK5P;
        return function () {
            this.cF3x();
            var R3x = this.constructor[nC7v];
            if (!R3x) {
                R3x = {};
                this.constructor[nC7v] = R3x
            }
            this.S3x = R3x
        }
    }();
    Ln4r.B2x = function (J2x) {
        return this.S3x[J2x]
    };
    Ln4r.ny7r = function (J2x, D2x) {
        var nB7u = this.S3x[J2x];
        this.S3x[J2x] = D2x;
        h2x.z2x(localCache, "cachechange", {
            key: J2x,
            type: "set",
            oldValue: nB7u,
            newValue: D2x
        });
        return this
    };
    Ln4r.cJ4N = function (J2x) {
        var nB7u = this.S3x[J2x];
        k2x.bcg0x(this.S3x, J2x);
        h2x.z2x(localCache, "cachechange", {
            key: J2x,
            type: "delete",
            oldValue: nB7u,
            newValue: undefined
        });
        return nB7u
    };
    Ln4r.Ym8e = function (Go3x) {
        return NEJ.Q(this.S3x, Go3x)
    };
    window.localCache = O2x.btL6F.A2x();
    O2x.fJ5O.A2x({
        element: localCache,
        event: "cachechange"
    })
})();
(function () {
    var c2x = NEJ.P,
        fy5D = NEJ.R,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut"),
        nC7v = "dat-" + +(new Date),
        nA7t;
    if (!!O2x.btF6z) return;
    O2x.btF6z = NEJ.C();
    nA7t = O2x.btF6z.N2x(O2x.cI3x);
    nA7t.cx3x = function () {
        this.cF3x();
        this.S3x = this.constructor[nC7v];
        if (!this.S3x) {
            this.S3x = {};
            this.S3x[nC7v + "-l"] = {};
            this.constructor[nC7v] = this.S3x
        }
    };
    nA7t.ss9j = function (J2x) {
        return this.S3x[J2x]
    };
    nA7t.qe8W = function (J2x, D2x) {
        this.S3x[J2x] = D2x
    };
    nA7t.lO7H = function (J2x, kf6Z) {
        var j2x = this.ss9j(J2x);
        if (j2x == null) {
            j2x = kf6Z;
            this.qe8W(J2x, j2x)
        }
        return j2x
    };
    nA7t.cCQ2x = function (J2x) {
        if (J2x != null) {
            delete this.S3x[J2x];
            return
        }
        k2x.eE4I(this.S3x, function (p2x, J2x) {
            if (J2x == nC7v + "-l") return;
            this.cCQ2x(J2x)
        }, this)
    };
    nA7t.cDQ2x = function (J2x) {
        if (!!v2x.Ll4p) return v2x.Ll4p(J2x)
    };
    nA7t.cCL2x = function (J2x) {
        if (!!v2x.tm9d) return v2x.tm9d(J2x)
    };
    nA7t.cCK2x = function (J2x, D2x) {
        if (!!v2x.um9d) v2x.um9d(J2x, D2x)
    };
    nA7t.Hw3x = function (J2x, kf6Z) {
        var j2x = this.RB6v(J2x);
        if (j2x == null) {
            j2x = kf6Z;
            this.wT0x(J2x, j2x)
        }
        return j2x
    };
    nA7t.RB6v = function (J2x) {
        var j2x = this.ss9j(J2x);
        if (j2x != null) return j2x;
        j2x = this.cCL2x(J2x);
        if (j2x != null) this.qe8W(J2x, j2x);
        return j2x
    };
    nA7t.wT0x = function (J2x, D2x) {
        this.cCK2x(J2x, D2x);
        this.qe8W(J2x, D2x)
    };
    nA7t.bRv3x = function (J2x) {
        if (J2x != null) {
            delete this.S3x[J2x];
            if (!!v2x.Ll4p) v2x.Ll4p(J2x);
            return
        }
        k2x.eE4I(this.S3x, function (p2x, J2x) {
            if (J2x == nC7v + "-l") return;
            this.bRv3x(J2x)
        }, this)
    };
    nA7t.cDR2x = function () {
        this.bRv3x();
        return this
    };
    nA7t.cDS2x = function (J2x) {
        var j2x = this.S3x[nC7v + "-l"];
        delete j2x[J2x]
    };
    nA7t.bsO6I = function (J2x) {
        var j2x = this.S3x[nC7v + "-l"],
            bf3x = fy5D.slice.call(arguments, 1);
        k2x.bd3x(j2x[J2x], function (cN4R) {
            try {
                cN4R.apply(null, bf3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j2x[J2x]
    };
    nA7t.bxq7j = function (J2x, cN4R) {
        cN4R = cN4R || br3x;
        var i2x = this.S3x[nC7v + "-l"][J2x];
        if (!i2x) {
            i2x = [cN4R];
            this.S3x[nC7v + "-l"][J2x] = i2x;
            return !1
        }
        i2x.push(cN4R);
        return !0
    };
    nA7t.cCF2x = function (i2x, bi3x, fZ5e) {
        if (!i2x) return !1;
        bi3x = parseInt(bi3x) || 0;
        fZ5e = parseInt(fZ5e) || 0;
        if (!fZ5e) {
            if (!i2x.loaded) return !1;
            fZ5e = i2x.length
        }
        if (!!i2x.loaded) fZ5e = Math.min(fZ5e, i2x.length - bi3x);
        for (var i = 0; i < fZ5e; i++)
            if (!i2x[bi3x + i]) return !1;
        return !0
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x, K2x;
    if (!!O2x.RE6y) return;
    O2x.RE6y = NEJ.C();
    b2x = O2x.RE6y.N2x(O2x.btF6z);
    K2x = O2x.RE6y.ct3x;
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.wi0x = e2x.key || "id";
        this.bl3x = e2x.data || bb3x;
        this.cCE2x = !!e2x.autogc;
        this.cCC2x(e2x.id)
    };
    b2x.bD3x = function () {
        this.bG3x();
        if (!!this.ef4j) {
            this.bSW3x()
        }
    };
    b2x.cCC2x = function (C2x) {
        var R3x;
        if (!!C2x) {
            R3x = this.S3x[C2x];
            if (!R3x) {
                R3x = {};
                this.S3x[C2x] = R3x
            }
        }
        R3x = R3x || this.S3x;
        R3x.hash = R3x.hash || {};
        this.RH6B = R3x
    };
    b2x.bSW3x = function () {
        this.ef4j = window.clearTimeout(this.ef4j);
        var by3x = {};
        k2x.eE4I(this.RH6B, function (i2x, J2x) {
            if (J2x == "hash") return;
            if (!k2x.eJ4N(i2x)) return;
            k2x.bd3x(i2x, function (p2x) {
                if (!p2x) return;
                by3x[p2x[this.wi0x]] = !0
            }, this)
        }, this);
        k2x.eE4I(this.Yh8Z(), function (p2x, C2x, dO4S) {
            if (!by3x[C2x]) {
                delete dO4S[C2x]
            }
        })
    };
    b2x.cCB2x = function () {
        if (!!this.ef4j) {
            this.ef4j = window.clearTimeout(this.ef4j)
        }
        this.ef4j = window.setTimeout(this.bSW3x.g2x(this), 150)
    };
    b2x.CO2x = function (p2x, Yg8Y) {
        p2x = this.bTx3x(p2x, Yg8Y) || p2x;
        if (!p2x) return null;
        var J2x = p2x[this.wi0x];
        if (J2x != null) {
            var id5i = this.Yh8Z()[J2x];
            if (!!id5i) p2x = NEJ.X(id5i, p2x);
            this.Yh8Z()[J2x] = p2x
        }
        delete p2x.bTP4T;
        return p2x
    };
    b2x.bTx3x = br3x;
    b2x.brG6A = function (J2x, p2x) {
        if (!p2x) return;
        if (!k2x.eJ4N(p2x)) {
            var i2x = this.hL5Q(J2x),
                p2x = this.CO2x(p2x, J2x);
            if (!!p2x) i2x.unshift(p2x);
            return
        }
        k2x.nx7q(p2x, this.brG6A.g2x(this, J2x))
    };
    b2x.RN6H = function (J2x, cy3x) {
        var i2x = this.hL5Q(J2x);
        i2x.length = Math.max(i2x.length, cy3x);
        this.brv6p(J2x);
        return this
    };
    b2x.kd6X = function (J2x) {
        return this.hL5Q(J2x).length
    };
    b2x.brv6p = function (J2x, oA8s) {
        this.hL5Q(J2x).loaded = oA8s != !1;
        return this
    };
    b2x.Ya8S = function (J2x) {
        return !!this.hL5Q(J2x).loaded
    };
    b2x.vu0x = function (J2x, i2x) {
        this.vm0x(J2x);
        this.bre6Y({
            key: J2x,
            offset: 0,
            limit: i2x.length + 1
        }, {
            list: i2x,
            total: i2x.length
        })
    };
    b2x.hL5Q = function () {
        var DY2x = function (J2x) {
            return (J2x || "") + (!J2x ? "" : "-") + "list"
        };
        return function (J2x) {
            var J2x = DY2x(J2x),
                i2x = this.RH6B[J2x];
            if (!i2x) {
                i2x = [];
                this.RH6B[J2x] = i2x
            }
            return i2x
        }
    }();
    b2x.Yh8Z = function () {
        var dO4S = this.RH6B.hash;
        if (!dO4S) {
            dO4S = {};
            this.RH6B.hash = dO4S
        }
        return dO4S
    };
    b2x.bra6U = function () {
        var DY2x = function (e2x) {
            return "r-" + e2x.key
        };
        return function (e2x) {
            var iO6I = NEJ.X({}, e2x),
                nP7I = DY2x(iO6I);
            if (!this.bxq7j(nP7I, this.z2x.g2x(this))) {
                iO6I.rkey = nP7I;
                iO6I.onload = this.cCA2x.g2x(this, iO6I);
                this.z2x("dopullrefresh", iO6I)
            }
            return this
        }
    }();
    b2x.cCA2x = function (e2x, i2x) {
        this.brG6A(e2x.key, i2x);
        this.bsO6I(e2x.rkey, "onpullrefresh", e2x)
    };
    b2x.lF7y = function () {
        var DY2x = function (e2x) {
            return "r-" + e2x.key + "-" + e2x.offset + "-" + e2x.limit
        };
        return function (e2x) {
            e2x = e2x || bb3x;
            var iO6I = {
                    key: "" + e2x.key || "",
                    ext: e2x.ext || null,
                    data: e2x.data || null,
                    offset: parseInt(e2x.offset) || 0,
                    limit: parseInt(e2x.limit) || 0
                },
                i2x = this.hL5Q(iO6I.key);
            if (this.cCF2x(i2x, iO6I.offset, iO6I.limit)) {
                this.z2x("onlistload", iO6I);
                return this
            }
            var nP7I = DY2x(iO6I);
            if (!this.bxq7j(nP7I, this.z2x.g2x(this))) {
                iO6I.rkey = nP7I;
                iO6I.onload = this.bre6Y.g2x(this, iO6I);
                this.z2x("doloadlist", iO6I)
            }
            return this
        }
    }();
    b2x.bre6Y = function () {
        var DS2x = function (p2x, r2x, i2x) {
            if (!!p2x) {
                return !0
            }
            i2x.splice(r2x, 1)
        };
        return function (e2x, o2x) {
            e2x = e2x || bb3x;
            var J2x = e2x.key,
                bi3x = e2x.offset,
                byk8c = this.hL5Q(J2x);
            var i2x = o2x || [];
            if (!k2x.eJ4N(i2x)) {
                i2x = o2x.result || o2x.list || [];
                var cy3x = parseInt(o2x.total);
                if (!isNaN(cy3x) || cy3x > i2x.length) {
                    this.RN6H(J2x, cy3x)
                }
            }
            k2x.bd3x(i2x, function (p2x, r2x) {
                byk8c[bi3x + r2x] = this.CO2x(p2x, J2x)
            }, this);
            if (i2x.length < e2x.limit) {
                this.brv6p(J2x);
                k2x.nx7q(byk8c, DS2x)
            }
            this.bsO6I(e2x.rkey, "onlistload", e2x)
        }
    }();
    b2x.vm0x = function () {
        var DS2x = function (p2x, r2x, i2x) {
            i2x.splice(r2x, 1)
        };
        return function (J2x) {
            var i2x = this.hL5Q(J2x);
            k2x.nx7q(i2x, DS2x);
            this.brv6p(J2x, !1);
            if (this.cCE2x) {
                this.cCB2x()
            }
            return this
        }
    }();
    b2x.byz8r = function (p2x, Yg8Y) {
        return !p2x.bTP4T
    };
    b2x.eH4L = function (C2x) {
        return this.Yh8Z()[C2x]
    };
    b2x.cDT2x = function (C2x) {
        var p2x = this.eH4L(C2x);
        if (!!p2x) p2x.bTP4T = !0
    };
    b2x.XR8J = function () {
        var DY2x = function (e2x) {
            return "r-" + e2x.key + "-" + e2x.id
        };
        return function (e2x) {
            e2x = e2x || bb3x;
            var C2x = e2x[this.wi0x],
                iO6I = {
                    id: C2x,
                    ext: e2x.ext,
                    data: e2x.data || {},
                    key: "" + e2x.key || ""
                };
            p2x = this.eH4L(C2x);
            iO6I.data[this.wi0x] = C2x;
            if (!!p2x && this.byz8r(p2x, iO6I.key)) {
                this.z2x("onitemload", iO6I);
                return this
            }
            var nP7I = DY2x(iO6I);
            if (!this.bxq7j(nP7I, this.z2x.g2x(this))) {
                iO6I.rkey = nP7I;
                iO6I.onload = this.cCx2x.g2x(this, iO6I);
                this.z2x("doloaditem", iO6I)
            }
            return this
        }
    }();
    b2x.cCx2x = function (e2x, p2x) {
        e2x = e2x || bb3x;
        this.CO2x(p2x, e2x.key);
        this.bsO6I(e2x.rkey, "onitemload", e2x)
    };
    b2x.jL6F = function (e2x) {
        e2x = NEJ.X({}, e2x);
        e2x.onload = this.xQ0x.g2x(this, e2x);
        this.z2x("doadditem", e2x)
    };
    b2x.xQ0x = function (e2x, p2x) {
        var J2x = e2x.key;
        p2x = this.CO2x(p2x, J2x);
        if (!!p2x) {
            var fd4h = 0,
                i2x = this.hL5Q(J2x);
            if (!e2x.push) {
                fd4h = -1;
                var bi3x = e2x.offset || 0;
                i2x.splice(bi3x, 0, p2x)
            } else if (i2x.loaded) {
                fd4h = 1;
                i2x.push(p2x)
            } else {
                i2x.length++
            }
        }
        var d2x = {
            key: J2x,
            flag: fd4h,
            data: p2x,
            action: "add",
            ext: e2x.ext
        };
        this.z2x("onitemadd", d2x);
        return d2x
    };
    b2x.Lx4B = function (e2x) {
        e2x = NEJ.X({}, e2x);
        e2x.onload = this.bpU5Z.g2x(this, e2x);
        this.z2x("dodeleteitem", e2x)
    };
    b2x.bpU5Z = function (e2x, bzD8v) {
        var p2x, J2x = e2x.key;
        if (!!bzD8v) {
            p2x = this.eH4L(e2x.id) || null;
            var C2x = e2x.id,
                cCw2x = this.wi0x,
                i2x = this.hL5Q(J2x),
                r2x = k2x.dj4n(i2x, function (id5i) {
                    return !!id5i && id5i[cCw2x] == C2x
                });
            if (r2x >= 0) i2x.splice(r2x, 1)
        }
        var d2x = {
            key: J2x,
            data: p2x,
            action: "delete",
            ext: e2x.ext
        };
        this.z2x("onitemdelete", d2x);
        return d2x
    };
    b2x.XQ8I = function (e2x) {
        e2x = NEJ.X({}, e2x);
        e2x.onload = this.cCu2x.g2x(this, e2x);
        this.z2x("doupdateitem", e2x)
    };
    b2x.cCu2x = function (e2x, p2x) {
        var J2x = e2x.key;
        if (!!p2x) p2x = this.CO2x(p2x, J2x);
        var d2x = {
            key: J2x,
            data: p2x,
            action: "update",
            ext: e2x.ext
        };
        this.z2x("onitemupdate", d2x);
        return d2x
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.bpJ5O) return;
    O2x.bpJ5O = NEJ.C();
    b2x = O2x.bpJ5O.N2x(O2x.RE6y);
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.boU5Z({
            doloadlist: this.XO8G.g2x(this),
            doloaditem: this.bpG5L.g2x(this),
            doadditem: this.bAb8T.g2x(this),
            dodeleteitem: this.XL8D.g2x(this),
            doupdateitem: this.XJ8B.g2x(this),
            dopullrefresh: this.bAw8o.g2x(this)
        })
    };
    b2x.XO8G = br3x;
    b2x.bAw8o = br3x;
    b2x.bpG5L = br3x;
    b2x.bAb8T = br3x;
    b2x.XL8D = br3x;
    b2x.XJ8B = br3x
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        b2x, K2x;
    q2x.hI5N = NEJ.C();
    b2x = q2x.hI5N.N2x(I2x.bpJ5O);
    b2x.cp3x = function () {
        var CY2x = location.protocol + "//" + location.host;
        var cCt1x = function (bs3x, j2x) {
            var by3x = {
                conf: {},
                data: {},
                urls: []
            };
            k2x.bd3x(bs3x, function (J2x, r2x, i2x) {
                var bg3x = q2x.B2x(J2x);
                if (!bg3x) return;
                var boY5d = bAW8O(bg3x.url, j2x[J2x]);
                by3x.urls.push(boY5d);
                by3x.conf[boY5d] = bg3x;
                by3x.data[boY5d] = JSON.stringify(j2x[J2x] == null ? "" : j2x[J2x])
            });
            return by3x
        };
        var bAW8O = function (Y3x, j2x) {
            return Y3x.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j2x[$2] || $1
            })
        };
        var bAX8P = function (bg3x, e2x, d2x) {
            h2x.z2x(window, "requesterror", d2x);
            if (!!d2x.stopped) return;
            var Da2x = bg3x.onerror || e2x.onerror;
            if (k2x.fF5K(Da2x)) {
                this.z2x(Da2x, d2x, e2x)
            } else {
                (Da2x || br3x).call(this, d2x, e2x)
            }
            var d2x = {
                result: d2x,
                option: e2x
            };
            this.z2x("onerror", d2x);
            if (!d2x.stopped)(bg3x.onmessage || br3x).call(this, d2x.result.code, d2x.result)
        };
        var bBd8V = function (Q3x, bg3x, e2x) {
            var o2x = Q3x;
            if (k2x.gG5L(bg3x.format)) {
                o2x = bg3x.format.call(this, Q3x, e2x)
            }
            return o2x
        };
        var yo1x = function (Q3x, bg3x, e2x, uh9Y) {
            if (k2x.gG5L(bg3x.beforeload)) {
                bg3x.beforeload.call(this, Q3x, e2x, bg3x)
            }
            if (Q3x && Q3x.code != null && Q3x.code != 200) {
                bAX8P.call(this, bg3x, e2x, {
                    key: e2x.key,
                    code: Q3x.code,
                    message: Q3x.message || "",
                    captchaId: Q3x.captchaId,
                    ext: Q3x
                });
                return
            }
            var o2x = Q3x;
            if (!uh9Y) {
                o2x = bBd8V.call(this, Q3x, bg3x, e2x)
            } else if (k2x.gG5L(bg3x.format)) {
                var boV5a = [];
                k2x.bd3x(uh9Y.urls, function (Y3x) {
                    boV5a.push(bBd8V.call(this, Q3x[Y3x], uh9Y.conf[Y3x], e2x))
                }, this);
                boV5a.push(e2x);
                o2x = bg3x.format.apply(this, boV5a)
            }
            var sA9r = bg3x.onload || e2x.onload,
                bBB8t = bg3x.finaly || e2x.finaly || br3x;
            if (k2x.fF5K(sA9r)) {
                bBB8t.call(this, this.z2x(sA9r, o2x), e2x)
            } else {
                bBB8t.call(this, (sA9r || br3x).call(this, o2x), e2x)
            }
        };
        var Bd1x = function (bg3x, e2x, cb3x) {
            bAX8P.call(this, bg3x, e2x, {
                key: e2x.key,
                code: cb3x.code || -1,
                message: cb3x.message || ""
            })
        };
        return function (bg3x, e2x) {
            if (k2x.fF5K(bg3x)) {
                bg3x = q2x.B2x(bg3x)
            }
            delete e2x.value;
            (bg3x.filter || br3x).call(this, e2x, bg3x);
            var Q3x = e2x.value;
            if (!!Q3x) {
                yo1x.call(this, Q3x, bg3x, e2x);
                return
            }
            var Y3x, j2x = e2x.data || bb3x,
                ye0x = {
                    cookie: !0,
                    type: bg3x.rtype || "json",
                    method: bg3x.type || "POST",
                    onerror: Bd1x.g2x(this, bg3x, e2x),
                    noescape: bg3x.noescape
                };
            if (k2x.eJ4N(bg3x.url)) {
                var uh9Y = cCt1x(bg3x.url, j2x);
                Y3x = CY2x + "/api/batch";
                ye0x.data = k2x.cC3x(uh9Y.data);
                ye0x.onload = yo1x.ez4D(this, bg3x, e2x, uh9Y);
                ye0x.headers = {
                    "batch-method": "POST"
                };
                delete uh9Y.data
            } else {
                var kj6d = bg3x.url.indexOf(":") < 0 ? CY2x : "";
                Y3x = bAW8O(kj6d + bg3x.url, j2x);
                ye0x.data = k2x.cC3x(e2x.data);
                ye0x.onload = yo1x.ez4D(this, bg3x, e2x)
            }
            if (ye0x.method == "GET") ye0x.query = ye0x.data;
            return v2x.bn3x(Y3x, ye0x)
        }
    }();
    b2x.Fi3x = function () {
        var gD5I = /^get|list|pull$/i;
        return function (bCa8S, e2x) {
            var J2x = e2x.key,
                bg3x = q2x.B2x(J2x.split("-")[0] + "-" + bCa8S);
            if (gD5I.test(bCa8S) && J2x.indexOf("post-") < 0) bg3x.type = "GET";
            this.cp3x(bg3x, e2x)
        }
    }();
    b2x.cDU2x = function (J2x, i2x) {
        var cy3x = i2x.length;
        this.bre6Y({
            key: J2x,
            offset: 0,
            limit: cy3x + 1
        }, {
            list: i2x,
            total: cy3x
        })
    };
    b2x.XO8G = function (e2x) {
        this.Fi3x("list", e2x)
    };
    b2x.bpG5L = function (e2x) {
        this.Fi3x("get", e2x)
    };
    b2x.bAw8o = function (e2x) {
        this.Fi3x("pull", e2x)
    };
    b2x.bAb8T = function (e2x) {
        this.Fi3x("add", e2x)
    };
    b2x.XL8D = function (e2x) {
        this.Fi3x("del", e2x)
    };
    b2x.XJ8B = function (e2x) {
        this.Fi3x("update", e2x)
    };
    b2x.cCo1x = function (p2x) {
        this.CO2x(p2x)
    };
    I2x.fJ5O.A2x({
        element: window,
        event: "requesterror"
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        boR5W = {},
        b2x, K2x;
    var uk9b = function (o2x, e2x) {
        o2x.conf = e2x.conf;
        return o2x
    };
    q2x.fg4k({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function (Q3x, e2x) {
                return uk9b({
                    mv: Q3x
                }, e2x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function (o2x, e2x) {
                if (!!o2x.songs && o2x.songs.length > 0) o2x.song = o2x.songs[0];
                else o2x.song = boR5W;
                delete o2x.songs;
                return uk9b(o2x, e2x)
            },
            filter: function (e2x) {
                e2x.data.ids = "[" + e2x.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: uk9b
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: uk9b
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function (o2x, e2x) {
                o2x.playlist = o2x.result;
                delete o2x.result;
                return uk9b(o2x, e2x)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: uk9b
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: uk9b
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: uk9b
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e2x) {
                var i2x = e2x.data.id.split("-");
                e2x.data.radioId = i2x[0];
                e2x.data.asc = i2x[1] == 2;
                e2x.data.limit = 1e3;
                delete e2x.data.id
            },
            format: function (Q3x, e2x) {
                var cCn1x = {
                    id: e2x.data.radioId,
                    programs: Q3x.programs
                };
                return uk9b({
                    djradio: cCn1x
                }, e2x)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: uk9b
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e2x) {
                e2x.data.lv = 0;
                e2x.data.tv = 0
            },
            format: function (o2x, e2x) {
                var xk0x = {
                    lyric: "",
                    nolyric: true
                };
                if (o2x.code == 200 && o2x.lrc && o2x.lrc.lyric) {
                    xk0x.lyric = o2x.lrc.lyric;
                    xk0x.nolyric = false
                } else {
                    xk0x.nolyric = true
                }
                return uk9b({
                    lyric: xk0x
                }, e2x)
            }
        }
    });
    q2x.xm0x = NEJ.C();
    b2x = q2x.xm0x.N2x(q2x.hI5N);
    b2x.cCl1x = function (u2x, cT4X) {
        return this.ss9j(this.XE8w(u2x, cT4X))
    };
    b2x.Si6c = function (u2x, cT4X, e2x) {
        e2x = e2x || {};
        var j2x = this.ss9j(this.XE8w(u2x, cT4X));
        if (j2x && (u2x != 13 && u2x != 19 || e2x.conf && e2x.conf.useCache)) {
            this.z2x("onresourceload", u2x, cT4X, j2x, e2x.conf);
            return
        }
        e2x.data = {
            id: cT4X
        };
        e2x.onload = this.cCk1x.g2x(this, u2x, cT4X);
        e2x.onerror = this.cCj1x.g2x(this, u2x, cT4X);
        this.cp3x("res-" + this.Dg2x(u2x) + "-get", e2x)
    };
    b2x.cCk1x = function (u2x, cT4X, o2x) {
        var j2x = o2x[this.Dg2x(u2x)];
        this.qe8W(this.XE8w(u2x, cT4X), j2x);
        this.z2x("onresourceload", u2x, cT4X, j2x, o2x.conf)
    };
    b2x.cCj1x = function (u2x, cT4X, o2x, e2x) {
        if (o2x.code != 404) {
            this.z2x("onresourceerror", u2x, cT4X, o2x.code);
            return
        }
        this.qe8W(this.XE8w(u2x, cT4X), boR5W);
        this.z2x("onresourceload", u2x, cT4X, boR5W, e2x.conf)
    };
    b2x.cDV2x = function (u2x, e2x) {
        this.cp3x("res-" + this.Dg2x(u2x) + "-play", e2x)
    };
    b2x.XE8w = function (u2x, cT4X) {
        return "res-" + this.Dg2x(u2x) + "-" + cT4X
    };
    b2x.Dg2x = function (u2x) {
        var by3x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return by3x[u2x]
    };
    q2x.xm0x.LB4F = function (u2x, cT4X) {
        if (!this.fm5r) this.fm5r = q2x.xm0x.A2x({});
        return this.fm5r.cCl1x(u2x, cT4X)
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        bnF5K = /^[1-9][0-9]*$/,
        b2x, K2x;
    var LOCAL_LOG_KEY = "local-log";
    q2x.fg4k({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q2x.hP5U = NEJ.C();
    b2x = q2x.hP5U.N2x(q2x.hI5N);
    b2x.eU4Y = function (U3x, bg3x) {
        if (!U3x || !bg3x) return;
        if (k2x.fF5K(bg3x)) {
            try {
                bg3x = JSON.parse(bg3x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a2x)
                }
            }
        }
        if (!k2x.lG7z(bg3x)) return;
        this.cp3x("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: U3x,
                    json: bg3x
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U3x + ", json=" + JSON.stringify(bg3x))
        }
    };
    b2x.Xy8q = function (nT7M) {
        if (!k2x.eJ4N(nT7M)) return;
        this.cp3x("bi-batch-log", {
            data: {
                logs: JSON.stringify(nT7M)
            }
        })
    };
    b2x.bDB9s = function (bg3x) {
        if (!bg3x || !bg3x.type || !bg3x.rid) return;
        var nU7N = bg3x.type;
        if (bnF5K.test(nU7N)) {
            nU7N = this.Dg2x(nU7N)
        }
        if (!nU7N) return;
        if (nU7N == "playlist") nU7N = "list";
        this.eU4Y("search", {
            type: nU7N,
            id: bg3x.rid || null,
            keyword: bg3x.keyword || null
        })
    };
    b2x.Sr6l = function () {
        var cCe1x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bg3x) {
            if (!bg3x || !bg3x.type || !bg3x.rid) return;
            if (bg3x.play === undefined) bg3x.play = true;
            var nU7N = bg3x.type;
            if (bnF5K.test(nU7N)) {
                nU7N = this.Dg2x(nU7N)
            }
            if (!nU7N) return;
            if (nU7N == "playlist") nU7N = "list";
            var Q3x = {
                id: bg3x.rid,
                type: nU7N
            };
            if (nU7N == "song" && bg3x.source) {
                Q3x.source = this.bDQ9H(bg3x.source);
                if (!!bg3x.sourceid) Q3x.sourceid = bg3x.sourceid
            }
            this.eU4Y(!bg3x.play ? "addto" : "play", Q3x);
            if (nU7N == "song" && bg3x.hash && bg3x.hash.match(cCe1x)) {
                this.eU4Y(!bg3x.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b2x.bnn5s = function (C2x, bA3x, eb4f, Gr3x) {
        var Q3x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cCb1x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q3x.id = C2x;
        Q3x.time = Math.round(bA3x);
        Q3x.end = k2x.fF5K(Gr3x) ? Gr3x : cCb1x[Gr3x] || "";
        if (eb4f && eb4f.fid) {
            Q3x.source = this.bDQ9H(eb4f.fid);
            Q3x.sourceId = eb4f.fdata
        }
        this.eU4Y("play", Q3x)
    };
    b2x.bEg9X = function (u2x, cT4X) {
        if (!u2x || !cT4X) return;
        if (bnF5K.test(u2x)) u2x = this.Dg2x(u2x);
        if (u2x != "playlist" && u2x != "dj") return;
        var bg3x = q2x.B2x("plus-" + u2x + "-count");
        if (!bg3x) return !1;
        this.cp3x(bg3x, {
            data: {
                id: cT4X
            }
        });
        var R3x = this.lO7H("play-hist-" + u2x, []);
        if (k2x.dj4n(R3x, cT4X) < 0) {
            R3x.push(cT4X);
            return !0
        }
        return !1
    };
    b2x.Dg2x = function (u2x) {
        var by3x = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return by3x[u2x]
    };
    b2x.bDQ9H = function (LD4H) {
        var by3x = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return by3x[LD4H]
    };
    b2x.bEm9d = function (hj5o) {
        var nT7M = this.Hw3x(LOCAL_LOG_KEY, []);
        nT7M.unshift(hj5o);
        if (nT7M.length > 200) {
            nT7M.length = 200
        }
        this.wT0x(LOCAL_LOG_KEY, nT7M)
    };
    b2x.cBZ1x = function () {
        return this.RB6v(LOCAL_LOG_KEY)
    };
    b2x.en4r = function (Q3x) {
        this.eU4Y("play", Q3x)
    };
    var bEG9x = q2x.hP5U.gp5u();
    l2x.sC9t = function () {
        bEG9x.eU4Y.apply(bEG9x, arguments)
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        m2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d");
    var FullscreenApi = l2x.FX3x || {};
    if (!q2x.xm0x) return;
    var R3x = q2x.xm0x.A2x({
        onresourceload: cBX1x
    });
    var vx0x = q2x.hP5U.gp5u();

    function cBX1x(u2x, cT4X, j2x, bg3x) {
        var i2x = [];
        switch (parseInt(u2x)) {
            case 2:
                i2x = j2x;
                break;
            case 13:
                i2x = j2x.tracks;
                break;
            case 18:
                i2x.push(j2x);
                break;
            case 19:
                i2x = j2x.songs;
                break;
            case 21:
                if (j2x.mp && j2x.mp.fee && j2x.mp.pl <= 0) {
                    l2x.Sx6r(j2x.data.id, j2x.mp.fee);
                    return
                }
                break
        }
        if (l2x.LG4K(i2x, true, null, u2x == 19 ? {
                source: "album",
                sourceid: cT4X
            } : null) == 0) {
            return
        }
        l2x.fs5x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bg3x.message
        })
    }

    function cBW1x(d2x, of7Y, Am1x, ey4C) {
        ey4C = ey4C || {};
        if (d2x.action == "ok") {
            if (Am1x) {
                location.dispatch2("/payfee?songId=" + Am1x)
            } else {
                location.dispatch2("/payfee?fee=" + of7Y || 1)
            }
            vx0x.eU4Y("click", {
                type: "tobuyvip",
                name: "box",
                source: ey4C.source || "song",
                sourceid: ey4C.sourceid || Am1x || 0
            })
        } else if (d2x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + Am1x);
            vx0x.eU4Y("click", {
                type: "tobuyone",
                name: "box",
                source: ey4C.source || "song",
                sourceid: ey4C.sourceid || Am1x || 0
            })
        }
    }

    function Sz6t(bH3x) {
        l2x.fs5x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bH3x,
            btntxt: "知道了"
        })
    }

    function SA6u(bH3x, Q3x) {
        Sz6t((Q3x || bb3x).toast || bH3x)
    }
    l2x.iA5F = function (bH3x, C2x, u2x, cBU1x, bj3x) {
        bH3x = bH3x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cBU1x && bj3x && bj3x.privilege && bj3x.privilege.toast) {
            v2x.bn3x("/api/song/toast", {
                query: {
                    id: bj3x.id
                },
                type: "json",
                onload: SA6u.g2x(this, bH3x),
                onerror: SA6u.g2x(this, bH3x)
            })
        } else if (C2x && u2x) {
            R3x.Si6c(u2x, C2x, {
                conf: {
                    message: bH3x,
                    useCache: u2x != 18
                }
            })
        } else {
            Sz6t(bH3x)
        }
    };
    l2x.uY0x = function (of7Y, Am1x, u2x, ey4C, nz7s) {
        var bP3x, ph8Z = "m-popup-info",
            bmp5u = "单首购买",
            bmi5n = "马上去开通",
            cV4Z = "唱片公司要求，当前歌曲须付费使用。",
            bFG9x = true;
        try {
            bP3x = top.api.feeMessage || {}
        } catch (e) {
            bP3x = {}
        }
        if (of7Y == 1 || of7Y == 8 || of7Y == 16) {
            if (u2x == "song") {
                ph8Z = "m-popup-song-buy";
                cV4Z = bP3x["vip2"] || cV4Z;
                bmi5n = bP3x["vip2button"] || "包月购买";
                bmp5u = bP3x["vip2link"] || bmp5u;
                if (nz7s && nz7s.flag !== undefined) {
                    var bs3x = nz7s.flag.toString(2).split("");
                    if (parseInt(bs3x.pop(), 10) == 1) {
                        bFG9x = false
                    }
                }
            } else {
                cV4Z = bP3x["vip"] || cV4Z
            }
        } else if (of7Y == 4) {
            cV4Z = bP3x["album"] || cV4Z;
            bmi5n = "立即订购"
        } else {
            cV4Z = bP3x["unknow"] || cV4Z
        }
        l2x.kA6u({
            clazz: "m-layer-w5",
            html: a2x.bZ3x(ph8Z, {
                songTxt: bmp5u,
                tip: cV4Z,
                oktext: bmi5n,
                cctext: "以后再说",
                showSongText: bFG9x
            }),
            onaction: cBW1x.ez4D(null, of7Y, Am1x, ey4C)
        })
    };
    l2x.bFH9y = function (hC5H, gf5k) {
        l2x.hq5v({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (u2x) {
                if (u2x == "ok") {
                    l2x.Li4m({
                        id: hC5H,
                        type: gf5k
                    })
                }
            }
        })
    };
    l2x.Sx6r = function (kx6r, of7Y) {
        var bP3x, cV4Z = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bP3x = top.api.feeMessage || {}
        } catch (e) {
            bP3x = {}
        }
        if (of7Y == 1 || of7Y == 8) {
            cV4Z = bP3x["vip"] || cV4Z
        } else if (of7Y == 4) {
            cV4Z = bP3x["album"] || cV4Z
        } else {
            cV4Z = bP3x["unknow"] || cV4Z
        }
        return l2x.kA6u({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a2x.bZ3x("m-popup-info", {
                tip: cV4Z,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function (d2x) {
                if (d2x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kx6r);
                    vx0x.eU4Y("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: kx6r || 0
                    })
                }
            }
        })
    };
    l2x.LG4K = function () {
        function compareFee(cBT1x, cBQ1x) {
            var by3x = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (by3x[cBT1x] || 0) - (by3x[cBQ1x] || 0)
        }
        return function (i2x, cV4Z, sE9v, ey4C) {
            sE9v = sE9v || {};
            var zZ1x = [],
                LH4L = {},
                bGo9f = 0,
                bGv9m = 0,
                LI4M = null;
            if (!i2x || !i2x.length) return zZ1x;
            k2x.bd3x(i2x, function (bj3x) {
                var fB5G = l2x.pT8L(bj3x);
                if (fB5G == 0) {
                    zZ1x.push(bj3x)
                } else if (fB5G == 10) {
                    if (bj3x.privilege) {
                        bj3x.fee = bj3x.privilege.fee
                    }
                    if (compareFee(bj3x.fee, LH4L.fee) > 0) {
                        LH4L = bj3x
                    }
                } else if (fB5G == 11) {
                    ++bGo9f;
                    if (!sE9v.play) zZ1x.push(bj3x)
                } else if (fB5G == 1e3) {
                    ++bGv9m;
                    if (!sE9v.download) zZ1x.push(bj3x)
                } else if (fB5G == 100) {
                    LI4M = bj3x
                }
            });
            if (zZ1x.length == 0 && cV4Z) {
                if (bGo9f == i2x.length) {
                    var sJ9A = i2x[0].privilege || {};
                    if (sJ9A.payed) {
                        l2x.iA5F("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l2x.uY0x(sJ9A.fee, null, null, ey4C)
                    }
                } else if (bGv9m == i2x.length) {
                    l2x.iA5F("因版权方要求，该歌曲不支持下载")
                } else if (LH4L.id) {
                    l2x.uY0x(LH4L.fee, LH4L.id, null, ey4C, LH4L.privilege)
                } else {
                    if (LI4M && i2x.length == 1 && LI4M.privilege && LI4M.privilege.st < 0 && LI4M.privilege.toast) {
                        l2x.iA5F(null, null, null, true, LI4M)
                    } else {
                        l2x.iA5F()
                    }
                }
            }
            return zZ1x
        }
    }();
    l2x.pT8L = function (bj3x) {
        if (!bj3x) return 0;
        var fB5G = bj3x.privilege;
        if (bj3x.program) return 0;
        if (window.GAbroad) return 100;
        if (fB5G) {
            if (fB5G.st != null && fB5G.st < 0) {
                return 100
            }
            if (fB5G.fee > 0 && fB5G.fee != 8 && fB5G.payed == 0 && fB5G.pl <= 0) return 10;
            if (fB5G.fee == 16) return 11;
            if ((fB5G.fee == 0 || fB5G.payed) && fB5G.pl > 0 && fB5G.dl == 0) return 1e3;
            if (fB5G.pl == 0 && fB5G.dl == 0) return 100;
            return 0
        } else {
            var ex4B = bj3x.status != null ? bj3x.status : bj3x.st != null ? bj3x.st : 0;
            if (bj3x.status >= 0) return 0;
            if (bj3x.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        fy5D = NEJ.R,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        b2x;
    if (!!w2x.bGK0x) return;
    var ck3x = ~[];
    ck3x = {
        bGL0x: ++ck3x,
        cBO1x: (![] + "")[ck3x],
        kc6W: ++ck3x,
        LJ4N: (![] + "")[ck3x],
        Xp8h: (ck3x[ck3x] + "")[ck3x],
        bHm0x: ++ck3x,
        cDX2x: ({} + "")[ck3x],
        cBL1x: (ck3x[ck3x] + "")[ck3x],
        cBK1x: (![] + "")[ck3x],
        SG6A: ++ck3x,
        Xn8f: (!"" + "")[ck3x],
        cDY2x: ++ck3x,
        Dq2x: ++ck3x,
        bIu0x: ({} + "")[ck3x],
        xD0x: ++ck3x,
        cBH1x: ++ck3x,
        cDZ2x: ++ck3x,
        cEa2x: ++ck3x
    };
    ck3x.LN4R = (ck3x.LN4R = ck3x + "")[ck3x.Dq2x] + (ck3x.LP4T = ck3x.LN4R[ck3x.kc6W]) + (ck3x.Xj8b = (ck3x.DL2x + "")[ck3x.kc6W]) + (!ck3x + "")[ck3x.SG6A] + (ck3x.DO2x = ck3x.LN4R[ck3x.xD0x]) + (ck3x.DL2x = (!"" + "")[ck3x.kc6W]) + (cBC1x = (!"" + "")[ck3x.bHm0x]) + ck3x.LN4R[ck3x.Dq2x] + ck3x.DO2x + ck3x.LP4T + ck3x.DL2x;
    ck3x.Xj8b = ck3x.DL2x + (!"" + "")[ck3x.SG6A] + ck3x.DO2x + cBC1x + ck3x.DL2x + ck3x.Xj8b;
    ck3x.DL2x = ck3x.bGL0x[ck3x.LN4R][ck3x.LN4R];
    w2x.bGK0x = ck3x
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        h2x = c2x("nej.v"),
        a2x = c2x("nej.e"),
        O2x = c2x("nej.ui"),
        b2x;
    if (!!O2x.Xh8Z) return;
    var iS6M = a2x.tw9n(".#<uispace>{position:absolute;background:#fff;}");
    O2x.Xh8Z = NEJ.C();
    b2x = O2x.Xh8Z.N2x(O2x.Pu5z);
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.bX3x([
            [document, "click", this.sM9D.g2x(this)]
        ]);
        this.cBA1x = !!e2x.nostop;
        this.bJO0x = {
            top: e2x.top,
            left: e2x.left
        }
    };
    b2x.bD3x = function () {
        delete this.xJ0x;
        delete this.bjF4J;
        delete this.qW8O;
        delete this.bKr0x;
        delete this.Xe8W;
        delete this.bJO0x;
        this.bG3x()
    };
    b2x.cf3x = function () {
        this.mk7d = iS6M
    };
    b2x.bW3x = function () {
        this.cg3x();
        this.Br1x = this.n2x;
        h2x.s2x(this.n2x, "click", this.cBz1x.g2x(this))
    };
    b2x.sM9D = function (d2x) {
        if (d2x.button != 2) this.bt3x()
    };
    b2x.cBz1x = function (d2x) {
        if (this.cBA1x) return;
        h2x.sX9O(d2x);
        var F2x = h2x.W3x(d2x);
        if (F2x.tagName == "A") h2x.cr3x(d2x)
    };
    b2x.cBy1x = function () {
        var dg4k = /\s+/i;
        return function (oh8Z) {
            oh8Z = (oh8Z || "").trim().toLowerCase().split(dg4k);
            oh8Z[0] = oh8Z[0] || "bottom";
            oh8Z[1] = oh8Z[1] || "left";
            this.qW8O = oh8Z
        }
    }();
    b2x.cBx1x = function (oh8Z) {
        var o2x = {},
            nm7f = this.bjF4J,
            cEb2x = a2x.ov8n(),
            cA3x = this.n2x.offsetWidth,
            cc3x = this.n2x.offsetHeight;
        switch (oh8Z[0]) {
            case "top":
                o2x.top = nm7f.top - cc3x;
                o2x.left = oh8Z[1] == "right" ? nm7f.left + nm7f.width - cA3x : nm7f.left;
                break;
            case "left":
                o2x.left = nm7f.left - cA3x;
                o2x.top = oh8Z[1] == "bottom" ? nm7f.top + nm7f.height - cc3x : nm7f.top;
                break;
            case "right":
                o2x.left = nm7f.left + nm7f.width;
                o2x.top = oh8Z[1] == "bottom" ? nm7f.top + nm7f.height - cc3x : nm7f.top;
                break;
            default:
                o2x.top = nm7f.top + nm7f.height;
                o2x.left = oh8Z[1] == "right" ? nm7f.left + nm7f.width - cA3x : nm7f.left;
                break
        }
        return o2x
    };
    b2x.KD4H = function () {
        if (!this.bKr0x) {
            this.gL5Q(this.bJO0x);
            return
        }
        if (!!this.Xe8W) {
            this.gL5Q(this.xJ0x);
            return
        }
        if (!!this.bjF4J) this.gL5Q(this.cBx1x(this.qW8O))
    };
    b2x.cBv1x = function (F2x, dp4t, d2x) {
        dp4t = dp4t || bb3x;
        var bLe1x = a2x.ov8n(),
            cX4b = h2x.jy6s(d2x) + (dp4t.left || 0),
            hA5F = h2x.lY7R(d2x) + (dp4t.top || 0),
            cA3x = F2x.offsetWidth + (dp4t.right || 0),
            cc3x = F2x.offsetHeight + (dp4t.bottom || 0),
            LX4b = bLe1x.scrollWidth,
            biv4z = bLe1x.scrollHeight,
            bip4t = cX4b + cA3x,
            bie4i = hA5F + cc3x;
        switch (this.qW8O[0]) {
            case "top":
                hA5F = bie4i > biv4z ? hA5F - cc3x : hA5F;
                if (this.qW8O[1] == "right") {
                    cX4b = cX4b - cA3x < 0 ? 0 : cX4b - cA3x
                } else {
                    cX4b = bip4t > LX4b ? LX4b - cA3x : cX4b
                }
                break;
            case "left":
                cX4b = bip4t > LX4b ? LX4b - cA3x : cX4b;
                if (this.qW8O[1] == "top") {
                    hA5F = bie4i > biv4z ? hA5F - cc3x : hA5F
                } else {
                    hA5F = hA5F - cc3x < 0 ? hA5F : hA5F - cc3x
                }
                break;
            case "right":
                cX4b = cX4b - cA3x < 0 ? 0 : cX4b - cA3x;
                if (this.qW8O[1] == "top") {
                    hA5F = bie4i > biv4z ? hA5F - cc3x : hA5F
                } else {
                    hA5F = hA5F - cc3x < 0 ? hA5F : hA5F - cc3x
                }
                break;
            default:
                hA5F = hA5F - cc3x < 0 ? hA5F : hA5F - cc3x;
                if (this.qW8O[1] == "left") {
                    cX4b = bip4t > LX4b ? LX4b - cA3x : cX4b
                } else {
                    cX4b = cX4b - cA3x < 0 ? 0 : cX4b - cA3x
                }
                break
        }
        return {
            top: hA5F,
            left: cX4b
        }
    };
    b2x.bib4f = function () {
        var cBt1x = function (F2x, dp4t) {
            F2x = a2x.B2x(F2x);
            if (!F2x) return;
            dp4t = dp4t || bb3x;
            var bi3x = a2x.hN5S(F2x);
            return {
                top: bi3x.y - (dp4t.top || 0),
                left: bi3x.x - (dp4t.left || 0),
                width: F2x.offsetWidth + (dp4t.right || 0),
                height: F2x.offsetHeight + (dp4t.bottom || 0)
            }
        };
        return function (e2x) {
            e2x = e2x || bb3x;
            this.Xe8W = e2x.event;
            this.cBy1x(e2x.align);
            if (!!this.Xe8W) this.xJ0x = this.cBv1x(e2x.target, e2x.delta, this.Xe8W);
            this.bjF4J = cBt1x(e2x.target, e2x.delta);
            this.bKr0x = !!e2x.fitable;
            this.L2x();
            return this
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ui"),
        b2x, K2x;
    if (!!O2x.CA2x) return;
    O2x.CA2x = NEJ.C();
    b2x = O2x.CA2x.N2x(O2x.ZA9r);
    K2x = O2x.CA2x.ct3x;
    O2x.CA2x.cEc2x = function () {
        var cBr1x = function (d2x, C2x, fL5Q, kw6q, Tu7n) {
            var cz3x, J2x = C2x + "-i",
                R3x = fL5Q.zv1x,
                bNf1x = !!kw6q.noclear,
                bNu1x = !!kw6q.toggled;
            if (k2x.gG5L(kw6q.onbeforeclick)) {
                var WU8M = kw6q.noclear,
                    cBq1x = kw6q.toggled;
                try {
                    kw6q.onbeforeclick(kw6q)
                } catch (e) {}
                bNf1x = !!kw6q.noclear;
                bNu1x = !!kw6q.toggled;
                kw6q.toggled = cBq1x;
                kw6q.noclear = WU8M
            }
            var FO3x = R3x[J2x];
            if (bNu1x && !!FO3x) {
                FO3x.bt3x();
                return
            }
            h2x.bh3x(d2x);
            if (!bNf1x) {
                h2x.z2x(document, "click");
                cz3x = fL5Q.A2x(kw6q)
            } else {
                cz3x = fL5Q.bKA0x(kw6q, !0)
            }
            R3x[J2x] = cz3x;
            cz3x.wN0x("onbeforerecycle", function () {
                delete R3x[J2x]
            });
            cz3x.bib4f(Tu7n)
        };
        return function (f2x, e2x) {
            f2x = a2x.B2x(f2x);
            if (!f2x) return this;
            if (!this.zv1x) this.zv1x = {};
            var C2x = a2x.lK7D(f2x);
            if (!!this.zv1x[C2x]) return this;
            e2x = NEJ.X({}, e2x);
            var Tu7n = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e2x);
            Tu7n.target = C2x;
            e2x.destroyable = !0;
            if (!e2x.fixed) {
                Tu7n.fitable = !0;
                e2x.parent = document.body
            }
            this.zv1x[C2x] = [C2x, e2x.event || "click", cBr1x.ez4D(null, C2x, this, e2x, Tu7n)];
            h2x.s2x.apply(h2x, this.zv1x[C2x]);
            return this
        }
    }();
    O2x.CA2x.cEd2x = function (f2x) {
        if (!this.zv1x) return this;
        var C2x = a2x.lK7D(f2x),
            d2x = this.zv1x[C2x];
        if (!d2x) return this;
        delete this.zv1x[C2x];
        h2x.mv7o.apply(h2x, d2x);
        var cz3x = this.zv1x[C2x + "-i"];
        if (!!cz3x) cz3x.bt3x();
        return this
    };
    b2x.bhG3x = function () {
        return O2x.Xh8Z.A2x(this.cd3x)
    };
    b2x.PC6w = function () {
        K2x.PC6w.apply(this, arguments);
        this.cd3x.top = null;
        this.cd3x.left = null;
        this.cd3x.nostop = !1
    };
    b2x.bib4f = function (e2x) {
        if (!!this.oH8z) this.oH8z.bib4f(e2x);
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bc3x = c2x("nej.ui"),
        m2x = c2x("nm.l"),
        b2x, K2x;
    m2x.bhC3x = NEJ.C();
    b2x = m2x.bhC3x.N2x(bc3x.CA2x);
    b2x.bk3x = function (e2x) {
        e2x.nohack = true;
        this.bm3x(e2x)
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        m2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    var FullscreenApi = l2x.FX3x || {};
    m2x.Z3x = NEJ.C();
    b2x = m2x.Z3x.N2x(m2x.bhC3x);
    K2x = m2x.Z3x.ct3x;
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.et4x = e2x.type || 1
    };
    b2x.bW3x = function () {
        this.cg3x();
        this.n2x = a2x.nK7D(this.cBn1x());
        var i2x = a2x.dk4o(this.n2x);
        this.rb8T = i2x[0];
        this.cu3x = i2x[1]
    };
    b2x.cBn1x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b2x.KD4H = function () {
        var D2x = {},
            ci3x = this.n2x.style,
            jF6z = a2x.ov8n(),
            oi8a = {
                left: jF6z.scrollLeft,
                top: jF6z.scrollTop
            },
            dp4t = {
                left: jF6z.clientWidth - this.n2x.offsetWidth,
                top: jF6z.clientHeight - this.n2x.offsetHeight
            };
        D2x.top = Math.max(0, oi8a.top + dp4t.top / 2);
        D2x.left = Math.max(0, oi8a.left + dp4t.left / 2);
        this.oH8z.gL5Q(D2x)
    };
    b2x.L2x = function (e2x) {
        K2x.L2x.call(this);
        this.KD4H();
        this.et4x == 1 ? a2x.fk4o(this.rb8T, "u-icn-32", "u-icn-31") : a2x.fk4o(this.rb8T, "u-icn-31", "u-icn-32");
        this.cu3x.innerHTML = e2x.tip || ""
    };
    window.g_showTipCard = m2x.Z3x.L2x = function () {
        var ei4m;
        return function (e2x) {
            clearTimeout(ei4m);
            if (e2x.parent === undefined) e2x.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e2x.autoclose === undefined) e2x.autoclose = true;
            e2x.clazz = "m-sysmsg";
            !!this.fm5r && this.fm5r.T3x();
            this.fm5r = this.A2x(e2x);
            this.fm5r.L2x(e2x);
            if (e2x.autoclose) ei4m = setTimeout(this.bt3x.g2x(this), 2e3)
        }.g2x(m2x.Z3x)
    }();
    m2x.Z3x.bt3x = function () {
        !!this.fm5r && this.fm5r.bt3x()
    }
})();
(function () {
    var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v2x.bn3x = v2x.bn3x.eC4G(function (d2x) {
            e2x = d2x.args[1];
            e2x.query = e2x.query || {};
            if (k2x.fF5K(e2x.query)) e2x.query = k2x.hx5C(e2x.query);
            e2x.query.ref = "mail"
        })
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        fy5D = NEJ.R,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        m2x = c2x("nm.l"),
        J2x = "playlist-tracks_",
        b2x;
    q2x.fg4k({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function (Q3x, e2x) {
                this.cBm1x(Q3x.playlist);
                return {
                    total: 0,
                    list: fy5D
                }
            },
            onerror: function () {
                this.z2x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function (Q3x, e2x) {
                var nn7g = Q3x.playlist;
                nn7g.creator = GUser;
                nn7g.isHost = !0;
                nn7g.typeFlag = "playlist";
                return nn7g
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.ic5h, "listchange", d2x)
            },
            onmessage: function () {
                var mS7L = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cj3x) {
                    m2x.Z3x.L2x({
                        tip: mS7L[cj3x] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function (e2x) {
                e2x.id = e2x.data.pid
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.ic5h, "listchange", d2x)
            },
            onmessage: function () {
                var mS7L = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cj3x) {
                    m2x.Z3x.L2x({
                        tip: mS7L[cj3x] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function (e2x) {
                var ey4C = e2x.ext || {};
                e2x.ext = NEJ.X(ey4C, e2x.data);
                e2x.data = {
                    id: e2x.ext.id
                }
            },
            format: function (Q3x, e2x) {
                m2x.Z3x.L2x({
                    tip: "收藏成功" + (Q3x.point > 0 ? ' 获得<em class="s-fc6">' + Q3x.point + "积分</em>" : "")
                });
                var p2x = e2x.ext;
                p2x.subscribedCount++;
                return p2x
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.cBl1x, "listchange", d2x);
                h2x.z2x(q2x.cBl1x, "itemchange", {
                    attr: "subscribedCount",
                    data: d2x.data
                })
            },
            onmessage: function () {
                var mS7L = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function (cj3x) {
                    m2x.Z3x.L2x({
                        type: 2,
                        tip: mS7L[cj3x] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function (e2x) {
                e2x.id = e2x.data.id = e2x.data.pid
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.ic5h, "listchange", d2x)
            },
            onmessage: function () {
                var mS7L = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cj3x) {
                    m2x.Z3x.L2x({
                        tip: mS7L[cj3x],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e2x) {
                var j2x = e2x.data,
                    WT8L = {};
                WT8L["playlist-update-name"] = {
                    id: j2x.id,
                    name: j2x.name
                };
                WT8L["playlist-update-tag"] = {
                    id: j2x.id,
                    tags: j2x.tags.join(";")
                };
                WT8L["playlist-update-desc"] = {
                    id: j2x.id,
                    desc: j2x.description
                };
                e2x.data = WT8L;
                e2x.ext = j2x
            },
            format: function (V3x, ri8a, Tw7p, e2x) {
                if (V3x.code == 200 && ri8a.code == 200 && Tw7p.code == 200) {
                    e2x.ext.allSuccess = true;
                    m2x.Z3x.L2x({
                        tip: "保存成功"
                    })
                } else if (V3x.code == 407 || ri8a.code == 407 || Tw7p.code == 407) {
                    e2x.ext.allSuccess = false;
                    m2x.Z3x.L2x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e2x.ext.allSuccess = false;
                    m2x.Z3x.L2x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eH4L(e2x.ext.id)
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.ic5h, "listchange", d2x)
            },
            onmessage: function (cj3x) {
                m2x.Z3x.L2x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function (Q3x, e2x) {
                var p2x = this.eH4L(e2x.ext.id);
                if (Q3x.code == 200) p2x.name = e2x.ext.name;
                return Q3x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function (Q3x, e2x) {
                var p2x = this.eH4L(e2x.ext.id);
                if (Q3x.code == 200) p2x.tags = e2x.ext.tags;
                return Q3x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function (Q3x, e2x) {
                var p2x = this.eH4L(e2x.ext.id);
                if (Q3x.code == 200) p2x.description = e2x.ext.description;
                return Q3x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function (e2x) {
                e2x.url = e2x.data.url;
                delete e2x.data.url
            },
            format: function (Q3x, e2x) {
                m2x.Z3x.L2x({
                    tip: "保存成功"
                });
                var p2x = this.eH4L(e2x.data.id);
                p2x.coverImgUrl = e2x.url;
                e2x.ext = p2x;
                return p2x
            },
            onmessage: function (cj3x) {
                m2x.Z3x.L2x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.ic5h, "itemchange", {
                    attr: "coverImgUrl",
                    data: e2x.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function (Q3x, e2x) {
                var nn7g = this.eH4L(e2x.data.id);
                if (!nn7g) return;
                nn7g.playCount++;
                h2x.z2x(q2x.ic5h, "itemchange", {
                    attr: "playcount",
                    data: nn7g
                })
            }
        }
    });
    q2x.ic5h = NEJ.C();
    b2x = q2x.ic5h.N2x(q2x.hI5N);
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bPT2x = function () {
        var dn4r = GUser.userId;
        this.lF7y({
            limit: 1001,
            key: "playlist_my-" + dn4r,
            data: {
                offset: 0,
                limit: 1001,
                uid: dn4r
            }
        })
    };
    b2x.cBm1x = function (i2x) {
        var dn4r = GUser.userId,
            jf6Z = [],
            bQQ3x = [];
        k2x.bd3x(i2x, function (p2x) {
            p2x.typeFlag = "playlist";
            if (p2x.creator && p2x.creator.userId == dn4r) {
                if (p2x.specialType == 5) p2x.name = "我喜欢的音乐";
                p2x.isHost = !0;
                jf6Z.push(p2x)
            } else {
                bQQ3x.push(p2x)
            }
        });
        this.vu0x("playlist_new-" + dn4r, jf6Z);
        this.vu0x("playlist_fav-" + dn4r, bQQ3x)
    };
    b2x.cBk1x = function (j2x) {
        this.cp3x("playlist-update-cover", {
            data: j2x
        })
    };
    b2x.cEe2x = function () {
        var TA7t = this.cBi1x.B2x("host-plist");
        if (TA7t.length == 0) {
            return
        }
        if (TA7t.length == 1 && TA7t[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = TA7t.length; i < len; i++) {
            var p2x = TA7t[i];
            if (p2x.trackCount > 0) return p2x.id
        }
        return this.cBi1x.B2x("host-plist")[0].id
    };
    b2x.cBh1x = function (C2x) {
        if (GUser && GUser.userId > 0) {
            this.cp3x("playlist-upcount", {
                data: {
                    id: C2x
                }
            })
        }
    };
    b2x.FC3x = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b2x.cEf2x = function () {
        return GUser.userId
    };
    b2x.FI3x = function (p2x) {
        if (p2x.userId == GUser.userId && p2x.specialType == 5) p2x.name = "我喜欢的音乐";
        h2x.z2x(this.constructor, "itemchange", {
            data: this.CO2x(p2x)
        });
        return p2x
    };
    I2x.fJ5O.A2x({
        element: q2x.ic5h,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function () {
    var c2x = NEJ.P,
        fy5D = NEJ.R,
        br3x = NEJ.F,
        bb3x = NEJ.O,
        I2x = c2x("nej.ut"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        m2x = c2x("nm.l"),
        b2x, K2x;
    q2x.fg4k({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function (Q3x) {
                return Q3x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e2x) {
                e2x.data.limit = 1e3;
                delete e2x.data.id
            },
            format: function (Q3x, e2x) {
                var bRw3x = [],
                    pv8n = Q3x.programs;
                if (pv8n) {
                    for (var i = 0, l = pv8n.length; i < l; i++) {
                        if (pv8n[i].programFeeType < 10 || pv8n[i].buyed) {
                            bRw3x.push(pv8n[i])
                        }
                    }
                }
                return bRw3x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function (Q3x, e2x) {
                return Q3x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function (e2x) {
                e2x.ext = e2x.data;
                e2x.data = {
                    id: e2x.ext.id
                };
                e2x.id = e2x.data.id
            },
            format: function (Q3x, e2x) {
                m2x.Z3x.L2x({
                    tip: "收藏成功"
                });
                var p2x = e2x.ext;
                p2x.subscribedCount++;
                p2x.subscribed = !0;
                return p2x
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.rp9g, "listchange", d2x)
            },
            onmessage: function () {
                var mS7L = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function (cj3x) {
                    m2x.Z3x.L2x({
                        type: 2,
                        tip: mS7L[cj3x] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.rp9g, "listchange", d2x)
            },
            onmessage: function () {
                var mS7L = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function (cj3x) {
                    l2x.bgM1x({
                        txt: mS7L[cj3x] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function (e2x) {
                var p2x = this.eH4L(e2x.data.id) || bb3x;
                e2x.ext = (p2x.listenerCount || 0) + 1
            },
            format: function (Q3x, e2x) {
                var p2x = this.eH4L(e2x.data.id);
                if (!!p2x) {
                    p2x.listenerCount = Math.max(e2x.ext, p2x.listenerCount || 0)
                }
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.rp9g, "itemchange", {
                    attr: "playCount",
                    data: this.eH4L(e2x.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function (e2x) {
                e2x.data = {
                    threadId: "A_DJ_1_" + e2x.id
                }
            },
            format: function (Q3x, e2x) {
                var p2x = e2x.ext.data || this.eH4L(e2x.id);
                p2x.liked = true;
                p2x.likedCount++;
                e2x.ext.data = p2x;
                try {
                    top.player.setLike(p2x)
                } catch (e) {}
                return p2x
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.rp9g, "itemchange", {
                    attr: "likedCount",
                    data: e2x.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function (e2x) {
                e2x.data = {
                    threadId: "A_DJ_1_" + e2x.id
                }
            },
            format: function (Q3x, e2x) {
                var p2x = e2x.ext.data || this.eH4L(e2x.id);
                p2x.liked = false;
                p2x.likedCount--;
                e2x.ext.data = p2x;
                try {
                    top.player.setLike(p2x)
                } catch (e) {}
                return p2x
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.rp9g, "itemchange", {
                    attr: "likedCount",
                    data: e2x.ext.data
                })
            }
        }
    });
    q2x.rp9g = NEJ.C();
    b2x = q2x.rp9g.N2x(q2x.hI5N);
    b2x.cEh2x = function () {
        var dn4r = GUser.userId;
        this.lF7y({
            limit: 1001,
            key: "program_fav-" + dn4r,
            data: {
                offset: 0,
                limit: 1e3,
                uid: dn4r
            }
        })
    };
    b2x.cEi2x = function (dc4g) {
        var py8q = dc4g[this.wi0x];
        l2x.cBb1x(4, function (R3x) {
            R3x.vu0x("track_program-" + py8q, dc4g.songs)
        });
        delete dc4g.songs;
        var bN3x = dc4g.mainSong;
        l2x.cBb1x(4, function (R3x) {
            R3x.vu0x("track_program_main-" + py8q, !bN3x ? [] : [bN3x])
        });
        dc4g.mainSong = (bN3x || bb3x).id
    };
    b2x.cEj2x = function (C2x) {
        var dc4g = this.eH4L(C2x),
            dn4r = localCache.Ym8e("host.profile.userId");
        return !!dc4g && dc4g.dj.userId == dn4r
    };
    b2x.cEk2x = function (C2x) {
        return !1
    };
    b2x.FI3x = function (p2x) {
        h2x.z2x(this.constructor, "itemchange", {
            attr: "detail",
            data: this.CO2x(p2x)
        });
        return p2x
    };
    b2x.cBh1x = function (C2x) {
        this.cp3x("program-update-count", {
            data: {
                id: C2x
            }
        })
    };
    l2x.bSU3x = function (e2x) {
        var R3x = q2x.rp9g.A2x({
            onitemadd: function () {
                (e2x.onsuccess || br3x)()
            },
            onerror: function () {
                (e2x.onerror || br3x)()
            }
        });
        if (e2x.data.liked) {
            R3x.vo0x(e2x.data)
        } else {
            R3x.oR8J(e2x.data)
        }
    };
    b2x.oR8J = function (dc4g) {
        if (!l2x.gO5T()) return;
        var cq3x = {
            ext: {}
        };
        if (k2x.lG7z(dc4g)) {
            cq3x.id = dc4g.id;
            cq3x.ext.data = dc4g
        } else {
            cq3x.id = dc4g
        }
        this.cp3x("program-like", cq3x)
    };
    b2x.vo0x = function (dc4g) {
        if (!l2x.gO5T()) return;
        var cq3x = {
            ext: {}
        };
        if (k2x.lG7z(dc4g)) {
            cq3x.id = dc4g.id;
            cq3x.ext.data = dc4g
        } else {
            cq3x.id = dc4g
        }
        this.cp3x("program-unlike", cq3x)
    };
    I2x.fJ5O.A2x({
        element: q2x.rp9g,
        event: ["listchange", "itemchange"]
    })
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        fy5D = NEJ.R,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        m2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        J2x = "playlist-tracks_",
        l2x = c2x("nm.x"),
        b2x;
    q2x.fg4k({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function (e2x) {
                e2x.data.c = JSON.stringify([{
                    id: e2x.data.id
                }])
            },
            format: function (Q3x, e2x) {
                var bj3x = l2x.FZ3x(Q3x.songs[0]);
                bj3x.privilege = Q3x.privileges[0];
                return bj3x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function (e2x) {
                e2x.data.n = 1e3
            },
            format: function (Q3x, e2x) {
                var hy5D = [];
                this.tK9B.FI3x(Q3x.playlist);
                k2x.bd3x(Q3x.playlist.tracks, function (bN3x, r2x) {
                    var bTt3x = l2x.FZ3x(bN3x);
                    bTt3x.privilege = Q3x.privileges[r2x];
                    hy5D.push(bTt3x)
                }, this);
                return hy5D
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function (Q3x, e2x) {
                var hy5D = [];
                k2x.bd3x(Q3x.songs, function (bj3x) {
                    hy5D.push(l2x.FZ3x(bj3x))
                });
                return hy5D
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e2x) {
                var by3x = {},
                    j2x = e2x.data,
                    cAW1x = this.hL5Q(e2x.key) || [];
                Gf3x = [];
                k2x.bd3x(cAW1x, function (bN3x) {
                    var C2x = k2x.lG7z(bN3x) ? bN3x.id : bN3x;
                    by3x[C2x] = true
                });
                e2x.ext = [];
                k2x.bd3x(j2x.tracks, function (bN3x) {
                    var C2x = k2x.lG7z(bN3x) ? bN3x.id : bN3x;
                    if (!by3x[C2x]) {
                        Gf3x.push(C2x);
                        by3x[C2x] = true;
                        e2x.ext.push(bN3x)
                    }
                });
                j2x.trackIds = JSON.stringify(Gf3x);
                j2x.op = "add";
                if (!Gf3x.length) {
                    e2x.value = {
                        code: 502
                    }
                }
            },
            format: function (Q3x, e2x) {
                m2x.Z3x.L2x({
                    tip: "已添加至歌单"
                });
                var nn7g = this.tK9B.eH4L(e2x.data.pid);
                if (!!Q3x.coverImgUrl) nn7g.coverImgUrl = Q3x.coverImgUrl;
                k2x.nx7q(e2x.ext, function (bN3x) {
                    this.xQ0x(e2x, k2x.lG7z(bN3x) ? bN3x : null);
                    if (!!nn7g) nn7g.trackCount++
                }, this);
                h2x.z2x(q2x.ic5h, "itemchange", {
                    data: nn7g || {},
                    cmd: "add"
                });
                this.z2x("onaddsuccess");
                return null
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.wh0x, "listchange", {
                    key: e2x.key,
                    action: "refresh"
                });
                var py8q = e2x.data.pid,
                    cy3x = this.kd6X(e2x.key)
            },
            onmessage: function () {
                var mS7L = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function (cj3x) {
                    setTimeout(function () {
                        m2x.Z3x.L2x({
                            tip: mS7L[cj3x] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e2x) {
                var j2x = e2x.data;
                e2x.ext = j2x.trackIds;
                j2x.trackIds = JSON.stringify(j2x.trackIds);
                j2x.op = "del"
            },
            format: function (Q3x, e2x) {
                var nn7g = this.tK9B.eH4L(e2x.data.pid);
                k2x.bd3x(e2x.ext, function (C2x) {
                    this.bpU5Z({
                        id: C2x,
                        key: "track_playlist-" + e2x.data.pid
                    }, !0);
                    if (!!nn7g) nn7g.trackCount = Math.max(0, nn7g.trackCount - 1)
                }, this);
                h2x.z2x(q2x.ic5h, "itemchange", {
                    data: nn7g || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function (d2x, e2x) {
                h2x.z2x(q2x.wh0x, "listchange", {
                    key: e2x.key,
                    action: "refresh"
                })
            },
            onmessage: function (cj3x) {
                l2x.bgM1x({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function (Q3x, e2x) {
                return this.bTQ4U.FI3x(Q3x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function (Q3x, e2x) {
                var i2x = [];
                if (e2x.data.type == -1) {
                    if (Q3x.weekData && Q3x.weekData.length) {
                        e2x.data.type = 1
                    } else {
                        e2x.data.type = 0
                    }
                }
                if (e2x.data.type == 1) {
                    i2x = this.bTR4V(Q3x.weekData)
                } else {
                    i2x = this.bTR4V(Q3x.allData)
                }
                return i2x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function (Q3x, e2x) {
                var nT7M = [],
                    i2x = Q3x.recommend || [];
                k2x.bd3x(i2x, function (bj3x, r2x) {
                    nT7M.push({
                        action: "recommendimpress",
                        json: {
                            alg: bj3x.alg,
                            scene: "user-song",
                            position: r2x,
                            id: bj3x.id
                        }
                    })
                });
                this.kD6x.Xy8q(nT7M);
                e2x.limit = i2x.length;
                return i2x
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e2x) {
                e2x.data.lv = 0;
                e2x.data.tv = 0
            },
            format: function (o2x, e2x) {
                return o2x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q2x.wh0x = NEJ.C();
    b2x = q2x.wh0x.N2x(q2x.hI5N);
    b2x.cx3x = function () {
        this.cF3x();
        this.tK9B = q2x.ic5h.A2x();
        this.bTQ4U = q2x.rp9g.A2x();
        this.kD6x = q2x.hP5U.A2x()
    };
    b2x.bTR4V = function (i2x) {
        var o2x = [],
            fr5w = 0;
        k2x.bd3x(i2x, function (p2x, r2x) {
            var bj3x = l2x.FZ3x(p2x.song);
            if (r2x == 0) {
                fr5w = p2x.score
            }
            bj3x.max = fr5w;
            bj3x.playCount = p2x.playCount;
            bj3x.score = p2x.score;
            o2x.push(bj3x)
        });
        return o2x
    };
    I2x.fJ5O.A2x({
        element: q2x.wh0x,
        event: ["listchange"]
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        cB3x = c2x("nm.pc");
    var bgI1x = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qI8A = function (bP3x) {
        var CY2x = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bP3x), CY2x)
    };
    var cAO1x = function (lV7O) {
        var kL6F = "http://" + location.host + "/",
            TD7w = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dP4T = TD7w.exec(lV7O);
        if (!dP4T) return cAN1x(lV7O);
        var gf5k = dP4T[2],
            hC5H = dP4T[3],
            dn4r = dP4T[4] || "",
            jp6j = "";
        switch (gf5k) {
            case "album":
                jp6j = "#/m/album/comment/?rid=" + bgI1x[gf5k] + hC5H + "&id=" + hC5H;
                break;
            case "playlist":
                jp6j = "#/m/playlist/comment/?rid=" + bgI1x[gf5k] + hC5H + "&id=" + hC5H;
                break;
            case "song":
            case "dj":
            case "program":
                jp6j = "#/m/song?rid=" + bgI1x[gf5k] + hC5H;
                break;
            case "event":
                jp6j = "#/m/friend/event/?id=" + hC5H + "&uid=" + dn4r;
                break;
            case "user/home":
                jp6j = "#/m/personal/?uid=" + hC5H;
                break;
            case "mv":
                jp6j = "#/m2/mv/?id=" + hC5H;
                break;
            case "activity":
                jp6j = "#/m/friend/activity?id=" + hC5H;
                break;
            case "video":
                jp6j = "#/m2/mv/?id=" + hC5H + "&type=1";
                break;
            default:
                jp6j = "#/m/" + gf5k + "/?id=" + hC5H
        }
        return kL6F + jp6j
    };
    var cAN1x = function (lV7O) {
        var cAM1x = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dP4T = cAM1x.exec(lV7O);
        if (dP4T) return "http://v.youku.com/v_show/id_" + dP4T[1];
        return lV7O
    };
    cB3x.en4r = function (gf5k, hC5H) {
        qI8A({
            name: "play",
            args: {
                type: gf5k,
                id: hC5H
            }
        })
    };
    cB3x.fG5L = function () {
        qI8A({
            name: "pause"
        })
    };
    cB3x.Bp1x = function (lV7O) {
        qI8A({
            name: "open",
            args: {
                link: cAO1x(lV7O)
            }
        })
    };
    cB3x.kZ6T = function (gf5k, hC5H, cG3x) {
        qI8A({
            name: "share",
            args: {
                type: gf5k,
                id: hC5H,
                shareContent: cG3x
            }
        })
    };
    cB3x.bxP7I = function (gf5k, hC5H) {
        qI8A({
            name: "comment",
            args: {
                type: gf5k,
                id: hC5H
            }
        })
    };
    cB3x.cAJ1x = function () {
        qI8A({
            name: "init"
        })
    };
    cB3x.Bn1x = function (cc3x) {
        qI8A({
            name: "setHeight",
            args: {
                height: cc3x
            }
        })
    };
    cB3x.io5t = function (bH3x, X3x) {
        qI8A({
            name: "toast",
            args: {
                message: bH3x || "",
                state: X3x
            }
        })
    };
    cB3x.TF7y = function (lV7O) {
        qI8A({
            name: "login",
            args: {
                link: lV7O
            }
        })
    };
    cB3x.byr8j = function (AA1x) {
        qI8A({
            name: "topbar",
            args: {
                show: !!AA1x
            }
        })
    };
    cB3x.cAI1x = function (bz3x) {
        qI8A({
            name: "refreshtopbar",
            args: {
                info: bz3x
            }
        })
    };
    cB3x.cAH1x = function (bs3x, r2x) {
        qI8A({
            name: "big",
            args: {
                arr: bs3x,
                index: r2x
            }
        })
    };
    cB3x.Li4m = function (cw3x) {
        qI8A({
            name: "download",
            args: {
                img: cw3x
            }
        })
    };
    cB3x.bzc8U = function (cAE1x) {
        qI8A({
            name: "scrollable",
            args: {
                scrollable: cAE1x
            }
        })
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {})();
(function () {
    var bzg8Y;
    var vB0x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cAC1x = 0;
    var bzp8h = 0;
    var bzt8l = 1;
    var bzu8m = 0;
    var bfO1x = "";
    var bzw8o = "";
    var bzz8r = "";
    var WL8D = "";
    var WK8C = "";
    var bfv1x = "";
    var bzH8z = 0;
    var bzJ8B = "";
    var Mi5n = "";
    var Ho3x = 0;
    var bfs1x = ntes_get_domain();
    var bfj0x = null;
    var cEp2x = "//analytics.163.com";
    var cAv1x = function () {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bfs1x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bfs1x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bfs1x
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cAu1x = 0;
    var TR7K = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * TR7K))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << TR7K) - 1;
        for (var b = 0; b < d.length * TR7K; b += TR7K) {
            c[b >> 5] |= (d.charCodeAt(b / TR7K) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cAu1x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        WL8D = "-";
        bfv1x = "-";
        WK8C = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            WL8D = b.width + "x" + b.height;
            bfv1x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                WL8D = f.width + "x" + f.height
            }
        }
        if (a.language) {
            WK8C = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                WK8C = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bzH8z = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cEs2x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cAv1x;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bzg8Y;
        bfO1x = escape(a || document.location);
        bzw8o = escape(m || document.title);
        bzz8r = l === true ? "" : escape(l || document.referrer);
        bzJ8B = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bfj0x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bfj0x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bfO1x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bfj0x) {
                vB0x = fetch_visitor_hash();
                bzp8h = 1;
                ntes_set_cookie_long("_ntes_nnid", vB0x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vB0x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            vB0x = h.substr(0, o);
            Ho3x = h.substr(o + 1, p - o - 1);
            if (Ho3x == 0) {
                Ho3x = (new Date).getTime();
                f = true
            }
            if (!vB0x) {
                vB0x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", vB0x + "," + Ho3x);
                ntes_set_cookie_long("_ntes_nuid", vB0x)
            }
            if (Ho3x != 0 && b - Ho3x > 365 * 86400 * 1e3) {
                Ho3x = 0;
                ntes_set_cookie_long("_ntes_nnid", vB0x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vB0x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Mi5n = c("P_INFO", "P_OINFO");
        Mi5n = Mi5n ? Mi5n.substr(0, Mi5n.indexOf("|")) : "";
        bzu8m = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", vB0x, "&_nvtm=", cAC1x, "&_nvsf=", bzt8l, "&_nvfi=", bzp8h, "&_nlag=", WK8C, "&_nlmf=", bzH8z, "&_nres=", WL8D, "&_nscd=", bfv1x, "&_nstm=", bzu8m, "&_nurl=", bfO1x, "&_ntit=", bzw8o, "&_nref=", bzz8r, "&_nfla=", bzJ8B, "&_nssn=", Mi5n, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bzt8l = 0;
        neteaseTracker.callback = null
    }
    bzg8Y = "iad";
    neteaseTracker()
})();
(function () {})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {},
        l = d.lib = {},
        s = function () {},
        t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {},
            mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || v).stringify(this)
            },
            concat: function (a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.j2x = new r.init;
                this.bAH8z = 0
            },
            WG8y: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.j2x.concat(a);
                this.bAH8z += a.sigBytes
            },
            CM2x: function (a) {
                var c = this.j2x,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bAC8u, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.bAK8C(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.j2x = this.j2x.clone();
                return a
            },
            bAC8u: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            q.reset.call(this);
            this.bwV7O()
        },
        update: function (a) {
            this.WG8y(a);
            this.CM2x();
            return this
        },
        finalize: function (a) {
            a && this.WG8y(a);
            return this.WD8v()
        },
        blockSize: 16,
        bxk7d: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cAn1x: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.by3x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function (d) {
            var l = d.length,
                s = this.by3x,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        by3x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bwV7O: function () {
            this.dO4S = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bAK8C: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dO4S.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        WD8v: function () {
            var b = this.j2x,
                n = b.words,
                a = 8 * this.bAH8z,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.CM2x();
            b = this.dO4S;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function () {
            var b = v.clone.call(this);
            b.dO4S = this.dO4S.clone();
            return b
        }
    });
    t.MD5 = v.bxk7d(r);
    t.HmacMD5 = v.cAn1x(r)
})(Math);
(function () {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this.buN7G, e, a)
            },
            createDecryptor: function (e, a) {
                return this.create(this.cAm1x, e, a)
            },
            init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bBg8Y = e;
                this.J2x = a;
                this.reset()
            },
            reset: function () {
                t.reset.call(this);
                this.bwV7O()
            },
            process: function (e) {
                this.WG8y(e);
                return this.CM2x()
            },
            finalize: function (e) {
                e && this.WG8y(e);
                return this.WD8v()
            },
            keySize: 4,
            ivSize: 4,
            buN7G: 1,
            cAm1x: 2,
            bxk7d: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        WD8v: function () {
            return this.CM2x(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function (e, a, b) {
            var c = this.bBj8b;
            c ? this.bBj8b = u : c = this.bBk8c;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function (e, a) {
                this.bBl8d = e;
                this.bBj8b = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bBl8d,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bBk8c = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bBl8d,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bBk8c = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bBg8Y == this.buN7G) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bAC8u = 1;
            this.fe4i = c.call(a, this, b && b.words)
        },
        bAK8C: function (a, b) {
            this.fe4i.processBlock(a, b)
        },
        WD8v: function () {
            var a = this.cfg.padding;
            if (this.bBg8Y == this.buN7G) {
                a.pad(this.j2x, this.blockSize);
                var b = this.CM2x(!0)
            } else b = this.CM2x(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function (a) {
                this.mixIn(a)
            },
            toString: function (a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.bdQ0x(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            bdQ0x: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.bdQ0x(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            bwV7O: function () {
                for (var a = this.J2x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cAd1x = d + 6) + 1), e = this.cAb1x = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.cAa1x = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function (a, b) {
                this.bBo8g(a, b, this.cAb1x, t, r, w, v, l)
            },
            decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bBo8g(a, c, this.cAa1x, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bBo8g: function (a, b, c, d, e, j, l, f) {
                for (var m = this.cAd1x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.bxk7d(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
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
        // window.console.info(f.toString())
        return f.toString()
    }

    function c(a, b, c) {
        var d, e, t;
        // t = new RSAKeyPair(b, "", c)
        // window.console.info(t)
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            // i = a(16);
            i = 'FFFFFFFFFFFFFFFF'
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
        TY7R = c2x("nm.x.ek");
    TY7R.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    TY7R.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
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
            //window.console.info(j2x);
            //window.console.info(bsL6F(["流泪", "强"]));
            //window.console.info(bsL6F(TY7R.md));
            //window.console.info(bsL6F(["爱心", "女孩", "惊恐", "大笑"]));
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
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {})();
(function () {})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        dw4A = c2x("nej.p"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        dD4H = c2x("nm.u"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        m2x = c2x("nm.l"),
        cB3x = c2x("nm.pc"),
        brJ6D = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j2x = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        },
        czV1x = function () {
            if (h2x && h2x.z2x) {
                h2x.dispatchEventalias = h2x.z2x
            }
        };
    czV1x();
    l2x.brz6t = function (bN3x) {
        if (!bN3x || bN3x.copyrightId === undefined || !!bN3x.program) return false;
        if (window.GAbroad) {
            bN3x.fee = 0;
            return true
        }
        if (bN3x.status < 0) return true;
        var Uf7Y;
        if (typeof GCopyrights !== "undefined") Uf7Y = GCopyrights;
        try {
            if (!Uf7Y && !!top.GCopyrights) Uf7Y = top.GCopyrights
        } catch (e) {}
        if (Uf7Y) {
            var r2x = k2x.dj4n(Uf7Y, bN3x.copyrightId);
            if (r2x >= 0) return true
        }
        return false
    };
    l2x.bru6o = function () {
        var AR1x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            wt0x = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            czR1x = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var czM1x = function (J2x, j2x, Up7i) {
            switch (J2x) {
                case "event":
                    j2x = j2x.split("|");
                    return "/event?id=" + j2x[0] + "&uid=" + j2x[1];
                case "searchsong":
                case "searchlyric":
                    var u2x = J2x == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j2x) + "&type=" + u2x;
                case "toplist":
                    return "/discover/toplist?id=" + j2x + "&_hash=songlist-" + Up7i;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Up7i;;
                case "record":
                    j2x = j2x.split("|");
                    return "/user/songs/rank?id=" + j2x[0] + "&cat=" + j2x[1];
                    break;
                default:
                    return "/" + J2x + "?id=" + j2x + "&_hash=songlist-" + Up7i
            }
        };
        return function (eb4f, Up7i) {
            if (!eb4f) return null;
            var LD4H = eb4f.fid || (eb4f.type != 18 ? eb4f.type : null),
                bpE5J = eb4f.fdata || eb4f.rid,
                bCH9y = eb4f.page || eb4f.fhref;
            var J2x = wt0x[LD4H];
            if (!J2x) {
                var Ab1x = (bCH9y || "").match(AR1x);
                if (Ab1x) J2x = Ab1x[1]
            }
            if (!J2x) return null;
            return {
                title: czR1x[J2x],
                link: !wt0x[LD4H] ? bCH9y : czM1x(J2x, bpE5J, Up7i),
                fid: LD4H,
                fdata: bpE5J
            }
        }
    }();
    l2x.Wr8j = function (kf6Z) {
        var do4s = kf6Z;
        if (typeof GUser !== "undefined" && GUser.userId > 0) do4s = GUser;
        return do4s
    };
    l2x.gO5T = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l2x.Mt5y = function () {
        var AR1x = /#(.*?)$/;
        return function (gy5D) {
            var jD6x = gy5D === false ? location : top.location;
            return AR1x.test(jD6x.href) ? RegExp.$1 : ""
        }
    }();
    l2x.Ap1x = function () {
        var Aq1x = a2x.dh4l("audio"),
            czL1x = Aq1x.canPlayType && Aq1x.canPlayType("audio/mpeg");
        if (czL1x) return 2;
        var czI1x = l2x.bpm5r().supported;
        if (czI1x) return 1;
        return 0
    };
    l2x.bpm5r = function () {
        var gq5v, bpf5k = !1,
            boO5T = "";
        if (dw4A.ds4w.browser == "ie") {
            try {
                gq5v = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gq5v = null
            }
            if (gq5v) {
                bpf5k = !0;
                boO5T = gq5v.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gq5v = navigator.plugins["Shockwave Flash"];
                if (gq5v) {
                    bpf5k = !0;
                    boO5T = gq5v.description
                }
            }
        }
        return {
            supported: bpf5k,
            version: boO5T
        }
    };
    l2x.rP9G = function () {
        return "网易云音乐"
    };
    l2x.czG1x = function () {
        return j2x
    };
    l2x.bDz9q = function (cG3x) {
        var C2x = j2x[cG3x];
        return C2x == null ? "" : brJ6D.replace("{ID}", C2x)
    };
    l2x.xn0x = function (bo3x, dZ4d, Ay1x) {
        if (!bo3x) return "";
        if (!!Ay1x) {
            bo3x = l2x.czF1x(bo3x)
        }
        return l2x.Wq8i(l2x.czE1x(bo3x, dZ4d))
    };
    l2x.Wo7h = function () {
        var TD7w = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            bnT5Y = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            czD1x = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            czC1x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var czy1x = function (dI4M, bnS5X) {
            dI4M = Mu5z(dI4M);
            if (!!bnS5X) {
                dI4M = dI4M.replace(TD7w.MLINE, "\n\n").replace(TD7w.LING, "</br>")
            }
            dI4M = l2x.Wq8i(dI4M);
            return dI4M
        };
        var Mu5z = function (bo3x) {
            return k2x.BS2x(czD1x, bo3x)
        };
        return function (dI4M, e2x, dE4I) {
            e2x = e2x || {};
            dE4I = dE4I || {};
            dE4I.actHash = {};
            var czv1x = !!e2x.parseLink,
                czp1x = !!e2x.parseAct,
                czk1x = e2x.linkTpl || bnT5Y.LINK,
                czj1x = e2x.atTpl || bnT5Y.AT,
                czi1x = e2x.atUrl || "/user/home?nickname=",
                czh1x = e2x.actTpl || bnT5Y.ACT,
                bnS5X = !!e2x.keepSpace,
                bng5l = e2x.linkKlass || "s-fc7";
            cEx2x = e2x.actBiJson || "";
            if (!dI4M) return "";
            dI4M = dI4M.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lN7G = czC1x[czv1x + 2 * czp1x],
                dg4k = TD7w[lN7G],
                bs3x = null,
                lh6b = null,
                gs5x = 0,
                cEy2x = "",
                cEz2x = "";
            var pt8l = [];
            dg4k.lastIndex = 0;
            while (bs3x = dg4k.exec(dI4M)) {
                var dP4T = {
                    html: "",
                    before: bs3x.index - 1,
                    after: bs3x.index + bs3x[0].length
                };
                if (bs3x[1]) {
                    var lh6b = bs3x[2].replace(/[^\x00-\xff]/g, "**");
                    if (lh6b.length < 4 || lh6b.length > 32) {} else {
                        var EX2x = a2x.eu4y(czj1x);
                        dP4T.html = a2x.bZ3x(EX2x, {
                            value: Mu5z(bs3x[2]),
                            url: encodeURI(czi1x + bs3x[2]),
                            klass: bng5l
                        });
                        pt8l.push(dP4T)
                    }
                } else if (bs3x.length > 8 && bs3x[4]) {
                    var EX2x = a2x.eu4y(czk1x);
                    dP4T.html = a2x.bZ3x(EX2x, {
                        value: Mu5z(bs3x[4]),
                        url: bs3x[4],
                        klass: bng5l
                    });
                    pt8l.push(dP4T)
                } else {
                    var bFh9Y = lN7G == "ACT_NOLINK" ? 4 : 9;
                    var EX2x = a2x.eu4y(czh1x);
                    dP4T.html = a2x.bZ3x(EX2x, {
                        value: Mu5z(bs3x[bFh9Y]),
                        klass: bng5l
                    });
                    pt8l.push(dP4T);
                    dE4I.actHash[bs3x[bFh9Y].slice(1, -1)] = true
                }
            }
            var bmA5F = pt8l.length,
                kf6Z = {
                    before: dI4M.length - 1,
                    after: 0
                },
                bmt5y = "";
            for (var i = 0; i <= bmA5F; i++) {
                var hu5z, fP5U;
                hu5z = (pt8l[i - 1] || kf6Z).after;
                fP5U = (pt8l[i] || kf6Z).before;
                if (fP5U >= hu5z && hu5z >= 0 && fP5U <= dI4M.length - 1) {
                    bmt5y += czy1x(dI4M.substring(hu5z, fP5U + 1), bnS5X)
                }
                if (pt8l[i]) {
                    bmt5y += pt8l[i].html
                }
            }
            return bmt5y
        }
    }();
    l2x.czF1x = function () {
        var dg4k = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bo3x) {
            return (bo3x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dg4k, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l2x.czE1x = function () {
        var dg4k = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ev4z = function (lh6b, dZ4d) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lh6b) + '" class="' + (dZ4d || "") + '">@' + lh6b + "</a>"
        };
        return function (bo3x, dZ4d) {
            return (bo3x || "").replace(dg4k, function ($0, $1) {
                return ev4z($1, dZ4d)
            })
        }
    }();
    l2x.Wq8i = function () {
        var dg4k = /\[(.*?)\]/g;
        return function (bo3x) {
            return (bo3x || "").replace(dg4k, function ($1, $2) {
                var Y3x = l2x.bDz9q($2);
                return !Y3x ? $1 : '<img src="' + Y3x + '"/>'
            })
        }
    }();
    l2x.Cr2x = function (F2x, dZ4d) {
        a2x.bF3x(F2x, dZ4d) ? a2x.x2x(F2x, dZ4d) : a2x.y2x(F2x, dZ4d)
    };
    l2x.Mv5A = function (cP4T, kL6F) {
        cP4T = a2x.B2x(cP4T);
        kL6F = a2x.B2x(kL6F);
        if (!cP4T || !kL6F) return !1;
        for (kL6F = kL6F.parentNode; !!kL6F && kL6F != cP4T; kL6F = kL6F.parentNode);
        return kL6F == cP4T
    };
    l2x.ln7g = function () {
        var bFu9l = function (gV5a) {
            return (gV5a < 10 ? "0" : "") + gV5a
        };
        return function (lc6W) {
            lc6W = parseInt(lc6W) || 0;
            if (!lc6W) return "00:00";
            var yO1x = Math.floor(lc6W % 60),
                cza1x = Math.floor(lc6W / 60);
            return bFu9l(cza1x) + ":" + bFu9l(yO1x)
        }
    }();
    l2x.ys1x = function (fS5X, wR0x) {
        if (!fS5X || fS5X.length == 0) return "";
        wR0x = wR0x || "/";
        var bs3x = [];
        for (var i = fS5X.length - 1; i >= 0; i--) {
            bs3x.unshift(fS5X[i].name)
        }
        return bs3x.join(wR0x)
    };
    l2x.st9k = function () {
        var Uy7r = function (hX5c, dZ4d, cP4T, Wk7d) {
            var ev4z = Wk7d ? l2x.blf4j : k2x.dG4K;
            if (!hX5c || !hX5c.name) return "";
            if (!hX5c.id) return '<span class="' + dZ4d + '">' + ev4z(hX5c.name) + "</span>";
            return "<a" + (cP4T ? ' target="_blank"' : "") + ' class="' + dZ4d + '" href="/artist?id=' + hX5c.id + '" hidefocus="true">' + ev4z(hX5c.name) + "</a>"
        };
        return function (fS5X, V3x, wR0x, cP4T, bFO9F, Wk7d) {
            if (!fS5X || !fS5X.length) return "";
            wR0x = wR0x || "/";
            V3x = V3x || "";
            Mw5B = "";
            var em4q = [];
            for (var i = 0, i2x = [], tg9X = [], fM5R; i < fS5X.length; ++i) {
                em4q.push(fS5X[i].name);
                if (!fS5X[i] || fS5X[i].id <= 0) {
                    tg9X.push(fS5X[i]);
                    continue
                }
                if (k2x.gG5L(V3x)) {
                    fM5R = V3x(fS5X[i])
                } else {
                    fM5R = Uy7r(fS5X[i], V3x, cP4T, Wk7d)
                }
                if (fM5R && bFO9F && fS5X[i].tns && fS5X[i].tns.length > 0) {
                    Mw5B = k2x.dG4K(fS5X[i].tns[0]);
                    fM5R += '<span class="s-fc8" title="' + Mw5B + '"> - (' + Mw5B + ")</span>"
                }!!fM5R && i2x.push(fM5R)
            }
            for (var i = 0, fM5R; i < tg9X.length; ++i) {
                if (k2x.gG5L(V3x)) {
                    fM5R = V3x(tg9X[i])
                } else {
                    fM5R = Uy7r(tg9X[i], V3x, cP4T, Wk7d)
                }
                if (fM5R && bFO9F && tg9X[i].tns && tg9X[i].tns.length > 0) {
                    Mw5B = k2x.dG4K(tg9X[i].tns[0]);
                    fM5R += '<span class="s-fc8" title="' + Mw5B + '"> - (' + Mw5B + ")</span>"
                }!!fM5R && i2x.push(fM5R)
            }
            return '<span title="' + em4q.join(wR0x) + '">' + i2x.join(wR0x) + "</span>"
        }
    }();
    l2x.yl1x = function (fx5C, pC8u) {
        pC8u = pC8u || "86";
        return !!fx5C && (pC8u == "86" ? /^\d{11}$/ : /^\d+$/).test(fx5C)
    };
    l2x.cEA2x = function (fx5C) {
        if (!l2x.yl1x(fx5C)) return fx5C;
        return fx5C.substring(0, 3) + "****" + fx5C.substr(7)
    };
    l2x.jP6J = function () {
        var dg4k = /^\s+$/g;
        return function (ia5f) {
            return !ia5f || dg4k.test(ia5f)
        }
    }();
    l2x.UC7v = function () {
        var bkv4z = /[^\x00-\xfff]/g;
        return function (ia5f) {
            var cyV1x = ia5f.match(bkv4z) || [],
                dr4v = cyV1x.length;
            return ia5f.length + dr4v
        }
    }();
    l2x.Bm1x = function () {
        var bkv4z = /[^\x00-\xfff]/;
        return function (ia5f, eG4K) {
            for (var i = 0, len = ia5f.length; i < len && eG4K > 0; i++) {
                if (bkv4z.test(ia5f.charAt(i))) {
                    eG4K -= 2;
                    if (eG4K < 0) {
                        break
                    }
                } else {
                    eG4K -= 1
                }
            }
            return ia5f.substring(0, i)
        }
    }();
    l2x.Dr2x = function (ia5f, eG4K, QC6w) {
        eG4K = eG4K || 10;
        QC6w = QC6w || nej.p.ds4w.engine == "trident" && parseInt(nej.p.ds4w.release) < 5;
        if (QC6w && l2x.UC7v(ia5f) > eG4K) {
            return l2x.Bm1x(ia5f, eG4K) + "..."
        } else {
            return ia5f
        }
    };
    l2x.bGV0x = function (f2x) {
        return f2x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f2x.type || f2x.href || ~f2x.tabIndex)
    };
    l2x.cyU1x = function (d2x, cP4T) {
        if (!d2x || !cP4T) return !0;
        var f2x, u2x = d2x.type.toLowerCase();
        if (u2x == "mouseout") {
            f2x = d2x.relatedTarget || d2x.toElement
        } else if (u2x == "mouseover") {
            f2x = d2x.relatedTarget || d2x.fromElement
        }
        return !f2x || f2x !== cP4T && !l2x.Mv5A(cP4T, f2x)
    };
    l2x.ti9Z = function () {
        R3x = {};
        return function (f2x, ec4g) {
            var C2x = a2x.lK7D(f2x),
                J2x = "hover-" + C2x;
            if (!ec4g || !C2x || !!R3x[J2x]) return;
            R3x[J2x] = !0;
            h2x.s2x(C2x, "mouseover", function () {
                var bjS4W = a2x.H2x(f2x, "hshow") || [];
                var bjP4T = a2x.H2x(f2x, "icn-dislike") || [];
                a2x.y2x(C2x, "z-hover");
                a2x.ba3x(bjS4W[0], "display", "block");
                a2x.ba3x(bjP4T[0], "display", "block")
            });
            h2x.s2x(C2x, "mouseout", function () {
                var bjS4W = a2x.H2x(f2x, "hshow") || [];
                var bjP4T = a2x.H2x(f2x, "icn-dislike") || [];
                a2x.x2x(C2x, "z-hover");
                a2x.ba3x(bjS4W[0], "display", "none");
                a2x.ba3x(bjP4T[0], "display", "none")
            })
        }
    }();
    l2x.bHh0x = function () {
        var by3x = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (ia5f) {
            return k2x.BS2x(by3x, ia5f)
        }
    }();
    l2x.xN0x = function (bA3x) {
        if (k2x.Ea2x(bA3x)) bA3x = bA3x.getTime();
        var eT4X = new Date,
            ko6i = eT4X.getTime() - bA3x;
        if (ko6i <= 6e4) return "刚刚";
        var mW7P = eT4X.getHours() * 36e5 + eT4X.getMinutes() * 6e4 + eT4X.getSeconds() * 1e3;
        if (ko6i <= mW7P) {
            if (ko6i < 36e5) {
                var Gm3x = Math.floor(ko6i / 6e4);
                return Gm3x + "分钟前"
            }
            return k2x.hW5b(bA3x, "HH:mm")
        } else {
            if (ko6i < mW7P + 864e5) {
                return "昨天" + k2x.hW5b(bA3x, "HH:mm")
            } else {
                var gE5J = eT4X.getFullYear(),
                    UD7w = new Date(gE5J, 0, 1);
                var mW7P = eT4X.getTime() - UD7w.getTime();
                if (ko6i < mW7P) {
                    return k2x.hW5b(bA3x, "M月d日 HH:mm")
                }
                return k2x.hW5b(bA3x, "yyyy年M月d日")
            }
        }
    };
    l2x.cyS1x = function (bA3x) {
        if (k2x.Ea2x(bA3x)) bA3x = bA3x.getTime();
        var eT4X = new Date,
            ko6i = eT4X.getTime() - bA3x;
        var mW7P = eT4X.getHours() * 36e5 + eT4X.getMinutes() * 6e4 + eT4X.getSeconds() * 1e3;
        if (ko6i <= mW7P) {
            return "今天" + k2x.hW5b(bA3x, "HH:mm")
        } else {
            if (ko6i < mW7P + 864e5) {
                return "昨天" + k2x.hW5b(bA3x, "HH:mm")
            } else {
                return k2x.hW5b(bA3x, "yy-MM-dd HH:mm")
            }
        }
    };
    l2x.cyR1x = function (bA3x) {
        if (k2x.Ea2x(bA3x)) bA3x = bA3x.getTime();
        var eT4X = new Date,
            ko6i = eT4X.getTime() - bA3x;
        if (ko6i <= 6e4) return "刚刚";
        var mW7P = eT4X.getHours() * 36e5 + eT4X.getMinutes() * 6e4 + eT4X.getSeconds() * 1e3;
        if (ko6i <= mW7P) {
            if (ko6i < 36e5) {
                var Gm3x = Math.floor(ko6i / 6e4);
                return Gm3x + "分钟前"
            }
            return k2x.hW5b(bA3x, "HH:mm")
        } else {
            if (ko6i < mW7P + 864e5) {
                return "昨天" + k2x.hW5b(bA3x, "HH:mm")
            } else if (ko6i < mW7P + 864e5 * 6) {
                var gE5J = eT4X.getFullYear(),
                    UD7w = new Date(gE5J, 0, 1);
                var mW7P = eT4X.getTime() - UD7w.getTime();
                if (ko6i < mW7P) {
                    return k2x.hW5b(bA3x, "M月d日 HH:mm")
                }
                return k2x.hW5b(bA3x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l2x.Wh7a = function () {
        var dg4k = /\{(.*?)\}/gi;
        return function (ph8Z, j2x) {
            return (ph8Z || "").replace(dg4k, function ($1, $2) {
                var D2x = j2x[$2];
                return D2x == null ? $1 : D2x
            })
        }
    }();
    l2x.fg4k = function () {
        var bf3x = Array.prototype.slice.call(arguments, 0),
            ph8Z = bf3x.shift();
        if (ph8Z) {
            return ph8Z.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bf3x.length ? bf3x[$2] : $1
            })
        }
        return ""
    };
    l2x.My5D = function (i2x, dZ4d, kj6d) {
        return "";
        kj6d = kj6d || " - ";
        if (i2x && i2x.length) {
            return kj6d + (!!dZ4d ? '<span class="' + dZ4d + '">' + i2x[0] + "</span>" : i2x[0])
        }
        return ""
    };
    l2x.bIJ0x = function () {
        if (window.getSelection) {
            var sF9w = window.getSelection();
            if (sF9w && sF9w.focusNode && sF9w.focusNode.tagName) {
                var Dn2x = a2x.dk4o(sF9w.focusNode);
                for (var i = 0, Ah1x; i < Dn2x.length; ++i) {
                    Ah1x = Dn2x[i].tagName;
                    if (!Ah1x) continue;
                    Ah1x = Ah1x.toLowerCase();
                    if (Ah1x == "textarea" || Ah1x == "input") return !0
                }
            }
        } else if (document.selection) {
            var db4f = document.selection.createRange();
            if (db4f) {
                var f2x = db4f.parentElement();
                if (f2x && f2x.tagName) {
                    var Ah1x = f2x.tagName.toLowerCase();
                    if (Ah1x == "textarea" || Ah1x == "input") return !0
                }
            }
        }
        return !1
    };
    l2x.Dm2x = function (fD5I) {
        if (/^[A-Z]\:\\/i.test(fD5I)) {
            fD5I = fD5I.split("\\")
        } else {
            fD5I = fD5I.split("/")
        }
        fD5I = fD5I[fD5I.length - 1];
        return fD5I
    };
    l2x.cyQ1x = function () {
        var DQ2x = [13, 17, 34, 19, 18, 21];
        return function (C2x) {
            var bs3x = (C2x || "").split("_");
            return {
                type: DQ2x[bs3x[2]] || -1,
                id: bs3x[3] || ""
            }
        }
    }();
    l2x.bJz0x = function (gq5v) {
        if (!gq5v) {
            return true
        }
        for (var k in gq5v) {
            return false
        }
        return true
    };
    l2x.bin4r = function (do4s) {
        if (!do4s) {
            return ""
        }
        if (4 == do4s.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (do4s.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (do4s.expertTags && do4s.expertTags.length || !l2x.bJz0x(do4s.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l2x.UH7A = function (hH5M) {
        if (!hH5M) return "";
        var dr4v = hH5M.length,
            ip5u = [];
        ip5u[0] = dr4v / 3 | 0;
        ip5u[1] = ip5u[0] + ((dr4v - ip5u[0]) / 2 | 0);
        return hH5M.substring(0, ip5u[0]) + hH5M.substring(ip5u[0], ip5u[1]).replace(/\d/g, "*") + hH5M.substring(ip5u[1], dr4v)
    };
    l2x.cEB2x = function (r2x, cy3x) {
        return (r2x % cy3x + cy3x) % cy3x
    };
    l2x.bhN3x = function () {
        var DQ2x = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function (C2x) {
            var bs3x = (C2x || "").split("_"),
                o2x = {
                    type: DQ2x[bs3x[2]] || -1,
                    id: bs3x[3] || ""
                };
            if (o2x.type == "event") {
                o2x.uid = bs3x[4] || "";
                return "/" + o2x.type + "?id=" + o2x.id + "&uid=" + o2x.uid
            }
            return "/" + o2x.type + "?id=" + o2x.id
        }
    }();
    l2x.bhz3x = function () {
        var DQ2x = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function (C2x) {
            var bs3x = (C2x || "").split("_");
            return DQ2x[bs3x[2]] || "资源"
        }
    }();
    l2x.cyO1x = function (bv3x) {
        var qs = bv3x.length > 0 ? bv3x.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l2x.bgX1x = function (oc7V, UR7K) {
        var VZ7S = 0,
            ex4B = new Array;
        k2x.bd3x(oc7V, function (Y3x, r2x) {
            var cw3x = a2x.dh4l("img");
            cw3x.src = Y3x;
            h2x.s2x(cw3x, "load", function (r2x, d2x) {
                ex4B[r2x] = 1;
                VZ7S++;
                if (VZ7S == oc7V.length) UR7K(oc7V, ex4B)
            }.g2x(this, r2x));
            h2x.s2x(cw3x, "error", function (d2x, r2x) {
                ex4B[r2x] = 0;
                VZ7S++;
                if (VZ7S == oc7V.length) UR7K(oc7V, ex4B)
            }.g2x(this, r2x))
        })
    };
    l2x.ME5J = function (i2x, dW4a) {
        var o2x = [];
        k2x.bd3x(i2x, function (p2x, r2x, P2x) {
            o2x.push(dW4a(p2x, r2x, P2x))
        });
        return o2x
    };
    l2x.beP0x = function (i2x, dW4a, P2x) {
        var o2x = [];
        k2x.bd3x(i2x, function (p2x, r2x) {
            if (dW4a.call(P2x, p2x, r2x, i2x)) {
                o2x.push(p2x)
            }
        });
        return o2x
    };
    l2x.bKH0x = function (bo3x) {
        return k2x.dG4K((bo3x || "").replace(/\s{2,}/g, " ").trim())
    };
    var cyM1x = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l2x.cyJ1x = function (bo3x) {
        return k2x.BS2x(cyM1x, bo3x)
    };
    l2x.bwN7G = function (bj3x) {
        if (bj3x.transNames && bj3x.transNames.length) {
            return bj3x.transNames[0]
        } else if (bj3x.alias && bj3x.alias.length) {
            return bj3x.alias[0]
        }
    };
    l2x.bwj7c = function (Tw7p) {
        if (Tw7p) {
            return Tw7p.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l2x.bta6U = function (f2x) {
        var f2x = a2x.B2x(f2x),
            cG3x = f2x && f2x.getElementsByTagName("textarea")[0],
            J2x = a2x.t2x(f2x, "key"),
            bqR6L = a2x.t2x(f2x, "simple") == "1",
            cyI1x = a2x.t2x(f2x, "pvnamed") == "1",
            cyH1x = q2x.wh0x.gp5u();
        if (!(f2x && cG3x && J2x)) return;
        var VR7K, bnl5q, VQ7J;
        VR7K = a2x.H2x(a2x.B2x("m-playlist"), "j-img");
        k2x.bd3x(VR7K, function (ja6U) {
            if (!VQ7J && a2x.t2x(ja6U, "key")) {
                VQ7J = a2x.t2x(ja6U, "key");
                ja6U.removeAttribute("data-key")
            }
        });
        VR7K = a2x.H2x(a2x.B2x("m-playlist"), "m-info");
        k2x.bd3x(VR7K, function (ja6U) {
            if (!bnl5q && ja6U.id && ja6U.id.indexOf("auto-id-") == 0) {
                bnl5q = ja6U.id.slice(8, 12)
            }
        });
        var D2x = cG3x.value || cG3x.defaultValue;
        if (VQ7J) {
            D2x = decodeURIComponent(k2x.cyG1x(D2x, "param=" + bnl5q + VQ7J))
        }
        D2x = JSON.parse(D2x);
        if (cyI1x) {
            l2x.cyF1x(D2x)
        }
        if (bqR6L) {
            D2x = l2x.FZ3x(D2x)
        }
        cyH1x.vu0x(J2x, D2x);
        f2x.innerHTML = "";
        return J2x
    };
    l2x.cyC1x = function (pO8G) {
        if (!pO8G.onbeforelistload) {
            pO8G.onbeforelistload = function (d2x) {
                d2x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pO8G.onemptylist) {
            pO8G.onemptylist = function (d2x) {
                d2x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pO8G.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pO8G
    };
    l2x.cyF1x = function (hy5D) {
        k2x.bd3x(hy5D, function (bN3x) {
            bN3x.privilege = bN3x.pv;
            delete bN3x.pv
        })
    };
    l2x.FZ3x = function (ij5o) {
        if (k2x.eJ4N(ij5o)) {
            var dE4I = [];
            k2x.bd3x(ij5o, function (bqR6L) {
                dE4I.push(bMQ1x(bqR6L))
            });
            return dE4I
        } else {
            return bMQ1x(ij5o)
        }

        function bMQ1x(ij5o) {
            if (!ij5o) return null;
            var dE4I = {
                album: ij5o.al,
                alias: ij5o.alia || ij5o.ala || [],
                artists: ij5o.ar || [],
                commentThreadId: "R_SO_4_" + ij5o.id,
                copyrightId: ij5o.cp || 0,
                duration: ij5o.dt || 0,
                id: ij5o.id,
                mvid: ij5o.mv || 0,
                name: ij5o.name || "",
                cd: ij5o.cd,
                position: ij5o.no || 0,
                ringtone: ij5o.rt,
                rtUrl: ij5o.rtUrl,
                status: ij5o.st || 0,
                pstatus: ij5o.pst || 0,
                fee: ij5o.fee || 0,
                version: ij5o.v || 0,
                eq: ij5o.eq,
                songType: ij5o.t || 0,
                mst: ij5o.mst,
                score: ij5o.pop || 0,
                ftype: ij5o.ftype,
                rtUrls: ij5o.rtUrls,
                transNames: ij5o.tns,
                privilege: ij5o.privilege,
                lyrics: ij5o.lyrics
            };
            return dE4I
        }
    };
    l2x.cEC2x = function () {
        var f2x = a2x.nK7D('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f2x);
        h2x.s2x(f2x, "click", function (d2x) {
            h2x.bh3x(d2x);
            a2x.cJ4N(f2x)
        })
    };
    l2x.iM6G = function (cH3x) {
        if (cH3x < 1e5) {
            return cH3x
        } else if (cH3x < 1e8) {
            return Math.floor(cH3x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cH3x / 1e7) / 10 + "亿"
        }
    };
    l2x.un9e = function (cH3x, cG3x) {
        return "<i>" + (cH3x ? "(" + cH3x + ")" : cG3x) + "</i>"
    };
    l2x.bNo1x = function (u2x, ig5l) {
        var e2x = {};
        if (!k2x.lG7z(ig5l)) {
            return e2x
        }
        switch (parseInt(u2x)) {
            case 17:
                e2x.title = ig5l.name;
                e2x.author = (ig5l.radio || []).name;
                e2x.picUrl = ig5l.coverUrl;
                e2x.category = ig5l.radio.category;
                break;
            case 19:
                e2x.title = ig5l.name;
                e2x.author = l2x.ys1x(ig5l.artists);
                e2x.authors = l2x.ys1x(ig5l.artists, " / ");
                e2x.picUrl = ig5l.picUrl;
                break;
            case 13:
                e2x.title = ig5l.name;
                e2x.author = (ig5l.creator || []).nickname;
                e2x.picUrl = ig5l.coverImgUrl;
                break;
            case 18:
                e2x.title = ig5l.name;
                e2x.author = l2x.ys1x(ig5l.artists);
                e2x.picUrl = (ig5l.album || []).picUrl;
                break;
            case 20:
                e2x.title = ig5l.name;
                e2x.author = "";
                e2x.picUrl = ig5l.img1v1Url;
                break;
            case 21:
                e2x.title = ig5l.name;
                e2x.author = ig5l.artistName;
                e2x.authors = l2x.ys1x(ig5l.artists, " / ");
                e2x.picUrl = ig5l.newCover || ig5l.cover;
                break;
            case 70:
                e2x.title = ig5l.name;
                e2x.author = (ig5l.dj || []).nickname;
                e2x.picUrl = ig5l.picUrl;
                e2x.category = ig5l.category;
                break;
            default:
                break
        }
        return e2x
    };
    l2x.bNx1x = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l2x.Vl7e = function (ev4z, on8f, e2x) {
        var bJ3x, bf3x, o2x;
        var gN5S = null;
        var up9g = 0;
        if (!e2x) e2x = {};
        var yG1x = function () {
            up9g = e2x.leading === false ? 0 : +(new Date);
            gN5S = null;
            o2x = ev4z.apply(bJ3x, bf3x);
            if (!gN5S) bJ3x = bf3x = null
        };
        return function () {
            var eT4X = +(new Date);
            if (!up9g && e2x.leading === false) up9g = eT4X;
            var HQ3x = on8f - (eT4X - up9g);
            bJ3x = this;
            bf3x = arguments;
            if (HQ3x <= 0 || HQ3x > on8f) {
                if (gN5S) {
                    clearTimeout(gN5S);
                    gN5S = null
                }
                up9g = eT4X;
                o2x = ev4z.apply(bJ3x, bf3x);
                if (!gN5S) bJ3x = bf3x = null
            } else if (!gN5S && e2x.trailing !== false) {
                gN5S = setTimeout(yG1x, HQ3x)
            }
            return o2x
        }
    };
    l2x.MK5P = function (ev4z, on8f, ox8p) {
        var gN5S, bf3x, bJ3x, CZ2x, o2x;
        var yG1x = function () {
            var gs5x = new Date - CZ2x;
            if (gs5x < on8f && gs5x >= 0) {
                gN5S = setTimeout(yG1x, on8f - gs5x)
            } else {
                gN5S = null;
                if (!ox8p) {
                    o2x = ev4z.apply(bJ3x, bf3x);
                    if (!gN5S) bJ3x = bf3x = null
                }
            }
        };
        return function () {
            bJ3x = this;
            bf3x = arguments;
            CZ2x = new Date;
            var Vn7g = ox8p && !gN5S;
            if (!gN5S) gN5S = setTimeout(yG1x, on8f);
            if (Vn7g) {
                o2x = ev4z.apply(bJ3x, bf3x);
                bJ3x = bf3x = null
            }
            return o2x
        }
    };
    l2x.Vp7i = function (f2x, hp5u) {
        if (f2x) {
            var f2x = f2x.firstElementChild;
            if (f2x) {
                f2x.firstElementChild && (f2x = f2x.firstElementChild);
                f2x.setAttribute("xlink:href", "/style/pc/svg/" + hp5u)
            }
        }
    };
    l2x.bOw1x = function (em4q) {
        if (!em4q || !em4q.length) {
            return
        }
        em4q = /^#(.+?)#$/.exec(em4q)[1];
        em4q = em4q.replace(/\s/g, " ");
        v2x.bn3x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k2x.cC3x({
                actname: em4q
            }),
            onload: function (Q3x) {
                if (!Q3x || Q3x.code != 200 || !Q3x.act) {
                    m2x.Z3x.L2x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q3x.act.actId)
                }
            },
            onerror: function (cb3x) {
                m2x.Z3x.L2x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l2x.cyA1x = function (em4q) {
        if (!em4q || !em4q.length) {
            return
        }
        var Vr7k = location.host;
        em4q = /^#(.+?)#$/.exec(em4q)[1];
        em4q = em4q.replace(/\s/g, " ");
        v2x.bn3x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k2x.cC3x({
                actname: em4q
            }),
            onload: function (Q3x) {
                if (!Q3x || Q3x.code != 200 || !Q3x.act) {
                    cB3x.io5t("该话题暂未创建")
                } else {
                    cB3x.Bp1x(Vr7k + "/activity?id=" + Q3x.act.actId)
                }
            },
            onerror: function (cb3x) {
                cB3x.io5t("操作失败，请稍后再试")
            }
        })
    };
    l2x.bpD5I = function (zL1x, sz9q) {
        if (!zL1x || !sz9q) return false;
        if (zL1x == sz9q) return true;
        return l2x.bpD5I(zL1x, sz9q.parentNode)
    };
    a2x.cE3x = function (bI3x, iY6S) {
        if (!bI3x) return null;
        if (!iY6S) return bI3x.firstChild;
        return a2x.H2x(bI3x, iY6S)[0]
    };
    l2x.bPK2x = function (ia5f) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ia5f)
    };
    l2x.bPP2x = function (ia5f, Vs7l) {
        Vs7l = Vs7l || "86";
        if (Vs7l == "86") return /^\d{11}$/.test(ia5f);
        return /^\d+$/.test(ia5f)
    };
    l2x.cED2x = function (uR0x) {
        if (!uR0x) {
            return "0b"
        }
        var cyx1x = ["Bytes", "KB", "MB", "GB"];
        var bc3x = Math.floor(Math.log(uR0x) / Math.log(1024));
        return (uR0x / Math.pow(1024, Math.floor(bc3x))).toFixed(bc3x == 1 ? 0 : 1) + cyx1x[bc3x]
    };
    l2x.bQk2x = function (dI4M, fr5w, cyw1x) {
        if (!dI4M) return dI4M;
        var dr4v = k2x.fw5B(dI4M);
        if (dr4v <= fr5w) return dI4M;
        var boe5j = dr4v - dI4M.length,
            bjn4r = dI4M.length - boe5j;
        var fC5H = Math.ceil(fr5w / 2),
            cyv1x = fr5w,
            bQM3x = 0;
        if (boe5j < fC5H) fC5H = fr5w - boe5j;
        if (bjn4r < fr5w) fr5w = bjn4r + Math.ceil((fr5w - bjn4r) / 2);
        while (fC5H <= fr5w) {
            bQM3x = k2x.fw5B(dI4M.substr(0, fC5H));
            var bhb1x = cyv1x - bQM3x;
            if (bhb1x == 0) break;
            if (bhb1x == 1) {
                var cyt1x = k2x.fw5B(dI4M.charAt(fC5H));
                if (cyt1x == 1) {
                    fC5H++;
                    break
                } else {
                    break
                }
            }
            fC5H += Math.floor(bhb1x / 2)
        }
        return dI4M.substr(0, fC5H) + (!!cyw1x ? "" : "...")
    };
    l2x.cys1x = function (bq3x) {
        bq3x = bq3x || 10;
        var cK4O = "";
        for (var i = 0; i < bq3x; i++) {
            cK4O += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cK4O
    };
    var cyq1x = /([A-Za-z0-9 \.\-\(\)\!\?])/,
        cyp1x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        cyo1x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bRd3x = function (cyn1x) {
        var bq3x = k2x.Bj1x(1, 5),
            cym1x = Math.random() < .5,
            jf6Z = "";
        if (cyn1x) {
            if (cym1x) {
                while (bq3x >= 0) {
                    jf6Z += cyo1x[k2x.Bj1x(0, 500)];
                    bq3x--
                }
            } else {
                jf6Z = l2x.cys1x(bq3x)
            }
        } else {
            jf6Z = k2x.OH5M(bq3x)
        }
        return '<div class="soil">' + jf6Z + "</div>"
    };
    l2x.blf4j = function (er4v) {
        er4v = k2x.BR2x(er4v);
        try {
            var bq3x = er4v.length,
                r2x = k2x.Bj1x(1, bq3x - 1);
            while (r2x < bq3x) {
                if (cyp1x.test(er4v.charAt(r2x))) {
                    return k2x.dG4K(er4v.slice(0, r2x)) + bRd3x(true) + k2x.dG4K(er4v.slice(r2x))
                } else if (cyq1x.test(er4v.charAt(r2x))) {
                    return k2x.dG4K(er4v.slice(0, r2x)) + bRd3x() + k2x.dG4K(er4v.slice(r2x))
                } else {
                    r2x++
                }
            }
            return k2x.dG4K(er4v)
        } catch (e) {
            return k2x.dG4K(er4v)
        }
    };
    l2x.bal9c = function (li6c, mx7q) {
        return "//nos.netease.com/" + li6c + "/" + mx7q
    };
    l2x.cyl1x = function (fD5I) {
        var dP4T = /(.+)(\.[^\.]+$)/.exec(fD5I);
        return dP4T ? {
            filename: dP4T[1],
            suffix: dP4T[2]
        } : {
            filename: fD5I || "",
            suffix: ""
        }
    };
    l2x.bRB3x = function (bs3x, cyj1x) {
        var dE4I = [];
        k2x.bd3x(bs3x, function (id5i) {
            dE4I.push(cyj1x(id5i))
        });
        return dE4I
    };
    var cyg1x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l2x.bRT3x = function (yg0x) {
        var j2x = NEJ.X({}, yg0x);
        k2x.eE4I(yg0x, function (p2x, J2x) {
            var bRW3x = cyg1x[J2x];
            if (bRW3x) {
                j2x[bRW3x] = p2x
            }
        });
        var Vx7q = yg0x.creator || [];
        if (!k2x.eJ4N(Vx7q)) {
            Vx7q = [Vx7q]
        }
        if (Vx7q) {
            j2x.artists = [];
            k2x.bd3x(Vx7q, function (p2x) {
                j2x.artists.push({
                    name: p2x.nickname || p2x.userName,
                    id: p2x.userId
                })
            })
        }
        if (!!yg0x.aliaName) {
            j2x.alias = [yg0x.aliaName]
        }
        if (!!yg0x.transName) {
            j2x.transNames = [yg0x.transName]
        }
        return j2x
    };
    l2x.cyf1x = function (Y3x) {
        return (Y3x || "").replace(/^https?:/, "")
    };
    l2x.FI3x = function (cK4O) {
        if (!k2x.fF5K(cK4O)) return cK4O;
        var dE4I = null;
        try {
            dE4I = JSON.parse(cK4O)
        } catch (_e) {}
        return dE4I
    };
    var cyd1x = '<span class="s-fc7 f-tdn">${value}</span>';
    l2x.cya1x = function (cG3x, sY9P, e2x) {
        e2x = e2x || {};
        if (!sY9P) {
            return k2x.dG4K(cG3x)
        }
        cG3x = k2x.BR2x(cG3x);
        var pt8l = [],
            bs3x = null,
            NG5L = new RegExp(l2x.bHh0x(sY9P), "gi"),
            ph8Z = e2x.tpl || cyd1x;
        while (bs3x = NG5L.exec(cG3x)) {
            var dP4T = {
                html: "",
                before: bs3x.index - 1,
                after: bs3x.index + bs3x[0].length
            };
            var EX2x = a2x.eu4y(ph8Z);
            dP4T.html = a2x.bZ3x(EX2x, {
                value: k2x.dG4K(bs3x[0])
            });
            pt8l.push(dP4T)
        }
        var bmA5F = pt8l.length,
            kf6Z = {
                before: cG3x.length - 1,
                after: 0
            },
            dE4I = "";
        for (var i = 0; i <= bmA5F; i++) {
            var hu5z, fP5U;
            hu5z = (pt8l[i - 1] || kf6Z).after;
            fP5U = (pt8l[i] || kf6Z).before;
            if (fP5U >= hu5z && hu5z >= 0 && fP5U <= cG3x.length - 1) {
                dE4I += k2x.dG4K(cG3x.substring(hu5z, fP5U + 1))
            }
            if (pt8l[i]) {
                dE4I += pt8l[i].html
            }
        }
        return dE4I
    }
})();
(function () {
    var k2x = NEJ.P("nej.u");

    function cxZ1x() {
        var CR2x = function (ib5g) {
            if (ib5g < -128) {
                return CR2x(128 - (-128 - ib5g))
            } else if (ib5g >= -128 && ib5g <= 127) {
                return ib5g
            } else if (ib5g > 127) {
                return CR2x(-129 + ib5g - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cxW0x = function (ib5g, bi3x) {
            return CR2x(ib5g + bi3x)
        };
        var cxV0x = function (VK7D, bpT5Y) {
            if (VK7D == null) {
                return null
            }
            if (bpT5Y == null) {
                return VK7D
            }
            var rd8V = [];
            var cxU0x = bpT5Y.length;
            for (var i = 0, bq3x = VK7D.length; i < bq3x; i++) {
                rd8V[i] = cxW0x(VK7D[i], bpT5Y[i % cxU0x])
            }
            return rd8V
        };
        var cxT0x = function (VL7E) {
            if (VL7E == null) {
                return VL7E
            }
            var rd8V = [];
            var cxS0x = VL7E.length;
            for (var i = 0, bq3x = cxS0x; i < bq3x; i++) {
                rd8V[i] = CR2x(0 - VL7E[i])
            }
            return rd8V
        };
        var cxP0x = function (bff0x, Vk7d) {
            bff0x = CR2x(bff0x);
            Vk7d = CR2x(Vk7d);
            return CR2x(bff0x ^ Vk7d)
        };
        var bTE3x = function (Vj7c, bqq6k) {
            if (Vj7c == null || bqq6k == null || Vj7c.length != bqq6k.length) {
                return Vj7c
            }
            var rd8V = [];
            var cxM0x = Vj7c.length;
            for (var i = 0, bq3x = cxM0x; i < bq3x; i++) {
                rd8V[i] = cxP0x(Vj7c[i], bqq6k[i])
            }
            return rd8V
        };
        var bTS4W = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cxL0x = function (dw4A) {
            var MH5M = [];
            MH5M.push(bTS4W[dw4A >>> 4 & 15]);
            MH5M.push(bTS4W[dw4A & 15]);
            return MH5M.join("")
        };
        var bTX4b = function (uR0x) {
            var bq3x = uR0x.length;
            if (uR0x == null || bq3x < 0) {
                return new String("")
            }
            var MH5M = [];
            for (var i = 0; i < bq3x; i++) {
                MH5M.push(cxL0x(uR0x[i]))
            }
            return MH5M.join("")
        };
        var bUd4h = function (VW7P) {
            if (VW7P == null || VW7P.length == 0) {
                return VW7P
            }
            var beQ0x = new String(VW7P);
            var rd8V = [];
            var bq3x = beQ0x.length / 2;
            var bi3x = 0;
            for (var i = 0; i < bq3x; i++) {
                var pf8X = parseInt(beQ0x.charAt(bi3x++), 16) << 4;
                var pg8Y = parseInt(beQ0x.charAt(bi3x++), 16);
                rd8V[i] = CR2x(pf8X + pg8Y)
            }
            return rd8V
        };
        var bUi4m = function (cK4O) {
            if (cK4O == null || cK4O == undefined) {
                return cK4O
            }
            var UM7F = encodeURIComponent(cK4O);
            var uR0x = [];
            var bUu4y = UM7F.length;
            for (var i = 0; i < bUu4y; i++) {
                if (UM7F.charAt(i) == "%") {
                    if (i + 2 < bUu4y) {
                        uR0x.push(bUd4h(UM7F.charAt(++i) + "" + UM7F.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    uR0x.push(UM7F.charCodeAt(i))
                }
            }
            return uR0x
        };
        var cxK0x = function (wW0x) {
            var bc3x = 0;
            bc3x += (wW0x[0] & 255) << 24;
            bc3x += (wW0x[1] & 255) << 16;
            bc3x += (wW0x[2] & 255) << 8;
            bc3x += wW0x[3] & 255;
            return bc3x
        };
        var cEG2x = function (bc3x) {
            var wW0x = [];
            wW0x[0] = bc3x >>> 24 & 255;
            wW0x[1] = bc3x >>> 16 & 255;
            wW0x[2] = bc3x >>> 8 & 255;
            wW0x[3] = bc3x & 255;
            return wW0x
        };
        var cxG0x = function (cR4V, bhi3x, bq3x) {
            var dE4I = [];
            if (cR4V == null || cR4V.length == 0) {
                return dE4I
            }
            if (cR4V.length < bq3x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq3x; i++) {
                dE4I[i] = cR4V[bhi3x + i]
            }
            return dE4I
        };
        var bhD3x = function (cR4V, bhi3x, sy9p, cxD0x, bq3x) {
            if (cR4V == null || cR4V.length == 0) {
                return sy9p
            }
            if (sy9p == null) {
                throw new Error("1004")
            }
            if (cR4V.length < bq3x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq3x; i++) {
                sy9p[cxD0x + i] = cR4V[bhi3x + i]
            }
            return sy9p
        };
        var cxy0x = function (bq3x) {
            var bs3x = [];
            for (var i = 0; i < bq3x; i++) {
                bs3x[i] = 0
            }
            return bs3x
        };
        var cxv0x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var Mx5C = 64;
        var Wg7Z = 64;
        var bxK7D = 4;
        var cxu0x = function (qV8N) {
            var bya7T = [];
            if (qV8N == null || qV8N == undefined || qV8N.length == 0) {
                return cxy0x(Wg7Z)
            }
            if (qV8N.length >= Wg7Z) {
                return cxG0x(qV8N, 0, Wg7Z)
            } else {
                for (var i = 0; i < Wg7Z; i++) {
                    bya7T[i] = qV8N[i % qV8N.length]
                }
            }
            return bya7T
        };
        var cxt0x = function (Wi7b) {
            if (Wi7b == null || Wi7b.length % Mx5C != 0) {
                throw new Error("1005")
            }
            var bkD4H = [];
            var bi3x = 0;
            var cxs0x = Wi7b.length / Mx5C;
            for (var i = 0; i < cxs0x; i++) {
                bkD4H[i] = [];
                for (var j = 0; j < Mx5C; j++) {
                    bkD4H[i][j] = Wi7b[bi3x++]
                }
            }
            return bkD4H
        };
        var cxr0x = function (byl8d) {
            var pf8X = byl8d >>> 4 & 15;
            var pg8Y = byl8d & 15;
            var bi3x = pf8X * 16 + pg8Y;
            return cxv0x[bi3x]
        };
        var byp8h = function (blS4W) {
            if (blS4W == null) {
                return null
            }
            var bys8k = [];
            for (var i = 0, bq3x = blS4W.length; i < bq3x; i++) {
                bys8k[i] = cxr0x(blS4W[i])
            }
            return bys8k
        };
        var byx8p = function (Ms5x, qV8N) {
            if (Ms5x == null) {
                return null
            }
            if (Ms5x.length == 0) {
                return []
            }
            if (Ms5x.length % Mx5C != 0) {
                throw new Error("1005")
            }
            qV8N = cxu0x(qV8N);
            var bpL5Q = qV8N;
            var bqw6q = cxt0x(Ms5x);
            var Uo7h = [];
            var cxq0x = bqw6q.length;
            for (var i = 0; i < cxq0x; i++) {
                var bqx6r = byp8h(bqw6q[i]);
                bqx6r = byp8h(bqx6r);
                var bqy6s = bTE3x(bqx6r, bpL5Q);
                var cxp0x = cxV0x(bqy6s, cxT0x(bpL5Q));
                bqy6s = bTE3x(cxp0x, qV8N);
                bhD3x(bqy6s, 0, Uo7h, i * Mx5C, Mx5C);
                bpL5Q = bqw6q[i]
            }
            var bzj8b = [];
            bhD3x(Uo7h, Uo7h.length - bxK7D, bzj8b, 0, bxK7D);
            var bq3x = cxK0x(bzj8b);
            if (bq3x > Uo7h.length) {
                throw new Error("1006")
            }
            var rd8V = [];
            bhD3x(Uo7h, 0, rd8V, 0, bq3x);
            return rd8V
        };
        var cxo0x = function (Wy8q, J2x) {
            if (Wy8q == null) {
                return null
            }
            var bzs8k = new String(Wy8q);
            if (bzs8k.length == 0) {
                return []
            }
            var Ms5x = bUd4h(bzs8k);
            if (J2x == null || J2x == undefined) {
                throw new Error("1007")
            }
            var qV8N = bUi4m(J2x);
            return byx8p(Ms5x, qV8N)
        };
        this.cxn0x = function (Wy8q, J2x) {
            var btn6h = cxo0x(Wy8q, J2x);
            var FE3x = new String(bTX4b(btn6h));
            var yi1x = [];
            var btH6B = FE3x.length / 2;
            var bi3x = 0;
            for (var i = 0; i < btH6B; i++) {
                yi1x.push("%");
                yi1x.push(FE3x.charAt(bi3x++));
                yi1x.push(FE3x.charAt(bi3x++))
            }
            return yi1x.join("")
        };
        k2x.cyG1x = function (buO7H, J2x) {
            return k2x.cxm0x(k2x.cDa2x(buO7H), J2x)
        };
        k2x.cxm0x = function (buO7H, J2x) {
            var btn6h = byx8p(buO7H, bUi4m(J2x));
            var FE3x = new String(bTX4b(btn6h));
            var yi1x = [];
            var btH6B = FE3x.length / 2;
            var bi3x = 0;
            for (var i = 0; i < btH6B; i++) {
                yi1x.push("%");
                yi1x.push(FE3x.charAt(bi3x++));
                yi1x.push(FE3x.charAt(bi3x++))
            }
            return yi1x.join("")
        }
    }
    window.settmusic = (new cxZ1x).cxn0x
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        J2x = "Search-tracks_",
        b2x;
    q2x.fg4k({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function (Q3x) {
                return Q3x
            },
            onerror: function (Q3x, e2x) {
                if (Q3x.code == 407) {
                    e2x.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function (e2x, bg3x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cxl0x(parseInt(e2x.data.type)) || "suggest",
                    keyword: e2x.data.s,
                    offset: e2x.offset
                })
            },
            format: function (Q3x, e2x) {
                if (Q3x.abroad) {
                    try {
                        Q3x.result = JSON.parse(decodeURIComponent(settmusic(Q3x.result, q2x.sk)))
                    } catch (e) {}
                }
                Q3x.result = Q3x.result || {};
                var i2x, cy3x, hO5T = [],
                    qm8e = e2x.data.s || "",
                    fZ5e = e2x.data.limit,
                    u2x = parseInt(e2x.data.type) || 1,
                    o2x = Q3x.result;
                switch (u2x) {
                    case 1:
                        i2x = this.bzK8C(o2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        cy3x = o2x.songCount;
                        break;
                    case 10:
                        i2x = o2x.albums;
                        cy3x = o2x.albumCount;
                        break;
                    case 100:
                        i2x = o2x.artists;
                        cy3x = o2x.artistCount;
                        break;
                    case 1e3:
                        i2x = o2x.playlists;
                        cy3x = o2x.playlistCount;
                        break;
                    case 1002:
                        i2x = o2x.userprofiles;
                        cy3x = o2x.userprofileCount;
                        break;
                    case 1004:
                        i2x = o2x.mvs;
                        cy3x = o2x.mvCount;
                        break;
                    case 1014:
                        i2x = l2x.bRB3x(o2x.videos, l2x.bRT3x);
                        cy3x = o2x.videoCount;
                        break;
                    case 1006:
                        i2x = this.bzK8C(o2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        cy3x = o2x.songCount;
                        break;
                    case 1009:
                        var qw8o = o2x.djRadios;
                        if (!!qw8o) {
                            k2x.bd3x(qw8o, function (D2x, r2x, cxk0x) {
                                D2x.xid = D2x.id;
                                D2x.id = D2x.id + "_rad"
                            });
                            if (qw8o.length) {
                                this.vu0x("radio_search-" + e2x.data.s, qw8o)
                            }
                        }
                        cy3x = Math.min(o2x.djprogramCount, 500);
                        i2x = o2x.djprograms || [];
                        if (e2x.data.isPub) {
                            k2x.nx7q(qw8o, function (D2x, r2x, cxk0x) {
                                D2x.stype = 1;
                                i2x.unshift(D2x)
                            });
                            cy3x = Math.min(i2x.length, 500)
                        }
                        break
                }
                this.z2x("onsearchload", Q3x);
                if (i2x && i2x.length) {
                    for (var i = 0; i < fZ5e; i++) {
                        if (i < i2x.length) {
                            hO5T.push(i2x[i])
                        } else {
                            hO5T.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cy3x || 0, qm8e.length < 3 ? 500 : 5e3),
                    list: hO5T
                }
            },
            onerror: function (Q3x, e2x) {
                e2x.onload(e2x, []);
                if (k2x.gG5L(e2x.onerror)) {
                    e2x.onerror(Q3x)
                }
            }
        }
    });
    q2x.FT3x = NEJ.C();
    b2x = q2x.FT3x.N2x(q2x.hI5N);
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.cxj0x = function (J2x, e2x) {
        if (!J2x) return;
        if (!!this.bzR8J) v2x.ki6c(this.bzR8J);
        this.bzR8J = this.cp3x("search-suggest", NEJ.X({
            data: {
                s: J2x,
                limit: 8
            }
        }, e2x))
    };
    b2x.cxi0x = function (J2x, e2x) {
        if (!J2x) return;
        this.cp3x("search-multimatch", NEJ.X({
            data: {
                s: J2x
            }
        }, e2x))
    };
    b2x.bzK8C = function () {
        var cxf0x = function (hw5B, bzU8M, bzZ8R) {
            var cxe0x = hw5B.match(new RegExp(bzU8M + "(.+?)" + bzZ8R, "gi")),
                cH3x = 0;
            k2x.bd3x(cxe0x, function (p2x) {
                cH3x += p2x.replace(new RegExp(bzU8M, "g"), "").replace(new RegExp(bzZ8R, "g"), "").length
            });
            return cH3x
        };
        return function (jt6n, cxd0x, cxc0x) {
            var bAq8i = [];
            k2x.bd3x(jt6n, function (bj3x, bc3x) {
                bj3x = l2x.FZ3x(bj3x);
                var WH8z = bj3x.lyrics || [],
                    dr4v = WH8z.length,
                    jO6I = 0,
                    cy3x = 4,
                    WJ8B = {
                        l: 0,
                        v: 0
                    },
                    bfH1x;
                if (dr4v > 4) {
                    k2x.bd3x(WH8z, function (hw5B, r2x) {
                        var bAA8s = cxf0x(hw5B, cxd0x, cxc0x);
                        if (bAA8s > WJ8B.v) {
                            WJ8B.v = bAA8s;
                            WJ8B.l = r2x
                        }
                    });
                    jO6I = WJ8B.l;
                    jO6I = Math.max(jO6I, 0);
                    bfH1x = dr4v - jO6I - 4;
                    if (bfH1x < 0) jO6I += bfH1x;
                    bj3x.lrcAbstractEnd = jO6I + cy3x - 1
                } else {
                    bj3x.lrcAbstractEnd = dr4v - 1
                }
                bj3x.lrcAbstractStart = jO6I;
                bj3x.indexId = (WH8z && WH8z.length ? "L" : "NL") + bj3x.id;
                bAq8i.push(bj3x)
            });
            return bAq8i
        }
    }();
    b2x.cxl0x = function (u2x) {
        switch (u2x) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1014:
                return "video";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        E2x = c2x("nm.m"),
        m2x = c2x("nm.l"),
        dv4z = c2x("nm.i"),
        M2x = c2x("nm.m.sch"),
        b2x, K2x;
    var WM8E = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M2x.TM7F = NEJ.C();
    b2x = M2x.TM7F.N2x(I2x.cI3x);
    b2x.cx3x = function (f2x) {
        this.cF3x();
        this.bW3x(f2x);
        this.S3x = q2x.FT3x.gp5u()
    };
    b2x.bW3x = function (f2x) {
        this.n2x = f2x;
        var i2x = a2x.H2x(f2x, "j-flag");
        this.eV4Z = i2x[0];
        this.bfS1x = i2x[1];
        this.cs3x = i2x[2];
        this.nw7p = i2x[3];
        h2x.s2x(this.eV4Z, "input", this.gh5m.g2x(this));
        h2x.s2x(this.eV4Z, "keyup", this.gh5m.g2x(this));
        h2x.s2x(this.eV4Z, "focus", this.gP5U.g2x(this));
        h2x.s2x(this.bfS1x, "click", this.gP5U.g2x(this));
        h2x.s2x(this.eV4Z, "blur", this.bgc1x.g2x(this));
        h2x.s2x(this.cs3x, "click", this.WQ8I.g2x(this));
        h2x.s2x(this.n2x, "keydown", this.bgZ1x.g2x(this));
        h2x.s2x(this.n2x, "keypress", this.WR8J.g2x(this));
        h2x.s2x(this.nw7p, "mouseover", this.Tv7o.g2x(this));
        h2x.s2x(this.nw7p, "mouseout", this.Tv7o.g2x(this));
        if (this.eV4Z.value) {
            this.eV4Z.value = ""
        }
        if (this.eV4Z.style.opacity != null) {
            this.eV4Z.style.opacity = 1
        }
    };
    b2x.gh5m = function (d2x) {
        if (d2x.type == "keyup" && d2x.keyCode == 8 || d2x.keyCode == 46) {
            this.GD3x()
        } else if (d2x.type == "input" || d2x.type == "propertychange") {
            setTimeout(this.GD3x.g2x(this), 0)
        }
    };
    b2x.gP5U = function () {
        this.zy1x(this.bfS1x, !1);
        a2x.y2x(this.n2x, "m-srch-fcs");
        this.eV4Z.focus();
        this.GD3x();
        a2x.y2x((a2x.H2x("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b2x.bgc1x = function () {
        if (!this.eV4Z.value) {
            this.zy1x(this.bfS1x, !0)
        }
        var GF3x = a2x.H2x(this.nw7p, "slt");
        if (this.WV8N(this.nw7p) && GF3x.length > 0 && a2x.t2x(GF3x[0], "type")) {
            var hp5u = GF3x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hp5u)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eV4Z.value
                })
            }
            this.bhJ3x(GF3x[0].href)
        }
        this.zy1x(this.nw7p, !1);
        a2x.x2x(this.n2x, "m-srch-fcs")
    };
    b2x.zy1x = function (f2x, ma7T) {
        a2x.ba3x(f2x, "display", !ma7T ? "none" : "")
    };
    b2x.WV8N = function (f2x) {
        return a2x.de4i(f2x, "display") != "none"
    };
    b2x.GD3x = function () {
        var cxb0x = function (ia5f) {
            ia5f = k2x.BR2x(ia5f);
            var eG4K = this.n2x.clientWidth > 250 ? 41 : 17;
            if (l2x.UC7v(ia5f) > eG4K) {
                ia5f = l2x.Bm1x(ia5f, eG4K) + "..."
            }
            return k2x.dG4K(ia5f)
        };
        var WW8O = function (o2x) {
            return o2x.songs && o2x.songs.length || o2x.albums && o2x.albums.length || o2x.artists && o2x.artists.length || o2x.playlists && o2x.playlists.length
        };
        var sA9r = function (sY9P, d2x) {
            if (!l2x.bGV0x(this.eV4Z) || l2x.jP6J(this.eV4Z.value)) {
                this.zy1x(this.nw7p, !1);
                return
            }
            d2x.keyword = k2x.dG4K(sY9P);
            var dR4V = a2x.bZ3x("m-search-suggest", d2x, {
                    mark: l2x.cya1x.ez4D(this, sY9P),
                    cutStr: cxb0x.g2x(this)
                }),
                ts9j = d2x.result.order;
            this.nw7p.innerHTML = dR4V;
            this.zy1x(this.nw7p, WW8O(d2x.result) ? !0 : !1);
            if (!!ts9j && !!ts9j.length && WM8E[ts9j[0]]) {
                this.bhQ3x = {
                    keyword: sY9P,
                    type: WM8E[ts9j[0]]
                }
            }
        };
        var cxa0x = function () {
            this.zy1x(this.nw7p, !1);
            return
        };
        return function () {
            var D2x = this.eV4Z.value;
            if (l2x.jP6J(D2x)) {
                this.zy1x(this.nw7p, !1);
                return
            }
            this.S3x.cxj0x(D2x, {
                onload: sA9r.g2x(this, D2x),
                onForbidden: cxa0x.g2x(this)
            })
        }
    }();
    b2x.WR8J = function (d2x) {
        if (d2x.keyCode != 13) return;
        var GF3x = a2x.H2x(this.nw7p, "slt");
        if (this.WV8N(this.nw7p) && GF3x.length > 0) {
            this.bhJ3x(GF3x[0].href);
            this.zy1x(this.nw7p, !1);
            return
        }
        this.WQ8I();
        this.zy1x(this.nw7p, !1)
    };
    b2x.bgZ1x = function (d2x) {
        if (!this.WV8N(this.nw7p)) return;
        var i2x = a2x.H2x(this.nw7p, "xtag"),
            dr4v = i2x.length,
            r2x = k2x.dj4n(i2x, function (p2x) {
                return a2x.bF3x(p2x, "slt")
            });
        switch (d2x.keyCode) {
            case 38:
                if (r2x >= 0) a2x.x2x(i2x[r2x], "slt");
                a2x.y2x(i2x[r2x <= 0 ? dr4v - 1 : r2x - 1], "slt");
                break;
            case 40:
                if (r2x >= 0) a2x.x2x(i2x[r2x], "slt");
                a2x.y2x(i2x[(r2x + 1) % dr4v], "slt");
                break
        }
    };
    b2x.Tv7o = function (d2x) {
        if (!this.WV8N(this.nw7p)) return;
        var Tk7d, F2x = h2x.W3x(d2x),
            i2x = a2x.H2x(this.nw7p, "xtag");
        if (F2x.tagName.toLowerCase() == "a") Tk7d = F2x;
        else if (F2x.parentNode.tagName.toLowerCase() == "a") Tk7d = F2x.parentNode;
        if (!Tk7d) return;
        k2x.bd3x(i2x, function (p2x) {
            a2x.x2x(p2x, "slt");
            a2x.t2x(p2x, "type", "")
        });
        if (d2x.type == "mouseout") return;
        a2x.y2x(Tk7d, "slt");
        a2x.t2x(Tk7d, "type", "mouse")
    };
    b2x.WQ8I = function () {
        var dO4S = location.hash,
            r2x = dO4S.indexOf("?"),
            bv3x = k2x.hx5C(dO4S.substring(r2x + 1));
        bv3x.s = this.eV4Z.value;
        if (l2x.jP6J(bv3x.s)) return;
        if (!bv3x.type && this.bhQ3x && this.bhQ3x.keyword == bv3x.s) {
            bv3x.type = this.bhQ3x.type
        }
        this.bhJ3x("/search/#/?" + k2x.cC3x(bv3x));
        this.eV4Z.blur()
    };
    b2x.bhJ3x = function (Y3x) {
        if (location.dispatch2) {
            location.dispatch2(Y3x)
        } else {
            location.href = Y3x
        }
    };
    M2x.TM7F.cwZ0x = function () {
        var i2x = a2x.H2x(document.body, "j-suggest");
        k2x.bd3x(i2x, function (p2x) {
            new M2x.TM7F(p2x)
        })
    };
    M2x.TM7F.cwZ0x()
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        b2x;
    q2x.fg4k({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function (Q3x) {
                return {
                    total: Q3x.size || 0,
                    list: Q3x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function (Q3x) {
                return {
                    total: Q3x.size || 0,
                    list: Q3x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function (Q3x) {
                return Q3x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function (Q3x, e2x) {
                if (e2x.offset == 0) {
                    var pB8t = Q3x.data[0];
                    this.z2x("onfirstload", pB8t);
                    Q3x.data.splice(0, 1);
                    return Q3x.data
                } else {
                    return Q3x.data
                }
            }
        }
    });
    q2x.GS3x = NEJ.C();
    b2x = q2x.GS3x.N2x(q2x.hI5N);
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bhS4W = function () {
        var tS9J = "LOCAL_FLAG";
        return function (u2x, cwY0x) {
            var j2x = this.Hw3x(tS9J, {});
            if (j2x[u2x]) {
                return true
            } else {
                if (!cwY0x) {
                    j2x[u2x] = true;
                    this.wT0x(tS9J, j2x)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        bio4s;
    if (!!O2x.op8h) return;
    O2x.op8h = NEJ.C();
    bio4s = O2x.op8h.N2x(O2x.cI3x);
    bio4s.bk3x = function () {
        var cwW0x = function (d2x) {
            d2x.matched = d2x.source == d2x.target
        };
        return function (e2x) {
            e2x.oncheck = e2x.oncheck || cwW0x;
            this.bm3x(e2x);
            this.bU3x = e2x.list;
            this.jl6f = e2x.dataset || "id";
            this.kJ6D = e2x.selected || "js-selected"
        }
    }();
    bio4s.ol8d = function (D2x) {
        var F2x, d2x = {
            target: D2x
        };
        k2x.bd3x(this.bU3x, function (f2x) {
            delete d2x.matched;
            d2x.source = a2x.t2x(f2x, this.jl6f);
            this.z2x("oncheck", d2x);
            if (!d2x.matched) {
                a2x.x2x(f2x, this.kJ6D)
            } else {
                F2x = f2x;
                a2x.y2x(f2x, this.kJ6D)
            }
        }, this);
        return F2x
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        O2x = c2x("nej.ut"),
        pD8v;
    if (!!O2x.df4j) return;
    O2x.df4j = NEJ.C();
    pD8v = O2x.df4j.N2x(O2x.cI3x);
    pD8v.cx3x = function () {
        this.iX6R = {};
        this.cF3x();
        this.bL3x()
    };
    pD8v.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.biz4D = e2x.umi || "";
        this.Cj2x = e2x.dispatcher;
        this.LY4c = e2x.composite || bb3x;
        this.boU5Z({
            onshow: this.eZ4d.g2x(this),
            onhide: this.kt6n.g2x(this),
            onrefresh: this.eD4H.g2x(this),
            onmessage: this.ra8S.g2x(this),
            onbeforehide: this.cwV0x.g2x(this)
        })
    };
    pD8v.bD3x = function () {
        delete this.biz4D;
        this.iX6R = {};
        this.bG3x()
    };
    pD8v.uP0x = function (d2x) {
        if (!!d2x) d2x.stopped = !0
    };
    pD8v.bL3x = br3x;
    pD8v.eZ4d = br3x;
    pD8v.kt6n = br3x;
    pD8v.eD4H = br3x;
    pD8v.ra8S = br3x;
    pD8v.cwV0x = br3x;
    pD8v.nu7n = function (mZ7S, bH3x, fe4i) {
        this.Cj2x.biB4F({
            to: mZ7S,
            mode: fe4i || 0,
            data: bH3x,
            from: this.biz4D
        })
    };
    pD8v.cEH2x = function (u2x, j2x) {
        this.Cj2x.Ce2x(u2x, {
            from: this.biz4D,
            data: j2x
        })
    };
    pD8v.cEI2x = function () {
        this.Cj2x.mQ7J.apply(this.Cj2x, arguments)
    };
    pD8v.cwP0x = function () {
        return this.iX6R
    };
    a2x.Xc8U = function () {
        if (!!window.dispatcher) {
            dispatcher.bDO9F.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        xW0x;
    if (!!O2x.dt4x) return;
    O2x.dt4x = NEJ.C();
    xW0x = O2x.dt4x.N2x(O2x.df4j);
    xW0x.cwO0x = function (e2x) {
        var bI3x;
        if (!bI3x) {
            var j2x = e2x.input || bb3x;
            bI3x = a2x.B2x(j2x.parent)
        }
        if (!bI3x) {
            var j2x = e2x.data || bb3x;
            bI3x = a2x.B2x(j2x.parent)
        }
        if (!bI3x) {
            bI3x = a2x.B2x(e2x.parent)
        }
        return bI3x
    };
    xW0x.eZ4d = function (e2x) {
        var bI3x = this.cwO0x(e2x);
        if (!!bI3x && !!this.n2x) bI3x.appendChild(this.n2x);
        this.gC5H(e2x);
        this.bDV9M("onshow", e2x);
        this.eD4H(e2x)
    };
    xW0x.eD4H = function (e2x) {
        this.gr5w(e2x);
        this.bDV9M("onrefresh", e2x)
    };
    xW0x.kt6n = function () {
        this.lk6e();
        this.cwN0x();
        a2x.mn7g(this.n2x)
    };
    xW0x.bEb9S = function () {
        var gD5I = /^onshow|onrefresh|delay$/;
        return function (cl3x) {
            return gD5I.test(cl3x)
        }
    }();
    xW0x.bEd9U = br3x;
    xW0x.bDV9M = function () {
        var bEe9V = function (bv3x, e2x, cl3x, py8q) {
            if (this.bEb9S(py8q)) return;
            if (!!bv3x) cl3x += (cl3x.indexOf("?") > 1 ? "&" : "?") + bv3x;
            var dm4q = this.bEd9U(py8q, e2x) || {};
            dm4q.location = e2x;
            dm4q.parent = this.iX6R[py8q];
            this.Cj2x.iw5B(cl3x, {
                input: dm4q
            })
        };
        return function (u2x, e2x) {
            if (!e2x.nodelay) {
                if (!!this.LY4c.delay) return;
                var bEh9Y = this.LY4c[u2x] || bb3x;
                if (bEh9Y.delay) return
            }
            var bv3x = k2x.cC3x(e2x.param) || "";
            if (u2x == "onrefresh") {
                k2x.eE4I(this.LY4c, bEe9V.g2x(this, bv3x, e2x))
            }
            k2x.eE4I(bEh9Y, bEe9V.g2x(this, bv3x, e2x))
        }
    }();
    xW0x.cwN0x = function () {
        var BP2x = function (cl3x, py8q) {
            if (!this.bEb9S(py8q)) this.Cj2x.bt3x(cl3x)
        };
        return function () {
            k2x.eE4I(this.LY4c, BP2x, this);
            k2x.eE4I(this.LY4c.onshow, BP2x, this);
            k2x.eE4I(this.LY4c.onrefresh, BP2x, this)
        }
    }()
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        E2x = c2x("nm.m"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        b2x, K2x;
    E2x.SZ7S = NEJ.C();
    b2x = E2x.SZ7S.N2x(I2x.cI3x);
    b2x.cx3x = function () {
        this.cF3x();
        this.n2x = a2x.B2x("g-topbar");
        var i2x = a2x.H2x(this.n2x, "j-tflag");
        this.bjf4j = i2x[0];
        this.HR3x = i2x[1];
        this.bEs9j = i2x[2];
        this.bjr4v = i2x[3];
        this.cwM0x = I2x.op8h.A2x({
            list: this.bjf4j.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bjw4A = I2x.op8h.A2x({
            list: this.bjr4v.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX3x([
            [this.n2x, "click", this.ST6N.g2x(this)],
            [this.HR3x, "click", this.cL4P.g2x(this)],
            [this.HR3x, "mouseout", this.bEz9q.g2x(this, 0)],
            [this.HR3x, "mouseover", this.bEz9q.g2x(this, 1)]
        ]);
        window.scrollTopbar = this.cwL0x.g2x(this);
        window.matchNav = this.bEE9v.g2x(this);
        window.polling = this.va0x.g2x(this);
        this.bjO4S = q2x.GS3x.A2x();
        this.cwK0x();
        this.LO4S();
        var bv3x = k2x.hx5C(location.href.split("?")[1]) || {};
        if (bv3x.market) {
            a2x.B2x("topbar-download-link").href = "/download?market=" + bv3x.market
        }
        var bkA4E = a2x.H2x(this.n2x, "j-showoff");
        if (bkA4E && !this.bjO4S.bhS4W("newMvSearch")) {
            a2x.x2x(bkA4E[0], "f-hide");
            window.setTimeout(function () {
                a2x.y2x(bkA4E[0], "f-hide")
            }, 5e3)
        }
    };
    b2x.va0x = function (d2x) {
        var dO4S = l2x.Mt5y();
        if (!/^\/msg/.test(dO4S)) {
            var wo0x = 0;
            wo0x += d2x.comment;
            wo0x += d2x.forward;
            wo0x += d2x.msg;
            wo0x += d2x.notice;
            if (wo0x > 0) {
                wo0x = wo0x > 99 ? "99+" : wo0x;
                this.SL6F.innerText = wo0x;
                this.LM4Q.innerText = wo0x;
                a2x.x2x(this.SL6F, "f-hide");
                a2x.x2x(this.LM4Q, "f-hide");
                this.Xq8i = true
            } else {
                a2x.y2x(this.SL6F, "f-hide");
                a2x.y2x(this.LM4Q, "f-hide");
                this.Xq8i = false
            }
            var eW4a = "/at";
            if (d2x.notice) eW4a = "/notify";
            if (d2x.comment) eW4a = "/comment";
            if (d2x.msg > 0) eW4a = "/private";
            if (d2x.forward > 0) eW4a = "/at";
            this.LM4Q.parentNode.href = "/msg/#" + eW4a
        } else {
            this.LM4Q.parentNode.href = "javascript:;";
            a2x.y2x(this.SL6F, "f-hide");
            a2x.y2x(this.LM4Q, "f-hide");
            this.Xq8i = false
        }
        var i2x = a2x.H2x(this.bjf4j, "j-t");
        if (!/^\/friend/.test(dO4S)) {
            if (i2x && i2x.length) {
                a2x.ba3x(i2x[0], "display", d2x.event > 0 ? "" : "none")
            }
        } else {
            a2x.ba3x(i2x[0], "display", "none")
        }
    };
    b2x.cL4P = function (d2x) {
        var f2x = h2x.W3x(d2x, "d:action");
        if (f2x) {
            switch (a2x.t2x(f2x, "action")) {
                case "login":
                    h2x.cr3x(d2x);
                    var u2x = a2x.t2x(f2x, "type");
                    if (u2x) {
                        if (u2x == "sina" || u2x == "tencent") top.open(f2x.href);
                        else top.login(u2x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h2x.cr3x(d2x);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.bjO4S.bhS4W("storeNew")) {
                        a2x.y2x(this.cEJ2x, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.bjO4S.bhS4W("levelNew")) {
                        a2x.y2x(this.cEK2x, "f-vhide")
                    }
                    break
            }
        }
    };
    b2x.ST6N = function (d2x) {
        var f2x = h2x.W3x(d2x, "d:action");
        if (!f2x) return;
        var U3x = a2x.t2x(f2x, "action");
        switch (U3x) {
            case "bilog":
                var bms5x = a2x.t2x(f2x, "logAction"),
                    bmG5L = a2x.t2x(f2x, "logJson");
                window.log(bms5x, bmG5L);
                break
        }
    };
    b2x.bEz9q = function (LF4J, d2x) {
        if (this.bmJ5O) {
            this.bmJ5O.style.display = !LF4J ? "none" : "";
            (LF4J || !this.Xq8i ? a2x.y2x : a2x.x2x).call(window, this.SL6F, "f-hide")
        }
    };
    b2x.cwL0x = function (fV5a) {
        a2x.ba3x(this.n2x, "top", -fV5a + "px")
    };
    b2x.bEE9v = function (eW4a, cwH0x) {
        this.cwM0x.ol8d(eW4a);
        if (eW4a == "discover") {
            a2x.y2x(this.bEs9j, "f-hide");
            a2x.x2x(this.bjr4v, "f-hide");
            window.g_topBarHeight = 105;
            this.bjw4A.ol8d(cwH0x)
        } else {
            a2x.x2x(this.bEs9j, "f-hide");
            a2x.y2x(this.bjr4v, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b2x.cwK0x = function () {
        var ej4n = a2x.B2x("g_iframe");
        if (!ej4n) return;
        var gy5D = ej4n.contentWindow.document.getElementById("g_top");
        this.bEE9v(a2x.t2x(gy5D, "module"), a2x.t2x(gy5D, "sub"))
    };
    var Xv8n = {},
        bFt9k = /\/\/\w+/,
        cwG0x = {
            avatarUrl: function (a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bFt9k, "") !== b.replace(bFt9k, "")
            },
            userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b2x.cwF0x = function (XD8v) {
        var nV7O = k2x.dj4n(cwG0x, function (D2x, J2x) {
            if (k2x.gG5L(D2x)) {
                return D2x(XD8v[J2x], Xv8n[J2x])
            } else {
                return XD8v[J2x] !== Xv8n[J2x]
            }
        });
        Xv8n = XD8v;
        return XD8v[nV7O]
    };
    b2x.LO4S = function () {
        var do4s = GUser || {},
            cwB0x = GUserAcc || {};
        if (do4s && do4s.userId) {
            var bFD9u = NEJ.X(do4s, cwB0x);
            if (this.cwF0x(bFD9u)) {
                a2x.dz4D(this.HR3x, "m-topbar-user-login", bFD9u)
            }
        } else {
            Xv8n = {};
            this.HR3x.innerHTML = a2x.iG5L("m-topbar-user-unlogin");
            var i2x = a2x.H2x(this.bjf4j, "j-t");
            a2x.ba3x(i2x[0], "display", "none")
        }
        a2x.x2x(this.HR3x, "f-hide");
        this.Xq8i = false;
        var i2x = a2x.H2x(this.HR3x, "j-uflag");
        if (do4s && do4s.userId) {
            this.SL6F = i2x.shift();
            this.bmJ5O = i2x.shift();
            this.LM4Q = i2x.shift()
        } else {
            this.bmJ5O = i2x.shift()
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        b2x, K2x;
    q2x.fg4k({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function (Q3x) {
                h2x.z2x(q2x.tF9w, "message", Q3x)
            }
        }
    });
    q2x.tF9w = NEJ.C();
    b2x = q2x.tF9w.N2x(q2x.hI5N);
    b2x.XF8x = function () {
        this.cp3x("polling-get", {})
    };
    b2x.vn0x = function () {
        var ei4m;
        return function () {
            if (!!ei4m) return;
            ei4m = window.setInterval(this.XF8x.g2x(this), 1e5);
            this.XF8x()
        }
    }();
    I2x.fJ5O.A2x({
        event: "message",
        element: q2x.tF9w
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function (fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this,
                args = arguments;
            WebSocket.XG8y(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this,
                args = arguments;
            WebSocket.XG8y(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.Se6Y.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.boT5Y();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function () {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function () {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {},
                error: function () {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.hc5h = WebSocket.cwA0x++;
            WebSocket.bFM9D[self.hc5h] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lX7Q = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.XG8y(function () {
                    WebSocket.pM8E.create(self.hc5h, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pM8E.send(this.hc5h, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pM8E.close(this.hc5h)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lX7Q)) {
                this.lX7Q[type] = []
            }
            this.lX7Q[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lX7Q)) return;
            var events = this.lX7Q[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lX7Q[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cwz0x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bFR9I(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bFR9I("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cwy0x("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bFR9I = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.cwy0x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pM8E = null;
        WebSocket.bFM9D = {};
        WebSocket.Se6Y = [];
        WebSocket.cwA0x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.XG8y(function () {
                WebSocket.pM8E.loadManualPolicyFile(url)
            })
        };
        WebSocket.boT5Y = function () {
            if (WebSocket.pM8E) return;
            if (WebSocket.cwv0x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cwv0x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cwu0x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cEL2x = function () {
            setTimeout(function () {
                WebSocket.pM8E = document.getElementById("webSocketFlash");
                WebSocket.pM8E.setCallerUrl(location.href);
                WebSocket.pM8E.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Se6Y.length; ++i) {
                    WebSocket.Se6Y[i]()
                }
                WebSocket.Se6Y = []
            }, 0)
        };
        WebSocket.cEM2x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.pM8E.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFM9D[events[i].webSocketId].cwz0x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cEN2x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dY4c = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.XG8y = function (task) {
            if (WebSocket.pM8E) {
                task()
            } else {
                WebSocket.Se6Y.push(task)
            }
        };
        WebSocket.cwu0x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.boT5Y()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.boT5Y()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c2x = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c2x(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c2x = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.ed4h) this.ed4h = {};
        this.bGh9Y = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ed4h || !this.ed4h.error || isArray(this.ed4h.error) && !this.ed4h.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.ed4h) return false;
        var handler = this.ed4h[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.ed4h) this.ed4h = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ed4h[type]) {
            this.ed4h[type] = listener
        } else if (isArray(this.ed4h[type])) {
            this.ed4h[type].push(listener)
        } else {
            this.ed4h[type] = [this.ed4h[type], listener]
        }
        if (isArray(this.ed4h[type]) && !this.ed4h[type].warned) {
            var m;
            if (this.bGh9Y !== undefined) {
                m = this.bGh9Y
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.ed4h[type].length > m) {
                this.ed4h[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ed4h[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.ed4h || !this.ed4h[type]) return this;
        var list = this.ed4h[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.ed4h[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.ed4h = {};
            return this
        }
        var events = this.ed4h && this.ed4h[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ed4h[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.ed4h) this.ed4h = {};
        if (!this.ed4h[type]) this.ed4h[type] = [];
        if (!isArray(this.ed4h[type])) {
            this.ed4h[type] = [this.ed4h[type]]
        }
        return this.ed4h[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        dD4H = c2x("nm.u"),
        q2x = c2x("nm.d"),
        RZ6T = c2x("pomelo"),
        X3x = 0,
        b2x, K2x;
    q2x.fg4k({
        "polling-init": {
            url: "/api/push/init",
            format: function (Q3x) {
                X3x = 2;
                var tH9y = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j2x = Q3x.account || bb3x,
                    dn4r = GUser.userId;
                RZ6T.init(tH9y.host, tH9y.port, true, this.cwq0x.g2x(this, {
                    user: dn4r,
                    nonce: j2x.nonce,
                    domain: tH9y.domain,
                    productKey: tH9y.key,
                    signature: j2x.signature,
                    expire_time: j2x.expireTime
                }))
            },
            onerror: function () {
                return this.bpa5f()
            }
        }
    });
    q2x.BK2x = NEJ.C();
    b2x = q2x.BK2x.N2x(q2x.hI5N);
    b2x.cx3x = function () {
        var qx8p = !1;
        return function (e2x) {
            if (!qx8p) {
                qx8p = !0
            }
            this.cF3x(e2x);
            RZ6T.on("specify", this.ra8S.g2x(this));
            RZ6T.on("broadcast", this.ra8S.g2x(this))
        }
    }();
    b2x.ra8S = function (d2x) {
        k2x.bd3x(d2x, function (bH3x) {
            h2x.z2x(q2x.BK2x, "message", bH3x)
        }, this)
    };
    b2x.bpa5f = function () {
        var bA3x = 500;
        return function () {
            X3x = 0;
            RZ6T.disconnect();
            if (bA3x > 6e4) bA3x = 500;
            bA3x *= 2
        }
    }();
    b2x.cwq0x = function (e2x, cb3x) {
        if (!!cb3x) {
            return this.bpa5f()
        }
        X3x = 3;
        RZ6T.registerAndBind(e2x, function (o2x) {
            if (o2x.code != 200) {
                return this.bpa5f()
            }
            X3x = 4
        }.g2x(this))
    };
    b2x.cEP2x = function () {
        dD4H.cwm0x.gp5u().cEQ2x()
    };
    b2x.cES2x = function () {
        dD4H.cwm0x.gp5u().cET2x()
    };
    b2x.brR6L = function () {
        var qx8p = !1;
        return function () {
            if (qx8p) return;
            qx8p = !0;
            this.cp3x("polling-init", {})
        }
    }();
    I2x.fJ5O.A2x({
        event: "message",
        element: q2x.BK2x
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        dw4A = c2x("nej.p"),
        k2x = c2x("nej.u"),
        m2x = c2x("nm.l"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        cB3x = c2x("api"),
        b2x, K2x;
    var gg5l = a2x.ix5C('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    m2x.brU6O = NEJ.C();
    b2x = m2x.brU6O.N2x(m2x.el4p);
    K2x = m2x.brU6O.ct3x;
    b2x.bk3x = function (e2x) {
        e2x.title = "意见反馈";
        this.bm3x(e2x)
    };
    b2x.cf3x = function () {
        this.ce3x = gg5l
    };
    b2x.bW3x = function () {
        this.cg3x();
        this.hB5G = {};
        var Lr4v = a2x.H2x;
        var Ep2x = h2x.s2x;
        this.hB5G.submit_btn = Lr4v(this.n2x, "u-btn2")[0];
        this.hB5G.cancle_btn = Lr4v(this.n2x, "u-btn2")[1];
        this.hB5G.prompt_msg = Lr4v(this.n2x, "u-err")[0];
        this.hB5G.zs = Lr4v(this.n2x, "zs")[0];
        a2x.ba3x(this.hB5G.zs, "display", "none");
        this.hB5G.fb_txt = Lr4v(this.n2x, "u-txt")[0];
        this.hB5G.contact = Lr4v(this.n2x, "u-txt")[1];
        a2x.gn5s(this.hB5G.fb_txt, "holder");
        a2x.gn5s(this.hB5G.contact, "holder");
        if (a2x.bF3x(this.hB5G.fb_txt.parentNode, "holder-parent")) {
            a2x.ba3x(this.hB5G.fb_txt.parentNode, "display", "block")
        }
        if (a2x.bF3x(this.hB5G.contact.parentNode, "holder-parent")) {
            a2x.ba3x(this.hB5G.contact.parentNode, "display", "block")
        }
        Ep2x(this.hB5G.submit_btn, "click", this.cwj0x.g2x(this));
        Ep2x(this.hB5G.cancle_btn, "click", this.cwh0x.g2x(this));
        Ep2x(this.hB5G.prompt_msg, "msgShow", this.cwg0x.g2x(this));
        Ep2x(this.hB5G.fb_txt, "keyup", this.vC0x.g2x(this));
        Ep2x(this.hB5G.fb_txt, "input", this.fR5W.g2x(this));
        Ep2x(this.hB5G.contact, "keyup", this.cwf0x.g2x(this));
        Ep2x(this.hB5G.contact, "input", this.bHu0x.g2x(this));
        this.kD6x = q2x.hP5U.A2x()
    };
    b2x.cwj0x = function (d2x) {
        h2x.bh3x(d2x);
        if (this.cO4S()) return;
        var bo3x = this.hB5G.fb_txt.value.trim();
        var bq3x = bo3x.length;
        var e2x = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bHE0x = this.hB5G.contact.value.trim();
        var Yl8d = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l2x.bpm5r(),
            contact: bHE0x
        };
        var j2x = {
                content: bo3x,
                client: "web",
                xInfo: JSON.stringify(Yl8d)
            },
            nT7M = this.kD6x.cBZ1x();
        if (nT7M && nT7M.length) {
            j2x.log = nT7M.join("\n")
        }
        if (bq3x == 0) {
            this.hB5G.prompt_msg.innerHTML = "反馈内容不能为空";
            a2x.ba3x(this.hB5G.prompt_msg, "display", "block");
            return
        }
        if (bHE0x.length > 100) {
            this.hB5G.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a2x.ba3x(this.hB5G.prompt_msg, "display", "block");
            return
        }
        this.cO4S(true);
        e2x.data = k2x.cC3x(j2x);
        e2x.onload = this.cwe0x.g2x(this);
        e2x.onerror = this.iN6H.g2x(this);
        v2x.bn3x("/api/feedback/web", e2x)
    };
    b2x.fR5W = function (d2x) {
        var bq3x = this.hB5G.fb_txt.value.trim().length;
        if (bq3x > 0) a2x.ba3x(this.hB5G.prompt_msg, "display", "none");
        dw4A.ds4w.browser == "ie" && dw4A.ds4w.version < "7.0" ? setTimeout(this.gh5m.g2x(this), 0) : this.gh5m()
    };
    b2x.vC0x = function (d2x) {
        if (d2x.keyCode === 8) this.gh5m()
    };
    b2x.gh5m = function () {
        var bq3x = this.hB5G.fb_txt.value.trim().length;
        this.hB5G.zs.innerHTML = !bq3x ? "0/140" : bq3x + "/140"
    };
    b2x.bHu0x = function (d2x) {
        var bq3x = this.hB5G.contact.value.trim().length;
        if (bq3x > 0) a2x.ba3x(this.hB5G.prompt_msg, "display", "none")
    };
    b2x.cwf0x = function (d2x) {
        if (d2x.keyCode === 8) this.bHu0x()
    };
    b2x.cwh0x = function (d2x) {
        h2x.cr3x(d2x);
        this.bt3x()
    };
    b2x.cwg0x = function (d2x) {
        var f2x = h2x.W3x(d2x);
        f2x.innerHTML = "请输入反馈内容"
    };
    b2x.cEU2x = function (cEW2x) {
        var f2x = h2x.W3x(d2x);
        f2x.innerHTML = ""
    };
    b2x.cwe0x = function (o2x) {
        this.cO4S(false);
        this.bt3x();
        m2x.Z3x.L2x({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b2x.iN6H = function (o2x) {
        this.cO4S(false);
        m2x.Z3x.L2x({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b2x.cO4S = function (cZ4d) {
        return this.dX4b(this.hB5G.submit_btn, cZ4d, "发送意见", "发送中...")
    };
    b2x.L2x = function () {
        K2x.L2x.call(this);
        this.cO4S(false);
        this.hB5G.fb_txt.value = "";
        this.hB5G.contact.value = "";
        a2x.ba3x(this.hB5G.prompt_msg, "display", "none");
        this.gh5m()
    };
    l2x.cwa0x = function (e2x) {
        e2x = e2x || {};
        if (e2x.title === undefined) e2x.title = "意见反馈";
        m2x.brU6O.L2x(e2x)
    };
    cB3x.feedback = l2x.feedback = l2x.cwa0x
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        O2x = c2x("nej.ui"),
        b2x;
    if (!!O2x.zK1x) return;
    O2x.zK1x = NEJ.C();
    b2x = O2x.zK1x.N2x(O2x.eg4k);
    b2x.cx3x = function () {
        this.hc5h = this.bID0x();
        this.cF3x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.co3x = e2x.index;
        this.gA5F = e2x.total;
        this.hv5A = e2x.range;
        this.gH5M(e2x.data)
    };
    b2x.bD3x = function () {
        this.bG3x();
        delete this.bl3x;
        delete this.co3x;
        delete this.gA5F;
        delete this.hv5A
    };
    b2x.it5y = br3x;
    b2x.bID0x = function () {
        var gK5P = +(new Date);
        return function () {
            return "itm-" + ++gK5P
        }
    }();
    b2x.FK3x = function () {
        return this.hc5h
    };
    b2x.hZ5e = function () {
        return this.bl3x
    };
    b2x.gH5M = function (j2x) {
        this.bl3x = j2x || {};
        this.it5y(this.bl3x)
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.ui"),
        b2x, K2x;
    if (!!O2x.vO0x) return;
    O2x.vO0x = NEJ.C();
    b2x = O2x.vO0x.N2x(O2x.zK1x);
    K2x = O2x.vO0x.ct3x;
    b2x.bk3x = function (e2x) {
        this.cvY0x = e2x.pkey || "id";
        this.bm3x(e2x)
    };
    b2x.EP2x = function (j2x) {
        this.z2x("ondelete", {
            ext: j2x,
            id: this.FK3x(),
            data: this.hZ5e(),
            body: this.lA7t()
        })
    };
    b2x.tU9L = function (j2x) {
        this.z2x("onupdate", {
            ext: j2x,
            id: this.FK3x(),
            data: this.hZ5e(),
            body: this.lA7t()
        })
    };
    b2x.gH5M = function (j2x) {
        K2x.gH5M.apply(this, arguments);
        this.hc5h = this.bl3x[this.cvY0x] || this.bID0x()
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        fy5D = NEJ.R,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ui"),
        b2x, iS6M, bus7l;
    if (!!O2x.buy7r) return;
    O2x.buy7r = NEJ.C();
    b2x = O2x.buy7r.N2x(O2x.eg4k);
    b2x.bk3x = function (e2x) {
        this.Yp8h = NEJ.X({}, e2x);
        this.fT5Y = NEJ.X({}, e2x);
        delete this.Yp8h.onchange;
        this.fT5Y.onchange = this.gb5g.g2x(this);
        this.bm3x(e2x);
        this.cvX0x({
            number: e2x.number,
            label: e2x.label || bb3x
        })
    };
    b2x.bD3x = function () {
        this.bG3x();
        if (!!this.lq7j) {
            this.lq7j.T3x();
            delete this.lq7j
        }
        delete this.Yp8h;
        delete this.fT5Y;
        this.cvW0x();
        this.n2x.innerHTML = "&nbsp;"
    };
    b2x.cf3x = function () {
        this.mk7d = iS6M
    };
    b2x.cvX0x = function (j2x) {
        a2x.dz4D(this.n2x, bus7l, j2x);
        var gK5P = a2x.JS4W();
        this.fT5Y.list = a2x.H2x(this.n2x, "js-i-" + gK5P);
        this.fT5Y.pbtn = (a2x.H2x(this.n2x, "js-p-" + gK5P) || fy5D)[0];
        this.fT5Y.nbtn = (a2x.H2x(this.n2x, "js-n-" + gK5P) || fy5D)[0]
    };
    b2x.bW3x = function () {
        this.cg3x()
    };
    b2x.cEY2x = function (j2x) {
        return a2x.bZ3x(bus7l, j2x)
    };
    b2x.gb5g = function (d2x) {
        if (this.Rh6b) return;
        var r2x = d2x.index,
            cy3x = d2x.total;
        this.Rh6b = !0;
        this.Rg6a(r2x, cy3x);
        k2x.bd3x(this.Yr8j, function (tX9O) {
            tX9O.Rg6a(r2x, cy3x)
        });
        this.Rh6b = !1;
        this.z2x("onchange", d2x)
    };
    b2x.g2x = function (bI3x) {
        bI3x = a2x.B2x(bI3x);
        if (!bI3x) return this;
        var cq3x = NEJ.X({}, this.Yp8h);
        cq3x.parent = bI3x;
        cq3x.index = this.tY9P();
        cq3x.total = this.kd6X();
        var tX9O = this.constructor.A2x(cq3x);
        tX9O.wN0x("onchange", this.fT5Y.onchange);
        if (!this.Yr8j) this.Yr8j = [];
        this.Yr8j.push(tX9O);
        return this
    };
    b2x.cvW0x = function () {
        var bup7i = function (tX9O, r2x, i2x) {
            tX9O.T3x();
            i2x.splice(r2x, 1)
        };
        return function () {
            k2x.nx7q(this.Yr8j, bup7i)
        }
    }();
    b2x.kI6C = function (r2x) {
        if (!this.lq7j) return;
        this.lq7j.kI6C(r2x)
    };
    b2x.tY9P = function () {
        if (!this.lq7j) return 1;
        return this.lq7j.tY9P()
    };
    b2x.kd6X = function () {
        if (!this.lq7j) return 1;
        return this.lq7j.kd6X()
    };
    b2x.Rg6a = function (r2x, cy3x) {
        if (!this.lq7j) return;
        this.lq7j.Rg6a(r2x, cy3x)
    };
    b2x.bvB7u = function (cy3x) {
        if (!this.lq7j) return;
        this.lq7j.bvB7u(cy3x)
    };
    iS6M = a2x.tw9n(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bus7l = a2x.eu4y('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.Yt8l) return;
    O2x.Yt8l = NEJ.C();
    b2x = O2x.Yt8l.N2x(O2x.cI3x);
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.Yw8o = e2x.pbtn;
        this.cs3x = e2x.nbtn;
        this.YB8t = e2x.sbtn;
        this.YF8x = e2x.ebtn;
        this.jl6f = e2x.event || "click";
        this.kJ6D = e2x.selected || "js-selected";
        this.nL7E = e2x.disabled || "js-disabled";
        this.cvU0x(e2x.list);
        this.Rg6a(e2x.index || 1, e2x.total || 1)
    };
    b2x.bD3x = function () {
        this.bG3x();
        delete this.bU3x;
        delete this.jl6f;
        delete this.Yw8o;
        delete this.cs3x;
        delete this.YB8t;
        delete this.YF8x;
        delete this.bLq1x;
        delete this.gA5F;
        delete this.co3x;
        delete this.kJ6D;
        delete this.nL7E
    };
    b2x.cvU0x = function () {
        var bfa0x = function (f2x) {
            this.bU3x.push(f2x);
            this.bX3x([
                [f2x, this.jl6f, this.cv3x.ez4D(this, 0)]
            ])
        };
        return function (i2x) {
            this.bU3x = [];
            this.bX3x([
                [this.Yw8o, "click", this.cv3x.ez4D(this, -1)],
                [this.cs3x, "click", this.cv3x.ez4D(this, 1)],
                [this.YB8t, "click", this.cv3x.ez4D(this, -2)],
                [this.YF8x, "click", this.cv3x.ez4D(this, 2)]
            ]);
            k2x.bd3x(i2x, bfa0x, this)
        }
    }();
    b2x.Fu3x = function (f2x, r2x) {
        if (r2x == null) {
            f2x.innerText = "";
            a2x.ba3x(f2x, "display", "none");
            a2x.x2x(f2x, this.kJ6D)
        } else {
            f2x.innerText = r2x;
            a2x.ba3x(f2x, "display", "");
            r2x == this.co3x ? a2x.y2x(f2x, this.kJ6D) : a2x.x2x(f2x, this.kJ6D)
        }
    };
    b2x.bfl0x = function () {
        if (this.co3x <= 1) {
            a2x.y2x(this.Yw8o, this.nL7E);
            a2x.y2x(this.YB8t, this.nL7E)
        } else {
            a2x.x2x(this.Yw8o, this.nL7E);
            a2x.x2x(this.YB8t, this.nL7E)
        }
        if (this.co3x >= this.gA5F) {
            a2x.y2x(this.cs3x, this.nL7E);
            a2x.y2x(this.YF8x, this.nL7E)
        } else {
            a2x.x2x(this.cs3x, this.nL7E);
            a2x.x2x(this.YF8x, this.nL7E)
        }
    };
    b2x.YO8G = br3x;
    b2x.bfJ1x = function () {
        this.YO8G();
        this.bfl0x();
        this.z2x("onchange", {
            last: this.bLq1x,
            total: this.gA5F,
            index: this.co3x,
            ext: this.bfK1x
        })
    };
    b2x.bMf1x = function (r2x) {
        r2x = parseInt(r2x);
        if (isNaN(r2x) || this.gA5F == null) return !1;
        r2x = Math.max(1, Math.min(r2x, this.gA5F));
        this.bLq1x = this.co3x;
        this.co3x = r2x;
        return !0
    };
    b2x.bfN1x = function (cy3x) {
        cy3x = parseInt(cy3x);
        if (isNaN(cy3x) || cy3x < 1) return !1;
        this.gA5F = cy3x;
        return !0
    };
    b2x.cv3x = function (d2x, fd4h) {
        h2x.cr3x(d2x);
        var F2x = h2x.W3x(d2x);
        if (!F2x || a2x.bF3x(F2x, this.kJ6D) || a2x.bF3x(F2x, this.nL7E)) return;
        var r2x = F2x.innerText;
        switch (fd4h) {
            case 1:
            case -1:
                r2x = this.co3x + fd4h;
                break;
            case 2:
                r2x = this.gA5F;
                break;
            case -2:
                r2x = 1;
                break
        }
        this.kI6C(r2x)
    };
    b2x.tY9P = function () {
        return this.co3x
    };
    b2x.kI6C = function (r2x) {
        var cvT0x = this.co3x;
        this.bMf1x(r2x);
        if (cvT0x != this.co3x) this.bfJ1x();
        return this
    };
    b2x.kd6X = function () {
        return this.gA5F
    };
    b2x.RN6H = function (cy3x) {
        if (this.bfN1x(cy3x) && this.co3x != null) {
            this.co3x = 1;
            this.bfJ1x()
        }
        return this
    };
    b2x.bvB7u = function (cy3x) {
        if (this.bfN1x(cy3x)) {
            this.YO8G();
            this.bfl0x()
        }
        return this
    };
    b2x.Rg6a = function (r2x, cy3x) {
        if (!this.bfN1x(cy3x) || !this.bMf1x(r2x)) return this;
        this.bfJ1x();
        return this
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        cX4b = c2x("nej.x"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.Qt6n) return;
    O2x.Qt6n = NEJ.C();
    b2x = O2x.Qt6n.N2x(O2x.Yt8l);
    b2x.cx3x = function () {
        this.cF3x();
        var f2x = a2x.dh4l("span", "zdot");
        f2x.innerText = "...";
        this.YV9M = [f2x.cloneNode(true), f2x]
    };
    b2x.bD3x = function () {
        this.bG3x();
        this.bMT1x()
    };
    b2x.bMT1x = function () {
        a2x.mn7g(this.YV9M[0]);
        a2x.mn7g(this.YV9M[1])
    };
    b2x.YO8G = function () {
        this.bfK1x = {
            last: !1,
            first: !1,
            list: this.bU3x
        };
        this.bMT1x();
        this.Fu3x(this.bU3x[0], 1);
        var bM3x = 1,
            bq3x = this.bU3x.length;
        if (this.gA5F < bq3x) {
            for (var rq9h; bM3x < bq3x; bM3x++) {
                rq9h = bM3x + 1;
                this.Fu3x(this.bU3x[bM3x], rq9h > this.gA5F ? null : rq9h)
            }
            return
        }
        if (this.co3x > 1) {
            var cH3x = Math.floor((bq3x - 2) / 2),
                cvS0x = this.gA5F - bq3x + 2,
                hu5z = Math.max(2, this.co3x - cH3x);
            if (this.gA5F >= bq3x) {
                hu5z = Math.min(hu5z, cvS0x)
            }
            if (hu5z > 2) {
                this.bU3x[0].insertAdjacentElement("afterEnd", this.YV9M[0]);
                this.bfK1x.first = !0
            }
            for (var r2x;; bM3x++) {
                r2x = hu5z + bM3x - 1;
                if (r2x > this.co3x) break;
                this.Fu3x(this.bU3x[bM3x], r2x)
            }
        }
        if (this.co3x < this.gA5F) {
            var r2x, hu5z = this.co3x + 1;
            for (var i = 0, l = bq3x - 2;; i++, bM3x++) {
                r2x = hu5z + i;
                if (bM3x > l || r2x > this.gA5F) break;
                this.Fu3x(this.bU3x[bM3x], r2x)
            }
            if (r2x < this.gA5F) {
                this.bU3x[bM3x].insertAdjacentElement("beforeBegin", this.YV9M[1]);
                this.bfK1x.last = !0
            }
            if (r2x <= this.gA5F) {
                this.Fu3x(this.bU3x[bM3x++], this.gA5F)
            }
        }
        for (; bM3x < bq3x; bM3x++) {
            this.Fu3x(this.bU3x[bM3x])
        }
    };
    a2x.cvR0x = cX4b.cvR0x = function (bI3x, e2x) {
        var C2x = a2x.lK7D(bI3x);
        if (!C2x) return null;
        if (!O2x.bbS0x(C2x, O2x.Qt6n)) {
            e2x = e2x || {};
            var i2x = !e2x.clazz ? a2x.dk4o(C2x) : a2x.H2x(C2x, e2x.clazz);
            e2x.pbtn = i2x.shift();
            e2x.nbtn = i2x.pop();
            e2x.list = i2x;
            delete e2x.clazz
        }
        return O2x.bbS0x(C2x, O2x.Qt6n, e2x || bb3x)
    };
    cX4b.isChange = !0
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        fy5D = NEJ.R,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ui"),
        b2x, K2x, gg5l;
    if (!!O2x.Qm6g) return;
    O2x.Qm6g = NEJ.C();
    b2x = O2x.Qm6g.N2x(O2x.buy7r);
    K2x = O2x.Qm6g.ct3x;
    b2x.bk3x = function (e2x) {
        e2x.number = parseInt(e2x.number) || 9;
        this.bm3x(e2x);
        this.lq7j = I2x.Qt6n.A2x(this.fT5Y)
    };
    b2x.gb5g = function (d2x) {
        if (!!this.Yp8h.noend) {
            var bNr1x = d2x.ext || bb3x,
                i2x = bNr1x.list || fy5D;
            if (bNr1x.last) {
                a2x.ba3x(i2x[i2x.length - 1], "display", "none")
            }
        }
        K2x.gb5g.apply(this, arguments)
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bc3x = c2x("nej.ui"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.Zd9U) return;
    O2x.Zd9U = NEJ.C();
    b2x = O2x.Zd9U.N2x(O2x.cI3x);
    b2x.bk3x = function (e2x) {
        this.jq6k = {};
        this.bm3x(e2x);
        this.im5r = a2x.B2x(e2x.parent);
        this.ff4j = {
            parent: this.im5r
        };
        this.oK8C = parseInt(e2x.limit) || 10;
        this.yd0x = parseInt(e2x.first) || this.oK8C;
        this.cvQ0x(e2x.item);
        this.cvP0x(e2x.cache || bb3x);
        this.cvO0x(e2x.pager || bb3x);
        this.gH5M()
    };
    b2x.bD3x = function () {
        this.z2x("onbeforerecycle");
        this.Qa6U();
        this.bG3x();
        if (this.jq6k.clear) {
            this.S3x.vm0x(this.jq6k.key)
        }
        this.S3x.T3x();
        if (!!this.ju6o) {
            this.ju6o.T3x();
            delete this.ju6o
        }
        delete this.bNT1x;
        delete this.fT5Y;
        delete this.Zi9Z;
        delete this.S3x;
        delete this.im5r;
        delete this.PX6R;
        delete this.ff4j;
        delete this.jq6k
    };
    b2x.bOh1x = function () {
        var dg4k = /\{(.*?)\}/gi,
            cvN0x = function (ph8Z, j2x) {
                return (ph8Z || "{id}{seed}").replace(dg4k, function ($1, $2) {
                    var D2x = j2x[$2];
                    return D2x == null ? $1 : D2x
                })
            };
        return function (C2x) {
            var J2x = cvN0x(this.ff4j.jstIdTempalte, {
                id: C2x,
                seed: a2x.JS4W()
            });
            if (!this.ff4j.jstIdType) {
                return a2x.B2x(J2x)
            } else if (this.ff4j.jstIdType == 1) {
                return (a2x.H2x(this.im5r, J2x) || [])[0]
            }
        }
    }();
    b2x.Be1x = function (bM3x, bi3x, fZ5e, bq3x) {
        var o2x = {
            index: 1,
            total: 1
        };
        if (bi3x >= bM3x) {
            o2x.index = Math.floor((bi3x - bM3x) / fZ5e) + 2
        }
        if (bq3x > bM3x) {
            o2x.total = Math.ceil((bq3x - bM3x) / fZ5e) + 1
        }
        return o2x
    };
    b2x.bOz1x = function (J2x) {
        delete this.PX6R;
        this.KH4L = J2x;
        this.bX3x([
            [this.im5r, "click", this.cvM0x.g2x(this)]
        ])
    };
    b2x.cvQ0x = function (p2x) {
        if (k2x.fF5K(p2x)) {
            this.bOz1x(p2x);
            return
        }
        NEJ.X(this.ff4j, p2x);
        var dZ4d = this.ff4j.klass;
        delete this.ff4j.klass;
        if (k2x.fF5K(dZ4d)) {
            this.bOz1x(dZ4d);
            return
        }
        delete this.KH4L;
        this.PX6R = dZ4d;
        this.ff4j.ondelete = this.z2x.g2x(this, "ondelete");
        this.ff4j.onupdate = this.z2x.g2x(this, "onupdate")
    };
    b2x.cvP0x = function (R3x) {
        var dZ4d = R3x.klass,
            kw6q = NEJ.X({}, R3x);
        this.jq6k.key = kw6q.lkey;
        this.jq6k.data = kw6q.data || {};
        this.jq6k.clear = !!kw6q.clear;
        this.ff4j.pkey = kw6q.key || "id";
        kw6q.onlistload = this.bha1x.g2x(this);
        kw6q.onpullrefresh = this.cvL0x.g2x(this);
        if (!!dZ4d && "onlistchange" in dZ4d) {
            this.bX3x([
                [dZ4d, "listchange", this.bhl3x.g2x(this)]
            ])
        } else {
            kw6q.onitemadd = this.Zv9m.g2x(this);
            kw6q.onitemdelete = this.Zw9n.g2x(this);
            kw6q.onitemupdate = this.bPG2x.g2x(this)
        }
        this.S3x = (dZ4d || O2x.RE6y).A2x(kw6q);
        if (R3x.total != null) {
            this.S3x.RN6H(this.jq6k.key, R3x.total)
        }
        if (!!R3x.list) {
            this.S3x.vu0x(this.jq6k.key, R3x.list)
        }
    };
    b2x.cvO0x = function (tX9O) {
        this.bNT1x = tX9O.klass || bc3x.Qm6g;
        this.fT5Y = NEJ.X({}, tX9O);
        if (k2x.eJ4N(tX9O.parent)) {
            this.fT5Y.parent = tX9O.parent[0];
            this.PE6y = tX9O.parent.slice(1);
            if (!this.PE6y || !this.PE6y.length) {
                delete this.PE6y
            }
        }
        delete this.fT5Y.klass
    };
    b2x.Qa6U = function () {
        var gD5I = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z2x("onbeforelistclear", {
                parent: this.im5r
            });
            if (!!this.fK5P && this.fK5P.length > 0) {
                this.fK5P = this.PX6R.T3x(this.fK5P);
                delete this.fK5P
            }
            if (gD5I.test(this.im5r.tagName)) {
                a2x.byi7b(this.im5r)
            } else {
                this.im5r.innerHTML = ""
            }
        }
    }();
    b2x.bhI3x = function (ZB9s) {
        if (!!this.fT5Y.fixed) return;
        a2x.ba3x(this.fT5Y.parent, "display", ZB9s);
        k2x.bd3x(this.PE6y, function (bI3x) {
            a2x.ba3x(bI3x, "display", ZB9s)
        }, this)
    };
    b2x.bhT4X = function () {
        var r2x = this.fT5Y.index || 1;
        delete this.fT5Y.index;
        if (!!this.ju6o) {
            r2x = this.ju6o.tY9P()
        }
        this.Bb1x({
            last: r2x,
            index: r2x
        })
    };
    b2x.Bb1x = function (d2x) {
        this.z2x("onpagechange", d2x)
    };
    b2x.bQe2x = function (bi3x) {
        this.jq6k.offset = bi3x;
        this.XO8G()
    };
    b2x.bQg2x = function (e2x) {
        return e2x
    };
    b2x.XO8G = function () {
        this.Pv5A();
        var j2x = this.jq6k.data;
        j2x.offset = this.jq6k.offset;
        var pB8t = j2x.offset == 0;
        j2x.total = pB8t;
        this.jq6k.limit = pB8t ? this.yd0x : this.oK8C;
        j2x.limit = this.jq6k.limit;
        this.S3x.lF7y(this.bQg2x(NEJ.X({}, this.jq6k)))
    };
    b2x.bha1x = function (e2x) {
        if (e2x.key != this.jq6k.key || e2x.offset != this.jq6k.offset) return;
        this.ZD9u();
        var i2x = this.S3x.hL5Q(e2x.key);
        if (!i2x || !i2x.length) {
            this.bic4g();
            return
        }
        var fZ5e = e2x.limit,
            bi3x = e2x.offset;
        if (this.bim4q(i2x, bi3x, fZ5e)) return;
        this.z2x("onbeforelistrender", {
            list: i2x,
            offset: bi3x,
            parent: this.im5r
        });
        if (!!this.KH4L) {
            this.ff4j.xlist = i2x;
            this.ff4j.beg = bi3x;
            this.ff4j.end = Math.min(i2x.length, bi3x + fZ5e) - 1;
            this.ff4j.act = "list";
            var dR4V = a2x.bZ3x(this.KH4L, this.ff4j);
            this.Pm5r(dR4V)
        } else {
            this.ff4j.limit = fZ5e;
            this.ff4j.offset = bi3x;
            var hr5w = a2x.Bq1x(i2x, this.PX6R, this.ff4j);
            this.Pl5q(hr5w)
        }
        this.z2x("onafterlistrender", {
            list: i2x,
            offset: bi3x,
            parent: this.im5r
        })
    };
    b2x.cvL0x = function (e2x) {
        if (!this.Zi9Z) return;
        delete this.Zi9Z;
        this.ZD9u("onafterpullrefresh");
        this.gH5M()
    };
    b2x.bQP3x = function (r2x, cy3x) {
        if (!!this.ju6o) {
            var xb0x = this.ju6o.tY9P(),
                cvK0x = this.ju6o.kd6X();
            if (xb0x > cy3x || cy3x != cvK0x) {
                this.ju6o.T3x();
                delete this.ju6o;
                this.Bb1x({
                    last: xb0x,
                    index: Math.min(r2x, cy3x)
                });
                return !0
            }
        } else {
            this.fT5Y.index = r2x;
            this.fT5Y.total = cy3x;
            this.ju6o = this.bNT1x.A2x(this.fT5Y);
            this.ju6o.wN0x("onchange", this.Bb1x.g2x(this));
            k2x.bd3x(this.PE6y, function (bI3x) {
                this.ju6o.g2x(bI3x)
            }, this)
        }
    };
    b2x.ZK9B = function () {
        var gK5P = +(new Date);
        return function (j2x) {
            var C2x = j2x[this.ff4j.pkey];
            if (!C2x) {
                j2x["dirty-data"] = !0;
                j2x[this.ff4j.pkey] = "dirty-" + gK5P++
            }
            return j2x
        }
    }();
    b2x.ZO9F = function (j2x) {
        var C2x = j2x[this.ff4j.pkey];
        if (!!j2x["dirty-data"]) {
            delete j2x["dirty-data"];
            delete j2x[this.ff4j.pkey]
        }
        return C2x
    };
    b2x.ZR9I = function () {
        var cvI0x = function (kW6Q, mI7B) {
            this.im5r.insertAdjacentElement(kW6Q, mI7B)
        };
        return function (kW6Q, j2x) {
            var Kc4g = [j2x];
            if (!!this.KH4L) {
                this.ff4j.xlist = Kc4g;
                this.ff4j.beg = 0;
                this.ff4j.end = 0;
                this.ff4j.act = "add";
                this.Pm5r(a2x.bZ3x(this.KH4L, this.ff4j), kW6Q)
            } else {
                this.ff4j.limit = 1;
                this.ff4j.offset = 0;
                this.ff4j.parent = cvI0x.g2x(this, kW6Q);
                var hr5w = a2x.Bq1x(Kc4g, this.PX6R, this.ff4j);
                this.ff4j.parent = this.im5r;
                this.Pl5q(hr5w)
            }
        }
    }();
    b2x.Pv5A = br3x;
    b2x.ZD9u = function (V3x) {
        var d2x = {
            parent: this.im5r
        };
        this.z2x(V3x || "onafterlistload", d2x);
        if (!d2x.stopped) {
            a2x.mn7g(this.cu3x)
        }
    };
    b2x.bim4q = br3x;
    b2x.bad9U = function (bH3x, kW6Q) {
        if (k2x.fF5K(bH3x)) {
            if (!this.cu3x) this.cu3x = a2x.dh4l("div");
            this.cu3x.innerHTML = bH3x
        } else {
            this.cu3x = bH3x
        }
        this.im5r.insertAdjacentElement(kW6Q || "beforeEnd", this.cu3x)
    };
    b2x.zO1x = function (V3x, kf6Z, kW6Q) {
        var d2x = {
            parent: this.im5r
        };
        this.z2x(V3x, d2x);
        if (!d2x.stopped) {
            this.bad9U(d2x.value || kf6Z, kW6Q)
        }
    };
    b2x.bic4g = br3x;
    b2x.Pm5r = br3x;
    b2x.Pl5q = br3x;
    b2x.cvM0x = function () {
        var gD5I = /^(?:delete|update)$/;
        return function (d2x) {
            var f2x = h2x.W3x(d2x, "d:action");
            if (!f2x) return;
            var U3x = a2x.t2x(f2x, "action");
            if (!gD5I.test(U3x)) return;
            var C2x = a2x.t2x(f2x, "id");
            if (!C2x) return;
            var p2x = this.S3x.eH4L(C2x);
            if (!p2x) return;
            h2x.bh3x(d2x);
            this.z2x("on" + U3x, {
                data: p2x,
                id: p2x[this.ff4j.pkey],
                body: a2x.B2x(this.bOh1x(C2x))
            })
        }
    }();
    b2x.Zv9m = br3x;
    b2x.XL8D = function (d2x) {
        var j2x = d2x.data || {},
            e2x = {
                data: j2x,
                key: this.jq6k.key,
                id: j2x[this.ff4j.pkey]
            };
        this.z2x("onbeforedelete", e2x);
        this.S3x.Lx4B(e2x)
    };
    b2x.Zw9n = br3x;
    b2x.XJ8B = function (d2x) {
        var j2x = d2x.data || {},
            e2x = {
                data: j2x,
                key: this.jq6k.key
            };
        this.z2x("onbeforeupdate", e2x);
        this.S3x.XQ8I(e2x)
    };
    b2x.bPG2x = function (d2x) {
        this.OU5Z(d2x, "onafterupdate");
        if (d2x.stopped) return;
        var C2x = d2x.data[this.ff4j.pkey];
        if (!!this.fK5P) {
            var p2x = a2x.bCS9J(C2x);
            if (!!p2x) p2x.gH5M(d2x.data)
        } else {
            var f2x = a2x.B2x(C2x + "" + a2x.JS4W());
            if (!f2x) return;
            var i2x = this.S3x.hL5Q(d2x.key),
                r2x = k2x.dj4n(i2x, d2x.data);
            if (r2x < 0) return;
            this.ff4j.list = i2x;
            this.ff4j.beg = r2x;
            this.ff4j.end = r2x;
            this.ff4j.act = "update";
            var dR4V = a2x.bZ3x(this.KH4L, this.ff4j);
            f2x.insertAdjacentHTML("afterEnd", dR4V);
            a2x.cJ4N(f2x)
        }
    };
    b2x.OU5Z = function (d2x, V3x) {
        var p2x = d2x.data;
        if (!p2x || p2x[this.ff4j.pkey] == null) {
            this.z2x("onerror", d2x);
            d2x.stopped = !0
        }
        if (!d2x.stopped) {
            this.z2x(V3x, d2x)
        }
    };
    b2x.bjp4t = br3x;
    b2x.bjq4u = br3x;
    b2x.bhl3x = function (d2x) {
        if (d2x.key != this.jq6k.key) return;
        switch (d2x.action) {
            case "add":
                this.Zv9m(d2x);
                break;
            case "delete":
                this.Zw9n(d2x);
                break;
            case "update":
                this.bPG2x(d2x);
                break;
            case "refresh":
                this.gH5M();
                break;
            case "unshift":
                this.bjq4u(d2x.offset, d2x.limit);
                break;
            case "append":
                this.bjp4t(d2x.offset, d2x.limit);
                break
        }
    };
    b2x.pq8i = function (p2x) {
        this.XJ8B({
            data: p2x
        })
    };
    b2x.mA7t = function (p2x) {
        this.XL8D({
            data: p2x
        })
    };
    b2x.sG9x = function (p2x) {
        this.S3x.jL6F({
            data: p2x,
            key: this.jq6k.key
        })
    };
    b2x.to9f = function () {
        return this.S3x
    };
    b2x.bjt4x = function (j2x) {
        this.ZR9I("afterBegin", this.ZK9B(j2x));
        return this.ZO9F(j2x)
    };
    b2x.bRE3x = function (j2x) {
        this.ZR9I("beforeEnd", this.ZK9B(j2x));
        return this.ZO9F(j2x)
    };
    b2x.gH5M = function () {
        this.Qa6U();
        this.bhT4X()
    };
    b2x.cEZ2x = function () {
        this.S3x.vm0x(this.jq6k.key);
        this.gH5M()
    };
    b2x.bra6U = function () {
        if (!!this.Zi9Z) return;
        this.Zi9Z = !0;
        this.zO1x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.S3x.bra6U({
            key: this.jq6k.key,
            data: this.jq6k.data
        })
    };
    b2x.kd6X = function () {
        return this.S3x.kd6X(this.jq6k.key)
    };
    b2x.bRO3x = function () {
        return this.ju6o
    };
    b2x.Ya8S = function () {
        return this.S3x.Ya8S(this.jq6k.key)
    };
    b2x.cvG0x = function () {
        return this.fK5P
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        fy5D = NEJ.R,
        k2x = c2x("nej.u"),
        a2x = c2x("nej.e"),
        O2x = c2x("nej.ut"),
        b2x, K2x;
    if (!!O2x.kq6k) return;
    O2x.kq6k = NEJ.C();
    b2x = O2x.kq6k.N2x(O2x.Zd9U);
    K2x = O2x.kq6k.ct3x;
    b2x.Be1x = function (bi3x, bq3x) {
        return K2x.Be1x.call(this, this.yd0x, bi3x, this.oK8C, bq3x)
    };
    b2x.bjv4z = function (r2x) {
        var bi3x = 0;
        if (r2x > 1) bi3x = this.yd0x + (r2x - 2) * this.oK8C;
        return bi3x
    };
    b2x.Bb1x = function (d2x) {
        K2x.Bb1x.apply(this, arguments);
        if (!d2x.stopped) {
            this.bQe2x(this.bjv4z(d2x.index))
        }
    };
    b2x.Pv5A = function () {
        this.Qa6U();
        this.zO1x("onbeforelistload", "列表加载中...")
    };
    b2x.ZD9u = function () {
        K2x.ZD9u.apply(this, arguments);
        this.Qa6U()
    };
    b2x.bim4q = function (i2x, bi3x, fZ5e) {
        var bz3x = this.Be1x(bi3x, i2x.length);
        if (this.bQP3x(bz3x.index, bz3x.total)) return !0;
        this.bhI3x(bz3x.total > 1 ? "" : "none")
    };
    b2x.bic4g = function () {
        this.zO1x("onemptylist", "没有列表数据！")
    };
    b2x.bad9U = function (bH3x, kW6Q) {
        if (!kW6Q && k2x.fF5K(bH3x)) {
            this.im5r.innerHTML = bH3x;
            return
        }
        K2x.bad9U.apply(this, arguments)
    };
    b2x.Pm5r = function (dR4V) {
        this.im5r.innerHTML = dR4V
    };
    b2x.Pl5q = function (hr5w) {
        this.fK5P = hr5w
    };
    b2x.Zv9m = function (d2x) {
        this.OU5Z(d2x, "onafteradd");
        if (!d2x.stopped) this.gH5M()
    };
    b2x.Zw9n = function (d2x) {
        this.OU5Z(d2x, "onafterdelete");
        if (!d2x.stopped) this.gH5M()
    };
    b2x.bjp4t = function (bi3x, fZ5e) {
        var r2x = 1;
        if (!!this.ju6o) {
            r2x = this.ju6o.tY9P()
        }
        var jO6I = this.bjv4z(r2x),
            fP5U = jO6I + (r2x > 1 ? this.oK8C : this.yd0x);
        if (bi3x >= fP5U && !!this.ju6o) {
            var bz3x = this.Be1x(0, this.kd6X());
            this.ju6o.bvB7u(bz3x.total);
            this.bhI3x(bz3x.total > 1 ? "" : "none")
        } else {
            this.gH5M()
        }
    };
    b2x.bjq4u = function (bi3x, fZ5e) {
        var r2x = 1;
        if (!!this.ju6o) {
            r2x = this.ju6o.tY9P()
        }
        var jO6I = this.bjv4z(r2x),
            bz3x = this.Be1x(jO6I, this.kd6X());
        this.Bb1x({
            last: r2x,
            index: bz3x.index
        })
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        w2x = c2x("nm.w"),
        fr5w = 40,
        b2x, K2x;
    w2x.bah9Y = NEJ.C();
    b2x = w2x.bah9Y.N2x(I2x.cI3x);
    K2x = w2x.bah9Y.ct3x;
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.OL5Q = e2x.inputer;
        this.bjA4E = e2x.tipper;
        this.bX3x([
            [this.OL5Q, "input", this.fR5W.g2x(this)]
        ])
    };
    b2x.bD3x = function () {
        this.bG3x();
        this.Ko4s(null, null)
    };
    b2x.fR5W = function (d2x) {
        if (d2x && d2x.type == "keyup" && (d2x.keyCode != 8 || d2x.keyCode != 68)) return;
        var V3x = this.OL5Q.value,
            cFa2x;
        if (l2x.UC7v(V3x) > fr5w) {
            this.OL5Q.value = l2x.Bm1x(V3x, fr5w);
            this.Ko4s("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g2x(this))
        } else if (V3x.indexOf("#") >= 0 || V3x.indexOf("@") >= 0) {
            this.Ko4s("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Ko4s(null, null);
            this.z2x("onchange", {
                value: V3x
            })
        }
    };
    b2x.cvE0x = function () {
        this.fR5W()
    };
    b2x.Ko4s = function () {
        var C2x = 0;
        return function (dI4M, bSv3x) {
            if (!!C2x) window.clearTimeout(C2x);
            if (!dI4M) {
                a2x.y2x(this.bjA4E, "f-vhide");
                this.bSy3x = !1;
                return
            }
            this.bjA4E.innerHTML = '<i class="u-icn u-icn-25"></i>' + dI4M;
            a2x.x2x(this.bjA4E, "f-vhide");
            this.bSy3x = !0;
            if (k2x.gG5L(bSv3x)) C2x = window.setTimeout(function () {
                this.Ko4s(null, null);
                bSv3x()
            }.g2x(this), 1e3)
        }
    }();
    b2x.bSz3x = function () {
        if (this.bSy3x) return !1;
        if (l2x.jP6J(this.OL5Q.value)) {
            this.Ko4s("歌单名不能为空");
            return !1
        }
        return !0
    };
    b2x.fW5b = function () {
        return this.OL5Q.value
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        h2x = c2x("nej.v"),
        a2x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        m2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bC3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    m2x.bai9Z = NEJ.C();
    b2x = m2x.bai9Z.N2x(m2x.el4p);
    K2x = m2x.bai9Z.ct3x;
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.H2x(this.n2x, "j-flag");
        this.bap9g = {
            inputer: i2x[0],
            tipper: i2x[1]
        };
        this.iI5N = {
            onerror: this.bSR3x.g2x(this),
            onitemadd: this.bSR3x.g2x(this)
        };
        this.ly7r = i2x[2];
        h2x.s2x(i2x[2], "click", this.Hj3x.g2x(this));
        h2x.s2x(i2x[3], "click", this.Ct2x.g2x(this));
        h2x.s2x(this.n2x, "keypress", this.bSV3x.g2x(this))
    };
    b2x.cf3x = function () {
        this.ce3x = "m-wgt-create"
    };
    b2x.bk3x = function (e2x) {
        e2x.clazz = " m-layer-w2";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "新建歌单";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bm3x(e2x);
        this.bap9g.inputer.value = e2x.name || "";
        this.vU0x = w2x.bah9Y.A2x(this.bap9g);
        this.vU0x.cvE0x();
        this.S3x = q2x.ic5h.A2x(this.iI5N);
        setTimeout(function () {
            this.bap9g.inputer.focus()
        }.g2x(this), 0)
    };
    b2x.bD3x = function () {
        this.bG3x();
        if (this.vU0x) {
            this.vU0x.T3x();
            delete this.vU0x
        }
        this.tf9W(!1);
        this.bap9g.inputer.value = ""
    };
    b2x.tf9W = function (Oz5E) {
        this.oO8G = Oz5E;
        if (Oz5E) {
            this.ly7r.innerHTML = "<i>新建中...</i>";
            a2x.y2x(this.ly7r, "u-btn2-dis")
        } else {
            this.ly7r.innerHTML = "<i>新 建</i>";
            a2x.x2x(this.ly7r, "u-btn2-dis")
        }
    };
    b2x.Hj3x = function () {
        if (this.oO8G || !this.vU0x.bSz3x()) return;
        var cq3x = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.vU0x.fW5b()
            },
            offset: 1
        };
        this.S3x.jL6F(cq3x);
        this.tf9W(!0)
    };
    b2x.bSR3x = function (d2x) {
        var cj3x = (d2x.result || bb3x).code;
        if (!cj3x) {
            this.z2x("onsuccess", d2x.data)
        } else {
            this.z2x("onerror", d2x)
        }
        this.bt3x()
    };
    b2x.Ct2x = function () {
        this.bt3x()
    };
    b2x.bSV3x = function (d2x) {
        if (d2x.keyCode == 13) this.Hj3x()
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        m2x = c2x("nm.l"),
        b2x, K2x;
    m2x.bkc4g = NEJ.C();
    b2x = m2x.bkc4g.N2x(m2x.el4p);
    K2x = m2x.bkc4g.ct3x;
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.H2x(this.n2x, "j-flag");
        this.iF5K = {
            limit: 301,
            parent: i2x[1],
            cache: {
                klass: q2x.ic5h,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bkg4k.g2x(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l2x.Dr2x,
                escape: k2x.dG4K
            }
        };
        this.iI5N = {
            onsuccess: this.bas9j.g2x(this),
            onerror: this.eK4O.g2x(this)
        };
        h2x.s2x(i2x[0], "click", this.Hj3x.g2x(this));
        h2x.s2x(i2x[1], "click", this.kS6M.g2x(this))
    };
    b2x.cf3x = function () {
        this.ce3x = "m-wgt-subscribe"
    };
    b2x.bk3x = function (e2x) {
        e2x.parent = e2x.parent || document.body;
        e2x.clazz = " m-layer-w2";
        e2x.title = "添加到歌单";
        e2x.draggable = !0;
        e2x.mask = !0;
        this.bm3x(e2x);
        this.bay9p = (e2x.tracks || []).reverse();
        this.iF5K.item.size = this.bay9p.length;
        this.iI5N.name = e2x.name || "";
        this.bTK3x = q2x.wh0x.A2x({
            onaddsuccess: this.AE1x.g2x(this)
        });
        this.tK9B = q2x.ic5h.A2x({
            onlistload: this.cvD0x.g2x(this)
        });
        this.tK9B.bPT2x();
        k2x.bd3x(this.bay9p, function (p2x, r2x, i2x) {
            if (!k2x.lG7z(p2x)) {
                i2x[r2x] = this.bTK3x.eH4L(p2x) || p2x
            }
        }, this)
    };
    b2x.cvD0x = function () {
        if (this.dK4O) this.dK4O.T3x();
        this.dK4O = I2x.kq6k.A2x(this.iF5K)
    };
    b2x.Hj3x = function () {
        this.bt3x();
        if (this.HC3x) this.HC3x.T3x();
        this.HC3x = m2x.bai9Z.A2x(this.iI5N);
        this.HC3x.L2x()
    };
    b2x.kS6M = function () {
        var cvC0x = function (f2x) {
            while (f2x && f2x != document) {
                if (f2x.tagName.toLowerCase() == "li") {
                    return f2x
                }
                f2x = f2x.parentNode
            }
        };
        return function (d2x) {
            h2x.cr3x(d2x);
            var F2x = h2x.W3x(d2x),
                zp1x = cvC0x(F2x);
            if (!!zp1x && !a2x.bF3x(zp1x, "dis")) {
                this.bas9j({
                    id: a2x.t2x(zp1x, "id")
                })
            }
        }
    }();
    b2x.bas9j = function (d2x) {
        var C2x = d2x.id;
        if (!C2x || !this.bay9p.length) return;
        this.bTK3x.jL6F({
            key: "track_playlist-" + C2x,
            data: {
                tracks: this.bay9p,
                pid: C2x
            }
        });
        this.bt3x()
    };
    b2x.AE1x = function () {
        this.z2x("onsuccess");
        m2x.Z3x.L2x({
            tip: "收藏成功"
        })
    };
    b2x.eK4O = function (d2x) {
        this.bt3x();
        this.z2x("onerror", d2x);
        var cV4Z = "收藏失败";
        switch (d2x.code) {
            case 405:
                cV4Z = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cV4Z = "歌单数量超过限制";
                break;
            case 502:
                cV4Z = "歌曲已经存在"
        }
        m2x.Z3x.L2x({
            tip: cV4Z,
            type: 2
        })
    };
    b2x.bkg4k = function () {
        this.bt3x();
        m2x.Z3x.L2x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l2x.mQ7J = function (e2x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        m2x.bkc4g.L2x(e2x)
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        dw4A = c2x("nej.p"),
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x");
    var bkJ4N, oA8s, Y3x = decodeURIComponent(location.href),
        jX6R = /.+(https?:\/\/.+\/proxy.html)/.test(Y3x) ? RegExp.$1 : "";
    if (!!jX6R) {
        v2x.um9d("mail_proxy_url", jX6R)
    } else {
        jX6R = v2x.tm9d("mail_proxy_url") || "about:blank"
    }
    bkJ4N = a2x.bdC0x({
        src: jX6R,
        onload: function () {
            oA8s = true
        }
    });
    var bTW4a = function () {
        v2x.gB5G("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cvA0x = function () {
        if (dw4A.ds4w.browser == "ie" && parseInt(dw4A.ds4w.version) < 9) {
            l2x.fs5x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l2x.Ke4i = function (u2x, C2x, U3x) {
        if (!cvA0x()) return;
        bTW4a();
        if (U3x == "stop") {
            if (!oA8s) throw "proxy not loaded";
            bTW4a();
            bkJ4N.contentWindow.location.replace(jX6R + "#" + k2x.cC3x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bkJ4N.contentWindow.location.replace(jX6R + "#" + k2x.cC3x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u2x,
                    id: C2x,
                    s: +(new Date),
                    action: U3x
                })
            }))
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        m2x = c2x("nm.l"),
        q2x = c2x("nm.d");
    var kD6x = q2x.hP5U.A2x();
    var oP8H = q2x.wh0x.A2x({
        onlistload: cvz0x,
        onitemload: cvy0x,
        onerror: eK4O
    });
    var HO3x = q2x.rp9g.A2x({
        onlistload: cvx0x,
        onitemload: cvw0x,
        onerror: eK4O
    });
    var bUs4w = {};

    function xg0x(d2x) {
        var f2x = h2x.W3x(d2x, "d:resAction"),
            U3x = a2x.t2x(f2x, "resAction");
        if (f2x && (U3x == "play" || U3x == "addto")) {
            var u2x = parseInt(a2x.t2x(f2x, "resType"));
            bUv4z({
                action: U3x,
                type: u2x,
                id: a2x.t2x(f2x, "resId"),
                from: a2x.t2x(f2x, "resFrom"),
                data: a2x.t2x(f2x, "resData"),
                order: a2x.t2x(f2x, "resOrder"),
                node: f2x
            });
            if (u2x != 13) bUy4C(f2x)
        }
    }

    function bUv4z(bP3x) {
        var U3x = bP3x.action,
            u2x = bP3x.type,
            C2x = bP3x.id,
            eb4f = bP3x.from,
            j2x = bP3x.data,
            ts9j = bP3x.order,
            e2x = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C2x
                },
                ext: {
                    id: C2x,
                    action: U3x,
                    type: u2x,
                    from: eb4f,
                    data: j2x,
                    node: bP3x.node
                }
            };
        if (U3x != "play" && U3x != "addto" || !u2x) return;
        if (window.GRef && GRef == "mail") {
            l2x.Ke4i(u2x, C2x, U3x);
            return
        }
        switch (u2x) {
            case 13:
                e2x.key = "track_playlist-" + C2x;
                oP8H.lF7y(e2x);
                break;
            case 17:
                e2x.key = "program";
                e2x.id = C2x;
                HO3x.XR8J(e2x);
                if (U3x == "play") {
                    v2x.bn3x("/api/dj/program/listen", {
                        query: {
                            id: C2x
                        }
                    })
                }
                break;
            case 18:
                e2x.key = "track";
                e2x.id = C2x;
                oP8H.XR8J(e2x);
                break;
            case 19:
                e2x.key = "track_album-" + C2x;
                oP8H.lF7y(e2x);
                break;
            case 24:
                e2x.key = "track_day";
                oP8H.lF7y(e2x);
                break;
            case 2:
                e2x.key = "track_artist_top-" + C2x;
                oP8H.lF7y(e2x);
                break;
            case 70:
                e2x.key = "program_djradio-" + C2x + "-" + ts9j;
                e2x.data.radioId = C2x;
                e2x.data.asc = ts9j == 2;
                HO3x.lF7y(e2x);
                break
        }
    }

    function bUz4D(i2x) {
        var o2x = [];
        k2x.bd3x(i2x, function (p2x) {
            if (p2x.mainSong) {
                p2x.mainSong.program = p2x;
                o2x.push(p2x.mainSong);
                p2x.localupdatetime = +(new Date);
                oP8H.cCo1x(p2x.mainSong);
                p2x.mainTrackId = p2x.mainSong.id;
                delete p2x.mainSong
            } else {
                var bUB4F = oP8H.eH4L(p2x.mainTrackId);
                bUB4F && o2x.push(bUB4F)
            }
        });
        return o2x
    }

    function baL9C(i2x, e2x) {
        var rz9q = e2x.action == "play" && e2x.type != 17 && e2x.type != 18,
            fY5d = e2x.action == "play";
        if (!i2x.length) return;
        if (e2x.type == 19) {
            i2x = l2x.LG4K(i2x, true, {
                play: true
            }, {
                source: "album",
                sourceid: e2x.id
            })
        } else {
            i2x = l2x.LG4K(i2x, true, {
                play: true
            })
        }
        k2x.bd3x(i2x, function (p2x) {
            p2x.source = l2x.bru6o({
                fid: e2x.from,
                fdata: e2x.data,
                type: e2x.type,
                rid: e2x.id
            }, p2x.id)
        });
        top.player.addTo(i2x, rz9q, fY5d);
        kD6x.Sr6l({
            rid: e2x.id,
            type: e2x.type,
            hash: l2x.Mt5y(),
            play: fY5d,
            source: e2x.from,
            sourceid: e2x.data
        })
    }

    function cvz0x(d2x) {
        var ey4C = d2x.ext || {};
        i2x = oP8H.hL5Q(d2x.key);
        baL9C(i2x, ey4C);
        if (ey4C.type == 13 && ey4C.action == "play" && i2x && i2x.length > 0) {
            bUy4C(ey4C.node);
            v2x.bn3x("/api/playlist/update/playcount", {
                query: {
                    id: ey4C.id
                }
            })
        }
    }

    function cvy0x(d2x) {
        var i2x = [oP8H.eH4L(d2x.id)],
            bj3x = i2x[0],
            qF8x = l2x.pT8L(bj3x),
            sJ9A = bj3x.privilege || {};
        if (qF8x == 10) {
            l2x.uY0x(sJ9A.fee || bj3x.fee, bj3x.id, "song", null, sJ9A)
        } else if (qF8x == 100) {
            l2x.iA5F(null, null, null, true, bj3x)
        } else if (qF8x == 11) {
            l2x.bFH9y(bj3x.id, 18)
        } else {
            baL9C(i2x, d2x.ext)
        }
    }

    function cvx0x(d2x) {
        var i2x = bUz4D(HO3x.hL5Q(d2x.key));
        baL9C(i2x, d2x.ext)
    }

    function cvw0x(d2x) {
        var i2x = bUz4D([HO3x.eH4L(d2x.id)]);
        baL9C(i2x, d2x.ext)
    }

    function eK4O() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bUy4C(f2x) {
        var u2x = a2x.t2x(f2x, "resType"),
            C2x = a2x.t2x(f2x, "resId"),
            J2x = u2x + "-" + C2x;
        if (bUs4w[J2x]) return;
        var bUI4M = a2x.B2x("play-count"),
            blh4l = a2x.H2x(f2x.parentNode, "nb"),
            NV5a = null;
        if (bUI4M) {
            NV5a = bUI4M
        } else {
            NV5a = !!blh4l && !!blh4l[0] ? blh4l[0] : null
        }
        if (NV5a) {
            var cH3x = NV5a.innerHTML;
            if (/^\d+$/.test(cH3x)) {
                NV5a.innerText = +cH3x + 1
            }
            bUs4w[J2x] = true
        }
    }
    l2x.cvv0x = function (f2x) {
        h2x.s2x(f2x || document.body, "click", xg0x.g2x(this))
    };
    l2x.cvu0x = function (U3x, u2x, C2x) {
        bUv4z({
            action: U3x,
            type: u2x,
            id: C2x
        })
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    q2x.fg4k({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function (o2x, e2x) {
                this.cvt0x(o2x, e2x)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function (o2x, e2x) {
                this.z2x("onshareall", e2x.result)
            },
            onerror: function (o2x, e2x) {
                this.z2x("onshareall", e2x.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function (o2x, e2x) {
                e2x.options.picUrl = o2x.picUrl;
                this.bxu7n(e2x.options, e2x.result)
            },
            onerror: function (o2x, e2x) {
                this.z2x("onshareall", e2x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function (Q3x, e2x) {
                this.qe8W("vid_info-" + e2x.data.nosKey, Q3x);
                return Q3x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function (e2x) {},
            format: function (o2x, e2x) {
                e2x.data = e2x.data2;
                this.cp3x("share-all", e2x)
            },
            onerror: "onshareerror"
        }
    });
    q2x.blI4M = NEJ.C();
    b2x = q2x.blI4M.N2x(q2x.hI5N);
    b2x.cvr0x = function () {
        var uj9a = function (Q3x, e2x) {
            e2x.times++;
            if (e2x.times > 10) {
                this.z2x("onvinfoerror", e2x.key, Q3x)
            } else {
                setTimeout(ev4z.g2x(this, e2x), e2x.times * 1e3)
            }
        };
        var zF1x = function (Q3x, e2x) {
            this.z2x("onvinfo", e2x.key, Q3x)
        };
        var ev4z = function (e2x) {
            var Y3x = e2x.url;
            v2x.bn3x(Y3x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: zF1x.ez4D(this, e2x),
                onerror: uj9a.ez4D(this, e2x)
            })
        };
        return function (e2x) {
            e2x.times = 0;
            ev4z.call(this, e2x)
        }
    }();
    b2x.cFc2x = function () {
        var Dv2x;
        var uj9a = function (Q3x, e2x) {
            if (Q3x.code > 0) {
                clearInterval(this.Dw2x);
                this.z2x("onviderror", e2x.data.nosKey)
            }
        };
        var zF1x = function (J2x, Q3x) {
            if (Q3x.vid && Q3x.covers) {
                clearInterval(this.Dw2x);
                this.z2x("onvid", J2x, Q3x)
            }
        };
        var ev4z = function (e2x) {
            if (+(new Date) - Dv2x > 60 * 60 * 1e3) {
                clearInterval(this.Dw2x);
                this.z2x("onviderror", e2x.data.nosKey);
                return
            }
            e2x.onload = zF1x.g2x(this, e2x.data.nosKey);
            e2x.onerror = uj9a.g2x(this);
            this.cp3x("vid-get", e2x)
        };
        return function (e2x) {
            if (!e2x || !e2x.data) return;
            Dv2x = +(new Date);
            this.Dw2x = clearInterval(this.Dw2x);
            this.Dw2x = setInterval(ev4z.g2x(this, e2x), 1e4);
            ev4z.apply(this, arguments)
        }
    }();
    b2x.cvo0x = function () {
        this.Dw2x = clearInterval(this.Dw2x)
    };
    b2x.cvt0x = function (o2x, oo8g) {
        if (o2x.event && oo8g.snsTypes) {
            if (oo8g.pics) {
                var bxU7N = [];
                for (var i = 0, len = oo8g.pics.length; i < len; i++) {
                    bxU7N[i] = oo8g.pics[i].originId
                }
                this.cp3x("share_img_compound", {
                    data: {
                        picIds: bxU7N.join(",")
                    },
                    options: oo8g,
                    result: o2x
                })
            } else {
                oo8g.picUrl = oo8g.picUrl;
                this.bxu7n(oo8g, o2x)
            }
        } else {
            this.z2x("onshareall", o2x)
        }
        var vx0x = q2x.hP5U.A2x();
        vx0x.eU4Y(oo8g.isPub ? "pubevent" : "shareevent", {
            id: o2x.id
        })
    };
    b2x.bxu7n = function (oo8g, o2x) {
        var cq3x = {},
            d2x = o2x.event || {};
        cq3x.eventid = d2x.id;
        cq3x.eventtype = d2x.type;
        oo8g.picUrl && (cq3x.picUrl = oo8g.picUrl);
        cq3x.snsTypes = oo8g.snsTypes;
        cq3x.msg = oo8g.data.msg || "";
        cq3x.type = oo8g.data.type;
        oo8g.data.id && (cq3x.id = oo8g.data.id);
        if (cq3x.eventtype == 41) {
            var Q3x = l2x.FI3x(d2x.json);
            cq3x.eventtype = 39;
            if (cq3x.msg) {
                cq3x.msg += "  "
            }
            cq3x.msg += "分享" + Q3x.video.creator.nickname + "的视频《" + Q3x.video.title + "》";
            delete cq3x.id
        }
        this.cp3x("share-sns", {
            data: cq3x,
            result: o2x
        })
    };
    b2x.cvn0x = function (e2x) {
        var j2x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k2x.ob7U(5)
        };
        j2x = NEJ.EX(j2x, e2x);
        if (j2x.id < 0) {
            delete j2x.id;
            j2x.type = "noresource"
        }
        if (!j2x.threadId) {
            delete j2x.threadId
        }
        if (!j2x.actId) {
            delete j2x.actId
        }
        if (!j2x.pics) {
            delete j2x.pics
        } else {
            j2x.pics = JSON.stringify(j2x.pics)
        }
        this.cp3x("share-all", {
            data: j2x,
            snsTypes: e2x.snsTypes,
            picUrl: e2x.picUrl,
            pics: e2x.pics,
            isPub: e2x.isPub
        })
    };
    b2x.cvm0x = function (e2x) {
        this.cp3x("share-private", e2x)
    };
    b2x.cvl0x = function (e2x) {
        this.cp3x("video-submit", e2x)
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    var cvj0x = {
        40: !0
    };
    q2x.fg4k({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function (e2x) {
                e2x.data.getcounts = true;
                e2x.data.pagesize = e2x.data.limit;
                if (e2x.data.offset == 0) {
                    e2x.data.lasttime = -1
                }
                delete e2x.data.offset
            },
            format: function (Q3x, e2x) {
                Q3x.event = l2x.beP0x(Q3x.event, function (p2x, r2x) {
                    return !cvj0x[p2x.type]
                });
                this.cvi0x(Q3x.event);
                e2x.data.lasttime = Q3x.lasttime;
                if (Q3x.event.length) {
                    Q3x.event.length = e2x.limit
                }
                return {
                    list: Q3x.event,
                    total: Q3x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function (Q3x, e2x) {
                return {
                    list: Q3x.events,
                    total: Q3x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function (e2x) {
                e2x.data.pagesize = 20
            },
            format: function (Q3x, e2x) {
                return Q3x.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function (e2x) {
                if (e2x.data.offset == 0) {
                    e2x.data.time = -1
                }
                delete e2x.data.offset;
                e2x.data.getcounts = true
            },
            format: function (Q3x, e2x) {
                e2x.data.time = Q3x.lasttime;
                var i2x = Q3x.events;
                if (Q3x.more && i2x.length < e2x.data.limit) {
                    i2x = this.JP4T(i2x, e2x.data.limit)
                }
                return {
                    list: i2x,
                    total: Q3x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function (o2x, e2x) {
                o2x.conf = e2x.conf;
                return o2x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function (e2x, bg3x) {
                if (e2x.like) {
                    if (e2x.comment) {
                        bg3x.url = "/api/v1/comment/like"
                    } else {
                        bg3x.url = "/api/resource/like"
                    }
                    bg3x.onload = "oneventlike";
                    bg3x.onerror = "oneventlikeerr"
                } else {
                    if (e2x.comment) {
                        bg3x.url = "/api/v1/comment/unlike"
                    } else {
                        bg3x.url = "/api/resource/unlike"
                    }
                    bg3x.onload = "oneventunlike";
                    bg3x.onerror = "oneventunlikeerr"
                }
            },
            format: function (o2x, e2x) {
                o2x.eid = e2x.eid;
                o2x.origin = e2x.origin;
                o2x.ext = e2x.ext;
                return o2x
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function (o2x, e2x) {
                o2x.id = e2x.data.id;
                return o2x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function (e2x, bg3x) {
                if (e2x.data.type == "nointer") {
                    bg3x.url = "/api/event/rcmd/reject"
                } else if (e2x.data.transcoding) {
                    bg3x.url = "/api/event/video/transcoding/delete"
                } else {
                    bg3x.url = "/api/event/delete"
                }
            },
            format: function (o2x, e2x) {
                o2x.id = e2x.data.id;
                return o2x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function (o2x, e2x) {
                o2x.id = e2x.data.id;
                return o2x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function (e2x) {
                e2x.data.lasttime = e2x.data.lasttime || -1;
                e2x.data.pagesize = e2x.data.limit;
                e2x.data.getcounts = true;
                delete e2x.data.offset
            },
            format: function (Q3x, e2x) {
                e2x.data.lasttime = Q3x.lasttime;
                var i2x = Q3x.events;
                if (Q3x.more) i2x = this.JP4T(i2x, e2x.data.pagesize);
                return {
                    list: i2x,
                    total: Q3x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q2x.zM1x = NEJ.C();
    b2x = q2x.zM1x.N2x(q2x.hI5N);
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bmh5m = function (u2x, cT4X) {
        return u2x + "-" + cT4X
    };
    b2x.cFd2x = function (e2x) {
        this.cp3x("ievent-get", e2x)
    };
    b2x.cFe2x = function (e2x) {
        this.cp3x("ievent-new-get", e2x)
    };
    b2x.cFg2x = function (e2x) {
        this.cp3x("ievent-user-get", e2x)
    };
    b2x.cFh2x = function (u2x, cT4X) {
        return this.ss9j(this.bmh5m(u2x, cT4X))
    };
    b2x.cFi2x = function (JM4Q, e2x) {
        if (!JM4Q || !JM4Q.length) return;
        e2x = e2x || {};
        var by3x = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, Gf3x = [], byB8t = [], j2x; i < JM4Q.length; ++i) {
            j2x = JM4Q[i];
            j2x = this.ss9j(this.bmh5m(j2x.type, j2x.id));
            if (!j2x) {
                Gf3x.push(JM4Q[i].id);
                byB8t.push(by3x[JM4Q[i].type] || 0)
            }
        }
        if (!Gf3x.length) {
            this.z2x("oneventresload", e2x.conf);
            return
        }
        e2x.data = {
            ids: JSON.stringify(Gf3x),
            types: JSON.stringify(byB8t)
        };
        e2x.onload = this.cva0x.g2x(this);
        this.cp3x("ievent-res-get", e2x)
    };
    b2x.cva0x = function (o2x) {
        if (o2x.code != 200) {
            this.z2x("oneventreserror", o2x.code);
            return
        }
        var by3x = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i2x = o2x.results; i < i2x.length; ++i) {
            this.qe8W(this.bmh5m(by3x[i2x[i].type], i2x[i].id), i2x[i])
        }
        this.z2x("oneventresload", o2x.conf)
    };
    b2x.byG8y = function (j2x) {
        var J2x = "event-list";
        this.brG6A(J2x, j2x);
        this.z2x("onitemadd", {
            key: J2x,
            action: "add",
            data: j2x,
            flag: -1
        })
    };
    b2x.oR8J = function (e2x) {
        this.cp3x("ievent-like", e2x)
    };
    b2x.mA7t = function (e2x) {
        this.cp3x("ievent-delete", e2x)
    };
    b2x.JP4T = function (i2x, fZ5e) {
        for (var i = i2x.length; i < fZ5e; i++) i2x.push(null);
        return i2x
    };
    b2x.cvi0x = function (i2x) {
        var o2x = [];
        if (!i2x || !i2x.length) return;
        k2x.bd3x(i2x, function (d2x) {
            d2x.biData = this.byL8D(d2x)
        }, this)
    };
    b2x.byL8D = function () {
        var WM8E = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            cuZ0x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d2x) {
            var Q3x = {
                id: d2x.id,
                sourceid: d2x.user.userId,
                alg: d2x.rcmdInfo ? d2x.rcmdInfo.alg : null,
                contentType: WM8E[d2x.type] || (k2x.dj4n(cuZ0x, d2x.type) != -1 ? "user_event" : "other")
            };
            return Q3x
        }
    }();
    b2x.DN2x = function (cuX0x, d2x) {
        var Q3x = this.byL8D(d2x);
        Q3x.actionType = cuX0x;
        if (window.log) log("eventclick", Q3x)
    };
    b2x.cFk2x = function (e2x) {
        this.cp3x("event_latest-list", e2x)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
            return a + b & 4294967295
        },
        hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "",
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.rL9C += contents;
        this.bq3x += contents.length;
        var length = this.rL9C.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO4S, md5blk(this.rL9C.substring(i - 64, i)))
        }
        this.rL9C = this.rL9C.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.rL9C,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.ou8m(tail, length);
        ret = hex(this.dO4S);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.rL9C = "";
        this.bq3x = 0;
        this.dO4S = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {
            buff: this.rL9C,
            length: this.bq3x,
            hash: this.dO4S
        }
    };
    SparkMD5.prototype.setState = function (state) {
        this.rL9C = state.buff;
        this.bq3x = state.length;
        this.dO4S = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dO4S;
        delete this.rL9C;
        delete this.bq3x
    };
    SparkMD5.prototype.ou8m = function (tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dO4S, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq3x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dO4S, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.rL9C.buffer, arr, true),
            length = buff.length,
            i;
        this.bq3x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO4S, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.rL9C = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.rL9C,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.ou8m(tail, length);
        ret = hex(this.dO4S);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.rL9C = new Uint8Array(0);
        this.bq3x = 0;
        this.dO4S = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.ou8m = SparkMD5.prototype.ou8m;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        eo4s = c2x("nej.g"),
        k2x = c2x("nej.u"),
        fM5R = c2x("nej.n"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        jE6y = c2x("nm.x.nos"),
        w2x = c2x("nm.w");
    var cuT0x = 1024 * 256,
        cuS0x = 1024 * 1024 * 2,
        rn9e = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        },
        bzq8i = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br3x,
        rl8d = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        },
        jB6v = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var nY7R = {};
    var vx0x = q2x.hP5U.A2x();
    jE6y.cFl2x = function () {
        return jB6v
    };
    var cuO0x = function () {
        return k2x.ob7U(6) + +(new Date)
    };
    var JK4O = function (iH5M, e2x) {
        if (!nY7R[e2x.taskId]) {
            return
        }(e2x.onuploading || br3x).call(this, iH5M)
    };
    var bmw5B = function (R3x) {
        var cuN0x = R3x.md5,
            cU4Y = R3x.file,
            cuM0x = cuN0x + cU4Y.size;
        return "nos_file_hash_" + cuM0x
    };
    var cuL0x = function (R3x) {
        var J2x = bmw5B(R3x),
            j2x = v2x.bNa1x(J2x, "{}");
        try {
            j2x = JSON.parse(j2x)
        } catch (e) {
            j2x = {}
        }
        return j2x
    };
    var cuK0x = function (R3x, e2x) {
        if (!R3x.md5) {
            return
        }
        var J2x = bmw5B(R3x),
            j2x = v2x.bNa1x(J2x, "{}");
        try {
            j2x = JSON.parse(j2x)
        } catch (e) {
            j2x = {}
        }
        NEJ.X(j2x, e2x);
        v2x.um9d(J2x, JSON.stringify(j2x))
    };
    var cuJ0x = function (R3x) {
        var J2x = bmw5B(R3x);
        v2x.Ll4p(J2x)
    };
    var cuI0x = function (R3x, eL4P) {
        var Y3x = R3x.urls[Math.min(R3x.urlIndex, R3x.urls.length - 1)],
            cU4Y = R3x.file,
            li6c = R3x.bucket,
            mx7q = R3x.objectKey,
            eM4Q = R3x.token,
            bJ3x = R3x.context,
            oT8L = {},
            Ng5l = bzq8i.call(cU4Y, R3x.beg, R3x.end),
            bv3x = {
                offset: R3x.beg,
                complete: R3x.lastChunk || false,
                version: "1.0"
            };
        if (bJ3x) {
            bv3x.context = bJ3x
        }
        oT8L["x-nos-token"] = eM4Q;
        oT8L[eo4s.yV1x] = cU4Y.type;
        R3x.reqId = v2x.bn3x(Y3x + "/" + li6c + "/" + mx7q, {
            type: "json",
            method: "POST",
            headers: oT8L,
            query: bv3x,
            data: Ng5l,
            onload: eL4P.onload,
            onerror: eL4P.onerror
        })
    };
    var cuG0x = function (o2x, R3x, e2x) {
        o2x = {
            code: 200,
            fileName: e2x.file.name,
            size: e2x.file.size,
            type: e2x.file.type,
            bucket: R3x.bucket,
            docId: R3x.docId,
            objectKey: R3x.objectKey,
            url: "//nos.netease.com/" + R3x.bucket + "/" + R3x.objectKey
        };
        cuJ0x(R3x);
        if (!nY7R[e2x.taskId]) {
            return
        }
        delete nY7R[e2x.taskId];
        vx0x.eU4Y("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(o2x)
        });
        (e2x.onsuccess || br3x).call(this, o2x)
    };
    var cuF0x = function (o2x, e2x) {
        (e2x.onerror || br3x).call(this, o2x)
    };
    var cuE0x = function (o2x, R3x, e2x) {
        R3x.context = o2x.context;
        R3x.beg = o2x.offset;
        var iH5M = R3x.beg / R3x.file.size;
        cuK0x(R3x, {
            bucket: R3x.bucket,
            objectKey: R3x.objectKey,
            token: R3x.token,
            context: R3x.context,
            beg: R3x.beg,
            updateTime: +(new Date)
        });
        iH5M = rl8d.DNS_GET + (rl8d.UPLOADED - rl8d.DNS_GET) * iH5M;
        JK4O(iH5M, e2x);
        if (R3x.lastChunk) {
            cuG0x(o2x, R3x, e2x)
        } else {
            bbn9e(R3x, e2x)
        }
    };
    var cuB0x = function (o2x, R3x, e2x) {
        vx0x.eU4Y("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o2x.data,
            body: o2x.extData,
            ext: JSON.stringify(R3x),
            timging: +(new Date) - R3x.chuckUploadStartTime
        });
        if (R3x.urlIndex < Math.max(R3x.urls.length - 1, 5)) {
            R3x.urlIndex++;
            bbn9e(R3x, e2x)
        } else {
            cuF0x(o2x, e2x)
        }
    };
    var bbn9e = function (R3x, e2x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.end = R3x.beg + cuT0x;
        if (R3x.end >= R3x.file.size) {
            R3x.end = R3x.file.size;
            R3x.lastChunk = true
        }
        R3x.chuckUploadStartTime = +(new Date);
        cuI0x(R3x, {
            onload: cuE0x.ez4D(this, R3x, e2x),
            onerror: cuB0x.ez4D(this, R3x, e2x)
        })
    };
    var cuA0x = function (o2x, R3x, e2x) {
        R3x.beg = o2x.offset;
        var iH5M = R3x.beg / R3x.file.size;
        iH5M = rl8d.DNS_GET + (rl8d.UPLOADED - rl8d.DNS_GET) * iH5M;
        JK4O(iH5M, e2x);
        bbn9e(R3x, e2x)
    };
    var cuy0x = function (o2x, R3x, e2x) {
        R3x.beg = 0;
        delete R3x.context;
        bnh5m(R3x, e2x)
    };
    var bAk8c = function (Vu7n, R3x, e2x) {
        R3x.lastChunk = false;
        R3x.urls = Vu7n;
        R3x.urlIndex = 0;
        JK4O(rl8d.DNS_GET, e2x);
        if (R3x.fromExist) {
            delete R3x.fromExist;
            var Y3x = R3x.urls[Math.min(R3x.urlIndex, R3x.urls.length - 1)],
                li6c = R3x.bucket,
                mx7q = R3x.objectKey,
                eM4Q = R3x.token,
                bJ3x = R3x.context,
                oT8L = {},
                bv3x = {
                    context: bJ3x,
                    version: "1.0"
                };
            oT8L["x-nos-token"] = eM4Q;
            R3x.reqId = v2x.bn3x(Y3x + "/" + li6c + "/" + mx7q + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: oT8L,
                query: bv3x,
                onload: cuA0x.ez4D(this, R3x, e2x),
                onerror: cuy0x.ez4D(this, R3x, e2x)
            })
        } else {
            R3x.beg = 0;
            bbn9e(R3x, e2x)
        }
    };
    var cux0x = function (o2x, R3x, e2x) {
        o2x.code = rn9e.DNS_ERROR;
        (e2x.onerror || br3x).call(this, o2x)
    };
    var bAo8g = function (j2x, e2x) {
        var o2x = j2x.result || {},
            li6c = o2x.bucket,
            mx7q = o2x.objectKey,
            eM4Q = o2x.token,
            R3x = nY7R[e2x.taskId];
        if (!li6c || !mx7q || !eM4Q || !R3x) {
            o2x.code = rn9e.TOKEN_ERROR;
            (e2x.onerror || br3x).call(this, o2x);
            return
        }
        R3x.bucket = li6c;
        R3x.objectKey = mx7q;
        R3x.docId = o2x.docId;
        R3x.token = eM4Q;
        JK4O(rl8d.TOKEN_GET, e2x);
        if (location.protocol == "https:") {
            bAk8c(["//nosup-hz1.127.net"], R3x, e2x)
        } else {
            R3x.reqId = jE6y.cus0x({
                bucket: li6c,
                onload: bAk8c.ez4D(this, R3x, e2x),
                onerror: cux0x.ez4D(this, R3x, e2x)
            })
        }
        R3x.step = 1
    };
    var cur0x = function (o2x, e2x) {
        o2x.code = rn9e.TOKEN_ERROR;
        (e2x.onerror || br3x).call(this, o2x)
    };
    var bnh5m = function (R3x, e2x) {
        var cU4Y = e2x.file,
            ft5y = cU4Y.name || "",
            ey4C = ft5y.split(".").pop();
        jE6y.bbv9m(NEJ.X({
            filename: ft5y,
            ext: ey4C,
            onload: bAo8g.ez4D(this, e2x),
            onerror: cur0x.ez4D(this, e2x)
        }, e2x, function (p2x) {
            return k2x.gG5L(p2x) || k2x.lG7z(p2x)
        }))
    };
    var cuq0x = function (R3x, e2x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.md5 = R3x.spark.end();
        var Jy4C = cuL0x(R3x) || {},
            li6c = Jy4C.bucket,
            mx7q = Jy4C.objectKey,
            eM4Q = Jy4C.token;
        if (!li6c || !mx7q || !eM4Q) {
            bnh5m(R3x, e2x)
        } else {
            R3x.context = Jy4C.context;
            R3x.beg = Jy4C.beg;
            R3x.fromExist = true;
            bAo8g({
                result: Jy4C
            }, e2x)
        }
    };
    var cup0x = function (EB2x, R3x, e2x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.beg = R3x.end;
        var iH5M = R3x.beg / R3x.file.size;
        iH5M = 0 + rl8d.MD5_DONE * iH5M;
        JK4O(iH5M, e2x);
        R3x.spark.append(EB2x.result);
        if (R3x.lastChunk) {
            cuq0x(R3x, e2x)
        } else {
            bAI8A(R3x, e2x)
        }
    };
    var cuo0x = function (o2x, R3x, e2x) {
        R3x.md5 = "";
        bnh5m(R3x, e2x)
    };
    var bAI8A = function (R3x, e2x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.end = R3x.beg + cuS0x;
        if (R3x.end >= R3x.file.size) {
            R3x.end = R3x.file.size;
            R3x.lastChunk = true
        }
        var EB2x = new FileReader;
        EB2x.onload = cup0x.g2x(this, EB2x, R3x, e2x);
        EB2x.onerror = cuo0x.g2x(this, EB2x, R3x, e2x);
        EB2x.readAsArrayBuffer(bzq8i.call(R3x.file, R3x.beg, R3x.end))
    };
    jE6y.gT5Y = function (e2x) {
        var cU4Y = e2x.file,
            ft5y = cU4Y.name || "",
            ey4C = ft5y.split(".").pop(),
            ED2x = cuO0x();
        e2x.taskId = ED2x;
        nY7R[ED2x] = {
            step: 0
        };
        JK4O(0, e2x);
        var R3x = nY7R[ED2x];
        R3x.id = ED2x;
        R3x.file = cU4Y;
        R3x.beg = 0;
        R3x.lastChunk = false;
        R3x.spark = new SparkMD5.ArrayBuffer;
        var cun0x = e2x.onerror || br3x;
        e2x.onerror = function () {
            if (!nY7R[ED2x]) {
                return
            }
            delete nY7R[ED2x];
            cun0x.apply(this, arguments)
        };
        vx0x.eU4Y("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bAI8A(R3x, e2x);
        return ED2x
    };
    jE6y.ki6c = function (C2x) {
        var R3x = nY7R[C2x];
        if (R3x) {
            if (R3x.step == 0) {
                delete nY7R[C2x]
            } else {
                R3x.step = -1;
                if (R3x.reqId) {
                    v2x.ki6c(R3x.reqId)
                }
                delete nY7R[C2x]
            }
        }
    };
    jE6y.bbv9m = function () {
        var yo1x = function (o2x, e2x) {
            (e2x.onload || br3x).call(this, o2x)
        };
        var Bd1x = function (o2x, e2x) {
            (e2x.onerror || br3x).call(this, o2x)
        };
        var bAS8K = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function (e2x) {
            var bbx0x = e2x.returnBody || bAS8K;
            if (k2x.lG7z(bbx0x)) {
                try {
                    JSON.stringify(bbx0x)
                } catch (e) {
                    bbx0x = bAS8K
                }
            }
            return v2x.bn3x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e2x.filename || "",
                    ext: e2x.ext || "",
                    type: e2x.type || jB6v.OTHER,
                    bucket: e2x.bucket || "",
                    local: e2x.local || false,
                    nos_product: e2x.nosProduct || 0,
                    return_body: bbx0x
                },
                onload: yo1x.ez4D(this, e2x),
                onerror: Bd1x.ez4D(this, e2x)
            })
        }
    }();
    jE6y.cus0x = function () {
        var cum0x = "//wanproxy.127.net/lbs";
        var yo1x = function (o2x, e2x) {
            if (o2x.lbs) {}
            var Vu7n = o2x.upload;
            if (!Vu7n || !Vu7n.length) {
                Bd1x(o2x, e2x)
            }(e2x.onload || br3x).call(this, Vu7n)
        };
        var Bd1x = function (o2x, e2x) {
            (e2x.onerror || br3x).call(this, o2x)
        };
        return function (e2x) {
            var li6c = e2x.bucket;
            return v2x.bn3x(cum0x, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: li6c
                },
                onload: yo1x.ez4D(this, e2x),
                onerror: Bd1x.ez4D(this, e2x)
            })
        }
    }();
    jE6y.bbB0x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        ca3x = c2x("nej.ut"),
        bC3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        jE6y = c2x("nm.x.nos"),
        E2x = c2x("nm.m"),
        m2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        b2x, K2x;
    var gg5l = a2x.ix5C('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w2x.bBe8W = NEJ.C();
    b2x = w2x.bBe8W.N2x(bC3x.eg4k);
    b2x.cf3x = function () {
        this.ce3x = gg5l
    };
    b2x.bW3x = function () {
        this.cg3x();
        this.bE3x = this.n2x;
        this.hG5L = a2x.H2x(this.n2x, "j-file")[0];
        h2x.s2x(this.hG5L, "change", this.rA9r.g2x(this))
    };
    b2x.bk3x = function (e2x) {
        e2x = e2x || {};
        this.bm3x(e2x);
        this.hG5L.accept = e2x.accept || "*";
        this.wP0x = e2x
    };
    b2x.bbC0x = function () {
        return a2x.lK7D(this.hG5L)
    };
    b2x.rA9r = function (d2x) {
        if (this.hG5L.value == "") return;
        var kY6S = this.hG5L.value.split("\\"),
            ft5y = kY6S.length > 0 ? kY6S[kY6S.length - 1] : kY6S[0],
            pa8S = (this.hG5L.files || [{}])[0];
        var cm3x = {
            files: this.hG5L.files,
            filename: ft5y,
            size: pa8S.size,
            cancelUpload: false
        };
        this.z2x("onchange", cm3x);
        if (cm3x.cancelUpload) {
            this.hG5L.value = "";
            return
        }
        if (cm3x.stopped) {
            return
        }
        this.Um7f()
    };
    b2x.Um7f = function () {
        if (this.hG5L.value == "") return;
        var kY6S = this.hG5L.value.split("\\"),
            ft5y = kY6S.length > 0 ? kY6S[kY6S.length - 1] : kY6S[0],
            ey4C = (ft5y.split(".") || []).pop(),
            pa8S = (this.hG5L.files || [{}])[0],
            ER2x = (pa8S.type || "").split("/").shift();
        if (pa8S.size > 100 * 1024 * 1024) {
            return this.nF7y("onerror", {
                code: -200
            })
        }
        this.z2x("onuploading", 0);
        this.bBC8u = jE6y.bbv9m(NEJ.X({
            onload: this.Ul7e.ez4D(this, ft5y),
            onerror: this.nF7y.g2x(this)
        }, this.wP0x, function (p2x) {
            return k2x.gG5L(p2x) || k2x.lG7z(p2x)
        }))
    };
    b2x.Ul7e = function (bS3x, ft5y) {
        var o2x = bS3x.result || {},
            li6c = o2x.bucket,
            mx7q = o2x.objectKey,
            eM4Q = o2x.token;
        if (!li6c || !mx7q || !eM4Q) {
            bS3x.code = -100;
            this.nF7y.call(this, bS3x);
            return
        }
        var pa8S = (this.hG5L.files || [{}])[0];
        var hO5T = a2x.dk4o(this.bE3x);
        hO5T[0].value = mx7q;
        hO5T[1].value = eM4Q;
        if (pa8S.type && pa8S.type.indexOf("audio") == 0) {
            hO5T[3].value = "audio/mpeg"
        } else {
            hO5T[3].value = pa8S.type || ""
        }
        this.bE3x.action = "//nos.netease.com/" + li6c;
        this.EV2x = o2x;
        this.qA8s = ft5y;
        this.z2x("onuploading", .2);
        this.gT5Y()
    };
    b2x.gT5Y = function () {
        this.bBC8u = v2x.gT5Y(this.bE3x, {
            type: "json",
            onload: this.uA9r.g2x(this),
            onerror: this.nF7y.g2x(this),
            onuploading: this.bbD0x.g2x(this)
        })
    };
    b2x.ki6c = function () {
        v2x.ki6c(this.bBC8u);
        this.bE3x.reset()
    };
    b2x.uA9r = function (bS3x) {
        var eM4Q = this.EV2x,
            ft5y = this.qA8s,
            pa8S = (this.hG5L.files || [{}])[0],
            kf6Z = {
                code: 200,
                fileName: ft5y,
                size: pa8S.size,
                bucket: eM4Q.bucket,
                docId: eM4Q.docId,
                objectKey: eM4Q.objectKey,
                url: "//nos.netease.com/" + eM4Q.bucket + "/" + eM4Q.objectKey
            };
        if (!bS3x) {
            bS3x = kf6Z
        }
        if (!bS3x.code || bS3x.code == 200) {
            this.z2x("onsuccess", NEJ.X(kf6Z, bS3x))
        } else {
            this.z2x("onerror", bS3x)
        }
        this.bE3x.reset()
    };
    b2x.nF7y = function (bS3x) {
        this.z2x("onerror", bS3x);
        this.bE3x.reset()
    };
    b2x.bbD0x = function (iH5M) {
        this.z2x("onuploading", .2 + iH5M.loaded / iH5M.total * .8)
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        ca3x = c2x("nej.ut"),
        bC3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        jE6y = c2x("nm.x.nos"),
        E2x = c2x("nm.m"),
        m2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        b2x, K2x;
    w2x.Ue7X = NEJ.C();
    b2x = w2x.Ue7X.N2x(ca3x.cI3x);
    b2x.bk3x = function (e2x) {
        e2x = e2x || {};
        this.bm3x(e2x);
        this.bbH0x = w2x.bBe8W.A2x(NEJ.X({
            parent: e2x.parent,
            onchange: this.rA9r.g2x(this),
            onuploading: this.z2x.g2x(this, "onuploading"),
            onsuccess: this.z2x.g2x(this, "onsuccess"),
            onerror: this.z2x.g2x(this, "onerror")
        }, e2x, function (p2x) {
            return k2x.gG5L(p2x) || k2x.lG7z(p2x)
        }));
        if (e2x.multiple && jE6y.bbB0x()) {
            a2x.gx5C(this.bbH0x.bbC0x(), "multiple", true)
        }
        this.wP0x = e2x
    };
    b2x.rA9r = function (e2x) {
        var ft5y = e2x.filename,
            ey4C = (ft5y.split(".") || []).pop();
        this.bCg8Y = (e2x.files || [{}])[0];
        this.z2x("onchange", e2x);
        if (jE6y.bbB0x() && !e2x.stopped && !e2x.cancelUpload) {
            this.Um7f(true);
            e2x.stopped = true
        }
    };
    b2x.bbC0x = function () {
        return this.bbH0x.bbC0x()
    };
    b2x.cui0x = function () {
        return this.bCg8Y
    };
    b2x.Um7f = function (fd4h, cU4Y) {
        cU4Y = cU4Y || this.bCg8Y;
        if (jE6y.bbB0x()) {
            this.bCk8c = jE6y.gT5Y(NEJ.X({
                file: cU4Y,
                local: this.wP0x.bucket && this.wP0x.bucket.length,
                onuploading: this.z2x.g2x(this, "onuploading"),
                onsuccess: this.z2x.g2x(this, "onsuccess"),
                onerror: this.z2x.g2x(this, "onerror")
            }, this.wP0x, function (p2x) {
                return k2x.gG5L(p2x) || k2x.lG7z(p2x)
            }));
            return this.bCk8c
        } else if (!fd4h) {
            this.bbH0x.Um7f()
        }
    };
    b2x.ki6c = function (C2x) {
        C2x = C2x || this.bCk8c;
        if (C2x) {
            jE6y.ki6c(C2x)
        }
        this.bbH0x.ki6c()
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        eo4s = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        fM5R = c2x("nej.n"),
        I2x = c2x("nej.ut"),
        bc3x = c2x("nej.ui"),
        w2x = c2x("nm.w"),
        m2x = c2x("nm.l"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        M2x = c2x("nm.x.f"),
        jE6y = c2x("nm.x.nos"),
        b2x, K2x, bnV5a = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        bod5i = 5 * 1024 * 1024,
        cFm2x = 80,
        bCp8h = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w2x.bCq8i = NEJ.C();
    b2x = w2x.bCq8i.N2x(I2x.vG0x);
    b2x.bgR1x = function () {
        return {
            x: this.Bz1x.clientWidth - this.n2x.offsetWidth,
            y: this.Bz1x.clientHeight - this.n2x.offsetHeight
        }
    };
    w2x.bom5r = NEJ.C();
    b2x = w2x.bom5r.N2x(bc3x.eg4k);
    b2x.cf3x = function () {
        this.ce3x = "m-xwgt-share-upload"
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.H2x(this.n2x, "j-flag");
        this.bbP0x = i2x.shift();
        this.Jp4t = i2x.shift();
        this.Td7W = i2x.shift();
        this.bCy9p = {
            onchange: this.bCB9s.ez4D(this, 0),
            onerror: this.eK4O.g2x(this),
            onsuccess: this.uJ0x.g2x(this),
            multiple: true,
            parent: this.Jp4t,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.boX5c = {
            onchange: this.bCB9s.ez4D(this, 1),
            onerror: this.eK4O.g2x(this),
            onsuccess: this.uJ0x.g2x(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cug0x = w2x.Ue7X.A2x(this.bCy9p)
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.boX5c.parent = e2x.button;
        this.Jj4n && this.Jj4n.T3x();
        this.Jj4n = w2x.Ue7X.A2x(this.boX5c);
        this.n2x.style.display = "none";
        if (!!this.fa4e) {
            for (var i = this.fa4e.length - 1; i >= 0; i--) {
                a2x.cJ4N(this.fa4e[i].element, false);
                if (this.fa4e[i].dragger) this.fa4e[i].dragger.T3x()
            }
        }
        this.fa4e = [];
        if (this.Bf1x) {
            clearTimeout(this.Bf1x)
        }
        this.bcc0x(0);
        this.Sv6p = 0;
        this.bX3x([
            [this.bCy9p.parent, "click", this.bCV9M.g2x(this)],
            [this.boX5c.parent, "click", this.bCV9M.g2x(this)]
        ])
    };
    b2x.bD3x = function () {
        h2x.hg5l(this.tB9s, "click");
        if (!!this.fa4e) {
            for (var i = this.fa4e.length - 1; i >= 0; i--) {
                a2x.cJ4N(this.fa4e[i].element, false);
                if (this.fa4e[i].dragger) this.fa4e[i].dragger.T3x()
            }
        }
        this.fa4e = [];
        if (this.Bf1x) {
            clearTimeout(this.Bf1x)
        }
        this.Bf1x = 0;
        this.Jj4n && this.Jj4n.T3x();
        delete this.Jj4n;
        this.bG3x()
    };
    b2x.bCV9M = function (d2x) {
        if (!jE6y.bbB0x() && this.fa4e.doing) {
            h2x.bh3x(d2x)
        }
    };
    b2x.bCB9s = function (e2x, r2x) {
        var mU7N = e2x.files,
            iL6F;
        e2x.stopped = true;
        if (!mU7N) {
            if (e2x.filename) {
                mU7N = [{
                    name: e2x.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = mU7N.length; i < len; i++) {
            if (!bCp8h.test(mU7N[i].name)) {
                this.bpg5l({
                    path: mU7N[i].name,
                    index: r2x,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (mU7N[i].size > bod5i) {
                this.bph5m(-3);
                this.bpg5l({
                    path: mU7N[i].name,
                    index: r2x,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpg5l({
                    path: mU7N[i].name,
                    file: mU7N[i],
                    index: r2x,
                    status: 0
                })
            }
        }
    };
    b2x.bpg5l = function (tP9G) {
        if (this.fa4e.length >= 9) {
            this.bph5m(-10, 3e3, this.bDi9Z.g2x(this));
            return
        }
        this.cuf0x(tP9G);
        this.fa4e.push(tP9G);
        if (!!this.fa4e.length) {
            this.n2x.style.display = ""
        }
        if (this.fa4e.length >= 9) {
            this.Jp4t.style.display = "none"
        } else {
            this.Jp4t.style.display = ""
        }
        this.Jf4j()
    };
    b2x.Jf4j = function () {
        var bpk5p = -1,
            bDp9g = 0;
        for (var i = 0, l = this.fa4e.length; i < l; i++) {
            if (this.fa4e[i].status == 1) {
                return
            }
            if (this.fa4e[i].status == 0 && bpk5p < 0) {
                bpk5p = i
            }
            if (this.fa4e[i].status == 2 || this.fa4e[i].status < 0) {
                bDp9g++
            }
        }
        var p2x = this.fa4e[bpk5p];
        if (p2x) {
            (p2x.index == 0 ? this.cug0x : this.Jj4n).Um7f(false, p2x.file);
            p2x.status = 1;
            this.fa4e.doing = p2x;
            this.z2x("onstartupload", {})
        } else if (bDp9g == this.fa4e.length) {
            this.z2x("onfinishupload", {})
        }
    };
    b2x.bpq5v = function () {
        return this.fa4e.doing || {}
    };
    b2x.eK4O = function (d2x) {
        var tP9G = this.bpq5v();
        tP9G.status = -4;
        tP9G.fail = "上传<br>失败";
        this.bDt9k(tP9G);
        this.fa4e.doing = null;
        this.Jf4j()
    };
    b2x.uJ0x = function (d2x) {
        var tP9G = this.bpq5v(),
            dP4T = d2x.fileName.match(bCp8h);
        tP9G.picUrl = d2x.url;
        v2x.bn3x("/upload/event/img/v1", {
            query: {
                imgid: d2x.docId,
                format: dP4T[1]
            },
            type: "json",
            onload: this.bDv9m.g2x(this),
            onerror: this.bDv9m.g2x(this)
        })
    };
    b2x.bDv9m = function (d2x) {
        if (d2x && d2x.code == 200 && d2x.picInfo) {
            var tP9G = this.bpq5v();
            tP9G.status = 2;
            var bz3x = NEJ.X({}, d2x.picInfo);
            bz3x.originId = bz3x.originIdStr;
            bz3x.squareId = bz3x.squareIdStr;
            bz3x.rectangleId = bz3x.rectangleIdStr;
            bz3x.pcSquareId = bz3x.pcSquareIdStr;
            bz3x.pcRectangleId = bz3x.pcRectangleIdStr;
            bz3x.originJpgId = bz3x.originJpgIdStr || bz3x.originJpgId;
            tP9G.picInfo = bz3x;
            this.bDt9k(tP9G);
            this.fa4e.doing = null;
            this.Jf4j()
        } else {
            this.eK4O(d2x)
        }
    };
    b2x.bph5m = function (r2x, lc6W, eL4P) {
        if (this.Sv6p < r2x) {
            return
        }
        if (this.Bf1x) {
            clearTimeout(this.Bf1x);
            this.Bf1x = 0
        }
        if (lc6W) {
            this.Td7W.innerText = bnV5a[r2x * 1];
            this.Sv6p = r2x;
            this.Bf1x = setTimeout(this.bcc0x.g2x(this, r2x, eL4P), lc6W)
        } else {
            this.Td7W.innerText = bnV5a[r2x];
            this.Sv6p = r2x
        }
        this.Td7W.style.display = ""
    };
    b2x.bcc0x = function (r2x, eL4P) {
        if (r2x && this.Sv6p !== r2x) {
            return
        }
        this.Sv6p = 0;
        this.Td7W.innerText = bnV5a[0];
        this.Td7W.style.display = "none";
        eL4P && eL4P()
    };
    b2x.cuf0x = function (cU4Y) {
        var j2x = {};
        if (cU4Y.fail) {
            j2x.fail = cU4Y.fail
        }
        var dR4V = a2x.bZ3x("m-xwgt-share-upload-preview", j2x);
        cU4Y.element = a2x.nK7D(dR4V);
        h2x.s2x(a2x.H2x(cU4Y.element, "del")[0], "mousedown", this.cue0x.g2x(this, cU4Y), false);
        this.bbP0x.insertBefore(cU4Y.element, this.bbP0x.lastElementChild);
        cU4Y.dragger = w2x.bCq8i.A2x({
            view: this.bbP0x.parentNode,
            body: cU4Y.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.PK6E.g2x(this, cU4Y),
            onchange: this.cud0x.g2x(this, cU4Y),
            ondragend: this.bho3x.g2x(this, cU4Y)
        })
    };
    b2x.bDt9k = function (cU4Y) {
        if (!cU4Y || !cU4Y.element) {
            return false
        }
        var j2x = {};
        if (cU4Y.fail) {
            j2x.fail = cU4Y.fail
        } else {
            j2x.url = cU4Y.picUrl
        }
        a2x.y2x(cU4Y.element, "z-fail");
        cU4Y.element.firstChild.outerHTML = a2x.bZ3x("m-xwgt-share-upload-preview-img", j2x)
    };
    b2x.PK6E = function (p2x, kW6Q) {
        a2x.y2x(p2x.element, "z-sel")
    };
    b2x.cud0x = function (p2x, kW6Q) {
        var cFn2x, gs5x = this.fa4e.length - 1,
            nV7O;
        for (var i = gs5x; i >= 0; i--) {
            a2x.x2x(this.fa4e[i].element, "z-jump");
            if (this.fa4e[i] == p2x) {
                nV7O = i
            } else {
                a2x.fb4f(this.fa4e[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var RO6I = {
            x: 46 + 92 * (nV7O % 5) + kW6Q.left,
            y: 46 + 92 * (nV7O / 5 >> 0) + kW6Q.top
        };
        var bpt5y = RO6I.x / 92 >> 0,
            bpu5z = RO6I.y / 92 >> 0,
            zN1x = Math.max(0, Math.min(gs5x, bpu5z * 5 + bpt5y));
        if (zN1x == nV7O) {
            return
        }
        var cua0x = zN1x < nV7O;
        for (var i = Math.min(zN1x, nV7O); i <= Math.max(zN1x, nV7O); i++) {
            if (i !== nV7O) {
                var bDK9B = i % 5;
                if (cua0x) {
                    if (bDK9B == 4) {
                        a2x.fb4f(this.fa4e[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a2x.fb4f(this.fa4e[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDK9B == 0) {
                        a2x.fb4f(this.fa4e[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a2x.fb4f(this.fa4e[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b2x.bho3x = function (p2x, kW6Q) {
        var cFo2x, gs5x = this.fa4e.length - 1,
            nV7O;
        for (var i = gs5x; i >= 0; i--) {
            a2x.fb4f(this.fa4e[i].element, {
                left: "",
                top: ""
            });
            if (this.fa4e[i] == p2x) {
                nV7O = i
            }
        }
        a2x.x2x(p2x.element, "z-sel");
        var RO6I = {
            x: 46 + 92 * (nV7O % 5) + kW6Q.left,
            y: 46 + 92 * (nV7O / 5 >> 0) + kW6Q.top
        };
        var bpt5y = RO6I.x / 92 >> 0,
            bpu5z = RO6I.y / 92 >> 0,
            zN1x = Math.max(0, Math.min(gs5x, bpu5z * 5 + bpt5y));
        if (zN1x == nV7O) {
            return
        }
        this.bbP0x.insertBefore(p2x.element, (this.fa4e[zN1x + (zN1x > nV7O ? 1 : 0)] || {}).element || this.Jp4t);
        this.fa4e.splice(nV7O, 1);
        this.fa4e.splice(zN1x, 0, p2x)
    };
    b2x.cue0x = function (p2x, d2x) {
        a2x.cJ4N(p2x.element, false);
        if (p2x.dragger) p2x.dragger.T3x();
        delete p2x.dragger;
        var r2x = -1;
        for (var i = this.fa4e.length - 1; i >= 0; i--) {
            if (this.fa4e[i] == p2x) {
                r2x = i;
                break
            }
        }
        this.fa4e.splice(r2x, r2x >= 0 ? 1 : 0);
        delete p2x;
        if (this.fa4e.length >= 9) {
            this.Jp4t.style.display = "none"
        } else {
            this.Jp4t.style.display = ""
        }
        if (!this.fa4e.length) {
            this.n2x.style.display = "none";
            this.bcc0x(0)
        } else {
            this.bDi9Z()
        }
        if (this.fa4e.doing == p2x) {
            this.fa4e.doing = null
        }
        this.Jf4j()
    };
    b2x.bDi9Z = function () {
        var bDM9D = false;
        for (var i = 0, len = this.fa4e.length; i < len; i++) {
            if (this.fa4e[i].status == -3) {
                bDM9D = true
            }
        }
        if (bDM9D) {
            this.bph5m(-3)
        } else {
            this.bcc0x(-3)
        }
    };
    b2x.Rw6q = function () {
        var dE4I = [];
        for (var i = this.fa4e.length - 1; i >= 0; i--) {
            if (this.fa4e[i].status == 2) {
                dE4I.unshift(this.fa4e[i].picInfo)
            }
        }
        return dE4I
    };
    I2x.fJ5O.A2x({
        element: w2x.bom5r,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        fy5D = NEJ.R,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bc3x = c2x("nej.ui"),
        O2x = c2x("nej.ut"),
        b2x, K2x;
    if (!!O2x.nh7a) return;
    O2x.nh7a = NEJ.C();
    b2x = O2x.nh7a.N2x(O2x.Zd9U);
    K2x = O2x.nh7a.ct3x;
    b2x.bk3x = function (e2x) {
        this.ctX0x(e2x.more);
        this.FG3x = a2x.B2x(e2x.sbody);
        this.ctV0x = e2x.fixScrollPosition;
        this.bX3x([
            [this.FG3x, "scroll", this.ctT0x.g2x(this)]
        ]);
        var dp4t = e2x.delta;
        if (dp4t == null) dp4t = 30;
        this.Rk6e = Math.max(0, dp4t);
        var cH3x = parseInt(e2x.count) || 0;
        this.jA6u = Math.max(0, cH3x);
        var gV5a = parseInt(e2x.number) || 0;
        if (gV5a > 1 && gV5a <= cH3x) {
            this.Cb2x = gV5a
        }
        this.bm3x(e2x)
    };
    b2x.bD3x = function () {
        this.bG3x();
        delete this.BA1x;
        delete this.FG3x;
        delete this.tN9E;
        delete this.bcz0x
    };
    b2x.Be1x = function (bi3x, bq3x) {
        var bM3x = this.yd0x + (this.jA6u - 1) * this.oK8C,
            fZ5e = this.jA6u * this.oK8C;
        return K2x.Be1x.call(this, bM3x, bi3x, fZ5e, bq3x)
    };
    b2x.ctX0x = function (bcA0x) {
        this.BA1x = a2x.B2x(bcA0x);
        this.bX3x([
            [this.BA1x, "click", this.pd8V.g2x(this)]
        ])
    };
    b2x.bqs6m = function (F2x) {
        F2x = F2x || {};
        if (this.tN9E || !F2x) return;
        if (!F2x.scrollHeight) F2x = a2x.ov8n();
        var bi3x = a2x.hN5S(this.im5r, this.ctV0x ? F2x : null),
            dp4t = bi3x.y + this.im5r.offsetHeight - F2x.scrollTop - F2x.clientHeight,
            bqt6n = F2x.scrollHeight <= F2x.clientHeight;
        if (dp4t <= this.Rk6e || bqt6n && !this.tN9E) {
            this.pd8V()
        }
    };
    b2x.ctT0x = function (d2x) {
        if (this.tN9E) return;
        this.bqs6m(h2x.W3x(d2x))
    };
    b2x.Bb1x = function (d2x) {
        K2x.Bb1x.apply(this, arguments);
        if (!d2x.stopped) {
            this.Qa6U();
            var bi3x = 0;
            if (d2x.index > 1) {
                bi3x = this.yd0x + ((d2x.index - 1) * this.jA6u - 1) * this.oK8C
            }
            this.hS5X = bi3x;
            this.pd8V()
        }
    };
    b2x.bQg2x = function (e2x) {
        if (!!this.Cb2x) {
            var dp4t = e2x.offset > 0 ? this.oK8C : this.yd0x,
                fZ5e = dp4t + this.oK8C * (this.Cb2x - 1);
            this.hS5X = e2x.offset + fZ5e;
            e2x.data.limit = fZ5e;
            e2x.limit = fZ5e;
            delete this.Cb2x
        }
        return e2x
    };
    b2x.bha1x = function (e2x) {
        delete this.bcz0x;
        K2x.bha1x.apply(this, arguments);
        this.bEk9b()
    };
    b2x.bhl3x = function (d2x) {
        if (d2x.key != this.jq6k.key) return;
        switch (d2x.action) {
            case "refresh":
            case "append":
                delete this.bcz0x;
                break
        }
        K2x.bhl3x.apply(this, arguments)
    };
    b2x.Pv5A = function () {
        this.zO1x("onbeforelistload", "列表加载中...");
        a2x.ba3x(this.BA1x, "display", "none")
    };
    b2x.bim4q = function (i2x, bi3x, fZ5e) {
        var bq3x = i2x.length,
            bqC6w = i2x.loaded ? bi3x + fZ5e >= bq3x : bi3x + fZ5e > bq3x;
        this.hS5X = Math.min(this.hS5X, bq3x);
        a2x.ba3x(this.BA1x, "display", bqC6w ? "none" : "");
        if (bqC6w) this.tN9E = !0;
        if (this.jA6u > 0) {
            var bz3x = this.Be1x(bi3x, i2x.length);
            if (this.bQP3x(bz3x.index, bz3x.total)) return !0;
            var dp4t = this.yd0x - this.oK8C,
                gV5a = this.jA6u * this.oK8C;
            this.tN9E = (bi3x + fZ5e - dp4t) % gV5a == 0 || bqC6w;
            a2x.ba3x(this.BA1x, "display", this.tN9E ? "none" : "");
            this.bhI3x(this.tN9E && bz3x.total > 1 ? "" : "none")
        }
    };
    b2x.bic4g = function () {
        this.hS5X = 0;
        this.tN9E = !0;
        this.zO1x("onemptylist", "没有列表数据！")
    };
    b2x.Pm5r = function (dR4V, kW6Q) {
        this.im5r.insertAdjacentHTML(kW6Q || "beforeEnd", dR4V)
    };
    b2x.Pl5q = function (hr5w) {
        this.fK5P = this.fK5P || [];
        if (k2x.eJ4N(hr5w)) {
            fy5D.push.apply(this.fK5P, hr5w)
        } else {
            this.fK5P.push(hr5w)
        }
    };
    b2x.Zv9m = function (d2x) {
        a2x.mn7g(this.cu3x);
        this.OU5Z(d2x, "onafteradd");
        var fd4h = d2x.flag;
        if (d2x.stopped || !fd4h) return;
        if (this.jA6u > 0) {
            this.bhT4X();
            return
        }
        this.hS5X += 1;
        fd4h == -1 ? this.bjt4x(d2x.data) : this.bRE3x(d2x.data)
    };
    b2x.Zw9n = function (d2x) {
        this.OU5Z(d2x, "onafterdelete");
        if (d2x.stopped) return;
        if (this.jA6u > 0) {
            this.bhT4X();
            return
        }
        var C2x = d2x.data[this.ff4j.pkey];
        if (!!this.fK5P) {
            var p2x = a2x.bCS9J(C2x),
                r2x = k2x.dj4n(this.fK5P, p2x);
            if (r2x >= 0) {
                this.fK5P.splice(r2x, 1);
                this.hS5X -= 1
            }
            if (!!p2x) p2x.T3x()
        } else {
            var f2x = a2x.B2x(this.bOh1x(C2x));
            if (!!f2x) this.hS5X -= 1;
            a2x.cJ4N(f2x)
        }
        if (this.hS5X <= 0) this.pd8V()
    };
    b2x.bjp4t = function (bi3x, fZ5e) {
        if (bi3x != this.hS5X) return;
        if (this.Ya8S()) {
            this.tN9E = !1;
            this.bEk9b()
        }
    };
    b2x.bjq4u = function (bi3x, fZ5e) {
        if (bi3x != 0) return;
        var Kc4g = this.S3x.hL5Q(this.jq6k.key);
        for (var i = fZ5e - 1; i >= 0; i--) {
            this.bjt4x(Kc4g[i])
        }
    };
    b2x.bEk9b = function () {
        var F2x = this.FG3x;
        if (!F2x || this.tN9E) return;
        this.bqs6m(this.FG3x)
    };
    b2x.gH5M = function () {
        delete this.tN9E;
        K2x.gH5M.apply(this, arguments)
    };
    b2x.pd8V = function () {
        if (!!this.bcz0x) return;
        this.bcz0x = !0;
        var bi3x = this.hS5X;
        this.hS5X += bi3x == 0 ? this.yd0x : this.oK8C;
        this.bQe2x(bi3x)
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        cX4b = c2x("nej.x"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.FS3x) return;
    O2x.FS3x = NEJ.C();
    b2x = O2x.FS3x.N2x(O2x.cI3x);
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.jl6f = e2x.event || "click";
        this.kJ6D = e2x.selected || "js-selected";
        this.nL7E = e2x.disabled || "js-disabled";
        this.bEq9h = !!e2x.inverse;
        this.ctS0x(e2x.list);
        this.Qu6o(e2x.index || 0)
    };
    b2x.bD3x = function () {
        var bVe4i = function (f2x) {
            this.bqZ6T(f2x, !1)
        };
        return function () {
            this.bG3x();
            k2x.bd3x(this.bU3x, bVe4i, this);
            delete this.bU3x;
            delete this.jl6f;
            delete this.co3x;
            delete this.nL7E;
            delete this.kJ6D;
            delete this.bEq9h
        }
    }();
    b2x.ctS0x = function () {
        var bfa0x = function (p2x) {
            if (!p2x) return;
            this.bU3x.push(p2x);
            var r2x = this.bU3x.length - 1,
                du4y = this.brq6k[r2x];
            if (!du4y) {
                du4y = this.Qu6o.g2x(this, r2x);
                this.brq6k[r2x] = du4y
            }
            this.bX3x([
                [p2x, this.jl6f, du4y]
            ])
        };
        return function (i2x) {
            this.bU3x = [];
            if (!this.brq6k) this.brq6k = [];
            k2x.bd3x(i2x, bfa0x, this)
        }
    }();
    b2x.bqZ6T = function (F2x, ctO0x) {
        !!ctO0x && !this.bEq9h ? a2x.y2x(F2x, this.kJ6D) : a2x.x2x(F2x, this.kJ6D)
    };
    b2x.Qu6o = function (r2x, PG6A, j2x) {
        var F2x = this.bU3x[r2x];
        if (PG6A != !0 && (r2x == this.co3x || !F2x || a2x.bF3x(F2x, this.nL7E))) {
            h2x.cr3x(arguments[1]);
            return this
        }
        var d2x = {
            index: r2x,
            last: this.co3x,
            list: this.lF7y(),
            data: j2x || a2x.t2x(F2x, "value")
        };
        this.co3x = r2x;
        F2x = this.bU3x[d2x.last];
        if (!!F2x) this.bqZ6T(F2x, !1);
        F2x = this.bU3x[this.co3x];
        this.bqZ6T(F2x, !0);
        this.z2x("onchange", d2x);
        if (!d2x.nostop) h2x.cr3x(arguments[1]);
        return this
    };
    b2x.tY9P = function () {
        return this.co3x
    };
    b2x.lF7y = function () {
        return this.bU3x
    };
    a2x.ctN0x = cX4b.ctN0x = function (bI3x, e2x) {
        var C2x = a2x.lK7D(bI3x);
        if (!C2x) return null;
        if (!O2x.bbS0x(C2x, O2x.FS3x)) {
            e2x = e2x || {};
            e2x.list = !e2x.clazz ? a2x.dk4o(C2x) : a2x.H2x(C2x, e2x.clazz);
            delete e2x.clazz
        }
        return O2x.bbS0x(C2x, O2x.FS3x, e2x || bb3x)
    };
    cX4b.isChange = !0
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x");
    var SETTING_KEY = "player-setting";
    var nc7V = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nc7V = v2x.tm9d(SETTING_KEY) || nc7V;
    l2x.bsa6U = function () {
        return nc7V
    };
    l2x.Gb3x = function (Gc3x) {
        if (Gc3x) {
            nc7V = Gc3x;
            v2x.um9d(SETTING_KEY, Gc3x)
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        hj5o = c2x("nm.w.player.log");
    var kD6x = q2x.hP5U.A2x();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var hi5n = function (u2x, bH3x, qF8x) {
        var cG3x = l2x.fg4k("{0} {1} {2}", k2x.hW5b(new Date, "yyyy-MM-dd HH:mm:ss"), u2x, bH3x);
        if (qF8x == LogLevel.ERROR) {
            kD6x.eU4Y("playerror", {
                message: bH3x
            })
        }
        if (qF8x >= LogLevel.INFO) {
            kD6x.bEm9d(cG3x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cG3x)
        }
    };
    hj5o.ch3x = function () {
        hi5n("PLAY_ERROR", l2x.fg4k.apply(null, arguments), LogLevel.ERROR)
    };
    hj5o.pV8N = function () {
        hi5n("PLAY_INFO", l2x.fg4k.apply(null, arguments), LogLevel.INFO)
    };
    hj5o.cFq2x = function () {
        hi5n("PLAY_DEBUG", l2x.fg4k.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        w2x = c2x("nm.w"),
        eL4P = c2x("flash.cb");
    var ed4h = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Gh3x, bdl0x, vc0x;
    w2x.ctK0x = function (u2x, cN4R) {
        if (u2x != "flash") {
            if (!Gh3x) {
                Gh3x = a2x.dh4l("audio");
                k2x.bd3x(ed4h, function (u2x) {
                    h2x.s2x(Gh3x, u2x, onMediaCallBack)
                })
            }
            if (Gh3x && Gh3x.canPlayType && Gh3x.canPlayType("audio/mpeg")) {
                cN4R(new MediaWrap("audio"));
                return
            }
        }
        if (!bdl0x) {
            a2x.rV9M({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function (hM5R) {
                    bdl0x = hM5R;
                    k2x.bd3x(ed4h, function (u2x) {
                        eL4P[u2x] = onMediaCallBack;
                        bdl0x.addCallback(u2x, "flash.cb." + u2x)
                    });
                    cN4R(new MediaWrap("flash"))
                }.g2x(this)
            })
        } else {
            cN4R(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Gl3x) {
        var gR5W;
        I2x.fJ5O.A2x({
            element: this,
            event: ed4h.concat(["interrupt", "recover"])
        });
        gR5W = Gl3x == "audio" ? Gh3x : bdl0x;
        this.type = Gl3x;
        this.destroy = function () {};
        this.setSrc = function (Y3x) {
            if (vc0x != this) {
                var gs5x = vc0x;
                if (gs5x) {
                    gs5x.interrupt()
                }
                vc0x = this
            }
            if (Gl3x == "flash") {
                gR5W.setSrc(Y3x)
            } else {
                gR5W.src = Y3x
            }
        };
        this.play = function () {
            if (vc0x != this) {
                var gs5x = vc0x;
                if (gs5x) {
                    gs5x.interrupt();
                    vc0x = this;
                    this.recover()
                } else {
                    vc0x = this
                }
            }
            if (Gl3x == "flash") {
                gR5W.as_play()
            } else {
                gR5W.play()
            }
        };
        this.pause = function () {
            if (vc0x != this) return;
            if (Gl3x == "flash") {
                gR5W.as_pause()
            } else {
                gR5W.pause()
            }
        };
        this.load = function () {
            if (vc0x != this) return;
            if (Gl3x == "flash") {
                gR5W.as_load()
            } else {
                gR5W.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function () {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function () {
            return gR5W
        };
        var pe8W = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k2x.bd3x(pe8W, function (V3x) {
            var Ou5z = "get" + V3x,
                Ot5y = "set" + V3x;
            if (Gl3x == "flash") {
                if (!this[Ou5z]) {
                    this[Ou5z] = function () {
                        return gR5W[Ou5z]()
                    }
                }
                if (!this[Ot5y]) {
                    this[Ot5y] = function (value) {
                        gR5W[Ot5y](value)
                    }
                }
            } else {
                var bFi9Z = V3x.slice(0, 1).toLowerCase() + V3x.slice(1);
                if (!this[Ou5z]) {
                    this[Ou5z] = function () {
                        return gR5W[bFi9Z]
                    }
                }
                if (!this[Ot5y]) {
                    this[Ot5y] = function (value) {
                        gR5W[bFi9Z] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d2x) {
        if (vc0x) {
            h2x.z2x(vc0x, d2x.type, d2x)
        }
    }
})();
(function () {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        dw4A = c2x("nej.p"),
        w2x = c2x("nm.w"),
        l2x = c2x("nm.x"),
        hj5o = c2x("nm.w.player.log"),
        b2x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bFk9b = false;
    w2x.fO5T = NEJ.C();
    b2x = w2x.fO5T.N2x(I2x.cI3x);
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.cM4Q = {};
        this.bdt0x(e2x.media);
        v2x.bn3x("/api/cdns", {
            type: "json",
            onload: function (d2x) {
                if (d2x.code) {
                    this.qK8C = d2x.data
                }
            }.g2x(this)
        })
    };
    b2x.bD3x = function () {
        this.bG3x();
        delete this.cM4Q
    };
    b2x.bdu0x = function (bj3x) {
        if (!bj3x) return;
        var wx0x = this.cM4Q.volume;
        if (this.dT4X) {
            this.dT4X.pause()
        }
        this.cM4Q = {
            time: 0,
            id: bj3x.id,
            duration: bj3x.duration / 1e3,
            play: this.cM4Q.play,
            stalledRetryCount: 0
        };
        if (wx0x != null) {
            this.cM4Q.volume = wx0x
        }
        this.cM4Q.loadState = LoadState.LOAD_START;
        this.bFw9n(bj3x.id);
        hj5o.pV8N("play song id: {0}", bj3x.id)
    };
    b2x.en4r = function () {
        if (this.cM4Q.error) {
            this.cM4Q.error = null;
            if (this.cM4Q.error == ErrorType.INFO_GET_ERR || this.bFy9p()) {
                this.bFz9q()
            } else {
                this.Oj5o()
            }
        } else {
            if (this.dT4X) {
                this.dT4X.play()
            }
        }
        this.cM4Q.play = true;
        this.qb8T("play")
    };
    b2x.fG5L = function () {
        if (this.dT4X) {
            this.dT4X.pause()
        }
        this.cM4Q.play = false;
        this.qb8T("pause")
    };
    b2x.pi8a = function (bA3x) {
        if (this.dT4X) {
            this.dT4X.setCurrentTime(bA3x)
        }
        this.cM4Q.time = bA3x;
        hj5o.pV8N("seek to: {0}", bA3x)
    };
    b2x.bsQ6K = function () {
        return this.cM4Q.duration || 0
    };
    b2x.uK0x = function () {
        return !!this.cM4Q.play
    };
    b2x.mE7x = function (Oe5j) {
        this.cM4Q.volume = Oe5j;
        if (this.dT4X) {
            this.dT4X.setVolume(Oe5j)
        }
    };
    b2x.bdv0x = function () {
        return this.cM4Q.time
    };
    b2x.bdt0x = function (u2x) {
        w2x.ctK0x(u2x, function (gR5W) {
            this.dT4X = gR5W;
            hj5o.pV8N("media loaded: {0}", gR5W.type);
            this.bX3x([
                [this.dT4X, "loadedmetadata", this.ctI0x.g2x(this)],
                [this.dT4X, "ended", this.ctH0x.g2x(this)],
                [this.dT4X, "waiting", this.zf1x.g2x(this)],
                [this.dT4X, "play", this.uv9m.g2x(this)],
                [this.dT4X, "pause", this.btf6Z.g2x(this)],
                [this.dT4X, "playing", this.NM5R.g2x(this)],
                [this.dT4X, "timeupdate", this.ctG0x.g2x(this)],
                [this.dT4X, "progress", this.tq9h.g2x(this)],
                [this.dT4X, "stalled", this.btV6P.g2x(this)],
                [this.dT4X, "interrupt", this.fG5L.g2x(this)],
                [this.dT4X, "recover", this.ctE0x.g2x(this)],
                [this.dT4X, "error", this.eK4O.g2x(this)]
            ]);
            if (this.cM4Q) {
                if (this.cM4Q.loadState == LoadState.LOAD_START || this.cM4Q.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bua6U();
                    if (this.cM4Q.volume != null) {
                        this.dT4X.setVolume(this.cM4Q.volume)
                    }
                }
            }
        }.g2x(this))
    };
    b2x.ctD0x = function (u2x) {
        this.Jl4p();
        this.dT4X.destroy();
        this.cM4Q.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zf1x();
        this.bdt0x(u2x);
        hj5o.pV8N("switch media")
    };
    b2x.cFr2x = function () {
        return this.dT4X
    };
    b2x.bFw9n = function () {
        this.zf1x();
        v2x.bn3x("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cM4Q.id]),
                br: DEFAULT_BR
            },
            onload: this.bGc9T.g2x(this),
            onerror: this.bGc9T.g2x(this)
        })
    };
    b2x.bGc9T = function (d2x) {
        if (d2x.code == 200 && d2x.data && d2x.data.length) {
            var bz3x = d2x.data[0];
            if (!bz3x.url) {
                this.cM4Q.error = ErrorType.INFO_GET_ERR;
                this.qb8T("error", {
                    code: this.cM4Q.error
                });
                return
            }
            this.cM4Q.playUrl = bz3x.url;
            this.cM4Q.expireTime = (new Date).getTime() + bz3x.expi * 1e3;
            this.bua6U()
        } else {
            this.cM4Q.error = ErrorType.INFO_GET_ERR;
            this.qb8T("error", {
                code: this.cM4Q.error
            });
            hj5o.ch3x("info load error")
        }
    };
    b2x.bua6U = function () {
        if (this.dT4X) {
            var Y3x = this.cM4Q.playUrl;
            if (this.cM4Q.time > 0 && (this.cM4Q.loadState == LoadState.IN_RE_GET_URL || this.cM4Q.loadState == LoadState.IN_RE_GET_URL)) {
                Y3x += "#t=" + this.cM4Q.time
            }
            this.dT4X.setSrc(Y3x);
            hj5o.pV8N("load mp3: {0},loadState: {1}.", Y3x, this.cM4Q.loadState)
        }
    };
    b2x.bGf9W = function () {
        if (/#t=(\d+)$/.test(this.dT4X.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b2x.Oj5o = function () {
        var bA3x = parseInt(this.cM4Q.time) || 0,
            ctA0x = this.bGf9W();
        if (bA3x === ctA0x) {
            this.dT4X.load()
        } else {
            this.dT4X.setSrc(this.cM4Q.playUrl + "#t=" + bA3x)
        }
        this.cM4Q.loadState = LoadState.IN_RELOAD;
        this.zf1x();
        hj5o.pV8N("reload from: {0}", bA3x)
    };
    b2x.bFz9q = function () {
        this.cM4Q.loadState = LoadState.IN_RE_GET_URL;
        this.bFw9n()
    };
    b2x.bGj9a = function () {
        var sT9K = getHost(this.cM4Q.playUrl);
        if (sT9K) {
            for (var i = 0; i < this.qK8C.length; i++) {
                var ip5u = this.qK8C[i] || [],
                    r2x = ip5u.indexOf(sT9K);
                if (r2x >= 0 && ip5u.length > 1) {
                    return ip5u[(r2x + 1) % ip5u.length]
                }
            }
        }

        function getHost(Y3x) {
            if (CDN_HOST_REG.test(Y3x)) return RegExp.$1
        }
    };
    b2x.ctz9q = function () {
        this.cM4Q.playUrl = this.cM4Q.playUrl.replace(CDN_HOST_REG, this.bGj9a());
        this.cM4Q.loadState = LoadState.IN_SWITCH_CDN;
        this.bua6U();
        this.zf1x()
    };
    b2x.ctI0x = function () {
        if (this.cM4Q.loadState == LoadState.LOAD_START) {
            this.cM4Q.loadState = LoadState.LOADED_META;
            if (this.dT4X.type == "audio") {
                this.cM4Q.duration = this.dT4X.getDuration()
            }
            this.qb8T("loadedmeta", {
                duration: this.cM4Q.duration
            })
        } else {
            this.cM4Q.loadState = LoadState.LOADED_META
        }
        if (this.cM4Q.play) {
            this.dT4X.play()
        } else {
            this.dT4X.pause()
        }
        if (this.cM4Q.time && parseInt(this.cM4Q.time) != this.bGf9W()) {
            this.dT4X.setCurrentTime(this.cM4Q.time)
        }
        this.Iu3x();
        this.NM5R();
        bFk9b = true;
        hj5o.pV8N("loaded meta")
    };
    b2x.ctH0x = function () {
        this.cM4Q.ended = true;
        this.qb8T("ended")
    };
    b2x.zf1x = function () {
        if (!this.cM4Q.waiting) {
            this.cM4Q.waiting = true;
            this.cM4Q.waitTimestamp = +(new Date);
            this.qb8T("waiting")
        }
    };
    b2x.NM5R = function () {
        this.cM4Q.waiting = false;
        this.cM4Q.waitTimestamp = 0;
        this.qb8T("playing")
    };
    b2x.uv9m = function () {
        this.qb8T("play")
    };
    b2x.btf6Z = function () {
        this.qb8T("pause")
    };
    b2x.ctG0x = function () {
        if (this.cM4Q.loadState != LoadState.LOADED_META) return;
        var bA3x = this.dT4X.getCurrentTime();
        if (this.cM4Q.waiting && bA3x > this.cM4Q.time) {
            this.NM5R()
        }
        this.cM4Q.time = bA3x;
        this.qb8T("timeupdate", {
            time: this.cM4Q.time,
            duration: this.cM4Q.duration
        })
    };
    b2x.tq9h = function (d2x) {
        if (this.cM4Q.loadState != LoadState.LOADED_META) return;
        var o2x = {};
        if (d2x.data) {
            o2x.total = d2x.data.total;
            o2x.loaded = d2x.data.loaded
        } else {
            var xS0x = this.dT4X.getBuffered(),
                bA3x = this.dT4X.getCurrentTime(),
                oA8s = 0;
            for (var i = 0; i < xS0x.length; i++) {
                if (bA3x > xS0x.start(i) && bA3x < xS0x.end(i)) {
                    oA8s = xS0x.end(i);
                    break
                }
            }
            o2x.total = this.cM4Q.duration;
            o2x.loaded = Math.min(oA8s, o2x.total)
        }
        this.qb8T("progress", o2x)
    };
    b2x.Iu3x = function () {
        if (this.cM4Q.retry) {
            clearTimeout(this.cM4Q.retry.tid);
            this.cM4Q.retry = null
        }
    };
    b2x.eK4O = function () {
        var cb3x = this.dT4X.getError();
        hj5o.ch3x("media error code: {0}, netState: {1}", cb3x.code, this.dT4X.getNetworkState());
        if (cb3x.code == MediaError.MEDIA_ERR_NETWORK || cb3x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gc3x = l2x.bsa6U();
            if (!this.cM4Q.retry) {
                this.cM4Q.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cM4Q.retry.tid)
            }
            if (this.cM4Q.retry.level == RetryLevel.NONE) {
                if (this.bFy9p()) {
                    this.cM4Q.retry.level = RetryLevel.GET_URL;
                    this.bFz9q();
                    hj5o.pV8N("Url expired, get url.")
                } else {
                    this.cM4Q.retry.level = RetryLevel.RELOAD;
                    this.cM4Q.retry.tid = setTimeout(this.Oj5o.g2x(this), 3e3);
                    hj5o.pV8N("Reload mp3 3s later.")
                }
            } else if (this.cM4Q.retry.level == RetryLevel.GET_URL) {
                this.cM4Q.retry.level = RetryLevel.RELOAD;
                this.cM4Q.retry.tid = setTimeout(this.Oj5o.g2x(this), 3e3);
                hj5o.pV8N("Reload mp3 3s later.")
            } else if (this.cM4Q.retry.level == RetryLevel.RELOAD) {
                this.cM4Q.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bGj9a()) {
                    this.cM4Q.retry.tid = setTimeout(this.ctz9q.g2x(this), 5e3);
                    hj5o.pV8N("Switch CDN 5s later.")
                } else {
                    this.cM4Q.retry.tid = setTimeout(this.Oj5o.g2x(this), 5e3);
                    hj5o.pV8N("Reload mp3 5s later.")
                }
            } else if (!bFk9b && this.dT4X.type == "audio" && !Gc3x.useFlash && !dw4A.Id3x.mac && l2x.bpm5r().supported) {
                Gc3x.useFlash = true;
                l2x.Gb3x(Gc3x);
                this.ctD0x("flash")
            } else {
                this.Iu3x();
                this.fG5L();
                this.cM4Q.error = ErrorType.NET_ERR;
                this.qb8T("error", {
                    code: this.cM4Q.error
                });
                hj5o.ch3x("error can not retry.")
            }
        } else {
            this.Iu3x();
            this.fG5L();
            this.cM4Q.error = ErrorType.UNKNOWN_ERR;
            this.qb8T("error", {
                code: this.cM4Q.error
            });
            hj5o.ch3x("error can not retry.")
        }
    };
    b2x.btV6P = function () {
        var hQ5V = 0,
            bGr9i = 5e3;
        return function () {
            this.zf1x();
            clearTimeout(hQ5V);
            setTimeout(function () {
                var eT4X = +(new Date);
                if (this.cM4Q.waiting && eT4X - this.cM4Q.waitTimestamp >= bGr9i && this.cM4Q.stalledRetryCount < MAX_STALLED_RETRY) {
                    hj5o.pV8N("stalled too long retry.");
                    this.cM4Q.stalledRetryCount++;
                    this.Oj5o()
                }
            }.g2x(this), bGr9i);
            hj5o.pV8N("stalled")
        }
    }();
    b2x.bFy9p = function () {
        var eT4X = +(new Date);
        return eT4X > this.cM4Q.expireTime
    };
    b2x.ctE0x = function () {
        var bA3x = parseInt(this.cM4Q.time) || 0;
        this.dT4X.setSrc(this.cM4Q.playUrl + "#t=" + bA3x);
        this.cM4Q.loadState = LoadState.IN_RELOAD;
        this.zf1x();
        hj5o.pV8N("recover from: {0}", bA3x)
    };
    b2x.qb8T = function (U3x, j2x) {
        h2x.z2x(w2x.fO5T, "playaction", {
            action: U3x,
            data: j2x || {}
        })
    };
    I2x.fJ5O.A2x({
        element: w2x.fO5T,
        event: ["playaction"]
    })
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        b2x;
    w2x.GW3x = NEJ.C();
    b2x = w2x.GW3x.N2x(w2x.fO5T);
    K2x = w2x.GW3x.ct3x;
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.cty9p = function (bN3x) {
        this.bdu0x(bN3x);
        this.en4r()
    };
    b2x.buV7O = function () {
        this.fG5L()
    };
    b2x.xg0x = function (d2x) {
        if (d2x.action == "play") {
            this.fG5L()
        }
    };
    b2x.qb8T = function (U3x, j2x) {
        h2x.z2x(w2x.GW3x, "tmpplayaction", {
            action: U3x,
            data: j2x || {},
            tmp: true
        })
    };
    b2x.th9Y = function () {
        return this.cM4Q
    };
    I2x.fJ5O.A2x({
        element: w2x.GW3x,
        event: ["tmpplayaction"]
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        fM5R = c2x("nej.n"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        bc3x = c2x("nej.ui"),
        w2x = c2x("nm.w"),
        m2x = c2x("nm.l"),
        kV6P = c2x("nm.c"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x, bei0x = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var bvw7p = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    w2x.bvy7r = NEJ.C();
    b2x = w2x.bvy7r.N2x(bc3x.eg4k);
    b2x.cx3x = function (e2x) {
        this.cF3x(e2x);
        var i2x = a2x.H2x(this.n2x, "j-flag");
        this.cFs2x = i2x.shift();
        this.ctv9m = i2x.shift();
        this.Io3x = i2x.shift();
        this.bvH7A = i2x.shift();
        this.bvM7F = [i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift()];
        this.beo0x = i2x.shift();
        this.bHc0x = i2x.shift();
        this.ru9l = {
            list: this.bvM7F,
            selected: "z-curr",
            onchange: this.bHg0x.g2x(this)
        };
        h2x.s2x(this.Io3x, "input", this.bep0x.g2x(this));
        h2x.s2x(this.Io3x, "propertychange", this.bep0x.g2x(this));
        h2x.s2x(this.Io3x, "keyup", this.bep0x.g2x(this));
        h2x.s2x(this.ctv9m, "click", this.bep0x.g2x(this));
        h2x.s2x(this.beo0x, "click", this.cL4P.g2x(this));
        h2x.s2x(this.bHc0x, "click", function () {
            this.z2x("oncancel", {})
        }.g2x(this));
        this.S3x = q2x.FT3x.gp5u();
        this.Py5D = top.nm.w.GW3x.gp5u();
        I2x.fJ5O.A2x({
            element: top.nm.w.GW3x,
            event: ["tmpplayaction"]
        });
        this.sd9U = {
            limit: 100,
            offset: 0,
            parent: this.beo0x,
            onbeforelistload: this.qU8M.g2x(this)
        };
        q2x.sk = "fuck" + a2x.t2x(this.bvH7A, "xname") + "458";
        h2x.s2x(top.nm.w.GW3x, "tmpplayaction", this.xg0x.g2x(this))
    };
    b2x.cf3x = function () {
        this.ce3x = "m-xwgt-publish-search"
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        if (!!this.CP2x) {
            this.CP2x.T3x();
            delete this.CP2x
        }
        this.ru9l.index = bvw7p[e2x.type || "song"];
        this.CP2x = I2x.FS3x.A2x(this.ru9l);
        this.Io3x.value = "";
        this.Io3x.focus();
        this.vy0x = "";
        this.cFt2x = 0;
        if (e2x.showMV == true) {
            this.bvM7F[bvw7p["mv"]].parentNode.style.display = "";
            a2x.y2x(this.bvH7A, "srchtab-1")
        } else {
            this.bvM7F[bvw7p["mv"]].parentNode.style.display = "none";
            a2x.x2x(this.bvH7A, "srchtab-1")
        }
        if (!!this.dK4O) {
            this.dK4O = this.dK4O.T3x()
        }
        if (e2x.hideBack) {
            a2x.y2x(this.bHc0x.parentNode, "f-hide")
        }
    };
    b2x.bD3x = function () {
        this.Py5D.buV7O();
        this.bG3x()
    };
    b2x.bep0x = function () {
        var value = this.Io3x.value.trim();
        if (value && value.length) {
            if (value != this.vy0x) {
                this.vy0x = value;
                this.bHg0x({
                    index: this.CP2x.tY9P()
                })
            }
        } else {
            if (this.dK4O) {
                this.dK4O = this.dK4O.T3x()
            }
        }
        this.vy0x = value
    };
    b2x.cL4P = function () {
        var ctt9k = function (F2x) {
                return a2x.bF3x(F2x, "sitm") || a2x.bF3x(F2x, "itm") || a2x.bF3x(F2x, "mv-item")
            },
            cts9j = function (F2x) {
                return a2x.bF3x(F2x, "ply")
            },
            bHG0x = function () {
                m2x.Z3x.L2x({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            ctr9i = function () {
                m2x.Z3x.L2x({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            bwl7e = function (bj3x) {
                if (bj3x && bj3x.privilege && bj3x.privilege.toast) {
                    v2x.bn3x("/api/song/toast", {
                        query: {
                            id: bj3x.id
                        },
                        type: "json",
                        onload: SA6u.g2x(this),
                        onerror: SA6u.g2x(this)
                    })
                } else {
                    Sz6t()
                }
            },
            SA6u = function (Q3x) {
                Sz6t((Q3x || bb3x).toast)
            },
            Sz6t = function (bH3x) {
                m2x.Z3x.L2x({
                    type: 2,
                    tip: bH3x || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function (d2x) {
            var Hs3x = h2x.W3x(d2x, cts9j),
                i2x = h2x.W3x(d2x, ctt9k),
                ex4B = this.Py5D.th9Y();
            if (!!i2x) {
                h2x.bh3x(d2x);
                this.OD5I = a2x.t2x(i2x, "id");
                this.Oq5v = a2x.t2x(i2x, "type");
                if (this.Oq5v == 18) {
                    var bN3x = this.S3x.eH4L(this.OD5I),
                        qF8x = l2x.pT8L(bN3x);
                    if (!Hs3x) {
                        if (qF8x == 10) {
                            bHG0x();
                            return
                        } else if (qF8x == 100) {
                            bwl7e(bN3x);
                            return
                        }
                    } else {
                        if (qF8x == 10) {
                            bHG0x();
                            return
                        } else if (qF8x == 100) {
                            bwl7e(bN3x);
                            return
                        } else if (qF8x == 11) {
                            ctr9i();
                            return
                        } else {
                            a2x.x2x(this.CV2x, "z-pause z-loading");
                            if (Hs3x == this.CV2x && ex4B.play && !ex4B.ended) {
                                this.Py5D.buV7O()
                            } else {
                                this.CV2x = Hs3x;
                                this.Py5D.cty9p(bN3x)
                            }
                            return
                        }
                    }
                } else if (this.Oq5v == 70) {
                    if (a2x.bF3x(i2x, "z-noprogram")) {
                        m2x.Z3x.L2x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.ctq9h()
            }
        }
    }();
    b2x.ctq9h = function () {
        var ig5l = this.S3x.eH4L(this.OD5I),
            sV9M = l2x.bNo1x(this.Oq5v, ig5l);
        sV9M.title = sV9M.title || "";
        sV9M.author = sV9M.author || "";
        sV9M.picUrl = sV9M.picUrl || "";
        sV9M.authors = sV9M.authors || "";
        if (this.Oq5v == 70) {
            this.OD5I = this.OD5I.slice(0, -4)
        }
        this.z2x("onfinish", {
            id: this.OD5I,
            type: this.Oq5v,
            data: sV9M
        })
    };
    b2x.xg0x = function (d2x) {
        var j2x = d2x.data;
        if (!this.CV2x) {
            return
        }
        switch (d2x.action) {
            case "play":
                a2x.fk4o(this.CV2x, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a2x.x2x(this.CV2x, "z-pause z-loading");
                break;
            case "error":
                m2x.Z3x.L2x({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a2x.x2x(this.CV2x, "z-pause z-loading");
                break;
            case "playing":
                a2x.fk4o(this.CV2x, "z-loading", "z-pause");
                break;
            case "waiting":
                a2x.fk4o(this.CV2x, "z-pause", "z-loading");
                break
        }
    };
    b2x.ctn9e = function (d2x) {
        if (d2x.result.code == 407) {
            this.beo0x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.beo0x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b2x.bHg0x = function (d2x) {
        if (!this.vy0x || d2x.index < 0 || d2x.index > 5) {
            return
        }
        this.Py5D.buV7O();
        var bg3x = bei0x[d2x.index],
            e2x = NEJ.X({}, this.sd9U);
        e2x.cache = {
            klass: q2x.FT3x,
            clear: true,
            onerror: this.ctn9e.g2x(this)
        };
        e2x.cache.lkey = "search-publish-" + bg3x.type + "-" + this.vy0x;
        e2x.item = {
            klass: bg3x.item,
            getRestrictLevel: l2x.pT8L,
            dur2time: l2x.ln7g
        };
        if (!e2x.cache.data) {
            e2x.cache.data = {}
        }
        e2x.cache.data.s = this.vy0x;
        e2x.cache.data.type = bg3x.type;
        e2x.cache.data.isPub = true;
        if (bg3x.type == 1) {
            e2x.cache.data.hlpretag = '<span class="s-fc7">';
            e2x.cache.data.hlposttag = "</span>"
        }
        e2x.onemptylist = this.ctl9c.g2x(this, this.vy0x);
        if (!!this.Hz3x) this.S3x.vm0x(this.Hz3x);
        if (!!this.dK4O) {
            this.dK4O = this.dK4O.T3x()
        }
        this.dK4O = I2x.nh7a.A2x(e2x);
        this.Hz3x = e2x.cache.lkey
    };
    b2x.qU8M = function (d2x) {
        d2x.value = a2x.iG5L("m-publish-search-loading")
    };
    b2x.ctl9c = function (J2x, d2x) {
        a2x.dz4D(d2x.parent, "m-publish-emtpy-message", {
            key: J2x
        });
        d2x.stopped = true
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        dw4A = c2x("nej.p"),
        v2x = c2x("nej.j"),
        ca3x = c2x("nej.ut"),
        bC3x = c2x("nej.ui"),
        w2x = c2x("nm.w"),
        b2x, K2x;
    var ctk9b = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w2x.HA3x = NEJ.C();
    b2x = w2x.HA3x.N2x(bC3x.eg4k);
    var gg5l = a2x.eu4y("m-wgt-receiverInput");
    var cti9Z = a2x.eu4y("m-wgt-receiverList");
    var iS6M = a2x.tw9n(ctk9b);
    var csW9N = a2x.eu4y('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b2x.cx3x = function (e2x) {
        this.bl3x = [];
        this.xe0x = e2x.receiver || null;
        this.csT9K = e2x.unique || false;
        this.nE7x = e2x.err;
        this.bIY0x(this.bIZ0x, e2x.uid);
        this.cF3x(e2x)
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.UI7B();
        this.Tc7V();
        this.beF0x();
        if (e2x.receiver) this.bwT7M(e2x.receiver.nickname, e2x.receiver.userId);
        a2x.ba3x(this.BT2x, "display", "block");
        a2x.ba3x(this.bwX7Q, "cursor", "text");
        a2x.ba3x(this.BT2x, "cursor", "text")
    };
    b2x.cf3x = function () {
        var j2x = this.bJx0x();
        this.ce3x = a2x.ix5C(a2x.bZ3x(gg5l, {
            receiver: this.xe0x,
            users: j2x
        }));
        this.mk7d = iS6M
    };
    b2x.bW3x = function () {
        this.cg3x();
        var bQ3x = a2x.H2x(this.n2x, "j-flag");
        var hr5w = a2x.H2x(this.n2x, "j-item");
        this.bwX7Q = bQ3x[0];
        this.bJD0x = bQ3x[1];
        this.ee4i = bQ3x[2];
        this.BT2x = bQ3x[3];
        this.beI0x = bQ3x[4];
        this.bwZ7S = bQ3x[5];
        this.fK5P = hr5w;
        a2x.y2x(this.fK5P[0], "j-selected");
        h2x.s2x(this.ee4i, "keyup", this.bxb7U.g2x(this));
        h2x.s2x(this.ee4i, "keydown", this.Px5C.g2x(this));
        h2x.s2x(this.ee4i, "focus", this.lt7m.g2x(this));
        h2x.s2x(this.beI0x, "click", this.csR9I.g2x(this));
        h2x.s2x(this.bwX7Q, "click", this.csQ9H.g2x(this));
        h2x.s2x(document.body, "click", this.pp8h.g2x(this));
        h2x.s2x(this.ee4i, "input", this.fR5W.g2x(this));
        h2x.s2x(this.ee4i, "blur", this.ok8c.g2x(this))
    };
    b2x.bD3x = function (e2x) {
        h2x.mv7o(document.body, "click", this.pp8h.g2x(this));
        this.bG3x();
        this.beF0x();
        this.csP9G();
        this.pp8h()
    };
    b2x.bxb7U = function (d2x) {
        h2x.bh3x(d2x);
        var jR6L = d2x.keyCode || d2x.which;
        var bo3x = this.ee4i.value;
        var bq3x = this.fK5P.length;
        var rs9j = a2x.H2x(this.n2x, "j-selected")[0];
        switch (jR6L) {
            case 13:
                var lj6d = a2x.gx5C(rs9j, "data-username");
                var il5q = a2x.gx5C(rs9j, "data-userId");
                this.bwT7M(lj6d, il5q);
                this.pp8h();
                this.ee4i.value = "";
                break;
            case 38:
                var r2x = a2x.gx5C(rs9j, "data-index") - 1 < 0 ? bq3x - 1 : a2x.gx5C(rs9j, "data-index") - 1;
                a2x.x2x(rs9j, "j-selected");
                a2x.y2x(this.fK5P[r2x], "j-selected");
                break;
            case 40:
                var r2x = parseInt(a2x.gx5C(rs9j, "data-index")) + 1 >= bq3x ? 0 : parseInt(a2x.gx5C(rs9j, "data-index")) + 1;
                a2x.x2x(rs9j, "j-selected");
                a2x.y2x(this.fK5P[r2x], "j-selected");
                break;
            default:
                this.xv0x()
        }
    };
    b2x.Px5C = function (d2x) {
        var jR6L = d2x.keyCode || d2x.which;
        var bo3x = this.ee4i.value;
        var r2x = a2x.H2x(this.n2x, "j-receiver").length - 1;
        if (jR6L === 8 && bo3x === "") this.csM9D(r2x)
    };
    b2x.fR5W = function (d2x) {
        var bo3x = this.ee4i.value;
        if (bo3x.length > 10) {
            this.ee4i.value = bo3x.substring(0, 10);
            return
        }
        dw4A.ds4w.browser == "ie" && dw4A.ds4w.version < "7.0" ? setTimeout(this.bxi7b.g2x(this), 0) : this.bxi7b();
        this.Tc7V()
    };
    b2x.lt7m = function () {
        if (this.bl3x[0]) this.xv0x();
        else this.bIY0x(this.csL9C);
        a2x.ba3x(this.BT2x, "display", "none")
    };
    b2x.ok8c = function () {
        var bq3x = a2x.H2x(this.n2x, "j-receiver").length;
        if (this.ee4i.value.trim() == "" && bq3x <= 0) a2x.ba3x(this.BT2x, "display", "block")
    };
    b2x.bwT7M = function (lj6d, il5q) {
        var Kv4z = this.Qr6l();
        if (Kv4z.length >= 10) {
            this.dY4c();
            return
        }
        var bc3x;
        for (bc3x = 0; bc3x < Kv4z.length; bc3x++) {
            if (Kv4z[bc3x] == il5q) {
                this.pp8h();
                return
            }
        }
        if (!lj6d || !il5q) return;
        var f2x = a2x.dy4C(a2x.ix5C(a2x.bZ3x(csW9N, {
            username: lj6d,
            userId: il5q
        })));
        var bI3x = this.bJD0x.parentNode;
        if (this.csT9K) {
            this.beF0x()
        }
        bI3x.insertBefore(f2x, this.bJD0x);
        this.ee4i.value = "";
        var bq3x = a2x.H2x(this.n2x, "j-receiver").length;
        if (bq3x > 1) a2x.ba3x(this.BT2x, "display", "none");
        this.bxi7b();
        this.Tc7V()
    };
    b2x.beF0x = function () {
        var Ux7q = a2x.H2x(this.n2x, "j-receiver");
        var bc3x;
        if (Ux7q.length > 0) {
            for (bc3x = 0; bc3x < Ux7q.length; bc3x++) {
                a2x.cJ4N(Ux7q[bc3x], false)
            }
        }
    };
    b2x.csP9G = function () {
        this.ee4i.value = ""
    };
    b2x.csM9D = function (r2x) {
        this.dY4c(!0);
        var Ux7q = a2x.H2x(this.n2x, "j-receiver");
        a2x.cJ4N(Ux7q[r2x], false);
        this.Tc7V()
    };
    b2x.xv0x = function () {
        var bo3x = this.ee4i.value;
        var bv3x = bo3x.trim().toLowerCase();
        var j2x;
        bv3x = bv3x.replace(/\[/g, "\\[");
        bv3x = bv3x.replace(/\]/g, "\\]");
        j2x = this.bJx0x(bv3x);
        this.csI9z(j2x)
    };
    b2x.pp8h = function (d2x) {
        a2x.ba3x(this.beI0x, "display", "none")
    };
    b2x.dY4c = function (dM4Q) {
        if (dM4Q && this.nE7x) {
            a2x.ba3x(this.nE7x, "display", "none");
            return
        }
        if (this.nE7x) a2x.ba3x(this.nE7x, "display", "block")
    };
    b2x.csR9I = function (d2x) {
        h2x.cr3x(d2x);
        var bO3x = d2x.target || d2x.srcElement;
        if (a2x.bF3x(bO3x, "j-flag")) return;
        var bI3x = bO3x.nodeName.toLowerCase() == "a" ? bO3x.parentNode : bO3x.parentNode.parentNode;
        var lj6d = a2x.gx5C(bI3x, "data-username");
        var il5q = a2x.gx5C(bI3x, "data-userId");
        this.bwT7M(lj6d, il5q);
        this.pp8h();
        a2x.ba3x(this.BT2x, "display", "none")
    };
    b2x.csQ9H = function (d2x) {
        h2x.bh3x(d2x);
        var bO3x = d2x.target || d2x.srcElement;
        if (a2x.bF3x(bO3x.parentNode, "j-receiver")) {
            a2x.cJ4N(bO3x.parentNode, false);
            this.dY4c(!0);
            this.Tc7V()
        } else this.ee4i.focus()
    };
    b2x.bxi7b = function () {
        this.bwZ7S.innerHTML = this.ee4i.value;
        var cA3x = this.bwZ7S.offsetWidth + 2;
        a2x.ba3x(this.ee4i, "width", cA3x + "px")
    };
    b2x.Tc7V = function () {
        var beM0x = a2x.hN5S(this.ee4i, this.n2x).y;
        var bLf1x = Math.floor((beM0x - 8) / 27);
        if (bLf1x < 0) return;
        a2x.ba3x(this.bwX7Q, "height", 19 + bLf1x * 29 + "px")
    };
    b2x.UI7B = function () {
        var qp8h = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qp8h.length; i++) {
            a2x.ba3x(this.bwZ7S, qp8h[i], a2x.de4i(this.ee4i, qp8h[i]))
        }
    };
    b2x.bIY0x = function (cN4R, C2x) {
        var dn4r = C2x ? C2x : window.GUser.userId;
        var Y3x = "/api/user/getfollows/" + dn4r;
        var gl5q = v2x.bn3x(Y3x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cN4R.g2x(this),
            onerror: function (j2x) {
                this.bl3x = []
            },
            onbeforerequest: function (j2x) {}
        })
    };
    b2x.bIZ0x = function (j2x) {
        this.bl3x = JSON.parse(j2x).follow || [];
        var C2x = GUser.userId;
        for (var i = 0; i < this.bl3x.length; i++) {
            if (this.bl3x[i].userId == C2x) {
                this.bl3x.splice(i, 1);
                continue
            }
            this.bl3x[i].avatarUrl = this.bl3x[i].avatarUrl + "?param=30y30"
        }
    };
    b2x.csL9C = function (j2x) {
        if (this.bl3x[0]) return;
        this.bIZ0x(j2x);
        this.xv0x()
    };
    b2x.bJx0x = function (bv3x) {
        var bv3x = bv3x ? bv3x : "";
        this.bl3x = this.bl3x[0] ? this.bl3x : [];
        var bq3x = this.bl3x.length;
        var QV6P = this.Qr6l();
        var sI9z = [];
        var SD6x, OI5N, bxf7Y;
        if (!this.bl3x[0]) return sI9z;
        for (var bc3x = 0; bc3x < bq3x; bc3x++) {
            bxf7Y = false;
            for (var v2x = 0; v2x < QV6P.length; v2x++) {
                if (this.bl3x[bc3x].userId == QV6P[v2x]) {
                    bxf7Y = true;
                    break
                }
            }
            if (bxf7Y) continue;
            SD6x = this.bl3x[bc3x].nickname.toLowerCase().search(bv3x);
            OI5N = this.bl3x[bc3x].py ? this.bl3x[bc3x].py.toLowerCase().search(bv3x) : -1;
            if (SD6x !== -1 || OI5N != -1) sI9z.push(this.bl3x[bc3x])
        }
        return sI9z
    };
    b2x.csI9z = function (j2x) {
        a2x.dz4D(this.beI0x, cti9Z, {
            users: j2x
        });
        a2x.y2x(a2x.H2x(this.n2x, "j-item")[0], "j-selected");
        this.fK5P = a2x.H2x(this.n2x, "j-item");
        a2x.ba3x(this.beI0x, "display", "block")
    };
    b2x.Qr6l = function () {
        var sI9z = a2x.H2x(this.n2x, "j-receiver") || [];
        var il5q = [];
        for (var i = 0; i < sI9z.length; i++) {
            il5q.push(a2x.gx5C(sI9z[i], "data-id"))
        }
        return il5q
    };
    b2x.cFw2x = function () {
        var il5q = this.Qr6l();
        var sI9z = [];
        for (var i = 0; i < il5q.length; i++) {
            for (var j = 0; j < this.bl3x.length; j++) {
                if (il5q[i] == this.bl3x[j].userId) sI9z.push(this.bl3x[j])
            }
        }
        return sI9z
    };
    b2x.csG9x = function () {
        this.beF0x()
    };
    w2x.HA3x.L2x = function (e2x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            m2x.pn8f.L2x({
                title: "登录"
            });
            return
        }
        e2x = e2x || {};
        if (e2x.parent === undefined) e2x.parent = document.body;
        !!this.fm5r && this.fm5r.T3x();
        this.fm5r = this.A2x(e2x)
    };
    w2x.HA3x.bt3x = function () {
        !!this.fm5r && this.fm5r.T3x()
    };
    w2x.HA3x.HK3x = function () {
        return this.pp8h()
    };
    w2x.HA3x.cFx2x = function () {
        return this.xv0x()
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        l2x = c2x("nm.x"),
        m2x = c2x("nm.l"),
        b2x, K2x;
    m2x.Ie3x = NEJ.C();
    b2x = m2x.Ie3x.N2x(m2x.bhC3x);
    K2x = m2x.Ie3x.ct3x;
    b2x.bk3x = function () {
        var HH3x;
        var csE9v = function (D2x, J2x) {
            HH3x = HH3x || [];
            if (J2x != "18") HH3x.push({
                key: J2x,
                value: D2x
            })
        };
        return function (e2x) {
            this.bm3x(e2x);
            if (e2x.upwards) {
                a2x.y2x(this.n2x, "m-emts-up")
            } else {
                a2x.x2x(this.n2x, "m-emts-up")
            }
            if (e2x.rightwards) {
                a2x.y2x(this.n2x, "m-emts-right")
            } else {
                a2x.x2x(this.n2x, "m-emts-right")
            }
            if (!HH3x) {
                var by3x = l2x.czG1x();
                k2x.eE4I(by3x, csE9v)
            }
            var bq3x = HH3x.length;
            HH3x.splice(bq3x - 2, 0, {
                key: "18",
                value: "186"
            });
            this.beH0x = HH3x;
            this.csB9s = !!e2x.autoHide
        }
    }();
    b2x.cf3x = function () {
        this.ce3x = "ntp-portrait"
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.H2x(this.n2x, "j-flag");
        this.bK3x = i2x[0];
        this.csy9p = i2x[1];
        this.csw9n = i2x[2];
        this.csv9m = i2x[3];
        h2x.s2x(this.bK3x, "click", this.xV0x.g2x(this));
        h2x.s2x(this.csy9p, "click", this.HE3x.g2x(this, 1));
        h2x.s2x(this.csv9m, "click", this.HE3x.g2x(this, 2))
    };
    b2x.bwR7K = function (r2x) {
        this.beD0x = r2x;
        var bi3x = (r2x - 1) * 50;
        var i2x = this.beH0x.slice(bi3x, Math.min(bi3x + 50, this.beH0x.length));
        this.bK3x.innerHTML = a2x.bZ3x("jst-portrait", {
            plist: i2x
        }, {
            purl: l2x.bDz9q
        });
        this.csw9n.innerText = r2x + "/" + Math.ceil(this.beH0x.length / 50)
    };
    b2x.HE3x = function (r2x) {
        var css9j = Math.ceil(this.beH0x.length / 50);
        if (r2x == 1 && this.beD0x == 1 || r2x == 2 && this.beD0x == css9j) return;
        r2x == 1 ? this.bwR7K(this.beD0x - 1) : this.bwR7K(this.beD0x + 1)
    };
    b2x.xV0x = function (d2x) {
        var F2x = h2x.W3x(d2x, "d:text");
        if (!F2x) return;
        var d2x = {
            url: a2x.t2x(F2x, "url"),
            text: a2x.t2x(F2x, "text")
        };
        this.z2x("onselect", d2x);
        if (this.csB9s && !d2x.stopped) {
            this.bt3x()
        }
    };
    b2x.L2x = function () {
        K2x.L2x.call(this);
        this.bwR7K(1)
    }
})();
(function () {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        dw4A = c2x("nej.p"),
        be3x = c2x("nej.h"),
        I2x = c2x("nej.ut"),
        ke6Y = /^[#?]+/,
        Es2x = /#(.*?)$/,
        zu1x = window,
        bwK7D = !history.pushState || dw4A.Id3x.android || !history.auto;
    var beC0x = function (Y3x, bwH7A) {
        zu1x.history[!bwH7A ? "pushState" : "replaceState"](null, document.title, Y3x)
    };
    var beA0x = function () {
        return location.parse(zu1x.location.href)
    };
    beC0x = beC0x.eC4G(function (d2x) {
        if (!bwK7D) return;
        var bf3x = d2x.args;
        d2x.stopped = !0;
        Y3x = bf3x[0].replace(ke6Y, "");
        !bf3x[1] ? zu1x.location.hash = Y3x : zu1x.location.replace("#" + Y3x)
    });
    beA0x = beA0x.eC4G(function (d2x) {
        if (!bwK7D) return;
        d2x.stopped = !0;
        var dO4S = Es2x.test(zu1x.location.href) ? RegExp.$1 : "";
        d2x.value = location.parse(dO4S.replace(ke6Y, ""))
    });
    location.redirect = function (Y3x, bwH7A) {
        beC0x(Y3x, bwH7A);
        return this
    };
    location.active = function () {
        var ei4m, Y3x, jD6x, cZ4d, UR7K;
        var bwD7w = function (hp5u) {
            if (!!cZ4d) {
                cZ4d = !1;
                return
            }
            var d2x = {
                oldValue: jD6x,
                newValue: beA0x()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h2x.z2x(location, "beforeurlchange", d2x);
                if (d2x.stopped) {
                    if (!!jD6x) {
                        cZ4d = !0;
                        beC0x(jD6x.href, !0)
                    }
                    return
                }
            }
            Y3x = zu1x.location.href;
            jD6x = d2x.newValue;
            h2x.z2x(location, "urlchange", jD6x);
            be3x.buQ7J(jD6x.href)
        };
        var bNG1x = function () {
            if (Y3x != zu1x.location.href) bwD7w();
            ei4m = requestAnimationFrame(bNG1x)
        };
        return function (bJ3x) {
            if (!!UR7K) return this;
            UR7K = !0;
            zu1x = bJ3x || window;
            if (bwK7D && "onhashchange" in window && dw4A.nr7k.trident2) {
                h2x.s2x(zu1x, "hashchange", bwD7w);
                bwD7w()
            } else if (!ei4m) {
                ei4m = requestAnimationFrame(bNG1x)
            }
            return this
        }
    }();
    location.parse = function () {
        var gD5I = /^https?:\/\/.*?\//i,
            ke6Y = /[?#]/;
        return function (Y3x) {
            var o2x = {
                href: Y3x
            };
            Y3x = (Y3x || "").replace(gD5I, "/").split(ke6Y);
            var cH3x = 1;
            if (Y3x[0] == "/" && (Y3x[1] || "").indexOf("/") == 0) cH3x = 2;
            o2x.path = Y3x.splice(0, cH3x).join("?");
            o2x.query = k2x.hx5C(Y3x.join("&"));
            return o2x
        }
    }();
    location.same = function (Y3x) {
        return beA0x().href == Y3x
    };
    I2x.fJ5O.A2x({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        gt5y = c2x("nm.ut");
    gt5y.vi0x = function (er4v) {
        var hh5m = {
            text: "",
            start: 0,
            end: 0
        };
        if (er4v.setSelectionRange) {
            hh5m.start = er4v.selectionStart;
            hh5m.end = er4v.selectionEnd;
            hh5m.text = hh5m.start != hh5m.end ? er4v.value.substring(hh5m.start, hh5m.end) : ""
        } else if (document.selection) {
            var i, beu0x = document.selection.createRange(),
                yx1x = document.body.createTextRange();
            yx1x.moveToElementText(er4v);
            hh5m.text = beu0x.text;
            hh5m.bookmark = beu0x.getBookmark();
            for (i = 0; yx1x.compareEndPoints("StartToStart", beu0x) < 0 && beu0x.moveStart("character", -1) !== 0; i++) {
                if (er4v.value.charAt(i) == "\n") {
                    i++
                }
            }
            hh5m.start = i;
            hh5m.end = hh5m.text.length + hh5m.start
        }
        return hh5m
    };
    gt5y.bes0x = function (er4v, hh5m) {
        var yx1x;
        if (!hh5m) {
            hh5m = {
                text: "",
                start: 0,
                end: 0
            }
        }
        er4v.focus();
        if (er4v.setSelectionRange) {
            er4v.setSelectionRange(hh5m.start, hh5m.end)
        } else if (er4v.createTextRange) {
            yx1x = er4v.createTextRange();
            if (er4v.value.length === hh5m.start) {
                yx1x.collapse(false);
                yx1x.select()
            } else {
                yx1x.moveToBookmark(hh5m.bookmark);
                yx1x.select()
            }
        }
    };
    gt5y.Ij3x = function (er4v, hh5m, cG3x) {
        var hh5m = hh5m || {
            text: "",
            start: 0,
            end: 0
        };
        var bvW7P, bOe1x, yx1x, Pp5u, bOj1x, bOk1x, Hq3x;
        this.bes0x(er4v, hh5m);
        if (er4v.setSelectionRange) {
            bvW7P = er4v.value;
            bOe1x = bvW7P.substring(0, hh5m.start) + cG3x + bvW7P.substring(hh5m.end);
            bOj1x = bOk1x = hh5m.start + cG3x.length;
            Hq3x = er4v.scrollTop;
            er4v.value = bOe1x;
            if (er4v.scrollTop != Hq3x) {
                er4v.scrollTop = Hq3x
            }
            er4v.setSelectionRange(bOj1x, bOk1x)
        } else if (er4v.createTextRange) {
            Pp5u = document.selection.createRange();
            Pp5u.text = cG3x;
            Pp5u.setEndPoint("StartToEnd", Pp5u);
            Pp5u.select()
        }
        h2x.z2x(er4v, "keyup")
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        dw4A = c2x("nej.p"),
        k2x = c2x("nej.u"),
        ca3x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        gt5y = c2x("nm.ut"),
        b2x;
    w2x.bOp1x = NEJ.C();
    b2x = w2x.bOp1x.N2x(ca3x.cI3x);
    b2x.cx3x = function (e2x) {
        this.cF3x(e2x)
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.go5t = e2x.txt;
        this.Hl3x = e2x.sgtsContainer;
        this.bOE1x = e2x.sgtsList[0];
        this.beq0x = e2x.sgtsItem;
        this.pm8e = e2x.rangeData;
        this.Il3x = e2x.atIndex;
        a2x.y2x(this.beq0x[0], "selected-item");
        this.PM6G()
    };
    b2x.bD3x = function () {
        this.bG3x();
        h2x.mv7o(document.body, "keyup", this.bPg2x.g2x(this));
        h2x.mv7o(document.body, "click", this.bPi2x.g2x(this))
    };
    b2x.PM6G = function () {
        this.bX3x([
            [document.body, "keyup", this.bPg2x.g2x(this)],
            [document.body, "click", this.bPi2x.g2x(this)],
            [this.go5t, "keydown", this.bPl2x.g2x(this)],
            [this.go5t, "keypress", this.bPl2x.g2x(this)],
            [this.bOE1x, "click", this.bPn2x.g2x(this)],
            [this.bOE1x, "mouseover", this.Hi3x.g2x(this)]
        ])
    };
    b2x.Hi3x = function (d2x) {
        var bO3x = h2x.W3x(d2x);
        var p2x = a2x.H2x(this.Hl3x, "selected-item");
        if (a2x.bF3x(bO3x, "j-sgt")) {
            a2x.x2x(p2x[0], "selected-item");
            a2x.y2x(bO3x, "selected-item")
        }
    };
    b2x.bPg2x = function (d2x) {
        var p2x = a2x.H2x(this.Hl3x, "selected-item");
        var bq3x = this.beq0x.length;
        var jR6L = d2x.keyCode || d2x.which;
        var r2x, j2x;
        switch (jR6L) {
            case 38:
                r2x = a2x.gx5C(p2x[0], "data-index") - 1 < 0 ? bq3x - 1 : a2x.gx5C(p2x[0], "data-index") - 1;
                a2x.x2x(p2x[0], "selected-item");
                a2x.y2x(this.beq0x[r2x], "selected-item");
                break;
            case 40:
                r2x = parseInt(a2x.gx5C(p2x[0], "data-index")) + 1 >= bq3x ? 0 : parseInt(a2x.gx5C(p2x[0], "data-index")) + 1;
                a2x.x2x(p2x[0], "selected-item");
                a2x.y2x(this.beq0x[r2x], "selected-item");
                break;
            case 13:
                this.bPn2x(d2x);
                break;
            case 27:
                this.pp8h();
                break;
            case 32:
                var bo3x = this.go5t.value;
                var r2x = gt5y.vi0x(this.go5t);
                if (bo3x.charAt(r2x.start - 1) !== " ") return;
                this.pp8h();
                break
        }
    };
    b2x.bPl2x = function (d2x) {
        var jR6L = d2x.keyCode || d2x.which;
        if (jR6L === 13 || jR6L === 38 || jR6L === 40) {
            h2x.cr3x(d2x);
            d2x.keyCode = 0;
            d2x.which = 0;
            d2x.returnvalue = false
        }
    };
    b2x.bPi2x = function (d2x) {
        var bO3x = d2x.target || d2x.srcElement;
        if (bO3x === this.go5t) return;
        this.pp8h()
    };
    b2x.bPn2x = function (d2x) {
        h2x.bh3x(d2x);
        var p2x = a2x.H2x(this.Hl3x, "selected-item")[0];
        var rs9j = d2x.target || d2x.srcElement;
        var u2x = d2x.type;
        if (a2x.bF3x(rs9j, "lst")) return;
        if (u2x == "click") {
            a2x.x2x(p2x, "selected-item");
            a2x.y2x(rs9j, "selected-item")
        } else rs9j = p2x;
        var j2x = rs9j.innerHTML + " ";
        this.pp8h();
        var hh5m = this.pm8e;
        hh5m.start = this.Il3x + 1;
        if (dw4A.ds4w.browser == "ie" && dw4A.ds4w.version < "9.0") {
            this.go5t.value = this.go5t.value.substring(0, hh5m.start) + this.go5t.value.substring(hh5m.end, this.go5t.value.length);
            hh5m.end = hh5m.start
        }
        gt5y.Ij3x(this.go5t, hh5m, j2x);
        h2x.z2x(this.go5t, "keyup")
    };
    b2x.pp8h = function (d2x) {
        if (!!this.Hl3x) a2x.ba3x(this.Hl3x, "display", "none");
        this.T3x()
    };
    b2x.xv0x = function (d2x) {
        if (!!this.Hl3x) a2x.ba3x(this.Hl3x, "display", "block")
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        w2x = c2x("nm.w"),
        ca3x = c2x("nej.ut"),
        bC3x = c2x("nej.ui"),
        b2x;
    var csr9i = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var csq9h = a2x.eu4y("m-wgt-atlist");
    var iS6M = a2x.tw9n(csr9i);
    w2x.bPv2x = NEJ.C();
    b2x = w2x.bPv2x.N2x(bC3x.eg4k);
    b2x.cx3x = function (e2x) {
        this.fT5Y = {};
        this.cF3x()
    };
    b2x.bk3x = function (e2x) {
        this.fT5Y.txt = a2x.B2x(e2x.target);
        this.fT5Y.data = e2x.data;
        this.fT5Y.offset = e2x.offset;
        this.fT5Y.rangeData = e2x.rangeData;
        this.fT5Y.atIndex = e2x.atIndex;
        this.csp9g(e2x);
        this.bm3x(e2x);
        this.fT5Y.sgtsContainer = this.n2x;
        this.fT5Y.sgtsList = a2x.H2x(this.n2x, "lst");
        this.fT5Y.sgtsItem = a2x.H2x(this.n2x, "f-thide");
        this.QJ6D(e2x);
        this.cso9f = w2x.bOp1x.A2x(this.fT5Y)
    };
    b2x.bD3x = function (e2x) {
        this.bG3x();
        this.cso9f.T3x()
    };
    b2x.cf3x = function () {
        this.mk7d = iS6M
    };
    b2x.bW3x = function () {
        this.cg3x()
    };
    b2x.csp9g = function (e2x) {
        this.n2x = a2x.dy4C(a2x.ix5C(a2x.bZ3x(csq9h, e2x.data)))
    };
    b2x.QJ6D = function (e2x) {
        var bPD2x = a2x.H2x(this.n2x, "selected-item")[0];
        if (bPD2x) a2x.x2x(bPD2x, "selected-item");
        var cX4b = e2x.offset.x + "px";
        var hA5F = e2x.offset.y + "px";
        a2x.ba3x(this.n2x, "left", cX4b);
        a2x.ba3x(this.n2x, "top", hA5F)
    }
})();
(function () {
    var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        gt5y = c2x("nm.ut");
    gt5y.bPE2x = function (bo3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dg4k = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var In3x = bo3x.match(dg4k) || [];
        for (var bc3x = 0; bc3x < In3x.length; bc3x++) {
            In3x[bc3x] = In3x[bc3x].split("@")[1]
        }
        In3x = In3x.reverse();
        var il5q = GUser.userId;
        var csl9c = v2x.tm9d("mentioners" + il5q) || [];
        var jV6P = In3x.concat(csl9c);
        if (jV6P.length > 10) jV6P = jV6P.slice(0, 10);
        v2x.um9d("mentioners" + il5q, jV6P)
    };
    gt5y.csk9b = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var il5q = GUser.userId;
        return v2x.tm9d("mentioners" + il5q) || []
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        dw4A = c2x("nej.p"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        ca3x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        gt5y = c2x("nm.ut"),
        l2x = c2x("nm.x"),
        b2x;
    var FullscreenApi = l2x.FX3x || {};
    w2x.bPL2x = NEJ.C();
    b2x = w2x.bPL2x.N2x(ca3x.cI3x);
    b2x.cx3x = function (e2x) {
        this.cF3x(e2x);
        this.bPM2x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.go5t = e2x.txt;
        this.n2x = e2x.body;
        this.bPO2x = e2x.before;
        this.Rh6b = e2x.flag;
        this.csj9a = e2x.after;
        this.rj8b = [];
        if (dw4A.ds4w.browser != "ie") {
            setTimeout(function () {
                this.me7X()
            }.g2x(this), 0)
        }
        this.PM6G()
    };
    b2x.bD3x = function () {
        this.bG3x();
        if (this.vR0x) this.vR0x.T3x();
        delete this.vR0x
    };
    b2x.PM6G = function () {
        this.bX3x([
            [this.go5t, "keyup", this.bQc2x.g2x(this, this.go5t)],
            [this.go5t, "click", this.bQc2x.g2x(this, this.go5t)],
            [this.go5t, "focus", this.me7X.g2x(this)]
        ])
    };
    b2x.me7X = function (d2x) {
        this.pm8e = gt5y.vi0x(this.go5t)
    };
    b2x.bPM2x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var dn4r = window.GUser.userId;
        var Y3x = "/api/user/getfollows/" + dn4r;
        var gl5q = v2x.bn3x(Y3x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j2x) {
                window.GFollowers = JSON.parse(j2x).follow
            }.g2x(this),
            onerror: function (j2x) {},
            onbeforerequest: function (j2x) {}
        })
    };
    b2x.bQd2x = function (index) {
        var D2x = this.go5t.value,
            bi3x, bvt7m, bvs7l, Sj6d;
        this.bPO2x.innerHTML = k2x.dG4K(D2x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mD7w = a2x.H2x(this.bPO2x, "j-test");
        for (var bc3x = 0; bc3x < mD7w.length; bc3x++) {
            mD7w[bc3x].innerText = " "
        }
        this.Rh6b.innerHTML = D2x.charAt(index);
        this.csj9a.innerHTML = k2x.dG4K(D2x.substr(index + 1, D2x.length));
        Sj6d = parseInt(a2x.de4i(this.go5t, "lineHeight"));
        a2x.ba3x(this.n2x, "display", "block");
        bvt7m = a2x.hN5S(this.Rh6b, this.n2x);
        bvs7l = a2x.hN5S(this.go5t);
        a2x.ba3x(this.n2x, "display", "none");
        var cX4b = bvt7m.x + bvs7l.x;
        var hA5F = bvt7m.y + bvs7l.y + Sj6d;
        bi3x = {
            x: cX4b,
            y: hA5F
        };
        this.csh9Y(bi3x)
    };
    b2x.bQc2x = function (er4v, d2x) {
        h2x.cr3x(d2x);
        var er4v = er4v;
        var D2x = er4v.value;
        var bq3x = D2x.length;
        var r2x = gt5y.vi0x(er4v).start;
        var bQo2x = 0;
        var jR6L = d2x.keyCode || d2x.which;
        var jV6P;
        this.pm8e = gt5y.vi0x(er4v);
        var bQq2x = false;
        for (var i = 1; i < 20; i++) {
            jV6P = r2x - i;
            if (D2x.charAt(jV6P) === " ") break;
            if (D2x.charAt(jV6P) === "@") {
                bQq2x = true;
                this.Il3x = bQo2x = jV6P;
                break
            }
        }
        if (bQq2x && d2x.shiftKey === false && jR6L !== 38 && jR6L !== 40) {
            if (jR6L !== 27 && jR6L !== 13) {
                this.vR0x ? this.vR0x.T3x() : null;
                this.bQd2x(bQo2x)
            }
        } else if (jR6L !== 38 && jR6L !== 40 && d2x.keyCode !== 32) {
            this.vR0x ? this.vR0x.T3x() : null
        }
    };
    b2x.csh9Y = function (bi3x) {
        var bi3x = bi3x;
        var j2x = this.ua9R();
        var e2x = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi3x,
            data: j2x,
            target: this.go5t,
            rangeData: this.pm8e,
            atIndex: this.Il3x
        };
        this.vR0x ? this.vR0x.T3x() : null;
        this.vR0x = w2x.bPv2x.A2x(e2x)
    };
    b2x.ua9R = function () {
        var csf9W = gt5y.vi0x(this.go5t).start;
        var cse9V = this.Il3x + 1;
        var bQC2x = gt5y.csk9b() || [];
        var bQF3x = [];
        var bv3x = this.go5t.value.substring(cse9V, csf9W).toLowerCase();
        bv3x = bv3x.replace(/\[/g, "\\[");
        bv3x = bv3x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.rj8b = window.GFollowers[0] ? window.GFollowers : []
        } else this.rj8b = [];
        if (!this.rj8b[0]) this.bPM2x();
        for (var bc3x = 0; bc3x < bQC2x.length; bc3x++) {
            for (var v2x = 0; v2x < this.rj8b.length; v2x++) {
                if (this.rj8b[v2x].nickname == bQC2x[bc3x]) bQF3x.push(this.rj8b[v2x])
            }
        }
        this.rj8b = k2x.cfh6b(this.rj8b, bQF3x, {
            union: true,
            begin: true
        });
        var csc9T = this.rj8b.length;
        var bec0x = [];
        var SD6x, OI5N;
        if (!this.rj8b[0]) return {
            suggests: bec0x
        };
        for (var i = 0; i < csc9T; i++) {
            SD6x = this.rj8b[i].nickname.toLowerCase().search(bv3x);
            OI5N = this.rj8b[i].py ? this.rj8b[i].py.toLowerCase().search(bv3x) : -1;
            if (SD6x !== -1 || OI5N != -1) bec0x.push(this.rj8b[i]);
            if (bec0x.length === 10) break
        }
        return {
            suggests: bec0x
        }
    };
    b2x.SH6B = function () {
        var hh5m = this.pm8e || {
            text: "",
            start: 0,
            end: 0
        };
        h2x.z2x(this.go5t, "focus");
        gt5y.Ij3x(this.go5t, hh5m, "@");
        this.pm8e = gt5y.vi0x(this.go5t);
        this.Il3x = hh5m.start;
        this.bQd2x(this.Il3x)
    };
    b2x.HK3x = function () {
        if (this.vR0x) this.vR0x.T3x()
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        w2x = c2x("nm.w"),
        ca3x = c2x("nej.ut"),
        bC3x = c2x("nej.ui"),
        b2x;
    var csb9S = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var crZ9Q = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gg5l = a2x.ix5C(crZ9Q);
    var iS6M = a2x.tw9n(csb9S);
    w2x.SQ6K = NEJ.C();
    b2x = w2x.SQ6K.N2x(bC3x.eg4k);
    b2x.cx3x = function (e2x) {
        this.fT5Y = {};
        this.cF3x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x);
        this.fT5Y.txt = a2x.B2x(e2x.target);
        this.UI7B();
        this.SR6L = w2x.bPL2x.A2x(this.fT5Y)
    };
    b2x.bD3x = function (e2x) {
        this.bG3x();
        this.SR6L.T3x()
    };
    b2x.cf3x = function () {
        this.ce3x = gg5l;
        this.mk7d = iS6M
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.dk4o(a2x.B2x(this.n2x));
        this.fT5Y.body = this.n2x;
        this.fT5Y.before = i2x[0];
        this.fT5Y.flag = i2x[1];
        this.fT5Y.after = i2x[2]
    };
    b2x.UI7B = function () {
        var qp8h = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qp8h.length; i++) {
            if (qp8h[i] === "width" && a2x.de4i(this.fT5Y.txt, qp8h[i]) == "100%") {
                var crY9P = this.fT5Y.txt.offsetWidth;
                if (!crY9P) {
                    setTimeout(function () {
                        a2x.ba3x(this.n2x, qp8h[i], this.fT5Y.txt.offsetWidth + "px")
                    }.g2x(this), 300)
                } else {
                    a2x.ba3x(this.n2x, qp8h[i], this.fT5Y.txt.offsetWidth + "px")
                }
                continue
            }
            a2x.ba3x(this.n2x, qp8h[i], a2x.de4i(this.fT5Y.txt, qp8h[i]))
        }
    };
    b2x.SH6B = function () {
        this.SR6L.SH6B()
    };
    b2x.HK3x = function () {
        this.SR6L.HK3x()
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        fy5D = NEJ.R,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        kV6P = c2x("nm.c"),
        R3x = {},
        b2x;
    if (!!kV6P.buJ7C) return;
    kV6P.buJ7C = NEJ.C();
    b2x = kV6P.buJ7C.N2x(I2x.cI3x);
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x)
    };
    b2x.bD3x = function () {
        this.bG3x()
    };
    b2x.GX3x = function (fi4m, cN4R, bdX0x) {
        if (R3x[fi4m]) {
            this.gz5E("register commonJST[" + fi4m + "] duplicate");
            return
        }
        if (!k2x.gG5L(cN4R)) {
            cN4R = ctl.comJST.crX9O(fi4m, cN4R, bdX0x)
        }
        R3x[fi4m] = cN4R
    };
    b2x.crO9F = function (bdV0x) {
        if (k2x.eJ4N(bdV0x)) {
            k2x.bd3x(bdV0x, function (p2x) {
                ctl.comJST.GX3x.apply(this, p2x)
            }, this)
        } else if (k2x.lG7z(bdV0x)) {
            k2x.eE4I(bdV0x, function (eQ4U, J2x) {
                ctl.comJST.GX3x(J2x, eQ4U)
            })
        }
    };
    b2x.crX9O = function (fi4m, uf9W, bdX0x) {
        uf9W = uf9W || {};
        NEJ.X(uf9W, {
            comJST: this.ni7b
        });
        if (uf9W.resetDataName && !k2x.eJ4N(uf9W.resetDataName)) {
            uf9W.resetDataName = [uf9W.resetDataName]
        }
        return function () {
            var j2x = arguments[0],
                jZ6T = arguments[1];
            if (uf9W.resetDataName) {
                var jV6P = {};
                for (var i = 0, ii = uf9W.resetDataName.length; i < ii; i++) {
                    jV6P[uf9W.resetDataName[i]] = arguments[i]
                }
                j2x = jV6P;
                jZ6T = arguments[ii]
            }
            NEJ.X(j2x, uf9W, dW4a);
            if (bdX0x) {
                jZ6T = jZ6T || {};
                NEJ.X(jZ6T, bdX0x)
            }
            return a2x.bZ3x(fi4m, j2x, jZ6T)
        }
    };
    b2x.ni7b = function (fi4m) {
        if (!R3x[fi4m]) {
            this.gz5E("commonJST[" + fi4m + "] is unregister");
            return ""
        } else {
            return R3x[fi4m].apply(null, fy5D.slice.call(arguments, 1))
        }
    };
    b2x.dump = function () {
        return R3x
    };
    b2x.gz5E = function (crM9D) {
        if (console && console.log) {
            console.log(crM9D)
        }
    };
    var dW4a = function (eQ4U, J2x) {
        return J2x == "resetDataName"
    };
    c2x("ctl").comJST = kV6P.buJ7C.gp5u();
    a2x.cqf9W({
        comJST: c2x("ctl").comJST.ni7b
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        br3x = NEJ.F,
        fy5D = NEJ.R,
        a2x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        kV6P = c2x("nm.c"),
        l2x = c2x("nm.x"),
        R3x = {},
        b2x;
    if (!!kV6P.buj7c) return;
    kV6P.buj7c = NEJ.C();
    b2x = kV6P.buj7c.N2x(I2x.cI3x);
    b2x.cx3x = function () {
        this.cF3x();
        var e2x = {
            "com-mv-artists": function (fS5X, ec4g, UN7G, buf6Z) {
                return a2x.bZ3x("com-mv-artists", {
                    artists: fS5X,
                    clazz: ec4g,
                    boxClazz: buf6Z,
                    mark: UN7G || function (cK4O) {
                        return cK4O
                    },
                    escape: k2x.dG4K,
                    comJST: ctl.comJST.ni7b
                })
            },
            "com-album-artists": function (fS5X, ec4g, UN7G, buf6Z) {
                return a2x.bZ3x("com-album-artists", {
                    artists: fS5X,
                    clazz: ec4g,
                    boxClazz: buf6Z,
                    mark: UN7G || function (cK4O) {
                        return cK4O
                    },
                    escape: k2x.dG4K,
                    comJST: ctl.comJST.ni7b
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k2x.dG4K
            },
            "com-user-type": function (do4s, ec4g, lT7M, wm0x, bRy3x) {
                return a2x.bZ3x("com-user-type", {
                    x: do4s,
                    clazz: ec4g || "",
                    clazz2: typeof bRy3x == "undefined" ? "icn" : bRy3x,
                    before: lT7M || "",
                    after: wm0x || "",
                    isEmptyObject: l2x.bJz0x
                })
            }
        };
        for (var C2x in e2x) {
            ctl.comJST.GX3x(C2x, e2x[C2x])
        }
    };
    b2x.bk3x = function (e2x) {
        this.bm3x(e2x)
    };
    b2x.bD3x = function () {
        this.bG3x()
    };
    c2x("ctl").comJSTUtil = kV6P.buj7c.gp5u()
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c2x("nej.e"),
        dw4A = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        w2x = c2x("nm.w"),
        gt5y = c2x("nm.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        m2x = c2x("nm.l"),
        bue6Y = [2, 3],
        dZ4d = ["sn", "db"],
        b2x, K2x, crI9z = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        },
        bdS0x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        },
        bRK3x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        },
        crH9y = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        GP3x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        },
        FullscreenApi = l2x.FX3x || {};
    m2x.qg8Y = NEJ.C();
    b2x = m2x.qg8Y.N2x(m2x.el4p);
    K2x = m2x.qg8Y.ct3x;
    b2x.bk3x = function (e2x) {
        if (e2x.onclose === undefined) {
            e2x.onclose = this.bRP3x.g2x(this)
        }
        this.bm3x(e2x);
        this.Cv2x = e2x.isPub;
        this.jK6E = e2x.rid || -1;
        this.et4x = e2x.type || -1;
        this.btU6O = e2x.purl;
        this.Nb5g = e2x.name || "";
        this.Nm5r = e2x.author || "";
        this.btP6J = e2x.authors || "";
        this.bdO0x = e2x.actId;
        this.bdN0x = e2x.actName;
        this.bSp3x = e2x.title;
        this.bdI0x = {};
        this.crD9u = e2x.mesg || "";
        this.crC9t = e2x.placeholder || "说点什么吧";
        this.btv6p = e2x.hideTip;
        this.crB9s = e2x.videoJumpUrl;
        var i2x, eT4X = +(new Date);
        try {
            i2x = top.localCache.B2x("user") || {}
        } catch (e) {
            i2x = {}
        }
        for (var i = 0, i2x = i2x.bindings || [], eM4Q; i < i2x.length; ++i) {
            eM4Q = !i2x[i].tokenJsonStr ? null : JSON.parse(i2x[i].tokenJsonStr);
            if (!eM4Q || eM4Q.expires_in === undefined) continue;
            var bdE0x = parseInt(eM4Q.expires_in),
                bdD0x = parseInt(i2x[i].refreshTime),
                crA9r = (bdE0x + bdD0x) * 1e3 - 5 * 60 * 1e3;
            if (crA9r > eT4X) this.bdI0x[i2x[i].type] = !0
        }
        this.xe0x = w2x.HA3x.A2x({
            parent: this.bdz0x,
            err: this.bSP3x
        });
        if (this.hD5I) {
            this.hD5I.T3x()
        }
        this.hD5I = w2x.SQ6K.A2x({
            parent: document.body,
            target: this.ew4A
        });
        if (this.et4x == 24 || this.et4x == 21 || this.et4x == 41 || this.GG3x()) {
            this.zh1x.style.display = "none"
        } else {
            this.zh1x.style.display = "";
            this.pk8c = w2x.bom5r.A2x({
                parent: this.bsX6R,
                button: this.zh1x,
                onstartupload: this.bSY3x.g2x(this, true),
                onfinishupload: this.bSY3x.g2x(this, false)
            })
        }
        if (this.GG3x()) {
            this.qd8V.innerText = "";
            a2x.y2x(this.qd8V, "info-video");
            a2x.y2x(this.bsS6M, "f-hide")
        } else {
            a2x.x2x(this.bsS6M, "f-hide")
        }
    };
    b2x.bD3x = function () {
        this.bG3x();
        if (this.xe0x) {
            this.xe0x.T3x();
            delete this.xe0x
        }
        if (this.hD5I) {
            this.hD5I.T3x();
            delete this.hD5I
        }
        if (this.pk8c) {
            this.pk8c.T3x();
            delete this.pk8c
        }
        if (this.mG7z) {
            this.mG7z.T3x();
            delete this.mG7z
        }
    };
    b2x.cf3x = function () {
        this.ce3x = "m-wgt-sharewin"
    };
    b2x.bW3x = function () {
        this.cg3x();
        this.bTm3x = a2x.dk4o(this.n2x)[0];
        var bu3x = a2x.H2x(this.n2x, "j-flag");
        this.qq8i = bu3x.shift();
        this.bSP3x = bu3x.shift();
        this.bdz0x = bu3x.shift();
        this.ew4A = bu3x.shift();
        this.qd8V = bu3x.shift();
        this.bsN6H = bu3x.shift();
        this.crz9q = bu3x.shift();
        this.zh1x = bu3x.shift();
        this.cu3x = bu3x.shift();
        this.bsX6R = bu3x.shift();
        this.BY2x = bu3x.shift();
        this.cFz2x = bu3x.shift();
        this.bsS6M = bu3x.shift();
        this.ek4o = bu3x.shift();
        this.bds0x = a2x.H2x(this.bsS6M, "j-t");
        this.CP2x = I2x.FS3x.A2x({
            list: a2x.dk4o(this.qq8i),
            selected: "z-slt",
            onchange: this.bsJ6D.g2x(this)
        });
        if (dw4A.ds4w.browser == "ie" && dw4A.ds4w.version < "8.0") {
            a2x.ba3x(this.bdz0x, "position", "relative");
            a2x.ba3x(this.bdz0x, "zIndex", "10")
        }
        h2x.s2x(window, "snsbind", this.OG5L.g2x(this));
        h2x.s2x(this.ew4A, "input", this.fR5W.g2x(this));
        h2x.s2x(this.ew4A, "keyup", this.vC0x.g2x(this));
        h2x.s2x(this.n2x, "click", this.cL4P.g2x(this));
        this.S3x = q2x.blI4M.A2x();
        this.S3x.s2x("onshareall", this.bdr0x.g2x(this, 0));
        this.S3x.s2x("onshareerror", this.iN6H.g2x(this));
        this.S3x.s2x("onshareprivate", this.bdr0x.g2x(this, 1));
        this.bdq0x = q2x.zM1x.A2x();
        this.gz5E = q2x.hP5U.A2x();
        try {
            this.OM5R = top.api.sharePermission
        } catch (e) {}
        if (!this.OM5R) {
            this.OM5R = GP3x;
            v2x.bn3x("/api/event/user/permission", {
                type: "json",
                onload: function (d2x) {
                    if (d2x.code == 200) {
                        this.OM5R = NEJ.EX(GP3x, d2x)
                    }
                }.g2x(this)
            })
        }
    };
    b2x.bsJ6D = function (d2x) {
        d2x.index == 0 ? a2x.x2x(this.bTm3x, "m-plshare") : a2x.y2x(this.bTm3x, "m-plshare");
        this.bdz0x.style.display = d2x.index == 0 ? "none" : "";
        this.crz9q.style.display = d2x.index == 0 ? "" : "none";
        this.zh1x.style.display = d2x.index == 0 ? "" : "none";
        if (this.et4x == 24 || this.et4x == 21) {
            this.zh1x.style.display = "none"
        }
        this.bSP3x.style.display = "none";
        this.ew4A.value = "";
        this.ch3x();
        this.Gk3x();
        if (d2x.index == 0) {
            var cA3x = a2x.de4i(this.ew4A, "width");
            if (cA3x == "auto" || !cA3x) {
                return
            } else {
                if (this.hD5I) {
                    this.hD5I.T3x()
                }
                this.hD5I = w2x.SQ6K.A2x({
                    parent: document.body,
                    target: this.ew4A
                })
            }
            this.bsX6R.style.display = ""
        } else {
            if (this.hD5I) {
                this.hD5I.T3x();
                delete this.hD5I
            }
            this.bsX6R.style.display = "none"
        }
    };
    b2x.cL4P = function (d2x) {
        var f2x = h2x.W3x(d2x, "d:action");
        if (!f2x) return;
        if (a2x.t2x(f2x, "action") == "search") {
            h2x.cr3x(d2x)
        } else if (a2x.t2x(f2x, "default") === undefined) {
            h2x.cr3x(d2x)
        }
        switch (a2x.t2x(f2x, "action")) {
            case "txt":
                this.me7X();
                break;
            case "search":
                if (this.GG3x()) {
                    top.location.href = this.crB9s
                } else if (this.Cv2x && this.et4x != 24) {
                    if (this.mG7z) {
                        this.mG7z.T3x()
                    }
                    this.mG7z = w2x.bvy7r.A2x({
                        parent: this.n2x.parentNode,
                        onfinish: this.bsA6u.g2x(this),
                        oncancel: this.crt9k.g2x(this)
                    });
                    this.bsy6s = true;
                    this.n2x.style.display = "none";
                    this.Gi3x(this.jK6E < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case "at":
                h2x.sX9O(d2x);
                !!this.ht5y && this.ht5y.bt3x();
                this.hD5I.SH6B();
                this.gh5m();
                break;
            case "emot":
                h2x.sX9O(d2x);
                !!this.hD5I && this.hD5I.HK3x();
                if (!this.ht5y) {
                    this.ht5y = m2x.Ie3x.A2x({
                        parent: this.bsN6H
                    });
                    this.ht5y.s2x("onselect", this.xV0x.g2x(this))
                }
                this.ht5y.L2x();
                break;
            case "upload":
                break;
            case "sns":
                h2x.bh3x(d2x);
                var bsl6f, bv3x, u2x = a2x.t2x(f2x, "type");
                if (!this.bdI0x[u2x]) {
                    bsl6f = f2x.href.split("?");
                    bv3x = k2x.hx5C(bsl6f[1]);
                    bv3x["csrf_token"] = v2x.gB5G("__csrf");
                    top.open(bsl6f[0] + "?" + k2x.cC3x(bv3x));
                    return
                }
                var by3x = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l2x.Cr2x(f2x, "u-slg-" + by3x[u2x] + "-gray");
                break;
            case "close":
                !!this.ht5y && this.ht5y.bt3x();
                this.bRP3x();
                break;
            case "share":
                h2x.bh3x(d2x);
                if (this.GG3x()) {
                    if (!a2x.bF3x(f2x, "u-btn2-2-dis")) {
                        this.crs9j()
                    }
                } else if (a2x.bF3x(f2x, "u-btn2-2-dis")) {
                    if (!this.OM5R.pubEventWithoutResource && this.jK6E < 0) {
                        this.crr9i()
                    } else {}
                } else if (this.jK6E < 0 && !this.ew4A.value && this.pk8c && this.pk8c.Rw6q().length == 0) {
                    m2x.Z3x.L2x({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.crp9g()
                }
                break
        }
    };
    b2x.crr9i = function () {
        var tD9u = 0,
            brZ6T = function () {
                if (tD9u % 2) {
                    a2x.x2x(this.qd8V, "z-show")
                } else {
                    a2x.y2x(this.qd8V, "z-show")
                }
                tD9u++;
                if (tD9u > 5) {
                    clearInterval(ei4m)
                }
            },
            ei4m;
        return function () {
            tD9u = 0;
            clearInterval(ei4m);
            ei4m = setInterval(brZ6T.g2x(this), 200)
        }
    }();
    b2x.OG5L = function (o2x) {
        o2x = o2x.result;
        this.bdI0x[o2x.type] = !0;
        var r2x = k2x.dj4n(bue6Y, o2x.type),
            ci3x = "u-slg-" + dZ4d[r2x] + "-gray";
        a2x.x2x(this.bds0x[r2x], ci3x)
    };
    b2x.bsA6u = function (bz3x) {
        var j2x = bz3x.data;
        this.jK6E = bz3x.id;
        this.et4x = bz3x.type;
        this.n2x.style.display = "";
        this.Gi3x(this.bSp3x);
        this.mG7z && this.mG7z.T3x();
        this.bsy6s = false;
        this.btU6O = j2x.picUrl;
        this.Nb5g = j2x.title || "";
        this.Nm5r = j2x.author || "";
        this.btP6J = j2x.authors || "";
        this.cro9f();
        this.bdj0x()
    };
    b2x.crt9k = function () {
        this.mG7z && this.mG7z.T3x();
        this.n2x.style.display = "";
        this.Gi3x(this.bSp3x);
        this.bsy6s = false;
        this.bdj0x()
    };
    b2x.xV0x = function (d2x) {
        var bo3x = "[" + d2x.text + "]";
        gt5y.Ij3x(this.ew4A, this.pm8e, bo3x);
        this.gh5m()
    };
    b2x.fR5W = function (d2x) {
        dw4A.ds4w.browser == "ie" && dw4A.ds4w.version < "7.0" ? setTimeout(this.gh5m.g2x(this), 0) : this.gh5m()
    };
    b2x.vC0x = function (d2x) {
        this.me7X();
        if (d2x.keyCode == 8) this.gh5m()
    };
    b2x.gh5m = function () {
        this.me7X();
        this.Gk3x()
    };
    b2x.Gk3x = function () {
        var bq3x = Math.ceil(k2x.fw5B(this.ew4A.value.trim()) / 2);
        this.cu3x.innerText = 140 - bq3x;
        bq3x > 140 ? a2x.fk4o(this.cu3x, "s-fc4", "s-fc6") : a2x.fk4o(this.cu3x, "s-fc6", "s-fc4")
    };
    b2x.crp9g = function () {
        if (this.cO4S()) return;
        if (k2x.fw5B(this.ew4A.value.trim()) > 280) {
            this.ch3x("字数超过140个字符");
            return
        }
        var u2x = this.CP2x.tY9P(),
            j2x;
        if (u2x == 0) {
            for (var i = 0, IO4S = []; i < this.bds0x.length; ++i) {
                if (!a2x.bF3x(this.bds0x[i], "u-slg-" + dZ4d[i] + "-gray")) IO4S.push(bue6Y[i])
            }
            this.cO4S(!0);
            j2x = {
                id: this.jK6E,
                msg: this.ew4A.value.trim(),
                type: this.bcZ0x(this.et4x),
                picUrl: this.btU6O,
                snsTypes: IO4S.join(","),
                isPub: this.Cv2x
            };
            if (this.bdO0x > 0) {
                j2x.actId = this.bdO0x;
                if (this.bdN0x) {
                    j2x.msg = "#" + this.bdN0x + "#" + j2x.msg
                }
            }
            var nI7B = this.pk8c && this.pk8c.Rw6q();
            if (nI7B && nI7B.length) {
                j2x.pics = nI7B
            }
            this.S3x.cvn0x(j2x)
        } else {
            var sI9z = this.xe0x.Qr6l();
            if (sI9z.length <= 0) {
                this.ch3x("请至少选择一位好友");
                return
            }
            this.S3x.cvm0x({
                data: {
                    id: this.jK6E,
                    msg: this.ew4A.value.trim(),
                    type: this.bcZ0x(this.et4x == 41 ? 39 : this.et4x),
                    userIds: "[" + sI9z.join(",") + "]"
                }
            })
        }
    };
    b2x.crs9j = function () {
        if (this.cO4S()) {
            return
        }
        this.gz5E.eU4Y("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k2x.fw5B(this.ew4A.value.trim()) > 280) {
            this.ch3x("字数超过140个字符");
            return
        }
        this.cO4S(!0);
        var j2x = {
                msg: this.ew4A.value.trim() || "",
                type: "video"
            },
            crn9e = {
                videoId: this.jK6E
            };
        if (this.bdO0x > 0) {
            j2x.actId = this.bdO0x;
            if (this.bdN0x) {
                j2x.msg = "#" + this.bdN0x + "#" + j2x.msg
            }
        }
        j2x.videoinfo = JSON.stringify(crn9e);
        this.S3x.cvl0x({
            data: {
                videoId: this.jK6E,
                commit: true
            },
            data2: j2x,
            snsTypes: ""
        })
    };
    b2x.bdr0x = function (u2x, o2x) {
        this.cO4S(!1);
        this.bt3x();
        if (!this.btv6p) {
            if (this.GG3x()) {
                m2x.Z3x.L2x({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                m2x.Z3x.L2x({
                    tip: "分享成功" + (o2x.point > 0 ? ' 获得<em class="s-fc6">' + o2x.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h2x.z2x(m2x.qg8Y, "sharesuccess", {
            isPrivate: u2x,
            rid: this.jK6E,
            rtype: this.et4x,
            data: o2x.event
        });
        this.z2x("onshare")
    };
    b2x.iN6H = function (o2x) {
        this.cO4S(!1);
        var bH3x = "分享失败";
        if (o2x.code) {
            switch (o2x.code) {
                case 404:
                    bH3x = "分享的资源不存在";
                    break;
                case 407:
                    bH3x = "输入内容包含有关键字";
                    break;
                case 408:
                    bH3x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bH3x = o2x.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l2x.fs5x({
                        clazz: "m-layer-w2",
                        btntxt: "知道了",
                        message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                    })
            }
        }
        this.ch3x(bH3x)
    };
    b2x.me7X = function () {
        this.pm8e = gt5y.vi0x(this.ew4A)
    };
    b2x.ch3x = function (bH3x) {
        this.dY4c(this.ek4o, bH3x)
    };
    b2x.cO4S = function (cZ4d) {
        return this.dX4b(this.BY2x, cZ4d, "分享", "分享中...")
    };
    b2x.bcZ0x = function (ib5g) {
        return crI9z[ib5g] || ""
    };
    b2x.crl9c = function () {
        var er4v, vs0x = this.bcZ0x(this.et4x);
        this.qd8V.style.display = "";
        if (this.jK6E < 0) {
            this.qd8V.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Nb5g) {
                this.qd8V.style.display = "none";
                return
            }
            var bcS0x = this.Cv2x && this.et4x != 24;
            er4v = (bdS0x[vs0x] ? bdS0x[vs0x] + "：" : "") + this.Nb5g + (bRK3x[vs0x] || " ") + (vs0x == "mv" || vs0x == "album" ? this.btP6J || this.Nm5r : this.Nm5r);
            a2x.dz4D(this.qd8V, "m-xwgt-share-infobar", {
                canChange: bcS0x,
                info: er4v
            });
            if (bcS0x) {
                a2x.x2x(this.qd8V, "z-dis")
            } else {
                a2x.y2x(this.qd8V, "z-dis")
            }
        }
        a2x.x2x(this.qd8V, "info-video")
    };
    b2x.cro9f = function () {
        var vs0x = this.bcZ0x(this.et4x),
            er4v = (bdS0x[vs0x] ? bdS0x[vs0x] + "：" : "") + this.Nb5g + (bRK3x[vs0x] || " ") + (vs0x == "mv" || vs0x == "album" ? this.btP6J || this.Nm5r : this.Nm5r);
        bcS0x = this.Cv2x && this.et4x != 24;
        if (this.GG3x()) {} else {
            a2x.x2x(this.qd8V, "info-video");
            a2x.dz4D(this.qd8V, "m-xwgt-share-infobar", {
                canChange: bcS0x,
                isPub: this.Cv2x,
                info: er4v
            })
        }
    };
    b2x.crj9a = function () {
        var IT4X = this.ew4A.value;
        if (this.Cv2x) {
            if (!!this.bsy6s) {
                return !!IT4X && !!IT4X.length || !!this.pk8c && this.pk8c.Rw6q().length > 0
            } else {
                return !(this.jK6E < 0) || !!IT4X && !!IT4X.length || !!this.pk8c && this.pk8c.Rw6q().length > 0
            }
        } else {
            return !!IT4X && !!IT4X.length || !!this.pk8c && this.pk8c.Rw6q().length > 0
        }
    };
    b2x.bdj0x = function () {
        var bUK4O = false;
        if (!this.Cv2x || this.OM5R.pubEventWithoutResource || !(this.jK6E < 0)) {
            bUK4O = true
        }
        if (bUK4O) {
            a2x.x2x(this.BY2x, "u-btn2-2-dis")
        } else {
            a2x.y2x(this.BY2x, "u-btn2-2-dis")
        }
    };
    b2x.bSY3x = function (brf6Z) {
        if (brf6Z) {
            a2x.y2x(this.BY2x, "u-btn2-2-dis")
        } else {
            this.bdj0x()
        }
    };
    b2x.bRP3x = function (d2x) {
        if (d2x) {
            d2x.stopped = true
        }
        if (this.crj9a()) {
            l2x.hq5v({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (U3x) {
                    if (U3x == "ok") {
                        this.z2x("forceclose", {});
                        this.bt3x();
                        h2x.z2x(m2x.qg8Y, "shareclose", {})
                    }
                }.g2x(this)
            })
        } else {
            this.z2x("forceclose", {});
            this.bt3x();
            h2x.z2x(m2x.qg8Y, "shareclose", {})
        }
    };
    b2x.Gi3x = function (em4q, dR4V) {
        this.oH8z.BF2x(em4q, dR4V)
    };
    b2x.bcR0x = function (u2x) {
        this.gz5E.eU4Y("page", {
            type: u2x
        })
    };
    b2x.GG3x = function () {
        return this.et4x == 39
    };
    b2x.L2x = function () {
        var cri9Z = function (p2x, r2x) {
            var ci3x = "u-slg-" + dZ4d[r2x] + "-gray";
            !this.bdI0x[bue6Y[r2x]] ? a2x.y2x(p2x, ci3x) : a2x.x2x(p2x, ci3x)
        };
        return function () {
            K2x.L2x.call(this);
            this.n2x.style.display = "";
            this.ch3x();
            this.cO4S(!1);
            this.CP2x.Qu6o(0);
            this.ew4A.focus();
            this.ew4A.value = this.crD9u || "";
            this.ew4A.placeholder = this.crC9t || "";
            if (!this.GG3x()) {
                this.crl9c()
            } else {
                a2x.y2x(this.qd8V, "info-video");
                a2x.dz4D(this.qd8V, "m-xwgt-share-videobar", {
                    title: this.Nb5g,
                    picUrl: this.btU6O
                })
            }
            this.gh5m();
            this.xe0x.csG9x();
            k2x.bd3x(this.bds0x, cri9Z, this);
            this.me7X();
            if (this.Cv2x) {
                this.qq8i.style.display = "none"
            } else {
                this.qq8i.style.display = ""
            }
            this.bdj0x()
        }
    }();
    b2x.bt3x = function (d2x) {
        K2x.bt3x.call(this);
        !!this.ht5y && this.ht5y.bt3x();
        if (this.xe0x) {
            this.xe0x.T3x();
            delete this.xe0x
        }
        if (this.hD5I) {
            this.hD5I.T3x();
            delete this.hD5I
        }
        if (this.pk8c) {
            this.pk8c.T3x();
            delete this.pk8c
        }
        if (this.bUR4V) {
            this.bUR4V = this.bUR4V.T3x()
        }
        if (this.mG7z) {
            this.mG7z.T3x();
            delete this.mG7z
        }
    };
    l2x.kZ6T = function (e2x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e2x.title === undefined) {
            e2x.title = "分享"
        }
        if (e2x.actId && e2x.type != 39) {
            var u2x = crH9y[e2x.resourceType],
                bV3x = e2x.resourceJson,
                ig5l;
            if (k2x.fF5K(bV3x)) {
                try {
                    bV3x = JSON.parse(bV3x)
                } catch (e) {}
            }
            if (u2x) {
                ig5l = l2x.bNo1x(u2x, bV3x);
                e2x.name = ig5l.title;
                e2x.author = ig5l.author;
                e2x.picUrl = ig5l.picUrl;
                e2x.type = u2x;
                e2x.rid = (bV3x || []).id
            }
        }
        m2x.qg8Y.L2x(e2x)
    };
    I2x.fJ5O.A2x({
        element: m2x.qg8Y,
        event: ["sharesuccess", "shareclose"]
    })
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        h2x = c2x("nej.v"),
        a2x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        m2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bC3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    m2x.bcN0x = NEJ.C();
    b2x = m2x.bcN0x.N2x(m2x.el4p);
    K2x = m2x.bcN0x.ct3x;
    b2x.cx3x = function () {
        this.cF3x()
    };
    b2x.bW3x = function () {
        this.cg3x();
        var i2x = a2x.H2x(this.n2x, "j-flag");
        h2x.s2x(i2x[0], "click", this.FV3x.g2x(this))
    };
    b2x.cf3x = function () {
        this.ce3x = "m-import-ok"
    };
    b2x.bk3x = function (e2x) {
        e2x.parent = e2x.parent || document.body;
        e2x.title = "歌曲同步完成";
        this.bm3x(e2x)
    };
    b2x.bD3x = function () {
        this.bG3x()
    };
    b2x.FV3x = function (d2x) {
        this.bt3x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b2x.Ct2x = function () {
        this.bt3x()
    };
    b2x.bSV3x = function (d2x) {
        if (d2x.keyCode == 13) this.Hj3x()
    }
})();
(function () {
    var c2x = NEJ.P,
        bb3x = NEJ.O,
        h2x = c2x("nej.v"),
        a2x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        m2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bC3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    m2x.bxt7m = NEJ.C();
    b2x = m2x.bxt7m.N2x(m2x.el4p);
    b2x.cf3x = function () {
        this.ce3x = "m-programtips-layer"
    };
    b2x.bW3x = function () {
        this.cg3x();
        this.bU3x = a2x.H2x(this.n2x, "j-flag")
    };
    b2x.bk3x = function (e2x) {
        if (e2x.inner) {
            var innerNode = a2x.H2x(this.n2x, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e2x.inner
            }
        }
        e2x.clazz = " m-layer-programtips " + (e2x.clazz || "");
        e2x.parent = e2x.parent || document.body;
        e2x.title = e2x.title || "付费内容提示";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bm3x(e2x);
        this.hc5h = e2x.id;
        this.crh9Y = e2x.radiotype;
        this.kK6E = location.protocol + "//" + (this.bqU6O() || "music.163.com") + "/m/" + this.crh9Y + "?id=" + this.hc5h;
        this.kK6E = e2x.url || this.kK6E;
        this.crg9X()
    };
    b2x.bD3x = function () {
        this.bG3x()
    };
    b2x.Ct2x = function () {
        this.bt3x()
    };
    b2x.FV3x = function (d2x) {
        this.z2x("onok", D2x);
        this.bt3x()
    };
    l2x.bqQ6K = function (e2x) {
        m2x.bxt7m.A2x(e2x).L2x()
    };
    b2x.crg9X = function () {
        v2x.bn3x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k2x.cC3x({
                url: this.kK6E,
                size: 180
            }),
            onload: function (j2x) {
                if (j2x.code == 200) {
                    this.crf9W(j2x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g2x(this)
        })
    };
    b2x.bqU6O = function () {
        var Vr7k = location.host;
        if (Vr7k.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b2x.crf9W = function (jW6Q) {
        this.bU3x[0].style.backgroundImage = "url(" + jW6Q + ")"
    }
})();
(function () {
    var c2x = NEJ.P,
        a2x = c2x("nej.e"),
        dw4A = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        E2x = c2x("nm.m"),
        m2x = c2x("nm.l"),
        M2x = c2x("nm.m.f"),
        b2x, K2x;
    E2x.df4j = NEJ.C();
    b2x = E2x.df4j.N2x(I2x.dt4x);
    b2x.bL3x = function () {
        var qx8p = !1;
        return function () {
            if (qx8p) return;
            qx8p = !0;
            this.bR3x();
            if (top == self) {
                return
            }
            this.tJ9A = a2x.B2x("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bxF7y()
            }
            I2x.fJ5O.A2x({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX3x([
                [window, "scroll", this.BH2x.g2x(this)],
                [document, "keyup", this.cqZ9Q.g2x(this)],
                [document.body, "click", this.sM9D.g2x(this)],
                [document, "mouseup", this.cqW9N.g2x(this)],
                [this.tJ9A, "click", this.QB6v.g2x(this)],
                [q2x.tF9w, "message", this.va0x.g2x(this)]
            ]);
            l2x.cvv0x(document.body);
            this.BH2x();
            if (this.BG2x !== false && typeof GUser !== "undefined" && GUser.userId > 0) q2x.tF9w.gp5u().vn0x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dw4A.ds4w.browser == "ie" && parseInt(dw4A.ds4w.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hk5p = top.player.getPlaying();
                    if (hk5p && hk5p.track && hk5p.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hk5p.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.zj1x.g2x(this);
            this.kp6j = q2x.hP5U.A2x();
            window.log = this.hi5n.g2x(this);
            var td9U = location.search;
            if (td9U) {
                var bv3x = td9U.substr(td9U.indexOf("?") + 1),
                    gq5v = k2x.hx5C(bv3x);
                if (gq5v && gq5v["_hash"]) location.hash = gq5v["_hash"]
            }
        }
    }();
    b2x.cqZ9Q = function (d2x) {
        var f2x = h2x.W3x(d2x);
        try {
            if (d2x.keyCode == 80 && l2x.bIJ0x() || ["textarea", "input"].indexOf(f2x.tagName.toLowerCase()) >= 0) return;
            h2x.z2x(top.document, "keyup", {
                ctrlKey: d2x.ctrlKey,
                keyCode: d2x.keyCode
            })
        } catch (e) {}
    };
    b2x.sM9D = function (d2x) {
        var f2x = h2x.W3x(d2x);
        if (f2x && f2x.tagName == "INPUT") return;
        var f2x = h2x.W3x(d2x, "d:pid");
        if (f2x) {
            h2x.cr3x(d2x);
            var py8q = a2x.t2x(f2x, "pid"),
                BC1x = a2x.t2x(f2x, "ptype"),
                U3x = a2x.t2x(f2x, "action") || "play";
            switch (U3x) {
                case "subscribe":
                    l2x.mQ7J({
                        tracks: [py8q]
                    });
                    break
            }
        }
        f2x = h2x.W3x(d2x, "d:resAction");
        if (f2x && f2x.className.indexOf("-dis") == -1) {
            var cT4X = a2x.t2x(f2x, "resId"),
                u2x = a2x.t2x(f2x, "resType"),
                bqj6d = a2x.t2x(f2x, "resRadiotype"),
                bqi6c = a2x.t2x(f2x, "resRadioid"),
                eb4f = a2x.t2x(f2x, "resFrom"),
                j2x = a2x.t2x(f2x, "resData"),
                U3x = a2x.t2x(f2x, "resAction"),
                bwl7e = a2x.t2x(f2x, "resCopyright"),
                bcy0x = a2x.t2x(f2x, "resAuditstatus");
            if (U3x != "log" && U3x != "bilog") h2x.cr3x(d2x);
            switch (U3x) {
                case "log":
                    j2x = (j2x || "").split("|");
                    if (!!j2x[0]) {
                        var bg3x = {
                            id: cT4X,
                            alg: j2x[2] || "itembased",
                            scene: j2x[3],
                            position: j2x[1] || 0
                        };
                        if (!!j2x[4]) bg3x.srcid = j2x[4];
                        window.log(j2x[0], bg3x)
                    }
                    break;
                case "bilog":
                    var bms5x = a2x.t2x(f2x, "logAction"),
                        bmG5L = a2x.t2x(f2x, "logJson");
                    window.log(bms5x, bmG5L);
                    break;
                case "share":
                    if (bcy0x && bcy0x == 1) {
                        l2x.iA5F("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cT4X, u2x, a2x.t2x(f2x, "resPic"), a2x.t2x(f2x, "resName"), a2x.t2x(f2x, "resAuthor"), a2x.t2x(f2x, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (u2x == 18) {
                        var qF8x = a2x.t2x(f2x, "resLevel"),
                            of7Y = a2x.t2x(f2x, "resFee");
                        if (qF8x == 10) {
                            l2x.uY0x(of7Y, cT4X, "song");
                            break
                        }
                        l2x.mQ7J({
                            tracks: [cT4X]
                        })
                    }
                    break;
                case "download":
                    l2x.Li4m({
                        id: cT4X,
                        type: u2x
                    });
                    break;
                case "programtips":
                    if (bcy0x && bcy0x == 1) {
                        l2x.iA5F("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l2x.bqQ6K({
                            id: bqi6c,
                            radiotype: bqj6d
                        })
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d2x)
        } catch (e) {}
    };
    b2x.cqW9N = function (d2x) {
        try {
            h2x.z2x(top.document, "mouseup")
        } catch (e) {}
    };
    b2x.BH2x = function () {
        var cqV9M = function () {
            var cc3x = window.innerHeight;
            if (!k2x.wY0x(cc3x)) cc3x = (document.documentElement || document.body).clientHeight;
            return cc3x
        };
        return function (d2x) {
            if (!this.tJ9A) return;
            var bcw0x = cqV9M(),
                fV5a = document.documentElement.scrollTop || document.body.scrollTop;
            a2x.ba3x(this.tJ9A, "display", fV5a > 0 ? "" : "none");
            if (dw4A.ds4w.browser == "ie" && dw4A.ds4w.version < "7.0") {
                var gy5D = Math.min(document.body.clientHeight, bcw0x + fV5a) - 204;
                a2x.ba3x(this.tJ9A, "top", gy5D + "px")
            }
        }
    }();
    b2x.QB6v = function (d2x) {
        h2x.cr3x(d2x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b2x.zj1x = function () {
        var bpY5d = function (d2x) {
            h2x.z2x(window, "share", d2x)
        };
        return function (cT4X, u2x, zH1x, V3x, FH3x, FF3x) {
            l2x.kZ6T({
                rid: cT4X,
                type: u2x,
                purl: zH1x,
                name: V3x,
                author: FH3x,
                authors: FF3x,
                onshare: bpY5d.g2x(this)
            })
        }
    }();
    b2x.hi5n = function (U3x, bg3x) {
        try {
            top.log(U3x, bg3x)
        } catch (e) {
            if (U3x.indexOf("new|") == 0) {
                return this.kp6j.eU4Y(U3x.slice(4), bg3x)
            }
            switch (U3x) {
                case "play":
                    this.kp6j.en4r(bg3x);
                    break;
                case "search":
                    this.kp6j.bDB9s(bg3x);
                    break;
                default:
                    this.kp6j.eU4Y(U3x, bg3x)
            }
        }
    };
    b2x.bxF7y = function () {
        var bcp0x, bpF5K = false,
            bs3x = [45, 60];
        var cqU9L = function (bH3x) {
            if (bH3x.title != "MailBoxImport") return;
            var Q3x = JSON.parse(bH3x.content || "null") || bb3x;
            if (Q3x.status == 10) {
                m2x.bcN0x.A2x().L2x();
                window.clearTimeout(bcp0x)
            }
        };
        var sA9r = function (d2x) {
            if (d2x.code == 200) {
                if (d2x.status == 1) {
                    h2x.s2x(q2x.BK2x, "message", cqU9L.g2x(this));
                    q2x.BK2x.A2x().brR6L();
                    bpF5K = true
                } else {
                    if (bpF5K) {
                        if (d2x.status == 10) {
                            m2x.bcN0x.A2x().L2x();
                            h2x.hg5l(q2x.BK2x, "message");
                            window.clearTimeout(bcp0x);
                            bpF5K = false
                        }
                    } else {
                        window.clearTimeout(bcp0x)
                    }
                }
            }
        };
        return function () {
            var tQ9H = bs3x.shift() * 1e3;
            v2x.bn3x("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: sA9r.g2x(this)
            });
            if (tQ9H) {
                bcp0x = window.setTimeout(arguments.callee, tQ9H)
            }
        }
    }();
    b2x.va0x = function (d2x) {
        try {
            top.polling(d2x)
        } catch (e) {}
    }
})()