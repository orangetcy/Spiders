webpackJsonp([1], {
    1265: function (e, t) {},
    1266: function (e, t) {},
    1612: function (e, t) {},
    1879: function (e, t, n) {
        "use strict";

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function c(e) {
            var t = e.active;
            return {
                sendDigitsError: t.sendDigitsError,
                activeConfirmSucceeded: t.activeConfirmSucceeded,
                activeConfirmError: t.activeConfirmError
            }
        }

        function u(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function p(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }

        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function h(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function m(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function b(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }

        function y(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function v(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function g(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var E, w, C, O, P, N, S, _, k, T, j = n(1),
            B = n.n(j),
            D = n(0),
            I = n.n(D),
            R = n(6),
            q = n(3),
            A = n(315),
            F = n(34),
            U = n(43),
            M = n(60),
            x = n(99),
            V = (n(1265), function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }()),
            z = (E = Object(R.connect)(c, {
                getUnlockTicketAndDigits: A.c,
                activeUserByEmail: A.a,
                validateAndActiveUserByDigits: A.d,
                activeUser: F.b
            }))((O = C = function (e) {
                function t(e) {
                    r(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.checkUserAccountType = function (e) {
                        return e.email ? "email" : "noInfo"
                    }, n.handleChange = function (e, t) {
                        n.setState(o({}, e, t))
                    }, n.handleChangeSmsType = function () {
                        n.setState(function (e) {
                            var t = e.smsType;
                            return {
                                smsType: "text" === t ? "voice" : "text",
                                smsBackUpName: "text" === t ? "短信" : "语音",
                                reStartTime: Date.now()
                            }
                        })
                    }, n.handleCountDownEndEvent = function () {
                        n.setState({
                            smsBackUpDisplay: !0
                        })
                    }, n.handleSendDigits = function () {
                        var e = n.props.getUnlockTicketAndDigits,
                            t = n.state,
                            o = t.selectedCountry.code,
                            r = t.phoneNo,
                            a = t.smsType;
                        n.setState({
                            manualError: null
                        }, function () {
                            if (r) return e({
                                newPhoneNo: "" + o + r,
                                smsType: a
                            }), void n.setState({
                                smsBackUpDisplay: !1
                            });
                            n.setState({
                                manualError: "请输入手机号",
                                smsInputInterceptTime: Date.now()
                            })
                        })
                    }, n.handleSubmit = function (e) {
                        var t = n.props,
                            o = t.email,
                            r = t.activeUserByEmail,
                            a = t.validateAndActiveUserByDigits,
                            i = t.onClose,
                            c = n.state,
                            u = c.accountType,
                            l = c.selectedCountry.code,
                            s = e.username,
                            f = e.digits;
                        "email" === u ? (r({
                            email: o
                        }), "function" == typeof i && i()) : a({
                            newPhoneNo: "" + l + s,
                            digits: f
                        })
                    }, n.parseServerError = function () {
                        var e = n.props,
                            t = e.activeConfirmError,
                            o = e.sendDigitsError,
                            r = t || {},
                            a = r.username,
                            i = r.digits,
                            c = o || {},
                            u = c.username;
                        return {
                            usernameServerError: a || u,
                            digitsServerError: i
                        }
                    }, n.renderAccountInfo = function () {
                        var e = n.props.email,
                            t = n.state,
                            o = t.accountType,
                            r = t.manualError,
                            a = n.parseServerError(),
                            i = a.usernameServerError;
                        return "noInfo" !== o ? I.a.createElement("div", {
                            className: "SignFlowActive-account"
                        }, e, "email" === o && I.a.createElement("a", {
                            target: "_blank",
                            href: "/settings/account",
                            className: "SignFlowActive-editEmail"
                        }, "修改邮箱")) : I.a.createElement(M.a, {
                            type: "digits",
                            supportedCountriesShown: !0,
                            manualValidateError: i || r,
                            onSelect: function (e) {
                                return n.handleChange("selectedCountry", e)
                            },
                            onChange: function (e) {
                                return n.handleChange("phoneNo", e)
                            }
                        })
                    }, n.state = {
                        accountType: n.checkUserAccountType(e),
                        selectedCountry: {
                            code: "+86",
                            name: "中国"
                        },
                        phoneNo: null,
                        smsInputInterceptTime: -1,
                        manualError: null,
                        smsType: "text",
                        smsBackUpName: "语音",
                        smsBackUpDisplay: !0,
                        reStartTime: -1
                    }, n
                }
                return i(t, e), V(t, [{
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        var t = this.props,
                            n = t.sendDigitsError,
                            o = t.onClose,
                            r = t.activeUser,
                            a = e.activeConfirmSucceeded,
                            i = e.sendDigitsError;
                        a ? (o(), r()) : !n && i && (this.setState({
                            smsInputInterceptTime: Date.now()
                        }), this.handleCountDownEndEvent())
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.state,
                            t = e.accountType,
                            n = e.smsInputInterceptTime,
                            o = e.smsType,
                            r = e.smsBackUpName,
                            a = e.smsBackUpDisplay,
                            i = e.reStartTime,
                            c = this.parseServerError(),
                            u = c.digitsServerError;
                        return I.a.createElement(U.b, {
                            className: "SignFlowActive SignFlow",
                            onSubmit: this.handleSubmit
                        }, this.renderAccountInfo(), "email" !== t && [I.a.createElement(x.a, {
                            key: "sms-input",
                            manualValidateError: u,
                            interceptTime: n,
                            countDownEvent: this.handleSendDigits,
                            countDownEndEvent: this.handleCountDownEndEvent,
                            smsType: o,
                            reStartTime: i
                        }), a && I.a.createElement("div", {
                            key: "smsBackUp-button",
                            className: "SignFlowActive-options"
                        }, I.a.createElement(q.default, {
                            preset: "plain",
                            className: "SignFlowActive-cutSmsType",
                            onClick: this.handleChangeSmsType
                        }, "接收" + r + "验证码"))], I.a.createElement(q.default, {
                            className: "email" === t ? "SignFlowActive-sendEmail" : "SignFlowActive-sendDigits",
                            preset: "primary",
                            color: "blue",
                            type: "submit"
                        }, "email" === t ? "发送激活邮件" : "激活"))
                    }
                }]), t
            }(D.Component), C.propTypes = {
                email: B.a.string,
                sendDigitsError: B.a.object,
                getUnlockTicketAndDigits: B.a.func,
                activeUserByEmail: B.a.func,
                validateAndActiveUserByEmail: B.a.func,
                activeConfirmSucceeded: B.a.bool,
                activeConfirmError: B.a.object,
                onClose: B.a.func
            }, w = O)) || w,
            W = z,
            H = n(29),
            L = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            K = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            Y = (N = P = function (e) {
                function t() {
                    var e, n, o, r;
                    l(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = o = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.state = {
                        snackbar: null
                    }, o.handleSetSnackbar = function (e) {
                        return o.setState({
                            snackbar: e
                        })
                    }, r = n, s(o, r)
                }
                return f(t, e), K(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.shown,
                            n = e.onClose,
                            o = u(e, ["shown", "onClose"]);
                        return I.a.createElement(H.default, {
                            className: "SignFlow-modal",
                            title: "激活帐号",
                            subtitle: "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机",
                            onClose: n,
                            maskClosable: !1,
                            footer: this.state.snackbar
                        }, t && I.a.createElement(W, L({
                            onClose: n,
                            onSetSnackbar: this.handleSetSnackbar
                        }, o)))
                    }
                }]), t
            }(D.Component), P.propTypes = {
                shown: B.a.bool.isRequired,
                onClose: B.a.func.isRequired
            }, N),
            G = Y,
            Z = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            J = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            $ = (_ = S = function (e) {
                function t() {
                    return d(this, t), h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return m(t, e), J(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.isInModal,
                            n = e.shown,
                            o = e.onClose,
                            r = p(e, ["isInModal", "shown", "onClose"]);
                        return I.a.createElement("div", null, t ? I.a.createElement(G, Z({
                            onClose: o,
                            shown: n
                        }, r)) : I.a.createElement(W, r))
                    }
                }]), t
            }(D.Component), S.propTypes = {
                isInModal: B.a.bool,
                shown: B.a.bool,
                onClose: B.a.func
            }, S.defaultProps = {
                isInModal: !1
            }, _),
            Q = $,
            X = (n(323), Q),
            ee = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            te = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            ne = (T = k = function (e) {
                function t() {
                    return y(this, t), v(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return g(t, e), te(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.type,
                            n = b(e, ["type"]),
                            o = ee({
                                isInModal: !0
                            }, n);
                        return I.a.createElement("div", {
                            className: "SignFlowModal"
                        }, I.a.createElement(X, ee({}, o, {
                            shown: "active" === t
                        })))
                    }
                }]), t
            }(D.Component), k.propTypes = {
                type: B.a.oneOf(["initial", "active"]),
                onClose: B.a.func.isRequired
            }, T);
        t.default = ne
    },
    1880: function (e, t, n) {
        "use strict";

        function o(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function r(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function p(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function h(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function b(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function y(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function v(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function g(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function E(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function w(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function C(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function O(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function P(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function N(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function S(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _, k, T, j, B, D, I, R, q, A, F, U, M, x, V = n(1),
            z = n.n(V),
            W = n(0),
            H = n.n(W),
            L = n(6),
            K = n(319),
            Y = n(3),
            G = n(48),
            Z = n.n(G),
            J = n(7),
            $ = n(43),
            Q = n(60),
            X = n(312),
            ee = n(313),
            te = n(44),
            ne = (n(1612), Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }),
            oe = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            re = function (e, t) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["", "s 后可重发"], ["", "s 后可重发"]),
            ae = (_ = Object(L.connect)(function (e) {
                return {
                    isIOS: e.env.userAgent.iOS
                }
            }))((j = T = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return c(t, e), oe(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.countDownEvent,
                            n = e.startAtOnce,
                            a = e.interceptTime,
                            i = e.resetText,
                            c = e.manualValidateError,
                            u = e.onChange,
                            l = e.validations,
                            s = e.countDownEndEvent,
                            f = e.reStartTime,
                            p = e.isIOS,
                            d = r(e, ["countDownEvent", "startAtOnce", "interceptTime", "resetText", "manualValidateError", "onChange", "validations", "countDownEndEvent", "reStartTime", "isIOS"]);
                        return H.a.createElement("div", {
                            className: "SignFlow SignFlow-smsBindPhoneInputContainer"
                        }, H.a.createElement(te.a, ne({
                            name: "digits",
                            className: "SignFlow-smsBindPhoneInput",
                            type: p ? "tel" : "number",
                            errorMessageClassName: "SignFlow-smsBindPhoneInputErrorMask",
                            placeholder: "输入 6 位验证码",
                            manualValidateError: c,
                            onChange: u,
                            validations: [{
                                type: "required",
                                message: "请填写验证码",
                                className: "SignFlow-smsInputBindPhoneRequiredErrorMask"
                            }].concat(o(l || []))
                        }, d)), H.a.createElement(X.a, {
                            className: "SignFlow-smsBindPhoneInputButton",
                            preset: "plain",
                            initialText: "发送验证码",
                            resetText: i,
                            countingText: Object(ee.a)(re, "count"),
                            startAtOnce: n,
                            event: t,
                            countDownEndEvent: s,
                            interceptTime: a,
                            reStartTime: f
                        }))
                    }
                }]), t
            }(W.Component), T.propTypes = {
                countDownEvent: z.a.func.isRequired,
                startAtOnce: z.a.bool,
                interceptTime: z.a.number,
                resetText: z.a.string,
                manualValidateError: z.a.string
            }, T.defaultProps = {
                startAtOnce: !1,
                resetText: "重发验证码"
            }, k = j)) || k,
            ie = ae,
            ce = n(13),
            ue = (n(1265), n(1266), function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }()),
            le = (D = B = function (e) {
                function t() {
                    var e, n, o, r;
                    l(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = o = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.state = {
                        selectedCountry: {
                            code: "+86",
                            name: "中国"
                        },
                        phoneNo: null,
                        smsInputInterceptTime: -1,
                        manualError: null,
                        showFooter: !1,
                        sendValidationCodeButtonText: "发送验证码",
                        identifyingCodeError: null
                    }, o.testPhoneNo = function () {
                        var e = o.state,
                            t = e.selectedCountry.code,
                            n = e.phoneNo,
                            r = /^\d{11}$/;
                        return "+86" !== t || r.test(n)
                    }, o.handleChange = function (e) {
                        return function (t) {
                            o.setState(u({}, e, t))
                        }
                    }, o.handleSendDigits = function (e) {
                        var t = o.props.requestPhoneVerificationCode,
                            n = o.state,
                            r = n.selectedCountry.code,
                            a = n.phoneNo,
                            i = n.manualError;
                        if (J.default.trackEvent(e.target, {
                                action: "GetCaptcha"
                            }), o.testPhoneNo()) return t("" + r + a).then(function () {
                            o.setState({
                                manualError: null
                            })
                        }).catch(function (e) {
                            var t = e.payload;
                            t = void 0 === t ? {} : t;
                            var n = t.message;
                            return o.setState({
                                manualError: n,
                                smsInputInterceptTime: Date.now()
                            })
                        });
                        return o.setState({
                            manualError: "请输入正确的手机号" === i ? " 请输入正确的手机号" : "请输入正确的手机号",
                            smsInputInterceptTime: Date.now()
                        })
                    }, o.handleSubmit = function (e) {
                        var t = e.phoneNo,
                            n = e.digits,
                            r = o.props,
                            a = r.updatePhoneNumber,
                            i = r.onSuccess,
                            c = r.onNeedUnbind,
                            u = o.state,
                            l = u.selectedCountry.code,
                            s = u.identifyingCodeError;
                        a("" + l + t, n).then(function (e) {
                            var n = e.payload,
                                o = n.data;
                            if (n.success) return i();
                            var r = o.bindedAccountFullname,
                                a = o.requestAccountFullname;
                            return c({
                                phoneNumber: t,
                                bindName: r,
                                requiredName: a
                            })
                        }).catch(function (e) {
                            var t = e.payload;
                            t = void 0 === t ? {} : t;
                            var n = t.code,
                                r = t.message;
                            n === ce.m && o.setState({
                                identifyingCodeError: s === r ? " " + r : r
                            })
                        })
                    }, o.handleZaOK = function (e) {
                        J.default.trackEvent(e.target, {
                            action: "Ok"
                        })
                    }, o.renderContent = function () {
                        var e = o.state,
                            t = e.smsInputInterceptTime,
                            n = e.manualError,
                            r = e.sendValidationCodeButtonText,
                            a = e.identifyingCodeError;
                        return H.a.createElement("div", {
                            ref: function (e) {
                                o.container = e
                            }
                        }, H.a.createElement($.b, {
                            className: "SignFlowActive SignFlow BindPhoneForm",
                            onSubmit: o.handleSubmit
                        }, !1, H.a.createElement(Q.a, {
                            type: "register",
                            supportedCountriesShown: !0,
                            manualValidateError: n,
                            onSelect: o.handleChange("selectedCountry"),
                            onChange: o.handleChange("phoneNo")
                        }), H.a.createElement(ie, {
                            key: "sms-input",
                            resetText: r,
                            interceptTime: t,
                            countDownEvent: o.handleSendDigits,
                            manualValidateError: a
                        }), H.a.createElement("div", {
                            className: "BindPhone-helpWrapper"
                        }, H.a.createElement(Y.default, {
                            className: "BindPhone-helpText",
                            preset: "link",
                            onClick: function () {
                                o.setState({
                                    showFooter: !0
                                })
                            }
                        }, "需要帮助？")), H.a.createElement(Y.default, {
                            className: "SignFlowActive-sendDigits",
                            preset: "primary",
                            color: "blue",
                            type: "submit",
                            onClick: o.handleZaOK
                        }, "确认")))
                    }, r = n, s(o, r)
                }
                return f(t, e), ue(t, [{
                    key: "componentDidMount",
                    value: function () {
                        J.default.setModule(this.container, {
                            module: "BindPhoneForm"
                        }), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.onClose,
                            t = this.state.showFooter;
                        return H.a.createElement(Z.a, {
                            title: "设置手机号",
                            subtitle: "绑定手机后，你就可以使用知乎的提问、回答、评论等功能。",
                            footer: t ? "如需要帮助，请联系 i@zhihu.com，我们会尽快帮你解决" : null,
                            onClose: e,
                            size: "default"
                        }, this.renderContent())
                    }
                }]), t
            }(W.Component), B.propTypes = {
                requestPhoneVerificationCode: z.a.func.isRequired,
                updatePhoneNumber: z.a.func.isRequired,
                onClose: z.a.func.isRequired,
                onSuccess: z.a.func.isRequired,
                onNeedUnbind: z.a.func.isRequired
            }, D),
            se = n(49),
            fe = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            pe = (R = I = function (e) {
                function t() {
                    var e, n, o, r;
                    p(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = o = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.zaKnowMore = function (e) {
                        J.default.trackEvent(e.target, {
                            action: "OpenUrl",
                            name: "了解更多"
                        })
                    }, o.toBindPhone = function (e) {
                        var t = o.props.onBindPhone;
                        J.default.trackEvent(e.target, {
                            action: "OpenUrl",
                            name: "去绑定手机"
                        }), t()
                    }, o.handleClose = function (e) {
                        var t = o.props,
                            n = t.onClose,
                            r = t.config.canWrite;
                        J.default.trackEvent(e.target, {
                            action: "Cancel",
                            name: r ? "暂不绑定" : "取消"
                        }), n()
                    }, o.renderContent = function () {
                        var e = o.props.config,
                            t = e.tip,
                            n = e.canWrite;
                        return H.a.createElement("div", {
                            ref: function (e) {
                                o.container = e
                            }
                        }, H.a.createElement("p", null, t, H.a.createElement(se.a, {
                            preset: "link",
                            target: "_blank",
                            href: "https://zhuanlan.zhihu.com/p/27257715",
                            onClick: o.zaKnowMore
                        }, "了解更多")), H.a.createElement("div", {
                            className: "BindPhone-buttonSection"
                        }, H.a.createElement(se.a, {
                            className: "BindPhone-button",
                            onClick: o.handleClose
                        }, n ? "暂不绑定" : "取消"), H.a.createElement(Y.default, {
                            className: "BindPhone-button",
                            preset: "primary",
                            color: "blue",
                            onClick: o.toBindPhone
                        }, "去绑定手机")))
                    }, r = n, d(o, r)
                }
                return h(t, e), fe(t, [{
                    key: "componentDidMount",
                    value: function () {
                        J.default.setModule(this.container, {
                            module: "BindPhoneForm"
                        }), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.onClose;
                        return H.a.createElement(Z.a, {
                            className: !1,
                            title: "绑定手机",
                            onClose: e,
                            size: "default"
                        }, this.renderContent())
                    }
                }]), t
            }(W.Component), I.propTypes = {
                config: z.a.object,
                onClose: z.a.func,
                onBindPhone: z.a.func
            }, R),
            de = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            he = (A = q = function (e) {
                function t() {
                    var e, n, o, r;
                    m(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = o = b(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.handleCancel = function (e) {
                        var t = o.props.onClose;
                        J.default.trackEvent(e.target, {
                            action: "Cancel",
                            name: "不绑定"
                        }), t()
                    }, r = n, b(o, r)
                }
                return y(t, e), de(t, [{
                    key: "componentDidMount",
                    value: function () {
                        J.default.setModule(this.container, {
                            module: "BindMailForm"
                        }), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.onClose;
                        return H.a.createElement(Z.a, {
                            className: !1,
                            title: "手机号绑定成功",
                            onClose: t,
                            size: "default"
                        }, H.a.createElement("div", {
                            ref: function (t) {
                                e.container = t
                            }
                        }, H.a.createElement("p", null, "由于你此前绑定的邮箱未经验证，未来请使用手机号登录知乎。"), H.a.createElement(Y.default, {
                            className: "BindPhone-remindLoginWithPhoneButton",
                            onClick: this.handleCancel,
                            preset: "primary",
                            color: "blue"
                        }, "知道了")))
                    }
                }]), t
            }(W.Component), q.propTypes = {
                onClose: z.a.func
            }, A),
            me = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            be = (U = F = function (e) {
                function t() {
                    var e, n, o, r;
                    v(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = o = g(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.handleCancel = function (e) {
                        var t = o.props.onCancel;
                        J.default.trackEvent(e.target, {
                            action: "Click",
                            name: "暂不绑定"
                        }), t()
                    }, o.handleConfirm = function (e) {
                        var t = o.props.onConfirm;
                        J.default.trackEvent(e.target, {
                            action: "Click",
                            name: "确认解绑"
                        }), t()
                    }, r = n, g(o, r)
                }
                return E(t, e), me(t, [{
                    key: "componentDidMount",
                    value: function () {
                        J.default.setModule(this.container, {
                            module: "BindPhoneFailForm"
                        }), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            n = t.onClose,
                            o = t.phoneNumber,
                            r = t.bindName,
                            a = t.requiredName;
                        return H.a.createElement(Z.a, {
                            className: !1,
                            title: "绑定失败",
                            onClose: n,
                            size: "default"
                        }, H.a.createElement("div", {
                            ref: function (t) {
                                e.container = t
                            }
                        }, H.a.createElement("p", null, "你所输入的手机号 ", o, " 已经被绑定到帐号「", r, "」。"), !1, H.a.createElement("p", null, "你可以选择将该手机号从该帐号中解绑，并绑定至当前帐号「", a, "」。"), !1, H.a.createElement("p", null, H.a.createElement("b", null, "解绑后，你将无法再通过手机号登录原帐号「", r, "」。")), H.a.createElement("div", {
                            className: "BindPhone-buttonSection"
                        }, H.a.createElement(Y.default, {
                            className: "BindPhone-button",
                            onClick: this.handleConfirm
                        }, "确认解绑"), H.a.createElement(Y.default, {
                            className: "BindPhone-button",
                            preset: "primary",
                            color: "blue",
                            onClick: this.handleCancel
                        }, "暂不绑定"))))
                    }
                }]), t
            }(W.Component), F.propTypes = {
                onClose: z.a.func.isRequired,
                onCancel: z.a.func.isRequired,
                onConfirm: z.a.func.isRequired,
                phoneNumber: z.a.string.isRequired,
                bindName: z.a.string.isRequired,
                requiredName: z.a.string.isRequired
            }, U),
            ye = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            ve = (x = M = function (e) {
                function t() {
                    var e, n, o, r;
                    w(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = o = C(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.handleUnbind = function (e) {
                        var t = o.props,
                            n = t.onSuccess,
                            r = t.monopolizePhoneNumber,
                            a = t.showNotification;
                        J.default.trackEvent(e.target, {
                            action: "Click",
                            name: "确认解绑"
                        }), r().then(function () {
                            return a("绑定成功！", "white"), n()
                        })
                    }, o.handleCancel = function (e) {
                        var t = o.props.onCancel;
                        J.default.trackEvent(e.target, {
                            action: "Click",
                            name: "暂不绑定"
                        }), t()
                    }, r = n, C(o, r)
                }
                return O(t, e), ye(t, [{
                    key: "componentDidMount",
                    value: function () {
                        J.default.setModule(this.container, {
                            module: "BindPhoneVerifyForm"
                        }), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            n = t.onClose,
                            o = t.bindName;
                        return H.a.createElement(Z.a, {
                            className: !1,
                            title: "解绑手机",
                            onClose: n,
                            size: "default"
                        }, H.a.createElement("div", {
                            ref: function (t) {
                                e.container = t
                            }
                        }, H.a.createElement("p", null, H.a.createElement("b", null, "解绑操作无法撤销。")), !1, H.a.createElement("p", null, "如果你没有其他登录方式，你将无法再使用帐号「", o, "」。"), H.a.createElement("div", {
                            className: "BindPhone-buttonSection"
                        }, H.a.createElement(Y.default, {
                            className: "BindPhone-button",
                            onClick: this.handleUnbind
                        }, "确认解绑"), H.a.createElement(Y.default, {
                            className: "BindPhone-button",
                            preset: "primary",
                            color: "blue",
                            onClick: this.handleCancel
                        }, "暂不绑定"))))
                    }
                }]), t
            }(W.Component), M.propTypes = {
                onClose: z.a.func.isRequired,
                onSuccess: z.a.func.isRequired,
                onCancel: z.a.func.isRequired,
                bindName: z.a.string.isRequired,
                showNotification: z.a.func.isRequired,
                monopolizePhoneNumber: z.a.string.isRequired
            }, x),
            ge = n(156),
            Ee = n(14);
        n.d(t, "default", function () {
            return Te
        });
        var we, Ce, Oe, Pe, Ne = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            Se = "LOGIN_WITH_PHONE",
            _e = "NEED_UNBIND",
            ke = function (e) {
                var t = e.account,
                    n = e.entities,
                    o = n.users[e.currentUser],
                    r = o.isActive,
                    a = o.email;
                return {
                    account: t,
                    hasActiveEmail: r && a,
                    needShowLoginWithPhoneNumber: !r && !!a,
                    config: ce.y,
                    isWindow: ce.y.isWindow
                }
            },
            Te = (we = Object(L.connect)(ke, {
                requestPhoneVerificationCode: ge.g,
                updatePhoneNumber: ge.k,
                monopolizePhoneNumber: ge.e,
                showNotification: Ee.h,
                getUnlockRequest: ge.c,
                unlockTicketByDigits: ge.i,
                requestUnlockTicket: ge.h,
                unlockTicketByPassword: ge.j
            }))((Pe = Oe = function (e) {
                function t() {
                    var e, n, o, r;
                    P(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = o = N(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.state = {}, o.handleBindPhoneSuccess = function () {
                        var e = o.props,
                            t = e.needShowLoginWithPhoneNumber,
                            n = e.showNotification,
                            r = e.onToggle;
                        return t ? o.goToStep(Se)() : (n("绑定成功！", "white"), setTimeout(function () {
                            return location.reload()
                        }, 2e3), r())
                    }, o.handleNeedUnbind = function (e) {
                        var t = e.bindName,
                            n = e.phoneNumber,
                            r = e.requiredName;
                        return o.setState({
                            bindName: t,
                            phoneNumber: n,
                            requiredName: r,
                            step: _e
                        })
                    }, o.goToStep = function (e) {
                        return function () {
                            return o.setState({
                                step: e
                            })
                        }
                    }, o.handleCloseWithReload = function () {
                        return location.reload()
                    }, r = n, N(o, r)
                }
                return S(t, e), Ne(t, [{
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        var t = this.props,
                            n = t.getUnlockRequest,
                            o = t.hasActiveEmail,
                            r = t.shown,
                            a = t.isWindow,
                            i = t.account,
                            c = i.errorStatus,
                            u = i.challenge,
                            l = document.querySelector(".VerificationDialogModalHeader");
                        if (e.shown && !r) {
                            a || n();
                            var s = "";
                            s = o ? "CONFIRM_BIND_PHONE" : !a && c && !l && u && u.length ? "SAFETY_VERIFICATION" : "BIND_PHONE", this.setState({
                                step: s
                            })
                        }
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.shown,
                            n = e.requestPhoneVerificationCode,
                            o = e.updatePhoneNumber,
                            r = e.monopolizePhoneNumber,
                            a = e.showNotification,
                            i = e.config,
                            c = e.account,
                            u = e.isWindow,
                            l = e.unlockTicketByDigits,
                            s = e.requestUnlockTicket,
                            f = e.unlockTicketByPassword,
                            p = e.onToggle,
                            d = this.state,
                            h = d.step,
                            m = d.bindName,
                            b = d.phoneNumber,
                            y = d.requiredName;
                        return t ? "CONFIRM_BIND_PHONE" === h ? H.a.createElement(pe, {
                            onBindPhone: this.goToStep(u ? "BIND_PHONE" : "SAFETY_VERIFICATION"),
                            onClose: p,
                            config: i
                        }) : "BIND_PHONE" === h ? H.a.createElement(le, {
                            onClose: p,
                            onSuccess: this.handleBindPhoneSuccess,
                            onNeedUnbind: this.handleNeedUnbind,
                            requestPhoneVerificationCode: n,
                            updatePhoneNumber: o
                        }) : h === Se ? H.a.createElement(he, {
                            onClose: this.handleCloseWithReload
                        }) : h === _e ? H.a.createElement(be, {
                            onClose: p,
                            onCancel: this.goToStep("BIND_PHONE"),
                            onConfirm: this.goToStep("CONFIRM_UNBIND"),
                            bindName: m,
                            phoneNumber: b,
                            requiredName: y
                        }) : "CONFIRM_UNBIND" === h ? H.a.createElement(ve, {
                            onClose: p,
                            onSuccess: this.handleBindPhoneSuccess,
                            onCancel: this.goToStep("BIND_PHONE"),
                            bindName: m,
                            monopolizePhoneNumber: r,
                            showNotification: a
                        }) : "SAFETY_VERIFICATION" === h ? H.a.createElement(K.VerificationModal, {
                            account: c,
                            unlockTicketByDigits: l,
                            requestUnlockTicket: s,
                            unlockTicketByPassword: f,
                            onClose: p,
                            onSuccess: this.goToStep("BIND_PHONE"),
                            zaModuleName: "BindMailForm"
                        }) : null : null
                    }
                }]), t
            }(W.Component), Oe.propTypes = {
                shown: z.a.bool.isRequired,
                onToggle: z.a.func.isRequired,
                needShowLoginWithPhoneNumber: z.a.bool.isRequired,
                config: z.a.object.isRequired,
                requestPhoneVerificationCode: z.a.func.isRequired,
                updatePhoneNumber: z.a.func.isRequired,
                monopolizePhoneNumber: z.a.func.isRequired
            }, Ce = Pe)) || Ce
    },
    735: function (e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "default", function () {
            return f
        });
        var i = n(0),
            c = n.n(i),
            u = n(29),
            l = n(311),
            s = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            f = function (e) {
                function t() {
                    return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), s(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.onClose,
                            n = e.signType;
                        return c.a.createElement(u.default, {
                            className: "signFlowModal",
                            onClose: t
                        }, c.a.createElement(l.a, {
                            signType: n
                        }))
                    }
                }]), t
            }(i.Component)
    }
});
//# sourceMappingURL=main.signflow.bdfd416842966503f637.js.map