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
    3: [
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
    10: [
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
    4: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.sendMessage = void 0)
        var e = require('./chrome.util'),
          r = (0, e.genLastErrorFmt)('ChromeRuntimeError'),
          s = (exports.sendMessage = function(e) {
            return new Promise(function(s, t) {
              chrome.runtime.sendMessage(e, function(e) {
                var n = chrome.runtime.lastError
                return n ? t(r(n, 'sendMessage')) : s(e)
              })
            })
          })
      },
      { './chrome.util': 10 },
    ],
    5: [
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
    11: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var t = new Set(['iframe', 'frame']),
          e = (exports.isFrame = function(e) {
            return t.has(e.tagName.toLowerCase())
          }),
          o = (exports.computeOffsets = function(t, o) {
            o = 'boolean' == typeof o ? o : e(t)
            for (
              var i = t.getBoundingClientRect(),
                r = i.width,
                f = i.height,
                w = 0,
                a = 0,
                l = t;
              l;

            ) {
              ;(w += l.offsetLeft),
                l === document.body
                  ? (a += l.getBoundingClientRect().top + window.scrollY)
                  : (a += l.offsetTop)
              var p = n(l)
              p && ((w += p.m41), (a += p.m42)), (l = l.offsetParent)
            }
            var h = { left: w, top: a, width: r, height: f }
            if (o) {
              var s = d(t)
              ;(h.box = s),
                (h.left += s.left),
                (h.top += s.top),
                (h.width -= s.left + s.right),
                (h.height -= s.top + s.bottom)
            }
            return h
          }),
          i = (exports.isOnScreen = function(t) {
            return (
              0 != t.width &&
              0 != t.height &&
              t.left + t.width > 0 &&
              t.left < window.innerWidth &&
              t.top + t.height > 0 &&
              t.top < window.innerHeight &&
              'none' !== t.display &&
              'hidden' !== t.visibility &&
              0 !== t.opacity
            )
          }),
          n = function(t) {
            if (window.DOMMatrix || window.WebKitCSSMatrix) {
              var e = window.getComputedStyle(t),
                o = e.transform || e.webkitTransform
              return window.DOMMatrix
                ? new window.DOMMatrix(o)
                : new window.WebKitCSSMatrix(o)
            }
          },
          r = function(t) {
            var e = t.getBoundingClientRect(),
              o = e.top,
              i = e.left
            if ('fixed' !== window.getComputedStyle(t)) {
              for (var n = !1, r = t.parentElement; r; ) {
                if (
                  ((o += r.scrollTop),
                  (i += r.scrollLeft),
                  'fixed' === window.getComputedStyle(r).position)
                ) {
                  n = !0
                  break
                }
                r = r.parentElement
              }
              n ||
                ((o +=
                  void 0 === window.scrollY
                    ? window.pageYOffset
                    : window.scrollY),
                (i +=
                  void 0 === window.scrollX
                    ? window.pageXOffset
                    : window.scrollX))
            }
            return { top: o, left: i, width: e.width, height: e.height }
          },
          d = function(t) {
            var e = window.getComputedStyle(t)
            return {
              left: f(e, ['borderLeftWidth', 'paddingLeft']),
              right: f(e, ['borderRightWidth', 'paddingRight']),
              top: f(e, ['paddingTop', 'borderTopWidth']),
              bottom: f(e, ['paddingBottom', 'borderBottomWidth']),
            }
          },
          f = function(t, e) {
            return e.reduce(function(e, o) {
              return e + w(t[o])
            }, 0)
          },
          w = function(t) {
            var e = parseFloat(t)
            return isNaN(e) ? 0 : e
          }
      },
      {},
    ],
    9: [
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
          n = (exports.LOG_LEVELS = {
            ERROR: 40,
            WARN: 30,
            INFO: 20,
            DEBUG: 10,
            NOTSET: 0,
          }),
          t = n.INFO,
          r = (exports.getLogLevel = function() {
            return t
          }),
          e = (exports.setLogLevel = function(o) {
            return (t = o)
          }),
          u = function(o, r, e) {
            if (!(o < t)) {
              ;(e && console[e]) ||
                (e =
                  o <= n.DEBUG
                    ? 'log'
                    : o <= n.INFO
                    ? 'info'
                    : o <= n.WARN
                    ? 'warn'
                    : 'error')
              try {
                ;(console[e] || console.log).apply(console, r)
              } catch (o) {}
            }
          }
        ;(u.debug = function() {
          u(n.DEBUG, arguments)
        }),
          (u.group = function() {
            u(n.DEBUG, arguments, 'group')
          }),
          (u.groupCollapsed = function() {
            u(n.DEBUG, arguments, 'groupCollapsed')
          }),
          (u.groupEnd = function() {
            u(n.DEBUG, arguments, 'groupEnd')
          }),
          (u.info = function() {
            u(n.INFO, arguments)
          }),
          (u.warn = function() {
            u(n.WARN, arguments)
          }),
          (u.error = function() {
            u(n.ERROR, arguments)
          }),
          (exports.default = u)
        var c = (exports.groupCollapsedFn = function(o, n) {
            return p(o, n, !0)
          }),
          p = (exports.groupFn = function(o, n, t) {
            return function() {
              u[!0 === t ? 'groupCollapsed' : 'group'](o)
              try {
                var r = n.apply(this, arguments)
                if (f(r)) {
                  var e = !1
                  return r
                    .then(function(o) {
                      return (e = !0), u.groupEnd(), o
                    })
                    .catch(function(o) {
                      throw (e || ((e = !0), u.groupEnd()), o)
                    })
                }
                return u.groupEnd(), r
              } catch (o) {
                throw (u.groupEnd(), o)
              }
            }
          }),
          f = function(n) {
            return (
              null !== n &&
              'object' === (void 0 === n ? 'undefined' : o(n)) &&
              'function' == typeof n.then &&
              'function' == typeof n.catch
            )
          }
      },
      {},
    ],
    15: [
      function(require, module, exports) {
        var global =
          typeof global === 'object'
            ? global
            : typeof window === 'object'
            ? window
            : typeof self === 'object'
            ? self
            : this
        var e =
          'object' == typeof e
            ? e
            : 'object' == typeof window
            ? window
            : 'object' == typeof self
            ? self
            : this
        !(function(e, t) {
          'object' == typeof exports
            ? (module.exports = t(e))
            : 'function' == typeof define && define.amd
            ? define([], t.bind(e, e))
            : t(e)
        })(void 0 !== e ? e : this, function(e) {
          if (e.CSS && e.CSS.escape) return e.CSS.escape
          var t = function(e) {
            if (0 == arguments.length)
              throw new TypeError('`CSS.escape` requires an argument.')
            for (
              var t,
                o = String(e),
                r = o.length,
                n = -1,
                i = '',
                f = o.charCodeAt(0);
              ++n < r;

            )
              0 != (t = o.charCodeAt(n))
                ? (i +=
                    (t >= 1 && t <= 31) ||
                    127 == t ||
                    (0 == n && t >= 48 && t <= 57) ||
                    (1 == n && t >= 48 && t <= 57 && 45 == f)
                      ? '\\' + t.toString(16) + ' '
                      : (0 != n || 1 != r || 45 != t) &&
                        (t >= 128 ||
                          45 == t ||
                          95 == t ||
                          (t >= 48 && t <= 57) ||
                          (t >= 65 && t <= 90) ||
                          (t >= 97 && t <= 122))
                      ? o.charAt(n)
                      : '\\' + o.charAt(n))
                : (i += '�')
            return i
          }
          return e.CSS || (e.CSS = {}), (e.CSS.escape = t), t
        })
      },
      {},
    ],
    13: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n]
              ;(i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
          }
          return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
          }
        })()
        function t(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        var n = {
            isBfs: !1,
            autoAdd: !1,
            onlyElementNodes: !0,
            ignoreNodeNames: new Set([
              'SCRIPT',
              'HEAD',
              'STYLE',
              'LINK',
              'META',
            ]),
            ignoreHidden: !0,
          },
          i = (function() {
            function i(e, o) {
              t(this, i)
              ;(this.root = e || document.body || document.documentElement),
                (o = o || {})
              var r = Object.keys(o).filter(function(e) {
                return !(e in n)
              })
              if (r.length)
                throw new Error('Invalid SearchNodes keys: ' + r.join(', '))
              ;(o = Object.assign({}, n, o)),
                (this.isBfs = o.isBfs),
                (this.autoAdd = o.autoAdd),
                (this.onlyElementNodes = o.onlyElementNodes),
                (this.ignoreNodeNames = o.ignoreNodeNames),
                (this.ignoreHidden = o.ignoreHidden),
                (this.search = this.root ? [this.root] : [])
            }
            return (
              e(i, [
                {
                  key: 'hasNext',
                  value: function() {
                    return this.search.length > 0
                  },
                },
                {
                  key: 'next',
                  value: function() {
                    var e = this.isBfs ? this.search.shift() : this.search.pop()
                    return this.autoAdd && this.addAll(e.childNodes), e
                  },
                },
                {
                  key: 'addAll',
                  value: function(e) {
                    var t = this
                    return (
                      (e = Array.prototype.slice.call(e)),
                      (this.onlyElementNodes || this.ignoreHidden) &&
                        (e = e.filter(function(e) {
                          return e.nodeType === e.ELEMENT_NODE
                        })),
                      this.ignoreNodeNames &&
                        (e = e.filter(function(e) {
                          return !t.ignoreNodeNames.has(e.nodeName)
                        })),
                      this.ignoreHidden &&
                        (e = e.filter(function(e) {
                          return !t.isHidden(e)
                        })),
                      this.search.push.apply(this.search, e),
                      this
                    )
                  },
                },
                {
                  key: 'isHidden',
                  value: function(e) {
                    var t = getComputedStyle(e)
                    return (
                      'none' === t.display ||
                      'hidden' === t.visibility ||
                      ((0 === o(t.height) &&
                        'hidden' === t.overflowY &&
                        'static' !== t.position) ||
                        (0 === o(t.width) &&
                          'hidden' === t.overflowX &&
                          'static' !== t.position))
                    )
                  },
                },
              ]),
              i
            )
          })(),
          o = function(e) {
            return parseInt(e, 10)
          }
        exports.default = i
      },
      {},
    ],
    8: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.SCROLL_PAD_INNER = exports.SCROLL_PAD = void 0)
        var t = (function() {
          return function(t, e) {
            if (Array.isArray(t)) return t
            if (Symbol.iterator in Object(t))
              return (function(t, e) {
                var o = [],
                  i = !0,
                  n = !1,
                  a = void 0
                try {
                  for (
                    var r, d = t[Symbol.iterator]();
                    !(i = (r = d.next()).done) &&
                    (o.push(r.value), !e || o.length !== e);
                    i = !0
                  );
                } catch (t) {
                  ;(n = !0), (a = t)
                } finally {
                  try {
                    !i && d.return && d.return()
                  } finally {
                    if (n) throw a
                  }
                }
                return o
              })(t, e)
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          }
        })()
        require('css.escape')
        var e = require('../promise'),
          o = require('./offsets'),
          i = require('./log'),
          n = d(i),
          a = require('./search-nodes'),
          r = d(a)
        function d(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function l(t) {
          for (var e = [], o = Object.keys(t), i = 0; i < o.length; ++i)
            e.push([o[i], t[o[i]]])
          return e
        }
        var s = (exports.SCROLL_PAD = 200),
          u = (exports.SCROLL_PAD_INNER = 100),
          c = !1,
          f = new Set(['absolute', 'fixed', 'relative', 'sticky']),
          p = (function() {
            var i = [],
              a = [],
              d = {
                _stack: i,
                _fixedStack: a,
                init: function() {
                  d.add(document.documentElement, { scrollBehavior: 'auto' })
                  var t = document.body
                  t &&
                    'scroll' === window.getComputedStyle(t).overflowY &&
                    d.add(t, { overflowY: 'visible' }),
                    d._initHangingAbsolutes(),
                    d._initFixedPseudos(),
                    d.hideScrollbars(),
                    d.disableTransitions(),
                    d.hacks()
                },
                _add: function(t, e, o) {
                  if (t) {
                    var i = t.style.cssText
                    d._applyStyles(t, e),
                      o.push({ elt: t, before: i, after: t.style.cssText })
                  }
                },
                add: function(t, e) {
                  return d._add(t, e, i)
                },
                addFixed: function(t, e) {
                  return d._add(t, e, a)
                },
                _pop: function(t) {
                  var e = t.pop()
                  if (e)
                    switch (e.action) {
                      case 'new_elt':
                        e.elt.parentNode && e.elt.parentNode.removeChild(e.elt)
                        break
                      case 'removed_attr':
                        e.elt.setAttribute(e.attr, e.value)
                        break
                      case 'func':
                        e.undo()
                        break
                      default:
                        e.elt.style.cssText = e.before
                    }
                  return e
                },
                popAll: function() {
                  if (!c)
                    for (
                      n.default.debug('Styles popping stack', i.length);
                      i.length;

                    )
                      d._pop(i)
                },
                popAllFixed: function() {
                  if (!c) for (; a.length; ) d._pop(a)
                },
                _initHangingAbsolutes: function() {
                  var t = document.body
                  if (t && !d.isPositioned(window.getComputedStyle(t))) {
                    for (
                      var e = [], o = new r.default(document.body);
                      o.hasNext();

                    ) {
                      var i = o.next(),
                        a = window.getComputedStyle(i),
                        l = a.position
                      'absolute' === l
                        ? e.push({ elt: i, style: a })
                        : d.isPositioned(l) || o.addAll(i.childNodes)
                    }
                    var s = t.getBoundingClientRect(),
                      u = s.left + window.scrollX,
                      c = s.top + window.scrollY
                    e.forEach(function(t) {
                      var e = t.elt,
                        o = t.style,
                        i = o.width,
                        a = o.height,
                        r = d.pxToFloat(o.left),
                        l = d.pxToFloat(o.top),
                        s = {
                          width: i,
                          height: a,
                          left: r - u + 'px',
                          top: l - c + 'px',
                          right: 'auto',
                          bottom: 'auto',
                        }
                      n.default.debug('fix hanging abs', e, s), d.add(e, s)
                    })
                  }
                },
                isPositioned: function(t) {
                  return f.has(t)
                },
                _initFixedPseudos: function() {
                  if (document.body)
                    for (
                      var t = new r.default(document.body),
                        e = function() {
                          var e = t.next(),
                            o = e.getBoundingClientRect()
                          if (
                            o.width > 0.75 * window.innerWidth &&
                            o.height > 0.75 * window.innerHeight
                          ) {
                            var i = !1
                            ;['::before', '::after'].forEach(function(t) {
                              if (
                                'fixed' ===
                                window.getComputedStyle(e, t).position
                              ) {
                                ;(i = !0), e.id || (e.id = h.next())
                                var o = '#' + window.CSS.escape(e.id) + t,
                                  a = o + ' { position: absolute; }'
                                d.addStyleSheet(a),
                                  n.default.debug('fixed pseudo', o)
                              }
                            }),
                              i || t.addAll(e.childNodes)
                          }
                        };
                      t.hasNext();

                    )
                      e()
                },
                initFixed: function() {
                  var t =
                    document.body && window.getComputedStyle(document.body)
                  if (t && 'absolute' !== t.position) {
                    var e = { position: 'relative' }
                    'inline' === t.dislpay && (e.display = 'block')
                    var o = !1
                    if (
                      ('none' === t.maxWidth &&
                        ((e.minWidth = '100vw'), (o = p.isBoxSizingRisky(t))),
                      'none' === t.maxHeight &&
                        ((e.minHeight = '100vh'),
                        (o = o || p.isBoxSizingRisky(t, !0))),
                      '0px' !== t.marginTop)
                    ) {
                      var i = parseInt(t.paddingTop) + parseInt(t.marginTop)
                      ;(e.paddingTop = i + 'px'),
                        (e.marginTop = '0px'),
                        (o = !0)
                    }
                    if ('0px' !== t.marginBottom) {
                      var n =
                        parseInt(t.paddingBottom) + parseInt(t.marginBottom)
                      ;(e.paddingBottom = n + 'px'),
                        (e.marginBottom = '0px'),
                        (o = !0)
                    }
                    o && (e.boxSizing = 'border-box'), d.add(document.body, e)
                  }
                },
                updateFixed: function(i, a, r, s, u) {
                  n.default.groupCollapsed('Update Fixed')
                  var f = d._getFixedAndStickyElts(i, u),
                    p = f.fixed,
                    h = f.sticky,
                    g = f.fixedBg,
                    m = f.fixedHeader
                  return (
                    a ||
                      m.forEach(function(t) {
                        n.default.debug('hide fixed header', t),
                          c ||
                            d.addFixed(t, {
                              visibility: 'hidden',
                              overflow: 'hidden',
                            })
                      }),
                    p.forEach(function(e) {
                      n.default.debug('fixed -> absolute', e)
                      var i = window.getComputedStyle(e),
                        a = d.pxToInt(i.left),
                        u = d.pxToInt(i.right),
                        c = d.pxToInt(i.top),
                        f = d.pxToInt(i.bottom),
                        p = d.pxToInt(i.width),
                        h = d.pxToInt(i.height),
                        g = e.scrollHeight,
                        m = i.overflowY,
                        b = e.computedStyleMap ? e.computedStyleMap() : null,
                        x = {}
                      if (
                        ([
                          'left',
                          'right',
                          'top',
                          'bottom',
                          'width',
                          'height',
                        ].forEach(function(t) {
                          x[t] = b && 'auto' !== b.get(t).value
                        }),
                        d.addFixed(e, {
                          position: 'absolute',
                          transition: 'none',
                        }),
                        e.offsetParent)
                      ) {
                        var w = (0, o.computeOffsets)(e.offsetParent),
                          v = a - w.left,
                          y = u - (s - (w.left + w.width)),
                          S = c - w.top,
                          _ = f - (r - (w.top + w.height)),
                          k = l(x)
                            .filter(function(e) {
                              var o = t(e, 2)
                              o[0]
                              return o[1]
                            })
                            .map(function(e) {
                              var o = t(e, 2),
                                i = o[0]
                              o[1]
                              return i
                            })
                            .join(','),
                          T = ['left', 'top', 'width', 'height']
                            .map(function(t) {
                              return w[t]
                            })
                            .join(',')
                        n.default.groupCollapsed('Fixed attrs'),
                          n.default.debug(
                            '*  oldLeft=' +
                              a +
                              ' (' +
                              i.left +
                              ')\n*  oldRight=' +
                              u +
                              ' (' +
                              i.right +
                              ')\n*  oldTop=' +
                              c +
                              ' (' +
                              i.top +
                              ')\n*  oldBottom=' +
                              f +
                              ' (' +
                              i.bottom +
                              ')\n*  oldWidth=' +
                              p +
                              ', (' +
                              i.width +
                              ')\n*  oldHeight=' +
                              h +
                              ', (' +
                              i.height +
                              ')\n*  oldScrollHeight=' +
                              g +
                              '\n*  oldOverflowY=' +
                              m +
                              '\n*  specified?=' +
                              k +
                              '\n*  parOffset=' +
                              T +
                              '\n*  top=' +
                              S +
                              '\n*  bottom=' +
                              _ +
                              '\n*  left=' +
                              v +
                              '\n*  right=' +
                              y
                          ),
                          n.default.groupEnd()
                        var E = !1,
                          C = {}
                        if (
                          (!isNaN(v) && v <= 0
                            ? ((E = !0),
                              x.left || x.right
                                ? (x.left && (C.left = v + 'px'),
                                  x.right && (C.right = y + 'px'))
                                : (C.left = v + 'px'))
                            : x.right &&
                              !isNaN(y) &&
                              ((E = !0), (C.right = y + 'px')),
                          !isNaN(S) && S <= 0)
                        ) {
                          E = !0
                          var A = h
                          'scroll' === m &&
                            'auto' === m &&
                            (A = Math.max(A, g)),
                            (C.height = A + 'px'),
                            x.top || x.bottom
                              ? (x.top && x.bottom && delete C.height,
                                x.top && (C.top = S + 'px'),
                                x.bottom && (C.bottom = _ + 'px'))
                              : 0 === f &&
                                0 !==
                                  e.offsetParent.getBoundingClientRect().height
                              ? (C.bottom = '0px')
                              : ((C.top = S + 'px'), (C.bottom = 'auto'))
                        } else
                          x.bottom &&
                            !isNaN(_) &&
                            ((E = !0),
                            0 === f &&
                            0 !== e.offsetParent.getBoundingClientRect().height
                              ? (C.bottom = '0px')
                              : (C.bottom = _ + 'px'))
                        ;(C.left ? !C.right : C.right) &&
                          x.width &&
                          (C.width = p + 'px'),
                          E && (n.default.debug('set', C), d.addFixed(e, C))
                      } else n.default.warn('No offsetParent for', e)
                    }),
                    h.forEach(function(t) {
                      n.default.debug('sticky -> relative', t),
                        d.add(t, {
                          position: 'relative',
                          top: 'auto',
                          left: 'auto',
                          right: 'auto',
                          bottom: 'auto',
                        })
                    }),
                    g.forEach(function(t) {
                      n.default.debug('fixedBg -> scroll', t)
                      var i = window.getComputedStyle(t),
                        a = { backgroundAttachment: 'scroll' }
                      if ('cover' === i.backgroundSize) {
                        var r = (0, o.computeOffsets)(t)
                        r.top < 0 && (a.backgroundPositionY = -r.top + 'px'),
                          (a.backgroundSize = window.innerWidth + 'px'),
                          n.default.debug('...override bg size', t, a)
                        var l = i.backgroundImage.match(
                          /^url\(["']?(.+)["']\)$/
                        )
                        if (l) {
                          var s = l[1]
                          ;(0, e.loadImage)(s)
                            .then(function(e) {
                              var o = e.width,
                                i = e.height,
                                n = window.innerHeight,
                                a = window.innerWidth,
                                r = (a * i) / o,
                                l = void 0,
                                s = void 0
                              r >= n
                                ? ((l = a), (s = r))
                                : ((l = (n * o) / i), (s = n)),
                                d.add(t, {
                                  backgroundSize: l + 'px ' + s + 'px',
                                })
                            })
                            .catch(function(t) {
                              return n.default.error(t)
                            })
                        }
                      }
                      d.add(t, a)
                    }),
                    n.default.groupEnd(),
                    p.length + h.length
                  )
                },
                _getFixedAndStickyElts: function(t, e) {
                  var i = [],
                    a = [],
                    d = [],
                    l = { fixed: i, sticky: a, fixedBg: d, fixedHeader: [] },
                    s = t || document.body
                  if (!s) return l
                  for (
                    var u = new r.default(s, { autoAdd: !0 });
                    u.hasNext();

                  ) {
                    var c = u.next()
                    if (c !== s) {
                      var f = window.getComputedStyle(c),
                        p = f.position
                      if ('sticky' === p) a.push(c)
                      else if ('fixed' === p) {
                        var h = (0, o.computeOffsets)(c),
                          g = window.innerHeight - h.top - 20
                        if (h.top < 20 && h.height < g)
                          e && n.default.debug('found fixed header', c),
                            l.fixedHeader.push(c)
                        else if (
                          (h.top + h.height <= 0 && h.height > 0) ||
                          (h.left + h.width <= 0 && h.width > 0) ||
                          (h.top > window.innerHeight && h.height > 0) ||
                          (h.left > window.innerWidth && h.width > 0)
                        )
                          e &&
                            n.default.debug(
                              'skip fixed offscreen',
                              JSON.stringify(h),
                              c
                            )
                        else if (
                          h.height > window.innerHeight &&
                          h.width >= (2 * window.innerWidth) / 3
                        ) {
                          var m = h.height,
                            b = window.innerHeight
                          e && n.default.debug('skip too tall', c, m, b)
                        } else i.push(c)
                      }
                      'fixed' === f.backgroundAttachment && d.push(c)
                    }
                  }
                  return l
                },
                pxToInt: function(t) {
                  return parseInt(t, 10)
                },
                pxToFloat: function(t) {
                  return parseFloat(t)
                },
                _applyStyles: function(t, e) {
                  if (t) {
                    var o = t.style.cssText + '; '
                    for (var i in e) {
                      o += d._camelToDash(i) + ': ' + e[i] + ' !important; '
                    }
                    t.style.cssText = o
                  }
                },
                _camelToDash: function(t) {
                  return t.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
                },
                hideScrollbars: function() {
                  ;(d.isMobile() || d._isImage()) &&
                    d.add(document.documentElement, { overflow: 'hidden' }),
                    d._hideScrollbars(['html', 'body'])
                },
                isMobile: function() {
                  return d._isTouch()
                },
                _isTouch: function() {
                  try {
                    return document.createEvent('TouchEvent'), !0
                  } catch (t) {
                    return !1
                  }
                },
                _isImage: function() {
                  var t = document.contentType
                  return t && t.startsWith('image/')
                },
                _hideScrollbars: function(t) {
                  var e =
                    t
                      .map(function(t) {
                        return t + '::-webkit-scrollbar'
                      })
                      .join(', ') +
                    '{ width: 0 !important; height: 0 !important }'
                  d.addStyleSheet(e)
                },
                hideScrollbarsInner: function(t) {
                  if ((t.id || (t.id = h.next()), d._twitchHideScrollbars(t)))
                    n.default.debug('Hide scrollbars twitch')
                  else {
                    d._gmailHideScrollbars(e)
                    var e = '#' + window.CSS.escape(t.id)
                    d._hideScrollbars([e])
                    var o = ['overflow', 'overflowY', 'overflowX'],
                      i = {}
                    o.forEach(function(e) {
                      return (i[e] = t.style[e])
                    }),
                      (t.style.overflow = 'hidden')
                    t.offsetWidth
                    o.forEach(function(e) {
                      return (t.style[e] = i[e])
                    })
                  }
                },
                _twitchHideScrollbars: function(t) {
                  if (
                    t.classList &&
                    t.classList.contains('simplebar-scroll-content')
                  ) {
                    var e = g(t.parentNode.childNodes).find(function(t) {
                      return (
                        t.nodeType === t.ELEMENT_NODE &&
                        t.classList &&
                        t.classList.contains('simplebar-track') &&
                        t.classList.contains('vertical')
                      )
                    })
                    return d.add(e, { opacity: 0 }), !0
                  }
                  return !1
                },
                _gmailHideScrollbars: function(t) {
                  var e = [
                    '::-webkit-scrollbar-button { width: 0 !important; height: 0 !important; display: none !important; }',
                    '::-webkit-scrollbar-corner { background-color: transparent !important; border: 0 !important }',
                    '::-webkit-scrollbar-thumb { background-color: transparent !important; box-shadow: none !important }',
                  ]
                    .map(function(e) {
                      return '' + t + e
                    })
                    .join('\n')
                  d.addStyleSheet(e)
                },
                addStyleSheet: function(t) {
                  var e = document.createElement('style')
                  e.innerHTML = t
                  var o =
                    document.getElementsByTagName('head')[0] ||
                    document.getElementsByTagName('body')[0]
                  o && (o.appendChild(e), i.push({ elt: e, action: 'new_elt' }))
                },
                disableTransitions: function() {
                  d.addStyleSheet(
                    '* {\n          transition: none !important;\n          transition-delay: 0s !important;\n          animation-duration: 0s !important;\n          animation-delay: 0s !important;\n        }'
                  )
                  var t = g(document.querySelectorAll('[data-aos]'))
                  if (
                    (t.length &&
                      (n.default.debug('disable AOS'),
                      t.forEach(function(t) {
                        var e = t.getAttribute('data-aos')
                        t.removeAttribute('data-aos'),
                          i.push({
                            elt: t,
                            action: 'removed_attr',
                            attr: 'data-aos',
                            value: e,
                          })
                      })),
                    document.documentElement.classList.contains('skrollr'))
                  ) {
                    n.default.debug('disable Skrollr')
                    var e = document.body || document.head
                    if (e) {
                      var o = document.createElement('script')
                      o.innerHTML =
                        'skrollr.init().destroy(); throw new Error("haha")'
                      try {
                        e.appendChild(o)
                      } catch (t) {
                        n.default.error(t)
                      }
                    }
                  }
                  if (
                    (window.dispatchEvent(new CustomEvent('animateme:destroy')),
                    i.push({
                      action: 'func',
                      undo: function() {
                        window.dispatchEvent(
                          new CustomEvent('animateme:enable')
                        )
                      },
                    }),
                    document.querySelector(
                      'body > .Parallax-host-outer .Parallax-host'
                    ))
                  ) {
                    d.addStyleSheet(
                      '\n          .Parallax-item, .Parallax-item figure {\n            position: absolute !important;\n            transform: translate3d(0px, 0px, 0px) !important;\n          }'
                    )
                  }
                  var a =
                    'body.parallax-scrolling #parallax-images .image-container'
                  if (document.querySelector(a)) {
                    d.addStyleSheet(
                      'body.parallax-scrolling #parallax-images .image-container, body.parallax-scrolling #parallax-images .image-container img {\n              transform: translate3d(0px, 0px, 0px) !important;\n            }\n        '
                    )
                  }
                  var r = g(
                      document.querySelectorAll(
                        '[data-parallax="scroll"][data-image-src]'
                      )
                    ),
                    l = g(document.getElementsByClassName('parallax-mirror'))
                  if (r.length && r.length === l.length) {
                    d.addStyleSheet(
                      '\n          .parallax-mirror { display: none !important; }\n        '
                    ),
                      r.forEach(function(t) {
                        d.add(t, {
                          backgroundImage: 'url(' + t.dataset.imageSrc + ')',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        })
                      })
                  }
                },
                hacks: function() {
                  d._quoraHack(), d._adwordsStickyClassHack()
                },
                _quoraHack: function() {
                  var t = window.location.host
                  if ('quora.com' === t || t.endsWith('quora.com')) {
                    d.addStyleSheet(
                      '.Answer.ActionBar.sticky { position: static !important }'
                    )
                  }
                },
                _adwordsStickyClassHack: function() {
                  d.addStyleSheet(
                    '[stickyclass="sticky"], ess-particle-table [role="row"], [acxscrollhost] .header-sticky-container  { transform: translate(0px, 0px) !important }'
                  )
                },
                isBoxSizingRisky: function(t, e) {
                  var o = [
                    'paddingTop',
                    'paddingBottom',
                    'borderTopWidth',
                    'borderBottomWidth',
                  ]
                  !0 !== e &&
                    o.push(
                      'paddingRight',
                      'paddingLeft',
                      'borderRightWidth',
                      'borderRightWidth'
                    )
                  var i = o.some(function(e) {
                    return t[e] && '0px' !== t[e]
                  })
                  return 'content-box' === t.boxSizing && i
                },
              }
            return d
          })()
        exports.default = p
        var h = (function() {
            var t = 0
            return {
              next: function() {
                return '__FPSC_ID_' + ++t + '_' + new Date().getTime()
              },
            }
          })(),
          g = function(t) {
            return Array.prototype.slice.call(t)
          }
      },
      {
        'css.escape': 15,
        '../promise': 5,
        './offsets': 11,
        './log': 9,
        './search-nodes': 13,
      },
    ],
    14: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (exports.noIframes = function() {
          var e = /Chrome\/([0-9]+)/.exec(navigator.userAgent)
          return e && '49' === e[1]
        })
      },
      {},
    ],
    12: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('../sniff'),
          t = require('./offsets'),
          r = require('./log'),
          o = l(r),
          n = require('./search-nodes'),
          i = l(n)
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var d = (function() {
            var n = {
              empty: function() {
                return {}
              },
              find: (0, r.groupFn)('ScrollFinder.find', function(
                e,
                r,
                i,
                l,
                d
              ) {
                var a = n.empty()
                if (i > e + 15 || l > r + 15) {
                  var f = i + ' > ' + e + ' + 15 => ' + (i > e + 15),
                    u = l + ' > ' + r + ' + 15 => ' + (l > r + 15)
                  return (
                    o.default.debug('Skip ScrollFinder: ' + f + ' OR ' + u), a
                  )
                }
                if (!(d = d || document.body))
                  return (
                    o.default.debug('Skip ScrollFinder: no document.body'), a
                  )
                if (!(0, t.isFrame)(d)) {
                  var s = !0,
                    c = !s
                  'trello.com' === window.location.hostname &&
                    ((s = !s), (c = !c))
                  var h = n._findByDim(d, s),
                    p = n._findByDim(d, c),
                    m = [h, p].filter(function(e) {
                      return e && e !== document.body
                    })
                  if (1 === m.length) return m[0]
                  if (h || p) return h || p
                }
                return n._findFrame() || a
              }),
              _findByDim: function(e, r) {
                for (
                  var n = 0,
                    l = e,
                    d = null,
                    a = new i.default(e),
                    f = function() {
                      var e = !1,
                        t = a.next(),
                        o = t[r ? 'offsetHeight' : 'offsetWidth'],
                        i = t[r ? 'scrollHeight' : 'scrollWidth']
                      if (
                        i > o + 5 &&
                        o > 50 &&
                        i > n &&
                        t[r ? 'offsetWidth' : 'offsetHeight'] > 40
                      ) {
                        var f = window.getComputedStyle(t),
                          u = f[r ? 'overflowY' : 'overflowX'],
                          s = r
                            ? ['ps-active-y', 'ps--active-y']
                            : ['ps-active-x', 'ps--active-x'],
                          c =
                            ['ps', 'ps-container'].some(function(e) {
                              return t.classList.contains(e)
                            }) &&
                            s.some(function(e) {
                              return t.classList.contains(e)
                            })
                        'none' !== f.pointerEvents &&
                          (('hidden' !== u && 'visible' !== u) || c) &&
                          ((n = i), (l = t), (d = f), (e = !0))
                      }
                      e || a.addAll(t.childNodes)
                    };
                  a.hasNext();

                )
                  f()
                var u = (0, t.computeOffsets)(l),
                  s = u.height,
                  c = u.width,
                  h = l.scrollWidth,
                  p = l.scrollHeight
                if ('hidden' === (d && d[r ? 'overflowX' : 'overflowY']))
                  if (r) {
                    var m = parseFloat(d.paddingLeft) || 0,
                      g = parseFloat(d.paddingRight) || 0
                    ;(u.left += m), (c -= m + g), (h -= g + g)
                  } else {
                    var v = parseFloat(d.paddingTop) || 0,
                      w = parseFloat(d.paddingBottom) || 0
                    ;(u.top += v), (s -= v + w), (p -= w + w)
                  }
                return l === document.body
                  ? (o.default.debug(
                      'Skip ScrollFinder ' +
                        (r ? 'vertical' : 'horizontal') +
                        ': max_elt is body'
                    ),
                    null)
                  : e !== document.body &&
                    l === e &&
                    Math.abs(h - c) <= 2 &&
                    Math.abs(p - s) <= 2
                  ? (o.default.debug(
                      'Skip ScrollFinder ' +
                        (r ? 'vertical' : 'horizontal') +
                        ': max_elt is root and not scrollable'
                    ),
                    null)
                  : {
                      elt: l,
                      scrollHeight: Math.max(s, p),
                      scrollWidth: Math.max(c, h),
                      top: u.top,
                      bottom: u.top + s,
                      left: u.left,
                      right: u.left + c,
                      height: s,
                      width: c,
                      ready: !0,
                    }
              },
              _findFrame: function() {
                if ((0, e.noIframes)()) return null
                var r = a(document.querySelectorAll('iframe, frame')),
                  o = (window.innerWidth * window.innerHeight) / 4,
                  n = 0,
                  i = null
                return (
                  r.forEach(function(e) {
                    var r = (0, t.computeOffsets)(e),
                      l = r.width,
                      d = r.height,
                      a = l * d
                    if (
                      a >= o &&
                      a > n &&
                      r.left + 9 >= 0 &&
                      r.left + r.width <= window.innerWidth + 9 &&
                      r.top + 9 >= 0 &&
                      r.top + r.height <= window.innerHeight + 9
                    ) {
                      n = a
                      var f = r.left,
                        u = r.top
                      i = {
                        frame: e,
                        width: l,
                        height: d,
                        top: u,
                        left: f,
                        url: e.src,
                        tagName: e.nodeName.toLowerCase(),
                        bottom: u + d,
                        right: f + l,
                        ready: !1,
                      }
                    }
                  }),
                  null !== i ? i : void 0
                )
              },
              bodyBg: function() {
                for (
                  var e = [document.body, document.documentElement].filter(
                    function(e) {
                      return e
                    }
                  );
                  e.length;

                ) {
                  var t = e.shift(),
                    r = window.getComputedStyle(t).backgroundColor || ''
                  if (
                    'transparent' !== r &&
                    !r.match(/^rgba\(\d+,\s*\d+,\s*\d+,\s*0\)$/)
                  )
                    return r
                }
                return '#ffffff'
              },
            }
            return n
          })(),
          a = function(e) {
            return Array.prototype.slice.call(e)
          }
        exports.default = d
      },
      { '../sniff': 14, './offsets': 11, './log': 9, './search-nodes': 13 },
    ],
    6: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
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
                },
          e = (function() {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var o = e[i]
                ;(o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            return function(e, i, o) {
              return i && t(e.prototype, i), o && t(e, o), e
            }
          })(),
          i = require('./offsets'),
          o = require('./log'),
          r = d(o),
          h = require('./styles'),
          n = require('./scrollfinder'),
          l = d(n),
          a = require('./search-nodes'),
          s = d(a)
        function d(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function u(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var f = (function() {
          function t(e, i, o, r) {
            u(this, t),
              (this.docElt = document.documentElement),
              (this.body = document.body),
              (this.opts = e),
              (this.origBodyHeightZero = i),
              (this.scrollable = void 0),
              (this.origWindowX = o),
              (this.origWindowY = r),
              (this.dimensions = this.getDimensions())
          }
          return (
            e(t, [
              {
                key: 'calculate',
                value: function() {
                  void 0 === this.scrollable && this.getScrollable(),
                    this._setRegions(),
                    this._setPositions()
                },
              },
              {
                key: 'popNextPosition',
                value: function() {
                  var t = this.positions.shift()
                  return (this.lastPosition = t), t
                },
              },
              {
                key: 'addPageHeightChange',
                value: function(t, e) {
                  var i = this
                  ;(this.addedHeightChange = !0), this.positions.unshift(t)
                  var o = this.positions.filter(function(t) {
                      return t.isMain && t.scrollY > 0
                    }),
                    r = g(
                      o.map(function(t) {
                        return t.scrollY
                      })
                    )
                  r > 0 &&
                    (o.forEach(function(t) {
                      return (t.yAdjust = e)
                    }),
                    o
                      .filter(function(t) {
                        return t.scrollY === r
                      })
                      .forEach(function(t) {
                        var o = Object.assign({}, t)
                        ;(o.scrollY -= e), i.positions.push(o)
                      }))
                },
              },
              {
                key: 'getDimensions',
                value: function() {
                  var t = this.body,
                    e = this.docElt,
                    o = (this.origBodyHeightZero, window.innerWidth),
                    h = window.innerHeight,
                    n = t ? window.getComputedStyle(t) : {},
                    l = [
                      e.clientWidth,
                      e.offsetWidth,
                      'hidden' !== n.overflowX ? e.scrollWidth : 0,
                      t ? t.offsetWidth : 0,
                      t && 'hidden' !== n.overflowX ? t.scrollWidth : 0,
                    ],
                    a = [
                      e.clientHeight,
                      e.offsetHeight,
                      'hidden' !== n.overflowY ? e.scrollHeight : 0,
                    ],
                    s = [
                      t ? t.offsetHeight : 0,
                      t && 'hidden' !== n.overflowY ? t.scrollHeight : 0,
                    ],
                    d = g(a),
                    u = g(s)
                  r.default.debug(
                    'arrangements:\n\n*  widths: ' +
                      JSON.stringify(l) +
                      '\n*  docEHt: ' +
                      JSON.stringify(a) +
                      '\n*  bodyHt: ' +
                      JSON.stringify(s) +
                      '\n'
                  )
                  var f,
                    c,
                    p = void 0,
                    y = g(l),
                    w = g([d, u])
                  if (document.body) {
                    var m = document.getElementById('lightbox-wrap')
                    if (m) {
                      var b = (0, i.computeOffsets)(m),
                        v = window.getComputedStyle(m)
                      if (
                        'fixed' === v.position &&
                        ((f = v.zIndex),
                        (c = parseInt(f, 10)),
                        (isNaN(c) ? 0 : c) >= 1e3) &&
                        (0, i.isOnScreen)(b)
                      ) {
                        ;[b.left, b.top, o - b.width, h - b.height].every(
                          function(t) {
                            return Math.abs(t) <= 2
                          }
                        ) &&
                          (r.default.debug(
                            'OVERRIDE DIMS:',
                            b,
                            'zIndex=' + v.zIndex,
                            m
                          ),
                          (p = m),
                          (y = o),
                          (w = h))
                      }
                    }
                  }
                  var x = {
                    windowWidth: o,
                    windowHeight: h,
                    bodyMaxHeight: u,
                    docEltMaxHeight: d,
                    fullWidth: y,
                    fullHeight: w,
                    nonadjustedFullHeight: w,
                    nonadjustedFullWidth: y,
                    root: p,
                  }
                  return r.default.debug('DIMENSIONS:', x), x
                },
              },
              {
                key: 'ignoreScrollable',
                value: function() {
                  this.scrollable = l.default.empty()
                },
              },
              {
                key: 'getScrollable',
                value: function() {
                  var t = this.dimensions,
                    e = l.default.find(
                      t.windowWidth,
                      t.windowHeight,
                      t.fullWidth,
                      t.fullHeight,
                      t.root
                    )
                  return (this.scrollable = e), e
                },
              },
              {
                key: 'addFrameResponse',
                value: function(t) {
                  if (!this.scrollable) {
                    var e = new Error(
                      'No scrollable set inside addFrameResponse'
                    )
                    throw ((e.name = 'AddFrameResponseError'), e)
                  }
                  if (t) {
                    var i = ['width', 'height'].filter(function(e) {
                      return void 0 === t[e]
                    })
                    if (i.length) {
                      var o = new Error(
                        'Bad attrs inside frameResponse: ' + i.join(', ')
                      )
                      throw ((o.name = 'AddFrameResponseError'), o)
                    }
                    ;(this.scrollable.scrollWidth = t.width),
                      (this.scrollable.scrollHeight = t.height),
                      (this.scrollable.ready = !0)
                  }
                },
              },
              {
                key: '_setRegions',
                value: function() {
                  var t = [],
                    e = [],
                    i = this.scrollable,
                    o = this.dimensions,
                    h = o.fullWidth,
                    n = o.fullHeight,
                    a = window,
                    s = this.dimensions,
                    d = s.bodyMaxHeight,
                    u = s.docEltMaxHeight
                  if (
                    (d - 20 > u &&
                      (r.default.debug('Scroll via body: ' + d + ' vs ' + u),
                      (a = this.body)),
                    i.ready)
                  ) {
                    var f = i.bottom < n,
                      g = i.right < h,
                      y = void 0,
                      w = void 0,
                      m = void 0,
                      b = {
                        page: {
                          isInner: !0,
                          elt: i.elt,
                          eltHeight: i.height,
                          eltWidth: i.width,
                          eltOffsetLeft: i.left,
                          eltOffsetTop: i.top,
                          top: 0,
                          left: 0,
                          right: i.scrollWidth,
                          bottom: i.scrollHeight,
                        },
                        capture: {
                          x: i.left,
                          y: i.top,
                          width: i.scrollWidth,
                          height: i.scrollHeight,
                        },
                      }
                    i.frame && (b.page.isFrame = !0),
                      f &&
                        g &&
                        t.push({
                          page: {
                            elt: a,
                            top: i.bottom,
                            left: i.right,
                            right: h,
                            bottom: n,
                            isMain: !0,
                          },
                          capture: {
                            delay: 0,
                            x: i.right + (i.scrollWidth - i.width),
                            y: i.bottom + (i.scrollHeight - i.height),
                            width: h - i.right,
                            height: n - i.bottom,
                          },
                        }),
                      f &&
                        ((y = {
                          page: {
                            elt: a,
                            top: i.bottom,
                            left: 0,
                            right: i.right,
                            bottom: n,
                            isMain: !0,
                          },
                          capture: {
                            delay: 0,
                            x: 0,
                            y: i.bottom + (i.scrollHeight - i.height),
                            width: i.right,
                            height: n - i.bottom,
                          },
                        }),
                        t.push(y),
                        ((w = {
                          x: y.capture.x + y.capture.width,
                          y: y.capture.y,
                          height: y.capture.height,
                        }).width = b.capture.width - i.width),
                        (m = {
                          x: b.capture.x,
                          y: w.y,
                          height: w.height,
                          width: i.width,
                        }),
                        e.push({ fill: w, sample: m })),
                      g &&
                        ((y = {
                          page: {
                            elt: a,
                            top: 0,
                            left: i.right,
                            right: h,
                            bottom: i.bottom,
                            isMain: !0,
                          },
                          capture: {
                            delay: 0,
                            x: i.right + (i.scrollWidth - i.width),
                            y: 0,
                            width: h - i.right,
                            height: i.bottom,
                          },
                        }),
                        t.push(y),
                        ((w = {
                          x: y.capture.x,
                          y: y.capture.y + y.capture.height,
                          width: y.capture.width,
                        }).height = b.capture.y + b.capture.height - w.y),
                        (m = {
                          x: w.x,
                          y: b.capture.y,
                          width: w.width,
                          height: y.page.bottom - b.capture.y,
                        }),
                        e.push({ fill: w, sample: m })),
                      (y = {
                        page: {
                          elt: a,
                          top: 0,
                          left: 0,
                          right: i.right,
                          bottom: i.bottom,
                          isMain: !0,
                        },
                        capture: {
                          delay: 0,
                          x: 0,
                          y: 0,
                          width: i.right,
                          height: i.bottom,
                        },
                      }),
                      t.push(y),
                      ((w = {
                        x: 0,
                        y: y.capture.y + y.capture.height,
                        width: b.capture.x,
                      }).height = b.capture.y + b.capture.height - w.y),
                      (m = {
                        x: w.x,
                        y: b.capture.y,
                        width: w.width,
                        height: y.page.bottom - b.capture.y,
                      }),
                      e.push({ fill: w, sample: m }),
                      ((w = { x: y.capture.x + y.capture.width, y: 0 }).height =
                        b.capture.y - w.y),
                      (w.width = b.capture.width - i.width),
                      (m = {
                        x: b.capture.x,
                        y: w.y,
                        width: i.width,
                        height: w.height,
                      }),
                      e.push({ fill: w, sample: m }),
                      t.push(b),
                      (this.dimensions.fullWidth += Math.max(
                        0,
                        b.page.right - b.page.eltWidth
                      )),
                      (this.dimensions.fullHeight += Math.max(
                        0,
                        b.page.bottom - b.page.eltHeight
                      ))
                  } else
                    t.push({
                      page: {
                        elt: a,
                        top: 0,
                        left: 0,
                        right: h,
                        bottom: n,
                        isMain: !0,
                      },
                      capture: { x: 0, y: 0, width: h, height: n },
                    })
                  ;(this.regions = t), (this.bgRegions = e)
                  var v = l.default.bodyBg()
                  ;(this.canvasBg = v),
                    r.default.debug('REGIONS:', t),
                    c(t),
                    p(e)
                },
              },
              {
                key: '_setPositions',
                value: function() {
                  var t = this.dimensions,
                    e = t.windowWidth,
                    i = t.windowHeight,
                    o = t.fullWidth,
                    n = (t.fullHeight, [])
                  this.regions.forEach(function(t) {
                    if (t.page.isFrame) n.push({ isFrame: !0 })
                    else {
                      var l = t.page,
                        a = l.isInner ? h.SCROLL_PAD_INNER : h.SCROLL_PAD,
                        s = {
                          x: (l.eltOffsetLeft || 0) + l.left,
                          y: (l.eltOffsetTop || 0) + l.top,
                          width: l.eltWidth || Math.min(e, l.right - l.left),
                          height: l.eltHeight || Math.min(i, l.bottom - l.top),
                        }
                      if (0 !== s.width && 0 !== s.height) {
                        var d = Object.assign({}, s)
                        ;(d.y += a), (d.height -= a)
                        var u = Object.assign({}, t.capture)
                        ;(u.y += a), (u.height -= a)
                        var f = l.eltHeight || i,
                          g = l.eltWidth || e,
                          c = f - (f > a ? a : 0),
                          p = g
                        window.devicePixelRatio < 1
                          ? (c -= Math.ceil(1 / window.devicePixelRatio))
                          : (c -= Math.ceil(window.devicePixelRatio))
                        for (var y = 0; y < l.bottom; ) {
                          for (var w = 0 === y, m = l.left; m < o; ) {
                            var b = {
                              scrollX: m,
                              scrollY: y,
                              clip: w ? s : d,
                              capture: w ? t.capture : u,
                            }
                            t.page.elt && (b.elt = t.page.elt),
                              (b.isMain = t.page.isMain || !1),
                              w && (b.isTopOfElt = w),
                              n.push(b),
                              (m += p)
                          }
                          if (y + f >= l.bottom) break
                          y += c
                        }
                      } else r.default.warn('clip has zero area', t, s)
                    }
                  }),
                    r.default.debug('POSITIONS:', n.slice()),
                    (this.positions = n),
                    (this.numPositions = n.length)
                },
              },
            ]),
            t
          )
        })()
        function g(t) {
          return Math.max.apply(
            Math,
            t.filter(function(t) {
              return 'number' == typeof t
            })
          )
        }
        function c(t) {
          var e = {
              page: { top: 1, left: 1, right: 1, bottom: 1 },
              capture: { x: 1, y: 1, width: 1, height: 1 },
            },
            i = { eltHeight: 1, eltWidth: 1, eltOffsetTop: 1, eltOffsetLeft: 1 }
          if (
            !(
              0 ===
              t.filter(function(t, o) {
                var h = !1
                if (!y(t, e)) {
                  h = !0
                  var n = JSON.stringify(t)
                  r.default.error('Bad shape for region ' + o + ': ' + n)
                }
                if (t.page && t.page.isInner && !y(t.page, i)) {
                  h = !0
                  var l = JSON.stringify(t.page)
                  r.default.error(
                    'Bad capture element shape for region ' + o + ': ' + l
                  )
                }
                return h
              }).length
            )
          )
            throw new Error('Bad regions setup!')
        }
        function p(t) {
          var e = { x: 1, y: 1, width: 1, height: 1 }
          if (
            !(
              0 ===
              t.filter(function(t) {
                ;['sample', 'fill'].filter(function(i) {
                  return t[i]
                    ? !y(t[i], e) &&
                        (r.default.error(
                          'Bad bgRegion shape ' + JSON.stringify(t[i])
                        ),
                        !0)
                    : (r.default.error(
                        'Missing ' + i + ' element on bgRegion!'
                      ),
                      !0)
                }).length
              }).length
            )
          )
            throw new Error('Bad bgRegions setup!')
        }
        exports.default = f
        var y = function e(i, o) {
          var r = void 0 === i ? 'undefined' : t(i)
          return (
            r === (void 0 === o ? 'undefined' : t(o)) &&
            ('object' !== r ||
              0 ===
                Object.keys(o).filter(function(t) {
                  return !0 !== e(i[t], o[t])
                }).length)
          )
        }
      },
      {
        './offsets': 11,
        './log': 9,
        './styles': 8,
        './scrollfinder': 12,
        './search-nodes': 13,
      },
    ],
    7: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('./log'),
          t = a(e),
          r = require('../messages'),
          i = a(r),
          u = require('../chrome.runtime')
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var d = function(e) {
          var r = e.scrollable,
            a = window.innerWidth,
            d = {
              msg: i.default.captureFrame,
              windowWidth: a,
              url: r.url,
              tagName: r.tagName,
              top: r.top,
              left: r.left,
              width: r.width,
              height: r.height,
            }
          return (
            t.default.debug('[frame.sendMessage]', d),
            (0, u.sendMessage)(d).then(function(r) {
              return (
                t.default.debug('[frame.sendMessage] response', r),
                !r.skip && r.width && r.height
                  ? { width: r.width, height: r.height }
                  : void e.ignoreScrollable()
              )
            })
          )
        }
        exports.default = d
      },
      { './log': 9, '../messages': 3, '../chrome.runtime': 4 },
    ],
    1: [
      function(require, module, exports) {
        'use strict'
        var e = require('../messages'),
          n = f(e),
          t = require('../chrome.runtime'),
          r = require('../promise'),
          o = require('./arrangements'),
          i = f(o),
          s = require('./frame'),
          l = f(s),
          a = require('./styles'),
          u = f(a),
          d = require('./log'),
          c = f(d)
        function f(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var g = !1,
          m = !0,
          w = !0
        g && (0, d.setLogLevel)(d.LOG_LEVELS.DEBUG)
        var p = 150
        function h() {
          window._screenCapturePreviousListener &&
            chrome.runtime.onMessage.removeListener(
              window._screenCapturePreviousListener
            ),
            chrome.runtime.onMessage.addListener(v),
            (window._screenCapturePreviousListener = v)
        }
        function v(n, t, r) {
          if ('scrollPage' === n.msg) {
            try {
              b(r, n.canvasId, n.opts)
            } catch (e) {
              C(e)
            }
            return !0
          }
          'logMessage' === n.msg
            ? c.default.info('[POPUP LOG]', n.data)
            : (0, e.isValidMessage)(n.msg)
            ? c.default.error(
                'Unknown message received from background: ' + n.msg
              )
            : c.default.info('Ignoring message sent by self: ' + n.msg)
        }
        function b(e, n, t) {
          c.default.debug('\n### Initiate: ' + window.location.href + '\n')
          var r = document.body,
            o = window.scrollX,
            s = window.scrollY,
            a = (r && 0 === r.offsetHeight) || !1
          u.default.init(), (m || t.fixed_elts) && u.default.initFixed()
          var d = new i.default(t, a, o, s),
            f = d.getScrollable(),
            g = !!f.frame
          c.default.debug('SCROLLABLE:', 'isFrame=' + g, f),
            Promise.resolve()
              .then(function() {
                return f.frame && 0 === n ? (0, l.default)(d) : void 0
              })
              .then(function(e) {
                d.addFrameResponse(e),
                  d.calculate(),
                  f.elt && u.default.hideScrollbarsInner(f.elt),
                  y(d)
              })
              .then(function() {
                return P(d, n)
              })
              .then(function() {
                return c.default.debug('capture response', n)
              })
              .then(function() {
                return e()
              })
              .catch(function(e) {
                c.default.error(e), C(e)
              })
        }
        function y(e) {
          if (e.length) {
            var n = e.positions.reduce(function(e, n) {
                return n.scrollY > e.scrollY ? n : e
              }),
              t = M(n.elt, n.scrollX, n.scrollY)
            c.default.debug('warmup page:', t), M(n.elt, 0, 0)
          }
        }
        function P(e, n) {
          return e.positions.length
            ? L(e, n).then(function(t) {
                return t ? P(e, n) : x(e)
              })
            : (x(e), Promise.resolve(!0))
        }
        function L(e, o) {
          var i = e.positions.length === e.numPositions,
            s = e.lastPosition,
            l = e.popNextPosition(),
            a = l.scrollX,
            d = l.scrollY,
            f = l.yAdjust || 0,
            g = {
              msg: n.default.capture,
              canvasId: o,
              complete: (e.numPositions - e.positions.length) / e.numPositions,
              canvasBg: e.canvasBg,
              bgRegions: e.bgRegions,
              windowWidth: e.dimensions.windowWidth,
              totalWidth: e.dimensions.fullWidth,
              totalHeight: e.dimensions.fullHeight,
              devicePixelRatio: window.devicePixelRatio,
            },
            w = function(n) {
              return (0, r.timeoutWrap)(n, 1e4, 'page.sendMessage', function() {
                c.default.warn('Cleanup timeout triggered'), x(e)
              })
            }
          if (l.isFrame)
            return (
              (g.isFrame = !0),
              w((0, t.sendMessage)(g)).then(function(e) {
                return !!e
              })
            )
          if (!l.elt) {
            c.default.error('Missing next.elt!', l)
            var h = new Error('Missing next.elt! ' + l)
            return (h.name = 'ArrangementsError'), Promise.reject(h)
          }
          var v = M(l.elt, a, d + f)
          if (
            (Object.assign(g, {
              x: v.x,
              y: v.y - f,
              clip: l.clip,
              capture: l.capture,
            }),
            !e.addedHeightChange && l.isMain && s && 0 === s.scrollY && d > 0)
          ) {
            var b = e.getDimensions(),
              y = Math.ceil(b.fullHeight - e.dimensions.fullHeight)
            if (y < 0)
              return (
                c.default.debug('Height change: ' + y),
                e.addPageHeightChange(l, y),
                L(e, o)
              )
          }
          var P = 20
          return (
            i && u.default.isMobile() && (P = 500),
            (0, r.sleep)(P)
              .then(function() {
                ;(m || opts.fixed_elts) &&
                  (u.default.updateFixed(
                    e.scrollable.elt,
                    l.isTopOfElt,
                    e.dimensions.nonadjustedFullHeight,
                    e.dimensions.nonadjustedFullWidth,
                    i
                  ) &&
                    ((e.origWindowX = window.scrollX),
                    (e.origWindowY = window.scrollY)))
              })
              .then(function() {
                var e = void 0 === l.capture.delay ? p : l.capture.delay
                return (0, r.sleep)(e)
              })
              .then(function() {
                return w((0, t.sendMessage)(g))
              })
              .then(function(e) {
                return (
                  c.default.debug('sendMessage.callback', !!e),
                  u.default.popAllFixed(),
                  !!e
                )
              })
          )
        }
        function x(e) {
          u.default.popAll(),
            u.default.popAllFixed(),
            window.scrollTo(e.origWindowX, e.origWindowY)
        }
        function M(e, n, t) {
          if (e === document.body) {
            var r = E(window),
              o = M(window, n, t)
            if (r.y !== o.y || r.x !== o.x || M.windowWorkedHACK)
              return (M.windowWorkedHACK = !0), o
          }
          if (
            (c.default.debug(
              'scroll via ' + W(e) + ' to (' + n + ', ' + t + ')'
            ),
            e.scrollTo && 'function' == typeof e.scrollTo
              ? e.scrollTo(n, t)
              : ((e.scrollLeft = n), (e.scrollTop = t)),
            'dispatchEvent' in e && 'CustomEvent' in window)
          )
            try {
              e.dispatchEvent(new CustomEvent('scroll'))
            } catch (e) {
              c.default.warn('Error triggering custom scroll event', e)
            }
          var i = E(e)
          return c.default.debug('result ' + JSON.stringify(i)), i
        }
        function E(e) {
          return {
            x: void 0 !== e.scrollX ? e.scrollX : e.scrollLeft,
            y: void 0 !== e.scrollY ? e.scrollY : e.scrollTop,
          }
        }
        function C(e) {
          var t = {
            msg: n.default.captureError,
            name: e ? e.name : 'unknown',
            message: e ? e.message : 'unknown',
            stack: e ? e.stack : 'unknown',
          }
          try {
            console.error(JSON.stringify(t))
          } catch (e) {
            console.error(t)
          }
          chrome.runtime.sendMessage(t, function() {})
        }
        L = (0, d.groupFn)('Do capture step', L)
        var W = function(e) {
          if (e === window) return 'window'
          if (document.body && e === document.body) return 'body'
          var n = e.nodeName.toLowerCase()
          return (
            e.id
              ? (n += '#' + e.id)
              : e.className && (n += '.' + e.className.split(' ').join('.')),
            n
          )
        }
        h()
      },
      {
        '../messages': 3,
        '../chrome.runtime': 4,
        '../promise': 5,
        './arrangements': 6,
        './frame': 7,
        './styles': 8,
        './log': 9,
      },
    ],
  },
  {},
  [1]
)
