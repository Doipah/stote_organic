/*!
 * OmiseJs v2.5.2
 * Copyright: Omise
 *
 * Date: 2020/02/24 20:07
 */
! function(e) { var t = {};

    function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) { return e[t] }.bind(null, o)); return r }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/", n(n.s = 7) }([function(e, t, n) { "use strict";
    (function(e) { n.d(t, "a", (function() { return u })), n.d(t, "d", (function() { return l })), n.d(t, "c", (function() { return f })), n.d(t, "b", (function() { return p })); var r = n(2),
            o = n.n(r),
            i = n(1),
            a = "CLOSE_IFRAME",
            s = "SHOW_IFRAME_APP_FORM",
            c = "CLOSE_AND_SEND_TOKEN";

        function u(t) { e.addEventListener("message", (function(e) { var n = Object(i.c)(e.data),
                    r = n.type,
                    o = n.data;! function(e, t, n) { switch (t) {
                        case a:
                            e.close(); break;
                        case c:
                            e.close(), e.setTokenAtOmiseTokenField(n) } }(t, r, o) }), !1) }

        function l(e, t) { d(e, s, t, o.a.cardHost) }

        function f() { d(parent.window, a, null, "*") }

        function p(e) { d(parent.window, c, e, "*") }

        function d(e, t, n, r) { var o = JSON.stringify({ type: t, data: n });
            e.postMessage(o, r) } }).call(this, n(5)) }, function(e, t, n) { "use strict";

    function r(e, t) { return Object.assign({}, e, t) }

    function o(e) { try { return JSON.parse(e) } catch (t) { return e } }

    function i(e) { for (var t = {}, n = e.attributes.length, r = 0; r < n; r++) { var o = e.attributes[r]; if (/^data/.test(o.name)) t[o.name.replace("data-", "").replace(/-([a-z])/g, (function(e) { return e[1].toUpperCase() }))] = o.value } return t }
    n.d(t, "b", (function() { return r })), n.d(t, "c", (function() { return o })), n.d(t, "a", (function() { return i })) }, function(e, t, n) { e.exports = { vaultUrl: "https://vault.omise.co", cardHost: "https://cdn.omise.co", interfaceUrl: "https://api.omise.co" } }, function(e, t, n) {
    (function(e) {! function(e) { "use strict";
            e.exports.is_uri = n, e.exports.is_http_uri = r, e.exports.is_https_uri = o, e.exports.is_web_uri = i, e.exports.isUri = n, e.exports.isHttpUri = r, e.exports.isHttpsUri = o, e.exports.isWebUri = i; var t = function(e) { return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/) };

            function n(e) { if (e && !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) && !/%[^0-9a-f]/i.test(e) && !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)) { var n, r, o, i, a, s = "",
                        c = ""; if (s = (n = t(e))[1], r = n[2], o = n[3], i = n[4], a = n[5], s && s.length && o.length >= 0) { if (r && r.length) { if (0 !== o.length && !/^\//.test(o)) return } else if (/^\/\//.test(o)) return; if (/^[a-z][a-z0-9\+\-\.]*$/.test(s.toLowerCase())) return c += s + ":", r && r.length && (c += "//" + r), c += o, i && i.length && (c += "?" + i), a && a.length && (c += "#" + a), c } } }

            function r(e, r) { if (n(e)) { var o, i, a, s, c = "",
                        u = "",
                        l = "",
                        f = ""; if (c = (o = t(e))[1], u = o[2], i = o[3], a = o[4], s = o[5], c) { if (r) { if ("https" != c.toLowerCase()) return } else if ("http" != c.toLowerCase()) return; if (u) return /:(\d+)$/.test(u) && (l = u.match(/:(\d+)$/)[0], u = u.replace(/:\d+$/, "")), f += c + ":", f += "//" + u, l && (f += l), f += i, a && a.length && (f += "?" + a), s && s.length && (f += "#" + s), f } } }

            function o(e) { return r(e, !0) }

            function i(e) { return r(e) || o(e) } }(e) }).call(this, n(10)(e)) }, function(e, t, n) { "use strict";
    n.d(t, "a", (function() { return i })); var r = n(3);
    n(11);

    function o(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var i = function() {
        function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e); var n = function(e) { var t = { error: !1, message: "" };
                e.vaultUrl && Object(r.isUri)(e.vaultUrl) ? e.cardHost && Object(r.isUri)(e.cardHost) ? e.interfaceUrl && Object(r.isUri)(e.interfaceUrl) || (t.message = "Missing interfaceUrl") : t.message = "Missing cardHost" : t.message = "Missing valutUrl"; return t.error = "" !== t.message, t }(t); if (n.error) throw new Error(n.message);
            this.config = t, this.publicKey = null, this._rpc = null } var t, n, i; return t = e, (n = [{ key: "_createRpc", value: function(e) { var t = this; if (this._rpc) return this._rpc; var n = this.config.vaultUrl,
                    r = setTimeout((function() { t._rpc.destroy(), t._rpc = null, e && e() }), 3e4); return this._rpc = new easyXDM.Rpc({ remote: "".concat(n, "/provider"), onReady: function() { clearTimeout(r) } }, { remote: { createToken: {} } }), this._rpc } }, { key: "setPublicKey", value: function(e) { return this.publicKey = e, this.publicKey } }, { key: "createSource", value: function(e, t, n) { var r = btoa(this.publicKey);
                t.type = e; var o = "".concat(this.config.interfaceUrl, "/sources/");
                fetch(o, { method: "post", headers: { Authorization: "Basic ".concat(r), "Content-Type": "application/json" }, body: JSON.stringify(t) }).then((function(e) { return e.json().then((function(t) { return n(e.status, t) })) })).catch((function(e) { n(0, { code: "create_source_error", error: e.message }) })) } }, { key: "createToken", value: function(e, t, n) { var r = {};
                r[e] = t, this._createRpc((function() { n(0, { code: "rpc_error", message: "unable to connect to provider after timeout" }) })).createToken(this.publicKey, r, (function(e) { n(e.status, e.data) }), (function(e) { n(e.data.status, e.data.data) })) } }]) && o(t.prototype, n), i && o(t, i), e }() }, function(e, t) { var n;
    n = function() { return this }(); try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n }, function(e, t, n) { "use strict";
    n.d(t, "a", (function() { return d })); var r = n(0),
        o = n(1);

    function i(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n }

    function a(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach((function(t) { s(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

    function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function c(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function u(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var l = { key: "", amount: 0, currency: "THB", image: "https://cdn.omise.co/assets/frontend-images/store-logo.svg", frameLabel: "Omise", defaultPaymentMethod: "credit_card", otherPaymentMethods: [], frameDescription: "Secured by Omise", submitLabel: "Pay", buttonLabel: "Pay with Omise", location: "no", submitAuto: "yes", submitFormTarget: "", cardBrands: "visa mastercard", locale: "en", autoCardNumberFormat: "yes", expiryDateStyle: "", hideAmount: "false" },
        f = ["display: none", "visibility: visible", "position: fixed", "left: 0px", "top: 0px", "width: 100%", "height: 100%", "z-index: 2147483647", "padding: 0", "margin: 0", "border: 0 none transparent", "background-color: rgba(0, 0, 0, 0)", "overflow-x: hidden", "overflow-y: auto", "-webkit-tap-highlight-color: transparent", "transition: background-color .2s"],
        p = function() {},
        d = function() {
            function e(t) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                c(this, e), this.setup(t), n && this.init() } var t, n, i; return t = e, (n = [{ key: "setup", value: function(e) { return this.app = { settings: a({}, e), iframe: null, iframeLoaded: !1, omiseScriptTag: null, omiseGenerateCheckoutButton: null, iframeAppId: "omise-checkout-iframe-app", defaultConfig: a({}, l), configForIframeOnLoad: a({}, l), currentOpenConfig: {}, formElement: null, allConfigureButtons: [] }, this.app } }, { key: "init", value: function() { for (var e = null != this.app.iframe, t = document.getElementsByTagName("script"), n = t.length, o = 0; o < n; o++) { var i = t[o]; if (i.hasAttribute("data-key") && i.hasAttribute("data-amount")) { this.app.omiseScriptTag = i; break } }
                    e || this.isInsideIframeApp() || !this.app.omiseScriptTag || (this.createIframe(), this.app.omiseGenerateCheckoutButton = this.createOmiseCheckoutButton(), Object(r.a)(this)) } }, { key: "getDefaultConfig", value: function() { return this.app.defaultConfig } }, { key: "getAllConfigureButtons", value: function() { return this.app.allConfigureButtons } }, { key: "setTokenAtOmiseTokenField", value: function(e) { var t = a({}, this.app.defaultConfig, {}, this.app.currentOpenConfig),
                        n = t.submitAuto,
                        r = t.onCreateTokenSuccess;
                    this.app.formElement && (this.isOmiseSource(e) ? this.app.formElement.omiseSource.value = e : this.app.formElement.omiseToken.value = e), "yes" === n && this.app.formElement && this.app.formElement.submit(), (r || p)(e), this.app.currentOpenConfig = {} } }, { key: "isOmiseSource", value: function(e) { return /^src_/.test(e) } }, { key: "getFormByTarget", value: function(e) { for (var t = e; t && "FORM" !== t.tagName;) t = t.parentNode; return t } }, { key: "createIframe", value: function() { var e = this,
                        t = document.createElement("iframe"); return t.id = this.app.iframeAppId, t.src = "".concat(this.app.settings.cardHost, "/pay.html"), t.setAttribute("style", f.join("; ")), document.body.appendChild(t), t.onload = function() { "block" === e.app.iframe.style.display && Object(r.d)(t.contentWindow, { config: e.app.configForIframeOnLoad }), e.app.iframeLoaded = !0 }, this.app.iframe = t, this.app.iframe } }, { key: "createHiddenInputForOmiseToken", value: function(e) { var t = null; if (e && "FORM" === e.tagName && (t = e), !t) throw new Error(["Missing form element. Generate button or custom button must contain in form element.", "https://github.com/omise/examples/blob/master/omise.js/example-4-custom-integration-multiple-buttons.html", "Or setting submit form target", "https://github.com/omise/examples/blob/master/omise.js/example-5-custom-integration-specify-checkout-form.html"].join("\n")); var n = t.querySelector('input[name="omiseToken"]');
                    null == n && ((n = document.createElement("input")).setAttribute("type", "hidden"), n.setAttribute("name", "omiseToken"), t.appendChild(n)); var r = t.querySelector('input[name="omiseSource"]'); return null == r && ((r = document.createElement("input")).setAttribute("type", "hidden"), r.setAttribute("name", "omiseSource"), t.appendChild(r)), n } }, { key: "createOmiseCheckoutButton", value: function() { var e = this,
                        t = this.prepareConfig(Object(o.a)(this.app.omiseScriptTag)),
                        n = document.createElement("button");
                    n.className = "omise-checkout-button", n.innerHTML = t.buttonLabel; var r = this.app.omiseScriptTag; if (r) { var i = this.getFormByTarget(r);
                        this.app.formElement = i, this.createHiddenInputForOmiseToken(i) } else console.warn("Missing Omise script tag"); return n.addEventListener("click", (function(t) { if (t.preventDefault(), r) { var n = Object(o.a)(r),
                                i = e.prepareConfig(n);
                            e.app.configForIframeOnLoad = a({}, i), e.open(i) } else console.warn("Missing Omise script tag") }), !1), r.parentNode.insertBefore(n, r.nextSibling), n } }, { key: "isInsideIframeApp", value: function() { return null != document.getElementById(this.app.iframeAppId) } }, { key: "prepareConfig", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.otherPaymentMethods; return t && "string" == typeof t && (e.otherPaymentMethods = this.stringToArray(t)), Object(o.b)(this.app.defaultConfig, h(e)) } }, { key: "stringToArray", value: function(e) { return e.match(/[\w_]+(\([^)]+\))?/g) || [] } }, { key: "configure", value: function(e) { return this.app.defaultConfig = this.prepareConfig(e), this.isInsideIframeApp() || this.app.iframe || (this.createIframe(), Object(r.a)(this)), this.app.defaultConfig } }, { key: "open", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p; if (!this.app.iframe) return !1; var o = function() { var o = e.prepareConfig(t);
                        e.app.currentOpenConfig = a({}, o), e.app.iframe.style.backgroundColor = "rgba(0, 0, 0, .4)", e.app.iframe.style.display = "block", setTimeout((function() { Object(r.d)(e.app.iframe.contentWindow, { config: o }), n(e.app.iframe) })) }; if (this.app.iframeLoaded) o();
                    else var i = 3e3,
                        s = 100,
                        c = 0,
                        u = setInterval((function() {
                            ((c += s) >= i || e.app.iframeLoaded) && (e.app.iframeLoaded && o(), clearInterval(u)) }), s); return !0 } }, { key: "close", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p; return !!this.app.iframe && (this.app.iframe.style.backgroundColor = "rgba(0, 0, 0, 0)", setTimeout((function() { e.app.iframe.style.display = "none", t(e.app.iframe), (e.app.currentOpenConfig.onFormClosed || p)(e.app.iframe) }), 250), !0) } }, { key: "destroy", value: function() { var e = document.getElementById(this.app.iframeAppId); if (this.app.iframe && e) { var t = document.getElementById(this.app.iframeAppId);
                        document.body.removeChild(t), this.setup() } } }, { key: "createParentFrameHandler", value: function() { return { closeIframe: function() { Object(r.c)() }, closeAndSendToken: function(e) { Object(r.b)(e) } } } }, { key: "configureButton", value: function(e, t) { var n = { buttonId: e, configuration: this.prepareConfig(t) }; return this.app.allConfigureButtons.push(n), n } }, { key: "attach", value: function() { var e = this,
                        t = []; return this.app.allConfigureButtons.forEach((function(n) { var r = n.configuration,
                            o = document.querySelector(n.buttonId),
                            i = e.app.defaultConfig.buttonLabel;
                        r.buttonLabel && i !== r.buttonLabel ? i = r.buttonLabel : o.innerHTML && (i = o.innerHTML), o.innerHTML = i; var a = e.app.defaultConfig.submitFormTarget,
                            s = a ? document.querySelector(a) : e.getFormByTarget(o);
                        e.createHiddenInputForOmiseToken(s), o.addEventListener("click", (function(t) { t.preventDefault(), t.target, e.app.configForIframeOnLoad = r, e.app.formElement = s, e.open(r) }), !1), t.push(o) })), this.isInsideIframeApp() || this.app.iframe || (this.createIframe(), Object(r.a)(this)), t } }]) && u(t.prototype, n), i && u(t, i), e }();

    function h(e) { var t = {},
            n = { publicKey: "key", logo: "image", locationField: "location" }; for (var r in e) { var o = n[r];
            o ? t[o] = e[r] : t[r] = e[r] } return t } }, function(e, t, n) { "use strict";
    n.r(t),
        function(e) { n(8), n(9); var r = n(2),
                o = n.n(r),
                i = n(4),
                a = n(6);
            t.default = i.a, e.Omise = new i.a(o.a), e.OmiseCard = new a.a(o.a) }.call(this, n(5)) }, function(e, t) { "function" != typeof Object.assign && Object.defineProperty(Object, "assign", { value: function(e, t) { "use strict"; if (null == e) throw new TypeError("Cannot convert undefined or null to object"); for (var n = Object(e), r = 1; r < arguments.length; r++) { var o = arguments[r]; if (null != o)
                    for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]) } return n }, writable: !0, configurable: !0 }) }, function(e, t) {
    function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }! function(e, t, r, o, i, a) { var s, c, u, l, f, p = this,
            d = Math.floor(1e4 * Math.random()),
            h = Function.prototype,
            m = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
            y = /[\-\w]+\/\.\.\//,
            g = /([^:])\/\//g,
            b = "",
            v = {},
            w = e.easyXDM,
            O = "easyXDM_",
            k = !1;

        function _(e, t) { var r = n(e[t]); return "function" == r || !("object" != r || !e[t]) || "unknown" == r }

        function x() { var e, t = "Shockwave Flash",
                r = "application/x-shockwave-flash"; if (!I(navigator.plugins) && "object" == n(navigator.plugins[t])) { var o = navigator.plugins[t].description;
                o && !I(navigator.mimeTypes) && navigator.mimeTypes[r] && navigator.mimeTypes[r].enabledPlugin && (c = o.match(/\d+/g)) } if (!c) try { e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), c = Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1), e = null } catch (e) {}
            if (!c) return !1; var i = parseInt(c[0], 10),
                a = parseInt(c[1], 10); return u = i > 9 && a > 0, !0 } if (_(e, "addEventListener")) l = function(e, t, n) { e.addEventListener(t, n, !1) }, f = function(e, t, n) { e.removeEventListener(t, n, !1) };
        else { if (!_(e, "attachEvent")) throw new Error("Browser not supported");
            l = function(e, t, n) { e.attachEvent("on" + t, n) }, f = function(e, t, n) { e.detachEvent("on" + t, n) } } var T, E = !1,
            S = [];

        function j() { if (!E) { E = !0; for (var e = 0; e < S.length; e++) S[e]();
                S.length = 0 } } if ("readyState" in t ? (T = t.readyState, E = "complete" == T || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == T || "interactive" == T)) : E = !!t.body, !E) { if (_(e, "addEventListener")) l(t, "DOMContentLoaded", j);
            else if (l(t, "readystatechange", (function() { "complete" == t.readyState && j() })), t.documentElement.doScroll && e === top) {! function e() { if (!E) { try { t.documentElement.doScroll("left") } catch (t) { return void o(e, 1) }
                        j() } }() }
            l(e, "load", j) }

        function C(e, t) { E ? e.call(t) : S.push((function() { e.call(t) })) }

        function P(e) { return e.match(m)[3] }

        function A(e) { var t = e.toLowerCase().match(m),
                n = t[2],
                r = t[3],
                o = t[4] || ""; return ("http:" == n && ":80" == o || "https:" == n && ":443" == o) && (o = ""), n + "//" + r + o }

        function B(e) { if (!(e = e.replace(g, "$1/")).match(/^(http||https):\/\//)) { var t = "/" === e.substring(0, 1) ? "" : r.pathname; "/" !== t.substring(t.length - 1) && (t = t.substring(0, t.lastIndexOf("/") + 1)), e = r.protocol + "//" + r.host + t + e } for (; y.test(e);) e = e.replace(y, ""); return e }

        function F(e, t) { var n = "",
                r = e.indexOf("#"); - 1 !== r && (n = e.substring(r), e = e.substring(0, r)); var o = []; for (var i in t) t.hasOwnProperty(i) && o.push(i + "=" + a(t[i])); return e + (k ? "#" : -1 == e.indexOf("?") ? "?" : "&") + o.join("&") + n } var M = function(e) { for (var t, n = {}, r = (e = e.substring(1).split("&")).length; r--;) n[(t = e[r].split("="))[0]] = i(t[1]); return n }(/xdm_e=/.test(r.search) ? r.search : r.hash);

        function I(e) { return void 0 === e } var R, L = function() { var e = {},
                t = { a: [1, 2, 3] },
                n = '{"a":[1,2,3]}'; return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(t).replace(/\s/g, "") === n ? JSON : (Object.toJSON && Object.toJSON(t).replace(/\s/g, "") === n && (e.stringify = Object.toJSON), "function" == typeof String.prototype.evalJSON && (t = n.evalJSON()).a && 3 === t.a.length && 3 === t.a[2] && (e.parse = function(e) { return e.evalJSON() }), e.stringify && e.parse ? (L = function() { return e }, e) : null) };

        function H(e, t, r) { var o; for (var i in t) t.hasOwnProperty(i) && (i in e ? "object" === n(o = t[i]) ? H(e[i], o, r) : r || (e[i] = t[i]) : e[i] = t[i]); return e }

        function D(e) { var r;
            I(s) && function() { var e = t.body.appendChild(t.createElement("form")),
                    n = e.appendChild(t.createElement("input"));
                n.name = O + "TEST" + d, s = n !== e.elements[n.name], t.body.removeChild(e) }(), s ? r = t.createElement('<iframe name="' + e.props.name + '"/>') : (r = t.createElement("IFRAME")).name = e.props.name, r.id = r.name = e.props.name, delete e.props.name, "string" == typeof e.container && (e.container = t.getElementById(e.container)), e.container || (H(r.style, { position: "absolute", top: "-2000px", left: "0px" }), e.container = t.body); var o = e.props.src; if (e.props.src = "javascript:false", H(r, e.props), r.border = r.frameBorder = 0, r.allowTransparency = !0, e.container.appendChild(r), e.onLoad && l(r, "load", e.onLoad), e.usePost) { var i, a = e.container.appendChild(t.createElement("form")); if (a.target = r.name, a.action = o, a.method = "POST", "object" === n(e.usePost))
                    for (var c in e.usePost) e.usePost.hasOwnProperty(c) && (s ? i = t.createElement('<input name="' + c + '"/>') : (i = t.createElement("INPUT")).name = c, i.value = e.usePost[c], a.appendChild(i));
                a.submit(), a.parentNode.removeChild(a) } else r.src = o; return e.props.src = o, r }

        function U(n) { var o, i = n.protocol; if (n.isHost = n.isHost || I(M.xdm_p), k = n.hash || !1, n.props || (n.props = {}), n.isHost) n.remote = B(n.remote), n.channel = n.channel || "default" + d++, n.secret = Math.random().toString(16).substring(2), I(i) && (i = A(r.href) == A(n.remote) ? "4" : _(e, "postMessage") || _(t, "postMessage") ? "1" : n.swf && _(e, "ActiveXObject") && x() ? "6" : "Gecko" === navigator.product && "frameElement" in e && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : n.remoteHelper ? "2" : "0");
            else if (n.channel = M.xdm_c.replace(/["'<>\\]/g, ""), n.secret = M.xdm_s, n.remote = M.xdm_e.replace(/["'<>\\]/g, ""), i = M.xdm_p, n.acl && ! function(e, t) { "string" == typeof e && (e = [e]); for (var n, r = e.length; r--;)
                        if (n = e[r], (n = new RegExp("^" == n.substr(0, 1) ? n : "^" + n.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$")).test(t)) return !0;
                    return !1 }(n.acl, n.remote)) throw new Error("Access denied for " + n.remote); switch (n.protocol = i, i) {
                case "0":
                    if (H(n, { interval: 100, delay: 2e3, useResize: !0, useParent: !1, usePolling: !1 }, !0), n.isHost) { if (!n.local) { for (var a, s = r.protocol + "//" + r.host, u = t.body.getElementsByTagName("img"), l = u.length; l--;)
                                if ((a = u[l]).src.substring(0, s.length) === s) { n.local = a.src; break }
                            n.local || (n.local = e) } var f = { xdm_c: n.channel, xdm_p: 0 };
                        n.local === e ? (n.usePolling = !0, n.useParent = !0, n.local = r.protocol + "//" + r.host + r.pathname + r.search, f.xdm_e = n.local, f.xdm_pa = 1) : f.xdm_e = B(n.local), n.container && (n.useResize = !1, f.xdm_po = 1), n.remote = F(n.remote, f) } else H(n, { channel: M.xdm_c, remote: M.xdm_e, useParent: !I(M.xdm_pa), usePolling: !I(M.xdm_po), useResize: !n.useParent && n.useResize });
                    o = [new v.stack.HashTransport(n), new v.stack.ReliableBehavior({}), new v.stack.QueueBehavior({ encode: !0, maxLength: 4e3 - n.remote.length }), new v.stack.VerifyBehavior({ initiate: n.isHost })]; break;
                case "1":
                    o = [new v.stack.PostMessageTransport(n)]; break;
                case "2":
                    n.isHost && (n.remoteHelper = B(n.remoteHelper)), o = [new v.stack.NameTransport(n), new v.stack.QueueBehavior, new v.stack.VerifyBehavior({ initiate: n.isHost })]; break;
                case "3":
                    o = [new v.stack.NixTransport(n)]; break;
                case "4":
                    o = [new v.stack.SameOriginTransport(n)]; break;
                case "5":
                    o = [new v.stack.FrameElementTransport(n)]; break;
                case "6":
                    c || x(), o = [new v.stack.FlashTransport(n)] } return o.push(new v.stack.QueueBehavior({ lazy: n.lazy, remove: !0 })), o }

        function N(e) { for (var t, n = { incoming: function(e, t) { this.up.incoming(e, t) }, outgoing: function(e, t) { this.down.outgoing(e, t) }, callback: function(e) { this.up.callback(e) }, init: function() { this.down.init() }, destroy: function() { this.down.destroy() } }, r = 0, o = e.length; r < o; r++) H(t = e[r], n, !0), 0 !== r && (t.down = e[r - 1]), r !== o - 1 && (t.up = e[r + 1]); return t }
        H(v, { version: "2.4.19.3", query: M, stack: {}, apply: H, getJSONObject: L, whenReady: C, noConflict: function(t) { return e.easyXDM = w, (b = t) && (O = "easyXDM_" + b.replace(".", "_") + "_"), v } }), v.DomHelper = { on: l, un: f, requiresJSON: function(r) { var o, i; "object" == n((o = e)[i = "JSON"]) && o[i] || t.write('<script type="text/javascript" src="' + r + '"><\/script>') } }, R = {}, v.Fn = { set: function(e, t) { R[e] = t }, get: function(e, t) { if (R.hasOwnProperty(e)) { var n = R[e]; return t && delete R[e], n } } }, v.Socket = function(e) { var t = N(U(e).concat([{ incoming: function(t, n) { e.onMessage(t, n) }, callback: function(t) { e.onReady && e.onReady(t) } }])),
                n = A(e.remote);
            this.origin = A(e.remote), this.destroy = function() { t.destroy() }, this.postMessage = function(e) { t.outgoing(e, n) }, t.init() }, v.Rpc = function(e, t) { if (t.local)
                for (var n in t.local)
                    if (t.local.hasOwnProperty(n)) { var r = t.local[n]; "function" == typeof r && (t.local[n] = { method: r }) }
            var o = N(U(e).concat([new v.stack.RpcBehavior(this, t), { callback: function(t) { e.onReady && e.onReady(t) } }]));
            this.origin = A(e.remote), this.destroy = function() { o.destroy() }, o.init() }, v.stack.SameOriginTransport = function(e) { var t, n, i, a; return t = { outgoing: function(e, t, n) { i(e), n && n() }, destroy: function() { n && (n.parentNode.removeChild(n), n = null) }, onDOMReady: function() { a = A(e.remote), e.isHost ? (H(e.props, { src: F(e.remote, { xdm_e: r.protocol + "//" + r.host + r.pathname, xdm_c: e.channel, xdm_p: 4 }), name: O + e.channel + "_provider" }), n = D(e), v.Fn.set(e.channel, (function(e) { return i = e, o((function() { t.up.callback(!0) }), 0),
                            function(e) { t.up.incoming(e, a) } }))) : (i = function() { var e = parent; if ("" !== b)
                            for (var t = 0, n = b.split("."); t < n.length; t++) e = e[n[t]]; return e.easyXDM }().Fn.get(e.channel, !0)((function(e) { t.up.incoming(e, a) })), o((function() { t.up.callback(!0) }), 0)) }, init: function() { C(t.onDOMReady, t) } } }, v.stack.FlashTransport = function(e) { var n, i, s, c, l;

            function f(e, t) { o((function() { n.up.incoming(e, s) }), 0) }

            function d(n) { var r = e.swf + "?host=" + e.isHost,
                    o = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                v.Fn.set("flash_loaded" + n.replace(/[\-.]/g, "_"), (function() { v.stack.FlashTransport[n].swf = c = l.firstChild; for (var e = v.stack.FlashTransport[n].queue, t = 0; t < e.length; t++) e[t]();
                    e.length = 0 })), e.swfContainer ? l = "string" == typeof e.swfContainer ? t.getElementById(e.swfContainer) : e.swfContainer : (H((l = t.createElement("div")).style, u && e.swfNoThrottle ? { height: "20px", width: "20px", position: "fixed", right: 0, top: 0 } : { height: "1px", width: "1px", position: "absolute", overflow: "hidden", right: 0, top: 0 }), t.body.appendChild(l)); var i = "callback=flash_loaded" + a(n.replace(/[\-.]/g, "_")) + "&proto=" + p.location.protocol + "&domain=" + a(P(p.location.href)) + "&port=" + a(function(e) { return e.match(m)[4] || "" }(p.location.href)) + "&ns=" + a(b);
                l.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + o + "' data='" + r + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + r + "'></param><param name='flashvars' value='" + i + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + i + "' allowScriptAccess='always' wmode='transparent' src='" + r + "' height='1' width='1'></embed></object>" } return n = { outgoing: function(t, n, r) { c.postMessage(e.channel, t.toString()), r && r() }, destroy: function() { try { c.destroyChannel(e.channel) } catch (e) {}
                    c = null, i && (i.parentNode.removeChild(i), i = null) }, onDOMReady: function() { s = e.remote, v.Fn.set("flash_" + e.channel + "_init", (function() { o((function() { n.up.callback(!0) })) })), v.Fn.set("flash_" + e.channel + "_onMessage", f), e.swf = B(e.swf); var t = P(e.swf),
                        a = function() { v.stack.FlashTransport[t].init = !0, (c = v.stack.FlashTransport[t].swf).createChannel(e.channel, e.secret, A(e.remote), e.isHost), e.isHost && (u && e.swfNoThrottle && H(e.props, { position: "fixed", right: 0, top: 0, height: "20px", width: "20px" }), H(e.props, { src: F(e.remote, { xdm_e: A(r.href), xdm_c: e.channel, xdm_p: 6, xdm_s: e.secret }), name: O + e.channel + "_provider" }), i = D(e)) };
                    v.stack.FlashTransport[t] && v.stack.FlashTransport[t].init ? a() : v.stack.FlashTransport[t] ? v.stack.FlashTransport[t].queue.push(a) : (v.stack.FlashTransport[t] = { queue: [a] }, d(t)) }, init: function() { C(n.onDOMReady, n) } } }, v.stack.PostMessageTransport = function(t) { var n, i, a, s;

            function c(e) { var o = function(e) { if (e.origin) return A(e.origin); if (e.uri) return A(e.uri); if (e.domain) return r.protocol + "//" + e.domain; throw "Unable to retrieve the origin of the event" }(e);
                o == s && e.data.substring(0, t.channel.length + 1) == t.channel + " " && n.up.incoming(e.data.substring(t.channel.length + 1), o) } return n = { outgoing: function(e, n, r) { a.postMessage(t.channel + " " + e, n || s), r && r() }, destroy: function() { f(e, "message", c), i && (a = null, i.parentNode.removeChild(i), i = null) }, onDOMReady: function() { if (s = A(t.remote), t.isHost) { l(e, "message", (function r(s) { s.data == t.channel + "-ready" && (a = "postMessage" in i.contentWindow ? i.contentWindow : i.contentWindow.document, f(e, "message", r), l(e, "message", c), o((function() { n.up.callback(!0) }), 0)) })), H(t.props, { src: F(t.remote, { xdm_e: A(r.href), xdm_c: t.channel, xdm_p: 1 }), name: O + t.channel + "_provider" }), i = D(t) } else l(e, "message", c), (a = "postMessage" in e.parent ? e.parent : e.parent.document).postMessage(t.channel + "-ready", s), o((function() { n.up.callback(!0) }), 0) }, init: function() { C(n.onDOMReady, n) } } }, v.stack.FrameElementTransport = function(n) { var i, a, s, c; return i = { outgoing: function(e, t, n) { s.call(this, e), n && n() }, destroy: function() { a && (a.parentNode.removeChild(a), a = null) }, onDOMReady: function() { c = A(n.remote), n.isHost ? (H(n.props, { src: F(n.remote, { xdm_e: A(r.href), xdm_c: n.channel, xdm_p: 5 }), name: O + n.channel + "_provider" }), (a = D(n)).fn = function(e) { return delete a.fn, s = e, o((function() { i.up.callback(!0) }), 0),
                            function(e) { i.up.incoming(e, c) } }) : (t.referrer && A(t.referrer) != M.xdm_e && (e.top.location = M.xdm_e), s = e.frameElement.fn((function(e) { i.up.incoming(e, c) })), i.up.callback(!0)) }, init: function() { C(i.onDOMReady, i) } } }, v.stack.NameTransport = function(e) { var t, n, r, i, a, s, c, u;

            function l(t) { var o = e.remoteHelper + (n ? "#_3" : "#_2") + e.channel;
                r.contentWindow.sendMessage(t, o) }

            function p() { n ? 2 != ++a && n || t.up.callback(!0) : (l("ready"), t.up.callback(!0)) }

            function d(e) { t.up.incoming(e, c) }

            function h() { s && o((function() { s(!0) }), 0) } return t = { outgoing: function(e, t, n) { s = n, l(e) }, destroy: function() { r.parentNode.removeChild(r), r = null, n && (i.parentNode.removeChild(i), i = null) }, onDOMReady: function() { n = e.isHost, a = 0, c = A(e.remote), e.local = B(e.local), n ? (v.Fn.set(e.channel, (function(t) { n && "ready" === t && (v.Fn.set(e.channel, d), p()) })), u = F(e.remote, { xdm_e: e.local, xdm_c: e.channel, xdm_p: 2 }), H(e.props, { src: u + "#" + e.channel, name: O + e.channel + "_provider" }), i = D(e)) : (e.remoteHelper = e.remote, v.Fn.set(e.channel, d));
                    r = D({ props: { src: e.local + "#_4" + e.channel }, onLoad: function t() { var n = r || this;
                            f(n, "load", t), v.Fn.set(e.channel + "_load", h),
                                function e() { "function" == typeof n.contentWindow.sendMessage ? p() : o(e, 50) }() } }) }, init: function() { C(t.onDOMReady, t) } } }, v.stack.HashTransport = function(t) { var n, r, i, a, s, c, u, l, f, p;

            function d() { if (u) { var e = u.location.href,
                        t = "",
                        r = e.indexOf("#"); - 1 != r && (t = e.substring(r)), t && t != s && function(e) { s = e, n.up.incoming(s.substring(s.indexOf("_") + 1), p) }(t) } }

            function h() { i = setInterval(d, a) } return n = { outgoing: function(e, n) {! function(e) { if (l) { var n = t.remote + "#" + c++ + "_" + e;
                            (r || !f ? l.contentWindow : l).location = n } }(e) }, destroy: function() { e.clearInterval(i), !r && f || l.parentNode.removeChild(l), l = null }, onDOMReady: function() { if (r = t.isHost, a = t.interval, s = "#" + t.channel, c = 0, f = t.useParent, p = A(t.remote), r) { if (H(t.props, { src: t.remote, name: O + t.channel + "_provider" }), f) t.onLoad = function() { u = e, h(), n.up.callback(!0) };
                        else { var i = 0,
                                d = t.delay / 50;! function e() { if (++i > d) throw new Error("Unable to reference listenerwindow"); try { u = l.contentWindow.frames[O + t.channel + "_consumer"] } catch (e) {}
                                u ? (h(), n.up.callback(!0)) : o(e, 50) }() }
                        l = D(t) } else u = e, h(), f ? (l = parent, n.up.callback(!0)) : (H(t, { props: { src: t.remote + "#" + t.channel + new Date, name: O + t.channel + "_consumer" }, onLoad: function() { n.up.callback(!0) } }), l = D(t)) }, init: function() { C(n.onDOMReady, n) } } }, v.stack.ReliableBehavior = function(e) { var t, n, r = 0,
                o = 0,
                i = ""; return t = { incoming: function(e, a) { var s = e.indexOf("_"),
                        c = e.substring(0, s).split(",");
                    e = e.substring(s + 1), c[0] == r && (i = "", n && n(!0)), e.length > 0 && (t.down.outgoing(c[1] + "," + r + "_" + i, a), o != c[1] && (o = c[1], t.up.incoming(e, a))) }, outgoing: function(e, a, s) { i = e, n = s, t.down.outgoing(o + "," + ++r + "_" + e, a) } } }, v.stack.QueueBehavior = function(e) { var t, n, r = [],
                s = !0,
                c = "",
                u = 0,
                l = !1,
                f = !1;

            function p() { if (e.remove && 0 === r.length) return (i = t).up.down = i.down, i.down.up = i.up, void(i.up = i.down = null); var i; if (!s && 0 !== r.length && !n) { s = !0; var a = r.shift();
                    t.down.outgoing(a.data, a.origin, (function(e) { s = !1, a.callback && o((function() { a.callback(e) }), 0), p() })) } } return t = { init: function() { I(e) && (e = {}), e.maxLength && (u = e.maxLength, f = !0), e.lazy ? l = !0 : t.down.init() }, callback: function(e) { s = !1; var n = t.up;
                    p(), n.callback(e) }, incoming: function(n, r) { if (f) { var o = n.indexOf("_"),
                            a = parseInt(n.substring(0, o), 10);
                        c += n.substring(o + 1), 0 === a && (e.encode && (c = i(c)), t.up.incoming(c, r), c = "") } else t.up.incoming(n, r) }, outgoing: function(n, o, i) { e.encode && (n = a(n)); var s, c = []; if (f) { for (; 0 !== n.length;) s = n.substring(0, u), n = n.substring(s.length), c.push(s); for (; s = c.shift();) r.push({ data: c.length + "_" + s, origin: o, callback: 0 === c.length ? i : null }) } else r.push({ data: n, origin: o, callback: i });
                    l ? t.down.init() : p() }, destroy: function() { n = !0, t.down.destroy() } } }, v.stack.VerifyBehavior = function(e) { var t, n, r;

            function o() { n = Math.random().toString(16).substring(2), t.down.outgoing(n) } return t = { incoming: function(i, a) { var s = i.indexOf("_"); - 1 === s ? i === n ? t.up.callback(!0) : r || (r = i, e.initiate || o(), t.down.outgoing(i)) : i.substring(0, s) === r && t.up.incoming(i.substring(s + 1), a) }, outgoing: function(e, r, o) { t.down.outgoing(n + "_" + e, r, o) }, callback: function(t) { e.initiate && o() } } }, v.stack.RpcBehavior = function(e, t) { var n, r = t.serializer || L(),
                o = 0,
                i = {};

            function a(e) { e.jsonrpc = "2.0", n.down.outgoing(r.stringify(e)) }

            function s(e, t) { var n = Array.prototype.slice; return function() { var r, s = arguments.length,
                        c = { method: t };
                    s > 0 && "function" == typeof arguments[s - 1] ? (s > 1 && "function" == typeof arguments[s - 2] ? (r = { success: arguments[s - 2], error: arguments[s - 1] }, c.params = n.call(arguments, 0, s - 2)) : (r = { success: arguments[s - 1] }, c.params = n.call(arguments, 0, s - 1)), i["" + ++o] = r, c.id = o) : c.params = n.call(arguments, 0), e.namedParams && 1 === c.params.length && (c.params = c.params[0]), a(c) } }

            function c(e, t, n, r) { if (n) { var o, i, s;
                    t ? (o = function(e) { o = h, a({ id: t, result: e }) }, i = function(e, n) { i = h; var r = { id: t, error: { code: -32099, message: e } };
                        n && (r.error.data = n), a(r) }) : o = i = h, s = r, "[object Array]" !== Object.prototype.toString.call(s) && (r = [r]); try { var c = n.method.apply(n.scope, r.concat([o, i]));
                        I(c) || o(c) } catch (e) { i(e.message) } } else t && a({ id: t, error: { code: -32601, message: "Procedure not found." } }) } return n = { incoming: function(e, n) { var o = r.parse(e); if (o.method) t.handle ? t.handle(o, a) : c(o.method, o.id, t.local[o.method], o.params);
                    else { var s = i[o.id];
                        o.error ? s.error && s.error(o.error) : s.success && s.success(o.result), delete i[o.id] } }, init: function() { if (t.remote)
                        for (var r in t.remote) t.remote.hasOwnProperty(r) && (e[r] = s(t.remote[r], r));
                    n.down.init() }, destroy: function() { for (var r in t.remote) t.remote.hasOwnProperty(r) && e.hasOwnProperty(r) && delete e[r];
                    n.down.destroy() } } }, e.easyXDM = v }(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent) }, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t) {! function(e) { "use strict"; if (!e.fetch) { var t = "URLSearchParams" in e,
                n = "Symbol" in e && "iterator" in Symbol,
                r = "FileReader" in e && "Blob" in e && function() { try { return new Blob, !0 } catch (e) { return !1 } }(),
                o = "FormData" in e,
                i = "ArrayBuffer" in e; if (i) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                s = function(e) { return e && DataView.prototype.isPrototypeOf(e) },
                c = ArrayBuffer.isView || function(e) { return e && a.indexOf(Object.prototype.toString.call(e)) > -1 };
            h.prototype.append = function(e, t) { e = f(e), t = p(t); var n = this.map[e];
                this.map[e] = n ? n + "," + t : t }, h.prototype.delete = function(e) { delete this.map[f(e)] }, h.prototype.get = function(e) { return e = f(e), this.has(e) ? this.map[e] : null }, h.prototype.has = function(e) { return this.map.hasOwnProperty(f(e)) }, h.prototype.set = function(e, t) { this.map[f(e)] = p(t) }, h.prototype.forEach = function(e, t) { for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this) }, h.prototype.keys = function() { var e = []; return this.forEach((function(t, n) { e.push(n) })), d(e) }, h.prototype.values = function() { var e = []; return this.forEach((function(t) { e.push(t) })), d(e) }, h.prototype.entries = function() { var e = []; return this.forEach((function(t, n) { e.push([n, t]) })), d(e) }, n && (h.prototype[Symbol.iterator] = h.prototype.entries); var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            w.prototype.clone = function() { return new w(this, { body: this._bodyInit }) }, v.call(w.prototype), v.call(k.prototype), k.prototype.clone = function() { return new k(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new h(this.headers), url: this.url }) }, k.error = function() { var e = new k(null, { status: 0, statusText: "" }); return e.type = "error", e }; var l = [301, 302, 303, 307, 308];
            k.redirect = function(e, t) { if (-1 === l.indexOf(t)) throw new RangeError("Invalid status code"); return new k(null, { status: t, headers: { location: e } }) }, e.Headers = h, e.Request = w, e.Response = k, e.fetch = function(e, t) { return new Promise((function(n, o) { var i = new w(e, t),
                        a = new XMLHttpRequest;
                    a.onload = function() { var e, t, r = { status: a.status, statusText: a.statusText, headers: (e = a.getAllResponseHeaders() || "", t = new h, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) { var n = e.split(":"),
                                    r = n.shift().trim(); if (r) { var o = n.join(":").trim();
                                    t.append(r, o) } })), t) };
                        r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"); var o = "response" in a ? a.response : a.responseText;
                        n(new k(o, r)) }, a.onerror = function() { o(new TypeError("Network request failed")) }, a.ontimeout = function() { o(new TypeError("Network request failed")) }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && r && (a.responseType = "blob"), i.headers.forEach((function(e, t) { a.setRequestHeader(t, e) })), a.send(void 0 === i._bodyInit ? null : i._bodyInit) })) }, e.fetch.polyfill = !0 }

        function f(e) { if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase() }

        function p(e) { return "string" != typeof e && (e = String(e)), e }

        function d(e) { var t = { next: function() { var t = e.shift(); return { done: void 0 === t, value: t } } }; return n && (t[Symbol.iterator] = function() { return t }), t }

        function h(e) { this.map = {}, e instanceof h ? e.forEach((function(e, t) { this.append(t, e) }), this) : Array.isArray(e) ? e.forEach((function(e) { this.append(e[0], e[1]) }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) { this.append(t, e[t]) }), this) }

        function m(e) { if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0 }

        function y(e) { return new Promise((function(t, n) { e.onload = function() { t(e.result) }, e.onerror = function() { n(e.error) } })) }

        function g(e) { var t = new FileReader,
                n = y(t); return t.readAsArrayBuffer(e), n }

        function b(e) { if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer }

        function v() { return this.bodyUsed = !1, this._initBody = function(e) { if (this._bodyInit = e, e)
                    if ("string" == typeof e) this._bodyText = e;
                    else if (r && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (o && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (i && r && s(e)) this._bodyArrayBuffer = b(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else { if (!i || !ArrayBuffer.prototype.isPrototypeOf(e) && !c(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = b(e) } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, r && (this.blob = function() { var e = m(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g) }), this.text = function() { var e, t, n, r = m(this); if (r) return r; if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = y(t), t.readAsText(e), n; if (this._bodyArrayBuffer) return Promise.resolve(function(e) { for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, o && (this.formData = function() { return this.text().then(O) }), this.json = function() { return this.text().then(JSON.parse) }, this }

        function w(e, t) { var n, r, o = (t = t || {}).body; if (e instanceof w) { if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0) } else this.url = String(e); if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), u.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o) }

        function O(e) { var t = new FormData; return e.trim().split("&").forEach((function(e) { if (e) { var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o)) } })), t }

        function k(e, t) { t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e) } }("undefined" != typeof self ? self : this) }]);