require = (function(r, e, n) {
  function t(n, o) {
    function i(r) {
      return t(i.resolve(r))
    }
    function f(e) {
      return r[n][1][e] || e
    }
    if (!e[n]) {
      if (!r[n]) {
        var c = 'function' == typeof require && require
        if (!o && c) return c(n, !0)
        if (u) return u(n, !0)
        var l = new Error("Cannot find module '" + n + "'")
        throw ((l.code = 'MODULE_NOT_FOUND'), l)
      }
      i.resolve = f
      var s = (e[n] = new t.Module(n))
      r[n][0].call(s.exports, i, s, s.exports)
    }
    return e[n].exports
  }
  function o(r) {
    ;(this.id = r), (this.bundle = t), (this.exports = {})
  }
  var u = 'function' == typeof require && require
  ;(t.isParcelRequire = !0),
    (t.Module = o),
    (t.modules = r),
    (t.cache = e),
    (t.parent = u)
  for (var i = 0; i < n.length; i++) t(n[i])
  return t
})(
  {
    33: [
      function(require, module, exports) {
        var global =
          typeof global === 'object'
            ? global
            : typeof window === 'object'
            ? window
            : typeof self === 'object'
            ? self
            : this
        var n =
          'object' == typeof n
            ? n
            : 'object' == typeof window
            ? window
            : 'object' == typeof self
            ? self
            : this
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(n) {
                  return typeof n
                }
              : function(n) {
                  return n &&
                    'function' == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? 'symbol'
                    : typeof n
                },
          e = Object.keys,
          r = Array.isArray,
          i =
            'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : n
        function o(n, r) {
          return 'object' !== (void 0 === r ? 'undefined' : t(r))
            ? n
            : (e(r).forEach(function(t) {
                n[t] = r[t]
              }),
              n)
        }
        var u = Object.getPrototypeOf,
          a = {}.hasOwnProperty
        function c(n, t) {
          return a.call(n, t)
        }
        function s(n, t) {
          'function' == typeof t && (t = t(u(n))),
            e(t).forEach(function(e) {
              l(n, e, t[e])
            })
        }
        var f = Object.defineProperty
        function l(n, t, e, r) {
          f(
            n,
            t,
            o(
              e && c(e, 'get') && 'function' == typeof e.get
                ? { get: e.get, set: e.set, configurable: !0 }
                : { value: e, configurable: !0, writable: !0 },
              r
            )
          )
        }
        function h(n) {
          return {
            from: function(t) {
              return (
                (n.prototype = Object.create(t.prototype)),
                l(n.prototype, 'constructor', n),
                { extend: s.bind(null, n.prototype) }
              )
            },
          }
        }
        var d = Object.getOwnPropertyDescriptor
        function v(n, t) {
          var e
          return d(n, t) || ((e = u(n)) && v(e, t))
        }
        var p = [].slice
        function y(n, t, e) {
          return p.call(n, t, e)
        }
        function m(n, t) {
          return t(n)
        }
        function g(n) {
          if (!n) throw new Error('Assertion Failed')
        }
        function b(n) {
          i.setImmediate ? setImmediate(n) : setTimeout(n, 0)
        }
        function w(n, t) {
          return n.reduce(function(n, e, r) {
            var i = t(e, r)
            return i && (n[i[0]] = i[1]), n
          }, {})
        }
        function _(n, t) {
          return function() {
            try {
              n.apply(this, arguments)
            } catch (n) {
              t(n)
            }
          }
        }
        function k(n, t, e) {
          try {
            n.apply(null, e)
          } catch (n) {
            t && t(n)
          }
        }
        function x(n, t) {
          if (c(n, t)) return n[t]
          if (!t) return n
          if ('string' != typeof t) {
            for (var e = [], r = 0, i = t.length; r < i; ++r) {
              var o = x(n, t[r])
              e.push(o)
            }
            return e
          }
          var u = t.indexOf('.')
          if (-1 !== u) {
            var a = n[t.substr(0, u)]
            return void 0 === a ? void 0 : x(a, t.substr(u + 1))
          }
        }
        function j(n, t, e) {
          if (
            n &&
            void 0 !== t &&
            !('isFrozen' in Object && Object.isFrozen(n))
          )
            if ('string' != typeof t && 'length' in t) {
              g('string' != typeof e && 'length' in e)
              for (var r = 0, i = t.length; r < i; ++r) j(n, t[r], e[r])
            } else {
              var o = t.indexOf('.')
              if (-1 !== o) {
                var u = t.substr(0, o),
                  a = t.substr(o + 1)
                if ('' === a) void 0 === e ? delete n[u] : (n[u] = e)
                else {
                  var c = n[u]
                  c || (c = n[u] = {}), j(c, a, e)
                }
              } else void 0 === e ? delete n[t] : (n[t] = e)
            }
        }
        function P(n, t) {
          'string' == typeof t
            ? j(n, t, void 0)
            : 'length' in t &&
              [].map.call(t, function(t) {
                j(n, t, void 0)
              })
        }
        function E(n) {
          var t = {}
          for (var e in n) c(n, e) && (t[e] = n[e])
          return t
        }
        var S = [].concat
        function A(n) {
          return S.apply([], n)
        }
        var O = 'Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set'
          .split(',')
          .concat(
            A(
              [8, 16, 32, 64].map(function(n) {
                return ['Int', 'Uint', 'Float'].map(function(t) {
                  return t + n + 'Array'
                })
              })
            )
          )
          .filter(function(n) {
            return i[n]
          })
          .map(function(n) {
            return i[n]
          })
        function D(n) {
          if (!n || 'object' !== (void 0 === n ? 'undefined' : t(n))) return n
          var e
          if (r(n)) {
            e = []
            for (var i = 0, o = n.length; i < o; ++i) e.push(D(n[i]))
          } else if (O.indexOf(n.constructor) >= 0) e = n
          else
            for (var u in ((e = n.constructor
              ? Object.create(n.constructor.prototype)
              : {}),
            n))
              c(n, u) && (e[u] = D(n[u]))
          return e
        }
        function I(n, r, i, o) {
          return (
            (i = i || {}),
            (o = o || ''),
            e(n).forEach(function(e) {
              if (c(r, e)) {
                var u = n[e],
                  a = r[e]
                'object' === (void 0 === u ? 'undefined' : t(u)) &&
                'object' === (void 0 === a ? 'undefined' : t(a)) &&
                u &&
                a &&
                '' + u.constructor == '' + a.constructor
                  ? I(u, a, i, o + e + '.')
                  : u !== a && (i[o + e] = r[e])
              } else i[o + e] = void 0
            }),
            e(r).forEach(function(t) {
              c(n, t) || (i[o + t] = r[t])
            }),
            i
          )
        }
        var C = 'undefined' != typeof Symbol && Symbol.iterator,
          K = C
            ? function(n) {
                var t
                return null != n && (t = n[C]) && t.apply(n)
              }
            : function() {
                return null
              },
          T = {}
        function F(n) {
          var t, e, i, o
          if (1 === arguments.length) {
            if (r(n)) return n.slice()
            if (this === T && 'string' == typeof n) return [n]
            if ((o = K(n))) {
              for (e = []; !(i = o.next()).done; ) e.push(i.value)
              return e
            }
            if (null == n) return [n]
            if ('number' == typeof (t = n.length)) {
              for (e = new Array(t); t--; ) e[t] = n[t]
              return e
            }
            return [n]
          }
          for (t = arguments.length, e = new Array(t); t--; )
            e[t] = arguments[t]
          return e
        }
        var B =
          'undefined' != typeof location &&
          /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href)
        function M(n, t) {
          ;(B = n), (N = t)
        }
        var N = function() {
            return !0
          },
          q = !new Error('').stack
        function R() {
          'use strict'
          if (q)
            try {
              throw (R.arguments, new Error())
            } catch (n) {
              return n
            }
          return new Error()
        }
        function U(n, t) {
          var e = n.stack
          return e
            ? ((t = t || 0),
              0 === e.indexOf(n.name) &&
                (t += (n.name + n.message).split('\n').length),
              e
                .split('\n')
                .slice(t)
                .filter(N)
                .map(function(n) {
                  return '\n' + n
                })
                .join(''))
            : ''
        }
        function V(n, t) {
          return function() {
            return (
              console.warn(
                n +
                  ' is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. ' +
                  U(R(), 1)
              ),
              t.apply(this, arguments)
            )
          }
        }
        var z = [
            'Modify',
            'Bulk',
            'OpenFailed',
            'VersionChange',
            'Schema',
            'Upgrade',
            'InvalidTable',
            'MissingAPI',
            'NoSuchDatabase',
            'InvalidArgument',
            'SubTransaction',
            'Unsupported',
            'Internal',
            'DatabaseClosed',
            'PrematureCommit',
            'ForeignAwait',
          ],
          L = [
            'Unknown',
            'Constraint',
            'Data',
            'TransactionInactive',
            'ReadOnly',
            'Version',
            'NotFound',
            'InvalidState',
            'InvalidAccess',
            'Abort',
            'Timeout',
            'QuotaExceeded',
            'Syntax',
            'DataClone',
          ],
          W = z.concat(L),
          Q = {
            VersionChanged:
              'Database version changed by other database connection',
            DatabaseClosed: 'Database has been closed',
            Abort: 'Transaction aborted',
            TransactionInactive: 'Transaction has already completed or failed',
          }
        function H(n, t) {
          ;(this._e = R()), (this.name = n), (this.message = t)
        }
        function G(n, t) {
          return (
            n +
            '. Errors: ' +
            t
              .map(function(n) {
                return n.toString()
              })
              .filter(function(n, t, e) {
                return e.indexOf(n) === t
              })
              .join('\n')
          )
        }
        function J(n, t, e, r) {
          ;(this._e = R()),
            (this.failures = t),
            (this.failedKeys = r),
            (this.successCount = e)
        }
        function Y(n, t) {
          ;(this._e = R()),
            (this.name = 'BulkError'),
            (this.failures = t),
            (this.message = G(n, t))
        }
        h(H)
          .from(Error)
          .extend({
            stack: {
              get: function() {
                return (
                  this._stack ||
                  (this._stack =
                    this.name + ': ' + this.message + U(this._e, 2))
                )
              },
            },
            toString: function() {
              return this.name + ': ' + this.message
            },
          }),
          h(J).from(H),
          h(Y).from(H)
        var $ = W.reduce(function(n, t) {
            return (n[t] = t + 'Error'), n
          }, {}),
          X = H,
          Z = W.reduce(function(n, e) {
            var r = e + 'Error'
            function i(n, i) {
              ;(this._e = R()),
                (this.name = r),
                n
                  ? 'string' == typeof n
                    ? ((this.message = n), (this.inner = i || null))
                    : 'object' === (void 0 === n ? 'undefined' : t(n)) &&
                      ((this.message = n.name + ' ' + n.message),
                      (this.inner = n))
                  : ((this.message = Q[e] || r), (this.inner = null))
            }
            return h(i).from(X), (n[e] = i), n
          }, {})
        ;(Z.Syntax = SyntaxError), (Z.Type = TypeError), (Z.Range = RangeError)
        var nn = L.reduce(function(n, t) {
          return (n[t + 'Error'] = Z[t]), n
        }, {})
        function tn(n, t) {
          if (
            !n ||
            n instanceof H ||
            n instanceof TypeError ||
            n instanceof SyntaxError ||
            !n.name ||
            !nn[n.name]
          )
            return n
          var e = new nn[n.name](t || n.message, n)
          return (
            'stack' in n &&
              l(e, 'stack', {
                get: function() {
                  return this.inner.stack
                },
              }),
            e
          )
        }
        var en = W.reduce(function(n, t) {
          return (
            -1 === ['Syntax', 'Type', 'Range'].indexOf(t) &&
              (n[t + 'Error'] = Z[t]),
            n
          )
        }, {})
        function rn() {}
        function on(n) {
          return n
        }
        function un(n, t) {
          return null == n || n === on
            ? t
            : function(e) {
                return t(n(e))
              }
        }
        function an(n, t) {
          return function() {
            n.apply(this, arguments), t.apply(this, arguments)
          }
        }
        function cn(n, t) {
          return n === rn
            ? t
            : function() {
                var e = n.apply(this, arguments)
                void 0 !== e && (arguments[0] = e)
                var r = this.onsuccess,
                  i = this.onerror
                ;(this.onsuccess = null), (this.onerror = null)
                var o = t.apply(this, arguments)
                return (
                  r &&
                    (this.onsuccess = this.onsuccess
                      ? an(r, this.onsuccess)
                      : r),
                  i && (this.onerror = this.onerror ? an(i, this.onerror) : i),
                  void 0 !== o ? o : e
                )
              }
        }
        function sn(n, t) {
          return n === rn
            ? t
            : function() {
                n.apply(this, arguments)
                var e = this.onsuccess,
                  r = this.onerror
                ;(this.onsuccess = this.onerror = null),
                  t.apply(this, arguments),
                  e &&
                    (this.onsuccess = this.onsuccess
                      ? an(e, this.onsuccess)
                      : e),
                  r && (this.onerror = this.onerror ? an(r, this.onerror) : r)
              }
        }
        function fn(n, t) {
          return n === rn
            ? t
            : function(e) {
                var r = n.apply(this, arguments)
                o(e, r)
                var i = this.onsuccess,
                  u = this.onerror
                ;(this.onsuccess = null), (this.onerror = null)
                var a = t.apply(this, arguments)
                return (
                  i &&
                    (this.onsuccess = this.onsuccess
                      ? an(i, this.onsuccess)
                      : i),
                  u && (this.onerror = this.onerror ? an(u, this.onerror) : u),
                  void 0 === r ? (void 0 === a ? void 0 : a) : o(r, a)
                )
              }
        }
        function ln(n, t) {
          return n === rn
            ? t
            : function() {
                return (
                  !1 !== t.apply(this, arguments) && n.apply(this, arguments)
                )
              }
        }
        function hn(n, t) {
          return n === rn
            ? t
            : function() {
                var e = n.apply(this, arguments)
                if (e && 'function' == typeof e.then) {
                  for (
                    var r = this, i = arguments.length, o = new Array(i);
                    i--;

                  )
                    o[i] = arguments[i]
                  return e.then(function() {
                    return t.apply(r, o)
                  })
                }
                return t.apply(this, arguments)
              }
        }
        ;(en.ModifyError = J), (en.DexieError = H), (en.BulkError = Y)
        var dn = {},
          vn = 100,
          pn = 20,
          yn = 7,
          mn = (function() {
            try {
              return new Function(
                'let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];'
              )()
            } catch (t) {
              var n = i.Promise
              return n ? [n.resolve(), n.prototype, n.resolve()] : []
            }
          })(),
          gn = mn[0],
          bn = mn[1],
          wn = mn[2],
          _n = bn && bn.then,
          kn = gn && gn.constructor,
          xn = mn[3],
          jn = !!wn,
          Pn = !1,
          En = wn
            ? function() {
                wn.then(Jn)
              }
            : i.setImmediate
            ? setImmediate.bind(null, Jn)
            : i.MutationObserver
            ? function() {
                var n = document.createElement('div')
                new MutationObserver(function() {
                  Jn(), (n = null)
                }).observe(n, { attributes: !0 }),
                  n.setAttribute('i', '1')
              }
            : function() {
                setTimeout(Jn, 0)
              },
          Sn = function(n, t) {
            Bn.push([n, t]), On && (En(), (On = !1))
          },
          An = !0,
          On = !0,
          Dn = [],
          In = [],
          Cn = null,
          Kn = on,
          Tn = {
            id: 'global',
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: xt,
            pgp: !1,
            env: {},
            finalize: function() {
              this.unhandleds.forEach(function(n) {
                try {
                  xt(n[0], n[1])
                } catch (n) {}
              })
            },
          },
          Fn = Tn,
          Bn = [],
          Mn = 0,
          Nn = []
        function qn(n) {
          if ('object' !== t(this))
            throw new TypeError('Promises must be constructed via new')
          ;(this._listeners = []), (this.onuncatched = rn), (this._lib = !1)
          var e = (this._PSD = Fn)
          if (
            (B &&
              ((this._stackHolder = R()),
              (this._prev = null),
              (this._numPrev = 0)),
            'function' != typeof n)
          ) {
            if (n !== dn) throw new TypeError('Not a function')
            return (
              (this._state = arguments[1]),
              (this._value = arguments[2]),
              void (!1 === this._state && zn(this, this._value))
            )
          }
          ;(this._state = null), (this._value = null), ++e.ref, Vn(this, n)
        }
        var Rn = {
          get: function() {
            var n = Fn,
              t = ct
            function e(e, r) {
              var i = this,
                o = !n.global && (n !== Fn || t !== ct)
              o && ht()
              var u = new qn(function(t, u) {
                Wn(i, new Un(wt(e, n, o), wt(r, n, o), t, u, n))
              })
              return B && Gn(u, this), u
            }
            return (e.prototype = dn), e
          },
          set: function(n) {
            l(
              this,
              'then',
              n && n.prototype === dn
                ? Rn
                : {
                    get: function() {
                      return n
                    },
                    set: Rn.set,
                  }
            )
          },
        }
        function Un(n, t, e, r, i) {
          ;(this.onFulfilled = 'function' == typeof n ? n : null),
            (this.onRejected = 'function' == typeof t ? t : null),
            (this.resolve = e),
            (this.reject = r),
            (this.psd = i)
        }
        function Vn(n, t) {
          try {
            t(function(t) {
              if (null === n._state) {
                if (t === n)
                  throw new TypeError(
                    'A promise cannot be resolved with itself.'
                  )
                var e = n._lib && Yn()
                t && 'function' == typeof t.then
                  ? Vn(n, function(n, e) {
                      t instanceof qn ? t._then(n, e) : t.then(n, e)
                    })
                  : ((n._state = !0), (n._value = t), Ln(n)),
                  e && $n()
              }
            }, zn.bind(null, n))
          } catch (t) {
            zn(n, t)
          }
        }
        function zn(n, e) {
          if ((In.push(e), null === n._state)) {
            var r = n._lib && Yn()
            ;(e = Kn(e)),
              (n._state = !1),
              (n._value = e),
              B &&
                null !== e &&
                'object' === (void 0 === e ? 'undefined' : t(e)) &&
                !e._promise &&
                k(function() {
                  var t = v(e, 'stack')
                  ;(e._promise = n),
                    l(e, 'stack', {
                      get: function() {
                        return Pn
                          ? t && (t.get ? t.get.apply(e) : t.value)
                          : n.stack
                      },
                    })
                }),
              nt(n),
              Ln(n),
              r && $n()
          }
        }
        function Ln(n) {
          var t = n._listeners
          n._listeners = []
          for (var e = 0, r = t.length; e < r; ++e) Wn(n, t[e])
          var i = n._PSD
          --i.ref || i.finalize(),
            0 === Mn &&
              (++Mn,
              Sn(function() {
                0 == --Mn && Xn()
              }, []))
        }
        function Wn(n, t) {
          if (null !== n._state) {
            var e = n._state ? t.onFulfilled : t.onRejected
            if (null === e) return (n._state ? t.resolve : t.reject)(n._value)
            ++t.psd.ref, ++Mn, Sn(Qn, [e, n, t])
          } else n._listeners.push(t)
        }
        function Qn(n, t, e) {
          try {
            Cn = t
            var r,
              i = t._value
            t._state
              ? (r = n(i))
              : (In.length && (In = []),
                (r = n(i)),
                -1 === In.indexOf(i) && tt(t)),
              e.resolve(r)
          } catch (n) {
            e.reject(n)
          } finally {
            ;(Cn = null), 0 == --Mn && Xn(), --e.psd.ref || e.psd.finalize()
          }
        }
        function Hn(n, t, e) {
          if (t.length === e) return t
          var r = ''
          if (!1 === n._state) {
            var i,
              o,
              u = n._value
            null != u
              ? ((i = u.name || 'Error'), (o = u.message || u), (r = U(u, 0)))
              : ((i = u), (o = '')),
              t.push(i + (o ? ': ' + o : '') + r)
          }
          return (
            B &&
              ((r = U(n._stackHolder, 2)) && -1 === t.indexOf(r) && t.push(r),
              n._prev && Hn(n._prev, t, e)),
            t
          )
        }
        function Gn(n, t) {
          var e = t ? t._numPrev + 1 : 0
          e < vn && ((n._prev = t), (n._numPrev = e))
        }
        function Jn() {
          Yn() && $n()
        }
        function Yn() {
          var n = An
          return (An = !1), (On = !1), n
        }
        function $n() {
          var n, t, e
          do {
            for (; Bn.length > 0; )
              for (n = Bn, Bn = [], e = n.length, t = 0; t < e; ++t) {
                var r = n[t]
                r[0].apply(null, r[1])
              }
          } while (Bn.length > 0)
          ;(An = !0), (On = !0)
        }
        function Xn() {
          var n = Dn
          ;(Dn = []),
            n.forEach(function(n) {
              n._PSD.onunhandled.call(null, n._value, n)
            })
          for (var t = Nn.slice(0), e = t.length; e; ) t[--e]()
        }
        function Zn(n) {
          Nn.push(function t() {
            n(), Nn.splice(Nn.indexOf(t), 1)
          }),
            ++Mn,
            Sn(function() {
              0 == --Mn && Xn()
            }, [])
        }
        function nt(n) {
          Dn.some(function(t) {
            return t._value === n._value
          }) || Dn.push(n)
        }
        function tt(n) {
          for (var t = Dn.length; t; )
            if (Dn[--t]._value === n._value) return void Dn.splice(t, 1)
        }
        function et(n) {
          return new qn(dn, !1, n)
        }
        function rt(n, t) {
          var e = Fn
          return function() {
            var r = Yn(),
              i = Fn
            try {
              return yt(e, !0), n.apply(this, arguments)
            } catch (n) {
              t && t(n)
            } finally {
              yt(i, !1), r && $n()
            }
          }
        }
        s(qn.prototype, {
          then: Rn,
          _then: function(n, t) {
            Wn(this, new Un(null, null, n, t, Fn))
          },
          catch: function(n) {
            if (1 === arguments.length) return this.then(null, n)
            var t = arguments[0],
              e = arguments[1]
            return 'function' == typeof t
              ? this.then(null, function(n) {
                  return n instanceof t ? e(n) : et(n)
                })
              : this.then(null, function(n) {
                  return n && n.name === t ? e(n) : et(n)
                })
          },
          finally: function(n) {
            return this.then(
              function(t) {
                return n(), t
              },
              function(t) {
                return n(), et(t)
              }
            )
          },
          stack: {
            get: function() {
              if (this._stack) return this._stack
              try {
                Pn = !0
                var n = Hn(this, [], pn).join('\nFrom previous: ')
                return null !== this._state && (this._stack = n), n
              } finally {
                Pn = !1
              }
            },
          },
          timeout: function(n, t) {
            var e = this
            return n < 1 / 0
              ? new qn(function(r, i) {
                  var o = setTimeout(function() {
                    return i(new Z.Timeout(t))
                  }, n)
                  e.then(r, i).finally(clearTimeout.bind(null, o))
                })
              : this
          },
        }),
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            l(qn.prototype, Symbol.toStringTag, 'Promise'),
          (Tn.env = mt()),
          s(qn, {
            all: function() {
              var n = F.apply(null, arguments).map(dt)
              return new qn(function(t, e) {
                0 === n.length && t([])
                var r = n.length
                n.forEach(function(i, o) {
                  return qn.resolve(i).then(function(e) {
                    ;(n[o] = e), --r || t(n)
                  }, e)
                })
              })
            },
            resolve: function(n) {
              if (n instanceof qn) return n
              if (n && 'function' == typeof n.then)
                return new qn(function(t, e) {
                  n.then(t, e)
                })
              var t = new qn(dn, !0, n)
              return Gn(t, Cn), t
            },
            reject: et,
            race: function() {
              var n = F.apply(null, arguments).map(dt)
              return new qn(function(t, e) {
                n.map(function(n) {
                  return qn.resolve(n).then(t, e)
                })
              })
            },
            PSD: {
              get: function() {
                return Fn
              },
              set: function(n) {
                return (Fn = n)
              },
            },
            newPSD: ft,
            usePSD: gt,
            scheduler: {
              get: function() {
                return Sn
              },
              set: function(n) {
                Sn = n
              },
            },
            rejectionMapper: {
              get: function() {
                return Kn
              },
              set: function(n) {
                Kn = n
              },
            },
            follow: function(n, t) {
              return new qn(function(e, r) {
                return ft(
                  function(t, e) {
                    var r = Fn
                    ;(r.unhandleds = []),
                      (r.onunhandled = e),
                      (r.finalize = an(function() {
                        var n = this
                        Zn(function() {
                          0 === n.unhandleds.length ? t() : e(n.unhandleds[0])
                        })
                      }, r.finalize)),
                      n()
                  },
                  t,
                  e,
                  r
                )
              })
            },
          })
        var it = { awaits: 0, echoes: 0, id: 0 },
          ot = 0,
          ut = [],
          at = 0,
          ct = 0,
          st = 0
        function ft(n, t, e, r) {
          var i = Fn,
            u = Object.create(i)
          ;(u.parent = i), (u.ref = 0), (u.global = !1), (u.id = ++st)
          var a = Tn.env
          ;(u.env = jn
            ? {
                Promise: qn,
                PromiseProp: { value: qn, configurable: !0, writable: !0 },
                all: qn.all,
                race: qn.race,
                resolve: qn.resolve,
                reject: qn.reject,
                nthen: _t(a.nthen, u),
                gthen: _t(a.gthen, u),
              }
            : {}),
            t && o(u, t),
            ++i.ref,
            (u.finalize = function() {
              --this.parent.ref || this.parent.finalize()
            })
          var c = gt(u, n, e, r)
          return 0 === u.ref && u.finalize(), c
        }
        function lt() {
          return it.id || (it.id = ++ot), ++it.awaits, (it.echoes += yn), it.id
        }
        function ht(n) {
          !it.awaits ||
            (n && n !== it.id) ||
            (0 == --it.awaits && (it.id = 0), (it.echoes = it.awaits * yn))
        }
        function dt(n) {
          return it.echoes && n && n.constructor === kn
            ? (lt(),
              n.then(
                function(n) {
                  return ht(), n
                },
                function(n) {
                  return ht(), jt(n)
                }
              ))
            : n
        }
        function vt(n) {
          ++ct,
            (it.echoes && 0 != --it.echoes) || (it.echoes = it.id = 0),
            ut.push(Fn),
            yt(n, !0)
        }
        function pt() {
          var n = ut[ut.length - 1]
          ut.pop(), yt(n, !1)
        }
        function yt(n, t) {
          var e = Fn
          if (
            ((t
              ? !it.echoes || (at++ && n === Fn)
              : !at || (--at && n === Fn)) || bt(t ? vt.bind(null, n) : pt),
            n !== Fn && ((Fn = n), e === Tn && (Tn.env = mt()), jn))
          ) {
            var r = Tn.env.Promise,
              o = n.env
            ;(bn.then = o.nthen),
              (r.prototype.then = o.gthen),
              (e.global || n.global) &&
                (Object.defineProperty(i, 'Promise', o.PromiseProp),
                (r.all = o.all),
                (r.race = o.race),
                (r.resolve = o.resolve),
                (r.reject = o.reject))
          }
        }
        function mt() {
          var n = i.Promise
          return jn
            ? {
                Promise: n,
                PromiseProp: Object.getOwnPropertyDescriptor(i, 'Promise'),
                all: n.all,
                race: n.race,
                resolve: n.resolve,
                reject: n.reject,
                nthen: bn.then,
                gthen: n.prototype.then,
              }
            : {}
        }
        function gt(n, t, e, r, i) {
          var o = Fn
          try {
            return yt(n, !0), t(e, r, i)
          } finally {
            yt(o, !1)
          }
        }
        function bt(n) {
          _n.call(gn, n)
        }
        function wt(n, t, e) {
          return 'function' != typeof n
            ? n
            : function() {
                var r = Fn
                e && lt(), yt(t, !0)
                try {
                  return n.apply(this, arguments)
                } finally {
                  yt(r, !1)
                }
              }
        }
        function _t(n, t) {
          return function(e, r) {
            return n.call(this, wt(e, t, !1), wt(r, t, !1))
          }
        }
        var kt = 'unhandledrejection'
        function xt(n, t) {
          var e
          try {
            e = t.onuncatched(n)
          } catch (n) {}
          if (!1 !== e)
            try {
              var r,
                u = { promise: t, reason: n }
              if (
                (i.document && document.createEvent
                  ? ((r = document.createEvent('Event')).initEvent(kt, !0, !0),
                    o(r, u))
                  : i.CustomEvent &&
                    o((r = new CustomEvent(kt, { detail: u })), u),
                r &&
                  i.dispatchEvent &&
                  (dispatchEvent(r),
                  !i.PromiseRejectionEvent && i.onunhandledrejection))
              )
                try {
                  i.onunhandledrejection(r)
                } catch (n) {}
              r.defaultPrevented ||
                console.warn('Unhandled rejection: ' + (n.stack || n))
            } catch (n) {}
        }
        var jt = qn.reject
        function Pt(n) {
          var i = {},
            o = function(t, e) {
              if (e) {
                for (var r = arguments.length, o = new Array(r - 1); --r; )
                  o[r - 1] = arguments[r]
                return i[t].subscribe.apply(null, o), n
              }
              if ('string' == typeof t) return i[t]
            }
          o.addEventType = c
          for (var u = 1, a = arguments.length; u < a; ++u) c(arguments[u])
          return o
          function c(n, u, a) {
            if ('object' !== (void 0 === n ? 'undefined' : t(n))) {
              var s
              u || (u = ln), a || (a = rn)
              var f = {
                subscribers: [],
                fire: a,
                subscribe: function(n) {
                  ;-1 === f.subscribers.indexOf(n) &&
                    (f.subscribers.push(n), (f.fire = u(f.fire, n)))
                },
                unsubscribe: function(n) {
                  ;(f.subscribers = f.subscribers.filter(function(t) {
                    return t !== n
                  })),
                    (f.fire = f.subscribers.reduce(u, a))
                },
              }
              return (i[n] = o[n] = f), f
            }
            e((s = n)).forEach(function(n) {
              var t = s[n]
              if (r(t)) c(n, s[n][0], s[n][1])
              else {
                if ('asap' !== t)
                  throw new Z.InvalidArgument('Invalid event config')
                var e = c(n, on, function() {
                  for (var n = arguments.length, t = new Array(n); n--; )
                    t[n] = arguments[n]
                  e.subscribers.forEach(function(n) {
                    b(function() {
                      n.apply(null, t)
                    })
                  })
                })
              }
            })
          }
        }
        var Et,
          St = '{version}',
          At = String.fromCharCode(65535),
          Ot = (function() {
            try {
              return IDBKeyRange.only([[]]), [[]]
            } catch (n) {
              return At
            }
          })(),
          Dt = -1 / 0,
          It =
            'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.',
          Ct = 'String expected.',
          Kt = [],
          Tt =
            'undefined' != typeof navigator &&
            /(MSIE|Trident|Edge)/.test(navigator.userAgent),
          Ft = Tt,
          Bt = Tt,
          Mt = function(n) {
            return !/(dexie\.js|dexie\.min\.js)/.test(n)
          }
        function Nt(n, u) {
          var a,
            f,
            h,
            d = Nt.dependencies,
            v = o(
              {
                addons: Nt.addons,
                autoOpen: !0,
                indexedDB: d.indexedDB,
                IDBKeyRange: d.IDBKeyRange,
              },
              u
            ),
            p = v.addons,
            b = v.autoOpen,
            P = v.indexedDB,
            S = v.IDBKeyRange,
            O = (this._dbSchema = {}),
            C = [],
            K = [],
            M = {},
            N = null,
            q = null,
            U = !1,
            z = null,
            L = !1,
            W = 'readwrite',
            Q = this,
            H = new qn(function(n) {
              a = n
            }),
            G = new qn(function(n, t) {
              f = t
            }),
            $ = !0,
            X = !!Yt(P)
          function nn(n) {
            ;(this._cfg = {
              version: n,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null,
            }),
              this.stores({})
          }
          function tn(n, t, r) {
            var i = Q._createTransaction(W, K, O)
            i.create(t), i._completion.catch(r)
            var o = i._reject.bind(i)
            ft(function() {
              ;(Fn.trans = i),
                0 === n
                  ? (e(O).forEach(function(n) {
                      en(t, n, O[n].primKey, O[n].indexes)
                    }),
                    qn
                      .follow(function() {
                        return Q.on.populate.fire(i)
                      })
                      .catch(o))
                  : (function(n, t, r) {
                      var i = [],
                        o = C.filter(function(t) {
                          return t._cfg.version === n
                        })[0]
                      if (!o)
                        throw new Z.Upgrade(
                          'Dexie specification of currently installed DB version is missing'
                        )
                      O = Q._dbSchema = o._cfg.dbschema
                      var u = !1
                      return (
                        C.filter(function(t) {
                          return t._cfg.version > n
                        }).forEach(function(n) {
                          i.push(function() {
                            var e = O,
                              i = n._cfg.dbschema
                            In(e, r), In(i, r), (O = Q._dbSchema = i)
                            var o = (function(n, t) {
                              var e = { del: [], add: [], change: [] }
                              for (var r in n) t[r] || e.del.push(r)
                              for (r in t) {
                                var i = n[r],
                                  o = t[r]
                                if (i) {
                                  var u = {
                                    name: r,
                                    def: o,
                                    recreate: !1,
                                    del: [],
                                    add: [],
                                    change: [],
                                  }
                                  if (i.primKey.src !== o.primKey.src)
                                    (u.recreate = !0), e.change.push(u)
                                  else {
                                    var a = i.idxByName,
                                      c = o.idxByName
                                    for (var s in a) c[s] || u.del.push(s)
                                    for (s in c) {
                                      var f = a[s],
                                        l = c[s]
                                      f
                                        ? f.src !== l.src && u.change.push(l)
                                        : u.add.push(l)
                                    }
                                    ;(u.del.length > 0 ||
                                      u.add.length > 0 ||
                                      u.change.length > 0) &&
                                      e.change.push(u)
                                  }
                                } else e.add.push([r, o])
                              }
                              return e
                            })(e, i)
                            if (
                              (o.add.forEach(function(n) {
                                en(r, n[0], n[1].primKey, n[1].indexes)
                              }),
                              o.change.forEach(function(n) {
                                if (n.recreate)
                                  throw new Z.Upgrade(
                                    'Not yet support for changing primary key'
                                  )
                                var t = r.objectStore(n.name)
                                n.add.forEach(function(n) {
                                  an(t, n)
                                }),
                                  n.change.forEach(function(n) {
                                    t.deleteIndex(n.name), an(t, n)
                                  }),
                                  n.del.forEach(function(n) {
                                    t.deleteIndex(n)
                                  })
                              }),
                              n._cfg.contentUpgrade)
                            )
                              return (
                                (u = !0),
                                qn.follow(function() {
                                  n._cfg.contentUpgrade(t)
                                })
                              )
                          }),
                            i.push(function(t) {
                              ;(u && Ft) ||
                                (function(n, t) {
                                  for (
                                    var e = 0;
                                    e < t.db.objectStoreNames.length;
                                    ++e
                                  ) {
                                    var r = t.db.objectStoreNames[e]
                                    null == n[r] && t.db.deleteObjectStore(r)
                                  }
                                })(n._cfg.dbschema, t)
                            })
                        }),
                        (function n() {
                          return i.length
                            ? qn.resolve(i.shift()(t.idbtrans)).then(n)
                            : qn.resolve()
                        })().then(function() {
                          !(function(n, t) {
                            e(n).forEach(function(e) {
                              t.db.objectStoreNames.contains(e) ||
                                en(t, e, n[e].primKey, n[e].indexes)
                            })
                          })(O, r)
                        })
                      )
                    })(n, i, t).catch(o)
            })
          }
          function en(n, t, e, r) {
            var i = n.db.createObjectStore(
              t,
              e.keyPath
                ? { keyPath: e.keyPath, autoIncrement: e.auto }
                : { autoIncrement: e.auto }
            )
            return (
              r.forEach(function(n) {
                an(i, n)
              }),
              i
            )
          }
          function an(n, t) {
            n.createIndex(t.name, t.keyPath, {
              unique: t.unique,
              multiEntry: t.multi,
            })
          }
          function ln(n, t, e) {
            ;(this.name = n),
              (this.schema = t),
              (this._tx = e),
              (this.hook = M[n]
                ? M[n].hook
                : Pt(null, {
                    creating: [cn, rn],
                    reading: [un, on],
                    updating: [fn, rn],
                    deleting: [sn, rn],
                  }))
          }
          function dn(n, t, e) {
            return (e ? Lt : Vt)(function(e) {
              n.push(e), t && t()
            })
          }
          function vn(n, t, e, r, i) {
            return new qn(function(o, u) {
              var a = e.length,
                c = a - 1
              if (0 === a) return o()
              if (r) {
                var s,
                  f = Lt(u),
                  l = Ut(null)
                k(
                  function() {
                    for (var r = 0; r < a; ++r) {
                      s = { onsuccess: null, onerror: null }
                      var u = e[r]
                      i.call(s, u[0], u[1], t)
                      var h = n.delete(u[0])
                      ;(h._hookCtx = s),
                        (h.onerror = f),
                        (h.onsuccess = r === c ? Ut(o) : l)
                    }
                  },
                  function(n) {
                    throw (s.onerror && s.onerror(n), n)
                  }
                )
              } else
                for (var h = 0; h < a; ++h) {
                  var d = n.delete(e[h])
                  ;(d.onerror = Vt(u)),
                    h === c &&
                      (d.onsuccess = rt(function() {
                        return o()
                      }))
                }
            })
          }
          function pn(n, t, e, r) {
            var i = this
            ;(this.db = Q),
              (this.mode = n),
              (this.storeNames = t),
              (this.idbtrans = null),
              (this.on = Pt(this, 'complete', 'error', 'abort')),
              (this.parent = r || null),
              (this.active = !0),
              (this._reculock = 0),
              (this._blockedFuncs = []),
              (this._resolve = null),
              (this._reject = null),
              (this._waitingFor = null),
              (this._waitingQueue = null),
              (this._spinCount = 0),
              (this._completion = new qn(function(n, t) {
                ;(i._resolve = n), (i._reject = t)
              })),
              this._completion.then(
                function() {
                  ;(i.active = !1), i.on.complete.fire()
                },
                function(n) {
                  var t = i.active
                  return (
                    (i.active = !1),
                    i.on.error.fire(n),
                    i.parent
                      ? i.parent._reject(n)
                      : t && i.idbtrans && i.idbtrans.abort(),
                    jt(n)
                  )
                }
              )
          }
          function yn(n, t, e) {
            this._ctx = { table: n, index: ':id' === t ? null : t, or: e }
          }
          function mn(n, t) {
            var e = null,
              r = null
            if (t)
              try {
                e = t()
              } catch (n) {
                r = n
              }
            var i = n._ctx,
              o = i.table
            this._ctx = {
              table: o,
              index: i.index,
              isPrimKey:
                !i.index ||
                (o.schema.primKey.keyPath && i.index === o.schema.primKey.name),
              range: e,
              keysOnly: !1,
              dir: 'next',
              unique: '',
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: !0,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error: r,
              or: i.or,
              valueMapper: o.hook.reading.fire,
            }
          }
          function gn(n, t) {
            return (
              !(n.filter || n.algorithm || n.or) &&
              (t ? n.justLimit : !n.replayFilter)
            )
          }
          function bn(n, t) {
            return n._cfg.version - t._cfg.version
          }
          function wn(n, t, e) {
            t.forEach(function(t) {
              var r = e[t]
              n.forEach(function(n) {
                t in n ||
                  (n === pn.prototype || n instanceof pn
                    ? l(n, t, {
                        get: function() {
                          return this.table(t)
                        },
                      })
                    : (n[t] = new ln(t, r)))
              })
            })
          }
          function _n(n, t, e, r, i, o) {
            var u = rt(
              o
                ? function(n, t, r) {
                    return e(o(n), t, r)
                  }
                : e,
              i
            )
            n.onerror || (n.onerror = Vt(i)),
              (n.onsuccess = _(
                t
                  ? function() {
                      var e = n.result
                      if (e) {
                        var o = function() {
                          e.continue()
                        }
                        t(
                          e,
                          function(n) {
                            o = n
                          },
                          r,
                          i
                        ) &&
                          u(e.value, e, function(n) {
                            o = n
                          }),
                          o()
                      } else r()
                    }
                  : function() {
                      var t = n.result
                      if (t) {
                        var e = function() {
                          t.continue()
                        }
                        u(t.value, t, function(n) {
                          e = n
                        }),
                          e()
                      } else r()
                    },
                i
              ))
          }
          function jn(n, t) {
            return P.cmp(n, t)
          }
          function Pn(n, t) {
            return jn(n, t) > 0 ? n : t
          }
          function En(n, t) {
            return P.cmp(n, t)
          }
          function Sn(n, t) {
            return P.cmp(t, n)
          }
          function An(n, t) {
            return n < t ? -1 : n === t ? 0 : 1
          }
          function On(n, t) {
            return n > t ? -1 : n === t ? 0 : 1
          }
          function Dn(n, t) {
            return n
              ? t
                ? function() {
                    return n.apply(this, arguments) && t.apply(this, arguments)
                  }
                : n
              : t
          }
          function In(n, t) {
            for (var e = t.db.objectStoreNames, r = 0; r < e.length; ++r) {
              var o = e[r],
                u = t.objectStore(o)
              h = 'getAll' in u
              for (var a = 0; a < u.indexNames.length; ++a) {
                var c = u.indexNames[a],
                  s = u.index(c).keyPath,
                  f = 'string' == typeof s ? s : '[' + y(s).join('+') + ']'
                if (n[o]) {
                  var l = n[o].idxByName[f]
                  l && (l.name = c)
                }
              }
            }
            ;/Safari/.test(navigator.userAgent) &&
              !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
              i.WorkerGlobalScope &&
              i instanceof i.WorkerGlobalScope &&
              [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
              (h = !1)
          }
          function Cn(n) {
            Q.on('blocked').fire(n),
              Kt.filter(function(n) {
                return n.name === Q.name && n !== Q && !n._vcFired
              }).map(function(t) {
                return t.on('versionchange').fire(n)
              })
          }
          ;(this.version = function(n) {
            if (N || U)
              throw new Z.Schema('Cannot add version when database is open')
            this.verno = Math.max(this.verno, n)
            var t = C.filter(function(t) {
              return t._cfg.version === n
            })[0]
            return t || ((t = new nn(n)), C.push(t), C.sort(bn), ($ = !1), t)
          }),
            o(nn.prototype, {
              stores: function(n) {
                this._cfg.storesSource = this._cfg.storesSource
                  ? o(this._cfg.storesSource, n)
                  : n
                var t = {}
                C.forEach(function(n) {
                  o(t, n._cfg.storesSource)
                })
                var r = (this._cfg.dbschema = {})
                return (
                  this._parseStoresSpec(t, r),
                  (O = Q._dbSchema = r),
                  [M, Q, pn.prototype].forEach(function(n) {
                    for (var t in n) n[t] instanceof ln && delete n[t]
                  }),
                  wn([M, Q, pn.prototype, this._cfg.tables], e(r), r),
                  (K = e(r)),
                  this
                )
              },
              upgrade: function(n) {
                return (this._cfg.contentUpgrade = n), this
              },
              _parseStoresSpec: function(n, t) {
                e(n).forEach(function(e) {
                  if (null !== n[e]) {
                    var i = {},
                      o = (function(n) {
                        var t = []
                        return (
                          n.split(',').forEach(function(n) {
                            var e = (n = n.trim()).replace(/([&*]|\+\+)/g, ''),
                              i = /^\[/.test(e)
                                ? e.match(/^\[(.*)\]$/)[1].split('+')
                                : e
                            t.push(
                              new Ht(
                                e,
                                i || null,
                                /\&/.test(n),
                                /\*/.test(n),
                                /\+\+/.test(n),
                                r(i),
                                /\./.test(n)
                              )
                            )
                          }),
                          t
                        )
                      })(n[e]),
                      u = o.shift()
                    if (u.multi)
                      throw new Z.Schema('Primary key cannot be multi-valued')
                    u.keyPath && j(i, u.keyPath, u.auto ? 0 : u.keyPath),
                      o.forEach(function(n) {
                        if (n.auto)
                          throw new Z.Schema(
                            'Only primary key can be marked as autoIncrement (++)'
                          )
                        if (!n.keyPath)
                          throw new Z.Schema(
                            'Index must have a name and cannot be an empty string'
                          )
                        j(
                          i,
                          n.keyPath,
                          n.compound
                            ? n.keyPath.map(function() {
                                return ''
                              })
                            : ''
                        )
                      }),
                      (t[e] = new Gt(e, u, o, i))
                  }
                })
              },
            }),
            (this._allTables = M),
            (this._createTransaction = function(n, t, e, r) {
              return new pn(n, t, e, r)
            }),
            (this._whenReady = function(n) {
              return L || Fn.letThrough
                ? n()
                : new qn(function(n, t) {
                    if (!U) {
                      if (!b) return void t(new Z.DatabaseClosed())
                      Q.open().catch(rn)
                    }
                    H.then(n, t)
                  }).then(n)
            }),
            (this.verno = 0),
            (this.open = function() {
              if (U || N)
                return H.then(function() {
                  return q ? jt(q) : Q
                })
              B && (G._stackHolder = R()), (U = !0), (q = null), (L = !1)
              var t = a,
                r = null
              return qn
                .race([
                  G,
                  new qn(function(t, i) {
                    if (!P)
                      throw new Z.MissingAPI(
                        'indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.'
                      )
                    var o = $ ? P.open(n) : P.open(n, Math.round(10 * Q.verno))
                    if (!o)
                      throw new Z.MissingAPI('IndexedDB API not available')
                    ;(o.onerror = Vt(i)),
                      (o.onblocked = rt(Cn)),
                      (o.onupgradeneeded = rt(function(t) {
                        if (((r = o.transaction), $ && !Q._allowEmptyDB)) {
                          ;(o.onerror = Wt), r.abort(), o.result.close()
                          var e = P.deleteDatabase(n)
                          e.onsuccess = e.onerror = rt(function() {
                            i(
                              new Z.NoSuchDatabase(
                                'Database ' + n + ' doesnt exist'
                              )
                            )
                          })
                        } else {
                          ;(r.onerror = Vt(i)),
                            tn(
                              (t.oldVersion > Math.pow(2, 62)
                                ? 0
                                : t.oldVersion) / 10,
                              r,
                              i
                            )
                        }
                      }, i)),
                      (o.onsuccess = rt(function() {
                        if (((r = null), (N = o.result), Kt.push(Q), $))
                          !(function() {
                            if (
                              ((Q.verno = N.version / 10),
                              (Q._dbSchema = O = {}),
                              0 === (K = y(N.objectStoreNames, 0)).length)
                            )
                              return
                            var n = N.transaction(Jt(K), 'readonly')
                            K.forEach(function(t) {
                              for (
                                var e = n.objectStore(t),
                                  r = e.keyPath,
                                  i =
                                    r &&
                                    'string' == typeof r &&
                                    -1 !== r.indexOf('.'),
                                  o = new Ht(
                                    r,
                                    r || '',
                                    !1,
                                    !1,
                                    !!e.autoIncrement,
                                    r && 'string' != typeof r,
                                    i
                                  ),
                                  u = [],
                                  a = 0;
                                a < e.indexNames.length;
                                ++a
                              ) {
                                var c = e.index(e.indexNames[a])
                                ;(r = c.keyPath),
                                  (i =
                                    r &&
                                    'string' == typeof r &&
                                    -1 !== r.indexOf('.'))
                                var s = new Ht(
                                  c.name,
                                  r,
                                  !!c.unique,
                                  !!c.multiEntry,
                                  !1,
                                  r && 'string' != typeof r,
                                  i
                                )
                                u.push(s)
                              }
                              O[t] = new Gt(t, o, u, {})
                            }),
                              wn([M], e(O), O)
                          })()
                        else if (N.objectStoreNames.length > 0)
                          try {
                            In(
                              O,
                              N.transaction(Jt(N.objectStoreNames), 'readonly')
                            )
                          } catch (n) {}
                        ;(N.onversionchange = rt(function(n) {
                          ;(Q._vcFired = !0), Q.on('versionchange').fire(n)
                        })),
                          X ||
                            '__dbnames' === n ||
                            Et.dbnames.put({ name: n }).catch(rn),
                          t()
                      }, i))
                  }),
                ])
                .then(function() {
                  return (
                    (z = []),
                    qn.resolve(Nt.vip(Q.on.ready.fire)).then(function n() {
                      if (z.length > 0) {
                        var t = z.reduce(hn, rn)
                        return (z = []), qn.resolve(Nt.vip(t)).then(n)
                      }
                    })
                  )
                })
                .finally(function() {
                  z = null
                })
                .then(function() {
                  return (U = !1), Q
                })
                .catch(function(n) {
                  try {
                    r && r.abort()
                  } catch (n) {}
                  return (U = !1), Q.close(), jt((q = n))
                })
                .finally(function() {
                  ;(L = !0), t()
                })
            }),
            (this.close = function() {
              var n = Kt.indexOf(Q)
              if ((n >= 0 && Kt.splice(n, 1), N)) {
                try {
                  N.close()
                } catch (n) {}
                N = null
              }
              ;(b = !1),
                (q = new Z.DatabaseClosed()),
                U && f(q),
                (H = new qn(function(n) {
                  a = n
                })),
                (G = new qn(function(n, t) {
                  f = t
                }))
            }),
            (this.delete = function() {
              var t = arguments.length > 0
              return new qn(function(e, r) {
                if (t)
                  throw new Z.InvalidArgument(
                    'Arguments not allowed in db.delete()'
                  )
                function i() {
                  Q.close()
                  var t = P.deleteDatabase(n)
                  ;(t.onsuccess = rt(function() {
                    X || Et.dbnames.delete(n).catch(rn), e()
                  })),
                    (t.onerror = Vt(r)),
                    (t.onblocked = Cn)
                }
                U ? H.then(i) : i()
              })
            }),
            (this.backendDB = function() {
              return N
            }),
            (this.isOpen = function() {
              return null !== N
            }),
            (this.hasBeenClosed = function() {
              return q && q instanceof Z.DatabaseClosed
            }),
            (this.hasFailed = function() {
              return null !== q
            }),
            (this.dynamicallyOpened = function() {
              return $
            }),
            (this.name = n),
            s(this, {
              tables: {
                get: function() {
                  return e(M).map(function(n) {
                    return M[n]
                  })
                },
              },
            }),
            (this.on = Pt(this, 'populate', 'blocked', 'versionchange', {
              ready: [hn, rn],
            })),
            (this.on.ready.subscribe = m(this.on.ready.subscribe, function(n) {
              return function(t, e) {
                Nt.vip(function() {
                  L
                    ? (q || qn.resolve().then(t), e && n(t))
                    : z
                    ? (z.push(t), e && n(t))
                    : (n(t),
                      e ||
                        n(function n() {
                          Q.on.ready.unsubscribe(t), Q.on.ready.unsubscribe(n)
                        }))
                })
              }
            })),
            (this.transaction = function() {
              var n = function(n, t, e) {
                var r = arguments.length
                if (r < 2) throw new Z.InvalidArgument('Too few arguments')
                var i = new Array(r - 1)
                for (; --r; ) i[r - 1] = arguments[r]
                e = i.pop()
                var o = A(i)
                return [n, o, e]
              }.apply(this, arguments)
              return this._transaction.apply(this, n)
            }),
            (this._transaction = function(n, t, e) {
              var r = Fn.trans
              ;(r && r.db === Q && -1 === n.indexOf('!')) || (r = null)
              var i = -1 !== n.indexOf('?')
              n = n.replace('!', '').replace('?', '')
              try {
                var o = t.map(function(n) {
                  var t = n instanceof ln ? n.name : n
                  if ('string' != typeof t)
                    throw new TypeError(
                      'Invalid table argument to Dexie.transaction(). Only Table or String are allowed'
                    )
                  return t
                })
                if ('r' == n || 'readonly' == n) n = 'readonly'
                else {
                  if ('rw' != n && n != W)
                    throw new Z.InvalidArgument(
                      'Invalid transaction mode: ' + n
                    )
                  n = W
                }
                if (r) {
                  if ('readonly' === r.mode && n === W) {
                    if (!i)
                      throw new Z.SubTransaction(
                        'Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY'
                      )
                    r = null
                  }
                  r &&
                    o.forEach(function(n) {
                      if (r && -1 === r.storeNames.indexOf(n)) {
                        if (!i)
                          throw new Z.SubTransaction(
                            'Table ' +
                              n +
                              ' not included in parent transaction.'
                          )
                        r = null
                      }
                    }),
                    i && r && !r.active && (r = null)
                }
              } catch (n) {
                return r
                  ? r._promise(null, function(t, e) {
                      e(n)
                    })
                  : jt(n)
              }
              return r
                ? r._promise(n, u, 'lock')
                : Fn.trans
                ? gt(Fn.transless, function() {
                    return Q._whenReady(u)
                  })
                : Q._whenReady(u)
              function u() {
                return qn.resolve().then(function() {
                  var t,
                    i = Fn.transless || Fn,
                    u = Q._createTransaction(n, o, O, r),
                    a = { trans: u, transless: i }
                  r ? (u.idbtrans = r.idbtrans) : u.create(),
                    e.constructor === xn && lt()
                  var c = qn.follow(function() {
                    if ((t = e.call(u, u)))
                      if (t.constructor === kn) {
                        var n = ht.bind(null, null)
                        t.then(n, n)
                      } else
                        'function' == typeof t.next &&
                          'function' == typeof t.throw &&
                          (t = Qt(t))
                  }, a)
                  return (t && 'function' == typeof t.then
                    ? qn.resolve(t).then(function(n) {
                        return u.active
                          ? n
                          : jt(
                              new Z.PrematureCommit(
                                'Transaction committed too early. See http://bit.ly/2kdckMn'
                              )
                            )
                      })
                    : c.then(function() {
                        return t
                      })
                  )
                    .then(function(n) {
                      return (
                        r && u._resolve(),
                        u._completion.then(function() {
                          return n
                        })
                      )
                    })
                    .catch(function(n) {
                      return u._reject(n), jt(n)
                    })
                })
              }
            }),
            (this.table = function(n) {
              if (!c(M, n))
                throw new Z.InvalidTable('Table ' + n + ' does not exist')
              return M[n]
            }),
            s(ln.prototype, {
              _trans: function(n, t, e) {
                var r = this._tx || Fn.trans
                return r && r.db === Q
                  ? r === Fn.trans
                    ? r._promise(n, t, e)
                    : ft(
                        function() {
                          return r._promise(n, t, e)
                        },
                        { trans: r, transless: Fn.transless || Fn }
                      )
                  : (function n(t, e, r) {
                      if (L || Fn.letThrough) {
                        var i = Q._createTransaction(t, e, O)
                        try {
                          i.create()
                        } catch (n) {
                          return jt(n)
                        }
                        return i
                          ._promise(t, function(n, t) {
                            return ft(function() {
                              return (Fn.trans = i), r(n, t, i)
                            })
                          })
                          .then(function(n) {
                            return i._completion.then(function() {
                              return n
                            })
                          })
                      }
                      if (!U) {
                        if (!b) return jt(new Z.DatabaseClosed())
                        Q.open().catch(rn)
                      }
                      return H.then(function() {
                        return n(t, e, r)
                      })
                    })(n, [this.name], t)
              },
              _idbstore: function(n, t, e) {
                var r = this.name
                return this._trans(
                  n,
                  function(n, e, i) {
                    if (-1 === i.storeNames.indexOf(r))
                      throw new Z.NotFound(
                        'Table' + r + ' not part of transaction'
                      )
                    return t(n, e, i.idbtrans.objectStore(r), i)
                  },
                  e
                )
              },
              get: function(n, t) {
                if (n && n.constructor === Object) return this.where(n).first(t)
                var e = this
                return this._idbstore('readonly', function(t, r, i) {
                  var o = i.get(n)
                  ;(o.onerror = Vt(r)),
                    (o.onsuccess = rt(function() {
                      t(e.hook.reading.fire(o.result))
                    }, r))
                }).then(t)
              },
              where: function(n) {
                if ('string' == typeof n) return new yn(this, n)
                if (r(n)) return new yn(this, '[' + n.join('+') + ']')
                var t = e(n)
                if (1 === t.length) return this.where(t[0]).equals(n[t[0]])
                var i = this.schema.indexes
                  .concat(this.schema.primKey)
                  .filter(function(n) {
                    return (
                      n.compound &&
                      t.every(function(t) {
                        return n.keyPath.indexOf(t) >= 0
                      }) &&
                      n.keyPath.every(function(n) {
                        return t.indexOf(n) >= 0
                      })
                    )
                  })[0]
                if (i && Ot !== At)
                  return this.where(i.name).equals(
                    i.keyPath.map(function(t) {
                      return n[t]
                    })
                  )
                i ||
                  console.warn(
                    'The query ' +
                      JSON.stringify(n) +
                      ' on ' +
                      this.name +
                      ' would benefit of a compound index [' +
                      t.join('+') +
                      ']'
                  )
                var o = this.schema.idxByName,
                  u = t.reduce(
                    function(t, e) {
                      return [
                        t[0] || o[e],
                        t[0] || !o[e]
                          ? Dn(t[1], function(t) {
                              return '' + x(t, e) == '' + n[e]
                            })
                          : t[1],
                      ]
                    },
                    [null, null]
                  ),
                  a = u[0]
                return a
                  ? this.where(a.name)
                      .equals(n[a.keyPath])
                      .filter(u[1])
                  : i
                  ? this.filter(u[1])
                  : this.where(t).equals('')
              },
              count: function(n) {
                return this.toCollection().count(n)
              },
              offset: function(n) {
                return this.toCollection().offset(n)
              },
              limit: function(n) {
                return this.toCollection().limit(n)
              },
              reverse: function() {
                return this.toCollection().reverse()
              },
              filter: function(n) {
                return this.toCollection().and(n)
              },
              each: function(n) {
                return this.toCollection().each(n)
              },
              toArray: function(n) {
                return this.toCollection().toArray(n)
              },
              orderBy: function(n) {
                return new mn(new yn(this, r(n) ? '[' + n.join('+') + ']' : n))
              },
              toCollection: function() {
                return new mn(new yn(this))
              },
              mapToClass: function(n, t) {
                this.schema.mappedClass = n
                var e = Object.create(n.prototype)
                t && Rt(e, t), (this.schema.instanceTemplate = e)
                var r = function(t) {
                  if (!t) return t
                  var e = Object.create(n.prototype)
                  for (var r in t)
                    if (c(t, r))
                      try {
                        e[r] = t[r]
                      } catch (n) {}
                  return e
                }
                return (
                  this.schema.readHook &&
                    this.hook.reading.unsubscribe(this.schema.readHook),
                  (this.schema.readHook = r),
                  this.hook('reading', r),
                  n
                )
              },
              defineClass: function(n) {
                return this.mapToClass(Nt.defineClass(n), n)
              },
              bulkDelete: function(n) {
                return this.hook.deleting.fire === rn
                  ? this._idbstore(W, function(t, e, r, i) {
                      t(vn(r, i, n, !1, rn))
                    })
                  : this.where(':id')
                      .anyOf(n)
                      .delete()
                      .then(function() {})
              },
              bulkPut: function(n, t) {
                var e = this
                return this._idbstore(
                  W,
                  function(r, i, o) {
                    if (!o.keyPath && !e.schema.primKey.auto && !t)
                      throw new Z.InvalidArgument(
                        'bulkPut() with non-inbound keys requires keys array in second argument'
                      )
                    if (o.keyPath && t)
                      throw new Z.InvalidArgument(
                        'bulkPut(): keys argument invalid on tables with inbound keys'
                      )
                    if (t && t.length !== n.length)
                      throw new Z.InvalidArgument(
                        'Arguments objects and keys must have the same length'
                      )
                    if (0 === n.length) return r()
                    var u,
                      a,
                      c = function(n) {
                        0 === s.length
                          ? r(n)
                          : i(
                              new Y(
                                e.name +
                                  '.bulkPut(): ' +
                                  s.length +
                                  ' of ' +
                                  f +
                                  ' operations failed',
                                s
                              )
                            )
                      },
                      s = [],
                      f = n.length,
                      l = e
                    if (
                      e.hook.creating.fire === rn &&
                      e.hook.updating.fire === rn
                    ) {
                      a = dn(s)
                      for (var h = 0, d = n.length; h < d; ++h)
                        (u = t ? o.put(n[h], t[h]) : o.put(n[h])).onerror = a
                      ;(u.onerror = dn(s, c)), (u.onsuccess = zt(c))
                    } else {
                      var v =
                          t ||
                          (o.keyPath &&
                            n.map(function(n) {
                              return x(n, o.keyPath)
                            })),
                        p =
                          v &&
                          w(v, function(t, e) {
                            return null != t && [t, n[e]]
                          })
                      ;(v
                        ? l
                            .where(':id')
                            .anyOf(
                              v.filter(function(n) {
                                return null != n
                              })
                            )
                            .modify(function() {
                              ;(this.value = p[this.primKey]),
                                (p[this.primKey] = null)
                            })
                            .catch(J, function(n) {
                              s = n.failures
                            })
                            .then(function() {
                              for (
                                var e = [], r = t && [], i = v.length - 1;
                                i >= 0;
                                --i
                              ) {
                                var o = v[i]
                                ;(null == o || p[o]) &&
                                  (e.push(n[i]),
                                  t && r.push(o),
                                  null != o && (p[o] = null))
                              }
                              return (
                                e.reverse(), t && r.reverse(), l.bulkAdd(e, r)
                              )
                            })
                            .then(function(n) {
                              var t = v[v.length - 1]
                              return null != t ? t : n
                            })
                        : l.bulkAdd(n)
                      )
                        .then(c)
                        .catch(Y, function(n) {
                          ;(s = s.concat(n.failures)), c()
                        })
                        .catch(i)
                    }
                  },
                  'locked'
                )
              },
              bulkAdd: function(n, t) {
                var e = this,
                  r = this.hook.creating.fire
                return this._idbstore(W, function(i, o, u, a) {
                  if (!u.keyPath && !e.schema.primKey.auto && !t)
                    throw new Z.InvalidArgument(
                      'bulkAdd() with non-inbound keys requires keys array in second argument'
                    )
                  if (u.keyPath && t)
                    throw new Z.InvalidArgument(
                      'bulkAdd(): keys argument invalid on tables with inbound keys'
                    )
                  if (t && t.length !== n.length)
                    throw new Z.InvalidArgument(
                      'Arguments objects and keys must have the same length'
                    )
                  if (0 === n.length) return i()
                  function c(n) {
                    0 === h.length
                      ? i(n)
                      : o(
                          new Y(
                            e.name +
                              '.bulkAdd(): ' +
                              h.length +
                              ' of ' +
                              d +
                              ' operations failed',
                            h
                          )
                        )
                  }
                  var s,
                    f,
                    l,
                    h = [],
                    d = n.length
                  if (r !== rn) {
                    var v,
                      p = u.keyPath
                    ;(f = dn(h, null, !0)),
                      (l = Ut(null)),
                      k(
                        function() {
                          for (var e = 0, i = n.length; e < i; ++e) {
                            v = { onerror: null, onsuccess: null }
                            var o = t && t[e],
                              c = n[e],
                              h = t ? o : p ? x(c, p) : void 0,
                              d = r.call(v, h, c, a)
                            null == h &&
                              null != d &&
                              (p ? j((c = D(c)), p, d) : (o = d)),
                              ((s =
                                null != o
                                  ? u.add(c, o)
                                  : u.add(c))._hookCtx = v),
                              e < i - 1 &&
                                ((s.onerror = f),
                                v.onsuccess && (s.onsuccess = l))
                          }
                        },
                        function(n) {
                          throw (v.onerror && v.onerror(n), n)
                        }
                      ),
                      (s.onerror = dn(h, c, !0)),
                      (s.onsuccess = Ut(c))
                  } else {
                    f = dn(h)
                    for (var y = 0, m = n.length; y < m; ++y)
                      (s = t ? u.add(n[y], t[y]) : u.add(n[y])).onerror = f
                    ;(s.onerror = dn(h, c)), (s.onsuccess = zt(c))
                  }
                })
              },
              add: function(n, t) {
                var e = this.hook.creating.fire
                return this._idbstore(W, function(r, i, o, u) {
                  var a = { onsuccess: null, onerror: null }
                  if (e !== rn) {
                    var c =
                        null != t ? t : o.keyPath ? x(n, o.keyPath) : void 0,
                      s = e.call(a, c, n, u)
                    null == c &&
                      null != s &&
                      (o.keyPath ? j(n, o.keyPath, s) : (t = s))
                  }
                  try {
                    var f = null != t ? o.add(n, t) : o.add(n)
                    ;(f._hookCtx = a),
                      (f.onerror = Lt(i)),
                      (f.onsuccess = Ut(function(t) {
                        var e = o.keyPath
                        e && j(n, e, t), r(t)
                      }))
                  } catch (n) {
                    throw (a.onerror && a.onerror(n), n)
                  }
                })
              },
              put: function(n, t) {
                var e = this,
                  r = this.hook.creating.fire,
                  i = this.hook.updating.fire
                if (r !== rn || i !== rn) {
                  var o = this.schema.primKey.keyPath,
                    u = void 0 !== t ? t : o && x(n, o)
                  return null == u
                    ? this.add(n)
                    : ((n = D(n)),
                      this._trans(
                        W,
                        function() {
                          return e
                            .where(':id')
                            .equals(u)
                            .modify(function() {
                              this.value = n
                            })
                            .then(function(r) {
                              return 0 === r ? e.add(n, t) : u
                            })
                        },
                        'locked'
                      ))
                }
                return this._idbstore(W, function(e, r, i) {
                  var o = void 0 !== t ? i.put(n, t) : i.put(n)
                  ;(o.onerror = Vt(r)),
                    (o.onsuccess = rt(function(t) {
                      var r = i.keyPath
                      r && j(n, r, t.target.result), e(o.result)
                    }))
                })
              },
              delete: function(n) {
                return this.hook.deleting.subscribers.length
                  ? this.where(':id')
                      .equals(n)
                      .delete()
                  : this._idbstore(W, function(t, e, r) {
                      var i = r.delete(n)
                      ;(i.onerror = Vt(e)),
                        (i.onsuccess = rt(function() {
                          t(i.result)
                        }))
                    })
              },
              clear: function() {
                return this.hook.deleting.subscribers.length
                  ? this.toCollection().delete()
                  : this._idbstore(W, function(n, t, e) {
                      var r = e.clear()
                      ;(r.onerror = Vt(t)),
                        (r.onsuccess = rt(function() {
                          n(r.result)
                        }))
                    })
              },
              update: function(n, i) {
                if ('object' !== (void 0 === i ? 'undefined' : t(i)) || r(i))
                  throw new Z.InvalidArgument(
                    'Modifications must be an object.'
                  )
                if ('object' !== (void 0 === n ? 'undefined' : t(n)) || r(n))
                  return this.where(':id')
                    .equals(n)
                    .modify(i)
                e(i).forEach(function(t) {
                  j(n, t, i[t])
                })
                var o = x(n, this.schema.primKey.keyPath)
                return void 0 === o
                  ? jt(
                      new Z.InvalidArgument(
                        'Given object does not contain its primary key'
                      )
                    )
                  : this.where(':id')
                      .equals(o)
                      .modify(i)
              },
            }),
            s(pn.prototype, {
              _lock: function() {
                return (
                  g(!Fn.global),
                  ++this._reculock,
                  1 !== this._reculock || Fn.global || (Fn.lockOwnerFor = this),
                  this
                )
              },
              _unlock: function() {
                if ((g(!Fn.global), 0 == --this._reculock))
                  for (
                    Fn.global || (Fn.lockOwnerFor = null);
                    this._blockedFuncs.length > 0 && !this._locked();

                  ) {
                    var n = this._blockedFuncs.shift()
                    try {
                      gt(n[1], n[0])
                    } catch (n) {}
                  }
                return this
              },
              _locked: function() {
                return this._reculock && Fn.lockOwnerFor !== this
              },
              create: function(n) {
                var t = this
                if (!this.mode) return this
                if ((g(!this.idbtrans), !n && !N))
                  switch (q && q.name) {
                    case 'DatabaseClosedError':
                      throw new Z.DatabaseClosed(q)
                    case 'MissingAPIError':
                      throw new Z.MissingAPI(q.message, q)
                    default:
                      throw new Z.OpenFailed(q)
                  }
                if (!this.active) throw new Z.TransactionInactive()
                return (
                  g(null === this._completion._state),
                  ((n = this.idbtrans =
                    n ||
                    N.transaction(Jt(this.storeNames), this.mode)).onerror = rt(
                    function(e) {
                      Wt(e), t._reject(n.error)
                    }
                  )),
                  (n.onabort = rt(function(e) {
                    Wt(e),
                      t.active && t._reject(new Z.Abort(n.error)),
                      (t.active = !1),
                      t.on('abort').fire(e)
                  })),
                  (n.oncomplete = rt(function() {
                    ;(t.active = !1), t._resolve()
                  })),
                  this
                )
              },
              _promise: function(n, t, e) {
                var r = this
                if (n === W && this.mode !== W)
                  return jt(new Z.ReadOnly('Transaction is readonly'))
                if (!this.active) return jt(new Z.TransactionInactive())
                if (this._locked())
                  return new qn(function(i, o) {
                    r._blockedFuncs.push([
                      function() {
                        r._promise(n, t, e).then(i, o)
                      },
                      Fn,
                    ])
                  })
                if (e)
                  return ft(function() {
                    var n = new qn(function(n, e) {
                      r._lock()
                      var i = t(n, e, r)
                      i && i.then && i.then(n, e)
                    })
                    return (
                      n.finally(function() {
                        return r._unlock()
                      }),
                      (n._lib = !0),
                      n
                    )
                  })
                var i = new qn(function(n, e) {
                  var i = t(n, e, r)
                  i && i.then && i.then(n, e)
                })
                return (i._lib = !0), i
              },
              _root: function() {
                return this.parent ? this.parent._root() : this
              },
              waitFor: function(n) {
                var t = this._root()
                if (((n = qn.resolve(n)), t._waitingFor))
                  t._waitingFor = t._waitingFor.then(function() {
                    return n
                  })
                else {
                  ;(t._waitingFor = n), (t._waitingQueue = [])
                  var e = t.idbtrans.objectStore(t.storeNames[0])
                  !(function n() {
                    for (++t._spinCount; t._waitingQueue.length; )
                      t._waitingQueue.shift()()
                    t._waitingFor && (e.get(-1 / 0).onsuccess = n)
                  })()
                }
                var r = t._waitingFor
                return new qn(function(e, i) {
                  n.then(
                    function(n) {
                      return t._waitingQueue.push(rt(e.bind(null, n)))
                    },
                    function(n) {
                      return t._waitingQueue.push(rt(i.bind(null, n)))
                    }
                  ).finally(function() {
                    t._waitingFor === r && (t._waitingFor = null)
                  })
                })
              },
              abort: function() {
                this.active && this._reject(new Z.Abort()), (this.active = !1)
              },
              tables: {
                get: V('Transaction.tables', function() {
                  return M
                }),
              },
              table: function(n) {
                return new ln(n, Q.table(n).schema, this)
              },
            }),
            s(yn.prototype, function() {
              function n(n, t, e) {
                var r = n instanceof yn ? new mn(n) : n
                return (r._ctx.error = e ? new e(t) : new TypeError(t)), r
              }
              function t(n) {
                return new mn(n, function() {
                  return S.only('')
                }).limit(0)
              }
              function e(n, t, e, r, i, o) {
                for (
                  var u = Math.min(n.length, r.length), a = -1, c = 0;
                  c < u;
                  ++c
                ) {
                  var s = t[c]
                  if (s !== r[c])
                    return i(n[c], e[c]) < 0
                      ? n.substr(0, c) + e[c] + e.substr(c + 1)
                      : i(n[c], r[c]) < 0
                      ? n.substr(0, c) + r[c] + e.substr(c + 1)
                      : a >= 0
                      ? n.substr(0, a) + t[a] + e.substr(a + 1)
                      : null
                  i(n[c], s) < 0 && (a = c)
                }
                return u < r.length && 'next' === o
                  ? n + e.substr(n.length)
                  : u < n.length && 'prev' === o
                  ? n.substr(0, e.length)
                  : a < 0
                  ? null
                  : n.substr(0, a) + r[a] + e.substr(a + 1)
              }
              function r(t, r, i, o) {
                var u,
                  a,
                  c,
                  s,
                  f,
                  l,
                  h,
                  d = i.length
                if (
                  !i.every(function(n) {
                    return 'string' == typeof n
                  })
                )
                  return n(t, Ct)
                function v(n) {
                  ;(u = (function(n) {
                    return 'next' === n
                      ? function(n) {
                          return n.toUpperCase()
                        }
                      : function(n) {
                          return n.toLowerCase()
                        }
                  })(n)),
                    (a = (function(n) {
                      return 'next' === n
                        ? function(n) {
                            return n.toLowerCase()
                          }
                        : function(n) {
                            return n.toUpperCase()
                          }
                    })(n)),
                    (c = 'next' === n ? An : On)
                  var t = i
                    .map(function(n) {
                      return { lower: a(n), upper: u(n) }
                    })
                    .sort(function(n, t) {
                      return c(n.lower, t.lower)
                    })
                  ;(s = t.map(function(n) {
                    return n.upper
                  })),
                    (f = t.map(function(n) {
                      return n.lower
                    })),
                    (l = n),
                    (h = 'next' === n ? '' : o)
                }
                v('next')
                var p = new mn(t, function() {
                  return S.bound(s[0], f[d - 1] + o)
                })
                p._ondirectionchange = function(n) {
                  v(n)
                }
                var y = 0
                return (
                  p._addAlgorithm(function(n, t, i) {
                    var o = n.key
                    if ('string' != typeof o) return !1
                    var u = a(o)
                    if (r(u, f, y)) return !0
                    for (var v = null, p = y; p < d; ++p) {
                      var m = e(o, u, s[p], f[p], c, l)
                      null === m && null === v
                        ? (y = p + 1)
                        : (null === v || c(v, m) > 0) && (v = m)
                    }
                    return (
                      t(
                        null !== v
                          ? function() {
                              n.continue(v + h)
                            }
                          : i
                      ),
                      !1
                    )
                  }),
                  p
                )
              }
              return {
                between: function(e, r, i, o) {
                  ;(i = !1 !== i), (o = !0 === o)
                  try {
                    return jn(e, r) > 0 ||
                      (0 === jn(e, r) && (i || o) && (!i || !o))
                      ? t(this)
                      : new mn(this, function() {
                          return S.bound(e, r, !i, !o)
                        })
                  } catch (t) {
                    return n(this, It)
                  }
                },
                equals: function(n) {
                  return new mn(this, function() {
                    return S.only(n)
                  })
                },
                above: function(n) {
                  return new mn(this, function() {
                    return S.lowerBound(n, !0)
                  })
                },
                aboveOrEqual: function(n) {
                  return new mn(this, function() {
                    return S.lowerBound(n)
                  })
                },
                below: function(n) {
                  return new mn(this, function() {
                    return S.upperBound(n, !0)
                  })
                },
                belowOrEqual: function(n) {
                  return new mn(this, function() {
                    return S.upperBound(n)
                  })
                },
                startsWith: function(t) {
                  return 'string' != typeof t
                    ? n(this, Ct)
                    : this.between(t, t + At, !0, !0)
                },
                startsWithIgnoreCase: function(n) {
                  return '' === n
                    ? this.startsWith(n)
                    : r(
                        this,
                        function(n, t) {
                          return 0 === n.indexOf(t[0])
                        },
                        [n],
                        At
                      )
                },
                equalsIgnoreCase: function(n) {
                  return r(
                    this,
                    function(n, t) {
                      return n === t[0]
                    },
                    [n],
                    ''
                  )
                },
                anyOfIgnoreCase: function() {
                  var n = F.apply(T, arguments)
                  return 0 === n.length
                    ? t(this)
                    : r(
                        this,
                        function(n, t) {
                          return -1 !== t.indexOf(n)
                        },
                        n,
                        ''
                      )
                },
                startsWithAnyOfIgnoreCase: function() {
                  var n = F.apply(T, arguments)
                  return 0 === n.length
                    ? t(this)
                    : r(
                        this,
                        function(n, t) {
                          return t.some(function(t) {
                            return 0 === n.indexOf(t)
                          })
                        },
                        n,
                        At
                      )
                },
                anyOf: function() {
                  var e = F.apply(T, arguments),
                    r = En
                  try {
                    e.sort(r)
                  } catch (t) {
                    return n(this, It)
                  }
                  if (0 === e.length) return t(this)
                  var i = new mn(this, function() {
                    return S.bound(e[0], e[e.length - 1])
                  })
                  i._ondirectionchange = function(n) {
                    ;(r = 'next' === n ? En : Sn), e.sort(r)
                  }
                  var o = 0
                  return (
                    i._addAlgorithm(function(n, t, i) {
                      for (var u = n.key; r(u, e[o]) > 0; )
                        if (++o === e.length) return t(i), !1
                      return (
                        0 === r(u, e[o]) ||
                        (t(function() {
                          n.continue(e[o])
                        }),
                        !1)
                      )
                    }),
                    i
                  )
                },
                notEqual: function(n) {
                  return this.inAnyRange([[Dt, n], [n, Ot]], {
                    includeLowers: !1,
                    includeUppers: !1,
                  })
                },
                noneOf: function() {
                  var t = F.apply(T, arguments)
                  if (0 === t.length) return new mn(this)
                  try {
                    t.sort(En)
                  } catch (t) {
                    return n(this, It)
                  }
                  var e = t.reduce(function(n, t) {
                    return n ? n.concat([[n[n.length - 1][1], t]]) : [[Dt, t]]
                  }, null)
                  return (
                    e.push([t[t.length - 1], Ot]),
                    this.inAnyRange(e, { includeLowers: !1, includeUppers: !1 })
                  )
                },
                inAnyRange: function(e, r) {
                  if (0 === e.length) return t(this)
                  if (
                    !e.every(function(n) {
                      return (
                        void 0 !== n[0] &&
                        void 0 !== n[1] &&
                        En(n[0], n[1]) <= 0
                      )
                    })
                  )
                    return n(
                      this,
                      'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower',
                      Z.InvalidArgument
                    )
                  var i = !r || !1 !== r.includeLowers,
                    o = r && !0 === r.includeUppers
                  var u,
                    a = En
                  function c(n, t) {
                    return a(n[0], t[0])
                  }
                  try {
                    ;(u = e.reduce(function(n, t) {
                      for (var e = 0, r = n.length; e < r; ++e) {
                        var i = n[e]
                        if (jn(t[0], i[1]) < 0 && jn(t[1], i[0]) > 0) {
                          ;(i[0] = ((o = i[0]),
                          (u = t[0]),
                          jn(o, u) < 0 ? o : u)),
                            (i[1] = Pn(i[1], t[1]))
                          break
                        }
                      }
                      var o, u
                      return e === r && n.push(t), n
                    }, [])).sort(c)
                  } catch (t) {
                    return n(this, It)
                  }
                  var s = 0,
                    f = o
                      ? function(n) {
                          return En(n, u[s][1]) > 0
                        }
                      : function(n) {
                          return En(n, u[s][1]) >= 0
                        },
                    l = i
                      ? function(n) {
                          return Sn(n, u[s][0]) > 0
                        }
                      : function(n) {
                          return Sn(n, u[s][0]) >= 0
                        }
                  var h = f,
                    d = new mn(this, function() {
                      return S.bound(u[0][0], u[u.length - 1][1], !i, !o)
                    })
                  return (
                    (d._ondirectionchange = function(n) {
                      'next' === n ? ((h = f), (a = En)) : ((h = l), (a = Sn)),
                        u.sort(c)
                    }),
                    d._addAlgorithm(function(n, t, e) {
                      for (var r = n.key; h(r); )
                        if (++s === u.length) return t(e), !1
                      return (
                        !!(function(n) {
                          return !f(n) && !l(n)
                        })(r) ||
                        (0 !== jn(r, u[s][1]) &&
                          0 !== jn(r, u[s][0]) &&
                          (t(function() {
                            a === En ? n.continue(u[s][0]) : n.continue(u[s][1])
                          }),
                          !1))
                      )
                    }),
                    d
                  )
                },
                startsWithAnyOf: function() {
                  var e = F.apply(T, arguments)
                  return e.every(function(n) {
                    return 'string' == typeof n
                  })
                    ? 0 === e.length
                      ? t(this)
                      : this.inAnyRange(
                          e.map(function(n) {
                            return [n, n + At]
                          })
                        )
                    : n(this, 'startsWithAnyOf() only works with strings')
                },
              }
            }),
            s(mn.prototype, function() {
              function n(n, t) {
                n.filter = Dn(n.filter, t)
              }
              function t(n, t, e) {
                var r = n.replayFilter
                ;(n.replayFilter = r
                  ? function() {
                      return Dn(r(), t())
                    }
                  : t),
                  (n.justLimit = e && !r)
              }
              function r(n, t) {
                if (n.isPrimKey) return t
                var e = n.table.schema.idxByName[n.index]
                if (!e)
                  throw new Z.Schema(
                    'KeyPath ' +
                      n.index +
                      ' on object store ' +
                      t.name +
                      ' is not indexed'
                  )
                return t.index(e.name)
              }
              function i(n, t) {
                var e = r(n, t)
                return n.keysOnly && 'openKeyCursor' in e
                  ? e.openKeyCursor(n.range || null, n.dir + n.unique)
                  : e.openCursor(n.range || null, n.dir + n.unique)
              }
              function u(n, t, e, r, o) {
                var u = n.replayFilter
                  ? Dn(n.filter, n.replayFilter())
                  : n.filter
                n.or
                  ? (function() {
                      var a = {},
                        s = 0
                      function f() {
                        2 == ++s && e()
                      }
                      function l(n, e, i) {
                        if (!u || u(e, i, f, r)) {
                          var o = e.primaryKey,
                            s = '' + o
                          '[object ArrayBuffer]' === s &&
                            (s = '' + new Uint8Array(o)),
                            c(a, s) || ((a[s] = !0), t(n, e, i))
                        }
                      }
                      n.or._iterate(l, f, r, o),
                        _n(
                          i(n, o),
                          n.algorithm,
                          l,
                          f,
                          r,
                          !n.keysOnly && n.valueMapper
                        )
                    })()
                  : _n(
                      i(n, o),
                      Dn(n.algorithm, u),
                      t,
                      e,
                      r,
                      !n.keysOnly && n.valueMapper
                    )
              }
              return {
                _read: function(n, t) {
                  var e = this._ctx
                  return e.error
                    ? e.table._trans(null, jt.bind(null, e.error))
                    : e.table._idbstore('readonly', n).then(t)
                },
                _write: function(n) {
                  var t = this._ctx
                  return t.error
                    ? t.table._trans(null, jt.bind(null, t.error))
                    : t.table._idbstore(W, n, 'locked')
                },
                _addAlgorithm: function(n) {
                  var t = this._ctx
                  t.algorithm = Dn(t.algorithm, n)
                },
                _iterate: function(n, t, e, r) {
                  return u(this._ctx, n, t, e, r)
                },
                clone: function(n) {
                  var t = Object.create(this.constructor.prototype),
                    e = Object.create(this._ctx)
                  return n && o(e, n), (t._ctx = e), t
                },
                raw: function() {
                  return (this._ctx.valueMapper = null), this
                },
                each: function(n) {
                  var t = this._ctx
                  return this._read(function(e, r, i) {
                    u(t, n, e, r, i)
                  })
                },
                count: function(n) {
                  var t = this._ctx
                  if (gn(t, !0))
                    return this._read(function(n, e, i) {
                      var o = r(t, i),
                        u = t.range ? o.count(t.range) : o.count()
                      ;(u.onerror = Vt(e)),
                        (u.onsuccess = function(e) {
                          n(Math.min(e.target.result, t.limit))
                        })
                    }, n)
                  var e = 0
                  return this._read(function(n, r, i) {
                    u(
                      t,
                      function() {
                        return ++e, !1
                      },
                      function() {
                        n(e)
                      },
                      r,
                      i
                    )
                  }, n)
                },
                sortBy: function(n, t) {
                  var e = n.split('.').reverse(),
                    r = e[0],
                    i = e.length - 1
                  function o(n, t) {
                    return t ? o(n[e[t]], t - 1) : n[r]
                  }
                  var u = 'next' === this._ctx.dir ? 1 : -1
                  function a(n, t) {
                    var e = o(n, i),
                      r = o(t, i)
                    return e < r ? -u : e > r ? u : 0
                  }
                  return this.toArray(function(n) {
                    return n.sort(a)
                  }).then(t)
                },
                toArray: function(n) {
                  var t = this._ctx
                  return this._read(function(n, e, i) {
                    if (h && 'next' === t.dir && gn(t, !0) && t.limit > 0) {
                      var o = t.table.hook.reading.fire,
                        a = r(t, i),
                        c =
                          t.limit < 1 / 0
                            ? a.getAll(t.range, t.limit)
                            : a.getAll(t.range)
                      ;(c.onerror = Vt(e)),
                        (c.onsuccess = zt(
                          o === on
                            ? n
                            : function(t) {
                                try {
                                  n(t.map(o))
                                } catch (n) {
                                  e(n)
                                }
                              }
                        ))
                    } else {
                      var s = []
                      u(
                        t,
                        function(n) {
                          s.push(n)
                        },
                        function() {
                          n(s)
                        },
                        e,
                        i
                      )
                    }
                  }, n)
                },
                offset: function(n) {
                  var e = this._ctx
                  return n <= 0
                    ? this
                    : ((e.offset += n),
                      gn(e)
                        ? t(e, function() {
                            var t = n
                            return function(n, e) {
                              return (
                                0 === t ||
                                (1 === t
                                  ? (--t, !1)
                                  : (e(function() {
                                      n.advance(t), (t = 0)
                                    }),
                                    !1))
                              )
                            }
                          })
                        : t(e, function() {
                            var t = n
                            return function() {
                              return --t < 0
                            }
                          }),
                      this)
                },
                limit: function(n) {
                  return (
                    (this._ctx.limit = Math.min(this._ctx.limit, n)),
                    t(
                      this._ctx,
                      function() {
                        var t = n
                        return function(n, e, r) {
                          return --t <= 0 && e(r), t >= 0
                        }
                      },
                      !0
                    ),
                    this
                  )
                },
                until: function(t, e) {
                  this._ctx
                  return (
                    n(this._ctx, function(n, r, i) {
                      return !t(n.value) || (r(i), e)
                    }),
                    this
                  )
                },
                first: function(n) {
                  return this.limit(1)
                    .toArray(function(n) {
                      return n[0]
                    })
                    .then(n)
                },
                last: function(n) {
                  return this.reverse().first(n)
                },
                filter: function(t) {
                  var e, r
                  return (
                    n(this._ctx, function(n) {
                      return t(n.value)
                    }),
                    (e = this._ctx),
                    (r = t),
                    (e.isMatch = Dn(e.isMatch, r)),
                    this
                  )
                },
                and: function(n) {
                  return this.filter(n)
                },
                or: function(n) {
                  return new yn(this._ctx.table, n, this)
                },
                reverse: function() {
                  return (
                    (this._ctx.dir =
                      'prev' === this._ctx.dir ? 'next' : 'prev'),
                    this._ondirectionchange &&
                      this._ondirectionchange(this._ctx.dir),
                    this
                  )
                },
                desc: function() {
                  return this.reverse()
                },
                eachKey: function(n) {
                  var t = this._ctx
                  return (
                    (t.keysOnly = !t.isMatch),
                    this.each(function(t, e) {
                      n(e.key, e)
                    })
                  )
                },
                eachUniqueKey: function(n) {
                  return (this._ctx.unique = 'unique'), this.eachKey(n)
                },
                eachPrimaryKey: function(n) {
                  var t = this._ctx
                  return (
                    (t.keysOnly = !t.isMatch),
                    this.each(function(t, e) {
                      n(e.primaryKey, e)
                    })
                  )
                },
                keys: function(n) {
                  var t = this._ctx
                  t.keysOnly = !t.isMatch
                  var e = []
                  return this.each(function(n, t) {
                    e.push(t.key)
                  })
                    .then(function() {
                      return e
                    })
                    .then(n)
                },
                primaryKeys: function(n) {
                  var t = this._ctx
                  if (h && 'next' === t.dir && gn(t, !0) && t.limit > 0)
                    return this._read(function(n, e, i) {
                      var o = r(t, i),
                        u =
                          t.limit < 1 / 0
                            ? o.getAllKeys(t.range, t.limit)
                            : o.getAllKeys(t.range)
                      ;(u.onerror = Vt(e)), (u.onsuccess = zt(n))
                    }).then(n)
                  t.keysOnly = !t.isMatch
                  var e = []
                  return this.each(function(n, t) {
                    e.push(t.primaryKey)
                  })
                    .then(function() {
                      return e
                    })
                    .then(n)
                },
                uniqueKeys: function(n) {
                  return (this._ctx.unique = 'unique'), this.keys(n)
                },
                firstKey: function(n) {
                  return this.limit(1)
                    .keys(function(n) {
                      return n[0]
                    })
                    .then(n)
                },
                lastKey: function(n) {
                  return this.reverse().firstKey(n)
                },
                distinct: function() {
                  var t = this._ctx,
                    e = t.index && t.table.schema.idxByName[t.index]
                  if (!e || !e.multi) return this
                  var r = {}
                  return (
                    n(this._ctx, function(n) {
                      var t = n.primaryKey.toString(),
                        e = c(r, t)
                      return (r[t] = !0), !e
                    }),
                    this
                  )
                },
                modify: function(n) {
                  var t = this,
                    r = this._ctx.table.hook,
                    i = r.updating.fire,
                    u = r.deleting.fire
                  return this._write(function(r, a, s, f) {
                    var l
                    if ('function' == typeof n)
                      l =
                        i === rn && u === rn
                          ? n
                          : function(t) {
                              var r = D(t)
                              if (!1 === n.call(this, t, this)) return !1
                              if (c(this, 'value')) {
                                var o = I(r, this.value),
                                  a = i.call(this, o, this.primKey, r, f)
                                a &&
                                  ((t = this.value),
                                  e(a).forEach(function(n) {
                                    j(t, n, a[n])
                                  }))
                              } else u.call(this, this.primKey, t, f)
                            }
                    else if (i === rn) {
                      var h = e(n),
                        d = h.length
                      l = function(t) {
                        for (var e = !1, r = 0; r < d; ++r) {
                          var i = h[r],
                            o = n[i]
                          x(t, i) !== o && (j(t, i, o), (e = !0))
                        }
                        return e
                      }
                    } else {
                      var v = n
                      ;(n = E(v)),
                        (l = function(t) {
                          var r = !1,
                            u = i.call(this, n, this.primKey, D(t), f)
                          return (
                            u && o(n, u),
                            e(n).forEach(function(e) {
                              var i = n[e]
                              x(t, e) !== i && (j(t, e, i), (r = !0))
                            }),
                            u && (n = E(v)),
                            r
                          )
                        })
                    }
                    var p = 0,
                      y = 0,
                      m = !1,
                      g = [],
                      b = [],
                      w = null
                    function _(n) {
                      return (
                        n && (g.push(n), b.push(w)),
                        a(new J('Error modifying one or more objects', g, y, b))
                      )
                    }
                    function P() {
                      m && y + g.length === p && (g.length > 0 ? _() : r(y))
                    }
                    t.clone()
                      .raw()
                      ._iterate(
                        function(n, t) {
                          w = t.primaryKey
                          var e = {
                            primKey: t.primaryKey,
                            value: n,
                            onsuccess: null,
                            onerror: null,
                          }
                          function r(n) {
                            return g.push(n), b.push(e.primKey), P(), !0
                          }
                          if (!1 !== l.call(e, n, e)) {
                            var i = !c(e, 'value')
                            ++p,
                              k(function() {
                                var n = i ? t.delete() : t.update(e.value)
                                ;(n._hookCtx = e),
                                  (n.onerror = Lt(r)),
                                  (n.onsuccess = Ut(function() {
                                    ++y, P()
                                  }))
                              }, r)
                          } else e.onsuccess && e.onsuccess(e.value)
                        },
                        function() {
                          ;(m = !0), P()
                        },
                        _,
                        s
                      )
                  })
                },
                delete: function() {
                  var n = this,
                    t = this._ctx,
                    e = t.range,
                    r = t.table.hook.deleting.fire,
                    i = r !== rn
                  if (!i && gn(t) && ((t.isPrimKey && !Bt) || !e))
                    return this._write(function(n, t, r) {
                      var i = Vt(t),
                        o = e ? r.count(e) : r.count()
                      ;(o.onerror = i),
                        (o.onsuccess = function() {
                          var u = o.result
                          k(
                            function() {
                              var t = e ? r.delete(e) : r.clear()
                              ;(t.onerror = i),
                                (t.onsuccess = function() {
                                  return n(u)
                                })
                            },
                            function(n) {
                              return t(n)
                            }
                          )
                        })
                    })
                  var o = i ? 2e3 : 1e4
                  return this._write(function(e, u, a, c) {
                    var s = 0,
                      f = n
                        .clone({ keysOnly: !t.isMatch && !i })
                        .distinct()
                        .limit(o)
                        .raw(),
                      l = [],
                      h = function() {
                        return f
                          .each(
                            i
                              ? function(n, t) {
                                  l.push([t.primaryKey, t.value])
                                }
                              : function(n, t) {
                                  l.push(t.primaryKey)
                                }
                          )
                          .then(function() {
                            return (
                              i
                                ? l.sort(function(n, t) {
                                    return En(n[0], t[0])
                                  })
                                : l.sort(En),
                              vn(a, c, l, i, r)
                            )
                          })
                          .then(function() {
                            var n = l.length
                            return (l = []), n < o ? (s += n) : h()
                          })
                      }
                    e(h())
                  })
                },
              }
            }),
            o(this, {
              Collection: mn,
              Table: ln,
              Transaction: pn,
              Version: nn,
              WhereClause: yn,
            }),
            Q.on('versionchange', function(n) {
              n.newVersion > 0
                ? console.warn(
                    "Another connection wants to upgrade database '" +
                      Q.name +
                      "'. Closing db now to resume the upgrade."
                  )
                : console.warn(
                    "Another connection wants to delete database '" +
                      Q.name +
                      "'. Closing db now to resume the delete request."
                  ),
                Q.close()
            }),
            Q.on('blocked', function(n) {
              !n.newVersion || n.newVersion < n.oldVersion
                ? console.warn("Dexie.delete('" + Q.name + "') was blocked")
                : console.warn(
                    "Upgrade '" +
                      Q.name +
                      "' blocked by other connection holding version " +
                      n.oldVersion / 10
                  )
            }),
            p.forEach(function(n) {
              n(Q)
            })
        }
        function qt(n) {
          if ('function' == typeof n) return new n()
          if (r(n)) return [qt(n[0])]
          if (n && 'object' === (void 0 === n ? 'undefined' : t(n))) {
            var e = {}
            return Rt(e, n), e
          }
          return n
        }
        function Rt(n, t) {
          return (
            e(t).forEach(function(e) {
              var r = qt(t[e])
              n[e] = r
            }),
            n
          )
        }
        function Ut(n) {
          return rt(function(t) {
            var e = t.target,
              r = e._hookCtx,
              i = r.value || e.result,
              o = r && r.onsuccess
            o && o(i), n && n(i)
          }, n)
        }
        function Vt(n) {
          return rt(function(t) {
            return Wt(t), n(t.target.error), !1
          })
        }
        function zt(n) {
          return rt(function(t) {
            n(t.target.result)
          })
        }
        function Lt(n) {
          return rt(function(t) {
            var e = t.target,
              r = e.error,
              i = e._hookCtx,
              o = i && i.onerror
            return o && o(r), Wt(t), n(r), !1
          })
        }
        function Wt(n) {
          n.stopPropagation && n.stopPropagation(),
            n.preventDefault && n.preventDefault()
        }
        function Qt(n) {
          var t = function(t) {
              return n.next(t)
            },
            e = o(t),
            i = o(function(t) {
              return n.throw(t)
            })
          function o(n) {
            return function(t) {
              var o = n(t),
                u = o.value
              return o.done
                ? u
                : u && 'function' == typeof u.then
                ? u.then(e, i)
                : r(u)
                ? qn.all(u).then(e, i)
                : e(u)
            }
          }
          return o(t)()
        }
        function Ht(n, t, e, r, i, o, u) {
          ;(this.name = n),
            (this.keyPath = t),
            (this.unique = e),
            (this.multi = r),
            (this.auto = i),
            (this.compound = o),
            (this.dotted = u)
          var a =
            'string' == typeof t ? t : t && '[' + [].join.call(t, '+') + ']'
          this.src = (e ? '&' : '') + (r ? '*' : '') + (i ? '++' : '') + a
        }
        function Gt(n, t, e, r) {
          ;(this.name = n),
            (this.primKey = t || new Ht()),
            (this.indexes = e || [new Ht()]),
            (this.instanceTemplate = r),
            (this.mappedClass = null),
            (this.idxByName = w(e, function(n) {
              return [n.name, n]
            }))
        }
        function Jt(n) {
          return 1 === n.length ? n[0] : n
        }
        function Yt(n) {
          var t = n && (n.getDatabaseNames || n.webkitGetDatabaseNames)
          return t && t.bind(n)
        }
        M(B, Mt),
          s(Nt, en),
          s(Nt, {
            delete: function(n) {
              var t = new Nt(n),
                e = t.delete()
              return (
                (e.onblocked = function(n) {
                  return t.on('blocked', n), this
                }),
                e
              )
            },
            exists: function(n) {
              return new Nt(n)
                .open()
                .then(function(n) {
                  return n.close(), !0
                })
                .catch(Nt.NoSuchDatabaseError, function() {
                  return !1
                })
            },
            getDatabaseNames: function(n) {
              var t = Yt(Nt.dependencies.indexedDB)
              return t
                ? new qn(function(n, e) {
                    var r = t()
                    ;(r.onsuccess = function(t) {
                      n(y(t.target.result, 0))
                    }),
                      (r.onerror = Vt(e))
                  }).then(n)
                : Et.dbnames.toCollection().primaryKeys(n)
            },
            defineClass: function(n) {
              return function(n) {
                n && o(this, n)
              }
            },
            applyStructure: Rt,
            ignoreTransaction: function(n) {
              return Fn.trans ? gt(Fn.transless, n) : n()
            },
            vip: function(n) {
              return ft(function() {
                return (Fn.letThrough = !0), n()
              })
            },
            async: function(n) {
              return function() {
                try {
                  var t = Qt(n.apply(this, arguments))
                  return t && 'function' == typeof t.then ? t : qn.resolve(t)
                } catch (n) {
                  return jt(n)
                }
              }
            },
            spawn: function(n, t, e) {
              try {
                var r = Qt(n.apply(e, t || []))
                return r && 'function' == typeof r.then ? r : qn.resolve(r)
              } catch (n) {
                return jt(n)
              }
            },
            currentTransaction: {
              get: function() {
                return Fn.trans || null
              },
            },
            waitFor: function(n, t) {
              var e = qn
                .resolve('function' == typeof n ? Nt.ignoreTransaction(n) : n)
                .timeout(t || 6e4)
              return Fn.trans ? Fn.trans.waitFor(e) : e
            },
            Promise: qn,
            debug: {
              get: function() {
                return B
              },
              set: function(n) {
                M(
                  n,
                  'dexie' === n
                    ? function() {
                        return !0
                      }
                    : Mt
                )
              },
            },
            derive: h,
            extend: o,
            props: s,
            override: m,
            Events: Pt,
            getByKeyPath: x,
            setByKeyPath: j,
            delByKeyPath: P,
            shallowClone: E,
            deepClone: D,
            getObjectDiff: I,
            asap: b,
            maxKey: Ot,
            minKey: Dt,
            addons: [],
            connections: Kt,
            MultiModifyError: Z.Modify,
            errnames: $,
            IndexSpec: Ht,
            TableSchema: Gt,
            dependencies: {
              indexedDB:
                i.indexedDB ||
                i.mozIndexedDB ||
                i.webkitIndexedDB ||
                i.msIndexedDB,
              IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange,
            },
            semVer: St,
            version: St.split('.')
              .map(function(n) {
                return parseInt(n)
              })
              .reduce(function(n, t, e) {
                return n + t / Math.pow(10, 2 * e)
              }),
            default: Nt,
            Dexie: Nt,
          }),
          (qn.rejectionMapper = tn),
          (Et = new Nt('__dbnames')).version(1).stores({ dbnames: 'name' }),
          (function() {
            if (
              void 0 !==
                ('undefined' == typeof localStorage
                  ? 'undefined'
                  : t(localStorage)) &&
              void 0 !== i.document
            )
              try {
                JSON.parse(
                  localStorage.getItem('Dexie.DatabaseNames') || '[]'
                ).forEach(function(n) {
                  return Et.dbnames.put({ name: n }).catch(rn)
                }),
                  localStorage.removeItem('Dexie.DatabaseNames')
              } catch (n) {}
          })(),
          (exports.default = Nt)
      },
      {},
    ],
    35: [
      function(require, module, exports) {
        'use strict'
        var e
        function o() {
          return e.apply(null, arguments)
        }
        function t(o) {
          e = o
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.hooks = o),
          (exports.setHookCallback = t)
      },
      {},
    ],
    92: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return (
            e instanceof Array ||
            '[object Array]' === Object.prototype.toString.call(e)
          )
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    127: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return (
            null != e && '[object Object]' === Object.prototype.toString.call(e)
          )
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    128: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length
          var r
          for (r in e) if (e.hasOwnProperty(r)) return !1
          return !0
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    82: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return void 0 === e
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    96: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return (
            'number' == typeof e ||
            '[object Number]' === Object.prototype.toString.call(e)
          )
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    41: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return (
            e instanceof Date ||
            '[object Date]' === Object.prototype.toString.call(e)
          )
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    129: [
      function(require, module, exports) {
        'use strict'
        function e(e, t) {
          var r,
            u = []
          for (r = 0; r < e.length; ++r) u.push(t(e[r], r))
          return u
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    93: [
      function(require, module, exports) {
        'use strict'
        function e(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    97: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = u)
        var e = require('./has-own-prop'),
          t = r(e)
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function u(e, r) {
          for (var u in r) (0, t.default)(r, u) && (e[u] = r[u])
          return (
            (0, t.default)(r, 'toString') && (e.toString = r.toString),
            (0, t.default)(r, 'valueOf') && (e.valueOf = r.valueOf),
            e
          )
        }
      },
      { './has-own-prop': 93 },
    ],
    50: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.createUTC = r)
        var e = require('./from-anything')
        function r(r, t, c, o) {
          return (0, e.createLocalOrUTC)(r, t, c, o, !0).utc()
        }
      },
      { './from-anything': 80 },
    ],
    99: [
      function(require, module, exports) {
        'use strict'
        function e() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          }
        }
        function t(t) {
          return null == t._pf && (t._pf = e()), t._pf
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = t)
      },
      {},
    ],
    100: [
      function(require, module, exports) {
        'use strict'
        var e
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Array.prototype.some
            ? (exports.default = e = Array.prototype.some)
            : (exports.default = e = function(e) {
                for (
                  var t = Object(this), r = t.length >>> 0, o = 0;
                  o < r;
                  o++
                )
                  if (o in t && e.call(this, t[o], o, t)) return !0
                return !1
              }),
          (exports.default = e)
      },
      {},
    ],
    51: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.isValid = d),
          (exports.createInvalid = s)
        var e = require('../utils/extend'),
          r = n(e),
          t = require('./utc'),
          i = require('../create/parsing-flags'),
          a = n(i),
          u = require('../utils/some'),
          l = n(u)
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function d(e) {
          if (null == e._isValid) {
            var r = (0, a.default)(e),
              t = l.default.call(r.parsedDateParts, function(e) {
                return null != e
              }),
              i =
                !isNaN(e._d.getTime()) &&
                r.overflow < 0 &&
                !r.empty &&
                !r.invalidMonth &&
                !r.invalidWeekday &&
                !r.weekdayMismatch &&
                !r.nullInput &&
                !r.invalidFormat &&
                !r.userInvalidated &&
                (!r.meridiem || (r.meridiem && t))
            if (
              (e._strict &&
                (i =
                  i &&
                  0 === r.charsLeftOver &&
                  0 === r.unusedTokens.length &&
                  void 0 === r.bigHour),
              null != Object.isFrozen && Object.isFrozen(e))
            )
              return i
            e._isValid = i
          }
          return e._isValid
        }
        function s(e) {
          var i = (0, t.createUTC)(NaN)
          return (
            null != e
              ? (0, r.default)((0, a.default)(i), e)
              : ((0, a.default)(i).userInvalidated = !0),
            i
          )
        }
      },
      {
        '../utils/extend': 97,
        './utc': 50,
        '../create/parsing-flags': 99,
        '../utils/some': 100,
      },
    ],
    52: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.copyConfig = r),
          (exports.Moment = a),
          (exports.isMoment = d)
        var e = require('../utils/hooks'),
          t = require('../utils/has-own-prop'),
          i = o(t),
          s = require('../utils/is-undefined'),
          l = o(s),
          _ = require('../create/parsing-flags'),
          f = o(_)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var u = (e.hooks.momentProperties = [])
        function r(e, t) {
          var i, s, _
          if (
            ((0, l.default)(t._isAMomentObject) ||
              (e._isAMomentObject = t._isAMomentObject),
            (0, l.default)(t._i) || (e._i = t._i),
            (0, l.default)(t._f) || (e._f = t._f),
            (0, l.default)(t._l) || (e._l = t._l),
            (0, l.default)(t._strict) || (e._strict = t._strict),
            (0, l.default)(t._tzm) || (e._tzm = t._tzm),
            (0, l.default)(t._isUTC) || (e._isUTC = t._isUTC),
            (0, l.default)(t._offset) || (e._offset = t._offset),
            (0, l.default)(t._pf) || (e._pf = (0, f.default)(t)),
            (0, l.default)(t._locale) || (e._locale = t._locale),
            u.length > 0)
          )
            for (i = 0; i < u.length; i++)
              (_ = t[(s = u[i])]), (0, l.default)(_) || (e[s] = _)
          return e
        }
        var n = !1
        function a(t) {
          r(this, t),
            (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === n && ((n = !0), e.hooks.updateOffset(this), (n = !1))
        }
        function d(e) {
          return e instanceof a || (null != e && null != e._isAMomentObject)
        }
      },
      {
        '../utils/hooks': 35,
        '../utils/has-own-prop': 93,
        '../utils/is-undefined': 82,
        '../create/parsing-flags': 99,
      },
    ],
    136: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    81: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = u)
        var e = require('./abs-floor'),
          r = t(e)
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function u(e) {
          var t = +e,
            u = 0
          return 0 !== t && isFinite(t) && (u = (0, r.default)(t)), u
        }
      },
      { './abs-floor': 136 },
    ],
    83: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = n)
        var e = require('./to-int'),
          t = r(e)
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function n(e, r, n) {
          var u,
            l = Math.min(e.length, r.length),
            a = Math.abs(e.length - r.length),
            o = 0
          for (u = 0; u < l; u++)
            ((n && e[u] !== r[u]) ||
              (!n && (0, t.default)(e[u]) !== (0, t.default)(r[u]))) &&
              o++
          return o + a
        }
      },
      { './to-int': 81 },
    ],
    48: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.deprecate = i),
          (exports.deprecateSimple = u)
        var e = require('./extend'),
          n = s(e),
          r = require('./hooks'),
          o = require('./is-undefined'),
          t = s(o)
        function s(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function a(e) {
          !1 === r.hooks.suppressDeprecationWarnings &&
            'undefined' != typeof console &&
            console.warn &&
            console.warn('Deprecation warning: ' + e)
        }
        function i(e, o) {
          var t = !0
          return (0, n.default)(function() {
            if (
              (null != r.hooks.deprecationHandler &&
                r.hooks.deprecationHandler(null, e),
              t)
            ) {
              for (var n, s = [], i = 0; i < arguments.length; i++) {
                if (((n = ''), 'object' == typeof arguments[i])) {
                  for (var l in ((n += '\n[' + i + '] '), arguments[0]))
                    n += l + ': ' + arguments[0][l] + ', '
                  n = n.slice(0, -2)
                } else n = arguments[i]
                s.push(n)
              }
              a(
                e +
                  '\nArguments: ' +
                  Array.prototype.slice.call(s).join('') +
                  '\n' +
                  new Error().stack
              ),
                (t = !1)
            }
            return o.apply(this, arguments)
          }, o)
        }
        var l = {}
        function u(e, n) {
          null != r.hooks.deprecationHandler &&
            r.hooks.deprecationHandler(e, n),
            l[e] || (a(n), (l[e] = !0))
        }
        ;(r.hooks.suppressDeprecationWarnings = !1),
          (r.hooks.deprecationHandler = null)
      },
      { './extend': 97, './hooks': 35, './is-undefined': 82 },
    ],
    44: [
      function(require, module, exports) {
        'use strict'
        function t(t) {
          return (
            t instanceof Function ||
            '[object Function]' === Object.prototype.toString.call(t)
          )
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = t)
      },
      {},
    ],
    91: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.set = f),
          (exports.mergeConfigs = o)
        var e = require('../utils/is-function'),
          t = l(e),
          r = require('../utils/extend'),
          u = l(r),
          i = require('../utils/is-object'),
          s = l(i),
          n = require('../utils/has-own-prop'),
          a = l(n)
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function f(e) {
          var r, u
          for (u in e)
            (r = e[u]), (0, t.default)(r) ? (this[u] = r) : (this['_' + u] = r)
          ;(this._config = e),
            (this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source ||
                this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
            ))
        }
        function o(e, t) {
          var r,
            i = (0, u.default)({}, e)
          for (r in t)
            (0, a.default)(t, r) &&
              ((0, s.default)(e[r]) && (0, s.default)(t[r])
                ? ((i[r] = {}),
                  (0, u.default)(i[r], e[r]),
                  (0, u.default)(i[r], t[r]))
                : null != t[r]
                ? (i[r] = t[r])
                : delete i[r])
          for (r in e)
            (0, a.default)(e, r) &&
              !(0, a.default)(t, r) &&
              (0, s.default)(e[r]) &&
              (i[r] = (0, u.default)({}, i[r]))
          return i
        }
      },
      {
        '../utils/is-function': 44,
        '../utils/extend': 97,
        '../utils/is-object': 127,
        '../utils/has-own-prop': 93,
      },
    ],
    84: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          null != e && this.set(e)
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.Locale = e)
      },
      {},
    ],
    94: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0)
        var e,
          t = require('./has-own-prop'),
          r = u(t)
        function u(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.keys
          ? (exports.default = e = Object.keys)
          : (exports.default = e = function(e) {
              var t,
                u = []
              for (t in e) (0, r.default)(e, t) && u.push(t)
              return u
            }),
          (exports.default = e)
      },
      { './has-own-prop': 93 },
    ],
    85: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaultCalendar = void 0),
          (exports.calendar = d)
        var e = require('../utils/is-function'),
          a = t(e)
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var r = (exports.defaultCalendar = {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        })
        function d(e, t, r) {
          var d = this._calendar[e] || this._calendar.sameElse
          return (0, a.default)(d) ? d.call(t, r) : d
        }
      },
      { '../utils/is-function': 44 },
    ],
    86: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.longDateFormat = e)
        var t = (exports.defaultLongDateFormat = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
        })
        function e(t) {
          var e = this._longDateFormat[t],
            M = this._longDateFormat[t.toUpperCase()]
          return e || !M
            ? e
            : ((this._longDateFormat[t] = M.replace(
                /MMMM|MM|DD|dddd/g,
                function(t) {
                  return t.slice(1)
                }
              )),
              this._longDateFormat[t])
        }
      },
      {},
    ],
    87: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.invalidDate = t)
        var e = (exports.defaultInvalidDate = 'Invalid date')
        function t() {
          return this._invalidDate
        }
      },
      {},
    ],
    89: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.ordinal = t)
        var e = (exports.defaultOrdinal = '%d'),
          r = (exports.defaultDayOfMonthOrdinalParse = /\d{1,2}/)
        function t(e) {
          return this._ordinal.replace('%d', e)
        }
      },
      {},
    ],
    90: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaultRelativeTime = void 0),
          (exports.relativeTime = s),
          (exports.pastFuture = u)
        var e = require('../utils/is-function'),
          t = r(e)
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var a = (exports.defaultRelativeTime = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        })
        function s(e, r, a, s) {
          var u = this._relativeTime[a]
          return (0, t.default)(u) ? u(e, r, a, s) : u.replace(/%d/i, e)
        }
        function u(e, r) {
          var a = this._relativeTime[e > 0 ? 'future' : 'past']
          return (0, t.default)(a) ? a(r) : a.replace(/%s/i, r)
        }
      },
      { '../utils/is-function': 44 },
    ],
    70: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.addUnitAlias = n),
          (exports.normalizeUnits = i),
          (exports.normalizeObjectUnits = s)
        var e = require('../utils/has-own-prop'),
          r = t(e)
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var o = {}
        function n(e, r) {
          var t = e.toLowerCase()
          o[t] = o[t + 's'] = o[r] = e
        }
        function i(e) {
          return 'string' == typeof e ? o[e] || o[e.toLowerCase()] : void 0
        }
        function s(e) {
          var t,
            o,
            n = {}
          for (o in e) (0, r.default)(e, o) && (t = i(o)) && (n[t] = e[o])
          return n
        }
      },
      { '../utils/has-own-prop': 93 },
    ],
    113: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.addUnitPriority = t),
          (exports.getPrioritizedUnits = i)
        var r = {}
        function t(t, i) {
          r[t] = i
        }
        function i(t) {
          var i = []
          for (var e in t) i.push({ unit: e, priority: r[e] })
          return (
            i.sort(function(r, t) {
              return r.priority - t.priority
            }),
            i
          )
        }
      },
      {},
    ],
    75: [
      function(require, module, exports) {
        'use strict'
        function t(t, e, r) {
          var a = '' + Math.abs(t),
            s = e - a.length
          return (
            (t >= 0 ? (r ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, s))
              .toString()
              .substr(1) +
            a
          )
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = t)
      },
      {},
    ],
    77: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.formatTokenFunctions = exports.formattingTokens = void 0),
          (exports.addFormatToken = l),
          (exports.formatMoment = d),
          (exports.expandFormat = p)
        var t = require('../utils/zero-fill'),
          e = n(t),
          r = require('../utils/is-function'),
          o = n(r)
        function n(t) {
          return t && t.__esModule ? t : { default: t }
        }
        var a = (exports.formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g),
          i = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          u = {},
          s = (exports.formatTokenFunctions = {})
        function l(t, r, o, n) {
          var a = n
          'string' == typeof n &&
            (a = function() {
              return this[n]()
            }),
            t && (s[t] = a),
            r &&
              (s[r[0]] = function() {
                return (0, e.default)(a.apply(this, arguments), r[1], r[2])
              }),
            o &&
              (s[o] = function() {
                return this.localeData().ordinal(a.apply(this, arguments), t)
              })
        }
        function f(t) {
          return t.match(/\[[\s\S]/)
            ? t.replace(/^\[|\]$/g, '')
            : t.replace(/\\/g, '')
        }
        function c(t) {
          var e,
            r,
            n = t.match(a)
          for (e = 0, r = n.length; e < r; e++)
            s[n[e]] ? (n[e] = s[n[e]]) : (n[e] = f(n[e]))
          return function(e) {
            var a,
              i = ''
            for (a = 0; a < r; a++)
              i += (0, o.default)(n[a]) ? n[a].call(e, t) : n[a]
            return i
          }
        }
        function d(t, e) {
          return t.isValid()
            ? ((e = p(e, t.localeData())), (u[e] = u[e] || c(e)), u[e](t))
            : t.localeData().invalidDate()
        }
        function p(t, e) {
          var r = 5
          function o(t) {
            return e.longDateFormat(t) || t
          }
          for (i.lastIndex = 0; r >= 0 && i.test(t); )
            (t = t.replace(i, o)), (i.lastIndex = 0), (r -= 1)
          return t
        }
      },
      { '../utils/zero-fill': 75, '../utils/is-function': 44 },
    ],
    78: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.matchWord = exports.matchTimestamp = exports.matchShortOffset = exports.matchOffset = exports.matchSigned = exports.matchUnsigned = exports.match1to6 = exports.match1to4 = exports.match1to3 = exports.match5to6 = exports.match3to4 = exports.match1to2 = exports.match6 = exports.match4 = exports.match3 = exports.match2 = exports.match1 = void 0),
          (exports.addRegexToken = T),
          (exports.getParseRegexForToken = D),
          (exports.regexEscape = R)
        var t = require('../utils/has-own-prop'),
          e = s(t),
          o = require('../utils/is-function'),
          r = s(o)
        function s(t) {
          return t && t.__esModule ? t : { default: t }
        }
        var a = (exports.match1 = /\d/),
          c = (exports.match2 = /\d\d/),
          d = (exports.match3 = /\d{3}/),
          p = (exports.match4 = /\d{4}/),
          x = (exports.match6 = /[+-]?\d{6}/),
          u = (exports.match1to2 = /\d\d?/),
          m = (exports.match3to4 = /\d\d\d\d?/),
          h = (exports.match5to6 = /\d\d\d\d\d\d?/),
          n = (exports.match1to3 = /\d{1,3}/),
          i = (exports.match1to4 = /\d{1,4}/),
          F = (exports.match1to6 = /[+-]?\d{1,6}/),
          f = (exports.matchUnsigned = /\d+/),
          g = (exports.matchSigned = /[+-]?\d+/),
          l = (exports.matchOffset = /Z|[+-]\d\d:?\d\d/gi),
          _ = (exports.matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi),
          O = (exports.matchTimestamp = /[+-]?\d+(\.\d{1,3})?/),
          v = (exports.matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i),
          S = {}
        function T(t, e, o) {
          S[t] = (0, r.default)(e)
            ? e
            : function(t, r) {
                return t && o ? o : e
              }
        }
        function D(t, o) {
          return (0, e.default)(S, t)
            ? S[t](o._strict, o._locale)
            : new RegExp(E(t))
        }
        function E(t) {
          return R(
            t
              .replace('\\', '')
              .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
                t,
                e,
                o,
                r,
                s
              ) {
                return e || o || r || s
              })
          )
        }
        function R(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
        }
      },
      { '../utils/has-own-prop': 93, '../utils/is-function': 44 },
    ],
    79: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.addParseToken = s),
          (exports.addWeekParseToken = d),
          (exports.addTimeToArrayFromToken = f)
        var e = require('../utils/has-own-prop'),
          r = i(e),
          t = require('../utils/is-number'),
          n = i(t),
          o = require('../utils/to-int'),
          u = i(o)
        function i(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var a = {}
        function s(e, r) {
          var t,
            o = r
          for (
            'string' == typeof e && (e = [e]),
              (0, n.default)(r) &&
                (o = function(e, t) {
                  t[r] = (0, u.default)(e)
                }),
              t = 0;
            t < e.length;
            t++
          )
            a[e[t]] = o
        }
        function d(e, r) {
          s(e, function(e, t, n, o) {
            ;(n._w = n._w || {}), r(e, n._w, n, o)
          })
        }
        function f(e, t, n) {
          null != t && (0, r.default)(a, e) && a[e](t, n._a, n, e)
        }
      },
      {
        '../utils/has-own-prop': 93,
        '../utils/is-number': 96,
        '../utils/to-int': 81,
      },
    ],
    114: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (exports.YEAR = 0),
          r = (exports.MONTH = 1),
          t = (exports.DATE = 2),
          s = (exports.HOUR = 3),
          o = (exports.MINUTE = 4),
          p = (exports.SECOND = 5),
          x = (exports.MILLISECOND = 6),
          E = (exports.WEEK = 7),
          O = (exports.WEEKDAY = 8)
      },
      {},
    ],
    69: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetYear = void 0),
          (exports.daysInYear = c),
          (exports.isLeapYear = k),
          (exports.getIsLeapYear = f)
        var e = require('../moment/get-set'),
          r = require('../format/format'),
          t = require('./aliases'),
          a = require('./priorities'),
          Y = require('../parse/regex'),
          o = require('../parse/token'),
          n = require('../utils/hooks'),
          i = require('./constants'),
          d = require('../utils/to-int'),
          s = u(d)
        function u(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function c(e) {
          return k(e) ? 366 : 365
        }
        function k(e) {
          return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
        }
        ;(0, r.addFormatToken)('Y', 0, 0, function() {
          var e = this.year()
          return e <= 9999 ? '' + e : '+' + e
        }),
          (0, r.addFormatToken)(0, ['YY', 2], 0, function() {
            return this.year() % 100
          }),
          (0, r.addFormatToken)(0, ['YYYY', 4], 0, 'year'),
          (0, r.addFormatToken)(0, ['YYYYY', 5], 0, 'year'),
          (0, r.addFormatToken)(0, ['YYYYYY', 6, !0], 0, 'year'),
          (0, t.addUnitAlias)('year', 'y'),
          (0, a.addUnitPriority)('year', 1),
          (0, Y.addRegexToken)('Y', Y.matchSigned),
          (0, Y.addRegexToken)('YY', Y.match1to2, Y.match2),
          (0, Y.addRegexToken)('YYYY', Y.match1to4, Y.match4),
          (0, Y.addRegexToken)('YYYYY', Y.match1to6, Y.match6),
          (0, Y.addRegexToken)('YYYYYY', Y.match1to6, Y.match6),
          (0, o.addParseToken)(['YYYYY', 'YYYYYY'], i.YEAR),
          (0, o.addParseToken)('YYYY', function(e, r) {
            r[i.YEAR] =
              2 === e.length ? n.hooks.parseTwoDigitYear(e) : (0, s.default)(e)
          }),
          (0, o.addParseToken)('YY', function(e, r) {
            r[i.YEAR] = n.hooks.parseTwoDigitYear(e)
          }),
          (0, o.addParseToken)('Y', function(e, r) {
            r[i.YEAR] = parseInt(e, 10)
          }),
          (n.hooks.parseTwoDigitYear = function(e) {
            return (0, s.default)(e) + ((0, s.default)(e) > 68 ? 1900 : 2e3)
          })
        var m = (exports.getSetYear = (0, e.makeGetSet)('FullYear', !0))
        function f() {
          return k(this.year())
        }
      },
      {
        '../moment/get-set': 107,
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        '../utils/hooks': 35,
        './constants': 114,
        '../utils/to-int': 81,
      },
    ],
    107: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.makeGetSet = a),
          (exports.get = l),
          (exports.set = h),
          (exports.stringGet = f),
          (exports.stringSet = d)
        var t = require('../units/aliases'),
          e = require('../units/priorities'),
          i = require('../utils/hooks'),
          s = require('../utils/is-function'),
          r = o(s),
          n = require('../units/month'),
          u = require('../units/year')
        function o(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function a(t, e) {
          return function(s) {
            return null != s
              ? (h(this, t, s), i.hooks.updateOffset(this, e), this)
              : l(this, t)
          }
        }
        function l(t, e) {
          return t.isValid() ? t._d['get' + (t._isUTC ? 'UTC' : '') + e]() : NaN
        }
        function h(t, e, i) {
          t.isValid() &&
            !isNaN(i) &&
            ('FullYear' === e &&
            (0, u.isLeapYear)(t.year()) &&
            1 === t.month() &&
            29 === t.date()
              ? t._d['set' + (t._isUTC ? 'UTC' : '') + e](
                  i,
                  t.month(),
                  (0, n.daysInMonth)(i, t.month())
                )
              : t._d['set' + (t._isUTC ? 'UTC' : '') + e](i))
        }
        function f(e) {
          return (
            (e = (0, t.normalizeUnits)(e)),
            (0, r.default)(this[e]) ? this[e]() : this
          )
        }
        function d(i, s) {
          if ('object' == typeof i) {
            i = (0, t.normalizeObjectUnits)(i)
            for (
              var n = (0, e.getPrioritizedUnits)(i), u = 0;
              u < n.length;
              u++
            )
              this[n[u].unit](i[n[u].unit])
          } else if (((i = (0, t.normalizeUnits)(i)), (0, r.default)(this[i])))
            return this[i](s)
          return this
        }
      },
      {
        '../units/aliases': 70,
        '../units/priorities': 113,
        '../utils/hooks': 35,
        '../utils/is-function': 44,
        '../units/month': 62,
        '../units/year': 69,
      },
    ],
    116: [
      function(require, module, exports) {
        'use strict'
        function e(e, t) {
          return ((e % t) + t) % t
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    117: [
      function(require, module, exports) {
        'use strict'
        var e
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Array.prototype.indexOf
            ? (exports.default = e = Array.prototype.indexOf)
            : (exports.default = e = function(e) {
                var t
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t
                return -1
              }),
          (exports.default = e)
      },
      {},
    ],
    62: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaultLocaleMonthsShort = exports.defaultLocaleMonths = void 0),
          (exports.daysInMonth = T),
          (exports.localeMonths = E),
          (exports.localeMonthsShort = w),
          (exports.localeMonthsParse = b),
          (exports.setMonth = C),
          (exports.getSetMonth = D),
          (exports.getDaysInMonth = U),
          (exports.monthsShortRegex = J),
          (exports.monthsRegex = A)
        var t = require('../moment/get-set'),
          e = require('../utils/has-own-prop'),
          s = v(e),
          o = require('../format/format'),
          r = require('./aliases'),
          h = require('./priorities'),
          n = require('../parse/regex'),
          i = require('../parse/token'),
          a = require('../utils/hooks'),
          u = require('./constants'),
          l = require('../utils/to-int'),
          _ = v(l),
          m = require('../utils/is-array'),
          M = v(m),
          c = require('../utils/is-number'),
          f = v(c),
          d = require('../utils/mod'),
          g = v(d),
          x = require('../utils/index-of'),
          p = v(x),
          S = require('../create/utc'),
          R = require('../create/parsing-flags'),
          P = v(R),
          q = require('../units/year')
        function v(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function T(t, e) {
          if (isNaN(t) || isNaN(e)) return NaN
          var s = (0, g.default)(e, 12)
          return (
            (t += (e - s) / 12),
            1 === s ? ((0, q.isLeapYear)(t) ? 29 : 28) : 31 - ((s % 7) % 2)
          )
        }
        ;(0, o.addFormatToken)('M', ['MM', 2], 'Mo', function() {
          return this.month() + 1
        }),
          (0, o.addFormatToken)('MMM', 0, 0, function(t) {
            return this.localeData().monthsShort(this, t)
          }),
          (0, o.addFormatToken)('MMMM', 0, 0, function(t) {
            return this.localeData().months(this, t)
          }),
          (0, r.addUnitAlias)('month', 'M'),
          (0, h.addUnitPriority)('month', 8),
          (0, n.addRegexToken)('M', n.match1to2),
          (0, n.addRegexToken)('MM', n.match1to2, n.match2),
          (0, n.addRegexToken)('MMM', function(t, e) {
            return e.monthsShortRegex(t)
          }),
          (0, n.addRegexToken)('MMMM', function(t, e) {
            return e.monthsRegex(t)
          }),
          (0, i.addParseToken)(['M', 'MM'], function(t, e) {
            e[u.MONTH] = (0, _.default)(t) - 1
          }),
          (0, i.addParseToken)(['MMM', 'MMMM'], function(t, e, s, o) {
            var r = s._locale.monthsParse(t, o, s._strict)
            null != r ? (e[u.MONTH] = r) : ((0, P.default)(s).invalidMonth = t)
          })
        var y = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          k = (exports.defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ))
        function E(t, e) {
          return t
            ? (0, M.default)(this._months)
              ? this._months[t.month()]
              : this._months[
                  (this._months.isFormat || y).test(e) ? 'format' : 'standalone'
                ][t.month()]
            : (0, M.default)(this._months)
            ? this._months
            : this._months.standalone
        }
        var L = (exports.defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
          '_'
        ))
        function w(t, e) {
          return t
            ? (0, M.default)(this._monthsShort)
              ? this._monthsShort[t.month()]
              : this._monthsShort[y.test(e) ? 'format' : 'standalone'][
                  t.month()
                ]
            : (0, M.default)(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort.standalone
        }
        function N(t, e, s) {
          var o,
            r,
            h,
            n = t.toLocaleLowerCase()
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                o = 0;
              o < 12;
              ++o
            )
              (h = (0, S.createUTC)([2e3, o])),
                (this._shortMonthsParse[o] = this.monthsShort(
                  h,
                  ''
                ).toLocaleLowerCase()),
                (this._longMonthsParse[o] = this.months(
                  h,
                  ''
                ).toLocaleLowerCase())
          return s
            ? 'MMM' === e
              ? -1 !== (r = p.default.call(this._shortMonthsParse, n))
                ? r
                : null
              : -1 !== (r = p.default.call(this._longMonthsParse, n))
              ? r
              : null
            : 'MMM' === e
            ? -1 !== (r = p.default.call(this._shortMonthsParse, n))
              ? r
              : -1 !== (r = p.default.call(this._longMonthsParse, n))
              ? r
              : null
            : -1 !== (r = p.default.call(this._longMonthsParse, n))
            ? r
            : -1 !== (r = p.default.call(this._shortMonthsParse, n))
            ? r
            : null
        }
        function b(t, e, s) {
          var o, r, h
          if (this._monthsParseExact) return N.call(this, t, e, s)
          for (
            this._monthsParse ||
              ((this._monthsParse = []),
              (this._longMonthsParse = []),
              (this._shortMonthsParse = [])),
              o = 0;
            o < 12;
            o++
          ) {
            if (
              ((r = (0, S.createUTC)([2e3, o])),
              s &&
                !this._longMonthsParse[o] &&
                ((this._longMonthsParse[o] = new RegExp(
                  '^' + this.months(r, '').replace('.', '') + '$',
                  'i'
                )),
                (this._shortMonthsParse[o] = new RegExp(
                  '^' + this.monthsShort(r, '').replace('.', '') + '$',
                  'i'
                ))),
              s ||
                this._monthsParse[o] ||
                ((h =
                  '^' + this.months(r, '') + '|^' + this.monthsShort(r, '')),
                (this._monthsParse[o] = new RegExp(h.replace('.', ''), 'i'))),
              s && 'MMMM' === e && this._longMonthsParse[o].test(t))
            )
              return o
            if (s && 'MMM' === e && this._shortMonthsParse[o].test(t)) return o
            if (!s && this._monthsParse[o].test(t)) return o
          }
        }
        function C(t, e) {
          var s
          if (!t.isValid()) return t
          if ('string' == typeof e)
            if (/^\d+$/.test(e)) e = (0, _.default)(e)
            else if (((e = t.localeData().monthsParse(e)), !(0, f.default)(e)))
              return t
          return (
            (s = Math.min(t.date(), T(t.year(), e))),
            t._d['set' + (t._isUTC ? 'UTC' : '') + 'Month'](e, s),
            t
          )
        }
        function D(e) {
          return null != e
            ? (C(this, e), a.hooks.updateOffset(this, !0), this)
            : (0, t.get)(this, 'Month')
        }
        function U() {
          return T(this.year(), this.month())
        }
        var F = n.matchWord
        function J(t) {
          return this._monthsParseExact
            ? ((0, s.default)(this, '_monthsRegex') || j.call(this),
              t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : ((0, s.default)(this, '_monthsShortRegex') ||
                (this._monthsShortRegex = F),
              this._monthsShortStrictRegex && t
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex)
        }
        var O = n.matchWord
        function A(t) {
          return this._monthsParseExact
            ? ((0, s.default)(this, '_monthsRegex') || j.call(this),
              t ? this._monthsStrictRegex : this._monthsRegex)
            : ((0, s.default)(this, '_monthsRegex') || (this._monthsRegex = O),
              this._monthsStrictRegex && t
                ? this._monthsStrictRegex
                : this._monthsRegex)
        }
        function j() {
          function t(t, e) {
            return e.length - t.length
          }
          var e,
            s,
            o = [],
            r = [],
            h = []
          for (e = 0; e < 12; e++)
            (s = (0, S.createUTC)([2e3, e])),
              o.push(this.monthsShort(s, '')),
              r.push(this.months(s, '')),
              h.push(this.months(s, '')),
              h.push(this.monthsShort(s, ''))
          for (o.sort(t), r.sort(t), h.sort(t), e = 0; e < 12; e++)
            (o[e] = (0, n.regexEscape)(o[e])), (r[e] = (0, n.regexEscape)(r[e]))
          for (e = 0; e < 24; e++) h[e] = (0, n.regexEscape)(h[e])
          ;(this._monthsRegex = new RegExp('^(' + h.join('|') + ')', 'i')),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              '^(' + r.join('|') + ')',
              'i'
            )),
            (this._monthsShortStrictRegex = new RegExp(
              '^(' + o.join('|') + ')',
              'i'
            ))
        }
      },
      {
        '../moment/get-set': 107,
        '../utils/has-own-prop': 93,
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        '../utils/hooks': 35,
        './constants': 114,
        '../utils/to-int': 81,
        '../utils/is-array': 92,
        '../utils/is-number': 96,
        '../utils/mod': 116,
        '../utils/index-of': 117,
        '../create/utc': 50,
        '../create/parsing-flags': 99,
        '../units/year': 69,
      },
    ],
    115: [
      function(require, module, exports) {
        'use strict'
        function e(e, t, r, a, l, n, u) {
          var i = new Date(e, t, r, a, l, n, u)
          return (
            e < 100 && e >= 0 && isFinite(i.getFullYear()) && i.setFullYear(e),
            i
          )
        }
        function t(e) {
          var t = new Date(Date.UTC.apply(null, arguments))
          return (
            e < 100 &&
              e >= 0 &&
              isFinite(t.getUTCFullYear()) &&
              t.setUTCFullYear(e),
            t
          )
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.createDate = e),
          (exports.createUTCDate = t)
      },
      {},
    ],
    118: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.dayOfYearFromWeeks = y),
          (exports.weekOfYear = n),
          (exports.weeksInYear = o)
        var e = require('./year'),
          r = require('../create/local'),
          a = require('../create/date-from-array')
        function t(e, r, t) {
          var y = 7 + r - t
          return (
            -((7 + (0, a.createUTCDate)(e, 0, y).getUTCDay() - r) % 7) + y - 1
          )
        }
        function y(r, a, y, n, o) {
          var u,
            s,
            f = 1 + 7 * (a - 1) + ((7 + y - n) % 7) + t(r, n, o)
          return (
            f <= 0
              ? ((u = r - 1), (s = (0, e.daysInYear)(u) + f))
              : f > (0, e.daysInYear)(r)
              ? ((u = r + 1), (s = f - (0, e.daysInYear)(r)))
              : ((u = r), (s = f)),
            { year: u, dayOfYear: s }
          )
        }
        function n(e, r, a) {
          var y,
            n,
            u = t(e.year(), r, a),
            s = Math.floor((e.dayOfYear() - u - 1) / 7) + 1
          return (
            s < 1
              ? (y = s + o((n = e.year() - 1), r, a))
              : s > o(e.year(), r, a)
              ? ((y = s - o(e.year(), r, a)), (n = e.year() + 1))
              : ((n = e.year()), (y = s)),
            { week: y, year: n }
          )
        }
        function o(r, a, y) {
          var n = t(r, a, y),
            o = t(r + 1, a, y)
          return ((0, e.daysInYear)(r) - n + o) / 7
        }
      },
      { './year': 69, '../create/local': 42, '../create/date-from-array': 115 },
    ],
    68: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaultLocaleWeek = void 0),
          (exports.localeWeek = k),
          (exports.localeFirstDayOfWeek = w),
          (exports.localeFirstDayOfYear = c),
          (exports.getSetWeek = W),
          (exports.getSetISOWeek = f)
        var e = require('../format/format'),
          t = require('./aliases'),
          r = require('./priorities'),
          o = require('../parse/regex'),
          a = require('../parse/token'),
          i = require('../utils/to-int'),
          d = u(i),
          s = require('../create/local'),
          n = require('./week-calendar-utils')
        function u(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function k(e) {
          return (0, n.weekOfYear)(e, this._week.dow, this._week.doy).week
        }
        ;(0, e.addFormatToken)('w', ['ww', 2], 'wo', 'week'),
          (0, e.addFormatToken)('W', ['WW', 2], 'Wo', 'isoWeek'),
          (0, t.addUnitAlias)('week', 'w'),
          (0, t.addUnitAlias)('isoWeek', 'W'),
          (0, r.addUnitPriority)('week', 5),
          (0, r.addUnitPriority)('isoWeek', 5),
          (0, o.addRegexToken)('w', o.match1to2),
          (0, o.addRegexToken)('ww', o.match1to2, o.match2),
          (0, o.addRegexToken)('W', o.match1to2),
          (0, o.addRegexToken)('WW', o.match1to2, o.match2),
          (0, a.addWeekParseToken)(['w', 'ww', 'W', 'WW'], function(
            e,
            t,
            r,
            o
          ) {
            t[o.substr(0, 1)] = (0, d.default)(e)
          })
        var l = (exports.defaultLocaleWeek = { dow: 0, doy: 6 })
        function w() {
          return this._week.dow
        }
        function c() {
          return this._week.doy
        }
        function W(e) {
          var t = this.localeData().week(this)
          return null == e ? t : this.add(7 * (e - t), 'd')
        }
        function f(e) {
          var t = (0, n.weekOfYear)(this, 1, 4).week
          return null == e ? t : this.add(7 * (e - t), 'd')
        }
      },
      {
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        '../utils/to-int': 81,
        '../create/local': 42,
        './week-calendar-utils': 118,
      },
    ],
    57: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaultLocaleWeekdaysMin = exports.defaultLocaleWeekdaysShort = exports.defaultLocaleWeekdays = void 0),
          (exports.localeWeekdays = p),
          (exports.localeWeekdaysShort = P),
          (exports.localeWeekdaysMin = S),
          (exports.localeWeekdaysParse = M),
          (exports.getSetDayOfWeek = T),
          (exports.getSetLocaleDayOfWeek = E),
          (exports.getSetISODayOfWeek = v),
          (exports.weekdaysRegex = q),
          (exports.weekdaysShortRegex = U),
          (exports.weekdaysMinRegex = N)
        var e = require('../format/format'),
          a = require('./aliases'),
          t = require('./priorities'),
          s = require('../parse/regex'),
          d = require('../parse/token'),
          i = require('../utils/to-int'),
          r = c(i),
          n = require('../utils/is-array'),
          h = c(n),
          o = require('../utils/index-of'),
          l = c(o),
          y = require('../utils/has-own-prop'),
          k = c(y),
          u = require('../create/utc'),
          _ = require('../create/parsing-flags'),
          w = c(_)
        function c(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function f(e, a) {
          return 'string' != typeof e
            ? e
            : isNaN(e)
            ? 'number' == typeof (e = a.weekdaysParse(e))
              ? e
              : null
            : parseInt(e, 10)
        }
        function x(e, a) {
          return 'string' == typeof e
            ? a.weekdaysParse(e) % 7 || 7
            : isNaN(e)
            ? null
            : e
        }
        ;(0, e.addFormatToken)('d', 0, 'do', 'day'),
          (0, e.addFormatToken)('dd', 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
          }),
          (0, e.addFormatToken)('ddd', 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
          }),
          (0, e.addFormatToken)('dddd', 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
          }),
          (0, e.addFormatToken)('e', 0, 0, 'weekday'),
          (0, e.addFormatToken)('E', 0, 0, 'isoWeekday'),
          (0, a.addUnitAlias)('day', 'd'),
          (0, a.addUnitAlias)('weekday', 'e'),
          (0, a.addUnitAlias)('isoWeekday', 'E'),
          (0, t.addUnitPriority)('day', 11),
          (0, t.addUnitPriority)('weekday', 11),
          (0, t.addUnitPriority)('isoWeekday', 11),
          (0, s.addRegexToken)('d', s.match1to2),
          (0, s.addRegexToken)('e', s.match1to2),
          (0, s.addRegexToken)('E', s.match1to2),
          (0, s.addRegexToken)('dd', function(e, a) {
            return a.weekdaysMinRegex(e)
          }),
          (0, s.addRegexToken)('ddd', function(e, a) {
            return a.weekdaysShortRegex(e)
          }),
          (0, s.addRegexToken)('dddd', function(e, a) {
            return a.weekdaysRegex(e)
          }),
          (0, d.addWeekParseToken)(['dd', 'ddd', 'dddd'], function(e, a, t, s) {
            var d = t._locale.weekdaysParse(e, s, t._strict)
            null != d ? (a.d = d) : ((0, w.default)(t).invalidWeekday = e)
          }),
          (0, d.addWeekParseToken)(['d', 'e', 'E'], function(e, a, t, s) {
            a[s] = (0, r.default)(e)
          })
        var g = (exports.defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
          '_'
        ))
        function p(e, a) {
          return e
            ? (0, h.default)(this._weekdays)
              ? this._weekdays[e.day()]
              : this._weekdays[
                  this._weekdays.isFormat.test(a) ? 'format' : 'standalone'
                ][e.day()]
            : (0, h.default)(this._weekdays)
            ? this._weekdays
            : this._weekdays.standalone
        }
        var R = (exports.defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split(
          '_'
        ))
        function P(e) {
          return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }
        var W = (exports.defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split(
          '_'
        ))
        function S(e) {
          return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }
        function m(e, a, t) {
          var s,
            d,
            i,
            r = e.toLocaleLowerCase()
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                s = 0;
              s < 7;
              ++s
            )
              (i = (0, u.createUTC)([2e3, 1]).day(s)),
                (this._minWeekdaysParse[s] = this.weekdaysMin(
                  i,
                  ''
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[s] = this.weekdaysShort(
                  i,
                  ''
                ).toLocaleLowerCase()),
                (this._weekdaysParse[s] = this.weekdays(
                  i,
                  ''
                ).toLocaleLowerCase())
          return t
            ? 'dddd' === a
              ? -1 !== (d = l.default.call(this._weekdaysParse, r))
                ? d
                : null
              : 'ddd' === a
              ? -1 !== (d = l.default.call(this._shortWeekdaysParse, r))
                ? d
                : null
              : -1 !== (d = l.default.call(this._minWeekdaysParse, r))
              ? d
              : null
            : 'dddd' === a
            ? -1 !== (d = l.default.call(this._weekdaysParse, r))
              ? d
              : -1 !== (d = l.default.call(this._shortWeekdaysParse, r))
              ? d
              : -1 !== (d = l.default.call(this._minWeekdaysParse, r))
              ? d
              : null
            : 'ddd' === a
            ? -1 !== (d = l.default.call(this._shortWeekdaysParse, r))
              ? d
              : -1 !== (d = l.default.call(this._weekdaysParse, r))
              ? d
              : -1 !== (d = l.default.call(this._minWeekdaysParse, r))
              ? d
              : null
            : -1 !== (d = l.default.call(this._minWeekdaysParse, r))
            ? d
            : -1 !== (d = l.default.call(this._weekdaysParse, r))
            ? d
            : -1 !== (d = l.default.call(this._shortWeekdaysParse, r))
            ? d
            : null
        }
        function M(e, a, t) {
          var s, d, i
          if (this._weekdaysParseExact) return m.call(this, e, a, t)
          for (
            this._weekdaysParse ||
              ((this._weekdaysParse = []),
              (this._minWeekdaysParse = []),
              (this._shortWeekdaysParse = []),
              (this._fullWeekdaysParse = [])),
              s = 0;
            s < 7;
            s++
          ) {
            if (
              ((d = (0, u.createUTC)([2e3, 1]).day(s)),
              t &&
                !this._fullWeekdaysParse[s] &&
                ((this._fullWeekdaysParse[s] = new RegExp(
                  '^' + this.weekdays(d, '').replace('.', '.?') + '$',
                  'i'
                )),
                (this._shortWeekdaysParse[s] = new RegExp(
                  '^' + this.weekdaysShort(d, '').replace('.', '.?') + '$',
                  'i'
                )),
                (this._minWeekdaysParse[s] = new RegExp(
                  '^' + this.weekdaysMin(d, '').replace('.', '.?') + '$',
                  'i'
                ))),
              this._weekdaysParse[s] ||
                ((i =
                  '^' +
                  this.weekdays(d, '') +
                  '|^' +
                  this.weekdaysShort(d, '') +
                  '|^' +
                  this.weekdaysMin(d, '')),
                (this._weekdaysParse[s] = new RegExp(i.replace('.', ''), 'i'))),
              t && 'dddd' === a && this._fullWeekdaysParse[s].test(e))
            )
              return s
            if (t && 'ddd' === a && this._shortWeekdaysParse[s].test(e))
              return s
            if (t && 'dd' === a && this._minWeekdaysParse[s].test(e)) return s
            if (!t && this._weekdaysParse[s].test(e)) return s
          }
        }
        function T(e) {
          if (!this.isValid()) return null != e ? this : NaN
          var a = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
          return null != e
            ? ((e = f(e, this.localeData())), this.add(e - a, 'd'))
            : a
        }
        function E(e) {
          if (!this.isValid()) return null != e ? this : NaN
          var a = (this.day() + 7 - this.localeData()._week.dow) % 7
          return null == e ? a : this.add(e - a, 'd')
        }
        function v(e) {
          if (!this.isValid()) return null != e ? this : NaN
          if (null != e) {
            var a = x(e, this.localeData())
            return this.day(this.day() % 7 ? a : a - 7)
          }
          return this.day() || 7
        }
        var L = s.matchWord
        function q(e) {
          return this._weekdaysParseExact
            ? ((0, k.default)(this, '_weekdaysRegex') || C.call(this),
              e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : ((0, k.default)(this, '_weekdaysRegex') ||
                (this._weekdaysRegex = L),
              this._weekdaysStrictRegex && e
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex)
        }
        var D = s.matchWord
        function U(e) {
          return this._weekdaysParseExact
            ? ((0, k.default)(this, '_weekdaysRegex') || C.call(this),
              e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : ((0, k.default)(this, '_weekdaysShortRegex') ||
                (this._weekdaysShortRegex = D),
              this._weekdaysShortStrictRegex && e
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex)
        }
        var F = s.matchWord
        function N(e) {
          return this._weekdaysParseExact
            ? ((0, k.default)(this, '_weekdaysRegex') || C.call(this),
              e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : ((0, k.default)(this, '_weekdaysMinRegex') ||
                (this._weekdaysMinRegex = F),
              this._weekdaysMinStrictRegex && e
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex)
        }
        function C() {
          function e(e, a) {
            return a.length - e.length
          }
          var a,
            t,
            d,
            i,
            r,
            n = [],
            h = [],
            o = [],
            l = []
          for (a = 0; a < 7; a++)
            (t = (0, u.createUTC)([2e3, 1]).day(a)),
              (d = this.weekdaysMin(t, '')),
              (i = this.weekdaysShort(t, '')),
              (r = this.weekdays(t, '')),
              n.push(d),
              h.push(i),
              o.push(r),
              l.push(d),
              l.push(i),
              l.push(r)
          for (n.sort(e), h.sort(e), o.sort(e), l.sort(e), a = 0; a < 7; a++)
            (h[a] = (0, s.regexEscape)(h[a])),
              (o[a] = (0, s.regexEscape)(o[a])),
              (l[a] = (0, s.regexEscape)(l[a]))
          ;(this._weekdaysRegex = new RegExp('^(' + l.join('|') + ')', 'i')),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              '^(' + o.join('|') + ')',
              'i'
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              '^(' + h.join('|') + ')',
              'i'
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              '^(' + n.join('|') + ')',
              'i'
            ))
        }
      },
      {
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        '../utils/to-int': 81,
        '../utils/is-array': 92,
        '../utils/index-of': 117,
        '../utils/has-own-prop': 93,
        '../create/utc': 50,
        '../create/parsing-flags': 99,
      },
    ],
    59: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetHour = exports.defaultLocaleMeridiemParse = void 0),
          (exports.localeIsPM = g),
          (exports.localeMeridiem = p)
        var e = require('../moment/get-set'),
          t = require('../format/format'),
          a = require('./aliases'),
          r = require('./priorities'),
          o = require('../parse/regex'),
          s = require('../parse/token'),
          n = require('./constants'),
          u = require('../utils/to-int'),
          d = f(u),
          i = require('../utils/zero-fill'),
          m = f(i),
          h = require('../create/parsing-flags'),
          l = f(h)
        function f(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function c() {
          return this.hours() % 12 || 12
        }
        function k() {
          return this.hours() || 24
        }
        function T(e, a) {
          ;(0, t.addFormatToken)(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), a)
          })
        }
        function H(e, t) {
          return t._meridiemParse
        }
        function g(e) {
          return 'p' === (e + '').toLowerCase().charAt(0)
        }
        ;(0, t.addFormatToken)('H', ['HH', 2], 0, 'hour'),
          (0, t.addFormatToken)('h', ['hh', 2], 0, c),
          (0, t.addFormatToken)('k', ['kk', 2], 0, k),
          (0, t.addFormatToken)('hmm', 0, 0, function() {
            return '' + c.apply(this) + (0, m.default)(this.minutes(), 2)
          }),
          (0, t.addFormatToken)('hmmss', 0, 0, function() {
            return (
              '' +
              c.apply(this) +
              (0, m.default)(this.minutes(), 2) +
              (0, m.default)(this.seconds(), 2)
            )
          }),
          (0, t.addFormatToken)('Hmm', 0, 0, function() {
            return '' + this.hours() + (0, m.default)(this.minutes(), 2)
          }),
          (0, t.addFormatToken)('Hmmss', 0, 0, function() {
            return (
              '' +
              this.hours() +
              (0, m.default)(this.minutes(), 2) +
              (0, m.default)(this.seconds(), 2)
            )
          }),
          T('a', !0),
          T('A', !1),
          (0, a.addUnitAlias)('hour', 'h'),
          (0, r.addUnitPriority)('hour', 13),
          (0, o.addRegexToken)('a', H),
          (0, o.addRegexToken)('A', H),
          (0, o.addRegexToken)('H', o.match1to2),
          (0, o.addRegexToken)('h', o.match1to2),
          (0, o.addRegexToken)('k', o.match1to2),
          (0, o.addRegexToken)('HH', o.match1to2, o.match2),
          (0, o.addRegexToken)('hh', o.match1to2, o.match2),
          (0, o.addRegexToken)('kk', o.match1to2, o.match2),
          (0, o.addRegexToken)('hmm', o.match3to4),
          (0, o.addRegexToken)('hmmss', o.match5to6),
          (0, o.addRegexToken)('Hmm', o.match3to4),
          (0, o.addRegexToken)('Hmmss', o.match5to6),
          (0, s.addParseToken)(['H', 'HH'], n.HOUR),
          (0, s.addParseToken)(['k', 'kk'], function(e, t, a) {
            var r = (0, d.default)(e)
            t[n.HOUR] = 24 === r ? 0 : r
          }),
          (0, s.addParseToken)(['a', 'A'], function(e, t, a) {
            ;(a._isPm = a._locale.isPM(e)), (a._meridiem = e)
          }),
          (0, s.addParseToken)(['h', 'hh'], function(e, t, a) {
            ;(t[n.HOUR] = (0, d.default)(e)), ((0, l.default)(a).bigHour = !0)
          }),
          (0, s.addParseToken)('hmm', function(e, t, a) {
            var r = e.length - 2
            ;(t[n.HOUR] = (0, d.default)(e.substr(0, r))),
              (t[n.MINUTE] = (0, d.default)(e.substr(r))),
              ((0, l.default)(a).bigHour = !0)
          }),
          (0, s.addParseToken)('hmmss', function(e, t, a) {
            var r = e.length - 4,
              o = e.length - 2
            ;(t[n.HOUR] = (0, d.default)(e.substr(0, r))),
              (t[n.MINUTE] = (0, d.default)(e.substr(r, 2))),
              (t[n.SECOND] = (0, d.default)(e.substr(o))),
              ((0, l.default)(a).bigHour = !0)
          }),
          (0, s.addParseToken)('Hmm', function(e, t, a) {
            var r = e.length - 2
            ;(t[n.HOUR] = (0, d.default)(e.substr(0, r))),
              (t[n.MINUTE] = (0, d.default)(e.substr(r)))
          }),
          (0, s.addParseToken)('Hmmss', function(e, t, a) {
            var r = e.length - 4,
              o = e.length - 2
            ;(t[n.HOUR] = (0, d.default)(e.substr(0, r))),
              (t[n.MINUTE] = (0, d.default)(e.substr(r, 2))),
              (t[n.SECOND] = (0, d.default)(e.substr(o)))
          })
        var x = (exports.defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i)
        function p(e, t, a) {
          return e > 11 ? (a ? 'pm' : 'PM') : a ? 'am' : 'AM'
        }
        var R = (exports.getSetHour = (0, e.makeGetSet)('Hours', !0))
      },
      {
        '../moment/get-set': 107,
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        './constants': 114,
        '../utils/to-int': 81,
        '../utils/zero-fill': 75,
        '../create/parsing-flags': 99,
      },
    ],
    95: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.baseConfig = void 0)
        var e = require('./calendar'),
          a = require('./formats'),
          r = require('./invalid'),
          t = require('./ordinal'),
          i = require('./relative'),
          d = require('../units/month'),
          l = require('../units/week'),
          o = require('../units/day-of-week'),
          u = require('../units/hour'),
          n = (exports.baseConfig = {
            calendar: e.defaultCalendar,
            longDateFormat: a.defaultLongDateFormat,
            invalidDate: r.defaultInvalidDate,
            ordinal: t.defaultOrdinal,
            dayOfMonthOrdinalParse: t.defaultDayOfMonthOrdinalParse,
            relativeTime: i.defaultRelativeTime,
            months: d.defaultLocaleMonths,
            monthsShort: d.defaultLocaleMonthsShort,
            week: l.defaultLocaleWeek,
            weekdays: o.defaultLocaleWeekdays,
            weekdaysMin: o.defaultLocaleWeekdaysMin,
            weekdaysShort: o.defaultLocaleWeekdaysShort,
            meridiemParse: u.defaultLocaleMeridiemParse,
          })
      },
      {
        './calendar': 85,
        './formats': 86,
        './invalid': 87,
        './ordinal': 89,
        './relative': 90,
        '../units/month': 62,
        '../units/week': 68,
        '../units/day-of-week': 57,
        '../units/hour': 59,
      },
    ],
    46: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetGlobalLocale = v),
          (exports.defineLocale = y),
          (exports.updateLocale = w),
          (exports.getLocale = x),
          (exports.listLocales = C)
        var e = require('../utils/is-array'),
          n = g(e),
          r = require('../utils/has-own-prop'),
          l = g(r),
          o = require('../utils/is-undefined'),
          t = g(o),
          a = require('../utils/compare-arrays'),
          u = g(a),
          i = require('../utils/deprecate'),
          c = require('./set'),
          f = require('./constructor'),
          s = require('../utils/keys'),
          d = g(s),
          p = require('./base-config')
        function g(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var L,
          m = {},
          b = {}
        function _(e) {
          return e ? e.toLowerCase().replace('_', '-') : e
        }
        function h(e) {
          for (var n, r, l, o, t = 0; t < e.length; ) {
            for (
              n = (o = _(e[t]).split('-')).length,
                r = (r = _(e[t + 1])) ? r.split('-') : null;
              n > 0;

            ) {
              if ((l = q(o.slice(0, n).join('-')))) return l
              if (r && r.length >= n && (0, u.default)(o, r, !0) >= n - 1) break
              n--
            }
            t++
          }
          return L
        }
        function q(e) {
          var n = null
          if (!m[e] && 'undefined' != typeof module && module && module.exports)
            try {
              ;(n = L._abbr), require('./locale/' + e), v(n)
            } catch (e) {}
          return m[e]
        }
        function v(e, n) {
          var r
          return (
            e &&
              ((r = (0, t.default)(n) ? x(e) : y(e, n))
                ? (L = r)
                : 'undefined' != typeof console &&
                  console.warn &&
                  console.warn(
                    'Locale ' + e + ' not found. Did you forget to load it?'
                  )),
            L._abbr
          )
        }
        function y(e, n) {
          if (null !== n) {
            var r,
              l = p.baseConfig
            if (((n.abbr = e), null != m[e]))
              (0, i.deprecateSimple)(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
              ),
                (l = m[e]._config)
            else if (null != n.parentLocale)
              if (null != m[n.parentLocale]) l = m[n.parentLocale]._config
              else {
                if (null == (r = q(n.parentLocale)))
                  return (
                    b[n.parentLocale] || (b[n.parentLocale] = []),
                    b[n.parentLocale].push({ name: e, config: n }),
                    null
                  )
                l = r._config
              }
            return (
              (m[e] = new f.Locale((0, c.mergeConfigs)(l, n))),
              b[e] &&
                b[e].forEach(function(e) {
                  y(e.name, e.config)
                }),
              v(e),
              m[e]
            )
          }
          return delete m[e], null
        }
        function w(e, n) {
          if (null != n) {
            var r,
              l,
              o = p.baseConfig
            null != (l = q(e)) && (o = l._config),
              (n = (0, c.mergeConfigs)(o, n)),
              ((r = new f.Locale(n)).parentLocale = m[e]),
              (m[e] = r),
              v(e)
          } else
            null != m[e] &&
              (null != m[e].parentLocale
                ? (m[e] = m[e].parentLocale)
                : null != m[e] && delete m[e])
          return m[e]
        }
        function x(e) {
          var r
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return L
          if (!(0, n.default)(e)) {
            if ((r = q(e))) return r
            e = [e]
          }
          return h(e)
        }
        function C() {
          return (0, d.default)(m)
        }
      },
      {
        '../utils/is-array': 92,
        '../utils/has-own-prop': 93,
        '../utils/is-undefined': 82,
        '../utils/compare-arrays': 83,
        '../utils/deprecate': 48,
        './set': 91,
        './constructor': 84,
        '../utils/keys': 94,
        './base-config': 95,
      },
    ],
    131: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = u)
        var e = require('../units/month'),
          r = require('../units/constants'),
          t = require('../create/parsing-flags'),
          E = o(t)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function u(t) {
          var o,
            u = t._a
          return (
            u &&
              -2 === (0, E.default)(t).overflow &&
              ((o =
                u[r.MONTH] < 0 || u[r.MONTH] > 11
                  ? r.MONTH
                  : u[r.DATE] < 1 ||
                    u[r.DATE] > (0, e.daysInMonth)(u[r.YEAR], u[r.MONTH])
                  ? r.DATE
                  : u[r.HOUR] < 0 ||
                    u[r.HOUR] > 24 ||
                    (24 === u[r.HOUR] &&
                      (0 !== u[r.MINUTE] ||
                        0 !== u[r.SECOND] ||
                        0 !== u[r.MILLISECOND]))
                  ? r.HOUR
                  : u[r.MINUTE] < 0 || u[r.MINUTE] > 59
                  ? r.MINUTE
                  : u[r.SECOND] < 0 || u[r.SECOND] > 59
                  ? r.SECOND
                  : u[r.MILLISECOND] < 0 || u[r.MILLISECOND] > 999
                  ? r.MILLISECOND
                  : -1),
              (0, E.default)(t)._overflowDayOfYear &&
                (o < r.YEAR || o > r.DATE) &&
                (o = r.DATE),
              (0, E.default)(t)._overflowWeeks && -1 === o && (o = r.WEEK),
              (0, E.default)(t)._overflowWeekday && -1 === o && (o = r.WEEKDAY),
              ((0, E.default)(t).overflow = o)),
            t
          )
        }
      },
      {
        '../units/month': 62,
        '../units/constants': 114,
        '../create/parsing-flags': 99,
      },
    ],
    138: [
      function(require, module, exports) {
        'use strict'
        function e(e, t, u) {
          return null != e ? e : null != t ? t : u
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    134: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.configFromArray = i)
        var e = require('../utils/hooks'),
          a = require('./date-from-array'),
          r = require('../units/year'),
          t = require('../units/week-calendar-utils'),
          l = require('../units/constants'),
          u = require('./local'),
          _ = require('../utils/defaults'),
          n = f(_),
          d = require('./parsing-flags'),
          o = f(d)
        function f(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function s(a) {
          var r = new Date(e.hooks.now())
          return a._useUTC
            ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()]
            : [r.getFullYear(), r.getMonth(), r.getDate()]
        }
        function i(e) {
          var t,
            u,
            _,
            d,
            f,
            i = []
          if (!e._d) {
            for (
              _ = s(e),
                e._w && null == e._a[l.DATE] && null == e._a[l.MONTH] && y(e),
                null != e._dayOfYear &&
                  ((f = (0, n.default)(e._a[l.YEAR], _[l.YEAR])),
                  (e._dayOfYear > (0, r.daysInYear)(f) || 0 === e._dayOfYear) &&
                    ((0, o.default)(e)._overflowDayOfYear = !0),
                  (u = (0, a.createUTCDate)(f, 0, e._dayOfYear)),
                  (e._a[l.MONTH] = u.getUTCMonth()),
                  (e._a[l.DATE] = u.getUTCDate())),
                t = 0;
              t < 3 && null == e._a[t];
              ++t
            )
              e._a[t] = i[t] = _[t]
            for (; t < 7; t++)
              e._a[t] = i[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t]
            24 === e._a[l.HOUR] &&
              0 === e._a[l.MINUTE] &&
              0 === e._a[l.SECOND] &&
              0 === e._a[l.MILLISECOND] &&
              ((e._nextDay = !0), (e._a[l.HOUR] = 0)),
              (e._d = (e._useUTC ? a.createUTCDate : a.createDate).apply(
                null,
                i
              )),
              (d = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
              null != e._tzm &&
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[l.HOUR] = 24),
              e._w &&
                void 0 !== e._w.d &&
                e._w.d !== d &&
                ((0, o.default)(e).weekdayMismatch = !0)
          }
        }
        function y(e) {
          var a, r, _, d, f, s, i, y
          if (null != (a = e._w).GG || null != a.W || null != a.E)
            (f = 1),
              (s = 4),
              (r = (0, n.default)(
                a.GG,
                e._a[l.YEAR],
                (0, t.weekOfYear)((0, u.createLocal)(), 1, 4).year
              )),
              (_ = (0, n.default)(a.W, 1)),
              ((d = (0, n.default)(a.E, 1)) < 1 || d > 7) && (y = !0)
          else {
            ;(f = e._locale._week.dow), (s = e._locale._week.doy)
            var c = (0, t.weekOfYear)((0, u.createLocal)(), f, s)
            ;(r = (0, n.default)(a.gg, e._a[l.YEAR], c.year)),
              (_ = (0, n.default)(a.w, c.week)),
              null != a.d
                ? ((d = a.d) < 0 || d > 6) && (y = !0)
                : null != a.e
                ? ((d = a.e + f), (a.e < 0 || a.e > 6) && (y = !0))
                : (d = f)
          }
          _ < 1 || _ > (0, t.weeksInYear)(r, f, s)
            ? ((0, o.default)(e)._overflowWeeks = !0)
            : null != y
            ? ((0, o.default)(e)._overflowWeekday = !0)
            : ((i = (0, t.dayOfYearFromWeeks)(r, _, d, f, s)),
              (e._a[l.YEAR] = i.year),
              (e._dayOfYear = i.dayOfYear))
        }
      },
      {
        '../utils/hooks': 35,
        './date-from-array': 115,
        '../units/year': 69,
        '../units/week-calendar-utils': 118,
        '../units/constants': 114,
        './local': 42,
        '../utils/defaults': 138,
        './parsing-flags': 99,
      },
    ],
    133: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.configFromISO = _),
          (exports.configFromRFC2822 = G),
          (exports.configFromString = H)
        var d = require('./from-string-and-format'),
          e = require('./date-from-array'),
          r = require('./from-array'),
          i = require('../utils/hooks'),
          t = require('../utils/deprecate'),
          a = require('./parsing-flags'),
          n = u(a),
          s = require('../units/month'),
          o = require('../units/day-of-week')
        function u(d) {
          return d && d.__esModule ? d : { default: d }
        }
        var l = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          f = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          c = /Z|[+-]\d\d(?::?\d\d)?/,
          m = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, !1],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
            ['YYYYDDD', /\d{7}/],
          ],
          Y = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
          ],
          S = /^\/?Date\((\-?\d+)/i
        function _(e) {
          var r,
            i,
            t,
            a,
            s,
            o,
            u = e._i,
            S = l.exec(u) || f.exec(u)
          if (S) {
            for ((0, n.default)(e).iso = !0, r = 0, i = m.length; r < i; r++)
              if (m[r][1].exec(S[1])) {
                ;(a = m[r][0]), (t = !1 !== m[r][2])
                break
              }
            if (null == a) return void (e._isValid = !1)
            if (S[3]) {
              for (r = 0, i = Y.length; r < i; r++)
                if (Y[r][1].exec(S[3])) {
                  s = (S[2] || ' ') + Y[r][0]
                  break
                }
              if (null == s) return void (e._isValid = !1)
            }
            if (!t && null != s) return void (e._isValid = !1)
            if (S[4]) {
              if (!c.exec(S[4])) return void (e._isValid = !1)
              o = 'Z'
            }
            ;(e._f = a + (s || '') + (o || '')),
              (0, d.configFromStringAndFormat)(e)
          } else e._isValid = !1
        }
        var D = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
        function p(d, e, r, i, t, a) {
          var n = [
            M(d),
            s.defaultLocaleMonthsShort.indexOf(e),
            parseInt(r, 10),
            parseInt(i, 10),
            parseInt(t, 10),
          ]
          return a && n.push(parseInt(a, 10)), n
        }
        function M(d) {
          var e = parseInt(d, 10)
          return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
        }
        function T(d) {
          return d
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .trim()
        }
        function W(d, e, r) {
          if (
            d &&
            o.defaultLocaleWeekdaysShort.indexOf(d) !==
              new Date(e[0], e[1], e[2]).getDay()
          )
            return (
              ((0, n.default)(r).weekdayMismatch = !0), (r._isValid = !1), !1
            )
          return !0
        }
        var g = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        }
        function v(d, e, r) {
          if (d) return g[d]
          if (e) return 0
          var i = parseInt(r, 10),
            t = i % 100
          return 60 * ((i - t) / 100) + t
        }
        function G(d) {
          var r = D.exec(T(d._i))
          if (r) {
            var i = p(r[4], r[3], r[2], r[5], r[6], r[7])
            if (!W(r[1], i, d)) return
            ;(d._a = i),
              (d._tzm = v(r[8], r[9], r[10])),
              (d._d = e.createUTCDate.apply(null, d._a)),
              d._d.setUTCMinutes(d._d.getUTCMinutes() - d._tzm),
              ((0, n.default)(d).rfc2822 = !0)
          } else d._isValid = !1
        }
        function H(d) {
          var e = S.exec(d._i)
          null === e
            ? (_(d),
              !1 === d._isValid &&
                (delete d._isValid,
                G(d),
                !1 === d._isValid &&
                  (delete d._isValid, i.hooks.createFromInputFallback(d))))
            : (d._d = new Date(+e[1]))
        }
        i.hooks.createFromInputFallback = (0, t.deprecate)(
          'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
          function(d) {
            d._d = new Date(d._i + (d._useUTC ? ' UTC' : ''))
          }
        )
      },
      {
        './from-string-and-format': 132,
        './date-from-array': 115,
        './from-array': 134,
        '../utils/hooks': 35,
        '../utils/deprecate': 48,
        './parsing-flags': 99,
        '../units/month': 62,
        '../units/day-of-week': 57,
      },
    ],
    132: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.configFromStringAndFormat = m)
        var e = require('./from-string'),
          r = require('./from-array'),
          t = require('../parse/regex'),
          o = require('../parse/token'),
          u = require('../format/format'),
          n = require('./check-overflow'),
          i = d(n),
          a = require('../units/constants'),
          s = require('../utils/hooks'),
          f = require('./parsing-flags'),
          l = d(f)
        function d(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function m(n) {
          if (n._f !== s.hooks.ISO_8601)
            if (n._f !== s.hooks.RFC_2822) {
              ;(n._a = []), ((0, l.default)(n).empty = !0)
              var f,
                d,
                m,
                _,
                g,
                h = '' + n._i,
                p = h.length,
                k = 0
              for (
                m =
                  (0, u.expandFormat)(n._f, n._locale).match(
                    u.formattingTokens
                  ) || [],
                  f = 0;
                f < m.length;
                f++
              )
                (_ = m[f]),
                  (d = (h.match((0, t.getParseRegexForToken)(_, n)) ||
                    [])[0]) &&
                    ((g = h.substr(0, h.indexOf(d))).length > 0 &&
                      (0, l.default)(n).unusedInput.push(g),
                    (h = h.slice(h.indexOf(d) + d.length)),
                    (k += d.length)),
                  u.formatTokenFunctions[_]
                    ? (d
                        ? ((0, l.default)(n).empty = !1)
                        : (0, l.default)(n).unusedTokens.push(_),
                      (0, o.addTimeToArrayFromToken)(_, d, n))
                    : n._strict && !d && (0, l.default)(n).unusedTokens.push(_)
              ;((0, l.default)(n).charsLeftOver = p - k),
                h.length > 0 && (0, l.default)(n).unusedInput.push(h),
                n._a[a.HOUR] <= 12 &&
                  !0 === (0, l.default)(n).bigHour &&
                  n._a[a.HOUR] > 0 &&
                  ((0, l.default)(n).bigHour = void 0),
                ((0, l.default)(n).parsedDateParts = n._a.slice(0)),
                ((0, l.default)(n).meridiem = n._meridiem),
                (n._a[a.HOUR] = c(n._locale, n._a[a.HOUR], n._meridiem)),
                (0, r.configFromArray)(n),
                (0, i.default)(n)
            } else (0, e.configFromRFC2822)(n)
          else (0, e.configFromISO)(n)
        }
        function c(e, r, t) {
          var o
          return null == t
            ? r
            : null != e.meridiemHour
            ? e.meridiemHour(r, t)
            : null != e.isPM
            ? ((o = e.isPM(t)) && r < 12 && (r += 12),
              o || 12 !== r || (r = 0),
              r)
            : r
        }
        ;(s.hooks.ISO_8601 = function() {}), (s.hooks.RFC_2822 = function() {})
      },
      {
        './from-string': 133,
        './from-array': 134,
        '../parse/regex': 78,
        '../parse/token': 79,
        '../format/format': 77,
        './check-overflow': 131,
        '../units/constants': 114,
        '../utils/hooks': 35,
        './parsing-flags': 99,
      },
    ],
    130: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.configFromStringAndArray = f)
        var e = require('../moment/constructor'),
          r = require('./from-string-and-format'),
          t = require('./parsing-flags'),
          n = a(t),
          u = require('./valid'),
          i = require('../utils/extend'),
          o = a(i)
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function f(t) {
          var i, a, f, l, d
          if (0 === t._f.length)
            return (
              ((0, n.default)(t).invalidFormat = !0),
              void (t._d = new Date(NaN))
            )
          for (l = 0; l < t._f.length; l++)
            (d = 0),
              (i = (0, e.copyConfig)({}, t)),
              null != t._useUTC && (i._useUTC = t._useUTC),
              (i._f = t._f[l]),
              (0, r.configFromStringAndFormat)(i),
              (0, u.isValid)(i) &&
                ((d += (0, n.default)(i).charsLeftOver),
                (d += 10 * (0, n.default)(i).unusedTokens.length),
                ((0, n.default)(i).score = d),
                (null == f || d < f) && ((f = d), (a = i)))
          ;(0, o.default)(t, a || i)
        }
      },
      {
        '../moment/constructor': 52,
        './from-string-and-format': 132,
        './parsing-flags': 99,
        './valid': 51,
        '../utils/extend': 97,
      },
    ],
    135: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.configFromObject = o)
        var e = require('../units/aliases'),
          r = require('./from-array'),
          t = require('../utils/map'),
          i = n(t)
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function o(t) {
          if (!t._d) {
            var n = (0, e.normalizeObjectUnits)(t._i)
            ;(t._a = (0, i.default)(
              [
                n.year,
                n.month,
                n.day || n.date,
                n.hour,
                n.minute,
                n.second,
                n.millisecond,
              ],
              function(e) {
                return e && parseInt(e, 10)
              }
            )),
              (0, r.configFromArray)(t)
          }
        }
      },
      { '../units/aliases': 70, './from-array': 134, '../utils/map': 129 },
    ],
    80: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.prepareConfig = x),
          (exports.createLocalOrUTC = D)
        var e = require('../utils/is-array'),
          r = h(e),
          t = require('../utils/is-object'),
          i = h(t),
          u = require('../utils/is-object-empty'),
          o = h(u),
          n = require('../utils/is-undefined'),
          a = h(n),
          l = require('../utils/is-number'),
          f = h(l),
          s = require('../utils/is-date'),
          d = h(s),
          c = require('../utils/map'),
          _ = h(c),
          m = require('./valid'),
          q = require('../moment/constructor'),
          g = require('../locale/locales'),
          p = require('../utils/hooks'),
          v = require('./check-overflow'),
          y = h(v),
          b = require('./from-string-and-array'),
          F = require('./from-string-and-format'),
          w = require('./from-string'),
          j = require('./from-array'),
          M = require('./from-object')
        function h(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function k(e) {
          var r = new q.Moment((0, y.default)(x(e)))
          return r._nextDay && (r.add(1, 'd'), (r._nextDay = void 0)), r
        }
        function x(e) {
          var t = e._i,
            i = e._f
          return (
            (e._locale = e._locale || (0, g.getLocale)(e._l)),
            null === t || (void 0 === i && '' === t)
              ? (0, m.createInvalid)({ nullInput: !0 })
              : ('string' == typeof t && (e._i = t = e._locale.preparse(t)),
                (0, q.isMoment)(t)
                  ? new q.Moment((0, y.default)(t))
                  : ((0, d.default)(t)
                      ? (e._d = t)
                      : (0, r.default)(i)
                      ? (0, b.configFromStringAndArray)(e)
                      : i
                      ? (0, F.configFromStringAndFormat)(e)
                      : A(e),
                    (0, m.isValid)(e) || (e._d = null),
                    e))
          )
        }
        function A(e) {
          var t = e._i
          ;(0, a.default)(t)
            ? (e._d = new Date(p.hooks.now()))
            : (0, d.default)(t)
            ? (e._d = new Date(t.valueOf()))
            : 'string' == typeof t
            ? (0, w.configFromString)(e)
            : (0, r.default)(t)
            ? ((e._a = (0, _.default)(t.slice(0), function(e) {
                return parseInt(e, 10)
              })),
              (0, j.configFromArray)(e))
            : (0, i.default)(t)
            ? (0, M.configFromObject)(e)
            : (0, f.default)(t)
            ? (e._d = new Date(t))
            : p.hooks.createFromInputFallback(e)
        }
        function D(e, t, u, n, a) {
          var l = {}
          return (
            (!0 !== u && !1 !== u) || ((n = u), (u = void 0)),
            (((0, i.default)(e) && (0, o.default)(e)) ||
              ((0, r.default)(e) && 0 === e.length)) &&
              (e = void 0),
            (l._isAMomentObject = !0),
            (l._useUTC = l._isUTC = a),
            (l._l = u),
            (l._i = e),
            (l._f = t),
            (l._strict = n),
            k(l)
          )
        }
      },
      {
        '../utils/is-array': 92,
        '../utils/is-object': 127,
        '../utils/is-object-empty': 128,
        '../utils/is-undefined': 82,
        '../utils/is-number': 96,
        '../utils/is-date': 41,
        '../utils/map': 129,
        './valid': 51,
        '../moment/constructor': 52,
        '../locale/locales': 46,
        '../utils/hooks': 35,
        './check-overflow': 131,
        './from-string-and-array': 130,
        './from-string-and-format': 132,
        './from-string': 133,
        './from-array': 134,
        './from-object': 135,
      },
    ],
    42: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.createLocal = r)
        var e = require('./from-anything')
        function r(r, t, o, a) {
          return (0, e.createLocalOrUTC)(r, t, o, a, !1)
        }
      },
      { './from-anything': 80 },
    ],
    53: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.prototypeMax = exports.prototypeMin = void 0),
          (exports.min = u),
          (exports.max = c)
        var e = require('../utils/deprecate'),
          t = require('../utils/is-array'),
          r = n(t),
          i = require('../create/local'),
          a = require('../create/valid')
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var s = (exports.prototypeMin = (0, e.deprecate)(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function() {
              var e = i.createLocal.apply(null, arguments)
              return this.isValid() && e.isValid()
                ? e < this
                  ? this
                  : e
                : (0, a.createInvalid)()
            }
          )),
          o = (exports.prototypeMax = (0, e.deprecate)(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function() {
              var e = i.createLocal.apply(null, arguments)
              return this.isValid() && e.isValid()
                ? e > this
                  ? this
                  : e
                : (0, a.createInvalid)()
            }
          ))
        function l(e, t) {
          var a, n
          if ((1 === t.length && (0, r.default)(t[0]) && (t = t[0]), !t.length))
            return (0, i.createLocal)()
          for (a = t[0], n = 1; n < t.length; ++n)
            (t[n].isValid() && !t[n][e](a)) || (a = t[n])
          return a
        }
        function u() {
          return l('isBefore', [].slice.call(arguments, 0))
        }
        function c() {
          return l('isAfter', [].slice.call(arguments, 0))
        }
      },
      {
        '../utils/deprecate': 48,
        '../utils/is-array': 92,
        '../create/local': 42,
        '../create/valid': 51,
      },
    ],
    55: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (exports.now = function() {
          return Date.now ? Date.now() : +new Date()
        })
      },
      {},
    ],
    98: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = l),
          (exports.isValid = s),
          (exports.createInvalid = f)
        var e = require('../utils/to-int'),
          r = a(e),
          t = require('../utils/index-of'),
          u = a(t),
          i = require('./constructor'),
          n = require('./create')
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var o = [
          'year',
          'quarter',
          'month',
          'week',
          'day',
          'hour',
          'minute',
          'second',
          'millisecond',
        ]
        function l(e) {
          for (var t in e)
            if (-1 === u.default.call(o, t) || (null != e[t] && isNaN(e[t])))
              return !1
          for (var i = !1, n = 0; n < o.length; ++n)
            if (e[o[n]]) {
              if (i) return !1
              parseFloat(e[o[n]]) !== (0, r.default)(e[o[n]]) && (i = !0)
            }
          return !0
        }
        function s() {
          return this._isValid
        }
        function f() {
          return (0, n.createDuration)(NaN)
        }
      },
      {
        '../utils/to-int': 81,
        '../utils/index-of': 117,
        './constructor': 72,
        './create': 73,
      },
    ],
    72: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.Duration = a),
          (exports.isDuration = o)
        var e = require('../units/aliases'),
          t = require('../locale/locales'),
          i = require('./valid.js'),
          s = r(i)
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function a(i) {
          var r = (0, e.normalizeObjectUnits)(i),
            a = r.year || 0,
            o = r.quarter || 0,
            n = r.month || 0,
            l = r.week || 0,
            u = r.day || 0,
            c = r.hour || 0,
            d = r.minute || 0,
            _ = r.second || 0,
            h = r.millisecond || 0
          ;(this._isValid = (0, s.default)(r)),
            (this._milliseconds = +h + 1e3 * _ + 6e4 * d + 1e3 * c * 60 * 60),
            (this._days = +u + 7 * l),
            (this._months = +n + 3 * o + 12 * a),
            (this._data = {}),
            (this._locale = (0, t.getLocale)()),
            this._bubble()
        }
        function o(e) {
          return e instanceof a
        }
      },
      { '../units/aliases': 70, '../locale/locales': 46, './valid.js': 98 },
    ],
    126: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    43: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.cloneWithOffset = C),
          (exports.getSetOffset = y),
          (exports.getSetZone = Z),
          (exports.setOffsetToUTC = k),
          (exports.setOffsetToLocal = D),
          (exports.setOffsetToParsedOffset = P),
          (exports.hasAlignedHourOffset = L),
          (exports.isDaylightSavingTime = V),
          (exports.isDaylightSavingTimeShifted = b),
          (exports.isLocal = z),
          (exports.isUtcOffset = M),
          (exports.isUtc = I)
        var t = require('../utils/zero-fill'),
          e = S(t),
          s = require('../duration/create'),
          i = require('../moment/add-subtract'),
          r = require('../moment/constructor'),
          f = require('../format/format'),
          u = require('../parse/regex'),
          n = require('../parse/token'),
          o = require('../create/local'),
          a = require('../create/from-anything'),
          h = require('../create/utc'),
          c = require('../utils/is-date'),
          l = S(c),
          d = require('../utils/to-int'),
          _ = S(d),
          O = require('../utils/is-undefined'),
          m = S(O),
          T = require('../utils/compare-arrays'),
          g = S(T),
          p = require('../utils/hooks')
        function S(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function v(t, s) {
          ;(0, f.addFormatToken)(t, 0, 0, function() {
            var t = this.utcOffset(),
              i = '+'
            return (
              t < 0 && ((t = -t), (i = '-')),
              i +
                (0, e.default)(~~(t / 60), 2) +
                s +
                (0, e.default)(~~t % 60, 2)
            )
          })
        }
        v('Z', ':'),
          v('ZZ', ''),
          (0, u.addRegexToken)('Z', u.matchShortOffset),
          (0, u.addRegexToken)('ZZ', u.matchShortOffset),
          (0, n.addParseToken)(['Z', 'ZZ'], function(t, e, s) {
            ;(s._useUTC = !0), (s._tzm = q(u.matchShortOffset, t))
          })
        var x = /([\+\-]|\d\d)/gi
        function q(t, e) {
          var s = (e || '').match(t)
          if (null === s) return null
          var i = ((s[s.length - 1] || []) + '').match(x) || ['-', 0, 0],
            r = 60 * i[1] + (0, _.default)(i[2])
          return 0 === r ? 0 : '+' === i[0] ? r : -r
        }
        function C(t, e) {
          var s, i
          return e._isUTC
            ? ((s = e.clone()),
              (i =
                ((0, r.isMoment)(t) || (0, l.default)(t)
                  ? t.valueOf()
                  : (0, o.createLocal)(t).valueOf()) - s.valueOf()),
              s._d.setTime(s._d.valueOf() + i),
              p.hooks.updateOffset(s, !1),
              s)
            : (0, o.createLocal)(t).local()
        }
        function U(t) {
          return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }
        function y(t, e, r) {
          var f,
            n = this._offset || 0
          if (!this.isValid()) return null != t ? this : NaN
          if (null != t) {
            if ('string' == typeof t) {
              if (null === (t = q(u.matchShortOffset, t))) return this
            } else Math.abs(t) < 16 && !r && (t *= 60)
            return (
              !this._isUTC && e && (f = U(this)),
              (this._offset = t),
              (this._isUTC = !0),
              null != f && this.add(f, 'm'),
              n !== t &&
                (!e || this._changeInProgress
                  ? (0, i.addSubtract)(
                      this,
                      (0, s.createDuration)(t - n, 'm'),
                      1,
                      !1
                    )
                  : this._changeInProgress ||
                    ((this._changeInProgress = !0),
                    p.hooks.updateOffset(this, !0),
                    (this._changeInProgress = null))),
              this
            )
          }
          return this._isUTC ? n : U(this)
        }
        function Z(t, e) {
          return null != t
            ? ('string' != typeof t && (t = -t), this.utcOffset(t, e), this)
            : -this.utcOffset()
        }
        function k(t) {
          return this.utcOffset(0, t)
        }
        function D(t) {
          return (
            this._isUTC &&
              (this.utcOffset(0, t),
              (this._isUTC = !1),
              t && this.subtract(U(this), 'm')),
            this
          )
        }
        function P() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0)
          else if ('string' == typeof this._i) {
            var t = q(u.matchOffset, this._i)
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
          }
          return this
        }
        function L(t) {
          return (
            !!this.isValid() &&
            ((t = t ? (0, o.createLocal)(t).utcOffset() : 0),
            (this.utcOffset() - t) % 60 == 0)
          )
        }
        function V() {
          return (
            this.utcOffset() >
              this.clone()
                .month(0)
                .utcOffset() ||
            this.utcOffset() >
              this.clone()
                .month(5)
                .utcOffset()
          )
        }
        function b() {
          if (!(0, m.default)(this._isDSTShifted)) return this._isDSTShifted
          var t = {}
          if (((0, r.copyConfig)(t, this), (t = (0, a.prepareConfig)(t))._a)) {
            var e = t._isUTC ? (0, h.createUTC)(t._a) : (0, o.createLocal)(t._a)
            this._isDSTShifted =
              this.isValid() && (0, g.default)(t._a, e.toArray()) > 0
          } else this._isDSTShifted = !1
          return this._isDSTShifted
        }
        function z() {
          return !!this.isValid() && !this._isUTC
        }
        function M() {
          return !!this.isValid() && this._isUTC
        }
        function I() {
          return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }
        p.hooks.updateOffset = function() {}
      },
      {
        '../utils/zero-fill': 75,
        '../duration/create': 73,
        '../moment/add-subtract': 76,
        '../moment/constructor': 52,
        '../format/format': 77,
        '../parse/regex': 78,
        '../parse/token': 79,
        '../create/local': 42,
        '../create/from-anything': 80,
        '../create/utc': 50,
        '../utils/is-date': 41,
        '../utils/to-int': 81,
        '../utils/is-undefined': 82,
        '../utils/compare-arrays': 83,
        '../utils/hooks': 35,
      },
    ],
    73: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.createDuration = p)
        var e = require('./constructor'),
          t = require('../utils/is-number'),
          r = f(t),
          o = require('../utils/to-int'),
          i = f(o),
          n = require('../utils/abs-round'),
          s = f(n),
          l = require('../utils/has-own-prop'),
          a = f(l),
          u = require('../units/constants'),
          d = require('../units/offset'),
          c = require('../create/local'),
          m = require('./valid')
        function f(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var h = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          M = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
        function p(t, o) {
          var n,
            l,
            d,
            m = t,
            f = null
          return (
            (0, e.isDuration)(t)
              ? (m = { ms: t._milliseconds, d: t._days, M: t._months })
              : (0, r.default)(t)
              ? ((m = {}), o ? (m[o] = t) : (m.milliseconds = t))
              : (f = h.exec(t))
              ? ((n = '-' === f[1] ? -1 : 1),
                (m = {
                  y: 0,
                  d: (0, i.default)(f[u.DATE]) * n,
                  h: (0, i.default)(f[u.HOUR]) * n,
                  m: (0, i.default)(f[u.MINUTE]) * n,
                  s: (0, i.default)(f[u.SECOND]) * n,
                  ms:
                    (0, i.default)((0, s.default)(1e3 * f[u.MILLISECOND])) * n,
                }))
              : (f = M.exec(t))
              ? ((n = '-' === f[1] ? -1 : (f[1], 1)),
                (m = {
                  y: v(f[2], n),
                  M: v(f[3], n),
                  w: v(f[4], n),
                  d: v(f[5], n),
                  h: v(f[6], n),
                  m: v(f[7], n),
                  s: v(f[8], n),
                }))
              : null == m
              ? (m = {})
              : 'object' == typeof m &&
                ('from' in m || 'to' in m) &&
                ((d = q((0, c.createLocal)(m.from), (0, c.createLocal)(m.to))),
                ((m = {}).ms = d.milliseconds),
                (m.M = d.months)),
            (l = new e.Duration(m)),
            (0, e.isDuration)(t) &&
              (0, a.default)(t, '_locale') &&
              (l._locale = t._locale),
            l
          )
        }
        function v(e, t) {
          var r = e && parseFloat(e.replace(',', '.'))
          return (isNaN(r) ? 0 : r) * t
        }
        function _(e, t) {
          var r = { milliseconds: 0, months: 0 }
          return (
            (r.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e
              .clone()
              .add(r.months, 'M')
              .isAfter(t) && --r.months,
            (r.milliseconds = +t - +e.clone().add(r.months, 'M')),
            r
          )
        }
        function q(e, t) {
          var r
          return e.isValid() && t.isValid()
            ? ((t = (0, d.cloneWithOffset)(t, e)),
              e.isBefore(t)
                ? (r = _(e, t))
                : (((r = _(t, e)).milliseconds = -r.milliseconds),
                  (r.months = -r.months)),
              r)
            : { milliseconds: 0, months: 0 }
        }
        ;(p.fn = e.Duration.prototype), (p.invalid = m.createInvalid)
      },
      {
        './constructor': 72,
        '../utils/is-number': 96,
        '../utils/to-int': 81,
        '../utils/abs-round': 126,
        '../utils/has-own-prop': 93,
        '../units/constants': 114,
        '../units/offset': 43,
        '../create/local': 42,
        './valid': 98,
      },
    ],
    76: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.subtract = exports.add = void 0),
          (exports.addSubtract = n)
        var e = require('./get-set'),
          t = require('../units/month'),
          r = require('../duration/create'),
          s = require('../utils/deprecate'),
          u = require('../utils/hooks'),
          a = require('../utils/abs-round'),
          i = o(a)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function d(e, t) {
          return function(u, a) {
            var i
            return (
              null === a ||
                isNaN(+a) ||
                ((0, s.deprecateSimple)(
                  t,
                  'moment().' +
                    t +
                    '(period, number) is deprecated. Please use moment().' +
                    t +
                    '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                ),
                (i = u),
                (u = a),
                (a = i)),
              (u = 'string' == typeof u ? +u : u),
              n(this, (0, r.createDuration)(u, a), e),
              this
            )
          }
        }
        function n(r, s, a, o) {
          var d = s._milliseconds,
            n = (0, i.default)(s._days),
            l = (0, i.default)(s._months)
          r.isValid() &&
            ((o = null == o || o),
            l && (0, t.setMonth)(r, (0, e.get)(r, 'Month') + l * a),
            n && (0, e.set)(r, 'Date', (0, e.get)(r, 'Date') + n * a),
            d && r._d.setTime(r._d.valueOf() + d * a),
            o && u.hooks.updateOffset(r, n || l))
        }
        var l = (exports.add = d(1, 'add')),
          c = (exports.subtract = d(-1, 'subtract'))
      },
      {
        './get-set': 107,
        '../units/month': 62,
        '../duration/create': 73,
        '../utils/deprecate': 48,
        '../utils/hooks': 35,
        '../utils/abs-round': 126,
      },
    ],
    37: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getCalendarFormat = o),
          (exports.calendar = i)
        var e = require('../create/local'),
          t = require('../units/offset'),
          a = require('../utils/is-function'),
          r = l(a),
          s = require('../utils/hooks')
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function o(e, t) {
          var a = e.diff(t, 'days', !0)
          return a < -6
            ? 'sameElse'
            : a < -1
            ? 'lastWeek'
            : a < 0
            ? 'lastDay'
            : a < 1
            ? 'sameDay'
            : a < 2
            ? 'nextDay'
            : a < 7
            ? 'nextWeek'
            : 'sameElse'
        }
        function i(a, l) {
          var o = a || (0, e.createLocal)(),
            i = (0, t.cloneWithOffset)(o, this).startOf('day'),
            n = s.hooks.calendarFormat(this, i) || 'sameElse',
            u = l && ((0, r.default)(l[n]) ? l[n].call(this, o) : l[n])
          return this.format(
            u || this.localeData().calendar(n, this, (0, e.createLocal)(o))
          )
        }
      },
      {
        '../create/local': 42,
        '../units/offset': 43,
        '../utils/is-function': 44,
        '../utils/hooks': 35,
      },
    ],
    101: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.clone = r)
        var e = require('./constructor')
        function r() {
          return new e.Moment(this)
        }
      },
      { './constructor': 52 },
    ],
    102: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.isAfter = n),
          (exports.isBefore = a),
          (exports.isBetween = o),
          (exports.isSame = u),
          (exports.isSameOrAfter = f),
          (exports.isSameOrBefore = c)
        var e = require('./constructor'),
          i = require('../units/aliases'),
          t = require('../create/local'),
          s = require('../utils/is-undefined'),
          r = l(s)
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function n(s, l) {
          var n = (0, e.isMoment)(s) ? s : (0, t.createLocal)(s)
          return (
            !(!this.isValid() || !n.isValid()) &&
            ('millisecond' ===
            (l = (0, i.normalizeUnits)((0, r.default)(l) ? 'millisecond' : l))
              ? this.valueOf() > n.valueOf()
              : n.valueOf() <
                this.clone()
                  .startOf(l)
                  .valueOf())
          )
        }
        function a(s, l) {
          var n = (0, e.isMoment)(s) ? s : (0, t.createLocal)(s)
          return (
            !(!this.isValid() || !n.isValid()) &&
            ('millisecond' ===
            (l = (0, i.normalizeUnits)((0, r.default)(l) ? 'millisecond' : l))
              ? this.valueOf() < n.valueOf()
              : this.clone()
                  .endOf(l)
                  .valueOf() < n.valueOf())
          )
        }
        function o(e, i, t, s) {
          return (
            ('(' === (s = s || '()')[0]
              ? this.isAfter(e, t)
              : !this.isBefore(e, t)) &&
            (')' === s[1] ? this.isBefore(i, t) : !this.isAfter(i, t))
          )
        }
        function u(s, r) {
          var l,
            n = (0, e.isMoment)(s) ? s : (0, t.createLocal)(s)
          return (
            !(!this.isValid() || !n.isValid()) &&
            ('millisecond' === (r = (0, i.normalizeUnits)(r || 'millisecond'))
              ? this.valueOf() === n.valueOf()
              : ((l = n.valueOf()),
                this.clone()
                  .startOf(r)
                  .valueOf() <= l &&
                  l <=
                    this.clone()
                      .endOf(r)
                      .valueOf()))
          )
        }
        function f(e, i) {
          return this.isSame(e, i) || this.isAfter(e, i)
        }
        function c(e, i) {
          return this.isSame(e, i) || this.isBefore(e, i)
        }
      },
      {
        './constructor': 52,
        '../units/aliases': 70,
        '../create/local': 42,
        '../utils/is-undefined': 82,
      },
    ],
    103: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.diff = i)
        var e = require('../utils/abs-floor'),
          t = a(e),
          s = require('../units/offset'),
          r = require('../units/aliases')
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function i(e, a, i) {
          var u, o, c
          if (!this.isValid()) return NaN
          if (!(u = (0, s.cloneWithOffset)(e, this)).isValid()) return NaN
          switch (
            ((o = 6e4 * (u.utcOffset() - this.utcOffset())),
            (a = (0, r.normalizeUnits)(a)))
          ) {
            case 'year':
              c = n(this, u) / 12
              break
            case 'month':
              c = n(this, u)
              break
            case 'quarter':
              c = n(this, u) / 3
              break
            case 'second':
              c = (this - u) / 1e3
              break
            case 'minute':
              c = (this - u) / 6e4
              break
            case 'hour':
              c = (this - u) / 36e5
              break
            case 'day':
              c = (this - u - o) / 864e5
              break
            case 'week':
              c = (this - u - o) / 6048e5
              break
            default:
              c = this - u
          }
          return i ? c : (0, t.default)(c)
        }
        function n(e, t) {
          var s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            r = e.clone().add(s, 'months')
          return (
            -(
              s +
              (t - r < 0
                ? (t - r) / (r - e.clone().add(s - 1, 'months'))
                : (t - r) / (e.clone().add(s + 1, 'months') - r))
            ) || 0
          )
        }
      },
      {
        '../utils/abs-floor': 136,
        '../units/offset': 43,
        '../units/aliases': 70,
      },
    ],
    104: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.toString = i),
          (exports.toISOString = a),
          (exports.inspect = m),
          (exports.format = Y)
        var t = require('../format/format'),
          e = require('../utils/hooks'),
          o = require('../utils/is-function'),
          r = s(o)
        function s(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function i() {
          return this.clone()
            .locale('en')
            .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
        }
        function a(e) {
          if (!this.isValid()) return null
          var o = !0 !== e,
            s = o ? this.clone().utc() : this
          return s.year() < 0 || s.year() > 9999
            ? (0, t.formatMoment)(
                s,
                o
                  ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                  : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
              )
            : (0, r.default)(Date.prototype.toISOString)
            ? o
              ? this.toDate().toISOString()
              : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                  .toISOString()
                  .replace('Z', (0, t.formatMoment)(s, 'Z'))
            : (0, t.formatMoment)(
                s,
                o
                  ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                  : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
              )
        }
        function m() {
          if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)'
          var t = 'moment',
            e = ''
          this.isLocal() ||
            ((t = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'),
            (e = 'Z'))
          var o = '[' + t + '("]',
            r = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
            s = e + '[")]'
          return this.format(o + r + '-MM-DD[T]HH:mm:ss.SSS' + s)
        }
        function Y(o) {
          o ||
            (o = this.isUtc()
              ? e.hooks.defaultFormatUtc
              : e.hooks.defaultFormat)
          var r = (0, t.formatMoment)(this, o)
          return this.localeData().postformat(r)
        }
        ;(e.hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
          (e.hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]')
      },
      {
        '../format/format': 77,
        '../utils/hooks': 35,
        '../utils/is-function': 44,
      },
    ],
    105: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.from = o),
          (exports.fromNow = i)
        var e = require('../duration/create'),
          r = require('../create/local'),
          t = require('../moment/constructor')
        function o(o, i) {
          return this.isValid() &&
            (((0, t.isMoment)(o) && o.isValid()) ||
              (0, r.createLocal)(o).isValid())
            ? (0, e.createDuration)({ to: this, from: o })
                .locale(this.locale())
                .humanize(!i)
            : this.localeData().invalidDate()
        }
        function i(e) {
          return this.from((0, r.createLocal)(), e)
        }
      },
      {
        '../duration/create': 73,
        '../create/local': 42,
        '../moment/constructor': 52,
      },
    ],
    106: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.to = o),
          (exports.toNow = i)
        var e = require('../duration/create'),
          t = require('../create/local'),
          r = require('../moment/constructor')
        function o(o, i) {
          return this.isValid() &&
            (((0, r.isMoment)(o) && o.isValid()) ||
              (0, t.createLocal)(o).isValid())
            ? (0, e.createDuration)({ from: this, to: o })
                .locale(this.locale())
                .humanize(!i)
            : this.localeData().invalidDate()
        }
        function i(e) {
          return this.to((0, t.createLocal)(), e)
        }
      },
      {
        '../duration/create': 73,
        '../create/local': 42,
        '../moment/constructor': 52,
      },
    ],
    108: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.lang = void 0),
          (exports.locale = a),
          (exports.localeData = o)
        var e = require('../locale/locales'),
          t = require('../utils/deprecate')
        function a(t) {
          var a
          return void 0 === t
            ? this._locale._abbr
            : (null != (a = (0, e.getLocale)(t)) && (this._locale = a), this)
        }
        var l = (exports.lang = (0, t.deprecate)(
          'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
          function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
          }
        ))
        function o() {
          return this._locale
        }
      },
      { '../locale/locales': 46, '../utils/deprecate': 48 },
    ],
    109: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.startOf = s),
          (exports.endOf = t)
        var e = require('../units/aliases')
        function s(s) {
          switch ((s = (0, e.normalizeUnits)(s))) {
            case 'year':
              this.month(0)
            case 'quarter':
            case 'month':
              this.date(1)
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
              this.hours(0)
            case 'hour':
              this.minutes(0)
            case 'minute':
              this.seconds(0)
            case 'second':
              this.milliseconds(0)
          }
          return (
            'week' === s && this.weekday(0),
            'isoWeek' === s && this.isoWeekday(1),
            'quarter' === s && this.month(3 * Math.floor(this.month() / 3)),
            this
          )
        }
        function t(s) {
          return void 0 === (s = (0, e.normalizeUnits)(s)) ||
            'millisecond' === s
            ? this
            : ('date' === s && (s = 'day'),
              this.startOf(s)
                .add(1, 'isoWeek' === s ? 'week' : s)
                .subtract(1, 'ms'))
        }
      },
      { '../units/aliases': 70 },
    ],
    110: [
      function(require, module, exports) {
        'use strict'
        function t() {
          return this._d.valueOf() - 6e4 * (this._offset || 0)
        }
        function e() {
          return Math.floor(this.valueOf() / 1e3)
        }
        function s() {
          return new Date(this.valueOf())
        }
        function n() {
          var t = this
          return [
            t.year(),
            t.month(),
            t.date(),
            t.hour(),
            t.minute(),
            t.second(),
            t.millisecond(),
          ]
        }
        function o() {
          var t = this
          return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds(),
          }
        }
        function r() {
          return this.isValid() ? this.toISOString() : null
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.valueOf = t),
          (exports.unix = e),
          (exports.toDate = s),
          (exports.toArray = n),
          (exports.toObject = o),
          (exports.toJSON = r)
      },
      {},
    ],
    111: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.isValid = n),
          (exports.parsingFlags = a),
          (exports.invalidAt = l)
        var e = require('../create/valid'),
          t = require('../utils/extend'),
          r = s(t),
          i = require('../create/parsing-flags'),
          u = s(i)
        function s(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function n() {
          return (0, e.isValid)(this)
        }
        function a() {
          return (0, r.default)({}, (0, u.default)(this))
        }
        function l() {
          return (0, u.default)(this).overflow
        }
      },
      {
        '../create/valid': 51,
        '../utils/extend': 97,
        '../create/parsing-flags': 99,
      },
    ],
    112: [
      function(require, module, exports) {
        'use strict'
        function t() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          }
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.creationData = t)
      },
      {},
    ],
    67: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetWeekYear = h),
          (exports.getSetISOWeekYear = G),
          (exports.getISOWeeksInYear = l),
          (exports.getWeeksInYear = m)
        var e = require('../format/format'),
          t = require('./aliases'),
          a = require('./priorities'),
          r = require('../parse/regex'),
          o = require('../parse/token'),
          i = require('./week-calendar-utils'),
          n = require('../utils/to-int'),
          s = u(n),
          g = require('../utils/hooks'),
          d = require('../create/local'),
          k = require('../create/date-from-array')
        function u(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function c(t, a) {
          ;(0, e.addFormatToken)(0, [t, t.length], 0, a)
        }
        function h(e) {
          return Y.call(
            this,
            e,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          )
        }
        function G(e) {
          return Y.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }
        function l() {
          return (0, i.weeksInYear)(this.year(), 1, 4)
        }
        function m() {
          var e = this.localeData()._week
          return (0, i.weeksInYear)(this.year(), e.dow, e.doy)
        }
        function Y(e, t, a, r, o) {
          var n
          return null == e
            ? (0, i.weekOfYear)(this, r, o).year
            : (t > (n = (0, i.weeksInYear)(e, r, o)) && (t = n),
              f.call(this, e, t, a, r, o))
        }
        function f(e, t, a, r, o) {
          var n = (0, i.dayOfYearFromWeeks)(e, t, a, r, o),
            s = (0, k.createUTCDate)(n.year, 0, n.dayOfYear)
          return (
            this.year(s.getUTCFullYear()),
            this.month(s.getUTCMonth()),
            this.date(s.getUTCDate()),
            this
          )
        }
        ;(0, e.addFormatToken)(0, ['gg', 2], 0, function() {
          return this.weekYear() % 100
        }),
          (0, e.addFormatToken)(0, ['GG', 2], 0, function() {
            return this.isoWeekYear() % 100
          }),
          c('gggg', 'weekYear'),
          c('ggggg', 'weekYear'),
          c('GGGG', 'isoWeekYear'),
          c('GGGGG', 'isoWeekYear'),
          (0, t.addUnitAlias)('weekYear', 'gg'),
          (0, t.addUnitAlias)('isoWeekYear', 'GG'),
          (0, a.addUnitPriority)('weekYear', 1),
          (0, a.addUnitPriority)('isoWeekYear', 1),
          (0, r.addRegexToken)('G', r.matchSigned),
          (0, r.addRegexToken)('g', r.matchSigned),
          (0, r.addRegexToken)('GG', r.match1to2, r.match2),
          (0, r.addRegexToken)('gg', r.match1to2, r.match2),
          (0, r.addRegexToken)('GGGG', r.match1to4, r.match4),
          (0, r.addRegexToken)('gggg', r.match1to4, r.match4),
          (0, r.addRegexToken)('GGGGG', r.match1to6, r.match6),
          (0, r.addRegexToken)('ggggg', r.match1to6, r.match6),
          (0, o.addWeekParseToken)(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(
            e,
            t,
            a,
            r
          ) {
            t[r.substr(0, 2)] = (0, s.default)(e)
          }),
          (0, o.addWeekParseToken)(['gg', 'GG'], function(e, t, a, r) {
            t[r] = g.hooks.parseTwoDigitYear(e)
          })
      },
      {
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        './week-calendar-utils': 118,
        '../utils/to-int': 81,
        '../utils/hooks': 35,
        '../create/local': 42,
        '../create/date-from-array': 115,
      },
    ],
    63: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetQuarter = d)
        var e = require('../format/format'),
          r = require('./aliases'),
          t = require('./priorities'),
          i = require('../parse/regex'),
          a = require('../parse/token'),
          u = require('./constants'),
          o = require('../utils/to-int'),
          n = s(o)
        function s(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function d(e) {
          return null == e
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (e - 1) + (this.month() % 3))
        }
        ;(0, e.addFormatToken)('Q', 0, 'Qo', 'quarter'),
          (0, r.addUnitAlias)('quarter', 'Q'),
          (0, t.addUnitPriority)('quarter', 7),
          (0, i.addRegexToken)('Q', i.match1),
          (0, a.addParseToken)('Q', function(e, r) {
            r[u.MONTH] = 3 * ((0, n.default)(e) - 1)
          })
      },
      {
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        './constants': 114,
        '../utils/to-int': 81,
      },
    ],
    56: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetDayOfMonth = void 0)
        var e = require('../moment/get-set'),
          t = require('../format/format'),
          r = require('./aliases'),
          a = require('./priorities'),
          o = require('../parse/regex'),
          n = require('../parse/token'),
          d = require('./constants'),
          i = require('../utils/to-int'),
          s = u(i)
        function u(e) {
          return e && e.__esModule ? e : { default: e }
        }
        ;(0, t.addFormatToken)('D', ['DD', 2], 'Do', 'date'),
          (0, r.addUnitAlias)('date', 'D'),
          (0, a.addUnitPriority)('date', 9),
          (0, o.addRegexToken)('D', o.match1to2),
          (0, o.addRegexToken)('DD', o.match1to2, o.match2),
          (0, o.addRegexToken)('Do', function(e, t) {
            return e
              ? t._dayOfMonthOrdinalParse || t._ordinalParse
              : t._dayOfMonthOrdinalParseLenient
          }),
          (0, n.addParseToken)(['D', 'DD'], d.DATE),
          (0, n.addParseToken)('Do', function(e, t) {
            t[d.DATE] = (0, s.default)(e.match(o.match1to2)[0])
          })
        var D = (exports.getSetDayOfMonth = (0, e.makeGetSet)('Date', !0))
      },
      {
        '../moment/get-set': 107,
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        './constants': 114,
        '../utils/to-int': 81,
      },
    ],
    58: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetDayOfYear = s)
        var e = require('../format/format'),
          r = require('./aliases'),
          a = require('./priorities'),
          t = require('../parse/regex'),
          D = require('./year'),
          d = require('../create/date-from-array'),
          i = require('../parse/token'),
          o = require('../utils/to-int'),
          u = n(o)
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function s(e) {
          var r =
            Math.round(
              (this.clone().startOf('day') - this.clone().startOf('year')) /
                864e5
            ) + 1
          return null == e ? r : this.add(e - r, 'd')
        }
        ;(0, e.addFormatToken)('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
          (0, r.addUnitAlias)('dayOfYear', 'DDD'),
          (0, a.addUnitPriority)('dayOfYear', 4),
          (0, t.addRegexToken)('DDD', t.match1to3),
          (0, t.addRegexToken)('DDDD', t.match3),
          (0, i.addParseToken)(['DDD', 'DDDD'], function(e, r, a) {
            a._dayOfYear = (0, u.default)(e)
          })
      },
      {
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        './year': 69,
        '../create/date-from-array': 115,
        '../parse/token': 79,
        '../utils/to-int': 81,
      },
    ],
    61: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetMinute = void 0)
        var e = require('../moment/get-set'),
          t = require('../format/format'),
          r = require('./aliases'),
          i = require('./priorities'),
          a = require('../parse/regex'),
          m = require('../parse/token'),
          o = require('./constants')
        ;(0, t.addFormatToken)('m', ['mm', 2], 0, 'minute'),
          (0, r.addUnitAlias)('minute', 'm'),
          (0, i.addUnitPriority)('minute', 14),
          (0, a.addRegexToken)('m', a.match1to2),
          (0, a.addRegexToken)('mm', a.match1to2, a.match2),
          (0, m.addParseToken)(['m', 'mm'], o.MINUTE)
        var n = (exports.getSetMinute = (0, e.makeGetSet)('Minutes', !1))
      },
      {
        '../moment/get-set': 107,
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        './constants': 114,
      },
    ],
    65: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetSecond = void 0)
        var e = require('../moment/get-set'),
          r = require('../format/format'),
          t = require('./aliases'),
          s = require('./priorities'),
          o = require('../parse/regex'),
          a = require('../parse/token'),
          d = require('./constants')
        ;(0, r.addFormatToken)('s', ['ss', 2], 0, 'second'),
          (0, t.addUnitAlias)('second', 's'),
          (0, s.addUnitPriority)('second', 15),
          (0, o.addRegexToken)('s', o.match1to2),
          (0, o.addRegexToken)('ss', o.match1to2, o.match2),
          (0, a.addParseToken)(['s', 'ss'], d.SECOND)
        var i = (exports.getSetSecond = (0, e.makeGetSet)('Seconds', !1))
      },
      {
        '../moment/get-set': 107,
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        './constants': 114,
      },
    ],
    60: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetMillisecond = void 0)
        var e,
          t = require('../moment/get-set'),
          i = require('../format/format'),
          n = require('./aliases'),
          o = require('./priorities'),
          r = require('../parse/regex'),
          S = require('../parse/token'),
          d = require('./constants'),
          a = require('../utils/to-int'),
          s = l(a)
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        for (
          (0, i.addFormatToken)('S', 0, 0, function() {
            return ~~(this.millisecond() / 100)
          }),
            (0, i.addFormatToken)(0, ['SS', 2], 0, function() {
              return ~~(this.millisecond() / 10)
            }),
            (0, i.addFormatToken)(0, ['SSS', 3], 0, 'millisecond'),
            (0, i.addFormatToken)(0, ['SSSS', 4], 0, function() {
              return 10 * this.millisecond()
            }),
            (0, i.addFormatToken)(0, ['SSSSS', 5], 0, function() {
              return 100 * this.millisecond()
            }),
            (0, i.addFormatToken)(0, ['SSSSSS', 6], 0, function() {
              return 1e3 * this.millisecond()
            }),
            (0, i.addFormatToken)(0, ['SSSSSSS', 7], 0, function() {
              return 1e4 * this.millisecond()
            }),
            (0, i.addFormatToken)(0, ['SSSSSSSS', 8], 0, function() {
              return 1e5 * this.millisecond()
            }),
            (0, i.addFormatToken)(0, ['SSSSSSSSS', 9], 0, function() {
              return 1e6 * this.millisecond()
            }),
            (0, n.addUnitAlias)('millisecond', 'ms'),
            (0, o.addUnitPriority)('millisecond', 16),
            (0, r.addRegexToken)('S', r.match1to3, r.match1),
            (0, r.addRegexToken)('SS', r.match1to3, r.match2),
            (0, r.addRegexToken)('SSS', r.match1to3, r.match3),
            e = 'SSSS';
          e.length <= 9;
          e += 'S'
        )
          (0, r.addRegexToken)(e, r.matchUnsigned)
        function c(e, t) {
          t[d.MILLISECOND] = (0, s.default)(1e3 * ('0.' + e))
        }
        for (e = 'S'; e.length <= 9; e += 'S') (0, S.addParseToken)(e, c)
        var u = (exports.getSetMillisecond = (0, t.makeGetSet)(
          'Milliseconds',
          !1
        ))
      },
      {
        '../moment/get-set': 107,
        '../format/format': 77,
        './aliases': 70,
        './priorities': 113,
        '../parse/regex': 78,
        '../parse/token': 79,
        './constants': 114,
        '../utils/to-int': 81,
      },
    ],
    66: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getZoneAbbr = r),
          (exports.getZoneName = t)
        var e = require('../format/format')
        function r() {
          return this._isUTC ? 'UTC' : ''
        }
        function t() {
          return this._isUTC ? 'Coordinated Universal Time' : ''
        }
        ;(0, e.addFormatToken)('z', 0, 0, 'zoneAbbr'),
          (0, e.addFormatToken)('zz', 0, 0, 'zoneName')
      },
      { '../format/format': 77 },
    ],
    54: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('./constructor'),
          t = require('./add-subtract'),
          r = require('./calendar'),
          a = require('./clone'),
          i = require('./compare'),
          s = require('./diff'),
          o = require('./format'),
          n = require('./from'),
          u = require('./to'),
          d = require('./get-set'),
          f = require('./locale'),
          c = require('./min-max'),
          g = require('./start-end-of'),
          S = require('./to-type'),
          l = require('./valid'),
          m = require('./creation-data'),
          O = require('../units/year'),
          q = require('../units/week-year'),
          y = require('../units/quarter'),
          p = require('../units/month'),
          h = require('../units/week'),
          k = require('../units/day-of-month'),
          D = require('../units/day-of-week'),
          w = require('../units/day-of-year'),
          W = require('../units/hour'),
          Y = require('../units/minute'),
          I = require('../units/second'),
          A = require('../units/millisecond'),
          M = require('../units/offset'),
          b = require('../units/timezone'),
          T = require('../utils/deprecate'),
          U = e.Moment.prototype
        ;(U.add = t.add),
          (U.calendar = r.calendar),
          (U.clone = a.clone),
          (U.diff = s.diff),
          (U.endOf = g.endOf),
          (U.format = o.format),
          (U.from = n.from),
          (U.fromNow = n.fromNow),
          (U.to = u.to),
          (U.toNow = u.toNow),
          (U.get = d.stringGet),
          (U.invalidAt = l.invalidAt),
          (U.isAfter = i.isAfter),
          (U.isBefore = i.isBefore),
          (U.isBetween = i.isBetween),
          (U.isSame = i.isSame),
          (U.isSameOrAfter = i.isSameOrAfter),
          (U.isSameOrBefore = i.isSameOrBefore),
          (U.isValid = l.isValid),
          (U.lang = f.lang),
          (U.locale = f.locale),
          (U.localeData = f.localeData),
          (U.max = c.prototypeMax),
          (U.min = c.prototypeMin),
          (U.parsingFlags = l.parsingFlags),
          (U.set = d.stringSet),
          (U.startOf = g.startOf),
          (U.subtract = t.subtract),
          (U.toArray = S.toArray),
          (U.toObject = S.toObject),
          (U.toDate = S.toDate),
          (U.toISOString = o.toISOString),
          (U.inspect = o.inspect),
          (U.toJSON = S.toJSON),
          (U.toString = o.toString),
          (U.unix = S.unix),
          (U.valueOf = S.valueOf),
          (U.creationData = m.creationData),
          (U.year = O.getSetYear),
          (U.isLeapYear = O.getIsLeapYear),
          (U.weekYear = q.getSetWeekYear),
          (U.isoWeekYear = q.getSetISOWeekYear),
          (U.quarter = U.quarters = y.getSetQuarter),
          (U.month = p.getSetMonth),
          (U.daysInMonth = p.getDaysInMonth),
          (U.week = U.weeks = h.getSetWeek),
          (U.isoWeek = U.isoWeeks = h.getSetISOWeek),
          (U.weeksInYear = q.getWeeksInYear),
          (U.isoWeeksInYear = q.getISOWeeksInYear),
          (U.date = k.getSetDayOfMonth),
          (U.day = U.days = D.getSetDayOfWeek),
          (U.weekday = D.getSetLocaleDayOfWeek),
          (U.isoWeekday = D.getSetISODayOfWeek),
          (U.dayOfYear = w.getSetDayOfYear),
          (U.hour = U.hours = W.getSetHour),
          (U.minute = U.minutes = Y.getSetMinute),
          (U.second = U.seconds = I.getSetSecond),
          (U.millisecond = U.milliseconds = A.getSetMillisecond),
          (U.utcOffset = M.getSetOffset),
          (U.utc = M.setOffsetToUTC),
          (U.local = M.setOffsetToLocal),
          (U.parseZone = M.setOffsetToParsedOffset),
          (U.hasAlignedHourOffset = M.hasAlignedHourOffset),
          (U.isDST = M.isDaylightSavingTime),
          (U.isLocal = M.isLocal),
          (U.isUtcOffset = M.isUtcOffset),
          (U.isUtc = M.isUtc),
          (U.isUTC = M.isUtc),
          (U.zoneAbbr = b.getZoneAbbr),
          (U.zoneName = b.getZoneName),
          (U.dates = (0, T.deprecate)(
            'dates accessor is deprecated. Use date instead.',
            k.getSetDayOfMonth
          )),
          (U.months = (0, T.deprecate)(
            'months accessor is deprecated. Use month instead',
            p.getSetMonth
          )),
          (U.years = (0, T.deprecate)(
            'years accessor is deprecated. Use year instead',
            O.getSetYear
          )),
          (U.zone = (0, T.deprecate)(
            'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
            M.getSetZone
          )),
          (U.isDSTShifted = (0, T.deprecate)(
            'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
            M.isDaylightSavingTimeShifted
          )),
          (exports.default = U)
      },
      {
        './constructor': 52,
        './add-subtract': 76,
        './calendar': 37,
        './clone': 101,
        './compare': 102,
        './diff': 103,
        './format': 104,
        './from': 105,
        './to': 106,
        './get-set': 107,
        './locale': 108,
        './min-max': 53,
        './start-end-of': 109,
        './to-type': 110,
        './valid': 111,
        './creation-data': 112,
        '../units/year': 69,
        '../units/week-year': 67,
        '../units/quarter': 63,
        '../units/month': 62,
        '../units/week': 68,
        '../units/day-of-month': 56,
        '../units/day-of-week': 57,
        '../units/day-of-year': 58,
        '../units/hour': 59,
        '../units/minute': 61,
        '../units/second': 65,
        '../units/millisecond': 60,
        '../units/offset': 43,
        '../units/timezone': 66,
        '../utils/deprecate': 48,
      },
    ],
    36: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.momentPrototype = exports.createInvalid = exports.createInZone = exports.createLocal = exports.createUnix = exports.createUTC = exports.isMoment = exports.max = exports.min = exports.now = void 0)
        var e = require('../create/local'),
          r = require('../create/utc'),
          t = require('../create/valid'),
          o = require('./constructor'),
          a = require('./min-max'),
          n = require('./now'),
          c = require('./prototype'),
          s = p(c)
        function p(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function x(r) {
          return (0, e.createLocal)(1e3 * r)
        }
        function i() {
          return e.createLocal.apply(null, arguments).parseZone()
        }
        ;(exports.now = n.now),
          (exports.min = a.min),
          (exports.max = a.max),
          (exports.isMoment = o.isMoment),
          (exports.createUTC = r.createUTC),
          (exports.createUnix = x),
          (exports.createLocal = e.createLocal),
          (exports.createInZone = i),
          (exports.createInvalid = t.createInvalid),
          (exports.momentPrototype = s.default)
      },
      {
        '../create/local': 42,
        '../create/utc': 50,
        '../create/valid': 51,
        './constructor': 52,
        './min-max': 53,
        './now': 55,
        './prototype': 54,
      },
    ],
    88: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return e
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.preParsePostFormat = e)
      },
      {},
    ],
    45: [
      function(require, module, exports) {
        'use strict'
        var e = require('./constructor'),
          r = require('./calendar'),
          a = require('./formats'),
          t = require('./invalid'),
          o = require('./ordinal'),
          s = require('./pre-post-format'),
          i = require('./relative'),
          l = require('./set'),
          n = require('../units/month'),
          d = require('../units/week'),
          u = require('../units/day-of-week'),
          h = require('../units/hour'),
          k = e.Locale.prototype
        ;(k.calendar = r.calendar),
          (k.longDateFormat = a.longDateFormat),
          (k.invalidDate = t.invalidDate),
          (k.ordinal = o.ordinal),
          (k.preparse = s.preParsePostFormat),
          (k.postformat = s.preParsePostFormat),
          (k.relativeTime = i.relativeTime),
          (k.pastFuture = i.pastFuture),
          (k.set = l.set),
          (k.months = n.localeMonths),
          (k.monthsShort = n.localeMonthsShort),
          (k.monthsParse = n.localeMonthsParse),
          (k.monthsRegex = n.monthsRegex),
          (k.monthsShortRegex = n.monthsShortRegex),
          (k.week = d.localeWeek),
          (k.firstDayOfYear = d.localeFirstDayOfYear),
          (k.firstDayOfWeek = d.localeFirstDayOfWeek),
          (k.weekdays = u.localeWeekdays),
          (k.weekdaysMin = u.localeWeekdaysMin),
          (k.weekdaysShort = u.localeWeekdaysShort),
          (k.weekdaysParse = u.localeWeekdaysParse),
          (k.weekdaysRegex = u.weekdaysRegex),
          (k.weekdaysShortRegex = u.weekdaysShortRegex),
          (k.weekdaysMinRegex = u.weekdaysMinRegex),
          (k.isPM = h.localeIsPM),
          (k.meridiem = h.localeMeridiem)
      },
      {
        './constructor': 84,
        './calendar': 85,
        './formats': 86,
        './invalid': 87,
        './ordinal': 89,
        './pre-post-format': 88,
        './relative': 90,
        './set': 91,
        '../units/month': 62,
        '../units/week': 68,
        '../units/day-of-week': 57,
        '../units/hour': 59,
      },
    ],
    47: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.listMonths = a),
          (exports.listMonthsShort = l),
          (exports.listWeekdays = d),
          (exports.listWeekdaysShort = f),
          (exports.listWeekdaysMin = c)
        var e = require('../utils/is-number'),
          t = o(e),
          r = require('./locales'),
          n = require('../create/utc')
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function u(e, t, o, u) {
          var s = (0, r.getLocale)(),
            i = (0, n.createUTC)().set(u, t)
          return s[o](i, e)
        }
        function s(e, r, n) {
          if (
            ((0, t.default)(e) && ((r = e), (e = void 0)),
            (e = e || ''),
            null != r)
          )
            return u(e, r, n, 'month')
          var o,
            s = []
          for (o = 0; o < 12; o++) s[o] = u(e, o, n, 'month')
          return s
        }
        function i(e, n, o, s) {
          'boolean' == typeof e
            ? ((0, t.default)(n) && ((o = n), (n = void 0)), (n = n || ''))
            : ((o = n = e),
              (e = !1),
              (0, t.default)(n) && ((o = n), (n = void 0)),
              (n = n || ''))
          var i,
            a = (0, r.getLocale)(),
            l = e ? a._week.dow : 0
          if (null != o) return u(n, (o + l) % 7, s, 'day')
          var d = []
          for (i = 0; i < 7; i++) d[i] = u(n, (i + l) % 7, s, 'day')
          return d
        }
        function a(e, t) {
          return s(e, t, 'months')
        }
        function l(e, t) {
          return s(e, t, 'monthsShort')
        }
        function d(e, t, r) {
          return i(e, t, r, 'weekdays')
        }
        function f(e, t, r) {
          return i(e, t, r, 'weekdaysShort')
        }
        function c(e, t, r) {
          return i(e, t, r, 'weekdaysMin')
        }
      },
      { '../utils/is-number': 96, './locales': 46, '../create/utc': 50 },
    ],
    49: [
      function(require, module, exports) {
        'use strict'
        require('./prototype')
        var t = require('./locales'),
          e = require('../utils/to-int'),
          r = n(e)
        function n(t) {
          return t && t.__esModule ? t : { default: t }
        }
        ;(0, t.getSetGlobalLocale)('en', {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(t) {
            var e = t % 10
            return (
              t +
              (1 === (0, r.default)((t % 100) / 10)
                ? 'th'
                : 1 === e
                ? 'st'
                : 2 === e
                ? 'nd'
                : 3 === e
                ? 'rd'
                : 'th')
            )
          },
        })
      },
      { './prototype': 45, './locales': 46, '../utils/to-int': 81 },
    ],
    38: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.listWeekdaysMin = exports.listWeekdaysShort = exports.listWeekdays = exports.listMonthsShort = exports.listMonths = exports.listLocales = exports.getLocale = exports.updateLocale = exports.defineLocale = exports.getSetGlobalLocale = void 0),
          require('./prototype')
        var e = require('./locales'),
          t = require('./lists'),
          s = require('../utils/deprecate'),
          o = require('../utils/hooks')
        require('./en'),
          (exports.getSetGlobalLocale = e.getSetGlobalLocale),
          (exports.defineLocale = e.defineLocale),
          (exports.updateLocale = e.updateLocale),
          (exports.getLocale = e.getLocale),
          (exports.listLocales = e.listLocales),
          (exports.listMonths = t.listMonths),
          (exports.listMonthsShort = t.listMonthsShort),
          (exports.listWeekdays = t.listWeekdays),
          (exports.listWeekdaysShort = t.listWeekdaysShort),
          (exports.listWeekdaysMin = t.listWeekdaysMin),
          (o.hooks.lang = (0, s.deprecate)(
            'moment.lang is deprecated. Use moment.locale instead.',
            e.getSetGlobalLocale
          )),
          (o.hooks.langData = (0, s.deprecate)(
            'moment.langData is deprecated. Use moment.localeData instead.',
            e.getLocale
          ))
      },
      {
        './prototype': 45,
        './locales': 46,
        './lists': 47,
        '../utils/deprecate': 48,
        '../utils/hooks': 35,
        './en': 49,
      },
    ],
    119: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.abs = t)
        var s = Math.abs
        function t() {
          var t = this._data
          return (
            (this._milliseconds = s(this._milliseconds)),
            (this._days = s(this._days)),
            (this._months = s(this._months)),
            (t.milliseconds = s(t.milliseconds)),
            (t.seconds = s(t.seconds)),
            (t.minutes = s(t.minutes)),
            (t.hours = s(t.hours)),
            (t.months = s(t.months)),
            (t.years = s(t.years)),
            this
          )
        }
      },
      {},
    ],
    120: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.add = r),
          (exports.subtract = s)
        var e = require('./create')
        function t(t, r, s, n) {
          var i = (0, e.createDuration)(r, s)
          return (
            (t._milliseconds += n * i._milliseconds),
            (t._days += n * i._days),
            (t._months += n * i._months),
            t._bubble()
          )
        }
        function r(e, r) {
          return t(this, e, r, 1)
        }
        function s(e, r) {
          return t(this, e, r, -1)
        }
      },
      { './create': 73 },
    ],
    137: [
      function(require, module, exports) {
        'use strict'
        function e(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e)
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e)
      },
      {},
    ],
    122: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.bubble = o),
          (exports.daysToMonths = i),
          (exports.monthsToDays = l)
        var e = require('../utils/abs-floor'),
          t = a(e),
          s = require('../utils/abs-ceil'),
          r = a(s),
          u = require('../create/date-from-array')
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function o() {
          var e,
            s,
            u,
            a,
            o,
            n = this._milliseconds,
            d = this._days,
            f = this._months,
            c = this._data
          return (
            (n >= 0 && d >= 0 && f >= 0) ||
              (n <= 0 && d <= 0 && f <= 0) ||
              ((n += 864e5 * (0, r.default)(l(f) + d)), (d = 0), (f = 0)),
            (c.milliseconds = n % 1e3),
            (e = (0, t.default)(n / 1e3)),
            (c.seconds = e % 60),
            (s = (0, t.default)(e / 60)),
            (c.minutes = s % 60),
            (u = (0, t.default)(s / 60)),
            (c.hours = u % 24),
            (d += (0, t.default)(u / 24)),
            (f += o = (0, t.default)(i(d))),
            (d -= (0, r.default)(l(o))),
            (a = (0, t.default)(f / 12)),
            (f %= 12),
            (c.days = d),
            (c.months = f),
            (c.years = a),
            this
          )
        }
        function i(e) {
          return (4800 * e) / 146097
        }
        function l(e) {
          return (146097 * e) / 4800
        }
      },
      {
        '../utils/abs-floor': 136,
        '../utils/abs-ceil': 137,
        '../create/date-from-array': 115,
      },
    ],
    121: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.asYears = exports.asMonths = exports.asWeeks = exports.asDays = exports.asHours = exports.asMinutes = exports.asSeconds = exports.asMilliseconds = void 0),
          (exports.as = n),
          (exports.valueOf = a)
        var s = require('./bubble'),
          e = require('../units/aliases'),
          t = require('../utils/to-int'),
          r = o(t)
        function o(s) {
          return s && s.__esModule ? s : { default: s }
        }
        function n(t) {
          if (!this.isValid()) return NaN
          var r,
            o,
            n = this._milliseconds
          if ('month' === (t = (0, e.normalizeUnits)(t)) || 'year' === t)
            return (
              (r = this._days + n / 864e5),
              (o = this._months + (0, s.daysToMonths)(r)),
              'month' === t ? o : o / 12
            )
          switch (
            ((r = this._days + Math.round((0, s.monthsToDays)(this._months))),
            t)
          ) {
            case 'week':
              return r / 7 + n / 6048e5
            case 'day':
              return r + n / 864e5
            case 'hour':
              return 24 * r + n / 36e5
            case 'minute':
              return 1440 * r + n / 6e4
            case 'second':
              return 86400 * r + n / 1e3
            case 'millisecond':
              return Math.floor(864e5 * r) + n
            default:
              throw new Error('Unknown unit ' + t)
          }
        }
        function a() {
          return this.isValid()
            ? this._milliseconds +
                864e5 * this._days +
                (this._months % 12) * 2592e6 +
                31536e6 * (0, r.default)(this._months / 12)
            : NaN
        }
        function i(s) {
          return function() {
            return this.as(s)
          }
        }
        var u = (exports.asMilliseconds = i('ms')),
          h = (exports.asSeconds = i('s')),
          d = (exports.asMinutes = i('m')),
          l = (exports.asHours = i('h')),
          c = (exports.asDays = i('d')),
          p = (exports.asWeeks = i('w')),
          x = (exports.asMonths = i('M')),
          m = (exports.asYears = i('y'))
      },
      { './bubble': 122, '../units/aliases': 70, '../utils/to-int': 81 },
    ],
    123: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.clone = r)
        var e = require('./create')
        function r() {
          return (0, e.createDuration)(this)
        }
      },
      { './create': 73 },
    ],
    124: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.years = exports.months = exports.days = exports.hours = exports.minutes = exports.seconds = exports.milliseconds = void 0),
          (exports.get = o),
          (exports.weeks = c)
        var s = require('../units/aliases'),
          e = require('../utils/abs-floor'),
          t = r(e)
        function r(s) {
          return s && s.__esModule ? s : { default: s }
        }
        function o(e) {
          return (
            (e = (0, s.normalizeUnits)(e)),
            this.isValid() ? this[e + 's']() : NaN
          )
        }
        function i(s) {
          return function() {
            return this.isValid() ? this._data[s] : NaN
          }
        }
        var n = (exports.milliseconds = i('milliseconds')),
          u = (exports.seconds = i('seconds')),
          a = (exports.minutes = i('minutes')),
          d = (exports.hours = i('hours')),
          p = (exports.days = i('days')),
          l = (exports.months = i('months')),
          x = (exports.years = i('years'))
        function c() {
          return (0, t.default)(this.days() / 7)
        }
      },
      { '../units/aliases': 70, '../utils/abs-floor': 136 },
    ],
    74: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetRelativeTimeRounding = i),
          (exports.getSetRelativeTimeThreshold = n),
          (exports.humanize = o)
        var e = require('./create'),
          t = Math.round,
          s = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 }
        function r(e, t, s, r, a) {
          return a.relativeTime(t || 1, !!s, e, r)
        }
        function a(a, i, n) {
          var o = (0, e.createDuration)(a).abs(),
            u = t(o.as('s')),
            d = t(o.as('m')),
            h = t(o.as('h')),
            l = t(o.as('d')),
            c = t(o.as('M')),
            m = t(o.as('y')),
            v = (u <= s.ss && ['s', u]) ||
              (u < s.s && ['ss', u]) ||
              (d <= 1 && ['m']) ||
              (d < s.m && ['mm', d]) ||
              (h <= 1 && ['h']) ||
              (h < s.h && ['hh', h]) ||
              (l <= 1 && ['d']) ||
              (l < s.d && ['dd', l]) ||
              (c <= 1 && ['M']) ||
              (c < s.M && ['MM', c]) ||
              (m <= 1 && ['y']) || ['yy', m]
          return (v[2] = i), (v[3] = +a > 0), (v[4] = n), r.apply(null, v)
        }
        function i(e) {
          return void 0 === e ? t : 'function' == typeof e && ((t = e), !0)
        }
        function n(e, t) {
          return (
            void 0 !== s[e] &&
            (void 0 === t
              ? s[e]
              : ((s[e] = t), 's' === e && (s.ss = t - 1), !0))
          )
        }
        function o(e) {
          if (!this.isValid()) return this.localeData().invalidDate()
          var t = this.localeData(),
            s = a(this, !e, t)
          return e && (s = t.pastFuture(+this, s)), t.postformat(s)
        }
      },
      { './create': 73 },
    ],
    125: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.toISOString = a)
        var t = require('../utils/abs-floor'),
          e = s(t)
        function s(t) {
          return t && t.__esModule ? t : { default: t }
        }
        var i = Math.abs
        function r(t) {
          return (t > 0) - (t < 0) || +t
        }
        function a() {
          if (!this.isValid()) return this.localeData().invalidDate()
          var t,
            s,
            a = i(this._milliseconds) / 1e3,
            n = i(this._days),
            l = i(this._months)
          ;(t = (0, e.default)(a / 60)),
            (s = (0, e.default)(t / 60)),
            (a %= 60),
            (t %= 60)
          var o = (0, e.default)(l / 12),
            u = (l %= 12),
            d = n,
            h = s,
            f = t,
            c = a ? a.toFixed(3).replace(/\.?0+$/, '') : '',
            _ = this.asSeconds()
          if (!_) return 'P0D'
          var v = _ < 0 ? '-' : '',
            M = r(this._months) !== r(_) ? '-' : '',
            m = r(this._days) !== r(_) ? '-' : '',
            p = r(this._milliseconds) !== r(_) ? '-' : ''
          return (
            v +
            'P' +
            (o ? M + o + 'Y' : '') +
            (u ? M + u + 'M' : '') +
            (d ? m + d + 'D' : '') +
            (h || f || c ? 'T' : '') +
            (h ? p + h + 'H' : '') +
            (f ? p + f + 'M' : '') +
            (c ? p + c + 'S' : '')
          )
        }
      },
      { '../utils/abs-floor': 136 },
    ],
    71: [
      function(require, module, exports) {
        'use strict'
        var e = require('./constructor'),
          s = require('./abs'),
          a = require('./add-subtract'),
          t = require('./as'),
          r = require('./bubble'),
          i = require('./clone'),
          o = require('./get'),
          n = require('./humanize'),
          u = require('./iso-string'),
          l = require('../moment/locale'),
          c = require('./valid'),
          d = require('../utils/deprecate'),
          S = e.Duration.prototype
        ;(S.isValid = c.isValid),
          (S.abs = s.abs),
          (S.add = a.add),
          (S.subtract = a.subtract),
          (S.as = t.as),
          (S.asMilliseconds = t.asMilliseconds),
          (S.asSeconds = t.asSeconds),
          (S.asMinutes = t.asMinutes),
          (S.asHours = t.asHours),
          (S.asDays = t.asDays),
          (S.asWeeks = t.asWeeks),
          (S.asMonths = t.asMonths),
          (S.asYears = t.asYears),
          (S.valueOf = t.valueOf),
          (S._bubble = r.bubble),
          (S.clone = i.clone),
          (S.get = o.get),
          (S.milliseconds = o.milliseconds),
          (S.seconds = o.seconds),
          (S.minutes = o.minutes),
          (S.hours = o.hours),
          (S.days = o.days),
          (S.weeks = o.weeks),
          (S.months = o.months),
          (S.years = o.years),
          (S.humanize = n.humanize),
          (S.toISOString = u.toISOString),
          (S.toString = u.toISOString),
          (S.toJSON = u.toISOString),
          (S.locale = l.locale),
          (S.localeData = l.localeData),
          (S.toIsoString = (0, d.deprecate)(
            'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
            u.toISOString
          )),
          (S.lang = l.lang)
      },
      {
        './constructor': 72,
        './abs': 119,
        './add-subtract': 120,
        './as': 121,
        './bubble': 122,
        './clone': 123,
        './get': 124,
        './humanize': 74,
        './iso-string': 125,
        '../moment/locale': 108,
        './valid': 98,
        '../utils/deprecate': 48,
      },
    ],
    39: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getSetRelativeTimeThreshold = exports.getSetRelativeTimeRounding = exports.isDuration = exports.createDuration = void 0),
          require('./prototype')
        var e = require('./create'),
          t = require('./constructor'),
          r = require('./humanize')
        ;(exports.createDuration = e.createDuration),
          (exports.isDuration = t.isDuration),
          (exports.getSetRelativeTimeRounding = r.getSetRelativeTimeRounding),
          (exports.getSetRelativeTimeThreshold = r.getSetRelativeTimeThreshold)
      },
      {
        './prototype': 71,
        './create': 73,
        './constructor': 72,
        './humanize': 74,
      },
    ],
    64: [
      function(require, module, exports) {
        'use strict'
        var e = require('../format/format'),
          a = require('../parse/regex'),
          r = require('../parse/token'),
          t = require('../utils/to-int'),
          n = d(t)
        function d(e) {
          return e && e.__esModule ? e : { default: e }
        }
        ;(0, e.addFormatToken)('X', 0, 0, 'unix'),
          (0, e.addFormatToken)('x', 0, 0, 'valueOf'),
          (0, a.addRegexToken)('x', a.matchSigned),
          (0, a.addRegexToken)('X', a.matchTimestamp),
          (0, r.addParseToken)('X', function(e, a, r) {
            r._d = new Date(1e3 * parseFloat(e, 10))
          }),
          (0, r.addParseToken)('x', function(e, a, r) {
            r._d = new Date((0, n.default)(e))
          })
      },
      {
        '../format/format': 77,
        '../parse/regex': 78,
        '../parse/token': 79,
        '../utils/to-int': 81,
      },
    ],
    40: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.normalizeUnits = void 0),
          require('./day-of-month'),
          require('./day-of-week'),
          require('./day-of-year'),
          require('./hour'),
          require('./millisecond'),
          require('./minute'),
          require('./month'),
          require('./offset'),
          require('./quarter'),
          require('./second'),
          require('./timestamp'),
          require('./timezone'),
          require('./week-year'),
          require('./week'),
          require('./year')
        var e = require('./aliases')
        exports.normalizeUnits = e.normalizeUnits
      },
      {
        './day-of-month': 56,
        './day-of-week': 57,
        './day-of-year': 58,
        './hour': 59,
        './millisecond': 60,
        './minute': 61,
        './month': 62,
        './offset': 43,
        './quarter': 63,
        './second': 65,
        './timestamp': 64,
        './timezone': 66,
        './week-year': 67,
        './week': 68,
        './year': 69,
        './aliases': 70,
      },
    ],
    32: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var o = require('./lib/utils/hooks'),
          e = require('./lib/moment/moment'),
          s = require('./lib/moment/calendar'),
          t = require('./lib/locale/locale'),
          i = require('./lib/duration/duration'),
          a = require('./lib/units/units'),
          l = require('./lib/utils/is-date'),
          r = n(l)
        function n(o) {
          return o && o.__esModule ? o : { default: o }
        }
        ;(o.hooks.version = '2.21.0'),
          (0, o.setHookCallback)(e.createLocal),
          (o.hooks.fn = e.momentPrototype),
          (o.hooks.min = e.min),
          (o.hooks.max = e.max),
          (o.hooks.now = e.now),
          (o.hooks.utc = e.createUTC),
          (o.hooks.unix = e.createUnix),
          (o.hooks.months = t.listMonths),
          (o.hooks.isDate = r.default),
          (o.hooks.locale = t.getSetGlobalLocale),
          (o.hooks.invalid = e.createInvalid),
          (o.hooks.duration = i.createDuration),
          (o.hooks.isMoment = e.isMoment),
          (o.hooks.weekdays = t.listWeekdays),
          (o.hooks.parseZone = e.createInZone),
          (o.hooks.localeData = t.getLocale),
          (o.hooks.isDuration = i.isDuration),
          (o.hooks.monthsShort = t.listMonthsShort),
          (o.hooks.weekdaysMin = t.listWeekdaysMin),
          (o.hooks.defineLocale = t.defineLocale),
          (o.hooks.updateLocale = t.updateLocale),
          (o.hooks.locales = t.listLocales),
          (o.hooks.weekdaysShort = t.listWeekdaysShort),
          (o.hooks.normalizeUnits = a.normalizeUnits),
          (o.hooks.relativeTimeRounding = i.getSetRelativeTimeRounding),
          (o.hooks.relativeTimeThreshold = i.getSetRelativeTimeThreshold),
          (o.hooks.calendarFormat = s.getCalendarFormat),
          (o.hooks.prototype = e.momentPrototype),
          (o.hooks.HTML5_FMT = {
            DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
            DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
            DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
            DATE: 'YYYY-MM-DD',
            TIME: 'HH:mm',
            TIME_SECONDS: 'HH:mm:ss',
            TIME_MS: 'HH:mm:ss.SSS',
            WEEK: 'YYYY-[W]WW',
            MONTH: 'YYYY-MM',
          }),
          (exports.default = o.hooks)
      },
      {
        './lib/utils/hooks': 35,
        './lib/moment/moment': 36,
        './lib/moment/calendar': 37,
        './lib/locale/locale': 38,
        './lib/duration/duration': 39,
        './lib/units/units': 40,
        './lib/utils/is-date': 41,
      },
    ],
    9: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (function() {
          window.requestFileSystem =
            window.requestFileSystem || window.webkitRequestFileSystem
          var e = chrome.extension.getURL('/'),
            n = {
              absPath: function(n, r) {
                return 'filesystem:' + e + (r ? 'temporary' : 'persistent') + n
              },
              requestFs: function(e, n) {
                void 0 === n && 'boolean' == typeof e && ((n = e), (e = null)),
                  (e = e || 1048576)
                var r = !0 === n ? window.TEMPORARY : window.PERSISTENT
                return new Promise(function(n, t) {
                  window.requestFileSystem(
                    r,
                    e,
                    function(e) {
                      return n(e)
                    },
                    function(e) {
                      return t(e)
                    }
                  )
                })
              },
              requestFsError: function(e) {
                console.log('ERROR requesting filesystem', e)
                showError(
                  'Unable to access filesystem',
                  'Something went wrong accessing the filesystem. Check your browser settings.',
                  !0,
                  !0
                )
              },
              getDirectory: function(e, n, r) {
                var t = void 0 === e.root ? e : e.root
                return new Promise(function(e, o) {
                  t.getDirectory(
                    n,
                    r,
                    function(n) {
                      return e(n)
                    },
                    function(e) {
                      return o(e)
                    }
                  )
                })
              },
              getFile: function(e, n, r) {
                var t = void 0 === e.root ? e : e.root
                return new Promise(function(e, o) {
                  t.getFile(
                    n,
                    r,
                    function(n) {
                      return e(n)
                    },
                    function(e) {
                      return o(e)
                    }
                  )
                })
              },
              getFiles: function(e, r, t) {
                return Promise.all(
                  r.map(function(r) {
                    var o = n.getFile(e, r)
                    return (
                      !0 === t &&
                        (o = o.catch(function(e) {
                          console.error('Ignoring not found file:', e)
                        })),
                      o
                    )
                  })
                ).then(function(e) {
                  return e.filter(function(e) {
                    return void 0 !== e
                  })
                })
              },
              writeFile: function(e, n) {
                return new Promise(function(r, t) {
                  e.createWriter(function(o) {
                    ;(o.onwriteend = function() {
                      return r(e)
                    }),
                      (o.onerror = function(e) {
                        return t(e)
                      }),
                      o.write(n)
                  }, t)
                })
              },
              moveFile: function(e, n, r) {
                return new Promise(function(t, o) {
                  e.moveTo(
                    n,
                    r,
                    function(e) {
                      return t(e)
                    },
                    o
                  )
                })
              },
              removeFile: function(e) {
                return new Promise(function(n, r) {
                  e.remove(
                    function() {
                      return n()
                    },
                    function(e) {
                      return r(e)
                    }
                  )
                })
              },
              lookupFiles: function(e, r) {
                var t = void 0 === e.root ? e : e.root
                return new Promise(function(e, o) {
                  var i = t.createReader(),
                    u = []
                  !(function t() {
                    i.readEntries(function(o) {
                      var i
                      o.length
                        ? ((u = u.concat(
                            ((i = o), Array.prototype.slice.call(i || [], 0))
                          )),
                          t())
                        : (u.sort(), e(!0 === r ? u : n.filterToFiles(u)))
                    }, o)
                  })()
                })
              },
              filterToFiles: function(e) {
                return e.filter(function(e) {
                  return e.isFile
                })
              },
              loadMetadata: function(e) {
                var r = e.map(function(e) {
                  return n.getMetadata(e)
                })
                return Promise.all(r)
              },
              getMetadata: function(e) {
                return new Promise(function(n, r) {
                  e.getMetadata(
                    function(r) {
                      ;(e.metadata = r), n(e)
                    },
                    function() {
                      console.log('error reading metadata', arguments),
                        (e.metadata = null),
                        n(e)
                    }
                  )
                })
              },
              rmFiles: function(e, n) {
                return new Promise(function(r, t) {
                  var o = e.length,
                    i = [],
                    u = [],
                    c = { succeeded: i, failed: u }
                  function s(e, t, s) {
                    ;(s ? i : u).push(e),
                      n(e, t, o, s),
                      i.length + u.length === o && r(c)
                  }
                  0 === o && r(c),
                    e.forEach(function(e, n) {
                      console.log('FILE', e, n),
                        e.isFile
                          ? e.remove(
                              function() {
                                return s(e, n, !0)
                              },
                              function() {
                                return s(e, n, !1)
                              }
                            )
                          : s(e, n, !1)
                    })
                })
              },
              clearAllFiles: function(e, r) {
                return new Promise(function(t, o) {
                  ;(r = r || function() {}),
                    n
                      .lookupFiles(e)
                      .then(function(e) {
                        return n.rmFiles(e)
                      })
                      .catch(function(e) {
                        var n = (function(e) {
                          var n = ''
                          switch (e.code) {
                            case FileError.QUOTA_EXCEEDED_ERR:
                              n = 'QUOTA_EXCEEDED_ERR'
                              break
                            case FileError.NOT_FOUND_ERR:
                              n = 'NOT_FOUND_ERR'
                              break
                            case FileError.SECURITY_ERR:
                              n = 'SECURITY_ERR'
                              break
                            case FileError.INVALID_MODIFICATION_ERR:
                              n = 'INVALID_MODIFICATION_ERR'
                              break
                            case FileError.INVALID_STATE_ERR:
                              n = 'INVALID_STATE_ERR'
                              break
                            default:
                              n = 'Unknown Error'
                          }
                          return n
                        })(e)
                        console.error('Encountered error', n), o(e)
                      })
                })
              },
              _listeners: [],
              onUpdated: function(e) {
                n._listeners.push(e)
              },
              triggerUpdated: function(e) {
                ;(e = e || {}),
                  n._listeners.forEach(function(n) {
                    return n(e)
                  })
              },
            }
          return n
        })()
        ;(window._FSAPI = e), (exports.default = e)
      },
      {},
    ],
    10: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var r = (function() {
          return function(r, t) {
            if (Array.isArray(r)) return r
            if (Symbol.iterator in Object(r))
              return (function(r, t) {
                var e = [],
                  n = !0,
                  a = !1,
                  o = void 0
                try {
                  for (
                    var u, i = r[Symbol.iterator]();
                    !(n = (u = i.next()).done) &&
                    (e.push(u.value), !t || e.length !== t);
                    n = !0
                  );
                } catch (r) {
                  ;(a = !0), (o = r)
                } finally {
                  try {
                    !n && i.return && i.return()
                  } finally {
                    if (a) throw o
                  }
                }
                return e
              })(r, t)
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          }
        })()
        function t(r) {
          for (var t = [], e = Object.keys(r), n = 0; n < e.length; ++n)
            t.push(r[e[n]])
          return t
        }
        function e(r) {
          for (var t = [], e = Object.keys(r), n = 0; n < e.length; ++n)
            t.push([e[n], r[e[n]]])
          return t
        }
        var n = {
          png: {
            ext: '.png',
            canvas: 'image/png',
            jspdf: 'PNG',
            capture: { format: 'png', quality: 100 },
          },
          jpg: {
            ext: '.jpg',
            canvas: 'image/jpeg',
            jspdf: 'JPEG',
            capture: { format: 'jpeg', quality: 92 },
          },
        }
        e(n).forEach(function(t) {
          var e = r(t, 2),
            n = e[0]
          return (e[1].key = n)
        }),
          (exports.default = n)
        var a = (exports.imageFormatsArray = t(n)),
          o = (exports.getImageFormat = function(r) {
            var t = n[(r || '').toLowerCase()]
            if (void 0 === t) {
              var e = new Error('No format found for: "' + r + '"')
              throw ((e.name = 'InvalidImageFormatKey'), e)
            }
            return t
          })
      },
      {},
    ],
    34: [
      function(require, module, exports) {
        var e = {
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            Ấ: 'A',
            Ắ: 'A',
            Ẳ: 'A',
            Ẵ: 'A',
            Ặ: 'A',
            Æ: 'AE',
            Ầ: 'A',
            Ằ: 'A',
            Ȃ: 'A',
            Ç: 'C',
            Ḉ: 'C',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            Ế: 'E',
            Ḗ: 'E',
            Ề: 'E',
            Ḕ: 'E',
            Ḝ: 'E',
            Ȇ: 'E',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            Ḯ: 'I',
            Ȋ: 'I',
            Ð: 'D',
            Ñ: 'N',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            Ố: 'O',
            Ṍ: 'O',
            Ṓ: 'O',
            Ȏ: 'O',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            Ý: 'Y',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            ấ: 'a',
            ắ: 'a',
            ẳ: 'a',
            ẵ: 'a',
            ặ: 'a',
            æ: 'ae',
            ầ: 'a',
            ằ: 'a',
            ȃ: 'a',
            ç: 'c',
            ḉ: 'c',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            ế: 'e',
            ḗ: 'e',
            ề: 'e',
            ḕ: 'e',
            ḝ: 'e',
            ȇ: 'e',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            ḯ: 'i',
            ȋ: 'i',
            ð: 'd',
            ñ: 'n',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            ố: 'o',
            ṍ: 'o',
            ṓ: 'o',
            ȏ: 'o',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            ý: 'y',
            ÿ: 'y',
            Ā: 'A',
            ā: 'a',
            Ă: 'A',
            ă: 'a',
            Ą: 'A',
            ą: 'a',
            Ć: 'C',
            ć: 'c',
            Ĉ: 'C',
            ĉ: 'c',
            Ċ: 'C',
            ċ: 'c',
            Č: 'C',
            č: 'c',
            C̆: 'C',
            c̆: 'c',
            Ď: 'D',
            ď: 'd',
            Đ: 'D',
            đ: 'd',
            Ē: 'E',
            ē: 'e',
            Ĕ: 'E',
            ĕ: 'e',
            Ė: 'E',
            ė: 'e',
            Ę: 'E',
            ę: 'e',
            Ě: 'E',
            ě: 'e',
            Ĝ: 'G',
            Ǵ: 'G',
            ĝ: 'g',
            ǵ: 'g',
            Ğ: 'G',
            ğ: 'g',
            Ġ: 'G',
            ġ: 'g',
            Ģ: 'G',
            ģ: 'g',
            Ĥ: 'H',
            ĥ: 'h',
            Ħ: 'H',
            ħ: 'h',
            Ḫ: 'H',
            ḫ: 'h',
            Ĩ: 'I',
            ĩ: 'i',
            Ī: 'I',
            ī: 'i',
            Ĭ: 'I',
            ĭ: 'i',
            Į: 'I',
            į: 'i',
            İ: 'I',
            ı: 'i',
            Ĳ: 'IJ',
            ĳ: 'ij',
            Ĵ: 'J',
            ĵ: 'j',
            Ķ: 'K',
            ķ: 'k',
            Ḱ: 'K',
            ḱ: 'k',
            K̆: 'K',
            k̆: 'k',
            Ĺ: 'L',
            ĺ: 'l',
            Ļ: 'L',
            ļ: 'l',
            Ľ: 'L',
            ľ: 'l',
            Ŀ: 'L',
            ŀ: 'l',
            Ł: 'l',
            ł: 'l',
            Ḿ: 'M',
            ḿ: 'm',
            M̆: 'M',
            m̆: 'm',
            Ń: 'N',
            ń: 'n',
            Ņ: 'N',
            ņ: 'n',
            Ň: 'N',
            ň: 'n',
            ŉ: 'n',
            N̆: 'N',
            n̆: 'n',
            Ō: 'O',
            ō: 'o',
            Ŏ: 'O',
            ŏ: 'o',
            Ő: 'O',
            ő: 'o',
            Œ: 'OE',
            œ: 'oe',
            P̆: 'P',
            p̆: 'p',
            Ŕ: 'R',
            ŕ: 'r',
            Ŗ: 'R',
            ŗ: 'r',
            Ř: 'R',
            ř: 'r',
            R̆: 'R',
            r̆: 'r',
            Ȓ: 'R',
            ȓ: 'r',
            Ś: 'S',
            ś: 's',
            Ŝ: 'S',
            ŝ: 's',
            Ş: 'S',
            Ș: 'S',
            ș: 's',
            ş: 's',
            Š: 'S',
            š: 's',
            Ţ: 'T',
            ţ: 't',
            ț: 't',
            Ț: 'T',
            Ť: 'T',
            ť: 't',
            Ŧ: 'T',
            ŧ: 't',
            T̆: 'T',
            t̆: 't',
            Ũ: 'U',
            ũ: 'u',
            Ū: 'U',
            ū: 'u',
            Ŭ: 'U',
            ŭ: 'u',
            Ů: 'U',
            ů: 'u',
            Ű: 'U',
            ű: 'u',
            Ų: 'U',
            ų: 'u',
            Ȗ: 'U',
            ȗ: 'u',
            V̆: 'V',
            v̆: 'v',
            Ŵ: 'W',
            ŵ: 'w',
            Ẃ: 'W',
            ẃ: 'w',
            X̆: 'X',
            x̆: 'x',
            Ŷ: 'Y',
            ŷ: 'y',
            Ÿ: 'Y',
            Y̆: 'Y',
            y̆: 'y',
            Ź: 'Z',
            ź: 'z',
            Ż: 'Z',
            ż: 'z',
            Ž: 'Z',
            ž: 'z',
            ſ: 's',
            ƒ: 'f',
            Ơ: 'O',
            ơ: 'o',
            Ư: 'U',
            ư: 'u',
            Ǎ: 'A',
            ǎ: 'a',
            Ǐ: 'I',
            ǐ: 'i',
            Ǒ: 'O',
            ǒ: 'o',
            Ǔ: 'U',
            ǔ: 'u',
            Ǖ: 'U',
            ǖ: 'u',
            Ǘ: 'U',
            ǘ: 'u',
            Ǚ: 'U',
            ǚ: 'u',
            Ǜ: 'U',
            ǜ: 'u',
            Ứ: 'U',
            ứ: 'u',
            Ṹ: 'U',
            ṹ: 'u',
            Ǻ: 'A',
            ǻ: 'a',
            Ǽ: 'AE',
            ǽ: 'ae',
            Ǿ: 'O',
            ǿ: 'o',
            Þ: 'TH',
            þ: 'th',
            Ṕ: 'P',
            ṕ: 'p',
            Ṥ: 'S',
            ṥ: 's',
            X́: 'X',
            x́: 'x',
            Ѓ: 'Г',
            ѓ: 'г',
            Ќ: 'К',
            ќ: 'к',
            A̋: 'A',
            a̋: 'a',
            E̋: 'E',
            e̋: 'e',
            I̋: 'I',
            i̋: 'i',
            Ǹ: 'N',
            ǹ: 'n',
            Ồ: 'O',
            ồ: 'o',
            Ṑ: 'O',
            ṑ: 'o',
            Ừ: 'U',
            ừ: 'u',
            Ẁ: 'W',
            ẁ: 'w',
            Ỳ: 'Y',
            ỳ: 'y',
            Ȁ: 'A',
            ȁ: 'a',
            Ȅ: 'E',
            ȅ: 'e',
            Ȉ: 'I',
            ȉ: 'i',
            Ȍ: 'O',
            ȍ: 'o',
            Ȑ: 'R',
            ȑ: 'r',
            Ȕ: 'U',
            ȕ: 'u',
            B̌: 'B',
            b̌: 'b',
            Č̣: 'C',
            č̣: 'c',
            Ê̌: 'E',
            ê̌: 'e',
            F̌: 'F',
            f̌: 'f',
            Ǧ: 'G',
            ǧ: 'g',
            Ȟ: 'H',
            ȟ: 'h',
            J̌: 'J',
            ǰ: 'j',
            Ǩ: 'K',
            ǩ: 'k',
            M̌: 'M',
            m̌: 'm',
            P̌: 'P',
            p̌: 'p',
            Q̌: 'Q',
            q̌: 'q',
            Ř̩: 'R',
            ř̩: 'r',
            Ṧ: 'S',
            ṧ: 's',
            V̌: 'V',
            v̌: 'v',
            W̌: 'W',
            w̌: 'w',
            X̌: 'X',
            x̌: 'x',
            Y̌: 'Y',
            y̌: 'y',
            A̧: 'A',
            a̧: 'a',
            B̧: 'B',
            b̧: 'b',
            Ḑ: 'D',
            ḑ: 'd',
            Ȩ: 'E',
            ȩ: 'e',
            Ɛ̧: 'E',
            ɛ̧: 'e',
            Ḩ: 'H',
            ḩ: 'h',
            I̧: 'I',
            i̧: 'i',
            Ɨ̧: 'I',
            ɨ̧: 'i',
            M̧: 'M',
            m̧: 'm',
            O̧: 'O',
            o̧: 'o',
            Q̧: 'Q',
            q̧: 'q',
            U̧: 'U',
            u̧: 'u',
            X̧: 'X',
            x̧: 'x',
            Z̧: 'Z',
            z̧: 'z',
          },
          o = Object.keys(e).join('|'),
          u = new RegExp(o, 'g'),
          a = new RegExp(o, ''),
          A = function(o) {
            return o.replace(u, function(o) {
              return e[o]
            })
          },
          E = function(e) {
            return !!e.match(a)
          }
        ;(module.exports = A),
          (module.exports.has = E),
          (module.exports.remove = A)
      },
      {},
    ],
    22: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (exports.genLastErrorFmt = function(e) {
          return function(r, t) {
            var s = { name: e, message: r.message, stack: r.stack }
            return t && (s.via = t), s
          }
        })
      },
      {},
    ],
    12: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.removeDownloads = exports.containsDownloads = exports.requestDownloads = exports.requestIfNeededDownloads = exports.requestIfNeeded = exports.remove = exports.contains = exports.request = exports.PERMISSIONS = void 0)
        var e =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                },
          r = require('./chrome.util'),
          o = (0, r.genLastErrorFmt)('ChromePermissionsError'),
          t = (exports.PERMISSIONS = { DOWNLOADS: 'downloads' }),
          n = (exports.request = function(e, r) {
            return new Promise(function(t, n) {
              var s = d(e, r)
              chrome.permissions.request(s, function(e) {
                var r = chrome.runtime.lastError
                return r ? n(o(r, 'request')) : t(e)
              })
            })
          }),
          s = (exports.contains = function(e, r) {
            return new Promise(function(t, n) {
              var s = d(e, r)
              chrome.permissions.contains(s, function(e) {
                var r = chrome.runtime.lastError
                return r ? n(o(r, 'contains')) : t(e)
              })
            })
          }),
          u = (exports.remove = function(e, r) {
            return new Promise(function(t, n) {
              var s = d(e, r)
              chrome.permissions.remove(s, function(e) {
                var r = chrome.runtime.lastError
                return r ? n(o(r, 'remove')) : t(e)
              })
            })
          }),
          i = (exports.requestIfNeeded = function(e, r) {
            return s(e, r).then(function(o) {
              return !!o || n(e, r)
            })
          }),
          c = (exports.requestIfNeededDownloads = function() {
            return i(t.DOWNLOADS)
          }),
          f = (exports.requestDownloads = function() {
            return n(t.DOWNLOADS)
          }),
          m = (exports.containsDownloads = function() {
            return s(t.DOWNLOADS)
          }),
          p = (exports.removeDownloads = function() {
            return u(t.DOWNLOADS)
          }),
          a = function(e) {
            return 'string' == typeof e ? [e] : e
          },
          d = function(r, o) {
            return void 0 === o &&
              'object' === (void 0 === r ? 'undefined' : e(r))
              ? r
              : { permissions: (r = a(r)), origins: (o = a(o)) }
          }
      },
      { './chrome.util': 22 },
    ],
    26: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.isAllowedIncognitoAccess = exports.isAllowedFileSchemeAccess = exports.isFileUrl = void 0)
        var e =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                },
          o = require('./chrome.util'),
          r = (0, o.genLastErrorFmt)('ChromeExtensionError'),
          t = (exports.isFileUrl = function(o) {
            if (!o) return !1
            try {
              return 'file:' === new URL(o).protocol
            } catch (r) {
              throw ((r.message +=
                ' ' + (void 0 === o ? 'undefined' : e(o)) + ' (' + o + ')'),
              r)
            }
          }),
          n = (exports.isAllowedFileSchemeAccess = function(e) {
            return new Promise(function(e, o) {
              chrome.extension.isAllowedFileSchemeAccess(function(t) {
                var n = chrome.runtime.lastError
                return n ? o(r(n, 'isAllowedFileSchemeAccess')) : e(t)
              })
            })
          }),
          s = (exports.isAllowedIncognitoAccess = function() {
            return new Promise(function(e, o) {
              chrome.extension.isAllowedIncognitoAccess(function(t) {
                var n = chrome.runtime.lastError
                return n ? o(r(n, 'isAllowedIncognitoAccess')) : e(t)
              })
            })
          })
      },
      { './chrome.util': 22 },
    ],
    16: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (exports.serialMap = function(e, n) {
            var t = e.length,
              r = void 0 === n
            return Promise.resolve().then(function() {
              return (function o(i, u) {
                return i >= t
                  ? u
                  : (r ? e[i]() : n(e[i])).then(function(e) {
                      return o(i + 1, e)
                    })
              })(0, void 0)
            })
          }),
          n = (exports.sleep = function(e) {
            return new Promise(function(n) {
              window.setTimeout(n, e)
            })
          }),
          t = (exports.timeoutWrap = function(e, n, t, r) {
            return new Promise(function(o, i) {
              var u = void 0
              n &&
                (u = window.setTimeout(function() {
                  var e = 'Promise timed out after ' + n + 'ms'
                  t && (e += ' ' + t)
                  var o = new Error(e)
                  ;((o.name = 'PromiseTimeout'), r)
                    ? !1 === r(o, n) && i(o)
                    : i(o)
                }, n)),
                e
                  .then(function(e) {
                    window.clearTimeout(u), o(e)
                  })
                  .catch(i)
            })
          }),
          r = (exports.loadImage = function(e) {
            return new Promise(function(n, t) {
              var r = new Image()
              ;(r.onerror = function(e) {
                return t(e)
              }),
                (r.onload = function(t) {
                  return n({ img: r, src: e, width: r.width, height: r.height })
                }),
                (r.src = e)
            })
          })
      },
      {},
    ],
    23: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.downloadAll = exports.downloadUrl = exports.search = exports.download = exports.ERROR_INCOGNITO_NETWORK_NAME = exports.ERROR_NAME = void 0)
        var r = require('./chrome.util'),
          o = require('./chrome.extension'),
          e = require('./promise'),
          n = (exports.ERROR_NAME = 'ChromeDownloadsError'),
          t = (exports.ERROR_INCOGNITO_NETWORK_NAME =
            'AllowIncognitoNetworkError'),
          i = (0, r.genLastErrorFmt)(n),
          u = (exports.download = function(r) {
            return new Promise(function(o, e) {
              chrome.downloads.download(r, function(r) {
                var n = chrome.runtime.lastError
                return n ? e(i(n, 'download')) : o(r)
              })
            })
          }),
          s = (exports.search = function(r) {
            return new Promise(function(o, e) {
              chrome.downloads.search(r, function(r) {
                var n = chrome.runtime.lastError
                return n ? e(i(n, 'search')) : o(r)
              })
            })
          }),
          c = (exports.downloadUrl = function(r, e, n) {
            var i = {
              url: r,
              conflictAction: chrome.downloads.FilenameConflictAction.UNIQUIFY,
            }
            return (
              (n || e) &&
                ((n = n || r.split('/').pop()),
                e && (n = e + '/' + n),
                (i.filename = n)),
              u(i).then(function(r) {
                return (0, o.isAllowedIncognitoAccess)()
                  .then(function(o) {
                    if (o)
                      return s({ id: r }).then(function(r) {
                        var o = r[0]
                        if (
                          o &&
                          'interrupted' === o.state &&
                          'NETWORK_FAILED' === o.error
                        ) {
                          var e = new Error(
                            'Download encountered network failed error with allow incognito'
                          )
                          throw ((e.name = t), e)
                        }
                      })
                  })
                  .then(function() {
                    return r
                  })
              })
            )
          }),
          l = (exports.downloadAll = function(r, o) {
            var n = r.length,
              t = 0,
              i = []
            return (
              (r = r.map(function(r) {
                return 'string' == typeof r ? { url: r } : r
              })),
              (0, e.serialMap)(r, function(r) {
                return c(r.url, o, r.filename)
                  .then(function(o) {
                    1, i.push({ url: r, id: o, success: !0 })
                  })
                  .catch(function(o) {
                    ;(t += 1), i.push({ url: r, error: o, success: !1 })
                  })
              }).then(function() {
                if (t && t === n) {
                  var r = i[0].error
                  throw ((r.message +=
                    ' (downloadAll: ' + t + ' of ' + n + ')'),
                  r)
                }
                return i
              })
            )
          })
      },
      { './chrome.util': 22, './chrome.extension': 26, './promise': 16 },
    ],
    27: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.sync = exports.local = void 0)
        var r = require('./chrome.util'),
          e = {}
        ;['local', 'sync'].forEach(function(o) {
          var t = (0, r.genLastErrorFmt)('Chrome' + o + 'StorageError')
          e[o] = {
            get: function(r) {
              return new Promise(function(e, n) {
                chrome.storage[o].get(r, function(r) {
                  var o = chrome.runtime.lastError
                  return o ? n(t(o, 'get')) : e(r)
                })
              })
            },
            set: function(r) {
              return new Promise(function(e, n) {
                chrome.storage[o].set(r, function() {
                  var r = chrome.runtime.lastError
                  return r ? n(t(r, 'set')) : e()
                })
              })
            },
            remove: function(r) {
              return new Promise(function(e, n) {
                chrome.storage[o].remove(r, function() {
                  var r = chrome.runtime.lastError
                  return r ? n(t(r, 'remove')) : e()
                })
              })
            },
          }
        }),
          (exports.default = e)
        var o = (exports.local = e.local),
          t = (exports.sync = e.sync)
      },
      { './chrome.util': 22 },
    ],
    25: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          })(),
          t = require('./chrome.storage.promise'),
          n = r(t)
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function i(e, t, n) {
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
          )
        }
        function s(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        var a = n.default.local,
          u = n.default.sync,
          o = (function() {
            function t(e, n, r) {
              var i = this
              s(this, t),
                (this.namespace = e),
                (this.fields = n || []),
                (this.state = {}),
                (this.storage = !0 === r ? u : a),
                (this.areaName = !0 === r ? 'sync' : 'local'),
                this.fields.forEach(function(e) {
                  e.choices &&
                    (e.choices = e.choices.map(function(e) {
                      return 'string' == typeof e ? { key: e, display: e } : e
                    }))
                })
              var o = {}
              this.fields.forEach(function(e) {
                return (o[i._key(e.name)] = e)
              }),
                (this.namespacedToField = o),
                (this._listeners = []),
                this.fields.length && this._startListening()
            }
            return (
              e(t, [
                {
                  key: 'getField',
                  value: function(e) {
                    return this.fields.find(function(t) {
                      return t.name === e
                    })
                  },
                },
                {
                  key: '_key',
                  value: function(e) {
                    return this.namespace + '.' + e
                  },
                },
                {
                  key: '_keys',
                  value: function(e) {
                    var t = this
                    if (void 0 === e)
                      throw new Error('Cannot pass `undefined` as `keys`!')
                    return (
                      'string' == typeof e && (e = [e]),
                      e.map(function(e) {
                        return t._key(e)
                      })
                    )
                  },
                },
                {
                  key: '_stripKey',
                  value: function(e) {
                    return e.substring(this.namespace.length + 1)
                  },
                },
                {
                  key: 'set',
                  value: function(e, t) {
                    return this.setObj(i({}, e, t))
                  },
                },
                {
                  key: 'setObj',
                  value: function(e) {
                    var t = this,
                      n = {}
                    return (
                      Object.keys(e).forEach(function(r) {
                        return (n[t._key(r)] = e[r])
                      }),
                      this.storage.set(n).then(function() {
                        t.state = Object.assign(t.state, e)
                      })
                    )
                  },
                },
                {
                  key: 'get',
                  value: function(e) {
                    var t = this
                    return (
                      (e = this._keys(e)),
                      this.storage.get(e).then(function(e) {
                        var n = {}
                        return (
                          Object.keys(e).forEach(function(r) {
                            return (n[t._stripKey(r)] = e[r])
                          }),
                          n
                        )
                      })
                    )
                  },
                },
                {
                  key: 'remove',
                  value: function(e) {
                    return (e = this._keys(e)), this.storage.remove(e)
                  },
                },
                {
                  key: 'clear',
                  value: function() {
                    var e = this.fields.map(function(e) {
                      return e.name
                    })
                    return this.remove(e)
                  },
                },
                {
                  key: 'load',
                  value: function() {
                    var e = this,
                      t = this.fields.map(function(e) {
                        return e.name
                      })
                    return this.get(t).then(function(t) {
                      return (
                        e.fields.forEach(function(e) {
                          if (void 0 === t[e.name])
                            void 0 !== e.default && (t[e.name] = e.default)
                          else if (e.process) {
                            var n = e.process(t[e.name]).val
                            t[e.name] = n
                          }
                        }),
                        (e.state = Object.assign({}, t)),
                        t
                      )
                    })
                  },
                },
                {
                  key: 'onUpdate',
                  value: function(e) {
                    this._listeners.push(e)
                  },
                },
                {
                  key: '_startListening',
                  value: function() {
                    var e = this
                    return (
                      !this._listening &&
                      ((this._listening = !0),
                      chrome.storage.onChanged.addListener(function(t, n) {
                        if (n === e.areaName) {
                          var r = []
                          Object.keys(t).forEach(function(n) {
                            var i = e.namespacedToField[n]
                            i &&
                              (r.push(i.name),
                              (e.state[i.name] = t[n].newValue))
                          }),
                            r.length &&
                              e._listeners.forEach(function(e) {
                                return e(r)
                              })
                        }
                      }),
                      !0)
                    )
                  },
                },
              ]),
              t
            )
          })()
        exports.default = o
      },
      { './chrome.storage.promise': 27 },
    ],
    24: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(o) {
                  return typeof o
                }
              : function(o) {
                  return o &&
                    'function' == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o
                },
          t = (exports.PromiseTrue = function() {
            return new Promise(function(o, t) {
              return o(!0)
            })
          }),
          e = (exports.isType = function(t, e) {
            return new Promise(function(n, r) {
              return n((void 0 === t ? 'undefined' : o(t)) === e)
            })
          }),
          n = (exports.isBoolean = function(o) {
            return e(o, 'boolean')
          }),
          r = (exports.isString = function(o) {
            return e(o, 'string')
          })
      },
      {},
    ],
    18: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.PDF_FORMATS = exports.PDF_FORMAT_FULL = exports.PDF_FORMAT_A4 = exports.PDF_FORMAT_LEGAL = exports.PDF_FORMAT_LETTER = void 0)
        var e = require('../store'),
          t = n(e),
          r = require('../validate'),
          o = i(r),
          a = require('../chrome.permissions'),
          s = i(a),
          l = require('../image-formats')
        function i(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var u = l.imageFormatsArray.map(function(e) {
            return e.key
          }),
          p = 'Capture',
          d = 'Download',
          c = [p, d],
          h = (exports.PDF_FORMAT_LETTER = 'letter'),
          f = (exports.PDF_FORMAT_LEGAL = 'legal'),
          m = (exports.PDF_FORMAT_A4 = 'a4'),
          y = (exports.PDF_FORMAT_FULL = 'full'),
          g = (exports.PDF_FORMATS = [
            { key: h, display: 'US letter' },
            { key: f, display: 'US legal' },
            { key: m, display: 'A4' },
            { key: y, display: 'full image' },
          ]),
          _ = new t.default('options', [
            {
              name: 'fmt',
              type: 'choice',
              group: p,
              choices: u,
              default: 'png',
              label: 'Image format:',
              help:
                'PNG is lossless and should match exactly what is seen on the screen, but will usually have larger file sizes than JPG, which uses compression.',
            },
            {
              name: 'fixed_elts',
              type: 'bool',
              group: p,
              default: !0,
              label: 'Adjust repeating elements (beta)',
              hidden: !0,
              help:
                'Sometimes elements, like a “back to top” button or a sticky footer will repeat on the page. This tries to position them absolutely to stop them from repeating in a screeshot.',
            },
            {
              name: 'adv_scroll',
              type: 'bool',
              group: p,
              default: !0,
              label: 'Advanced scrolling (beta)',
              hidden: !0,
              help:
                'Look for an element within the page with its own scroll bars and scroll that item during the capture.',
            },
            {
              name: 'dir',
              type: 'text',
              group: d,
              default: '',
              label: 'Directory:',
              help:
                'Specify a directory underneath your downloads directory to save your screenshots, such as “screencaptures”. Defaults to the downloads directory if blank. (Please limit it to letters, numbers, dashes, underscores, and slashes—invalid characters will automatically be removed).',
              process: function(e) {
                var t = ''
                e = e.trim()
                var r = /^[A-Za-z]:[\/\\]/
                return (
                  (r.test(e) || e.startsWith('../') || e.startsWith('/')) &&
                    (t =
                      'Chrome prevents extensions from saving files outside of the default downloads directory. The path you entered has been updated accordingly. Sorry! 😟'),
                  {
                    val: (e = e
                      .replace(r, '')
                      .replace(/\\/g, '/')
                      .replace(/[^a-z0-9\-_\/ ]*/gi, '')
                      .replace(/\s+/g, ' ')
                      .replace(/\/\/+/g, '/')
                      .replace(/^\//, '')
                      .replace(/\/$/, '')
                      .trim()),
                    msg: t,
                  }
                )
              },
              validate: function(e) {
                return o.isString(e).then(function(t) {
                  return t && (!e || s.requestIfNeededDownloads())
                })
              },
            },
            {
              name: 'pdf_format',
              type: 'choice',
              group: d,
              choices: g,
              default: h,
              label: 'PDF size:',
              help:
                'Specify the format size of PDFs for when exporting to PDF.',
            },
            {
              name: 'auto_dl2',
              type: 'bool',
              group: d,
              default: !1,
              label: 'Auto-download files (beta)',
              help:
                'Automatically download your screenshot instead of opening it in a new window.This means the extension capture tab will not open. You can return back here by right-clicking on the extension and selecting "Options".',
              validate: function(e) {
                return o.isBoolean(e).then(function(t) {
                  return t && (!0 !== e || s.requestIfNeededDownloads())
                })
              },
            },
            {
              name: 'frame_persist',
              type: 'bool',
              group: p,
              default: !0,
              label: 'Persist iframe permissions',
              help:
                'Save this permission (if accepted) for future captures. It can still be revoked later from the options page.',
              validate: function(e) {
                return o.isBoolean(e)
              },
              hidden: !0,
            },
          ])
        exports.default = _
      },
      {
        '../store': 25,
        '../validate': 24,
        '../chrome.permissions': 12,
        '../image-formats': 10,
      },
    ],
    15: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (function() {
            return function(e, r) {
              if (Array.isArray(e)) return e
              if (Symbol.iterator in Object(e))
                return (function(e, r) {
                  var t = [],
                    n = !0,
                    o = !1,
                    i = void 0
                  try {
                    for (
                      var u, s = e[Symbol.iterator]();
                      !(n = (u = s.next()).done) &&
                      (t.push(u.value), !r || t.length !== r);
                      n = !0
                    );
                  } catch (e) {
                    ;(o = !0), (i = e)
                  } finally {
                    try {
                      !n && s.return && s.return()
                    } finally {
                      if (o) throw i
                    }
                  }
                  return t
                })(e, r)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          r = require('moment'),
          t = p(r),
          n = require('remove-accents'),
          o = f(n),
          i = require('./chrome.permissions'),
          u = f(i),
          s = require('./chrome.downloads'),
          a = f(s),
          c = require('./stores/options'),
          l = p(c)
        function f(e) {
          if (e && e.__esModule) return e
          var r = {}
          if (null != e)
            for (var t in e)
              Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
          return (r.default = e), r
        }
        function p(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function d(e) {
          for (var r = [], t = Object.keys(e), n = 0; n < t.length; ++n)
            r.push([t[n], e[t[n]]])
          return r
        }
        var v = {},
          y = 'https://screencapture.mrcoles.com/',
          h = 1600
        function m(e) {
          var r = !1
          try {
            ;(e = btoa(e)), (r = !0)
          } catch (e) {}
          if (r)
            for (; '=' === e.charAt(e.length - 1); )
              e = e.substring(0, e.length - 1)
          return e
        }
        function g(r, t, n) {
          var o = [{ key: 'v', val: m(C()) }]
          if ((r && o.push({ key: 'u', val: m(r) }), n)) {
            try {
              n = d(n)
                .map(function(r) {
                  var t = e(r, 2)
                  return t[0] + '=' + t[1]
                })
                .join(';')
            } catch (e) {
              console.error('Error parsing opts!', e)
            }
            o.push({ key: 'o', val: m(n) })
          }
          t && o.push({ key: 'e', val: m(t) })
          var i = j(o),
            u = h - y.length - 1
          return (
            i.length >= u && (i = i.substring(0, u)), y + (i ? '?' + i : '')
          )
        }
        function b(e) {
          var r = void 0
          return 'string' == typeof e
            ? e
            : (e &&
                (r = [
                  e.name,
                  e.via ? '(' + e.via + ')' : '',
                  e.message,
                  e.stack,
                ]
                  .filter(function(e) {
                    return e
                  })
                  .join(' ')),
              r)
        }
        function w(e, r) {
          try {
            e = decodeURIComponent(e)
          } catch (e) {}
          var n = o
            .remove(e)
            .split('?')[0]
            .split('#')[0]
          return (
            'screencapture' +
            (n = n
              ? '-' +
                (n = n
                  .replace(/^https?:\/\/(www\.)?/, '')
                  .replace(/^([^\/]+)\.com/, '$1')
                  .replace(/[^A-z0-9]+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/^[_\-]+/, '')
                  .replace(/[_\-]+$/, ''))
              : '') +
            '-' +
            (0, t.default)().format('YYYY-MM-DD-HH_mm_ss') +
            r
          )
        }
        function _(e) {
          return Array.prototype.slice.call(e, 0)
        }
        function k() {
          var e = {}
          return (
            window.location.search
              .substring(1)
              .split('&')
              .forEach(function(r) {
                var t = r.split('=').map(decodeURIComponent)
                e[t.shift()] = t.join('=')
              }),
            e
          )
        }
        function j(e) {
          return e
            .map(function(e) {
              return (function(e) {
                return (
                  encodeURIComponent(e.key) +
                  (e.val ? '=' + encodeURIComponent(e.val) : '')
                )
              })(e)
            })
            .join('&')
        }
        function C() {
          return chrome.runtime.getManifest().version || '0.0.0'
        }
        function A(e) {
          return document.getElementById(e)
        }
        function E(e, r) {
          var t = A(e)
          ;(t.style.display = r && 'string' == typeof r ? r : 'block'),
            (t.style.visibility = 'visible')
        }
        function I(e) {
          A(e).style.display = 'none'
        }
        function M(e) {
          A(e).style.visibility = 'hidden'
        }
        function q(e, r) {
          return _((r || document).getElementsByClassName(e))
        }
        function O(e, r, t) {
          return e.addEventListener(r, t, !1), e
        }
        function P(e) {
          for (var r = 0, t = 0, n = e; n; )
            (r += n.offsetLeft), (t += n.offsetTop), (n = n.offsetParent)
          return { left: r, top: t }
        }
        function S(e) {
          return u.containsDownloads().then(function(r) {
            return r
              ? l.default.load().then(function(t) {
                  return a.downloadAll(e, t.dir).then(function(e) {
                    var t = e.reduce(function(e, r) {
                        return e + (!1 === r.success ? 1 : 0)
                      }, 0),
                      n = e.length - t
                    return {
                      hasPerms: r,
                      results: e,
                      failCount: t,
                      successCount: n,
                    }
                  })
                })
              : {
                  hasPerms: r,
                  results: e.map(function(e) {
                    return { url: e, success: !1 }
                  }),
                }
          })
        }
        ;(v.b64 = m),
          (v.reportLink = g),
          (v.errorToString = b),
          (v.asFilename = w),
          (v.asArray = _),
          (v.getQueryString = k),
          (v.parseQueryString = j),
          (v.getVersion = C),
          (v.$ = A),
          (A.show = E),
          (A.hide = I),
          (A.hidden = M),
          (A.findClass = q),
          (A.on = O),
          (A.offsets = P),
          (v.download = S),
          (exports.default = v)
      },
      {
        moment: 32,
        'remove-accents': 34,
        './chrome.permissions': 12,
        './chrome.downloads': 23,
        './stores/options': 18,
      },
    ],
    4: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.Capture = exports.db = void 0)
        var e = (function() {
            return function(e, t) {
              if (Array.isArray(e)) return e
              if (Symbol.iterator in Object(e))
                return (function(e, t) {
                  var r = [],
                    n = !0,
                    u = !1,
                    o = void 0
                  try {
                    for (
                      var i, a = e[Symbol.iterator]();
                      !(n = (i = a.next()).done) &&
                      (r.push(i.value), !t || r.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    ;(u = !0), (o = e)
                  } finally {
                    try {
                      !n && a.return && a.return()
                    } finally {
                      if (u) throw o
                    }
                  }
                  return r
                })(e, t)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                },
          r = (function() {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r]
                ;(n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
              }
            }
            return function(t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t
            }
          })(),
          n = require('dexie'),
          u = y(n),
          o = require('moment'),
          i = y(o),
          a = require('./filesystem'),
          f = y(a),
          s = require('./image-formats'),
          l = require('./util'),
          c = y(l)
        function y(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function m(e) {
          for (var t = [], r = Object.keys(e), n = 0; n < r.length; ++n)
            t.push([r[n], e[r[n]]])
          return t
        }
        function p(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        var d = (exports.db = new u.default('Test4'))
        d.version(1).stores({ captures: '++id, domain, time' })
        var h = (exports.Capture = (function() {
          function n() {
            p(this, n)
          }
          return (
            r(
              n,
              [
                {
                  key: 'save',
                  value: function() {
                    var e = this
                    return d.captures.put(this).then(function(t) {
                      return (e.id = t), e
                    })
                  },
                },
                {
                  key: 'remove',
                  value: function() {
                    var e = this
                    return f.default
                      .requestFs()
                      .then(function(t) {
                        return f.default.getFiles(t, e.fileEntryPaths, !0)
                      })
                      .then(function(e) {
                        return f.default.rmFiles(e, function(e) {
                          return console.log(e)
                        })
                      })
                      .then(function(t) {
                        t.succeeded
                        var r = t.failed
                        if (r.length) {
                          var n = r.map(function(e) {
                              return e.toURL()
                            }),
                            u = [],
                            o = []
                          e.fullPaths.forEach(function(t, r) {
                            ;-1 !== n.indexOf(t) &&
                              (u.push(e.images[r]), o.push(e.sizes[r]))
                          }),
                            e.save()
                          var i = new Error('Unable to delete: ' + n.join(', '))
                          throw ((i.name = 'CaptureRemove'), i)
                        }
                        return d.captures.delete(e.id)
                      })
                  },
                },
                {
                  key: 'pdfFilename',
                  get: function() {
                    return this.images.length
                      ? this.images[0].replace(/\.[^\.]+$/, '.pdf')
                      : 'screenshot.pdf'
                  },
                },
                {
                  key: 'fullPaths',
                  get: function() {
                    return this.images.map(function(e) {
                      return f.default.absPath('/' + e)
                    })
                  },
                },
                {
                  key: 'fileEntryPaths',
                  get: function() {
                    return this.images.map(function(e) {
                      return '/' + e
                    })
                  },
                },
                {
                  key: 'imageFormat',
                  get: function() {
                    return (0, s.getImageFormat)(this.format)
                  },
                },
                {
                  key: 'moment',
                  get: function() {
                    return (0, i.default)(this.time)
                  },
                },
                {
                  key: 'displayURL',
                  get: function() {
                    return (
                      chrome.extension.getURL('/capture.html') +
                      '?' +
                      c.default.parseQueryString([
                        { key: 'id', val: this.id },
                        { key: 'url', val: this.url },
                      ])
                    )
                  },
                },
              ],
              [
                {
                  key: 'from',
                  value: function(r, u, o, a) {
                    var f = (0, s.getImageFormat)(u)
                    u !== f.key &&
                      (console.warn(
                        'Wrong case for image format key ' + u + ' vs ' + f.key
                      ),
                      (u = f.key)),
                      g(
                        Array.isArray(o),
                        'Files object is not an array! ' +
                          (void 0 === o ? 'undefined' : t(o))
                      )
                    var l = {
                        url: r,
                        domain: b(r),
                        format: u,
                        images: o.map(function(e) {
                          return e.filename
                        }),
                        sizes: o.map(function(e) {
                          return e.size
                        }),
                        time: a || (0, i.default)().toDate(),
                      },
                      c = new n()
                    return (
                      m(l).forEach(function(t) {
                        var r = e(t, 2),
                          n = r[0],
                          u = r[1]
                        c[n] = u
                      }),
                      c
                    )
                  },
                },
                {
                  key: 'lookup',
                  value: function(e) {
                    return d.captures.get(v(e))
                  },
                },
                {
                  key: 'lookupIds',
                  value: function(e) {
                    return (
                      (e = e.map(function(e) {
                        return v(e)
                      })),
                      d.captures
                        .where('id')
                        .anyOf(e)
                        .toArray()
                    )
                  },
                },
                {
                  key: 'findSrc',
                  value: function(e) {
                    return d.captures
                      .toCollection()
                      .filter(function(t) {
                        return ~t.images.indexOf(e)
                      })
                      .toArray()
                      .then(function(e) {
                        return e[0]
                      })
                  },
                },
                {
                  key: 'all',
                  value: function() {
                    return d.captures.orderBy('time').toArray()
                  },
                },
              ]
            ),
            n
          )
        })())
        d.captures.mapToClass(h)
        var v = function(e) {
            return 'string' == typeof e && /^\d+$/.test(e) ? parseInt(e, 10) : e
          },
          g = function(e, t, r) {
            if (!e) {
              void 0 === r && ((r = t), (t = void 0))
              var n = new Error(r)
              throw (t && (n.name = t), n)
            }
          },
          b = function(e) {
            var t = /^https?:\/\//
            return t.test(e) && (e = e.replace(t, '')), e.split(':')[0]
          }
      },
      {
        dexie: 33,
        moment: 32,
        './filesystem': 9,
        './image-formats': 10,
        './util': 15,
      },
    ],
    28: [
      function(require, module, exports) {
        'use strict'
        function t(t, n) {
          return window.HTMLCanvasElement && HTMLCanvasElement.prototype.toBlob
            ? new Promise(function(e) {
                return t.toBlob(function(t) {
                  return e(t)
                }, n)
              })
            : new Promise(function(o) {
                o(e(t.toDataURL(n)))
              })
        }
        function e(t) {
          return n(
            atob(t.split(',')[1]),
            t
              .split(',')[0]
              .split(':')[1]
              .split(';')[0]
          )
        }
        function n(t, e) {
          for (
            var n = new ArrayBuffer(t.length),
              o = new Uint8Array(n),
              r = t.length;
            r--;

          )
            o[r] = t.charCodeAt(r)
          return new Blob([n], { type: e })
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.canvasToBlob = t),
          (exports.dataURIToBlob = e),
          (exports.dataToBlob = n)
      },
      {},
    ],
    7: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var n = {},
          r = {},
          e = (exports.trigger = function(e, o) {
            ;[n, r].forEach(function(n) {
              return u(n, e, []).forEach(function(n) {
                return n(o)
              })
            }),
              (r[e] = [])
          }),
          o = (exports.on = function(r, e) {
            u(n, r, []).push(e)
          }),
          t = (exports.oncePromise = function(n) {
            return new Promise(function(e, o) {
              u(r, n, []).push(e)
            })
          }),
          u = function(n, r, e) {
            return void 0 === n[r] && (n[r] = e), n[r]
          }
      },
      {},
    ],
    29: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var r = {
          capture: 'capture',
          captureError: 'captureError',
          captureFrame: 'captureFrame',
        }
        exports.default = r
        var e = []
        for (var a in r) e.push(r[a])
        var t = (exports.isValidMessage = function(r) {
          return e.indexOf(r) > -1
        })
      },
      {},
    ],
    30: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var t = (function() {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var a = e[i]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(t, a.key, a)
              }
            }
            return function(e, i, a) {
              return i && t(e.prototype, i), a && t(e, a), e
            }
          })(),
          e = require('./blob')
        function i(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var a = 3e4,
          n = 8e3,
          r = a * n,
          o = (function() {
            function o(t) {
              i(this, o),
                (this.canvasObjs = []),
                (this.bgRegions = []),
                (this.exportFormat = t),
                (this.scaleMultiplier = 1),
                (this.totalWidth = 0),
                (this.totalHeight = 0)
            }
            return (
              t(o, [
                {
                  key: 'size',
                  value: function() {
                    return this.canvasObjs.length
                  },
                },
                {
                  key: 'isEmpty',
                  value: function() {
                    return 0 === this.canvasObjs.length
                  },
                },
                {
                  key: 'setScaleMultiplier',
                  value: function(t) {
                    this.scaleMultiplier = t
                  },
                },
                {
                  key: 'setObjs',
                  value: function(t, e, i) {
                    ;(this.totalWidth = t), (this.totalHeight = e)
                    var o = e > a || t > a || e * t > r,
                      h = t > e,
                      s = o ? (h ? a : n) : t,
                      c = o ? (h ? n : a) : e,
                      l = Math.ceil(t / s),
                      u = Math.ceil(e / c),
                      f = void 0,
                      v = void 0,
                      g = void 0,
                      y = void 0,
                      d = void 0,
                      b = 0,
                      x = []
                    for (f = 0; f < u; f++)
                      for (v = 0; v < l; v++) {
                        ;((g = document.createElement('canvas')).width =
                          (v == l - 1 && t % s) || s),
                          (g.height = (f == u - 1 && e % c) || c)
                        var p = g.getContext('2d')
                        i &&
                          ((p.fillStyle = i),
                          p.fillRect(0, 0, g.width, g.height)),
                          (y = v * s),
                          (d = f * c),
                          x.push({
                            canvas: g,
                            ctx: p,
                            index: b,
                            left: y,
                            right: y + g.width,
                            top: d,
                            bottom: d + g.height,
                            width: g.width,
                            height: g.height,
                          }),
                          b++
                      }
                    this.canvasObjs = x
                  },
                },
                {
                  key: 'toDataURLs',
                  value: function() {
                    var t = this
                    return this.canvasObjs.map(function(e) {
                      return e.canvas.toDataURL(t.exportFormat)
                    })
                  },
                },
                {
                  key: 'toBlobs',
                  value: function() {
                    var t = this
                    return Promise.all(
                      this.canvasObjs.map(function(i) {
                        return (0, e.canvasToBlob)(i.canvas, t.exportFormat)
                      })
                    )
                  },
                },
                {
                  key: 'fillRect',
                  value: function(t, e, i, a, n) {
                    var r = this
                    this._filter(e, i, a, n).forEach(function(o) {
                      var h = r._shift(o, e, i)
                      ;(o.ctx.fillStyle = t), o.ctx.fillRect(h.x, h.y, a, n)
                    })
                  },
                },
                {
                  key: 'strokeRect',
                  value: function(t, e, i, a, n) {
                    var r = this
                    this._filter(e, i, a, n).forEach(function(o) {
                      var h = r._shift(o, e, i)
                      ;(o.ctx.strokeStyle = t), o.ctx.strokeRect(h.x, h.y, a, n)
                    })
                  },
                },
                {
                  key: 'drawImage',
                  value: function(t, e, i, a, n) {
                    var r = this
                    this._filter(e, i, a, n).forEach(function(a) {
                      var n = r._shift(a, e, i)
                      a.ctx.drawImage(t, n.x, n.y)
                    })
                  },
                },
                {
                  key: '_filter',
                  value: function(t, e, i, a) {
                    var n = t + i,
                      r = e + a
                    return this.canvasObjs.filter(function(i) {
                      return (
                        t < i.right && n > i.left && e < i.bottom && r > i.top
                      )
                    })
                  },
                },
                {
                  key: '_shift',
                  value: function(t, e, i) {
                    return { x: e - t.left, y: i - t.top }
                  },
                },
                {
                  key: '_constrain',
                  value: function(t, e, i, a, n) {
                    var r = this._shift(t, e, i),
                      o = r.x,
                      h = o + a,
                      s = r.y,
                      c = s + n,
                      l = Math.max(0, o),
                      u = Math.max(0, s)
                    return {
                      x: l,
                      y: u,
                      width: Math.min(t.height, h - l),
                      height: Math.min(t.height, c - u),
                    }
                  },
                },
                {
                  key: 'scale',
                  value: function(t) {
                    return t * this.scaleMultiplier
                  },
                },
                {
                  key: 'scaleAll',
                  value: function(t, e) {
                    var i = this
                    e.forEach(function(e) {
                      if ('*' === e)
                        Object.keys(t).forEach(function(e) {
                          return (t[e] = i.scale(t[e]))
                        })
                      else {
                        var a = e.indexOf('.')
                        ;-1 === a
                          ? (t[e] = i.scale(t[e]))
                          : i.scaleAll(t[e.substring(0, a)], [
                              e.substring(a + 1),
                            ])
                      }
                    })
                  },
                },
                {
                  key: 'setBgRegions',
                  value: function(t) {
                    this.bgRegions = t
                  },
                },
                {
                  key: 'applyBgRegions',
                  value: function() {
                    var t = this
                    this.bgRegions.forEach(function(e, i) {
                      var a = e.sample,
                        n = e.fill,
                        r = new Map()
                      t._filter(a.x, a.y, a.width, a.height).forEach(function(
                        e
                      ) {
                        var i = t._constrain(e, a.x, a.y, a.width, a.height)
                        if (i.width > 0 && i.height > 0) {
                          var n = document.createElement('canvas')
                          ;(n.width = i.width), (n.height = i.height)
                          var o = n.getContext('2d')
                          o.drawImage(e.canvas, -i.x, -i.y)
                          var h = void 0
                          try {
                            h = o.getImageData(0, 0, i.width, i.height)
                          } catch (t) {
                            console.error(t)
                          }
                          h && t._getHisto(h.data, r)
                        }
                      })
                      var o = 0,
                        h = 0
                      if (
                        (r.forEach(function(t, e) {
                          t > o && ((o = t), (h = e))
                        }),
                        0 !== h)
                      ) {
                        var s = 'rgb(' + t._toRgb(h).join(', ') + ')'
                        t.fillRect(s, n.x, n.y, n.width, n.height)
                      }
                    })
                  },
                },
                {
                  key: '_getHisto',
                  value: function(t, e) {
                    e = e || new Map()
                    for (var i = 0, a = t.length; i < a; i += 4)
                      if (255 === t[i + 3]) {
                        var n = this._toInt(t[i], t[i + 1], t[i + 2])
                        e.set(n, (e.get(n) || 0) + 1)
                      }
                    return e
                  },
                },
                {
                  key: '_toInt',
                  value: function(t, e, i) {
                    return (t << 16) + (e << 8) + i
                  },
                },
                {
                  key: '_toRgb',
                  value: function(t) {
                    var e = 255 & t,
                      i = 255 & (t >>= 8)
                    return [255 & (t >>= 8), i, e]
                  },
                },
              ]),
              o
            )
          })()
        exports.default = o
      },
      { './blob': 28 },
    ],
    14: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.openInTabs = exports.windowsCreate = exports.create = exports.getCurrentTab = exports.query = exports.sendMessage = exports.executeScript = exports.captureVisibleTab = exports.ERROR_TYPE = void 0)
        var e = require('./chrome.util'),
          r = (exports.ERROR_TYPE = 'ChromeTabsError'),
          t = (0, e.genLastErrorFmt)(r),
          n = (exports.captureVisibleTab = function(e, r) {
            return new Promise(function(n, o) {
              chrome.tabs.captureVisibleTab(e, r, function(e) {
                var r = chrome.runtime.lastError
                return r ? o(t(r, 'captureVisibleTab')) : n(e)
              })
            })
          }),
          o = (exports.executeScript = function(e, r) {
            return new Promise(function(n, o) {
              chrome.tabs.executeScript(e, r, function(e) {
                var r = chrome.runtime.lastError
                return r ? o(t(r, 'executeScript')) : n(e)
              })
            })
          }),
          i = (exports.sendMessage = function(e, r, n) {
            return new Promise(function(o, i) {
              chrome.tabs.sendMessage(e, r, n, function(e) {
                var r = chrome.runtime.lastError
                return r ? i(t(r, 'sendMessage')) : o(e)
              })
            })
          }),
          u = (exports.query = function(e) {
            return new Promise(function(r, n) {
              chrome.tabs.query(e, function(e) {
                var o = chrome.runtime.lastError
                return o ? n(t(o, 'query')) : r(e)
              })
            })
          }),
          s = (exports.getCurrentTab = function() {
            return u({ active: !0, currentWindow: !0 }).then(function(e) {
              return e[0]
            })
          }),
          c = (exports.create = function(e) {
            return new Promise(function(r, n) {
              chrome.tabs.create(e, function(e) {
                var o = chrome.runtime.lastError
                return o ? n(t(o, 'create')) : r(e)
              })
            })
          }),
          a = (exports.windowsCreate = function(e) {
            return new Promise(function(r, n) {
              chrome.windows.create(e, function(e) {
                var o = chrome.runtime.lastError
                return o ? n(t(o, 'windowsCreate')) : r(e)
              })
            })
          }),
          p = (exports.openInTabs = function(e, r) {
            var t = void 0,
              n = r.length
            return Promise.resolve().then(function() {
              return (function o(i) {
                if (i >= r.length) return r
                var u = r[i],
                  s = i === n - 1
                return e.incognito && 0 === i
                  ? a({ url: u, incognito: !1, focused: s }).then(function(e) {
                      return (t = e.id), o(i + 1)
                    })
                  : c({
                      url: u,
                      active: s,
                      windowId: t,
                      openerTabId: e.id,
                      index: (e.incognito ? 0 : e.index) + 1 + i,
                    }).then(function(e) {
                      return o(i + 1)
                    })
              })(0)
            })
          })
      },
      { './chrome.util': 22 },
    ],
    31: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getAllFrames = void 0)
        var r = require('./chrome.util'),
          e = 'ChromeWebNavigationError',
          t = (0, r.genLastErrorFmt)(e),
          o = (exports.getAllFrames = function(r) {
            return new Promise(function(e, t) {
              chrome.webNavigation.getAllFrames(r, function(r) {
                var o = chrome.runtime.lastError
                return o ? t(o) : e(r)
              })
            })
          })
      },
      { './chrome.util': 22 },
    ],
    5: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.captureToMultiCanvas = exports.captureToBlobs = exports.captureToFiles = exports.filesToRecord = exports.FRAME_PERMS = exports.ERROR_TYPES = void 0)
        var e = (function() {
            return function(e, t) {
              if (Array.isArray(e)) return e
              if (Symbol.iterator in Object(e))
                return (function(e, t) {
                  var r = [],
                    n = !0,
                    i = !1,
                    a = void 0
                  try {
                    for (
                      var o, u = e[Symbol.iterator]();
                      !(n = (o = u.next()).done) &&
                      (r.push(o.value), !t || r.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    ;(i = !0), (a = e)
                  } finally {
                    try {
                      !n && u.return && u.return()
                    } finally {
                      if (i) throw a
                    }
                  }
                  return r
                })(e, t)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          t = require('./blob'),
          r = require('./db'),
          n = R(r),
          i = require('./events'),
          a = I(i),
          o = require('./filesystem'),
          u = R(o),
          c = require('./promise'),
          l = require('./messages'),
          s = R(l),
          f = require('./multicanvas'),
          h = R(f),
          d = require('./util'),
          p = R(d),
          m = require('./chrome.extension'),
          v = I(m),
          g = require('./chrome.permissions'),
          w = I(g),
          b = require('./chrome.tabs'),
          E = I(b),
          x = require('./chrome.webnavigation'),
          y = I(x)
        function I(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
        function R(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var _ = (exports.ERROR_TYPES = {
            UNKNOWN_MESSAGE: 'UnknownMessage',
            TIMED_OUT: 'TimedOut',
            CHROME_TABS: E.ERROR_TYPE,
            MISSING_BLOB: 'MissingBlob',
            CONTENT_SCRIPT: 'ContentScript',
          }),
          M = (exports.FRAME_PERMS = {
            permissions: ['tabs', 'webNavigation'],
            origins: ['<all_urls>'],
          }),
          S = (exports.filesToRecord = function(e, t, n) {
            return r.Capture.from(e, t, n).save()
          }),
          T = (exports.captureToFiles = function(e, t, r, n, i) {
            return P(e, r, n, i).then(function(e) {
              return Promise.all(
                e.map(function(e, r) {
                  return j(e, t, r)
                })
              )
            })
          }),
          P = (exports.captureToBlobs = function(e, t, r, n) {
            return N(e, t, r, n).then(function(t) {
              if (n.add_url) {
                e.url
                t.canvasObjs.forEach(function(r) {
                  var n = r.ctx,
                    i = r.width,
                    a = (r.height, t.scaleMultiplier)
                  n.scale(a, a),
                    (n.fillStyle = '#00000055'),
                    n.fillRect(0, 0, i / a, 40),
                    (n.fillStyle = '#fff'),
                    (n.font = '20px Arial'),
                    (n.textBaseline = 'middle'),
                    n.fillText(e.url, 20, 20)
                })
              }
              return t.toBlobs()
            })
          }),
          N = (exports.captureToMultiCanvas = function(t, r, n, i) {
            return new Promise(function(a, o) {
              r = r || function() {}
              var u = void 0
              if (
                ('chrome://newtab/' === t.url || 'chrome://apps/' === t.url
                  ? (u = E.captureVisibleTab(null, i.fmt_details.capture))
                  : t.url.startsWith('data:image/') &&
                    (u = Promise.resolve(t.url)),
                u)
              )
                return (
                  r(0),
                  u
                    .then(function(e) {
                      return r(0.5), (0, c.loadImage)(e)
                    })
                    .then(function(e) {
                      var t = e.img,
                        n = e.width,
                        a = e.height
                      r(1)
                      var o = new h.default(i.fmt_details.canvas)
                      return o.setObjs(n, a), o.drawImage(t, 0, 0, n, a), o
                    })
                    .then(function(e) {
                      return a(e)
                    })
                    .catch(o)
                )
              var l = []
              l.push(new h.default(i.fmt_details.canvas))
              var f = [],
                d = void 0,
                p = void 0
              return (
                chrome.runtime.onMessage.addListener(function(a, u, c) {
                  try {
                    if (
                      (void 0 === d &&
                        void 0 !== a.windowWidth &&
                        (d = a.windowWidth),
                      void 0 !== a.complete &&
                        void 0 !== a.canvasId &&
                        l.length > 1)
                    ) {
                      var m = l.length,
                        v = (m - a.canvasId - 1) / m + a.complete / m
                      a.complete = v
                    }
                    switch (a.msg) {
                      case s.default.capture:
                        r(a.complete)
                        var g = a.canvasId
                        if (!L(g)) {
                          var w = new Error(
                            'Bad canvasId in capture request: ' + g
                          )
                          return (w.name = 'CaptureRequestError'), o(w)
                        }
                        var b = f[g]
                        return (
                          b && ((a.clip.x += b.left), (a.clip.y += b.top)),
                          B(a, d, l[g], n, a.isFrame ? p : void 0)
                            .then(function(e) {
                              c(e || !0)
                            })
                            .catch(o),
                          !0
                        )
                      case s.default.captureError:
                        return (
                          o({
                            name: _.CONTENT_SCRIPT,
                            message: a.name + ': ' + a.message,
                            stack: a.stack,
                          }),
                          !1
                        )
                      case s.default.captureFrame:
                        var E = l.length
                        l.push(new h.default(i.fmt_details.canvas))
                        var x = [
                          'top',
                          'left',
                          'width',
                          'height',
                          'windowWidth',
                        ].filter(function(e) {
                          return !L(a[e])
                        })
                        if (x.length) {
                          var y = new Error(
                            'Bad props on ' +
                              s.default.captureFrame +
                              ' request: ' +
                              x.join(', ')
                          )
                          return (y.name = 'CaptureFrameRequestError'), o(y)
                        }
                        return (
                          (f[E] = a),
                          q(
                            a.url,
                            a.width,
                            a.height,
                            t,
                            r,
                            i,
                            E,
                            l[E],
                            a.tagName
                          )
                            .then(function(t) {
                              if (!t || 0 === t.canvases.length)
                                return c({ skip: !0 })
                              var r = (p = t).scaleMultiplier,
                                n = p.pageWidth,
                                i = p.pageHeight,
                                a = f[E],
                                o = [
                                  ['left', 'left'],
                                  ['right', 'left'],
                                  ['top', 'top'],
                                  ['bottom', 'top'],
                                ]
                              p.canvases.forEach(function(t) {
                                o.forEach(function(n) {
                                  var i = e(n, 2),
                                    o = i[0],
                                    u = i[1]
                                  if (((t[o] += a[u] * r), isNaN(t[o]))) {
                                    var c = new Error('attr isNaN: ' + o)
                                    throw ((c.name = 'CanvasObjAttrError'), c)
                                  }
                                })
                              }),
                                c({ width: n, height: i })
                            })
                            .catch(o),
                          !0
                        )
                      default:
                        var I =
                          'Unknown message received from content script: ' +
                          a.msg
                        return (
                          console.error(I),
                          o({ name: _.UNKNOWN_MESSAGE, message: I }),
                          !1
                        )
                    }
                  } catch (e) {
                    console.error(e), o(e)
                  }
                }),
                O(t, null, r, i, 0, l[0])
                  .then(function() {
                    return a(l[0])
                  })
                  .catch(o)
              )
            })
          }),
          O = function(e, t, r, n, i, a) {
            return A(e.url)
              .then(function(r) {
                return (0,
                c.timeoutWrap)(U(e, t, 'js/page/index.js'), 6e3, 'api._executeScript')
              })
              .then(function() {
                r(0)
                var a = { msg: 'scrollPage', canvasId: i, opts: n }
                return (t = t || 0), E.sendMessage(e.id, a, { frameId: t })
              })
              .then(function() {
                return a.applyBgRegions()
              })
              .then(function() {
                var e = a.canvasObjs,
                  t = a.scaleMultiplier || 1
                return {
                  canvases: e,
                  pageWidth: a.totalWidth / t,
                  pageHeight: a.totalHeight / t,
                  scaleMultiplier: t,
                }
              })
          }
        function A(e) {
          var t = v.isFileUrl(e)
          return Promise.resolve()
            .then(function() {
              return !t || v.isAllowedFileSchemeAccess(e)
            })
            .then(function(e) {
              return (
                !!e ||
                (a.trigger('needFilePermsClick'), new Promise(function() {}))
              )
            })
        }
        function B(e, t, r, n, i) {
          return i
            ? Promise.resolve().then(function() {
                return (
                  i.canvases.forEach(function(e) {
                    var t = e.canvas,
                      n = e.left,
                      i = e.top,
                      a = e.width,
                      o = e.height
                    r.drawImage(t, n, i, a, o)
                  }),
                  e
                )
              })
            : E.captureVisibleTab(null, { format: 'png', quality: 100 })
                .then(function(e) {
                  if (!e) {
                    var t = new Error('No dataURI generated for visible tab')
                    throw ((t.name = 'APICaptureStepError'), t)
                  }
                  return (0, c.loadImage)(e)
                })
                .then(function(i) {
                  var a = i.img,
                    o = i.width,
                    u = i.height
                  e.image = { width: o, height: u }
                  var c = t === o ? 1 : o / t
                  r.setScaleMultiplier(c),
                    1 !== c &&
                      r.scaleAll(e, [
                        'x',
                        'y',
                        'totalWidth',
                        'totalHeight',
                        'capture.*',
                        'clip.*',
                      ]),
                    r.isEmpty() &&
                      (r.setObjs(e.totalWidth, e.totalHeight, e.canvasBg),
                      r.size() > 1 &&
                        (n && n(),
                        (p.default.$('screenshot-count').innerText = r.size())),
                      e.bgRegions &&
                        (e.bgRegions.forEach(function(e) {
                          return r.scaleAll(e, ['sample.*', 'fill.*'])
                        }),
                        r.setBgRegions(e.bgRegions)))
                  var l = document.createElement('canvas'),
                    s = l.getContext('2d')
                  if (
                    ((l.width = e.clip.width),
                    (l.height = e.clip.height),
                    0 === l.width || 0 === l.height)
                  )
                    console.warn('Zero area region!', JSON.stringify(e.clip))
                  else {
                    s.drawImage(a, -e.clip.x, -e.clip.y)
                    var f = e.x + e.capture.x,
                      h = e.y + e.capture.y
                    r.drawImage(l, f, h, l.width, l.height)
                  }
                  return e
                })
        }
        function q(e, t, r, n, i, o, u, c, l) {
          var s = n.id
          return Promise.resolve()
            .then(function() {
              return w.contains(M)
            })
            .then(function(e) {
              return (
                !!e ||
                (a.trigger('needFramePermsClick', { tagName: l }),
                a.oncePromise('clicked').then(function(e) {
                  return 'ok' === e.action && w.request(M)
                }))
              )
            })
            .then(function(a) {
              return a
                ? y
                    .getAllFrames({ tabId: s })
                    .then(function(n) {
                      if (
                        (n = n.filter(function(e) {
                          return 0 === e.parentFrameId
                        })).length <= 1
                      )
                        return n[0]
                      var i = n.filter(function(t) {
                        return t.url === e
                      })
                      if (i.length >= 1) {
                        if (1 !== i.length) {
                          var a = 'multiple frames found with url: ' + e
                          console.warn(a)
                        }
                        return i[0]
                      }
                      return C(s, n, t, r)
                    })
                    .then(function(e) {
                      return e ? O(n, e.frameId, i, o, u, c) : null
                    })
                    .then(function(e) {
                      return o.frame_persist
                        ? e
                        : w.remove(M).then(function() {
                            return e
                          })
                    })
                : null
            })
        }
        function C(t, r, n, i) {
          var a = n * i
          return Promise.all(
            r.map(function(r) {
              return E.executeScript(t, {
                frameId: r.frameId,
                code: '[window.innerWidth, window.innerHeight]',
                matchAboutBlank: !0,
              }).then(function(t) {
                var r = e(t[0], 2),
                  o = r[0],
                  u = r[1]
                return Math.abs(a + o * u - Math.min(n, o) * Math.min(i, u) * 2)
              })
            })
          ).then(function(e) {
            var t = void 0,
              n = void 0
            return (
              e.forEach(function(e, i) {
                ;(void 0 === t || e < t) && ((t = e), (n = r[i]))
              }),
              n
            )
          })
        }
        function F(e) {
          for (
            var t = atob(e.split(',')[1]),
              r = e
                .split(',')[0]
                .split(':')[1]
                .split(';')[0],
              n = new ArrayBuffer(t.length),
              i = new Uint8Array(n),
              a = 0;
            a < t.length;
            a++
          )
            i[a] = t.charCodeAt(a)
          return new Blob([n], { type: r })
        }
        function j(e, t, r) {
          if (!e) {
            var n = new Error('_saveBlobToFs got no blob: ' + t + ', ' + r)
            return (n.name = _.MISSING_BLOB), Promise.reject(n)
          }
          t = k(t, r)
          var i = e.size + 2048
          return u.default
            .requestFs(i)
            .then(function(e) {
              return u.default.getFile(e, t, { create: !0 })
            })
            .then(function(t) {
              return u.default.writeFile(t, e)
            })
            .then(function() {
              return { filename: t, size: e.size }
            })
        }
        function k(e, t) {
          if (!t) return e
          var r = e.split('.'),
            n = r.pop()
          return r.join('.') + '-' + (t + 1) + '.' + n
        }
        function W(e) {
          var t = chrome.extension.getURL('')
          return e.url.substring(0, t.length) === t
        }
        function U(e, t, r) {
          var n = '' === e.url
          if (W(e)) {
            var i = chrome.extension.getURL(r),
              a = void 0
            try {
              a = chrome.extension.getViews({ type: 'tab', tabId: e.id })
            } catch (e) {
              a = chrome.extension.getViews({ type: 'tab' })
            }
            var o = a.filter(function(t) {
              return t.location.href === e.url
            })
            return (
              o.length ||
                console.error('No matching window found for: ' + e.url),
              Promise.all(
                o.map(function(e) {
                  return new Promise(function(t, r) {
                    var n = e.document.createElement('script')
                    ;(n.src = i),
                      n.addEventListener('load', t, !1),
                      e.document.body.appendChild(n)
                  })
                })
              )
            )
          }
          var u = { file: r }
          return (
            'number' == typeof t &&
              ((u.frameId = t), t > 0 && (u.matchAboutBlank = !0)),
            n && (u.matchAboutBlank = !0),
            E.executeScript(e.id, u)
          )
        }
        function H() {
          return new Error().stack
        }
        var L = function(e) {
          return 'number' == typeof e
        }
      },
      {
        './blob': 28,
        './db': 4,
        './events': 7,
        './filesystem': 9,
        './promise': 16,
        './messages': 29,
        './multicanvas': 30,
        './util': 15,
        './chrome.extension': 26,
        './chrome.permissions': 12,
        './chrome.tabs': 14,
        './chrome.webnavigation': 31,
      },
    ],
    6: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('./chrome.downloads'),
          t = require('./chrome.tabs'),
          n = require('./util'),
          r = o(n)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function i(e, t, n) {
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
          )
        }
        var a = r.default.$,
          u = i({}, e.ERROR_INCOGNITO_NETWORK_NAME, {
            title: 'Network error downloading file',
            body:
              'You might be experiencing a bug that was introduced to the Chrome browser in v68. In the meantime, you can try either of the following.\n\n1. right-click and “Save image as” or just click and drag the image to your desktop (if you are not using auto-download)\n\n2. disable “Allow in incognito” from the Chrome settings page for this extension (you can return to this capture from the history view within this extension):',
            buttons: function() {
              var e = 'chrome://extensions?id=' + chrome.runtime.id,
                n = document.createElement('a')
              return (
                (n.href = '#'),
                (n.innerText = e),
                Object.assign(n.style, {
                  display: 'block',
                  fontWeight: 'bold',
                  margin: '1em 0',
                }),
                a.on(n, 'click', function(n) {
                  n.preventDefault(),
                    (0, t.getCurrentTab)().then(function(n) {
                      return (0, t.openInTabs)(n, [e])
                    })
                }),
                [n]
              )
            },
          })
        exports.default = u
      },
      { './chrome.downloads': 23, './chrome.tabs': 14, './util': 15 },
    ],
    8: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = function() {
          Array.prototype.slice
            .call(document.querySelectorAll('a[data-href]'))
            .forEach(function(e) {
              e.href = e.dataset.href
            })
        }
        exports.default = e
      },
      {},
    ],
    11: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (function() {
          var e = 'chrome-extension://' + chrome.runtime.id,
            t = [
              {
                title: 'Extensions gallery',
                explanation:
                  'Chrome policy does not allow extensions to access the webstore extensions gallery.',
                starts_with: 'https://chrome.google.com/webstore/',
                examples: [
                  'https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl?hl=en-US',
                ],
                error_message: 'The extensions gallery cannot be scripted.',
              },
              {
                title: 'Chrome URL',
                explanation:
                  'Chrome policy does not allow extensions to access URLs that start with “chrome://”.',
                starts_with: 'chrome://',
                examples: [
                  'chrome://extensions/',
                  'chrome://downloads/',
                  'chrome://apps/',
                ],
                error_message: 'Cannot access a chrome:// URL',
              },
              {
                title: 'Own extension',
                explanation:
                  'A recent release of Chrome has removed the ability from extensions to take screenshots of themselves. This is under review and may change. Stay tuned!',
                starts_with: e,
                examples: [e],
                error_message: 'Issue screenshotting own chrome URL',
              },
              {
                title: 'Another extension',
                explanation:
                  'Chrome policy does not allow extensions to access to other extensions.',
                starts_with: 'chrome-extension://',
                examples: [
                  'chrome-extension://poompllcagmhgifahnbpaofdeikafkan/index.html',
                ],
                error_message:
                  'Cannot access a chrome-extension:// URL of different extension',
              },
              {
                title: 'Extension file',
                explanation:
                  'Chrome policy does not allow this extension to capture the current file. Is it already an image?',
                starts_with: 'filesystem:chrome-extension://',
                examples: [
                  'filesystem:chrome-extension://poompllcagmhgifahnbpaofdeikafkan/temporary/screencapture-developer-chrome-extensions-manifest-web_accessible_resources-1517807774768.png',
                ],
                error_message:
                  'Cannot access contents of the page. Extension manifest must request permission to access the respective host.',
              },
            ]
          return {
            URLS: t,
            getMatch: function(e) {
              return t.find(function(t) {
                return e.startsWith(t.starts_with)
              })
            },
            isOwnUrl: function(t) {
              return t.startsWith(e)
            },
          }
        })()
        exports.default = e
      },
      {},
    ],
    13: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getUrl = u),
          (exports.update = i)
        var e = require('./util'),
          r = n(e),
          t = require('./stores/options'),
          o = n(t)
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function u(e, t) {
          var n = t ? r.default.errorToString(t) : void 0,
            u = void 0
          return o.default
            .load()
            .then(function(e) {
              return (u = Object.assign({}, e))
            })
            .catch(function(e) {
              console.error(e), (u = { error: r.default.errorToString(e) })
            })
            .then(function() {
              return (
                o.default.fields.forEach(function(e) {
                  u[e.name] === e.default && delete u[e.name]
                }),
                r.default.reportLink(e, n, u)
              )
            })
        }
        function i(e) {
          return u(window.location.href, e).then(function(e) {
            var t = 'btn-report',
              o = r.default.$(t)
            return (
              o
                ? ((o.href = e), r.default.$.show('btn-report'))
                : console.error('No reportElt #' + t),
              e
            )
          })
        }
      },
      { './util': 15, './stores/options': 18 },
    ],
    19: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.wait = o)
        var e = 100,
          n = !1,
          t = []
        function o(e) {
          return new Promise(function(o, r) {
            if (n) return o()
            e && e(), t.push(o)
          })
        }
        window.addEventListener('load', function() {
          window.setTimeout(function() {
            ;(n = !0),
              t.forEach(function(e) {
                return e()
              })
          }, e)
        })
      },
      {},
    ],
    21: [
      function(require, module, exports) {
        var t =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              }
        !(function() {
          var e = function(t) {
            this.w = t || []
          }
          ;(e.prototype.set = function(t) {
            this.w[t] = !0
          }),
            (e.prototype.encode = function() {
              for (var t = [], e = 0; e < this.w.length; e++)
                this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6)
              for (e = 0; e < t.length; e++)
                t[
                  e
                ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
                  t[e] || 0
                )
              return t.join('') + '~'
            })
          var n = new e()
          function i(t) {
            n.set(t)
          }
          var r = function(t) {
              ;(t = a(t)), (t = new e(t))
              for (var i = n.w.slice(), r = 0; r < t.w.length; r++)
                i[r] = i[r] || t.w[r]
              return new e(i).encode()
            },
            a = function(t) {
              return (t = t.get(Se)), s(t) || (t = []), t
            },
            o = function(t) {
              return 'function' == typeof t
            },
            s = function(t) {
              return (
                '[object Array]' == Object.prototype.toString.call(Object(t))
              )
            },
            c = function(t) {
              return void 0 != t && -1 < (t.constructor + '').indexOf('String')
            },
            u = function(t, e) {
              return 0 == t.indexOf(e)
            },
            l = function(t) {
              return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : ''
            },
            f = function() {
              for (
                var t =
                    I.navigator.userAgent +
                    (R.cookie ? R.cookie : '') +
                    (R.referrer ? R.referrer : ''),
                  e = t.length,
                  n = I.history.length;
                0 < n;

              )
                t += n-- ^ e++
              return [
                ht() ^ (2147483647 & Li(t)),
                Math.round(new Date().getTime() / 1e3),
              ].join('.')
            },
            g = function(t) {
              var e = R.createElement('img')
              return (e.width = 1), (e.height = 1), (e.src = t), e
            },
            h = function() {},
            d = function(t) {
              return encodeURIComponent instanceof Function
                ? encodeURIComponent(t)
                : (i(28), t)
            },
            p = function(t, e, n, r) {
              try {
                t.addEventListener
                  ? t.addEventListener(e, n, !!r)
                  : t.attachEvent && t.attachEvent('on' + e, n)
              } catch (t) {
                i(27)
              }
            },
            v = /^[\w\-:/.?=&%!]+$/,
            m = function(t, e, n) {
              t &&
                (n
                  ? ((n = ''),
                    e && v.test(e) && (n = ' id="' + e + '"'),
                    v.test(t) &&
                      R.write('<script' + n + ' src="' + t + '"></script>'))
                  : (((n = R.createElement('script')).type = 'text/javascript'),
                    (n.async = !0),
                    (n.src = t),
                    e && (n.id = e),
                    (t = R.getElementsByTagName(
                      'script'
                    )[0]).parentNode.insertBefore(n, t)))
            },
            w = function(t, e) {
              return y(R.location[e ? 'href' : 'search'], t)
            },
            y = function(t, e) {
              return (t = t.match(
                '(?:&|#|\\?)' +
                  d(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1') +
                  '=([^&#]*)'
              )) && 2 == t.length
                ? t[1]
                : ''
            },
            b = function() {
              var t = '' + R.location.hostname
              return 0 == t.indexOf('www.') ? t.substring(4) : t
            },
            _ = function(t, e) {
              var n = t.indexOf(e)
              return (
                (5 == n || 6 == n) &&
                ('/' == (t = t.charAt(n + e.length)) ||
                  '?' == t ||
                  '' == t ||
                  ':' == t)
              )
            },
            k = function(e, n) {
              if (1 == n.length && null != n[0] && 'object' === t(n[0]))
                return n[0]
              for (
                var i = {}, r = Math.min(e.length + 1, n.length), a = 0;
                a < r;
                a++
              ) {
                if ('object' === t(n[a])) {
                  for (var o in n[a]) n[a].hasOwnProperty(o) && (i[o] = n[a][o])
                  break
                }
                a < e.length && (i[e[a]] = n[a])
              }
              return i
            },
            O = function() {
              ;(this.keys = []), (this.values = {}), (this.m = {})
            }
          ;(O.prototype.set = function(t, e, n) {
            this.keys.push(t),
              n ? (this.m[':' + t] = e) : (this.values[':' + t] = e)
          }),
            (O.prototype.get = function(t) {
              return this.m.hasOwnProperty(':' + t)
                ? this.m[':' + t]
                : this.values[':' + t]
            }),
            (O.prototype.map = function(t) {
              for (var e = 0; e < this.keys.length; e++) {
                var n = this.keys[e],
                  i = this.get(n)
                i && t(n, i)
              }
            })
          var x,
            T,
            S,
            j,
            C,
            I = window,
            R = document,
            A = function(t, e) {
              return setTimeout(t, e)
            },
            E = window,
            N = document,
            $ = function(t) {
              var e = E._gaUserPrefs
              if ((e && e.ioo && e.ioo()) || (t && !0 === E['ga-disable-' + t]))
                return !0
              try {
                var n = E.external
                if (n && n._gaUserPrefs && 'oo' == n._gaUserPrefs) return !0
              } catch (t) {}
              ;(t = []),
                (e = N.cookie.split(';')),
                (n = /^\s*AMP_TOKEN=\s*(.*?)\s*$/)
              for (var i = 0; i < e.length; i++) {
                var r = e[i].match(n)
                r && t.push(r[1])
              }
              for (e = 0; e < t.length; e++)
                if ('$OPT_OUT' == decodeURIComponent(t[e])) return !0
              return !1
            },
            D = function(t) {
              var e = [],
                n = R.cookie.split(';')
              t = new RegExp('^\\s*' + t + '=\\s*(.*?)\\s*$')
              for (var i = 0; i < n.length; i++) {
                var r = n[i].match(t)
                r && e.push(r[1])
              }
              return e
            },
            M = function(t, e, n, i, r, a) {
              if (
                !(r =
                  !$(r) &&
                  !(U.test(R.location.hostname) || ('/' == n && L.test(i))))
              )
                return !1
              if (
                (e && 1200 < e.length && (e = e.substring(0, 1200)),
                (n = t + '=' + e + '; path=' + n + '; '),
                a &&
                  (n +=
                    'expires=' +
                    new Date(new Date().getTime() + a).toGMTString() +
                    '; '),
                i && 'none' !== i && (n += 'domain=' + i + ';'),
                (i = R.cookie),
                (R.cookie = n),
                !(i = i != R.cookie))
              )
                t: {
                  for (t = D(t), i = 0; i < t.length; i++)
                    if (e == t[i]) {
                      i = !0
                      break t
                    }
                  i = !1
                }
              return i
            },
            P = function(t) {
              return encodeURIComponent
                ? encodeURIComponent(t)
                    .replace(/\(/g, '%28')
                    .replace(/\)/g, '%29')
                : t
            },
            L = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
            U = /(^|\.)doubleclick\.net$/i,
            G = /^.*Version\/?(\d+)[^\d].*$/i,
            V = function() {
              if (void 0 !== I.__ga4__) return I.__ga4__
              if (void 0 === x) {
                var t = I.navigator.userAgent
                if (t) {
                  var e = t
                  try {
                    e = decodeURIComponent(t)
                  } catch (t) {}
                  ;(t = !(
                    0 <= e.indexOf('Chrome') ||
                    0 <= e.indexOf('CriOS') ||
                    !(0 <= e.indexOf('Safari/') || 0 <= e.indexOf('Safari,'))
                  )) && (t = 11 <= ((e = G.exec(e)) ? Number(e[1]) : -1)),
                    (x = t)
                } else x = !1
              }
              return x
            },
            F = /^https?:\/\/[^/]*cdn\.ampproject\.org\//,
            H = [],
            q = function() {
              Ni.D([h])
            },
            z = function t(e, n, r) {
              if (!window.JSON) return i(58), !1
              var a = I.XMLHttpRequest
              if (!a) return i(59), !1
              var o = new a()
              return 'withCredentials' in o
                ? (o.open(
                    'POST',
                    (r ||
                      'https://ampcid.google.com/v1/publisher:getClientId') +
                      '?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM',
                    !0
                  ),
                  (o.withCredentials = !0),
                  o.setRequestHeader('Content-Type', 'text/plain'),
                  (o.onload = function() {
                    if (((T = !1), 4 == o.readyState)) {
                      try {
                        200 != o.status && (i(61), X('', '$ERROR', 3e4))
                        var a = JSON.parse(o.responseText)
                        a.optOut
                          ? (i(63), X('', '$OPT_OUT', 31536e6))
                          : a.clientId
                          ? X(a.clientId, a.securityToken, 31536e6)
                          : !r && a.alternateUrl
                          ? (S && clearTimeout(S),
                            (T = !0),
                            t(e, n, a.alternateUrl))
                          : (i(64), X('', '$NOT_FOUND', 36e5))
                      } catch (t) {
                        i(65), X('', '$ERROR', 3e4)
                      }
                      o = null
                    }
                  }),
                  (a = { originScope: 'AMP_ECID_GOOGLE' }),
                  e && (a.securityToken = e),
                  o.send(JSON.stringify(a)),
                  (S = A(function() {
                    i(66), X('', '$ERROR', 3e4)
                  }, 1e4)),
                  !0)
                : (i(60), !1)
            },
            B = function() {
              T = !1
            },
            K = function(t, e) {
              if (void 0 === j) {
                j = ''
                for (var n = Pn(), i = 0; i < n.length; i++) {
                  var r = n[i]
                  if (M('AMP_TOKEN', encodeURIComponent(t), '/', r, '', e))
                    return void (j = r)
                }
              }
              M('AMP_TOKEN', encodeURIComponent(t), '/', j, '', e)
            },
            X = function(t, e, n) {
              for (
                S && clearTimeout(S), e && K(e, n), C = t, e = H, H = [], n = 0;
                n < e.length;
                n++
              )
                e[n](t)
            },
            W = function() {
              return (
                (At || 'https:' == R.location.protocol ? 'https:' : 'http:') +
                '//www.google-analytics.com'
              )
            },
            Y = function(t, e, n) {
              if (((n = n || h), 2036 >= e.length)) Z(t, e, n)
              else {
                if (!(8192 >= e.length))
                  throw (et('len', e.length),
                  new function(t) {
                    ;(this.name = 'len'), (this.message = t + '-8192')
                  }(e.length))
                tt(t, e, n) || Q(t, e, n) || Z(t, e, n)
              }
            },
            J = function(t, e, n, i) {
              Q(t + '?' + e, '', (i = i || h), n)
            },
            Z = function(t, e, n) {
              var i = g(t + '?' + e)
              i.onload = i.onerror = function() {
                ;(i.onload = null), (i.onerror = null), n()
              }
            },
            Q = function(t, e, n, i) {
              var r = I.XMLHttpRequest
              if (!r) return !1
              var a = new r()
              return (
                'withCredentials' in a &&
                ((t = t.replace(/^http:/, 'https:')),
                a.open('POST', t, !0),
                (a.withCredentials = !0),
                a.setRequestHeader('Content-Type', 'text/plain'),
                (a.onreadystatechange = function() {
                  if (4 == a.readyState) {
                    if (i)
                      try {
                        var t = a.responseText
                        if (1 > t.length) et('xhr', 'ver', '0'), n()
                        else if ('1' != t.charAt(0))
                          et('xhr', 'ver', String(t.length)), n()
                        else if (3 < i.count++)
                          et('xhr', 'tmr', '' + i.count), n()
                        else if (1 == t.length) n()
                        else {
                          var e = t.charAt(1)
                          if ('d' == e)
                            J(
                              'https://stats.g.doubleclick.net/j/collect',
                              i.U,
                              i,
                              n
                            )
                          else if ('g' == e) {
                            var r = 'https://www.google.%/ads/ga-audiences'.replace(
                              '%',
                              'com'
                            )
                            Z(r, i.google, n)
                            var o = t.substring(2)
                            if (o)
                              if (/^[a-z.]{1,6}$/.test(o)) {
                                var s = 'https://www.google.%/ads/ga-audiences'.replace(
                                  '%',
                                  o
                                )
                                Z(s, i.google, h)
                              } else et('tld', 'bcc', o)
                          } else et('xhr', 'brc', e), n()
                        }
                      } catch (t) {
                        et('xhr', 'rsp'), n()
                      }
                    else n()
                    a = null
                  }
                }),
                a.send(e),
                !0)
              )
            },
            tt = function(t, e, n) {
              return (
                !!I.navigator.sendBeacon &&
                (!!I.navigator.sendBeacon(t, e) && (n(), !0))
              )
            },
            et = function(t, e, n) {
              1 <= 100 * Math.random() ||
                $('?') ||
                ((t = ['t=error', '_e=' + t, '_v=j68', 'sr=1']),
                e && t.push('_f=' + e),
                n && t.push('_m=' + d(n.substring(0, 100))),
                t.push('aip=1'),
                t.push('z=' + ht()),
                Z('https://www.google-analytics.com/u/d', t.join('&'), h))
            },
            nt = function(t) {
              var e = (I.gaData = I.gaData || {})
              return (e[t] = e[t] || {})
            },
            it = function() {
              this.M = []
            }
          function rt(t) {
            if (100 != t.get(sn) && Li(yt(t, ze)) % 1e4 >= 100 * bt(t, sn))
              throw 'abort'
          }
          function at(t) {
            if ($(yt(t, We))) throw 'abort'
          }
          function ot() {
            var t = R.location.protocol
            if ('http:' != t && 'https:' != t) throw 'abort'
          }
          function st(t) {
            try {
              I.navigator.sendBeacon
                ? i(42)
                : I.XMLHttpRequest &&
                  'withCredentials' in new I.XMLHttpRequest() &&
                  i(40)
            } catch (t) {}
            t.set(Te, r(t), !0), t.set(Gt, bt(t, Gt) + 1)
            var e = []
            mt.map(function(n, i) {
              i.F &&
                (void 0 != (n = t.get(n)) &&
                  n != i.defaultValue &&
                  ('boolean' == typeof n && (n *= 1),
                  e.push(i.F + '=' + d('' + n))))
            }),
              e.push('z=' + dt()),
              t.set(Pt, e.join('&'), !0)
          }
          function ct(t) {
            var e = yt(t, wn) || W() + '/collect',
              n = t.get(bn),
              i = yt(t, Ut)
            if ((!i && t.get(Lt) && (i = 'beacon'), n))
              J(e, yt(t, Pt), n, t.get(Mt))
            else if (i) {
              ;(n = i), (i = yt(t, Pt))
              var r = t.get(Mt)
              ;(r = r || h),
                'image' == n
                  ? Z(e, i, r)
                  : ('xhr' == n && Q(e, i, r)) ||
                    ('beacon' == n && tt(e, i, r)) ||
                    Y(e, i, r)
            } else Y(e, yt(t, Pt), t.get(Mt))
            ;(e = t.get(We)),
              (n = (e = nt(e)).hitcount),
              (e.hitcount = n ? n + 1 : 1),
              (e = t.get(We)),
              delete nt(e).pending_experiments,
              t.set(Mt, h, !0)
          }
          function ut(t) {
            ;(I.gaData = I.gaData || {}).expId &&
              t.set(ve, (I.gaData = I.gaData || {}).expId),
              (I.gaData = I.gaData || {}).expVar &&
                t.set(me, (I.gaData = I.gaData || {}).expVar)
            var e = t.get(We)
            if ((e = nt(e).pending_experiments)) {
              var n = []
              for (i in e)
                e.hasOwnProperty(i) &&
                  e[i] &&
                  n.push(encodeURIComponent(i) + '.' + encodeURIComponent(e[i]))
              var i = n.join('!')
            } else i = void 0
            i && t.set(we, i, !0)
          }
          function lt() {
            if (I.navigator && 'preview' == I.navigator.loadPurpose)
              throw 'abort'
          }
          function ft(t) {
            var e = I.gaDevIds
            s(e) && 0 != e.length && t.set('&did', e.join(','), !0)
          }
          function gt(t) {
            if (!t.get(We)) throw 'abort'
          }
          ;(it.prototype.add = function(t) {
            this.M.push(t)
          }),
            (it.prototype.D = function(t) {
              try {
                for (var e = 0; e < this.M.length; e++) {
                  var n = t.get(this.M[e])
                  n && o(n) && n.call(I, t)
                }
              } catch (t) {}
              ;(e = t.get(Mt)) != h &&
                o(e) &&
                (t.set(Mt, h, !0), setTimeout(e, 10))
            })
          var ht = function() {
              return Math.round(2147483647 * Math.random())
            },
            dt = function() {
              try {
                var t = new Uint32Array(1)
                return I.crypto.getRandomValues(t), 2147483647 & t[0]
              } catch (t) {
                return ht()
              }
            }
          function pt(t) {
            var e = bt(t, ke)
            500 <= e && i(15)
            var n = yt(t, Dt)
            if ('transaction' != n && 'item' != n) {
              n = bt(t, xe)
              var r = new Date().getTime(),
                a = bt(t, Oe)
              if (
                (0 == a && t.set(Oe, r),
                0 < (a = Math.round((2 * (r - a)) / 1e3)) &&
                  ((n = Math.min(n + a, 20)), t.set(Oe, r)),
                0 >= n)
              )
                throw 'abort'
              t.set(xe, --n)
            }
            t.set(ke, ++e)
          }
          var vt = function() {
              this.data = new O()
            },
            mt = new O(),
            wt = []
          vt.prototype.get = function(t) {
            var e = Ot(t),
              n = this.data.get(t)
            return (
              e &&
                void 0 == n &&
                (n = o(e.defaultValue) ? e.defaultValue() : e.defaultValue),
              e && e.Z ? e.Z(this, t, n) : n
            )
          }
          var yt = function(t, e) {
              return void 0 == (t = t.get(e)) ? '' : '' + t
            },
            bt = function(t, e) {
              return void 0 == (t = t.get(e)) || '' === t ? 0 : 1 * t
            }
          vt.prototype.set = function(e, n, i) {
            if (e)
              if ('object' == (void 0 === e ? 'undefined' : t(e)))
                for (var r in e) e.hasOwnProperty(r) && _t(this, r, e[r], i)
              else _t(this, e, n, i)
          }
          var _t = function(t, e, n, i) {
              if (void 0 != n)
                switch (e) {
                  case We:
                    hi.test(n)
                }
              var r = Ot(e)
              r && r.o ? r.o(t, e, n, i) : t.data.set(e, n, i)
            },
            kt = function(t, e, n, i, r) {
              ;(this.name = t),
                (this.F = e),
                (this.Z = i),
                (this.o = r),
                (this.defaultValue = n)
            },
            Ot = function(t) {
              var e = mt.get(t)
              if (!e)
                for (var n = 0; n < wt.length; n++) {
                  var i = wt[n],
                    r = i[0].exec(t)
                  if (r) {
                    ;(e = i[1](r)), mt.set(e.name, e)
                    break
                  }
                }
              return e
            },
            xt = function(t, e, n, i, r) {
              return (t = new kt(t, e, n, i, r)), mt.set(t.name, t), t.name
            },
            Tt = function(t, e) {
              wt.push([new RegExp('^' + t + '$'), e])
            },
            St = function(t, e, n) {
              return xt(t, e, n, void 0, jt)
            },
            jt = function() {},
            Ct =
              (c(window.GoogleAnalyticsObject) &&
                l(window.GoogleAnalyticsObject)) ||
              'ga',
            It = /^(?:utma\.)?\d+\.\d+$/,
            Rt = /^amp-[\w.-]{22,64}$/,
            At = !1,
            Et = St('apiVersion', 'v'),
            Nt = St('clientVersion', '_v')
          xt('anonymizeIp', 'aip')
          var $t = xt('adSenseId', 'a'),
            Dt = xt('hitType', 't'),
            Mt = xt('hitCallback'),
            Pt = xt('hitPayload')
          xt('nonInteraction', 'ni'),
            xt('currencyCode', 'cu'),
            xt('dataSource', 'ds')
          var Lt = xt('useBeacon', void 0, !1),
            Ut = xt('transport')
          xt('sessionControl', 'sc', ''),
            xt('sessionGroup', 'sg'),
            xt('queueTime', 'qt')
          var Gt = xt('_s', '_s')
          xt('screenName', 'cd')
          var Vt = xt('location', 'dl', ''),
            Ft = xt('referrer', 'dr'),
            Ht = xt('page', 'dp', '')
          xt('hostname', 'dh')
          var qt = xt('language', 'ul'),
            zt = xt('encoding', 'de')
          xt('title', 'dt', function() {
            return R.title || void 0
          }),
            Tt('contentGroup([0-9]+)', function(t) {
              return new kt(t[0], 'cg' + t[1])
            })
          var Bt = xt('screenColors', 'sd'),
            Kt = xt('screenResolution', 'sr'),
            Xt = xt('viewportSize', 'vp'),
            Wt = xt('javaEnabled', 'je'),
            Yt = xt('flashVersion', 'fl')
          xt('campaignId', 'ci'),
            xt('campaignName', 'cn'),
            xt('campaignSource', 'cs'),
            xt('campaignMedium', 'cm'),
            xt('campaignKeyword', 'ck'),
            xt('campaignContent', 'cc')
          var Jt = xt('eventCategory', 'ec'),
            Zt = xt('eventAction', 'ea'),
            Qt = xt('eventLabel', 'el'),
            te = xt('eventValue', 'ev'),
            ee = xt('socialNetwork', 'sn'),
            ne = xt('socialAction', 'sa'),
            ie = xt('socialTarget', 'st'),
            re = xt('l1', 'plt'),
            ae = xt('l2', 'pdt'),
            oe = xt('l3', 'dns'),
            se = xt('l4', 'rrt'),
            ce = xt('l5', 'srt'),
            ue = xt('l6', 'tcp'),
            le = xt('l7', 'dit'),
            fe = xt('l8', 'clt'),
            ge = xt('timingCategory', 'utc'),
            he = xt('timingVar', 'utv'),
            de = xt('timingLabel', 'utl'),
            pe = xt('timingValue', 'utt')
          xt('appName', 'an'),
            xt('appVersion', 'av', ''),
            xt('appId', 'aid', ''),
            xt('appInstallerId', 'aiid', ''),
            xt('exDescription', 'exd'),
            xt('exFatal', 'exf')
          var ve = xt('expId', 'xid'),
            me = xt('expVar', 'xvar'),
            we = xt('exp', 'exp'),
            ye = xt('_utma', '_utma'),
            be = xt('_utmz', '_utmz'),
            _e = xt('_utmht', '_utmht'),
            ke = xt('_hc', void 0, 0),
            Oe = xt('_ti', void 0, 0),
            xe = xt('_to', void 0, 20)
          Tt('dimension([0-9]+)', function(t) {
            return new kt(t[0], 'cd' + t[1])
          }),
            Tt('metric([0-9]+)', function(t) {
              return new kt(t[0], 'cm' + t[1])
            }),
            xt(
              'linkerParam',
              void 0,
              void 0,
              function(t) {
                var e = t.get(ze),
                  n = t.get(ln) || ''
                if (
                  ((e = '_ga=2.' + d(Kn(n + e, 0) + '.' + n + '-' + e)),
                  (n = t.get(hn)) && t.get(mn))
                ) {
                  var r = bt(t, dn)
                  1e3 * r + bt(t, pn) <= new Date().getTime()
                    ? (i(76), (t = ''))
                    : (i(44), (t = '&_gac=1.' + d([Kn(n, 0), r, n].join('.'))))
                } else t = ''
                return e + t
              },
              jt
            )
          var Te = xt('usage', '_u'),
            Se = xt('_um')
          xt(
            'forceSSL',
            void 0,
            void 0,
            function() {
              return At
            },
            function(t, e, n) {
              i(34), (At = !!n)
            }
          )
          var je = xt('_j1', 'jid'),
            Ce = xt('_j2', 'gjid')
          Tt('\\&(.*)', function(t) {
            var e = new kt(t[0], t[1]),
              n = (function(t) {
                var e
                return (
                  mt.map(function(n, i) {
                    i.F == t && (e = i)
                  }),
                  e && e.name
                )
              })(t[0].substring(1))
            return (
              n &&
                ((e.Z = function(t) {
                  return t.get(n)
                }),
                (e.o = function(t, e, i, r) {
                  t.set(n, i, r)
                }),
                (e.F = void 0)),
              e
            )
          })
          var Ie = St('_oot'),
            Re = xt('previewTask'),
            Ae = xt('checkProtocolTask'),
            Ee = xt('validationTask'),
            Ne = xt('checkStorageTask'),
            $e = xt('historyImportTask'),
            De = xt('samplerTask'),
            Me = xt('_rlt'),
            Pe = xt('buildHitTask'),
            Le = xt('sendHitTask'),
            Ue = xt('ceTask'),
            Ge = xt('devIdTask'),
            Ve = xt('timingTask'),
            Fe = xt('displayFeaturesTask'),
            He = xt('customTask'),
            qe = St('name'),
            ze = St('clientId', 'cid'),
            Be = St('clientIdTime'),
            Ke = St('storedClientId'),
            Xe = xt('userId', 'uid'),
            We = St('trackingId', 'tid'),
            Ye = St('cookieName', void 0, '_ga'),
            Je = St('cookieDomain'),
            Ze = St('cookiePath', void 0, '/'),
            Qe = St('cookieExpires', void 0, 63072e3),
            tn = St('cookieUpdate', void 0, !0),
            en = St('legacyCookieDomain'),
            nn = St('legacyHistoryImport', void 0, !0),
            rn = St('storage', void 0, 'cookie'),
            an = St('allowLinker', void 0, !1),
            on = St('allowAnchor', void 0, !0),
            sn = St('sampleRate', 'sf', 100),
            cn = St('siteSpeedSampleRate', void 0, 1),
            un = St('alwaysSendReferrer', void 0, !1),
            ln = St('_gid', '_gid'),
            fn = St('_gcn'),
            gn = St('useAmpClientId'),
            hn = St('_gclid'),
            dn = St('_gt'),
            pn = St('_ge', void 0, 7776e6),
            vn = St('_gclsrc'),
            mn = St('storeGac', void 0, !0),
            wn = xt('transportUrl'),
            yn = xt('_r', '_r'),
            bn = xt('_dp'),
            _n = xt('allowAdFeatures', void 0, !0)
          function kn(t, e, n, r) {
            e[t] = function() {
              try {
                return r && i(r), n.apply(this, arguments)
              } catch (e) {
                throw (et('exc', t, e && e.name), e)
              }
            }
          }
          var On = function(t) {
              var e = I.performance || I.webkitPerformance
              if (!(e = e && e.timing)) return !1
              var n = e.navigationStart
              return (
                0 != n &&
                ((t[re] = e.loadEventStart - n),
                (t[oe] = e.domainLookupEnd - e.domainLookupStart),
                (t[ue] = e.connectEnd - e.connectStart),
                (t[ce] = e.responseStart - e.requestStart),
                (t[ae] = e.responseEnd - e.responseStart),
                (t[se] = e.fetchStart - n),
                (t[le] = e.domInteractive - n),
                (t[fe] = e.domContentLoadedEventStart - n),
                !0)
              )
            },
            xn = function(t) {
              if (I.top != I) return !1
              var e = I.external,
                n = e && e.onloadT
              return (
                e && !e.isValidLoadTime && (n = void 0),
                2147483648 < n && (n = void 0),
                0 < n && e.setPageReadyTime(),
                void 0 != n && ((t[re] = n), !0)
              )
            },
            Tn = function(t, e) {
              var n = t[e]
              ;(isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0)
            },
            Sn = function(t) {
              return function(e) {
                if ('pageview' == e.get(Dt) && !t.I) {
                  t.I = !0
                  var n = (function(t) {
                      var e = Math.min(bt(t, cn), 100)
                      return !(Li(yt(t, ze)) % 100 >= e)
                    })(e),
                    i = 0 < y(e.get(Vt), 'gclid').length
                  ;(n || i) &&
                    (function t(e) {
                      var n = {}
                      if (On(n) || xn(n)) {
                        var i = n[re]
                        void 0 == i ||
                          1 / 0 == i ||
                          isNaN(i) ||
                          (0 < i
                            ? (Tn(n, oe),
                              Tn(n, ue),
                              Tn(n, ce),
                              Tn(n, ae),
                              Tn(n, se),
                              Tn(n, le),
                              Tn(n, fe),
                              A(function() {
                                e(n)
                              }, 10))
                            : p(
                                I,
                                'load',
                                function() {
                                  t(e)
                                },
                                !1
                              ))
                      }
                    })(function(e) {
                      n && t.send('timing', e), i && t.send('adtiming', e)
                    })
                }
              }
            },
            jn = !1,
            Cn = function(t) {
              if ('cookie' == yt(t, rn)) {
                if (t.get(tn) || yt(t, Ke) != yt(t, ze)) {
                  var e = 1e3 * bt(t, Qe)
                  In(t, ze, Ye, e)
                }
                if ((In(t, ln, fn, 864e5), t.get(mn))) {
                  var n = t.get(hn)
                  if (n) {
                    var r = Math.min(bt(t, pn), 1e3 * bt(t, Qe))
                    ;(r = Math.min(
                      r,
                      1e3 * bt(t, dn) + r - new Date().getTime()
                    )),
                      t.data.set(pn, r),
                      (e = {})
                    var a = t.get(dn),
                      o = t.get(vn),
                      s = Ln(yt(t, Ze)),
                      c = Mn(yt(t, Je)),
                      u = yt(t, We)
                    o && 'aw.ds' != o
                      ? e && (e.ua = !0)
                      : ((n = ['1', a, P(n)].join('.')),
                        0 < r &&
                          (e && (e.ta = !0), M('_gac_' + P(u), n, s, c, u, r))),
                      Gn(e)
                  }
                } else i(75)
                ;(t = 'none' === Mn(yt(t, Je))) &&
                  ((t = R.location.hostname), (t = U.test(t) || L.test(t))),
                  t && i(30)
              }
            },
            In = function(t, e, n, r) {
              var a = En(t, e)
              if (a) {
                n = yt(t, n)
                var o = Ln(yt(t, Ze)),
                  s = Mn(yt(t, Je)),
                  c = yt(t, We)
                if ('auto' != s) M(n, a, o, s, c, r) && (jn = !0)
                else {
                  i(32)
                  for (var u = Pn(), l = 0; l < u.length; l++)
                    if (
                      ((s = u[l]),
                      t.data.set(Je, s),
                      (a = En(t, e)),
                      M(n, a, o, s, c, r))
                    )
                      return void (jn = !0)
                  t.data.set(Je, 'auto')
                }
              }
            },
            Rn = function(t) {
              if ('cookie' == yt(t, rn) && !jn && (Cn(t), !jn)) throw 'abort'
            },
            An = function(t) {
              if (t.get(nn)) {
                var e = yt(t, Je),
                  n = yt(t, en) || b(),
                  r = Vn('__utma', n, e)
                r &&
                  (i(19),
                  t.set(_e, new Date().getTime(), !0),
                  t.set(ye, r.R),
                  (e = Vn('__utmz', n, e)) &&
                    r.hash == e.hash &&
                    t.set(be, e.R))
              }
            },
            En = function(t, e) {
              e = P(yt(t, e))
              var n = Mn(yt(t, Je)).split('.').length
              return (
                1 < (t = Un(yt(t, Ze))) && (n += '-' + t),
                e ? ['GA1', n, e].join('.') : ''
              )
            },
            Nn = function(t, e) {
              return $n(e, yt(t, Je), yt(t, Ze))
            },
            $n = function(t, e, n) {
              if (!t || 1 > t.length) i(12)
              else {
                for (var r = [], a = 0; a < t.length; a++) {
                  var o = t[a],
                    s = o.split('.'),
                    c = s.shift()
                  ;('GA1' == c || '1' == c) && 1 < s.length
                    ? (1 == (o = s.shift().split('-')).length && (o[1] = '1'),
                      (o[0] *= 1),
                      (o[1] *= 1),
                      (s = { H: o, s: s.join('.') }))
                    : (s = Rt.test(o) ? { H: [0, 0], s: o } : void 0),
                    s && r.push(s)
                }
                if (1 == r.length) return i(13), r[0].s
                if (0 != r.length)
                  return (
                    i(14),
                    1 == (r = Dn(r, Mn(e).split('.').length, 0)).length
                      ? r[0].s
                      : (1 < (r = Dn(r, Un(n), 1)).length && i(41),
                        r[0] && r[0].s)
                  )
                i(12)
              }
            },
            Dn = function(t, e, n) {
              for (var i, r = [], a = [], o = 0; o < t.length; o++) {
                var s = t[o]
                s.H[n] == e
                  ? r.push(s)
                  : void 0 == i || s.H[n] < i
                  ? ((a = [s]), (i = s.H[n]))
                  : s.H[n] == i && a.push(s)
              }
              return 0 < r.length ? r : a
            },
            Mn = function(t) {
              return 0 == t.indexOf('.') ? t.substr(1) : t
            },
            Pn = function() {
              var t = [],
                e = b().split('.')
              if (4 == e.length) {
                var n = e[e.length - 1]
                if (parseInt(n, 10) == n) return ['none']
              }
              for (n = e.length - 2; 0 <= n; n--) t.push(e.slice(n).join('.'))
              return t.push('none'), t
            },
            Ln = function(t) {
              return t
                ? (1 < t.length &&
                    t.lastIndexOf('/') == t.length - 1 &&
                    (t = t.substr(0, t.length - 1)),
                  0 != t.indexOf('/') && (t = '/' + t),
                  t)
                : '/'
            },
            Un = function(t) {
              return '/' == (t = Ln(t)) ? 1 : t.split('/').length
            },
            Gn = function(t) {
              t.ta && i(77), t.na && i(74), t.pa && i(73), t.ua && i(69)
            }
          function Vn(t, e, n) {
            'none' == e && (e = '')
            var i = [],
              r = D(t)
            t = '__utma' == t ? 6 : 2
            for (var a = 0; a < r.length; a++) {
              var o = ('' + r[a]).split('.')
              o.length >= t && i.push({ hash: o[0], R: r[a], O: o })
            }
            if (0 != i.length)
              return 1 == i.length
                ? i[0]
                : Fn(e, i) || Fn(n, i) || Fn(null, i) || i[0]
          }
          function Fn(t, e) {
            if (null == t) var n = (t = 1)
            else (n = Li(t)), (t = Li(u(t, '.') ? t.substring(1) : '.' + t))
            for (var i = 0; i < e.length; i++)
              if (e[i].hash == n || e[i].hash == t) return e[i]
          }
          var Hn = new RegExp(/^https?:\/\/([^\/:]+)/),
            qn = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
            zn = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/
          function Bn(t, e) {
            var n = new Date(),
              i = I.navigator,
              r = i.plugins || []
            for (
              t = [
                t,
                i.userAgent,
                n.getTimezoneOffset(),
                n.getYear(),
                n.getDate(),
                n.getHours(),
                n.getMinutes() + e,
              ],
                e = 0;
              e < r.length;
              ++e
            )
              t.push(r[e].description)
            return Li(t.join('.'))
          }
          function Kn(t, e) {
            var n = new Date(),
              i = I.navigator,
              r = n.getHours() + Math.floor((n.getMinutes() + e) / 60)
            return Li(
              [
                t,
                i.userAgent,
                i.language || '',
                n.getTimezoneOffset(),
                n.getYear(),
                n.getDate() + Math.floor(r / 24),
                (24 + r) % 24,
                (60 + n.getMinutes() + e) % 60,
              ].join('.')
            )
          }
          var Xn = function(t) {
            i(48), (this.target = t), (this.T = !1)
          }
          Xn.prototype.ca = function(t, e) {
            if (t.tagName) {
              if ('a' == t.tagName.toLowerCase())
                return void (t.href && (t.href = Wn(this, t.href, e)))
              if ('form' == t.tagName.toLowerCase()) return Yn(this, t)
            }
            if ('string' == typeof t) return Wn(this, t, e)
          }
          var Wn = function(t, e, n) {
              var i = qn.exec(e)
              i && 3 <= i.length && (e = i[1] + (i[3] ? i[2] + i[3] : '')),
                (i = zn.exec(e)) &&
                  3 <= i.length &&
                  (e = i[1] + (i[3] ? i[2] + i[3] : '')),
                (t = t.target.get('linkerParam'))
              var r = e.indexOf('?')
              return (
                (i = e.indexOf('#')),
                n
                  ? (e += (-1 == i ? '#' : '&') + t)
                  : ((n = -1 == r ? '?' : '&'),
                    (e =
                      -1 == i
                        ? e + (n + t)
                        : e.substring(0, i) + n + t + e.substring(i))),
                (e = e.replace(/&+_ga=/, '&_ga=')).replace(/&+_gac=/, '&_gac=')
              )
            },
            Yn = function(t, e) {
              if (e && e.action)
                if ('get' == e.method.toLowerCase()) {
                  t = t.target.get('linkerParam').split('&')
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n].split('='),
                      r = i[1]
                    i = i[0]
                    for (
                      var a = e.childNodes || [], o = !1, s = 0;
                      s < a.length;
                      s++
                    )
                      if (a[s].name == i) {
                        a[s].setAttribute('value', r), (o = !0)
                        break
                      }
                    o ||
                      ((a = R.createElement('input')).setAttribute(
                        'type',
                        'hidden'
                      ),
                      a.setAttribute('name', i),
                      a.setAttribute('value', r),
                      e.appendChild(a))
                  }
                } else
                  'post' == e.method.toLowerCase() &&
                    (e.action = Wn(t, e.action))
            }
          function Jn(t, e) {
            if (e == R.location.hostname) return !1
            for (var n = 0; n < t.length; n++)
              if (t[n] instanceof RegExp) {
                if (t[n].test(e)) return !0
              } else if (0 <= e.indexOf(t[n])) return !0
            return !1
          }
          function Zn(t, e) {
            return (
              e != Bn(t, 0) &&
              e != Bn(t, -1) &&
              e != Bn(t, -2) &&
              e != Kn(t, 0) &&
              e != Kn(t, -1) &&
              e != Kn(t, -2)
            )
          }
          Xn.prototype.S = function(t, e, n) {
            function r(n) {
              try {
                n = n || I.event
                t: {
                  var r = n.target || n.srcElement
                  for (n = 100; r && 0 < n; ) {
                    if (r.href && r.nodeName.match(/^a(?:rea)?$/i)) {
                      var o = r
                      break t
                    }
                    ;(r = r.parentNode), n--
                  }
                  o = {}
                }
                ;('http:' == o.protocol || 'https:' == o.protocol) &&
                  Jn(t, o.hostname || '') &&
                  o.href &&
                  (o.href = Wn(a, o.href, e))
              } catch (t) {
                i(26)
              }
            }
            var a = this
            this.T ||
              ((this.T = !0), p(R, 'mousedown', r, !1), p(R, 'keyup', r, !1)),
              n &&
                p(R, 'submit', function(e) {
                  if (
                    (e = (e = e || I.event).target || e.srcElement) &&
                    e.action
                  ) {
                    var n = e.action.match(Hn)
                    n && Jn(t, n[1]) && Yn(a, e)
                  }
                })
          }
          var Qn,
            ti = /^(GTM|OPT)-[A-Z0-9]+$/,
            ei = /;_gaexp=[^;]*/g,
            ni = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
            ii = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
            ri = function(t, e, n) {
              ;(this.aa = e),
                (e = n) ||
                  (e =
                    (e = yt(t, qe)) && 't0' != e
                      ? li.test(e)
                        ? '_gat_' + P(yt(t, We))
                        : '_gat_' + P(e)
                      : '_gat'),
                (this.Y = e),
                (this.ra = null)
            },
            ai = function(t, e, n) {
              !1 === e.get(_n) ||
                e.get(n) ||
                ('1' == D(t.Y)[0] ? e.set(n, '', !0) : e.set(n, '' + ht(), !0))
            },
            oi = function(t, e) {
              si(e) && M(t.Y, '1', e.get(Ze), e.get(Je), e.get(We), 6e4)
            },
            si = function(t) {
              return !!t.get(je) && t.get(_n)
            },
            ci = function(t, e, n) {
              var i = new O(),
                a = function(t) {
                  Ot(t).F && i.set(Ot(t).F, e.get(t))
                }
              a(Et),
                a(Nt),
                a(We),
                a(ze),
                a(je),
                (0 != n && 1 != n) || (a(Xe), a(Ce), a(ln)),
                i.set(Ot(Te).F, r(e))
              var o = ''
              return (
                i.map(function(t, e) {
                  ;(o += d(t) + '='), (o += d('' + e) + '&')
                }),
                (o += 'z=' + ht()),
                0 == n
                  ? (o = t.aa + o)
                  : 1 == n
                  ? (o = 't=dc&aip=1&_r=3&' + o)
                  : 2 == n && (o = 't=sr&aip=1&_r=4&slf_rd=1&' + o),
                o
              )
            },
            ui = function(t, e) {
              return (
                null === t.ra &&
                  ((t.ra =
                    1 ===
                    (function(t) {
                      var e,
                        n = new function() {
                          ;(this.V = 100),
                            (this.$ = this.fa = !1),
                            (this.oa = 'detourexp'),
                            (this.groups = 1)
                        }()
                      if (n.fa && n.$) return 0
                      if (((n.$ = !0), t)) {
                        if (n.oa && void 0 !== t.get(n.oa)) return bt(t, n.oa)
                        if (0 == t.get(cn)) return 0
                      }
                      return 0 == n.V
                        ? 0
                        : (void 0 === e && (e = dt()),
                          0 == e % n.V
                            ? (Math.floor(e / n.V) % n.groups) + 1
                            : 0)
                    })(e)),
                  t.ra && i(33)),
                t.ra
              )
            },
            li = /^gtm\d+$/,
            fi = function(t, n) {
              if (!(t = t.b).get('dcLoaded')) {
                var r,
                  o = new e(a(t))
                o.set(29),
                  t.set(Se, o.w),
                  (n = n || {})[Ye] && (r = P(n[Ye])),
                  (function(t, e) {
                    var n = e.get(Pe)
                    e.set(Pe, function(e) {
                      ai(t, e, je), ai(t, e, Ce)
                      var i = n(e)
                      return oi(t, e), i
                    })
                    var r = e.get(Le)
                    e.set(Le, function(e) {
                      var n = r(e)
                      if (si(e)) {
                        if (V() !== ui(t, e)) {
                          i(80)
                          var a = {
                            U: ci(t, e, 1),
                            google: ci(t, e, 2),
                            count: 0,
                          }
                          J('https://stats.g.doubleclick.net/j/collect', a.U, a)
                        } else g(ci(t, e, 0))
                        e.set(je, '', !0)
                      }
                      return n
                    })
                  })(
                    (n = new ri(
                      t,
                      'https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&',
                      r
                    )),
                    t
                  ),
                  t.set('dcLoaded', !0)
              }
            },
            gi = function(t) {
              if (!t.get('dcLoaded') && 'cookie' == t.get(rn)) {
                var e = new ri(t)
                if ((ai(e, t, je), ai(e, t, Ce), oi(e, t), si(t))) {
                  var n = V() !== ui(e, t)
                  t.set(yn, 1, !0),
                    n
                      ? (i(79),
                        t.set(wn, W() + '/j/collect', !0),
                        t.set(
                          bn,
                          { U: ci(e, t, 1), google: ci(e, t, 2), count: 0 },
                          !0
                        ))
                      : t.set(wn, W() + '/r/collect', !0)
                }
              }
            },
            hi = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
            di = function(t) {
              function e(t, e) {
                i.b.data.set(t, e)
              }
              function n(t, n) {
                e(t, n), i.filters.add(t)
              }
              var i = this
              ;(this.b = new vt()),
                (this.filters = new it()),
                e(qe, t[qe]),
                e(We, l(t[We])),
                e(Ye, t[Ye]),
                e(Je, t[Je] || b()),
                e(Ze, t[Ze]),
                e(Qe, t[Qe]),
                e(tn, t[tn]),
                e(en, t[en]),
                e(nn, t[nn]),
                e(an, t[an]),
                e(on, t[on]),
                e(sn, t[sn]),
                e(cn, t[cn]),
                e(un, t[un]),
                e(rn, t[rn]),
                e(Xe, t[Xe]),
                e(Be, t[Be]),
                e(gn, t[gn]),
                e(mn, t[mn]),
                e(Et, 1),
                e(Nt, 'j68'),
                n(Ie, at),
                n(He, h),
                n(Re, lt),
                n(Ae, ot),
                n(Ee, gt),
                n(Ne, Rn),
                n($e, An),
                n(De, rt),
                n(Me, pt),
                n(Ue, ut),
                n(Ge, ft),
                n(Fe, gi),
                n(Pe, st),
                n(Le, ct),
                n(Ve, Sn(this)),
                vi(this.b),
                pi(this.b, t[ze]),
                this.b.set(
                  $t,
                  (function() {
                    var t = (I.gaGlobal = I.gaGlobal || {})
                    return (t.hid = t.hid || ht())
                  })()
                ),
                (function(t, e, n) {
                  if (!Qn) {
                    var i = R.location.hash,
                      r = I.name,
                      a = /^#?gaso=([^&]*)/
                    ;(r =
                      (i = (i = (i && i.match(a)) || (r && r.match(a)))
                        ? i[1]
                        : D('GASO')[0] || '') &&
                      i.match(
                        /^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i
                      )) &&
                      (M('GASO', '' + i, n, e, t, 0),
                      window._udo || (window._udo = e),
                      window._utcp || (window._utcp = n),
                      (t = r[1]),
                      m(
                        'https://www.google.com/analytics/web/inpage/pub/inpage.js?' +
                          (t ? 'prefix=' + t + '&' : '') +
                          ht(),
                        '_gasojs'
                      )),
                      (Qn = !0)
                  }
                })(this.b.get(We), this.b.get(Je), this.b.get(Ze))
            },
            pi = function(t, e) {
              var n = yt(t, Ye)
              if (
                (t.data.set(fn, '_ga' == n ? '_gid' : n + '_gid'),
                'cookie' == yt(t, rn))
              ) {
                if (((jn = !1), (n = D(yt(t, Ye))), !(n = Nn(t, n)))) {
                  n = yt(t, Je)
                  var r = yt(t, en) || b()
                  void 0 != (n = Vn('__utma', r, n))
                    ? (i(10), (n = n.O[1] + '.' + n.O[2]))
                    : (n = void 0)
                }
                if ((n && (jn = !0), (r = n && !t.get(tn))))
                  if (2 != (r = n.split('.')).length) r = !1
                  else if ((r = Number(r[1]))) {
                    var a = bt(t, Qe)
                    r = r + a < new Date().getTime() / 1e3
                  } else r = !1
                if (
                  (r && (n = void 0),
                  n &&
                    (t.data.set(Ke, n),
                    t.data.set(ze, n),
                    (n = D(yt(t, fn))),
                    (n = Nn(t, n)) && t.data.set(ln, n)),
                  t.get(mn) &&
                    ((n = t.get(hn)),
                    (r = t.get(vn)),
                    !n || (r && 'aw.ds' != r)))
                ) {
                  if (((n = {}), R)) {
                    ;(r = []), (a = R.cookie.split(';'))
                    for (
                      var o = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, s = 0;
                      s < a.length;
                      s++
                    ) {
                      var c = a[s].match(o)
                      c && r.push({ ja: c[1], value: c[2] })
                    }
                    if (((a = {}), r && r.length))
                      for (o = 0; o < r.length; o++)
                        '1' != (s = r[o].value.split('.'))[0] || 3 != s.length
                          ? n && (n.na = !0)
                          : s[1] &&
                            (a[r[o].ja] ? n && (n.pa = !0) : (a[r[o].ja] = []),
                            a[r[o].ja].push({ timestamp: s[1], qa: s[2] }))
                    r = a
                  } else r = {}
                  ;(r = r[yt(t, We)]),
                    Gn(n),
                    r &&
                      0 != r.length &&
                      ((n = r[0]),
                      t.data.set(dn, n.timestamp),
                      t.data.set(hn, n.qa))
                }
              }
              if (t.get(tn))
                t: if ((r = w('_ga', t.get(on))))
                  if (t.get(an))
                    if (-1 == (n = r.indexOf('.'))) i(22)
                    else {
                      if (
                        ((a = r.substring(0, n)),
                        (n = (o = r.substring(n + 1)).indexOf('.')),
                        (r = o.substring(0, n)),
                        (o = o.substring(n + 1)),
                        '1' == a)
                      ) {
                        if (Zn((n = o), r)) {
                          i(23)
                          break t
                        }
                      } else {
                        if ('2' != a) {
                          i(22)
                          break t
                        }
                        if (
                          ((a = ''),
                          0 < (n = o.indexOf('-'))
                            ? ((a = o.substring(0, n)),
                              (n = o.substring(n + 1)))
                            : (n = o.substring(1)),
                          Zn(a + n, r))
                        ) {
                          i(53)
                          break t
                        }
                        a && (i(2), t.data.set(ln, a))
                      }
                      i(11),
                        t.data.set(ze, n),
                        (n = w('_gac', t.get(on))) &&
                          ('1' != (n = n.split('.'))[0] || 4 != n.length
                            ? i(72)
                            : Zn(n[3], n[1])
                            ? i(71)
                            : (t.data.set(hn, n[3]),
                              t.data.set(dn, n[2]),
                              i(70)))
                    }
                  else i(21)
              e && (i(9), t.data.set(ze, d(e))),
                t.get(ze) ||
                  ((e =
                    (e = I.gaGlobal && I.gaGlobal.vid) && -1 != e.search(It)
                      ? e
                      : void 0)
                    ? (i(17), t.data.set(ze, e))
                    : (i(8), t.data.set(ze, f()))),
                t.get(ln) || (i(3), t.data.set(ln, f())),
                Cn(t)
            },
            vi = function(t) {
              var e = I.navigator,
                n = I.screen,
                r = R.location
              if (
                (t.set(
                  Ft,
                  (function(t, e) {
                    var n = R.referrer
                    if (/^(https?|android-app):\/\//i.test(n)) {
                      if (t) return n
                      if (((t = '//' + R.location.hostname), !_(n, t)))
                        return e &&
                          ((e = t.replace(/\./g, '-') + '.cdn.ampproject.org'),
                          _(n, e))
                          ? void 0
                          : n
                    }
                  })(t.get(un), t.get(gn))
                ),
                r)
              ) {
                var a = r.pathname || ''
                '/' != a.charAt(0) && (i(31), (a = '/' + a)),
                  t.set(Vt, r.protocol + '//' + r.hostname + a + r.search)
              }
              n && t.set(Kt, n.width + 'x' + n.height),
                n && t.set(Bt, n.colorDepth + '-bit'),
                (n = R.documentElement)
              var o = (a = R.body) && a.clientWidth && a.clientHeight,
                s = []
              if (
                (n &&
                n.clientWidth &&
                n.clientHeight &&
                ('CSS1Compat' === R.compatMode || !o)
                  ? (s = [n.clientWidth, n.clientHeight])
                  : o && (s = [a.clientWidth, a.clientHeight]),
                (n = 0 >= s[0] || 0 >= s[1] ? '' : s.join('x')),
                t.set(Xt, n),
                t.set(
                  Yt,
                  (function() {
                    var t, e
                    if ((e = (e = I.navigator) ? e.plugins : null) && e.length)
                      for (var n = 0; n < e.length && !t; n++) {
                        var i = e[n]
                        ;-1 < i.name.indexOf('Shockwave Flash') &&
                          (t = i.description)
                      }
                    if (!t)
                      try {
                        var r = new ActiveXObject(
                          'ShockwaveFlash.ShockwaveFlash.7'
                        )
                        t = r.GetVariable('$version')
                      } catch (t) {}
                    if (!t)
                      try {
                        ;(r = new ActiveXObject(
                          'ShockwaveFlash.ShockwaveFlash.6'
                        )),
                          (t = 'WIN 6,0,21,0'),
                          (r.AllowScriptAccess = 'always'),
                          (t = r.GetVariable('$version'))
                      } catch (t) {}
                    if (!t)
                      try {
                        t = (r = new ActiveXObject(
                          'ShockwaveFlash.ShockwaveFlash'
                        )).GetVariable('$version')
                      } catch (t) {}
                    return (
                      t &&
                        (r = t.match(/[\d]+/g)) &&
                        3 <= r.length &&
                        (t = r[0] + '.' + r[1] + ' r' + r[2]),
                      t || void 0
                    )
                  })()
                ),
                t.set(zt, R.characterSet || R.charset),
                t.set(
                  Wt,
                  (e &&
                    'function' == typeof e.javaEnabled &&
                    e.javaEnabled()) ||
                    !1
                ),
                t.set(
                  qt,
                  ((e && (e.language || e.browserLanguage)) || '').toLowerCase()
                ),
                t.data.set(hn, w('gclid', !0)),
                t.data.set(vn, w('gclsrc', !0)),
                t.data.set(dn, Math.round(new Date().getTime() / 1e3)),
                r && t.get(on) && (e = R.location.hash))
              ) {
                for (e = e.split(/[?&#]+/), r = [], n = 0; n < e.length; ++n)
                  (u(e[n], 'utm_id') ||
                    u(e[n], 'utm_campaign') ||
                    u(e[n], 'utm_source') ||
                    u(e[n], 'utm_medium') ||
                    u(e[n], 'utm_term') ||
                    u(e[n], 'utm_content') ||
                    u(e[n], 'gclid') ||
                    u(e[n], 'dclid') ||
                    u(e[n], 'gclsrc')) &&
                    r.push(e[n])
                0 < r.length &&
                  ((e = '#' + r.join('&')), t.set(Vt, t.get(Vt) + e))
              }
            }
          ;(di.prototype.get = function(t) {
            return this.b.get(t)
          }),
            (di.prototype.set = function(t, e) {
              this.b.set(t, e)
            })
          var mi = {
            pageview: [Ht],
            event: [Jt, Zt, Qt, te],
            social: [ee, ne, ie],
            timing: [ge, he, pe, de],
          }
          ;(di.prototype.send = function(t) {
            if (!(1 > arguments.length)) {
              if ('string' == typeof arguments[0])
                var e = arguments[0],
                  n = [].slice.call(arguments, 1)
              else (e = arguments[0] && arguments[0][Dt]), (n = arguments)
              e &&
                (((n = k(mi[e] || [], n))[Dt] = e),
                this.b.set(n, void 0, !0),
                this.filters.D(this.b),
                (this.b.data.m = {}))
            }
          }),
            (di.prototype.ma = function(t, e) {
              var n = this
              ji(t, n, e) ||
                (Ii(t, function() {
                  ji(t, n, e)
                }),
                Ci(String(n.get(qe)), t, void 0, e, !0))
            })
          var wi,
            yi,
            bi,
            _i,
            ki = function(t) {
              return 'prerender' != R.visibilityState && (t(), !0)
            },
            Oi = function(t) {
              if (!ki(t)) {
                i(16)
                var e = !1
                p(R, 'visibilitychange', function n() {
                  if (!e && ki(t)) {
                    e = !0
                    var i = n,
                      r = R
                    r.removeEventListener
                      ? r.removeEventListener('visibilitychange', i, !1)
                      : r.detachEvent && r.detachEvent('onvisibilitychange', i)
                  }
                })
              }
            },
            xi = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
            Ti = function(t) {
              if (o(t[0])) this.u = t[0]
              else {
                var e = xi.exec(t[0])
                if (
                  (null != e &&
                    4 == e.length &&
                    ((this.c = e[1] || 't0'),
                    (this.K = e[2] || ''),
                    (this.C = e[3]),
                    (this.a = [].slice.call(t, 1)),
                    this.K ||
                      ((this.A = 'create' == this.C),
                      (this.i = 'require' == this.C),
                      (this.g = 'provide' == this.C),
                      (this.ba = 'remove' == this.C)),
                    this.i &&
                      (3 <= this.a.length
                        ? ((this.X = this.a[1]), (this.W = this.a[2]))
                        : this.a[1] &&
                          (c(this.a[1])
                            ? (this.X = this.a[1])
                            : (this.W = this.a[1])))),
                  (e = t[1]),
                  (t = t[2]),
                  !this.C)
                )
                  throw 'abort'
                if (this.i && (!c(e) || '' == e)) throw 'abort'
                if (this.g && (!c(e) || '' == e || !o(t))) throw 'abort'
                if (Si(this.c) || Si(this.K)) throw 'abort'
                if (this.g && 't0' != this.c) throw 'abort'
              }
            }
          function Si(t) {
            return 0 <= t.indexOf('.') || 0 <= t.indexOf(':')
          }
          ;(wi = new O()),
            (bi = new O()),
            (_i = new O()),
            (yi = { ec: 45, ecommerce: 46, linkid: 47 })
          var ji = function(t, e, n) {
              e == $i || e.get(qe)
              var i = wi.get(t)
              return (
                !!o(i) &&
                ((e.plugins_ = e.plugins_ || new O()),
                !!e.plugins_.get(t) ||
                  (e.plugins_.set(t, new i(e, n || {})), !0))
              )
            },
            Ci = function(t, e, n, r, a) {
              if (!o(wi.get(e)) && !bi.get(e)) {
                if ((yi.hasOwnProperty(e) && i(yi[e]), ti.test(e))) {
                  if ((i(52), !(t = $i.j(t)))) return !0
                  ;(r = {
                    id: e,
                    B: (n = r || {}).dataLayer || 'dataLayer',
                    ia: !!t.get('anonymizeIp'),
                    sync: a,
                    G: !1,
                  }),
                    t.get('&gtm') == e && (r.G = !0)
                  var s = String(t.get('name'))
                  't0' != s && (r.target = s),
                    $(String(t.get('trackingId'))) ||
                      ((r.clientId = String(t.get(ze))),
                      (r.ka = Number(t.get(Be))),
                      (n = n.palindrome ? ni : ei),
                      (n = (n = R.cookie.replace(/^|(; +)/g, ';').match(n))
                        ? n
                            .sort()
                            .join('')
                            .substring(1)
                        : void 0),
                      (r.la = n),
                      (r.qa = y(t.b.get(Vt) || '', 'gclid'))),
                    (t = r.B),
                    (n = new Date().getTime()),
                    (I[t] = I[t] || []),
                    (n = { 'gtm.start': n }),
                    a || (n.event = 'gtm.js'),
                    I[t].push(n),
                    (n = (function(t) {
                      function e(t, e) {
                        e && (n += '&' + t + '=' + d(e))
                      }
                      var n =
                        'https://www.google-analytics.com/gtm/js?id=' + d(t.id)
                      return (
                        'dataLayer' != t.B && e('l', t.B),
                        e('t', t.target),
                        e('cid', t.clientId),
                        e('cidt', t.ka),
                        e('gac', t.la),
                        e('aip', t.ia),
                        t.sync && e('m', 'sync'),
                        e('cycle', t.G),
                        t.qa && e('gclid', t.qa),
                        ii.test(R.referrer) && e('cb', String(ht())),
                        n
                      )
                    })(r))
                }
                !n && yi.hasOwnProperty(e) ? (i(39), (n = e + '.js')) : i(43),
                  n &&
                    ((n && 0 <= n.indexOf('/')) ||
                      (n =
                        (At || 'https:' == R.location.protocol
                          ? 'https:'
                          : 'http:') +
                        '//www.google-analytics.com/plugins/ua/' +
                        n),
                    (t = (r = Ei(n)).protocol),
                    (n = R.location.protocol),
                    ('https:' == t ||
                      t == n ||
                      ('http:' == t && 'http:' == n)) &&
                      Ai(r) &&
                      (m(r.url, void 0, a), bi.set(e, !0)))
              }
            },
            Ii = function(t, e) {
              var n = _i.get(t) || []
              n.push(e), _i.set(t, n)
            },
            Ri = function(t, e) {
              wi.set(t, e), (e = _i.get(t) || [])
              for (var n = 0; n < e.length; n++) e[n]()
              _i.set(t, [])
            },
            Ai = function(t) {
              var e = Ei(R.location.href)
              return (
                !!u(t.url, 'https://www.google-analytics.com/gtm/js?id=') ||
                (!(
                  t.query ||
                  0 <= t.url.indexOf('?') ||
                  0 <= t.path.indexOf('://')
                ) &&
                  ((t.host == e.host && t.port == e.port) ||
                    ((e = 'http:' == t.protocol ? 80 : 443),
                    !(
                      'www.google-analytics.com' != t.host ||
                      (t.port || e) != e ||
                      !u(t.path, '/plugins/')
                    ))))
              )
            },
            Ei = function(t) {
              function e(t) {
                var e = (t.hostname || '').split(':')[0].toLowerCase(),
                  n = (t.protocol || '').toLowerCase()
                return (
                  (n =
                    1 * t.port ||
                    ('http:' == n ? 80 : 'https:' == n ? 443 : '')),
                  (t = t.pathname || ''),
                  u(t, '/') || (t = '/' + t),
                  [e, '' + n, t]
                )
              }
              var n = R.createElement('a')
              n.href = R.location.href
              var i = (n.protocol || '').toLowerCase(),
                r = e(n),
                a = n.search || '',
                o = i + '//' + r[0] + (r[1] ? ':' + r[1] : '')
              return (
                u(t, '//')
                  ? (t = i + t)
                  : u(t, '/')
                  ? (t = o + t)
                  : !t || u(t, '?')
                  ? (t = o + r[2] + (t || a))
                  : 0 > t.split('/')[0].indexOf(':') &&
                    (t =
                      o + r[2].substring(0, r[2].lastIndexOf('/')) + '/' + t),
                (n.href = t),
                (i = e(n)),
                {
                  protocol: (n.protocol || '').toLowerCase(),
                  host: i[0],
                  port: i[1],
                  path: i[2],
                  query: n.search || '',
                  url: t || '',
                }
              )
            },
            Ni = {
              ga: function() {
                Ni.f = []
              },
            }
          Ni.ga(),
            (Ni.D = function(t) {
              var e = Ni.J.apply(Ni, arguments)
              for (
                e = Ni.f.concat(e), Ni.f = [];
                0 < e.length && !Ni.v(e[0]) && (e.shift(), !(0 < Ni.f.length));

              );
              Ni.f = Ni.f.concat(e)
            }),
            (Ni.J = function(t) {
              for (var e = [], n = 0; n < arguments.length; n++)
                try {
                  var i = new Ti(arguments[n])
                  i.g
                    ? Ri(i.a[0], i.a[1])
                    : (i.i && (i.ha = Ci(i.c, i.a[0], i.X, i.W)), e.push(i))
                } catch (t) {}
              return e
            }),
            (Ni.v = function(t) {
              try {
                if (t.u) t.u.call(I, $i.j('t0'))
                else {
                  var e = t.c == Ct ? $i : $i.j(t.c)
                  if (t.A) {
                    if ('t0' == t.c && null === (e = $i.create.apply($i, t.a)))
                      return !0
                  } else if (t.ba) $i.remove(t.c)
                  else if (e)
                    if (t.i) {
                      if (
                        (t.ha && (t.ha = Ci(t.c, t.a[0], t.X, t.W)),
                        !ji(t.a[0], e, t.W))
                      )
                        return !0
                    } else if (t.K) {
                      var n = t.C,
                        i = t.a,
                        r = e.plugins_.get(t.K)
                      r[n].apply(r, i)
                    } else e[t.C].apply(e, t.a)
                }
              } catch (t) {}
            })
          var $i = function(t) {
            i(1), Ni.D.apply(Ni, [arguments])
          }
          ;($i.h = {}), ($i.P = []), ($i.L = 0), ($i.answer = 42)
          var Di = [We, Je, qe]
          ;($i.create = function(t) {
            var e = k(Di, [].slice.call(arguments))
            e[qe] || (e[qe] = 't0')
            var n = '' + e[qe]
            if ($i.h[n]) return $i.h[n]
            t: {
              if (e[gn]) {
                if ((i(67), e[rn] && 'cookie' != e[rn])) {
                  var r = !1
                  break t
                }
                if (void 0 !== C) e[ze] || (e[ze] = C)
                else {
                  e: {
                    r = String(e[Je] || b())
                    var a = String(e[Ze] || '/'),
                      o = D(String(e[Ye] || '_ga'))
                    if (!(r = $n(o, r, a)) || It.test(r)) r = !0
                    else if (0 == (r = D('AMP_TOKEN')).length) r = !0
                    else {
                      if (
                        1 == r.length &&
                        ('$RETRIEVING' == (r = decodeURIComponent(r[0])) ||
                          '$OPT_OUT' == r ||
                          '$ERROR' == r ||
                          '$NOT_FOUND' == r)
                      ) {
                        r = !0
                        break e
                      }
                      r = !1
                    }
                  }
                  if (
                    r &&
                    (function t(e, n) {
                      var r = D('AMP_TOKEN')
                      return 1 < r.length
                        ? (i(55), !1)
                        : '$OPT_OUT' == (r = decodeURIComponent(r[0] || '')) ||
                          '$ERROR' == r ||
                          $(n)
                        ? (i(62), !1)
                        : F.test(R.referrer) || '$NOT_FOUND' != r
                        ? void 0 !== C
                          ? (i(56),
                            A(function() {
                              e(C)
                            }, 0),
                            !0)
                          : T
                          ? (H.push(e), !0)
                          : '$RETRIEVING' == r
                          ? (i(57),
                            A(function() {
                              t(e, n)
                            }, 1e4),
                            !0)
                          : ((T = !0),
                            (r && '$' != r[0]) ||
                              (K('$RETRIEVING', 3e4),
                              setTimeout(B, 3e4),
                              (r = '')),
                            !!z(r, n) && (H.push(e), !0))
                        : (i(68), !1)
                    })(q, String(e[We]))
                  ) {
                    r = !0
                    break t
                  }
                }
              }
              r = !1
            }
            return r ? null : ((e = new di(e)), ($i.h[n] = e), $i.P.push(e), e)
          }),
            ($i.remove = function(t) {
              for (var e = 0; e < $i.P.length; e++)
                if ($i.P[e].get(qe) == t) {
                  $i.P.splice(e, 1), ($i.h[t] = null)
                  break
                }
            }),
            ($i.j = function(t) {
              return $i.h[t]
            }),
            ($i.getAll = function() {
              return $i.P.slice(0)
            }),
            ($i.N = function() {
              'ga' != Ct && i(49)
              var t = I[Ct]
              if (!t || 42 != t.answer) {
                ;($i.L = t && t.l), ($i.loaded = !0)
                var e = (I[Ct] = $i)
                if (
                  (kn('create', e, e.create),
                  kn('remove', e, e.remove),
                  kn('getByName', e, e.j, 5),
                  kn('getAll', e, e.getAll, 6),
                  kn('get', (e = di.prototype), e.get, 7),
                  kn('set', e, e.set, 4),
                  kn('send', e, e.send),
                  kn('requireSync', e, e.ma),
                  kn('get', (e = vt.prototype), e.get),
                  kn('set', e, e.set),
                  'https:' != R.location.protocol && !At)
                ) {
                  t: {
                    e = R.getElementsByTagName('script')
                    for (var n = 0; n < e.length && 100 > n; n++) {
                      var r = e[n].src
                      if (
                        r &&
                        0 ==
                          r.indexOf(
                            'https://www.google-analytics.com/analytics'
                          )
                      ) {
                        e = !0
                        break t
                      }
                    }
                    e = !1
                  }
                  e && (At = !0)
                }
                ;((I.gaplugins = I.gaplugins || {}).Linker = Xn),
                  (e = Xn.prototype),
                  Ri('linker', Xn),
                  kn('decorate', e, e.ca, 20),
                  kn('autoLink', e, e.S, 25),
                  Ri('displayfeatures', fi),
                  Ri('adfeatures', fi),
                  (t = t && t.q),
                  s(t) ? Ni.D.apply($i, t) : i(50)
              }
            }),
            ($i.da = function() {
              for (var t = $i.getAll(), e = 0; e < t.length; e++) t[e].get(qe)
            })
          var Mi = $i.N,
            Pi = I[Ct]
          function Li(t) {
            var e,
              n = 1
            if (t)
              for (n = 0, e = t.length - 1; 0 <= e; e--) {
                var i = t.charCodeAt(e)
                n =
                  0 !=
                  (i = 266338304 & (n = ((n << 6) & 268435455) + i + (i << 14)))
                    ? n ^ (i >> 21)
                    : n
              }
            return n
          }
          Pi && Pi.r ? Mi() : Oi(Mi),
            Oi(function() {
              Ni.D(['provide', 'render', h])
            })
        })(window)
      },
      {},
    ],
    17: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var r = (function() {
          return function(r, t) {
            if (Array.isArray(r)) return r
            if (Symbol.iterator in Object(r))
              return (function(r, t) {
                var e = [],
                  n = !0,
                  a = !1,
                  o = void 0
                try {
                  for (
                    var i, u = r[Symbol.iterator]();
                    !(n = (i = u.next()).done) &&
                    (e.push(i.value), !t || e.length !== t);
                    n = !0
                  );
                } catch (r) {
                  ;(a = !0), (o = r)
                } finally {
                  try {
                    !n && u.return && u.return()
                  } finally {
                    if (a) throw o
                  }
                }
                return e
              })(r, t)
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          }
        })()
        require('../lib/analytics.js')
        var t = 'UA-122302708-1'
        if (!t) throw new Error('No GAID set!')
        function e() {
          return window.ga.apply(window.ga, arguments)
        }
        ;(exports.default = e),
          Object.assign(e, {
            pageview: function() {
              var r = { hitType: 'pageview', page: location.pathname },
                t = window.location.href,
                a = n(t, ['url'])
              a !== t && (r.location = a), e('send', r)
            },
            event: function(r, t, n, a, o) {
              e('send', 'event', r, t, n, a, o)
            },
          })
        var n = function(t, e) {
          var n = e.filter(function(r) {
            return !/^[A-Za-z0-9_-]+$/.test(r)
          })
          if (n.length) {
            var a = new Error('removeParams bad args: ' + n.join(', '))
            throw ((a.name = 'InvalidKeysError'), a)
          }
          var o = t.split('?'),
            i = r(o, 3),
            u = i[0],
            l = i[1],
            w = i[2]
          if (l) {
            var c = l.split('#'),
              s = r(c, 2)
            ;(l = s[0]),
              (w = s[1]),
              e.forEach(function(r) {
                var t = new RegExp('(^|&)' + r + '(=[^&]+)?')
                ;(l = l.replace(t, '')).startsWith('&') && (l = l.substring(1))
              }),
              (t = u),
              l && (t += '?' + l),
              w && (t += '#' + w)
          }
          return t
        }
        ;(window.GoogleAnalyticsObject = 'ga'),
          window.ga ||
            (window.ga = function() {
              ;(window.ga.q = window.ga.q || []), window.ga.q.push(arguments)
            }),
          (window.ga.l = 1 * new Date()),
          e('create', t, 'auto'),
          e('set', 'checkProtocolTask', null)
      },
      { '../lib/analytics.js': 21 },
    ],
    3: [
      function(require, module, exports) {
        'use strict'
        var e,
          r = (function() {
            return function(e, r) {
              if (Array.isArray(e)) return e
              if (Symbol.iterator in Object(e))
                return (function(e, r) {
                  var t = [],
                    n = !0,
                    i = !1,
                    o = void 0
                  try {
                    for (
                      var a, u = e[Symbol.iterator]();
                      !(n = (a = u.next()).done) &&
                      (t.push(a.value), !r || t.length !== r);
                      n = !0
                    );
                  } catch (e) {
                    ;(i = !0), (o = e)
                  } finally {
                    try {
                      !n && u.return && u.return()
                    } finally {
                      if (i) throw o
                    }
                  }
                  return t
                })(e, r)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          t = require('../db'),
          n = require('../api'),
          i = R(n),
          o = require('../errors'),
          a = P(o),
          u = require('../events'),
          s = R(u),
          f = require('../fixlinks'),
          l = P(f),
          c = require('../filesystem'),
          d = P(c),
          m = require('../image-formats'),
          h = require('../invalidurls'),
          p = P(h),
          v = require('../stores/options'),
          w = P(v),
          g = require('../chrome.permissions'),
          _ = R(g),
          b = require('../reportbutton'),
          y = R(b),
          q = require('../promise'),
          k = require('../chrome.tabs'),
          x = R(k),
          C = require('../util'),
          T = P(C),
          E = require('./domwait'),
          S = require('../ga'),
          O = P(S)
        function P(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function R(e) {
          if (e && e.__esModule) return e
          var r = {}
          if (null != e)
            for (var t in e)
              Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
          return (r.default = e), r
        }
        ;(0, l.default)(),
          window.setTimeout(function() {
            O.default.pageview()
          }, 0)
        var F = null,
          N = T.default.$
        function A() {
          N.on(N('invalid-desc-a'), 'click', function(e) {
            e.preventDefault(), B()
          }),
            N.on(N('close'), 'click', function(e) {
              e.preventDefault(), window.close()
            }),
            N.findClass('fp-btn', N('frame-perms')).forEach(function(e) {
              var r = e.dataset.action
              N.on(e, 'click', function(e) {
                s.trigger('clicked', { action: r }),
                  N.hide('frame-perms'),
                  N.show('loading')
              })
            }),
            s.on('needFramePermsClick', function(e) {
              var t =
                  'iframe' === e.tagName
                    ? ['frame-perms-iframe', 'frame-perms-frame']
                    : ['frame-perms-frame', 'frame-perms-iframe'],
                n = r(t, 2),
                i = n[0],
                o = n[1]
              N.hide(o),
                N.show(i, 'inline'),
                N.hide('loading'),
                N.show('frame-perms')
              var a = document.querySelector('#frame-perms .button-primary')
              a && a.focus()
            })
          var n = 'chrome://extensions/?id=' + chrome.runtime.id
          N.findClass('ext-link', N('file-perms')).forEach(function(r) {
            N.on(r, 'click', function() {
              var r = { url: n }
              e && !e.incognito && (r.index = e.index + 1),
                chrome.tabs.create(r)
            })
          }),
            s.on('needFilePermsClick', function() {
              N.hide('loading'), N.show('file-perms')
              var e = document.querySelector('#file-perms .button-primary')
              e && e.focus()
            }),
            x
              .getCurrentTab()
              .then(function(r) {
                e = r
              })
              .then(function() {
                return w.default.load().then(function(e) {
                  F = e
                })
              })
              .then(function() {
                if (F.auto_dl2)
                  return _.contains(_.PERMISSIONS.DOWNLOADS).then(function(e) {
                    if (!e)
                      return (
                        (F.auto_dl2 = !1),
                        (F.auto_dl_was_disabled = !0),
                        w.default.remove('auto_dl2')
                      )
                  })
              })
              .then(function() {
                return D()
              })
              .then(function() {
                var e, r, t, n, i
                F.auto_dl2
                  ? (0, E.wait)().then(function() {
                      N.show('auto-dl')
                    })
                  : F.auto_dl_was_disabled &&
                    (0, E.wait)().then(function() {
                      N.show('auto-dl-was-disabled')
                    }),
                  (e = F),
                  (r = N.findClass(
                    'frame_persist-toggle',
                    N('frame-perms')
                  )[0]),
                  (t = r.getElementsByClassName('frame_persist-input')[0]),
                  (n = r.getElementsByClassName('frame_persist-text')[0]),
                  (i = w.default.getField('frame_persist')),
                  (t.checked = e.frame_persist),
                  (n.innerText = i.help),
                  N.on(t, 'change', function(e) {
                    var r = e.target.checked
                    w.default
                      .set('frame_persist', r)
                      .then(function() {
                        F.frame_persist = r
                      })
                      .catch(function(t) {
                        ;(e.target.checked = !r), L(t)
                      })
                  })
              })
              .then(function() {
                var r = e.url,
                  n = 'filesystem:' + chrome.extension.getURL('/persistent/')
                if (
                  r.startsWith(n) &&
                  ['.jpg', '.png'].some(function(e) {
                    return r.endsWith(e)
                  })
                )
                  return t.Capture.findSrc(r.split('/').pop())
              })
              .then(function(r) {
                if (r) return r
                var t = e.url,
                  n = (0, m.getImageFormat)(F.fmt)
                F.fmt_details = n
                var o = T.default.asFilename(t, n.ext)
                return i
                  .captureToFiles(
                    e,
                    o,
                    M,
                    function() {
                      return N.show('split-image')
                    },
                    F
                  )
                  .then(function(r) {
                    if (!r || !r.length) {
                      var t = new Error(
                        'No files passed to `displayCaptures` ' + r
                      )
                      throw ((t.name = 'NoFiles'), t)
                    }
                    return i.filesToRecord(e.url, F.fmt, r)
                  })
              })
              .then(function(e) {
                return (0, q.sleep)(F.auto_dl_was_disabled ? 2e3 : 0).then(
                  function() {
                    return e
                  }
                )
              })
              .then(function(r) {
                return F && F.auto_dl2
                  ? I(r.fullPaths)
                  : x.openInTabs(e, [r.displayURL])
              })
              .catch(function(e) {
                return L(e)
              })
        }
        function I(e) {
          return T.default.download(e).then(function(e) {
            var r = e.hasPerms,
              t = e.results,
              n = e.failCount
            e.successCount
            if (r) {
              if (n)
                throw t.find(function(e) {
                  return !1 === e.success
                }).error
              return (0, q.sleep)(2e3).then(function() {
                return window.close()
              })
            }
            var i = new Error('Does not have permission.')
            throw ((i.name = 'ChromePermissions'), i)
          })
        }
        function L(e) {
          var r = '[_errorHandler] '
          if (e) {
            var t = ['name', 'via', 'message']
              .map(function(r) {
                return e[r] ? r + ' = ' + e[r] : null
              })
              .filter(function(e) {
                return e
              })
              .join('\n')
            t && (r += '\n' + t + '\n')
          }
          console.error(r),
            e && e.stack && console.log(e.stack),
            (0, E.wait)(function() {
              return N.hidden('loading')
            })
              .then(function() {
                N.show('close')
                var r = H()
                if (
                  e &&
                  e.name === i.ERROR_TYPES.CHROME_TABS &&
                  ('executeScript' === e.via ||
                    ('captureVisibleTab' === e.via && p.default.isOwnUrl(r)))
                ) {
                  var t = p.default.getMatch(r),
                    n = N('invalid-desc-detail')
                  return (
                    (n.innerText = t
                      ? t.explanation
                      : n.getAttribute('data-default')),
                    j(e).then(function() {
                      t || B(), N.show('invalid')
                    })
                  )
                }
                if (!e || !a.default[e.name])
                  return D(e).then(function() {
                    N.show('uh-oh')
                  })
                var o = a.default[e.name]
                ;(N('generic-error-title').innerText = o.title),
                  (N('generic-error-body').innerText = o.body)
                var u = N('generic-error-buttons')
                ;(u.innerHTML = ''),
                  o.buttons &&
                    o.buttons().forEach(function(e) {
                      u.appendChild(e)
                    }),
                  N.show('generic-error')
              })
              .then(function() {
                return N.hide('loading')
              })
        }
        function M(e) {
          0 === e && N.show('loading')
          var r = parseInt(100 * e, 10)
          ;(N('bar').style.width = r + '%'),
            (N('dots').style.width = 100 - r + 5 + '%')
        }
        function D(e) {
          return U('report-link', e)
        }
        function j(e) {
          return U('invalid-link', e)
        }
        function U(e, r) {
          return y
            .getUrl(H(), r)
            .then(function(r) {
              return N(e).setAttribute('href', r), r
            })
            .catch(function(e) {
              return console.error(e)
            })
        }
        function B() {
          N('invalid').classList.add('show-desc')
        }
        function H() {
          return e ? e.url : window.location.href
        }
        window.addEventListener('load', A)
      },
      {
        '../db': 4,
        '../api': 5,
        '../errors': 6,
        '../events': 7,
        '../fixlinks': 8,
        '../filesystem': 9,
        '../image-formats': 10,
        '../invalidurls': 11,
        '../stores/options': 18,
        '../chrome.permissions': 12,
        '../reportbutton': 13,
        '../promise': 16,
        '../chrome.tabs': 14,
        '../util': 15,
        './domwait': 19,
        '../ga': 17,
      },
    ],
  },
  {},
  [3]
)
