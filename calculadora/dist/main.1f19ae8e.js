// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"operaciones.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.division = exports.multi = exports.resta = exports.suma = void 0;

var suma = function suma() {
  var v1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var v2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var Rsuma = v1 + v2;
  return Rsuma;
};

exports.suma = suma;

var resta = function resta() {
  var v1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var v2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return v1 - v2;
};

exports.resta = resta;

var multi = function multi() {
  var v1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var v2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var Rmulti = v1 * v2;
  return Rmulti;
};

exports.multi = multi;

var division = function division() {
  var v1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var v2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return v1 / v2;
};

exports.division = division;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _operaciones = require("./operaciones");

// variable que imprime el resultado y que hacen las operaciones basicas
// siempre debe ser un texto quiere decir que los numeros deben estar en comillas
var resultado = '0'; // variable que deben usar para cuando presionen una operacion

var valorTemporal = 0; // variable que deben usar para cuando presionen una operacion

var operacionSeleccionada = ''; // ---  NO TOCAR -- 

var pantalla = function pantalla() {
  return document.querySelector('.pantalla').innerHTML = "<span>".concat(resultado, "</span>");
};

var numeros = function numeros() {
  var response = '';

  for (var index = 0; index < 10; index++) {
    response += "\n      <button data-id=\"".concat(index, "\" class=\"numero\">").concat(index, "</button>\n    ");
  }

  response += "\n      <button data-id=\"clear\" class=\"numero\">C</button>\n    ";
  return response;
};

console.log(numeros());

var operaciones = function operaciones() {
  var response = '';
  var operacionesMat = [{
    id: 'suma',
    texto: '+'
  }, {
    id: 'resta',
    texto: '-'
  }, {
    id: 'multiplicacion',
    texto: 'x'
  }, {
    id: 'division',
    texto: '&divide;'
  }, {
    id: 'terminar',
    texto: '='
  }];

  for (var index = 0; index < operacionesMat.length; index++) {
    response += "\n      <button data-id=\"".concat(operacionesMat[index].id, "\" class=\"operacion\">").concat(operacionesMat[index].texto, "</button>\n    ");
  }

  return response;
};

pantalla();
document.querySelector('.numeros').innerHTML = numeros();
document.querySelector('.operaciones').innerHTML = operaciones(); // END ---  NO TOCAR --
// ejecutar operaciones

document.querySelector('.operaciones').addEventListener('click', function (event) {
  var operacion = event.target.getAttribute('data-id');

  if (operacion !== null) {
    console.log(operacion);

    if (operacion != 'terminar') {
      valorTemporal = resultado;
      resultado = '0';
    } else {
      if (operacionSeleccionada == 'suma') {
        resultado = "".concat((0, _operaciones.suma)(parseInt(valorTemporal), parseInt(resultado)));
      } else if (operacionSeleccionada == 'resta') {
        resultado = "".concat((0, _operaciones.resta)(parseInt(valorTemporal), parseInt(resultado)));
      } else if (operacionSeleccionada == 'multiplicacion') {
        resultado = "".concat((0, _operaciones.multi)(parseInt(valorTemporal), parseInt(resultado)));
      } else if (operacionSeleccionada == 'division') {
        resultado = "".concat((0, _operaciones.division)(parseInt(valorTemporal), parseInt(resultado)));
      }

      ;
    }

    ;
    operacionSeleccionada = operacion;
    pantalla();
  }

  ; // si la operación no es igual a terminar guardar en valor temporal lo que tenga resultado //
  // deben guardar la operacion en operacionSeleccionada
  // limpiar resultado significa dejarlo igual a 0
  // si operacion es igual a terminar
  // deben validar que operacion habian escogido antes con operacionSeleccionada
  // con base a eso es que van a llamar a su funcion dependiendo del caso
  // actualizar resultado con el valor que retorne su funcion
  // al final de todo volver a actualizar la pantalla
}); // cuando presionan un numero

document.querySelector('.numeros').addEventListener('click', function (event) {
  var numero = event.target.getAttribute('data-id') || 'clear';

  if (operacionSeleccionada == "terminar") {
    resultado = "0";
    operacionSeleccionada = '';
  }

  ;

  if (numero == 'clear') {
    resultado = '0';
    operacionSeleccionada = '';
  } else if (resultado == '0') {
    resultado = numero;
  } else if (resultado !== 0) {
    resultado += numero;
  }

  ;
  pantalla(); // si numero es igual a clear, deben dejar resultado en 0 y operacionSeleccionada en vacio;
  // si resultado es igual a 0, deben reemplazar el valor de resultado;
  // si resultado no es igual a 0, deben concatenar los numeros;
  // luego deben actualizar la pantalla
  // si operacion seleccionada es igual a resultado limpar la pantalla antes de ejecutar los numeros y la operacion seleccionada
});
},{"./operaciones":"operaciones.js"}],"../../../../../../../../nvm/v14.4.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52861" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../nvm/v14.4.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map