require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/ 	
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "3f1ded61f9f3de7f2e15"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(13)(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/env.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });


// Grab from env vars if they are set
var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    API_URL = _process$env.API_URL,
    ROOT_URL = _process$env.ROOT_URL,
    USE_MOCK_API = _process$env.USE_MOCK_API,
    SECURE_COOKIE = _process$env.SECURE_COOKIE,
    SHOW_ERRORS = _process$env.SHOW_ERRORS;

// Set defaults

var env = {

  // Since NODE_ENV is automatically used by many plugins, we can't ensure it
  // will produce dev/prod parity by itself. Consequently, we need to use
  // separate ENVs for apps.
  NODE_ENV: NODE_ENV || 'production',

  // App settings
  API_URL: API_URL || 'https://safe-coast-13609.herokuapp.com',
  ROOT_URL: ROOT_URL || 'http://localhost:3000',
  USE_MOCK_API: USE_MOCK_API === 'true' || false,
  SECURE_COOKIE: SECURE_COOKIE === 'true' || false,
  SHOW_ERRORS: SHOW_ERRORS === 'true' || true

};

var isBrowser = function isBrowser() {

  return Boolean(typeof window !== 'undefined' && window.document);
};

var getEnv = function getEnv() {

  if (NODE_ENV === 'test') return env;

  if (isBrowser()) {

    return window.__ENV__;
  }

  return env;
};

var dynamicEnv = getEnv();

/* harmony default export */ __webpack_exports__["default"] = (dynamicEnv);

/***/ }),

/***/ "./config/muiTheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_variables__ = __webpack_require__("./config/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_variables___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_config_variables__);



// http://www.material-ui.com/#/customization/themes
var getMuiThemeConfig = function getMuiThemeConfig(userAgent) {

  return __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme___default.a({
    fontFamily: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.fontFamily,
    palette: {
      primary1Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme,
      primary2Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorThemeSecondary,
      primary3Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorThemeTertiary,
      accent1Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorBlue,
      accent2Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayLight,
      accent3Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      textColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorDark,
      secondaryTextColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme,
      alternateTextColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorWhite,
      canvasColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorWhite,
      borderColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      disabledColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      pickerHeaderColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme,
      clockCircleColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      shadowColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorDark
    },
    spacing: {
      iconSize: 24,
      desktopGutter: 24,
      desktopGutterMore: 32,
      desktopGutterLess: 16,
      desktopGutterMini: 8,
      desktopKeylineIncrement: 64,
      desktopDropDownMenuItemHeight: 32,
      desktopDropDownMenuFontSize: 15,
      desktopDrawerMenuItemHeight: 48,
      desktopSubheaderHeight: 48,
      desktopToolbarHeight: 56
    },
    datePicker: {
      selectColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme
    },
    snackbar: {
      textColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorWhite,
      backgroundColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorDark,
      actionColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorBlue
    }
  }, {
    userAgent: userAgent
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getMuiThemeConfig);

/***/ }),

/***/ "./config/variables.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Global CSS variables passed via precss > postcss-custom-properties
// Also used throughout JS files in the site
// https://github.com/postcss/postcss-custom-properties#variables

var variables = {

  appTitle: 'CitrusMobile',
  appDescription: 'Citrus Mobile is an app for home automation.',
  appIcon: '/static/images/logo.png',
  appLogo: '/static/images/logo@2x.png',
  appLogoWidth: '128',
  appLogoHeight: '128',

  baseRemSize: '16', // CAUTION: Think twice before changing!
  borderRadius: '3px',

  colorDark: '#404041',
  colorDarkFaded: 'RGBA(64, 64, 65, 0.5)',
  colorTheme: '#0277BD',
  colorThemeFaded: 'RGBA(0, 51, 160, 0.5)',
  colorThemeSecondary: '#82E5D2',
  colorThemeTertiary: '#FF3857',
  colorGrayDark: '#898989',
  colorGray: '#C4C4C4',
  colorGrayLight: '#E6EAE6',
  colorWhite: '#ffffff',
  colorWhiteFaded: 'rgba(255, 255, 255, 0.5)',
  colorBlue: '#64daff', // cartoonblue
  colorGreen: '#84c500', // green
  colorRed: '#d32626', // brick
  colorFacebookBlue: '#335092', // facebook blue
  colorTitleBlue: '#2d7aac', // strongblue
  colorTitleGreen: '#3b9737', // mediumgreen
  colorWarmGray: '#898989',

  fontFamily: 'MyApp, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
  fontWeight: 300,

  navLogoTopPadding: '6rem',
  navLogoTopPaddingSm: '4rem',

  screenLgMax: '1199px',
  screenLgMaxHeight: '800px',
  screenLgMin: '1200px',
  screenMdMax: '1023px',
  screenMdMin: '1024px',
  screenSmMax: '767px',
  screenSmMin: '768px',
  screenXsMax: '320px',
  screenXsMin: '321px',

  zModal: 50,
  zModalBackdrop: 40,

  // Standard sizes based on REMs
  s1: '.25rem',
  s2: '.5rem',
  s3: '1rem',
  s4: '2rem',
  s5: '4rem',
  s6: '8rem',
  s7: '16rem'

};

module.exports = variables;

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	if(unacceptedModules.length > 0) {
		log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			log("info", "[HMR]  - " + moduleId);
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/***/ (function(module, exports) {

var logLevel = "info";

module.exports = function(level, msg) {
	if(logLevel === "info" && level === "info")
		return console.log(msg);
	if(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning")
		return console.warn(msg);
	if(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error")
		return console.error(msg);
};

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?500":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if(true) {
	var hotPollInterval = +(__resourceQuery.substr(1)) || (10 * 60 * 1000);
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if(module.hot.status() === "idle") {
			module.hot.check(true).then(function(updatedModules) {
				if(!updatedModules) {
					if(fromUpdate) log("info", "[HMR] Update applied.");
					return;
				}
				__webpack_require__("./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
				checkForUpdate(true);
			}).catch(function(err) {
				var status = module.hot.status();
				if(["abort", "fail"].indexOf(status) >= 0) {
					log("warning", "[HMR] Cannot apply update.");
					log("warning", "[HMR] " + err.stack || err.message);
					log("warning", "[HMR] You need to restart the application!");
				} else {
					log("warning", "[HMR] Update failed: " + err.stack || err.message);
				}
			});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}

/* WEBPACK VAR INJECTION */}.call(exports, "?500"))

/***/ }),

/***/ "./server/handlers/html.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_boom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_boom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_boom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_lib_createMemoryHistory__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_lib_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_lib_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_server_utils__ = __webpack_require__("./server/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_redux_store__ = __webpack_require__("./src/redux/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_config_env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_styles_MuiThemeProvider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_config_muiTheme__ = __webpack_require__("./config/muiTheme.js");















// Material-UI



// Default render options for react templates
// 'renderToStaticMarkup' omits react data properties
// 'renderToString' is used for re-hydrating on client-side
var defaultRenderOptions = {
  runtimeOptions: {
    docType: '<!DOCTYPE html>',
    renderMethod: 'renderToString'
  }
};

var routedHtml = function routedHtml(request, reply) {

  if (true) {

    module.hot.accept(["./src/routes.js", "./src/redux/store.js", "./config/env.js", "./config/variables.js"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_10_src_routes__ = __webpack_require__("./src/routes.js"); /* harmony import */ __WEBPACK_IMPORTED_MODULE_12_src_redux_store__ = __webpack_require__("./src/redux/store.js"); /* harmony import */ __WEBPACK_IMPORTED_MODULE_13_config_env__ = __webpack_require__("./config/env.js"); (function () {})(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  }

  // Paths relative to inside build/ only in prod
  var assets = __WEBPACK_IMPORTED_MODULE_11_server_utils__["a" /* getAssets */]();
  var cssPath = './public/styles.css';
  var cssFile = __WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__dirname, cssPath);
  var css = '';

  try {

    css = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(cssFile, 'utf-8');
    request.log(['info', 'css'], css.length);
  } catch (error) {

    request.log(['error', 'css'], error);
  }

  request.log(['info'], request.url.href);

  var memoryHistory = __WEBPACK_IMPORTED_MODULE_8_react_router_lib_createMemoryHistory___default.a(request.url.href);

  // Inject server request info
  var _request = { userAgent: request.headers['user-agent'] };
  request.log(['info', 'user-agent'], _request.userAgent);

  // Pass initial state to store along with server ENV vars
  var store = __WEBPACK_IMPORTED_MODULE_12_src_redux_store__["default"]({
    env: __WEBPACK_IMPORTED_MODULE_13_config_env__["default"],
    request: _request
  }, memoryHistory);

  var history = __WEBPACK_IMPORTED_MODULE_9_react_router_redux__["syncHistoryWithStore"](memoryHistory, store);

  var muiTheme = __WEBPACK_IMPORTED_MODULE_15_config_muiTheme__["a" /* default */](_request.userAgent);

  // Let react-router match the raw URL to generate the
  // RouterContext here on the server
  __WEBPACK_IMPORTED_MODULE_7_react_router__["match"]({
    routes: __WEBPACK_IMPORTED_MODULE_10_src_routes__["default"](),
    history: history,
    location: request.url.href
  }, function (error, redirectLocation, renderProps) {

    if (error) {

      request.log(['error', 'react-router'], error);
      return reply(__WEBPACK_IMPORTED_MODULE_0_boom___default.a.serverTimeout(error));
    } else if (redirectLocation) {

      return reply.redirect(redirectLocation.pathname + redirectLocation.search).temporary();
    } else if (renderProps) {

      // Get rendered router context
      var children = __WEBPACK_IMPORTED_MODULE_4_react_dom_server__["renderToString"](__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_react_redux__["Provider"],
        { store: store },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_14_material_ui_styles_MuiThemeProvider___default.a,
          { muiTheme: muiTheme },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["RouterContext"], renderProps)
        )
      ));

      // Get resulting store state
      var preloadedState = store.getState();

      // Get resulting head info
      var head = __WEBPACK_IMPORTED_MODULE_5_react_helmet___default.a.rewind();

      // Inject the RouterContext into the props sent to the layout
      var htmlProps = {
        assets: assets,
        children: children,
        css: css,
        head: head,
        preloadedState: preloadedState

        // Render the layout with props
      };return request.render('Html', htmlProps, defaultRenderOptions, function (errorLayout, output) {

        if (errorLayout) {

          request.log(['error', 'view'], errorLayout);
          return reply(__WEBPACK_IMPORTED_MODULE_0_boom___default.a.serverTimeout(errorLayout));
        }

        return reply(output);
      });
    }

    // If react-router couldn't match anything and threw no error
    return reply(__WEBPACK_IMPORTED_MODULE_0_boom___default.a.notFound());
  });
};

/* harmony default export */ __webpack_exports__["a"] = (routedHtml);

/***/ }),

/***/ "./server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hapi__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hapi_react_views__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hapi_react_views___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hapi_react_views__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_good__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_good___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_good__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inert__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_inert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vision__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vision___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vision__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_server_routes__ = __webpack_require__("./server/routes/index.js");








var ENV = process.env.NODE_ENV;

var server = new __WEBPACK_IMPORTED_MODULE_1_hapi___default.a.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 8000,
  routes: {
    cors: true,
    security: true
  }
});

// Register Hapi plugins
var plugins = [{
  register: __WEBPACK_IMPORTED_MODULE_4_inert___default.a
}, {
  register: __WEBPACK_IMPORTED_MODULE_5_vision___default.a
}, {
  register: __WEBPACK_IMPORTED_MODULE_3_good___default.a,
  options: {
    ops: {
      interval: 10000
    },
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          // ops: '*',
          log: '*',
          request: '*',
          response: '*',
          error: '*'
        }]
      }, {
        module: 'good-console',
        args: [{
          format: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'
        }]
      }, 'stdout']
    }
  }
}];

function startServer(done) {

  return server.register(plugins, function (errorRegister) {

    if (errorRegister) return server.log(['error'], errorRegister);

    server.views({
      engines: {
        js: __WEBPACK_IMPORTED_MODULE_2_hapi_react_views___default.a
      },
      // relative to output file in build/ directory
      relativeTo: __dirname,
      // path: 'components',
      path: 'views',
      compileOptions: {
        // layout: 'Html.js',
        // layoutPath: Path.resolve(__dirname, 'layouts'),
        renderMethod: 'renderToString'
      }
    });

    server.route(__WEBPACK_IMPORTED_MODULE_6_server_routes__["a" /* default */]);

    return server.start(function () {

      if (ENV) {

        server.log(['info'], 'NODE_ENV: ' + ENV);
      }
      server.log(['info'], 'Server running at: ' + server.info.uri);

      if (done) {

        done();
      }
      return server;
    });
  });
}

startServer();

/* harmony default export */ __webpack_exports__["default"] = (startServer);

/***/ }),

/***/ "./server/routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_server_handlers_html__ = __webpack_require__("./server/handlers/html.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static__ = __webpack_require__("./server/routes/static.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sw_cache__ = __webpack_require__("./server/routes/sw-cache.js");




/* harmony default export */ __webpack_exports__["a"] = ([].concat(__WEBPACK_IMPORTED_MODULE_1__static__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__sw_cache__["a" /* default */], [
// Catch-all for react-router
{
  method: 'GET',
  path: '/{param*}',
  handler: __WEBPACK_IMPORTED_MODULE_0_server_handlers_html__["a" /* default */]
}]));

/***/ }),

/***/ "./server/routes/static.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  method: 'GET',
  path: '/static/{param*}',
  handler: {
    directory: {
      path: 'build/public',
      lookupCompressed: true
    }
  }
}]);

/***/ }),

/***/ "./server/routes/sw-cache.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
// Service workers and app cache
{
  method: 'GET',
  path: '/sw.js',
  handler: {
    file: 'build/public/sw.js'
  }
}, {
  method: 'GET',
  path: '/appcache/{param*}',
  handler: {
    directory: {
      path: 'build/public/appcache'
    }
  }
}]);

/***/ }),

/***/ "./server/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAssets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debug__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);

/* eslint-disable import/prefer-default-export */




var log = __WEBPACK_IMPORTED_MODULE_0_debug___default.a('citrus:server:utils');

function _getAssets() {

  log('Reading assets.json from filesystem');
  var assetsFile = __WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__dirname, '../build/assets.json');
  try {

    return JSON.parse(__WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(assetsFile, 'utf-8'));
  } catch (error) {

    log('Error:', error);
    var emptyAssets = {
      vendor: {
        js: ''
      },
      bundle: {
        js: '',
        css: ''
      }
    };
    return emptyAssets;
  }
}

// Cached for production
var Assets = _getAssets();

/**
 * Returns the parsed contents of assets.json
 *
 * @public
 * @returns {object} In development, reads and parses assets.json on every call.
 * In production, reads and parses assets.json on start-up and returns from
 * memory.
 */
function getAssets() {

  if (process.env.NODE_ENV === 'production') {

    return Assets;
  }

  return _getAssets();
}

/***/ }),

/***/ "./src/components/App.index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("./src/components/App.js");



function mapStateToProps(state) {
  var ROOT_URL = state.env.ROOT_URL;


  return {
    ROOT_URL: ROOT_URL
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"](mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]));

/***/ }),

/***/ "./src/components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_shared_LoadingIndicator_LoadingIndicator_index__ = __webpack_require__("./src/components/shared/LoadingIndicator/LoadingIndicator.index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_shared_ErrorMessage_ErrorMessage_index__ = __webpack_require__("./src/components/shared/ErrorMessage/ErrorMessage.index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config_variables__ = __webpack_require__("./config/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config_variables___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_config_variables__);







var App = function App(props) {
  var appDescription = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appDescription,
      appIcon = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appIcon,
      appLogo = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appLogo,
      appTitle = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appTitle,
      appLogoWidth = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appLogoWidth,
      appLogoHeight = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appLogoHeight,
      colorTheme = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.colorTheme;
  var ROOT_URL = props.ROOT_URL;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'application' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
      htmlAttributes: { lang: 'en' },
      defaultTitle: appTitle,
      titleTemplate: appTitle + ' - %s',
      meta: [{ name: 'theme-color', content: colorTheme }, { name: 'msapplication-TileColor', content: colorTheme }, { name: 'msapplication-TileImage', content: '' + ROOT_URL + appLogo }, { property: 'og:title', content: appTitle }, { property: 'og:image', content: '' + ROOT_URL + appLogo }, { property: 'og:image:width', content: appLogoWidth }, { property: 'og:image:height', content: appLogoHeight }, { property: 'og:url', content: ROOT_URL }, { property: 'og:description', content: appDescription }, { name: 'description', content: appDescription }],
      link: [{ rel: 'shortcut icon', href: appIcon }, { rel: 'apple-touch-icon', href: appIcon }]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_shared_LoadingIndicator_LoadingIndicator_index__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_shared_ErrorMessage_ErrorMessage_index__["a" /* default */], null),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/components/DeviceControls/DeviceControls.index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_selectors_deviceById__ = __webpack_require__("./src/selectors/deviceById.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device__ = __webpack_require__("./src/redux/modules/device.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DeviceControls__ = __webpack_require__("./src/components/DeviceControls/DeviceControls.js");






function mapStateToProps(state, ownProps) {

  return {
    device: __WEBPACK_IMPORTED_MODULE_2_src_selectors_deviceById__["a" /* default */](state, ownProps.params.deviceId) || {},
    devices: state.device
  };
}

function mapDispatchToProps(dispatch) {

  return {
    fetchDevices: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device__["e" /* fetchDevices */], dispatch),
    editDevices: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device__["d" /* editDevices */], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"](mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__DeviceControls__["a" /* default */]));

/***/ }),

/***/ "./src/components/DeviceControls/DeviceControls.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css__ = __webpack_require__("./src/components/DeviceControls/DeviceControls.style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var DeviceControls = function (_Component) {
  _inherits(DeviceControls, _Component);

  function DeviceControls(props) {
    _classCallCheck(this, DeviceControls);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.showDeviceControls = _this.showDeviceControls.bind(_this);
    _this.onChange = __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default.a(_this.onChange.bind(_this), 500);

    return _this;
  }

  DeviceControls.prototype.componentDidMount = function componentDidMount() {

    this.props.fetchDevices();
  };

  DeviceControls.prototype.onChange = function onChange(type, index, value) {
    var _props = this.props,
        editDevices = _props.editDevices,
        device = _props.device;


    var edited = _extends({}, device, {
      type: _extends({}, device.type, {
        controls: [].concat(device.type.controls)
      })

    });
    var control = _extends({}, device.type.controls[index], {
      value: value
    });

    edited.type.controls.splice(index, 1, control);
    editDevices(edited);
  };

  DeviceControls.prototype.showDeviceControls = function showDeviceControls() {
    var _this2 = this;

    var _props$device$type = this.props.device.type,
        type = _props$device$type === undefined ? {} : _props$device$type;
    var _type$controls = type.controls,
        controls = _type$controls === undefined ? [] : _type$controls;


    return controls.map(function (item, index) {
      var name = item.name,
          value = item.value;

      var itemType = item.type;
      var control = null;

      switch (itemType) {
        case 'button':
          {

            control = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui__["Toggle"], {
              name: 'value',
              value: value,
              onToggle: function onToggle(evt, val) {

                _this2.onChange('button', index, val);
              },
              style: { width: '60%', marginTop: '5px' }
            });
            break;
          }
        case 'slider':
          {

            control = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui__["Slider"], {
              name: 'value',
              value: value,
              defaultValue: value,
              format: null,
              min: 0,
              max: 100,
              step: 1,
              onChange: function onChange(evt, val) {

                _this2.onChange('slider', index, val);
              },
              style: { width: '60%', margin: '5px', marginTop: 0 }
            });
            break;
          }

        case 'select':
          {

            control = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_material_ui__["SelectField"],
              {
                name: 'value',
                value: value,
                hintText: name,
                onChange: function onChange(evt, val) {

                  _this2.onChange('select', index, val);
                },
                style: { width: '60%', margin: '5px', height: '45px' }
              },
              item.options.map(function (option, i) {

                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem___default.a, {
                  key: i,
                  value: option,
                  primaryText: option
                });
              })
            );
            break;
          }

        default:
          return null;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: index },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItem"], {
          primaryText: name,
          className: __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default.a.control,
          rightIcon: control
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default.a, null)
      );
    });
  };

  DeviceControls.prototype.render = function render() {
    var deviceName = this.props.device.name;


    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default.a.container },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default.a, {
        iconElementLeft: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_router__["Link"],
          { to: '/devices' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back___default.a, null)
          )
        ),
        title: deviceName
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_material_ui_List__["List"],
        { className: __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default.a.list },
        this.showDeviceControls()
      )
    );
  };

  return DeviceControls;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DeviceControls);

/***/ }),

/***/ "./src/components/DeviceControls/DeviceControls.style.css":
/***/ (function(module, exports) {

module.exports = {
	"tableDeviceControl": "src-components-DeviceControls-DeviceControls-style__tableDeviceControl__3nZ",
	"list": "src-components-DeviceControls-DeviceControls-style__list__1FW"
};

/***/ }),

/***/ "./src/components/DeviceList/DeviceList.index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__ = __webpack_require__("./src/redux/modules/device.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device_type__ = __webpack_require__("./src/redux/modules/device-type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DeviceList__ = __webpack_require__("./src/components/DeviceList/DeviceList.js");






function mapStateToProps(state) {

  return {
    devices: state.device
  };
}

function mapDispatchToProps(dispatch) {

  return {

    fetchDevices: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__["e" /* fetchDevices */], dispatch),
    fetchDeviceTypes: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device_type__["b" /* fetchDeviceTypes */], dispatch),
    changeEditState: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__["b" /* changeEditState */], dispatch),
    changeAddState: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__["a" /* changeAddState */], dispatch)

  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"](mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__DeviceList__["a" /* default */]));

/***/ }),

/***/ "./src/components/DeviceList/DeviceList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css__ = __webpack_require__("./src/components/DeviceList/DeviceList.style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var DeviceList = function (_Component) {
  _inherits(DeviceList, _Component);

  function DeviceList() {
    _classCallCheck(this, DeviceList);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DeviceList.prototype.componentDidMount = function componentDidMount() {

    this.props.fetchDevices();
  };

  DeviceList.prototype.showDevices = function showDevices() {
    var devices = this.props.devices.list;


    return devices.map(function (item, index) {
      var id = item.id,
          name = item.name,
          type = item.type;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
        { to: '/device/' + id + '/controls', key: id },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItem"], {
          primaryText: name + ' (' + type.name + ')',
          rightIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info___default.a, null)
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, null)
      );
    });
  };

  DeviceList.prototype.render = function render() {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css___default.a.container },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default.a, {
        title: 'Devices'
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css___default.a.tableDevice },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_List__["List"],
          null,
          this.showDevices()
        )
      )
    );
  };

  return DeviceList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DeviceList);

/***/ }),

/***/ "./src/components/DeviceList/DeviceList.style.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "src-components-DeviceList-DeviceList-style__container__1lu"
};

/***/ }),

/***/ "./src/components/NotFound/NotFound.index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NotFound__ = __webpack_require__("./src/components/NotFound/NotFound.js");


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__NotFound__["a" /* default */]);

/***/ }),

/***/ "./src/components/NotFound/NotFound.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_style_css__ = __webpack_require__("./src/components/NotFound/NotFound.style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_style_css__);





var NotFound = function NotFound() {

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__NotFound_style_css___default.a.notFound },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, { title: 'Oops!' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'The page you are looking for was not found.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      '( Hint: try ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
        { to: '/' },
        ' this one.'
      ),
      ' ;-)'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ "./src/components/NotFound/NotFound.style.css":
/***/ (function(module, exports) {

module.exports = {
	"notFound": "src-components-NotFound-NotFound-style__notFound__13f"
};

/***/ }),

/***/ "./src/components/shared/ErrorMessage/ErrorMessage.index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorMessage__ = __webpack_require__("./src/components/shared/ErrorMessage/ErrorMessage.js");



function mapStateToProps(state) {

  return {
    error: state.ui.error
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"](mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1__ErrorMessage__["a" /* default */]));

/***/ }),

/***/ "./src/components/shared/ErrorMessage/ErrorMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__);



var autoHideDuration = 10000;

var ErrorMessage = function ErrorMessage(props) {
  var error = props.error;


  if (!error) return null;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default.a, {
    open: true,
    message: error.message,
    autoHideDuration: autoHideDuration
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ErrorMessage);

/***/ }),

/***/ "./src/components/shared/LoadingIndicator/LoadingIndicator.index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_selectors_areWeLoading__ = __webpack_require__("./src/selectors/areWeLoading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LoadingIndicator__ = __webpack_require__("./src/components/shared/LoadingIndicator/LoadingIndicator.js");




function mapStateToProps(state) {

  return {
    weAreLoading: __WEBPACK_IMPORTED_MODULE_1_src_selectors_areWeLoading__["a" /* default */](state)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"](mapStateToProps)(__WEBPACK_IMPORTED_MODULE_2__LoadingIndicator__["a" /* default */]));

/***/ }),

/***/ "./src/components/shared/LoadingIndicator/LoadingIndicator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css__ = __webpack_require__("./src/components/shared/LoadingIndicator/LoadingIndicator.style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css__);



var LoadingIndicator = function LoadingIndicator(props) {
  var weAreLoading = props.weAreLoading;


  if (!weAreLoading) return null;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css___default.a.loading },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css___default.a.movingBar })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingIndicator);

/***/ }),

/***/ "./src/components/shared/LoadingIndicator/LoadingIndicator.style.css":
/***/ (function(module, exports) {

module.exports = {
	"loading": "src-components-shared-LoadingIndicator-LoadingIndicator-style__loading__E4t",
	"movingBar": "src-components-shared-LoadingIndicator-LoadingIndicator-style__movingBar__naQ",
	"moveright": "src-components-shared-LoadingIndicator-LoadingIndicator-style__moveright___Oe"
};

/***/ }),

/***/ "./src/helpers/api/device-types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDeviceTypeMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDeviceType; });
/* unused harmony export saveDeviceTypeMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveDeviceType; });
/* unused harmony export removeDeviceTypeMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeDeviceType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config_env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("./src/helpers/api/index.js");



var API_URL = __WEBPACK_IMPORTED_MODULE_0_config_env__["default"].API_URL,
    USE_MOCK_API = __WEBPACK_IMPORTED_MODULE_0_config_env__["default"].USE_MOCK_API;


var getDeviceTypeMock = function getDeviceTypeMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({
    list: [{
      id: 't1500670834368',
      name: 'Samsung Audio',
      httpApi: '',
      controls: [{
        type: 'button',
        name: 'Power'
      }, {
        type: 'slider',
        name: 'Volume'
      }, {
        type: 'select',
        name: 'Playlist',
        options: ['AC/DC - thunderstruck', 'Metallica - Nothing else matters', 'Foo Fighters - Run']
      }]
    }]
  });
};

var getDeviceType = function getDeviceType() {

  return USE_MOCK_API ? getDeviceTypeMock() : __WEBPACK_IMPORTED_MODULE_1____["b" /* get */](API_URL + '/api/v1/device-type');
};

var saveDeviceTypeMock = function saveDeviceTypeMock(deviceType) {

  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      return resolve({
        deviceType: deviceType
      });
    }, 1000);
  });
};

var saveDeviceType = function saveDeviceType(deviceType) {

  var deviceTypePayload = {
    name: deviceType.name,
    httpApi: deviceType.httpApi,
    controls: deviceType.controls
  };

  var urlCall = deviceType.id ? __WEBPACK_IMPORTED_MODULE_1____["e" /* put */](API_URL + '/api/v1/device-type/' + deviceType.id, deviceTypePayload) : __WEBPACK_IMPORTED_MODULE_1____["d" /* post */](API_URL + '/api/v1/device-type', deviceTypePayload);

  return USE_MOCK_API ? getDeviceTypeMock() : urlCall;
};

var removeDeviceTypeMock = function removeDeviceTypeMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({
    success: true
  });
};

var removeDeviceType = function removeDeviceType(deviceTypeId) {

  return USE_MOCK_API ? removeDeviceTypeMock() : __WEBPACK_IMPORTED_MODULE_1____["a" /* del */](API_URL + '/api/v1/device-type/' + deviceTypeId);
};

/***/ }),

/***/ "./src/helpers/api/devices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDeviceMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevice; });
/* unused harmony export saveDeviceMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveDevice; });
/* unused harmony export removeDeviceMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeDevice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config_env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("./src/helpers/api/index.js");



var API_URL = __WEBPACK_IMPORTED_MODULE_0_config_env__["default"].API_URL,
    USE_MOCK_API = __WEBPACK_IMPORTED_MODULE_0_config_env__["default"].USE_MOCK_API;


var getDeviceMock = function getDeviceMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({
    list: [{
      id: '1',
      name: 'Senadores 2017',
      description: 'Sondeo de elecciones en Rosario',
      created: '2017-06-12 18:37:18',
      visible: '0',
      active: '1'
    }, {
      id: '2',
      name: 'Seguridad Publica',
      description: 'Sensación de seguridad en la gente',
      created: '2017-06-12 18:38:08',
      visible: '1',
      active: '1'
    }]
  });
};

var getDevice = function getDevice() {

  return USE_MOCK_API ? getDeviceMock() : __WEBPACK_IMPORTED_MODULE_1____["b" /* get */](API_URL + '/api/v1/device');
};

var saveDeviceMock = function saveDeviceMock(device) {

  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      return resolve({
        device: device
      });
    }, 1000);
  });
};

var saveDevice = function saveDevice(device) {

  var devicePayload = {
    name: device.name,
    ip: device.ip,
    type: device.type
  };

  var urlCall = device.id ? __WEBPACK_IMPORTED_MODULE_1____["e" /* put */](API_URL + '/api/v1/device/' + device.id, devicePayload) : __WEBPACK_IMPORTED_MODULE_1____["d" /* post */](API_URL + '/api/v1/device', devicePayload);

  return USE_MOCK_API ? getDeviceMock() : urlCall;
};

var removeDeviceMock = function removeDeviceMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({});
};

var removeDevice = function removeDevice(deviceId) {

  return USE_MOCK_API ? removeDeviceMock() : __WEBPACK_IMPORTED_MODULE_1____["a" /* del */](API_URL + '/api/v1/device/' + deviceId);
};

/***/ }),

/***/ "./src/helpers/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return post; });
/* unused harmony export patch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config_env__ = __webpack_require__("./config/env.js");

// Contains API-specific logic for the API service we're using





var log = __WEBPACK_IMPORTED_MODULE_1_debug___default.a('citrus:helpers:api');

var getClient = function getClient() {

  // Defaults
  var config = {
    baseURL: __WEBPACK_IMPORTED_MODULE_2_config_env__["default"].API_URL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' }
  };

  log('Set baseURL: %s', __WEBPACK_IMPORTED_MODULE_2_config_env__["default"].API_URL);

  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create(config);
};

// Standardize API error format across the app
// Decouple from implementation (here using axios)
var _parseError = function _parseError(error) {

  // DEBUG: Print implementation-specific error information
  log('_parseError: %s \n %o', error);

  if (error && error.response) {

    return {
      statusCode: error.response.status,
      data: error.response.data,
      error: true
    };
  } else if (error instanceof Error) {

    return error.message;
  }

  return 'ERROR: ' + error.toString();
};

// Standardize API response format across the app
// Decouple from implementation (here using axios)
var _parseResponse = function _parseResponse(response) {

  log('_parseResponse: %o', response);

  return {
    statusCode: response.status,
    data: response.data
  };
};

// GET request factories
var get = function get(endpoint, opts) {

  var client = getClient();
  return client.get(endpoint, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// POST request factories
var post = function post(endpoint) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opts = arguments[2];


  var client = getClient();
  return client.post(endpoint, data, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// PATCH request factories
var patch = function patch(endpoint) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opts = arguments[2];


  var client = getClient();
  return client.patch(endpoint, data, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// PUT request factories
var put = function put(endpoint) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opts = arguments[2];


  var client = getClient();
  return client.put(endpoint, data, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// DELETE request factories
var del = function del(endpoint, opts) {

  var client = getClient();
  return client.delete(endpoint, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

var mock = function mock(data) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;


  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      return resolve(_parseResponse({
        status: 200,
        data: data
      }));
    }, delay);
  });
};

/***/ }),

/***/ "./src/redux/middleware/errorDisplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISPLAY_ERROR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config_env__ = __webpack_require__("./config/env.js");

var SHOW_ERRORS = __WEBPACK_IMPORTED_MODULE_0_config_env__["default"].SHOW_ERRORS;


var DISPLAY_ERROR = 'citrus/errorDisplay/DISPLAY_ERROR';

var errorDisplay = function errorDisplay(store) {

  return function (next) {

    return function (action) {

      if (!SHOW_ERRORS) return next(action);
      if (action && action.error) {

        // Skip redux-form errors
        if (action.meta && action.meta.form) return next(action);

        var message = 'An error has occurred.';

        // If error message was passed in payload
        if (typeof action.payload === 'string') {

          message = action.payload;
        }
        // If error message was parsed from API
        else if (action.payload && action.payload.data) {

            message = action.payload.data.message;
          }

        store.dispatch({
          type: DISPLAY_ERROR,
          // return a new object each time
          payload: { message: message }
        });
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["b"] = (errorDisplay);

/***/ }),

/***/ "./src/redux/modules/device-type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_DEVICE_TYPES */
/* unused harmony export EDIT_DEVICE_TYPES */
/* unused harmony export CHANGE_EDIT_STATE */
/* unused harmony export CHANGE_ADD_STATE */
/* unused harmony export REMOVE_DEVICE_TYPES */
/* unused harmony export FETCH_DEVICE_TYPES */
/* unused harmony export changeEditState */
/* unused harmony export changeAddState */
/* unused harmony export addDeviceTypes */
/* unused harmony export editDeviceTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchDeviceTypes; });
/* unused harmony export removeDeviceType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__ = __webpack_require__("./src/helpers/api/device-types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var ADD_DEVICE_TYPES = 'citrus/device-types/ADD_DEVICE_TYPES';
var EDIT_DEVICE_TYPES = 'citrus/device-types/EDIT_DEVICE_TYPES';
var CHANGE_EDIT_STATE = 'citrus/device-types/CHANGE_EDIT_STATE';
var CHANGE_ADD_STATE = 'citrus/device-types/CHANGE_ADD_STATE';
var REMOVE_DEVICE_TYPES = 'citrus/device-types/REMOVE_DEVICE_TYPES';
var FETCH_DEVICE_TYPES = 'citrus/device-types/FETCH_DEVICE_TYPES';

var initialState = {
  list: [],
  isFetching: false,
  isEditing: '',
  isDeleting: false,
  isAdding: false,
  error: ''
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case REMOVE_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isEditing: action.payload,
        isFetching: true
      });
    case REMOVE_DEVICE_TYPES + '_FULFILLED':
      {

        var deviceTypeList = state.list;
        var index = deviceTypeList.findIndex(function (item) {

          return item.id === action.payload.data.id;
        });
        if (index > -1) {

          deviceTypeList.splice(index, 1);
        }
        return _extends({}, state, {
          isEditing: '',
          isFetching: false,
          list: deviceTypeList
        });
      }
    case REMOVE_DEVICE_TYPES + '_REJECTED':
      {

        return _extends({}, state, {
          isEditing: '',
          isFetching: false,
          error: action.payload
        });
      }
    case CHANGE_EDIT_STATE:
      {

        var editing = !state.isEditing ? action.payload : '';

        return _extends({}, state, {
          isEditing: editing
        });
      }
    case CHANGE_ADD_STATE:
      {

        return _extends({}, state, {
          isAdding: !state.isAdding
        });
      }
    case ADD_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isFetching: true,
        isAdding: true
      });

    case ADD_DEVICE_TYPES + '_FULFILLED':
      {

        var _deviceTypeList = state.list;

        var newDeviceType = _extends({}, action.payload.data);
        _deviceTypeList.unshift(newDeviceType);
        return _extends({}, state, {
          isAdding: false,
          isFetching: false,
          list: _deviceTypeList
        });
      }
    case ADD_DEVICE_TYPES + '_REJECTED':
      return _extends({}, state, {
        isAdding: false,
        isFetching: false
      });

    case EDIT_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case EDIT_DEVICE_TYPES + '_FULFILLED':
      {

        var newList = state.list.map(function (item, index) {

          if (item.id === action.payload.data.id) {

            return _extends({}, item, action.payload.data);
          }

          return item;
        });
        return _extends({}, state, {
          isEditing: '',
          isFetching: false,
          list: newList
        });
      }
    case EDIT_DEVICE_TYPES + '_REJECTED':
      return _extends({}, state, {
        isFetching: false
      });
    case FETCH_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case FETCH_DEVICE_TYPES + '_FULFILLED':
      return _extends({}, state, {
        isFetching: false,
        list: action.payload.data
      });

    case FETCH_DEVICE_TYPES + '_REJECTED':
      return _extends({}, state, {
        error: action.payload.data,
        isFetching: false
      });

    default:
      return state;

  }
};

var changeEditState = function changeEditState(deviceTypeId) {

  return {
    type: CHANGE_EDIT_STATE,
    payload: deviceTypeId
  };
};

var changeAddState = function changeAddState() {

  return {
    type: CHANGE_ADD_STATE
  };
};

// thunk
var addDeviceTypes = function addDeviceTypes(deviceType) {

  return function (dispatch) {

    return dispatch({
      type: ADD_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["c" /* saveDeviceType */](deviceType)
    });
  };
};

var editDeviceTypes = function editDeviceTypes(deviceType) {

  return function (dispatch) {

    return dispatch({
      type: EDIT_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["c" /* saveDeviceType */](deviceType)
    });
  };
};

var fetchDeviceTypes = function fetchDeviceTypes() {

  return function (dispatch) {

    return dispatch({
      type: FETCH_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["a" /* getDeviceType */]()
    });
  };
};

var removeDeviceType = function removeDeviceType(deviceTypeId) {

  return function (dispatch) {

    return dispatch({
      type: REMOVE_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["b" /* removeDeviceType */](deviceTypeId)
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ "./src/redux/modules/device.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_DEVICES */
/* unused harmony export EDIT_DEVICES */
/* unused harmony export CHANGE_EDIT_STATE */
/* unused harmony export CHANGE_ADD_STATE */
/* unused harmony export REMOVE_DEVICES */
/* unused harmony export FETCH_DEVICES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeEditState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeAddState; });
/* unused harmony export addDevices */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchDevices; });
/* unused harmony export removeDevice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__ = __webpack_require__("./src/helpers/api/devices.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var ADD_DEVICES = 'citrus/devices/ADD_DEVICES';
var EDIT_DEVICES = 'citrus/devices/EDIT_DEVICES';
var CHANGE_EDIT_STATE = 'citrus/devices/CHANGE_EDIT_STATE';
var CHANGE_ADD_STATE = 'citrus/devices/CHANGE_ADD_STATE';
var REMOVE_DEVICES = 'citrus/devices/REMOVE_DEVICES';
var FETCH_DEVICES = 'citrus/devices/FETCH_DEVICES';

var initialState = {
  list: [],
  isFetching: false,
  isEditing: '',
  isDeleting: false,
  isAdding: false,
  error: ''
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case REMOVE_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true,
        isEditing: action.payload
      });
    case REMOVE_DEVICES + '_FULFILLED':
      {

        var deviceList = state.list;
        var index = deviceList.findIndex(function (item) {

          return item.id === action.payload.data.id;
        });
        if (index > -1) {

          deviceList.splice(index, 1);
        }
        return _extends({}, state, {
          isFetching: false,
          isEditing: '',
          list: deviceList
        });
      }
    case REMOVE_DEVICES + '_REJECTED':
      {

        return _extends({}, state, {
          isFetching: false,
          isEditing: '',
          error: action.payload
        });
      }
    case CHANGE_EDIT_STATE:
      {

        var editing = '';

        if (state.isEditing === '') {

          editing = action.payload;
        }
        return _extends({}, state, {
          isEditing: editing
        });
      }
    case CHANGE_ADD_STATE:
      {

        return _extends({}, state, {
          isAdding: !state.isAdding
        });
      }
    case ADD_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true,
        isAdding: true
      });

    case ADD_DEVICES + '_FULFILLED':
      {

        var _deviceList = state.list;

        var newDevice = _extends({}, action.payload.data);
        _deviceList.unshift(newDevice);
        return _extends({}, state, {
          isFetching: false,
          isAdding: false,
          list: _deviceList
        });
      }
    case ADD_DEVICES + '_REJECTED':
      return _extends({}, state, {
        isFetching: false,
        isAdding: false
      });

    case EDIT_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case EDIT_DEVICES + '_FULFILLED':
      {

        var newList = state.list.map(function (item, index) {

          if (item.id === action.payload.data.id) {

            return _extends({}, item, action.payload.data);
          }

          return item;
        });
        return _extends({}, state, {
          isFetching: false,
          isEditing: '',
          list: newList
        });
      }
    case EDIT_DEVICES + '_REJECTED':
      return _extends({}, state, {
        isFetching: false
      });
    case FETCH_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case FETCH_DEVICES + '_FULFILLED':
      return _extends({}, state, {
        isFetching: false,
        list: action.payload.data
      });

    case FETCH_DEVICES + '_REJECTED':
      return _extends({}, state, {
        error: action.payload.data,
        isFetching: false
      });

    default:
      return state;

  }
};

var changeEditState = function changeEditState(deviceId) {

  return {
    type: CHANGE_EDIT_STATE,
    payload: deviceId
  };
};

var changeAddState = function changeAddState() {

  return {
    type: CHANGE_ADD_STATE
  };
};

// thunk
var addDevices = function addDevices(device) {

  return function (dispatch) {

    return dispatch({
      type: ADD_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["c" /* saveDevice */](device)
    });
  };
};

var editDevices = function editDevices(device) {

  return function (dispatch) {

    return dispatch({
      type: EDIT_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["c" /* saveDevice */](device)
    });
  };
};

var fetchDevices = function fetchDevices() {

  return function (dispatch) {

    return dispatch({
      type: FETCH_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["a" /* getDevice */]()
    });
  };
};

var removeDevice = function removeDevice(deviceId) {

  return function (dispatch) {

    return dispatch({
      type: REMOVE_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["b" /* removeDevice */](deviceId)
    });
  };
};

/* harmony default export */ __webpack_exports__["c"] = (reducer);

/***/ }),

/***/ "./src/redux/modules/env.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */

// Empty reducer for now since we probably don't want to change
// it in the browser

var initialState = {};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  return state;
}

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ "./src/redux/modules/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__("./src/redux/modules/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request__ = __webpack_require__("./src/redux/modules/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__init__ = __webpack_require__("./src/redux/modules/init.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui__ = __webpack_require__("./src/redux/modules/ui.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device__ = __webpack_require__("./src/redux/modules/device.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__device_type__ = __webpack_require__("./src/redux/modules/device-type.js");











var rootReducer = __WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"]({
  env: __WEBPACK_IMPORTED_MODULE_3__env__["a" /* default */],
  request: __WEBPACK_IMPORTED_MODULE_4__request__["a" /* default */],
  init: __WEBPACK_IMPORTED_MODULE_5__init__["a" /* default */],
  ui: __WEBPACK_IMPORTED_MODULE_6__ui__["a" /* default */],
  device: __WEBPACK_IMPORTED_MODULE_7__device__["c" /* default */],
  deviceType: __WEBPACK_IMPORTED_MODULE_8__device_type__["a" /* default */],

  // redux-form
  form: __WEBPACK_IMPORTED_MODULE_2_redux_form__["reducer"],
  // react-router-redux
  routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./src/redux/modules/init.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOAD */
/* unused harmony export LOAD_SUCCESS */
/* unused harmony export initialState */
/* unused harmony export loadSuccess */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// "Shallow" reducer state example doesn't need Immutable
var LOAD = 'citrus/init/LOAD';
var LOAD_SUCCESS = 'citrus/init/LOAD_SUCCESS';

var initialState = {
  isLoading: true,
  loaded: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case LOAD:
      return _extends({}, state, {
        isLoading: true
      });

    case LOAD_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        loaded: true
      });

    default:
      return state;

  }
}

// Removed from implementation until the need arises
// For now, we assume that the app arrives in loading state
// export const load = () => {

//   return {
//     type: LOAD,
//   }

// }

var loadSuccess = function loadSuccess() {

  return {
    type: LOAD_SUCCESS
  };
};

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ "./src/redux/modules/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */

// Empty reducer for now since we probably don't want to change
// it in the browser

var initialState = {
  userAgent: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  return state;
}

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ "./src/redux/modules/ui.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLOSE_SIDEBAR */
/* unused harmony export OPEN_SIDEBAR */
/* unused harmony export START_LOADING */
/* unused harmony export STOP_LOADING */
/* unused harmony export initialState */
/* unused harmony export startLoading */
/* unused harmony export stopLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_redux_middleware_errorDisplay__ = __webpack_require__("./src/redux/middleware/errorDisplay.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


// import Debug from 'debug'
// const log = Debug('citrus:redux:modules:ui')


// ACTION TYPES
var CLOSE_SIDEBAR = 'citrus/ui/CLOSE_SIDEBAR';
var OPEN_SIDEBAR = 'citrus/ui/OPEN_SIDEBAR';

var START_LOADING = 'citrus/ui/START_LOADING';
var STOP_LOADING = 'citrus/ui/STOP_LOADING';

// MODEL


var initialState = {
  sidebarOpen: true,
  error: null,
  // Manual option to show loading indicator if needed
  showLoading: false

  // REDUCER
};function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case __WEBPACK_IMPORTED_MODULE_0_src_redux_middleware_errorDisplay__["a" /* DISPLAY_ERROR */]:
      return _extends({}, state, {
        error: action.payload
      });

    case CLOSE_SIDEBAR:
      return _extends({}, state, {
        sidebarOpen: false
      });

    case OPEN_SIDEBAR:
      return _extends({}, state, {
        sidebarOpen: true
      });

    case START_LOADING:
      return _extends({}, state, {
        showLoading: true
      });

    case STOP_LOADING:
      return _extends({}, state, {
        showLoading: false
      });

    default:
      return state;

  }
}

// ACTION CREATORS
// Use Flux Standard Action (FSA) notation
// https://github.com/acdlite/flux-standard-action
var startLoading = function startLoading() {

  return {
    type: START_LOADING
  };
};

var stopLoading = function stopLoading() {

  return {
    type: STOP_LOADING
  };
};

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ "./src/redux/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_redux_middleware_errorDisplay__ = __webpack_require__("./src/redux/middleware/errorDisplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules__ = __webpack_require__("./src/redux/modules/index.js");

/* eslint-disable arrow-body-style */








function configureStore(preloadedState, history) {

  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default.a(), __WEBPACK_IMPORTED_MODULE_5_src_redux_middleware_errorDisplay__["b" /* default */], __WEBPACK_IMPORTED_MODULE_3_react_router_redux__["routerMiddleware"](history)];

  // only log redux actions in development
  if (process.env.NODE_ENV === 'development') {}

  // logger needs to be last
  // uncomment if needed
  // middleware.push(require('redux-logger').createLogger())

  // https://github.com/zalmoxisus/redux-devtools-extension
  // https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f

  var enhancer = __WEBPACK_IMPORTED_MODULE_0_redux__["compose"](__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middleware), __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction__["devToolsEnhancer"]());

  var store = __WEBPACK_IMPORTED_MODULE_0_redux__["createStore"](__WEBPACK_IMPORTED_MODULE_6__modules__["a" /* default */], preloadedState, enhancer);

  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_App_index__ = __webpack_require__("./src/components/App.index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_DeviceList_DeviceList_index__ = __webpack_require__("./src/components/DeviceList/DeviceList.index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_DeviceControls_DeviceControls_index__ = __webpack_require__("./src/components/DeviceControls/DeviceControls.index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_NotFound_NotFound_index__ = __webpack_require__("./src/components/NotFound/NotFound.index.js");








var getRoutes = function getRoutes() {

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { path: '/', component: __WEBPACK_IMPORTED_MODULE_2_src_components_App_index__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRedirect"], { to: 'devices' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_3_src_components_DeviceList_DeviceList_index__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'device/:deviceId/controls', component: __WEBPACK_IMPORTED_MODULE_4_src_components_DeviceControls_DeviceControls_index__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '*', component: __WEBPACK_IMPORTED_MODULE_5_src_components_NotFound_NotFound_index__["a" /* default */] })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (getRoutes);

/***/ }),

/***/ "./src/selectors/areWeLoading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);


var getInitLoading = function getInitLoading(state) {

  return state.init.isLoading;
};

var getDevice = function getDevice(state) {

  return state.device.isFetching;
};

var getDeviceType = function getDeviceType(state) {

  return state.deviceType.isFetching;
};

var getUiLoading = function getUiLoading(state) {

  return state.ui.showLoading;
};

var areWeLoading = __WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"]([getInitLoading, getDevice, getDeviceType, getUiLoading], function (initLoading, device, deviceType, uiLoading) {

  if (initLoading || device || deviceType || uiLoading) {

    return true;
  }
  // default
  return false;
});

/* harmony default export */ __webpack_exports__["a"] = (areWeLoading);

/***/ }),

/***/ "./src/selectors/deviceById.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);


var getList = function getList(state) {

  return state.device.list;
};

var getId = function getId(state, deviceId) {

  return deviceId;
};

var getDeviceById = __WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"]([getList, getId], function (devices, deviceId) {

  var selectedDevice = devices.find(function (device) {

    return device.id === deviceId;
  });
  return selectedDevice;
});

/* harmony default export */ __webpack_exports__["a"] = (getDeviceById);

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack/hot/poll.js?500");
module.exports = __webpack_require__("./server/index.js");


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("hapi-react-views");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("good");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("inert");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("vision");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("boom");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/info");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/arrow-back");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/logOnlyInProduction");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map