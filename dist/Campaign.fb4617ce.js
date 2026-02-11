// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"R6PRf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _scrollReveal = require("./scripts/scrollReveal");
var _scrollRevealDefault = parcelHelpers.interopDefault(_scrollReveal);
var _tiltAnimation = require("./scripts/tiltAnimation");
var _tiltAnimationDefault = parcelHelpers.interopDefault(_tiltAnimation);
var _scrollRevealConfig = require("./data/scrollRevealConfig");
var _dropdown = require("./scripts/dropdown");
(0, _scrollRevealDefault.default)((0, _scrollRevealConfig.targetElements), (0, _scrollRevealConfig.defaultProps));
(0, _tiltAnimationDefault.default)();

},{"./scripts/scrollReveal":"5vqgi","./scripts/tiltAnimation":"hGiAl","./data/scrollRevealConfig":"hRyON","./scripts/dropdown":"cTXiF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5vqgi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initScrollReveal = (targetElements, defaultProps)=>{
    if (typeof ScrollReveal === 'undefined') {
        console.warn('ScrollReveal is not loaded');
        return;
    }
    const sr = ScrollReveal({
        origin: defaultProps.origin,
        distance: defaultProps.distance,
        duration: defaultProps.duration,
        delay: defaultProps.delay,
        rotate: defaultProps.rotate,
        opacity: defaultProps.opacity,
        scale: defaultProps.scale,
        easing: defaultProps.easing,
        mobile: defaultProps.mobile,
        reset: defaultProps.reset,
        useDelay: defaultProps.useDelay,
        viewFactor: defaultProps.viewFactor,
        viewOffset: defaultProps.viewOffset
    });
    targetElements.forEach((element)=>{
        sr.reveal(element, defaultProps);
    });
};
exports.default = initScrollReveal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hDUPi":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGiAl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initTiltEffect = ()=>{
    if (typeof VanillaTilt === 'undefined') {
        console.warn('VanillaTilt is not loaded');
        return;
    }
    const tiltElements = document.querySelectorAll('.priority-card, .project-card');
    tiltElements.forEach((element)=>{
        VanillaTilt.init(element, {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.2
        });
    });
};
exports.default = initTiltEffect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hRyON":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "targetElements", ()=>targetElements);
parcelHelpers.export(exports, "defaultProps", ()=>defaultProps);
const targetElements = [
    '.hero-section',
    '.about-section',
    '.priorities-section',
    '.priority-card',
    '.projects-section'
];
const defaultProps = {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 100,
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.6, 0, 0.2, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cTXiF":[function(require,module,exports,__globalThis) {
// Enhanced dropdown functionality for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach((toggle)=>{
        const dropdown = toggle.nextElementSibling;
        if (!dropdown) return;
        // Desktop: Show on hover
        if (window.innerWidth > 991) {
            toggle.addEventListener('mouseenter', function() {
                $(this).dropdown('show');
            });
            const dropdownMenu = $(dropdown);
            dropdownMenu.on('mouseenter', function() {
                $(toggle).dropdown('show');
            });
            dropdownMenu.on('mouseleave', function() {
                $(toggle).dropdown('hide');
            });
            toggle.addEventListener('mouseleave', function(e) {
                if (!dropdown.contains(e.relatedTarget)) $(this).dropdown('hide');
            });
        }
        // Keyboard navigation
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                $(this).dropdown('toggle');
            } else if (e.key === 'Escape') {
                $(this).dropdown('hide');
                this.focus();
            }
        });
        // Handle dropdown item keyboard navigation
        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach((item, index)=>{
            item.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const next = items[index + 1] || items[0];
                    next.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prev = items[index - 1] || items[items.length - 1];
                    prev.focus();
                } else if (e.key === 'Escape') {
                    $(toggle).dropdown('hide');
                    toggle.focus();
                }
            });
        });
    });
});

},{}]},["R6PRf"], "R6PRf", "parcelRequired90b", {})

