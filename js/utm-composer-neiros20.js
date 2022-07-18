/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT В© Zeno Rocha
 */
function make_url() {
    var e = $("#mobile").is(":checked") ? "_mobile" : "", t = [], n = "";
	var protocol_url = $('#utm-protocol option:selected').html();
    $(".utm_value").each(function (i) {


        var o = $(this).val().trim();
        if (0 === i) {
            if ("" === o) url = protocol_url+"://yourdomain.com/?"; else {
                var r = o.split("#");
                r.length > 1 && (o = r[0], n = r[1]), o = ((o = protocol_url == o.substring(0, 4) ? o : protocol_url+"://" + o).match(/\//g) || []).length > 2 ? o : o + "/", url = o.indexOf("?") < 0 ? o + "?" : "?" == o.slice(-1) ? o : "&" != o.slice(-1) ? o + "&" : o
            }
            t.push(url)
        } else if ("" !== o) {
            if($(this).attr('id')=='neiros'){
                var a = transliterate(o).replace(/(\'|\s\+)/gi, "_").replace(/(&)/g, "+");
                t.push( bracesInADash(a, i) + e)
            }else{
                var a = transliterate(o).replace(/(\'|\s\+)/gi, "_").replace(/(\#|\=|\[|\]|\?|\(|\)|\\|\/|\,|\;|\:|\~|\|)/gi, "-").replace(/(&)/g, "+");
                t.push("utm_" + $(this).attr("id") + "=" + bracesInADash(a, i) + e)
            }


        }
    });
    var i = t[0].toLowerCase() + t.slice(1).join("&").toLowerCase().replace(/\s/g, "_").replace(/[^\p{xx}|-|\u0430-\u044f|a-z|\+|_|0-9|\[|\]|{|}|\(|\)|\/|.|,|;|:|?|=|&|~]|\^/g, "-").replace(/(-)\1{1,}/g, "-");
    "" !== n && (i = i + "#" + n), $("[data-clipboard-text]").attr("data-clipboard-text", i), $("#result_url").text(i)
    $('.utm-panel-res').show();
    qqrr(i);

}

function clear_fields() {
    $("#result_url").attr("data-clipboard-text", ""), $(".utm_value:not(#landing_url)").each(function () {
        $(this).val("")
    }), $("#result_url").text("\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u0430")
}

function transliterate(e) {
    var t = "", n = {
        "\u0401": "YO",
        "\u0419": "I",
        "\u0426": "TS",
        "\u0423": "U",
        "\u041a": "K",
        "\u0415": "E",
        "\u041d": "N",
        "\u0413": "G",
        "\u0428": "SH",
        "\u0429": "SCH",
        "\u0417": "Z",
        "\u0425": "H",
        "\u042a": "'",
        "\u0451": "yo",
        "\u0439": "i",
        "\u0446": "ts",
        "\u0443": "u",
        "\u043a": "k",
        "\u0435": "e",
        "\u043d": "n",
        "\u0433": "g",
        "\u0448": "sh",
        "\u0449": "sch",
        "\u0437": "z",
        "\u0445": "h",
        "\u044a": "'",
        "\u0424": "F",
        "\u042b": "I",
        "\u0412": "V",
        "\u0410": "a",
        "\u041f": "P",
        "\u0420": "R",
        "\u041e": "O",
        "\u041b": "L",
        "\u0414": "D",
        "\u0416": "ZH",
        "\u042d": "E",
        "\u0444": "f",
        "\u044b": "i",
        "\u0432": "v",
        "\u0430": "a",
        "\u043f": "p",
        "\u0440": "r",
        "\u043e": "o",
        "\u043b": "l",
        "\u0434": "d",
        "\u0436": "zh",
        "\u044d": "e",
        "\u042f": "Ya",
        "\u0427": "CH",
        "\u0421": "S",
        "\u041c": "M",
        "\u0418": "I",
        "\u0422": "T",
        "\u042c": "'",
        "\u0411": "B",
        "\u042e": "YU",
        "\u044f": "ya",
        "\u0447": "ch",
        "\u0441": "s",
        "\u043c": "m",
        "\u0438": "i",
        "\u0442": "t",
        "\u044c": "'",
        "\u0431": "b",
        "\u044e": "yu"
    };
    for (var i in e) e.hasOwnProperty(i) && (n[e[i]] === undefined ? t += e[i] : t += n[e[i]]);
    return t
}

function bracesInADash(e) {
    var t = 0, n = 0, i = 0, o = "", r = 5 == activRadio ? "{{" : "{", a = 5 == activRadio ? "}}" : "}",
        c = 5 == activRadio ? 2 : 1, u = 0, l = {
            cutSym: function (e) {
                return e.replace(/(\{|\})/g, "-")
            }, closeBracksLength: function () {
                return 5 == activRadio ? null === e.match(/}}/gi) ? 0 : e.match(/}}/gi).length : null === e.match(/}/gi) ? 0 : e.match(/}/gi).length
            }, openBracksLenght: function () {
                return 5 == activRadio ? null === e.match(/{{/gi) ? 0 : e.match(/{{/gi).length : null === e.match(/{/gi) ? 0 : e.match(/{/gi).length
            }
        };
    if (0 === l.closeBracksLength() || 0 === l.openBracksLenght()) o = l.cutSym(e); else if (1 == l.openBracksLenght()) t = e.indexOf(r, t), n = e.indexOf(a, n), o += l.cutSym(e.substr(0, t)) + r + l.cutSym(e.substr(t + c, n - t - c)) + a + l.cutSym(e.substr(n + c, e.length)); else {
        for (; u < l.openBracksLenght() && (t = e.indexOf(r, t), -1 != (n = e.indexOf(a, n)));) t >= i && (o += l.cutSym(e.substr(0 === i ? 0 : i + c, 0 === t ? 0 : t - i - (0 === u ? 0 : c))) + (t > n ? "" : r) + l.cutSym(e.substr(t + c, n - t - c)) + (t > n ? "" : a)), i = n, n++, t++, u++;
        o += -1 == n && i < t || -1 != n && t > n ? l.cutSym(e.substr(t, e.length)) : i > t ? l.cutSym(e.substr(i + c, e.length)) : l.cutSym(e.substr(n + c, e.length))
    }
    return o
}

!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e()
    }
}(function () {
    var e;
    return function t(e, n, i) {
        function o(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var u = "function" == typeof require && require;
                    if (!c && u) return u(a, !0);
                    if (r) return r(a, !0);
                    var l = new Error("Cannot find module '" + a + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var s = n[a] = {exports: {}};
                e[a][0].call(s.exports, function (t) {
                    return o(e[a][1][t] || t)
                }, s, s.exports, t, e, n, i)
            }
            return n[a].exports
        }

        for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
        return o
    }({
        1: [function (e, t) {
            function n(e, t) {
                for (; e && e.nodeType !== i;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }

            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var o = Element.prototype;
                o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
            }
            t.exports = n
        }, {}], 2: [function (e, t) {
            function n(e, t, n, o, r) {
                var a = i.apply(this, arguments);
                return e.addEventListener(n, a, r), {
                    destroy: function () {
                        e.removeEventListener(n, a, r)
                    }
                }
            }

            function i(e, t, n, i) {
                return function (n) {
                    n.delegateTarget = o(n.target, t), n.delegateTarget && i.call(e, n)
                }
            }

            var o = e("./closest");
            t.exports = n
        }, {"./closest": 1}], 3: [function (e, t, n) {
            n.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}], 4: [function (e, t) {
            function n(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!a.string(t)) throw new TypeError("Second argument must be a String");
                if (!a.fn(n)) throw new TypeError("Third argument must be a Function");
                if (a.node(e)) return i(e, t, n);
                if (a.nodeList(e)) return o(e, t, n);
                if (a.string(e)) return r(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function () {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function o(e, t, n) {
                return Array.prototype.forEach.call(e, function (e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function r(e, t, n) {
                return c(document.body, e, t, n)
            }

            var a = e("./is"), c = e("delegate");
            t.exports = n
        }, {"./is": 3, delegate: 2}], 5: [function (e, t) {
            function n(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var i = window.getSelection(), o = document.createRange();
                    o.selectNodeContents(e), i.removeAllRanges(), i.addRange(o), t = i.toString()
                }
                return t
            }

            t.exports = n
        }, {}], 6: [function (e, t) {
            function n() {
            }

            n.prototype = {
                on: function (e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({fn: t, ctx: n}), this
                }, once: function (e, t, n) {
                    function i() {
                        o.off(e, i), t.apply(n, arguments)
                    }

                    var o = this;
                    return i._ = t, this.on(e, i, n)
                }, emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, t);
                    return this
                }, off: function (e, t) {
                    var n = this.e || (this.e = {}), i = n[e], o = [];
                    if (i && t) for (var r = 0, a = i.length; r < a; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                    return o.length ? n[e] = o : delete n[e], this
                }
            }, t.exports = n
        }, {}], 7: [function (t, n, i) {
            !function (o, r) {
                if ("function" == typeof e && e.amd) e(["module", "select"], r); else if (void 0 !== i) r(n, t("select")); else {
                    var a = {exports: {}};
                    r(a, o.select), o.clipboardAction = a.exports
                }
            }(this, function (e, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var o = n(t), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(), c = function () {
                    function e(t) {
                        i(this, e), this.resolveOptions(t), this.initSelection()
                    }

                    return a(e, [{
                        key: "resolveOptions", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function () {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function () {
                            var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return e.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o["default"])(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function () {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function () {
                            this.selectedText = (0, o["default"])(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function () {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult", value: function (e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function () {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function () {
                            return this._action
                        }
                    }, {
                        key: "target", set: function (e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        }, get: function () {
                            return this._target
                        }
                    }]), e
                }();
                e.exports = c
            })
        }, {select: 5}], 8: [function (t, n, i) {
            !function (o, r) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r); else if (void 0 !== i) r(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener")); else {
                    var a = {exports: {}};
                    r(a, o.clipboardAction, o.tinyEmitter, o.goodListener), o.clipboard = a.exports
                }
            }(this, function (e, t, n, i) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
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

                function u(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }

                var l = o(t), s = o(n), f = o(i),
                    d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, h = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }

                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(), p = function () {
                        function e(t, n) {
                            r(this, e);
                            var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return i.resolveOptions(n), i.listenClick(t), i
                        }

                        return c(e, s["default"]), h(e, [{
                            key: "resolveOptions", value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick", value: function (e) {
                                var t = this;
                                this.listener = (0, f["default"])(e, "click", function (e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick", value: function (e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l["default"]({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction", value: function (e) {
                                return u("action", e)
                            }
                        }, {
                            key: "defaultTarget", value: function (e) {
                                var t = u("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText", value: function (e) {
                                return u("text", e)
                            }
                        }, {
                            key: "destroy", value: function () {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported", value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e, n = !!document.queryCommandSupported;
                                return t.forEach(function (e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }), n
                            }
                        }]), e
                    }();
                e.exports = p
            })
        }, {"./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6}]
    }, {}, [8])(8)
});
var ready/*, sources_data = DATA_ARRAY;*/
neiros_hide_bubble = !0;

ready = function () {
    new Clipboard($(".copy")[0]).on("success", function () {
        $("#copy").text("\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440").removeAttr("data-clipboard-text")
    }), $(".input.utm_value").on("keyup", function () {
		str = $(this).val()

		str = str.replace("http://","");
		 str = str.replace("https://","")
		  str = str.replace("https","")
		  str = str.replace("http","")
		  str = str.replace("http:","")
		  str = str.replace("https:","")
		  str = str.replace("https:/","")
		   str = str.replace("http:/","")

		$(this).val(str)

        $("#copy").text("\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c").attr("data-clipboard-text", "")
    }), $("input[type=radio][name=adv_traffic], input[type=radio][name=adv_traffic-sub]").change(function () {
       // clear_fields();

      /*  $.each(e, function (e, t) {
            $("#" + e).val(t.value);
            var n = "" === t.info ? t.info : "&mdash; " + t.info;
            $("#info-" + e).html(n)
        }), */"" !== $("#landing_url").val() && make_url(), $("#copy").text("\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c").attr("data-clipboard-text", $("#result_url")[0].innerText)
    }), $(".utm_value").keyup(function () {
        make_url()
    })
}, $(document).on("turbolinks:load", ready), $("body").on("change", "#mobile", function () {
    make_url()
});

function qqrr(urlka){
    $('#nav-profile').html('<canvas id="qrcode" style="width: 250px"></canvas>');
    $('#nav-profile').append('<a href="" id="link_qr">Скачать</a>');

    makeQR(urlka)

    // el = (selector) => document.getElementById('nav-profile');


    // при нажатии на кнопку

        // получаем блок куда будет выводиться QR-код
     //   let qrCodeOutput = el('#nav-profile');

        // получаем содержимое текстового поля
        //let text = urlka;

        // очищаем блок с QR-кодом
       // qrCodeOutput.innerHTML = "";

        // и помещаем в него сгенерированный библиотекой QR-код
      //  qrCodeOutput.append(QRCode.generateHTML(text, {}))


}
const makeQR = (your_data) => {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRious({
        element: qrcodeContainer,
        value: your_data,
        size: 600,
        padding:50,
    }); // generate QR code in canvas
    downloadQR(); // function to download the image

}

function downloadQR() {
    var link = document.getElementById('link_qr');
    link.download = 'qr.png';
    link.href = document.getElementById('qrcode').toDataURL()

}

