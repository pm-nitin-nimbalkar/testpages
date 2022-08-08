/* prebid.js v6.18.0
Updated : 2022-08-05*/
/*! For license information please see prebid-core.js.LICENSE.txt */
!(function () {
  var e,
    n = {
      877: function (e, n, t) {
        "use strict";
        t.d(n, {
          Pd: function () {
            return s;
          },
          Th: function () {
            return u;
          },
          _U: function () {
            return d;
          },
        });
        var r = t(996),
          i = t(853),
          o = t(265),
          a = t(879),
          c = "outstream";
        function u(e) {
          var n = this,
            t = e.url,
            o = e.config,
            a = e.id,
            u = e.callback,
            s = e.loaded,
            d = e.adUnitCode;
          (this.url = t),
            (this.config = o),
            (this.handlers = {}),
            (this.id = a),
            (this.loaded = s),
            (this.cmd = []),
            (this.push = function (e) {
              "function" == typeof e
                ? n.loaded
                  ? e.call()
                  : n.cmd.push(e)
                : (0, i.logError)(
                    "Commands given to Renderer.push must be wrapped in a function"
                  );
            }),
            (this.callback =
              u ||
              function () {
                (n.loaded = !0), n.process();
              }),
            (this.render = function () {
              var e = this,
                n = arguments,
                o = function () {
                  e._render
                    ? e._render.apply(e, n)
                    : (0, i.logWarn)(
                        "No render function was provided, please use .setRender on the renderer"
                      );
                };
              f(d)
                ? ((0, i.logWarn)(
                    "External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(
                      d
                    )
                  ),
                  o())
                : (this.cmd.unshift(o), (0, r.B)(t, c, this.callback));
            }.bind(this));
        }
        function s(e) {
          return !(!e || !e.url);
        }
        function d(e, n) {
          e.render(n);
        }
        function f(e) {
          var n = ihowpbjs.adUnits,
            t = (0, a.sE)(n, function (n) {
              return n.code === e;
            });
          if (!t) return !1;
          var r = (0, o.Z)(t, "renderer"),
            i = !!(r && r.url && r.render),
            c = (0, o.Z)(t, "mediaTypes.video.renderer"),
            u = !!(c && c.url && c.render);
          return !!((i && !0 !== r.backupOnly) || (u && !0 !== c.backupOnly));
        }
        (u.install = function (e) {
          return new u({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded,
            adUnitCode: e.adUnitCode,
          });
        }),
          (u.prototype.getConfig = function () {
            return this.config;
          }),
          (u.prototype.setRender = function (e) {
            this._render = e;
          }),
          (u.prototype.setEventHandlers = function (e) {
            this.handlers = e;
          }),
          (u.prototype.handleVideoEvent = function (e) {
            var n = e.id,
              t = e.eventName;
            "function" == typeof this.handlers[t] && this.handlers[t](),
              (0, i.logMessage)(
                "Prebid Renderer event for id ".concat(n, " type ").concat(t)
              );
          }),
          (u.prototype.process = function () {
            for (; this.cmd.length > 0; )
              try {
                this.cmd.shift().call();
              } catch (e) {
                (0, i.logError)("Error processing Renderer command: ", e);
              }
          });
      },
      263: function (e, n, t) {
        "use strict";
        t.d(n, {
          f: function () {
            return a;
          },
        });
        var r = t(265),
          i = {};
        function o(e, n, t) {
          var r = (function (e, n) {
            var t = (i[e] = i[e] || { bidders: {} });
            return n ? (t.bidders[n] = t.bidders[n] || {}) : t;
          })(e, t);
          return (r[n] = (r[n] || 0) + 1), r[n];
        }
        var a = {
          incrementRequestsCounter: function (e) {
            return o(e, "requestsCounter");
          },
          incrementBidderRequestsCounter: function (e, n) {
            return o(e, "requestsCounter", n);
          },
          incrementBidderWinsCounter: function (e, n) {
            return o(e, "winsCounter", n);
          },
          getRequestsCounter: function (e) {
            return (0, r.Z)(i, "".concat(e, ".requestsCounter")) || 0;
          },
          getBidderRequestsCounter: function (e, n) {
            return (
              (0, r.Z)(
                i,
                "".concat(e, ".bidders.").concat(n, ".requestsCounter")
              ) || 0
            );
          },
          getBidderWinsCounter: function (e, n) {
            return (
              (0, r.Z)(
                i,
                "".concat(e, ".bidders.").concat(n, ".winsCounter")
              ) || 0
            );
          },
        };
      },
      602: function (e, n, t) {
        "use strict";
        t.d(n, {
          ZP: function () {
            return re;
          },
          rp: function () {
            return Q;
          },
          nX: function () {
            return X;
          },
        });
        var r = t(853),
          i = t(265),
          o = t(269),
          a = t(17),
          c = t(125),
          u = t(755),
          s = t(962),
          d = t(494),
          f = t(879),
          l = t(263),
          g = t(661);
        function p(e) {
          return (
            (p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            p(e)
          );
        }
        function v(e, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            n && y(e, n);
        }
        function y(e, n) {
          return (
            (y =
              Object.setPrototypeOf ||
              function (e, n) {
                return (e.__proto__ = n), e;
              }),
            y(e, n)
          );
        }
        function b(e) {
          var n = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var t,
              r = h(e);
            if (n) {
              var i = h(this).constructor;
              t = Reflect.construct(r, arguments, i);
            } else t = r.apply(this, arguments);
            return m(this, t);
          };
        }
        function m(e, n) {
          if (n && ("object" === p(n) || "function" == typeof n)) return n;
          if (void 0 !== n)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        function h(e) {
          return (
            (h = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            h(e)
          );
        }
        function E(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function S(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function A(e, n, t) {
          return (
            n && S(e.prototype, n),
            t && S(e, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function T(e, n, t) {
          !(function (e, n) {
            if (n.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          })(e, n),
            n.set(e, t);
        }
        function I(e, n) {
          return (function (e, n) {
            return n.get ? n.get.call(e) : n.value;
          })(e, C(e, n, "get"));
        }
        function w(e, n, t) {
          return (
            (function (e, n, t) {
              if (n.set) n.set.call(e, t);
              else {
                if (!n.writable)
                  throw new TypeError(
                    "attempted to set read only private field"
                  );
                n.value = t;
              }
            })(e, C(e, n, "set"), t),
            t
          );
        }
        function C(e, n, t) {
          if (!n.has(e))
            throw new TypeError(
              "attempted to " + t + " private field on non-instance"
            );
          return n.get(e);
        }
        var O = new WeakMap(),
          B = new WeakMap(),
          U = new WeakMap(),
          R = new WeakMap(),
          D = new WeakMap(),
          _ = (function () {
            function e() {
              var n, t;
              E(this, e),
                T(this, O, { writable: !0, value: void 0 }),
                T(this, B, { writable: !0, value: void 0 }),
                T(this, U, { writable: !0, value: void 0 }),
                T(this, R, { writable: !0, value: void 0 }),
                T(this, D, { writable: !0, value: void 0 }),
                (t = void 0),
                (n = "generatedTime") in this
                  ? Object.defineProperty(this, n, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (this[n] = t),
                this.reset();
            }
            return (
              A(e, [
                {
                  key: "reset",
                  value: function () {
                    var e = this;
                    w(
                      this,
                      U,
                      new Promise(function (n) {
                        w(e, R, function (t) {
                          w(e, D, !0), w(e, B, t), n(t);
                        });
                      })
                    ),
                      w(this, O, !1),
                      w(this, B, null),
                      w(this, D, !1),
                      (this.generatedTime = null);
                  },
                },
                {
                  key: "enable",
                  value: function () {
                    w(this, O, !0);
                  },
                },
                {
                  key: "enabled",
                  get: function () {
                    return I(this, O);
                  },
                },
                {
                  key: "ready",
                  get: function () {
                    return I(this, D);
                  },
                },
                {
                  key: "promise",
                  get: function () {
                    return (
                      I(this, O) || I(this, R).call(this, null), I(this, U)
                    );
                  },
                },
                {
                  key: "setConsentData",
                  value: function (e) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : (0, r.timestamp)();
                    (this.generatedTime = n), I(this, R).call(this, e);
                  },
                },
                {
                  key: "getConsentData",
                  value: function () {
                    return I(this, B);
                  },
                },
              ]),
              e
            );
          })(),
          k = (function (e) {
            v(t, e);
            var n = b(t);
            function t() {
              return E(this, t), n.apply(this, arguments);
            }
            return (
              A(t, [
                {
                  key: "getConsentMeta",
                  value: function () {
                    var e = this.getConsentData();
                    if (e && this.generatedTime)
                      return { usp: e, generatedAt: this.generatedTime };
                  },
                },
              ]),
              t
            );
          })(_),
          j = (function (e) {
            v(t, e);
            var n = b(t);
            function t() {
              return E(this, t), n.apply(this, arguments);
            }
            return (
              A(t, [
                {
                  key: "getConsentMeta",
                  value: function () {
                    var e = this.getConsentData();
                    if (e && e.vendorData && this.generatedTime)
                      return {
                        gdprApplies: e.gdprApplies,
                        consentStringSize: (0, r.isStr)(e.vendorData.tcString)
                          ? e.vendorData.tcString.length
                          : 0,
                        generatedAt: this.generatedTime,
                        apiVersion: e.apiVersion,
                      };
                  },
                },
              ]),
              t
            );
          })(_);
        function N(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n &&
              (r = r.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, r);
          }
          return t;
        }
        function P(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? N(Object(t), !0).forEach(function (n) {
                  q(e, n, t[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        }
        function x(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function q(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = t),
            e
          );
        }
        function M() {
          return (
            (M =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            M.apply(this, arguments)
          );
        }
        var G = "client",
          W = "server",
          F = t(644),
          z = t(319),
          L = {},
          K = (L.bidderRegistry = {}),
          V = (L.aliasRegistry = {}),
          H = [];
        s.vc.getConfig("s2sConfig", function (e) {
          e &&
            e.s2sConfig &&
            (H = (0, r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
        });
        var Z = {},
          Y = (0, d.z3)(
            "sync",
            function (e) {
              var n = e.bidderCode,
                t = e.auctionId,
                o = e.bidderRequestId,
                a = e.adUnits,
                c = e.src;
              return a
                .reduce(function (e, a) {
                  return (
                    e.push(
                      a.bids
                        .filter(function (e) {
                          return e.bidder === n;
                        })
                        .reduce(function (e, n) {
                          var u =
                            null ==
                            (n = M(
                              {},
                              n,
                              (0, r.getDefinedParams)(a, [
                                "nativeParams",
                                "ortb2Imp",
                                "mediaType",
                                "renderer",
                                "storedAuctionResponse",
                              ])
                            )).mediaTypes
                              ? a.mediaTypes
                              : n.mediaTypes;
                          return (
                            (0, r.isValidMediaTypes)(u)
                              ? (n = M({}, n, { mediaTypes: u }))
                              : (0, r.logError)(
                                  "mediaTypes is not correctly configured for adunit ".concat(
                                    a.code
                                  )
                                ),
                            e.push(
                              M({}, n, {
                                adUnitCode: a.code,
                                transactionId: a.transactionId,
                                sizes:
                                  (0, i.Z)(u, "banner.sizes") ||
                                  (0, i.Z)(u, "video.playerSize") ||
                                  [],
                                bidId:
                                  n.bid_id || (0, r.getUniqueIdentifierStr)(),
                                bidderRequestId: o,
                                auctionId: t,
                                src: c,
                                bidRequestsCount: l.f.getRequestsCounter(
                                  a.code
                                ),
                                bidderRequestsCount:
                                  l.f.getBidderRequestsCounter(
                                    a.code,
                                    n.bidder
                                  ),
                                bidderWinsCount: l.f.getBidderWinsCounter(
                                  a.code,
                                  n.bidder
                                ),
                              })
                            ),
                            e
                          );
                        }, [])
                    ),
                    e
                  );
                }, [])
                .reduce(r.flatten, [])
                .filter(function (e) {
                  return "" !== e;
                });
            },
            "getBids"
          ),
          J = (0, d.z3)(
            "sync",
            function (e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = t.getS2SBidders,
                i = void 0 === r ? ee : r;
              if (null == n) return e;
              var o = i(n);
              return e.filter(function (e) {
                return o.has(e.bidder);
              });
            },
            "filterBidsForAdUnit"
          ),
          Q = new j(),
          X = new k(),
          $ = (0, d.z3)(
            "sync",
            function (e, n) {
              return (0, o.UB)(e, n);
            },
            "setupAdUnitMediaTypes"
          );
        function ee(e) {
          (0, r.isArray)(e) || (e = [e]);
          var n = new Set([null]);
          return (
            e
              .filter(function (e) {
                return e && e.enabled;
              })
              .flatMap(function (e) {
                return e.bidders;
              })
              .forEach(function (e) {
                return n.add(e);
              }),
            n
          );
        }
        var ne = (0, d.z3)(
          "sync",
          function (e, n) {
            var t,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = i.getS2SBidders,
              a = void 0 === o ? ee : o,
              c = a(n);
            return (0, r.getBidderCodes)(e).reduce(function (e, n) {
              return e[c.has(n) ? W : G].push(n), e;
            }, (q((t = {}), G, []), q(t, W, []), t));
          },
          "partitionBidders"
        );
        function te(e, n, t) {
          try {
            var i = K[e].getSpec();
            i &&
              i[n] &&
              "function" == typeof i[n] &&
              ((0, r.logInfo)("Invoking ".concat(e, ".").concat(n)),
              s.vc.runWithBidder(e, r.bind.call(i[n], i, t)));
          } catch (t) {
            (0, r.logWarn)("Error calling ".concat(n, " of ").concat(e));
          }
        }
        (L.makeBidRequests = (0, d.z3)(
          "sync",
          function (e, n, t, i, o) {
            z.emit(F.EVENTS.BEFORE_REQUEST_BIDS, e),
              (0, a.Fb)(e),
              (e = $(e, o));
            var c = ne(e, H),
              u = c.client,
              d = c.server;
            s.vc.getConfig("bidderSequence") === s.FD &&
              (u = (0, r.shuffle)(u));
            var l = (0, g.n)(),
              p = [];
            H.forEach(function (i) {
              if (i && i.enabled) {
                var o = (function (e, n) {
                    var t = (0, r.deepClone)(e);
                    return (
                      t.forEach(function (e) {
                        e.bids = J(e.bids, n).map(function (e) {
                          return (
                            (e.bid_id = (0, r.getUniqueIdentifierStr)()), e
                          );
                        });
                      }),
                      t.filter(function (e) {
                        return 0 !== e.bids.length;
                      })
                    );
                  })(e, i),
                  a = (0, r.generateUUID)();
                d.forEach(function (e) {
                  var c = (0, r.getUniqueIdentifierStr)(),
                    u = {
                      bidderCode: e,
                      auctionId: t,
                      bidderRequestId: c,
                      uniquePbsTid: a,
                      bids: Y({
                        bidderCode: e,
                        auctionId: t,
                        bidderRequestId: c,
                        adUnits: (0, r.deepClone)(o),
                        src: F.S2S.SRC,
                      }),
                      auctionStart: n,
                      timeout: i.timeout,
                      src: F.S2S.SRC,
                      refererInfo: l,
                    };
                  0 !== u.bids.length && p.push(u);
                }),
                  o.forEach(function (e) {
                    var n = e.bids.filter(function (e) {
                      return (0, f.sE)(p, function (n) {
                        return (0, f.sE)(n.bids, function (n) {
                          return n.bidId === e.bid_id;
                        });
                      });
                    });
                    e.bids = n;
                  }),
                  p.forEach(function (e) {
                    void 0 === e.adUnitsS2SCopy &&
                      (e.adUnitsS2SCopy = o.filter(function (e) {
                        return e.bids.length > 0;
                      }));
                  });
              }
            });
            var v = (function (e) {
              var n = (0, r.deepClone)(e);
              return (
                n.forEach(function (e) {
                  e.bids = J(e.bids, null);
                }),
                n.filter(function (e) {
                  return 0 !== e.bids.length;
                })
              );
            })(e);
            return (
              u.forEach(function (e) {
                var a = (0, r.getUniqueIdentifierStr)(),
                  c = {
                    bidderCode: e,
                    auctionId: t,
                    bidderRequestId: a,
                    bids: Y({
                      bidderCode: e,
                      auctionId: t,
                      bidderRequestId: a,
                      adUnits: (0, r.deepClone)(v),
                      labels: o,
                      src: "client",
                    }),
                    auctionStart: n,
                    timeout: i,
                    refererInfo: l,
                  },
                  u = K[e];
                u ||
                  (0, r.logError)(
                    "Trying to make a request for bidder that does not exist: ".concat(
                      e
                    )
                  ),
                  u && c.bids && 0 !== c.bids.length && p.push(c);
              }),
              Q.getConsentData() &&
                p.forEach(function (e) {
                  e.gdprConsent = Q.getConsentData();
                }),
              X.getConsentData() &&
                p.forEach(function (e) {
                  e.uspConsent = X.getConsentData();
                }),
              p
            );
          },
          "makeBidRequests"
        )),
          (L.callBids = function (e, n, t, i, o, a, c) {
            if (n.length) {
              var d =
                  ((y = n.reduce(
                    function (e, n) {
                      return (
                        e[Number(void 0 !== n.src && n.src === F.S2S.SRC)].push(
                          n
                        ),
                        e
                      );
                    },
                    [[], []]
                  )),
                  2,
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })(y) ||
                    (function (e, n) {
                      var t =
                        null == e
                          ? null
                          : ("undefined" != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e["@@iterator"];
                      if (null != t) {
                        var r,
                          i,
                          o = [],
                          a = !0,
                          c = !1;
                        try {
                          for (
                            t = t.call(e);
                            !(a = (r = t.next()).done) &&
                            (o.push(r.value), 2 !== o.length);
                            a = !0
                          );
                        } catch (e) {
                          (c = !0), (i = e);
                        } finally {
                          try {
                            a || null == t.return || t.return();
                          } finally {
                            if (c) throw i;
                          }
                        }
                        return o;
                      }
                    })(y) ||
                    (function (e, n) {
                      if (e) {
                        if ("string" == typeof e) return x(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                          "Object" === t &&
                            e.constructor &&
                            (t = e.constructor.name),
                          "Map" === t || "Set" === t
                            ? Array.from(e)
                            : "Arguments" === t ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                            ? x(e, 2)
                            : void 0
                        );
                      }
                    })(y) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()),
                f = d[0],
                l = d[1],
                g = [];
              l.forEach(function (e) {
                for (var n = -1, t = 0; t < g.length; ++t)
                  if (e.uniquePbsTid === g[t].uniquePbsTid) {
                    n = t;
                    break;
                  }
                n <= -1 && g.push(e);
              });
              var p = 0,
                v = (0, r.generateUUID)();
              H.forEach(function (e) {
                if (e && g[p] && ee(e).has(g[p].bidderCode)) {
                  var n = (0, u.O)(
                      a,
                      o
                        ? { request: o.request.bind(null, "s2s"), done: o.done }
                        : void 0
                    ),
                    c = e.bidders,
                    s = K[e.adapter],
                    d = g[p].uniquePbsTid,
                    f = g[p].adUnitsS2SCopy,
                    y = l.filter(function (e) {
                      return e.uniquePbsTid === d;
                    });
                  if (s) {
                    var b = { tid: v, ad_units: f, s2sConfig: e };
                    if (b.ad_units.length) {
                      var m = y.map(function (e) {
                          return (e.start = (0, r.timestamp)()), i.bind(e);
                        }),
                        h = (0, r.getBidderCodes)(b.ad_units).filter(function (
                          e
                        ) {
                          return c.includes(e);
                        });
                      (0, r.logMessage)(
                        "CALLING S2S HEADER BIDDERS ==== ".concat(
                          h.length > 0
                            ? h.join(", ")
                            : 'No bidder specified, using "ortb2Imp" definition(s) only'
                        )
                      ),
                        y.forEach(function (e) {
                          z.emit(
                            F.EVENTS.BID_REQUESTED,
                            P(P({}, e), {}, { tid: v })
                          );
                        }),
                        s.callBids(
                          b,
                          l,
                          t,
                          function () {
                            return m.forEach(function (e) {
                              return e();
                            });
                          },
                          n
                        );
                    }
                  } else (0, r.logError)("missing " + e.adapter);
                  p++;
                }
              }),
                f.forEach(function (e) {
                  e.start = (0, r.timestamp)();
                  var n = K[e.bidderCode];
                  s.vc.runWithBidder(e.bidderCode, function () {
                    (0, r.logMessage)("CALLING BIDDER"),
                      z.emit(F.EVENTS.BID_REQUESTED, e);
                  });
                  var d = (0, u.O)(
                      a,
                      o
                        ? {
                            request: o.request.bind(null, e.bidderCode),
                            done: o.done,
                          }
                        : void 0
                    ),
                    f = i.bind(e);
                  try {
                    s.vc.runWithBidder(
                      e.bidderCode,
                      r.bind.call(
                        n.callBids,
                        n,
                        e,
                        t,
                        f,
                        d,
                        c,
                        s.vc.callbackWithBidder(e.bidderCode)
                      )
                    );
                  } catch (n) {
                    (0, r.logError)(
                      "".concat(
                        e.bidderCode,
                        " Bid Adapter emitted an uncaught error when parsing their bidRequest"
                      ),
                      { e: n, bidRequest: e }
                    ),
                      f();
                  }
                });
            } else
              (0, r.logWarn)(
                "callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
              );
            var y;
          }),
          (L.videoAdapters = []),
          (L.registerBidAdapter = function (e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = t.supportedMediaTypes,
              o = void 0 === i ? [] : i;
            e && n
              ? "function" == typeof e.callBids
                ? ((K[n] = e),
                  (0, f.q9)(o, "video") && L.videoAdapters.push(n),
                  (0, f.q9)(o, "native") && a.Sg.push(n))
                : (0, r.logError)(
                    "Bidder adaptor error for bidder code: " +
                      n +
                      "bidder must implement a callBids() function"
                  )
              : (0, r.logError)("bidAdapter or bidderCode not specified");
          }),
          (L.aliasBidAdapter = function (e, n, t) {
            if (void 0 === K[n]) {
              var i = K[e];
              if (void 0 === i) {
                var o = [];
                H.forEach(function (t) {
                  if (t.bidders && t.bidders.length) {
                    var r = t && t.bidders;
                    t && (0, f.q9)(r, n) ? (V[n] = e) : o.push(e);
                  }
                }),
                  o.forEach(function (e) {
                    (0,
                    r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                  });
              } else
                try {
                  var u,
                    s = (function (e) {
                      var n = [];
                      return (
                        (0, f.q9)(L.videoAdapters, e) && n.push("video"),
                        (0, f.q9)(a.Sg, e) && n.push("native"),
                        n
                      );
                    })(e);
                  if (i.constructor.prototype != Object.prototype)
                    (u = new i.constructor()).setBidderCode(n);
                  else {
                    var d = i.getSpec(),
                      l = t && t.gvlid,
                      g = t && t.skipPbsAliasing;
                    (u = (0, c.PZ)(
                      M({}, d, { code: n, gvlid: l, skipPbsAliasing: g })
                    )),
                      (V[n] = e);
                  }
                  L.registerBidAdapter(u, n, { supportedMediaTypes: s });
                } catch (n) {
                  (0, r.logError)(
                    e + " bidder does not currently support aliasing.",
                    "adapterManager.aliasBidAdapter"
                  );
                }
            } else
              (0, r.logMessage)(
                'alias name "' + n + '" has been already specified.'
              );
          }),
          (L.registerAnalyticsAdapter = function (e) {
            var n = e.adapter,
              t = e.code,
              i = e.gvlid;
            n && t
              ? "function" == typeof n.enableAnalytics
                ? ((n.code = t), (Z[t] = { adapter: n, gvlid: i }))
                : (0, r.logError)(
                    'Prebid Error: Analytics adaptor error for analytics "'.concat(
                      t,
                      '"\n        analytics adapter must implement an enableAnalytics() function'
                    )
                  )
              : (0, r.logError)(
                  "Prebid Error: analyticsAdapter or analyticsCode not specified"
                );
          }),
          (L.enableAnalytics = function (e) {
            (0, r.isArray)(e) || (e = [e]),
              (0, r._each)(e, function (e) {
                var n = Z[e.provider];
                n && n.adapter
                  ? n.adapter.enableAnalytics(e)
                  : (0, r.logError)(
                      "Prebid Error: no analytics adapter found in registry for '".concat(
                        e.provider,
                        "'."
                      )
                    );
              });
          }),
          (L.getBidAdapter = function (e) {
            return K[e];
          }),
          (L.getAnalyticsAdapter = function (e) {
            return Z[e];
          }),
          (L.callTimedOutBidders = function (e, n, t) {
            (n = n.map(function (n) {
              return (
                (n.params = (0, r.getUserConfiguredParams)(
                  e,
                  n.adUnitCode,
                  n.bidder
                )),
                (n.timeout = t),
                n
              );
            })),
              (n = (0, r.groupBy)(n, "bidder")),
              Object.keys(n).forEach(function (e) {
                te(e, "onTimeout", n[e]);
              });
          }),
          (L.callBidWonBidder = function (e, n, t) {
            (n.params = (0, r.getUserConfiguredParams)(
              t,
              n.adUnitCode,
              n.bidder
            )),
              l.f.incrementBidderWinsCounter(n.adUnitCode, n.bidder),
              te(e, "onBidWon", n);
          }),
          (L.callSetTargetingBidder = function (e, n) {
            te(e, "onSetTargeting", n);
          }),
          (L.callBidViewableBidder = function (e, n) {
            te(e, "onBidViewable", n);
          }),
          (L.callBidderError = function (e, n, t) {
            te(e, "onBidderError", { error: n, bidderRequest: t });
          });
        var re = L;
      },
      125: function (e, n, t) {
        "use strict";
        function r(e) {
          var n = e;
          return {
            callBids: function () {},
            setBidderCode: function (e) {
              n = e;
            },
            getBidderCode: function () {
              return n;
            },
          };
        }
        t.d(n, {
          Q1: function () {
            return R;
          },
          PZ: function () {
            return O;
          },
          dX: function () {
            return C;
          },
        });
        var i = t(602),
          o = t(962),
          a = t(477),
          c = t(112),
          u = t(17),
          s = t(929),
          d = t(644),
          f = t(319),
          l = t(879),
          g = t(755),
          p = t(853),
          v = t(265),
          y = t(3),
          b = t(494),
          m = t(849),
          h = t(766);
        function E(e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != t) {
                var r,
                  i,
                  o = [],
                  a = !0,
                  c = !1;
                try {
                  for (
                    t = t.call(e);
                    !(a = (r = t.next()).done) &&
                    (o.push(r.value), !n || o.length !== n);
                    a = !0
                  );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    a || null == t.return || t.return();
                  } finally {
                    if (c) throw i;
                  }
                }
                return o;
              }
            })(e, n) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return S(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? S(e, n)
                    : void 0
                );
              }
            })(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function S(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function A(e) {
          return (
            (A =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            A(e)
          );
        }
        function T() {
          return (
            (T =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            T.apply(this, arguments)
          );
        }
        var I = (0, m.eA)("bidderFactory"),
          w = ["cpm", "ttl", "creativeId", "netRevenue", "currency"];
        function C(e) {
          var n = Array.isArray(e.supportedMediaTypes)
            ? { supportedMediaTypes: e.supportedMediaTypes }
            : void 0;
          function t(e) {
            var t = O(e);
            i.ZP.registerBidAdapter(t, e.code, n);
          }
          t(e),
            Array.isArray(e.aliases) &&
              e.aliases.forEach(function (n) {
                var r,
                  o,
                  a = n;
                (0, p.isPlainObject)(n) &&
                  ((a = n.code), (r = n.gvlid), (o = n.skipPbsAliasing)),
                  (i.ZP.aliasRegistry[a] = e.code),
                  t(T({}, e, { code: a, gvlid: r, skipPbsAliasing: o }));
              });
        }
        function O(e) {
          return T(new r(e.code), {
            getSpec: function () {
              return Object.freeze(e);
            },
            registerSyncs: n,
            callBids: function (r, c, g, v, y, b) {
              if (Array.isArray(r.bids)) {
                var m = {},
                  E = [],
                  S = r.bids.filter(t);
                if (0 !== S.length) {
                  var A = {};
                  S.forEach(function (e) {
                    (A[e.bidId] = e),
                      e.adUnitCode || (e.adUnitCode = e.placementCode);
                  }),
                    B(e, S, r, v, b, {
                      onRequest: function (e) {
                        return f.emit(d.EVENTS.BEFORE_BIDDER_HTTP, r, e);
                      },
                      onResponse: function (n) {
                        y(e.code), E.push(n);
                      },
                      onError: function (n, t) {
                        y(e.code),
                          i.ZP.callBidderError(e.code, t, r),
                          f.emit(d.EVENTS.BIDDER_ERROR, {
                            error: t,
                            bidderRequest: r,
                          }),
                          (0, p.logError)(
                            "Server call for "
                              .concat(e.code, " failed: ")
                              .concat(n, " ")
                              .concat(t.status, ". Continuing without bids.")
                          );
                      },
                      onBid: function (n) {
                        var t = A[n.requestId];
                        if (t) {
                          (n.originalCpm = n.cpm),
                            (n.originalCurrency = n.currency),
                            (n.meta = n.meta || T({}, n[t.bidder]));
                          var r = T((0, a.m)(d.STATUS.GOOD, t), n);
                          !(function (e, n) {
                            (m[e] = !0),
                              (function (e, n) {
                                var t = (
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                      ? arguments[2]
                                      : {}
                                  ).index,
                                  r = void 0 === t ? h.K.index : t;
                                function i() {
                                  var e = Object.keys(n);
                                  return w.every(function (t) {
                                    return (
                                      (0, l.q9)(e, t) &&
                                      !(0, l.q9)([void 0, null], n[t])
                                    );
                                  });
                                }
                                function o(e) {
                                  return "Invalid bid from "
                                    .concat(n.bidderCode, ". Ignoring bid: ")
                                    .concat(e);
                                }
                                return e
                                  ? n
                                    ? i()
                                      ? "native" !== n.mediaType ||
                                        (0, u.r4)(n, { index: r })
                                        ? "video" !== n.mediaType ||
                                          (0, s.Dn)(n, { index: r })
                                          ? !(
                                              "banner" === n.mediaType &&
                                              !D(e, n, { index: r }) &&
                                              ((0, p.logError)(
                                                o(
                                                  "Banner bids require a width and height"
                                                )
                                              ),
                                              1)
                                            )
                                          : ((0, p.logError)(
                                              o(
                                                "Video bid does not have required vastUrl or renderer property"
                                              )
                                            ),
                                            !1)
                                        : ((0, p.logError)(
                                            o(
                                              "Native bid missing some required properties."
                                            )
                                          ),
                                          !1)
                                      : ((0, p.logError)(
                                          o(
                                            "Bidder ".concat(
                                              n.bidderCode,
                                              " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."
                                            )
                                          )
                                        ),
                                        !1)
                                    : ((0, p.logWarn)(
                                        "Some adapter tried to add an undefined bid for ".concat(
                                          e,
                                          "."
                                        )
                                      ),
                                      !1)
                                  : ((0, p.logWarn)(
                                      "No adUnitCode was supplied to addBidResponse."
                                    ),
                                    !1);
                              })(e, n) && c(e, n);
                          })(t.adUnitCode, r);
                        } else
                          (0, p.logWarn)(
                            "Bidder "
                              .concat(
                                e.code,
                                " made bid for unknown request ID: "
                              )
                              .concat(n.requestId, ". Ignoring.")
                          );
                      },
                      onCompletion: I,
                    });
                } else I();
              }
              function I() {
                g(),
                  o.vc.runWithBidder(e.code, function () {
                    f.emit(d.EVENTS.BIDDER_DONE, r),
                      n(E, r.gdprConsent, r.uspConsent);
                  });
              }
            },
          });
          function n(n, t, r) {
            U(e, n, t, r);
          }
          function t(n) {
            return (
              !!e.isBidRequestValid(n) ||
              ((0, p.logWarn)(
                "Invalid bid sent to bidder "
                  .concat(e.code, ": ")
                  .concat(JSON.stringify(n))
              ),
              !1)
            );
          }
        }
        var B = (0, b.z3)(
            "sync",
            function (e, n, t, r, i, o) {
              var a = o.onRequest,
                c = o.onResponse,
                u = o.onError,
                s = o.onBid,
                d = o.onCompletion,
                f = e.buildRequests(n, t);
              if (f && 0 !== f.length) {
                Array.isArray(f) || (f = [f]);
                var l = (0, p.delayExecution)(d, f.length);
                f.forEach(function (n) {
                  var t,
                    o = i(function (t, r) {
                      try {
                        t = JSON.parse(t);
                      } catch (e) {}
                      var i;
                      (t = {
                        body: t,
                        headers: { get: r.getResponseHeader.bind(r) },
                      }),
                        c(t);
                      try {
                        i = e.interpretResponse(t, n);
                      } catch (n) {
                        return (
                          (0, p.logError)(
                            "Bidder ".concat(
                              e.code,
                              " failed to interpret the server's response. Continuing without bids"
                            ),
                            null,
                            n
                          ),
                          void l()
                        );
                      }
                      i && ((0, p.isArray)(i) ? i.forEach(s) : s(i)), l();
                    }),
                    d = i(function (e, n) {
                      u(e, n), l();
                    });
                  switch ((a(n), n.method)) {
                    case "GET":
                      r(
                        ""
                          .concat(n.url)
                          .concat(
                            (t = n.data)
                              ? "?".concat(
                                  "object" === A(t)
                                    ? (0, p.parseQueryStringParameters)(t)
                                    : t
                                )
                              : ""
                          ),
                        { success: o, error: d },
                        void 0,
                        T({ method: "GET", withCredentials: !0 }, n.options)
                      );
                      break;
                    case "POST":
                      r(
                        n.url,
                        { success: o, error: d },
                        "string" == typeof n.data
                          ? n.data
                          : JSON.stringify(n.data),
                        T(
                          {
                            method: "POST",
                            contentType: "text/plain",
                            withCredentials: !0,
                          },
                          n.options
                        )
                      );
                      break;
                    default:
                      (0, p.logWarn)(
                        "Skipping invalid request from "
                          .concat(e.code, ". Request type ")
                          .concat(n.type, " must be GET or POST")
                      ),
                        l();
                  }
                });
              } else d();
            },
            "processBidderRequests"
          ),
          U = (0, b.z3)(
            "async",
            function (e, n, t, r) {
              var a = o.vc.getConfig("userSync.aliasSyncEnabled");
              if (e.getUserSyncs && (a || !i.ZP.aliasRegistry[e.code])) {
                var u = o.vc.getConfig("userSync.filterSettings"),
                  s = e.getUserSyncs(
                    {
                      iframeEnabled: !(!u || (!u.iframe && !u.all)),
                      pixelEnabled: !(!u || (!u.image && !u.all)),
                    },
                    n,
                    t,
                    r
                  );
                s &&
                  (Array.isArray(s) || (s = [s]),
                  s.forEach(function (n) {
                    c.k_.registerSync(n.type, e.code, n.url);
                  }));
              }
            },
            "registerSyncs"
          );
        function R(e, n) {
          var t = i.ZP.getBidAdapter(e);
          if (t.getSpec().getMappingFileInfo) {
            var r = t.getSpec().getMappingFileInfo(),
              o = r.localStorageKey ? r.localStorageKey : t.getBidderCode(),
              a = I.getDataFromLocalStorage(o);
            if (a) {
              try {
                a = JSON.parse(a);
              } catch (n) {
                (0, p.logError)(
                  "Failed to parse ".concat(
                    e,
                    " mapping data stored in local storage"
                  )
                );
              }
              return a.mapping[n] ? a.mapping[n] : null;
            }
          }
        }
        function D(e, n) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = t.index,
            i = void 0 === r ? h.K.index : r;
          if (
            (n.width || 0 === parseInt(n.width, 10)) &&
            (n.height || 0 === parseInt(n.height, 10))
          )
            return (
              (n.width = parseInt(n.width, 10)),
              (n.height = parseInt(n.height, 10)),
              !0
            );
          var o = i.getBidRequest(n),
            a = i.getMediaTypes(n),
            c = (o && o.sizes) || (a && a.banner && a.banner.sizes),
            u = (0, p.parseSizesInput)(c);
          if (1 === u.length) {
            var s = u[0].split("x"),
              d = E(s, 2),
              f = d[0],
              l = d[1];
            return (
              (n.width = parseInt(f, 10)), (n.height = parseInt(l, 10)), !0
            );
          }
          return !1;
        }
        (0, b.v5)("checkAdUnitSetup").before(function (e, n) {
          if (!o.vc.getConfig("adpod.brandCategoryExclusion"))
            return e.call(this, n);
          n
            .filter(function (e) {
              return (0, v.Z)(e, "mediaTypes.video.context") === y.Oh;
            })
            .map(function (e) {
              return e.bids.map(function (e) {
                return e.bidder;
              });
            })
            .reduce(p.flatten, [])
            .filter(p.uniques)
            .forEach(function (e) {
              var n = i.ZP.getBidAdapter(e);
              if (n.getSpec().getMappingFileInfo) {
                var t = n.getSpec().getMappingFileInfo(),
                  r = t.refreshInDays ? t.refreshInDays : 1,
                  o = t.localStorageKey ? t.localStorageKey : n.getSpec().code,
                  a = I.getDataFromLocalStorage(o);
                try {
                  (!(a = a ? JSON.parse(a) : void 0) ||
                    (0, p.timestamp)() >
                      a.lastUpdated + 24 * r * 60 * 60 * 1e3) &&
                    (0, g.h)(t.url, {
                      success: function (n) {
                        try {
                          n = JSON.parse(n);
                          var t = {
                            lastUpdated: (0, p.timestamp)(),
                            mapping: n.mapping,
                          };
                          I.setDataInLocalStorage(o, JSON.stringify(t));
                        } catch (n) {
                          (0, p.logError)(
                            "Failed to parse ".concat(
                              e,
                              " bidder translation mapping file"
                            )
                          );
                        }
                      },
                      error: function () {
                        (0, p.logError)(
                          "Failed to load ".concat(
                            e,
                            " bidder translation file"
                          )
                        );
                      },
                    });
                } catch (n) {
                  (0, p.logError)(
                    "Failed to parse ".concat(
                      e,
                      " bidder translation mapping file"
                    )
                  );
                }
              }
            }),
            e.call(this, n);
        });
      },
      996: function (e, n, t) {
        "use strict";
        t.d(n, {
          B: function () {
            return c;
          },
        });
        var r = t(879),
          i = t(853),
          o = {},
          a = [
            "adloox",
            "criteo",
            "outstream",
            "adagio",
            "browsi",
            "brandmetrics",
            "justtag",
          ];
        function c(e, n, t) {
          if (n && e) {
            if ((0, r.q9)(a, n))
              return o[e]
                ? (t &&
                    "function" == typeof t &&
                    (o[e].loaded ? t() : o[e].callbacks.push(t)),
                  o[e].tag)
                : ((o[e] = { loaded: !1, tag: null, callbacks: [] }),
                  t && "function" == typeof t && o[e].callbacks.push(t),
                  (0, i.logWarn)(
                    "module ".concat(n, " is loading external JavaScript")
                  ),
                  (function (n, t) {
                    var r = document.createElement("script");
                    return (
                      (r.type = "text/javascript"),
                      (r.async = !0),
                      (o[e].tag = r),
                      r.readyState
                        ? (r.onreadystatechange = function () {
                            ("loaded" !== r.readyState &&
                              "complete" !== r.readyState) ||
                              ((r.onreadystatechange = null), t());
                          })
                        : (r.onload = function () {
                            t();
                          }),
                      (r.src = n),
                      (0, i.insertElement)(r),
                      r
                    );
                  })(e, function () {
                    o[e].loaded = !0;
                    try {
                      for (var n = 0; n < o[e].callbacks.length; n++)
                        o[e].callbacks[n]();
                    } catch (e) {
                      (0,
                      i.logError)("Error executing callback", "adloader.js:loadExternalScript", e);
                    }
                  }));
            (0, i.logError)(
              "".concat(n, " not whitelisted for loading external JavaScript")
            );
          } else
            (0, i.logError)(
              "cannot load external script without url and moduleCode"
            );
        }
      },
      755: function (e, n, t) {
        "use strict";
        t.d(n, {
          O: function () {
            return u;
          },
          h: function () {
            return c;
          },
        });
        var r = t(962),
          i = t(853);
        function o() {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            o.apply(this, arguments)
          );
        }
        function a(e) {
          return (
            (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            a(e)
          );
        }
        var c = u();
        function u() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 3e3,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.request,
            c = n.done;
          return function (n, u, s) {
            var d =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            try {
              var f,
                l = d.method || (s ? "POST" : "GET"),
                g = document.createElement("a");
              g.href = n;
              var p =
                "object" === a(u) && null !== u
                  ? u
                  : {
                      success: function () {
                        (0, i.logMessage)("xhr success");
                      },
                      error: function (e) {
                        (0, i.logError)("xhr error", null, e);
                      },
                    };
              if (
                ("function" == typeof u && (p.success = u),
                ((f = new window.XMLHttpRequest()).onreadystatechange =
                  function () {
                    if (4 === f.readyState) {
                      "function" == typeof c && c(g.origin);
                      var e = f.status;
                      (e >= 200 && e < 300) || 304 === e
                        ? p.success(f.responseText, f)
                        : p.error(f.statusText, f);
                    }
                  }),
                r.vc.getConfig("disableAjaxTimeout") ||
                  (f.ontimeout = function () {
                    (0, i.logError)("  xhr timeout after ", f.timeout, "ms");
                  }),
                "GET" === l && s)
              ) {
                var v = (0, i.parseUrl)(n, d);
                o(v.search, s), (n = (0, i.buildUrl)(v));
              }
              f.open(l, n, !0),
                r.vc.getConfig("disableAjaxTimeout") || (f.timeout = e),
                d.withCredentials && (f.withCredentials = !0),
                (0, i._each)(d.customHeaders, function (e, n) {
                  f.setRequestHeader(n, e);
                }),
                d.preflight &&
                  f.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                f.setRequestHeader(
                  "Content-Type",
                  d.contentType || "text/plain"
                ),
                "function" == typeof t && t(g.origin),
                "POST" === l && s ? f.send(s) : f.send();
            } catch (e) {
              (0, i.logError)("xhr construction", e),
                "object" === a(u) && null !== u && u.error(e);
            }
          };
        }
      },
      892: function (e, n, t) {
        "use strict";
        t.d(n, {
          D$: function () {
            return N;
          },
          LX: function () {
            return W;
          },
          RH: function () {
            return q;
          },
          Yt: function () {
            return U;
          },
          Yw: function () {
            return T;
          },
          dg: function () {
            return M;
          },
          e0: function () {
            return R;
          },
          lU: function () {
            return k;
          },
          mv: function () {
            return I;
          },
          sq: function () {
            return _;
          },
          vO: function () {
            return B;
          },
        });
        var r = t(853),
          i = t(265),
          o = t(553),
          a = t(17),
          c = t(905),
          u = t(877),
          s = t(962),
          d = t(112),
          f = t(494),
          l = t(879),
          g = t(929),
          p = t(3),
          v = t(766),
          y = t(624);
        function b(e) {
          return (
            (b =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            b(e)
          );
        }
        function m() {
          return (
            (m =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            m.apply(this, arguments)
          );
        }
        var h = d.k_.syncUsers,
          E = t(602).ZP,
          S = t(319),
          A = t(644),
          T = "inProgress",
          I = "completed";
        S.on(A.EVENTS.BID_ADJUSTMENT, function (e) {
          !(function (e) {
            var n = e.bidderCode,
              t = e.cpm,
              i = y.S.get(n || null, "bidCpmAdjustment");
            if (i && "function" == typeof i)
              try {
                t = i(e.cpm, m({}, e));
              } catch (e) {
                (0, r.logError)(
                  "Error during bid adjustment",
                  "bidmanager.js",
                  e
                );
              }
            t >= 0 && (e.cpm = t);
          })(e);
        });
        var w = {},
          C = {},
          O = [];
        function B(e) {
          var n,
            t,
            i,
            o,
            a = e.adUnits,
            c = e.adUnitCodes,
            u = e.callback,
            d = e.cbTimeout,
            f = e.labels,
            g = e.auctionId,
            p = a,
            y = f,
            b = c,
            m = [],
            B = [],
            _ = [],
            N = g || (0, r.generateUUID)(),
            x = u,
            q = d,
            M = [],
            G = new Set();
          function W() {
            return {
              auctionId: N,
              timestamp: n,
              auctionEnd: t,
              auctionStatus: i,
              adUnits: p,
              adUnitCodes: b,
              labels: y,
              bidderRequests: m,
              noBids: _,
              bidsReceived: B,
              winningBids: M,
              timeout: q,
            };
          }
          function F(e, n) {
            if ((n && clearTimeout(o), void 0 === t)) {
              var c = [];
              e &&
                ((0, r.logMessage)("Auction ".concat(N, " timedOut")),
                (u = G),
                (c = m
                  .map(function (e) {
                    return (e.bids || []).filter(function (e) {
                      return !u.has(e.bidder);
                    });
                  })
                  .reduce(r.flatten, [])
                  .map(function (e) {
                    return {
                      bidId: e.bidId,
                      bidder: e.bidder,
                      adUnitCode: e.adUnitCode,
                      auctionId: e.auctionId,
                    };
                  })).length && S.emit(A.EVENTS.BID_TIMEOUT, c)),
                (i = I),
                (t = Date.now()),
                S.emit(A.EVENTS.AUCTION_END, W()),
                D(p, function () {
                  try {
                    if (null != x) {
                      var n = b,
                        t = B.filter(
                          r.bind.call(r.adUnitsFilter, this, n)
                        ).reduce(z, {});
                      x.apply(ihowpbjs, [t, e, N]), (x = null);
                    }
                  } catch (e) {
                    (0, r.logError)("Error executing bidsBackHandler", null, e);
                  } finally {
                    c.length && E.callTimedOutBidders(a, c, q);
                    var i = s.vc.getConfig("userSync") || {};
                    i.enableOverride || h(i.syncDelay);
                  }
                });
            }
            var u;
          }
          function L() {
            s.vc.resetBidder(),
              (0, r.logInfo)(
                "Bids Received for Auction with id: ".concat(N),
                B
              ),
              (i = I),
              F(!1, !0);
          }
          function K(e) {
            G.add(e);
          }
          function V(e) {
            var n = this;
            e.forEach(function (e) {
              var n;
              (n = e), (m = m.concat(n));
            });
            var t = {},
              a = {
                bidRequests: e,
                run: function () {
                  var a, d;
                  (a = F.bind(null, !0)),
                    (d = setTimeout(a, q)),
                    (o = d),
                    (i = T),
                    S.emit(A.EVENTS.AUCTION_INIT, W());
                  var f = (function (e, n) {
                    var t = (
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {}
                      ).index,
                      i = void 0 === t ? v.K.index : t,
                      o = 0,
                      a = !1,
                      c = new Set(),
                      u = {},
                      d = {};
                    function f(e, n) {
                      null == d[e] && (d[e] = Promise.resolve()),
                        (d[e] = d[e].then(function () {
                          return Promise.resolve(n).catch(function () {});
                        }));
                    }
                    function g(e, t) {
                      var r = e.timeout;
                      (null == r || r > n.getTimeout()) && (r = n.getTimeout());
                      var i = n.getAuctionStart() + r - Date.now(),
                        o = d[e.bidderRequestId],
                        a = d[""];
                      (null != o || null != a) && i > 0
                        ? Promise.race([
                            new Promise(function (e) {
                              return setTimeout(e, i);
                            }),
                            Promise.resolve(a).then(function () {
                              return o;
                            }),
                          ]).then(t)
                        : t();
                    }
                    function p() {
                      o--, a && 0 === o && e();
                    }
                    function y(e, t) {
                      (u[t.requestId] = !0), o++;
                      var r = P({
                        adUnitCode: e,
                        bid: t,
                        auctionId: n.getAuctionId(),
                      });
                      "video" === r.mediaType ? j(n, r, p) : (k(n, r), p());
                    }
                    function b() {
                      var t = n.getBidRequests(),
                        i = s.vc.getConfig("auctionOptions");
                      if ((c.add(this), i && !(0, r.isEmpty)(i))) {
                        var d = i.secondaryBidders;
                        d &&
                          !t.every(function (e) {
                            return (0, l.q9)(d, e.bidderCode);
                          }) &&
                          (t = t.filter(function (e) {
                            return !(0, l.q9)(d, e.bidderCode);
                          }));
                      }
                      (a = t.every(function (e) {
                        return c.has(e);
                      })),
                        this.bids.forEach(function (e) {
                          u[e.bidId] ||
                            (n.addNoBid(e), S.emit(A.EVENTS.NO_BID, e));
                        }),
                        a && 0 === o && e();
                    }
                    return {
                      addBidResponse: function (e, n) {
                        var t = i.getBidderRequest(n);
                        f(
                          (t && t.bidderRequestId) || "",
                          U.call({ dispatch: y }, e, n)
                        );
                      },
                      adapterDone: function () {
                        g(this, b.bind(this));
                      },
                    };
                  })(L, n);
                  E.callBids(
                    p,
                    e,
                    f.addBidResponse,
                    f.adapterDone,
                    {
                      request: function (e, n) {
                        u(w, n),
                          u(t, e),
                          C[e] || (C[e] = { SRA: !0, origin: n }),
                          t[e] > 1 && (C[e].SRA = !1);
                      },
                      done: function (e) {
                        w[e]--, O[0] && c(O[0]) && O.shift();
                      },
                    },
                    q,
                    K
                  );
                },
              };
            function c(e) {
              var n = !0,
                t = s.vc.getConfig("maxRequestsPerOrigin") || 4;
              return (
                e.bidRequests.some(function (e) {
                  var r = 1,
                    i =
                      void 0 !== e.src && e.src === A.S2S.SRC
                        ? "s2s"
                        : e.bidderCode;
                  return (
                    C[i] &&
                      (!1 === C[i].SRA && (r = Math.min(e.bids.length, t)),
                      w[C[i].origin] + r > t && (n = !1)),
                    !n
                  );
                }),
                n && e.run(),
                n
              );
            }
            function u(e, n) {
              void 0 === e[n] ? (e[n] = 1) : e[n]++;
            }
            c(a) ||
              ((0, r.logWarn)(
                "queueing auction due to limited endpoint capacity"
              ),
              O.push(a));
          }
          return {
            addBidReceived: function (e) {
              B = B.concat(e);
            },
            addNoBid: function (e) {
              _ = _.concat(e);
            },
            executeCallback: F,
            callBids: function () {
              (i = "started"), (n = Date.now());
              var e = E.makeBidRequests(p, n, N, q, y);
              (0, r.logInfo)(
                "Bids Requested for Auction with id: ".concat(N),
                e
              ),
                e.length < 1
                  ? ((0, r.logWarn)(
                      "No valid bid requests returned for auction"
                    ),
                    L())
                  : R.call({ dispatch: V, context: this }, e);
            },
            addWinningBid: function (e) {
              (M = M.concat(e)), E.callBidWonBidder(e.bidder, e, a);
            },
            setBidTargeting: function (e) {
              E.callSetTargetingBidder(e.bidder, e);
            },
            getWinningBids: function () {
              return M;
            },
            getAuctionStart: function () {
              return n;
            },
            getTimeout: function () {
              return q;
            },
            getAuctionId: function () {
              return N;
            },
            getAuctionStatus: function () {
              return i;
            },
            getAdUnits: function () {
              return p;
            },
            getAdUnitCodes: function () {
              return b;
            },
            getBidRequests: function () {
              return m;
            },
            getBidsReceived: function () {
              return B;
            },
            getNoBids: function () {
              return _;
            },
          };
        }
        var U = (0, f.z3)(
            "sync",
            function (e, n) {
              this.dispatch.call(null, e, n);
            },
            "addBidResponse"
          ),
          R = (0, f.z3)(
            "sync",
            function (e) {
              this.dispatch.call(this.context, e);
            },
            "addBidderRequests"
          ),
          D = (0, f.z3)(
            "async",
            function (e, n) {
              n && n();
            },
            "bidsBackCallback"
          );
        function _(e, n) {
          n.timeToRespond > e.getTimeout() + s.vc.getConfig("timeoutBuffer") &&
            e.executeCallback(!0);
        }
        function k(e, n) {
          var t, r, i;
          (t = n),
            (i =
              !0 === y.S.get(t.bidderCode, "allowZeroCpmBids")
                ? t.cpm >= 0
                : t.cpm > 0),
            t.bidderCode &&
              (i || t.dealId) &&
              (r = (function (e, n) {
                var t = (
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {}
                  ).index,
                  r = void 0 === t ? v.K.index : t;
                if (!n) return {};
                var i = r.getBidRequest(n),
                  o = {},
                  c = W(n.mediaType, e);
                return (
                  F(o, c, n, i),
                  e &&
                    y.S.getOwn(e, A.JSON_MAPPING.ADSERVER_TARGETING) &&
                    (F(o, y.S.ownSettingsFor(e), n, i),
                    (n.sendStandardTargeting = y.S.get(
                      e,
                      "sendStandardTargeting"
                    ))),
                  n.native && (o = m({}, o, (0, a.Ur)(n))),
                  o
                );
              })(t.bidderCode, t)),
            (t.adserverTargeting = m(t.adserverTargeting || {}, r)),
            S.emit(A.EVENTS.BID_RESPONSE, n),
            e.addBidReceived(n),
            _(e, n);
        }
        function j(e, n, t) {
          var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = o.index,
            c = void 0 === a ? v.K.index : a,
            u = !0,
            d = (0, i.Z)(
              c.getMediaTypes({
                requestId: n.originalRequestId || n.requestId,
                transactionId: n.transactionId,
              }),
              "video"
            ),
            f = d && (0, i.Z)(d, "context");
          s.vc.getConfig("cache.url") &&
            f !== g.gZ &&
            (!n.videoCacheKey || s.vc.getConfig("cache.ignoreBidderCacheKey")
              ? ((u = !1), N(e, n, t, d))
              : n.vastUrl ||
                ((0, r.logError)(
                  "videoCacheKey specified but not required vastUrl for video bid"
                ),
                (u = !1))),
            u && (k(e, n), t());
        }
        var N = (0, f.z3)(
          "async",
          function (e, n, t, i) {
            (0, c.h)([n], function (i, o) {
              i
                ? ((0, r.logWarn)(
                    "Failed to save to the video cache: ".concat(
                      i,
                      ". Video bid must be discarded."
                    )
                  ),
                  _(e, n))
                : "" === o[0].uuid
                ? ((0, r.logWarn)(
                    "Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."
                  ),
                  _(e, n))
                : ((n.videoCacheKey = o[0].uuid),
                  n.vastUrl || (n.vastUrl = (0, c.z)(n.videoCacheKey)),
                  k(e, n),
                  t());
            });
          },
          "callPrebidCache"
        );
        function P(e) {
          var n = e.adUnitCode,
            t = e.bid,
            i = e.auctionId,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            c = a.index,
            d = void 0 === c ? v.K.index : c,
            f = d.getBidderRequest(t),
            l = (f && f.start) || t.requestTimestamp,
            g = m({}, t, {
              auctionId: i,
              responseTimestamp: (0, r.timestamp)(),
              requestTimestamp: l,
              cpm: parseFloat(t.cpm) || 0,
              bidder: t.bidderCode,
              adUnitCode: n,
            });
          (g.timeToRespond = g.responseTimestamp - g.requestTimestamp),
            S.emit(A.EVENTS.BID_ADJUSTMENT, g);
          var p = d.getAdUnit(g).renderer,
            y = g.mediaType,
            h = d.getMediaTypes(g),
            E = h && h[y],
            T = E && E.renderer,
            I = null;
          T && T.url && T.render && (!0 !== T.backupOnly || !t.renderer)
            ? (I = T)
            : p &&
              p.url &&
              p.render &&
              (!0 !== p.backupOnly || !t.renderer) &&
              (I = p),
            I &&
              ((g.renderer = u.Th.install({ url: I.url })),
              g.renderer.setRender(I.render));
          var w = x(
              t.mediaType,
              h,
              s.vc.getConfig("mediaTypePriceGranularity")
            ),
            C = (0, o.D)(
              g.cpm,
              "object" === b(w) ? w : s.vc.getConfig("customPriceBucket"),
              s.vc.getConfig("currency.granularityMultiplier")
            );
          return (
            (g.pbLg = C.low),
            (g.pbMg = C.med),
            (g.pbHg = C.high),
            (g.pbAg = C.auto),
            (g.pbDg = C.dense),
            (g.pbCg = C.custom),
            g
          );
        }
        function x(e, n, t) {
          if (e && t) {
            if (e === p.pX) {
              var r = (0, i.Z)(n, "".concat(p.pX, ".context"), "instream");
              if (t["".concat(p.pX, "-").concat(r)])
                return t["".concat(p.pX, "-").concat(r)];
            }
            return t[e];
          }
        }
        var q = function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.index,
              r = void 0 === t ? v.K.index : t,
              i = x(
                e.mediaType,
                r.getMediaTypes(e),
                s.vc.getConfig("mediaTypePriceGranularity")
              ),
              o =
                "string" == typeof e.mediaType && i
                  ? "string" == typeof i
                    ? i
                    : "custom"
                  : s.vc.getConfig("priceGranularity");
            return o;
          },
          M = function (e) {
            return function (n) {
              var t = e || q(n);
              return t === A.GRANULARITY_OPTIONS.AUTO
                ? n.pbAg
                : t === A.GRANULARITY_OPTIONS.DENSE
                ? n.pbDg
                : t === A.GRANULARITY_OPTIONS.LOW
                ? n.pbLg
                : t === A.GRANULARITY_OPTIONS.MEDIUM
                ? n.pbMg
                : t === A.GRANULARITY_OPTIONS.HIGH
                ? n.pbHg
                : t === A.GRANULARITY_OPTIONS.CUSTOM
                ? n.pbCg
                : void 0;
            };
          };
        function G(e, n) {
          return {
            key: e,
            val:
              "function" == typeof n
                ? function (e, t) {
                    return n(e, t);
                  }
                : function (e) {
                    return (0, r.getValue)(e, n);
                  },
          };
        }
        function W(e, n) {
          var t = A.TARGETING_KEYS,
            o = m({}, y.S.settingsFor(null));
          if (
            (o[A.JSON_MAPPING.ADSERVER_TARGETING] ||
              (o[A.JSON_MAPPING.ADSERVER_TARGETING] = (function () {
                var e = A.TARGETING_KEYS;
                return [
                  G(e.BIDDER, "bidderCode"),
                  G(e.AD_ID, "adId"),
                  G(e.PRICE_BUCKET, M()),
                  G(e.SIZE, "size"),
                  G(e.DEAL, "dealId"),
                  G(e.SOURCE, "source"),
                  G(e.FORMAT, "mediaType"),
                  G(e.ADOMAIN, function (e) {
                    return e.meta &&
                      e.meta.advertiserDomains &&
                      e.meta.advertiserDomains.length > 0
                      ? e.meta.advertiserDomains[0]
                      : "";
                  }),
                ];
              })()),
            "video" === e)
          ) {
            var a = o[A.JSON_MAPPING.ADSERVER_TARGETING].slice();
            if (
              ((o[A.JSON_MAPPING.ADSERVER_TARGETING] = a),
              [t.UUID, t.CACHE_ID].forEach(function (e) {
                void 0 ===
                  (0, l.sE)(a, function (n) {
                    return n.key === e;
                  }) && a.push(G(e, "videoCacheKey"));
              }),
              s.vc.getConfig("cache.url") &&
                (!n || !1 !== y.S.get(n, "sendStandardTargeting")))
            ) {
              var c = (0, r.parseUrl)(s.vc.getConfig("cache.url"));
              void 0 ===
                (0, l.sE)(a, function (e) {
                  return e.key === t.CACHE_HOST;
                }) &&
                a.push(
                  G(t.CACHE_HOST, function (e) {
                    return (0, i.Z)(
                      e,
                      "adserverTargeting.".concat(t.CACHE_HOST)
                    )
                      ? e.adserverTargeting[t.CACHE_HOST]
                      : c.hostname;
                  })
                );
            }
          }
          return o;
        }
        function F(e, n, t, i) {
          var o = n[A.JSON_MAPPING.ADSERVER_TARGETING];
          return (
            (t.size = t.getSize()),
            (0, r._each)(o, function (o) {
              var a = o.key,
                c = o.val;
              if (
                (e[a] &&
                  (0, r.logWarn)("The key: " + a + " is being overwritten"),
                (0, r.isFn)(c))
              )
                try {
                  c = c(t, i);
                } catch (e) {
                  (0, r.logError)("bidmanager", "ERROR", e);
                }
              ((void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) &&
                a !== A.TARGETING_KEYS.DEAL) ||
              (!(0, r.isEmptyStr)(c) && null != c)
                ? (e[a] = c)
                : (0, r.logInfo)(
                    "suppressing empty key '" + a + "' from adserver targeting"
                  );
            }),
            e
          );
        }
        function z(e, n) {
          return (
            e[n.adUnitCode] || (e[n.adUnitCode] = { bids: [] }),
            e[n.adUnitCode].bids.push(n),
            e
          );
        }
      },
      766: function (e, n, t) {
        "use strict";
        t.d(n, {
          K: function () {
            return s;
          },
        });
        var r = t(853),
          i = t(892),
          o = t(879);
        function a() {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            a.apply(this, arguments)
          );
        }
        function c(e) {
          a(this, {
            getAuction: function (n) {
              var t = n.auctionId;
              if (null != t)
                return e().find(function (e) {
                  return e.getAuctionId() === t;
                });
            },
            getAdUnit: function (n) {
              var t = n.transactionId;
              if (null != t)
                return e()
                  .flatMap(function (e) {
                    return e.getAdUnits();
                  })
                  .find(function (e) {
                    return e.transactionId === t;
                  });
            },
            getMediaTypes: function (e) {
              var n = e.transactionId,
                t = e.requestId;
              if (null != t) {
                var r = this.getBidRequest({ requestId: t });
                if (null != r && (null == n || r.transactionId === n))
                  return r.mediaTypes;
              } else if (null != n) {
                var i = this.getAdUnit({ transactionId: n });
                if (null != i) return i.mediaTypes;
              }
            },
            getBidderRequest: function (n) {
              var t = n.requestId,
                r = n.bidderRequestId;
              if (null != t || null != r) {
                var i = e().flatMap(function (e) {
                  return e.getBidRequests();
                });
                return (
                  null != r &&
                    (i = i.filter(function (e) {
                      return e.bidderRequestId === r;
                    })),
                  null == t
                    ? i[0]
                    : i.find(function (e) {
                        return (
                          e.bids &&
                          null !=
                            e.bids.find(function (e) {
                              return e.bidId === t;
                            })
                        );
                      })
                );
              }
            },
            getBidRequest: function (n) {
              var t = n.requestId;
              if (null != t)
                return e()
                  .flatMap(function (e) {
                    return e.getBidRequests();
                  })
                  .flatMap(function (e) {
                    return e.bids;
                  })
                  .find(function (e) {
                    return e && e.bidId === t;
                  });
            },
          });
        }
        var u = t(644),
          s = (function () {
            var e = [],
              n = {
                addWinningBid: function (n) {
                  var t = (0, o.sE)(e, function (e) {
                    return e.getAuctionId() === n.auctionId;
                  });
                  t
                    ? ((n.status = u.BID_STATUS.RENDERED), t.addWinningBid(n))
                    : (0, r.logWarn)(
                        "Auction not found when adding winning bid"
                      );
                },
                getAllWinningBids: function () {
                  return e
                    .map(function (e) {
                      return e.getWinningBids();
                    })
                    .reduce(r.flatten, []);
                },
                getBidsRequested: function () {
                  return e
                    .map(function (e) {
                      return e.getBidRequests();
                    })
                    .reduce(r.flatten, []);
                },
                getNoBids: function () {
                  return e
                    .map(function (e) {
                      return e.getNoBids();
                    })
                    .reduce(r.flatten, []);
                },
                getBidsReceived: function () {
                  return e
                    .map(function (e) {
                      if (e.getAuctionStatus() === i.mv)
                        return e.getBidsReceived();
                    })
                    .reduce(r.flatten, [])
                    .filter(function (e) {
                      return e;
                    });
                },
                getAllBidsForAdUnitCode: function (n) {
                  return e
                    .map(function (e) {
                      return e.getBidsReceived();
                    })
                    .reduce(r.flatten, [])
                    .filter(function (e) {
                      return e && e.adUnitCode === n;
                    });
                },
                getAdUnits: function () {
                  return e
                    .map(function (e) {
                      return e.getAdUnits();
                    })
                    .reduce(r.flatten, []);
                },
                getAdUnitCodes: function () {
                  return e
                    .map(function (e) {
                      return e.getAdUnitCodes();
                    })
                    .reduce(r.flatten, [])
                    .filter(r.uniques);
                },
                createAuction: function (n) {
                  var t = n.adUnits,
                    r = n.adUnitCodes,
                    o = n.callback,
                    a = n.cbTimeout,
                    c = n.labels,
                    u = n.auctionId,
                    s = (0, i.vO)({
                      adUnits: t,
                      adUnitCodes: r,
                      callback: o,
                      cbTimeout: a,
                      labels: c,
                      auctionId: u,
                    });
                  return (
                    (function (n) {
                      e.push(n);
                    })(s),
                    s
                  );
                },
                findBidByAdId: function (n) {
                  return (0, o.sE)(
                    e
                      .map(function (e) {
                        return e.getBidsReceived();
                      })
                      .reduce(r.flatten, []),
                    function (e) {
                      return e.adId === n;
                    }
                  );
                },
                getStandardBidderAdServerTargeting: function () {
                  return (0, i.LX)()[u.JSON_MAPPING.ADSERVER_TARGETING];
                },
                setStatusForBids: function (t, r) {
                  var i = n.findBidByAdId(t);
                  if (
                    (i && (i.status = r),
                    i && r === u.BID_STATUS.BID_TARGETING_SET)
                  ) {
                    var a = (0, o.sE)(e, function (e) {
                      return e.getAuctionId() === i.auctionId;
                    });
                    a && a.setBidTargeting(i);
                  }
                },
                getLastAuctionId: function () {
                  return e.length && e[e.length - 1].getAuctionId();
                },
                clearAllAuctions: function () {
                  e.length = 0;
                },
              };
            return (
              (n.index = new c(function () {
                return e;
              })),
              n
            );
          })();
      },
      624: function (e, n, t) {
        "use strict";
        t.d(n, {
          S: function () {
            return d;
          },
        });
        var r = t(265),
          i = t(853),
          o = t(528);
        function a(e, n, t) {
          if (!n.has(e))
            throw new TypeError(
              "attempted to get private field on non-instance"
            );
          return t;
        }
        var c = t(644),
          u = new WeakSet();
        function s(e) {
          return null == e ? this.defaultScope : e;
        }
        var d = new ((function () {
          function e(n, t) {
            var r;
            !(function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (function (e, n) {
                if (n.has(e))
                  throw new TypeError(
                    "Cannot initialize the same private elements twice on an object"
                  );
              })(this, (r = u)),
              r.add(this),
              (this.getSettings = n),
              (this.defaultScope = t);
          }
          var n, t;
          return (
            (n = e),
            (t = [
              {
                key: "get",
                value: function (e, n) {
                  var t = this.getOwn(e, n);
                  return void 0 === t && (t = this.getOwn(null, n)), t;
                },
              },
              {
                key: "getOwn",
                value: function (e, n) {
                  return (
                    (e = a(this, u, s).call(this, e)),
                    (0, r.Z)(this.getSettings(), "".concat(e, ".").concat(n))
                  );
                },
              },
              {
                key: "getScopes",
                value: function () {
                  var e = this;
                  return Object.keys(this.getSettings()).filter(function (n) {
                    return n !== e.defaultScope;
                  });
                },
              },
              {
                key: "settingsFor",
                value: function (e) {
                  return (0, i.mergeDeep)(
                    {},
                    this.ownSettingsFor(null),
                    this.ownSettingsFor(e)
                  );
                },
              },
              {
                key: "ownSettingsFor",
                value: function (e) {
                  return (
                    (e = a(this, u, s).call(this, e)),
                    this.getSettings()[e] || {}
                  );
                },
              },
            ]) &&
              (function (e, n) {
                for (var t = 0; t < n.length; t++) {
                  var r = n[t];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              })(n.prototype, t),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })())(function () {
          return (0, o.R)().bidderSettings || {};
        }, c.JSON_MAPPING.BD_SETTING_STANDARD);
      },
      477: function (e, n, t) {
        "use strict";
        t.d(n, {
          m: function () {
            return o;
          },
        });
        var r = t(853);
        function i(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.src,
            i = void 0 === t ? "client" : t,
            o = n.bidder,
            a = void 0 === o ? "" : o,
            c = n.bidId,
            u = n.transactionId,
            s = n.auctionId,
            d = i,
            f = e || 0;
          function l() {
            switch (f) {
              case 0:
                return "Pending";
              case 1:
                return "Bid available";
              case 2:
                return "Bid returned empty or error response";
              case 3:
                return "Bid timed out";
            }
          }
          (this.bidderCode = a),
            (this.width = 0),
            (this.height = 0),
            (this.statusMessage = l()),
            (this.adId = (0, r.getUniqueIdentifierStr)()),
            (this.requestId = c),
            (this.transactionId = u),
            (this.auctionId = s),
            (this.mediaType = "banner"),
            (this.source = d),
            (this.getStatusCode = function () {
              return f;
            }),
            (this.getSize = function () {
              return this.width + "x" + this.height;
            }),
            (this.getIdentifiers = function () {
              return {
                src: this.source,
                bidder: this.bidderCode,
                bidId: this.requestId,
                transactionId: this.transactionId,
                auctionId: this.auctionId,
              };
            });
        }
        function o(e, n) {
          return new i(e, n);
        }
      },
      962: function (e, n, t) {
        "use strict";
        t.d(n, {
          FD: function () {
            return v;
          },
          vc: function () {
            return h;
          },
        });
        var r = t(553),
          i = t(879),
          o = t(853),
          a = t(265),
          c = ["fpd"];
        function u(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n &&
              (r = r.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, r);
          }
          return t;
        }
        function s(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = t),
            e
          );
        }
        function d(e) {
          return (
            (d =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            d(e)
          );
        }
        function f() {
          return (
            (f =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            f.apply(this, arguments)
          );
        }
        var l = t(644),
          g = "TRUE" === (0, o.getParameterByName)(l.DEBUG_MODE).toUpperCase(),
          p = window.location.origin,
          v = "random",
          y = {};
        (y[v] = !0), (y.fixed = !0);
        var b = v,
          m = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom",
          },
          h = (function () {
            var e,
              n,
              t,
              l = [],
              v = null;
            function h() {
              e = {};
              var a = {
                _debug: g,
                get debug() {
                  return this._debug;
                },
                set debug(e) {
                  this._debug = e;
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                  return this._bidderTimeout;
                },
                set bidderTimeout(e) {
                  this._bidderTimeout = e;
                },
                _publisherDomain: p,
                get publisherDomain() {
                  return this._publisherDomain;
                },
                set publisherDomain(e) {
                  this._publisherDomain = e;
                },
                _priceGranularity: m.MEDIUM,
                set priceGranularity(e) {
                  u(e) &&
                    ("string" == typeof e
                      ? (this._priceGranularity = c(e) ? e : m.MEDIUM)
                      : (0, o.isPlainObject)(e) &&
                        ((this._customPriceBucket = e),
                        (this._priceGranularity = m.CUSTOM),
                        (0, o.logMessage)("Using custom price granularity")));
                },
                get priceGranularity() {
                  return this._priceGranularity;
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                  return this._customPriceBucket;
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                  return this._mediaTypePriceGranularity;
                },
                set mediaTypePriceGranularity(e) {
                  var n = this;
                  this._mediaTypePriceGranularity = Object.keys(e).reduce(
                    function (t, r) {
                      return (
                        u(e[r])
                          ? "string" == typeof e
                            ? (t[r] = c(e[r]) ? e[r] : n._priceGranularity)
                            : (0, o.isPlainObject)(e) &&
                              ((t[r] = e[r]),
                              (0, o.logMessage)(
                                "Using custom price granularity for ".concat(r)
                              ))
                          : (0, o.logWarn)(
                              "Invalid price granularity for media type: ".concat(
                                r
                              )
                            ),
                        t
                      );
                    },
                    {}
                  );
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                  return this._sendAllBids;
                },
                set enableSendAllBids(e) {
                  this._sendAllBids = e;
                },
                _useBidCache: !1,
                get useBidCache() {
                  return this._useBidCache;
                },
                set useBidCache(e) {
                  this._useBidCache = e;
                },
                _deviceAccess: !0,
                get deviceAccess() {
                  return this._deviceAccess;
                },
                set deviceAccess(e) {
                  this._deviceAccess = e;
                },
                _bidderSequence: b,
                get bidderSequence() {
                  return this._bidderSequence;
                },
                set bidderSequence(e) {
                  y[e]
                    ? (this._bidderSequence = e)
                    : (0, o.logWarn)(
                        "Invalid order: ".concat(
                          e,
                          ". Bidder Sequence was not set."
                        )
                      );
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                  return this._timeoutBuffer;
                },
                set timeoutBuffer(e) {
                  this._timeoutBuffer = e;
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                  return this._disableAjaxTimeout;
                },
                set disableAjaxTimeout(e) {
                  this._disableAjaxTimeout = e;
                },
                _maxNestedIframes: 10,
                get maxNestedIframes() {
                  return this._maxNestedIframes;
                },
                set maxNestedIframes(e) {
                  this._maxNestedIframes = e;
                },
                _auctionOptions: {},
                get auctionOptions() {
                  return this._auctionOptions;
                },
                set auctionOptions(e) {
                  (function (e) {
                    if (!(0, o.isPlainObject)(e))
                      return (
                        (0, o.logWarn)("Auction Options must be an object"), !1
                      );
                    for (var n = 0, t = Object.keys(e); n < t.length; n++) {
                      var r = t[n];
                      if (
                        "secondaryBidders" !== r &&
                        "suppressStaleRender" !== r
                      )
                        return (
                          (0, o.logWarn)(
                            "Auction Options given an incorrect param: ".concat(
                              r
                            )
                          ),
                          !1
                        );
                      if ("secondaryBidders" === r) {
                        if (!(0, o.isArray)(e[r]))
                          return (
                            (0, o.logWarn)(
                              "Auction Options ".concat(
                                r,
                                " must be of type Array"
                              )
                            ),
                            !1
                          );
                        if (!e[r].every(o.isStr))
                          return (
                            (0, o.logWarn)(
                              "Auction Options ".concat(
                                r,
                                " must be only string"
                              )
                            ),
                            !1
                          );
                      } else if (
                        "suppressStaleRender" === r &&
                        !(0, o.isBoolean)(e[r])
                      )
                        return (
                          (0, o.logWarn)(
                            "Auction Options ".concat(
                              r,
                              " must be of type boolean"
                            )
                          ),
                          !1
                        );
                    }
                    return !0;
                  })(e) && (this._auctionOptions = e);
                },
              };
              function c(e) {
                return (0, i.sE)(Object.keys(m), function (n) {
                  return e === m[n];
                });
              }
              function u(e) {
                if (!e)
                  return (
                    (0, o.logError)(
                      "Prebid Error: no value passed to `setPriceGranularity()`"
                    ),
                    !1
                  );
                if ("string" == typeof e)
                  c(e) ||
                    (0, o.logWarn)(
                      "Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
                    );
                else if ((0, o.isPlainObject)(e) && !(0, r.t)(e))
                  return (
                    (0, o.logError)(
                      "Invalid custom price value passed to `setPriceGranularity()`"
                    ),
                    !1
                  );
                return !0;
              }
              n &&
                w(
                  Object.keys(n).reduce(function (e, t) {
                    return n[t] !== a[t] && (e[t] = a[t] || {}), e;
                  }, {})
                ),
                (n = a),
                (t = {});
            }
            function E() {
              if (v && t && (0, o.isPlainObject)(t[v])) {
                var e = t[v],
                  r = new Set(Object.keys(n).concat(Object.keys(e)));
                return (0, i.Oc)(r).reduce(function (t, r) {
                  return (
                    void 0 === e[r]
                      ? (t[r] = n[r])
                      : void 0 === n[r]
                      ? (t[r] = e[r])
                      : (0, o.isPlainObject)(e[r])
                      ? (t[r] = (0, o.mergeDeep)({}, n[r], e[r]))
                      : (t[r] = e[r]),
                    t
                  );
                }, {});
              }
              return f({}, n);
            }
            function S(e) {
              var n = {};
              return (
                Object.keys(e).forEach(function (t) {
                  var r = "context" === t ? "site" : t;
                  n[r] =
                    "site" === r || "user" === r
                      ? Object.keys(e[t]).reduce(function (n, r) {
                          return (
                            "data" === r
                              ? (0, o.mergeDeep)(n, { ext: { data: e[t][r] } })
                              : (0, o.mergeDeep)(n, s({}, r, e[t][r])),
                            n
                          );
                        }, {})
                      : e[t];
                }),
                n
              );
            }
            function A(e) {
              var n = {};
              return (
                Object.keys(e)
                  .filter(function (e) {
                    return "context" === e;
                  })
                  .forEach(function (t) {
                    Object.keys(e[t]).forEach(function (r) {
                      "data" === r
                        ? (0, o.mergeDeep)(n, { ext: { data: e[t][r] } })
                        : "object" !== d(e[t][r]) || Array.isArray(e[t][r])
                        ? (0, o.mergeDeep)(n, {
                            ext: { data: s({}, r.toLowerCase(), e[t][r]) },
                          })
                        : Object.keys(e[t][r]).forEach(function (i) {
                            (0,
                            o.mergeDeep)(n, { ext: { data: s({}, r.toLowerCase(), s({}, i.toLowerCase(), e[t][r][i])) } });
                          });
                    });
                  }),
                n
              );
            }
            function T(t) {
              if ((0, o.isPlainObject)(t)) {
                var r = Object.keys(t),
                  i = {};
                r.forEach(function (r) {
                  var a = "fpd" === r ? "ortb2" : r,
                    c = "fpd" === r ? S(t[r]) : t[r];
                  (0, o.isPlainObject)(e[a]) &&
                    (0, o.isPlainObject)(c) &&
                    (c = f({}, e[a], c)),
                    (i[a] = n[a] = c);
                }),
                  w(i);
              } else (0, o.logError)("setConfig options must be an object");
            }
            function I(e, n) {
              var t = n;
              if (
                ("string" != typeof e && ((t = e), (e = "*")),
                "function" == typeof t)
              ) {
                var r = { topic: e, callback: t };
                return (
                  l.push(r),
                  function () {
                    l.splice(l.indexOf(r), 1);
                  }
                );
              }
              (0, o.logError)("listener must be a function");
            }
            function w(e) {
              var n = Object.keys(e);
              l
                .filter(function (e) {
                  return (0, i.q9)(n, e.topic);
                })
                .forEach(function (n) {
                  n.callback(s({}, n.topic, e[n.topic]));
                }),
                l
                  .filter(function (e) {
                    return "*" === e.topic;
                  })
                  .forEach(function (n) {
                    return n.callback(e);
                  });
            }
            function C(e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              try {
                r(e),
                  e.bidders.forEach(function (r) {
                    t[r] || (t[r] = {}),
                      Object.keys(e.config).forEach(function (i) {
                        var a = "fpd" === i ? "ortb2" : i,
                          c = "fpd" === i ? S(e.config[i]) : e.config[i];
                        if ((0, o.isPlainObject)(c)) {
                          var u = n ? o.mergeDeep : Object.assign;
                          t[r][a] = u({}, t[r][a] || {}, c);
                        } else t[r][a] = c;
                      });
                  });
              } catch (e) {
                (0, o.logError)(e);
              }
              function r(e) {
                if (!(0, o.isPlainObject)(e))
                  throw "setBidderConfig bidder options must be an object";
                if (!Array.isArray(e.bidders) || !e.bidders.length)
                  throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                if (!(0, o.isPlainObject)(e.config))
                  throw "setBidderConfig bidder options must contain a config object";
              }
            }
            function O(e, n) {
              v = e;
              try {
                return n();
              } finally {
                B();
              }
            }
            function B() {
              v = null;
            }
            return (
              h(),
              {
                getCurrentBidder: function () {
                  return v;
                },
                resetBidder: B,
                getConfig: function () {
                  if (
                    arguments.length <= 1 &&
                    "function" !=
                      typeof (arguments.length <= 0 ? void 0 : arguments[0])
                  ) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? (0, a.Z)(E(), e) : E();
                  }
                  return I.apply(void 0, arguments);
                },
                readConfig: function () {
                  if (
                    arguments.length <= 1 &&
                    "function" !=
                      typeof (arguments.length <= 0 ? void 0 : arguments[0])
                  ) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0],
                      n = (0, o.deepClone)(E());
                    return e ? (0, a.Z)(n, e) : n;
                  }
                  return I.apply(void 0, arguments);
                },
                setConfig: T,
                mergeConfig: function (e) {
                  if ((0, o.isPlainObject)(e)) {
                    var n = Object.keys(e).reduce(function (n, t) {
                      var r = E()[t] || {};
                      return (n[t] = (0, o.mergeDeep)(r, e[t])), n;
                    }, {});
                    return (
                      T(
                        (function (e) {
                          for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2
                              ? u(Object(t), !0).forEach(function (n) {
                                  s(e, n, t[n]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(t)
                                )
                              : u(Object(t)).forEach(function (n) {
                                  Object.defineProperty(
                                    e,
                                    n,
                                    Object.getOwnPropertyDescriptor(t, n)
                                  );
                                });
                          }
                          return e;
                        })({}, n)
                      ),
                      n
                    );
                  }
                  (0, o.logError)("mergeConfig input must be an object");
                },
                setDefaults: function (t) {
                  (0, o.isPlainObject)(e)
                    ? (f(e, t), f(n, t))
                    : (0, o.logError)("defaults must be an object");
                },
                resetConfig: h,
                runWithBidder: O,
                callbackWithBidder: function (e) {
                  return function (n) {
                    return function () {
                      if ("function" == typeof n) {
                        for (
                          var t = arguments.length, r = new Array(t), i = 0;
                          i < t;
                          i++
                        )
                          r[i] = arguments[i];
                        return O(
                          e,
                          o.bind.call.apply(o.bind, [n, this].concat(r))
                        );
                      }
                      (0, o.logWarn)(
                        "config.callbackWithBidder callback is not a function"
                      );
                    };
                  };
                },
                setBidderConfig: C,
                getBidderConfig: function () {
                  return t;
                },
                mergeBidderConfig: function (e) {
                  return C(e, !0);
                },
                convertAdUnitFpd: function (e) {
                  var n = [];
                  return (
                    e.forEach(function (e) {
                      var t;
                      e.fpd
                        ? (e.ortb2Imp
                            ? (0, o.mergeDeep)(e.ortb2Imp, A(e.fpd))
                            : (e.ortb2Imp = A(e.fpd)),
                          n.push(
                            ((t = e).fpd,
                            (function (e, n) {
                              if (null == e) return {};
                              var t,
                                r,
                                i = (function (e, n) {
                                  if (null == e) return {};
                                  var t,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                  for (r = 0; r < o.length; r++)
                                    (t = o[r]),
                                      n.indexOf(t) >= 0 || (i[t] = e[t]);
                                  return i;
                                })(e, n);
                              if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < o.length; r++)
                                  (t = o[r]),
                                    n.indexOf(t) >= 0 ||
                                      (Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        t
                                      ) &&
                                        (i[t] = e[t]));
                              }
                              return i;
                            })(t, c))
                          ))
                        : n.push(e);
                    }),
                    n
                  );
                },
                getLegacyFpd: function (e) {
                  if ("object" === d(e)) {
                    var n = {};
                    return (
                      Object.keys(e).forEach(function (t) {
                        var r = "site" === t ? "context" : t;
                        n[r] =
                          "context" === r || "user" === r
                            ? Object.keys(e[t])
                                .filter(function (e) {
                                  return "data" !== e;
                                })
                                .reduce(function (n, r) {
                                  return (
                                    "ext" === r
                                      ? (0, o.mergeDeep)(n, e[t][r])
                                      : (0, o.mergeDeep)(n, s({}, r, e[t][r])),
                                    n
                                  );
                                }, {})
                            : e[t];
                      }),
                      n
                    );
                  }
                },
                getLegacyImpFpd: function (e) {
                  if ("object" === d(e)) {
                    var n = {};
                    return (
                      (0, a.Z)(e, "ext.data") &&
                        Object.keys(e.ext.data).forEach(function (t) {
                          "pbadslot" === t
                            ? (0, o.mergeDeep)(n, {
                                context: { pbAdSlot: e.ext.data[t] },
                              })
                            : "adserver" === t
                            ? (0, o.mergeDeep)(n, {
                                context: { adServer: e.ext.data[t] },
                              })
                            : (0, o.mergeDeep)(n, {
                                context: { data: s({}, t, e.ext.data[t]) },
                              });
                        }),
                      n
                    );
                  }
                },
              }
            );
          })();
      },
      553: function (e, n, t) {
        "use strict";
        t.d(n, {
          D: function () {
            return d;
          },
          t: function () {
            return l;
          },
        });
        var r = t(879),
          i = t(853),
          o = { buckets: [{ max: 5, increment: 0.5 }] },
          a = { buckets: [{ max: 20, increment: 0.1 }] },
          c = { buckets: [{ max: 20, increment: 0.01 }] },
          u = {
            buckets: [
              { max: 3, increment: 0.01 },
              { max: 8, increment: 0.05 },
              { max: 20, increment: 0.5 },
            ],
          },
          s = {
            buckets: [
              { max: 5, increment: 0.05 },
              { max: 10, increment: 0.1 },
              { max: 20, increment: 0.5 },
            ],
          };
        function d(e, n) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r = parseFloat(e);
          return (
            isNaN(r) && (r = ""),
            {
              low: "" === r ? "" : f(e, o, t),
              med: "" === r ? "" : f(e, a, t),
              high: "" === r ? "" : f(e, c, t),
              auto: "" === r ? "" : f(e, s, t),
              dense: "" === r ? "" : f(e, u, t),
              custom: "" === r ? "" : f(e, n, t),
            }
          );
        }
        function f(e, n, t) {
          var i = "";
          if (!l(n)) return i;
          var o = n.buckets.reduce(
              function (e, n) {
                return e.max > n.max ? e : n;
              },
              { max: 0 }
            ),
            a = 0,
            c = (0, r.sE)(n.buckets, function (n) {
              if (e > o.max * t) {
                var r = n.precision;
                void 0 === r && (r = 2), (i = (n.max * t).toFixed(r));
              } else {
                if (e <= n.max * t && e >= a * t) return (n.min = a), n;
                a = n.max;
              }
            });
          return (
            c &&
              (i = (function (e, n, t) {
                var r = void 0 !== n.precision ? n.precision : 2,
                  i = n.increment * t,
                  o = n.min * t,
                  a = Math.pow(10, r + 2),
                  c = (e * a - o * a) / (i * a),
                  u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r);
              })(e, c, t)),
            i
          );
        }
        function l(e) {
          if ((0, i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets))
            return !1;
          var n = !0;
          return (
            e.buckets.forEach(function (e) {
              (e.max && e.increment) || (n = !1);
            }),
            n
          );
        }
      },
      319: function (e, n, t) {
        "use strict";
        function r() {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            r.apply(this, arguments)
          );
        }
        t.r(n),
          t.d(n, {
            emit: function () {
              return y;
            },
            get: function () {
              return p;
            },
            getEvents: function () {
              return v;
            },
            off: function () {
              return g;
            },
            on: function () {
              return l;
            },
          });
        var i = t(853),
          o = t(644),
          a = Array.prototype.slice,
          c = Array.prototype.push,
          u = i._map(o.EVENTS, function (e) {
            return e;
          }),
          s = o.EVENT_ID_PATHS,
          d = [],
          f = (function () {
            var e = {},
              n = {};
            function t(n, t) {
              i.logMessage("Emitting event for: " + n);
              var r = t[0] || {},
                o = r[s[n]],
                a = e[n] || { que: [] },
                u = i._map(a, function (e, n) {
                  return n;
                }),
                f = [];
              d.push({
                eventType: n,
                args: r,
                id: o,
                elapsedTime: i.getPerformanceNow(),
              }),
                o && i.contains(u, o) && c.apply(f, a[o].que),
                c.apply(f, a.que),
                i._each(f, function (e) {
                  if (e)
                    try {
                      e.apply(null, t);
                    } catch (e) {
                      i.logError("Error executing handler:", "events.js", e);
                    }
                });
            }
            return (
              (n.on = function (n, t, r) {
                if (
                  (function (e) {
                    return i.contains(u, e);
                  })(n)
                ) {
                  var o = e[n] || { que: [] };
                  r
                    ? ((o[r] = o[r] || { que: [] }), o[r].que.push(t))
                    : o.que.push(t),
                    (e[n] = o);
                } else
                  i.logError(
                    "Wrong event name : " + n + " Valid event names :" + u
                  );
              }),
              (n.emit = function (e) {
                var n = a.call(arguments, 1);
                t(e, n);
              }),
              (n.off = function (n, t, r) {
                var o = e[n];
                i.isEmpty(o) ||
                  (i.isEmpty(o.que) && i.isEmpty(o[r])) ||
                  (r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que))) ||
                  (r
                    ? i._each(o[r].que, function (e) {
                        var n = o[r].que;
                        e === t && n.splice(n.indexOf(e), 1);
                      })
                    : i._each(o.que, function (e) {
                        var n = o.que;
                        e === t && n.splice(n.indexOf(e), 1);
                      }),
                  (e[n] = o));
              }),
              (n.get = function () {
                return e;
              }),
              (n.getEvents = function () {
                var e = [];
                return (
                  i._each(d, function (n) {
                    var t = r({}, n);
                    e.push(t);
                  }),
                  e
                );
              }),
              n
            );
          })(),
          l = f.on,
          g = f.off,
          p = f.get,
          v = f.getEvents,
          y = f.emit;
      },
      494: function (e, n, t) {
        "use strict";
        t.d(n, {
          Bx: function () {
            return l;
          },
          bA: function () {
            return f;
          },
          o0: function () {
            return s;
          },
          v5: function () {
            return u;
          },
          z3: function () {
            return c;
          },
        });
        var r = t(432),
          i = t.n(r);
        function o(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return a(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return a(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? a(e, n)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function a(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        var c = i()({ useProxy: !1, ready: i().SYNC | i().ASYNC | i().QUEUE }),
          u = c.get;
        function s(e, n) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 15,
            r = e.getHooks({ hook: n });
          0 === r.length && e.before(n, t);
        }
        var d = {};
        function f(e, n) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = t.postInstallAllowed,
            i = void 0 !== r && r;
          c(
            "async",
            function (t) {
              t.forEach(function (e) {
                return n.apply(void 0, o(e));
              }),
                i && (d[e] = n);
            },
            e
          )([]);
        }
        function l(e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
            r < n;
            r++
          )
            t[r - 1] = arguments[r];
          var i = d[e];
          if (i) return i.apply(void 0, t);
          u(e).before(function (e, n) {
            n.push(t), e(n);
          });
        }
      },
      3: function (e, n, t) {
        "use strict";
        t.d(n, {
          B5: function () {
            return r;
          },
          Mk: function () {
            return o;
          },
          Oh: function () {
            return a;
          },
          pX: function () {
            return i;
          },
        });
        var r = "native",
          i = "video",
          o = "banner",
          a = "adpod";
      },
      17: function (e, n, t) {
        "use strict";
        t.d(n, {
          Fb: function () {
            return v;
          },
          JL: function () {
            return E;
          },
          Sg: function () {
            return l;
          },
          Ur: function () {
            return m;
          },
          e6: function () {
            return b;
          },
          eK: function () {
            return h;
          },
          r4: function () {
            return y;
          },
          xc: function () {
            return g;
          },
        });
        var r = t(265),
          i = t(853),
          o = t(879),
          a = t(766);
        function c(e) {
          return (
            (c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            c(e)
          );
        }
        function u(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n &&
              (r = r.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, r);
          }
          return t;
        }
        function s(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? u(Object(t), !0).forEach(function (n) {
                  d(e, n, t[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        }
        function d(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = t),
            e
          );
        }
        var f = t(644),
          l = [],
          g = Object.keys(f.NATIVE_KEYS).map(function (e) {
            return f.NATIVE_KEYS[e];
          }),
          p = {
            image: {
              image: { required: !0 },
              title: { required: !0 },
              sponsoredBy: { required: !0 },
              clickUrl: { required: !0 },
              body: { required: !1 },
              icon: { required: !1 },
            },
          };
        function v(e) {
          e.forEach(function (e) {
            var n,
              t,
              a = e.nativeParams || (0, r.Z)(e, "mediaTypes.native");
            a &&
              (e.nativeParams =
                (n = a) &&
                n.type &&
                (((t = n.type) && (0, o.q9)(Object.keys(p), t)) ||
                  ((0, i.logError)(
                    "".concat(t, " nativeParam is not supported")
                  ),
                  0))
                  ? p[n.type]
                  : n);
          });
        }
        function y(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.index,
            i = void 0 === t ? a.K.index : t;
          if (!(0, r.Z)(e, "native.clickUrl")) return !1;
          var c = i.getAdUnit(e).nativeParams;
          if (!c) return !0;
          var u = Object.keys(c).filter(function (e) {
              return c[e].required;
            }),
            s = Object.keys(e.native).filter(function (n) {
              return e.native[n];
            });
          return u.every(function (e) {
            return (0, o.q9)(s, e);
          });
        }
        function b(e, n) {
          var t;
          return (
            "click" === e.action
              ? (t = n.native && n.native.clickTrackers)
              : ((t = n.native && n.native.impressionTrackers),
                n.native &&
                  n.native.javascriptTrackers &&
                  (0, i.insertHtmlIntoIframe)(n.native.javascriptTrackers)),
            (t || []).forEach(i.triggerPixel),
            e.action
          );
        }
        function m(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.index,
            i = void 0 === t ? a.K.index : t,
            o = {},
            c = i.getAdUnit(e);
          (0, r.Z)(c, "nativeParams.rendererUrl")
            ? (e.native.rendererUrl = S(c.nativeParams.rendererUrl))
            : (0, r.Z)(c, "nativeParams.adTemplate") &&
              (e.native.adTemplate = S(c.nativeParams.adTemplate));
          var u = !1 !== (0, r.Z)(c, "nativeParams.sendTargetingKeys"),
            d = A(c),
            f = s(s({}, e.native), e.native.ext);
          return (
            delete f.ext,
            Object.keys(f).forEach(function (n) {
              var t = d[n],
                i = S(e.native[n]) || S((0, r.Z)(e, "native.ext.".concat(n)));
              if ("adTemplate" !== n && t && i) {
                var a = (0, r.Z)(c, "nativeParams.".concat(n, ".sendId"));
                "boolean" != typeof a &&
                  (a = (0, r.Z)(c, "nativeParams.ext.".concat(n, ".sendId"))),
                  a && (i = "".concat(t, ":").concat(e.adId));
                var s = (0, r.Z)(
                  c,
                  "nativeParams.".concat(n, ".sendTargetingKeys")
                );
                "boolean" != typeof s &&
                  (s = (0, r.Z)(
                    c,
                    "nativeParams.ext.".concat(n, ".sendTargetingKeys")
                  )),
                  ("boolean" == typeof s ? s : u) && (o[t] = i);
              }
            }),
            o
          );
        }
        function h(e, n) {
          var t = { message: "assetResponse", adId: e.adId, assets: [] };
          return (
            n.native.hasOwnProperty("adTemplate") &&
              (t.adTemplate = S(n.native.adTemplate)),
            n.native.hasOwnProperty("rendererUrl") &&
              (t.rendererUrl = S(n.native.rendererUrl)),
            e.assets.forEach(function (e) {
              var r = (0, i.getKeyByValue)(f.NATIVE_KEYS, e),
                o = S(n.native[r]);
              t.assets.push({ key: r, value: o });
            }),
            t
          );
        }
        function E(e, n) {
          var t = { message: "assetResponse", adId: e.adId, assets: [] };
          return (
            Object.keys(n.native).forEach(function (e, r) {
              if ("adTemplate" === e && n.native[e])
                t.adTemplate = S(n.native[e]);
              else if ("rendererUrl" === e && n.native[e])
                t.rendererUrl = S(n.native[e]);
              else if ("ext" === e)
                Object.keys(n.native[e]).forEach(function (r) {
                  if (n.native[e][r]) {
                    var i = S(n.native[e][r]);
                    t.assets.push({ key: r, value: i });
                  }
                });
              else if (n.native[e] && f.NATIVE_KEYS.hasOwnProperty(e)) {
                var i = S(n.native[e]);
                t.assets.push({ key: e, value: i });
              }
            }),
            t
          );
        }
        function S(e) {
          return "object" === c(e) && e.url ? e.url : e;
        }
        function A(e) {
          var n = {};
          return (
            (0, r.Z)(e, "nativeParams.ext") &&
              Object.keys(e.nativeParams.ext).forEach(function (e) {
                n[e] = "hb_native_".concat(e);
              }),
            s(s({}, f.NATIVE_KEYS), n)
          );
        }
      },
      879: function (e, n, t) {
        "use strict";
        function r(e, n, t) {
          return (e && e.includes(n, t)) || !1;
        }
        function i() {
          return Array.from.apply(Array, arguments);
        }
        function o(e, n, t) {
          return e && e.find(n, t);
        }
        t.d(n, {
          Oc: function () {
            return i;
          },
          q9: function () {
            return r;
          },
          sE: function () {
            return o;
          },
        });
      },
      893: function (e, n, t) {
        "use strict";
        t.d(n, {
          O5: function () {
            return me;
          },
        });
        var r = t(528),
          i = t(853),
          o = t(265),
          a = t(319),
          c = t(17),
          u = t(644),
          s = t(766),
          d = t(879),
          f = t(877),
          l = t(962),
          g = u.EVENTS,
          p = g.AD_RENDER_FAILED,
          v = g.AD_RENDER_SUCCEEDED;
        function y(e) {
          var n = e.reason,
            t = e.message,
            r = e.bid,
            o = e.id,
            c = { reason: n, message: t };
          r && (c.bid = r), o && (c.adId = o), (0, i.logError)(t), a.emit(p, c);
        }
        function b(e) {
          var n = e.doc,
            t = e.bid,
            r = e.id,
            i = { doc: n };
          t && (i.bid = t), r && (i.adId = r), a.emit(v, i);
        }
        var m = u.EVENTS.BID_WON,
          h = u.EVENTS.STALE_RENDER,
          E = {
            "Prebid Request": function (e, n, t) {
              if (null != t) {
                if (
                  t.status !== u.BID_STATUS.RENDERED ||
                  ((0, i.logWarn)(
                    "Ad id ".concat(t.adId, " has been rendered before")
                  ),
                  a.emit(h, t),
                  !(0, o.Z)(
                    l.vc.getConfig("auctionOptions"),
                    "suppressStaleRender"
                  ))
                ) {
                  try {
                    !(function (e, n) {
                      var t = e.adId,
                        r = e.ad,
                        o = e.adUrl,
                        a = e.width,
                        c = e.height,
                        u = e.renderer,
                        s = e.cpm,
                        d = e.originalCpm;
                      (0, f.Pd)(u)
                        ? (0, f._U)(u, e)
                        : t &&
                          (A(e),
                          n({
                            message: "Prebid Response",
                            ad: (0, i.replaceAuctionPrice)(r, d || s),
                            adUrl: (0, i.replaceAuctionPrice)(o, d || s),
                            adId: t,
                            width: a,
                            height: c,
                          }));
                    })(t, e);
                  } catch (e) {
                    return void y({
                      reason: u.AD_RENDER_FAILED_REASON.EXCEPTION,
                      message: e.message,
                      id: n.adId,
                      bid: t,
                    });
                  }
                  s.K.addWinningBid(t), a.emit(m, t);
                }
              } else
                y({
                  reason: u.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
                  message: "Cannot find ad '".concat(
                    n.adId,
                    "' for cross-origin render request"
                  ),
                  id: n.adId,
                });
            },
            "Prebid Native": function (e, n, t) {
              if (null != t)
                switch (n.action) {
                  case "assetRequest":
                    e((0, c.eK)(n, t));
                    break;
                  case "allAssetRequest":
                    e((0, c.JL)(n, t));
                    break;
                  case "resizeNativeHeight":
                    (t.height = n.height), (t.width = n.width), A(t);
                    break;
                  default:
                    if ("click" === (0, c.e6)(n, t)) return;
                    s.K.addWinningBid(t), a.emit(m, t);
                }
              else
                (0, i.logError)(
                  "Cannot find ad '".concat(
                    n.adId,
                    "' for x-origin event request"
                  )
                );
            },
            "Prebid Event": function (e, n, t) {
              if (null != t)
                if (t.status === u.BID_STATUS.RENDERED)
                  switch (n.event) {
                    case u.EVENTS.AD_RENDER_FAILED:
                      y({
                        bid: t,
                        id: n.adId,
                        reason: n.info.reason,
                        message: n.info.message,
                      });
                      break;
                    case u.EVENTS.AD_RENDER_SUCCEEDED:
                      b({ doc: null, bid: t, id: n.adId });
                      break;
                    default:
                      (0, i.logError)(
                        "Received x-origin event request for unsupported event: '"
                          .concat(n.event, "' (adId: '")
                          .concat(n.adId, "')")
                      );
                  }
                else
                  (0, i.logWarn)(
                    "Received x-origin event request without corresponding render request for ad '".concat(
                      n.adId,
                      "'"
                    )
                  );
              else
                (0, i.logError)(
                  "Cannot find ad '".concat(
                    n.adId,
                    "' for x-origin event request"
                  )
                );
            },
          };
        function S(e) {
          var n = e.message ? "message" : "data",
            t = {};
          try {
            t = JSON.parse(e[n]);
          } catch (e) {
            return;
          }
          if (t && t.adId && t.message) {
            var r = (0, d.sE)(s.K.getBidsReceived(), function (e) {
              return e.adId === t.adId;
            });
            E.hasOwnProperty(t.message) &&
              E[t.message](
                (function (e) {
                  return null == e.origin && 0 === e.ports.length
                    ? function () {
                        var e =
                          "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                        throw ((0, i.logError)(e), new Error(e));
                      }
                    : e.ports.length > 0
                    ? function (n) {
                        e.ports[0].postMessage(JSON.stringify(n));
                      }
                    : function (n) {
                        e.source.postMessage(JSON.stringify(n), e.origin);
                      };
                })(e),
                t,
                r
              );
          }
        }
        function A(e) {
          var n = e.adId,
            t = e.adUnitCode,
            r = e.width,
            o = e.height;
          ["div", "iframe"].forEach(function (e) {
            var a = (function (e) {
              var r = (function (e, n) {
                  return (0, i.isGptPubadsDefined)()
                    ? (function (e) {
                        var n = (0, d.sE)(
                          window.googletag.pubads().getSlots(),
                          function (n) {
                            return (0, d.sE)(
                              n.getTargetingKeys(),
                              function (t) {
                                return (0, d.q9)(n.getTargeting(t), e);
                              }
                            );
                          }
                        );
                        return n ? n.getSlotElementId() : null;
                      })(e)
                    : (0, i.isApnGetTagDefined)()
                    ? (function (e) {
                        var n = window.apntag.getTag(e);
                        return n && n.targetId;
                      })(n)
                    : n;
                })(n, t),
                o = document.getElementById(r);
              return o && o.querySelector(e);
            })(e + ':not([style*="display: none"])');
            if (a) {
              var c = a.style;
              (c.width = r + "px"), (c.height = o + "px");
            } else (0, i.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."));
          });
        }
        var T,
          I,
          w = t(112),
          C = t(742),
          O = t(494),
          B = t(892),
          U = (0, i.prefixLog)("DEBUG:"),
          R = U.logWarn,
          D = U.logMessage,
          _ = "ihowpbjs:debugging",
          k = [
            function (e) {
              N(),
                (function (e) {
                  (T = W.bind(e)),
                    B.Yt.before(T, 5),
                    (I = F.bind(e)),
                    B.e0.before(I, 5);
                })(e);
            },
          ],
          j = [N];
        function N() {
          B.Yt.getHooks({ hook: T }).remove(),
            B.e0.getHooks({ hook: I }).remove();
        }
        function P(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          l.vc.setConfig({ debug: !0 }),
            k.forEach(function (n) {
              return n(e);
            }),
            D("bidder overrides enabled".concat(n ? " from session" : ""));
        }
        function x() {
          j.forEach(function (e) {
            return e();
          }),
            D("bidder overrides disabled");
        }
        function q(e, n, t) {
          return (
            !(!e.bidder || e.bidder === n) ||
            !(!e.adUnitCode || e.adUnitCode === t)
          );
        }
        function M(e, n) {
          return Array.isArray(e) && -1 === e.indexOf(n);
        }
        function G(e, n, t) {
          return Object.keys(e)
            .filter(function (e) {
              return -1 === ["adUnitCode", "bidder"].indexOf(e);
            })
            .reduce(function (n, r) {
              return (
                D(
                  "bidder overrides changed '"
                    .concat(n.adUnitCode, "/")
                    .concat(n.bidderCode, "' ")
                    .concat(t, ".")
                    .concat(r, " from '")
                    .concat(n[r], ".js' to '")
                    .concat(e[r], "'")
                ),
                (n[r] = e[r]),
                (n.isDebug = !0),
                n
              );
            }, n);
        }
        function W(e, n, t) {
          var r = this;
          M(r.bidders, t.bidderCode)
            ? R(
                "bidder '".concat(
                  t.bidderCode,
                  "' excluded from auction by bidder overrides"
                )
              )
            : (Array.isArray(r.bids) &&
                r.bids.forEach(function (e) {
                  q(e, t.bidderCode, n) || G(e, t, "bidder");
                }),
              e(n, t));
        }
        function F(e, n) {
          var t = this,
            r = n.filter(function (e) {
              return (
                !M(t.bidders, e.bidderCode) ||
                (R(
                  "bidRequest '".concat(
                    e.bidderCode,
                    "' excluded from auction by bidder overrides"
                  )
                ),
                !1)
              );
            });
          Array.isArray(t.bidRequests) &&
            r.forEach(function (e) {
              t.bidRequests.forEach(function (n) {
                e.bids.forEach(function (t) {
                  q(n, e.bidderCode, t.adUnitCode) || G(n, t, "bidRequest");
                });
              });
            }),
            e(r);
        }
        var z = (0, O.z3)("sync", function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.sessionStorage,
            r = void 0 === t ? window.sessionStorage : t;
          if (e.enabled)
            try {
              r.setItem(_, JSON.stringify(e));
            } catch (e) {}
          else
            try {
              r.removeItem(_);
            } catch (e) {}
        });
        l.vc.getConfig("debugging", function (e) {
          return (function (e) {
            var n = (
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              ).sessionStorage,
              t = void 0 === n ? window.sessionStorage : n;
            z(e, { sessionStorage: t }), e.enabled ? P(e) : x();
          })(e.debugging);
        });
        var L = t(263),
          K = t(477),
          V = t(849),
          H = t(602);
        function Z(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Y(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return Y(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? Y(e, n)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Y(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function J() {
          return (
            (J =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            J.apply(this, arguments)
          );
        }
        var Q = (0, r.R)(),
          X = t(644),
          $ = t(602).ZP,
          ee = t(319),
          ne = w.k_.triggerUserSyncs,
          te = X.EVENTS,
          re = te.ADD_AD_UNITS,
          ie = te.BID_WON,
          oe = te.REQUEST_BIDS,
          ae = te.SET_TARGETING,
          ce = te.STALE_RENDER,
          ue = X.AD_RENDER_FAILED_REASON,
          se = ue.PREVENT_WRITING_ON_MAIN_DOCUMENT,
          de = ue.NO_AD,
          fe = ue.EXCEPTION,
          le = ue.CANNOT_FIND_AD,
          ge = ue.MISSING_DOC_OR_ADID,
          pe = {
            bidWon: function (e) {
              var n = s.K.getBidsRequested()
                .map(function (e) {
                  return e.bids.map(function (e) {
                    return e.adUnitCode;
                  });
                })
                .reduce(i.flatten)
                .filter(i.uniques);
              if ((0, i.contains)(n, e)) return !0;
              (0, i.logError)('The "' + e + '" placement is not defined.');
            },
          };
        function ve(e, n, t) {
          e.defaultView &&
            e.defaultView.frameElement &&
            ((e.defaultView.frameElement.width = n),
            (e.defaultView.frameElement.height = t));
        }
        function ye(e, n) {
          var t = [];
          return (
            (0, i.isArray)(e) &&
              (n ? e.length === n : e.length > 0) &&
              (e.every(function (e) {
                return (0, i.isArrayOfNums)(e, 2);
              })
                ? (t = e)
                : (0, i.isArrayOfNums)(e, 2) && t.push(e)),
            t
          );
        }
        function be(e, n) {
          var t = (0, o.Z)(e, "mediaTypes.".concat(n, ".pos"));
          if (!(0, i.isNumber)(t) || isNaN(t) || !isFinite(t)) {
            var r = "Value of property 'pos' on ad unit ".concat(
              e.code,
              " should be of type: Number"
            );
            (0, i.logWarn)(r),
              ee.emit(X.EVENTS.AUCTION_DEBUG, {
                type: "WARNING",
                arguments: r,
              }),
              delete e.mediaTypes[n].pos;
          }
          return e;
        }
        !(function (e) {
          var n;
          try {
            (e = e || window.sessionStorage), (n = JSON.parse(e.getItem(_)));
          } catch (e) {}
          n && P(n, !0);
        })(),
          (Q.bidderSettings = Q.bidderSettings || {}),
          (Q.libLoaded = !0),
          (Q.version = "v6.18.0"),
          (0, i.logInfo)("Prebid.js v6.18.0 loaded"),
          (Q.installedModules = Q.installedModules || []),
          (Q.adUnits = Q.adUnits || []),
          (Q.triggerUserSyncs = ne);
        var me = (0, O.z3)(
          "sync",
          function (e) {
            var n = [];
            return (
              e.forEach(function (e) {
                if (
                  null !=
                  (e = (function (e) {
                    var n = function (n) {
                        return "adUnit.code '".concat(e.code, "' ").concat(n);
                      },
                      t = e.mediaTypes,
                      r = e.bids;
                    return null == r || (0, i.isArray)(r)
                      ? null == r && null == e.ortb2Imp
                        ? ((0, i.logError)(
                            n(
                              "has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction"
                            )
                          ),
                          null)
                        : t && 0 !== Object.keys(t).length
                        ? (null == e.ortb2Imp ||
                            (null != r && 0 !== r.length) ||
                            ((e.bids = [{ bidder: null }]),
                            (0, i.logMessage)(
                              n(
                                "defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"
                              )
                            )),
                          e)
                        : ((0, i.logError)(
                            n(
                              "does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed."
                            )
                          ),
                          null)
                      : ((0, i.logError)(
                          n(
                            "defines 'adUnit.bids' that is not an array. Removing adUnit from auction"
                          )
                        ),
                        null);
                  })(e))
                ) {
                  var t,
                    r,
                    o,
                    a = e.mediaTypes;
                  a.banner &&
                    ((t = (function (e) {
                      var n = (0, i.deepClone)(e),
                        t = n.mediaTypes.banner,
                        r = ye(t.sizes);
                      return (
                        r.length > 0
                          ? ((t.sizes = r), (n.sizes = r))
                          : ((0, i.logError)(
                              "Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."
                            ),
                            delete n.mediaTypes.banner),
                        n
                      );
                    })(e)),
                    a.banner.hasOwnProperty("pos") && (t = be(t, "banner"))),
                    a.video &&
                      ((r = (function (e) {
                        var n = (0, i.deepClone)(e),
                          t = n.mediaTypes.video;
                        if (t.playerSize) {
                          var r = "number" == typeof t.playerSize[0] ? 2 : 1,
                            o = ye(t.playerSize, r);
                          o.length > 0
                            ? (2 === r &&
                                (0, i.logInfo)(
                                  "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."
                                ),
                              (t.playerSize = o),
                              (n.sizes = o))
                            : ((0, i.logError)(
                                "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
                              ),
                              delete n.mediaTypes.video.playerSize);
                        }
                        return n;
                      })(t || e)),
                      a.video.hasOwnProperty("pos") && (r = be(r, "video"))),
                    a.native &&
                      (o = (function (e) {
                        var n = (0, i.deepClone)(e),
                          t = n.mediaTypes.native;
                        return (
                          t.image &&
                            t.image.sizes &&
                            !Array.isArray(t.image.sizes) &&
                            ((0, i.logError)(
                              "Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
                            ),
                            delete n.mediaTypes.native.image.sizes),
                          t.image &&
                            t.image.aspect_ratios &&
                            !Array.isArray(t.image.aspect_ratios) &&
                            ((0, i.logError)(
                              "Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
                            ),
                            delete n.mediaTypes.native.image.aspect_ratios),
                          t.icon &&
                            t.icon.sizes &&
                            !Array.isArray(t.icon.sizes) &&
                            ((0, i.logError)(
                              "Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
                            ),
                            delete n.mediaTypes.native.icon.sizes),
                          n
                        );
                      })(r || t || e));
                  var c = J({}, t, r, o);
                  n.push(c);
                }
              }),
              n
            );
          },
          "checkAdUnitSetup"
        );
        function he(e) {
          var n = s.K[e]().filter(
              i.bind.call(i.adUnitsFilter, this, s.K.getAdUnitCodes())
            ),
            t = s.K.getLastAuctionId();
          return n
            .map(function (e) {
              return e.adUnitCode;
            })
            .filter(i.uniques)
            .map(function (e) {
              return n.filter(function (n) {
                return n.auctionId === t && n.adUnitCode === e;
              });
            })
            .filter(function (e) {
              return e && e[0] && e[0].adUnitCode;
            })
            .map(function (e) {
              return (
                (n = {}),
                (r = { bids: e }),
                (t = e[0].adUnitCode) in n
                  ? Object.defineProperty(n, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[t] = r),
                n
              );
              var n, t, r;
            })
            .reduce(function (e, n) {
              return J(e, n);
            }, {});
        }
        function Ee(e, n, t) {
          var r = n.querySelector(t);
          (e.parentNode && e.parentNode === r) || (0, i.insertElement)(e, n, t);
        }
        (Q.getAdserverTargetingForAdUnitCodeStr = function (e) {
          if (
            ((0, i.logInfo)(
              "Invoking ihowpbjs.getAdserverTargetingForAdUnitCodeStr",
              arguments
            ),
            e)
          ) {
            var n = Q.getAdserverTargetingForAdUnitCode(e);
            return (0, i.transformAdServerTargetingObj)(n);
          }
          (0, i.logMessage)(
            "Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode"
          );
        }),
          (Q.getHighestUnusedBidResponseForAdUnitCode = function (e) {
            if (e) {
              var n = s.K.getAllBidsForAdUnitCode(e)
                .filter(C.u8.isUnusedBid)
                .filter(C.u8.isBidNotExpired);
              return n.length ? n.reduce(i.getHighestCpm) : {};
            }
            (0, i.logMessage)(
              "Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode"
            );
          }),
          (Q.getAdserverTargetingForAdUnitCode = function (e) {
            return Q.getAdserverTargeting(e)[e];
          }),
          (Q.getAdserverTargeting = function (e) {
            return (
              (0, i.logInfo)(
                "Invoking ihowpbjs.getAdserverTargeting",
                arguments
              ),
              C.q0.getAllTargeting(e)
            );
          }),
          (Q.getConsentMetadata = function () {
            return (
              (0, i.logInfo)("Invoking ihowpbjs.getConsentMetadata"),
              {
                gdpr: H.rp.getConsentMeta(),
                usp: H.nX.getConsentMeta(),
                coppa: !!l.vc.getConfig("coppa"),
              }
            );
          }),
          (Q.getNoBids = function () {
            return (
              (0, i.logInfo)("Invoking ihowpbjs.getNoBids", arguments),
              he("getNoBids")
            );
          }),
          (Q.getNoBidsForAdUnitCode = function (e) {
            return {
              bids: s.K.getNoBids().filter(function (n) {
                return n.adUnitCode === e;
              }),
            };
          }),
          (Q.getBidResponses = function () {
            return (
              (0, i.logInfo)("Invoking ihowpbjs.getBidResponses", arguments),
              he("getBidsReceived")
            );
          }),
          (Q.getBidResponsesForAdUnitCode = function (e) {
            return {
              bids: s.K.getBidsReceived().filter(function (n) {
                return n.adUnitCode === e;
              }),
            };
          }),
          (Q.setTargetingForGPTAsync = function (e, n) {
            if (
              ((0, i.logInfo)(
                "Invoking ihowpbjs.setTargetingForGPTAsync",
                arguments
              ),
              (0, i.isGptPubadsDefined)())
            ) {
              var t = C.q0.getAllTargeting(e);
              C.q0.resetPresetTargeting(e, n),
                C.q0.setTargetingForGPT(t, n),
                Object.keys(t).forEach(function (e) {
                  Object.keys(t[e]).forEach(function (n) {
                    "hb_adid" === n &&
                      s.K.setStatusForBids(
                        t[e][n],
                        X.BID_STATUS.BID_TARGETING_SET
                      );
                  });
                }),
                ee.emit(ae, t);
            } else
              (0, i.logError)("window.googletag is not defined on the page");
          }),
          (Q.setTargetingForAst = function (e) {
            (0, i.logInfo)("Invoking ihowpbjs.setTargetingForAn", arguments),
              C.q0.isApntagDefined()
                ? (C.q0.setTargetingForAst(e),
                  ee.emit(ae, C.q0.getAllTargeting()))
                : (0, i.logError)("window.apntag is not defined on the page");
          }),
          (Q.renderAd = (0, O.z3)("async", function (e, n, t) {
            if (
              ((0, i.logInfo)("Invoking ihowpbjs.renderAd", arguments),
              (0, i.logMessage)("Calling renderAd with adId :" + n),
              e && n)
            )
              try {
                var r = s.K.findBidByAdId(n);
                if (r) {
                  var a = !0;
                  if (
                    (r &&
                      r.status === X.BID_STATUS.RENDERED &&
                      ((0, i.logWarn)(
                        "Ad id ".concat(r.adId, " has been rendered before")
                      ),
                      ee.emit(ce, r),
                      (0, o.Z)(
                        l.vc.getConfig("auctionOptions"),
                        "suppressStaleRender"
                      ) && (a = !1)),
                    a)
                  ) {
                    if (
                      ((r.ad = (0, i.replaceAuctionPrice)(
                        r.ad,
                        r.originalCpm || r.cpm
                      )),
                      (r.adUrl = (0, i.replaceAuctionPrice)(
                        r.adUrl,
                        r.originalCpm || r.cpm
                      )),
                      t && t.clickThrough)
                    ) {
                      var c = t.clickThrough;
                      (r.ad = (0, i.replaceClickThrough)(r.ad, c)),
                        (r.adUrl = (0, i.replaceClickThrough)(r.adUrl, c));
                    }
                    s.K.addWinningBid(r), ee.emit(ie, r);
                    var u = r.height,
                      d = r.width,
                      g = r.ad,
                      p = r.mediaType,
                      v = r.adUrl,
                      m = r.renderer,
                      h = document.createComment(
                        "Creative "
                          .concat(r.creativeId, " served by ")
                          .concat(r.bidder, " Prebid.js Header Bidding")
                      );
                    if (((0, i.insertElement)(h, e, "html"), (0, f.Pd)(m)))
                      (0, f._U)(m, r),
                        Ee(h, e, "html"),
                        b({ doc: e, bid: r, id: n });
                    else if (
                      (e === document && !(0, i.inIframe)()) ||
                      "video" === p
                    ) {
                      var E =
                        "Error trying to write ad. Ad render call ad id ".concat(
                          n,
                          " was prevented from writing to the main document."
                        );
                      y({ reason: se, message: E, bid: r, id: n });
                    } else if (g)
                      e.write(g),
                        e.close(),
                        ve(e, d, u),
                        Ee(h, e, "html"),
                        (0, i.callBurl)(r),
                        b({ doc: e, bid: r, id: n });
                    else if (v) {
                      var S = (0, i.createInvisibleIframe)();
                      (S.height = u),
                        (S.width = d),
                        (S.style.display = "inline"),
                        (S.style.overflow = "hidden"),
                        (S.src = v),
                        (0, i.insertElement)(S, e, "body"),
                        ve(e, d, u),
                        Ee(h, e, "html"),
                        (0, i.callBurl)(r),
                        b({ doc: e, bid: r, id: n });
                    } else {
                      var A =
                        "Error trying to write ad. No ad for bid response id: ".concat(
                          n
                        );
                      y({ reason: de, message: A, bid: r, id: n });
                    }
                  }
                } else {
                  var T =
                    "Error trying to write ad. Cannot find ad by given id : ".concat(
                      n
                    );
                  y({ reason: le, message: T, id: n });
                }
              } catch (e) {
                var I = "Error trying to write ad Id :"
                  .concat(n, " to the page:")
                  .concat(e.message);
                y({ reason: fe, message: I, id: n });
              }
            else {
              var w = "Error trying to write ad Id :".concat(
                n,
                " to the page. Missing document or adId"
              );
              y({ reason: ge, message: w, id: n });
            }
          })),
          (Q.removeAdUnit = function (e) {
            (0, i.logInfo)("Invoking ihowpbjs.removeAdUnit", arguments),
              e
                ? ((0, i.isArray)(e) ? e : [e]).forEach(function (e) {
                    for (var n = Q.adUnits.length - 1; n >= 0; n--)
                      Q.adUnits[n].code === e && Q.adUnits.splice(n, 1);
                  })
                : (Q.adUnits = []);
          }),
          (Q.requestBids = (0, O.z3)("async", function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.bidsBackHandler,
              t = e.timeout,
              r = e.adUnits,
              o = e.adUnitCodes,
              a = e.labels,
              c = e.auctionId;
            ee.emit(oe);
            var u = t || l.vc.getConfig("bidderTimeout");
            (r =
              (r && l.vc.convertAdUnitFpd((0, i.isArray)(r) ? r : [r])) ||
              Q.adUnits),
              (0, i.logInfo)("Invoking ihowpbjs.requestBids", arguments);
            var f = [],
              g = [];
            if (
              (l.vc.getConfig("s2sConfig", function (e) {
                e &&
                  e.s2sConfig &&
                  (f = Array.isArray(e.s2sConfig)
                    ? e.s2sConfig
                    : [e.s2sConfig]);
              }),
              f.forEach(function (e) {
                g.push.apply(g, Z(e.bidders));
              }),
              (r = me(r)),
              o && o.length
                ? (r = r.filter(function (e) {
                    return (0, d.q9)(o, e.code);
                  }))
                : (o =
                    r &&
                    r.map(function (e) {
                      return e.code;
                    })),
              r.forEach(function (e) {
                var n = Object.keys(e.mediaTypes || { banner: "banner" }),
                  t = e.bids.map(function (e) {
                    return e.bidder;
                  }),
                  r = $.bidderRegistry,
                  o = g
                    ? t.filter(function (e) {
                        return !(0, d.q9)(g, e);
                      })
                    : t;
                (e.transactionId = (0, i.generateUUID)()),
                  o.forEach(function (t) {
                    var o = r[t],
                      a = o && o.getSpec && o.getSpec(),
                      c = (a && a.supportedMediaTypes) || ["banner"];
                    n.some(function (e) {
                      return (0, d.q9)(c, e);
                    })
                      ? L.f.incrementBidderRequestsCounter(e.code, t)
                      : ((0, i.logWarn)((0, i.unsupportedBidderMessage)(e, t)),
                        (e.bids = e.bids.filter(function (e) {
                          return e.bidder !== t;
                        })));
                  }),
                  L.f.incrementRequestsCounter(e.code);
              }),
              r && 0 !== r.length)
            ) {
              var p = s.K.createAuction({
                  adUnits: r,
                  adUnitCodes: o,
                  callback: n,
                  cbTimeout: u,
                  labels: a,
                  auctionId: c,
                }),
                v = r.length;
              v > 15 &&
                (0, i.logInfo)(
                  "Current auction "
                    .concat(p.getAuctionId(), " contains ")
                    .concat(v, " adUnits."),
                  r
                ),
                o.forEach(function (e) {
                  return C.q0.setLatestAuctionForAdUnit(e, p.getAuctionId());
                }),
                p.callBids();
            } else if (
              ((0, i.logMessage)("No adUnits configured. No bids requested."),
              "function" == typeof n)
            )
              try {
                n();
              } catch (e) {
                (0, i.logError)("Error executing bidsBackHandler", null, e);
              }
          })),
          Q.requestBids.before(function (e, n) {
            function t(e) {
              for (var n; (n = e.shift()); ) n();
            }
            t(V.Ld), t(Se), e.call(this, n);
          }, 49),
          (Q.addAdUnits = function (e) {
            (0, i.logInfo)("Invoking ihowpbjs.addAdUnits", arguments),
              Q.adUnits.push.apply(
                Q.adUnits,
                l.vc.convertAdUnitFpd((0, i.isArray)(e) ? e : [e])
              ),
              ee.emit(re);
          }),
          (Q.onEvent = function (e, n, t) {
            (0, i.logInfo)("Invoking ihowpbjs.onEvent", arguments),
              (0, i.isFn)(n)
                ? !t || pe[e].call(null, t)
                  ? ee.on(e, n, t)
                  : (0, i.logError)(
                      'The id provided is not valid for event "' +
                        e +
                        '" and no handler was set.'
                    )
                : (0, i.logError)(
                    'The event handler provided is not a function and was not set on event "' +
                      e +
                      '".'
                  );
          }),
          (Q.offEvent = function (e, n, t) {
            (0, i.logInfo)("Invoking ihowpbjs.offEvent", arguments),
              (t && !pe[e].call(null, t)) || ee.off(e, n, t);
          }),
          (Q.getEvents = function () {
            return (
              (0, i.logInfo)("Invoking ihowpbjs.getEvents"), ee.getEvents()
            );
          }),
          (Q.registerBidAdapter = function (e, n) {
            (0, i.logInfo)("Invoking ihowpbjs.registerBidAdapter", arguments);
            try {
              $.registerBidAdapter(e(), n);
            } catch (e) {
              (0, i.logError)(
                "Error registering bidder adapter : " + e.message
              );
            }
          }),
          (Q.registerAnalyticsAdapter = function (e) {
            (0, i.logInfo)(
              "Invoking ihowpbjs.registerAnalyticsAdapter",
              arguments
            );
            try {
              $.registerAnalyticsAdapter(e);
            } catch (e) {
              (0, i.logError)(
                "Error registering analytics adapter : " + e.message
              );
            }
          }),
          (Q.createBid = function (e) {
            return (
              (0, i.logInfo)("Invoking ihowpbjs.createBid", arguments),
              (0, K.m)(e)
            );
          });
        var Se = [],
          Ae = (0, O.z3)(
            "async",
            function (e) {
              e && !(0, i.isEmpty)(e)
                ? ((0, i.logInfo)("Invoking ihowpbjs.enableAnalytics for: ", e),
                  $.enableAnalytics(e))
                : (0, i.logError)(
                    "ihowpbjs.enableAnalytics should be called with option {}"
                  );
            },
            "enableAnalyticsCb"
          );
        function Te(e) {
          e.forEach(function (e) {
            if (void 0 === e.called)
              try {
                e.call(), (e.called = !0);
              } catch (e) {
                (0, i.logError)("Error processing command :", "prebid.js", e);
              }
          });
        }
        (Q.enableAnalytics = function (e) {
          Se.push(Ae.bind(this, e));
        }),
          (Q.aliasBidder = function (e, n, t) {
            (0, i.logInfo)("Invoking ihowpbjs.aliasBidder", arguments),
              e && n
                ? $.aliasBidAdapter(e, n, t)
                : (0, i.logError)(
                    "bidderCode and alias must be passed as arguments",
                    "ihowpbjs.aliasBidder"
                  );
          }),
          (Q.getAllWinningBids = function () {
            return s.K.getAllWinningBids();
          }),
          (Q.getAllPrebidWinningBids = function () {
            return s.K.getBidsReceived().filter(function (e) {
              return e.status === X.BID_STATUS.BID_TARGETING_SET;
            });
          }),
          (Q.getHighestCpmBids = function (e) {
            return C.q0.getWinningBids(e);
          }),
          (Q.markWinningBidAsUsed = function (e) {
            var n = [];
            e.adUnitCode && e.adId
              ? (n = s.K.getBidsReceived().filter(function (n) {
                  return n.adId === e.adId && n.adUnitCode === e.adUnitCode;
                }))
              : e.adUnitCode
              ? (n = C.q0.getWinningBids(e.adUnitCode))
              : e.adId
              ? (n = s.K.getBidsReceived().filter(function (n) {
                  return n.adId === e.adId;
                }))
              : (0, i.logWarn)(
                  "Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."
                ),
              n.length > 0 && (n[0].status = X.BID_STATUS.RENDERED);
          }),
          (Q.getConfig = l.vc.getConfig),
          (Q.readConfig = l.vc.readConfig),
          (Q.mergeConfig = l.vc.mergeConfig),
          (Q.mergeBidderConfig = l.vc.mergeBidderConfig),
          (Q.setConfig = l.vc.setConfig),
          (Q.setBidderConfig = l.vc.setBidderConfig),
          Q.que.push(function () {
            window.addEventListener("message", S, !1);
          }),
          (Q.cmd.push = function (e) {
            if ("function" == typeof e)
              try {
                e.call();
              } catch (e) {
                (0, i.logError)(
                  "Error processing command :",
                  e.message,
                  e.stack
                );
              }
            else
              (0, i.logError)(
                "Commands written into ihowpbjs.cmd.push must be wrapped in a function"
              );
          }),
          (Q.que.push = Q.cmd.push),
          (Q.processQueue = function () {
            O.z3.ready(), Te(Q.que), Te(Q.cmd);
          });
      },
      528: function (e, n, t) {
        "use strict";
        function r() {
          return window.ihowpbjs;
        }
        t.d(n, {
          R: function () {
            return r;
          },
        }),
          (window.ihowpbjs = window.ihowpbjs || {}),
          (window.ihowpbjs.cmd = window.ihowpbjs.cmd || []),
          (window.ihowpbjs.que = window.ihowpbjs.que || []),
          (window._pbjsGlobals = window._pbjsGlobals || []),
          window._pbjsGlobals.push("ihowpbjs");
      },
      661: function (e, n, t) {
        "use strict";
        t.d(n, {
          n: function () {
            return o;
          },
        });
        var r = t(962),
          i = t(853),
          o = (function (e) {
            function n(e) {
              var n = r.vc.getConfig("pageUrl");
              if (n) return n;
              try {
                var t = e.querySelector("link[rel='canonical']");
                if (null !== t) return t.href;
              } catch (e) {}
              return null;
            }
            return function () {
              var t,
                o,
                a,
                c = [],
                u = (function (e) {
                  try {
                    if (!e.location.ancestorOrigins) return;
                    return e.location.ancestorOrigins;
                  } catch (e) {}
                })(e),
                s = r.vc.getConfig("maxNestedIframes"),
                d = !1,
                f = 0,
                l = !1,
                g = !1;
              do {
                var p = t,
                  v = g,
                  y = void 0,
                  b = !1,
                  m = null;
                (g = !1), (t = t ? t.parent : e);
                try {
                  y = t.location.href || null;
                } catch (e) {
                  b = !0;
                }
                if (b)
                  if (v) {
                    var h = p.context;
                    try {
                      (o = m = h.sourceUrl),
                        (l = !0),
                        t === e.top && (d = !0),
                        h.canonicalUrl && (a = h.canonicalUrl);
                    } catch (e) {}
                  } else {
                    (0, i.logWarn)(
                      "Trying to access cross domain iframe. Continuing without referrer and location"
                    );
                    try {
                      var E = p.document.referrer;
                      E && ((m = E), t === e.top && (d = !0));
                    } catch (e) {}
                    !m && u && u[f - 1] && (m = u[f - 1]), m && !l && (o = m);
                  }
                else {
                  if (y && ((o = m = y), (l = !1), t === e.top)) {
                    d = !0;
                    var S = n(t.document);
                    S && (a = S);
                  }
                  t.context && t.context.sourceUrl && (g = !0);
                }
                c.push(m), f++;
              } while (t !== e.top && f < s);
              return (
                c.reverse(),
                {
                  referer: o || null,
                  reachedTop: d,
                  isAmp: l,
                  numIframes: f - 1,
                  stack: c,
                  canonicalUrl: a || null,
                }
              );
            };
          })(window);
      },
      269: function (e, n, t) {
        "use strict";
        t.d(n, {
          UB: function () {
            return g;
          },
          lO: function () {
            return d;
          },
        });
        var r = t(962),
          i = t(853),
          o = t(265),
          a = t(879);
        function c(e) {
          return (
            (c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            c(e)
          );
        }
        var u = [];
        function s(e, n) {
          return e.labelAll
            ? { labelAll: !0, labels: e.labelAll, activeLabels: n }
            : { labelAll: !1, labels: e.labelAny, activeLabels: n };
        }
        function d(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u,
            t = l(n);
          return !t.shouldFilter || !!t.sizesSupported[e];
        }
        function f() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.labels,
            t = void 0 === n ? [] : n,
            r = e.labelAll,
            c = void 0 !== r && r,
            s = e.activeLabels,
            d = void 0 === s ? [] : s,
            f = arguments.length > 1 ? arguments[1] : void 0,
            g = arguments.length > 2 ? arguments[2] : void 0,
            p =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : u,
            v = l(p);
          f = (0, i.isPlainObject)(f)
            ? (0, i.deepClone)(f)
            : g
            ? { banner: { sizes: g } }
            : {};
          var y = (0, o.Z)(f, "banner.sizes");
          v.shouldFilter &&
            y &&
            (f.banner.sizes = y.filter(function (e) {
              return v.sizesSupported[e];
            }));
          var b = Object.keys(f),
            m = {
              active:
                b.every(function (e) {
                  return "banner" !== e;
                }) ||
                (b.some(function (e) {
                  return "banner" === e;
                }) &&
                  (0, o.Z)(f, "banner.sizes.length") > 0 &&
                  (0 === t.length ||
                    (!c &&
                      (t.some(function (e) {
                        return v.labels[e];
                      }) ||
                        t.some(function (e) {
                          return (0, a.q9)(d, e);
                        }))) ||
                    (c &&
                      t.reduce(function (e, n) {
                        return e ? v.labels[n] || (0, a.q9)(d, n) : e;
                      }, !0)))),
              mediaTypes: f,
            };
          return (
            y &&
              y.length !== f.banner.sizes.length &&
              (m.filterResults = { before: y, after: f.banner.sizes }),
            m
          );
        }
        function l(e) {
          return e.reduce(
            function (e, n) {
              if (
                "object" === c(n) &&
                "string" == typeof n.mediaQuery &&
                n.mediaQuery.length > 0
              ) {
                var t = !1;
                try {
                  t = (0, i.getWindowTop)().matchMedia(n.mediaQuery).matches;
                } catch (e) {
                  (0, i.logWarn)(
                    "Unfriendly iFrame blocks sizeConfig from being correctly evaluated"
                  ),
                    (t = matchMedia(n.mediaQuery).matches);
                }
                t &&
                  (Array.isArray(n.sizesSupported) && (e.shouldFilter = !0),
                  ["labels", "sizesSupported"].forEach(function (t) {
                    return (n[t] || []).forEach(function (n) {
                      return (e[t][n] = !0);
                    });
                  }));
              } else
                (0, i.logWarn)(
                  'sizeConfig rule missing required property "mediaQuery"'
                );
              return e;
            },
            { labels: {}, sizesSupported: {}, shouldFilter: !1 }
          );
        }
        function g(e, n) {
          return e.reduce(function (e, t) {
            var r = f(s(t, n), t.mediaTypes, t.sizes),
              o = r.active,
              a = r.mediaTypes,
              c = r.filterResults;
            return (
              o
                ? (c &&
                    (0, i.logInfo)(
                      'Size mapping filtered adUnit "'.concat(
                        t.code,
                        '" banner sizes from '
                      ),
                      c.before,
                      "to ",
                      c.after
                    ),
                  (t.mediaTypes = a),
                  (t.bids = t.bids.reduce(function (e, r) {
                    var o = f(s(r, n), t.mediaTypes),
                      a = o.active,
                      c = o.mediaTypes,
                      u = o.filterResults;
                    return (
                      a
                        ? (u &&
                            ((0, i.logInfo)(
                              'Size mapping filtered adUnit "'
                                .concat(t.code, '" bidder "')
                                .concat(r.bidder, '" banner sizes from '),
                              u.before,
                              "to ",
                              u.after
                            ),
                            (r.mediaTypes = c)),
                          e.push(r))
                        : (0, i.logInfo)(
                            'Size mapping deactivated adUnit "'
                              .concat(t.code, '" bidder "')
                              .concat(r.bidder, '"')
                          ),
                      e
                    );
                  }, [])),
                  e.push(t))
                : (0, i.logInfo)(
                    'Size mapping disabled adUnit "'.concat(t.code, '"')
                  ),
              e
            );
          }, []);
        }
        r.vc.getConfig("sizeConfig", function (e) {
          return (function (e) {
            u = e;
          })(e.sizeConfig);
        });
      },
      849: function (e, n, t) {
        "use strict";
        t.d(n, {
          Ld: function () {
            return u;
          },
          df: function () {
            return l;
          },
          eA: function () {
            return f;
          },
        });
        var r = t(494),
          i = t(853),
          o = t(879),
          a = t(624),
          c = ["core", "prebid-module"],
          u = [];
        function s() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.gvlid,
            t = e.moduleName,
            r = e.bidderCode,
            s = e.moduleType,
            f =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            l = f.bidderSettings,
            g = void 0 === l ? a.S : l;
          function p() {
            if (null == r) return !1;
            var e = g.get(r, "storageAllowed");
            return null != e && !e;
          }
          function v(e) {
            return (0, o.q9)(c, s)
              ? e({ valid: !0 })
              : p()
              ? ((0, i.logInfo)(
                  "bidderSettings denied access to device storage for bidder '".concat(
                    r,
                    "'"
                  )
                ),
                e({ valid: !1 }))
              : (d(n, r || t, { hasEnforcementHook: !1 }, function (n) {
                  if (n && n.hasEnforcementHook) a = e(n);
                  else {
                    var t = {
                      hasEnforcementHook: !1,
                      valid: (0, i.hasDeviceAccess)(),
                    };
                    a = e(t);
                  }
                }),
                a);
            var a;
          }
          var y = function (e, n, t, r, i, o) {
              var a = function (o) {
                if (o && o.valid) {
                  var a =
                      i && "" !== i
                        ? " ;domain=".concat(encodeURIComponent(i))
                        : "",
                    c = t && "" !== t ? " ;expires=".concat(t) : "",
                    u =
                      null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                  document.cookie = ""
                    .concat(e, "=")
                    .concat(encodeURIComponent(n))
                    .concat(c, "; path=/")
                    .concat(a)
                    .concat(r ? "; SameSite=".concat(r) : "")
                    .concat(u);
                }
              };
              if (!o || "function" != typeof o) return v(a);
              u.push(function () {
                var e = v(a);
                o(e);
              });
            },
            b = function (e, n) {
              var t = function (n) {
                if (n && n.valid) {
                  var t = window.document.cookie.match(
                    "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)"
                  );
                  return t ? decodeURIComponent(t[2]) : null;
                }
                return null;
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            },
            m = function (e) {
              var n = function (e) {
                if (e && e.valid)
                  try {
                    return (
                      localStorage.setItem("prebid.cookieTest", "1"),
                      "1" === localStorage.getItem("prebid.cookieTest")
                    );
                  } catch (e) {
                  } finally {
                    try {
                      localStorage.removeItem("prebid.cookieTest");
                    } catch (e) {}
                  }
                return !1;
              };
              if (!e || "function" != typeof e) return v(n);
              u.push(function () {
                var t = v(n);
                e(t);
              });
            },
            h = function (e) {
              var n = function (e) {
                return !(
                  !e ||
                  !e.valid ||
                  (!(0, i.checkCookieSupport)() &&
                    ((window.document.cookie = "prebid.cookieTest"),
                    -1 === window.document.cookie.indexOf("prebid.cookieTest")))
                );
              };
              if (!e || "function" != typeof e) return v(n);
              u.push(function () {
                var t = v(n);
                e(t);
              });
            },
            E = function (e, n, t) {
              var r = function (t) {
                t && t.valid && T() && window.localStorage.setItem(e, n);
              };
              if (!t || "function" != typeof t) return v(r);
              u.push(function () {
                var e = v(r);
                t(e);
              });
            },
            S = function (e, n) {
              var t = function (n) {
                return n && n.valid && T()
                  ? window.localStorage.getItem(e)
                  : null;
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            },
            A = function (e, n) {
              var t = function (n) {
                n && n.valid && T() && window.localStorage.removeItem(e);
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            },
            T = function (e) {
              var n = function (e) {
                if (e && e.valid)
                  try {
                    return !!window.localStorage;
                  } catch (e) {
                    (0, i.logError)("Local storage api disabled");
                  }
                return !1;
              };
              if (!e || "function" != typeof e) return v(n);
              u.push(function () {
                var t = v(n);
                e(t);
              });
            },
            I = function (e, n) {
              var t = function (n) {
                if (n && n.valid) {
                  var t = [];
                  if ((0, i.hasDeviceAccess)())
                    for (var r = document.cookie.split(";"); r.length; ) {
                      var o = r.pop(),
                        a = o.indexOf("=");
                      (a = a < 0 ? o.length : a),
                        decodeURIComponent(
                          o.slice(0, a).replace(/^\s+/, "")
                        ).indexOf(e) >= 0 &&
                          t.push(decodeURIComponent(o.slice(a + 1)));
                    }
                  return t;
                }
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            };
          return {
            setCookie: y,
            getCookie: b,
            localStorageIsEnabled: m,
            cookiesAreEnabled: h,
            setDataInLocalStorage: E,
            getDataFromLocalStorage: S,
            removeDataFromLocalStorage: A,
            hasLocalStorage: T,
            findSimilarCookies: I,
          };
        }
        var d = (0, r.z3)(
          "async",
          function (e, n, t, r) {
            r(t);
          },
          "validateStorageEnforcement"
        );
        function f(e) {
          return s({ moduleName: e, moduleType: "core" });
        }
        function l() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.gvlid,
            t = e.moduleName,
            r = e.bidderCode;
          if (
            arguments.length > 1 ||
            (arguments.length > 0 && !(0, i.isPlainObject)(arguments[0]))
          )
            throw new Error("Invalid invocation for getStorageManager");
          return s({ gvlid: n, moduleName: t, bidderCode: r });
        }
      },
      742: function (e, n, t) {
        "use strict";
        t.d(n, {
          q0: function () {
            return C;
          },
          u8: function () {
            return T;
          },
        });
        var r = t(853),
          i = t(265),
          o = t(962),
          a = t(17),
          c = t(766),
          u = t(269),
          s = t(3),
          d = t(494),
          f = t(624),
          l = t(879);
        function g() {
          return (
            (g =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            g.apply(this, arguments)
          );
        }
        function p(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = t),
            e
          );
        }
        function v(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return y(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return y(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? y(e, n)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function y(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        var b = t(644),
          m = [],
          h = "targetingControls.allowTargetingKeys",
          E = "targetingControls.addTargetingKeys",
          S = 'Only one of "'.concat(h, '" or "').concat(E, '" can be set'),
          A = Object.keys(b.TARGETING_KEYS).map(function (e) {
            return b.TARGETING_KEYS[e];
          }),
          T = {
            isBidNotExpired: function (e) {
              return (
                e.responseTimestamp + 1e3 * e.ttl - 1e3 > (0, r.timestamp)()
              );
            },
            isUnusedBid: function (e) {
              return (
                e &&
                ((e.status && !(0, l.q9)([b.BID_STATUS.RENDERED], e.status)) ||
                  !e.status)
              );
            },
          },
          I = (0, d.z3)("sync", function (e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              i =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!i) {
              var a = [],
                c = o.vc.getConfig("sendBidsControl.dealPrioritization"),
                u = (0, r.groupBy)(e, "adUnitCode");
              return (
                Object.keys(u).forEach(function (e) {
                  var i = [],
                    o = (0, r.groupBy)(u[e], "bidderCode");
                  Object.keys(o).forEach(function (e) {
                    return i.push(o[e].reduce(n));
                  }),
                    t > 0
                      ? ((i = c
                          ? i.sort(w(!0))
                          : i.sort(function (e, n) {
                              return n.cpm - e.cpm;
                            })),
                        a.push.apply(a, v(i.slice(0, t))))
                      : a.push.apply(a, v(i));
                }),
                a
              );
            }
            return e;
          });
        function w() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return function (n, t) {
            return void 0 !== n.adserverTargeting.hb_deal &&
              void 0 === t.adserverTargeting.hb_deal
              ? -1
              : void 0 === n.adserverTargeting.hb_deal &&
                void 0 !== t.adserverTargeting.hb_deal
              ? 1
              : e
              ? t.cpm - n.cpm
              : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb;
          };
        }
        var C = (function (e) {
          var n = {},
            t = {};
          function c(e, n) {
            return (
              e.adserverTargeting &&
              n &&
              (((0, r.isArray)(n) && (0, l.q9)(n, e.adUnitCode)) ||
                ("string" == typeof n && e.adUnitCode === n))
            );
          }
          function d(e, n) {
            if (!0 === o.vc.getConfig("targetingControls.alwaysIncludeDeals")) {
              var t = A.concat(a.xc);
              return I(n, r.getHighestCpm)
                .map(function (n) {
                  if (n.dealId && c(n, e))
                    return p(
                      {},
                      n.adUnitCode,
                      x(
                        n,
                        t.filter(function (e) {
                          return void 0 !== n.adserverTargeting[e];
                        })
                      )
                    );
                })
                .filter(function (e) {
                  return e;
                });
            }
            return [];
          }
          function y(e, n) {
            var t = g({}, b.TARGETING_KEYS, b.NATIVE_KEYS),
              i = Object.keys(t),
              o = {};
            (0, r.logInfo)(
              "allowTargetingKeys - allowed keys [ ".concat(
                n
                  .map(function (e) {
                    return t[e];
                  })
                  .join(", "),
                " ]"
              )
            ),
              e.map(function (e) {
                var r = Object.keys(e)[0],
                  a = e[r].filter(function (e) {
                    var r = Object.keys(e)[0],
                      a =
                        0 ===
                          i.filter(function (e) {
                            return 0 === r.indexOf(t[e]);
                          }).length ||
                        (0, l.sE)(n, function (e) {
                          var n = t[e];
                          return 0 === r.indexOf(n);
                        });
                    return (o[r] = !a), a;
                  });
                e[r] = a;
              });
            var a = Object.keys(o).filter(function (e) {
              return o[e];
            });
            return (
              (0, r.logInfo)(
                "allowTargetingKeys - removed keys [ ".concat(
                  a.join(", "),
                  " ]"
                )
              ),
              e.filter(function (e) {
                return e[Object.keys(e)[0]].length > 0;
              })
            );
          }
          function C(e, n) {
            var t = (0, r.deepClone)(e);
            return Object.keys(t)
              .map(function (e) {
                return { adUnitCode: e, adserverTargeting: t[e] };
              })
              .sort(w())
              .reduce(function (e, i, o, a) {
                var c,
                  u =
                    ((c = i.adserverTargeting),
                    Object.keys(c).reduce(function (e, n) {
                      return (
                        e +
                        ""
                          .concat(n, "%3d")
                          .concat(encodeURIComponent(c[n]), "%26")
                      );
                    }, ""));
                o + 1 === a.length && (u = u.slice(0, -3));
                var s = i.adUnitCode,
                  d = u.length;
                return (
                  d <= n
                    ? ((n -= d),
                      (0, r.logInfo)(
                        "AdUnit '"
                          .concat(s, "' auction keys comprised of ")
                          .concat(
                            d,
                            " characters.  Deducted from running threshold; new limit is "
                          )
                          .concat(n),
                        t[s]
                      ),
                      (e[s] = t[s]))
                    : (0, r.logWarn)(
                        "The following keys for adUnitCode '"
                          .concat(
                            s,
                            "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was "
                          )
                          .concat(d, ", the current allotted amount was ")
                          .concat(n, ".\n"),
                        t[s]
                      ),
                  o + 1 === a.length &&
                    0 === Object.keys(e).length &&
                    (0, r.logError)(
                      "No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."
                    ),
                  e
                );
              }, {});
          }
          function O(e) {
            var n = e
              .map(function (e) {
                return p(
                  {},
                  Object.keys(e)[0],
                  e[Object.keys(e)[0]]
                    .map(function (e) {
                      return p(
                        {},
                        Object.keys(e)[0],
                        e[Object.keys(e)[0]].join(",")
                      );
                    })
                    .reduce(function (e, n) {
                      return g(n, e);
                    }, {})
                );
              })
              .reduce(function (e, n) {
                var t = Object.keys(n)[0];
                return (e[t] = g({}, e[t], n[t])), e;
              }, {});
            return n;
          }
          function B(n) {
            return "string" == typeof n
              ? [n]
              : (0, r.isArray)(n)
              ? n
              : e.getAdUnitCodes() || [];
          }
          function U() {
            var n = e.getBidsReceived();
            if (o.vc.getConfig("useBidCache")) {
              var a = o.vc.getConfig("bidCacheFilterFunction");
              "function" == typeof a &&
                (n = n.filter(function (e) {
                  return t[e.adUnitCode] === e.auctionId || !!a(e);
                }));
            } else
              n = n.filter(function (e) {
                return t[e.adUnitCode] === e.auctionId;
              });
            return (
              (n = n
                .filter(function (e) {
                  return (0, i.Z)(e, "video.context") !== s.Oh;
                })
                .filter(function (e) {
                  return (
                    "banner" !== e.mediaType || (0, u.lO)([e.width, e.height])
                  );
                })
                .filter(T.isUnusedBid)
                .filter(T.isBidNotExpired)),
              I(n, r.getOldestHighestCpmBid)
            );
          }
          function R(e, t) {
            var r = n.getWinningBids(e, t),
              i = D();
            return (
              (r = r.map(function (e) {
                return p(
                  {},
                  e.adUnitCode,
                  Object.keys(e.adserverTargeting)
                    .filter(function (n) {
                      return (
                        void 0 === e.sendStandardTargeting ||
                        e.sendStandardTargeting ||
                        -1 === i.indexOf(n)
                      );
                    })
                    .reduce(function (n, t) {
                      var r = [e.adserverTargeting[t]],
                        i = p({}, t.substring(0, 20), r);
                      if (t === b.TARGETING_KEYS.DEAL) {
                        var o = p(
                          {},
                          ""
                            .concat(t, "_")
                            .concat(e.bidderCode)
                            .substring(0, 20),
                          r
                        );
                        return [].concat(v(n), [i, o]);
                      }
                      return [].concat(v(n), [i]);
                    }, [])
                );
              })),
              r
            );
          }
          function D() {
            return e
              .getStandardBidderAdServerTargeting()
              .map(function (e) {
                return e.key;
              })
              .concat(A)
              .filter(r.uniques);
          }
          function _(e, n, t, i) {
            return (
              Object.keys(n.adserverTargeting)
                .filter(k())
                .forEach(function (t) {
                  e.length &&
                    e
                      .filter(
                        (function (e) {
                          return function (t) {
                            return (
                              t.adUnitCode === n.adUnitCode &&
                              t.adserverTargeting[e]
                            );
                          };
                        })(t)
                      )
                      .forEach(
                        (function (e) {
                          return function (t) {
                            (0, r.isArray)(t.adserverTargeting[e]) ||
                              (t.adserverTargeting[e] = [
                                t.adserverTargeting[e],
                              ]),
                              (t.adserverTargeting[e] = t.adserverTargeting[e]
                                .concat(n.adserverTargeting[e])
                                .filter(r.uniques)),
                              delete n.adserverTargeting[e];
                          };
                        })(t)
                      );
                }),
              e.push(n),
              e
            );
          }
          function k() {
            var e = D().concat(a.xc);
            return function (n) {
              return -1 === e.indexOf(n);
            };
          }
          function j(e) {
            return p(
              {},
              e.adUnitCode,
              Object.keys(e.adserverTargeting)
                .filter(k())
                .map(function (n) {
                  return p({}, n.substring(0, 20), [e.adserverTargeting[n]]);
                })
            );
          }
          function N(e, n) {
            return n
              .filter(function (n) {
                return (0, l.q9)(e, n.adUnitCode);
              })
              .map(function (e) {
                return g({}, e);
              })
              .reduce(_, [])
              .map(j)
              .filter(function (e) {
                return e;
              });
          }
          function P(e, n) {
            var t = A.concat(a.xc),
              i = o.vc.getConfig("sendBidsControl.bidLimit"),
              u = I(n, r.getHighestCpm, i),
              s = o.vc.getConfig(
                "targetingControls.allowSendAllBidsTargetingKeys"
              ),
              d = s
                ? s.map(function (e) {
                    return b.TARGETING_KEYS[e];
                  })
                : t;
            return u
              .map(function (n) {
                if (c(n, e))
                  return p(
                    {},
                    n.adUnitCode,
                    x(
                      n,
                      t.filter(function (e) {
                        return (
                          void 0 !== n.adserverTargeting[e] &&
                          -1 !== d.indexOf(e)
                        );
                      })
                    )
                  );
              })
              .filter(function (e) {
                return e;
              });
          }
          function x(e, n) {
            return n.map(function (n) {
              return p(
                {},
                "".concat(n, "_").concat(e.bidderCode).substring(0, 20),
                [e.adserverTargeting[n]]
              );
            });
          }
          function q(n) {
            function t(e) {
              return (0, i.Z)(e, b.JSON_MAPPING.ADSERVER_TARGETING);
            }
            return e
              .getAdUnits()
              .filter(function (e) {
                return (0, l.q9)(n, e.code) && t(e);
              })
              .map(function (e) {
                return p(
                  {},
                  e.code,
                  (function (e) {
                    var n = t(e);
                    return Object.keys(n).map(function (e) {
                      return (
                        (0, r.isStr)(n[e]) &&
                          (n[e] = n[e].split(",").map(function (e) {
                            return e.trim();
                          })),
                        (0, r.isArray)(n[e]) || (n[e] = [n[e]]),
                        p({}, e, n[e])
                      );
                    });
                  })(e)
                );
              });
          }
          return (
            (n.setLatestAuctionForAdUnit = function (e, n) {
              t[e] = n;
            }),
            (n.resetPresetTargeting = function (n, t) {
              if ((0, r.isGptPubadsDefined)()) {
                var i = B(n),
                  o = e.getAdUnits().filter(function (e) {
                    return (0, l.q9)(i, e.code);
                  }),
                  a = m.reduce(function (e, n) {
                    return (e[n] = null), e;
                  }, {});
                window.googletag
                  .pubads()
                  .getSlots()
                  .forEach(function (e) {
                    var n = (0, r.isFn)(t) && t(e);
                    o.forEach(function (t) {
                      (t.code === e.getAdUnitPath() ||
                        t.code === e.getSlotElementId() ||
                        ((0, r.isFn)(n) && n(t.code))) &&
                        e.updateTargetingFromMap(a);
                    });
                  });
              }
            }),
            (n.resetPresetTargetingAST = function (e) {
              B(e).forEach(function (e) {
                var n = window.apntag.getTag(e);
                if (n && n.keywords) {
                  var t = Object.keys(n.keywords),
                    r = {};
                  t.forEach(function (e) {
                    (0, l.q9)(m, e.toLowerCase()) || (r[e] = n.keywords[e]);
                  }),
                    window.apntag.modifyTag(e, { keywords: r });
                }
              });
            }),
            (n.getAllTargeting = function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : U(),
                t = B(e),
                i = R(t, n)
                  .concat(N(t, n))
                  .concat(
                    o.vc.getConfig("enableSendAllBids") ? P(t, n) : d(t, n)
                  )
                  .concat(q(t));
              i.map(function (e) {
                Object.keys(e).map(function (n) {
                  e[n].map(function (e) {
                    -1 === m.indexOf(Object.keys(e)[0]) &&
                      (m = Object.keys(e).concat(m));
                  });
                });
              });
              var a = Object.keys(
                  g({}, b.DEFAULT_TARGETING_KEYS, b.NATIVE_KEYS)
                ),
                c = o.vc.getConfig(h),
                u = o.vc.getConfig(E);
              if (null != u && null != c) throw new Error(S);
              (c = null != u ? a.concat(u) : c || a),
                Array.isArray(c) && c.length > 0 && (i = y(i, c)),
                (i = O(i));
              var s = o.vc.getConfig("targetingControls.auctionKeyMaxChars");
              return (
                s &&
                  ((0, r.logInfo)(
                    "Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
                      s,
                      " characters.  Running checks on auction keys..."
                    )
                  ),
                  (i = C(i, s))),
                t.forEach(function (e) {
                  i[e] || (i[e] = {});
                }),
                i
              );
            }),
            o.vc.getConfig("targetingControls", function (e) {
              null != (0, i.Z)(e, h) &&
                null != (0, i.Z)(e, E) &&
                (0, r.logError)(S);
            }),
            (n.setTargetingForGPT = function (e, n) {
              window.googletag
                .pubads()
                .getSlots()
                .forEach(function (t) {
                  Object.keys(e)
                    .filter(n ? n(t) : (0, r.isAdUnitCodeMatchingSlot)(t))
                    .forEach(function (n) {
                      Object.keys(e[n]).forEach(function (t) {
                        var r = e[n][t];
                        "string" == typeof r &&
                          -1 !== r.indexOf(",") &&
                          (r = r.split(",")),
                          (e[n][t] = r);
                      }),
                        (0, r.logMessage)(
                          "Attempting to set targeting-map for slot: ".concat(
                            t.getSlotElementId(),
                            " with targeting-map:"
                          ),
                          e[n]
                        ),
                        t.updateTargetingFromMap(e[n]);
                    });
                });
            }),
            (n.getWinningBids = function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : U(),
                t = B(e);
              return n
                .filter(function (e) {
                  return (0, l.q9)(t, e.adUnitCode);
                })
                .filter(function (e) {
                  return !0 === f.S.get(e.bidderCode, "allowZeroCpmBids")
                    ? e.cpm >= 0
                    : e.cpm > 0;
                })
                .map(function (e) {
                  return e.adUnitCode;
                })
                .filter(r.uniques)
                .map(function (e) {
                  return n
                    .filter(function (n) {
                      return n.adUnitCode === e ? n : null;
                    })
                    .reduce(r.getHighestCpm);
                });
            }),
            (n.setTargetingForAst = function (e) {
              var t = n.getAllTargeting(e);
              try {
                n.resetPresetTargetingAST(e);
              } catch (e) {
                (0, r.logError)("unable to reset targeting for AST" + e);
              }
              Object.keys(t).forEach(function (e) {
                return Object.keys(t[e]).forEach(function (n) {
                  if (
                    ((0, r.logMessage)(
                      "Attempting to set targeting for targetId: "
                        .concat(e, " key: ")
                        .concat(n, " value: ")
                        .concat(t[e][n])
                    ),
                    (0, r.isStr)(t[e][n]) || (0, r.isArray)(t[e][n]))
                  ) {
                    var i = {};
                    n.search(/pt[0-9]/) < 0
                      ? (i[n.toUpperCase()] = t[e][n])
                      : (i[n] = t[e][n]),
                      window.apntag.setKeywords(e, i, { overrideKeyValue: !0 });
                  }
                });
              });
            }),
            (n.isApntagDefined = function () {
              if (window.apntag && (0, r.isFn)(window.apntag.setKeywords))
                return !0;
            }),
            n
          );
        })(c.K);
      },
      112: function (e, n, t) {
        "use strict";
        t.d(n, {
          k_: function () {
            return l;
          },
        });
        var r = t(853),
          i = t(962),
          o = t(879),
          a = t(849);
        function c(e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != t) {
                var r,
                  i,
                  o = [],
                  a = !0,
                  c = !1;
                try {
                  for (
                    t = t.call(e);
                    !(a = (r = t.next()).done) &&
                    (o.push(r.value), !n || o.length !== n);
                    a = !0
                  );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    a || null == t.return || t.return();
                  } finally {
                    if (c) throw i;
                  }
                }
                return o;
              }
            })(e, n) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return u(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? u(e, n)
                    : void 0
                );
              }
            })(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function u(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function s() {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            s.apply(this, arguments)
          );
        }
        i.vc.setDefaults({
          userSync: (0, r.deepClone)({
            syncEnabled: !0,
            filterSettings: { image: { bidders: "*", filter: "include" } },
            syncsPerBidder: 5,
            syncDelay: 3e3,
            auctionDelay: 0,
          }),
        });
        var d = (0, a.eA)("usersync"),
          f = !(0, r.isSafariBrowser)() && d.cookiesAreEnabled(),
          l = (function (e) {
            var n = {},
              t = { image: [], iframe: [] },
              a = new Set(),
              u = {},
              d = { image: !0, iframe: !1 },
              f = e.config;
            function l() {
              if (f.syncEnabled && e.browserSupportsCookies) {
                try {
                  d.iframe &&
                    g(t.iframe, function (e) {
                      var n = c(e, 2),
                        i = n[0],
                        o = n[1];
                      (0, r.logMessage)(
                        "Invoking iframe user sync for bidder: ".concat(i)
                      ),
                        (0, r.insertUserSyncIframe)(o),
                        (function (e, n) {
                          e.image = e.image.filter(function (e) {
                            return e[0] !== n;
                          });
                        })(t, i);
                    }),
                    d.image &&
                      g(t.image, function (e) {
                        var n = c(e, 2),
                          t = n[0],
                          i = n[1];
                        (0, r.logMessage)(
                          "Invoking image pixel user sync for bidder: ".concat(
                            t
                          )
                        ),
                          (0, r.triggerPixel)(i);
                      });
                } catch (e) {
                  return (0, r.logError)("Error firing user syncs", e);
                }
                t = { image: [], iframe: [] };
              }
            }
            function g(e, n) {
              (0, r.shuffle)(e).forEach(function (e) {
                n(e), a.add(e[0]);
              });
            }
            return (
              i.vc.getConfig("userSync", function (e) {
                if (e.userSync) {
                  var n = e.userSync.filterSettings;
                  (0, r.isPlainObject)(n) &&
                    (n.image ||
                      n.all ||
                      (e.userSync.filterSettings.image = {
                        bidders: "*",
                        filter: "include",
                      }));
                }
                f = s(f, e.userSync);
              }),
              (n.registerSync = function (e, i, o) {
                return a.has(i)
                  ? (0, r.logMessage)(
                      'already fired syncs for "'.concat(
                        i,
                        '", ignoring registerSync call'
                      )
                    )
                  : f.syncEnabled && (0, r.isArray)(t[e])
                  ? i
                    ? 0 !== f.syncsPerBidder && Number(u[i]) >= f.syncsPerBidder
                      ? (0, r.logWarn)(
                          'Number of user syncs exceeded for "'.concat(i, '"')
                        )
                      : n.canBidderRegisterSync(e, i)
                      ? (t[e].push([i, o]),
                        void (u = (function (e, n) {
                          return e[n] ? (e[n] += 1) : (e[n] = 1), e;
                        })(u, i)))
                      : (0, r.logWarn)(
                          'Bidder "'
                            .concat(i, '" not permitted to register their "')
                            .concat(e, '" userSync pixels.')
                        )
                    : (0, r.logWarn)("Bidder is required for registering sync")
                  : (0, r.logWarn)(
                      'User sync type "'.concat(e, '" not supported')
                    );
              }),
              (n.syncUsers = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if (e) return setTimeout(l, Number(e));
                l();
              }),
              (n.triggerUserSyncs = function () {
                f.enableOverride && n.syncUsers();
              }),
              (n.canBidderRegisterSync = function (e, n) {
                return (
                  !f.filterSettings ||
                  !(function (e, n) {
                    var t = f.filterSettings;
                    if (
                      (function (e, n) {
                        if (e.all && e[n])
                          return (
                            (0, r.logWarn)(
                              'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
                                n,
                                '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
                              )
                            ),
                            !1
                          );
                        var t = e.all ? e.all : e[n],
                          i = e.all ? "all" : n;
                        if (!t) return !1;
                        var o = t.filter,
                          a = t.bidders;
                        return o && "include" !== o && "exclude" !== o
                          ? ((0, r.logWarn)(
                              'UserSync "filterSettings.'
                                .concat(i, ".filter\" setting '")
                                .concat(
                                  o,
                                  "' is not a valid option; use either 'include' or 'exclude'."
                                )
                            ),
                            !1)
                          : !!(
                              "*" === a ||
                              (Array.isArray(a) &&
                                a.length > 0 &&
                                a.every(function (e) {
                                  return (0, r.isStr)(e) && "*" !== e;
                                }))
                            ) ||
                              ((0, r.logWarn)(
                                'Detected an invalid setup in userSync "filterSettings.'.concat(
                                  i,
                                  ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
                                )
                              ),
                              !1);
                      })(t, e)
                    ) {
                      d[e] = !0;
                      var i = t.all ? t.all : t[e],
                        a = "*" === i.bidders ? [n] : i.bidders,
                        c = {
                          include: function (e, n) {
                            return !(0, o.q9)(e, n);
                          },
                          exclude: function (e, n) {
                            return (0, o.q9)(e, n);
                          },
                        };
                      return c[i.filter || "include"](a, n);
                    }
                    return !d[e];
                  })(e, n)
                );
              }),
              n
            );
          })({ config: i.vc.getConfig("userSync"), browserSupportsCookies: f });
      },
      853: function (e, n, t) {
        "use strict";
        t.r(n),
          t.d(n, {
            _each: function () {
              return de;
            },
            _map: function () {
              return le;
            },
            adUnitsFilter: function () {
              return xe;
            },
            bind: function () {
              return U;
            },
            buildUrl: function () {
              return Sn;
            },
            callBurl: function () {
              return be;
            },
            checkCookieSupport: function () {
              return Ve;
            },
            chunk: function () {
              return pn;
            },
            cleanObj: function () {
              return un;
            },
            compareOn: function () {
              return bn;
            },
            contains: function () {
              return fe;
            },
            convertCamelToUnderscore: function () {
              return cn;
            },
            convertTypes: function () {
              return fn;
            },
            createInvisibleIframe: function () {
              return $;
            },
            createTrackPixelHtml: function () {
              return Ee;
            },
            createTrackPixelIframeHtml: function () {
              return Se;
            },
            cyrb53Hash: function () {
              return In;
            },
            debugTurnedOn: function () {
              return X;
            },
            deepAccess: function () {
              return c.Z;
            },
            deepClone: function () {
              return qe;
            },
            deepEqual: function () {
              return An;
            },
            deepSetValue: function () {
              return u.Z;
            },
            delayExecution: function () {
              return He;
            },
            fill: function () {
              return gn;
            },
            flatten: function () {
              return Ie;
            },
            formatQS: function () {
              return hn;
            },
            generateUUID: function () {
              return _;
            },
            getAdUnitSizes: function () {
              return x;
            },
            getBidIdParameter: function () {
              return k;
            },
            getBidRequest: function () {
              return we;
            },
            getBidderCodes: function () {
              return Ue;
            },
            getDNT: function () {
              return $e;
            },
            getDefinedParams: function () {
              return Ye;
            },
            getGptSlotInfoForAdUnitCode: function () {
              return rn;
            },
            getHighestCpm: function () {
              return _e;
            },
            getKeyByValue: function () {
              return Be;
            },
            getKeys: function () {
              return Ce;
            },
            getLatestHighestCpmBid: function () {
              return je;
            },
            getMaxValueFromArray: function () {
              return yn;
            },
            getMinValueFromArray: function () {
              return vn;
            },
            getOldestHighestCpmBid: function () {
              return ke;
            },
            getOrigin: function () {
              return Xe;
            },
            getParameterByName: function () {
              return ee;
            },
            getPerformanceNow: function () {
              return Le;
            },
            getPrebidInternal: function () {
              return C;
            },
            getUniqueIdentifierStr: function () {
              return D;
            },
            getUserConfiguredParams: function () {
              return Qe;
            },
            getValue: function () {
              return Oe;
            },
            getValueString: function () {
              return Ae;
            },
            getWindowLocation: function () {
              return L;
            },
            getWindowSelf: function () {
              return z;
            },
            getWindowTop: function () {
              return F;
            },
            groupBy: function () {
              return Ze;
            },
            hasConsoleLogger: function () {
              return Q;
            },
            hasDeviceAccess: function () {
              return Ke;
            },
            hasOwn: function () {
              return ge;
            },
            inIframe: function () {
              return Me;
            },
            insertElement: function () {
              return pe;
            },
            insertHtmlIntoIframe: function () {
              return me;
            },
            insertUserSyncIframe: function () {
              return he;
            },
            internal: function () {
              return I;
            },
            isA: function () {
              return ne;
            },
            isAdUnitCodeMatchingSlot: function () {
              return nn;
            },
            isApnGetTagDefined: function () {
              return De;
            },
            isArray: function () {
              return ie;
            },
            isArrayOfNums: function () {
              return ln;
            },
            isBoolean: function () {
              return ce;
            },
            isEmpty: function () {
              return ue;
            },
            isEmptyStr: function () {
              return se;
            },
            isFn: function () {
              return te;
            },
            isGptPubadsDefined: function () {
              return Re;
            },
            isInteger: function () {
              return an;
            },
            isNumber: function () {
              return oe;
            },
            isPlainObject: function () {
              return ae;
            },
            isSafariBrowser: function () {
              return Ge;
            },
            isSlotMatchingAdUnitCode: function () {
              return tn;
            },
            isStr: function () {
              return re;
            },
            isValidMediaTypes: function () {
              return Je;
            },
            logError: function () {
              return Z;
            },
            logInfo: function () {
              return V;
            },
            logMessage: function () {
              return K;
            },
            logWarn: function () {
              return H;
            },
            mergeDeep: function () {
              return Tn;
            },
            parseGPTSingleSizeArray: function () {
              return M;
            },
            parseGPTSingleSizeArrayToRtbSize: function () {
              return G;
            },
            parseQS: function () {
              return mn;
            },
            parseQueryStringParameters: function () {
              return N;
            },
            parseSizesInput: function () {
              return q;
            },
            parseUrl: function () {
              return En;
            },
            pick: function () {
              return sn;
            },
            prefixLog: function () {
              return Y;
            },
            replaceAuctionPrice: function () {
              return We;
            },
            replaceClickThrough: function () {
              return Fe;
            },
            shuffle: function () {
              return Pe;
            },
            skipUndefinedValues: function () {
              return wn;
            },
            timestamp: function () {
              return ze;
            },
            transformAdServerTargetingObj: function () {
              return P;
            },
            transformBidderParamKeywords: function () {
              return dn;
            },
            triggerPixel: function () {
              return ye;
            },
            tryAppendQueryString: function () {
              return j;
            },
            uniques: function () {
              return Te;
            },
            unsupportedBidderMessage: function () {
              return on;
            },
            waitForElementToLoad: function () {
              return ve;
            },
          });
        var r = t(962),
          i = t(79),
          o = t.n(i),
          a = t(879),
          c = t(265),
          u = t(806);
        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return f(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            d(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function d(e, n) {
          if (e) {
            if ("string" == typeof e) return f(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? f(e, n)
                : void 0
            );
          }
        }
        function f(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function l(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = t),
            e
          );
        }
        function g() {
          return (
            (g =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            g.apply(this, arguments)
          );
        }
        function p(e) {
          return (
            (p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            p(e)
          );
        }
        var v,
          y = t(644),
          b = Object.prototype.toString,
          m = Boolean(window.console),
          h = Boolean(m && window.console.log),
          E = Boolean(m && window.console.info),
          S = Boolean(m && window.console.warn),
          A = Boolean(m && window.console.error),
          T = function () {
            return null == v && (v = t(319)), v.emit.apply(v, arguments);
          },
          I = {
            checkCookieSupport: Ve,
            createTrackPixelIframeHtml: Se,
            getWindowSelf: z,
            getWindowTop: F,
            getWindowLocation: L,
            insertUserSyncIframe: he,
            insertElement: pe,
            isFn: te,
            triggerPixel: ye,
            logError: Z,
            logWarn: H,
            logMessage: K,
            logInfo: V,
            parseQS: mn,
            formatQS: hn,
            deepEqual: An,
            isEmpty: ue,
            skipUndefinedValues: wn,
          },
          w = {};
        function C() {
          return w;
        }
        var O,
          B = {},
          U =
            function (e, n) {
              return n;
            }.bind(null, 1, B)() === B
              ? Function.prototype.bind
              : function (e) {
                  var n = this,
                    t = Array.prototype.slice.call(arguments, 1);
                  return function () {
                    return n.apply(
                      e,
                      t.concat(Array.prototype.slice.call(arguments))
                    );
                  };
                },
          R =
            ((O = 0),
            function () {
              return ++O;
            });
        function D() {
          return R() + Math.random().toString(16).substr(2);
        }
        function _(e) {
          return e
            ? (
                e ^
                ((window && window.crypto && window.crypto.getRandomValues
                  ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                  : 16 * Math.random()) >>
                  (e / 4))
              ).toString(16)
            : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, _);
        }
        function k(e, n) {
          return n && n[e] ? n[e] : "";
        }
        function j(e, n, t) {
          return t ? e + n + "=" + encodeURIComponent(t) + "&" : e;
        }
        function N(e) {
          var n = "";
          for (var t in e)
            e.hasOwnProperty(t) &&
              (n += t + "=" + encodeURIComponent(e[t]) + "&");
          return n.replace(/&$/, "");
        }
        function P(e) {
          return e && Object.getOwnPropertyNames(e).length > 0
            ? Ce(e)
                .map(function (n) {
                  return "".concat(n, "=").concat(encodeURIComponent(Oe(e, n)));
                })
                .join("&")
            : "";
        }
        function x(e) {
          if (e) {
            var n = [];
            if (
              e.mediaTypes &&
              e.mediaTypes.banner &&
              Array.isArray(e.mediaTypes.banner.sizes)
            ) {
              var t = e.mediaTypes.banner.sizes;
              Array.isArray(t[0]) ? (n = t) : n.push(t);
            } else
              Array.isArray(e.sizes) &&
                (Array.isArray(e.sizes[0]) ? (n = e.sizes) : n.push(e.sizes));
            return n;
          }
        }
        function q(e) {
          var n = [];
          if ("string" == typeof e) {
            var t = e.split(","),
              r = /^(\d)+x(\d)+$/i;
            if (t) for (var i in t) ge(t, i) && t[i].match(r) && n.push(t[i]);
          } else if ("object" === p(e)) {
            var o = e.length;
            if (o > 0)
              if (2 === o && "number" == typeof e[0] && "number" == typeof e[1])
                n.push(M(e));
              else for (var a = 0; a < o; a++) n.push(M(e[a]));
          }
          return n;
        }
        function M(e) {
          if (W(e)) return e[0] + "x" + e[1];
        }
        function G(e) {
          if (W(e)) return { w: e[0], h: e[1] };
        }
        function W(e) {
          return ie(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function F() {
          return window.top;
        }
        function z() {
          return window.self;
        }
        function L() {
          return window.location;
        }
        function K() {
          X() && h && console.log.apply(console, J(arguments, "MESSAGE:"));
        }
        function V() {
          X() && E && console.info.apply(console, J(arguments, "INFO:"));
        }
        function H() {
          X() && S && console.warn.apply(console, J(arguments, "WARNING:")),
            T(y.EVENTS.AUCTION_DEBUG, {
              type: "WARNING",
              arguments: arguments,
            });
        }
        function Z() {
          X() && A && console.error.apply(console, J(arguments, "ERROR:")),
            T(y.EVENTS.AUCTION_DEBUG, { type: "ERROR", arguments: arguments });
        }
        function Y(e) {
          function n(n) {
            return function () {
              for (
                var t = arguments.length, r = new Array(t), i = 0;
                i < t;
                i++
              )
                r[i] = arguments[i];
              n.apply(void 0, [e].concat(r));
            };
          }
          return {
            logError: n(Z),
            logWarn: n(H),
            logMessage: n(K),
            logInfo: n(V),
          };
        }
        function J(e, n) {
          e = [].slice.call(e);
          var t = r.vc.getCurrentBidder();
          return (
            n && e.unshift(n),
            t && e.unshift(i("#aaa")),
            e.unshift(i("#3b88c3")),
            e.unshift("%cPrebid" + (t ? "%c".concat(t) : "")),
            e
          );
          function i(e) {
            return "display: inline-block; color: #fff; background: ".concat(
              e,
              "; padding: 1px 4px; border-radius: 3px;"
            );
          }
        }
        function Q() {
          return h;
        }
        function X() {
          return !!r.vc.getConfig("debug");
        }
        function $() {
          var e = document.createElement("iframe");
          return (
            (e.id = D()),
            (e.height = 0),
            (e.width = 0),
            (e.border = "0px"),
            (e.hspace = "0"),
            (e.vspace = "0"),
            (e.marginWidth = "0"),
            (e.marginHeight = "0"),
            (e.style.border = "0"),
            (e.scrolling = "no"),
            (e.frameBorder = "0"),
            (e.src = "about:blank"),
            (e.style.display = "none"),
            e
          );
        }
        function ee(e) {
          return mn(L().search)[e] || "";
        }
        function ne(e, n) {
          return b.call(e) === "[object " + n + "]";
        }
        function te(e) {
          return ne(e, "Function");
        }
        function re(e) {
          return ne(e, "String");
        }
        function ie(e) {
          return ne(e, "Array");
        }
        function oe(e) {
          return ne(e, "Number");
        }
        function ae(e) {
          return ne(e, "Object");
        }
        function ce(e) {
          return ne(e, "Boolean");
        }
        function ue(e) {
          if (!e) return !0;
          if (ie(e) || re(e)) return !(e.length > 0);
          for (var n in e) if (hasOwnProperty.call(e, n)) return !1;
          return !0;
        }
        function se(e) {
          return re(e) && (!e || 0 === e.length);
        }
        function de(e, n) {
          if (!ue(e)) {
            if (te(e.forEach)) return e.forEach(n, this);
            var t = 0,
              r = e.length;
            if (r > 0) for (; t < r; t++) n(e[t], t, e);
            else
              for (t in e) hasOwnProperty.call(e, t) && n.call(this, e[t], t);
          }
        }
        function fe(e, n) {
          if (ue(e)) return !1;
          if (te(e.indexOf)) return -1 !== e.indexOf(n);
          for (var t = e.length; t--; ) if (e[t] === n) return !0;
          return !1;
        }
        function le(e, n) {
          if (ue(e)) return [];
          if (te(e.map)) return e.map(n);
          var t = [];
          return (
            de(e, function (r, i) {
              t.push(n(r, i, e));
            }),
            t
          );
        }
        function ge(e, n) {
          return e.hasOwnProperty
            ? e.hasOwnProperty(n)
            : void 0 !== e[n] && e.constructor.prototype[n] !== e[n];
        }
        function pe(e, n, t, r) {
          var i;
          (n = n || document),
            (i = t
              ? n.getElementsByTagName(t)
              : n.getElementsByTagName("head"));
          try {
            if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
              i = i[0];
              var o = r ? null : i.firstChild;
              return i.insertBefore(e, o);
            }
          } catch (e) {}
        }
        function ve(e, n) {
          var t = null;
          return new Promise(function (r) {
            var i = function n() {
              e.removeEventListener("load", n),
                e.removeEventListener("error", n),
                null != t && window.clearTimeout(t),
                r();
            };
            e.addEventListener("load", i),
              e.addEventListener("error", i),
              null != n && (t = window.setTimeout(i, n));
          });
        }
        function ye(e, n, t) {
          var r = new Image();
          n && I.isFn(n) && ve(r, t).then(n), (r.src = e);
        }
        function be(e) {
          var n = e.source,
            t = e.burl;
          n === y.S2S.SRC && t && I.triggerPixel(t);
        }
        function me(e) {
          if (e) {
            var n = document.createElement("iframe");
            (n.id = D()),
              (n.width = 0),
              (n.height = 0),
              (n.hspace = "0"),
              (n.vspace = "0"),
              (n.marginWidth = "0"),
              (n.marginHeight = "0"),
              (n.style.display = "none"),
              (n.style.height = "0px"),
              (n.style.width = "0px"),
              (n.scrolling = "no"),
              (n.frameBorder = "0"),
              (n.allowtransparency = "true"),
              I.insertElement(n, document, "body"),
              n.contentWindow.document.open(),
              n.contentWindow.document.write(e),
              n.contentWindow.document.close();
          }
        }
        function he(e, n, t) {
          var r = I.createTrackPixelIframeHtml(
              e,
              !1,
              "allow-scripts allow-same-origin"
            ),
            i = document.createElement("div");
          i.innerHTML = r;
          var o = i.firstChild;
          n && I.isFn(n) && ve(o, t).then(n),
            I.insertElement(o, document, "html", !0);
        }
        function Ee(e) {
          return e
            ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="' +
                encodeURI(e) +
                '"></div>'
            : "";
        }
        function Se(e) {
          var n =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          return e
            ? (n && (e = encodeURI(e)),
              t && (t = 'sandbox="'.concat(t, '"')),
              "<iframe "
                .concat(t, ' id="')
                .concat(
                  D(),
                  '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
                )
                .concat(e, '">\n    </iframe>'))
            : "";
        }
        function Ae(e, n, t) {
          return null == n
            ? t
            : re(n)
            ? n
            : oe(n)
            ? n.toString()
            : void I.logWarn(
                "Unsuported type for param: " + e + " required type: String"
              );
        }
        function Te(e, n, t) {
          return t.indexOf(e) === n;
        }
        function Ie(e, n) {
          return e.concat(n);
        }
        function we(e, n) {
          var t;
          if (e)
            return (
              n.some(function (n) {
                var r = (0, a.sE)(n.bids, function (n) {
                  return ["bidId", "adId", "bid_id"].some(function (t) {
                    return n[t] === e;
                  });
                });
                return r && (t = r), r;
              }),
              t
            );
        }
        function Ce(e) {
          return Object.keys(e);
        }
        function Oe(e, n) {
          return e[n];
        }
        function Be(e, n) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t] === n) return t;
        }
        function Ue() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ihowpbjs.adUnits;
          return e
            .map(function (e) {
              return e.bids
                .map(function (e) {
                  return e.bidder;
                })
                .reduce(Ie, []);
            })
            .reduce(Ie, [])
            .filter(Te);
        }
        function Re() {
          if (
            window.googletag &&
            te(window.googletag.pubads) &&
            te(window.googletag.pubads().getSlots)
          )
            return !0;
        }
        function De() {
          if (window.apntag && te(window.apntag.getTag)) return !0;
        }
        var _e = Ne("timeToRespond", function (e, n) {
            return e > n;
          }),
          ke = Ne("responseTimestamp", function (e, n) {
            return e > n;
          }),
          je = Ne("responseTimestamp", function (e, n) {
            return e < n;
          });
        function Ne(e, n) {
          return function (t, r) {
            return t.cpm === r.cpm
              ? n(t[e], r[e])
                ? r
                : t
              : t.cpm < r.cpm
              ? r
              : t;
          };
        }
        function Pe(e) {
          for (var n = e.length; n > 0; ) {
            var t = Math.floor(Math.random() * n),
              r = e[--n];
            (e[n] = e[t]), (e[t] = r);
          }
          return e;
        }
        function xe(e, n) {
          return (0, a.q9)(e, n && n.adUnitCode);
        }
        function qe(e) {
          return o()(e);
        }
        function Me() {
          try {
            return I.getWindowSelf() !== I.getWindowTop();
          } catch (e) {
            return !0;
          }
        }
        function Ge() {
          return /^((?!chrome|android|crios|fxios).)*safari/i.test(
            navigator.userAgent
          );
        }
        function We(e, n) {
          if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n);
        }
        function Fe(e, n) {
          if (e && n && "string" == typeof n)
            return e.replace(/\${CLICKTHROUGH}/g, n);
        }
        function ze() {
          return new Date().getTime();
        }
        function Le() {
          return (
            (window.performance &&
              window.performance.now &&
              window.performance.now()) ||
            0
          );
        }
        function Ke() {
          return !1 !== r.vc.getConfig("deviceAccess");
        }
        function Ve() {
          if (window.navigator.cookieEnabled || document.cookie.length)
            return !0;
        }
        function He(e, n) {
          if (n < 1)
            throw new Error(
              "numRequiredCalls must be a positive number. Got ".concat(n)
            );
          var t = 0;
          return function () {
            ++t === n && e.apply(this, arguments);
          };
        }
        function Ze(e, n) {
          return e.reduce(function (e, t) {
            return (e[t[n]] = e[t[n]] || []).push(t), e;
          }, {});
        }
        function Ye(e, n) {
          return n
            .filter(function (n) {
              return e[n];
            })
            .reduce(function (n, t) {
              return g(n, l({}, t, e[t]));
            }, {});
        }
        function Je(e) {
          var n = ["banner", "native", "video"];
          return (
            !!Object.keys(e).every(function (e) {
              return (0, a.q9)(n, e);
            }) &&
            (!e.video ||
              !e.video.context ||
              (0, a.q9)(["instream", "outstream", "adpod"], e.video.context))
          );
        }
        function Qe(e, n, t) {
          return e
            .filter(function (e) {
              return e.code === n;
            })
            .map(function (e) {
              return e.bids;
            })
            .reduce(Ie, [])
            .filter(function (e) {
              return e.bidder === t;
            })
            .map(function (e) {
              return e.params || {};
            });
        }
        function Xe() {
          return window.location.origin
            ? window.location.origin
            : window.location.protocol +
                "//" +
                window.location.hostname +
                (window.location.port ? ":" + window.location.port : "");
        }
        function $e() {
          return (
            "1" === navigator.doNotTrack ||
            "1" === window.doNotTrack ||
            "1" === navigator.msDoNotTrack ||
            "yes" === navigator.doNotTrack
          );
        }
        var en = function (e, n) {
          return e.getAdUnitPath() === n || e.getSlotElementId() === n;
        };
        function nn(e) {
          return function (n) {
            return en(e, n);
          };
        }
        function tn(e) {
          return function (n) {
            return en(n, e);
          };
        }
        function rn(e) {
          var n;
          return (
            Re() &&
              (n = (0, a.sE)(window.googletag.pubads().getSlots(), tn(e))),
            n ? { gptSlot: n.getAdUnitPath(), divId: n.getSlotElementId() } : {}
          );
        }
        function on(e, n) {
          var t = Object.keys(e.mediaTypes || { banner: "banner" }).join(", ");
          return "\n    "
            .concat(e.code, " is a ")
            .concat(t, " ad unit\n    containing bidders that don't support ")
            .concat(t, ": ")
            .concat(n, ".\n    This bidder won't fetch demand.\n  ");
        }
        function an(e) {
          return Number.isInteger
            ? Number.isInteger(e)
            : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function cn(e) {
          return e
            .replace(/(?:^|\.?)([A-Z])/g, function (e, n) {
              return "_" + n.toLowerCase();
            })
            .replace(/^_/, "");
        }
        function un(e) {
          return Object.keys(e).reduce(function (n, t) {
            return void 0 !== e[t] && (n[t] = e[t]), n;
          }, {});
        }
        function sn(e, n) {
          return "object" !== p(e)
            ? {}
            : n.reduce(function (t, r, i) {
                if ("function" == typeof r) return t;
                var o = r,
                  a = r.match(/^(.+?)\sas\s(.+?)$/i);
                a && ((r = a[1]), (o = a[2]));
                var c = e[r];
                return (
                  "function" == typeof n[i + 1] && (c = n[i + 1](c, t)),
                  void 0 !== c && (t[o] = c),
                  t
                );
              }, {});
        }
        function dn(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "keywords",
            t = [];
          return (
            de(e, function (e, r) {
              if (ie(e)) {
                var i = [];
                de(e, function (e) {
                  ((e = Ae(n + "." + r, e)) || "" === e) && i.push(e);
                }),
                  (e = i);
              } else {
                if (!re((e = Ae(n + "." + r, e)))) return;
                e = [e];
              }
              t.push({ key: r, value: e });
            }),
            t
          );
        }
        function fn(e, n) {
          return (
            Object.keys(e).forEach(function (t) {
              var r, i;
              n[t] &&
                (te(e[t])
                  ? (n[t] = e[t](n[t]))
                  : (n[t] =
                      ((r = e[t]),
                      (i = n[t]),
                      "string" === r
                        ? i && i.toString()
                        : "number" === r
                        ? Number(i)
                        : i)),
                isNaN(n[t]) && delete n.key);
            }),
            n
          );
        }
        function ln(e, n) {
          return (
            ie(e) &&
            (!n || e.length === n) &&
            e.every(function (e) {
              return an(e);
            })
          );
        }
        function gn(e, n) {
          for (var t = [], r = 0; r < n; r++) {
            var i = ae(e) ? qe(e) : e;
            t.push(i);
          }
          return t;
        }
        function pn(e, n) {
          for (var t = [], r = 0; r < Math.ceil(e.length / n); r++) {
            var i = r * n,
              o = i + n;
            t.push(e.slice(i, o));
          }
          return t;
        }
        function vn(e) {
          return Math.min.apply(Math, s(e));
        }
        function yn(e) {
          return Math.max.apply(Math, s(e));
        }
        function bn(e) {
          return function (n, t) {
            return n[e] < t[e] ? 1 : n[e] > t[e] ? -1 : 0;
          };
        }
        function mn(e) {
          return e
            ? e
                .replace(/^\?/, "")
                .split("&")
                .reduce(function (e, n) {
                  var t,
                    r =
                      (2,
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })((t = n.split("="))) ||
                        (function (e, n) {
                          var t =
                            null == e
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                          if (null != t) {
                            var r,
                              i,
                              o = [],
                              a = !0,
                              c = !1;
                            try {
                              for (
                                t = t.call(e);
                                !(a = (r = t.next()).done) &&
                                (o.push(r.value), 2 !== o.length);
                                a = !0
                              );
                            } catch (e) {
                              (c = !0), (i = e);
                            } finally {
                              try {
                                a || null == t.return || t.return();
                              } finally {
                                if (c) throw i;
                              }
                            }
                            return o;
                          }
                        })(t) ||
                        d(t, 2) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()),
                    i = r[0],
                    o = r[1];
                  return (
                    /\[\]$/.test(i)
                      ? ((e[(i = i.replace("[]", ""))] = e[i] || []),
                        e[i].push(o))
                      : (e[i] = o || ""),
                    e
                  );
                }, {})
            : {};
        }
        function hn(e) {
          return Object.keys(e)
            .map(function (n) {
              return Array.isArray(e[n])
                ? e[n]
                    .map(function (e) {
                      return "".concat(n, "[]=").concat(e);
                    })
                    .join("&")
                : "".concat(n, "=").concat(e[n]);
            })
            .join("&");
        }
        function En(e, n) {
          var t = document.createElement("a");
          n && "noDecodeWholeURL" in n && n.noDecodeWholeURL
            ? (t.href = e)
            : (t.href = decodeURIComponent(e));
          var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
          return {
            href: t.href,
            protocol: (t.protocol || "").replace(/:$/, ""),
            hostname: t.hostname,
            port: +t.port,
            pathname: t.pathname.replace(/^(?!\/)/, "/"),
            search: r ? t.search : I.parseQS(t.search || ""),
            hash: (t.hash || "").replace(/^#/, ""),
            host: t.host || window.location.host,
          };
        }
        function Sn(e) {
          return (
            (e.protocol || "http") +
            "://" +
            (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) +
            (e.pathname || "") +
            (e.search ? "?".concat(I.formatQS(e.search || "")) : "") +
            (e.hash ? "#".concat(e.hash) : "")
          );
        }
        function An(e, n) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = t.checkTypes,
            i = void 0 !== r && r;
          if (e === n) return !0;
          if (
            "object" !== p(e) ||
            null === e ||
            "object" !== p(n) ||
            null === n ||
            (i && e.constructor !== n.constructor)
          )
            return !1;
          if (Object.keys(e).length !== Object.keys(n).length) return !1;
          for (var o in e) {
            if (!n.hasOwnProperty(o)) return !1;
            if (!An(e[o], n[o], { checkTypes: i })) return !1;
          }
          return !0;
        }
        function Tn(e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
            r < n;
            r++
          )
            t[r - 1] = arguments[r];
          if (!t.length) return e;
          var i = t.shift();
          if (ae(e) && ae(i)) {
            var o = function (n) {
              ae(i[n])
                ? (e[n] || g(e, l({}, n, {})), Tn(e[n], i[n]))
                : ie(i[n])
                ? e[n]
                  ? ie(e[n]) &&
                    i[n].forEach(function (t) {
                      for (var r = 1, i = 0; i < e[n].length; i++)
                        if (An(e[n][i], t)) {
                          r = 0;
                          break;
                        }
                      r && e[n].push(t);
                    })
                  : g(e, l({}, n, s(i[n])))
                : g(e, l({}, n, i[n]));
            };
            for (var a in i) o(a);
          }
          return Tn.apply(void 0, [e].concat(t));
        }
        function In(e) {
          for (
            var n,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = function (e, n) {
                if (te(Math.imul)) return Math.imul(e, n);
                var t = (4194303 & e) * (n |= 0);
                return (
                  4290772992 & e && (t += ((4290772992 & e) * n) | 0), 0 | t
                );
              },
              i = 3735928559 ^ t,
              o = 1103547991 ^ t,
              a = 0;
            a < e.length;
            a++
          )
            (i = r(i ^ (n = e.charCodeAt(a)), 2654435761)),
              (o = r(o ^ n, 1597334677));
          return (
            (i = r(i ^ (i >>> 16), 2246822507) ^ r(o ^ (o >>> 13), 3266489909)),
            (
              4294967296 *
                (2097151 &
                  (o =
                    r(o ^ (o >>> 16), 2246822507) ^
                    r(i ^ (i >>> 13), 3266489909))) +
              (i >>> 0)
            ).toString()
          );
        }
        function wn(e) {
          var n,
            t = {};
          for (n in e) e[n] && (t[n] = e[n]);
          return t;
        }
      },
      929: function (e, n, t) {
        "use strict";
        t.d(n, {
          Dn: function () {
            return d;
          },
          LD: function () {
            return s;
          },
          gZ: function () {
            return u;
          },
          hD: function () {
            return f;
          },
        });
        var r = t(265),
          i = t(853),
          o = t(962),
          a = t(494),
          c = t(766),
          u = "outstream",
          s = "instream";
        function d(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.index,
            i = void 0 === t ? c.K.index : t,
            o = (0, r.Z)(i.getMediaTypes(e), "video"),
            a = o && (0, r.Z)(o, "context"),
            u = i.getAdUnit(e);
          return f(e, u, o, a);
        }
        var f = (0, a.z3)(
          "sync",
          function (e, n, t, r) {
            return t && r !== u
              ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl
                ? !(!e.vastUrl && !e.vastXml)
                : ((0, i.logError)(
                    '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with ihowpbjs.setConfig({ cache: {url: "..."} });\n      '
                  ),
                  !1)
              : r !== u || !!(e.renderer || (n && n.renderer) || t.renderer);
          },
          "checkVideoBidSetup"
        );
      },
      905: function (e, n, t) {
        "use strict";
        t.d(n, {
          h: function () {
            return u;
          },
          z: function () {
            return s;
          },
        });
        var r = t(755),
          i = t(962),
          o = t(766);
        function a(e, n) {
          var t = n ? "<![CDATA[".concat(n, "]]>") : "";
          return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
            .concat(e, "]]></VASTAdTagURI>\n        <Impression>")
            .concat(
              t,
              "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
            );
        }
        function c(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.index,
            r = void 0 === t ? o.K.index : t,
            c = e.vastXml ? e.vastXml : a(e.vastUrl, e.vastImpUrl),
            u = r.getAuction(e);
          window && window.PWT && (c = window.PWT.UpdateVastWithTracker(e, c));
          var s = { type: "xml", value: c, ttlseconds: Number(e.ttl) };
          return (
            i.vc.getConfig("cache.vasttrack") &&
              ((s.bidder = e.bidder),
              (s.bidid = e.requestId),
              (s.aid = e.auctionId)),
            null != u && (s.timestamp = u.getAuctionStart()),
            "string" == typeof e.customCacheKey &&
              "" !== e.customCacheKey &&
              (s.key = e.customCacheKey),
            s
          );
        }
        function u(e, n) {
          var t = { puts: e.map(c) };
          (0, r.h)(
            i.vc.getConfig("cache.url"),
            (function (e) {
              return {
                success: function (n) {
                  var t;
                  try {
                    t = JSON.parse(n).responses;
                  } catch (n) {
                    return void e(n, []);
                  }
                  t
                    ? e(null, t)
                    : e(
                        new Error(
                          "The cache server didn't respond with a responses property."
                        ),
                        []
                      );
                },
                error: function (n, t) {
                  e(
                    new Error(
                      "Error storing video ad in the cache: "
                        .concat(n, ": ")
                        .concat(JSON.stringify(t))
                    ),
                    []
                  );
                },
              };
            })(n),
            JSON.stringify(t),
            { contentType: "text/plain", withCredentials: !0 }
          );
        }
        function s(e) {
          return "".concat(i.vc.getConfig("cache.url"), "?uuid=").concat(e);
        }
      },
      265: function (e, n, t) {
        "use strict";
        function r(e, n, t, r, i) {
          for (n = n.split ? n.split(".") : n, r = 0; r < n.length; r++)
            e = e ? e[n[r]] : i;
          return e === i ? t : e;
        }
        t.d(n, {
          Z: function () {
            return r;
          },
        });
      },
      806: function (e, n, t) {
        "use strict";
        function r(e, n, t) {
          n.split && (n = n.split("."));
          for (var r, i = 0, o = n.length, a = e; i < o; ++i)
            (r = a[n[i]]),
              (a = a[n[i]] =
                i === o - 1
                  ? t
                  : null != r
                  ? r
                  : !~n[i + 1].indexOf(".") && +n[i + 1] > -1
                  ? []
                  : {});
        }
        t.d(n, {
          Z: function () {
            return r;
          },
        });
      },
      432: function (e) {
        (a.SYNC = 1), (a.ASYNC = 2), (a.QUEUE = 4);
        var n = Object.freeze({ useProxy: !0, ready: 0 }),
          t = new WeakMap(),
          r =
            "2,1,0" ===
            [1]
              .reduce(function (e, n, t) {
                return [e, n, t];
              }, 2)
              .toString()
              ? Array.prototype.reduce
              : function (e, n) {
                  var t,
                    r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                  if (n) t = n;
                  else {
                    for (; o < i && !(o in r); ) o++;
                    t = r[o++];
                  }
                  for (; o < i; ) o in r && (t = e(t, r[o], o, r)), o++;
                  return t;
                };
        function i(e, n) {
          return Array.prototype.slice.call(e, n);
        }
        var o =
          Object.assign ||
          function (e) {
            return r.call(
              i(arguments, 1),
              function (e, n) {
                return (
                  n &&
                    Object.keys(n).forEach(function (t) {
                      e[t] = n[t];
                    }),
                  e
                );
              },
              e
            );
          };
        function a(e) {
          var c,
            u = {},
            s = [];
          function d(e, n) {
            return "function" == typeof e
              ? p.call(null, "sync", e, n)
              : "string" == typeof e && "function" == typeof n
              ? p.apply(null, arguments)
              : "object" == typeof e
              ? f.apply(null, arguments)
              : void 0;
          }
          function f(e, n, t) {
            var r = !0;
            void 0 === n && ((n = Object.getOwnPropertyNames(e)), (r = !1));
            var i = {},
              o = ["constructor"];
            do {
              (n = n.filter(function (n) {
                return !(
                  "function" != typeof e[n] ||
                  -1 !== o.indexOf(n) ||
                  n.match(/^_/)
                );
              })).forEach(function (n) {
                var r = n.split(":"),
                  o = r[0],
                  a = r[1] || "sync";
                if (!i[o]) {
                  var c = e[o];
                  i[o] = e[o] = p(a, c, t ? [t, o] : void 0);
                }
              }),
                (e = Object.getPrototypeOf(e));
            } while (r && e);
            return i;
          }
          function l(e) {
            var n = Array.isArray(e) ? e : e.split(".");
            return r.call(
              n,
              function (t, r, i) {
                var o = t[r],
                  a = !1;
                return (
                  o ||
                  (i === n.length - 1
                    ? (c ||
                        s.push(function () {
                          a ||
                            console.warn(
                              "fun-hooks: referenced '" +
                                e +
                                "' but it was never created"
                            );
                        }),
                      (t[r] = g(function (e) {
                        (t[r] = e), (a = !0);
                      })))
                    : (t[r] = {}))
                );
              },
              u
            );
          }
          function g(e) {
            var n = [],
              r = [],
              i = function () {},
              a = {
                before: function (e, t) {
                  return u.call(this, n, "before", e, t);
                },
                after: function (e, n) {
                  return u.call(this, r, "after", e, n);
                },
                getHooks: function (e) {
                  var t = n.concat(r);
                  "object" == typeof e &&
                    (t = t.filter(function (n) {
                      return Object.keys(e).every(function (t) {
                        return n[t] === e[t];
                      });
                    }));
                  try {
                    o(t, {
                      remove: function () {
                        return (
                          t.forEach(function (e) {
                            e.remove();
                          }),
                          this
                        );
                      },
                    });
                  } catch (e) {
                    console.error(
                      "error adding `remove` to array, did you modify Array.prototype?"
                    );
                  }
                  return t;
                },
                removeAll: function () {
                  return this.getHooks().remove();
                },
              },
              c = {
                install: function (t, o, a) {
                  (this.type = t), (i = a), a(n, r), e && e(o);
                },
              };
            return t.set(a.after, c), a;
            function u(e, t, o, a) {
              var c = {
                hook: o,
                type: t,
                priority: a || 10,
                remove: function () {
                  var t = e.indexOf(c);
                  -1 !== t && (e.splice(t, 1), i(n, r));
                },
              };
              return (
                e.push(c),
                e.sort(function (e, n) {
                  return n.priority - e.priority;
                }),
                i(n, r),
                this
              );
            }
          }
          function p(n, r, u) {
            var d = r.after && t.get(r.after);
            if (d) {
              if (d.type !== n)
                throw "fun-hooks: recreated hookable with different type";
              return r;
            }
            var f,
              p,
              v = u ? l(u) : g(),
              y = {
                get: function (e, n) {
                  return v[n] || Reflect.get.apply(Reflect, arguments);
                },
              };
            return (
              c || s.push(b),
              e.useProxy && "function" == typeof Proxy && Proxy.revocable
                ? (p = new Proxy(r, y))
                : ((p = function () {
                    return y.apply
                      ? y.apply(r, this, i(arguments))
                      : r.apply(this, arguments);
                  }),
                  o(p, v)),
              t.get(p.after).install(n, p, function (e, t) {
                var r,
                  o = [];
                function a(e) {
                  o.push(e.hook);
                }
                e.length || t.length
                  ? (e.forEach(a),
                    (r = o.push(void 0) - 1),
                    t.forEach(a),
                    (f = function (e, t, a) {
                      var c,
                        u = 0,
                        s =
                          "async" === n &&
                          "function" == typeof a[a.length - 1] &&
                          a.pop();
                      function d(e) {
                        "sync" === n ? (c = e) : s && s.apply(null, arguments);
                      }
                      function f(e) {
                        if (o[u]) {
                          var r = i(arguments);
                          return (f.bail = d), r.unshift(f), o[u++].apply(t, r);
                        }
                        "sync" === n ? (c = e) : s && s.apply(null, arguments);
                      }
                      return (
                        (o[r] = function () {
                          var r = i(arguments, 1);
                          "async" === n && s && (delete f.bail, r.push(f));
                          var o = e.apply(t, r);
                          "sync" === n && f(o);
                        }),
                        f.apply(null, a),
                        c
                      );
                    }))
                  : (f = void 0),
                  b();
              }),
              p
            );
            function b() {
              !c &&
              ("sync" !== n || e.ready & a.SYNC) &&
              ("async" !== n || e.ready & a.ASYNC)
                ? "sync" !== n && e.ready & a.QUEUE
                  ? (y.apply = function () {
                      var e = arguments;
                      s.push(function () {
                        p.apply(e[1], e[2]);
                      });
                    })
                  : (y.apply = function () {
                      throw "fun-hooks: hooked function not ready";
                    })
                : (y.apply = f);
            }
          }
          return (
            (e = o({}, n, e)).ready
              ? (d.ready = function () {
                  (c = !0),
                    (function (e) {
                      for (var n; (n = e.shift()); ) n();
                    })(s);
                })
              : (c = !0),
            (d.get = l),
            d
          );
        }
        e.exports = a;
      },
      79: function (e) {
        e.exports = function e(n) {
          var t = Array.isArray(n) ? [] : {};
          for (var r in n) {
            var i = n[r];
            t[r] = i && "object" == typeof i ? e(i) : i;
          }
          return t;
        };
      },
      644: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"DEFAULT_TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"pwt_native_title","body":"pwt_native_body","body2":"pwt_native_body2","privacyLink":"pwt_native_privacy","sponsoredBy":"pwt_native_brand","image":"pwt_native_image","icon":"pwt_native_icon","clickUrl":"pwt_native_linkurl","displayUrl":"pwt_native_displayurl","cta":"pwt_native_cta","rating":"pwt_native_rating","address":"pwt_native_address","downloads":"pwt_native_downloads","likes":"pwt_native_likes","phone":"pwt_native_phone","price":"pwt_native_price","salePrice":"pwt_native_saleprice"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"},"REFRESH_IDMODULES_LIST":{"PRIMARY_MODULES":["id5Id","publinkId"],"SCRIPT_BASED_MODULES":["zeotapIdPlus","identityLink","publinkId"]},"MODULE_PARAM_TO_UPDATE_FOR_SSO":{"id5Id":[{"key":"pd"}],"publinkId":[{"key":"e","hashType":"MD5"}]}}'
        );
      },
    },
    t = {};
  function r(e) {
    var i = t[e];
    if (void 0 !== i) return i.exports;
    var o = (t[e] = { exports: {} });
    return n[e].call(o.exports, o, o.exports, r), o.exports;
  }
  (r.m = n),
    (e = []),
    (r.O = function (n, t, i, o) {
      if (!t) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          (t = e[d][0]), (i = e[d][1]), (o = e[d][2]);
          for (var c = !0, u = 0; u < t.length; u++)
            (!1 & o || a >= o) &&
            Object.keys(r.O).every(function (e) {
              return r.O[e](t[u]);
            })
              ? t.splice(u--, 1)
              : ((c = !1), o < a && (a = o));
          if (c) {
            e.splice(d--, 1);
            var s = i();
            void 0 !== s && (n = s);
          }
        }
        return n;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [t, i, o];
    }),
    (r.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(n, { a: n }), n;
    }),
    (r.d = function (e, n) {
      for (var t in n)
        r.o(n, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (r.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      var e = { 602: 0 };
      r.O.j = function (n) {
        return 0 === e[n];
      };
      var n = function (n, t) {
          var i,
            o,
            a = t[0],
            c = t[1],
            u = t[2],
            s = 0;
          if (
            a.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (i in c) r.o(c, i) && (r.m[i] = c[i]);
            if (u) var d = u(r);
          }
          for (n && n(t); s < a.length; s++)
            (o = a[s]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(d);
        },
        t = (self.ihowpbjsChunk = self.ihowpbjsChunk || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })();
  var i = r(893);
  i = r.O(i);
})();
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [514],
  {
    643: function (t, e, r) {
      var n = r(879),
        i = r(853),
        o = r(265),
        a = r(962),
        s = r(125),
        u = r(996),
        c = r(582),
        d = r(849),
        p = r(661),
        f = r(224),
        m = r(3),
        l = r(877),
        h = r(929);
      function g(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(r), !0).forEach(function (e) {
                v(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function v(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var b,
        A,
        I,
        T = "adagio",
        O = "Adagio:",
        w = [m.Mk, m.B5, m.pX],
        D = "adagioScript",
        x = (0, d.df)({ gvlid: 617, bidderCode: T }),
        S = {
          mimes: function (t) {
            return (
              Array.isArray(t) &&
              t.length > 0 &&
              t.every(function (t) {
                return "string" == typeof t;
              })
            );
          },
          minduration: function (t) {
            return (0, i.isInteger)(t);
          },
          maxduration: function (t) {
            return (0, i.isInteger)(t);
          },
          protocols: function (t) {
            return (
              Array.isArray(t) &&
              t.every(function (t) {
                return -1 !== [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(t);
              })
            );
          },
          w: function (t) {
            return (0, i.isInteger)(t);
          },
          h: function (t) {
            return (0, i.isInteger)(t);
          },
          startdelay: function (t) {
            return (0, i.isInteger)(t);
          },
          placement: function (t) {
            return (
              Array.isArray(t) &&
              t.every(function (t) {
                return -1 !== [1, 2, 3, 4, 5].indexOf(t);
              })
            );
          },
          linearity: function (t) {
            return -1 !== [1, 2].indexOf(t);
          },
          skip: function (t) {
            return -1 !== [0, 1].indexOf(t);
          },
          skipmin: function (t) {
            return (0, i.isInteger)(t);
          },
          skipafter: function (t) {
            return (0, i.isInteger)(t);
          },
          sequence: function (t) {
            return (0, i.isInteger)(t);
          },
          battr: function (t) {
            return (
              Array.isArray(t) &&
              t.every(function (t) {
                return (
                  -1 !==
                  Array.from({ length: 17 }, function (t, e) {
                    return e + 1;
                  }).indexOf(t)
                );
              })
            );
          },
          maxextended: function (t) {
            return (0, i.isInteger)(t);
          },
          minbitrate: function (t) {
            return (0, i.isInteger)(t);
          },
          maxbitrate: function (t) {
            return (0, i.isInteger)(t);
          },
          boxingallowed: function (t) {
            return -1 !== [0, 1].indexOf(t);
          },
          playbackmethod: function (t) {
            return (
              Array.isArray(t) &&
              t.every(function (t) {
                return -1 !== [1, 2, 3, 4, 5, 6].indexOf(t);
              })
            );
          },
          playbackend: function (t) {
            return -1 !== [1, 2, 3].indexOf(t);
          },
          delivery: function (t) {
            return -1 !== [1, 2, 3].indexOf(t);
          },
          pos: function (t) {
            return -1 !== [0, 1, 2, 3, 4, 5, 6, 7].indexOf(t);
          },
          api: function (t) {
            return (
              Array.isArray(t) &&
              t.every(function (t) {
                return -1 !== [1, 2, 3, 4, 5, 6].indexOf(t);
              })
            );
          },
        },
        E =
          ((I = {}),
          {
            clearFeatures: function () {
              A = void 0;
            },
            clearExchangeData: function () {
              I = {};
            },
            getOrSetGlobalFeatures: function () {
              return (
                A ||
                  (A = {
                    page_dimensions: q().toString(),
                    viewport_dimensions: B().toString(),
                    user_timestamp: (
                      Math.floor(new Date().getTime() / 1e3) -
                      60 * new Date().getTimezoneOffset()
                    ).toString(),
                    dom_loading: F().toString(),
                  }),
                A
              );
            },
            prepareExchangeData: function (t) {
              var e = JSON.parse(t, function (t, e) {
                  if ("_" !== t.charAt(0) || "" === t) return e;
                }),
                r = (0, o.Z)(e, "session.rnd"),
                n = !1;
              j.isNewSession(e) && ((n = !0), (r = Math.random()));
              var a = { session: { new: n, rnd: r } };
              (0, i.mergeDeep)(I, e, a),
                j.enqueue({ action: "session", ts: Date.now(), data: I });
            },
            getExchangeData: function () {
              return I;
            },
          });
      function k() {
        try {
          if ((0, i.getWindowTop)().location.href) return !0;
        } catch (t) {
          return !1;
        }
      }
      function U() {
        return b || (0, i.getWindowSelf)();
      }
      function C() {
        var t = (0, i.getWindowSelf)();
        return !(!t.$sf || !t.$sf.ext);
      }
      function R(t) {
        var e = j.isRendererPreferredFromPublisher(t) ? "other" : "adagio";
        return (
          "other" === e &&
            (0, i.logWarn)(
              "".concat(
                O,
                " renderer.backupOnly has not been set. Adagio recommends to use its own player to get expected behavior."
              )
            ),
          e
        );
      }
      var j = {
        enqueue: function (t) {
          var e = j.getCurrentWindow();
          (e.ADAGIO = e.ADAGIO || {}),
            (e.ADAGIO.queue = e.ADAGIO.queue || []),
            e.ADAGIO.queue.push(t);
        },
        getPageviewId: function () {
          var t = j.getCurrentWindow();
          return (
            (t.ADAGIO = t.ADAGIO || {}),
            (t.ADAGIO.pageviewId =
              t.ADAGIO.pageviewId || (0, i.generateUUID)()),
            t.ADAGIO.pageviewId
          );
        },
        getDevice: function () {
          var t = navigator.language ? "language" : "userLanguage";
          return {
            userAgent: navigator.userAgent,
            language: navigator[t],
            dnt: (0, i.getDNT)() ? 1 : 0,
            geo: {},
            js: 1,
          };
        },
        getSite: function (t) {
          var e = "",
            r = "",
            n = "",
            o = t.refererInfo;
          if (k()) {
            var a = (0, i.getWindowTop)();
            (e = a.location.hostname),
              (r = a.location.href),
              (n = a.document.referrer || "");
          } else
            o.reachedTop
              ? ((e = (0, i.parseUrl)(o.referer).hostname), (r = o.referer))
              : o.stack &&
                o.stack.length &&
                o.stack[0] &&
                (e = (0, i.parseUrl)(o.stack[0]).hostname);
          return { domain: e, page: r, referrer: n };
        },
        getElementFromTopWindow: function t(e, r) {
          try {
            if ((0, i.getWindowTop)() === r)
              return (
                e.getAttribute("id") ||
                  e.setAttribute(
                    "id",
                    "adg-".concat((0, i.getUniqueIdentifierStr)())
                  ),
                e
              );
            var n = r.frameElement,
              o = n.getBoundingClientRect(),
              a = e.getBoundingClientRect();
            return (
              o.width === a.width && o.height === a.height && t(n, r.parent)
            );
          } catch (t) {
            return (0, i.logWarn)("".concat(O), t), !1;
          }
        },
        getRefererInfo: p.n,
        adagioScriptFromLocalStorageCb: function (t) {
          try {
            if (!t)
              return void (0, i.logWarn)("".concat(O, " script not found."));
            var e = /^(\/\/ hash: (.+)\n)(.+\n)$/;
            if (e.test(t)) {
              var r = t.match(e),
                n = r[2],
                o = r[3];
              (0, c.T)(
                o,
                n,
                "AL16XT44Sfp+8SHVF1UdC7hydPSMVLMhsYknKDdwqq+0ToDSJrP0+Qh0ki9JJI2uYm/6VEYo8TJED9WfMkiJ4vf02CW3RvSWwc35bif2SK1L8Nn/GfFYr/2/GG/Rm0vUsv+vBHky6nuuYls20Og0HDhMgaOlXoQ/cxMuiy5QSktp",
                65537
              )
                ? ((0, i.logInfo)("".concat(O, " start script.")),
                  Function(t)())
                : ((0, i.logWarn)("".concat(O, " invalid script found.")),
                  x.removeDataFromLocalStorage(D));
            } else
              (0, i.logWarn)("".concat(O, " no hash found.")),
                x.removeDataFromLocalStorage(D);
          } catch (t) {
            (0, i.logError)(O, t);
          }
        },
        getCurrentWindow: U,
        canAccessTopWindow: k,
        isRendererPreferredFromPublisher: function (t) {
          var e = (0, o.Z)(t, "renderer"),
            r = !!(e && e.url && e.render),
            n = (0, o.Z)(t, "mediaTypes.video.renderer"),
            i = !!(n && n.url && n.render);
          return !!((r && !0 !== e.backupOnly) || (i && !0 !== n.backupOnly));
        },
        isNewSession: function (t) {
          var e = Date.now(),
            r = (0, o.Z)(t, "session", {}),
            n = r.lastActivityTime,
            a = r.vwSmplg;
          return !(0, i.isNumber)(n) || !(0, i.isNumber)(a) || e - n > 18e5;
        },
      };
      function W(t) {
        t.renderer.push(function () {
          "function" == typeof window.ADAGIO.outstreamPlayer
            ? window.ADAGIO.outstreamPlayer(t)
            : (0, i.logError)(
                "".concat(O, " Adagio outstream player is not defined")
              );
        });
      }
      function M(t, e) {
        if (((t.params = t.params || {}), !t.params[e])) {
          var r = a.vc.getConfig("adagio") || {},
            n = a.vc.getConfig("ortb2"),
            i = r[e] || (0, o.Z)(n, "site.ext.data.".concat(e), null);
          i && (t.params[e] = i);
        }
      }
      function P(t) {
        var e = a.vc.getConfig("adagio") || {};
        (t.params = t.params || {}),
          e.siteId &&
            ((t.params.organizationId = e.siteId.split(":")[0]),
            (t.params.site = e.siteId.split(":")[1])),
          (!0 !== e.useAdUnitCodeAsPlacement &&
            !0 !== t.params.useAdUnitCodeAsPlacement) ||
            (t.params.placement = t.adUnitCode),
          (t.params.adUnitElementId =
            (0, o.Z)(t, "ortb2Imp.ext.data.elementId", null) ||
            t.params.adUnitElementId),
          t.params.adUnitElementId ||
            (!0 === e.useAdUnitCodeAsAdUnitElementId ||
            !0 === t.params.useAdUnitCodeAsAdUnitElementId
              ? (t.params.adUnitElementId = t.adUnitCode)
              : (t.params.adUnitElementId = (function (t) {
                  var e = (0, i.getGptSlotInfoForAdUnitCode)(t);
                  if (e.divId) return e.divId;
                })(t.adUnitCode))),
          M(t, "environment"),
          M(t, "pagetype"),
          M(t, "category"),
          M(t, "subcategory");
      }
      function q() {
        if (C() || !k()) return "";
        var t = (0, i.getWindowTop)(),
          e = t.document.querySelector("body");
        if (!e) return "";
        var r = t.document.documentElement,
          n = Math.max(
            e.scrollWidth,
            e.offsetWidth,
            r.clientWidth,
            r.scrollWidth,
            r.offsetWidth
          ),
          o = Math.max(
            e.scrollHeight,
            e.offsetHeight,
            r.clientHeight,
            r.scrollHeight,
            r.offsetHeight
          );
        return "".concat(n, "x").concat(o);
      }
      function B() {
        if (!C() && !k()) return "";
        var t = { w: 0, h: 0 };
        if (C()) {
          var e = (0, i.getWindowSelf)();
          if ("function" != typeof e.$sf.ext.geom)
            return (
              (0, i.logWarn)(O, "Unable to compute from safeframe api."), ""
            );
          var r = e.$sf.ext.geom();
          if (!r || !r.win)
            return (
              (0, i.logWarn)(
                O,
                "Unable to compute from safeframe api. Missing `geom().win` property"
              ),
              ""
            );
          (t.w = Math.round(r.w)), (t.h = Math.round(r.h));
        } else {
          var n = (0, i.getWindowTop)();
          (t.w = n.innerWidth), (t.h = n.innerHeight);
        }
        return "".concat(t.w, "x").concat(t.h);
      }
      function N(t) {
        if (!t) return "";
        if (!C() && !k()) return "";
        var e = { x: 0, y: 0 };
        if (C()) {
          var r = (0, i.getWindowSelf)();
          if ("function" != typeof r.$sf.ext.geom)
            return (
              (0, i.logWarn)(O, "Unable to compute from safeframe api."), ""
            );
          var n = r.$sf.ext.geom();
          if (!n || !n.self)
            return (
              (0, i.logWarn)(
                O,
                "Unable to compute from safeframe api. Missing `geom().self` property"
              ),
              ""
            );
          (e.x = Math.round(n.t)), (e.y = Math.round(n.l));
        } else {
          if (!k()) return "";
          var o,
            a = (0, i.getWindowTop)(),
            s = a.document;
          if (!0 === (0, i.inIframe)()) {
            var u = (0, i.getWindowSelf)(),
              c = u.document.getElementById(t);
            o = j.getElementFromTopWindow(c, u);
          } else o = a.document.getElementById(t);
          if (!o) return "";
          var d = o.getBoundingClientRect(),
            p = s.documentElement,
            f = s.body,
            m = s.clientTop || f.clientTop || 0,
            l = s.clientLeft || f.clientLeft || 0,
            h = a.pageYOffset || p.scrollTop || f.scrollTop,
            g = a.pageXOffset || p.scrollLeft || f.scrollLeft,
            y = a.getComputedStyle(o, null).display || "block";
          "none" === y &&
            ((o.style = o.style || {}),
            (o.style.display = "block"),
            (d = o.getBoundingClientRect()),
            (o.style.display = y)),
            (e.x = Math.round(d.left + g - l)),
            (e.y = Math.round(d.top + h - m));
        }
        return "".concat(e.x, "x").concat(e.y);
      }
      function G(t, e) {
        return (
          (e.bids &&
            e.bids.length &&
            (0, n.sE)(e.bids, function (e) {
              return e.adUnitCode === t;
            }).bidderRequestsCount) ||
          1
        );
      }
      function F() {
        var t,
          e = -1;
        if (
          (t = k()
            ? (0, i.getWindowTop)().performance
            : (0, i.getWindowSelf)().performance) &&
          t.timing &&
          t.timing.navigationStart > 0
        ) {
          var r = t.timing.domLoading - t.timing.navigationStart;
          r > 0 && (e = r);
        }
        return e;
      }
      function V(t) {
        var e,
          r = U();
        (r.ADAGIO = r.ADAGIO || {}),
          (r.ADAGIO.pbjsAdUnits = r.ADAGIO.pbjsAdUnits.filter(function (e) {
            return e.code !== t.adUnitCode;
          })),
          t.features && t.features.print_number
            ? (e = t.features.print_number)
            : t.params.features &&
              t.params.features.print_number &&
              (e = t.params.features.print_number),
          r.ADAGIO.pbjsAdUnits.push({
            code: t.adUnitCode,
            mediaTypes: t.mediaTypes || {},
            sizes:
              t.mediaTypes &&
              t.mediaTypes.banner &&
              Array.isArray(t.mediaTypes.banner.sizes)
                ? t.mediaTypes.banner.sizes
                : t.sizes,
            bids: [{ bidder: t.bidder, params: t.params }],
            auctionId: t.auctionId,
            pageviewId: j.getPageviewId(),
            printNumber: e,
          }),
          (r.ADAGIO.adUnits[t.adUnitCode] = {
            auctionId: t.auctionId,
            pageviewId: j.getPageviewId(),
            printNumber: e,
          });
      }
      var Z = {
        code: T,
        gvlid: 617,
        supportedMediaTypes: w,
        isBidRequestValid: function (t) {
          return (
            (t.params = t.params || {}),
            P(t),
            !!(
              t.params.organizationId &&
              t.params.site &&
              t.params.placement
            ) ||
              ((0, i.logWarn)(
                "".concat(O, " at least one required param is missing.")
              ),
              !1)
          );
        },
        buildRequests: function (t, e) {
          var r,
            n = "https:" === location.protocol ? 1 : 0,
            s = j.getDevice(),
            u = j.getSite(e),
            c = j.getPageviewId(),
            d =
              (function (t) {
                if (!(0, o.Z)(t, "gdprConsent")) return !1;
                var e = t.gdprConsent,
                  r = e.apiVersion,
                  n = e.gdprApplies,
                  a = e.consentString,
                  s = e.allowAuctionWithoutConsent;
                return (0, i.cleanObj)({
                  apiVersion: r,
                  consentString: a,
                  consentRequired: n ? 1 : 0,
                  allowAuctionWithoutConsent: s ? 1 : 0,
                });
              })(e) || {},
            p =
              (function (t) {
                return (
                  !!(0, o.Z)(t, "uspConsent") && { uspConsent: t.uspConsent }
                );
              })(e) || {},
            l = { required: !0 === a.vc.getConfig("coppa") ? 1 : 0 },
            g = ((r = t[0]), (0, o.Z)(r, "schain")),
            v =
              (function (t) {
                if ((0, o.Z)(t, "userId")) return (0, f.HQ)(t.userId);
              })(t[0]) || [],
            b = (0, i._map)(t, function (t) {
              var r = y(
                y({}, E.getOrSetGlobalFeatures()),
                {},
                {
                  print_number: G(t.adUnitCode, e).toString(),
                  adunit_position: N(t.params.adUnitElementId),
                }
              );
              return (
                Object.keys(r).forEach(function (t) {
                  "" === r[t] && delete r[t];
                }),
                (t.features = r),
                j.enqueue({
                  action: "features",
                  ts: Date.now(),
                  data: {
                    features: t.features,
                    params: t.params,
                    adUnitCode: t.adUnitCode,
                  },
                }),
                (t.floors = (function (t) {
                  if (!(0, i.isFn)(t.getFloor)) return !1;
                  var e = [],
                    r = function (r, n) {
                      var o = t.getFloor({
                        currency: "USD",
                        mediaType: r,
                        size: [],
                      });
                      e.push(
                        (0, i.cleanObj)({
                          mt: r,
                          s: (0, i.isArray)(n)
                            ? "".concat(n[0], "x").concat(n[1])
                            : void 0,
                          f:
                            isNaN(o.floor) || "USD" !== o.currency
                              ? 0.1
                              : o.floor,
                        })
                      );
                    };
                  return (
                    Object.keys(t.mediaTypes).forEach(function (e) {
                      if (-1 !== w.indexOf(e)) {
                        var n = e === m.pX ? "playerSize" : "sizes";
                        t.mediaTypes[e][n] && t.mediaTypes[e][n].length
                          ? (0, i.isArray)(t.mediaTypes[e][n][0])
                            ? t.mediaTypes[e][n].forEach(function (t) {
                                r(e, [t[0], t[1]]);
                              })
                            : r(e, [
                                t.mediaTypes[e][n][0],
                                t.mediaTypes[e][n][1],
                              ])
                          : r(e, "*");
                      }
                    }),
                    e
                  );
                })(t)),
                (0, o.Z)(t, "mediaTypes.video") &&
                  (function (t) {
                    var e = (0, o.Z)(t, "mediaTypes.video", {}),
                      r = (0, o.Z)(t, "params.video", {}),
                      n = {};
                    if (Array.isArray(e.playerSize)) {
                      var a = Array.isArray(e.playerSize[0])
                        ? e.playerSize[0]
                        : e.playerSize;
                      (n.w = a[0]), (n.h = a[1]);
                    }
                    var s = y(y(y({}, n), e), r);
                    s.context &&
                      s.context === h.gZ &&
                      (t.mediaTypes.video.playerName = R(t)),
                      Object.keys(S).forEach(function (e) {
                        s.hasOwnProperty(e) &&
                          (S[e](s[e])
                            ? (t.mediaTypes.video[e] = s[e])
                            : (delete t.mediaTypes.video[e],
                              (0, i.logWarn)(
                                ""
                                  .concat(O, " The OpenRTB video param ")
                                  .concat(
                                    e,
                                    " has been skipped due to misformating. Please refer to OpenRTB 2.5 spec."
                                  )
                              )));
                      });
                  })(t),
                V(t),
                t
              );
            }),
            A = b.reduce(function (t, e) {
              var r = (0, i.deepClone)(e);
              return (
                (r.params.organizationId = r.params.organizationId.toString()),
                delete r.floorData,
                delete r.params.siteId,
                (t[r.params.organizationId] = t[r.params.organizationId] || []),
                t[r.params.organizationId].push(r),
                t
              );
            }, {});
          return (0, i._map)(Object.keys(A), function (t) {
            return {
              method: "POST",
              url: "https://mp.4dex.io/prebid",
              data: {
                id: (0, i.generateUUID)(),
                organizationId: t,
                secure: n,
                device: s,
                site: u,
                pageviewId: c,
                adUnits: A[t],
                data: E.getExchangeData(),
                regs: { gdpr: d, coppa: l, ccpa: p },
                schain: g,
                user: { eids: v },
                prebidVersion: "6.18.0",
                featuresVersion: "1",
              },
              options: { contentType: "text/plain" },
            };
          });
        },
        interpretResponse: function (t, e) {
          var r = [];
          try {
            var a = t.body;
            a &&
              (a.data &&
                j.enqueue({ action: "ssp-data", ts: Date.now(), data: a.data }),
              a.bids &&
                a.bids.forEach(function (t) {
                  var a = (0, n.sE)(e.data.adUnits, function (e) {
                    return e.bidId === t.requestId;
                  });
                  if (a) {
                    if (
                      ((t.meta = (0, o.Z)(t, "meta", {})),
                      (t.meta.mediaType = t.mediaType),
                      (t.meta.advertiserDomains =
                        Array.isArray(t.aDomain) && t.aDomain.length
                          ? t.aDomain
                          : []),
                      t.mediaType === m.pX)
                    ) {
                      var s = (0, o.Z)(a, "mediaTypes.video.context");
                      !t.vastUrl &&
                        t.vastXml &&
                        (t.vastUrl =
                          "data:text/xml;charset=utf-8;base64," +
                          btoa(t.vastXml.replace(/\\"/g, '"'))),
                        s === h.gZ &&
                          ((t.renderer = l.Th.install({
                            id: t.requestId,
                            adUnitCode: t.adUnitCode,
                            url:
                              t.urlRenderer ||
                              "https://script.4dex.io/outstream-player.js",
                            config: y(
                              y({}, (0, o.Z)(a, "mediaTypes.video")),
                              (0, o.Z)(t, "outstream", {})
                            ),
                          })),
                          t.renderer.setRender(W));
                    }
                    t.mediaType === m.B5 &&
                      (function (t) {
                        if (t.admNative && Array.isArray(t.admNative.assets)) {
                          var e = {};
                          t.admNative.assets.forEach(function (t) {
                            var r, n;
                            t.title
                              ? (e.title = t.title.text)
                              : t.data
                              ? ((r = t.data),
                                (n = {
                                  1: "sponsoredBy",
                                  2: "body",
                                  3: "rating",
                                  4: "likes",
                                  5: "downloads",
                                  6: "price",
                                  7: "salePrice",
                                  8: "phone",
                                  9: "address",
                                  10: "body2",
                                  11: "displayUrl",
                                  12: "cta",
                                }).hasOwnProperty(r.type) &&
                                  "string" == typeof r.value &&
                                  (e[n[r.type]] = r.value))
                              : t.img &&
                                (1 === t.img.type
                                  ? (e.icon = {
                                      url: t.img.url,
                                      width: t.img.w,
                                      height: t.img.h,
                                    })
                                  : (e.image = {
                                      url: t.img.url,
                                      width: t.img.w,
                                      height: t.img.h,
                                    }));
                          }),
                            t.admNative.link &&
                              (t.admNative.link.url &&
                                (e.clickUrl = t.admNative.link.url),
                              Array.isArray(t.admNative.link.clicktrackers) &&
                                (e.clickTrackers =
                                  t.admNative.link.clicktrackers)),
                            Array.isArray(t.admNative.eventtrackers)
                              ? ((e.impressionTrackers = []),
                                t.admNative.eventtrackers.forEach(function (t) {
                                  if (1 === t.event)
                                    switch (t.method) {
                                      case 1:
                                        e.impressionTrackers.push(t.url);
                                        break;
                                      case 2:
                                        e.javascriptTrackers =
                                          '<script src="'.concat(
                                            t.url,
                                            '"></script>'
                                          );
                                    }
                                }))
                              : ((e.impressionTrackers = Array.isArray(
                                  t.admNative.imptrackers
                                )
                                  ? t.admNative.imptrackers
                                  : []),
                                t.admNative.jstracker &&
                                  (e.javascriptTrackers =
                                    t.admNative.jstracker)),
                            t.admNative.privacy &&
                              (e.privacyLink = t.admNative.privacy),
                            t.admNative.ext &&
                              ((e.ext = {}),
                              t.admNative.ext.bvw &&
                                (e.ext.adagio_bvw = t.admNative.ext.bvw)),
                            (t.native = e);
                        } else
                          (0, i.logError)(
                            "".concat(O, " Invalid native response")
                          );
                      })(t),
                      (t.site = a.params.site),
                      (t.placement = a.params.placement),
                      (t.pagetype = a.params.pagetype),
                      (t.category = a.params.category),
                      (t.subcategory = a.params.subcategory),
                      (t.environment = a.params.environment);
                  }
                  r.push(t);
                }));
          } catch (t) {
            (0, i.logError)(t);
          }
          return r;
        },
        getUserSyncs: function (t, e) {
          return (
            !(!e.length || "" === e[0].body || !e[0].body.userSyncs) &&
            e[0].body.userSyncs.map(function (t) {
              return { type: "p" === t.t ? "image" : "iframe", url: t.u };
            })
          );
        },
        transformBidParams: function (t, e, r, i) {
          var a = (0, n.sE)(i, function (t) {
              return "adagio" === t.bidderCode;
            }),
            s = (0, n.sE)(a.bids, function (t) {
              return t.adUnitCode === r.code;
            });
          if (e) {
            P(s), (s.params.auctionId = (0, o.Z)(a, "auctionId"));
            var u = E.getOrSetGlobalFeatures();
            (s.params.features = y(
              y({}, u),
              {},
              {
                print_number: G(s.adUnitCode, a).toString(),
                adunit_position: N(s.params.adUnitElementId),
              }
            )),
              (s.params.pageviewId = j.getPageviewId()),
              (s.params.prebidVersion = "6.18.0"),
              (s.params.data = E.getExchangeData()),
              (0, o.Z)(s, "mediaTypes.video.context") === h.gZ &&
                (s.params.playerName = R(s)),
              V(s);
          }
          return s.params;
        },
      };
      !(function () {
        k() && (b = k() ? (0, i.getWindowTop)() : (0, i.getWindowSelf)());
        var t = j.getCurrentWindow();
        (t.ADAGIO = t.ADAGIO || {}),
          (t.ADAGIO.adUnits = t.ADAGIO.adUnits || {}),
          (t.ADAGIO.pbjsAdUnits = t.ADAGIO.pbjsAdUnits || []),
          (t.ADAGIO.queue = t.ADAGIO.queue || []),
          (t.ADAGIO.versions = t.ADAGIO.versions || {}),
          (t.ADAGIO.versions.pbjs = "6.18.0"),
          (t.ADAGIO.isSafeFrameWindow = C()),
          x.getDataFromLocalStorage("adagio", function (t) {
            try {
              E.prepareExchangeData(t);
            } catch (t) {
              (0, i.logError)(O, t);
            }
          }),
          x.getDataFromLocalStorage(D, function (t) {
            j.adagioScriptFromLocalStorageCb(t);
          }),
          x.localStorageIsEnabled(function (t) {
            if (t) (0, u.B)("https://script.4dex.io/localstore.js", T);
            else
              try {
                window.localStorage.removeItem(D),
                  window.localStorage.removeItem("adagio");
              } catch (t) {
                (0, i.logInfo)(
                  "".concat(
                    O,
                    " unable to clear Adagio scripts from localstorage."
                  )
                );
              }
          });
      })(),
        (0, s.dX)(Z),
        window.ihowpbjs.installedModules.push("adagioBidAdapter");
    },
    224: function (t, e, r) {
      r.d(e, {
        HQ: function () {
          return s;
        },
        Pv: function () {
          return u;
        },
        UR: function () {
          return o;
        },
      });
      var n = r(853),
        i = r(265),
        o = {
          trustpid: {
            source: "trustpid.com",
            atype: 1,
            getValue: function (t) {
              return t;
            },
          },
          intentIqId: {
            source: "intentiq.com",
            atype: 1,
            getValue: function (t) {
              return t.RESULT;
            },
          },
          naveggId: { source: "navegg.com", atype: 1 },
          justId: { source: "justtag.com", atype: 1 },
          pubcid: { source: "pubcid.org", atype: 1 },
          tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function () {
              return { rtiPartner: "TDID" };
            },
          },
          id5id: {
            getValue: function (t) {
              return t.uid;
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function (t) {
              if (t.ext) return t.ext;
            },
          },
          ftrackId: {
            source: "flashtalking.com",
            atype: 1,
            getValue: function (t) {
              return t.uid;
            },
            getUidExt: function (t) {
              if (t.ext) return t.ext;
            },
          },
          parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function (t) {
              return t.eid ? t.eid : t.ccpaOptout ? "" : null;
            },
            getUidExt: function (t) {
              var e = (0, n.pick)(t, ["ibaOptout", "ccpaOptout"]);
              if (Object.keys(e).length) return e;
            },
          },
          idl_env: { source: "liveramp.com", atype: 3 },
          lipb: {
            getValue: function (t) {
              return t.lipbid;
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function (t) {
              if (Array.isArray(t.segments) && t.segments.length)
                return { segments: t.segments };
            },
          },
          britepoolid: { source: "britepool.com", atype: 3 },
          dmdId: { source: "hcn.health", atype: 3 },
          lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
          criteoId: { source: "criteo.com", atype: 1 },
          merkleId: {
            source: "merkleinc.com",
            atype: 3,
            getValue: function (t) {
              return t.id;
            },
            getUidExt: function (t) {
              return t && t.keyID ? { keyID: t.keyID } : void 0;
            },
          },
          netId: { source: "netid.de", atype: 1 },
          IDP: {
            source: "zeotap.com",
            atype: 1,
            getValue: function (t) {
              return (0, n.isPlainObject)(t) ? t.id : t;
            },
          },
          hadronId: { source: "audigent.com", atype: 1 },
          haloId: { source: "audigent.com", atype: 1 },
          quantcastId: { source: "quantcast.com", atype: 1 },
          nextrollId: { source: "nextroll.com", atype: 1 },
          idx: { source: "idx.lat", atype: 1 },
          connectid: { source: "verizonmedia.com", atype: 3 },
          fabrickId: { source: "neustar.biz", atype: 1 },
          mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
          tapadId: { source: "tapad.com", atype: 1 },
          novatiq: {
            getValue: function (t) {
              return t.snowflake;
            },
            source: "novatiq.com",
            atype: 1,
          },
          uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function (t) {
              return t.id;
            },
          },
          dapId: { source: "akamai.com", atype: 1 },
          deepintentId: { source: "deepintent.com", atype: 3 },
          admixerId: { source: "admixer.net", atype: 3 },
          adtelligentId: { source: "adtelligent.com", atype: 3 },
          amxId: { source: "amxrtb.com", atype: 1 },
          publinkId: { source: "epsilon.com", atype: 3 },
          kpuid: { source: "kpuid.com", atype: 3 },
          imuid: { source: "intimatemerger.com", atype: 1 },
          connectId: { source: "yahoo.com", atype: 3 },
          qid: { source: "adquery.io", atype: 1 },
          dacId: { source: "impact-ad.jp", atype: 1 },
        };
      function a(t, e) {
        var r = o[e];
        if (r && t) {
          var i = {};
          i.source = r.source;
          var a = (0, n.isFn)(r.getValue) ? r.getValue(t) : t;
          if ((0, n.isStr)(a)) {
            var s = { id: a, atype: r.atype };
            if ((0, n.isFn)(r.getUidExt)) {
              var u = r.getUidExt(t);
              u && (s.ext = u);
            }
            if (((i.uids = [s]), (0, n.isFn)(r.getEidExt))) {
              var c = r.getEidExt(t);
              c && (i.ext = c);
            }
            return i;
          }
        }
        return null;
      }
      function s(t) {
        var e = [];
        for (var r in t)
          if (t.hasOwnProperty(r))
            if ("pubProvidedId" === r) e = e.concat(t.pubProvidedId);
            else {
              var n = a(t[r], r);
              n && e.push(n);
            }
        return e;
      }
      function u(t) {
        var e = [];
        return (
          t
            .filter(function (t) {
              return (
                (0, n.isPlainObject)(t.idObj) && Object.keys(t.idObj).length
              );
            })
            .forEach(function (t) {
              Object.keys(t.idObj).forEach(function (r) {
                (0, i.Z)(t, "config.bidders") &&
                  Array.isArray(t.config.bidders) &&
                  (0, i.Z)(o, r + ".source") &&
                  e.push({ source: o[r].source, bidders: t.config.bidders });
              });
            }),
          e
        );
      }
    },
    611: function (t, e) {
      var r;
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
        function t(t) {
          null !== t && this.fromHexString(t);
        }
        return (
          (t.prototype.toHexString = function () {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t,
              e = !1,
              r = "",
              n = this.t,
              i = this.DB - ((n * this.DB) % 4);
            if (n-- > 0)
              for (
                i < this.DB && (t = this[n] >> i) > 0 && ((e = !0), (r = d(t)));
                n >= 0;

              )
                i < 4
                  ? ((t = (this[n] & ((1 << i) - 1)) << (4 - i)),
                    (t |= this[--n] >> (i += this.DB - 4)))
                  : ((t = (this[n] >> (i -= 4)) & 15),
                    i <= 0 && ((i += this.DB), --n)),
                  t > 0 && (e = !0),
                  e && (r += d(t));
            return e ? r : "0";
          }),
          (t.prototype.fromHexString = function (e) {
            if (null !== e) {
              (this.t = 0), (this.s = 0);
              for (var r = e.length, n = !1, i = 0; --r >= 0; ) {
                var o = c(e, r);
                o < 0
                  ? "-" == e.charAt(r) && (n = !0)
                  : ((n = !1),
                    0 == i
                      ? (this[this.t++] = o)
                      : i + 4 > this.DB
                      ? ((this[this.t - 1] |=
                          (o & ((1 << (this.DB - i)) - 1)) << i),
                        (this[this.t++] = o >> (this.DB - i)))
                      : (this[this.t - 1] |= o << i),
                    (i += 4) >= this.DB && (i -= this.DB));
              }
              this.clamp(), n && t.ZERO.subTo(this, this);
            }
          }),
          (t.prototype.negate = function () {
            var e = i();
            return t.ZERO.subTo(this, e), e;
          }),
          (t.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this;
          }),
          (t.prototype.mod = function (e) {
            var r = i();
            return (
              this.abs().divRemTo(e, null, r),
              this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r),
              r
            );
          }),
          (t.prototype.copyTo = function (t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            (t.t = this.t), (t.s = this.s);
          }),
          (t.prototype.lShiftTo = function (t, e) {
            for (
              var r = t % this.DB,
                n = this.DB - r,
                i = (1 << n) - 1,
                o = Math.floor(t / this.DB),
                a = (this.s << r) & this.DM,
                s = this.t - 1;
              s >= 0;
              --s
            )
              (e[s + o + 1] = (this[s] >> n) | a), (a = (this[s] & i) << r);
            for (s = o - 1; s >= 0; --s) e[s] = 0;
            (e[o] = a), (e.t = this.t + o + 1), (e.s = this.s), e.clamp();
          }),
          (t.prototype.invDigit = function () {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return (e =
              ((e =
                ((e =
                  ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) &
                  255) *
                  (2 - (((65535 & t) * e) & 65535))) &
                65535) *
                (2 - ((t * e) % this.DV))) %
              this.DV) > 0
              ? this.DV - e
              : -e;
          }),
          (t.prototype.dlShiftTo = function (t, e) {
            var r;
            for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
            for (r = t - 1; r >= 0; --r) e[r] = 0;
            (e.t = this.t + t), (e.s = this.s);
          }),
          (t.prototype.squareTo = function (t) {
            for (var e = this.abs(), r = (t.t = 2 * e.t); --r >= 0; ) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
              var n = e.am(r, e[r], t, 2 * r, 0, 1);
              (t[r + e.t] += e.am(
                r + 1,
                2 * e[r],
                t,
                2 * r + 1,
                n,
                e.t - r - 1
              )) >= e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
            }
            t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
              (t.s = 0),
              t.clamp();
          }),
          (t.prototype.multiplyTo = function (e, r) {
            var n = this.abs(),
              i = e.abs(),
              o = n.t;
            for (r.t = o + i.t; --o >= 0; ) r[o] = 0;
            for (o = 0; o < i.t; ++o) r[o + n.t] = n.am(0, i[o], r, o, 0, n.t);
            (r.s = 0), r.clamp(), this.s != e.s && t.ZERO.subTo(r, r);
          }),
          (t.prototype.divRemTo = function (e, r, n) {
            var a = e.abs();
            if (!(a.t <= 0)) {
              var s = this.abs();
              if (s.t < a.t)
                return (
                  null != r && r.fromHexString("0"),
                  void (null != n && this.copyTo(n))
                );
              null == n && (n = i());
              var u = i(),
                c = this.s,
                d = e.s,
                p = this.DB - o(a[a.t - 1]);
              p > 0
                ? (a.lShiftTo(p, u), s.lShiftTo(p, n))
                : (a.copyTo(u), s.copyTo(n));
              var f = u.t,
                m = u[f - 1];
              if (0 != m) {
                var l = m * (1 << this.F1) + (f > 1 ? u[f - 2] >> this.F2 : 0),
                  h = this.FV / l,
                  g = (1 << this.F1) / l,
                  y = 1 << this.F2,
                  v = n.t,
                  b = v - f,
                  A = null == r ? i() : r;
                for (
                  u.dlShiftTo(b, A),
                    n.compareTo(A) >= 0 && ((n[n.t++] = 1), n.subTo(A, n)),
                    t.ONE.dlShiftTo(f, A),
                    A.subTo(u, u);
                  u.t < f;

                )
                  u[u.t++] = 0;
                for (; --b >= 0; ) {
                  var I =
                    n[--v] == m
                      ? this.DM
                      : Math.floor(n[v] * h + (n[v - 1] + y) * g);
                  if ((n[v] += u.am(0, I, n, b, 0, f)) < I)
                    for (u.dlShiftTo(b, A), n.subTo(A, n); n[v] < --I; )
                      n.subTo(A, n);
                }
                null != r && (n.drShiftTo(f, r), c != d && t.ZERO.subTo(r, r)),
                  (n.t = f),
                  n.clamp(),
                  p > 0 && n.rShiftTo(p, n),
                  c < 0 && t.ZERO.subTo(n, n);
              }
            }
          }),
          (t.prototype.rShiftTo = function (t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0;
            else {
              var n = t % this.DB,
                i = this.DB - n,
                o = (1 << n) - 1;
              e[0] = this[r] >> n;
              for (var a = r + 1; a < this.t; ++a)
                (e[a - r - 1] |= (this[a] & o) << i), (e[a - r] = this[a] >> n);
              n > 0 && (e[this.t - r - 1] |= (this.s & o) << i),
                (e.t = this.t - r),
                e.clamp();
            }
          }),
          (t.prototype.drShiftTo = function (t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
          }),
          (t.prototype.subTo = function (t, e) {
            for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i; )
              (n += this[r] - t[r]), (e[r++] = n & this.DM), (n >>= this.DB);
            if (t.t < this.t) {
              for (n -= t.s; r < this.t; )
                (n += this[r]), (e[r++] = n & this.DM), (n >>= this.DB);
              n += this.s;
            } else {
              for (n += this.s; r < t.t; )
                (n -= t[r]), (e[r++] = n & this.DM), (n >>= this.DB);
              n -= t.s;
            }
            (e.s = n < 0 ? -1 : 0),
              n < -1 ? (e[r++] = this.DV + n) : n > 0 && (e[r++] = n),
              (e.t = r),
              e.clamp();
          }),
          (t.prototype.clamp = function () {
            for (
              var t = this.s & this.DM;
              this.t > 0 && this[this.t - 1] == t;

            )
              --this.t;
          }),
          (t.prototype.modPowInt = function (t, e) {
            var r;
            return (
              (r = t < 256 || e.isEven() ? new p(e) : new f(e)), this.exp(t, r)
            );
          }),
          (t.prototype.exp = function (e, r) {
            if (e > 4294967295 || e < 1) return t.ONE;
            var n = i(),
              a = i(),
              s = r.convert(this),
              u = o(e) - 1;
            for (s.copyTo(n); --u >= 0; )
              if ((r.sqrTo(n, a), (e & (1 << u)) > 0)) r.mulTo(a, s, n);
              else {
                var c = n;
                (n = a), (a = c);
              }
            return r.revert(n);
          }),
          (t.prototype.isEven = function () {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
          }),
          (t.prototype.compareTo = function (t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (; --r >= 0; ) if (0 != (e = this[r] - t[r])) return e;
            return 0;
          }),
          (t.prototype.am1 = function (t, e, r, n, i, o) {
            for (; --o >= 0; ) {
              var a = e * this[t++] + r[n] + i;
              (i = Math.floor(a / 67108864)), (r[n++] = 67108863 & a);
            }
            return i;
          }),
          (t.prototype.am2 = function (t, e, r, n, i, o) {
            for (var a = 32767 & e, s = e >> 15; --o >= 0; ) {
              var u = 32767 & this[t],
                c = this[t++] >> 15,
                d = s * u + c * a;
              (i =
                ((u = a * u + ((32767 & d) << 15) + r[n] + (1073741823 & i)) >>>
                  30) +
                (d >>> 15) +
                s * c +
                (i >>> 30)),
                (r[n++] = 1073741823 & u);
            }
            return i;
          }),
          (t.prototype.am3 = function (t, e, r, n, i, o) {
            for (var a = 16383 & e, s = e >> 14; --o >= 0; ) {
              var u = 16383 & this[t],
                c = this[t++] >> 14,
                d = s * u + c * a;
              (i =
                ((u = a * u + ((16383 & d) << 14) + r[n] + i) >> 28) +
                (d >> 14) +
                s * c),
                (r[n++] = 268435455 & u);
            }
            return i;
          }),
          t
        );
      })();
      function i() {
        return new n(null);
      }
      function o(t) {
        var e,
          r = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (r += 16)),
          0 != (e = t >> 8) && ((t = e), (r += 8)),
          0 != (e = t >> 4) && ((t = e), (r += 4)),
          0 != (e = t >> 2) && ((t = e), (r += 2)),
          0 != (e = t >> 1) && ((t = e), (r += 1)),
          r
        );
      }
      (e.BigInteger = n), (e.nbi = i), (e.nbits = o);
      var a,
        s,
        u = [];
      for (a = "0".charCodeAt(0), s = 0; s <= 9; ++s) u[a++] = s;
      for (a = "a".charCodeAt(0), s = 10; s < 36; ++s) u[a++] = s;
      for (a = "A".charCodeAt(0), s = 10; s < 36; ++s) u[a++] = s;
      function c(t, e) {
        var r = u[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function d(t) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
      }
      (e.intAt = c),
        (e.int2char = d),
        (e.b64toHex = function (t) {
          var e,
            r = "",
            n = 0,
            i = 0;
          for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
            var o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                t.charAt(e)
              );
            o < 0 ||
              (0 == n
                ? ((r += d(o >> 2)), (i = 3 & o), (n = 1))
                : 1 == n
                ? ((r += d((i << 2) | (o >> 4))), (i = 15 & o), (n = 2))
                : 2 == n
                ? ((r += d(i)), (r += d(o >> 2)), (i = 3 & o), (n = 3))
                : ((r += d((i << 2) | (o >> 4))), (r += d(15 & o)), (n = 0)));
          }
          return 1 == n && (r += d(i << 2)), r;
        }),
        (e.removeExtraSymbols = function (t) {
          return t
            .replace(/^1f+00/, "")
            .replace("3031300d060960864801650304020105000420", "");
        });
      var p = (function () {
          function t(t) {
            this.m = t;
          }
          return (
            (t.prototype.convert = function (t) {
              return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
            }),
            (t.prototype.revert = function (t) {
              return t;
            }),
            (t.prototype.reduce = function (t) {
              t.divRemTo(this.m, null, t);
            }),
            (t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r), this.reduce(r);
            }),
            (t.prototype.sqrTo = function (t, e) {
              t.squareTo(e), this.reduce(e);
            }),
            t
          );
        })(),
        f = (function () {
          function t(t) {
            (this.m = t),
              (this.mp = t.invDigit()),
              (this.mpl = 32767 & this.mp),
              (this.mph = this.mp >> 15),
              (this.um = (1 << (t.DB - 15)) - 1),
              (this.mt2 = 2 * t.t);
          }
          return (
            (t.prototype.convert = function (t) {
              var e = i();
              return (
                t.abs().dlShiftTo(this.m.t, e),
                e.divRemTo(this.m, null, e),
                t.s < 0 && e.compareTo(n.ZERO) > 0 && this.m.subTo(e, e),
                e
              );
            }),
            (t.prototype.revert = function (t) {
              var e = i();
              return t.copyTo(e), this.reduce(e), e;
            }),
            (t.prototype.reduce = function (t) {
              for (; t.t <= this.mt2; ) t[t.t++] = 0;
              for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e],
                  n =
                    (r * this.mpl +
                      (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) <<
                        15)) &
                    t.DM;
                for (
                  t[(r = e + this.m.t)] += this.m.am(0, n, t, e, 0, this.m.t);
                  t[r] >= t.DV;

                )
                  (t[r] -= t.DV), t[++r]++;
              }
              t.clamp(),
                t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
            }),
            (t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r), this.reduce(r);
            }),
            (t.prototype.sqrTo = function (t, e) {
              t.squareTo(e), this.reduce(e);
            }),
            t
          );
        })();
      function m(t) {
        var e = i();
        return e.fromHexString(t.toString()), e;
      }
      (e.nbv = m),
        (n.ZERO = m(0)),
        (n.ONE = m(1)),
        "Microsoft Internet Explorer" == navigator.appName
          ? ((n.prototype.am = n.prototype.am2), (r = 30))
          : "Netscape" != navigator.appName
          ? ((n.prototype.am = n.prototype.am1), (r = 26))
          : ((n.prototype.am = n.prototype.am3), (r = 28)),
        (n.prototype.DB = r),
        (n.prototype.DM = (1 << r) - 1),
        (n.prototype.DV = 1 << r),
        (n.prototype.FV = Math.pow(2, 52)),
        (n.prototype.F1 = 52 - r),
        (n.prototype.F2 = 2 * r - 52);
    },
    950: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
        function t() {}
        return (
          (t.hash = function (e) {
            e = t.utf8Encode(e || "");
            for (
              var r = [
                  1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                  1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                  607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                  3248222580, 3835390401, 4022224774, 264347078, 604807628,
                  770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                  2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                  113926993, 338241895, 666307205, 773529912, 1294757372,
                  1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                  2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                  3600352804, 4094571909, 275423344, 430227734, 506948616,
                  659060556, 883997877, 958139571, 1322822218, 1537002063,
                  1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                  2428436474, 2756734187, 3204031479, 3329325298,
                ],
                n = [
                  1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                  2600822924, 528734635, 1541459225,
                ],
                i = (e += String.fromCharCode(128)).length / 4 + 2,
                o = Math.ceil(i / 16),
                a = new Array(o),
                s = 0;
              s < o;
              s++
            ) {
              a[s] = new Array(16);
              for (var u = 0; u < 16; u++)
                a[s][u] =
                  (e.charCodeAt(64 * s + 4 * u) << 24) |
                  (e.charCodeAt(64 * s + 4 * u + 1) << 16) |
                  (e.charCodeAt(64 * s + 4 * u + 2) << 8) |
                  (e.charCodeAt(64 * s + 4 * u + 3) << 0);
            }
            var c = (8 * (e.length - 1)) / Math.pow(2, 32),
              d = (8 * (e.length - 1)) >>> 0;
            for (
              a[o - 1][14] = Math.floor(c), a[o - 1][15] = d, s = 0;
              s < o;
              s++
            ) {
              for (var p = new Array(64), f = 0; f < 16; f++) p[f] = a[s][f];
              for (f = 16; f < 64; f++)
                p[f] =
                  (t.q1(p[f - 2]) + p[f - 7] + t.q0(p[f - 15]) + p[f - 16]) >>>
                  0;
              var m = n[0],
                l = n[1],
                h = n[2],
                g = n[3],
                y = n[4],
                v = n[5],
                b = n[6],
                A = n[7];
              for (f = 0; f < 64; f++) {
                var I = A + t.z1(y) + t.Ch(y, v, b) + r[f] + p[f],
                  T = t.z0(m) + t.Maj(m, l, h);
                (A = b),
                  (b = v),
                  (v = y),
                  (y = (g + I) >>> 0),
                  (g = h),
                  (h = l),
                  (l = m),
                  (m = (I + T) >>> 0);
              }
              (n[0] = (n[0] + m) >>> 0),
                (n[1] = (n[1] + l) >>> 0),
                (n[2] = (n[2] + h) >>> 0),
                (n[3] = (n[3] + g) >>> 0),
                (n[4] = (n[4] + y) >>> 0),
                (n[5] = (n[5] + v) >>> 0),
                (n[6] = (n[6] + b) >>> 0),
                (n[7] = (n[7] + A) >>> 0);
            }
            var O = new Array(n.length);
            for (A = 0; A < n.length; A++)
              O[A] = ("00000000" + n[A].toString(16)).slice(-8);
            return O.join("");
          }),
          (t.utf8Encode = function (t) {
            try {
              return new TextEncoder().encode(t).reduce(function (t, e) {
                return t + String.fromCharCode(e);
              }, "");
            } catch (e) {
              return unescape(encodeURIComponent(t));
            }
          }),
          (t.ROTR = function (t, e) {
            return (e >>> t) | (e << (32 - t));
          }),
          (t.z0 = function (e) {
            return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e);
          }),
          (t.z1 = function (e) {
            return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e);
          }),
          (t.q0 = function (e) {
            return t.ROTR(7, e) ^ t.ROTR(18, e) ^ (e >>> 3);
          }),
          (t.q1 = function (e) {
            return t.ROTR(17, e) ^ t.ROTR(19, e) ^ (e >>> 10);
          }),
          (t.Ch = function (t, e, r) {
            return (t & e) ^ (~t & r);
          }),
          (t.Maj = function (t, e, r) {
            return (t & e) ^ (t & r) ^ (e & r);
          }),
          t
        );
      })();
      e.Sha256 = r;
    },
    582: function (t, e, r) {
      var n = r(611),
        i = r(950);
      e.T = function (t, e, r, o) {
        var a = new n.BigInteger(n.b64toHex(e)),
          s = new n.BigInteger(n.b64toHex(r)),
          u = a.modPowInt(o, s);
        return n.removeExtraSymbols(u.toHexString()) === i.Sha256.hash(t);
      };
    },
  },
  function (t) {
    t((t.s = 643));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [871],
  {
    649: function (e, t, n) {
      var i = n(853),
        r = n(265),
        a = n(892),
        o = n(893),
        d = n(929),
        u = n(494),
        c = n(905),
        l = n(962),
        s = n(3),
        f = n(879),
        v = n(766),
        g = n(644);
      function h() {
        return (
          (h =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          h.apply(this, arguments)
        );
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function b(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                r,
                a = [],
                o = !0,
                d = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (i = n.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  o = !0
                );
              } catch (e) {
                (d = !0), (r = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (d) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          m(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function m(e, t) {
        if (e) {
          if ("string" == typeof e) return y(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? y(e, t)
              : void 0
          );
        }
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var T = "hb_pb_cat_dur",
        C = "hb_cache_id",
        S = 50,
        _ = 5,
        E = (function () {
          var e = {};
          return {
            addBid: function (t) {
              e[t.auctionId] ||
                (function (t) {
                  var n, r, a;
                  (e[t] = {}),
                    (e[t].bidStorage = new Set()),
                    (e[t].queueDispatcher =
                      ((n = S),
                      (a = 1),
                      function (e, t, i, o) {
                        var d = this,
                          u = function () {
                            w.call(d, e, t, i);
                          };
                        clearTimeout(r),
                          o
                            ? (a = 1)
                            : a === _
                            ? ((a = 1), u())
                            : (a++, (r = setTimeout(u, n)));
                      })),
                    (e[t].initialCacheKey = (0, i.generateUUID)());
                })(t.auctionId),
                e[t.auctionId].bidStorage.add(t);
            },
            removeBid: function (t) {
              e[t.auctionId].bidStorage.delete(t);
            },
            getBids: function (t) {
              return e[t.auctionId] && e[t.auctionId].bidStorage.values();
            },
            getQueueDispatcher: function (t) {
              return e[t.auctionId] && e[t.auctionId].queueDispatcher;
            },
            setupInitialCacheKey: function (t) {
              e[t.auctionId] ||
                ((e[t.auctionId] = {}),
                (e[t.auctionId].initialCacheKey = (0, i.generateUUID)()));
            },
            getInitialCacheKey: function (t) {
              return e[t.auctionId] && e[t.auctionId].initialCacheKey;
            },
          };
        })();
      function I(e, t) {
        var n,
          i = E.getInitialCacheKey(e),
          o = (0, r.Z)(e, "video.durationBucket"),
          d = (function (e) {
            var t;
            if (
              l.vc.getConfig("adpod.prioritizeDeals") &&
              (0, r.Z)(e, "video.dealTier")
            ) {
              var n = l.vc.getConfig(
                "adpod.dealTier.".concat(e.bidderCode, ".prefix")
              );
              t = n
                ? n + (0, r.Z)(e, "video.dealTier")
                : (0, r.Z)(e, "video.dealTier");
            } else {
              var i = (0, a.RH)(e);
              t = (0, a.dg)(i)(e);
            }
            return t;
          })(e);
        if (t) {
          var u = (0, r.Z)(e, "meta.adServerCatId");
          n = "".concat(d, "_").concat(u, "_").concat(o, "s");
        } else n = "".concat(d, "_").concat(o, "s");
        e.adserverTargeting || (e.adserverTargeting = {}),
          (e.adserverTargeting.hb_pb_cat_dur = n),
          (e.adserverTargeting.hb_cache_id = i),
          (e.videoCacheKey = i),
          (e.customCacheKey = "".concat(n, "_").concat(i));
      }
      function w(e, t, n) {
        !(function (e) {
          for (var t = 0; t < e.length; t++) E.removeBid(e[t]);
        })(t),
          (0, c.h)(t, function (r, o) {
            if (r) {
              (0, i.logWarn)(
                "Failed to save to the video cache: ".concat(
                  r,
                  ". Video bid(s) must be discarded."
                )
              );
              for (var d = 0; d < t.length; d++) (0, a.sq)(e, t[d]);
            } else for (var u = 0; u < o.length; u++) "" !== o[u].uuid ? (0, a.lU)(e, t[u]) : (0, i.logInfo)("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(t[u].customCacheKey, ". Bid was: "), t[u]), n();
          });
      }
      function D(e, t) {
        (0, c.h)(e, function (n, i) {
          if (n) t(n, null);
          else {
            for (var r = [], a = 0; a < i.length; a++)
              "" !== i[a] && r.push(e[a]);
            t(null, r);
          }
        });
      }
      function U(e, t) {
        return e.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] /
          e.video.durationBucket <
          t.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] /
            t.video.durationBucket
          ? 1
          : e.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] /
              e.video.durationBucket >
            t.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] /
              t.video.durationBucket
          ? -1
          : 0;
      }
      function A(e) {
        return v.K.getAdUnits()
          .filter(function (e) {
            return (0, r.Z)(e, "mediaTypes.video.context") === s.Oh;
          })
          .filter(function (t) {
            return !(e.length > 0) || -1 != e.indexOf(t.code);
          });
      }
      function B(e) {
        var t = e.map(function (e) {
          return h({}, e, p({}, T, e.adserverTargeting.hb_pb_cat_dur));
        });
        t = (0, i.groupBy)(t, T);
        var n = [];
        return (
          Object.keys(t).forEach(function (e) {
            t[e].sort((0, i.compareOn)("responseTimestamp")), n.push(t[e][0]);
          }),
          n
        );
      }
      function O(e, t) {
        var n = t.map(function (e) {
          return e.code;
        });
        return e.filter(function (e) {
          return (
            -1 != n.indexOf(e.adUnitCode) && e.video && e.video.context === s.Oh
          );
        });
      }
      l.vc.getConfig("adpod", function (e) {
        return (function (e) {
          void 0 !== e.bidQueueTimeDelay &&
            ("number" == typeof e.bidQueueTimeDelay && e.bidQueueTimeDelay > 0
              ? (S = e.bidQueueTimeDelay)
              : (0, i.logWarn)(
                  "Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(
                    S
                  )
                )),
            void 0 !== e.bidQueueSizeLimit &&
              ("number" == typeof e.bidQueueSizeLimit && e.bidQueueSizeLimit > 0
                ? (_ = e.bidQueueSizeLimit)
                : (0, i.logWarn)(
                    "Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(
                      _
                    )
                  ));
        })(e.adpod);
      }),
        (0, u.o0)(a.D$, function (e, t, n, o, d) {
          if (d && d.context === s.Oh) {
            var u = l.vc.getConfig("adpod.brandCategoryExclusion");
            !(0, r.Z)(n, "meta.adServerCatId") && u
              ? ((0, i.logWarn)(
                  "Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:",
                  n
                ),
                o())
              : !1 === l.vc.getConfig("adpod.deferCaching")
              ? (E.addBid(n),
                I(n, u),
                (function (e, t, n) {
                  var r = E.getBids(t);
                  if (r) {
                    var o = (0, f.Oc)(r),
                      d = E.getQueueDispatcher(t),
                      u = !(e.getAuctionStatus() === a.Yw);
                    d(e, o, n, u);
                  } else
                    (0, i.logWarn)(
                      "Attempted to cache a bid from an unknown auction. Bid:",
                      t
                    );
                })(t, n, o))
              : (E.setupInitialCacheKey(n), I(n, u), (0, a.lU)(t, n), o());
          } else e.call(this, t, n, o, d);
        }),
        (0, u.o0)(o.O5, function (e, t) {
          var n = t.filter(function (e) {
            var t = (0, r.Z)(e, "mediaTypes"),
              n = (0, r.Z)(t, "video");
            if (n && n.context === s.Oh) {
              if (Object.keys(t).length > 1)
                return (
                  (0, i.logWarn)(
                    "Detected more than one mediaType in adUnitCode: ".concat(
                      e.code,
                      " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction."
                    )
                  ),
                  !1
                );
              var a =
                  "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(
                    e.code,
                    ".  This adUnit will be removed from the auction."
                  ),
                o = !!(
                  (n.playerSize &&
                    ((0, i.isArrayOfNums)(n.playerSize, 2) ||
                      ((0, i.isArray)(n.playerSize) &&
                        n.playerSize.every(function (e) {
                          return (0, i.isArrayOfNums)(e, 2);
                        })))) ||
                  n.sizeConfig
                ),
                d = !!(
                  n.adPodDurationSec &&
                  (0, i.isNumber)(n.adPodDurationSec) &&
                  n.adPodDurationSec > 0
                ),
                u = !!(
                  n.durationRangeSec &&
                  (0, i.isArrayOfNums)(n.durationRangeSec) &&
                  n.durationRangeSec.every(function (e) {
                    return e > 0;
                  })
                );
              if (!o || !d || !u)
                return (
                  (a += o ? "" : "\nmediaTypes.video.playerSize"),
                  (a += d ? "" : "\nmediaTypes.video.adPodDurationSec"),
                  (a += u ? "" : "\nmediaTypes.video.durationRangeSec"),
                  (0, i.logWarn)(a),
                  !1
                );
            }
            return !0;
          });
          (t = n), e.call(this, t);
        }),
        (0, u.o0)(d.hD, function (e, t, n, a, o) {
          if (o === s.Oh) {
            var d = !0;
            if (
              (l.vc.getConfig("adpod.brandCategoryExclusion") &&
                !(0, r.Z)(t, "meta.primaryCatId") &&
                (d = !1),
              (0, r.Z)(t, "video"))
            )
              if (
                (((0, r.Z)(t, "video.context") && t.video.context === s.Oh) ||
                  (d = !1),
                !(0, r.Z)(t, "video.durationSeconds") ||
                  t.video.durationSeconds <= 0)
              )
                d = !1;
              else {
                var u = (function (e, t) {
                  var n,
                    a = (0, r.Z)(t, "video.durationSeconds"),
                    o = e.durationRangeSec;
                  if (
                    (o.sort(function (e, t) {
                      return e - t;
                    }),
                    e.requireExactDuration)
                  ) {
                    if (
                      !(0, f.sE)(o, function (e) {
                        return e === a;
                      })
                    )
                      return (
                        (0, i.logWarn)(
                          "Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ",
                          t
                        ),
                        !1
                      );
                    t.video.durationBucket = a;
                  } else {
                    var d = Math.max.apply(
                      Math,
                      (function (e) {
                        if (Array.isArray(e)) return y(e);
                      })((n = o)) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(n) ||
                        m(n) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                    );
                    if (!(a <= d + 2))
                      return (
                        (0, i.logWarn)(
                          "Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ",
                          t
                        ),
                        !1
                      );
                    var u = (0, f.sE)(o, function (e) {
                      return e + 2 >= a;
                    });
                    t.video.durationBucket = u;
                  }
                  return !0;
                })(a, t);
                u || (d = !1);
              }
            l.vc.getConfig("cache.url") ||
              !t.vastXml ||
              t.vastUrl ||
              ((0, i.logError)(
                '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
              ),
              (d = !1)),
              e.bail(d);
          } else e.call(this, t, n, a, o);
        });
      var k = {
        TARGETING_KEY_PB_CAT_DUR: T,
        TARGETING_KEY_CACHE_ID: C,
        getTargeting: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.codes,
            n = e.callback;
          if (n) {
            var a = A((t = t || [])),
              o = v.K.getBidsReceived(),
              d = l.vc.getConfig("adpod.brandCategoryExclusion"),
              u = l.vc.getConfig("adpod.deferCaching"),
              c = "boolean" != typeof u || u,
              s = O(o, a);
            s = d || c ? B(s) : s;
            var f = l.vc.getConfig("adpod.prioritizeDeals");
            if (f) {
              var g = s.reduce(
                  function (e, t) {
                    var n = (0, r.Z)(t, "video.dealTier"),
                      i = l.vc.getConfig(
                        "adpod.dealTier.".concat(t.bidderCode, ".minDealTier")
                      );
                    return (
                      i && n
                        ? n >= i
                          ? e[1].push(t)
                          : e[0].push(t)
                        : n
                        ? e[1].push(t)
                        : e[0].push(t),
                      e
                    );
                  },
                  [[], []]
                ),
                h = b(g, 2),
                m = h[0],
                y = h[1];
              y.sort(U), m.sort(U), (s = y.concat(m));
            } else s.sort(U);
            var S = {};
            if (!1 === c)
              a.forEach(function (e) {
                var t = [],
                  n = (0, r.Z)(e, "mediaTypes.video.adPodDurationSec");
                s
                  .filter(function (t) {
                    return t.adUnitCode === e.code;
                  })
                  .forEach(function (e, i, r) {
                    e.video.durationBucket <= n &&
                      (t.push(p({}, T, e.adserverTargeting.hb_pb_cat_dur)),
                      (n -= e.video.durationBucket)),
                      i === r.length - 1 &&
                        t.length > 0 &&
                        t.push(p({}, C, e.adserverTargeting.hb_cache_id));
                  }),
                  (S[e.code] = t);
              }),
                n(null, S);
            else {
              var _ = [];
              a.forEach(function (e) {
                var t = (0, r.Z)(e, "mediaTypes.video.adPodDurationSec");
                s.filter(function (t) {
                  return t.adUnitCode === e.code;
                }).forEach(function (e) {
                  e.video.durationBucket <= t &&
                    (_.push(e), (t -= e.video.durationBucket));
                });
              }),
                D(_, function (e, t) {
                  if (e) n(e, null);
                  else {
                    var r = (0, i.groupBy)(t, "adUnitCode");
                    Object.keys(r).forEach(function (e) {
                      var t = [];
                      r[e].forEach(function (e, n, i) {
                        t.push(p({}, T, e.adserverTargeting.hb_pb_cat_dur)),
                          n === i.length - 1 &&
                            t.length > 0 &&
                            t.push(p({}, C, e.adserverTargeting.hb_cache_id));
                      }),
                        (S[e] = t);
                    }),
                      n(null, S);
                  }
                });
            }
            return S;
          }
          (0, i.logError)(
            "No callback function was defined in the getTargeting call.  Aborting getTargeting()."
          );
        },
      };
      Object.freeze(k),
        (0, u.bA)("adpod", function () {
          function e(e, t) {
            for (var n in t) e[n] = t[n];
          }
          (0, i.isPlainObject)(arguments.length <= 0 ? void 0 : arguments[0])
            ? e(arguments.length <= 0 ? void 0 : arguments[0], k)
            : (0, i.logError)(
                "Adpod module needs plain object to share methods with submodule"
              );
        }),
        window.ihowpbjs.installedModules.push("adpod");
    },
  },
  function (e) {
    e((e.s = 649));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [864],
  {
    231: function (e, r, a) {
      var t = a(853),
        n = a(265),
        i = a(877),
        s = a(962),
        o = a(125),
        d = a(3),
        p = a(766),
        u = a(879),
        c = a(929),
        l = a(849),
        m = a(624);
      function f(e) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          f(e)
        );
      }
      function v() {
        return (
          (v =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var a = arguments[r];
                for (var t in a)
                  Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              }
              return e;
            }),
          v.apply(this, arguments)
        );
      }
      function g(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return y(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, r) {
            if (e) {
              if ("string" == typeof e) return y(e, r);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? y(e, r)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
        return t;
      }
      var b = "appnexus",
        h = [
          "id",
          "minduration",
          "maxduration",
          "skippable",
          "playback_method",
          "frameworks",
          "context",
          "skipoffset",
        ],
        _ = [
          "minduration",
          "maxduration",
          "skip",
          "skipafter",
          "playbackmethod",
          "api",
        ],
        k = ["age", "externalUid", "segments", "gender", "dnt", "language"],
        I = ["geo", "device_id"],
        w = ["enabled", "dongle", "member_id", "debug_timeout"],
        C = {
          playback_method: {
            unknown: 0,
            auto_play_sound_on: 1,
            auto_play_sound_off: 2,
            click_to_play: 3,
            mouse_over: 4,
            auto_play_sound_unknown: 5,
          },
          context: {
            unknown: 0,
            pre_roll: 1,
            mid_roll: 2,
            post_roll: 3,
            outstream: 4,
            "in-banner": 5,
          },
        },
        x = {
          body: "description",
          body2: "desc2",
          cta: "ctatext",
          image: { serverName: "main_image", requiredParams: { required: !0 } },
          icon: { serverName: "icon", requiredParams: { required: !0 } },
          sponsoredBy: "sponsored_by",
          privacyLink: "privacy_link",
          salePrice: "saleprice",
          displayUrl: "displayurl",
        },
        E = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
        A = (0, l.df)({ gvlid: 32, bidderCode: b }),
        S = {
          code: b,
          gvlid: 32,
          aliases: [
            { code: "appnexusAst", gvlid: 32 },
            { code: "brealtime" },
            { code: "emxdigital", gvlid: 183 },
            { code: "pagescience" },
            { code: "defymedia" },
            { code: "gourmetads" },
            { code: "matomy" },
            { code: "featureforward" },
            { code: "oftmedia" },
            { code: "districtm", gvlid: 144 },
            { code: "adasta" },
            { code: "beintoo", gvlid: 618 },
            { code: "dg" },
            { code: "gps" },
            { code: "appnexus2" },
          ],
          supportedMediaTypes: [d.Mk, d.pX, d.B5],
          isBidRequestValid: function (e) {
            return !!(
              e.params.placementId ||
              (e.params.member && e.params.invCode)
            );
          },
          buildRequests: function (e, r) {
            var a = e.map(j),
              i = (0, u.sE)(e, q),
              o = {};
            !0 === s.vc.getConfig("coppa") && (o = { coppa: !0 }),
              i &&
                Object.keys(i.params.user)
                  .filter(function (e) {
                    return (0, u.q9)(k, e);
                  })
                  .forEach(function (e) {
                    var r = (0, t.convertCamelToUnderscore)(e);
                    if ("segments" === e && (0, t.isArray)(i.params.user[e])) {
                      var a = [];
                      i.params.user[e].forEach(function (e) {
                        (0, t.isNumber)(e)
                          ? a.push({ id: e })
                          : (0, t.isPlainObject)(e) && a.push(e);
                      }),
                        (o[r] = a);
                    } else "segments" !== e && (o[r] = i.params.user[e]);
                  });
            var d,
              p = (0, u.sE)(e, N);
            p &&
              p.params &&
              p.params.app &&
              ((d = {}),
              Object.keys(p.params.app)
                .filter(function (e) {
                  return (0, u.q9)(I, e);
                })
                .forEach(function (e) {
                  return (d[e] = p.params.app[e]);
                }));
            var c,
              l = (0, u.sE)(e, M);
            l &&
              l.params &&
              p.params.app &&
              p.params.app.id &&
              (c = { appid: l.params.app.id });
            var m = {},
              f = {},
              v = A.getCookie("apn_prebid_debug") || null;
            if (v)
              try {
                m = JSON.parse(v);
              } catch (e) {
                (0, t.logError)("AppNexus Debug Auction Cookie Error:\n\n" + e);
              }
            else {
              var y = (0, u.sE)(e, z);
              y && y.debug && (m = y.debug);
            }
            m &&
              m.enabled &&
              Object.keys(m)
                .filter(function (e) {
                  return (0, u.q9)(w, e);
                })
                .forEach(function (e) {
                  f[e] = m[e];
                });
            var b = (0, u.sE)(e, B),
              h = b ? parseInt(b.params.member, 10) : 0,
              _ = e[0].schain,
              C = (0, u.sE)(e, Z),
              x = {
                tags: g(a),
                user: o,
                sdk: { source: "pbjs", version: "6.18.0" },
                schain: _,
              };
            C && (x.iab_support = { omidpn: "Appnexus", omidpv: "6.18.0" }),
              h > 0 && (x.member_id = h),
              p && (x.device = d),
              l && (x.app = c);
            var E = s.vc.getConfig("appnexusAuctionKeywords");
            if ((0, t.isPlainObject)(E)) {
              var S = (0, t.transformBidderParamKeywords)(E);
              S.length > 0 && S.forEach(O), (x.keywords = S);
            }
            if (
              (s.vc.getConfig("adpod.brandCategoryExclusion") &&
                (x.brand_category_uniqueness = !0),
              f.enabled &&
                ((x.debug = f),
                (0, t.logInfo)(
                  "AppNexus Debug Auction Settings:\n\n" +
                    JSON.stringify(f, null, 4)
                )),
              r &&
                r.gdprConsent &&
                ((x.gdpr_consent = {
                  consent_string: r.gdprConsent.consentString,
                  consent_required: r.gdprConsent.gdprApplies,
                }),
                r.gdprConsent.addtlConsent &&
                  -1 !== r.gdprConsent.addtlConsent.indexOf("~")))
            ) {
              var T = r.gdprConsent.addtlConsent,
                P = T.substring(T.indexOf("~") + 1);
              x.gdpr_consent.addtl_consent = P.split(".").map(function (e) {
                return parseInt(e, 10);
              });
            }
            if (
              (r && r.uspConsent && (x.us_privacy = r.uspConsent),
              r && r.refererInfo)
            ) {
              var U = {
                rd_ref: encodeURIComponent(r.refererInfo.referer),
                rd_top: r.refererInfo.reachedTop,
                rd_ifs: r.refererInfo.numIframes,
                rd_stk: r.refererInfo.stack
                  .map(function (e) {
                    return encodeURIComponent(e);
                  })
                  .join(","),
              };
              x.referrer_detection = U;
            }
            if (
              ((0, u.sE)(e, D) &&
                e.filter(D).forEach(function (e) {
                  var r = (function (e, r) {
                      var a = r.mediaTypes.video,
                        n = a.durationRangeSec,
                        i = a.requireExactDuration,
                        s = (function (e) {
                          var r = e.adPodDurationSec,
                            a = e.durationRangeSec,
                            n = e.requireExactDuration,
                            i = (0, t.getMinValueFromArray)(a),
                            s = Math.floor(r / i);
                          return n ? Math.max(s, a.length) : s;
                        })(r.mediaTypes.video),
                        o = (0, t.getMaxValueFromArray)(n),
                        d = e.filter(function (e) {
                          return e.uuid === r.bidId;
                        }),
                        p = t.fill.apply(void 0, g(d).concat([s]));
                      if (i) {
                        var u = Math.ceil(s / n.length),
                          c = (0, t.chunk)(p, u);
                        n.forEach(function (e, r) {
                          c[r].map(function (r) {
                            X(r, "minduration", e), X(r, "maxduration", e);
                          });
                        });
                      } else
                        p.map(function (e) {
                          return X(e, "maxduration", o);
                        });
                      return p;
                    })(a, e),
                    n = x.tags.filter(function (r) {
                      return r.uuid !== e.bidId;
                    });
                  x.tags = [].concat(g(n), g(r));
                }),
              e[0].userId)
            ) {
              var F = [];
              K(F, (0, n.Z)(e[0], "userId.flocId.id"), "chrome.com", null),
                K(F, (0, n.Z)(e[0], "userId.criteoId"), "criteo.com", null),
                K(F, (0, n.Z)(e[0], "userId.netId"), "netid.de", null),
                K(F, (0, n.Z)(e[0], "userId.idl_env"), "liveramp.com", null),
                K(F, (0, n.Z)(e[0], "userId.tdid"), "adserver.org", "TDID"),
                K(F, (0, n.Z)(e[0], "userId.uid2.id"), "uidapi.com", "UID2"),
                e[0].userId.pubProvidedId &&
                  e[0].userId.pubProvidedId.forEach(function (e) {
                    e.uids.forEach(function (r) {
                      F.push({ source: e.source, id: r.id });
                    });
                  }),
                F.length && (x.eids = F);
            }
            a[0].publisher_id && (x.publisher_id = a[0].publisher_id);
            var V = (function (e, r) {
              var a = [],
                n = { withCredentials: !0 },
                i = "https://ib.adnxs.com/ut/v3/prebid";
              if (
                (R(r) || (i = "https://ib.adnxs-simple.com/ut/v3/prebid"),
                ("TRUE" !==
                  (0, t.getParameterByName)("apn_test").toUpperCase() &&
                  !0 !== s.vc.getConfig("apn_test")) ||
                  (n.customHeaders = { "X-Is-Test": 1 }),
                e.tags.length > 15)
              ) {
                var o = (0, t.deepClone)(e);
                (0, t.chunk)(e.tags, 15).forEach(function (e) {
                  o.tags = e;
                  var t = JSON.stringify(o);
                  a.push({
                    method: "POST",
                    url: i,
                    data: t,
                    bidderRequest: r,
                    options: n,
                  });
                });
              } else {
                var d = JSON.stringify(e);
                a = {
                  method: "POST",
                  url: i,
                  data: d,
                  bidderRequest: r,
                  options: n,
                };
              }
              return a;
            })(x, r);
            return V;
          },
          interpretResponse: function (e, r) {
            var a = this,
              s = r.bidderRequest;
            e = e.body;
            var p = [];
            if (!e || e.error) {
              var l = "in response for ".concat(s.bidderCode, " adapter");
              return (
                e && e.error && (l += ": ".concat(e.error)),
                (0, t.logError)(l),
                p
              );
            }
            if (
              (e.tags &&
                e.tags.forEach(function (e) {
                  var r,
                    l =
                      (r = e) &&
                      r.ads &&
                      r.ads.length &&
                      (0, u.sE)(r.ads, function (e) {
                        return e.rtb;
                      });
                  if (
                    l &&
                    (!0 === m.S.get(s.bidderCode, "allowZeroCpmBids")
                      ? l.cpm >= 0
                      : l.cpm > 0) &&
                    (0, u.q9)(a.supportedMediaTypes, l.ad_type)
                  ) {
                    var f = (function (e, r, a) {
                      var s = (0, t.getBidRequest)(e.uuid, [a]),
                        p = {
                          requestId: e.uuid,
                          cpm: r.cpm,
                          creativeId: r.creative_id,
                          dealId: r.deal_id,
                          currency: "USD",
                          netRevenue: !0,
                          ttl: 300,
                          adUnitCode: s.adUnitCode,
                          appnexus: {
                            buyerMemberId: r.buyer_member_id,
                            dealPriority: r.deal_priority,
                            dealCode: r.deal_code,
                          },
                        };
                      if (
                        (r.adomain &&
                          (p.meta = v({}, p.meta, { advertiserDomains: [] })),
                        r.advertiser_id &&
                          (p.meta = v({}, p.meta, {
                            advertiserId: r.advertiser_id,
                          })),
                        r.buyer_member_id &&
                          (p.meta = v({}, p.meta, {
                            dchain: (function (e) {
                              return {
                                ver: "1.0",
                                complete: 0,
                                nodes: [{ bsid: e.buyer_member_id.toString() }],
                              };
                            })(r),
                          })),
                        r.brand_id &&
                          (p.meta = v({}, p.meta, { brandId: r.brand_id })),
                        r.rtb.video)
                      )
                        switch (
                          (v(p, {
                            width: r.rtb.video.player_width,
                            height: r.rtb.video.player_height,
                            vastImpUrl: r.notify_url,
                            ttl: 3600,
                          }),
                          (0, n.Z)(s, "mediaTypes.video.context"))
                        ) {
                          case d.Oh:
                            var l = (0, o.Q1)(s.bidder, r.brand_category_id);
                            p.meta = v({}, p.meta, { primaryCatId: l });
                            var m = r.deal_priority;
                            (p.video = {
                              context: d.Oh,
                              durationSeconds: Math.floor(
                                r.rtb.video.duration_ms / 1e3
                              ),
                              dealTier: m,
                            }),
                              (p.vastUrl = r.rtb.video.asset_url);
                            break;
                          case c.gZ:
                            if (
                              ((p.adResponse = e),
                              (p.adResponse.ad = p.adResponse.ads[0]),
                              (p.adResponse.ad.video =
                                p.adResponse.ad.rtb.video),
                              (p.vastXml = r.rtb.video.content),
                              r.renderer_url)
                            ) {
                              var f = (0, u.sE)(a.bids, function (r) {
                                  return r.bidId === e.uuid;
                                }),
                                g = (0, n.Z)(f, "renderer.options");
                              p.renderer = (function (e, r) {
                                var a =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                      ? arguments[2]
                                      : {},
                                  n = i.Th.install({
                                    id: r.renderer_id,
                                    url: r.renderer_url,
                                    config: a,
                                    loaded: !1,
                                    adUnitCode: e,
                                  });
                                try {
                                  n.setRender(F);
                                } catch (e) {
                                  (0, t.logWarn)(
                                    "Prebid Error calling setRender on renderer",
                                    e
                                  );
                                }
                                return (
                                  n.setEventHandlers({
                                    impression: function () {
                                      return (0, t.logMessage)(
                                        "AppNexus outstream video impression event"
                                      );
                                    },
                                    loaded: function () {
                                      return (0, t.logMessage)(
                                        "AppNexus outstream video loaded event"
                                      );
                                    },
                                    ended: function () {
                                      (0, t.logMessage)(
                                        "AppNexus outstream renderer video event"
                                      ),
                                        (document.querySelector(
                                          "#".concat(e)
                                        ).style.display = "none");
                                    },
                                  }),
                                  n
                                );
                              })(p.adUnitCode, r, g);
                            }
                            break;
                          case c.LD:
                            p.vastUrl =
                              r.notify_url +
                              "&redir=" +
                              encodeURIComponent(r.rtb.video.asset_url);
                        }
                      else if (r.rtb[d.B5]) {
                        var y = r.rtb[d.B5],
                          b = r.viewability.config.replace("src=", "data-src="),
                          h = y.javascript_trackers;
                        null == h
                          ? (h = b)
                          : (0, t.isStr)(h)
                          ? (h = [h, b])
                          : h.push(b),
                          (p[d.B5] = {
                            title: y.title,
                            body: y.desc,
                            body2: y.desc2,
                            cta: y.ctatext,
                            rating: y.rating,
                            sponsoredBy: y.sponsored,
                            privacyLink: y.privacy_link,
                            address: y.address,
                            downloads: y.downloads,
                            likes: y.likes,
                            phone: y.phone,
                            price: y.price,
                            salePrice: y.saleprice,
                            clickUrl: y.link.url,
                            displayUrl: y.displayurl,
                            clickTrackers: y.link.click_trackers,
                            impressionTrackers: y.impression_trackers,
                            javascriptTrackers: h,
                          }),
                          y.main_img &&
                            (p.native.image = {
                              url: y.main_img.url,
                              height: y.main_img.height,
                              width: y.main_img.width,
                            }),
                          y.icon &&
                            (p.native.icon = {
                              url: y.icon.url,
                              height: y.icon.height,
                              width: y.icon.width,
                            });
                      } else {
                        v(p, {
                          width: r.rtb.banner.width,
                          height: r.rtb.banner.height,
                          ad: r.rtb.banner.content,
                        });
                        try {
                          if (r.rtb.trackers)
                            for (
                              var _ = 0;
                              _ < r.rtb.trackers[0].impression_urls.length;
                              _++
                            ) {
                              var k = r.rtb.trackers[0].impression_urls[_],
                                I = (0, t.createTrackPixelHtml)(k);
                              p.ad += I;
                            }
                        } catch (e) {
                          (0, t.logError)("Error appending tracking pixel", e);
                        }
                      }
                      return p;
                    })(e, l, s);
                    (f.mediaType = (function (e) {
                      var r = e.ad_type;
                      return r === d.pX ? d.pX : r === d.B5 ? d.B5 : d.Mk;
                    })(l)),
                      p.push(f);
                  }
                }),
              e.debug && e.debug.debug_info)
            ) {
              var f =
                "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
              (f = f
                .replace(/(<td>|<th>)/gm, "\t")
                .replace(/(<\/td>|<\/th>)/gm, "\n")
                .replace(/^<br>/gm, "")
                .replace(/(<br>\n|<br>)/gm, "\n")
                .replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n")
                .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n")
                .replace(/(<([^>]+)>)/gim, "")),
                (0, t.logMessage)(
                  "https://console.appnexus.com/docs/understanding-the-debug-auction"
                ),
                (0, t.logMessage)(f);
            }
            return p;
          },
          getMappingFileInfo: function () {
            return {
              url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",
              refreshInDays: 2,
            };
          },
          getUserSyncs: function (e, r, a) {
            if (e.iframeEnabled && R({ gdprConsent: a }))
              return [
                {
                  type: "iframe",
                  url: "https://acdn.adnxs.com/dmp/async_usersync.html",
                },
              ];
          },
          transformBidParams: function (e, r) {
            var a = t.transformBidderParamKeywords;
            if (!0 === r) {
              var i = s.vc.getConfig("s2sConfig"),
                o = (0, n.Z)(i, "endpoint.p1Consent");
              o && o.match("/openrtb2/prebid") && (a = J);
            }
            return (
              (e = (0, t.convertTypes)(
                {
                  member: "string",
                  invCode: "string",
                  placementId: "number",
                  keywords: a,
                  publisherId: "number",
                },
                e
              )),
              r &&
                ((e.use_pmt_rule =
                  "boolean" == typeof e.usePaymentRule && e.usePaymentRule),
                e.usePaymentRule && delete e.usePaymentRule,
                T(e.keywords) && e.keywords.forEach(O),
                Object.keys(e).forEach(function (r) {
                  var a = (0, t.convertCamelToUnderscore)(r);
                  a !== r && ((e[a] = e[r]), delete e[r]);
                })),
              e
            );
          },
          onBidWon: function (e) {
            e.native &&
              (function (e) {
                var r = (function (e) {
                  var r;
                  if ((0, t.isStr)(e) && P(e)) r = e;
                  else if ((0, t.isArray)(e))
                    for (var a = 0; a < e.length; a++) {
                      var n = e[a];
                      P(n) && (r = n);
                    }
                  return r;
                })(e.native.javascriptTrackers);
                if (r)
                  for (
                    var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode,
                      n = (function (e) {
                        var r = e.indexOf('src="') + 5,
                          a = e.indexOf('"', r);
                        return e.substring(r, a);
                      })(r),
                      i = n.replace("dom_id=%native_dom_id%", a),
                      s = document.getElementsByTagName("iframe"),
                      o = !1,
                      d = 0;
                    d < s.length && !o;
                    d++
                  ) {
                    var p = s[d];
                    try {
                      var u = p.contentDocument || p.contentWindow.document;
                      if (u)
                        for (
                          var c = u.getElementsByTagName("script"), l = 0;
                          l < c.length && !o;
                          l++
                        ) {
                          var m = c[l];
                          m.getAttribute("data-src") == n &&
                            (m.setAttribute("src", i),
                            m.setAttribute("data-src", ""),
                            m.removeAttribute && m.removeAttribute("data-src"),
                            (o = !0));
                        }
                    } catch (e) {
                      if (
                        !(
                          e instanceof DOMException &&
                          "SecurityError" === e.name
                        )
                      )
                        throw e;
                    }
                  }
              })(e);
          },
        };
      function T(e) {
        return !!((0, t.isArray)(e) && e.length > 0);
      }
      function O(e) {
        T(e.value) && "" === e.value[0] && delete e.value;
      }
      function P(e) {
        var r = e.match(E),
          a = null != r && r.length >= 1,
          t = e.match("trk.js"),
          n = null != t && t.length >= 1;
        return e.startsWith("<script") && n && a;
      }
      function R(e) {
        var r = !0;
        return (
          e &&
            e.gdprConsent &&
            e.gdprConsent.gdprApplies &&
            2 === e.gdprConsent.apiVersion &&
            (r = !(
              !0 !== (0, n.Z)(e.gdprConsent, "vendorData.purpose.consents.1")
            )),
          r
        );
      }
      function j(e) {
        var r = {};
        (r.sizes = U(e.sizes)),
          (r.primary_size = r.sizes[0]),
          (r.ad_types = []),
          (r.uuid = e.bidId),
          e.params.placementId
            ? (r.id = parseInt(e.params.placementId, 10))
            : (r.code = e.params.invCode),
          (r.allow_smaller_sizes = e.params.allowSmallerSizes || !1),
          (r.use_pmt_rule = e.params.usePaymentRule || !1),
          (r.prebid = !0),
          (r.disable_psa = !0);
        var a = (function (e) {
          if (!(0, t.isFn)(e.getFloor))
            return e.params.reserve ? e.params.reserve : null;
          var r = e.getFloor({ currency: "USD", mediaType: "*", size: "*" });
          return (0, t.isPlainObject)(r) &&
            !isNaN(r.floor) &&
            "USD" === r.currency
            ? r.floor
            : null;
        })(e);
        if (
          (a && (r.reserve = a),
          e.params.position &&
            (r.position = { above: 1, below: 2 }[e.params.position] || 0),
          e.params.trafficSourceCode &&
            (r.traffic_source_code = e.params.trafficSourceCode),
          e.params.privateSizes && (r.private_sizes = U(e.params.privateSizes)),
          e.params.supplyType && (r.supply_type = e.params.supplyType),
          e.params.pubClick && (r.pubclick = e.params.pubClick),
          e.params.extInvCode && (r.ext_inv_code = e.params.extInvCode),
          e.params.publisherId &&
            (r.publisher_id = parseInt(e.params.publisherId, 10)),
          e.params.externalImpId &&
            (r.external_imp_id = e.params.externalImpId),
          !(0, t.isEmpty)(e.params.keywords))
        ) {
          var i = (0, t.transformBidderParamKeywords)(e.params.keywords);
          i.length > 0 && i.forEach(O), (r.keywords = i);
        }
        var s,
          o,
          c = (0, n.Z)(e, "ortb2Imp.ext.data.pbadslot");
        if (
          (c && (r.gpid = c),
          (e.mediaType === d.B5 || (0, n.Z)(e, "mediaTypes.".concat(d.B5))) &&
            (r.ad_types.push(d.B5),
            0 === r.sizes.length && (r.sizes = U([1, 1])),
            e.nativeParams))
        ) {
          var l =
            ((s = e.nativeParams),
            (o = {}),
            Object.keys(s).forEach(function (e) {
              var r = (x[e] && x[e].serverName) || x[e] || e,
                a = x[e] && x[e].requiredParams;
              if (
                ((o[r] = v({}, a, s[e])),
                (r === x.image.serverName || r === x.icon.serverName) &&
                  o[r].sizes)
              ) {
                var n = o[r].sizes;
                ((0, t.isArrayOfNums)(n) ||
                  ((0, t.isArray)(n) &&
                    n.length > 0 &&
                    n.every(function (e) {
                      return (0, t.isArrayOfNums)(e);
                    }))) &&
                  (o[r].sizes = U(o[r].sizes));
              }
              r === x.privacyLink && (o.privacy_supported = !0);
            }),
            o);
          r[d.B5] = { layouts: [l] };
        }
        var m = (0, n.Z)(e, "mediaTypes.".concat(d.pX)),
          f = (0, n.Z)(e, "mediaTypes.video.context");
        (r.hb_source = m && "adpod" === f ? 7 : 1),
          (e.mediaType === d.pX || m) && r.ad_types.push(d.pX),
          (e.mediaType === d.pX || (m && "outstream" !== f)) &&
            (r.require_asset_url = !0),
          e.params.video &&
            ((r.video = {}),
            Object.keys(e.params.video)
              .filter(function (e) {
                return (0, u.q9)(h, e);
              })
              .forEach(function (a) {
                switch (a) {
                  case "context":
                  case "playback_method":
                    var n = e.params.video[a];
                    (n = (0, t.isArray)(n) ? n[0] : n), (r.video[a] = C[a][n]);
                    break;
                  case "frameworks":
                    break;
                  default:
                    r.video[a] = e.params.video[a];
                }
              }),
            e.params.video.frameworks &&
              (0, t.isArray)(e.params.video.frameworks) &&
              (r.video_frameworks = e.params.video.frameworks)),
          m &&
            ((r.video = r.video || {}),
            Object.keys(m)
              .filter(function (e) {
                return (0, u.q9)(_, e);
              })
              .forEach(function (e) {
                switch (e) {
                  case "minduration":
                  case "maxduration":
                    "number" != typeof r.video[e] && (r.video[e] = m[e]);
                    break;
                  case "skip":
                    "boolean" != typeof r.video.skippable &&
                      (r.video.skippable = 1 === m[e]);
                    break;
                  case "skipafter":
                    "number" != typeof r.video.skipoffset &&
                      (r.video.skippoffset = m[e]);
                    break;
                  case "playbackmethod":
                    if ("number" != typeof r.video.playback_method) {
                      var a = m[e];
                      (a = (0, t.isArray)(a) ? a[0] : a) >= 1 &&
                        a <= 4 &&
                        (r.video.playback_method = a);
                    }
                    break;
                  case "api":
                    if (!r.video_frameworks && (0, t.isArray)(m[e])) {
                      var n = m[e]
                        .map(function (e) {
                          var r = 4 === e ? 5 : 5 === e ? 4 : e;
                          if (r >= 1 && r <= 5) return r;
                        })
                        .filter(function (e) {
                          return e;
                        });
                      r.video_frameworks = n;
                    }
                }
              })),
          e.renderer &&
            (r.video = v({}, r.video, { custom_renderer_present: !0 })),
          e.params.frameworks &&
            (0, t.isArray)(e.params.frameworks) &&
            (r.banner_frameworks = e.params.frameworks);
        var g = (0, u.sE)(p.K.getAdUnits(), function (r) {
          return e.transactionId === r.transactionId;
        });
        return (
          g && g.mediaTypes && g.mediaTypes.banner && r.ad_types.push(d.Mk),
          0 === r.ad_types.length && delete r.ad_types,
          r
        );
      }
      function U(e) {
        var r = [],
          a = {};
        if ((0, t.isArray)(e) && 2 === e.length && !(0, t.isArray)(e[0]))
          (a.width = parseInt(e[0], 10)),
            (a.height = parseInt(e[1], 10)),
            r.push(a);
        else if ("object" === f(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            ((a = {}).width = parseInt(i[0], 10)),
              (a.height = parseInt(i[1], 10)),
              r.push(a);
          }
        return r;
      }
      function q(e) {
        return !!e.params.user;
      }
      function B(e) {
        return !!parseInt(e.params.member, 10);
      }
      function N(e) {
        if (e.params) return !!e.params.app;
      }
      function M(e) {
        return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
      }
      function z(e) {
        return !!e.debug;
      }
      function D(e) {
        return (
          e.mediaTypes &&
          e.mediaTypes.video &&
          e.mediaTypes.video.context === d.Oh
        );
      }
      function Z(e) {
        var r = !1,
          a = e.params,
          n = e.params.video;
        return (
          a.frameworks &&
            (0, t.isArray)(a.frameworks) &&
            (r = (0, u.q9)(e.params.frameworks, 6)),
          !r &&
            n &&
            n.frameworks &&
            (0, t.isArray)(n.frameworks) &&
            (r = (0, u.q9)(e.params.video.frameworks, 6)),
          r
        );
      }
      function X(e, r, a) {
        (0, t.isEmpty)(e.video) && (e.video = {}), (e.video[r] = a);
      }
      function F(e) {
        var r, a;
        (r = e.adUnitCode),
          (a = document
            .getElementById(r)
            .querySelectorAll("div[id^='google_ads']"))[0] &&
            a[0].style.setProperty("display", "none"),
          (function (e) {
            try {
              var r = document
                .getElementById(e)
                .querySelectorAll("script[id^='sas_script']");
              r[0].nextSibling &&
                "iframe" === r[0].nextSibling.localName &&
                r[0].nextSibling.style.setProperty("display", "none");
            } catch (e) {}
          })(e.adUnitCode),
          e.renderer.push(function () {
            window.ANOutstreamVideo.renderAd(
              {
                tagId: e.adResponse.tag_id,
                sizes: [e.getSize().split("x")],
                targetId: e.adUnitCode,
                uuid: e.adResponse.uuid,
                adResponse: e.adResponse,
                rendererOptions: e.renderer.getConfig(),
              },
              V.bind(null, e)
            );
          });
      }
      function V(e, r, a) {
        e.renderer.handleVideoEvent({ id: r, eventName: a });
      }
      function K(e, r, a, t) {
        return (
          r &&
            (t
              ? e.push({ source: a, id: r, rti_partner: t })
              : e.push({ source: a, id: r })),
          e
        );
      }
      function J(e) {
        var r = "";
        return (
          Object.keys(e).forEach(function (a) {
            (0, t.isStr)(e[a])
              ? "" !== e[a]
                ? (r += "".concat(a, "=").concat(e[a], ","))
                : (r += "".concat(a, ","))
              : (0, t.isArray)(e[a]) &&
                ("" === e[a][0]
                  ? (r += "".concat(a, ","))
                  : e[a].forEach(function (e) {
                      r += "".concat(a, "=").concat(e, ",");
                    }));
          }),
          (r = r.substring(0, r.length - 1))
        );
      }
      (0, o.dX)(S), window.ihowpbjs.installedModules.push("appnexusBidAdapter");
    },
  },
  function (e) {
    e((e.s = 231));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [406],
  {
    201: function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var _src_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(853),
        _src_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(265),
        _src_adloader_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(996),
        _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(125),
        _src_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(962),
        _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(3),
        _src_polyfill_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(879),
        criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(582),
        _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(849);
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }),
          _extends.apply(this, arguments)
        );
      }
      var GVLID = 91,
        ADAPTER_VERSION = 34,
        BIDDER_CODE = "criteo",
        CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
        PROFILE_ID_INLINE = 207,
        PROFILE_ID_PUBLISHERTAG = 185,
        storage = (0, _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.df)({
          gvlid: GVLID,
          bidderCode: BIDDER_CODE,
        }),
        LOG_PREFIX = "Criteo: ",
        FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%",
        FAST_BID_VERSION_CURRENT = 117,
        FAST_BID_VERSION_LATEST = "latest",
        FAST_BID_VERSION_NONE = "none",
        PUBLISHER_TAG_URL_TEMPLATE =
          "https://static.criteo.net/js/ld/publishertag.prebid" +
          FAST_BID_VERSION_PLACEHOLDER +
          ".js",
        FAST_BID_PUBKEY_E = 65537,
        FAST_BID_PUBKEY_N =
          "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
        spec = {
          code: BIDDER_CODE,
          gvlid: GVLID,
          supportedMediaTypes: [
            _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk,
            _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX,
            _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5,
          ],
          isBidRequestValid: function (t) {
            return !(
              !t ||
              !t.params ||
              (!t.params.zoneId && !t.params.networkId) ||
              (hasVideoMediaType(t) && !hasValidVideoMediaType(t))
            );
          },
          buildRequests: function (t, e) {
            var r,
              i,
              s =
                _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getLegacyFpd(
                  _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig(
                    "ortb2"
                  )
                ) || {};
            _extends(e, {
              publisherExt: s.context,
              userExt: s.user,
              ceh: _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig(
                "criteo.ceh"
              ),
            });
            var a = _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig(
                "criteo.fastBidVersion"
              ),
              o = canFastBid(a);
            if (!publisherTagAvailable() && o) {
              (window.Criteo = window.Criteo || {}),
                (window.Criteo.usePrebidEvents = !1),
                tryGetCriteoFastBid();
              var n = getFastBidUrl(a);
              setTimeout(function () {
                (0,
                _src_adloader_js__WEBPACK_IMPORTED_MODULE_4__.B)(n, BIDDER_CODE);
              }, e.timeout);
            }
            if (publisherTagAvailable()) {
              var _ = new Criteo.PubTag.Adapters.Prebid(
                PROFILE_ID_PUBLISHERTAG,
                ADAPTER_VERSION,
                t,
                e,
                "6.18.0"
              );
              (r = _.buildCdbUrl()), (i = _.buildCdbRequest());
            } else {
              var p = buildContext(t, e);
              (r = buildCdbUrl(p)), (i = buildCdbRequest(p, t, e));
            }
            if (i) return { method: "POST", url: r, data: i, bidRequests: t };
          },
          interpretResponse: function (t, e) {
            var r = t.body || t;
            if (publisherTagAvailable()) {
              var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
              if (i) return i.interpretResponse(r, e);
            }
            var s = [];
            return (
              r &&
                r.slots &&
                (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(
                  r.slots
                ) &&
                r.slots.forEach(function (t) {
                  var r = (0, _src_polyfill_js__WEBPACK_IMPORTED_MODULE_6__.sE)(
                      e.bidRequests,
                      function (e) {
                        return (
                          e.adUnitCode === t.impid &&
                          (!e.params.zoneId ||
                            parseInt(e.params.zoneId) === t.zoneid)
                        );
                      }
                    ),
                    i = r.bidId,
                    a = {
                      requestId: i,
                      adId:
                        t.bidId ||
                        (0,
                        _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getUniqueIdentifierStr)(),
                      cpm: t.cpm,
                      currency: t.currency,
                      netRevenue: !0,
                      ttl: t.ttl || 60,
                      creativeId: t.creativecode,
                      width: t.width,
                      height: t.height,
                      dealId: t.dealCode,
                    };
                  t.adomain &&
                    (a.meta = _extends({}, a.meta, {
                      advertiserDomains: t.adomain,
                    })),
                    t.native
                      ? r.params.nativeCallback
                        ? (a.ad = createNativeAd(
                            i,
                            t.native,
                            r.params.nativeCallback
                          ))
                        : ((a.native = createPrebidNativeAd(t.native)),
                          (a.mediaType =
                            _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5))
                      : t.video
                      ? ((a.vastUrl = t.displayurl),
                        (a.mediaType =
                          _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX))
                      : (a.ad = t.creative),
                    s.push(a);
                }),
              s
            );
          },
          onTimeout: function (t) {
            if (publisherTagAvailable() && Array.isArray(t)) {
              var e = [];
              t.forEach(function (t) {
                -1 === e.indexOf(t.auctionId) &&
                  (e.push(t.auctionId),
                  Criteo.PubTag.Adapters.Prebid.GetAdapter(
                    t.auctionId
                  ).handleBidTimeout());
              });
            }
          },
          onBidWon: function (t) {
            publisherTagAvailable() &&
              t &&
              Criteo.PubTag.Adapters.Prebid.GetAdapter(
                t.auctionId
              ).handleBidWon(t);
          },
          onSetTargeting: function (t) {
            publisherTagAvailable() &&
              Criteo.PubTag.Adapters.Prebid.GetAdapter(
                t.auctionId
              ).handleSetTargeting(t);
          },
        };
      function publisherTagAvailable() {
        return (
          "undefined" != typeof Criteo &&
          Criteo.PubTag &&
          Criteo.PubTag.Adapters &&
          Criteo.PubTag.Adapters.Prebid
        );
      }
      function buildContext(t, e) {
        var r = "";
        e && e.refererInfo && (r = e.refererInfo.referer);
        var i = (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(
            r
          ).search,
          s = {
            url: r,
            debug: "1" === i.pbt_debug,
            noLog: "1" === i.pbt_nolog,
            amp: !1,
          };
        return (
          t.forEach(function (t) {
            "amp" === t.params.integrationMode && (s.amp = !0);
          }),
          s
        );
      }
      function buildCdbUrl(t) {
        var e = CDB_ENDPOINT;
        return (
          (e += "?profileId=" + PROFILE_ID_INLINE),
          (e += "&av=" + String(ADAPTER_VERSION)),
          (e += "&wv=" + encodeURIComponent("6.18.0")),
          (e += "&cb=" + String(Math.floor(99999999999 * Math.random()))),
          t.amp && (e += "&im=1"),
          t.debug && (e += "&debug=1"),
          t.noLog && (e += "&nolog=1"),
          e
        );
      }
      function checkNativeSendId(t) {
        return !(
          t.nativeParams &&
          ((t.nativeParams.image &&
            (!0 !== t.nativeParams.image.sendId ||
              !0 === t.nativeParams.image.sendTargetingKeys)) ||
            (t.nativeParams.icon &&
              (!0 !== t.nativeParams.icon.sendId ||
                !0 === t.nativeParams.icon.sendTargetingKeys)) ||
            (t.nativeParams.clickUrl &&
              (!0 !== t.nativeParams.clickUrl.sendId ||
                !0 === t.nativeParams.clickUrl.sendTargetingKeys)) ||
            (t.nativeParams.displayUrl &&
              (!0 !== t.nativeParams.displayUrl.sendId ||
                !0 === t.nativeParams.displayUrl.sendTargetingKeys)) ||
            (t.nativeParams.privacyLink &&
              (!0 !== t.nativeParams.privacyLink.sendId ||
                !0 === t.nativeParams.privacyLink.sendTargetingKeys)) ||
            (t.nativeParams.privacyIcon &&
              (!0 !== t.nativeParams.privacyIcon.sendId ||
                !0 === t.nativeParams.privacyIcon.sendTargetingKeys)))
        );
      }
      function buildCdbRequest(t, e, r) {
        var i,
          s,
          a = {
            publisher: { url: t.url, ext: r.publisherExt },
            slots: e.map(function (t) {
              (i = t.params.networkId || i), (s = t.schain || s);
              var e = {
                impid: t.adUnitCode,
                transactionid: t.transactionId,
                auctionId: t.auctionId,
              };
              if (
                (t.params.zoneId && (e.zoneid = t.params.zoneId),
                (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                  t,
                  "ortb2Imp.ext"
                ) && (e.ext = t.ortb2Imp.ext),
                t.params.ext && (e.ext = _extends({}, e.ext, t.params.ext)),
                t.params.publisherSubId &&
                  (e.publishersubid = t.params.publisherSubId),
                t.params.nativeCallback ||
                (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                  t,
                  "mediaTypes.".concat(
                    _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5
                  )
                )
                  ? ((e.native = !0),
                    checkNativeSendId(t) ||
                      (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)(
                        LOG_PREFIX +
                          "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"
                      ),
                    (e.sizes = parseSizes(
                      (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                        t,
                        "mediaTypes.banner.sizes"
                      ),
                      parseNativeSize
                    )))
                  : (e.sizes = parseSizes(
                      (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                        t,
                        "mediaTypes.banner.sizes"
                      ),
                      parseSize
                    )),
                hasVideoMediaType(t))
              ) {
                var r = {
                    playersizes: parseSizes(
                      (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                        t,
                        "mediaTypes.video.playerSize"
                      ),
                      parseSize
                    ),
                    mimes: t.mediaTypes.video.mimes,
                    protocols: t.mediaTypes.video.protocols,
                    maxduration: t.mediaTypes.video.maxduration,
                    api: t.mediaTypes.video.api,
                    skip: t.mediaTypes.video.skip,
                    placement: t.mediaTypes.video.placement,
                    minduration: t.mediaTypes.video.minduration,
                    playbackmethod: t.mediaTypes.video.playbackmethod,
                    startdelay: t.mediaTypes.video.startdelay,
                  },
                  a = t.params.video;
                void 0 !== a &&
                  ((r.skip = r.skip || a.skip || 0),
                  (r.placement = r.placement || a.placement),
                  (r.minduration = r.minduration || a.minduration),
                  (r.playbackmethod = r.playbackmethod || a.playbackmethod),
                  (r.startdelay = r.startdelay || a.startdelay || 0)),
                  (e.video = r);
              }
              return e;
            }),
          };
        return (
          i && (a.publisher.networkid = i),
          s && (a.source = { ext: { schain: s } }),
          (a.user = { ext: r.userExt }),
          r && r.ceh && (a.user.ceh = r.ceh),
          r &&
            r.gdprConsent &&
            ((a.gdprConsent = {}),
            void 0 !== r.gdprConsent.gdprApplies &&
              (a.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies),
            (a.gdprConsent.version = r.gdprConsent.apiVersion),
            void 0 !== r.gdprConsent.consentString &&
              (a.gdprConsent.consentData = r.gdprConsent.consentString)),
          r && r.uspConsent && (a.user.uspIab = r.uspConsent),
          a
        );
      }
      function parseSizes(t, e) {
        return null == t
          ? []
          : Array.isArray(t[0])
          ? t.map(function (t) {
              return e(t);
            })
          : [e(t)];
      }
      function parseSize(t) {
        return t[0] + "x" + t[1];
      }
      function parseNativeSize(t) {
        return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1];
      }
      function hasVideoMediaType(t) {
        return (
          void 0 !==
          (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
            t,
            "mediaTypes.video"
          )
        );
      }
      function hasValidVideoMediaType(t) {
        var e = !0;
        if (
          ([
            "mimes",
            "playerSize",
            "maxduration",
            "protocols",
            "api",
            "skip",
            "placement",
            "playbackmethod",
          ].forEach(function (r) {
            void 0 ===
              (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                t,
                "mediaTypes.video." + r
              ) &&
              void 0 ===
                (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                  t,
                  "params.video." + r
                ) &&
              ((e = !1),
              (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logError)(
                "Criteo Bid Adapter: mediaTypes.video." + r + " is required"
              ));
          }),
          e)
        ) {
          var r = t.mediaTypes.video.placement || t.params.video.placement;
          if ("instream" == t.mediaTypes.video.context && 1 === r) return !0;
          if ("outstream" == t.mediaTypes.video.context && 1 !== r) return !0;
        }
        return !1;
      }
      function createPrebidNativeAd(t) {
        return {
          sendTargetingKeys: !1,
          title: t.products[0].title,
          body: t.products[0].description,
          sponsoredBy: t.advertiser.description,
          icon: t.advertiser.logo,
          image: t.products[0].image,
          clickUrl: t.products[0].click_url,
          privacyLink: t.privacy.optout_click_url,
          privacyIcon: t.privacy.optout_image_url,
          cta: t.products[0].call_to_action,
          price: t.products[0].price,
          impressionTrackers: t.impression_pixels.map(function (t) {
            return t.url;
          }),
        };
      }
      function createNativeAd(t, e, r) {
        var i = "criteo_prebid_native_slots";
        return (
          (window[i] = window[i] || {}),
          (window[i][t] = { callback: r, payload: e }),
          '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'
            .concat(
              i,
              ';\n  if(!slots){continue;}\n  var responseSlot = slots["'
            )
            .concat(
              t,
              '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n</script>'
            )
        );
      }
      function canFastBid(t) {
        return t !== FAST_BID_VERSION_NONE;
      }
      function getFastBidUrl(t) {
        var e;
        return (
          t === FAST_BID_VERSION_LATEST
            ? (e = "")
            : t
            ? (String(t).split(".")[0] < 102 &&
                (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)(
                  "Specifying a Fastbid version which is not supporting version selection."
                ),
              (e = "." + t))
            : (e = "." + FAST_BID_VERSION_CURRENT),
          PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER, e)
        );
      }
      function tryGetCriteoFastBid() {
        try {
          var fastBidStorageKey = "criteo_fast_bid",
            hashPrefix = "// Hash: ",
            fastBidFromStorage =
              storage.getDataFromLocalStorage(fastBidStorageKey);
          if (null !== fastBidFromStorage) {
            var firstLineEndPosition = fastBidFromStorage.indexOf("\n"),
              firstLine = fastBidFromStorage
                .substr(0, firstLineEndPosition)
                .trim();
            if (firstLine.substr(0, hashPrefix.length) !== hashPrefix)
              (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)(
                "No hash found in FastBid"
              ),
                storage.removeDataFromLocalStorage(fastBidStorageKey);
            else {
              var publisherTagHash = firstLine.substr(hashPrefix.length),
                publisherTag = fastBidFromStorage.substr(
                  firstLineEndPosition + 1
                );
              (0,
              criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__.T)(
                publisherTag,
                publisherTagHash,
                FAST_BID_PUBKEY_N,
                FAST_BID_PUBKEY_E
              )
                ? ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logInfo)(
                    "Using Criteo FastBid"
                  ),
                  eval(publisherTag))
                : ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)(
                    "Invalid Criteo FastBid found"
                  ),
                  storage.removeDataFromLocalStorage(fastBidStorageKey));
            }
          }
        } catch (t) {}
      }
      (0, _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__.dX)(spec),
        window.ihowpbjs.installedModules.push("criteoBidAdapter");
    },
    611: function (t, e) {
      var r;
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
        function t(t) {
          null !== t && this.fromHexString(t);
        }
        return (
          (t.prototype.toHexString = function () {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t,
              e = !1,
              r = "",
              i = this.t,
              s = this.DB - ((i * this.DB) % 4);
            if (i-- > 0)
              for (
                s < this.DB && (t = this[i] >> s) > 0 && ((e = !0), (r = d(t)));
                i >= 0;

              )
                s < 4
                  ? ((t = (this[i] & ((1 << s) - 1)) << (4 - s)),
                    (t |= this[--i] >> (s += this.DB - 4)))
                  : ((t = (this[i] >> (s -= 4)) & 15),
                    s <= 0 && ((s += this.DB), --i)),
                  t > 0 && (e = !0),
                  e && (r += d(t));
            return e ? r : "0";
          }),
          (t.prototype.fromHexString = function (e) {
            if (null !== e) {
              (this.t = 0), (this.s = 0);
              for (var r = e.length, i = !1, s = 0; --r >= 0; ) {
                var a = p(e, r);
                a < 0
                  ? "-" == e.charAt(r) && (i = !0)
                  : ((i = !1),
                    0 == s
                      ? (this[this.t++] = a)
                      : s + 4 > this.DB
                      ? ((this[this.t - 1] |=
                          (a & ((1 << (this.DB - s)) - 1)) << s),
                        (this[this.t++] = a >> (this.DB - s)))
                      : (this[this.t - 1] |= a << s),
                    (s += 4) >= this.DB && (s -= this.DB));
              }
              this.clamp(), i && t.ZERO.subTo(this, this);
            }
          }),
          (t.prototype.negate = function () {
            var e = s();
            return t.ZERO.subTo(this, e), e;
          }),
          (t.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this;
          }),
          (t.prototype.mod = function (e) {
            var r = s();
            return (
              this.abs().divRemTo(e, null, r),
              this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r),
              r
            );
          }),
          (t.prototype.copyTo = function (t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            (t.t = this.t), (t.s = this.s);
          }),
          (t.prototype.lShiftTo = function (t, e) {
            for (
              var r = t % this.DB,
                i = this.DB - r,
                s = (1 << i) - 1,
                a = Math.floor(t / this.DB),
                o = (this.s << r) & this.DM,
                n = this.t - 1;
              n >= 0;
              --n
            )
              (e[n + a + 1] = (this[n] >> i) | o), (o = (this[n] & s) << r);
            for (n = a - 1; n >= 0; --n) e[n] = 0;
            (e[a] = o), (e.t = this.t + a + 1), (e.s = this.s), e.clamp();
          }),
          (t.prototype.invDigit = function () {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return (e =
              ((e =
                ((e =
                  ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) &
                  255) *
                  (2 - (((65535 & t) * e) & 65535))) &
                65535) *
                (2 - ((t * e) % this.DV))) %
              this.DV) > 0
              ? this.DV - e
              : -e;
          }),
          (t.prototype.dlShiftTo = function (t, e) {
            var r;
            for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
            for (r = t - 1; r >= 0; --r) e[r] = 0;
            (e.t = this.t + t), (e.s = this.s);
          }),
          (t.prototype.squareTo = function (t) {
            for (var e = this.abs(), r = (t.t = 2 * e.t); --r >= 0; ) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
              var i = e.am(r, e[r], t, 2 * r, 0, 1);
              (t[r + e.t] += e.am(
                r + 1,
                2 * e[r],
                t,
                2 * r + 1,
                i,
                e.t - r - 1
              )) >= e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
            }
            t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
              (t.s = 0),
              t.clamp();
          }),
          (t.prototype.multiplyTo = function (e, r) {
            var i = this.abs(),
              s = e.abs(),
              a = i.t;
            for (r.t = a + s.t; --a >= 0; ) r[a] = 0;
            for (a = 0; a < s.t; ++a) r[a + i.t] = i.am(0, s[a], r, a, 0, i.t);
            (r.s = 0), r.clamp(), this.s != e.s && t.ZERO.subTo(r, r);
          }),
          (t.prototype.divRemTo = function (e, r, i) {
            var o = e.abs();
            if (!(o.t <= 0)) {
              var n = this.abs();
              if (n.t < o.t)
                return (
                  null != r && r.fromHexString("0"),
                  void (null != i && this.copyTo(i))
                );
              null == i && (i = s());
              var _ = s(),
                p = this.s,
                d = e.s,
                c = this.DB - a(o[o.t - 1]);
              c > 0
                ? (o.lShiftTo(c, _), n.lShiftTo(c, i))
                : (o.copyTo(_), n.copyTo(i));
              var u = _.t,
                h = _[u - 1];
              if (0 != h) {
                var l = h * (1 << this.F1) + (u > 1 ? _[u - 2] >> this.F2 : 0),
                  f = this.FV / l,
                  m = (1 << this.F1) / l,
                  v = 1 << this.F2,
                  E = i.t,
                  T = E - u,
                  D = null == r ? s() : r;
                for (
                  _.dlShiftTo(T, D),
                    i.compareTo(D) >= 0 && ((i[i.t++] = 1), i.subTo(D, i)),
                    t.ONE.dlShiftTo(u, D),
                    D.subTo(_, _);
                  _.t < u;

                )
                  _[_.t++] = 0;
                for (; --T >= 0; ) {
                  var y =
                    i[--E] == h
                      ? this.DM
                      : Math.floor(i[E] * f + (i[E - 1] + v) * m);
                  if ((i[E] += _.am(0, y, i, T, 0, u)) < y)
                    for (_.dlShiftTo(T, D), i.subTo(D, i); i[E] < --y; )
                      i.subTo(D, i);
                }
                null != r && (i.drShiftTo(u, r), p != d && t.ZERO.subTo(r, r)),
                  (i.t = u),
                  i.clamp(),
                  c > 0 && i.rShiftTo(c, i),
                  p < 0 && t.ZERO.subTo(i, i);
              }
            }
          }),
          (t.prototype.rShiftTo = function (t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0;
            else {
              var i = t % this.DB,
                s = this.DB - i,
                a = (1 << i) - 1;
              e[0] = this[r] >> i;
              for (var o = r + 1; o < this.t; ++o)
                (e[o - r - 1] |= (this[o] & a) << s), (e[o - r] = this[o] >> i);
              i > 0 && (e[this.t - r - 1] |= (this.s & a) << s),
                (e.t = this.t - r),
                e.clamp();
            }
          }),
          (t.prototype.drShiftTo = function (t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
          }),
          (t.prototype.subTo = function (t, e) {
            for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s; )
              (i += this[r] - t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
            if (t.t < this.t) {
              for (i -= t.s; r < this.t; )
                (i += this[r]), (e[r++] = i & this.DM), (i >>= this.DB);
              i += this.s;
            } else {
              for (i += this.s; r < t.t; )
                (i -= t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
              i -= t.s;
            }
            (e.s = i < 0 ? -1 : 0),
              i < -1 ? (e[r++] = this.DV + i) : i > 0 && (e[r++] = i),
              (e.t = r),
              e.clamp();
          }),
          (t.prototype.clamp = function () {
            for (
              var t = this.s & this.DM;
              this.t > 0 && this[this.t - 1] == t;

            )
              --this.t;
          }),
          (t.prototype.modPowInt = function (t, e) {
            var r;
            return (
              (r = t < 256 || e.isEven() ? new c(e) : new u(e)), this.exp(t, r)
            );
          }),
          (t.prototype.exp = function (e, r) {
            if (e > 4294967295 || e < 1) return t.ONE;
            var i = s(),
              o = s(),
              n = r.convert(this),
              _ = a(e) - 1;
            for (n.copyTo(i); --_ >= 0; )
              if ((r.sqrTo(i, o), (e & (1 << _)) > 0)) r.mulTo(o, n, i);
              else {
                var p = i;
                (i = o), (o = p);
              }
            return r.revert(i);
          }),
          (t.prototype.isEven = function () {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
          }),
          (t.prototype.compareTo = function (t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (; --r >= 0; ) if (0 != (e = this[r] - t[r])) return e;
            return 0;
          }),
          (t.prototype.am1 = function (t, e, r, i, s, a) {
            for (; --a >= 0; ) {
              var o = e * this[t++] + r[i] + s;
              (s = Math.floor(o / 67108864)), (r[i++] = 67108863 & o);
            }
            return s;
          }),
          (t.prototype.am2 = function (t, e, r, i, s, a) {
            for (var o = 32767 & e, n = e >> 15; --a >= 0; ) {
              var _ = 32767 & this[t],
                p = this[t++] >> 15,
                d = n * _ + p * o;
              (s =
                ((_ = o * _ + ((32767 & d) << 15) + r[i] + (1073741823 & s)) >>>
                  30) +
                (d >>> 15) +
                n * p +
                (s >>> 30)),
                (r[i++] = 1073741823 & _);
            }
            return s;
          }),
          (t.prototype.am3 = function (t, e, r, i, s, a) {
            for (var o = 16383 & e, n = e >> 14; --a >= 0; ) {
              var _ = 16383 & this[t],
                p = this[t++] >> 14,
                d = n * _ + p * o;
              (s =
                ((_ = o * _ + ((16383 & d) << 14) + r[i] + s) >> 28) +
                (d >> 14) +
                n * p),
                (r[i++] = 268435455 & _);
            }
            return s;
          }),
          t
        );
      })();
      function s() {
        return new i(null);
      }
      function a(t) {
        var e,
          r = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (r += 16)),
          0 != (e = t >> 8) && ((t = e), (r += 8)),
          0 != (e = t >> 4) && ((t = e), (r += 4)),
          0 != (e = t >> 2) && ((t = e), (r += 2)),
          0 != (e = t >> 1) && ((t = e), (r += 1)),
          r
        );
      }
      (e.BigInteger = i), (e.nbi = s), (e.nbits = a);
      var o,
        n,
        _ = [];
      for (o = "0".charCodeAt(0), n = 0; n <= 9; ++n) _[o++] = n;
      for (o = "a".charCodeAt(0), n = 10; n < 36; ++n) _[o++] = n;
      for (o = "A".charCodeAt(0), n = 10; n < 36; ++n) _[o++] = n;
      function p(t, e) {
        var r = _[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function d(t) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
      }
      (e.intAt = p),
        (e.int2char = d),
        (e.b64toHex = function (t) {
          var e,
            r = "",
            i = 0,
            s = 0;
          for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
            var a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                t.charAt(e)
              );
            a < 0 ||
              (0 == i
                ? ((r += d(a >> 2)), (s = 3 & a), (i = 1))
                : 1 == i
                ? ((r += d((s << 2) | (a >> 4))), (s = 15 & a), (i = 2))
                : 2 == i
                ? ((r += d(s)), (r += d(a >> 2)), (s = 3 & a), (i = 3))
                : ((r += d((s << 2) | (a >> 4))), (r += d(15 & a)), (i = 0)));
          }
          return 1 == i && (r += d(s << 2)), r;
        }),
        (e.removeExtraSymbols = function (t) {
          return t
            .replace(/^1f+00/, "")
            .replace("3031300d060960864801650304020105000420", "");
        });
      var c = (function () {
          function t(t) {
            this.m = t;
          }
          return (
            (t.prototype.convert = function (t) {
              return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
            }),
            (t.prototype.revert = function (t) {
              return t;
            }),
            (t.prototype.reduce = function (t) {
              t.divRemTo(this.m, null, t);
            }),
            (t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r), this.reduce(r);
            }),
            (t.prototype.sqrTo = function (t, e) {
              t.squareTo(e), this.reduce(e);
            }),
            t
          );
        })(),
        u = (function () {
          function t(t) {
            (this.m = t),
              (this.mp = t.invDigit()),
              (this.mpl = 32767 & this.mp),
              (this.mph = this.mp >> 15),
              (this.um = (1 << (t.DB - 15)) - 1),
              (this.mt2 = 2 * t.t);
          }
          return (
            (t.prototype.convert = function (t) {
              var e = s();
              return (
                t.abs().dlShiftTo(this.m.t, e),
                e.divRemTo(this.m, null, e),
                t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e),
                e
              );
            }),
            (t.prototype.revert = function (t) {
              var e = s();
              return t.copyTo(e), this.reduce(e), e;
            }),
            (t.prototype.reduce = function (t) {
              for (; t.t <= this.mt2; ) t[t.t++] = 0;
              for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e],
                  i =
                    (r * this.mpl +
                      (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) <<
                        15)) &
                    t.DM;
                for (
                  t[(r = e + this.m.t)] += this.m.am(0, i, t, e, 0, this.m.t);
                  t[r] >= t.DV;

                )
                  (t[r] -= t.DV), t[++r]++;
              }
              t.clamp(),
                t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
            }),
            (t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r), this.reduce(r);
            }),
            (t.prototype.sqrTo = function (t, e) {
              t.squareTo(e), this.reduce(e);
            }),
            t
          );
        })();
      function h(t) {
        var e = s();
        return e.fromHexString(t.toString()), e;
      }
      (e.nbv = h),
        (i.ZERO = h(0)),
        (i.ONE = h(1)),
        "Microsoft Internet Explorer" == navigator.appName
          ? ((i.prototype.am = i.prototype.am2), (r = 30))
          : "Netscape" != navigator.appName
          ? ((i.prototype.am = i.prototype.am1), (r = 26))
          : ((i.prototype.am = i.prototype.am3), (r = 28)),
        (i.prototype.DB = r),
        (i.prototype.DM = (1 << r) - 1),
        (i.prototype.DV = 1 << r),
        (i.prototype.FV = Math.pow(2, 52)),
        (i.prototype.F1 = 52 - r),
        (i.prototype.F2 = 2 * r - 52);
    },
    950: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
        function t() {}
        return (
          (t.hash = function (e) {
            e = t.utf8Encode(e || "");
            for (
              var r = [
                  1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                  1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                  607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                  3248222580, 3835390401, 4022224774, 264347078, 604807628,
                  770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                  2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                  113926993, 338241895, 666307205, 773529912, 1294757372,
                  1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                  2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                  3600352804, 4094571909, 275423344, 430227734, 506948616,
                  659060556, 883997877, 958139571, 1322822218, 1537002063,
                  1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                  2428436474, 2756734187, 3204031479, 3329325298,
                ],
                i = [
                  1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                  2600822924, 528734635, 1541459225,
                ],
                s = (e += String.fromCharCode(128)).length / 4 + 2,
                a = Math.ceil(s / 16),
                o = new Array(a),
                n = 0;
              n < a;
              n++
            ) {
              o[n] = new Array(16);
              for (var _ = 0; _ < 16; _++)
                o[n][_] =
                  (e.charCodeAt(64 * n + 4 * _) << 24) |
                  (e.charCodeAt(64 * n + 4 * _ + 1) << 16) |
                  (e.charCodeAt(64 * n + 4 * _ + 2) << 8) |
                  (e.charCodeAt(64 * n + 4 * _ + 3) << 0);
            }
            var p = (8 * (e.length - 1)) / Math.pow(2, 32),
              d = (8 * (e.length - 1)) >>> 0;
            for (
              o[a - 1][14] = Math.floor(p), o[a - 1][15] = d, n = 0;
              n < a;
              n++
            ) {
              for (var c = new Array(64), u = 0; u < 16; u++) c[u] = o[n][u];
              for (u = 16; u < 64; u++)
                c[u] =
                  (t.q1(c[u - 2]) + c[u - 7] + t.q0(c[u - 15]) + c[u - 16]) >>>
                  0;
              var h = i[0],
                l = i[1],
                f = i[2],
                m = i[3],
                v = i[4],
                E = i[5],
                T = i[6],
                D = i[7];
              for (u = 0; u < 64; u++) {
                var y = D + t.z1(v) + t.Ch(v, E, T) + r[u] + c[u],
                  g = t.z0(h) + t.Maj(h, l, f);
                (D = T),
                  (T = E),
                  (E = v),
                  (v = (m + y) >>> 0),
                  (m = f),
                  (f = l),
                  (l = h),
                  (h = (y + g) >>> 0);
              }
              (i[0] = (i[0] + h) >>> 0),
                (i[1] = (i[1] + l) >>> 0),
                (i[2] = (i[2] + f) >>> 0),
                (i[3] = (i[3] + m) >>> 0),
                (i[4] = (i[4] + v) >>> 0),
                (i[5] = (i[5] + E) >>> 0),
                (i[6] = (i[6] + T) >>> 0),
                (i[7] = (i[7] + D) >>> 0);
            }
            var b = new Array(i.length);
            for (D = 0; D < i.length; D++)
              b[D] = ("00000000" + i[D].toString(16)).slice(-8);
            return b.join("");
          }),
          (t.utf8Encode = function (t) {
            try {
              return new TextEncoder().encode(t).reduce(function (t, e) {
                return t + String.fromCharCode(e);
              }, "");
            } catch (e) {
              return unescape(encodeURIComponent(t));
            }
          }),
          (t.ROTR = function (t, e) {
            return (e >>> t) | (e << (32 - t));
          }),
          (t.z0 = function (e) {
            return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e);
          }),
          (t.z1 = function (e) {
            return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e);
          }),
          (t.q0 = function (e) {
            return t.ROTR(7, e) ^ t.ROTR(18, e) ^ (e >>> 3);
          }),
          (t.q1 = function (e) {
            return t.ROTR(17, e) ^ t.ROTR(19, e) ^ (e >>> 10);
          }),
          (t.Ch = function (t, e, r) {
            return (t & e) ^ (~t & r);
          }),
          (t.Maj = function (t, e, r) {
            return (t & e) ^ (t & r) ^ (e & r);
          }),
          t
        );
      })();
      e.Sha256 = r;
    },
    582: function (t, e, r) {
      var i = r(611),
        s = r(950);
      e.T = function (t, e, r, a) {
        var o = new i.BigInteger(i.b64toHex(e)),
          n = new i.BigInteger(i.b64toHex(r)),
          _ = o.modPowInt(a, n);
        return i.removeExtraSymbols(_.toHexString()) === s.Sha256.hash(t);
      };
    },
  },
  function (t) {
    t((t.s = 201));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [656],
  {
    695: function (e, r, n) {
      var t = n(528),
        a = n(853),
        o = (0, t.R)(),
        s = n(742),
        i = n(265),
        d = n(962),
        c = n(494),
        p = n(766),
        l = n(602),
        u = n(319),
        _ = n(644);
      function g(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      function v() {
        return (
          (v =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n)
                  Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }
              return e;
            }),
          v.apply(this, arguments)
        );
      }
      var f,
        T = {
          env: "vp",
          gdfp_req: 1,
          output: "vast",
          unviewed_position_start: 1,
        },
        b = {};
      function A(e, r, n) {
        if (!d.vc.getConfig("cache.url"))
          if ((0, i.Z)(r, "".concat(n, ".description_url")))
            (0, a.logError)("input cannnot contain description_url");
          else {
            var t = e && e.vastUrl;
            if (t) return encodeURIComponent(t);
          }
      }
      function m(e, r, n) {
        var t = (e && e.adserverTargeting) || {},
          o = {},
          d = r && r.adUnit;
        if (d) {
          var c = s.q0.getAllTargeting(d.code);
          o = c ? c[d.code] : {};
        }
        var p = v(
          {},
          { hb_uuid: e && e.videoCacheKey },
          { hb_cache_id: e && e.videoCacheKey },
          o,
          t
        );
        u.emit(_.EVENTS.SET_TARGETING, g({}, d.code, p));
        var l = (0, i.Z)(r, "params.cust_params"),
          f = {};
        window.PWT &&
          window.PWT.getCustomParamsForDFPVideo &&
          (f = window.PWT.getCustomParamsForDFPVideo(l, e));
        var T = v({}, t, l, f),
          b = encodeURIComponent((0, a.formatQS)(T));
        return n && (b = n + "%26" + b), b;
      }
      d.vc.getConfig("brandCategoryTranslation.translationFile") &&
        (0, c.v5)("registerAdserver").before(function (e) {
          e.call(this, "dfp");
        }),
        (f = {
          buildVideoUrl: function (e) {
            if (e.params || e.url) {
              var r = e.adUnit,
                n = e.bid || s.q0.getWinningBids(r.code)[0],
                t = {};
              if (
                e.url &&
                ((t = (0, a.parseUrl)(e.url, { noDecodeWholeURL: !0 })),
                (0, a.isEmpty)(e.params))
              )
                return (function (e, r, n) {
                  var t = A(r, e, "search");
                  return (
                    t && (e.search.description_url = t),
                    (e.search.cust_params = m(r, n, e.search.cust_params)),
                    (0, a.buildUrl)(e)
                  );
                })(t, n, e);
              var o = {
                  correlator: Date.now(),
                  sz: (0, a.parseSizesInput)(
                    (0, i.Z)(r, "mediaTypes.video.playerSize")
                  ).join("|"),
                  url: encodeURIComponent(location.href),
                },
                d = t.search,
                c = d && d.sz;
              c && (o.sz = c + "|" + o.sz);
              var p = m(n, e, d && d.cust_params),
                u = v({}, T, t.search, o, e.params, { cust_params: p }),
                _ = A(n, e, "params");
              _ && (u.description_url = _);
              var g = l.rp.getConsentData();
              g &&
                ("boolean" == typeof g.gdprApplies &&
                  (u.gdpr = Number(g.gdprApplies)),
                g.consentString && (u.gdpr_consent = g.consentString),
                g.addtlConsent && (u.addtl_consent = g.addtlConsent));
              var f = l.nX.getConsentData();
              return (
                f && (u.us_privacy = f),
                (0, a.buildUrl)(
                  v(
                    {
                      protocol: "https",
                      host: "securepubads.g.doubleclick.net",
                      pathname: "/gampad/ads",
                    },
                    t,
                    { search: u }
                  )
                )
              );
            }
            (0, a.logError)(
              "A params object or a url is required to use ihowpbjs.adServers.dfp.buildVideoUrl"
            );
          },
          buildAdpodVideoUrl: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.code,
              n = e.params,
              t = e.callback;
            if (n && t) {
              var o = {
                correlator: Date.now(),
                sz: s(r),
                url: encodeURIComponent(location.href),
              };
              b.getTargeting({ codes: [r], callback: d });
            } else
              (0, a.logError)(
                "A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl"
              );
            function s(e) {
              var r = p.K.getAdUnits().filter(function (r) {
                  return r.code === e;
                }),
                n = (0, i.Z)(r[0], "mediaTypes.video.playerSize");
              return (0, a.parseSizesInput)(n).join("|");
            }
            function d(e, s) {
              var i;
              if (e) t(e, null);
              else {
                var d =
                    (g((i = {}), b.TARGETING_KEY_PB_CAT_DUR, void 0),
                    g(i, b.TARGETING_KEY_CACHE_ID, void 0),
                    i),
                  c = {};
                s[r] &&
                  (c = s[r].reduce(function (e, r) {
                    return (
                      Object.keys(r)[0] === b.TARGETING_KEY_PB_CAT_DUR
                        ? (e[b.TARGETING_KEY_PB_CAT_DUR] =
                            void 0 !== e[b.TARGETING_KEY_PB_CAT_DUR]
                              ? e[b.TARGETING_KEY_PB_CAT_DUR] +
                                "," +
                                r[b.TARGETING_KEY_PB_CAT_DUR]
                              : r[b.TARGETING_KEY_PB_CAT_DUR])
                        : Object.keys(r)[0] === b.TARGETING_KEY_CACHE_ID &&
                          (e[b.TARGETING_KEY_CACHE_ID] =
                            r[b.TARGETING_KEY_CACHE_ID]),
                      e
                    );
                  }, d));
                var p = encodeURIComponent((0, a.formatQS)(c)),
                  u = v({}, T, o, n, { cust_params: p }),
                  _ = l.rp.getConsentData();
                _ &&
                  ("boolean" == typeof _.gdprApplies &&
                    (u.gdpr = Number(_.gdprApplies)),
                  _.consentString && (u.gdpr_consent = _.consentString),
                  _.addtlConsent && (u.addtl_consent = _.addtlConsent));
                var f = l.nX.getConsentData();
                f && (u.us_privacy = f);
                var A = (0, a.buildUrl)({
                  protocol: "https",
                  host: "securepubads.g.doubleclick.net",
                  pathname: "/gampad/ads",
                  search: u,
                });
                t(null, A);
              }
            }
          },
          getAdpodTargeting: function (e) {
            return b.getTargeting(e);
          },
        }),
        (o.adServers = o.adServers || {}),
        (o.adServers.dfp = o.adServers.dfp || {}),
        Object.keys(f).forEach(function (e) {
          o.adServers.dfp[e]
            ? (0, a.logWarn)(
                "Attempting to add an already registered function property "
                  .concat(e, " for AdServer ")
                  .concat("dfp", ".")
              )
            : (o.adServers.dfp[e] = f[e]);
        }),
        (0, c.Bx)("adpod", b),
        window.ihowpbjs.installedModules.push("dfpAdServerVideo");
    },
  },
  function (e) {
    e((e.s = 695));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [114],
  {
    160: function (e, t, n) {
      var i = n(853),
        o = n(265),
        r = n(755),
        s = n(494),
        d = (0, n(849).df)(),
        c = {
          name: "identityLink",
          gvlid: 97,
          decode: function (e) {
            return { idl_env: e };
          },
          getId: function (e, t) {
            var n = (e && e.params) || {};
            if (n && "string" == typeof n.pid) {
              var r =
                  t && "boolean" == typeof t.gdprApplies && t.gdprApplies
                    ? 1
                    : 0,
                s = r ? t.consentString : "",
                d = 2 === o.Z(t, "vendorData.tcfPolicyVersion");
              if (!r || (s && "" !== s)) {
                var c = "https://api.rlcdn.com/api/identity/envelope?pid="
                  .concat(n.pid)
                  .concat(r ? (d ? "&ct=4&cv=" : "&ct=1&cv=") + s : "");
                return {
                  callback: function (e) {
                    window.ats
                      ? (i.logInfo("identityLink: ATS exists!"),
                        window.ats.retrieveEnvelope(function (t) {
                          t
                            ? (i.logInfo(
                                "identityLink: An envelope can be retrieved from ATS!"
                              ),
                              a(!0),
                              e(JSON.parse(t).envelope))
                            : l(c, e, n);
                        }))
                      : l(c, e, n);
                  },
                };
              }
              i.logInfo(
                "identityLink: Consent string is required to call envelope API."
              );
            } else
              i.logError("identityLink: requires partner id to be defined");
          },
        };
      function l(e, t, n) {
        var o,
          s = {
            success: function (e) {
              var n;
              if (e)
                try {
                  n = JSON.parse(e);
                } catch (e) {
                  i.logInfo(e);
                }
              t(n && n.envelope ? n.envelope : "");
            },
            error: function (e) {
              i.logInfo(
                "identityLink: identityLink: ID fetch encountered an error",
                e
              ),
                t();
            },
          };
        n.notUse3P ||
          d.getCookie("_lr_retry_request") ||
          ((o = new Date()).setTime(o.getTime() + 36e5),
          d.setCookie("_lr_retry_request", "true", o.toUTCString()),
          i.logInfo("identityLink: A 3P retrieval is attempted!"),
          a(!1),
          (0, r.h)(e, s, void 0, { method: "GET", withCredentials: !0 }));
      }
      function a(e) {
        var t = new Date();
        t.setTime(t.getTime() + 2592e6),
          d.setCookie("_lr_env_src_ats", e, t.toUTCString());
      }
      (0, s.Bx)("userId", c),
        window.ihowpbjs.installedModules.push("identityLinkIdSystem");
    },
  },
  function (e) {
    e((e.s = 160));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [60],
  {
    295: function (e, t, r) {
      var n = r(853),
        o = r(265),
        i = r(806),
        a = r(528),
        c = r(962),
        u = r(755),
        l = r(319),
        s = r(644),
        d = r(494),
        f = r(477),
        m = r(879),
        p = r(661),
        h = r(624),
        g = r(766),
        y = ["modelGroups"];
      function v(e) {
        return (
          (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          v(e)
        );
      }
      function b() {
        return (
          (b =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          b.apply(this, arguments)
        );
      }
      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                S(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function S(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var C,
        k = "Price Floors",
        T = (0, u.O)(1e4),
        F = ["gptSlot", "adUnitCode", "size", "domain", "mediaType"],
        R = !1,
        w = !1,
        D = {},
        E = [],
        U = {};
      function I(e, t) {
        return (
          Math.ceil((parseFloat(e) * Math.pow(10, t)).toFixed(1)) /
          Math.pow(10, t)
        );
      }
      function P(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = r.index,
          o = void 0 === n ? g.K.index : n;
        return (null == e ? void 0 : e.adUnitCode) || o.getAdUnit(t).code;
      }
      var x = {
        size: function (e, t) {
          return (0, n.parseGPTSingleSizeArray)(t.size) || "*";
        },
        mediaType: function (e, t) {
          return t.mediaType || "banner";
        },
        gptSlot: function (e, t) {
          return (
            (function (e) {
              var t = (
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                ).index,
                r = (void 0 === t ? g.K.index : t).getAdUnit({
                  transactionId: e,
                });
              return (
                "gam" === (0, o.Z)(r, "ortb2Imp.ext.data.adserver.name") &&
                r.ortb2Imp.ext.data.adserver.adslot
              );
            })((e || t).transactionId) ||
            (0, n.getGptSlotInfoForAdUnitCode)(P(e, t)).gptSlot
          );
        },
        domain: function (e, t) {
          return (
            C ||
            ((r = (0, p.n)().referer),
            (C = (0, n.parseUrl)(r, { noDecodeWholeURL: !0 }).hostname))
          );
          var r;
        },
        adUnitCode: function (e, t) {
          return P(e, t);
        },
      };
      function Z(e, t, r) {
        return e.reduce(function (e, n) {
          var o = x[n](t, r) || "*";
          return e.push("*" === o ? ["*"] : [o.toLowerCase(), "*"]), e;
        }, []);
      }
      function A(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = Z((0, o.Z)(e, "schema.fields") || [], t, r);
        if (!n.length) return { matchingFloor: e.default };
        var a = n
            .map(function (e) {
              return e[0];
            })
            .join("-"),
          c = (0, o.Z)(e, "matchingInputs.".concat(a));
        if (c) return j({}, c);
        var u = B(n, (0, o.Z)(e, "schema.delimiter") || "|"),
          l = (0, m.sE)(u, function (t) {
            return e.values.hasOwnProperty(t);
          }),
          s = {
            floorMin: e.floorMin || 0,
            floorRuleValue: isNaN(e.values[l]) ? e.default : e.values[l],
            matchingData: u[0],
            matchingRule: l,
          };
        return (
          (s.matchingFloor = Math.max(s.floorMin, s.floorRuleValue)),
          (0, i.Z)(e, "matchingInputs.".concat(a), j({}, s)),
          s
        );
      }
      function B(e, t) {
        return e
          .reduce(function (e, r) {
            var n = [];
            return (
              e.map(function (e) {
                r.map(function (r) {
                  n.push(e + t + r);
                });
              }),
              n
            );
          })
          .sort(function (e, t) {
            return e.split("*").length - t.split("*").length;
          });
      }
      function M(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = h.S.get(e, "bidCpmAdjustment");
        return n
          ? parseFloat(n(t, j(j({}, r), {}, { cpm: t })))
          : parseFloat(t);
      }
      function V(e, t) {
        var r = Math.pow(10, 10);
        return (((e * r) / (t * r)) * (e * r)) / r;
      }
      var z = {
        banner: function (e) {
          return (0, o.Z)(e, "mediaTypes.banner.sizes") || [];
        },
        video: function (e) {
          return (0, o.Z)(e, "mediaTypes.video.playerSize") || [];
        },
        native: function (e) {
          return (0, o.Z)(e, "mediaTypes.native.image.sizes")
            ? [(0, o.Z)(e, "mediaTypes.native.image.sizes")]
            : [];
        },
      };
      function W(e, t) {
        var r = Object.keys(e.mediaTypes || {});
        return (
          "*" === t.mediaType && 1 === r.length && (t.mediaType = r[0]),
          "*" === t.size &&
            -1 !== r.indexOf(t.mediaType) &&
            z[t.mediaType] &&
            1 === z[t.mediaType](e).length &&
            (t.size = z[t.mediaType](e)[0]),
          t
        );
      }
      function N() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { currency: "USD", mediaType: "*", size: "*" },
          t = this,
          r = U[t.auctionId];
        if (!r || r.skipped) return {};
        e = W(t, e);
        var o = A(r.data, j({}, t), { mediaType: e.mediaType, size: e.size }),
          i = e.currency || r.data.currency;
        if (o.matchingFloor && i !== r.data.currency)
          try {
            o.matchingFloor = (0, a.R)().convertCurrency(
              o.matchingFloor,
              r.data.currency,
              i
            );
          } catch (e) {
            (0, n.logWarn)(
              ""
                .concat(
                  k,
                  ": Unable to get currency conversion for getFloor for bidder "
                )
                .concat(
                  t.bidder,
                  ". You must have currency module enabled with defaultRates in your currency config"
                )
            ),
              (i = r.data.currency);
          }
        if (r.enforcement.bidAdjustment && o.matchingFloor) {
          var c = M(t.bidder, o.matchingFloor);
          o.matchingFloor = c ? V(o.matchingFloor, c) : o.matchingFloor;
        }
        return o.matchingFloor
          ? { floor: I(o.matchingFloor, 4), currency: i }
          : {};
      }
      function q(e, t) {
        var r = (0, n.deepClone)(e);
        return (
          (r.schema.delimiter = e.schema.delimiter || "|"),
          (r.values = (function (e, t) {
            var r = e.schema.fields,
              n = e.schema.delimiter,
              o =
                t && -1 === r.indexOf("adUnitCode") && r.unshift("adUnitCode");
            return Object.keys(e.values).reduce(function (r, i) {
              return (
                (r[(o ? "".concat(t).concat(n).concat(i) : i).toLowerCase()] =
                  e.values[i]),
                r
              );
            }, {});
          })(r, t)),
          (r.currency = r.currency || "USD"),
          r
        );
      }
      function G(e) {
        e.hasExited ||
          ((E = E.filter(function (t) {
            return t.timer !== e.timer;
          })),
          (e.reqBidsConfigObj.auctionId =
            e.reqBidsConfigObj.auctionId || (0, n.generateUUID)()),
          (U[e.reqBidsConfigObj.auctionId] = (function (e, t) {
            var r = (0, n.deepClone)(D);
            if (2 === (0, o.Z)(r, "data.floorsSchemaVersion")) {
              var i = r.data,
                a = i.modelGroups,
                c = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    o = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                      return o;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                      (r = i[n]),
                        t.indexOf(r) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (o[r] = e[r]));
                  }
                  return o;
                })(i, y);
              r.data = b(
                c,
                (function (e, t) {
                  for (
                    var r = Math.floor(Math.random() * t + 1), n = 0;
                    n < e.length;
                    n++
                  )
                    if ((r -= e[n].modelWeight) <= 0) return e[n];
                })(a, c.modelWeightSum)
              );
            }
            var u = 0 === Object.keys((0, o.Z)(r, "data.values") || {}).length;
            if (
              ((r.data = u
                ? (function (e) {
                    return e.reduce(function (e, t) {
                      if (K(t.floors))
                        if (e.values) {
                          var r = q(t.floors, t.code).values;
                          b(e.values, r);
                        } else (e = q(t.floors, t.code)).location = "adUnit";
                      return e;
                    }, {});
                  })(e)
                : q(r.data)),
              0 === Object.keys((0, o.Z)(r, "data.values") || {}).length)
            )
              r.skipped = !0;
            else {
              var l = (0, n.getParameterByName)("pbjs_skipRate") || r.skipRate,
                s = 100 * Math.random() < parseFloat(l);
              r.skipped = s;
            }
            return (
              r.hasOwnProperty("floorMin") && (r.data.floorMin = r.floorMin),
              (function (e, t, r) {
                e.forEach(function (e) {
                  e.bids.forEach(function (e) {
                    t.skipped ? delete e.getFloor : (e.getFloor = N),
                      (e.auctionId = r),
                      (e.floorData = {
                        skipped: t.skipped,
                        skipRate: t.skipRate,
                        floorMin: t.floorMin,
                        modelVersion: (0, o.Z)(t, "data.modelVersion"),
                        modelWeight: (0, o.Z)(t, "data.modelWeight"),
                        modelTimestamp: (0, o.Z)(t, "data.modelTimestamp"),
                        location: (0, o.Z)(t, "data.location", "noData"),
                        floorProvider: t.floorProvider,
                        fetchStatus: D.fetchStatus,
                      });
                  });
                });
              })(e, r, t),
              r
            );
          })(
            e.reqBidsConfigObj.adUnits || (0, a.R)().adUnits,
            e.reqBidsConfigObj.auctionId
          )),
          e.nextFn.apply(e.context, [e.reqBidsConfigObj]),
          (e.hasExited = !0));
      }
      function _(e) {
        return (
          (t = (0, o.Z)(e, "schema.fields")),
          !!(
            (Array.isArray(t) &&
              t.length > 0 &&
              t.every(function (e) {
                return -1 !== F.indexOf(e);
              })) ||
            ((0, n.logError)(
              "".concat(k, ": Fields recieved do not match allowed fields")
            ),
            0)
          ) &&
            ((r = e),
            (i = e.schema.fields.length),
            (a = e.schema.delimiter || "|"),
            "object" === v(r.values) &&
              ((r.values = Object.keys(r.values).reduce(function (e, t) {
                return (
                  (function (e, t, r, n) {
                    return (
                      "string" == typeof e &&
                      e.split(n).length === r &&
                      "number" == typeof t
                    );
                  })(t, r.values[t], i, a) && (e[t] = r.values[t]),
                  e
                );
              }, {})),
              Object.keys(r.values).length > 0))
        );
        var t, r, i, a;
      }
      var J = {
        1: function (e) {
          return _(e);
        },
        2: function (e) {
          return (
            !(!Array.isArray(e.modelGroups) || 0 === e.modelGroups.length) &&
            ((e.modelWeightSum = 0),
            e.modelGroups.every(function (t) {
              return !(
                "number" != typeof t.modelWeight ||
                !_(t) ||
                ((e.modelWeightSum += t.modelWeight), 0)
              );
            }))
          );
        },
      };
      function K(e) {
        return (
          "object" === v(e) &&
          ((e.floorsSchemaVersion = e.floorsSchemaVersion || 1),
          "function" != typeof J[e.floorsSchemaVersion]
            ? ((0, n.logError)(
                "".concat(k, ": Unknown floorsSchemaVersion: "),
                e.floorsSchemaVersion
              ),
              !1)
            : J[e.floorsSchemaVersion](e))
        );
      }
      function L(e, t) {
        if (e && "object" === v(e) && K(e))
          return (
            (0, n.logInfo)(
              ""
                .concat(k, ": A ")
                .concat(t, " set the auction floor data set to "),
              e
            ),
            j(j({}, e), {}, { location: t })
          );
        (0, n.logError)(
          "".concat(k, ": The floors data did not contain correct values"),
          e
        );
      }
      function H(e, t) {
        var r = {
          reqBidsConfigObj: t,
          context: this,
          nextFn: e,
          haveExited: !1,
          timer: null,
        };
        D.auctionDelay > 0 && R
          ? ((r.timer = setTimeout(function () {
              (0, n.logWarn)(
                "".concat(
                  k,
                  ": Fetch attempt did not return in time for auction"
                )
              ),
                (D.fetchStatus = "timeout"),
                G(r);
            }, D.auctionDelay)),
            E.push(r))
          : G(r);
      }
      function Y() {
        E.forEach(function (e) {
          clearTimeout(e.timer), G(e);
        }),
          (E = []);
      }
      function Q(e) {
        var t;
        (R = !1), (D.fetchStatus = "success");
        try {
          t = JSON.parse(e);
        } catch (r) {
          t = e;
        }
        var r = L(t, "fetch");
        r &&
          ((D.data = r),
          (D.skipRate = (0, n.isNumber)(r.skipRate) ? r.skipRate : D.skipRate),
          (D.floorProvider = r.floorProvider || D.floorProvider)),
          Y();
      }
      function X(e) {
        (R = !1),
          (D.fetchStatus = "error"),
          (0, n.logError)("".concat(k, ": Fetch errored with: "), e),
          Y();
      }
      function $(e, t, r) {
        var i = U[r.auctionId];
        if (!i || !r || i.skipped) return e.call(this, t, r);
        var c,
          u = g.K.index.getBidRequest(r),
          l = A(i.data, u, j(j({}, r), {}, { size: [r.width, r.height] }));
        if (!l.matchingFloor)
          return (
            (0, n.logWarn)(
              "".concat(
                k,
                ": unable to determine a matching price floor for bidResponse"
              ),
              r
            ),
            e.call(this, t, r)
          );
        var d = i.data.currency.toUpperCase(),
          m = r.currency || "USD";
        if (d === m.toUpperCase()) c = r.cpm;
        else if (r.originalCurrency && d === r.originalCurrency.toUpperCase())
          c = r.originalCpm;
        else
          try {
            c = (0, a.R)().convertCurrency(r.cpm, m.toUpperCase(), d);
          } catch (o) {
            return (
              (0, n.logError)(
                ""
                  .concat(
                    k,
                    ": Unable do get currency conversion for bidResponse to Floor Currency. Do you have Currency module enabled? "
                  )
                  .concat(r)
              ),
              e.call(this, t, r)
            );
          }
        if (
          ((c = M(r.bidderCode, c, r)),
          "pubmaticServer" == r.bidderCode || "s2s" == r.source)
        )
          return e.call(this, t, r);
        if (
          ((function (e, t, r, n) {
            (r.floorData = {
              floorValue: t.matchingFloor,
              floorRule: t.matchingRule,
              floorRuleValue: t.floorRuleValue,
              floorCurrency: e.data.currency,
              cpmAfterAdjustments: n,
              enforcements: j({}, e.enforcement),
              matchedFields: {},
            }),
              e.data.schema.fields.forEach(function (n, o) {
                var i = t.matchingData.split(e.data.schema.delimiter)[o];
                r.floorData.matchedFields[n] = i;
              });
          })(i, l, r, c),
          (function (e, t, r) {
            var n = !1 !== (0, o.Z)(e, "enforcement.enforceJS"),
              i = !0 === (0, o.Z)(e, "enforcement.floorDeals") || !r.dealId,
              a = r.floorData.cpmAfterAdjustments < t.matchingFloor;
            return n && a && i;
          })(i, l, r))
        ) {
          var p = (0, f.m)(s.STATUS.NO_BID, r.getIdentifiers());
          return (
            b(
              p,
              (0, n.pick)(r, [
                "floorData",
                "width",
                "height",
                "mediaType",
                "currency",
                "originalCpm",
                "originalCurrency",
                "getCpmInNewCurrency",
              ])
            ),
            (p.status = s.BID_STATUS.BID_REJECTED),
            (p.cpm = 0),
            (0, n.logWarn)(
              ""
                .concat(k, ": ")
                .concat(p.bidderCode, "'s Bid Response for ")
                .concat(t, " was rejected due to floor not met"),
              r
            ),
            e.call(this, t, p)
          );
        }
        return e.call(this, t, r);
      }
      c.vc.getConfig("floors", function (e) {
        return (function (e) {
          var t;
          (D = (0, n.pick)(e, [
            "floorMin",
            "enabled",
            function (e) {
              return !1 !== e;
            },
            "auctionDelay",
            function (e) {
              return e || 0;
            },
            "floorProvider",
            function (t) {
              return (0, o.Z)(e, "data.floorProvider", t);
            },
            "endpoint",
            function (e) {
              return e || {};
            },
            "skipRate",
            function () {
              return isNaN((0, o.Z)(e, "data.skipRate"))
                ? e.skipRate || 0
                : e.data.skipRate;
            },
            "enforcement",
            function (e) {
              return (0, n.pick)(e || {}, [
                "enforceJS",
                function (e) {
                  return !1 !== e;
                },
                "enforcePBS",
                function (e) {
                  return !0 === e;
                },
                "floorDeals",
                function (e) {
                  return !0 === e;
                },
                "bidAdjustment",
                function (e) {
                  return !1 !== e;
                },
              ]);
            },
            "additionalSchemaFields",
            function (e) {
              return "object" === v(e) && Object.keys(e).length > 0
                ? ((t = e),
                  void Object.keys(t).forEach(function (e) {
                    -1 === F.indexOf(e) &&
                      "function" == typeof t[e] &&
                      (F.push(e), (x[e] = t[e]));
                  }))
                : void 0;
              var t;
            },
            "data",
            function (e) {
              return (e && L(e, "setConfig")) || D.data;
            },
          ])).enabled
            ? ((t = D.endpoint).url && !R
                ? "GET" !== (t.method || "GET")
                  ? (0, n.logError)(
                      "".concat(
                        k,
                        ": 'GET' is the only request method supported at this time!"
                      )
                    )
                  : (T(t.url, { success: Q, error: X }, null, {
                      method: "GET",
                    }),
                    (R = !0))
                : R &&
                  (0, n.logWarn)(
                    "".concat(k, ": A fetch is already occuring. Skipping.")
                  ),
              w ||
                (l.on(s.EVENTS.AUCTION_END, function (e) {
                  setTimeout(function () {
                    return delete U[e.auctionId];
                  }, 3e3);
                }),
                (0, a.R)().requestBids.before(H, 50),
                (0, d.v5)("addBidResponse").before(
                  $,
                  (0, n.debugTurnedOn)() ? 4 : 50
                ),
                (w = !0)))
            : ((0, n.logInfo)("".concat(k, ": Turning off module")),
              (D = {}),
              (U = {}),
              (0, d.v5)("addBidResponse").getHooks({ hook: $ }).remove(),
              (0, a.R)().requestBids.getHooks({ hook: H }).remove(),
              (w = !1));
        })(e.floors);
      }),
        window.ihowpbjs.installedModules.push("priceFloors");
    },
  },
  function (e) {
    e((e.s = 295));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [934],
  {
    315: function (e, t, o) {
      var n = o(853),
        a = o(962),
        r = o(319),
        i = o(644);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      var u = (0, o(849).df)(),
        s = "_pubcid",
        d = "_pubcid_optout",
        p = 525600,
        b = "PublisherCommonId",
        f = "_exp",
        g = "cookie",
        v = "html5",
        y = {
          enabled: !0,
          interval: p,
          typeEnabled: v,
          create: !0,
          extend: !0,
          pixelUrl: "",
        };
      function m(e, t) {
        var o;
        return (
          t || (t = y.typeEnabled),
          t === g
            ? (o = u.getCookie(e))
            : t === v &&
              (o = (function (e) {
                var t = null;
                try {
                  var o = u.getDataFromLocalStorage(e + f);
                  o
                    ? new Date(o).getTime() - Date.now() > 0
                      ? (t = u.getDataFromLocalStorage(e))
                      : (function (e) {
                          try {
                            u.removeDataFromLocalStorage(e + f),
                              u.removeDataFromLocalStorage(e);
                          } catch (e) {
                            (0, n.logMessage)(e);
                          }
                        })(e)
                    : (t = u.getDataFromLocalStorage(e));
                } catch (e) {
                  (0, n.logMessage)(e);
                }
                return t;
              })(e)),
          "undefined" === o || "null" === o ? null : o
        );
      }
      function h(e, t, o) {
        e &&
          t &&
          (y.typeEnabled === g
            ? (function (e, t, o, n) {
                var a = new Date();
                a.setTime(a.getTime() + 1e3 * o * 60),
                  u.setCookie(e, t, a.toGMTString(), "Lax");
              })(e, t, o)
            : y.typeEnabled === v &&
              (function (e, t, o) {
                try {
                  if (void 0 !== o && null != o) {
                    var a = new Date(Date.now() + 60 * o * 1e3).toUTCString();
                    u.setDataInLocalStorage(e + f, a);
                  }
                  u.setDataInLocalStorage(e, t);
                } catch (e) {
                  (0, n.logMessage)(e);
                }
              })(e, t, o));
      }
      function E(e, t) {
        if (!e) return !1;
        t = t || "";
        var o = (0, n.parseUrl)(e);
        o.search.id = encodeURIComponent("pubcid:" + t);
        var a = (0, n.buildUrl)(o);
        return (
          r.on(i.EVENTS.AUCTION_END, function e() {
            r.off(i.EVENTS.AUCTION_END, e), (0, n.triggerPixel)(a);
          }),
          !0
        );
      }
      a.vc.getConfig("pubcid", function (e) {
        return (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.enable,
            o = e.expInterval,
            n = e.type,
            a = void 0 === n ? "html5,cookie" : n,
            r = e.create,
            i = e.extend,
            l = e.pixelUrl;
          void 0 !== t && (y.enabled = t),
            void 0 !== o && (y.interval = parseInt(o, 10)),
            isNaN(y.interval) && (y.interval = p),
            void 0 !== r && (y.create = r),
            void 0 !== i && (y.extend = i),
            void 0 !== l && (y.pixelUrl = l),
            (y.typeEnabled = null);
          for (var c = a.split(","), s = 0; s < c.length; ++s) {
            var d = c[s].trim();
            if (d === g) {
              if (u.cookiesAreEnabled()) {
                y.typeEnabled = g;
                break;
              }
            } else if (d === v && u.hasLocalStorage()) {
              y.typeEnabled = v;
              break;
            }
          }
        })(e.pubcid);
      }),
        (u.cookiesAreEnabled() && m(d, g)) ||
          (u.hasLocalStorage() && m(d, v)) ||
          ihowpbjs.requestBids.before(function (e, t) {
            var o = t.adUnits || ihowpbjs.adUnits,
              a = null;
            return y.enabled && y.typeEnabled
              ? ("object" === c(window[b])
                  ? ((a = window[b].getId()),
                    (0, n.logMessage)(b + ": pubcid = " + a))
                  : ((a = m(s))
                      ? y.extend && (E(y.pixelUrl, a) || h(s, a, y.interval))
                      : (y.create &&
                          (y.typeEnabled === v && (a = m(s, g)),
                          a || (a = (0, n.generateUUID)()),
                          h(s, a, y.interval),
                          (a = m(s))),
                        E(y.pixelUrl, a)),
                    (0, n.logMessage)("pbjs: pubcid = " + a)),
                o &&
                  a &&
                  o.forEach(function (e) {
                    e.bids &&
                      (0, n.isArray)(e.bids) &&
                      e.bids.forEach(function (e) {
                        l(e, { crumbs: { pubcid: a } });
                      });
                  }),
                e.call(this, t))
              : e.call(this, t);
          }),
        window.ihowpbjs.installedModules.push("pubCommonId");
    },
  },
  function (e) {
    e((e.s = 315));
  },
]);
("use strict");
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [126],
  {
    139: function (e, r, a) {
      var t = a(853),
        i = a(265),
        n = a(806),
        s = a(125),
        o = a(3),
        d = a(962),
        p = a(877);
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var a = arguments[r];
                for (var t in a)
                  Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              }
              return e;
            }),
          c.apply(this, arguments)
        );
      }
      function l(e, r) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function u(e, r, a) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = a),
          e
        );
      }
      function m(e) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          m(e)
        );
      }
      var g = "PubMatic: ",
        h = "USD",
        f = ["groupm"],
        b = void 0,
        y = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
        v = {
          kadpageurl: "",
          gender: "",
          yob: "",
          lat: "",
          lon: "",
          wiid: "",
          profId: "",
          verId: "",
        },
        w = "number",
        I = "array",
        E = {
          mimes: I,
          minduration: w,
          maxduration: w,
          startdelay: w,
          playbackmethod: I,
          api: I,
          protocols: I,
          w: w,
          h: w,
          battr: I,
          linearity: w,
          placement: w,
          minbitrate: w,
          maxbitrate: w,
          skip: w,
        },
        P = {
          TITLE: { ID: 1, KEY: "title", TYPE: 0 },
          IMAGE: { ID: 2, KEY: "image", TYPE: 0 },
          ICON: { ID: 3, KEY: "icon", TYPE: 0 },
          SPONSOREDBY: { ID: 4, KEY: "sponsoredBy", TYPE: 1 },
          BODY: { ID: 5, KEY: "body", TYPE: 2 },
          CLICKURL: { ID: 6, KEY: "clickUrl", TYPE: 0 },
          VIDEO: { ID: 7, KEY: "video", TYPE: 0 },
          EXT: { ID: 8, KEY: "ext", TYPE: 0 },
          DATA: { ID: 9, KEY: "data", TYPE: 0 },
          LOGO: { ID: 10, KEY: "logo", TYPE: 0 },
          SPONSORED: { ID: 11, KEY: "sponsored", TYPE: 1 },
          DESC: { ID: 12, KEY: "data", TYPE: 2 },
          RATING: { ID: 13, KEY: "rating", TYPE: 3 },
          LIKES: { ID: 14, KEY: "likes", TYPE: 4 },
          DOWNLOADS: { ID: 15, KEY: "downloads", TYPE: 5 },
          PRICE: { ID: 16, KEY: "price", TYPE: 6 },
          SALEPRICE: { ID: 17, KEY: "saleprice", TYPE: 7 },
          PHONE: { ID: 18, KEY: "phone", TYPE: 8 },
          ADDRESS: { ID: 19, KEY: "address", TYPE: 9 },
          DESC2: { ID: 20, KEY: "desc2", TYPE: 10 },
          DISPLAYURL: { ID: 21, KEY: "displayurl", TYPE: 11 },
          CTA: { ID: 22, KEY: "cta", TYPE: 12 },
        },
        T = { 0: o.Mk, 1: o.pX, 2: o.B5 },
        O = [
          { id: P.SPONSOREDBY.ID, required: !0, data: { type: 1 } },
          { id: P.TITLE.ID, required: !0 },
          { id: P.IMAGE.ID, required: !0 },
        ],
        D = { 1: "PMP", 5: "PREF", 6: "PMPG" },
        S = {
          bootstrapPlayer: function (e) {
            var r = { code: e.adUnitCode };
            if (
              (e.vastXml
                ? (r.vastXml = e.vastXml)
                : e.vastUrl && (r.vastUrl = e.vastUrl),
              e.vastXml || e.vastUrl)
            ) {
              for (
                var a,
                  i = S.getRendererId("pubmatic", e.rendererCode),
                  n = document.getElementById(e.adUnitCode),
                  s = 0;
                s < window.bluebillywig.renderers.length;
                s++
              )
                if (window.bluebillywig.renderers[s]._id === i) {
                  a = window.bluebillywig.renderers[s];
                  break;
                }
              a
                ? a.bootstrap(r, n)
                : (0, t.logWarn)(
                    "".concat(g, ": Couldn't find a renderer with ").concat(i)
                  );
            } else
              (0, t.logWarn)(
                "".concat(g, ": No vastXml or vastUrl on bid, bailing...")
              );
          },
          newRenderer: function (e, r) {
            var a = y.replace("$RENDERER", e),
              i = p.Th.install({ url: a, loaded: !1, adUnitCode: r });
            try {
              i.setRender(S.outstreamRender);
            } catch (e) {
              (0, t.logWarn)(
                "".concat(g, ": Error tying to setRender on renderer"),
                e
              );
            }
            return i;
          },
          outstreamRender: function (e) {
            e.renderer.push(function () {
              S.bootstrapPlayer(e);
            });
          },
          getRendererId: function (e, r) {
            return "".concat(e, "-").concat(r);
          },
        },
        x = 0,
        Y = !1,
        k = {},
        C = {};
      function R(e, r) {
        if (!(0, t.isStr)(r))
          return (
            r &&
              (0, t.logWarn)(
                "PubMatic: Ignoring param key: " +
                  e +
                  ", expects string-value, found " +
                  m(r)
              ),
            b
          );
        switch (e) {
          case "pmzoneid":
            return r
              .split(",")
              .slice(0, 50)
              .map(function (e) {
                return e.trim();
              })
              .join();
          case "kadfloor":
          case "lat":
          case "lon":
            return parseFloat(r) || b;
          case "yob":
            return parseInt(r) || b;
          default:
            return r;
        }
      }
      function A(e, r, a) {
        var i,
          n = "Ignoring param key: " + e + ", expects " + a + ", found " + m(r);
        switch (a) {
          case "boolean":
            i = t.isBoolean;
            break;
          case w:
            i = t.isNumber;
            break;
          case "string":
            i = t.isStr;
            break;
          case I:
            i = t.isArray;
        }
        return i(r) ? r : ((0, t.logWarn)(g + n), b);
      }
      function M(e, r) {
        var a = e.KEY;
        return {
          id: e.ID,
          required: r[a].required ? 1 : 0,
          data: { type: e.TYPE, len: r[a].len, ext: r[a].ext },
        };
      }
      function z(e) {
        var r = { assets: [] };
        for (var a in e) {
          if (e.hasOwnProperty(a)) {
            var i = {};
            if (
              !(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(a))
            )
              switch (a) {
                case P.TITLE.KEY:
                  e[a].len || e[a].length
                    ? (i = {
                        id: P.TITLE.ID,
                        required: e[a].required ? 1 : 0,
                        title: { len: e[a].len || e[a].length, ext: e[a].ext },
                      })
                    : (0, t.logWarn)(
                        "PubMatic: Error: Title Length is required for native ad: " +
                          JSON.stringify(e)
                      );
                  break;
                case P.IMAGE.KEY:
                  i = {
                    id: P.IMAGE.ID,
                    required: e[a].required ? 1 : 0,
                    img: {
                      type: 3,
                      w:
                        e[a].w ||
                        e[a].width ||
                        (e[a].sizes ? e[a].sizes[0] : b),
                      h:
                        e[a].h ||
                        e[a].height ||
                        (e[a].sizes ? e[a].sizes[1] : b),
                      wmin:
                        e[a].wmin ||
                        e[a].minimumWidth ||
                        (e[a].minsizes ? e[a].minsizes[0] : b),
                      hmin:
                        e[a].hmin ||
                        e[a].minimumHeight ||
                        (e[a].minsizes ? e[a].minsizes[1] : b),
                      mimes: e[a].mimes,
                      ext: e[a].ext,
                    },
                  };
                  break;
                case P.ICON.KEY:
                  i = {
                    id: P.ICON.ID,
                    required: e[a].required ? 1 : 0,
                    img: {
                      type: 1,
                      w:
                        e[a].w ||
                        e[a].width ||
                        (e[a].sizes ? e[a].sizes[0] : b),
                      h:
                        e[a].h ||
                        e[a].height ||
                        (e[a].sizes ? e[a].sizes[1] : b),
                      ext: e[a].ext,
                    },
                  };
                  break;
                case P.VIDEO.KEY:
                  i = {
                    id: P.VIDEO.ID,
                    required: e[a].required ? 1 : 0,
                    video: {
                      minduration: e[a].minduration,
                      maxduration: e[a].maxduration,
                      protocols: e[a].protocols,
                      mimes: e[a].mimes,
                      ext: e[a].ext,
                    },
                  };
                  break;
                case P.EXT.KEY:
                  i = { id: P.EXT.ID, required: e[a].required ? 1 : 0 };
                  break;
                case P.LOGO.KEY:
                  i = {
                    id: P.LOGO.ID,
                    required: e[a].required ? 1 : 0,
                    img: {
                      type: 2,
                      w:
                        e[a].w ||
                        e[a].width ||
                        (e[a].sizes ? e[a].sizes[0] : b),
                      h:
                        e[a].h ||
                        e[a].height ||
                        (e[a].sizes ? e[a].sizes[1] : b),
                      ext: e[a].ext,
                    },
                  };
                  break;
                case P.SPONSOREDBY.KEY:
                case P.BODY.KEY:
                case P.RATING.KEY:
                case P.LIKES.KEY:
                case P.DOWNLOADS.KEY:
                case P.PRICE.KEY:
                case P.SALEPRICE.KEY:
                case P.PHONE.KEY:
                case P.ADDRESS.KEY:
                case P.DESC2.KEY:
                case P.DISPLAYURL.KEY:
                case P.CTA.KEY:
                  i = M(C[a], e);
              }
          }
          i && i.id && (r.assets[r.assets.length] = i);
        }
        var n = O.length,
          s = 0;
        return (
          O.forEach(function (e) {
            for (var a = r.assets.length, t = 0; t < a; t++)
              if (e.id == r.assets[t].id) {
                s++;
                break;
              }
          }),
          (Y = n != s),
          r
        );
      }
      function K(e) {
        var r,
          a = e.mediaTypes.banner.sizes,
          i = [];
        if (a !== b && (0, t.isArray)(a)) {
          if (((r = {}), e.params.width || e.params.height))
            (r.w = e.params.width), (r.h = e.params.height);
          else {
            if (0 === a.length)
              return (
                (r = b),
                (0, t.logWarn)(
                  "PubMatic: Error: mediaTypes.banner.size missing for adunit: " +
                    e.params.adUnit +
                    ". Ignoring the banner impression in the adunit."
                ),
                r
              );
            (r.w = parseInt(a[0][0], 10)),
              (r.h = parseInt(a[0][1], 10)),
              (a = a.splice(1, a.length - 1));
          }
          a.length > 0 &&
            ((i = []),
            a.forEach(function (e) {
              e.length > 1 && i.push({ w: e[0], h: e[1] });
            }),
            i.length > 0 && (r.format = i)),
            (r.pos = 0),
            (r.topframe = (0, t.inIframe)() ? 0 : 1);
        } else
          (0, t.logWarn)(
            "PubMatic: Error: mediaTypes.banner.size missing for adunit: " +
              e.params.adUnit +
              ". Ignoring the banner impression in the adunit."
          ),
            (r = b);
        return r;
      }
      function N(e) {
        var r,
          a = (0, t.mergeDeep)((0, i.Z)(e.mediaTypes, "video"), e.params.video);
        if (a !== b) {
          for (var n in ((r = {}),
          (function (e, r) {
            (0, i.Z)(e, "placement") ||
              (0, t.logWarn)("Video.Placement param missing for " + r);
          })(a, e.adUnitCode),
          E))
            a.hasOwnProperty(n) && (r[n] = A(n, a[n], E[n]));
          if (e.mediaTypes.video.playerSize)
            (0, t.isArray)(e.mediaTypes.video.playerSize[0])
              ? ((r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10)),
                (r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)))
              : (0, t.isNumber)(e.mediaTypes.video.playerSize[0]) &&
                ((r.w = parseInt(e.mediaTypes.video.playerSize[0], 10)),
                (r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)));
          else {
            if (!e.mediaTypes.video.w || !e.mediaTypes.video.h)
              return (
                (r = b),
                (0, t.logWarn)(
                  "PubMatic: Error: Video size params(playersize or w&h) missing for adunit: " +
                    e.params.adUnit +
                    " with mediaType set as video. Ignoring video impression in the adunit."
                ),
                r
              );
            (r.w = parseInt(e.mediaTypes.video.w, 10)),
              (r.h = parseInt(e.mediaTypes.video.h, 10));
          }
        } else
          (r = b),
            (0, t.logWarn)(
              "PubMatic: Error: Video config params missing for adunit: " +
                e.params.adUnit +
                " with mediaType set as video. Ignoring video impression in the adunit."
            );
        return r;
      }
      function U(e, r, a) {
        var t = (r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting) || void 0,
          i = "";
        if (void 0 !== t && "" !== t && t.hasOwnProperty("segments")) {
          var n,
            s = t.segments.length;
          i += "jw-id=" + t.content.id;
          for (var o = 0; o < s; o++) i += "|jw-" + t.segments[o] + "=1";
          a
            ? void 0 === e.dctr || 0 == e.dctr.length
              ? (e.dctr = i)
              : (e.dctr += "|" + i)
            : (n = e.ext) && void 0 === n.key_val
            ? (n.key_val = i)
            : (n.key_val += "|" + i);
        }
      }
      function j(e, r) {
        var a = null,
          t = (0, i.Z)(e, "0.userId.flocId");
        return (
          t &&
            t.id &&
            (a =
              2 === r
                ? {
                    id: "FLOC",
                    name: "FLOC",
                    ext: { ver: t.version },
                    segment: [
                      { id: t.id, name: "chrome.com", value: t.id.toString() },
                    ],
                  }
                : {
                    source: "chrome.com",
                    uids: [{ atype: 1, id: t.id, ext: { ver: t.version } }],
                  }),
          a
        );
      }
      function q(e) {
        return !0 === (0, t.isArray)(e) && e.length > 0;
      }
      (0, t._each)(P, function (e) {
        k[e.ID] = e.KEY;
      }),
        (0, t._each)(P, function (e) {
          C[e.KEY] = e;
        });
      var L = {
        code: "pubmatic",
        gvlid: 76,
        supportedMediaTypes: [o.Mk, o.pX, o.B5],
        aliases: [{ code: "groupm", gvlid: 98 }],
        isBidRequestValid: function (e) {
          if (e && e.params) {
            if (!(0, t.isStr)(e.params.publisherId))
              return (
                (0, t.logWarn)(
                  "PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " +
                    JSON.stringify(e)
                ),
                !1
              );
            if (
              e.hasOwnProperty("mediaTypes") &&
              e.mediaTypes.hasOwnProperty(o.pX)
            ) {
              var r = (0, i.Z)(e.mediaTypes, "video.mimes"),
                a = (0, i.Z)(e, "params.video.mimes");
              if (!1 === q(r) && !1 === q(a))
                return (
                  (0, t.logWarn)(
                    "PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" +
                      JSON.stringify(e)
                  ),
                  !1
                );
              if (!e.mediaTypes[o.pX].hasOwnProperty("context"))
                return (
                  (0, t.logError)(
                    "".concat(
                      g,
                      ": no context specified in bid. Rejecting bid: "
                    ),
                    e
                  ),
                  !1
                );
              if (
                "outstream" === e.mediaTypes[o.pX].context &&
                !(0, t.isStr)(e.params.outstreamAU) &&
                !e.hasOwnProperty("renderer") &&
                !e.mediaTypes[o.pX].hasOwnProperty("renderer")
              )
                return e.mediaTypes.hasOwnProperty(o.Mk) ||
                  e.mediaTypes.hasOwnProperty(o.B5)
                  ? (delete e.mediaTypes[o.pX],
                    (0, t.logWarn)(
                      "".concat(
                        g,
                        ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '
                      ),
                      e
                    ),
                    !0)
                  : ((0, t.logError)(
                      "".concat(
                        g,
                        ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '
                      ),
                      e
                    ),
                    !1);
            }
            return !0;
          }
          return !1;
        },
        buildRequests: function (e, r) {
          if (r && f.includes(r.bidderCode))
            (0, t.logInfo)(
              "For all publishers using " +
                r.bidderCode +
                " bidder, the PubMatic bidder will also be enabled so PubMatic server will respond back with the bids that needs to be submitted for PubMatic and " +
                r.bidderCode +
                " in the network call sent by PubMatic bidder. Hence we do not want to create a network call for " +
                r.bidderCode +
                ". This way we are trying to save a network call from browser."
            );
          else {
            var a;
            r && r.refererInfo && (a = r.refererInfo);
            var s,
              p = (function (e) {
                return {
                  pageURL: e && e.referer ? e.referer : window.location.href,
                  refURL: window.document.referrer,
                };
              })(a),
              y = (function (e) {
                return {
                  id: "" + new Date().getTime(),
                  at: 1,
                  cur: [h],
                  imp: [],
                  site: { page: e.pageURL, ref: e.refURL, publisher: {} },
                  device: {
                    ua: navigator.userAgent,
                    js: 1,
                    dnt:
                      "yes" == navigator.doNotTrack ||
                      "1" == navigator.doNotTrack ||
                      "1" == navigator.msDoNotTrack
                        ? 1
                        : 0,
                    h: screen.height,
                    w: screen.width,
                    language: navigator.language,
                  },
                  user: {},
                  ext: {},
                };
              })(p),
              w = "",
              I = [],
              E = [];
            if (
              (e.forEach(function (e) {
                if (
                  (((s = (0, t.deepClone)(e)).params.adSlot =
                    s.params.adSlot || ""),
                  (function (e) {
                    var r;
                    (e.params.adUnit = ""),
                      (e.params.adUnitIndex = "0"),
                      (e.params.width = 0),
                      (e.params.height = 0),
                      (e.params.adSlot =
                        ((r = e.params.adSlot),
                        (0, t.isStr)(r)
                          ? r.replace(/^\s+/g, "").replace(/\s+$/g, "")
                          : (r &&
                              (0, t.logWarn)(
                                "pubmatic: adSlot must be a string. Ignoring adSlot"
                              ),
                            "")));
                    var a = e.params.adSlot,
                      i = a.split(":");
                    if (
                      ((a = i[0]),
                      2 == i.length && (e.params.adUnitIndex = i[1]),
                      (i = a.split("@")),
                      (e.params.adUnit = i[0]),
                      i.length > 1)
                    ) {
                      if (
                        2 !=
                        (i =
                          2 == i.length
                            ? i[1].split("x")
                            : 3 == i.length
                            ? i[2].split("x")
                            : []).length
                      )
                        return void (0, t.logWarn)(
                          "PubMatic: AdSlot Error: adSlot not in required format"
                        );
                      (e.params.width = parseInt(i[0], 10)),
                        (e.params.height = parseInt(i[1], 10));
                    }
                    if (
                      e.hasOwnProperty("mediaTypes") &&
                      e.mediaTypes.hasOwnProperty(o.Mk) &&
                      e.mediaTypes.banner.hasOwnProperty("sizes")
                    ) {
                      for (
                        var n = 0, s = [];
                        n < e.mediaTypes.banner.sizes.length;
                        n++
                      )
                        2 === e.mediaTypes.banner.sizes[n].length &&
                          s.push(e.mediaTypes.banner.sizes[n]);
                      (e.mediaTypes.banner.sizes = s),
                        e.mediaTypes.banner.sizes.length >= 1 &&
                          (e.params.width || e.params.height
                            ? e.params.width ==
                                e.mediaTypes.banner.sizes[0][0] &&
                              e.params.height ==
                                e.mediaTypes.banner.sizes[0][1] &&
                              (e.mediaTypes.banner.sizes =
                                e.mediaTypes.banner.sizes.splice(
                                  1,
                                  e.mediaTypes.banner.sizes.length - 1
                                ))
                            : ((e.params.width =
                                e.mediaTypes.banner.sizes[0][0]),
                              (e.params.height =
                                e.mediaTypes.banner.sizes[0][1]),
                              (e.mediaTypes.banner.sizes =
                                e.mediaTypes.banner.sizes.splice(
                                  1,
                                  e.mediaTypes.banner.sizes.length - 1
                                ))));
                    }
                  })(s),
                  (s.mediaTypes && s.mediaTypes.hasOwnProperty("video")) ||
                    s.params.hasOwnProperty("video"))
                );
                else if (
                  !(
                    (s.hasOwnProperty("mediaTypes") &&
                      s.mediaTypes.hasOwnProperty(o.B5)) ||
                    0 !== s.params.width ||
                    0 !== s.params.height
                  )
                )
                  return void (0, t.logWarn)(
                    "PubMatic: Skipping the non-standard adslot: ",
                    s.params.adSlot,
                    JSON.stringify(s)
                  );
                (p.pubId = p.pubId || s.params.publisherId),
                  ((p = (function (e, r) {
                    var a, i, n;
                    for (a in (r.kadpageurl || (r.kadpageurl = r.pageURL), v))
                      v.hasOwnProperty(a) &&
                        (i = e[a]) &&
                        ("object" === m((n = v[a])) && (i = n.f(i, r)),
                        (0, t.isStr)(i)
                          ? (r[a] = i)
                          : (0, t.logWarn)(
                              "PubMatic: Ignoring param : " +
                                a +
                                " with value : " +
                                v[a] +
                                ", expects string-value, found " +
                                m(i)
                            ));
                    return r;
                  })(s.params, p)).transactionId = s.transactionId),
                  "" === w
                    ? (w = s.params.currency || b)
                    : s.params.hasOwnProperty("currency") &&
                      w !== s.params.currency &&
                      (0, t.logWarn)(
                        "PubMatic: Currency specifier ignored. Only one currency permitted."
                      ),
                  (s.params.currency = w),
                  s.params.hasOwnProperty("dctr") &&
                    (0, t.isStr)(s.params.dctr) &&
                    I.push(s.params.dctr),
                  s.params.hasOwnProperty("bcat") &&
                    (0, t.isArray)(s.params.bcat) &&
                    (E = E.concat(s.params.bcat));
                var r = (function (e, r) {
                  var a,
                    s,
                    p = {},
                    c = {},
                    f = e.hasOwnProperty("sizes") ? e.sizes : [],
                    y = "",
                    v = [];
                  if (
                    ((function (e, r) {
                      r.params.deals &&
                        ((0, t.isArray)(r.params.deals)
                          ? r.params.deals.forEach(function (r) {
                              (0, t.isStr)(r) && r.length > 3
                                ? (e.pmp ||
                                    (e.pmp = { private_auction: 0, deals: [] }),
                                  e.pmp.deals.push({ id: r }))
                                : (0, t.logWarn)(
                                    "PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " +
                                      r
                                  );
                            })
                          : (0, t.logWarn)(
                              "PubMatic: Error: bid.params.deals should be an array of strings."
                            ));
                    })(
                      (p = {
                        id: e.bidId,
                        tagid: e.params.hashedKey || e.params.adUnit || void 0,
                        bidfloor: R("kadfloor", e.params.kadfloor),
                        secure: 1,
                        ext: { pmZoneId: R("pmzoneid", e.params.pmzoneid) },
                        bidfloorcur: e.params.currency
                          ? R("currency", e.params.currency)
                          : h,
                      }),
                      e
                    ),
                    (function (e, r) {
                      var a,
                        i = "";
                      if (r.params.dctr)
                        if (
                          ((i = r.params.dctr), (0, t.isStr)(i) && i.length > 0)
                        ) {
                          var n = i.split("|");
                          (i = ""),
                            n.forEach(function (e) {
                              i += e.length > 0 ? e.trim() + "|" : "";
                            }),
                            (a = i.length),
                            "|" === i.substring(a, a - 1) &&
                              (i = i.substring(0, a - 1)),
                            (e.ext.key_val = i.trim());
                        } else
                          (0, t.logWarn)(
                            "PubMatic: Ignoring param : dctr with value : " +
                              i +
                              ", expects string-value, found empty or non-string value"
                          );
                    })(p, e),
                    U(p, e),
                    e.hasOwnProperty("mediaTypes"))
                  )
                    for (y in e.mediaTypes)
                      switch (y) {
                        case o.Mk:
                          (a = K(e)) !== b && (p.banner = a);
                          break;
                        case o.B5:
                          (c.request = JSON.stringify(z(e.nativeParams))),
                            Y
                              ? (0, t.logWarn)(
                                  "PubMatic: Error: Error in Native adunit " +
                                    e.params.adUnit +
                                    ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details."
                                )
                              : (p.native = c);
                          break;
                        case o.pX:
                          (s = N(e)) !== b && (p.video = s);
                      }
                  else
                    (a = {
                      pos: 0,
                      w: e.params.width,
                      h: e.params.height,
                      topframe: (0, t.inIframe)() ? 0 : 1,
                    }),
                      (0, t.isArray)(f) &&
                        f.length > 1 &&
                        ((f = f.splice(1, f.length - 1)).forEach(function (e) {
                          (0, t.isArray)(e) &&
                            2 == e.length &&
                            v.push({ w: e[0], h: e[1] });
                        }),
                        (a.format = v)),
                      (p.banner = a);
                  return (
                    (function (e, r) {
                      var a = (function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                          var a = null != arguments[r] ? arguments[r] : {};
                          r % 2
                            ? l(Object(a), !0).forEach(function (r) {
                                u(e, r, a[r]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(a)
                              )
                            : l(Object(a)).forEach(function (r) {
                                Object.defineProperty(
                                  e,
                                  r,
                                  Object.getOwnPropertyDescriptor(a, r)
                                );
                              });
                        }
                        return e;
                      })({}, (0, i.Z)(r, "ortb2Imp.ext.data"));
                      Object.keys(a).forEach(function (r) {
                        "pbadslot" === r
                          ? "string" == typeof a[r] &&
                            a[r] &&
                            (0, n.Z)(e, "ext.data.pbadslot", a[r])
                          : "adserver" === r
                          ? ["name", "adslot"].forEach(function (r) {
                              var t = (0, i.Z)(a, "adserver.".concat(r));
                              "string" == typeof t &&
                                t &&
                                ((0, n.Z)(
                                  e,
                                  "ext.data.adserver.".concat(r.toLowerCase()),
                                  t
                                ),
                                "adslot" === r &&
                                  (0, n.Z)(e, "ext.dfp_ad_unit_code", t));
                            })
                          : (0, n.Z)(e, "ext.data.".concat(r), a[r]);
                      });
                    })(p, e),
                    (function (e, r) {
                      var a = -1;
                      "function" != typeof r.getFloor ||
                        d.vc.getConfig("pubmatic.disableFloors") ||
                        [o.Mk, o.pX, o.B5].forEach(function (i) {
                          if (e.hasOwnProperty(i)) {
                            var n = [];
                            "banner" === i &&
                              (e[i].w && e[i].h && n.push([e[i].w, e[i].h]),
                              (0, t.isArray)(e[i].format) &&
                                e[i].format.forEach(function (e) {
                                  return n.push([e.w, e.h]);
                                })),
                              0 === n.length && n.push("*"),
                              n.forEach(function (n) {
                                var s = r.getFloor({
                                  currency: e.bidfloorcur,
                                  mediaType: i,
                                  size: n,
                                });
                                if (
                                  ((0, t.logInfo)(
                                    g,
                                    "floor from floor module returned for mediatype:",
                                    i,
                                    " and size:",
                                    n,
                                    " is: currency",
                                    s.currency,
                                    "floor",
                                    s.floor
                                  ),
                                  "object" === m(s) &&
                                    s.currency === e.bidfloorcur &&
                                    !isNaN(parseInt(s.floor)))
                                ) {
                                  var o = parseFloat(s.floor);
                                  (0, t.logInfo)(
                                    g,
                                    "floor from floor module:",
                                    o,
                                    "previous floor value",
                                    a,
                                    "Min:",
                                    Math.min(o, a)
                                  ),
                                    (a = -1 === a ? o : Math.min(o, a)),
                                    (0, t.logInfo)(g, "new floor value:", a);
                                }
                              });
                          }
                        }),
                        e.bidfloor &&
                          ((0, t.logInfo)(
                            g,
                            "floor from floor module:",
                            a,
                            "impObj.bidfloor",
                            e.bidfloor,
                            "Max:",
                            Math.max(a, e.bidfloor)
                          ),
                          (a = Math.max(a, e.bidfloor))),
                        (e.bidfloor = !isNaN(a) && a > 0 ? a : b),
                        (0, t.logInfo)(
                          g,
                          "new impObj.bidfloor value:",
                          e.bidfloor
                        );
                    })(p, e),
                    p.hasOwnProperty(o.Mk) ||
                    p.hasOwnProperty(o.B5) ||
                    p.hasOwnProperty(o.pX)
                      ? p
                      : b
                  );
                })(s);
                r && y.imp.push(r);
              }),
              0 != y.imp.length)
            ) {
              var P, T;
              (y.site.publisher.id = p.pubId.trim()),
                (x = p.pubId.trim()),
                (y.ext.wrapper = {}),
                (y.ext.wrapper.profile = parseInt(p.profId) || b),
                (y.ext.wrapper.version = parseInt(p.verId) || b),
                (y.ext.wrapper.wiid = p.wiid || r.auctionId),
                (y.ext.wrapper.wv = "prebid_prebid_6.18.0"),
                (y.ext.wrapper.transactionId = p.transactionId),
                (y.ext.wrapper.wp = "pbjs"),
                (y.user.gender = p.gender ? p.gender.trim() : b),
                (y.user.geo = {}),
                (y.user.geo.lat = R("lat", p.lat)),
                (y.user.geo.lon = R("lon", p.lon)),
                (y.user.yob = R("yob", p.yob)),
                (y.device.geo = y.user.geo),
                (y.site.page = p.kadpageurl.trim() || y.site.page.trim()),
                (y.site.domain =
                  ((P = y.site.page),
                  ((T = document.createElement("a")).href = P),
                  T.hostname)),
                "object" === m(d.vc.getConfig("content")) &&
                  (y.site.content = d.vc.getConfig("content")),
                "object" === m(d.vc.getConfig("device")) &&
                  (y.device = c(y.device, d.vc.getConfig("device"))),
                (y.device.language =
                  y.device.language && y.device.language.split("-")[0]),
                (0, n.Z)(y, "source.tid", p.transactionId),
                -1 !== window.location.href.indexOf("pubmaticTest=true") &&
                  (y.test = 1),
                e[0].schain && (0, n.Z)(y, "source.ext.schain", e[0].schain),
                r &&
                  r.gdprConsent &&
                  ((0, n.Z)(y, "user.ext.consent", r.gdprConsent.consentString),
                  (0, n.Z)(
                    y,
                    "regs.ext.gdpr",
                    r.gdprConsent.gdprApplies ? 1 : 0
                  )),
                r &&
                  r.uspConsent &&
                  (0, n.Z)(y, "regs.ext.us_privacy", r.uspConsent),
                !0 === d.vc.getConfig("coppa") && (0, n.Z)(y, "regs.coppa", 1),
                (function (e, r) {
                  var a = (0, i.Z)(r, "0.userIdAsEids"),
                    s = j(r, 1);
                  s && (a || (a = []), a.push(s)),
                    (0, t.isArray)(a) &&
                      a.length > 0 &&
                      (0, n.Z)(e, "user.eids", a);
                })(y, e),
                (function (e, r) {
                  (r = r
                    .filter(function (e) {
                      return (
                        "string" == typeof e ||
                        ((0, t.logWarn)(
                          "PubMatic: bcat: Each category should be a string, ignoring category: " +
                            e
                        ),
                        !1)
                      );
                    })
                    .map(function (e) {
                      return e.trim();
                    })
                    .filter(function (e, r, a) {
                      if (e.length > 3) return a.indexOf(e) === r;
                      (0,
                      t.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
                    })).length > 0 &&
                    ((0, t.logWarn)("PubMatic: bcat: Selected: ", r),
                    (e.bcat = r));
                })(y, E),
                (function (e, r) {
                  var a = j(r, 2);
                  a &&
                    (e.user || (e.user = {}),
                    e.user.data || (e.user.data = []),
                    e.user.data.push(a));
                })(y, e);
              var O = d.vc.getConfig("ortb2") || {};
              if (O.site) {
                var D = y.site,
                  S = D.page,
                  k = D.domain,
                  C = D.ref;
                (0, t.mergeDeep)(y, { site: O.site }),
                  (y.site.page = S),
                  (y.site.domain = k),
                  (y.site.ref = C);
              }
              return (
                O.user && (0, t.mergeDeep)(y, { user: O.user }),
                "object" === m(d.vc.getConfig("app")) &&
                  ((y.app = d.vc.getConfig("app")),
                  (y.app.publisher = y.site.publisher),
                  (y.app.ext = y.site.ext || b),
                  "object" !== m(y.app.content) &&
                    (y.app.content = y.site.content || b),
                  delete y.site),
                {
                  method: "POST",
                  url: "https://hbopenbid.pubmatic.com/translator?source=ow-client",
                  data: JSON.stringify(y),
                  bidderRequest: r,
                }
              );
            }
          }
        },
        interpretResponse: function (e, r) {
          var a = [],
            i = h,
            n = JSON.parse(r.data),
            s = n.site && n.site.ref ? n.site.ref : "";
          try {
            var d = JSON.parse(r.data);
            d &&
              d.imp &&
              d.imp.length > 0 &&
              d.imp.forEach(function (e) {
                a.push({
                  requestId: e.id,
                  width: 0,
                  height: 0,
                  ttl: 300,
                  ad: "",
                  creativeId: 0,
                  netRevenue: !0,
                  cpm: 0,
                  currency: i,
                  referrer: s,
                });
              }),
              e.body &&
                e.body.seatbid &&
                (0, t.isArray)(e.body.seatbid) &&
                ((i = e.body.cur || i),
                e.body.seatbid.forEach(function (e) {
                  e.bid &&
                    (0, t.isArray)(e.bid) &&
                    e.bid.forEach(function (n) {
                      a.forEach(function (a) {
                        a.requestId == n.impid &&
                          ((a.requestId = n.impid),
                          (a.cpm = (parseFloat(n.price) || 0).toFixed(2)),
                          (a.width = n.w),
                          (a.height = n.h),
                          (a.sspID = n.id || ""),
                          (a.creativeId = n.crid || n.id),
                          (a.dealId = n.dealid),
                          (a.currency = i),
                          (a.netRevenue = !0),
                          (a.ttl = 300),
                          (a.referrer = s),
                          (a.ad = n.adm),
                          (a.pm_seat = e.seat || null),
                          (a.pm_dspid =
                            n.ext && n.ext.dspid ? n.ext.dspid : null),
                          (a.partnerImpId = n.id || ""),
                          d.imp &&
                            d.imp.length > 0 &&
                            d.imp.forEach(function (e) {
                              if (n.impid === e.id)
                                switch (
                                  ((function (e, r) {
                                    if (e.ext && null != e.ext.bidtype)
                                      r.mediaType = T[e.ext.bidtype];
                                    else {
                                      (0, t.logInfo)(
                                        "PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType"
                                      );
                                      var a = e.adm,
                                        i = "",
                                        n = new RegExp(/VAST\s+version/);
                                      if (
                                        a.indexOf('span class="PubAPIAd"') >= 0
                                      )
                                        r.mediaType = o.Mk;
                                      else if (n.test(a)) r.mediaType = o.pX;
                                      else
                                        try {
                                          (i = JSON.parse(
                                            a.replace(/\\/g, "")
                                          )) &&
                                            i.native &&
                                            (r.mediaType = o.B5);
                                        } catch (e) {
                                          (0, t.logWarn)(
                                            "PubMatic: Error: Cannot parse native reponse for ad response: " +
                                              a
                                          );
                                        }
                                    }
                                  })(n, a),
                                  a.mediaType)
                                ) {
                                  case o.Mk:
                                    break;
                                  case o.pX:
                                    (a.width = n.hasOwnProperty("w")
                                      ? n.w
                                      : e.video.w),
                                      (a.height = n.hasOwnProperty("h")
                                        ? n.h
                                        : e.video.h),
                                      (a.vastXml = n.adm),
                                      (function (e, r) {
                                        var a, t, i;
                                        if (
                                          r.bidderRequest &&
                                          r.bidderRequest.bids
                                        ) {
                                          for (
                                            var n = 0;
                                            n < r.bidderRequest.bids.length;
                                            n++
                                          )
                                            r.bidderRequest.bids[n].bidId ===
                                              e.requestId &&
                                              ((a =
                                                r.bidderRequest.bids[n].params),
                                              (t =
                                                r.bidderRequest.bids[n]
                                                  .mediaTypes[o.pX].context),
                                              (i =
                                                r.bidderRequest.bids[n]
                                                  .adUnitCode));
                                          t &&
                                            "outstream" === t &&
                                            a &&
                                            a.outstreamAU &&
                                            i &&
                                            ((e.rendererCode = a.outstreamAU),
                                            (e.renderer = S.newRenderer(
                                              e.rendererCode,
                                              i
                                            )));
                                        }
                                      })(a, r);
                                    break;
                                  case o.B5:
                                    !(function (e, r) {
                                      if (
                                        ((r.native = {}),
                                        e.hasOwnProperty("adm"))
                                      ) {
                                        var a = "";
                                        try {
                                          a = JSON.parse(
                                            e.adm.replace(/\\/g, "")
                                          );
                                        } catch (e) {
                                          return void (0, t.logWarn)(
                                            "PubMatic: Error: Cannot parse native reponse for ad response: " +
                                              r.adm
                                          );
                                        }
                                        if (
                                          a &&
                                          a.native &&
                                          a.native.assets &&
                                          a.native.assets.length > 0
                                        ) {
                                          r.mediaType = o.B5;
                                          for (
                                            var i = 0,
                                              n = a.native.assets.length;
                                            i < n;
                                            i++
                                          )
                                            switch (a.native.assets[i].id) {
                                              case P.TITLE.ID:
                                                r.native.title =
                                                  a.native.assets[i].title &&
                                                  a.native.assets[i].title.text;
                                                break;
                                              case P.IMAGE.ID:
                                                r.native.image = {
                                                  url:
                                                    a.native.assets[i].img &&
                                                    a.native.assets[i].img.url,
                                                  height:
                                                    a.native.assets[i].img &&
                                                    a.native.assets[i].img.h,
                                                  width:
                                                    a.native.assets[i].img &&
                                                    a.native.assets[i].img.w,
                                                };
                                                break;
                                              case P.ICON.ID:
                                                r.native.icon = {
                                                  url:
                                                    a.native.assets[i].img &&
                                                    a.native.assets[i].img.url,
                                                  height:
                                                    a.native.assets[i].img &&
                                                    a.native.assets[i].img.h,
                                                  width:
                                                    a.native.assets[i].img &&
                                                    a.native.assets[i].img.w,
                                                };
                                                break;
                                              case P.SPONSOREDBY.ID:
                                              case P.BODY.ID:
                                              case P.LIKES.ID:
                                              case P.DOWNLOADS.ID:
                                              case P.PRICE:
                                              case P.SALEPRICE.ID:
                                              case P.PHONE.ID:
                                              case P.ADDRESS.ID:
                                              case P.DESC2.ID:
                                              case P.CTA.ID:
                                              case P.RATING.ID:
                                              case P.DISPLAYURL.ID:
                                                r.native[
                                                  k[a.native.assets[i].id]
                                                ] =
                                                  a.native.assets[i].data &&
                                                  a.native.assets[i].data.value;
                                            }
                                          (r.native.clickUrl =
                                            a.native.link && a.native.link.url),
                                            (r.native.clickTrackers =
                                              (a.native.link &&
                                                a.native.link.clicktrackers) ||
                                              []),
                                            (r.native.impressionTrackers =
                                              a.native.imptrackers || []),
                                            (r.native.jstracker =
                                              a.native.jstracker || []),
                                            r.width || (r.width = 0),
                                            r.height || (r.height = 0);
                                        }
                                      }
                                    })(n, a);
                                }
                            }),
                          a.dealId && (a.dealChannel = "PMP"),
                          n.ext &&
                            n.ext.deal_channel &&
                            (a.dealChannel = D[n.ext.deal_channel] || null),
                          (a.meta = {}),
                          n.ext &&
                            n.ext.dspid &&
                            (a.meta.networkId = n.ext.dspid),
                          n.ext &&
                            n.ext.advid &&
                            (a.meta.buyerId = n.ext.advid),
                          n.adomain &&
                            n.adomain.length > 0 &&
                            ((a.meta.advertiserDomains = n.adomain),
                            (a.meta.clickUrl = n.adomain[0])),
                          e.ext &&
                            e.ext.buyid &&
                            (a.adserverTargeting = {
                              hb_buyid_pubmatic: e.ext.buyid,
                            }));
                      });
                    });
                }));
          } catch (e) {
            (0, t.logError)(e);
          }
          return a;
        },
        getUserSyncs: function (e, r, a, t) {
          var i = "" + x;
          return (
            a &&
              ((i += "&gdpr=" + (a.gdprApplies ? 1 : 0)),
              (i +=
                "&gdpr_consent=" + encodeURIComponent(a.consentString || ""))),
            t && (i += "&us_privacy=" + encodeURIComponent(t)),
            !0 === d.vc.getConfig("coppa") && (i += "&coppa=1"),
            e.iframeEnabled
              ? [
                  {
                    type: "iframe",
                    url:
                      "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" +
                      i,
                  },
                ]
              : [
                  {
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i,
                  },
                ]
          );
        },
        transformBidParams: function (e, r, a, i) {
          return (
            U(e, a.bids[0], !0),
            (0, t.convertTypes)({ publisherId: "string", adSlot: "string" }, e)
          );
        },
      };
      (0, s.dX)(L), window.ihowpbjs.installedModules.push("pubmaticBidAdapter");
    },
  },
  function (e) {
    e((e.s = 139));
  },
]);
(self.ihowpbjsChunk = self.ihowpbjsChunk || []).push([
  [215],
  {
    224: function (e, t, n) {
      "use strict";
      n.d(t, {
        HQ: function () {
          return s;
        },
        Pv: function () {
          return c;
        },
        UR: function () {
          return i;
        },
      });
      var o = n(853),
        r = n(265),
        i = {
          trustpid: {
            source: "trustpid.com",
            atype: 1,
            getValue: function (e) {
              return e;
            },
          },
          intentIqId: {
            source: "intentiq.com",
            atype: 1,
            getValue: function (e) {
              return e.RESULT;
            },
          },
          naveggId: { source: "navegg.com", atype: 1 },
          justId: { source: "justtag.com", atype: 1 },
          pubcid: { source: "pubcid.org", atype: 1 },
          tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function () {
              return { rtiPartner: "TDID" };
            },
          },
          id5id: {
            getValue: function (e) {
              return e.uid;
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext;
            },
          },
          ftrackId: {
            source: "flashtalking.com",
            atype: 1,
            getValue: function (e) {
              return e.uid;
            },
            getUidExt: function (e) {
              if (e.ext) return e.ext;
            },
          },
          parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function (e) {
              return e.eid ? e.eid : e.ccpaOptout ? "" : null;
            },
            getUidExt: function (e) {
              var t = (0, o.pick)(e, ["ibaOptout", "ccpaOptout"]);
              if (Object.keys(t).length) return t;
            },
          },
          idl_env: { source: "liveramp.com", atype: 3 },
          lipb: {
            getValue: function (e) {
              return e.lipbid;
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function (e) {
              if (Array.isArray(e.segments) && e.segments.length)
                return { segments: e.segments };
            },
          },
          britepoolid: { source: "britepool.com", atype: 3 },
          dmdId: { source: "hcn.health", atype: 3 },
          lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
          criteoId: { source: "criteo.com", atype: 1 },
          merkleId: {
            source: "merkleinc.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
            getUidExt: function (e) {
              return e && e.keyID ? { keyID: e.keyID } : void 0;
            },
          },
          netId: { source: "netid.de", atype: 1 },
          IDP: {
            source: "zeotap.com",
            atype: 1,
            getValue: function (e) {
              return (0, o.isPlainObject)(e) ? e.id : e;
            },
          },
          hadronId: { source: "audigent.com", atype: 1 },
          haloId: { source: "audigent.com", atype: 1 },
          quantcastId: { source: "quantcast.com", atype: 1 },
          nextrollId: { source: "nextroll.com", atype: 1 },
          idx: { source: "idx.lat", atype: 1 },
          connectid: { source: "verizonmedia.com", atype: 3 },
          fabrickId: { source: "neustar.biz", atype: 1 },
          mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
          tapadId: { source: "tapad.com", atype: 1 },
          novatiq: {
            getValue: function (e) {
              return e.snowflake;
            },
            source: "novatiq.com",
            atype: 1,
          },
          uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
          },
          dapId: { source: "akamai.com", atype: 1 },
          deepintentId: { source: "deepintent.com", atype: 3 },
          admixerId: { source: "admixer.net", atype: 3 },
          adtelligentId: { source: "adtelligent.com", atype: 3 },
          amxId: { source: "amxrtb.com", atype: 1 },
          publinkId: { source: "epsilon.com", atype: 3 },
          kpuid: { source: "kpuid.com", atype: 3 },
          imuid: { source: "intimatemerger.com", atype: 1 },
          connectId: { source: "yahoo.com", atype: 3 },
          qid: { source: "adquery.io", atype: 1 },
          dacId: { source: "impact-ad.jp", atype: 1 },
        };
      function a(e, t) {
        var n = i[t];
        if (n && e) {
          var r = {};
          r.source = n.source;
          var a = (0, o.isFn)(n.getValue) ? n.getValue(e) : e;
          if ((0, o.isStr)(a)) {
            var s = { id: a, atype: n.atype };
            if ((0, o.isFn)(n.getUidExt)) {
              var c = n.getUidExt(e);
              c && (s.ext = c);
            }
            if (((r.uids = [s]), (0, o.isFn)(n.getEidExt))) {
              var u = n.getEidExt(e);
              u && (r.ext = u);
            }
            return r;
          }
        }
        return null;
      }
      function s(e) {
        var t = [];
        for (var n in e)
          if (e.hasOwnProperty(n))
            if ("pubProvidedId" === n) t = t.concat(e.pubProvidedId);
            else {
              var o = a(e[n], n);
              o && t.push(o);
            }
        return t;
      }
      function c(e) {
        var t = [];
        return (
          e
            .filter(function (e) {
              return (
                (0, o.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
              );
            })
            .forEach(function (e) {
              Object.keys(e.idObj).forEach(function (n) {
                (0, r.Z)(e, "config.bidders") &&
                  Array.isArray(e.config.bidders) &&
                  (0, r.Z)(i, n + ".source") &&
                  t.push({ source: i[n].source, bidders: e.config.bidders });
              });
            }),
          t
        );
      }
    },
    999: function (e, t, n) {
      "use strict";
      var o = n(879),
        r = n(962),
        i = n(319),
        a = n(528),
        s = n(602),
        c = n(644),
        u = n(494),
        d = n(224),
        l = n(849),
        f = n(853),
        g = n(265),
        p = n(214),
        h = n.n(p),
        m = n(783),
        v = n.n(m),
        y = n(153),
        b = n.n(y);
      function w() {
        return (
          (w =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          w.apply(this, arguments)
        );
      }
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function S(e) {
        return (
          (S =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          S(e)
        );
      }
      var E,
        _,
        O,
        k,
        A,
        H = "User ID",
        P = "cookie",
        D = "html5",
        x = "_pbjs_userid_consent_data",
        j = "_pbjs_id_optout",
        U = (0, l.eA)("userid"),
        T = [],
        B = !1,
        C = [],
        R = !1,
        F = [],
        L = [],
        M = {},
        W = [],
        V = [];
      function z(e, t) {
        var n = e.config.storage,
          o =
            "function" == typeof e.submodule.domainOverride
              ? e.submodule.domainOverride()
              : null;
        try {
          var r = (0, f.isPlainObject)(t) ? JSON.stringify(t) : t,
            i = new Date(Date.now() + 864e5 * n.expires).toUTCString();
          n.type === P
            ? (U.setCookie(n.name, r, i, "Lax", o),
              "number" == typeof n.refreshInSeconds &&
                U.setCookie(
                  "".concat(n.name, "_last"),
                  new Date().toUTCString(),
                  i,
                  "Lax",
                  o
                ))
            : n.type === D &&
              (U.setDataInLocalStorage("".concat(n.name, "_exp"), i),
              U.setDataInLocalStorage(n.name, encodeURIComponent(r)),
              "number" == typeof n.refreshInSeconds &&
                U.setDataInLocalStorage(
                  "".concat(n.name, "_last"),
                  new Date().toUTCString()
                ));
        } catch (e) {
          (0, f.logError)(e);
        }
      }
      function N(e) {
        var t = (0, f.getPrebidInternal)().setEidPermissions;
        "function" == typeof t && (0, f.isArray)(e) && t((0, d.Pv)(e));
      }
      function q(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          o = n ? "".concat(e.name, "_").concat(n) : e.name;
        try {
          if (e.type === P) t = U.getCookie(o);
          else if (e.type === D) {
            var r = U.getDataFromLocalStorage("".concat(e.name, "_exp"));
            "" === r
              ? (t = U.getDataFromLocalStorage(o))
              : r &&
                new Date(r).getTime() - Date.now() > 0 &&
                (t = decodeURIComponent(U.getDataFromLocalStorage(o)));
          }
          "string" == typeof t &&
            "{" === t.trim().charAt(0) &&
            (t = JSON.parse(t));
        } catch (e) {
          (0, f.logError)(e);
        }
        return t;
      }
      function G(e) {
        var t = { consentString: "", gdprApplies: !1, apiVersion: 0 };
        return (
          e &&
            ((t.consentString = e.consentString),
            (t.gdprApplies = e.gdprApplies),
            (t.apiVersion = e.apiVersion)),
          (0, f.cyrb53Hash)(JSON.stringify(t))
        );
      }
      function Z(e) {
        try {
          var t = new Date(Date.now() + 2592e6).toUTCString();
          U.setCookie(x, G(e), t, "Lax");
        } catch (e) {
          (0, f.logError)(e);
        }
      }
      function J() {
        try {
          return U.getCookie(x);
        } catch (e) {
          (0, f.logError)(e);
        }
      }
      function Q(e) {
        if (e && "boolean" == typeof e.gdprApplies && e.gdprApplies) {
          if (!e.consentString) return !1;
          if (
            1 === e.apiVersion &&
            !1 === (0, g.Z)(e, "vendorData.purposeConsents.1")
          )
            return !1;
          if (
            2 === e.apiVersion &&
            !1 === (0, g.Z)(e, "vendorData.purpose.consents.1")
          )
            return !1;
        }
        return !0;
      }
      function $() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window.location.hostname;
        if (!U.cookiesAreEnabled()) return e;
        var t,
          n,
          o = e.split(".");
        if (2 == o.length) return e;
        var r = -2,
          i = "_rdc".concat(Date.now()),
          a = "writeable";
        do {
          t = o.slice(r).join(".");
          var s = new Date((0, f.timestamp)() + 1e4).toUTCString();
          U.setCookie(i, a, s, "Lax", t, void 0);
          var c = U.getCookie(i, void 0);
          c === a
            ? ((n = !1),
              U.setCookie(
                i,
                "",
                "Thu, 01 Jan 1970 00:00:01 GMT",
                void 0,
                t,
                void 0
              ))
            : ((r += -1), (n = Math.abs(r) <= o.length));
        } while (n);
        return t;
      }
      function Y(e, t) {
        var n = function () {};
        t &&
          (n = (0, f.delayExecution)(function () {
            clearTimeout(_), t();
          }, e.length)),
          e.forEach(function (e) {
            e.callback(function (t) {
              t
                ? (e.config.storage && z(e, t),
                  (e.idObj = e.submodule.decode(t, e.config)))
                : (0, f.logInfo)(
                    ""
                      .concat(H, ": ")
                      .concat(
                        e.submodule.name,
                        " - request id responded with an empty value"
                      )
                  ),
                n();
            }),
              (e.callback = void 0);
          });
      }
      function K(e) {
        return Array.isArray(e) && e.length
          ? e
              .filter(function (e) {
                return (
                  (0, f.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                );
              })
              .reduce(function (e, t) {
                return (
                  Object.keys(t.idObj).forEach(function (n) {
                    e[n] = t.idObj[n];
                  }),
                  e
                );
              }, {})
          : {};
      }
      function X(e) {
        var t = !1;
        if (R && void 0 !== E) for (var n in E) C.push(E[n]);
        if (
          (void 0 === E || R) &&
          ((R = !1),
          (E = (function (e, t) {
            var n = le(e, t),
              o = n.userIdModules;
            if (!n.hasValidated && !Q(t))
              return (
                (0, f.logWarn)(
                  "".concat(
                    H,
                    " - gdpr permission not valid for local storage or cookies, exit module"
                  )
                ),
                []
              );
            var r = J();
            return (
              Z(t),
              o.reduce(function (e, n) {
                return fe(n, t, r, !1), e.push(n), e;
              }, [])
            );
          })(C, s.rp.getConsentData())),
          E.length)
        ) {
          N(E);
          var o = E.filter(function (e) {
            return (0, f.isFn)(e.callback);
          });
          if (o.length)
            if (e && k > 0) {
              t = !0;
              var r = !1,
                a = function () {
                  r || ((r = !0), e());
                };
              (0, f.logInfo)(
                ""
                  .concat(H, " - auction delayed by ")
                  .concat(k, " at most to fetch ids")
              ),
                (_ = setTimeout(a, k)),
                Y(o, a);
            } else
              i.on(c.EVENTS.REQUEST_BIDS, function e() {
                i.off(c.EVENTS.REQUEST_BIDS, e),
                  O > 0
                    ? setTimeout(function () {
                        Y(o);
                      }, O)
                    : Y(o);
              });
        }
        e && !t && e();
      }
      function ee(e, t) {
        X(function () {
          !(function (e, t) {
            [e].some(function (e) {
              return !Array.isArray(e) || !e.length;
            }) ||
              e.forEach(function (e) {
                e.bids &&
                  (0, f.isArray)(e.bids) &&
                  e.bids.forEach(function (e) {
                    var n = (function (e, t) {
                      return Array.isArray(e) && e.length && t
                        ? e
                            .filter(function (e) {
                              return (
                                !e.config.bidders ||
                                !(0, f.isArray)(e.config.bidders) ||
                                (0, o.q9)(e.config.bidders, t)
                              );
                            })
                            .filter(function (e) {
                              return (
                                (0, f.isPlainObject)(e.idObj) &&
                                Object.keys(e.idObj).length
                              );
                            })
                            .reduce(function (e, t) {
                              return (
                                Object.keys(t.idObj).forEach(function (n) {
                                  e[n] = t.idObj[n];
                                }),
                                e
                              );
                            }, {})
                        : {};
                    })(t, e.bidder);
                    Object.keys(n).length &&
                      ((e.userId = n), (e.userIdAsEids = (0, d.HQ)(n)));
                  });
              });
          })(t.adUnits || (0, a.R)().adUnits, E);
          var n =
            A &&
            (te() || []).find(function (e) {
              return e.source === A;
            });
          if (n && "string" == typeof (0, g.Z)(n, "uids.0.id")) {
            var r = n.uids[0].id.replace(/[\W_]/g, "");
            r.length >= 32 && r.length <= 150
              ? (0, f.isGptPubadsDefined)()
                ? window.googletag.pubads().setPublisherProvidedId(r)
                : ((window.googletag = window.googletag || {}),
                  (window.googletag.cmd = window.googletag.cmd || []),
                  window.googletag.cmd.push(function () {
                    window.googletag.pubads().setPublisherProvidedId(r);
                  }))
              : (0, f.logWarn)(
                  "User ID - Googletag Publisher Provided ID for "
                    .concat(A, " is not between 32 and 150 characters - ")
                    .concat(r)
                );
          }
          e.call(this, t);
        });
      }
      function te() {
        return X(), (0, d.HQ)(K(E));
      }
      function ne(e) {
        return (
          X(),
          (0, d.HQ)(
            (function (e, t) {
              if (!Array.isArray(e) || !e.length) return {};
              var n = e.filter(function (e) {
                return (
                  (0, f.isPlainObject)(e.idObj) &&
                  Object.keys(e.idObj).length &&
                  d.UR[Object.keys(e.idObj)[0]].source === t
                );
              });
              return (0, f.isEmpty)(n) ? [] : n[0].idObj;
            })(E, e)
          )[0]
        );
      }
      function oe(e, t, n) {
        var o = {};
        if ((0, f.isFn)(n)) {
          (0, f.logInfo)(
            ""
              .concat(H, " - Getting encrypted signal from custom function : ")
              .concat(n.name, " & source : ")
              .concat(e, " ")
          );
          var r = n(e);
          o[e] = r ? re(r) : null;
        } else {
          var i = ne(e);
          (0, f.logInfo)(
            ""
              .concat(H, " - Getting encrypted signal for eids :")
              .concat(JSON.stringify(i))
          ),
            (0, f.isEmpty)(i) ||
              (o[i.source] = !0 === t ? re(i) : i.uids[0].id);
        }
        var a = Promise.resolve(o[e]);
        return (
          (0, f.logInfo)(
            "".concat(H, " - Fetching encrypted eids: ").concat(o[e])
          ),
          a
        );
      }
      function re(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = "";
        return (
          1 === t &&
            (n =
              "object" === S(e)
                ? window.btoa(JSON.stringify(e))
                : window.btoa(e)),
          "".concat(t, "||").concat(n)
        );
      }
      function ie(e) {
        var t = c.MODULE_PARAM_TO_UPDATE_FOR_SSO[e.name];
        if (t) {
          var n = se() || {},
            o =
              ((window.IHPWT && window.IHPWT.ssoEnabled) ||
                (window.PWT && window.PWT.ssoEnabled)) &&
              n.emailHash
                ? n.emailHash
                : n.pubProvidedEmailHash
                ? n.pubProvidedEmailHash
                : void 0;
          t.forEach(function (t) {
            e.params[t.key] =
              "id5Id" === e.name
                ? (function (e, t) {
                    var n = {
                        1: (e && e.SHA256) || void 0,
                        5: t ? btoa(t) : void 0,
                      },
                      o = Object.keys((0, f.skipUndefinedValues)(n))
                        .map(function (e) {
                          return n[e] && e + "=" + n[e];
                        })
                        .join("&");
                    return btoa(o);
                  })(o, n.userID)
                : o
                ? o[t.hashType]
                : void 0;
          });
        }
      }
      function ae() {
        var e = c.REFRESH_IDMODULES_LIST.PRIMARY_MODULES,
          t = c.REFRESH_IDMODULES_LIST.SCRIPT_BASED_MODULES;
        for (var n in F) {
          var o = F[n].name;
          e.indexOf(o) >= 0 && (!W.includes(o) && W.push(o), ie(F[n])),
            t.indexOf(o) >= 0 && !V.includes(o) && V.push(o);
        }
      }
      function se() {
        return M;
      }
      function ce(e, t) {
        var n = {};
        "connected" === t.status
          ? window.FB &&
            window.FB.api(
              "/me?fields=email&access_token=" + t.authResponse.accessToken,
              function (t) {
                (0, f.logInfo)("SSO - Data received from FB API"),
                  t.error
                    ? (0, f.logInfo)(
                        "SSO - User information could not be retrieved by facebook api [",
                        t.error.message,
                        "]"
                      )
                    : ((0, f.logInfo)(
                        "SSO - Information successfully retrieved by Facebook API."
                      ),
                      ue(t.email || void 0, n),
                      e.setUserIdentities({ emailHash: n }));
              }
            )
          : (0, f.logInfo)(
              "SSO - Error fetching login information from facebook"
            );
      }
      function ue(e, t) {
        (e = void 0 !== e ? e.trim().toLowerCase() : ""),
          new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(e) &&
            ((t.MD5 = h()(e).toString()),
            (t.SHA1 = v()(e).toString()),
            (t.SHA256 = b()(e).toString()));
      }
      var de,
        le = (0, u.z3)(
          "sync",
          function (e, t) {
            return { userIdModules: e, hasValidated: t && t.hasValidated };
          },
          "validateGdprEnforcement"
        );
      function fe(e, t, n, o) {
        if (e.config.storage) {
          var r,
            i = q(e.config.storage),
            a = !1;
          if ("number" == typeof e.config.storage.refreshInSeconds) {
            var s = new Date(q(e.config.storage, "last"));
            a =
              s &&
              Date.now() - s.getTime() >
                1e3 * e.config.storage.refreshInSeconds;
          }
          !i ||
          a ||
          o ||
          !(function (e, t) {
            return null != e && e === G(t);
          })(n, t)
            ? (r = e.submodule.getId(e.config, t, i))
            : "function" == typeof e.submodule.extendId &&
              (r = e.submodule.extendId(e.config, t, i)),
            (0, f.isPlainObject)(r) &&
              (r.id && (z(e, r.id), (i = r.id)),
              "function" == typeof r.callback && (e.callback = r.callback)),
            i && (e.idObj = e.submodule.decode(i, e.config));
        } else if (e.config.value) e.idObj = e.config.value;
        else {
          var c = e.submodule.getId(e.config, t, void 0);
          (0, f.isPlainObject)(c) &&
            ("function" == typeof c.callback && (e.callback = c.callback),
            c.id && (e.idObj = e.submodule.decode(c.id, e.config)));
        }
      }
      function ge(e) {
        for (var t = !1, n = 0; n < E.length; n++)
          if (e.config.name.toLowerCase() === E[n].config.name.toLowerCase()) {
            (t = !0), (E[n] = e);
            break;
          }
        t || E.push(e);
      }
      function pe() {
        var e = (function (e, t, n) {
          return Array.isArray(e)
            ? e.reduce(function (e, t) {
                return (
                  !t ||
                    (0, f.isEmptyStr)(t.name) ||
                    (!t.storage ||
                    (0, f.isEmptyStr)(t.storage.type) ||
                    (0, f.isEmptyStr)(t.storage.name) ||
                    -1 === n.indexOf(t.storage.type)
                      ? (0, f.isPlainObject)(t.value)
                        ? e.push(t)
                        : t.storage || t.value || e.push(t)
                      : e.push(t)),
                  e
                );
              }, [])
            : [];
        })(F, 0, T);
        if (e.length) {
          ae();
          var t = L.filter(function (e) {
            return !(0, o.sE)(C, function (t) {
              return t.name === e.name;
            });
          });
          (C = t
            .map(function (t) {
              var n = (0, o.sE)(e, function (e) {
                return (
                  e.name &&
                  (e.name.toLowerCase() === t.name.toLowerCase() ||
                    (t.aliasName &&
                      e.name.toLowerCase() === t.aliasName.toLowerCase()))
                );
              });
              return (
                n && t.name !== n.name && (n.name = t.name),
                (t.findRootDomain = $),
                n
                  ? { submodule: t, config: n, callback: void 0, idObj: void 0 }
                  : null
              );
            })
            .filter(function (e) {
              return null !== e;
            })),
            !B &&
              C.length &&
              ((0, a.R)().requestBids.before(ee, 40),
              (0, f.logInfo)(
                ""
                  .concat(H, " - usersync config updated for ")
                  .concat(C.length, " submodules: "),
                C.map(function (e) {
                  return e.submodule.name;
                })
              ),
              (B = !0));
        }
      }
      (de = r.vc),
        (A = void 0),
        (C = []),
        (F = []),
        (B = !1),
        (E = void 0),
        -1 !==
          (T = [
            U.localStorageIsEnabled() ? D : null,
            U.cookiesAreEnabled() ? P : null,
          ].filter(function (e) {
            return null !== e;
          })).indexOf(P) && U.getCookie(j)
          ? (0, f.logInfo)("".concat(H, " - opt-out cookie found, exit module"))
          : -1 !== T.indexOf(D) && U.getDataFromLocalStorage(j)
          ? (0, f.logInfo)(
              "".concat(H, " - opt-out localStorage found, exit module")
            )
          : (de.getConfig("userSync", function (e) {
              var t = e.userSync;
              (A = t.ppid),
                t &&
                  t.userIds &&
                  ((F = t.userIds),
                  (O = (0, f.isNumber)(t.syncDelay) ? t.syncDelay : 500),
                  (k = (0, f.isNumber)(t.auctionDelay) ? t.auctionDelay : 0),
                  pe());
            }),
            ((0, a.R)().getUserIds = function () {
              return X(), K(E);
            }),
            ((0, a.R)().getUserIdsAsEids = te),
            ((0, a.R)().getEncryptedEidsForSource = oe),
            ((0, a.R)().registerSignalSources = function () {
              if (window.googletag) {
                window.googletag.encryptedSignalProviders =
                  window.googletag.encryptedSignalProviders || [];
                var e = r.vc.getConfig("userSync.encryptedSignalSources");
                if (e) {
                  var t = e.registerDelay || 0;
                  setTimeout(function () {
                    e.sources &&
                      e.sources.forEach(function (e) {
                        var t = e.source,
                          n = e.encrypt,
                          o = e.customFunc;
                        t.forEach(function (e) {
                          window.googletag.encryptedSignalProviders.push({
                            id: e,
                            collectorFunction: function () {
                              return oe(e, n, o);
                            },
                          });
                        });
                      });
                  }, t);
                } else
                  (0, f.logWarn)(
                    "".concat(
                      H,
                      " - ESP : encryptedSignalSources config not defined under userSync Object"
                    )
                  );
              }
            }),
            ((0, a.R)().refreshUserIds = function (e, t, n) {
              void 0 !== n && (R = n);
              var o = e ? e.submoduleNames : null;
              o || (o = []),
                X(function () {
                  var e = s.rp.getConsentData(),
                    n = le(C, e),
                    r = n.userIdModules;
                  if (n.hasValidated || Q(e)) {
                    var i = J();
                    Z(e);
                    var a,
                      c = [],
                      u = (function (e, t) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (!n) {
                          if (
                            Array.isArray(e) ||
                            (n = (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return I(e, t);
                                var n = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1);
                                return (
                                  "Object" === n &&
                                    e.constructor &&
                                    (n = e.constructor.name),
                                  "Map" === n || "Set" === n
                                    ? Array.from(e)
                                    : "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n
                                      )
                                    ? I(e, t)
                                    : void 0
                                );
                              }
                            })(e))
                          ) {
                            n && (e = n);
                            var o = 0,
                              r = function () {};
                            return {
                              s: r,
                              n: function () {
                                return o >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[o++] };
                              },
                              e: function (e) {
                                throw e;
                              },
                              f: r,
                            };
                          }
                          throw new TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var i,
                          a = !0,
                          s = !1;
                        return {
                          s: function () {
                            n = n.call(e);
                          },
                          n: function () {
                            var e = n.next();
                            return (a = e.done), e;
                          },
                          e: function (e) {
                            (s = !0), (i = e);
                          },
                          f: function () {
                            try {
                              a || null == n.return || n.return();
                            } finally {
                              if (s) throw i;
                            }
                          },
                        };
                      })(r);
                    try {
                      for (u.s(); !(a = u.n()).done; ) {
                        var d = a.value;
                        (o.length > 0 && -1 === o.indexOf(d.submodule.name)) ||
                          ((0, f.logInfo)(
                            ""
                              .concat(H, " - refreshing ")
                              .concat(d.submodule.name)
                          ),
                          fe(d, e, i, !0),
                          ge(d),
                          E.length && N(E),
                          (0, f.isFn)(d.callback) && c.push(d));
                      }
                    } catch (e) {
                      u.e(e);
                    } finally {
                      u.f();
                    }
                    c.length > 0 && Y(c), t && t();
                  } else (0, f.logWarn)("".concat(H, " - gdpr permission not valid for local storage or cookies, exit module"));
                });
            }),
            ((0, a.R)().setUserIdentities = function (e) {
              if ((0, f.isEmpty)(e)) M = {};
              else {
                var t = {};
                e.pubProvidedEmail &&
                  (ue(e.pubProvidedEmail, t),
                  (e.pubProvidedEmailHash = t),
                  delete e.pubProvidedEmail),
                  w(M, e),
                  ((window.IHPWT && window.IHPWT.loginEvent) ||
                    (window.PWT && window.PWT.loginEvent)) &&
                    (ae(),
                    (0, a.R)().refreshUserIds({ submoduleNames: W }),
                    (function (e) {
                      var t = 0,
                        n = se() || {};
                      for (t in e)
                        switch (e[t]) {
                          case "zeotapIdPlus":
                            if (
                              window.zeotap &&
                              (0, f.isFn)(window.zeotap.callMethod)
                            ) {
                              var o = { email: n.emailHash.SHA256 };
                              window.zeotap.callMethod(
                                "setUserIdentities",
                                o,
                                !0
                              );
                            }
                            break;
                          case "identityLink":
                            if (window.ats) {
                              var r = window.ats.outputCurrentConfiguration();
                              (r.emailHashes = n.emailHash
                                ? [
                                    n.emailHash.MD5,
                                    n.emailHash.SHA1,
                                    n.emailHash.SHA256,
                                  ]
                                : void 0),
                                window.ats.start &&
                                  (0, f.isFn)(window.ats.start) &&
                                  window.ats.start(r),
                                window.ats.setAdditionalData &&
                                  (0, f.isFn)(window.ats.setAdditionalData) &&
                                  window.ats.setAdditionalData({
                                    type: "emailHashes",
                                    id: r.emailHashes,
                                  });
                            }
                            break;
                          case "publinkId":
                            if (
                              window.conversant &&
                              (0, f.isFn)(window.conversant.launch)
                            ) {
                              var i = window.conversant.getLauncherObject();
                              (i.emailHashes = n.emailHash
                                ? [n.emailHash.MD5, n.emailHash.SHA256]
                                : void 0),
                                window.conversant.launch("publink", "start", i);
                            }
                        }
                    })(V),
                    window.IHPWT && (window.IHPWT.loginEvent = !1),
                    window.PWT && (window.PWT.loginEvent = !1));
              }
            }),
            ((0, a.R)().getUserIdentities = se),
            ((0, a.R)().onSSOLogin = function (e) {
              var t,
                n = this,
                o = {};
              if (
                !(
                  (window.IHPWT && !window.IHPWT.ssoEnabled) ||
                  (window.PWT && !window.PWT.ssoEnabled)
                )
              )
                switch (e.provider) {
                  case void 0:
                  case "facebook":
                    "facebook" === e.provider
                      ? window.FB &&
                        window.FB.getLoginStatus(function (e) {
                          ce(n, e);
                        }, !0)
                      : window.FB &&
                        window.FB.Event.subscribe(
                          "auth.statusChange",
                          function (e) {
                            ce(n, e);
                          }
                        );
                    break;
                  case "google":
                    (t =
                      e.googleUserObject.getBasicProfile().getEmail() ||
                      void 0),
                      (0, f.logInfo)(
                        "SSO - Information successfully retrieved by Google API"
                      ),
                      ue(t, o),
                      n.setUserIdentities({ emailHash: o });
                }
            }),
            ((0, a.R)().onSSOLogout = function () {
              this.setUserIdentities({});
            }),
            ((0, a.R)().getUserIdsAsEidBySource = ne)),
        (0, u.bA)("userId", function (e) {
          (0, o.sE)(L, function (t) {
            return t.name === e.name;
          }) || (L.push(e), pe());
        }),
        window.ihowpbjs.installedModules.push("userId");
    },
    249: function (e, t) {
      var n;
      e.exports =
        ((n =
          n ||
          (function (e, t) {
            var n =
                Object.create ||
                (function () {
                  function e() {}
                  return function (t) {
                    var n;
                    return (
                      (e.prototype = t), (n = new e()), (e.prototype = null), n
                    );
                  };
                })(),
              o = {},
              r = (o.lib = {}),
              i = (r.Base = {
                extend: function (e) {
                  var t = n(this);
                  return (
                    e && t.mixIn(e),
                    (t.hasOwnProperty("init") && this.init !== t.init) ||
                      (t.init = function () {
                        t.$super.init.apply(this, arguments);
                      }),
                    (t.init.prototype = t),
                    (t.$super = this),
                    t
                  );
                },
                create: function () {
                  var e = this.extend();
                  return e.init.apply(e, arguments), e;
                },
                init: function () {},
                mixIn: function (e) {
                  for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                  e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              a = (r.WordArray = i.extend({
                init: function (e, t) {
                  (e = this.words = e || []),
                    (this.sigBytes = null != t ? t : 4 * e.length);
                },
                toString: function (e) {
                  return (e || c).stringify(this);
                },
                concat: function (e) {
                  var t = this.words,
                    n = e.words,
                    o = this.sigBytes,
                    r = e.sigBytes;
                  if ((this.clamp(), o % 4))
                    for (var i = 0; i < r; i++) {
                      var a = (n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      t[(o + i) >>> 2] |= a << (24 - ((o + i) % 4) * 8);
                    }
                  else for (i = 0; i < r; i += 4) t[(o + i) >>> 2] = n[i >>> 2];
                  return (this.sigBytes += r), this;
                },
                clamp: function () {
                  var t = this.words,
                    n = this.sigBytes;
                  (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                    (t.length = e.ceil(n / 4));
                },
                clone: function () {
                  var e = i.clone.call(this);
                  return (e.words = this.words.slice(0)), e;
                },
                random: function (t) {
                  for (
                    var n,
                      o = [],
                      r = function (t) {
                        t = t;
                        var n = 987654321,
                          o = 4294967295;
                        return function () {
                          var r =
                            (((n = (36969 * (65535 & n) + (n >> 16)) & o) <<
                              16) +
                              (t = (18e3 * (65535 & t) + (t >> 16)) & o)) &
                            o;
                          return (
                            (r /= 4294967296),
                            (r += 0.5) * (e.random() > 0.5 ? 1 : -1)
                          );
                        };
                      },
                      i = 0;
                    i < t;
                    i += 4
                  ) {
                    var s = r(4294967296 * (n || e.random()));
                    (n = 987654071 * s()), o.push((4294967296 * s()) | 0);
                  }
                  return new a.init(o, t);
                },
              })),
              s = (o.enc = {}),
              c = (s.Hex = {
                stringify: function (e) {
                  for (
                    var t = e.words, n = e.sigBytes, o = [], r = 0;
                    r < n;
                    r++
                  ) {
                    var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                    o.push((i >>> 4).toString(16)),
                      o.push((15 & i).toString(16));
                  }
                  return o.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], o = 0; o < t; o += 2)
                    n[o >>> 3] |=
                      parseInt(e.substr(o, 2), 16) << (24 - (o % 8) * 4);
                  return new a.init(n, t / 2);
                },
              }),
              u = (s.Latin1 = {
                stringify: function (e) {
                  for (
                    var t = e.words, n = e.sigBytes, o = [], r = 0;
                    r < n;
                    r++
                  ) {
                    var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                    o.push(String.fromCharCode(i));
                  }
                  return o.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], o = 0; o < t; o++)
                    n[o >>> 2] |= (255 & e.charCodeAt(o)) << (24 - (o % 4) * 8);
                  return new a.init(n, t);
                },
              }),
              d = (s.Utf8 = {
                stringify: function (e) {
                  try {
                    return decodeURIComponent(escape(u.stringify(e)));
                  } catch (e) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (e) {
                  return u.parse(unescape(encodeURIComponent(e)));
                },
              }),
              l = (r.BufferedBlockAlgorithm = i.extend({
                reset: function () {
                  (this._data = new a.init()), (this._nDataBytes = 0);
                },
                _append: function (e) {
                  "string" == typeof e && (e = d.parse(e)),
                    this._data.concat(e),
                    (this._nDataBytes += e.sigBytes);
                },
                _process: function (t) {
                  var n = this._data,
                    o = n.words,
                    r = n.sigBytes,
                    i = this.blockSize,
                    s = r / (4 * i),
                    c =
                      (s = t
                        ? e.ceil(s)
                        : e.max((0 | s) - this._minBufferSize, 0)) * i,
                    u = e.min(4 * c, r);
                  if (c) {
                    for (var d = 0; d < c; d += i) this._doProcessBlock(o, d);
                    var l = o.splice(0, c);
                    n.sigBytes -= u;
                  }
                  return new a.init(l, u);
                },
                clone: function () {
                  var e = i.clone.call(this);
                  return (e._data = this._data.clone()), e;
                },
                _minBufferSize: 0,
              })),
              f =
                ((r.Hasher = l.extend({
                  cfg: i.extend(),
                  init: function (e) {
                    (this.cfg = this.cfg.extend(e)), this.reset();
                  },
                  reset: function () {
                    l.reset.call(this), this._doReset();
                  },
                  update: function (e) {
                    return this._append(e), this._process(), this;
                  },
                  finalize: function (e) {
                    return e && this._append(e), this._doFinalize();
                  },
                  blockSize: 16,
                  _createHelper: function (e) {
                    return function (t, n) {
                      return new e.init(n).finalize(t);
                    };
                  },
                  _createHmacHelper: function (e) {
                    return function (t, n) {
                      return new f.HMAC.init(e, n).finalize(t);
                    };
                  },
                })),
                (o.algo = {}));
            return o;
          })(Math)),
        n);
    },
    214: function (e, t, n) {
      var o;
      e.exports =
        ((o = n(249)),
        (function (e) {
          var t = o,
            n = t.lib,
            r = n.WordArray,
            i = n.Hasher,
            a = t.algo,
            s = [];
          !(function () {
            for (var t = 0; t < 64; t++)
              s[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
          })();
          var c = (a.MD5 = i.extend({
            _doReset: function () {
              this._hash = new r.init([
                1732584193, 4023233417, 2562383102, 271733878,
              ]);
            },
            _doProcessBlock: function (e, t) {
              for (var n = 0; n < 16; n++) {
                var o = t + n,
                  r = e[o];
                e[o] =
                  (16711935 & ((r << 8) | (r >>> 24))) |
                  (4278255360 & ((r << 24) | (r >>> 8)));
              }
              var i = this._hash.words,
                a = e[t + 0],
                c = e[t + 1],
                g = e[t + 2],
                p = e[t + 3],
                h = e[t + 4],
                m = e[t + 5],
                v = e[t + 6],
                y = e[t + 7],
                b = e[t + 8],
                w = e[t + 9],
                I = e[t + 10],
                S = e[t + 11],
                E = e[t + 12],
                _ = e[t + 13],
                O = e[t + 14],
                k = e[t + 15],
                A = i[0],
                H = i[1],
                P = i[2],
                D = i[3];
              (A = u(A, H, P, D, a, 7, s[0])),
                (D = u(D, A, H, P, c, 12, s[1])),
                (P = u(P, D, A, H, g, 17, s[2])),
                (H = u(H, P, D, A, p, 22, s[3])),
                (A = u(A, H, P, D, h, 7, s[4])),
                (D = u(D, A, H, P, m, 12, s[5])),
                (P = u(P, D, A, H, v, 17, s[6])),
                (H = u(H, P, D, A, y, 22, s[7])),
                (A = u(A, H, P, D, b, 7, s[8])),
                (D = u(D, A, H, P, w, 12, s[9])),
                (P = u(P, D, A, H, I, 17, s[10])),
                (H = u(H, P, D, A, S, 22, s[11])),
                (A = u(A, H, P, D, E, 7, s[12])),
                (D = u(D, A, H, P, _, 12, s[13])),
                (P = u(P, D, A, H, O, 17, s[14])),
                (A = d(
                  A,
                  (H = u(H, P, D, A, k, 22, s[15])),
                  P,
                  D,
                  c,
                  5,
                  s[16]
                )),
                (D = d(D, A, H, P, v, 9, s[17])),
                (P = d(P, D, A, H, S, 14, s[18])),
                (H = d(H, P, D, A, a, 20, s[19])),
                (A = d(A, H, P, D, m, 5, s[20])),
                (D = d(D, A, H, P, I, 9, s[21])),
                (P = d(P, D, A, H, k, 14, s[22])),
                (H = d(H, P, D, A, h, 20, s[23])),
                (A = d(A, H, P, D, w, 5, s[24])),
                (D = d(D, A, H, P, O, 9, s[25])),
                (P = d(P, D, A, H, p, 14, s[26])),
                (H = d(H, P, D, A, b, 20, s[27])),
                (A = d(A, H, P, D, _, 5, s[28])),
                (D = d(D, A, H, P, g, 9, s[29])),
                (P = d(P, D, A, H, y, 14, s[30])),
                (A = l(
                  A,
                  (H = d(H, P, D, A, E, 20, s[31])),
                  P,
                  D,
                  m,
                  4,
                  s[32]
                )),
                (D = l(D, A, H, P, b, 11, s[33])),
                (P = l(P, D, A, H, S, 16, s[34])),
                (H = l(H, P, D, A, O, 23, s[35])),
                (A = l(A, H, P, D, c, 4, s[36])),
                (D = l(D, A, H, P, h, 11, s[37])),
                (P = l(P, D, A, H, y, 16, s[38])),
                (H = l(H, P, D, A, I, 23, s[39])),
                (A = l(A, H, P, D, _, 4, s[40])),
                (D = l(D, A, H, P, a, 11, s[41])),
                (P = l(P, D, A, H, p, 16, s[42])),
                (H = l(H, P, D, A, v, 23, s[43])),
                (A = l(A, H, P, D, w, 4, s[44])),
                (D = l(D, A, H, P, E, 11, s[45])),
                (P = l(P, D, A, H, k, 16, s[46])),
                (A = f(
                  A,
                  (H = l(H, P, D, A, g, 23, s[47])),
                  P,
                  D,
                  a,
                  6,
                  s[48]
                )),
                (D = f(D, A, H, P, y, 10, s[49])),
                (P = f(P, D, A, H, O, 15, s[50])),
                (H = f(H, P, D, A, m, 21, s[51])),
                (A = f(A, H, P, D, E, 6, s[52])),
                (D = f(D, A, H, P, p, 10, s[53])),
                (P = f(P, D, A, H, I, 15, s[54])),
                (H = f(H, P, D, A, c, 21, s[55])),
                (A = f(A, H, P, D, b, 6, s[56])),
                (D = f(D, A, H, P, k, 10, s[57])),
                (P = f(P, D, A, H, v, 15, s[58])),
                (H = f(H, P, D, A, _, 21, s[59])),
                (A = f(A, H, P, D, h, 6, s[60])),
                (D = f(D, A, H, P, S, 10, s[61])),
                (P = f(P, D, A, H, g, 15, s[62])),
                (H = f(H, P, D, A, w, 21, s[63])),
                (i[0] = (i[0] + A) | 0),
                (i[1] = (i[1] + H) | 0),
                (i[2] = (i[2] + P) | 0),
                (i[3] = (i[3] + D) | 0);
            },
            _doFinalize: function () {
              var t = this._data,
                n = t.words,
                o = 8 * this._nDataBytes,
                r = 8 * t.sigBytes;
              n[r >>> 5] |= 128 << (24 - (r % 32));
              var i = e.floor(o / 4294967296),
                a = o;
              (n[15 + (((r + 64) >>> 9) << 4)] =
                (16711935 & ((i << 8) | (i >>> 24))) |
                (4278255360 & ((i << 24) | (i >>> 8)))),
                (n[14 + (((r + 64) >>> 9) << 4)] =
                  (16711935 & ((a << 8) | (a >>> 24))) |
                  (4278255360 & ((a << 24) | (a >>> 8)))),
                (t.sigBytes = 4 * (n.length + 1)),
                this._process();
              for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                var d = c[u];
                c[u] =
                  (16711935 & ((d << 8) | (d >>> 24))) |
                  (4278255360 & ((d << 24) | (d >>> 8)));
              }
              return s;
            },
            clone: function () {
              var e = i.clone.call(this);
              return (e._hash = this._hash.clone()), e;
            },
          }));
          function u(e, t, n, o, r, i, a) {
            var s = e + ((t & n) | (~t & o)) + r + a;
            return ((s << i) | (s >>> (32 - i))) + t;
          }
          function d(e, t, n, o, r, i, a) {
            var s = e + ((t & o) | (n & ~o)) + r + a;
            return ((s << i) | (s >>> (32 - i))) + t;
          }
          function l(e, t, n, o, r, i, a) {
            var s = e + (t ^ n ^ o) + r + a;
            return ((s << i) | (s >>> (32 - i))) + t;
          }
          function f(e, t, n, o, r, i, a) {
            var s = e + (n ^ (t | ~o)) + r + a;
            return ((s << i) | (s >>> (32 - i))) + t;
          }
          (t.MD5 = i._createHelper(c)), (t.HmacMD5 = i._createHmacHelper(c));
        })(Math),
        o.MD5);
    },
    783: function (e, t, n) {
      var o, r, i, a, s, c, u, d;
      e.exports =
        ((r = (o = d = n(249)).lib),
        (i = r.WordArray),
        (a = r.Hasher),
        (s = o.algo),
        (c = []),
        (u = s.SHA1 =
          a.extend({
            _doReset: function () {
              this._hash = new i.init([
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
              ]);
            },
            _doProcessBlock: function (e, t) {
              for (
                var n = this._hash.words,
                  o = n[0],
                  r = n[1],
                  i = n[2],
                  a = n[3],
                  s = n[4],
                  u = 0;
                u < 80;
                u++
              ) {
                if (u < 16) c[u] = 0 | e[t + u];
                else {
                  var d = c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16];
                  c[u] = (d << 1) | (d >>> 31);
                }
                var l = ((o << 5) | (o >>> 27)) + s + c[u];
                (l +=
                  u < 20
                    ? 1518500249 + ((r & i) | (~r & a))
                    : u < 40
                    ? 1859775393 + (r ^ i ^ a)
                    : u < 60
                    ? ((r & i) | (r & a) | (i & a)) - 1894007588
                    : (r ^ i ^ a) - 899497514),
                  (s = a),
                  (a = i),
                  (i = (r << 30) | (r >>> 2)),
                  (r = o),
                  (o = l);
              }
              (n[0] = (n[0] + o) | 0),
                (n[1] = (n[1] + r) | 0),
                (n[2] = (n[2] + i) | 0),
                (n[3] = (n[3] + a) | 0),
                (n[4] = (n[4] + s) | 0);
            },
            _doFinalize: function () {
              var e = this._data,
                t = e.words,
                n = 8 * this._nDataBytes,
                o = 8 * e.sigBytes;
              return (
                (t[o >>> 5] |= 128 << (24 - (o % 32))),
                (t[14 + (((o + 64) >>> 9) << 4)] = Math.floor(n / 4294967296)),
                (t[15 + (((o + 64) >>> 9) << 4)] = n),
                (e.sigBytes = 4 * t.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var e = a.clone.call(this);
              return (e._hash = this._hash.clone()), e;
            },
          })),
        (o.SHA1 = a._createHelper(u)),
        (o.HmacSHA1 = a._createHmacHelper(u)),
        d.SHA1);
    },
    153: function (e, t, n) {
      var o;
      e.exports =
        ((o = n(249)),
        (function (e) {
          var t = o,
            n = t.lib,
            r = n.WordArray,
            i = n.Hasher,
            a = t.algo,
            s = [],
            c = [];
          !(function () {
            function t(t) {
              for (var n = e.sqrt(t), o = 2; o <= n; o++)
                if (!(t % o)) return !1;
              return !0;
            }
            function n(e) {
              return (4294967296 * (e - (0 | e))) | 0;
            }
            for (var o = 2, r = 0; r < 64; )
              t(o) &&
                (r < 8 && (s[r] = n(e.pow(o, 0.5))),
                (c[r] = n(e.pow(o, 1 / 3))),
                r++),
                o++;
          })();
          var u = [],
            d = (a.SHA256 = i.extend({
              _doReset: function () {
                this._hash = new r.init(s.slice(0));
              },
              _doProcessBlock: function (e, t) {
                for (
                  var n = this._hash.words,
                    o = n[0],
                    r = n[1],
                    i = n[2],
                    a = n[3],
                    s = n[4],
                    d = n[5],
                    l = n[6],
                    f = n[7],
                    g = 0;
                  g < 64;
                  g++
                ) {
                  if (g < 16) u[g] = 0 | e[t + g];
                  else {
                    var p = u[g - 15],
                      h =
                        ((p << 25) | (p >>> 7)) ^
                        ((p << 14) | (p >>> 18)) ^
                        (p >>> 3),
                      m = u[g - 2],
                      v =
                        ((m << 15) | (m >>> 17)) ^
                        ((m << 13) | (m >>> 19)) ^
                        (m >>> 10);
                    u[g] = h + u[g - 7] + v + u[g - 16];
                  }
                  var y = (o & r) ^ (o & i) ^ (r & i),
                    b =
                      ((o << 30) | (o >>> 2)) ^
                      ((o << 19) | (o >>> 13)) ^
                      ((o << 10) | (o >>> 22)),
                    w =
                      f +
                      (((s << 26) | (s >>> 6)) ^
                        ((s << 21) | (s >>> 11)) ^
                        ((s << 7) | (s >>> 25))) +
                      ((s & d) ^ (~s & l)) +
                      c[g] +
                      u[g];
                  (f = l),
                    (l = d),
                    (d = s),
                    (s = (a + w) | 0),
                    (a = i),
                    (i = r),
                    (r = o),
                    (o = (w + (b + y)) | 0);
                }
                (n[0] = (n[0] + o) | 0),
                  (n[1] = (n[1] + r) | 0),
                  (n[2] = (n[2] + i) | 0),
                  (n[3] = (n[3] + a) | 0),
                  (n[4] = (n[4] + s) | 0),
                  (n[5] = (n[5] + d) | 0),
                  (n[6] = (n[6] + l) | 0),
                  (n[7] = (n[7] + f) | 0);
              },
              _doFinalize: function () {
                var t = this._data,
                  n = t.words,
                  o = 8 * this._nDataBytes,
                  r = 8 * t.sigBytes;
                return (
                  (n[r >>> 5] |= 128 << (24 - (r % 32))),
                  (n[14 + (((r + 64) >>> 9) << 4)] = e.floor(o / 4294967296)),
                  (n[15 + (((r + 64) >>> 9) << 4)] = o),
                  (t.sigBytes = 4 * n.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var e = i.clone.call(this);
                return (e._hash = this._hash.clone()), e;
              },
            }));
          (t.SHA256 = i._createHelper(d)),
            (t.HmacSHA256 = i._createHmacHelper(d));
        })(Math),
        o.SHA256);
    },
  },
  function (e) {
    e((e.s = 999));
  },
]);
ihowpbjs.processQueue();
!(function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = { exports: {}, id: i, loaded: !1 });
    return e[i].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
  function (e, t, n) {
    var i = n(1),
      r = n(5),
      a = r.getMetaInfo(window);
    (window.IHPWT = window.IHPWT || {}),
      (window.IHPWT.bidMap = window.IHPWT.bidMap || {}),
      (window.IHPWT.bidIdMap = window.IHPWT.bidIdMap || {}),
      (window.IHPWT.isIframe = window.IHPWT.isIframe || a.isInIframe),
      (window.IHPWT.protocol = window.IHPWT.protocol || a.protocol),
      (window.IHPWT.secure = window.IHPWT.secure || a.secure),
      (window.IHPWT.pageURL = window.IHPWT.pageURL || a.pageURL),
      (window.IHPWT.refURL = window.IHPWT.refURL || a.refURL),
      (window.IHPWT.isSafeFrame = window.IHPWT.isSafeFrame || !1),
      (window.IHPWT.safeFrameMessageListenerAdded =
        window.IHPWT.safeFrameMessageListenerAdded || !1),
      (window.IHPWT.udpv =
        window.IHPWT.udpv ||
        r.findQueryParamInURL(a.isIframe ? a.refURL : a.pageURL, "pwtv")),
      r.findQueryParamInURL(a.isIframe ? a.refURL : a.pageURL, "pwtc") &&
        r.enableDebugLog(),
      r.findQueryParamInURL(a.isIframe ? a.refURL : a.pageURL, "pwtvc") &&
        r.enableVisualDebugLog(),
      (window.IHPWT.getUserIds = function () {
        return r.getUserIds();
      }),
      (window.IHPWT.versionDetails = r.getOWConfig()),
      i.init(window);
  },
  function (e, t, n) {
    var i = n(2),
      r = n(4),
      a = n(5),
      o = this,
      s = i.isIdentityOnly()
        ? r.COMMON.IH_NAMESPACE
        : r.COMMON.PREBID_NAMESPACE;
    (o.setConfig = function () {
      if (
        a.isFunction(window[s].setConfig) ||
        "function" == typeof window[s].setConfig
      ) {
        if (i.isIdentityOnly()) {
          var e = {
            debug: a.isDebugLogEnabled(),
            userSync: { syncDelay: 2e3 },
          };
          i.getGdpr() &&
            (e.consentManagement || (e.consentManagement = {}),
            (e.consentManagement.gdpr = {
              cmpApi: i.getCmpApi(),
              timeout: i.getGdprTimeout(),
              allowAuctionWithoutConsent: i.getAwc(),
            })),
            i.getCCPA() &&
              (e.consentManagement || (e.consentManagement = {}),
              (e.consentManagement.usp = {
                cmpApi: i.getCCPACmpApi(),
                timeout: i.getCCPATimeout(),
              })),
            (window.IHPWT.ssoEnabled = i.isSSOEnabled() || !1),
            i.isUserIdModuleEnabled() &&
              (e.userSync.userIds = a.getUserIdConfiguration()),
            a.handleHook(r.HOOKS.PREBID_SET_CONFIG, [e]),
            window[s].setConfig(e);
        }
        window[s].requestBids([]);
      }
    }),
      (t.initIdHub = function (e) {
        i.isUserIdModuleEnabled() &&
          (o.setConfig(),
          i.isIdentityOnly() &&
            (i.getIdentityConsumers().indexOf(r.COMMON.PREBID) > -1 &&
            !a.isUndefined(e[i.PBJS_NAMESPACE]) &&
            !a.isUndefined(e[i.PBJS_NAMESPACE].que)
              ? (e[i.PBJS_NAMESPACE].que.unshift(function () {
                  var t = e[i.PBJS_NAMESPACE].version.split(".");
                  if (
                    3 === t.length &&
                    (+t[0].split("v")[1] > 3 || ("v3" === t[0] && +t[1] >= 3))
                  )
                    a.log(
                      "Adding On Event " +
                        e[i.PBJS_NAMESPACE] +
                        ".addAddUnits()"
                    ),
                      e[i.PBJS_NAMESPACE].onEvent("addAdUnits", function () {
                        a.updateAdUnits(e[i.PBJS_NAMESPACE].adUnits);
                      }),
                      e[i.PBJS_NAMESPACE].onEvent(
                        "beforeRequestBids",
                        function (e) {
                          a.updateAdUnits(e);
                        }
                      );
                  else {
                    a.log(
                      "Adding Hook on" + e[i.PBJS_NAMESPACE] + ".addAddUnits()"
                    );
                    var n = e[i.PBJS_NAMESPACE],
                      r = "addAdUnits";
                    a.addHookOnFunction(n, !1, r, o.newAddAdUnitFunction);
                  }
                }),
                a.log("Identity Only Enabled and setting config"))
              : a.logWarning("window.pbjs is undefined")));
      }),
      (t.init = function (e) {
        return a.isObject(e) ? (o.initIdHub(e), !0) : !1;
      });
  },
  function (e, t, n) {
    var i = n(3),
      r = n(4),
      a = null;
    (a = this),
      (a[r.COMMON.OWVERSION] = i[r.CONFIG.COMMON][r.COMMON.OWVERSION]),
      (a[r.COMMON.PBVERSION] = i[r.CONFIG.COMMON][r.COMMON.PBVERSION]),
      (t.getGdpr = function () {
        var e =
          i[r.CONFIG.COMMON][r.CONFIG.GDPR_CONSENT] ||
          r.CONFIG.DEFAULT_GDPR_CONSENT;
        return "1" === e;
      }),
      (t.getCmpApi = function () {
        return (
          i[r.CONFIG.COMMON][r.CONFIG.GDPR_CMPAPI] ||
          r.CONFIG.DEFAULT_GDPR_CMPAPI
        );
      }),
      (t.getGdprTimeout = function () {
        var e = i[r.CONFIG.COMMON][r.CONFIG.GDPR_TIMEOUT];
        return e ? window.parseInt(e) : r.CONFIG.DEFAULT_GDPR_TIMEOUT;
      }),
      (t.getAwc = function () {
        var e =
          i[r.CONFIG.COMMON][r.CONFIG.GDPR_AWC] || r.CONFIG.DEFAULT_GDPR_AWC;
        return "1" === e;
      }),
      (t.isUserIdModuleEnabled = function () {
        return parseInt(
          i[r.CONFIG.COMMON][r.COMMON.ENABLE_USER_ID] ||
            r.CONFIG.DEFAULT_USER_ID_MODULE
        );
      }),
      (t.getIdentityPartners = function () {
        return i[r.COMMON.IDENTITY_PARTNERS];
      }),
      (t.isIdentityOnly = function () {
        return parseInt(
          i[r.CONFIG.COMMON][r.COMMON.IDENTITY_ONLY] ||
            r.CONFIG.DEFAULT_IDENTITY_ONLY
        );
      }),
      (t.getIdentityConsumers = function () {
        return (
          i[r.CONFIG.COMMON][r.COMMON.IDENTITY_CONSUMERS] || ""
        ).toLowerCase();
      }),
      (t.getCCPA = function () {
        var e =
          i[r.CONFIG.COMMON][r.CONFIG.CCPA_CONSENT] ||
          r.CONFIG.DEFAULT_CCPA_CONSENT;
        return "1" === e;
      }),
      (t.getCCPACmpApi = function () {
        return (
          i[r.CONFIG.COMMON][r.CONFIG.CCPA_CMPAPI] ||
          r.CONFIG.DEFAULT_CCPA_CMPAPI
        );
      }),
      (t.getCCPATimeout = function () {
        var e = i[r.CONFIG.COMMON][r.CONFIG.CCPA_TIMEOUT];
        return e ? window.parseInt(e) : r.CONFIG.DEFAULT_CCPA_TIMEOUT;
      }),
      (t.getProfileID = function () {
        return i.pwt[r.CONFIG.PROFILE_ID] || "0";
      }),
      (t.getProfileDisplayVersionID = function () {
        return i.pwt[r.CONFIG.PROFILE_VERSION_ID] || "0";
      }),
      (t.isSSOEnabled = function () {
        return 1 === parseInt(i[r.CONFIG.COMMON][r.CONFIG.SSO_ENABLED]);
      }),
      (t.PBJS_NAMESPACE =
        i[r.CONFIG.COMMON][r.COMMON.PBJS_NAMESPACE] || "pbjs");
  },
  function (e, t) {
    (t.pwt = {
      t: "3000",
      pid: "46",
      gcv: "11",
      pdvid: "4",
      pubid: "9999",
      dataURL: "t.test-domain.com/logger?",
      winURL: "t.test-domain.com/tracker?",
      adserver: "IDHUB",
      gdpr: "0",
      cmpApi: "iab",
      gdprTimeout: "10000",
      awc: "1",
      disableAjaxTimeout: !0,
      adServerCurrency: "INR",
      singleImpression: "1",
      identityEnabled: "1",
      identityConsumers: "Prebid",
      identityOnly: "1",
      ccpa: "0",
      ccpaCmpApi: "iab",
      ccpaTimeout: "10000",
      pbv: "v4.33.0",
      owv: "v21.4.0",
      abTestEnabled: "0",
      pubAnalyticsAdapter: "0",
      reduceCodeSize: 1,
      ssoEnabled: 1,
    }),
      (t.testConfigDetails = { testGroupSize: 99 }),
      (t.test_pwt = { t: 5e3 }),
      (t.adapters = {
        pubmatic: {
          rev_share: "0.0",
          throttle: "100",
          publisherId: "156209",
          kgp: "_W_x_H_@_W_x_H_:_AUI_",
        },
        audienceNetwork: {
          rev_share: "0.0",
          throttle: "100",
          kgp: "_DIV_",
          klm: {
            Div_1: { placementId: "8801674" },
            "Div-2": { placementId: "8801685" },
          },
        },
        sekindoUM: {
          rev_share: "0.0",
          throttle: "100",
          kgp: "_DIV_",
          klm: { Div_1: { spaceId: 14071 }, "Div-2": { spaceId: 14071 } },
        },
        appnexus: {
          rev_share: "0.0",
          throttle: "100",
          kgp: "_DIV_",
          klm: {
            Div_1: {
              placementId: "8801674",
              "video.mimes": "",
              "video.minduration": "",
            },
            "Div-2": { placementId: "8801685" },
          },
        },
        pulsepoint: {
          cp: "521732",
          rev_share: "0.0",
          throttle: "100",
          kgp: "_DIV_",
          klm: { Div_1: { ct: "76835" }, "Div-2": { ct: "147007" } },
        },
        rubicon: {
          accountId: "10998",
          rev_share: "0.0",
          timeout: "1000",
          throttle: "100",
          pt: 0,
          serverSideEnabled: "0",
          amp: 0,
          video: 0,
          "in-app": 0,
          kgp_rx: "_AU_@_DIV_@_W_x_H_",
          klm_rx: [
            {
              rx: { DIV: ".*", AU: "^/43743431/DMDemo", SIZE: "728x90" },
              rx_config: { zoneId: "869224", siteId: "178620", floor: "0" },
            },
          ],
        },
      }),
      (t.identityPartners = {
        pubCommonId: {
          name: "pubCommonId",
          "storage.type": "cookie",
          "storage.name": "_myPubCommonId",
          "storage.expires": "1825",
        },
        identityLink: {
          name: "identityLink",
          "storage.name": "lr_str_v2",
          "storage.type": "cookie",
          "storage.expires": "30",
          "storage.refreshInSeconds": "1800",
          "params.pid": "1258",
          "custom.loadLaunchPad": "true",
          "custom.configurationId": "b7e7b8be-68f5-40e5-a50d-753b38fa5c54",
          display: 0,
          rev_share: "0.0",
          throttle: "100",
        },
        criteo: { name: "criteo" },
        unifiedId: {
          name: "unifiedId",
          "params.url":
            "https://match.adsrvr.org/track/rid?ttd_pid=PubMatic&fmt=json",
          "storage.type": "cookie",
          "storage.name": "_myUnifiedId",
          "storage.expires": "1825",
        },
      }),
      (t.slotConfig = {
        configPattern: "_DIV_",
        config: {
          Div1: {
            banner: { enabled: !0 },
            native: {
              enabled: !0,
              config: {
                image: { required: !0, sizes: [150, 50] },
                title: { required: !0, len: 80 },
                sponsoredBy: { required: !0 },
                body: { required: !0 },
              },
            },
            video: {
              enabled: !0,
              config: {
                context: "instream",
                connectiontype: [1, 2, 6],
                minduration: 10,
                maxduration: 50,
                battr: [6, 7],
                skip: 1,
                skipmin: 10,
                skipafter: 15,
              },
              partnerConfig: { pubmatic: { outstreamAU: "pubmatic-test" } },
            },
          },
          AU2: { banner: {} },
        },
      });
  },
  function (e, t) {
    (t.COMMON = {
      BID_PRECISION: 2,
      DEAL_KEY_FIRST_PART: "pwtdeal_",
      DEAL_KEY_VALUE_SEPARATOR: "_-_",
      PREBID_PREFIX: "PB_",
      CONFIG: "config",
      DIV_ID: "divID",
      PARAMS: "params",
      SIZES: "sizes",
      HEIGHT: "height",
      WIDTH: "width",
      SLOTS: "slots",
      KEY_GENERATION_PATTERN_VALUE: "kgpv",
      KEY_VALUE_PAIRS: "kvp",
      IMPRESSION_ID: "iid",
      PARENT_ADAPTER_PREBID: "prebid",
      ANALYTICS_CURRENCY: "USD",
      NATIVE_MEDIA_TYPE_CONFIG: "nativeConfig",
      NATIVE_ONLY: "nativeOnly",
      OW_CLICK_NATIVE: "openwrap-native-click",
      BID_ID: "owbidid",
      AD_SERVER_CURRENCY: "adServerCurrency",
      SINGLE_IMPRESSION: "singleImpression",
      PREBID_NAMESPACE: "owpbjs",
      IH_NAMESPACE: "ihowpbjs",
      ENABLE_USER_ID: "identityEnabled",
      IDENTITY_PARTNERS: "identityPartners",
      IDENTITY_CONSUMERS: "identityConsumers",
      IDENTITY_ONLY: "identityOnly",
      PREBID: "prebid",
      PROTOCOL: "https://",
      SLOT_CONFIG: "slotConfig",
      DEFAULT: "default",
      ADSERVER: "adserver",
      OWVERSION: "owv",
      PBVERSION: "pbv",
      SCHAINOBJECT: "sChainObj",
      SCHAIN: "sChain",
      PBJS_NAMESPACE: "prebidObjName",
      TEST_GROUP_DETAILS: "testConfigDetails",
      TEST_PWT: "test_pwt",
      PRICE_GRANULARITY: "priceGranularity",
      GRANULARITY_MULTIPLIER: "granularityMultiplier",
      TEST_PARTNER: "test_adapters",
      REDUCE_CODE_SIZE: "reduceCodeSize",
      TEST_IDENTITY_PARTNER: "test_identityPartners",
    }),
      (t.CONFIG = {
        GLOBAL: "global",
        ADAPTERS: "adapters",
        COMMON: "pwt",
        TIMEOUT: "t",
        KEY_GENERATION_PATTERN: "kgp",
        REGEX_KEY_GENERATION_PATTERN: "kgp_rx",
        REGEX_KEY_LOOKUP_MAP: "klm_rx",
        KEY_LOOKUP_MAP: "klm",
        SERVER_SIDE_KEY: "sk",
        PUBLISHER_ID: "pubid",
        PROFILE_ID: "pid",
        PROFILE_VERSION_ID: "pdvid",
        LOGGER_URL: "dataURL",
        TRACKER_URL: "winURL",
        REV_SHARE: "rev_share",
        THROTTLE: "throttle",
        BID_PASS_THROUGH: "pt",
        GLOBAL_KEY_VALUE: "gkv",
        MASK_BIDS: "maksBids",
        META_DATA_PATTERN: "metaDataPattern",
        SEND_ALL_BIDS: "sendAllBids",
        SERVER_SIDE_ENABLED: "serverSideEnabled",
        GDPR_CONSENT: "gdpr",
        CONSENT_STRING: "cns",
        GDPR_CMPAPI: "cmpApi",
        GDPR_TIMEOUT: "gdprTimeout",
        GDPR_AWC: "awc",
        DEFAULT_GDPR_CMPAPI: "iab",
        DEFAULT_GDPR_TIMEOUT: 1e4,
        DEFAULT_GDPR_AWC: "0",
        DEFAULT_SINGLE_IMPRESSION: "0",
        DEFAULT_USER_ID_MODULE: "0",
        DEFAULT_IDENTITY_ONLY: "0",
        DEFAULT_GDPR_CONSENT: "0",
        DISABLE_AJAX_TIMEOUT: "disableAjaxTimeout",
        CCPA_CONSENT: "ccpa",
        CCPA_CMPAPI: "ccpaCmpApi",
        CCPA_TIMEOUT: "ccpaTimeout",
        DEFAULT_CCPA_CMPAPI: "iab",
        DEFAULT_CCPA_TIMEOUT: 1e4,
        CACHE_PATH: "/cache",
        CACHE_URL: "https://ow.pubmatic.com",
        VIDEO_PARAM: "video",
        ENABLE_PB_PM_ANALYTICS: "pubAnalyticsAdapter",
        FLOOR_PRICE_MODULE_ENABLED: "floorPriceModuleEnabled",
        FLOOR_AUCTION_DELAY: "floorAuctionDelay",
        DEFAULT_FLOOR_AUCTION_DELAY: 100,
        FLOOR_JSON_URL: "jsonUrl",
        FLOOR_ENFORCE_JS: "floorType",
        DEFAULT_FLOOR_ENFORCE_JS: !0,
        USE_PREBID_KEYS: "usePBJSKeys",
        AB_TEST_ENABLED: "abTestEnabled",
        TIMEOUT_ADJUSTMENT: 50,
        SSO_ENABLED: "ssoEnabled",
      }),
      (t.METADATA_MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        PARTNER: "_P_",
        GROSS_ECPM: "_GE_",
        NET_ECPM: "_NE_",
        BID_COUNT: "_BC_",
        PARTNER_COUNT: "_PC_",
      }),
      (t.MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        AD_UNIT_ID: "_AU_",
        AD_UNIT_INDEX: "_AUI_",
        INTEGER: "_I_",
        DIV: "_DIV_",
      }),
      (t.SLOT_STATUS = {
        CREATED: 0,
        PARTNERS_CALLED: 1,
        TARGETING_ADDED: 2,
        DISPLAYED: 3,
      }),
      (t.WRAPPER_TARGETING_KEYS = {
        BID_ID: "pwtsid",
        BID_STATUS: "pwtbst",
        BID_ECPM: "pwtecp",
        BID_DEAL_ID: "pwtdid",
        BID_ADAPTER_ID: "pwtpid",
        BID_SIZE: "pwtsz",
        PUBLISHER_ID: "pwtpubid",
        PROFILE_ID: "pwtprofid",
        PROFILE_VERSION_ID: "pwtverid",
        META_DATA: "pwtm",
        PLATFORM_KEY: "pwtplt",
        USER_IDS: "pwtuid",
        CACHE_ID: "pwtcid",
        CACHE_URL: "pwtcurl",
        CACHE_PATH: "pwtcpath",
      }),
      (t.IGNORE_PREBID_KEYS = {
        hb_bidder: 1,
        hb_adid: 1,
        hb_pb: 1,
        hb_size: 1,
        hb_deal: 1,
        hb_uuid: 1,
        hb_cache_host: 1,
        hb_cache_id: 1,
        hb_adomain: 1,
      }),
      (t.LOGGER_PIXEL_PARAMS = {
        TIMESTAMP: "tst",
        PAGE_URL: "purl",
        PAGE_DOMAIN: "orig",
        TIMEOUT: "to",
      }),
      (t.MESSAGES = {
        M1: ": In fetchbids.",
        M2: ": Throttled.",
        M3: ": adapter must implement the fetchBids() function.",
        M4: "BidManager: entry ",
        M5: ": Callback.",
        M6: "bidAlreadExists : ",
        M7: ": Exiting from fetchBids.",
        M8: ". Config not found, ignored.",
        M10: "Bid is rejected as ecpm is NULL.",
        M11: "Bid is rejected as ecpm is NaN: ",
        M12: "Existing bid ecpm: ",
        M13: ", is lower than new bid ecpm ",
        M14: ", so we are replacing bid from partner ",
        M15: ", is greater than new bid ecpm ",
        M16: ", so we are not replacing bid from partner ",
        M17: "Post timeout bid, ignored.",
        M18: "Bid is selected for partner ",
        M19: ": Found winning adapterID: ",
        M20: "Bid is rejected as ecpm is empty string.",
        M21: ": error in respose handler.",
        M22: "Bid is rejected as ecpm is <= 0.",
        M23: "Existing bid is default-bid with zero ecpm, thus replacing it with the new bid from partner ",
        M24: "Passsed argument is not a bidAdaptor",
        M25: "Bid details not found for bidID: ",
        M26: "Currency Module is Activated. Ad Server Currency is: ",
        M27: "Invalid regex pattern ",
        M28: "Unable to match regex pattern as kgpv length is not 3",
        M29: "Unable to parse Partner configuration",
        M30: "AB Test Enabled With Config",
        M31: "AB Test Enabled With Partner Config",
        IDENTITY: {
          M1: "Unable to get User Id from OpenIdentity",
          M2: "Setting UserIds to EB ",
          M3: "Unable to parse User ID configuration",
          M4: "User Id Condiguration Sent to prebid ",
          M5: "Identity only enabled, no need to process. Calling Original function ",
          M6: " function is not available. Make sure userId module is included.",
        },
      }),
      (t.PLATFORM_VALUES = {
        DISPLAY: "display",
        NATIVE: "native",
        VIDEO: "video",
      }),
      (t.FORMAT_VALUES = {
        BANNER: "banner",
        VIDEO: "video",
        NATIVE: "native",
        OTHER: "other",
      }),
      (t.HOOKS = {
        PREBID_SET_CONFIG: "HookForPrebidSetConfig",
        PREBID_REQUEST_BIDS: "HookForPrebidRequestBids",
        BID_RECEIVED: "HookForBidReceived",
        POST_AUCTION_KEY_VALUES: "HookForPostAuctionKeyValues",
      }),
      (t.SRA_ENABLED_BIDDERS = { rubicon: 1, improvedigital: 2 }),
      (t.EXCLUDE_IDENTITY_PARAMS = ["rev_share", "timeout", "throttle"]),
      (t.TOLOWERCASE_IDENTITY_PARAMS = ["storage.type"]),
      (t.JSON_VALUE_KEYS = ["params.clientIdentifier"]),
      (t.AD_SERVER = { DFP: "DFP", CUSTOM: "CUSTOM" }),
      (t.SPECIAL_CASE_ID_PARTNERS = {
        intentIqId: { "params.partner": "number" },
        sharedId: { "params.syncTime": "number" },
        id5Id: { "params.partner": "number" },
        parrableId: { "params.timezoneFilter.allowedZones": "array" },
        imuid: { "params.cid": "number" },
      }),
      (t.ID_PARTNERS_CUSTOM_VALUES = {
        id5Id: [{ key: "params.provider", value: "pubmatic-identity-hub" }],
        identityLink: [{ key: "storage.refreshInSeconds", value: "1800" }],
      }),
      (t.EXCLUDE_PARTNER_LIST = ["pubProvidedId"]),
      (t.MEDIATYPE = { BANNER: 0, VIDEO: 1, NATIVE: 2 }),
      (t.BID_STATUS = { BID_REJECTED: "bidRejected" }),
      (t.PUBMATIC_ALIASES = ["pubmatic2"]),
      (t.PBSPARAMS = {
        adapter: "prebidServer",
        endpoint: "https://ow.pubmatic.com/pbs/openrtb2/auction",
        syncEndpoint: "https://ow.pubmatic.com/cookie_sync/?sec=1",
      }),
      (t.TIMEOUT_CONFIG = { MaxTimeout: 500, MinTimeout: 200 }),
      (t.DEFAULT_ALIASES = {
        adg: "adgeneration",
        districtm: "appnexus",
        districtmDMX: "dmx",
        pubmatic2: "pubmatic",
      }),
      (t.YAHOOSSP = "yahoossp");
  },
  function (e, t, n) {
    function i(e, t) {
      return u.call(e) === "[object " + t + "]";
    }
    var r = n(2),
      a = n(4),
      o = !1;
    t.debugLogIsEnabled = o;
    var s = "Array",
      d = "String",
      c = "Function",
      E = "Number",
      u = Object.prototype.toString,
      I = this,
      p = r.isIdentityOnly()
        ? a.COMMON.IH_NAMESPACE
        : a.COMMON.PREBID_NAMESPACE;
    (I.idsAppendedToAdUnits = !1),
      (t.isA = i),
      (t.isFunction = function (e) {
        return I.isA(e, c);
      }),
      (t.isString = function (e) {
        return I.isA(e, d);
      }),
      (t.isArray = function (e) {
        return I.isA(e, s);
      }),
      (t.isNumber = function (e) {
        return I.isA(e, E);
      }),
      (t.isObject = function (e) {
        return "object" == typeof e && null !== e;
      }),
      (t.isOwnProperty = function (e, t) {
        return I.isObject(e) && e.hasOwnProperty
          ? Object.prototype.hasOwnProperty.call(e, t)
          : !1;
      }),
      (t.isUndefined = function (e) {
        return "undefined" == typeof e;
      }),
      (t.enableDebugLog = function () {
        I.debugLogIsEnabled = !0;
      }),
      (t.isDebugLogEnabled = function () {
        return I.debugLogIsEnabled;
      }),
      (t.enableVisualDebugLog = function () {
        (I.debugLogIsEnabled = !0), (I.visualDebugLogIsEnabled = !0);
      }),
      (t.isEmptyObject = function (e) {
        return I.isObject(e) && 0 === Object.keys(e).length;
      });
    var _ = "[OpenWrap] : ",
      l = "[OpenWrap] : [Error]";
    (t.log = function (e) {
      I.debugLogIsEnabled &&
        console &&
        this.isFunction(console.log) &&
        (this.isString(e)
          ? console.log(new Date().getTime() + " : " + _ + e)
          : console.log(e));
    }),
      (t.logError = function (e) {
        I.debugLogIsEnabled &&
          console &&
          this.isFunction(console.log) &&
          (this.isString(e)
            ? console.error(new Date().getTime() + " : " + _ + e)
            : console.error(e));
      }),
      (t.logWarning = function (e) {
        I.debugLogIsEnabled &&
          console &&
          this.isFunction(console.log) &&
          (this.isString(e)
            ? console.warn(new Date().getTime() + " : " + _ + e)
            : console.warn(e));
      }),
      (t.error = function (e) {
        console.log(new Date().getTime() + " : " + l, e);
      }),
      (t.forEachOnObject = function (e, t) {
        if (I.isObject(e) && I.isFunction(t))
          for (var n in e) I.isOwnProperty(e, n) && t(n, e[n]);
      }),
      (t.getTopFrameOfSameDomain = function (e) {
        try {
          if (e.parent.document != e.document)
            return I.getTopFrameOfSameDomain(e.parent);
        } catch (t) {}
        return e;
      }),
      (t.metaInfo = {}),
      (t.getMetaInfo = function (e) {
        var t,
          n = {},
          i = 512;
        (n.pageURL = ""),
          (n.refURL = ""),
          (n.protocol = "https://"),
          (n.secure = 1),
          (n.isInIframe = I.isIframe(e));
        try {
          (t = I.getTopFrameOfSameDomain(e)),
            (n.refURL = (t.refurl || t.document.referrer || "").substr(0, i)),
            (n.pageURL = (
              t !== window.top && "" != t.document.referrer
                ? t.document.referrer
                : t.location.href
            ).substr(0, i)),
            (n.protocol = (function (e) {
              return "http:" === e.location.protocol
                ? ((n.secure = 0), "http://")
                : ((n.secure = 1), "https://");
            })(t));
        } catch (r) {}
        return (
          (n.pageDomain = I.getDomainFromURL(n.pageURL)), (I.metaInfo = n), n
        );
      }),
      (t.isIframe = function (e) {
        try {
          return e.self !== e.top;
        } catch (t) {
          return !1;
        }
      }),
      (t.findQueryParamInURL = function (e, t) {
        return I.isOwnProperty(I.parseQueryParams(e), t);
      }),
      (t.parseQueryParams = function (e) {
        var t = I.createDocElement(window, "a");
        t.href = e;
        var n = {};
        if (t.search) {
          var i = t.search.replace("?", "");
          (i = i.split("&")),
            I.forEachOnArray(i, function (e, t) {
              t = t.split("=");
              var i = t[0] || "",
                r = t[1] || "";
              n[i] = r;
            });
        }
        return n;
      }),
      (t.createDocElement = function (e, t) {
        return e.document.createElement(t);
      }),
      (t.addHookOnFunction = function (e, t, n, i) {
        var r = e;
        if (((e = t ? e.__proto__ : e), I.isObject(e) && I.isFunction(e[n]))) {
          var a = e[n];
          e[n] = i(r, a);
        } else
          I.logWarning(
            "in assignNewDefination: oldReference is not a function"
          );
      }),
      (t.getUserIdConfiguration = function () {
        var e = [];
        return (
          window[p].onSSOLogin({}),
          I.forEachOnObject(r.getIdentityPartners(), function (t, n) {
            a.EXCLUDE_PARTNER_LIST.includes(t) || e.push(I.getUserIdParams(n));
          }),
          I.log(a.MESSAGES.IDENTITY.M4 + JSON.stringify(e)),
          e
        );
      }),
      (t.deleteCustomParams = function (e) {
        return delete e.custom, e;
      }),
      (t.getUserIdParams = function (e) {
        var t = {};
        I.applyDataTypeChangesIfApplicable(e),
          I.applyCustomParamValuesfApplicable(e);
        for (var n in e)
          try {
            -1 == a.EXCLUDE_IDENTITY_PARAMS.indexOf(n) &&
              (a.TOLOWERCASE_IDENTITY_PARAMS.indexOf(n) > -1 &&
                (e[n] = e[n].toLowerCase()),
              a.JSON_VALUE_KEYS.indexOf(n) > -1 && (e[n] = JSON.parse(e[n])),
              (t = I.getNestedObjectFromString(t, ".", n, e[n])));
          } catch (i) {
            I.logWarning(a.MESSAGES.IDENTITY.M3, i);
          }
        return (
          t && t.params && "true" == t.params.loadATS && I.initLiveRampAts(t),
          t && t.params && "true" == t.params.loadIDP && I.initZeoTapJs(t),
          t &&
            t.params &&
            "true" == t.params.loadLauncher &&
            I.initLauncherJs(t),
          t &&
            t.custom &&
            "true" == t.custom.loadLaunchPad &&
            I.initLiveRampLaunchPad(t),
          I.deleteCustomParams(Object.assign({}, t))
        );
      }),
      (t.getUserIds = function () {
        return I.isFunction(window[p].getUserIds)
          ? window[p].getUserIds()
          : (I.logWarning("getUserIds" + a.MESSAGES.IDENTITY.M6), void 0);
      }),
      (t.getDomainFromURL = function (e) {
        var t = window.document.createElement("a");
        return (t.href = e), t.hostname;
      }),
      (t.handleHook = function (e, t) {
        I.isFunction(window.IHPWT[e]) &&
          (I.log(
            "For Hook-name: " + e + ", calling window.IHPWT." + e + "function."
          ),
          window.IHPWT[e].apply(window.IHPWT, t));
      }),
      (t.forEachOnArray = function (e, t) {
        if (I.isArray(e) && I.isFunction(t))
          for (var n = 0, i = e.length; i > n; n++) t(n, e[n]);
      }),
      (t.getUserIdsAsEids = function () {
        return I.isFunction(window[p].getUserIdsAsEids)
          ? window[p].getUserIdsAsEids()
          : (I.logWarning("getUserIdsAsEids" + a.MESSAGES.IDENTITY.M6), void 0);
      }),
      (t.getNestedObjectFromArray = function (e, t, n) {
        for (var i = e, r = i, a = 0; a < t.length - 1; a++)
          r[t[a]] || (r[t[a]] = {}), (r = r[t[a]]);
        return (r[t[t.length - 1]] = n), i;
      }),
      (t.getNestedObjectFromString = function (e, t, n, i) {
        var r = n.split(t);
        return (
          1 == r.length
            ? (e[n] = i)
            : (e = I.getNestedObjectFromArray(e, r, i)),
          e
        );
      }),
      (t.getLiverampParams = function (e) {
        e.params.cssSelectors &&
          e.params.cssSelectors.length > 0 &&
          (e.params.cssSelectors = e.params.cssSelectors.split(","));
        var t = window[p].getUserIdentities() || {},
          n = r.isSSOEnabled() || !1,
          i = e.params.detectionMechanism,
          a = "true" === e.params.enableCustomId ? !0 : !1,
          o = {
            placementID: e.params.pid,
            storageType: e.params.storageType,
            logging: e.params.logging,
          };
        switch (
          (a &&
            ((o.accountID = e.params.accountID),
            (o.customerIDRegex = e.params.customerIDRegex),
            (o.detectionSubject = "customerIdentifier")),
          i)
        ) {
          case void 0:
          case "detect":
            (o.detectionType = e.params.detectionType),
              (o.urlParameter = e.params.urlParameter),
              (o.cssSelectors = e.params.cssSelectors),
              (o.detectDynamicNodes = e.params.detectDynamicNodes),
              (o.detectionEventType = e.params.detectionEventType),
              e.params.triggerElements &&
                e.params.triggerElements.length > 0 &&
                ((e.params.triggerElements =
                  e.params.triggerElements.split(",")),
                (o.triggerElements = e.params.triggerElements));
            break;
          case "direct":
            var s =
              n && t.emailHash
                ? t.emailHash
                : t.pubProvidedEmailHash
                ? t.pubProvidedEmailHash
                : void 0;
            (o.emailHashes = (s && [s.MD5, s.SHA1, s.SHA256]) || void 0),
              a &&
                I.isFunction(window[p].getUserIdentities) &&
                void 0 !== window[p].getUserIdentities() &&
                (o.customerID =
                  window[p].getUserIdentities().customerID || void 0);
        }
        return o;
      }),
      (t.initLiveRampAts = function (e) {
        function t() {
          var t = document.createElement("script"),
            n = I.getLiverampParams(e);
          (t.onload = function () {
            window.ats && window.ats.start(n);
          }),
            (t.src = "https://ats.rlcdn.com/ats.js"),
            document.body.appendChild(t);
        }
        "complete" == document.readyState
          ? t()
          : window.addEventListener("load", function () {
              setTimeout(t, 1e3);
            });
      }),
      (t.getEmailHashes = function () {
        var e = window[p].getUserIdentities() || {},
          t = r.isSSOEnabled() || !1,
          n =
            t && e.emailHash
              ? e.emailHash
              : e.pubProvidedEmailHash
              ? e.pubProvidedEmailHash
              : void 0;
        return (n && [n.MD5, n.SHA1, n.SHA256]) || void 0;
      }),
      (t.initLiveRampLaunchPad = function (e) {
        function t() {
          var e = document.createElement("script");
          (e.onload = function () {
            __launchpad(
              "addEventListener",
              1,
              function () {
                var e =
                  !ats.outputCurrentConfiguration().DETECTION_MODULE_INFO ||
                  ats.outputCurrentConfiguration().ENVELOPE_MODULE_INFO
                    .ENVELOPE_MODULE_CONFIG.startWithExternalId;
                if (e) {
                  var t = I.getEmailHashes();
                  t &&
                    window.ats.setAdditionalData({
                      type: "emailHashes",
                      id: t,
                    });
                }
              },
              ["atsWrapperLoaded"]
            );
          }),
            (e.src = n),
            document.body.appendChild(e);
        }
        var n =
          "https://launchpad-wrapper.privacymanager.io/" +
          e.custom.configurationId +
          "/launchpad-liveramp.js";
        "complete" == document.readyState
          ? t()
          : window.addEventListener("load", function () {
              setTimeout(t, 1e3);
            });
      }),
      (t.initLauncherJs = function (e) {
        function t() {
          var t = document.createElement("script"),
            n = I.getPublinkLauncherParams(e);
          (t.onload = function () {
            (window.conversant.getLauncherObject = function () {
              return n;
            }),
              window.conversant &&
                window.conversant.launch("publink", "start", n);
          }),
            (t.src =
              "https://secure.cdn.fastclick.net/js/cnvr-launcher/latest/launcher-stub.min.js"),
            document.body.appendChild(t);
        }
        (window.cnvr_launcher_options = { lid: e.params.launcher_id }),
          "complete" == document.readyState
            ? t()
            : window.addEventListener("load", function () {
                setTimeout(t, 1e3);
              });
      }),
      (t.getPublinkLauncherParams = function (e) {
        e.params.cssSelectors &&
          e.params.cssSelectors.length > 0 &&
          (e.params.cssSelectors = e.params.cssSelectors.split(","));
        var t = window[p].getUserIdentities() || {},
          n = r.isSSOEnabled() || !1,
          i = e.params.detectionMechanism,
          a = { apiKey: e.params.api_key, siteId: e.params.site_id };
        switch (i) {
          case void 0:
          case "detect":
            (a.urlParameter = e.params.urlParameter),
              (a.cssSelectors = e.params.cssSelectors),
              (a.detectionSubject = "email");
            break;
          case "direct":
            var o =
              n && t.emailHash
                ? t.emailHash
                : t.pubProvidedEmailHash
                ? t.pubProvidedEmailHash
                : void 0;
            a.emailHashes = (o && [o.MD5, o.SHA256]) || void 0;
        }
        return a;
      }),
      (t.initZeoTapJs = function (e) {
        function t() {
          var t = document,
            n = window,
            i = window[p].getUserIdentities() || {},
            a = r.isSSOEnabled() || !1,
            o = {
              email:
                a && i.emailHash
                  ? i.emailHash.SHA256
                  : i.pubProvidedEmailHash
                  ? i.pubProvidedEmailHash.SHA256
                  : void 0,
            },
            s = t.createElement("script");
          (s.type = "text/javascript"),
            (s.crossorigin = "anonymous"),
            (s.async = !0),
            (s.src = "https://content.zeotap.com/sdk/idp.min.js"),
            (s.onload = function () {}),
            (t = t.getElementsByTagName("script")[0]);
          var d = {
            partnerId: e.partnerId,
            allowIDP: !0,
            useConsent: r.getCCPA() || r.getGdpr(),
            checkForCMP: r.getCCPA() || r.getGdpr(),
          };
          t.parentNode.insertBefore(s, t),
            (t = n.zeotap || { _q: [], _qcmp: [] }),
            !(function (e, t, n) {
              for (var i = 0; i < t.length; i++)
                !(function (t) {
                  e[t] = function () {
                    e[n].push(
                      [t].concat(Array.prototype.slice.call(arguments, 0))
                    );
                  };
                })(t[i]);
            })(t, ["callMethod"], "_q"),
            (n.zeotap = t),
            n.zeotap.callMethod("init", d),
            n.zeotap.callMethod("setUserIdentities", o, !0);
        }
        "complete" == document.readyState
          ? t()
          : window.addEventListener("load", function () {
              setTimeout(t, 1e3);
            });
      }),
      (t.updateAdUnits = function (e) {
        I.isArray(e)
          ? e.forEach(function (e) {
              e.bids.forEach(function (e) {
                I.updateUserIds(e);
              });
            })
          : I.isEmptyObject(e) ||
            e.bids.forEach(function (e) {
              I.updateUserIds(e);
            });
      }),
      (t.updateUserIds = function (e) {
        if (
          (I.isUndefined(e.userId)
            ? (e.userId = I.getUserIds())
            : e.userId && (e.userId = Object.assign(e.userId, I.getUserIds())),
          I.isUndefined(e.userIdAsEids))
        )
          e.userIdAsEids = I.getUserIdsAsEids();
        else if (I.isArray(e.userIdAsEids)) {
          var t = new Set(),
            n = I.getUserIdsAsEids().concat(e.userIdAsEids);
          I.isArray(n) &&
            n.length > 0 &&
            (n = n.filter(function (e) {
              if (e.source) {
                if (t.has(e.source)) return !1;
                t.add(e.source);
              }
              return !0;
            })),
            (e.userIdAsEids = n);
        }
      }),
      (t.applyDataTypeChangesIfApplicable = function (e) {
        var t;
        if (e.name in a.SPECIAL_CASE_ID_PARTNERS)
          for (partnerName in a.SPECIAL_CASE_ID_PARTNERS)
            if (partnerName === e.name)
              for (key in a.SPECIAL_CASE_ID_PARTNERS[partnerName]) {
                var n = e[key];
                switch (a.SPECIAL_CASE_ID_PARTNERS[partnerName][key]) {
                  case "number":
                    n &&
                      "number" != typeof n &&
                      ((t = parseInt(n)),
                      isNaN(t)
                        ? I.logError(
                            partnerName +
                              ": Invalid parameter value '" +
                              n +
                              "' for parameter " +
                              key
                          )
                        : (e[key] = t));
                    break;
                  case "array":
                    if (n)
                      if ("string" == typeof n) {
                        var i = n.split(",").map(function (e) {
                          return e.trim();
                        });
                        i.length > 0 && (e[key] = i);
                      } else "number" == typeof n && (e[key] = [n]);
                  default:
                    return;
                }
              }
      }),
      (t.applyCustomParamValuesfApplicable = function (e) {
        if (e.name in a.ID_PARTNERS_CUSTOM_VALUES)
          for (
            var t = a.ID_PARTNERS_CUSTOM_VALUES[e.name], n = 0;
            n < t.length;
            n++
          )
            e[t[n].key] || (e[t[n].key] = t[n].value);
      }),
      (t.getOWConfig = function () {
        var e = {
          openwrap_version: r[a.COMMON.OWVERSION],
          prebid_version: r[a.COMMON.PBVERSION],
          profileId: r.getProfileID(),
          profileVersionId: r.getProfileDisplayVersionID(),
        };
        return e;
      });
  },
]);
