(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4407], {
    59542: function(t) {
        t.exports = function() {
            "use strict";
            var t = "day";
            return function(e, r, n) {
                var a = function(e) {
                    return e.add(4 - e.isoWeekday(), t)
                }
                  , o = r.prototype;
                o.isoWeekYear = function() {
                    return a(this).year()
                }
                ,
                o.isoWeek = function(e) {
                    if (!this.$utils().u(e))
                        return this.add(7 * (e - this.isoWeek()), t);
                    var r, o, s, i = a(this), c = (r = this.isoWeekYear(),
                    s = 4 - (o = (this.$u ? n.utc : n)().year(r).startOf("year")).isoWeekday(),
                    o.isoWeekday() > 4 && (s += 7),
                    o.add(s, t));
                    return i.diff(c, "week") + 1
                }
                ,
                o.isoWeekday = function(t) {
                    return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
                }
                ;
                var s = o.startOf;
                o.startOf = function(t, e) {
                    var r = this.$utils()
                      , n = !!r.u(e) || e;
                    return "isoweek" === r.p(t) ? n ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : s.bind(this)(t, e)
                }
            }
        }()
    },
    6081: function(t, e, r) {
        "use strict";
        r.d(e, {
            X: function() {
                return o
            }
        });
        var n = r(82010)
          , a = r(56852)
          , o = function() {
            var t = (0,
            n.F)().theme;
            return "system" === t ? (0,
            a.jU)() && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : t
        }
    },
    99261: function(t, e, r) {
        "use strict";
        r.d(e, {
            c: function() {
                return D
            }
        });
        var n = r(51438);
        function a(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        var o = r(28668)
          , s = r(26042)
          , i = r(10253)
          , c = r(29815)
          , u = r(25171)
          , l = r(85893)
          , d = r(67294)
          , h = r(66749)
          , p = r(59542)
          , f = r.n(p)
          , v = r(27484)
          , g = r.n(v)
          , m = r(69396)
          , x = function(t) {
            return (0,
            l.jsx)("g", (0,
            m.Z)((0,
            s.Z)({}, t.svgProps), {
                children: t.columns
            }))
        }
          , y = r(62758)
          , k = function(t) {
            return t.visible ? (0,
            l.jsx)(y.u, {
                label: t.title,
                placement: "top",
                children: (0,
                l.jsx)("rect", (0,
                m.Z)((0,
                s.Z)({}, t.svgProps), {
                    className: "cursor-pointer"
                }))
            }) : (0,
            l.jsx)("rect", (0,
            s.Z)({}, t.svgProps))
        }
          , M = function(t) {
            return (0,
            l.jsx)("g", (0,
            m.Z)((0,
            s.Z)({}, t.svgProps), {
                children: t.blocks
            }))
        }
          , b = {
            blockWidth: 8.86,
            endDate: g()(),
            startDate: g()().subtract(365, "d"),
            gap: 2.66,
            areaGap: 4.43,
            paddingX: 0,
            filled: !1,
            levels: [{
                lte: 0,
                color: "var(--fill-tertiary)"
            }, {
                lte: 25,
                color: "var(--green-20)"
            }, {
                lte: 50,
                color: "var(--green-40)"
            }, {
                lte: 75,
                color: "var(--green-60)"
            }, {
                lte: 100,
                color: "var(--green-80)"
            }],
            onHoverText: function(t) {
                var e = g()(t.date).format("MMM D, YYYY");
                return "".concat(void 0 === t.count ? 0 : t.count, " submissions on ").concat(e)
            }
        }
          , Z = function(t) {
            return (0,
            l.jsx)("text", (0,
            m.Z)((0,
            s.Z)({}, t.svgProps), {
                fill: "#AFB4BD",
                className: "font-xs",
                children: t.children
            }))
        }
          , P = function(t) {
            return t.format("YYYY-MM-DD")
        };
        g().extend(f());
        var w = function(t) {
            (0,
            o.Z)(r, t);
            var e = (0,
            u.Z)(r);
            function r() {
                var t;
                return (0,
                n.Z)(this, r),
                (t = e.apply(this, arguments)).getColorHelper = function(e) {
                    var r = t.config.levels
                      , n = e.filter((function(t) {
                        return !!t
                    }
                    )).map((function(t) {
                        return t.count
                    }
                    )).sort((function(t, e) {
                        return t - e
                    }
                    ))
                      , a = r.slice(1).map((function(t) {
                        return {
                            count: n[Math.floor(t.lte * n.length / 100) - 1],
                            color: t.color
                        }
                    }
                    ));
                    return [{
                        count: 0,
                        color: r[0].color
                    }].concat((0,
                    c.Z)(a))
                }
                ,
                t
            }
            var d, p, f, v = r.prototype;
            return v.render = function() {
                var t, e = this.getColumnsAndTexts(), r = e.areas, n = e.textMap, a = this.getColumnNums(r), o = null !== (t = this.config.paddingX) && void 0 !== t ? t : 0, s = a * this.blockGap + (r.length - 1) * this.areaGap - this.config.gap + 2 * o, i = this.props.height || 7 * this.blockGap + 24;
                return (0,
                l.jsxs)("svg", {
                    viewBox: "0 0 ".concat(s, " ").concat(i),
                    width: this.props.width,
                    children: [this.renderAreas(r), this.renderDates(n)]
                })
            }
            ,
            v.renderAreas = function(t) {
                var e = this;
                return t.map((function(t, r) {
                    var n = {
                        x: t.x,
                        y: t.y,
                        className: "month ".concat(r + 1)
                    }
                      , a = e.renderColumns(t.data);
                    return (0,
                    l.jsx)(x, {
                        columns: a,
                        svgProps: n
                    }, (0,
                    h.Z)())
                }
                ))
            }
            ,
            v.renderColumns = function(t) {
                var e = this;
                return t.map((function(t, r) {
                    var n = {
                        x: t.x,
                        y: t.y,
                        className: "week ".concat(r + 1)
                    }
                      , a = e.renderBlocks(t.data, n.x, n.y);
                    return (0,
                    l.jsx)(M, {
                        blocks: a,
                        svgProps: n
                    }, (0,
                    h.Z)())
                }
                ))
            }
            ,
            v.renderBlocks = function(t, e, r) {
                var n = this;
                return t.map((function(t, a) {
                    var o = {
                        x: e,
                        y: r + a * n.blockGap,
                        width: n.config.blockWidth,
                        height: n.config.blockWidth,
                        fill: t.color,
                        rx: 2,
                        ry: 2
                    };
                    return (0,
                    l.jsx)(k, {
                        visible: t.visible,
                        title: t.text,
                        svgProps: o
                    }, (0,
                    h.Z)())
                }
                ))
            }
            ,
            v.renderDates = function(t) {
                var e, r = this, n = null !== (e = this.props.textMap) && void 0 !== e ? e : new Map, a = 7 * this.blockGap;
                return (0,
                c.Z)(t.entries()).map((function(t) {
                    var e = (0,
                    i.Z)(t, 2)
                      , o = e[0]
                      , c = e[1]
                      , u = n.get(o)
                      , d = u;
                    var p = r.props.separateMonths ? "14px" : "10px"
                      , f = r.props.separateMonths ? 16.5 : 13.5
                      , v = {
                        x: c,
                        y: a + f,
                        fontSize: p
                    }
                      , m = {
                        x: c,
                        y: a + 2,
                        width: 22,
                        height: 22
                    }
                      , x = parseInt(r.getMonthFromTextMapKey(o)) + 1
                      , y = g()("2022-".concat(x, "-01")).format("MMM");
                    return u ? (0,
                    l.jsx)("image", (0,
                    s.Z)({
                        xlinkHref: d
                    }, m), (0,
                    h.Z)()) : (0,
                    l.jsx)(Z, {
                        svgProps: v,
                        children: y
                    }, (0,
                    h.Z)())
                }
                ))
            }
            ,
            v.getPlaceholder = function(t) {
                return {
                    color: this.config.filled ? this.config.levels[0].color : "transparent",
                    text: this.config.onHoverText({
                        date: t
                    }),
                    visible: this.config.filled
                }
            }
            ,
            v.generatePlaceholders = function(t, e) {
                var r = this;
                return Array.from({
                    length: e
                }).map((function(e, n) {
                    var a = t.add(n, "d");
                    return r.getPlaceholder(a)
                }
                )).reverse()
            }
            ,
            v.getTextMapKey = function(t, e) {
                return "".concat(t, "-").concat(e)
            }
            ,
            v.getMonthFromTextMapKey = function(t) {
                return (0,
                i.Z)(t.split("-"), 2)[1]
            }
            ,
            v.getColumnsAndTexts = function() {
                var t = this
                  , e = function(e) {
                    var n = u.clone().add(e, "d")
                      , d = n.isoWeekday() % 7;
                    if (t.props.separateMonths && d !== s.length) {
                        var h, p = n.clone().subtract(d, "d"), f = t.generatePlaceholders(p, d);
                        (h = s).push.apply(h, (0,
                        c.Z)(f))
                    }
                    var v = t.processedDataMap.get(P(n));
                    if (v) {
                        var g = i.find((function(t) {
                            var e = t.count;
                            return v.count <= e
                        }
                        ));
                        g || (g = i[i.length - 1]),
                        s.push({
                            color: g.color,
                            text: t.config.onHoverText(v),
                            visible: !0
                        })
                    } else
                        s.push({
                            color: i[0].color,
                            text: t.config.onHoverText({
                                date: n
                            }),
                            visible: !0
                        });
                    var m = n.clone().add(1, "d").isSame(l);
                    (7 === s.length || e === r || t.props.separateMonths && m) && (o.push(s),
                    s = []),
                    (t.props.separateMonths && m || 0 === s.length && n.month() === l.month() || e === r) && (a.push(o),
                    o = [],
                    l = l.clone().add(1, "month"))
                }
                  , r = this.config.endDate.diff(this.config.startDate, "d")
                  , n = 0;
                this.processedDataMap = new Map(this.props.data.map((function(t) {
                    var e = t.count || 0
                      , r = g()(t.date);
                    return n = Math.max(e, n),
                    [P(r), {
                        count: e,
                        date: r
                    }]
                }
                )));
                for (var a = [], o = [], s = [], i = this.getColorHelper(this.props.data), u = g()(this.config.startDate).startOf("day"), l = u.clone().endOf("month").startOf("day").add(1, "d"), d = 0; d <= r; ++d)
                    e(d);
                var h = this.formatPosition(a);
                return {
                    areas: h.areas,
                    columns: [],
                    textMap: h.textMap
                }
            }
            ,
            v.formatPosition = function(t) {
                var e, r = this, n = g()(this.props.startDate), a = new Map, o = null !== (e = this.config.paddingX) && void 0 !== e ? e : 0;
                return {
                    areas: t.map((function(t, e) {
                        var s = o
                          , i = t.map((function(t) {
                            var e = o;
                            return o += r.blockGap,
                            {
                                x: e,
                                y: 0,
                                data: t
                            }
                        }
                        ))
                          , c = t.reduce((function(t, e) {
                            return t + e.length
                        }
                        ), 0)
                          , u = 0 === e && c >= 28
                          , l = e > 0 && c >= 14;
                        if (r.props.separateMonths ? c >= 14 : u || l) {
                            var d = (i.length - 2.5) / 2 * r.blockGap;
                            a.set(r.getTextMapKey(n.year(), n.month()), s + d)
                        }
                        return n = n.add(1, "month"),
                        o += r.props.separateMonths ? r.areaGap : 0,
                        {
                            x: s,
                            y: 0,
                            data: i
                        }
                    }
                    )),
                    textMap: a
                }
            }
            ,
            v.getColumnNums = function(t) {
                return t.reduce((function(t, e) {
                    return t + e.data.length
                }
                ), 0)
            }
            ,
            d = r,
            (p = [{
                key: "config",
                get: function() {
                    return (0,
                    s.Z)({}, b, this.props)
                }
            }, {
                key: "areaGap",
                get: function() {
                    return this.props.separateMonths ? this.config.areaGap : 0
                }
            }, {
                key: "blockGap",
                get: function() {
                    return this.config.blockWidth + this.config.gap
                }
            }]) && a(d.prototype, p),
            f && a(d, f),
            r
        }(d.PureComponent)
          , D = w
    },
    46421: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return i
            }
        });
        var n = r(26042)
          , a = r(69396)
          , o = r(88525)
          , s = r(65854)
          , i = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0
              , r = arguments.length > 2 ? arguments[2] : void 0;
            return (0,
            o.io4)(s.f6, {
                username: t,
                year: e
            }, (0,
            a.Z)((0,
            n.Z)({}, r), {
                select: function(t) {
                    if (!t.matchedUser)
                        return null;
                    var e = t.matchedUser.userCalendar
                      , r = e.activeYears;
                    return {
                        streak: e.streak,
                        totalActiveDays: e.totalActiveDays,
                        dccBadges: e.dccBadges,
                        submissionCalendar: e.submissionCalendar,
                        activeYears: r.sort((function(t, e) {
                            return t < e ? 1 : -1
                        }
                        ))
                    }
                }
            }))
        }
    }
}]);
