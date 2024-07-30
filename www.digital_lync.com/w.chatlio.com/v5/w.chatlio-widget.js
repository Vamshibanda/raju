! function() {
    "use strict";
    var e, t = !1,
        s = function() {
            if (t) {
                var e = Array.prototype.slice.call(arguments);
                console.log.apply(console, e)
            }
        },
        a = {},
        i = ["https://w.chatlio.com/v5/vendor/chatlio.min.7ab10269.js"],
        n = window.localStorage,
        o = {},
        r = 0;
    (function() {
        try {
            var e = Date.now();
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (e) {
            return console.warn("localStorage is not available"), !1
        }
    })() || (n = {
        _data: {},
        setItem: function(e, t) {
            this._data[e] = t
        },
        getItem: function(e) {
            return this._data.hasOwnProperty(e) ? this._data[e] : null
        },
        removeItem: function(e) {
            delete this._data[e]
        }
    });
    var l, c, h, d, p, m, u, g, f, v, w, b, C, y, E, S, T, N, k, I, A, M, U, x, R, P, q, O, _, L, D = "function" == typeof window.html2canvas,
        F = !1,
        B = !1,
        W = !1,
        V = !1,
        j = !0,
        G = !1,
        H = "https://w.chatlio.com/v5/main.b74a0d69.css",
        J = "https://api.chatlio.com",
        z = 2e4,
        Q = !1,
        Z = !0,
        Y = !1,
        K = function() {
            console.warn("showOfflineForm() called without being initialized")
        },
        $ = {
            play: function() {}
        },
        X = {
            userId: void 0,
            traits: {}
        },
        ee = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
        },
        te = /[&><"']/g,
        se = function(e) {
            return ee[e]
        },
        ae = function(e) {
            return e && e.length > 0 ? e.replace(te, se) : ""
        },
        ie = function(e, t) {
            var s = document.createEvent("Event");
            t && (s.data = t), s.initEvent("chatlio." + e, !0, !0), U.dispatchEvent(s)
        },
        ne = function(e) {
            var t = document.createElement("div");
            t.id = "chatlio-widget", document.getElementById("chatlioWidgetPlaceholder") ? document.getElementById("chatlioWidgetPlaceholder").appendChild(t) : document.body.appendChild(t), "false" !== (y = ae(e.getAttribute("data-start-hidden")) || !1) && "null" !== y || (y = !1), j = ae(e.getAttribute("data-disable-cookies")) || !1, G = ae(e.getAttribute("data-enable-subdomain-state")) || !1, H = ae(e.getAttribute("data-chatlio-css-src")) || H;
            try {
                u = JSON.parse(e.getAttribute("data-widget-options")) || {}
            } catch (e) {
                u = {}
            }
            return g = JSON.parse(e.getAttribute("data-widget-metadata")), t
        },
        oe = "currentScript" in document ? document.currentScript : function() {
            for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                var s = e[t].src;
                if (s && s.indexOf("w.chatlio-widget.js") >= 0) return e[t]
            }
            return null
        }();
    if (oe)
        if (t = JSON.parse(ae(oe.getAttribute("data-chatlio-debug")) || !1), l = ae(oe.getAttribute("data-widget-id"))) {
            h = "chatlio_ece--" + l, c = n.getItem(h) || l;
            var re = function() {
                d = "chatlio_uuid--" + c, I = "chatlio-" + c + "-trran", p = "chatlio_rt--" + c, m = "chatlio_at--" + c
            };
            re(), U = ne(oe), e = ae(oe.getAttribute("data-loader-version"));
            var le = {
                    "just now": "just now",
                    "y ago": "y ago",
                    "mo ago": "m ago",
                    "d ago": "d ago",
                    "h ago": "h ago",
                    "m ago": "m ago"
                },
                ce = function(e, t) {
                    var s = document.createElement("script");
                    s.setAttribute("type", "text/javascript"), s.setAttribute("src", e), s.onload = t, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(s)
                },
                he = function(e) {
                    return e && "object" == typeof e && "createElement" in e && e.version >= "15.6.1" && "__SECRET_INJECTED_REACT_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED" in e
                },
                de = function(e) {
                    var t = e.split(".");
                    return t.length <= 2 ? e : t.slice(1).join(".")
                },
                pe = function(e) {
                    for (var t = e + "=", s = document.cookie.split(";"), a = 0; a < s.length; a++) {
                        var i = s[a];
                        if (-1 !== i.indexOf(t)) {
                            for (;
                                " " === i.charAt(0);) i = i.substring(1);
                            var o = i.substring(t.length, i.length);
                            return n.setItem(e, o), o
                        }
                    }
                    return ""
                },
                me = {
                    getItem: function(e) {
                        return G ? pe(e) : n.getItem(e) || pe(e)
                    },
                    setItem: function(e, t) {
                        n.setItem(e, t),
                            function(e, t) {
                                j || (document.cookie = e + "=" + t + "; path=/;domain=" + de(window.location.hostname) + "; SameSite=Lax")
                            }(e, t)
                    },
                    removeItem: function(e) {
                        n.removeItem(e),
                            function(e) {
                                var t = e + "=;path=/;domain=" + de(window.location.hostname) + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                                document.cookie = t
                            }(e)
                    },
                    vsUuid: function() {
                        return me.getItem(d)
                    }
                },
                ue = function(e) {
                    S = "chatlio-" + e + "-messages", N = "chatlio-" + e + "-isClosed", k = "chatlio-" + e + "-provided-req-info", A = "chatlio-" + e + "-inConvo", T = "chatlio-isQuestionGroupChat";
                    var t = c + "--trran",
                        s = n.getItem(t);
                    s && (n.setItem(I, s), n.removeItem(t))
                };
            me.vsUuid().length >= 36 && ue(me.vsUuid());
            var ge, fe, ve, we = function() {
                    return void 0 !== window.define && void 0 !== window.require
                },
                be = function(e, t) {
                    var s = new XMLHttpRequest;
                    return "withCredentials" in s ? (t && "" !== t || (t = "GET"), s.open(t, e, !0), s) : null
                },
                Ce = function(e, t) {
                    var s;
                    if ("POST" === (t = t || {}).verb) s = be(e, t.verb);
                    else if (null !== t.data) {
                        var i = t.data || "vsUuid=" + me.vsUuid() + "&ceUuid=" + c;
                        s = be(e + "?" + i)
                    } else s = be(e);
                    if (s.setRequestHeader("Content-Type", "application/json"), t.dontSendAuthToken || (t.sendRefreshToken && me.getItem(p) && me.getItem(p).length > 0 ? s.setRequestHeader("Authorization", "Bearer " + me.getItem(p)) : me.getItem(m) && me.getItem(m).length > 0 && s.setRequestHeader("Authorization", "Bearer " + me.getItem(m))), s.onload = function() {
                            if ("withCredentials" in s)
                                if (200 === s.status || 204 === s.status) {
                                    if ("token_expired_during_auth" === s.response.trim() && !t.doNotRetry) return t.doNotRetry = !0, void ye(function() {
                                        Ce(e, t)
                                    });
                                    if ("no_visitor_auth_token" === s.response.trim()) return;
                                    t.success && t.success.apply(s, arguments)
                                } else if (205 === s.status) {
                                if (c !== l) return console.log("visitor id not found in switched widget, bouncing back to original widget", me.getItem(d)), void setTimeout(function() {
                                    a.switchToWidget(l)
                                }, 1100);
                                console.log("resetting visitor, visitor id not found", me.getItem(d)), setTimeout(function() {
                                    a.reset({
                                        keepTriggerHistory: !0
                                    })
                                }, 1100)
                            } else if (s.status >= 400 && s.status < 500) {
                                if (403 === s.status && "visitor_session_not_approved" === s.response.trim()) return console.warn("Got visitor_session_not_approved, resetting; visitorUUID: ", me.getItem(d)), ge = null, void a.reset({
                                    keepTriggerHistory: !0
                                });
                                403 === s.status && "visitor_not_found" === s.response.trim() && (console.log("resetting visitor, visitor id not found", me.getItem(d)), setTimeout(function() {
                                    a.reset({
                                        keepTriggerHistory: !0
                                    })
                                }, 1100)), t.error && t.error.apply(s, arguments)
                            } else t.failure && t.failure.apply(s, arguments);
                            else {
                                var i, n;
                                try {
                                    i = JSON.parse(this.responseText) || {}
                                } catch (e) {
                                    i = {}
                                }
                                i.status && (n = parseInt(i.status)), !i.status || "200" !== i.status && "online" !== i.status ? t.error && i.status && n >= 400 && n < 500 ? t.error.apply(s, arguments) : t.failure && t.failure.apply(s, arguments) : t.success && t.success.apply(s, arguments)
                            }
                        }, s.onerror = function() {
                            t.failure && t.failure.apply(s, arguments)
                        }, t.timeout > 0 && (s.timeout = t.timeout, t.ontimeout ? s.ontimeout = function() {
                            t.ontimeout.apply(s, arguments)
                        } : s.ontimeout = function() {
                            t.failure && t.failure.apply(s, arguments)
                        }), "POST" === t.verb) {
                        var n = JSON.stringify(t.data);
                        s.send(n)
                    } else s.send();
                    return s
                },
                ye = function(e) {
                    Ce("https://api.chatlio.com/v1/p/visitor/session/new", {
                        verb: "POST",
                        doNotRetry: !0,
                        sendRefreshToken: !0,
                        data: {
                            vsUuid: me.vsUuid(),
                            ceUuid: c,
                            page: document.URL
                        },
                        success: function() {
                            var t, s;
                            (s = (t = this).getResponseHeader("X-Chatlio-Vsuuid")) && s.length > 0 && (me.setItem(d, s), ue(s)), me.setItem(p, t.getResponseHeader("X-Chatlio-Rt")), me.setItem(m, t.getResponseHeader("X-Chatlio-At")), void 0 !== e && e(), Ce("https://api.chatlio.com/v1/v/visitor/token/ack", {
                                verb: "GET",
                                doNotRetry: !0,
                                success: function() {},
                                failure: function() {
                                    console.warn("There was a problem confirming token. Please contact Chatlio support at support@chatlio.com.")
                                }
                            })
                        },
                        error: function() {
                            console.error("error fetching visitor auth: contact support@chatlio.com " + this.status, this.responseText)
                        },
                        failure: function() {
                            console.warn("There was a problem getting auth for visitor. Please contact Chatlio support at support@chatlio.com")
                        }
                    })
                },
                Ee = function() {
                    var e = me.getItem(S);
                    return 0 === e.length ? [] : JSON.parse(e) || []
                },
                Se = function(e, t) {
                    return !!e && 1e3 * e.ts > Date.now() - 60 * t * 1e3
                },
                Te = function() {
                    var e = n.getItem(N);
                    return !(!e || "undefined" === e) && !JSON.parse(e)
                },
                Ne = function(e) {
                    if (!e || "" === e) return !1;
                    for (var t = e.split(/[\s,]/).filter(function(e) {
                            return e.replace(/\s/, "")
                        }), s = document.URL, a = 0; a < t.length; a++) {
                        var i, n = t[a];
                        try {
                            i = new RegExp(n)
                        } catch (e) {
                            console.warn("'%s' is not a valid regular expression", n);
                            continue
                        }
                        if (s.match(i)) return !0
                    }
                    return !1
                },
                ke = function() {
                    console.warn("Called render before initialization")
                },
                Ie = function(e, t, a, i) {
                    if (a = a || {}, v = w = "", "" === e) return console.warn("No metadata"), {};
                    if (c !== l && !t) return console.warn("No metadata for switched widget"), {};
                    if (!i && R === e && (c === l || P === t)) return {};
                    var r, h, d, p = JSON.parse(e);
                    if (!p) return {};
                    if (C = p.off || "offline" === p.status, c !== l) {
                        var m = JSON.parse(t);
                        if (!m) return {};
                        C = m.off || "offline" === m.status, m.titleColor = p.titleColor, m.titleFontColor = p.titleFontColor, m.widgetAlignment = p.widgetAlignment, m.playSound = p.playSound, m.collapsedMode = p.collapsedMode, p = m
                    }
                    if (p.maxConcurrentConvos > 0, g) {
                        for (var u in g) s("[meta data] Overriding: '%s' = %o", u, g[u]), p[u] = g[u];
                        e = JSON.stringify(p)
                    }
                    if (!0 === p.playSound ? function() {
                            try {
                                ($ = new Audio("https://w.chatlio.com/v5/media/chatlio-new-message.c1e7ef43.mp3")).volume = .8
                            } catch (e) {
                                $ = {
                                    play: function() {}
                                }
                            }
                        }() : $ = {
                            play: function() {}
                        }, p.visitorIdentTraits) {
                        var y = JSON.parse(p.visitorIdentTraits);
                        !X.traits.email && y.email && (X.traits.email = y.email, n.setItem(k, !0)), !X.traits.name && y.name && (X.traits.name = y.name), y.isoCountry && y.isoCountry.length > 1 && (O = y.isoCountry)
                    }
                    if (r = O, h = p.countryDenyList, d = p.countryAllowList, h = h.toUpperCase(), d = d.toUpperCase(), h.indexOf(r) > -1 || !(d.indexOf(r) > -1) && d && d.length > 0) return Q = !0, v = "country is blocked", {};
                    o.primaryColor = p.titleColor, o.foregroundColor = p.titleFontColor, o.acceptColor = "#46C86D", o.declineColor = "#F1F6F8";
                    var E = b;
                    b = !0, a.realtimeStatus && (p.status = a.realtimeStatus);
                    var S = Number(p.maxVisitorInactiveMins) || 0;
                    "busy" === p.status && (S = Math.max(S, 5)), !p.off && "offline" !== p.status || Se(Ee().pop(), S) || (b = !1, w = p.off ? "manually set to off" : "status is offline and not actively chatting"), E !== b && ie(b ? "online" : "offline");
                    var T = Ne(p.blacklistedUrls);
                    return T && (v = "current url is in the hidden list"), f && !T && (p.expanded = Te(), ke(p, a)), R = e, P = t, p
                },
                Ae = function(e, t, s) {
                    Ie(e, t, null, s)
                },
                Me = function(e, t, s) {
                    s = s || {}, Ce("https://api.chatlio.com/v1/p/visitor/" + me.vsUuid() + "/event/" + t, {
                        verb: "POST",
                        data: s,
                        failure: function() {
                            console.warn("There was a problem sending the event to Chatlio. Please contact Chatlio support at support@chatlio.com. Status code: ", this.status)
                        }
                    })
                },
                Ue = function(e) {
                    var t, s, a = /^[\w]{8}-[\w]{4}-[\w]{4}-[\w]{4}-[\w]{12}$/,
                        i = /{"error":"([\w\s]*)"/g,
                        n = function() {
                            clearTimeout(s), s = setTimeout(function() {
                                t && t.close && t.close(), fe()
                            }, 2e4)
                        };
                    this.connect = function() {
                        this.isOpen() || (t = new EventSource("https://es.chatlio.com/events/?at=" + me.getItem(m)), n(), t.onmessage = function(t) {
                            n();
                            var s = i.exec(t.data);
                            if (s) {
                                var o = s[1];
                                switch (o) {
                                    case "bad token":
                                    case "invalid token":
                                        console.warn("[Chatlio, SSE-%d, onmessage] Token error: %s", e, o), this.close(), ye(fe);
                                        break;
                                    case "bad visitor uuid":
                                    case "bad ce uuid":
                                        console.warn("[Chatlio, SSE-%d, onmessage] Initialization error: %s", e, o);
                                        break;
                                    case "overquota":
                                        console.warn("[Chatlio, SSE-%d, onmessage] Overquota error: %s", e, o), this.close(), setTimeout(fe, 6e4)
                                }
                            } else a.test(t.data) && (Ie(R, P, {
                                startChat: !0
                            }, !0), Me(me.vsUuid(), "client-start-chat", {
                                callbackID: t.data
                            }))
                        }.bind(this), t.onerror = function() {
                            clearTimeout(s)
                        }, t.onopen = function() {
                            n()
                        })
                    }, this.isOpen = function() {
                        return !(!t || t.readyState !== t.OPEN && t.readyState !== t.CONNECTING)
                    }, this.close = function() {
                        clearTimeout(s), t && t.close && t.close()
                    }
                },
                xe = 0;
            fe = function() {
                xe++, window.EventSource || 1 !== xe ? xe >= 10 ? console.warn("[Chatlio] Too many SSE reconnects. Aborting.") : (ve = new Ue(xe)).connect() : ce("https://w.chatlio.com/v5/vendor/eventsource.min.3cb77f95.js", fe)
            };
            var Re = function() {
                    if (0 !== me.getItem(p).length) {
                        var t;
                        document.referrer && document.referrer.length > 0 && location.host.length > 0 && location.host !== document.referrer.split("/")[2] && (t = encodeURIComponent(document.referrer.substring(0, 240)));
                        var s = {
                                vsUuid: me.vsUuid(),
                                ceUuid: c,
                                page: document.URL,
                                referrerURL: t,
                                loaderVersion: e,
                                widgetVersion: "bf7236b-1699567758426"
                            },
                            a = "https://api.chatlio.com/v1/v/visitor/register",
                            i = n.getItem(A),
                            o = c !== l && !W && i;
                        o && (a += "?showConvoStatus=true"), i && (a += o ? "&" : "?", a += "fetchMessages=true"), Ce(a, {
                            verb: "POST",
                            data: s,
                            success: function() {
                                var e = function(e, t) {
                                    Ye(e, t);
                                    var s = _chatlio.isShown() ? "open" : "closed";
                                    0 !== Ee().length && f || Q || (ie("ready", {
                                        visibility: s
                                    }), B = !0)
                                };
                                if (F = !0, c !== l) {
                                    var t = this.responseText;
                                    Ce("https://api-cdn.chatlio.com/v1/p/chat_endpoints/" + l, {
                                        data: null,
                                        dontSendAuthToken: !0,
                                        failure: function() {
                                            console.warn("There was a problem registering visitor (switched widget). Please contact Chatlio support at support@chatlio.com")
                                        },
                                        success: function() {
                                            e(this.responseText, t)
                                        }
                                    })
                                } else e(this.responseText)
                            },
                            error: function() {},
                            failure: function() {
                                console.warn("There was a problem registering visitor. Please contact Chatlio support at support@chatlio.com")
                            }
                        })
                    } else {
                        var r = Date.now();
                        !ge || r - ge > 1e3 ? (ye(Re), ge = r) : console.warn("Stopped loading widget, tried to many times too quickly, contact support@chatlio.com")
                    }
                },
                Pe = function(e, t) {
                    void 0 === t && (t = 60);
                    var a = /^(\d*):/;
                    if (Y) s("[fireTrigger, timer] Mobile device. Not showing trigger due to the lack of screen space.");
                    else if (s("[fireTrigger, timer] Running: %o", e.uid), _chatlio.isOnline() && _chatlio.isShown())
                        if (Te()) s("[fireTrigger, timer] Widget is expanded. Not showing trigger.");
                        else {
                            var i = n.getItem(I) || "";
                            if (i && -1 !== i.indexOf(e.uid)) s("[fireTrigger, timer] Trigger ran already. Not showing trigger.");
                            else {
                                var o = i.match(a);
                                if (o && 2 === o.length && (o = new Date(Number(o[1])), Date.now() - o < 6e4 * t)) s("[fireTrigger, timer] last trigger ran at: %o, %d sec ago. Too soon: min delay is %d min. Not showing trigger.", o, (Date.now() - o) / 1e3, t);
                                else if (Se(function() {
                                        for (var e = Ee(), t = e.length - 1; t >= 0; t--)
                                            if ("Them" !== e[t].author) return e[t]
                                    }(), 60)) s("[fireTrigger, timer] Ongoing chat: last message was < 60 min ago. Not showing trigger.");
                                else {
                                    i += e.uid + ",";
                                    var r = Date.now() + ":";
                                    o ? i.replace(a, r) : i = r + i, n.setItem(I, i), s("[fireTrigger, timer] Showing triggered message '%s'", e.message), ie("trigger", e)
                                }
                            }
                        }
                    else s("[fireTrigger, timer] Slack team is not online or the widget is hidden. Not showing trigger.")
                },
                qe = function(e) {
                    var t;
                    try {
                        t = JSON.parse(e.triggerJson)
                    } catch (e) {
                        return
                    }
                    if (t && t.triggers && 0 !== t.triggers.length) {
                        var a = t.triggers;
                        a.sort(function(e, t) {
                            return e.after > t.after ? 1 : e.after < t.after ? -1 : 0
                        }), s("[setupTriggers] Triggers configured: %o", a);
                        var i, n = document.URL.slice(window.location.protocol.length + 2);
                        e: for (var o = 0; o < a.length; o++)
                            if (s("[setupTriggers] Looking at trigger: %o", a[o]), !0 === a[o].enabled)
                                for (var r = 0; r < a[o].on.length; r++) {
                                    var l = a[o].on[r].replace(/^https?:\/\//, "");
                                    if ("" !== l) switch (s("[setupTriggers] Comparing filter '%s' to: '%s' (match behavior '%s')", l, n, a[o].matchType), a[o].matchType) {
                                        case "startsWith":
                                            if (new RegExp("^" + l).test(n)) {
                                                s("[setupTriggers] '%s' matched (starts with)", l), i = a[o];
                                                break e
                                            }
                                            break;
                                        case "exact":
                                            if (n === l) {
                                                s("[setupTriggers] '%s' matched (exact match)", l), i = a[o];
                                                break e
                                            }
                                            break;
                                        default:
                                            if (-1 !== n.indexOf(l)) {
                                                s("[setupTriggers] '%s' matched (is contained)!", l), i = a[o];
                                                break e
                                            }
                                    }
                                } else s("[setupTriggers] Trigger '%s' is disabled, skipping", a[o].uid);
                        i && (s("[setupTriggers] Setting up trigger '%s' to run at %o (in %dsec): %o", i.uid, new Date(Date.now() + 1e3 * i.after), i.after, i), clearTimeout(M), M = setTimeout(Pe, 1e3 * i.after, i, t.minDelay))
                    } else s("[setupTriggers] No triggers to show.")
                },
                Oe = function() {
                    if (Ce("https://api.chatlio.com/v1/v/visitor/m", {
                            verb: "POST",
                            data: {
                                page: document.URL
                            }
                        }), R && "" !== R) {
                        clearTimeout(M);
                        var e = JSON.parse(R);
                        qe(e)
                    }
                };
            window.addEventListener("popstate", function() {
                Oe()
            });
            var _e = function(e, t, s) {
                    var a, i, n, o, r = 0;
                    s || (s = {});
                    var l = function() {
                        r = !1 === s.leading ? 0 : Date.now(), a = null, o = e.apply(i, n), a || (i = n = null)
                    };
                    return function() {
                        var c = Date.now();
                        r || !1 !== s.leading || (r = c);
                        var h = t - (c - r);
                        return i = this, n = arguments, h <= 0 || h > t ? (a && (clearTimeout(a), a = null), r = c, o = e.apply(i, n), a || (i = n = null)) : a || !1 === s.trailing || (a = setTimeout(l, h)), o
                    }
                }(function() {
                    Ce("https://api.chatlio.com/v1/p/visitor/" + me.vsUuid() + "/typing", {
                        data: null
                    })
                }, 1500),
                Le = function(e) {
                    Ce("https://api.chatlio.com/v1/v/visitor/message/ack/" + e)
                },
                De = function() {
                    if (b = !1, w = "establishing connection", ie("offline"), a.isShown() && R) {
                        var e = JSON.parse(R);
                        e.connecting = !0, e.expanded = Te(), ke(e), R = JSON.stringify(e)
                    }
                },
                Fe = function() {
                    var e = {
                        authEndpoint: "https://api.chatlio.com/v1/v/visitor/auth",
                        auth: {
                            headers: {
                                Authorization: "Bearer " + me.getItem(m)
                            }
                        },
                        encrypted: !0,
                        authTransport: "ajax",
                        disableStats: !0
                    };
                    (x = new Pusher("7fc2084f5bc6a21f2dfe", e)).connection.bind("failed", function() {
                        console.error("No native WebSockets and no working fallback (Flash, http)")
                    }), x.connection.bind("unavailable", function() {
                        console.warn("Pusher connection unavailable. Reconnecting in 10 seconds."), De()
                    }), x.connection.bind("disconnected", function() {
                        De()
                    })
                },
                Be = function(e, t, s, a, i, n, o, r) {
                    K = o, ye(function() {
                        if (void 0 === x && Fe(), L = setTimeout(function() {
                                Je(e)
                            }, 2e4), x.channels.channels["private-" + me.vsUuid()] || ((q = x.subscribe("private-" + me.vsUuid())).bind("new_message", function(t) {
                                f || _chatlio.show({
                                    expanded: !0
                                }), Le(t.ts), e(t), ie("messageReceived", t)
                            }), q.bind("user_typing", t), q.bind("service_messages", function(e) {
                                switch (e.type) {
                                    case "screenshot":
                                        if (!D) {
                                            ce("https://w.chatlio.com/v5/vendor/html2canvas-0.4.1.min.5330312b.js", function() {
                                                D = "function" == typeof window.html2canvas
                                            })
                                        }
                                        s(e);
                                        break;
                                    case "conversation-end":
                                        n(!1, e);
                                        break;
                                    case "request-info":
                                        a(e);
                                        break;
                                    case "no-answer":
                                        i(e);
                                        break;
                                    case "show-offline-form":
                                        w = "backend triggered offline mode via service message", o();
                                        break;
                                    case "show-question-group":
                                        r(e);
                                        break;
                                    default:
                                        console.warn("Unhandled service message type: %s", e.type)
                                }
                            })), function() {
                                if (void 0 === x) Fe();
                                else if (x.channels.channels["presence-" + me.vsUuid()]) return;
                                x.subscribe("presence-" + me.vsUuid()).bind("pusher:subscription_succeeded", function() {})
                            }(), !B && !Q) {
                            var l = _chatlio.isShown() ? "open" : "closed";
                            ie("ready", {
                                visibility: l
                            }), B = !0
                        }
                    })
                };
            J = ae(oe.getAttribute("data-proxy-url")) || J;
            var We = function(e, t, s) {
                    t = t || {}, s = s || [];
                    var a = {
                        vsUuid: me.vsUuid(),
                        currentPage: document.URL,
                        message: e.slice(0, 5e3),
                        qnas: s,
                        qgUid: t.qgUid,
                        autoQg: !!t.autoQg
                    };
                    t.isOfflineMsg ? a.isOfflineMsg = !0 : t.tUid && (a.tUid = t.tUid, a.tMessage = t.tMessage), Ce(J + "/v1/v/visitor/message/new", {
                        verb: "POST",
                        data: a,
                        success: function() {
                            n.setItem(A, !0)
                        },
                        error: function() {
                            "offline" === this.responseText && (w = "backend triggered offline mode via http response", K(e))
                        },
                        failure: function() {
                            console.warn("There was a problem sending the message to Chatlio. Please contact Chatlio support at support@chatlio.com. Status code: ", this.status)
                        }
                    })
                },
                Ve = 5;
            a = {
                version: function() {
                    return {
                        widget: "bf7236b-1699567758426",
                        loader: e
                    }
                },
                vsUuid: me.vsUuid,
                token: function() {
                    return me.getItem(p)
                },
                messages: Ee,
                page: Oe,
                reset: function(e) {
                    (e = e || {}).chatlioScriptTagId = e.chatlioScriptTagId || "chatlio-widget-embed";
                    var t = document.getElementById(e.chatlioScriptTagId);
                    return t ? (ve && ve.isOpen() && (xe = 0, ve.close()), function(e) {
                        e = e || {}, clearTimeout(_), z = 2e4, n.removeItem("chatlio-" + a.vsUuid() + "-a"), clearTimeout(L), me.removeItem(d), me.removeItem(m), me.removeItem(p), e.token && me.setItem(p, e.token), n.removeItem(N), n.removeItem(k), n.removeItem(S), n.removeItem(A), n.removeItem(T), e.keepTriggerHistory || (n.removeItem(I), clearTimeout(M)), n.removeItem(h), X = {
                            userId: void 0,
                            traits: {}
                        }, c = l, re(), e.messages && e.messages.length > 0 && Array.isArray(e.messages) && n.setItem(S, JSON.stringify(e.messages)), void 0 !== e.isClosed && n.setItem(N, e.isClosed), e.reqInfo && n.setItem(k, e.reqInfo), x && x.disconnect && x.disconnect(), x = void 0
                    }(e), U.parentNode.removeChild(U), this.init(t)) : (console.warn("No script node with ID %s", e.chatlioScriptTagId), this)
                },
                init: function(e) {
                    return (U = ne(e)) && (R = P = null, Re()), this
                },
                unmount: function() {
                    x && x.disconnect && x.disconnect(), x = void 0;
                    let e = document.getElementById("chatlio-widget");
                    e && e.remove()
                },
                identify: function() {
                    var e, t = {};
                    if (Array.isArray(arguments[0]) ? "object" == typeof arguments[0][0] ? (e = arguments[0][0][0], t = arguments[0][0][1] || {}) : (e = arguments[0][0], t = arguments[0][1] || {}) : (e = arguments[0], t = arguments[1] || {}), Object.keys(t).forEach(function(e) {
                            var s = t[e];
                            null != s ? t[e] = String(s) : "name" !== e && "email" !== e || delete t[e]
                        }), (X = {
                            userId: e,
                            traits: t
                        }).traits.email && (n.setItem(k, !0), f && R)) {
                        var s = JSON.parse(R);
                        !s.requireInfo && b || (s.expanded = Te(), ke(s))
                    }
                    return Ce("https://api.chatlio.com/v1/p/visitor/identify", {
                        data: "vsUuid=" + me.vsUuid() + "&ceUuid=" + c + "&userId=" + encodeURIComponent(e) + "&traits=" + encodeURIComponent(JSON.stringify(t)),
                        failure: function() {
                            Ve > 0 ? (setTimeout(function() {
                                window._chatlio.identify(e, t)
                            }, z), Ve--) : console.warn("Oh noes! There was a problem identifying the current user to Chatlio. Please contact Chatlio support at support@chatlio.com. Status code: ", this.status)
                        }
                    }), this
                },
                visitorCountryCode: function() {
                    var e, t = JSON.parse(R);
                    return t && t.visitorIdentTraits && (e = JSON.parse(t.visitorIdentTraits).isoCountry), e
                },
                track: function() {
                    return this
                },
                isShown: function() {
                    return f
                },
                isOnline: function() {
                    return b
                },
                isExpanded: function() {
                    return Te()
                },
                show: function(e) {
                    (e = e || {}).hasOwnProperty("expanded") && (ie("mounted"), !0 === e.expanded ? n.setItem(N, "false") : !1 === e.expanded && n.setItem(N, "true")), f = !0, "_chatlio.hide() was called" === v && (v = "");
                    var t = document.getElementById("chatlio-widget-container");
                    if (t && !e.expanded && t.classList.add("chatlio-widget-appear"), U.style.display = "block", R) {
                        var s = JSON.parse(R);
                        Ne(s.blacklistedUrls) || (s.expanded = Te(), s.visibility = "open", ie("visibilityChange", s), ke(s))
                    }
                    return this
                },
                hide: function() {
                    if (f = !1, v || (v = "_chatlio.hide() was called"), U.style.display = "none", R) {
                        var e = JSON.parse(R);
                        e.visibility = "closed", n.setItem(N, JSON.stringify(!!n.getItem(N))), ie("visibilityChange", e)
                    }
                    return this
                },
                open: function() {
                    this.show({
                        expanded: !0
                    })
                },
                showOrHide: function() {
                    return f ? (this.hide(), this) : (this.open(), this)
                },
                fullScreen: function() {
                    return U.className += " chatlio-fullscreen", this
                },
                exitFullScreen: function() {
                    return U.className = U.className.replace(/ chatlio-fullscreen/, ""), this
                },
                configure: function(e) {
                    return e ? ((g = Array.isArray(e) && e[0] && "object" == typeof e[0][0] ? e[0][0] : e).hasOwnProperty("timeLocale") && (le = g.timeLocale, delete g.timeSinceStrings), g.hasOwnProperty("debug") && (this.debug(g.debug), delete g.debug), g.hasOwnProperty("autoResponseMessage") && ie("clear-trigger"), Ae(R, P, !0), this) : (console.warn("_chatlio.configure called without data"), this)
                },
                send: function(e) {
                    Array.isArray(e) && (e = e && e[0] && e[0][0]);
                    var t = U.getElementsByTagName("TEXTAREA");
                    if (!t || !t[0]) return console.log("[_chatlio.send] Can't send: no widget?"), this;
                    (t = t[0]).value = e;
                    var s = new KeyboardEvent("keydown", {
                        keyCode: 13,
                        bubbles: !0,
                        cancelable: !0,
                        detail: 740
                    });
                    return t.dispatchEvent(s), this
                },
                debug: function(e) {
                    return t = e, this
                },
                switchToWidget: function(e, t) {
                    return !e || e.length < 36 ? (s("[switchToWidget] Invalid widget ID '%s'", e), this) : (s("[switchToWidget] Switching to '%s'", e), t = t || {}, W = !0, n.setItem(h, e), c = e, re(), x && x.disconnect && x.disconnect(), x = void 0, R = P = null, t.resubmitIdentifyData && (V = !0), Re())
                },
                switchWidget: function(e) {
                    return !e || e.length < 36 ? (s("[switchWidget] Invalid widget ID '%s'", e), this) : (s("[switchWidget] Switching to '%s'", e), oe && (s("[switchWidget] Updating attribute on script node %o", oe), oe.setAttribute("data-widget-id", e)), l = c = e, this.reset())
                },
                clearHistory: function() {
                    return s("[clearHistory] Clearing chat history for visitor '%s'", this.vsUuid()), z = 2e4, n.removeItem(S), Ie(R, P, {
                        clearHistory: !0
                    }, !0), this
                },
                trigger: function(e) {
                    return e.message = ae(e.message), e.uid || (e.uid = "custom"), e.after || (e.after = 1), e.matchType = "custom", s("[trigger] Setting up custom trigger '%s' to run at %o (in %dsec): %o", e.uid, new Date(Date.now() + 1e3 * e.after), e.after, e), clearTimeout(M), M = setTimeout(Pe, 1e3 * e.after, e), this
                },
                debugVisibility: function() {
                    var e = "";
                    v ? e += "Widget should not be visible: " + v : (e += "Widget should be visible and ", e += w ? "offline: " + w : "online"), console.log(e)
                }
            };
            var je, Ge, He = function() {
                    clearTimeout(_), z < 9e4 && (z += 1e3), _ = setTimeout(He, z), Z && Ce("https://api-cdn.chatlio.com/v1/p/chat_endpoints/" + l, {
                        data: null,
                        dontSendAuthToken: !0,
                        failure: function() {
                            b && De()
                        },
                        success: function() {
                            if (F)
                                if (c !== l) {
                                    var e = this.responseText;
                                    Ce("https://api-cdn.chatlio.com/v1/p/chat_endpoints/" + c, {
                                        data: null,
                                        dontSendAuthToken: !0,
                                        failure: function() {
                                            b && De()
                                        },
                                        success: function() {
                                            Ae(e, this.responseText)
                                        }
                                    })
                                } else Ae(this.responseText)
                        }
                    })
                },
                Je = function(e) {
                    clearTimeout(L), L = setTimeout(function() {
                        Je(e)
                    }, 2e4), C ? s("CE is offline; skipping polling this time") : Ce("https://api.chatlio.com/v1/v/visitor/messages/pending", {
                        data: null,
                        dontSendAuthToken: !1,
                        failure: function() {
                            console.warn("There was a problem polling for messages (vsUuid: " + me.vsUuid() + "). Please contact Chatlio support at support@chatlio.com.")
                        },
                        success: function() {
                            JSON.parse(this.responseText).forEach(function(t, a) {
                                setTimeout(function() {
                                    s("Got message by polling"), Le(t.ts), e(t), ie("messageReceived", t)
                                }, 10 * (a + 1))
                            }, this)
                        }
                    })
                },
                ze = function() {},
                Qe = function() {
                    document.hidden ? Z = !1 : (Z = !0, z = 2e4, ze(), He())
                },
                Ze = function() {
                    Ae(R, P, !0)
                };
            ! function() {
                if (u.forceRequireLoad) {
                    var e = 0,
                        t = function() {
                            we() ? require(i, function(e) {
                                if (he(e)) window.ChatlioReact = e;
                                else {
                                    if (!he(window.ChatlioReact)) return void console.warn("Forced require() loading React failed but found ChatlioReact. Contact Chatlio support: support@chatlio.com");
                                    React = window.ChatlioReact
                                }
                                Re()
                            }) : e < 10 ? (e++, setTimeout(t, 500)) : console.warn("Waiting for require() to appear. Contact Chatlio support: support@chatlio.com")
                        };
                    t()
                } else if (we() && !0 !== u.skipRequireLoad && "undefined" == typeof Ember) require(i, function(e) {
                    if (he(e)) window.ChatlioReact = e;
                    else {
                        if (!he(window.ChatlioReact)) return void console.warn("Using require() to load React failed. Contact Chatlio support: support@chatlio.com");
                        React = window.ChatlioReact, console.warn("Using require() to load React failed but found ChatlioReact. Contact Chatlio support: support@chatlio.com")
                    }
                    Re()
                });
                else {
                    var s = 0,
                        a = function() {
                            if (++s === i.length) {
                                if (!he(window.ChatlioReact)) return void console.warn("Loading React failed. Contact Chatlio support: support@chatlio.com");
                                Re()
                            }
                        };
                    i.forEach(function(e) {
                        ce(e, a)
                    })
                }
            }(), je = H, (Ge = document.createElement("link")).setAttribute("type", "text/css"), Ge.setAttribute("rel", "stylesheet"), Ge.setAttribute("href", ae(je)), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(Ge), ce("https://w.chatlio.com/v5/vendor/emojione-1.4.1.min.2f0e13b4.js"),
                function() {
                    if ("matchMedia" in window) {
                        var e = window.matchMedia("(max-width:480px)"),
                            t = function(e) {
                                Y = !!e.matches
                            };
                        e.addListener(t), t(e)
                    }
                }();
            var Ye = function(e, t) {
                ue(me.vsUuid()), V && (X.traits && !JSON.parse(n.getItem(k)) && window._chatlio.identify(X.userId, X.traits), V = !1), window.addEventListener("focus", Qe), document.addEventListener("chatlio.expanded", Ze);
                var s, i = window.ChatlioReact,
                    h = /^(\w[\w-+]*(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                    d = function(e) {
                        return h.test(e)
                    },
                    g = function(e) {
                        if (!window.emojione || 0 === e.length) return e;
                        var t;
                        window.emojione.ascii = !0;
                        for (var s = e = window.emojione.shortnameToImage(e.replace(/:(simple_smile|slightly_smiling_face):/gim, ":grinning:")), a = /<img.*?src="([^">]*\/([^">]*?))".*?>/g, i = /<img.*?.*?>/; t = a.exec(e);) {
                            var n = t[1],
                                o = "";
                            for (var r in n = n.substr(n.lastIndexOf("/") + 1).split(".")[0], window.emojione.emojioneList)
                                if (-1 !== window.emojione.emojioneList[r].indexOf(n.toLowerCase())) {
                                    o = r;
                                    break
                                }
                            s = s.replace(i, o)
                        }
                        return s
                    },
                    C = /(&lt;|<)(#C|@U|!).*?(&gt;|>)/gm,
                    I = /<((http:\/\/|https:\/\/|mailto:|tel:).*?)>/gm,
                    M = function(e, t) {
                        var s = t.split("|");
                        return '<a target="_blank" href="' + s[0] + '">' + ae(s[1] || s[0]) + "</a>"
                    },
                    x = /(^|\s)((http:\/\/|https:\/\/|mailto:|tel:)\S+)/gm,
                    R = function(e, t, s) {
                        return t + '<a target="_blank" href="' + s + '">' + ae(s) + "</a>"
                    },
                    P = /(```([^`]*)```)/gm,
                    q = /(`([^`]*)`)/gm,
                    O = /[*]([^*]+)[*]/g,
                    L = /(\s+|^)_(.+?)_(\s+|$)/g,
                    D = function(e) {
                        return "" === e || void 0 === e ? e : g(e).replace(C, "").replace(I, M).replace(x, R).replace(P, "<pre>$2</pre>").replace(q, "<code>$2</code>").replace(O, "<strong>$1</strong>").replace(L, " <em>$2</em> ")
                    },
                    B = ChatlioReact.addons.CSSTransitionGroup,
                    j = function(e) {
                        if (e.meta && e.meta.teamAvatarOn) return e.meta.teamAvatarUrl ? e.meta.teamAvatarUrl : "https://w.chatlio.com/v5/images/agent.a07867cf.png";
                        if (e.msg && e.msg.avatarUrl && e.msg.avatarUrl.length > 5 && e.showSlackAvatar) return e.msg.avatarUrl;
                        if (e.msg && "You" !== e.msg.author) return e.teamAvatarOn && e.teamAvatarUrl ? e.teamAvatarUrl : "https://w.chatlio.com/v5/images/agent.a07867cf.png";
                        if (e.requireInfo) {
                            if (e.meta.showTeamAvatarPreChat) return e.meta.teamAvatarUrl;
                            if (e.meta.forwardSlackUserName && e.meta.agents && e.meta.agents.length > 0) return e.meta.agents[e.meta.agents.length - 1].avatarUrl
                        }
                        return "https://w.chatlio.com/v5/images/agent.a07867cf.png"
                    },
                    H = function(e) {
                        return ChatlioReact.createClass({
                            render: function() {
                                return i.createElement(e, i.__spread({
                                    isFromVisitor: this.isFromVisitor(),
                                    bodyStyle: this.getBodyStyle()
                                }, this.props))
                            },
                            isFromVisitor: function() {
                                return this.props.msg && "You" === this.props.msg.author
                            },
                            getBodyStyle: function() {
                                return this.isFromVisitor() ? {
                                    backgroundColor: this.props.meta.titleColor
                                } : {}
                            }
                        })
                    },
                    J = function(e, t) {
                        for (var s = [], a = t.prompt || e[0].tUid ? 1 : 0; a < e.length; a += 2) "question" === e[a].type ? s.push([e[a].body, e[a + 1].body]) : "prompt" === e[a].type && s.push([e[a].body]);
                        return s
                    },
                    Q = function(e, t) {
                        var s = {
                            qgUid: e
                        };
                        return t || (s.autoQg = !0), s
                    },
                    K = ChatlioReact.createClass({
                        render: function() {
                            return this.props.show ? i.createElement("div", {
                                className: "chatlio-footer"
                            }, i.createElement("a", {
                                href: this.props.linkHref,
                                rel: "nofollow"
                            }, this.props.linkText)) : null
                        }
                    }),
                    ee = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-chat-header-menu__menu-item",
                                onClick: this.props.onClick
                            }, i.createElement("i", {
                                className: "chatlio-end-chat-icon"
                            }), this.props.conversationEndMenuLinkLabel)
                        }
                    }),
                    te = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-chat-header-menu__trigger",
                                onClick: this.props.onClick
                            }, i.createElement("svg", null, i.createElement("path", {
                                fill: this.getFillColor(),
                                d: "M9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 Z M9,-3 C7.8954305,-3 7,-3.8954305 7,-5 C7,-6.1045695 7.8954305,-7 9,-7 C10.1045695,-7 11,-6.1045695 11,-5 C11,-3.8954305 10.1045695,-3 9,-3 Z M9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 C10.1045695,7 11,7.8954305 11,9 C11,10.1045695 10.1045695,11 9,11 Z",
                                id: "Icon",
                                transform: "translate(9.000000, 2.000000) rotate(-270.000000) translate(-9.000000, -2.000000) "
                            })))
                        },
                        getFillColor: function() {
                            return this.props.menuOpen ? o.primaryColor : "#677583"
                        }
                    }),
                    se = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                open: !1
                            }
                        },
                        componentDidMount: function() {
                            window.addEventListener("click", this.hideMenu)
                        },
                        componentWillUnmount: function() {
                            window.removeEventListener("click", this.hideMenu)
                        },
                        isVisible: function() {
                            return !!this.props.meta.showConversationEnd && !this.props.conversationEnded
                        },
                        render: function() {
                            return this.isVisible() ? i.createElement("div", {
                                className: "chatlio-chat-header-menu"
                            }, i.createElement(te, {
                                onClick: this.toggleMenu,
                                menuOpen: this.state.open
                            }), i.createElement(B, {
                                transitionName: "chatlio-chat-header-menu__menu",
                                transitionEnterTimeout: 100,
                                transitionLeave: !0,
                                transitionLeaveTimeout: 100
                            }, this.renderMenu())) : i.createElement("div", null)
                        },
                        renderMenu: function() {
                            return this.state.open ? i.createElement("div", {
                                key: "menu",
                                className: "chatlio-chat-header-menu__menu"
                            }, i.createElement(ee, {
                                conversationEndMenuLinkLabel: this.props.meta.conversationEndMenuLinkLabel,
                                onClick: this.handleEndChat
                            })) : null
                        },
                        handleEndChat: function(e) {
                            this.hideMenu(), this.props.closeWidget(e)
                        },
                        toggleMenu: function(e) {
                            e.stopPropagation(), this.setState({
                                open: !this.state.open
                            })
                        },
                        showMenu: function(e) {
                            e.stopPropagation(), this.setState({
                                open: !0
                            })
                        },
                        hideMenu: function() {
                            this.setState({
                                open: !1
                            })
                        }
                    }),
                    ne = ChatlioReact.createClass({
                        render: function() {
                            return this.isPreChat() ? this.renderPreChatMode() : this.renderChatMode()
                        },
                        requiresInfo: function() {
                            return this.props.meta.requireInfo
                        },
                        hasEnteredInfo: function() {
                            return JSON.parse(n.getItem(k))
                        },
                        isPreChat: function() {
                            return this.props.isOffline || this.requiresInfo() && !this.hasEnteredInfo()
                        },
                        onKeyDown: function(e) {
                            "Enter" === e.key && (this.props.toggleWidget(), e.preventDefault())
                        },
                        renderChatMode: function() {
                            return i.createElement("div", {
                                className: "chatlio-chat-header"
                            }, this.renderMinimizeButton(), i.createElement(se, i.__spread({}, this.props)), this.renderAvatar(), this.renderText())
                        },
                        renderPreChatMode: function() {
                            return i.createElement("div", {
                                className: "chatlio-chat-header"
                            }, this.renderMinimizeButton())
                        },
                        renderMinimizeButton: function() {
                            return i.createElement("div", {
                                className: "chatlio-chat-header__minimize-button",
                                onClick: this.props.toggleWidget,
                                onKeyDown: this.onKeyDown.bind(this),
                                tabIndex: "101"
                            })
                        },
                        renderAvatar: function() {
                            return i.createElement("div", {
                                className: "chatlio-avatar"
                            }, i.createElement("img", {
                                id: "chatlio-header-avatar-image",
                                src: this.getAvatarUrl(),
                                alt: this.getPrimaryText()
                            }), i.createElement("div", {
                                className: "chatlio-avatar__online-dot"
                            }))
                        },
                        renderText: function() {
                            return i.createElement("div", {
                                className: "chatlio-chat-header__text"
                            }, i.createElement("div", {
                                className: "chatlio-chat-header__primary-text"
                            }, this.getPrimaryText()))
                        },
                        getAvatarUrl: function() {
                            var e = this.fetchAuthorInfoFromHistory();
                            return this.props.meta.teamAvatarOn || this.props.meta.showTeamAvatarPreChat && !e.avatarUrl ? this.props.meta.teamAvatarUrl ? this.props.meta.teamAvatarUrl : "https://w.chatlio.com/v5/images/agent.a07867cf.png" : e.avatarUrl && this.props.meta.forwardSlackUserName ? e.avatarUrl : this.props.meta.showAvatarPreChat && this.props.meta.agents && this.props.meta.agents.length > 0 ? this.props.meta.agents[0].avatarUrl : "https://w.chatlio.com/v5/images/agent.a07867cf.png"
                        },
                        fetchAuthorInfoFromHistory: function() {
                            var e = {
                                name: void 0,
                                avatarUrl: void 0
                            };
                            if (this.props.messages.length >= 1 && new Date(1e3 * this.props.messages[this.props.messages.length - 1].ts) > Date.now() - 9e5)
                                for (var t = this.props.messages.length; t--;)
                                    if ("You" !== this.props.messages[t].author) {
                                        "Them" !== this.props.messages[t].author && (e.name = this.props.messages[t].author);
                                        var s = this.props.messages[t].avatarUrl;
                                        if (s && s.length > 1) {
                                            e.avatarUrl = this.props.messages[t].avatarUrl;
                                            break
                                        }
                                    }
                            return e
                        },
                        getPrimaryText: function() {
                            if (this.props.meta.forwardSlackUserName) {
                                var e = this.fetchAuthorInfoFromHistory();
                                if (e.name) return e.name
                            }
                            return this.props.meta.agentLabel
                        },
                        getSecondaryText: function() {
                            return "Online"
                        }
                    }),
                    oe = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                percentage: this.props.percentage
                            }
                        },
                        componentWillReceiveProps: function(e) {
                            this.setState({
                                percentage: e.percentage
                            })
                        },
                        componentWillUnmount: function() {
                            window.cancelAnimationFrame(this.requestAnimationFrame)
                        },
                        render: function() {
                            var e = 50 - 100 / 6 / 2,
                                t = "M 50,50 m 0,-" + e + "a " + e + "," + e + " 0 1 1 0," + 2 * e + "a " + e + "," + e + " 0 1 1 0," + -2 * e,
                                s = 2 * Math.PI * e,
                                a = {
                                    strokeDasharray: s + "px " + s + "px",
                                    strokeDashoffset: (100 - this.state.percentage) / 100 * s + "px"
                                };
                            return i.createElement("svg", {
                                className: "chatlio-radial-progress",
                                viewBox: "0 0 100 100"
                            }, i.createElement("path", {
                                className: "chatlio-radial-progress__trail",
                                d: t,
                                strokeWidth: 100 / 6,
                                fillOpacity: 0
                            }), i.createElement("path", {
                                className: "chatlio-radial-progress__path",
                                d: t,
                                strokeWidth: 100 / 6,
                                fillOpacity: 0,
                                style: a
                            }))
                        }
                    }),
                    re = ChatlioReact.createClass({
                        render: function() {
                            return this.isFileUploadFailed() ? this.renderFailureMessage() : this.isFileUploading() ? this.renderProgress() : i.createElement("div", null)
                        },
                        renderProgress: function() {
                            return i.createElement("div", {
                                className: "chatlio-message chatlio-message-from-me"
                            }, i.createElement("div", {
                                className: "chatlio-message-content"
                            }, i.createElement("div", {
                                style: this.getBodyStyle(),
                                className: "chatlio-message-body"
                            }, i.createElement("div", {
                                className: "chatlio-file-upload"
                            }, i.createElement("div", {
                                className: "chatlio-file-upload-progress"
                            }, i.createElement(oe, {
                                percentage: this.props.fileUploadProgress
                            })), i.createElement("div", {
                                className: "chatlio-file-attachment-title"
                            }, this.props.fileUploadFilename)))))
                        },
                        getBodyStyle: function() {
                            return {
                                backgroundColor: o.primaryColor
                            }
                        },
                        renderFailureMessage: function() {
                            return i.createElement("div", {
                                className: "chatlio-file-upload-progress"
                            }, "File upload failed, file too big? Maximum allowed is 10MB.")
                        },
                        isFileUploading: function() {
                            return this.props.fileUploading
                        },
                        isFileUploadFailed: function() {
                            return -1 === this.props.fileUploadProgress
                        }
                    }),
                    he = (ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-emoji-drawer-trigger",
                                onClick: this.props.onClick
                            }, i.createElement("svg", null, i.createElement("g", {
                                id: "Symbols",
                                stroke: "none",
                                strokeWidth: "1",
                                fill: "none",
                                fillRule: "evenodd"
                            }, i.createElement("g", {
                                id: "icon/emojis",
                                fill: this.getFill()
                            }, i.createElement("path", {
                                d: "M0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 Z M18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 C14.418278,18 18,14.418278 18,10 Z M7.5,9.5 C6.67157288,9.5 6,8.82842712 6,8 C6,7.17157288 6.67157288,6.5 7.5,6.5 C8.32842712,6.5 9,7.17157288 9,8 C9,8.82842712 8.32842712,9.5 7.5,9.5 Z M12.5,9.5 C11.6715729,9.5 11,8.82842712 11,8 C11,7.17157288 11.6715729,6.5 12.5,6.5 C13.3284271,6.5 14,7.17157288 14,8 C14,8.82842712 13.3284271,9.5 12.5,9.5 Z M9.98509259,14.5537878 C8.24818982,14.5537878 6.60753047,13.9175189 5.33556874,12.7866483 C4.92282431,12.4196871 4.88570963,11.7876109 5.25267078,11.3748665 C5.61963193,10.962122 6.25170818,10.9250074 6.66445261,11.2919685 C7.57373154,12.1003865 8.74285514,12.5537878 9.98509259,12.5537878 C11.2443837,12.5537878 12.4283906,12.0877603 13.3422527,11.2591792 C13.7514009,10.8882126 14.3838088,10.9191648 14.7547755,11.3283129 C15.1257421,11.737461 15.0947899,12.369869 14.6856418,12.7408357 C13.4073611,13.899828 11.7458863,14.5537878 9.98509259,14.5537878 Z",
                                id: "Combined-Shape"
                            })))))
                        },
                        getInactiveFill: function() {
                            return "#677583"
                        },
                        getActiveFill: function() {
                            return o.primaryColor
                        },
                        getFill: function() {
                            return this.props.active ? this.getActiveFill() : this.getInactiveFill()
                        }
                    }), ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("form", null, i.createElement("input", {
                                id: "chatlio-file-picker",
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: function(e) {
                                    this.props.onChange(e.target.files)
                                }.bind(this)
                            }), i.createElement("label", {
                                htmlFor: "chatlio-file-picker",
                                className: "chatlio-file-picker-trigger"
                            }, i.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "48",
                                height: "48",
                                viewBox: "0 0 48 48"
                            }, i.createElement("path", {
                                fill: this.getFillColor(),
                                "fill-rule": "evenodd",
                                d: "M28.284 24.756l-7.073 7.073a2.001 2.001 0 0 1-2.826-.002 2.001 2.001 0 0 1-.002-2.826l9.901-9.902a2 2 0 0 0-2.828-2.828l-9.902 9.901a6.001 6.001 0 0 0 .002 8.483 6.001 6.001 0 0 0 8.483.003l7.074-7.074 9.19-9.19c3.515-3.514 3.513-9.22.002-12.73-3.514-3.514-9.214-3.513-12.73.001l-9.19 9.191-9.9 9.9c-4.686 4.686-4.687 12.284 0 16.97 4.687 4.687 12.284 4.688 16.97 0L38.185 29a2 2 0 1 0-2.829-2.829L22.627 38.898a7.999 7.999 0 0 1-11.313 0 8 8 0 0 1 0-11.314l9.9-9.9 9.19-9.19a5.002 5.002 0 0 1 7.073-.002 5.006 5.006 0 0 1-.002 7.073l-9.19 9.19z"
                            }))))
                        },
                        getFillColor: function() {
                            return "#677583"
                        }
                    })),
                    de = ChatlioReact.createClass({
                        render: function() {
                            return this.props.open ? i.createElement("div", {
                                className: "chatlio-emoji-drawer"
                            }, "Emojis go here") : i.createElement("div", null)
                        }
                    }),
                    pe = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                rebuiltNode: null
                            }
                        },
                        componentWillMount: function() {
                            this.setState({
                                rebuiltNode: this.rebuildAnchorTag(this.props.node)
                            })
                        },
                        render: function() {
                            return this.state.rebuiltNode ? i.createElement("a", {
                                href: this.state.rebuiltNode.href,
                                className: this.state.rebuiltNode.classList.value || null,
                                target: this.state.rebuiltNode.target || null,
                                rel: this.state.rebuiltNode.rel || null
                            }, this.state.rebuiltNode.innerText) : null
                        },
                        rebuildAnchorTag: function(e) {
                            return e.hasAttribute("href") ? this.scrubAnchorAttributes(e) : null
                        },
                        scrubAnchorAttributes: function(e) {
                            var t = e.getAttribute("href");
                            return this.hasValidURL(t) ? (e.setAttribute("rel", "nofollow"), e = this.checkForBlankTarget(e)) : e = null, e
                        },
                        checkForBlankTarget: function(e) {
                            return e.hasAttribute("target") && "_blank" === e.target ? e.rel += " noopener" : e.removeAttribute("target"), e
                        },
                        hasValidURL: function(e) {
                            return new RegExp(/^((((https?):\/\/)|(mailto:|tel:))(%[0-9A-Fa-f]{2}|[-()_.!~*';\/?:@&=#+$,A-Za-z0-9])+)([).!';\/?:,][[:blank:]])?$/gm).test(e)
                        }
                    }),
                    ge = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                rebuiltNode: null
                            }
                        },
                        componentWillMount: function() {
                            this.setState({
                                rebuiltNode: this.rebuildImageTag(this.props.node)
                            })
                        },
                        render: function() {
                            return this.state.rebuiltNode ? i.createElement("img", {
                                src: this.state.rebuiltNode.src,
                                className: this.state.rebuiltNode.classList.value || null,
                                alt: this.state.rebuiltNode.alt || null
                            }) : null
                        },
                        rebuildImageTag: function(e) {
                            return this.isValidEmojiImage(e) ? this.scrubImageAttributes(e) : null
                        },
                        isValidEmojiImage: function(e) {
                            return e.hasAttribute("src") && e.classList.contains("emojione")
                        },
                        scrubImageAttributes: function(e) {
                            var t = e.getAttribute("src");
                            return this.hasEmojioneURL(t) ? e.setAttribute("alt", e.alt) : e = null, e
                        },
                        hasEmojioneURL: function(e) {
                            return 0 === e.lastIndexOf("//cdn.jsdelivr.net/emojione/assets/png", 0)
                        }
                    }),
                    fe = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                renderSubmit: !1,
                                submitEnabled: !1,
                                emojiDrawerOpen: !1
                            }
                        },
                        mq: void 0,
                        mqHandler: function(e) {
                            var t = !1;
                            e.matches && (t = !0), this.setState({
                                renderSubmit: t
                            })
                        },
                        componentDidMount: function() {
                            "matchMedia" in window && (this.mq = window.matchMedia("(max-width:480px)"), this.mq.matches && this.mqHandler(this.mq), this.mq.addListener(this.mqHandler))
                        },
                        componentWillUnmount: function() {
                            this.mq && "matchMedia" in window && this.mq.removeListener(this.mqHandler)
                        },
                        resizeTextArea: function() {
                            for (var e = this.refs.ta; e.rows > this.props.minRows && e.scrollHeight <= e.offsetHeight;) e.rows--;
                            if (!(e.rows >= this.props.maxRows)) {
                                for (var t = 0; e.scrollHeight > e.offsetHeight && t !== e.offsetHeight;) t = e.offsetHeight, e.rows++;
                                this.props.onResize()
                            }
                        },
                        onChange: function(e) {
                            e.target.value.length > 0 ? this.setState({
                                submitEnabled: !0
                            }) : this.setState({
                                submitEnabled: !1
                            })
                        },
                        onClick: function(e) {
                            this.setState({
                                submitEnabled: !1
                            }), this.props.sendMessage(e)
                        },
                        handleToggleEmojiDrawer: function() {
                            this.setState({
                                emojiDrawerOpen: !this.state.emojiDrawerOpen
                            })
                        },
                        render: function() {
                            return this.props.meta.connecting ? this.renderConnectingMessage() : i.createElement("div", {
                                className: this.getContainerClass()
                            }, this.renderActions(), this.renderTextarea(), this.renderEmojiDrawer(), i.createElement(K, {
                                show: this.props.meta.displayPrivacyPolicy,
                                linkHref: this.props.meta.privacyPolicyLinkUrl,
                                linkText: this.props.meta.privacyPolicyLinkText
                            }))
                        },
                        renderConnectingMessage: function() {
                            return i.createElement("div", {
                                className: "chatlio-new-message-container"
                            }, i.createElement("textarea", {
                                rows: "1",
                                className: "chatlio-new-message chatlio-connecting",
                                disabled: "true",
                                placeholder: "Connecting to Chatlio. Please wait..."
                            }))
                        },
                        renderEmojiPicker: function() {
                            return i.createElement("div", null)
                        },
                        renderFilePicker: function() {
                            return this.props.meta.enableFileUploads ? i.createElement(he, {
                                onChange: this.props.onUploadFiles
                            }) : i.createElement("div", null)
                        },
                        renderActions: function() {
                            return i.createElement("div", {
                                className: "chatlio-new-message__actions"
                            }, this.renderEmojiPicker(), this.renderFilePicker(), this.renderSubmit())
                        },
                        renderSubmit: function() {
                            if (this.state.renderSubmit || this.props.meta.showSendBtnOnDesktop) {
                                var e = "chatlio-btn-send";
                                return this.state.submitEnabled || (e += " chatlio-btn-send-disabled"), i.createElement("div", {
                                    className: "chatlio-btn-container"
                                }, i.createElement("a", {
                                    style: {
                                        backgroundColor: o.primaryColor
                                    },
                                    onClick: this.onClick,
                                    className: e
                                }, this.props.meta.defaultSendBtnLabel))
                            }
                            return i.createElement("div", null)
                        },
                        renderEmojiDrawer: function() {
                            return i.createElement(de, {
                                open: this.state.emojiDrawerOpen
                            })
                        },
                        renderTextarea: function() {
                            return i.createElement("textarea", {
                                id: "chatlio-message-textarea",
                                ref: "ta",
                                style: {
                                    paddingRight: "120px"
                                },
                                rows: this.props.minRows,
                                onKeyDown: this.props.sendMessage,
                                onKeyUp: this.resizeTextArea,
                                onChange: this.onChange,
                                className: this.getTextareaClass(),
                                placeholder: this.props.meta.onlineMessagePlaceholder,
                                "aria-label": this.props.meta.onlineMessagePlaceholder,
                                tabIndex: "100"
                            })
                        },
                        renderPrivacyLink: function() {
                            return this.props.meta.displayPrivacyPolicy ? i.createElement("div", {
                                className: "chatlio-privacy-policy-link"
                            }, i.createElement("a", {
                                href: this.props.meta.privacyPolicyLinkUrl,
                                rel: "nofollow"
                            }, this.props.meta.privacyPolicyLinkText)) : null
                        },
                        getContainerClass: function() {
                            var e = "chatlio-new-message-container";
                            return this.state.renderSubmit && (e = "chatlio-new-message-container-small"), !0 === this.props.meta.whiteLabel && (e += " chatlio-white-label"), e
                        },
                        getTextareaClass: function() {
                            var e = "chatlio-new-message";
                            return this.state.renderSubmit && (e = "chatlio-new-message-small"), e
                        }
                    }),
                    ve = ChatlioReact.createClass({
                        render: function() {
                            var e = this.messageNodeArray(this.getMsgChildNodes(this.props.msgText)),
                                t = this;
                            return i.createElement("span", {
                                className: this.props.className ? this.props.className + " chatlio-custom-text" : "chatlio-custom-text"
                            }, e.map(function(e) {
                                return t.renderValidNode(e)
                            }))
                        },
                        getMsgChildNodes: function(e) {
                            return (new DOMParser).parseFromString(e, "text/html").body.childNodes
                        },
                        messageNodeArray: function(e) {
                            var t = this,
                                s = [];
                            return Array.prototype.forEach.call(e, function(e) {
                                t.isAnExceptedNodeType(e) && s.push(e)
                            }), s
                        },
                        renderValidNode: function(e) {
                            switch (e.nodeName) {
                                case "A":
                                    return i.createElement(pe, {
                                        node: e
                                    });
                                case "IMG":
                                    return i.createElement(ge, {
                                        node: e
                                    });
                                case "STRONG":
                                    return i.createElement("strong", null, e.innerText);
                                case "EM":
                                    return i.createElement("em", null, e.innerText);
                                case "B":
                                    return i.createElement("b", null, e.innerText);
                                case "BR":
                                    return i.createElement("br", null);
                                case "CODE":
                                    return i.createElement("code", null, e.innerText);
                                case "PRE":
                                    return i.createElement("pre", null, e.innerText);
                                default:
                                    return i.createElement("span", null, e.nodeValue)
                            }
                        },
                        isAnExceptedNodeType: function(e) {
                            return ["#text", "A", "IMG", "STRONG", "EM", "B", "BR", "CODE", "PRE"].indexOf(e.nodeName) > -1
                        }
                    }),
                    we = ChatlioReact.createClass({
                        getAvatarUrlMarkup: function() {
                            return this.props.teamAvatarOn && this.props.teamAvatarUrl ? i.createElement("img", {
                                src: this.props.teamAvatarUrl,
                                alt: "avatar"
                            }) : this.props.msg && this.props.msg.avatarUrl && this.props.msg.avatarUrl.length > 5 && this.props.showSlackAvatar ? i.createElement("img", {
                                src: this.props.msg.avatarUrl,
                                alt: "avatar"
                            }) : "You" !== this.props.msg.author ? i.createElement("img", {
                                src: "https://w.chatlio.com/v5/images/agent.a07867cf.png",
                                alt: "avatar"
                            }) : null
                        },
                        renderAvatar: function() {
                            return this.props.needAvatar ? i.createElement("div", {
                                className: "chatlio-message-header"
                            }, i.createElement("div", {
                                className: "chatlio-message-avatar"
                            }, i.createElement("img", {
                                src: j(this.props),
                                alt: "avatar"
                            }))) : null
                        },
                        render: function() {
                            return this.props.userTyping ? i.createElement("div", {
                                className: "chatlio-message chatlio-clear"
                            }, this.renderAvatar(), i.createElement("div", {
                                className: "chatlio-message-content"
                            }, i.createElement("div", {
                                className: "chatlio-message-body"
                            }, i.createElement("div", {
                                className: "typing-indicator"
                            }, i.createElement("span", null), i.createElement("span", null), i.createElement("span", null))))) : null
                        }
                    }),
                    be = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-message-header"
                            }, i.createElement("div", {
                                className: "chatlio-message-author-tiny"
                            }, this.props.msg.author), i.createElement("div", {
                                className: "chatlio-message-avatar"
                            }, i.createElement("img", {
                                src: j(this.props),
                                alt: "agent avatar"
                            })))
                        }
                    }),
                    ye = H(ChatlioReact.createClass({
                        render: function() {
                            var e = "chatlio-message chatlio-message-";
                            return e += this.props.isFromVisitor ? "from-me" : "from-them", i.createElement("div", {
                                className: e
                            }, this.props.needAvatar ? i.createElement(be, {
                                msg: this.props.msg,
                                meta: this.props.meta,
                                showSlackAvatar: this.props.showSlackAvatar
                            }) : null, i.createElement("div", {
                                className: "chatlio-message-content"
                            }, i.createElement("div", {
                                style: this.props.bodyStyle,
                                className: "chatlio-message-body"
                            }, i.createElement("a", {
                                href: this.props.attachedFile.url,
                                className: "chatlio-file-attachment-link",
                                target: "_blank"
                            }, this.renderPreview(), i.createElement("div", {
                                className: "chatlio-file-attachment-title"
                            }, this.props.attachedFile.title)))))
                        },
                        renderPreview: function() {
                            return this.hasImagePreview() ? i.createElement("div", {
                                className: "chatlio-file-attachment",
                                style: this.getImageStyle()
                            }) : i.createElement("div", {
                                className: "chatlio-file-attachment chatlio-file-attachment--no-preview"
                            }, this.renderNoPreviewIcon())
                        },
                        renderNoPreviewIcon: function() {
                            return i.createElement("div", {
                                className: "chatlio-file-attachment__no-preview"
                            }, i.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "48",
                                height: "48",
                                viewBox: "0 0 48 48"
                            }, i.createElement("path", {
                                fill: o.primaryColor,
                                fillRule: "evenodd",
                                d: "M35.996 40S12 39.996 12 40c0 0 0-32-.01-32H22v12a2 2 0 0 0 2 2h12c0 6.343 0 18-.004 18zM26 8v10h10L26 8zM11.99 4h14.616c.551 0 1.318.319 1.7.702l10.992 10.996c.388.388.702 1.158.702 1.7v22.603A3.999 3.999 0 0 1 35.996 44H12.004A4.006 4.006 0 0 1 8 40V8c0-2.21 1.792-4 3.99-4z"
                            })))
                        },
                        hasImagePreview: function() {
                            return !!this.props.attachedFile.thumb360
                        },
                        getImageStyle: function() {
                            return {
                                backgroundImage: "url(" + this.props.attachedFile.thumb360 + ")"
                            }
                        }
                    })),
                    Te = ChatlioReact.createClass({
                        render: function() {
                            return this.props.show ? i.createElement("div", {
                                className: "chatlio-checkbox-container"
                            }, i.createElement("input", {
                                type: "checkbox",
                                id: this.props.id,
                                name: this.props.control,
                                value: this.props.control,
                                onChange: this.props.onChange
                            }), i.createElement("label", {
                                htmlFor: this.props.id
                            }, i.createElement(ve, {
                                msgText: this.props.labelText
                            }))) : null
                        }
                    }),
                    Ne = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("button", {
                                style: {
                                    backgroundColor: this.getBackgroundColor(),
                                    color: this.getForegroundColor()
                                },
                                className: this.getClassNames(),
                                onClick: this.props.onClick,
                                disabled: this.props.disabled
                            }, this.props.label, i.createElement("div", {
                                className: "chatlio-btn__spinner"
                            }, i.createElement("div", {
                                style: {
                                    backgroundColor: this.getBackgroundColor()
                                },
                                className: "chatlio-btn__spinner-center"
                            })))
                        },
                        getBackgroundColor: function() {
                            return "accept" === this.props.kind ? o.acceptColor : "decline" === this.props.kind ? o.declineColor : o.primaryColor
                        },
                        getForegroundColor: function() {
                            return "accept" === this.props.kind ? o.foregroundColor : "decline" === this.props.kind ? "#677583" : o.foregroundColor
                        },
                        getClassNames: function() {
                            return this.props.loading ? ["chatlio-btn", "chatlio-btn--loading"].join(" ") : ["chatlio-btn"].join(" ")
                        }
                    }),
                    Ae = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-dialog-overlay"
                            }, i.createElement("div", {
                                className: "chatlio-dialog-card"
                            }, i.createElement(ve, {
                                msgText: this.props.dialogText
                            }), i.createElement("div", {
                                className: "chatlio-dialog-card-buttons"
                            }, i.createElement("div", {
                                className: "chatlio-cancel-link"
                            }, i.createElement("a", {
                                onClick: this.props.cancelBtnFunction
                            }, this.props.cancelBtnLabel)), i.createElement(Ne, {
                                kind: "accept",
                                onClick: this.props.submitBtnFunction,
                                label: this.props.submitBtnLabel
                            }))))
                        }
                    }),
                    Ue = ChatlioReact.createClass({
                        render: function() {
                            return this.props.screenshot ? i.createElement("div", {
                                className: "chatlio-inline-dialog chatlio-screenshot-request"
                            }, i.createElement("div", {
                                className: "chatlio-screenshot-request-icon"
                            }, i.createElement("img", {
                                src: "https://w.chatlio.com/v5/images/request-screenshot.baa316b2.svg",
                                alt: "Request Screenshot"
                            })), i.createElement("p", null, this.props.text), i.createElement("div", {
                                className: "chatlio-screenshot-request-buttons"
                            }, i.createElement(Ne, {
                                kind: "decline",
                                label: this.props.declineLabel,
                                onClick: this.props.screenshot.dismiss
                            }), i.createElement(Ne, {
                                kind: "accept",
                                label: this.props.allowLabel,
                                onClick: this.props.screenshot.send
                            }))) : null
                        }
                    }),
                    xe = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                email: "",
                                name: "",
                                emailError: !1,
                                acceptedTerms: this.props.visitorManuallyAccepted
                            }
                        },
                        sendRequiredInfo: function() {
                            n.setItem(k, !0), ie("preChatInfoSubmitted", {
                                email: this.state.email,
                                name: this.state.name
                            }), window._chatlio.identify(X.userId, {
                                email: this.state.email,
                                name: this.state.name
                            }), this.props.enteredRequiredInfo(), this.state.acceptedTerms && this.props.sendClientAcceptTerms(this.props.meta.acceptanceText)
                        },
                        handleChange: function(e) {
                            var t = this.state || {};
                            t[e.target.name] = e.target.value, this.isValidInput(t) ? t.emailError = !1 : t.emailError = !0, this.setState(t)
                        },
                        handleKeyDown: function(e) {
                            this.isValidInput(this.state) && 13 === e.keyCode && this.sendRequiredInfo()
                        },
                        isValidInput: function(e) {
                            return !e.hasOwnProperty("email") || d(e.email)
                        },
                        isButtonDisabled: function() {
                            return "" === this.state.email || this.state.emailError || !this.privacyFieldsValid()
                        },
                        privacyFieldsValid: function() {
                            return !this.props.meta.requireAcceptance || (!(this.props.meta.acceptanceText.length > 0) || this.state.acceptedTerms)
                        },
                        getAvatarUrl: function() {
                            return j(this.props)
                        },
                        toggleAcceptedTerms: function() {
                            this.setState({
                                acceptedTerms: !this.state.acceptedTerms
                            })
                        },
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-widget-body " + this.props.widgetViewState + this.props.alignmentClassName
                            }, i.createElement(ne, i.__spread({}, this.props)), i.createElement("div", null, i.createElement("div", {
                                className: "chatlio-offline-message-container"
                            }, i.createElement("div", {
                                className: "chatlio-offline-message-avatar"
                            }, i.createElement("div", {
                                className: "chatlio-avatar"
                            }, i.createElement("img", {
                                src: this.getAvatarUrl(),
                                alt: this.props.meta.requireInfoGreeting
                            }), i.createElement("div", {
                                className: "chatlio-avatar__online-dot"
                            }))), i.createElement("p", {
                                className: "chatlio-missed-you-message"
                            }, this.props.meta.requireInfoGreeting), i.createElement("input", {
                                type: "text",
                                name: "email",
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChange,
                                className: this.state.emailError ? "chatlio-error" : "",
                                placeholder: this.props.meta.offlineEmailPlaceholder,
                                "aria-label": this.props.meta.offlineEmailPlaceholder
                            }), i.createElement("input", {
                                type: "text",
                                name: "name",
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChange,
                                placeholder: this.props.meta.offlineNamePlaceholder,
                                "aria-label": this.props.meta.offlineNamePlaceholder
                            }), i.createElement(Te, {
                                id: "accept-terms",
                                control: this.state.acceptedTerms,
                                show: this.props.meta.requireAcceptance && this.props.meta.acceptanceText.length > 0 && !this.props.visitorManuallyAccepted,
                                labelText: this.props.meta.acceptanceText,
                                onChange: this.toggleAcceptedTerms
                            }), i.createElement(Ne, {
                                label: this.props.meta.requireInfoSubmitBtn,
                                onClick: this.sendRequiredInfo.bind(this),
                                disabled: this.isButtonDisabled()
                            }))))
                        }
                    }),
                    Re = ChatlioReact.createClass({
                        handleChange: function(e) {
                            var t = this.state || {};
                            t[e.target.name] = e.target.value, this.setState(t)
                        },
                        handleKeyDown: function(e) {
                            13 !== e.keyCode || this.sendRequestInfo()
                        },
                        sendRequestInfo: function() {
                            var e = !1;
                            for (var t in this.state)
                                if (this.state.hasOwnProperty(t)) {
                                    e = !0;
                                    break
                                }
                            e && (window._chatlio.identify(X.userId, this.state), this.props.requestInfo.send(this.state), setTimeout(function() {
                                this.replaceState({})
                            }.bind(this), 0))
                        },
                        titleCaseize: function(e) {
                            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                        },
                        render: function() {
                            if (!this.props.requestInfo) return null;
                            var e = this;
                            return i.createElement("div", {
                                className: "chatlio-inline-dialog chatlio-request-info"
                            }, this.props.requestInfo.fields.map(function(t) {
                                var s = t.toLowerCase().trim().replace(/&/g, "-and-").replace(/[\s\W-]+/g, "-").replace(/-$/, ""),
                                    a = t.replace(/\w\S*/g, e.titleCaseize);
                                return i.createElement("input", {
                                    name: s,
                                    placeholder: a,
                                    onChange: e.handleChange,
                                    onKeyDown: e.handleKeyDown,
                                    type: "text",
                                    "aria-label": a
                                })
                            }), i.createElement("div", {
                                className: "chatlio-request-info__buttons"
                            }, i.createElement(Ne, {
                                kind: "decline",
                                onClick: this.props.requestInfo.dismiss,
                                label: this.props.denyLabel
                            }), i.createElement(Ne, {
                                kind: "accept",
                                onClick: this.sendRequestInfo,
                                label: this.props.sendLabel
                            })))
                        }
                    }),
                    Pe = H(ChatlioReact.createClass({
                        render: function() {
                            var e = this.props.msg.body || "";
                            window.emojione && (window.emojione.ascii = !0, e = window.emojione.shortnameToImage(e));
                            var t = 1e3 * this.props.msg.ts > Date.now() - 500,
                                s = "chatlio-message chatlio-message-";
                            s += this.props.isFromVisitor ? "from-me" : "from-them";
                            var a = "chatlio-message-content";
                            return e.indexOf("<pre>") > -1 ? (e = e.replace(/<br\/>/gm, ""), a += " chatlio-message-content-code") : e = e.replace(/\n/gm, "\n<br/>"), i.createElement(B, {
                                transitionName: "chatlio-chat-message",
                                transitionAppear: t,
                                transitionEnterTimeout: 5e3,
                                transitionLeaveTimeout: 5e3,
                                transitionAppearTimeout: 5e3
                            }, i.createElement("div", {
                                className: s
                            }, this.props.needAvatar ? i.createElement(be, {
                                msg: this.props.msg,
                                meta: this.props.meta,
                                showSlackAvatar: this.props.showSlackAvatar
                            }) : null, i.createElement("div", {
                                className: a
                            }, this.renderMessageBody(e))))
                        },
                        renderTimestamp: function() {
                            return this.props.threadEnd ? i.createElement("div", {
                                className: "chatlio-message-timestamp"
                            }, function(e) {
                                if (isNaN(e)) return "";
                                var t, s = Math.floor((new Date - e) / 1e3),
                                    a = "";
                                return s < 60 ? le["just now"] : (a = (t = Math.floor(s / 31536e3)) > 1 ? le["y ago"] : (t = Math.floor(s / 2592e3)) > 1 ? le["mo ago"] : (t = Math.floor(s / 86400)) > 1 ? le["d ago"] : (t = Math.floor(s / 3600)) > 1 ? le["h ago"] : (t = Math.floor(s / 60)) >= 1 ? le["m ago"] : "", t + a)
                            }(1e3 * this.props.msg.ts)) : ""
                        },
                        renderMessageBodyText: function(e) {
                            return this.props.msg.bodyComponent ? this.props.msg.bodyComponent : i.createElement(ve, {
                                className: "chatlio-message-body-text",
                                msgText: e
                            })
                        },
                        renderMessageBody: function(e) {
                            return i.createElement("span", {
                                style: this.props.bodyStyle,
                                className: "chatlio-message-body"
                            }, this.renderMessageBodyText(e), this.renderTimestamp())
                        }
                    })),
                    Oe = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-widget-overlay"
                            }, this.props.children, i.createElement(K, {
                                show: this.props.children.props.meta.displayPrivacyPolicy,
                                linkHref: this.props.children.props.meta.privacyPolicyLinkUrl,
                                linkText: this.props.children.props.meta.privacyPolicyLinkText
                            }))
                        }
                    }),
                    Fe = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                conversationRated: !1
                            }
                        },
                        rateChat: function(e) {
                            var t = this;
                            Ce("https://api.chatlio.com/v1/v/visitor/rate_chat/" + e, {
                                verb: "POST",
                                success: function() {
                                    t.setState({
                                        conversationRated: !0
                                    })
                                },
                                onerror: function() {
                                    console.warn("There was a problem sending your rating to Chatlio. Please contact Chatlio support at support@chatlio.com. Status code: ", this.status)
                                }
                            })
                        },
                        chatFeedback: function() {
                            var e = this;
                            e.setState({
                                feedbackSendingStatus: "loading"
                            }), Ce("https://api.chatlio.com/v1/v/visitor/chat_feedback", {
                                verb: "POST",
                                data: {
                                    feedback: document.getElementById("chatlio-feedback-textarea").value
                                },
                                success: function() {
                                    e.setState({
                                        feedbackSendingStatus: "complete"
                                    })
                                },
                                onerror: function() {
                                    e.setState({
                                        feedbackSendingStatus: ""
                                    }), console.warn("There was a problem sending your feedback. Please contact Chatlio support at support@chatlio.com. Status code: ", this.status)
                                }
                            })
                        },
                        render: function() {
                            var e = "chatlio-feedback-container";
                            return "complete" === this.state.feedbackSendingStatus && (e += " chatlio-feedback-container-closed"), this.props.meta.showConversationRating ? i.createElement("div", null, this.state.conversationRated ? i.createElement("div", {
                                className: "chatlio-conversation-rating"
                            }, this.props.conversationRatingThankYou, i.createElement("div", null, i.createElement("div", {
                                className: e
                            }, i.createElement("textarea", {
                                id: "chatlio-feedback-textarea",
                                placeholder: this.props.meta.conversationRatingPlaceholder,
                                className: "chatlio-conversation-rating-textarea",
                                "aria-label": this.props.meta.conversationRatingPlaceholder
                            }), i.createElement(Ne, {
                                label: this.props.meta.defaultSendBtnLabel,
                                disabled: "complete" === this.state.feedbackSendingStatus,
                                onClick: this.chatFeedback.bind(this)
                            })))) : i.createElement("div", {
                                className: "chatlio-conversation-rating"
                            }, this.props.meta.conversationRatingLabel, i.createElement("div", {
                                className: "chatlio-conversation-rating-icons"
                            }, i.createElement("div", {
                                className: "chatlio-thumbs-up-icon",
                                onClick: this.rateChat.bind(this, "up")
                            }), i.createElement("div", {
                                className: "chatlio-thumbs-down-icon",
                                onClick: this.rateChat.bind(this, "down")
                            })))) : i.createElement("div", null)
                        }
                    }),
                    Ve = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-confirm-conversation-end"
                            }, i.createElement("div", null, this.props.meta.conversationEndConfirmationQuestion), i.createElement("div", {
                                className: "chatlio-confirm-conversation-end-actions"
                            }, i.createElement("a", {
                                onClick: this.props.onConversationEnd.bind(this, !0)
                            }, i.createElement("span", null, this.props.meta.defaultYesBtnLabel)), i.createElement("a", {
                                onClick: this.props.cancelConfirmConversationEnd
                            }, i.createElement("span", null, this.props.meta.defaultCancelBtnLabel))))
                        }
                    }),
                    je = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                status: null,
                                invalid: !1
                            }
                        },
                        render: function() {
                            return !1 === this.props.showTranscriptSendOpt ? null : this.isComplete() ? this.renderSuccess() : this.renderForm()
                        },
                        renderForm: function() {
                            var e = "";
                            return this.state.invalid && (e = "chatlio-error"), i.createElement("div", {
                                className: this.getClassNames()
                            }, i.createElement("div", null, i.createElement("label", {
                                className: "chatlio-transcript-email-input-label"
                            }, i.createElement("input", {
                                id: "chatlio-transcript-email",
                                onChange: this.handleEmailChange.bind(this),
                                placeholder: this.props.emailInputPlaceholder,
                                type: "text",
                                className: "chatlio-transcript-email-input " + e,
                                "aria-label": this.props.emailInputPlaceholder
                            })), i.createElement(Ne, {
                                label: this.props.submitButtonLabel,
                                loading: this.isLoading(),
                                disabled: this.isComplete(),
                                onClick: this.handleRequestTranscript.bind(this)
                            })))
                        },
                        renderSuccess: function() {
                            return i.createElement("div", {
                                className: this.getClassNames()
                            }, this.props.conversationTranscriptSentThankYou)
                        },
                        isLoading: function() {
                            return "loading" === this.state.status
                        },
                        isComplete: function() {
                            return "complete" === this.state.status
                        },
                        getClassNames: function() {
                            var e = "chatlio-transcript-email-form";
                            return "complete" === this.state.status && (e += " chatlio-transcript-email-form--success"), e
                        },
                        handleEmailChange: function(e) {
                            d(e.target.value) && this.setState({
                                invalid: !1
                            })
                        },
                        handleRequestTranscript: function() {
                            var e = this,
                                t = document.getElementById("chatlio-transcript-email").value;
                            d(t) ? (e.setState({
                                status: "loading"
                            }), Ce("https://api.chatlio.com/v1/v/visitor/transcript", {
                                verb: "POST",
                                data: {
                                    email: t
                                },
                                success: function() {
                                    e.setState({
                                        status: "complete"
                                    })
                                },
                                onerror: function() {
                                    e.setState({
                                        status: ""
                                    }), console.warn("There was a problem requesting your transcript. Please contact Chatlio support at support@chatlio.com. Status code: ", this.status)
                                }
                            })) : this.setState({
                                invalid: !0
                            })
                        }
                    }),
                    Ge = ChatlioReact.createClass({
                        render: function() {
                            var e = "chatlio-powered-by";
                            return this.props.isOffline && (e += " chatlio-powered-by-offline"), i.createElement("div", {
                                className: "chatlio-clear"
                            }, i.createElement("div", {
                                className: e
                            }, "Powered by", " ", i.createElement("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://chatlio.com"
                            }, "Chatlio")))
                        }
                    }),
                    Je = ChatlioReact.createClass({
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-conversation-end"
                            }, i.createElement("p", null, this.props.meta.conversationEndLabel), i.createElement(Fe, i.__spread({}, this.props)), i.createElement(je, {
                                showTranscriptSendOpt: this.props.meta.showTranscriptSendOpt,
                                submitButtonLabel: this.props.meta.defaultSendBtnLabel,
                                emailInputPlaceholder: this.props.meta.conversationEndTranscriptPlaceholder,
                                conversationTranscriptSentThankYou: this.props.meta.conversationTranscriptSentThankYou
                            }))
                        }
                    }),
                    Ye = function(e, t, s) {
                        return {
                            body: e,
                            author: t,
                            type: s,
                            ts: Date.now() / 1e3
                        }
                    },
                    Ke = ChatlioReact.createClass({
                        getInitialState: function() {
                            var e = JSON.parse(this.props.data.treeJson),
                                t = [];
                            return this.props.data.prompt.length > 0 && t.push(Ye(this.props.data.prompt, "Them", "prompt")), t.push(Ye(e[0].text, "Them", "question")), {
                                messages: t,
                                tree: e,
                                rootIdx: 0,
                                node: e[0]
                            }
                        },
                        componentDidUpdate: function() {
                            this.props.onUpdate()
                        },
                        componentWillReceiveProps: function(e) {
                            !e.ephMsg || 0 !== this.state.messages.length && this.state.messages[0].tUid || (this.props.data.prompt.length > 0 ? this.state.messages[0] = e.ephMsg : this.state.messages.unshift(e.ephMsg))
                        },
                        render: function() {
                            var e, t, s = this,
                                a = !1;
                            return s.state.messages.forEach(function(e) {
                                "question" === e.type && (t = e.ts)
                            }), n.setItem(T, !0), i.createElement("div", null, this.state.messages.map(function(n, o) {
                                e = "You" !== n.author, a = !1;
                                var r = "";
                                if (n.ts === t && (r = "chatlio-qg-last-question"), "prompt" === n.type && (r = "chatlio-qg-prompt"), "answer" === n.type && (r = "chatlio-qg-answer"), o > 0) {
                                    var l = s.state.messages[o - 1];
                                    "You" !== n.author && l.author !== n.author || (e = !1), s.state.messages[o + 1] && s.state.messages[o + 1].author !== s.state.messages[o].author && (a = !0)
                                }
                                return i.createElement("div", {
                                    className: r
                                }, i.createElement(Pe, {
                                    msg: n,
                                    meta: s.props.meta,
                                    needAvatar: e,
                                    threadEnd: a,
                                    teamAvatarOn: s.props.meta.teamAvatarOn,
                                    teamAvatarUrl: s.props.meta.teamAvatarUrl,
                                    showSlackAvatar: s.props.meta.forwardSlackUserName,
                                    browserSideAuthorLabel: s.props.meta.browserSideAuthorLabel,
                                    key: o
                                }))
                            }).concat(this.state.node.children.map(function(e) {
                                return i.createElement("div", {
                                    className: "chatlio-message chatlio-message-from-them chatlio-qg-item"
                                }, i.createElement("div", {
                                    className: "chatlio-message-content"
                                }, i.createElement("span", {
                                    className: "chatlio-message-body"
                                }, i.createElement("span", {
                                    className: "chatlio-message-body-text"
                                }, i.createElement("a", {
                                    className: "chatlio-qg-answer-link",
                                    onClick: function(t) {
                                        ! function(e, t) {
                                            var a, i;
                                            e.preventDefault(), s.state.messages.push(Ye(t.text, "You", "answer"));
                                            var n = !1;
                                            const o = {
                                                text: t.text,
                                                customResponseText: t.customResponseText,
                                                action: t.action
                                            };
                                            switch (setTimeout(ie, 0, "questionGroupAnswerSelected", o), t.action) {
                                                case "next":
                                                    a = s.state.rootIdx + 1, i = s.state.tree[a];
                                                    break;
                                                case "new":
                                                    a = s.state.rootIdx, i = t.children[0];
                                                    break;
                                                case "form":
                                                    n = !0, s.props.onShowOfflineForm();
                                                    break;
                                                default:
                                                    if (n = !0, "customResponse" === t.action && s.state.messages.push(Ye(D(t.customResponseText), "Them", "prompt")), s.props.onNewMessages(s.state.messages, t.action), c !== t.action) return
                                            }
                                            n || (s.state.messages.push(Ye(i.text, "Them", "question")), s.setState({
                                                rootIdx: a,
                                                node: i
                                            }))
                                        }(t, e)
                                    },
                                    href: "#"
                                }, i.createElement(ve, {
                                    msgText: e.text
                                }))))))
                            })))
                        }
                    }),
                    $e = ChatlioReact.createClass({
                        mediaquery: void 0,
                        setPoweredByRef: function(e) {
                            this.poweredBy = e
                        },
                        getPoweredByNode: function() {
                            return ChatlioReactDOM.findDOMNode(this.poweredBy)
                        },
                        getNode: function() {
                            return ChatlioReactDOM.findDOMNode(this)
                        },
                        getScrollBottom: function() {
                            var e = this.getPoweredByNode(),
                                t = this.getNode();
                            return t.scrollHeight - t.offsetHeight - e.offsetHeight
                        },
                        scrollToBottom: function() {
                            this.getNode().scrollTop = this.getScrollBottom()
                        },
                        isScrolledToBottom: function() {
                            return this.getNode().scrollTop >= this.getScrollBottom()
                        },
                        componentDidMount: function() {
                            "matchMedia" in window && (this.mediaquery = window.matchMedia("(max-width:480px)"), this.mediaquery.addListener(this.scrollToBottom)), this.setState({
                                userScrolledUp: !1
                            })
                        },
                        componentDidUpdate: function() {
                            this.state.userScrolledUp || this.scrollToBottom()
                        },
                        handleScroll: function() {
                            this.state.userScrolledUp = !this.isScrolledToBottom()
                        },
                        componentWillUnmount: function() {
                            this.mediaquery && "matchMedia" in window && this.mediaquery.removeListener(this.scrollToBottom)
                        },
                        headerMsg: function() {
                            return {
                                body: this.props.ephMsg ? this.props.ephMsg.body : this.props.meta.autoResponseMessage,
                                author: this.props.meta.agentLabel
                            }
                        },
                        needHeader: function() {
                            return this.hasAnyMessages() || n.setItem(T, !1), !(this.props.startChat || this.props.questionGroupUid || JSON.parse(n.getItem(T)))
                        },
                        hasAnyMessages: function() {
                            return this.props.messages.length > 0
                        },
                        isMessageFromVisitor: function(e) {
                            return "You" === e.author
                        },
                        isMostRecentMessageFromVisitor: function() {
                            return this.hasAnyMessages() && this.isMessageFromVisitor(this.props.messages[this.props.messages.length - 1])
                        },
                        onQuestionGroupUpdate: function() {
                            this.scrollToBottom()
                        },
                        onNewQuestionGroupMessages: function(e, t) {
                            var s = this.props.questionGroupUid,
                                i = this.props.meta.questionGroups[s],
                                n = this.hasAnyMessages() && "customResponse" === t;
                            if (c === t || n) {
                                var o = J(e, i),
                                    r = Q(s, this.hasAnyMessages());
                                this.displayMessagesInWidget(e), this.props.sendQuestionAnswers(o, r), this.props.onQuestionGroupDone()
                            } else E = {
                                qgUid: s,
                                prompt: i.prompt,
                                messages: e,
                                autoQg: !this.hasAnyMessages()
                            }, "customResponse" === t ? (this.displayMessagesInWidget(e), this.props.onQuestionGroupDone()) : a.switchToWidget(t, {
                                resubmitIdentifyData: !0
                            })
                        },
                        displayMessagesInWidget: function(e) {
                            e.forEach(function(e) {
                                e.tUid || this.props.messages.push(e)
                            }.bind(this)), n.setItem(S, JSON.stringify(this.props.messages.slice(-200)))
                        },
                        render: function() {
                            var e, t = this,
                                s = !1,
                                a = "chatlio-message-container";
                            return this.props.meta.whiteLabel && (a += " chatlio-white-label"), i.createElement("div", {
                                id: "chatlio-message-container",
                                className: a,
                                onScroll: this.handleScroll
                            }, i.createElement("div", {
                                className: "chatlio-message-scrollable"
                            }, this.needHeader() ? i.createElement("span", null, i.createElement(Pe, {
                                msg: this.headerMsg(),
                                meta: this.props.meta,
                                needAvatar: !0,
                                threadEnd: !1,
                                teamAvatarOn: this.props.meta.teamAvatarOn,
                                teamAvatarUrl: this.props.meta.teamAvatarUrl,
                                showSlackAvatar: this.props.meta.forwardSlackUserName,
                                showAvatarPreChat: this.props.meta.showAvatarPreChat,
                                showTeamAvatarPreChat: this.props.meta.showTeamAvatarPreChat,
                                browserSideAuthorLabel: this.props.meta.browserSideAuthorLabel
                            })) : null, this.props.messages.map(function(a, n) {
                                if (e = "You" !== a.author, s = !1, n > 0) {
                                    var o = t.props.messages[n - 1];
                                    "You" !== a.author && o.author !== a.author || (e = !1), t.props.messages[n + 1] && t.props.messages[n + 1].author !== t.props.messages[n].author && (s = !0)
                                }
                                return a.attachedFile ? i.createElement(ye, {
                                    meta: t.props.meta,
                                    msg: a,
                                    needAvatar: e,
                                    teamAvatarOn: t.props.meta.teamAvatarOn,
                                    teamAvatarUrl: t.props.meta.teamAvatarUrl,
                                    showSlackAvatar: t.props.meta.forwardSlackUserName,
                                    attachedFile: a.attachedFile,
                                    browserSideAuthorLabel: t.props.meta.browserSideAuthorLabel,
                                    key: n
                                }) : i.createElement(Pe, {
                                    msg: a,
                                    meta: t.props.meta,
                                    needAvatar: e,
                                    threadEnd: s,
                                    teamAvatarOn: t.props.meta.teamAvatarOn,
                                    teamAvatarUrl: t.props.meta.teamAvatarUrl,
                                    showSlackAvatar: t.props.meta.forwardSlackUserName,
                                    browserSideAuthorLabel: t.props.meta.browserSideAuthorLabel,
                                    key: n
                                })
                            }), this.props.questionGroupUid ? i.createElement("div", {
                                className: "chatlio-qg-container"
                            }, i.createElement(Ke, i.__spread({
                                data: this.props.meta.questionGroups[this.props.questionGroupUid],
                                onNewMessages: this.onNewQuestionGroupMessages,
                                onUpdate: this.onQuestionGroupUpdate
                            }, this.props))) : "", i.createElement(we, {
                                msg: this.headerMsg(),
                                userTyping: this.props.userTyping,
                                needAvatar: this.isMostRecentMessageFromVisitor(),
                                showSlackAvatar: this.props.meta.forwardSlackUserName,
                                teamAvatarOn: this.props.meta.teamAvatarOn,
                                teamAvatarUrl: this.props.meta.teamAvatarUrl
                            }), i.createElement(Ue, {
                                screenshot: this.props.requestScreenshot,
                                text: this.props.meta.requestScreenshotText,
                                allowLabel: this.props.meta.requestScreenshotAllowLabel,
                                declineLabel: this.props.meta.requestScreenshotDeclineLabel
                            }), i.createElement(Re, {
                                requestInfo: this.props.requestInfo,
                                sendLabel: this.props.meta.defaultSendBtnLabel,
                                denyLabel: this.props.meta.defaultCancelBtnLabel
                            }), i.createElement(re, {
                                fileUploadFilename: this.props.fileUploadFilename,
                                fileUploading: this.props.fileUploading,
                                fileUploadProgress: this.props.fileUploadProgress
                            }), this.props.meta.whiteLabel ? i.createElement("div", {
                                ref: this.setPoweredByRef,
                                className: "chatlio-powered-by-placeholder"
                            }) : i.createElement(Ge, {
                                ref: this.setPoweredByRef,
                                isOffline: this.props.isOffline
                            })))
                        }
                    }),
                    Xe = ChatlioReact.createClass({
                        getInitialState: function() {
                            var e;
                            if (this.props.meta.questionGroups && 0 === this.props.messages.length && (e = this.props.meta.autoQuestionGroupUid), E) {
                                try {
                                    if (E.messages.length > 0) {
                                        e = null;
                                        for (var t = [], s = E.prompt || E.messages[0].tUid ? 1 : 0, a = E.messages, i = s; i < a.length; i += 2) t.push([a[i].body, a[i + 1].body]);
                                        a.forEach(function(e) {
                                            this.props.messages.push(e)
                                        }.bind(this)), n.setItem(S, JSON.stringify(this.props.messages.slice(-200))), this.props.sendQuestionAnswers(t, {
                                            autoQg: E.autoQg,
                                            qgUid: E.qgUid
                                        }), "chatlio-closed" === this.props.widgetViewState && this.props.toggleWidget()
                                    }
                                } catch (e) {
                                    console.warn("Unexpected error. Please contact Chatlio support at support@chatlio.com. Exception:", e)
                                }
                                E = null
                            }
                            return {
                                fileUploading: !1,
                                questionGroupUid: e,
                                acceptedTerms: this.props.visitorManuallyAccepted
                            }
                        },
                        componentWillReceiveProps: function(e) {
                            0 !== this.props.messages.length && this.setState({
                                questionGroupUid: e.questionGroupUid
                            })
                        },
                        dragenter: function(e) {
                            this.props.meta.enableFileUploads && (clearTimeout(s), this.props.showDropZone(), e.stopPropagation(), e.preventDefault())
                        },
                        dragover: function(e) {
                            this.props.meta.enableFileUploads && (clearTimeout(s), e.stopPropagation(), e.preventDefault())
                        },
                        dragleave: function(e) {
                            this.props.meta.enableFileUploads && (clearTimeout(s), s = setTimeout(this.props.hideDropZone, 100), e.stopPropagation(), e.preventDefault())
                        },
                        drop: function(e) {
                            if (this.props.meta.enableFileUploads) {
                                this.props.hideDropZone(), e.stopPropagation(), e.preventDefault();
                                var t = e.dataTransfer.files;
                                this.handleUploadFiles(t)
                            }
                        },
                        handleUploadFiles: function(e) {
                            if (0 !== this.props.messages.length) {
                                var t = this;
                                if (e && e.length >= 1) {
                                    this.setState({
                                        fileUploadFilename: e[0].name,
                                        fileUploading: !0,
                                        fileUploadProgress: 0
                                    });
                                    var s = new XMLHttpRequest;
                                    s.upload.addEventListener("progress", function(e) {
                                        var s = parseInt(e.loaded / e.total * 100);
                                        t.setState({
                                            fileUploadProgress: s
                                        })
                                    }, !1);
                                    var a = new FormData;
                                    a.append("file", e[0]), s.open("POST", "https://api.chatlio.com/v1/v/visitor/files", !0), s.onreadystatechange = function() {
                                        4 === s.readyState && 200 === s.status ? t.setState({
                                            fileUploading: !1,
                                            fileUploadProgress: 0
                                        }) : t.setState({
                                            fileUploading: !1,
                                            fileUploadProgress: -1
                                        })
                                    }, me.getItem(p) && me.getItem(p).length > 0 ? s.setRequestHeader("Authorization", "Bearer " + me.getItem(p)) : me.getItem(m) && me.getItem(m).length > 0 && s.setRequestHeader("Authorization", "Bearer " + me.getItem(m)), s.send(a)
                                }
                            }
                        },
                        handleMessageInputResize: function() {
                            this.refs.chatMessages.scrollToBottom()
                        },
                        acceptAcceptedTerms: function() {
                            var e = document.getElementById("chatlio-message-textarea");
                            e && e.focus(), this.setState({
                                acceptedTerms: !0
                            }), this.props.sendClientAcceptTerms(this.props.meta.acceptanceText)
                        },
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-widget-body " + this.props.widgetViewState + this.props.alignmentClassName,
                                onDragEnter: this.dragenter,
                                onDragOver: this.dragover,
                                onDrop: this.drop,
                                onDragLeave: this.dragleave
                            }, i.createElement(ne, i.__spread({}, this.props)), i.createElement($e, i.__spread({
                                ref: "chatMessages",
                                fileUploading: this.state.fileUploading,
                                fileUploadProgress: this.state.fileUploadProgress,
                                fileUploadFilename: this.state.fileUploadFilename
                            }, this.props, {
                                questionGroupUid: this.state.questionGroupUid
                            })), this.state.questionGroupUid ? "" : i.createElement(fe, i.__spread({
                                onResize: this.handleMessageInputResize,
                                onUploadFiles: this.handleUploadFiles,
                                minRows: 1,
                                maxRows: 5
                            }, this.props)), this.props.showConfirmConversationEnd ? i.createElement(Oe, null, i.createElement(Ve, i.__spread({}, this.props))) : "", this.props.conversationEnded && this.props.meta.showConversationEnd ? i.createElement(Oe, null, i.createElement(Je, i.__spread({}, this.props))) : "", this.props.meta.requireAcceptance && this.props.meta.acceptanceText.length > 0 && !this.state.acceptedTerms ? i.createElement(Ae, {
                                dialogText: this.props.meta.acceptanceText,
                                cancelBtnLabel: this.props.meta.defaultCancelBtnLabel,
                                cancelBtnFunction: this.props.toggleWidget,
                                submitBtnLabel: this.props.meta.defaultAcceptBtnLabel,
                                submitBtnFunction: this.acceptAcceptedTerms
                            }) : null)
                        }
                    }),
                    et = ChatlioReact.createClass({
                        getInitialState: function() {
                            return E && "chatlio-closed" === this.props.widgetViewState && this.props.toggleWidget(), {
                                email: X.traits.email || "",
                                name: X.traits.name || "",
                                message: "",
                                locked: !1,
                                acceptedTerms: this.props.visitorManuallyAccepted
                            }
                        },
                        componentWillReceiveProps: function() {
                            this.state.locked || (X.traits.email && X.traits.email.length > 1 && this.setState({
                                email: X.traits.email,
                                emailError: !1
                            }), X.traits.name && X.traits.name.length > 1 && this.setState({
                                name: X.traits.name,
                                nameError: !1
                            }))
                        },
                        handleChange: function(e) {
                            var t = {};
                            t[e.target.name] = e.target.value, !d(this.state.email) && this.state.email && 0 !== this.state.email.length || (t.emailError = !1), this.state.message.length > 0 && (t.messageError = !1), (t.email && t.email.length > 1 || t.name && t.name.length > 1) && (t.locked = !0), this.setState(t)
                        },
                        sendOfflineMsg: function() {
                            this.setState({
                                emailError: !1,
                                messageError: !1
                            }), this.state.message = document.getElementById("chatlio-offline-message").value, d(this.state.email) || this.setState({
                                emailError: !0
                            }), this.state.message.length < 1 && this.setState({
                                messageError: !0
                            }), !d(this.state.email) || this.state.message.length < 1 || (this.setState({
                                offlineMessageSent: !0
                            }), We([this.state.name, this.state.email, this.state.message].join("\n"), {
                                isOfflineMsg: !0
                            }), this.state.acceptedTerms && this.props.sendClientAcceptTerms(this.props.meta.acceptanceText))
                        },
                        toggleAcceptedTerms: function() {
                            this.setState({
                                acceptedTerms: !this.state.acceptedTerms
                            })
                        },
                        allowSubmit: function() {
                            return this.state.email.length > 0 && this.state.message.length > 0 && this.doTermsCheckOut()
                        },
                        doTermsCheckOut: function() {
                            return !this.props.meta.requireAcceptance || (!(this.props.meta.acceptanceText.length > 0) || this.state.acceptedTerms)
                        },
                        render: function() {
                            return i.createElement("div", {
                                className: "chatlio-widget-body " + this.props.widgetViewState + this.props.alignmentClassName
                            }, i.createElement(ne, i.__spread({}, this.props)), i.createElement("div", {
                                className: "chatlio-offline-form"
                            }, this.state.offlineMessageSent ? i.createElement("div", {
                                className: "chatlio-offline-message-container-sent"
                            }, i.createElement("div", {
                                className: "chatlio-offline-message-container-sent__icon"
                            }, i.createElement("img", {
                                src: "https://w.chatlio.com/v5/images/offline-message-sent.e0d81f76.svg",
                                alt: "message sent icon"
                            })), i.createElement("div", null, this.props.meta.offlineThankYouMessage)) : i.createElement("div", {
                                className: "chatlio-offline-message-container"
                            }, i.createElement("p", {
                                className: "chatlio-missed-you-message"
                            }, i.createElement(ve, {
                                msgText: this.props.meta.offlineGreeting
                            })), i.createElement("input", {
                                name: "email",
                                value: this.state.email,
                                type: "text",
                                onChange: this.handleChange,
                                className: this.state.emailError ? "chatlio-error" : "",
                                placeholder: this.props.meta.offlineEmailPlaceholder,
                                "aria-label": this.props.meta.offlineEmailPlaceholder
                            }), i.createElement("textarea", {
                                id: "chatlio-offline-message",
                                defaultValue: this.props.offlineMessageDefaultValue,
                                name: "message",
                                className: this.state.messageError ? "chatlio-error" : "",
                                rows: "3",
                                onChange: this.handleChange,
                                placeholder: this.props.meta.offlineMessagePlaceholder,
                                "aria-label": this.props.meta.offlineMessagePlaceholder
                            }), i.createElement("input", {
                                name: "name",
                                type: "text",
                                value: this.state.name,
                                onChange: this.handleChange,
                                placeholder: this.props.meta.offlineNamePlaceholder,
                                "aria-label": this.props.meta.offlineNamePlaceholder
                            }), i.createElement(Te, {
                                id: "accept-terms",
                                control: this.state.acceptedTerms,
                                show: this.props.meta.requireAcceptance && this.props.meta.acceptanceText.length > 0 && !this.props.visitorManuallyAccepted,
                                labelText: this.props.meta.acceptanceText,
                                onChange: this.toggleAcceptedTerms
                            }), i.createElement(Ne, {
                                disabled: !this.allowSubmit(),
                                label: this.props.meta.offlineSendButton,
                                onClick: this.sendOfflineMsg.bind(this)
                            }))), i.createElement("div", {
                                className: "offline-footer-container"
                            }, i.createElement(K, {
                                show: this.props.meta.displayPrivacyPolicy,
                                linkHref: this.props.meta.privacyPolicyLinkUrl,
                                linkText: this.props.meta.privacyPolicyLinkText
                            })))
                        }
                    }),
                    tt = ChatlioReact.createClass({
                        render: function() {
                            var e = this.props.text;
                            return e && e.length > 110 && (e = this.props.text.substring(0, 110) + "..."), i.createElement("div", {
                                className: "chatlio-peek-message"
                            }, i.createElement("div", {
                                className: "chatlio-peek-message__close-button",
                                onClick: this.props.closePeekMessage
                            }), i.createElement("div", {
                                className: "chatlio-peek-message-text",
                                onClick: this.props.onPeekMessageClick
                            }, i.createElement(ve, {
                                msgText: e
                            })))
                        }
                    }),
                    st = ChatlioReact.createClass({
                        requireInfoState: function(e) {
                            var t = JSON.parse(n.getItem(k));
                            return {
                                requireInfo: e.requireInfo && !t
                            }
                        },
                        getInitialState: function() {
                            return this.requireInfoState(this.props.meta)
                        },
                        componentWillReceiveProps: function(e) {
                            this.setState(this.requireInfoState(e.meta))
                        },
                        enteredRequiredInfo: function() {
                            setTimeout(function() {
                                this.setState({
                                    requireInfo: !1
                                })
                            }.bind(this), 500)
                        },
                        render: function() {
                            return this.props.isOffline ? i.createElement(et, i.__spread({}, this.props)) : this.state.requireInfo ? i.createElement(xe, i.__spread({}, this.props, {
                                enteredRequiredInfo: this.enteredRequiredInfo
                            })) : i.createElement(Xe, i.__spread({}, this.props))
                        }
                    }),
                    at = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                dropZoneClass: ""
                            }
                        },
                        isOffline: function() {
                            if (this.props.showingOfflineForm) return !0;
                            var e = Number(this.props.meta.maxVisitorInactiveMins);
                            return "busy" === this.props.meta.status ? (e = Math.max(e, 5), !Se(this.props.messages[this.props.messages.length - 1], e) && (w = "too many active convos", !0)) : !Se(this.props.messages[this.props.messages.length - 1], e) && !(!this.props.meta.off && "offline" !== this.props.meta.status)
                        },
                        abortRender: function() {
                            return !this.props.meta || !(!this.isOffline() || !this.props.meta.hideWhenOffline) && (v = "busy" === this.props.meta.status ? "too many active convos and hideWhenOffline is on" : "CE is offline and hideWhenOffline is on", !0)
                        },
                        showDropZone: function() {
                            this.props.meta.enableFileUploads && this.setState({
                                dropZoneClass: " chatlio-drag-over"
                            })
                        },
                        hideDropZone: function() {
                            this.setState({
                                dropZoneClass: ""
                            })
                        },
                        toggleWidget: function() {
                            this.props.toggleWidget()
                        },
                        closeWidget: function(e) {
                            e.stopPropagation(), this.props.conversationEnded ? this.props.toggleWidget(e) : this.props.closeWidget(e)
                        },
                        onKeyDown: function(e) {
                            "Enter" === e.key && (this.props.toggleWidget(), e.preventDefault())
                        },
                        onPeekMessageClick: function() {
                            this.props.dismissPeekMessage(), this.toggleWidget()
                        },
                        collapsedModeWithPeekClass: function() {
                            var e = this.props.alignmentClassName.trim();
                            switch (this.props.meta.collapsedMode) {
                                case "chip":
                                    return "chatlio-bottom-right" === e ? " chatlio-top-right" : " chatlio-top-left";
                                case "button":
                                    return "chatlio-bottom-right" === e ? " chatlio-bottom-left" : " chatlio-bottom-right";
                                case "tab":
                                    return "chatlio-bottom-right" === e ? " chatlio-bottom-right" : " chatlio-bottom-left";
                                default:
                                    return " chatlio-bottom-right"
                            }
                        },
                        onlineDotPositionClass: function() {
                            return this.props.displayPeekMessage && "button" === this.props.meta.collapsedMode ? this.collapsedModeWithPeekClass() : this.props.alignmentClassName
                        },
                        renderPeekMessage: function() {
                            var e = this.getWidgetWidth();
                            return i.createElement("div", {
                                className: "chatlio-peek-message-container" + (this.props.displayPeekMessage ? " show-chatlio-peek-message" : " hide-chatlio-peek-message"),
                                style: {
                                    width: e
                                }
                            }, i.createElement(tt, {
                                text: this.props.peekMessage,
                                closePeekMessage: this.props.dismissPeekMessage,
                                onPeekMessageClick: this.onPeekMessageClick
                            }))
                        },
                        getWidgetWidth: function() {
                            return this.refs.chatlioTitleBar && "button" !== this.props.meta.collapsedMode ? this.calculatePeekWidth() : "auto"
                        },
                        calculatePeekWidth: function() {
                            return "tab" === this.props.meta.collapsedMode ? this.refs.chatlioTitleBar.offsetWidth - 10 : this.refs.chatlioTitleBar.offsetWidth
                        },
                        render: function() {
                            if (this.abortRender()) return null;
                            var e = "",
                                t = "";
                            switch (this.props.meta.collapsedMode) {
                                case "chip":
                                    e = " chatlio-title-bar-chip-container ", t = " chatlio-title-bar-chip ";
                                    break;
                                case "button":
                                    e = " chatlio-title-bar-button-container ", t = " chatlio-title-bar-button ";
                                    break;
                                case "hidden":
                                    "chatlio-closed" === this.props.widgetViewState && (f = !1, t = " chatlio-hide ")
                            }
                            t += this.props.displayPeekMessage ? this.collapsedModeWithPeekClass() : this.props.alignmentClassName;
                            var s = this.isOffline(),
                                a = {
                                    backgroundColor: this.props.meta.titleColor
                                },
                                n = {
                                    color: this.props.meta.titleFontColor
                                },
                                o = "chatlio-widget " + e + this.props.widgetViewState + this.state.dropZoneClass + this.props.alignmentClassName;
                            if (!0 === s && (o += " offline"), !0 === u.embedInline) {
                                o += " embed-inline";
                                var r = document.getElementById("chatlio-widget");
                                r ? r.className = r.className + " embed-inline-container" : (console.log("chatlio: failed to find div#chatlio-widget element while inline, trying in 1 second"), setTimeout(function() {
                                    (r = document.getElementById("chatlio-widget")).className = r.className + " embed-inline-container"
                                }, 1e3))
                            }!0 === u.embedSidebar && (o += " chatlio-sidebar"), this.props.isTakingScreenshot && (o += " chatlio-widget-is-taking-screenshot");
                            var l = s ? this.props.meta.offlineTitle : this.props.meta.onlineTitle,
                                c = this;
                            return i.createElement(B, {
                                transitionName: "chatlio-widget",
                                transitionAppear: !0,
                                transitionAppearTimeout: 0,
                                transitionEnterTimeout: 100,
                                transitionLeaveTimeout: 100
                            }, i.createElement("div", {
                                className: o,
                                id: "chatlio-widget-container"
                            }, i.createElement(B, {
                                transitionName: "chatlio-trigger-badge-anim",
                                transitionEnterTimeout: 3600,
                                transitionLeaveTimeout: 1
                            }, null), i.createElement(B, {
                                transitionName: "flag-slide-out",
                                transitionAppear: "chatlio-closed" === this.props.widgetViewState,
                                transitionEnterTimeout: 5e3,
                                transitionLeaveTimeout: 5e3,
                                transitionAppearTimeout: 5e3
                            }, i.createElement("div", {
                                className: "chatlio-title-bar " + t,
                                ref: "chatlioTitleBar",
                                style: a,
                                onClick: this.toggleWidget,
                                onKeyDown: this.onKeyDown.bind(this),
                                tabIndex: "0"
                            }, i.createElement("div", {
                                className: "chatlio-title-bar-content",
                                tabIndex: "-1"
                            }, i.createElement("span", {
                                className: "chatlio-icon-chevron-up chatlio-up-arrow " + this.props.widgetViewState,
                                style: n
                            }), i.createElement("span", {
                                className: "chatlio-title-text"
                            }, i.createElement("a", {
                                role: "button",
                                ref: function(e) {
                                    e && e.style.setProperty("color", c.props.meta.titleFontColor, "important")
                                }
                            }, i.createElement("span", {
                                className: "chatlio-title-text-content"
                            }, "chatlio-closed" === this.props.widgetViewState ? l : "expandedTitleText"), i.createElement("span", {
                                className: s ? "chatlio-online-dot chatlio-hide" : "chatlio-online-dot" + this.onlineDotPositionClass()
                            }, "●"))), this.props.meta.showConversationEnd && !s ? i.createElement("div", {
                                ref: "closeControl",
                                className: "chatlio-controls-close " + this.props.widgetViewState,
                                style: n
                            }, i.createElement("span", {
                                onClick: this.toggleWidget,
                                className: "chatlio-widget-minimize chatlio-icon-minus " + this.props.widgetViewState
                            }), i.createElement("span", {
                                className: "chatlio-widget-close chatlio-icon-cross2" + this.props.widgetViewState,
                                onClick: this.closeWidget
                            })) : i.createElement("div", {
                                ref: "closeControl",
                                className: "chatlio-controls-close " + this.props.widgetViewState,
                                style: n
                            }, i.createElement("span", {
                                className: "chatlio-icon-minus chatlio-widget-minimize " + this.props.widgetViewState
                            }), i.createElement("span", {
                                className: "chatlio-icon-cross2 chatlio-widget-close" + this.props.widgetViewState
                            })), i.createElement("div", {
                                className: "chatlio-widget-menu-items chatlio-hide"
                            }, i.createElement("table", {
                                className: "chatlio-widget-menu-items-table"
                            }, i.createElement("tbody", null, i.createElement("tr", {
                                className: "chatlio-widget-menu-icons"
                            }, i.createElement("td", null, i.createElement("span", {
                                className: "chatlio-icon-envelope"
                            })), i.createElement("td", null, i.createElement("span", {
                                className: "chatlio-icon-mute"
                            })), i.createElement("td", null, i.createElement("span", {
                                className: "chatlio-icon-cross-circle"
                            }))), i.createElement("tr", null, i.createElement("td", null, "Email"), i.createElement("td", null, "Mute"), i.createElement("td", null, "End Chat"))))))), this.renderPeekMessage(), i.createElement(st, i.__spread({}, this.props, {
                                showDropZone: this.showDropZone,
                                hideDropZone: this.hideDropZone,
                                isOffline: s
                            })))))
                        }
                    }),
                    it = ChatlioReact.createClass({
                        getInitialState: function() {
                            return {
                                uuid: me.vsUuid(),
                                messages: Ee(),
                                isFirstMsg: !0,
                                widgetClosed: !this.props.meta.expanded,
                                userTyping: !1,
                                isTakingScreenshot: !1,
                                requestScreenshot: !1,
                                requestInfo: !1,
                                questionGroupUid: null,
                                displayPeekMessage: !1,
                                visitorManuallyAccepted: this.props.visitorManuallyAccepted
                            }
                        },
                        componentDidMount: function() {
                            var e = this.props.meta.pendingMessages;
                            Array.isArray(e) && e.forEach(function(e, t) {
                                setTimeout(function() {
                                    Le(e.ts), this.onMessage(e), ie("messageReceived", e)
                                }.bind(this), 10 * (t + 1))
                            }, this), this.state.messages.length > 0 && Be(this.onMessage, this.onTyping, this.onRequestScreenshot, this.onRequestInfo, this.handleNoAnswer, this.onConversationEnd, this.onShowOfflineForm, this.onShowQuestionGroup), this.props.meta.trackPresence, U.addEventListener("chatlio.trigger", this.onTrigger), U.addEventListener("chatlio.clear-trigger", this.onClearTrigger), window.addEventListener("storage", this.onStorageChange), ie("mounted")
                        },
                        componentWillUnmount: function() {
                            U.removeEventListener("chatlio.trigger", this.onTrigger), U.removeEventListener("chatlio.clear-trigger", this.onClearTrigger), window.removeEventListener("storage", this.onStorageChange)
                        },
                        componentWillReceiveProps: function(e) {
                            e.startChat ? (e.meta.requireInfo && n.setItem(k, !0), Be(this.onMessage, this.onTyping, this.onRequestScreenshot, this.onRequestInfo, this.handleNoAnswer, this.onConversationEnd, this.onShowOfflineForm, this.onShowQuestionGroup)) : e.clearHistory && this.setState({
                                messages: Ee()
                            }), this.setState({
                                widgetClosed: !e.meta.expanded
                            })
                        },
                        playSound: function() {
                            var e = $.play();
                            void 0 !== e && e.then(function() {}).catch(function() {})
                        },
                        onTrigger: function(e) {
                            this.state.messages = [];
                            var t = e.data,
                                s = {
                                    body: t.message,
                                    tUid: t.uid,
                                    tMessage: t.message,
                                    author: "Them",
                                    ts: (Date.now() / 1e3).toString()
                                };
                            Y || this.setState({
                                displayPeekMessage: !0,
                                peekMessage: t.message
                            }), this.ephMsg(s)
                        },
                        dismissPeekMessage: function() {
                            this.setState({
                                displayPeekMessage: !1
                            })
                        },
                        onClearTrigger: function() {
                            this.state.ephMsg && this.setState({
                                ephMsg: void 0
                            })
                        },
                        onStorageChange: function(e) {
                            e.key !== S && e.key !== N || this.setState({
                                messages: Ee()
                            })
                        },
                        widgetViewState: function() {
                            return u.embedInline ? "chatlio-open" : this.state.widgetClosed ? "chatlio-closed" : "chatlio-open"
                        },
                        toggleWidget: function() {
                            (G ? me.setItem(N, JSON.stringify(!this.state.widgetClosed)) : n.setItem(N, JSON.stringify(!this.state.widgetClosed)), this.setState({
                                widgetClosed: !this.state.widgetClosed,
                                drawBadge: !1,
                                conversationEnded: !1
                            }), this.state.widgetClosed) ? (document.getElementById("chatlio-message-textarea") && window.innerWidth > 768 && document.getElementById("chatlio-message-textarea").focus(), this.props.meta.visibility = "open", ie("visibilityChange", nt), ie("expanded"), this.dismissPeekMessage()) : (this.props.meta.visibility = "closed", ie("visibilityChange", nt), ie("collapsed"))
                        },
                        closeWidget: function(e) {
                            e.stopPropagation(), 0 !== this.state.messages.length ? this.setState({
                                showConfirmConversationEnd: !0
                            }) : this.toggleWidget(e)
                        },
                        cancelConfirmConversationEnd: function(e) {
                            this.setState({
                                showConfirmConversationEnd: !1
                            }), e.stopPropagation()
                        },
                        saveToLS: function() {
                            var e = n,
                                t = this.state.messages.slice(-200),
                                s = JSON.stringify(t);
                            if (G) {
                                e = me;
                                var a = (new TextEncoder).encode(s).byteLength;
                                if (a > 4043) {
                                    for (var i = a - 4043, o = 0, r = 0; r < i;) {
                                        if (r += (new TextEncoder).encode(JSON.stringify(t[o])).byteLength, !(o < t.length - 1)) {
                                            console.warn("Error truncating; will save message array in full"), o = 0;
                                            break
                                        }
                                        o++
                                    }
                                    t = t.slice(o), s = JSON.stringify(t)
                                }
                            }
                            e.setItem(S, s), e.setItem(N, JSON.stringify(this.state.widgetClosed))
                        },
                        sendMessage: function(e) {
                            if (13 === e.keyCode || void 0 === e.keyCode || 740 === e.detail) {
                                if (e.shiftKey) return !0;
                                e.preventDefault();
                                var t = "TEXTAREA" === e.target.nodeName ? e.target : e.target.parentNode.parentNode.parentNode.children[1];
                                t.rows = 1;
                                var s = t.value.trim();
                                if ("" === s) return !1;
                                t.value = "";
                                var a = {
                                        body: D(ae(s)),
                                        author: "You",
                                        ts: (Date.now() / 1e3).toString()
                                    },
                                    i = g(s).replace(/<(.*?)\|(.*?)>/gm, "$1 $2").replace(/<!(here|channel)>/gm, "@$1"),
                                    n = null,
                                    o = null;
                                E && (n = J(E.messages, this.props.meta.questionGroups[E.qgUid])), this.state.isFirstMsg && (this.setState({
                                    isFirstMsg: !1
                                }), Be(this.onMessage, this.onTyping, this.onRequestScreenshot, this.onRequestInfo, this.handleNoAnswer, this.onConversationEnd, this.onShowOfflineForm, this.onShowQuestionGroup), 0 === this.state.messages.length && setTimeout(ie, 0, "firstMessageSent", a), o = E ? Q(E.qgUid, E.messages.length > 0) : {
                                    tUid: this.state.ephMsg && this.state.ephMsg.tUid,
                                    tMessage: this.state.ephMsg && this.state.ephMsg.tMessage
                                }), E = null, We(i, o, n), this.state.messages.push(a), this.setState({
                                    messages: this.state.messages
                                }), this.saveToLS(), setTimeout(ie, 0, "messageSent", a)
                            } else(32 === e.keyCode || e.keyCode > 46 && e.keyCode < 91 || e.keyCode > 95 && e.keyCode < 112 || e.keyCode > 185 && e.keyCode < 223) && this.state.messages.length > 0 && _e();
                            return !0
                        },
                        sendQuestionAnswers: function(e, t) {
                            t = t || {}, this.state.isFirstMsg && (this.setState({
                                isFirstMsg: !1
                            }), Be(this.onMessage, this.onTyping, this.onRequestScreenshot, this.onRequestInfo, this.handleNoAnswer, this.onConversationEnd, this.onShowOfflineForm, this.onShowQuestionGroup)), We("", t, e)
                        },
                        ephMsg: function(e) {
                            this.playSound(), !0 === this.props.meta.newMsgNotifications && f && window.Tinycon && (Z ? r = 0 : r++, Tinycon.setBubble(r)), e.body = D(e.body), this.setState({
                                ephMsg: e,
                                widgetClosed: !(!Y && !this.state.displayPeekMessage) && this.state.widgetClosed,
                                userTyping: !1,
                                showOfflineForm: !1,
                                drawBadge: Y
                            })
                        },
                        onMessage: function(e) {
                            for (var t = this.state.messages.length - 1, s = Math.max(0, t - 5); t >= s; --t)
                                if (this.state.messages[t].ts === e.ts) {
                                    if (!e.isEdited) return;
                                    return this.state.messages[t].body = D(e.body), this.setState({
                                        widgetClosed: !1,
                                        userTyping: !1,
                                        messages: this.state.messages
                                    }), void this.saveToLS()
                                }
                            this.playSound(), e.body = D(e.body), this.setState({
                                widgetClosed: !1,
                                userTyping: !1,
                                showOfflineForm: !1,
                                messages: this.state.messages.concat(e)
                            }), !0 === this.props.meta.newMsgNotifications && f && (Z ? r = 0 : r++, window.Tinycon && Tinycon.setBubble(r)), this.saveToLS()
                        },
                        isTypingTimeout: 0,
                        onTyping: function(e) {
                            clearTimeout(this.isTypingTimeout), this.setState({
                                userTyping: e
                            });
                            var t = this;
                            this.isTypingTimeout = setTimeout(function() {
                                t.setState({
                                    userTyping: !1
                                })
                            }, 6e3)
                        },
                        onRequestScreenshot: function() {
                            clearTimeout(this.isTypingTimeout), this.setState({
                                userTyping: !1,
                                requestScreenshot: {
                                    dismiss: this.onDismissScreenshot,
                                    send: this.onSendScreenshot
                                }
                            }), this.playSound()
                        },
                        onConversationEnd: function(e, t) {
                            if (!0 === e ? (Me(me.vsUuid(), "client-end-chat"), ie("conversationEnded", {
                                    endedBy: "client"
                                })) : ie("conversationEnded", {
                                    endedBy: "operator",
                                    conversationUUID: t.data
                                }), this.props.meta.showConversationEnd) {
                                var s = {
                                    conversationEnded: !0,
                                    showConfirmConversationEnd: !1
                                };
                                !1 !== this.props.meta.clearMessagesOnEnd && (s.messages = []), this.setState(s), n.removeItem(S)
                            }
                        },
                        handleNoAnswer: function(e) {
                            this.props.meta[e.key] && (e.data = ae(this.props.meta[e.key])), this.state.messages.push({
                                body: e.data,
                                author: "Them",
                                ts: (Date.now() / 1e3).toString()
                            }), this.setState({
                                messages: this.state.messages,
                                requestInfo: !1
                            }), this.saveToLS(), this.playSound(), setTimeout(ie, 0, "noReply", e)
                        },
                        onShowOfflineForm: function(e) {
                            this.setState({
                                offlineMessageDefaultValue: e || "",
                                showingOfflineForm: !0
                            })
                        },
                        onSendScreenshot: function() {
                            if (Me(me.vsUuid(), "client-screenshot-sending"), "function" == typeof window.html2canvas) {
                                var e = this,
                                    t = {
                                        onrendered: function(t) {
                                            e.setState({
                                                requestScreenshot: !1
                                            }), Ce("https://api.chatlio.com/v1/p/visitor/screenshot", {
                                                verb: "POST",
                                                data: {
                                                    image: t.toDataURL("image/png"),
                                                    vsUuid: me.vsUuid(),
                                                    ceUuid: c
                                                },
                                                success: function() {
                                                    e.state.messages.push({
                                                        body: "✅",
                                                        author: "You",
                                                        ts: (Date.now() / 1e3).toString()
                                                    }), e.setState({
                                                        messages: e.state.messages,
                                                        isTakingScreenshot: !1
                                                    })
                                                },
                                                onerror: function() {
                                                    console.warn("There was a problem sending your screenshot to Chatlio. Please contact Chatlio support at support@chatlio.com. Status code: ", this.status), e.setState({
                                                        isTakingScreenshot: !1
                                                    })
                                                }
                                            })
                                        }
                                    };
                                0 === window.pageYOffset && (t.width = window.innerWidth, t.height = window.innerHeight), this.setState({
                                    isTakingScreenshot: !0
                                }, function() {
                                    window.html2canvas(document.body, t)
                                })
                            } else console.warn("Screenshot library is not ready yet. Try again in a short while.")
                        },
                        onDismissScreenshot: function() {
                            Me(me.vsUuid(), "client-screenshot-declined"), this.setState({
                                requestScreenshot: !1
                            })
                        },
                        onRequestInfo: function(e) {
                            clearTimeout(this.isTypingTimeout);
                            var t = e.data.split("|");
                            this.state.requestInfo = {
                                dismiss: this.onDismissRequestInfo,
                                send: this.onSendRequestInfo,
                                fields: t
                            }, this.state.userTyping = !1, this.setState(this.state), this.playSound()
                        },
                        onShowQuestionGroup: function(e) {
                            clearTimeout(this.isTypingTimeout), this.setState({
                                questionGroupUid: e.data,
                                userTyping: !1
                            }), this.playSound()
                        },
                        onQuestionGroupDone: function() {
                            this.setState({
                                questionGroupUid: null
                            })
                        },
                        onDismissRequestInfo: function() {
                            Me(me.vsUuid(), "client-request-info-declined"), this.setState({
                                requestInfo: !1
                            })
                        },
                        onSendRequestInfo: function(e) {
                            Me(me.vsUuid(), "client-request-info-sending", e), this.state.messages.push({
                                body: "✅",
                                author: "You",
                                ts: (Date.now() / 1e3).toString()
                            }), this.setState({
                                messages: this.state.messages,
                                requestInfo: !1
                            })
                        },
                        sendClientAcceptTerms: function(e) {
                            Me(me.vsUuid(), "client-accept", {
                                text: e
                            }), this.setState({
                                visitorManuallyAccepted: !0
                            })
                        },
                        render: function() {
                            return i.createElement(at, {
                                meta: this.props.meta,
                                requireInfo: this.props.meta.requireInfo,
                                messages: this.state.messages,
                                showConfirmConversationEnd: this.state.showConfirmConversationEnd,
                                toggleWidget: this.toggleWidget,
                                closeWidget: this.closeWidget,
                                widgetViewState: this.widgetViewState(),
                                sendMessage: this.sendMessage,
                                userTyping: this.state.userTyping,
                                sendQuestionAnswers: this.sendQuestionAnswers,
                                requestScreenshot: this.state.requestScreenshot,
                                isTakingScreenshot: this.state.isTakingScreenshot,
                                onShowOfflineForm: this.onShowOfflineForm,
                                offlineMessageDefaultValue: this.state.offlineMessageDefaultValue,
                                showingOfflineForm: this.state.showingOfflineForm,
                                requestInfo: this.state.requestInfo,
                                questionGroupUid: this.state.questionGroupUid,
                                onQuestionGroupDone: this.onQuestionGroupDone,
                                startChat: this.props.startChat,
                                alignmentClassName: this.props.alignmentClassName,
                                ephMsg: this.state.ephMsg,
                                drawBadge: this.state.drawBadge,
                                conversationEnded: this.state.conversationEnded,
                                onConversationEnd: this.onConversationEnd,
                                cancelConfirmConversationEnd: this.cancelConfirmConversationEnd,
                                displayPeekMessage: this.state.displayPeekMessage,
                                peekMessage: this.state.peekMessage,
                                dismissPeekMessage: this.dismissPeekMessage,
                                sendClientAcceptTerms: this.sendClientAcceptTerms,
                                visitorManuallyAccepted: this.state.visitorManuallyAccepted
                            })
                        }
                    });
                ke = function(t, s) {
                    switch ((s = s || {}).alignmentClassName = "", s.visitorManuallyAccepted = JSON.parse(e).visitorAccepted, t.widgetAlignment) {
                        case "bottomLeft":
                            s.alignmentClassName = " chatlio-bottom-left ";
                            break;
                        case "bottomRight":
                            s.alignmentClassName = " chatlio-bottom-right ";
                            break;
                        default:
                            t.widgetAlignment = t.widgetAlignment.trim(), t.widgetAlignment && (s.alignmentClassName = " " + t.widgetAlignment + " ")
                    }
                    window.ChatlioReactDOM.render(i.createElement(it, i.__spread({}, s, {
                        meta: t
                    })), U)
                }, f = !y, null === n.getItem(N) && n.setItem(N, !0);
                var nt = Ie(e, t, null, !0),
                    ot = c !== l && !W && n.getItem(A);
                (W = !1, ot && (nt.visitorHasActiveConvo || (n.removeItem(A), a.switchToWidget(l))), _ = setTimeout(He, z), !0 === nt.newMsgNotifications && (u && !0 === u.disableFaviconBadge || window.Tinycon || ce("https://w.chatlio.com/v5/vendor/tinycon.min.06c92f12.js", function() {
                    window.Tinycon && (Tinycon.setOptions({
                        shape: "disc",
                        rad: 12
                    }), Tinycon.setBubble(r), ze = function() {
                        r > 0 && f && (r = 0, Tinycon.setBubble(r))
                    }, window.onfocus = function() {
                        Z = !0, ze()
                    }, window.onblur = function() {
                        Z = !1
                    })
                })), "f9b24b95-0ca6-4e8c-75d2-16922e9ca4a4" === c) && (new WebSocket("wss://push.chatlio.lan/sub/main").onmessage = function(e) {
                    console.log(e.data, "fetching"), Ce("https://api-cdn.chatlio.com/v1/p/chat_endpoints/" + c, {
                        data: null,
                        dontSendAuthToken: !0,
                        failure: function() {
                            b && De()
                        },
                        success: function() {
                            F && Ie(this.responseText)
                        }
                    })
                });
                ! function() {
                    if (window._chatlio) {
                        var e;
                        try {
                            e = JSON.parse(JSON.stringify(window._chatlio))
                        } catch (e) {
                            return void console.warn("Invalid API call: ", e)
                        }
                        window._chatlio = a, e && e.length > 0 && e.forEach(function(e) {
                            e.constructor !== Array && console.warn("Invalid chatlio api call: %o", e);
                            var t = e.shift();
                            a[t] || console.warn("Unknown chatlio api call: '%s'", String(t));
                            var s = e.shift(),
                                i = [];
                            for (var n in s) i.push(s[n]);
                            a[t].apply(a, i)
                        })
                    } else console.warn("No _chatlio object on root")
                }(), qe(nt), !0 === nt.useSgmt && ce("https://w.chatlio.com/v5/a/sgmt-v1.1.1.0b4d878b.js")
            }
        } else console.warn("Missing widget UUID. Did you set the 'data-widget-id' attribute?");
    else console.error("No Chatlio script node. Contact Chatlio support at support@chatlio.com")
}();