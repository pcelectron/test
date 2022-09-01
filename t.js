/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

    The scriptlets below are meant to be injected only into a
    web page context.
*/

// The lines below are skipped by the resource parser. Purpose is clean
// jshinting.
(function() {
// >>>> start of private namespace
'use strict';





/// disable-altnumber-shortcut.js
(function() {
	function keyboard_event_handler(e) {
		// Don't prevent entering numbers in input area
		if (e.target.tagName == 'INPUT' ||
		e.target.tagName == 'SELECT' ||
		e.target.tagName == 'TEXTAREA' ||
		e.target.isContentEditable) {
		return;
		}
		// Trap number keys
		if (e.key >= '0' && e.key <= '9') {
			console.log("alt+num shortcut are disabled");
			e.stopImmediatePropagation();
		}
	}
	window.addEventListener('keydown', keyboard_event_handler, true);
})();

/// github-download-repo-sub-folders-files.js
(function() {
   (function(modules) { // webpackBootstrap
	// The module cache
	var installedModules = {};

	// The require function
	function __webpack_require__(moduleId) {

		// Check if module is in cache
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};

		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// Flag the module as loaded
		module.l = true;

		// Return the exports of the module
		return module.exports;
	}


	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = modules;

	// expose the module cache
	__webpack_require__.c = installedModules;

	// define getter function for harmony exports
	__webpack_require__.d = function(exports, name, getter) {
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};

	// define __esModule on exports
	__webpack_require__.r = function(exports) {
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};

	// create a fake namespace object
	// mode & 1: value is a module id, require it
	// mode & 2: merge all properties of value into the ns
	// mode & 4: return value when already ns object
	// mode & 8|1: behave like require
	__webpack_require__.t = function(value, mode) {
		if(mode & 1) value = __webpack_require__(value);
		if(mode & 8) return value;
		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};

	// getDefaultExport function for compatibility with non-harmony modules
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ?
			function getDefault() { return module['default']; } :
			function getModuleExports() { return module; };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};

	// Object.prototype.hasOwnProperty.call
	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

	// __webpack_public_path__
	__webpack_require__.p = "";


	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = 0);
})
	([
		(function(module, exports, __webpack_require__) {

			"use strict";

			var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
				}) : (function(o, m, k, k2) {
					if (k2 === undefined) k2 = k;
					o[k2] = m[k];
			}));
			var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
				Object.defineProperty(o, "default", { enumerable: true, value: v });
				}) : function(o, v) {
					o["default"] = v;
			});
			var __importStar = (this && this.__importStar) || function (mod) {
				if (mod && mod.__esModule) return mod;
				var result = {};
				if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
				__setModuleDefault(result, mod);
				return result;
			};
			Object.defineProperty(exports, "__esModule", { value: true });
			const utils = __importStar(__webpack_require__(1));
			(function () {
				const DOWNLOAD_BTN_ID = 'xiu-download-btn';
				const STYLE_ELEMENT_ID = 'xiu-style-element';
				main();
				// observePageChange()
				document.addEventListener('DOMSubtreeModified', onBodyChanged);
				function main() {
					if (!utils.isRepo())
					return;
				addDownloadBtn();
					addDownload2FileList();
				}
				let tid = 0;
				function onBodyChanged() {
					clearTimeout(tid);
					// @ts-ignore
					tid = setTimeout(addDownloadBtn, 100);
				}
				function addDownloadBtn() {
					let $navi = document.querySelector('.application-main .file-navigation');
					if (!$navi) {
						$navi = document.getElementById('blob-more-options-details');
						if (!$navi)
						return;
						$navi = $navi.parentElement;
					}
					const downloadBtn = getDownloadBtn($navi);
					if ($navi.contains(downloadBtn))
					return;
					$navi.appendChild(downloadBtn);
				}
				function getDownloadBtn($fileNavi) {
					let downloadBtn = document.getElementById(DOWNLOAD_BTN_ID);
					if (!downloadBtn) {
						downloadBtn = document.createElement('a');
						downloadBtn.id = DOWNLOAD_BTN_ID;
					}
					downloadBtn.className = 'btn d-none d-md-block ml-2';
					downloadBtn.target = '_blank';
					let url = '';
					if (utils.isRepoRootDir()) {
						const link = $fileNavi.querySelector('get-repo a[href$=".zip"]');
						url = link.href;
					}
					else {
						url = utils.getGithubDownloadUrl(utils.getCurrentUrlPath());
					}
					downloadBtn.textContent = 'Download';
					downloadBtn.href = url;
					return downloadBtn;
				}
				function addDownload2FileList() {
					if (document.getElementById(STYLE_ELEMENT_ID))
					return;
					const style = document.createElement('style');
					style.id = STYLE_ELEMENT_ID;
					const styleContent = `
.Box .Box-row > [role="gridcell"]:first-child:after {
position: absolute;
left: 20px;
top: 10px;
opacity: 0.6;
pointer-events: none;
content: '↓';
font-size: 0.8em;
}

.Box .Box-row > [role="gridcell"]:first-child > svg {
cursor: pointer;
}
`;
					style.textContent = styleContent;
					document.head.appendChild(style);
					addEvent2FileIcon();
				}
				function addEvent2FileIcon() {
					document.documentElement.addEventListener('click', (e) => {
						var _a, _b, _c, _d;
						// @ts-ignore
						const target = (e.target && e.target.ownerSVGElement || e.target);
						if (!target || (target.tagName || '').toLowerCase() !== 'svg')
						return;
					console.log(target);
						const label = target.getAttribute('aria-label') || '';
						if (!['Directory', 'File'].includes(label))
						return;
						const url = (_d = (_c = (_b = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling) === null || _b === void 0 ? void 0 : _b.querySelector) === null || _c === void 0 ? void 0 : _c.call(_b, 'a')) === null || _d === void 0 ? void 0 : _d.href;
						if (!url)
						return;
						const isFile = label === 'File';
						utils.openLink(utils.getGithubDownloadUrl(url, isFile));
					});
				}
			})();


		}),
		(function(module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", { value: true });
			exports.getGithubDownloadUrl = exports.openLink = exports.getCurrentUrlPath = exports.getRawBtn = exports.getUrlTextResponse = exports.isTextBasedSinglePage = exports.isRepoRootDir = exports.isPrivateRepo = exports.isRepo = exports.isGist = void 0;
			function isGist() {
				return location.hostname === 'gist.github.com';
			}
			exports.isGist = isGist;
			function isRepo() {
				if (!document.querySelector('.repository-content'))
				return false;
				const meta = document.querySelector('meta[name="selected-link"]');
				if (meta && meta.getAttribute('value') === 'repo_commits')
				return false;
				if (document.querySelector('.js-navigation-container>.TimelineItem'))
				return false;
				return true;
			}
			exports.isRepo = isRepo;
			function isPrivateRepo() {
				const label = document.querySelector('#js-repo-pjax-container .hide-full-screen .Label');
				return label && label.textContent === 'Private';
			}
			exports.isPrivateRepo = isPrivateRepo;
			function isRepoRootDir() {
				return !!document.querySelector('.repository-content  get-repo');
			}
			exports.isRepoRootDir = isRepoRootDir;
			function isTextBasedSinglePage() {
				if (!getRawBtn())
				return;
				if (document.getElementById('readme'))
				return true;
				const boxBody = document.querySelector('table.highlight');
				if (boxBody)
				return true;
				return false;
			}
			exports.isTextBasedSinglePage = isTextBasedSinglePage;
			function getUrlTextResponse(url) {
				// https://github.com/oe/search/raw/gh-pages/app-icon-retina.f492fc13.png
				// https://cdn.jsdelivr.net/gh/oe/search@gh-pages/app-icon-retina.f492fc13.png
				// https://github.com/oe/search/raw/master/CNAME
				let apiUrl = url
				.replace('github.com/', 'cdn.jsdelivr.net/gh/')
				.replace('/raw/', '@');
				return new Promise((resolve, reject) => {
					// @ts-ignore
					GM_xmlhttpRequest({
						url: apiUrl,
						method: 'GET',
						onload: (s) => {
							resolve(s.responseText);
						}
					});
				});
			}
			exports.getUrlTextResponse = getUrlTextResponse;
			// if is single file page, then it has a raw btn
			function getRawBtn() {
				return document.getElementById('raw-url');
			}
			exports.getRawBtn = getRawBtn;
			// remove qeurystring & hash
			function getCurrentUrlPath() {
				const url = location.origin + location.pathname;
				return url.replace(/\/$/, '');
			}
			exports.getCurrentUrlPath = getCurrentUrlPath;
			function openLink(url) {
				const link = document.createElement('a');
				link.target = '_blank';
				link.href = url;
				link.click();
			}
			exports.openLink = openLink;
			function getGithubDownloadUrl(url, isFile) {
			if (isFile) {
					try {
						const u = new URL(url);
						let paths = u.pathname.split('/');
						paths[3] = 'raw';
						u.pathname = paths.join('/');
						return u.href;
					}
					catch (error) { }
				}
				return `https://downgit.evecalm.com/#/home?url=${encodeURIComponent(url)}`;
			}
			exports.getGithubDownloadUrl = getGithubDownloadUrl;


		})
]);

})();


/// abort-on-property-write.js
/// alias aopw.js
(function() {
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
                  Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    let prop = '{{1}}';
    let owner = window;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        owner = owner[prop.slice(0, pos)];
        if ( owner instanceof Object === false ) { return; }
        prop = prop.slice(pos + 1);
    }
    delete owner[prop];
    Object.defineProperty(owner, prop, {
        set: function() {
            throw new ReferenceError(magic);
        }
    });
    const oe = window.onerror;
    window.onerror = function(msg, src, line, col, error) {
        if ( typeof msg === 'string' && msg.indexOf(magic) !== -1 ) {
            return true;
        }
        if ( oe instanceof Function ) {
            return oe(msg, src, line, col, error);
        }
    }.bind();
})();


/// abort-on-stack-trace.js
/// alias aost.js
// Status is currently experimental
(function() {
    let chain = '{{1}}';
    let needle = '{{2}}';
    let logLevel = '{{3}}';
    const reRegexEscape = /[.*+?^${}()|[\]\\]/g;
    if ( needle === '' || needle === '{{2}}' ) {
        needle = '^';
    } else if ( /^\/.+\/$/.test(needle) ) {
        needle = needle.slice(1,-1);
    } else {
        needle = needle.replace(reRegexEscape, '\\$&');
    }
    const reNeedle = new RegExp(needle);
    const magic = String.fromCharCode(Math.random() * 26 + 97) +
        Math.floor(
            (0.25 + Math.random() * 0.75) * Number.MAX_SAFE_INTEGER
        ).toString(36).slice(-8);
    const log = console.log.bind(console);
    const ErrorCtor = self.Error;
    const mustAbort = function(err) {
        let docURL = self.location.href;
        const pos = docURL.indexOf('#');
        if ( pos !== -1 ) {
            docURL = docURL.slice(0, pos);
        }
        // Normalize stack trace
        const lines = [];
        for ( let line of err.stack.split(/[\n\r]+/) ) {
            if ( line.includes(magic) ) { continue; }
            line = line.trim();
            let match = /(.*?@)?(\S+)(:\d+):\d+\)?$/.exec(line);
            if ( match === null ) { continue; }
            let url = match[2];
            if ( url.startsWith('(') ) { url = url.slice(1); }
            if ( url === docURL ) {
                url = 'inlineScript';
            } else if ( url.startsWith('<anonymous>') ) {
                url = 'injectedScript';
            }
            let fn = match[1] !== undefined
                ? match[1].slice(0, -1)
                : line.slice(0, match.index).trim();
            if ( fn.startsWith('at') ) { fn = fn.slice(2).trim(); }
            let rowcol = match[3];
            lines.push(' ' + `${fn} ${url}${rowcol}:1`.trim());
        }
        lines[0] = `stackDepth:${lines.length-1}`;
        const stack = lines.join('\t');
        const r = reNeedle.test(stack);
        if (
            logLevel === '1' ||
            logLevel === '2' && r ||
            logLevel === '3' && !r
        ) {
            log(stack.replace(/\t/g, '\n'));
        }
        return r;
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            let v = owner[chain];
            Object.defineProperty(owner, chain, {
                get: function() {
                    if ( mustAbort(new ErrorCtor(magic)) ) {
                        throw new ReferenceError(magic);
                    }
                    return v;
                },
                set: function(a) {
                    if ( mustAbort(new ErrorCtor(magic)) ) {
                        throw new ReferenceError(magic);
                    }
                    v = a;
                },
            });
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
    const oe = window.onerror;
    window.onerror = function(msg, src, line, col, error) {
        if ( typeof msg === 'string' && msg.indexOf(magic) !== -1 ) {
            return true;
        }
        if ( oe instanceof Function ) {
            return oe(msg, src, line, col, error);
        }
    }.bind();
})();


/// addEventListener-defuser.js
/// alias aeld.js
// https://github.com/uBlockOrigin/uAssets/issues/9123#issuecomment-848255120
(function() {
    let needle1 = '{{1}}';
    if ( needle1 === '' || needle1 === '{{1}}' ) {
        needle1 = '.?';
    } else if ( /^\/.+\/$/.test(needle1) ) {
        needle1 = needle1.slice(1,-1);
    } else {
        needle1 = needle1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle1 = new RegExp(needle1);
    let needle2 = '{{2}}';
    if ( needle2 === '' || needle2 === '{{2}}' ) {
        needle2 = '.?';
    } else if ( /^\/.+\/$/.test(needle2) ) {
        needle2 = needle2.slice(1,-1);
    } else {
        needle2 = needle2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle2 = new RegExp(needle2);
    self.EventTarget.prototype.addEventListener = new Proxy(
        self.EventTarget.prototype.addEventListener,
        {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = String(args[1]);
                } catch(ex) {
                }
                if (
                    needle1.test(type) === false ||
                    needle2.test(handler) === false
                ) {
                    return target.apply(thisArg, args);
                }
            }
        }
    );
})();


/// addEventListener-logger.js
/// alias aell.js
// https://github.com/uBlockOrigin/uAssets/issues/9123#issuecomment-848255120
(function() {
    const log = console.log.bind(console);
    self.EventTarget.prototype.addEventListener = new Proxy(
        self.EventTarget.prototype.addEventListener,
        {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = String(args[1]);
                } catch(ex) {
                }
                log('uBO: addEventListener("%s", %s)', type, handler);
                return target.apply(thisArg, args);
            }
        }
    );
})();


/// json-prune.js
//
//  When no "prune paths" argument is provided, the scriptlet is
//  used for logging purpose and the "needle paths" argument is
//  used to filter logging output.
//
//  https://github.com/uBlockOrigin/uBlock-issues/issues/1545
//  - Add support for "remove everything if needle matches" case
//
(function() {
    const rawPrunePaths = '{{1}}';
    const rawNeedlePaths = '{{2}}';
    const prunePaths = rawPrunePaths !== '{{1}}' && rawPrunePaths !== ''
        ? rawPrunePaths.split(/ +/)
        : [];
    let needlePaths;
    let log, reLogNeedle;
    if ( prunePaths.length !== 0 ) {
        needlePaths = prunePaths.length !== 0 &&
                      rawNeedlePaths !== '{{2}}' && rawNeedlePaths !== ''
            ? rawNeedlePaths.split(/ +/)
            : [];
    } else {
        log = console.log.bind(console);
        let needle;
        if ( rawNeedlePaths === '' || rawNeedlePaths === '{{2}}' ) {
            needle = '.?';
        } else if ( rawNeedlePaths.charAt(0) === '/' && rawNeedlePaths.slice(-1) === '/' ) {
            needle = rawNeedlePaths.slice(1, -1);
        } else {
            needle = rawNeedlePaths.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        reLogNeedle = new RegExp(needle);
    }
    const findOwner = function(root, path, prune = false) {
        let owner = root;
        let chain = path;
        for (;;) {
            if ( typeof owner !== 'object' || owner === null  ) {
                return false;
            }
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                if ( prune === false ) {
                    return owner.hasOwnProperty(chain);
                }
                if ( chain === '*' ) {
                    for ( const key in owner ) {
                        if ( owner.hasOwnProperty(key) === false ) { continue; }
                        delete owner[key];
                    }
                } else if ( owner.hasOwnProperty(chain) ) {
                    delete owner[chain];
                }
                return true;
            }
            const prop = chain.slice(0, pos);
            if (
                prop === '[]' && Array.isArray(owner) ||
                prop === '*' && owner instanceof Object
            ) {
                const next = chain.slice(pos + 1);
                let found = false;
                for ( const key of Object.keys(owner) ) {
                    found = findOwner(owner[key], next, prune) || found;
                }
                return found;
            }
            if ( owner.hasOwnProperty(prop) === false ) { return false; }
            owner = owner[prop];
            chain = chain.slice(pos + 1);
        }
    };
    const mustProcess = function(root) {
        for ( const needlePath of needlePaths ) {
            if ( findOwner(root, needlePath) === false ) {
                return false;
            }
        }
        return true;
    };
    const pruner = function(o) {
        if ( log !== undefined ) {
            const json = JSON.stringify(o, null, 2);
            if ( reLogNeedle.test(json) ) {
                log('uBO:', location.hostname, json);
            }
            return o;
        }
        if ( mustProcess(o) === false ) { return o; }
        for ( const path of prunePaths ) {
            findOwner(o, path, true);
        }
        return o;
    };
    JSON.parse = new Proxy(JSON.parse, {
        apply: function() {
            return pruner(Reflect.apply(...arguments));
        },
    });
    Response.prototype.json = new Proxy(Response.prototype.json, {
        apply: function() {
            return Reflect.apply(...arguments).then(o => pruner(o));
        },
    });
})();


// Imported from:
// https://github.com/NanoAdblocker/NanoFilters/blob/1f3be7211bb0809c5106996f52564bf10c4525f7/NanoFiltersSource/NanoResources.txt#L126
//
// Speed up or down setInterval, 3 optional arguments.
//      The payload matcher, a string literal or a JavaScript RegExp, defaults
//      to match all.
// delayMatcher
//      The delay matcher, an integer, defaults to 1000.
//      Use `*` to match any delay.
// boostRatio - The delay multiplier when there is a match, 0.5 speeds up by
//      2 times and 2 slows down by 2 times, defaults to 0.05 or speed up
//      20 times. Speed up and down both cap at 50 times.
/// nano-setInterval-booster.js
/// alias nano-sib.js
(function() {
    let needleArg = '{{1}}';
    if ( needleArg === '{{1}}' ) { needleArg = ''; }
    let delayArg = '{{2}}';
    if ( delayArg === '{{2}}' ) { delayArg = ''; }
    let boostArg = '{{3}}';
    if ( boostArg === '{{3}}' ) { boostArg = ''; }
    if ( needleArg === '' ) {
        needleArg = '.?';
    } else if ( needleArg.charAt(0) === '/' && needleArg.slice(-1) === '/' ) {
        needleArg = needleArg.slice(1, -1);
    } else {
        needleArg = needleArg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const reNeedle = new RegExp(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.02), 50)
        : 0.05;
    self.setInterval = new Proxy(self.setInterval, {
        apply: function(target, thisArg, args) {
            const [ a, b ] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
    });
})();


// Imported from:
// https://github.com/NanoAdblocker/NanoFilters/blob/1f3be7211bb0809c5106996f52564bf10c4525f7/NanoFiltersSource/NanoResources.txt#L82
//
// Speed up or down setTimeout, 3 optional arguments.
// funcMatcher
//      The payload matcher, a string literal or a JavaScript RegExp, defaults
//      to match all.
// delayMatcher
//      The delay matcher, an integer, defaults to 1000.
//      Use `*` to match any delay.
// boostRatio - The delay multiplier when there is a match, 0.5 speeds up by
//      2 times and 2 slows down by 2 times, defaults to 0.05 or speed up
//      20 times. Speed up and down both cap at 50 times.
/// nano-setTimeout-booster.js
/// alias nano-stb.js
(function() {
    let needleArg = '{{1}}';
    if ( needleArg === '{{1}}' ) { needleArg = ''; }
    let delayArg = '{{2}}';
    if ( delayArg === '{{2}}' ) { delayArg = ''; }
    let boostArg = '{{3}}';
    if ( boostArg === '{{3}}' ) { boostArg = ''; }
    if ( needleArg === '' ) {
        needleArg = '.?';
    } else if ( needleArg.charAt(0) === '/' && needleArg.slice(-1) === '/' ) {
        needleArg = needleArg.slice(1, -1);
    } else {
        needleArg = needleArg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const reNeedle = new RegExp(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.02), 50)
        : 0.05;
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const [ a, b ] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
    });
})();


/// noeval-if.js
(function() {
    let needle = '{{1}}';
    if ( needle === '' || needle === '{{1}}' ) {
        needle = '.?';
    } else if ( needle.slice(0,1) === '/' && needle.slice(-1) === '/' ) {
        needle = needle.slice(1,-1);
    } else {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle = new RegExp(needle);
    window.eval = new Proxy(window.eval, {          // jshint ignore: line
        apply: function(target, thisArg, args) {
            const a = args[0];
            if ( needle.test(a.toString()) === false ) {
                return target.apply(thisArg, args);
            }
        }
    });
})();


/// no-fetch-if.js
(function() {
    let arg1 = '{{1}}';
    if ( arg1 === '{{1}}' ) { arg1 = ''; }
    const needles = [];
    for ( const condition of arg1.split(/\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        if ( value === '' ) {
            value = '^';
        } else if ( value.startsWith('/') && value.endsWith('/') ) {
            value = value.slice(1, -1);
        } else {
            value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        needles.push({ key, re: new RegExp(value) });
    }
    const log = needles.length === 0 ? console.log.bind(console) : undefined;
    self.fetch = new Proxy(self.fetch, {
        apply: function(target, thisArg, args) {
            let proceed = true;
            try {
                let details;
                if ( args[0] instanceof self.Request ) {
                    details = args[0];
                } else {
                    details = Object.assign({ url: args[0] }, args[1]);
                }
                const props = new Map();
                for ( const prop in details ) {
                    let v = details[prop];
                    if ( typeof v !== 'string' ) {
                        try { v = JSON.stringify(v); }
                        catch(ex) { }
                    }
                    if ( typeof v !== 'string' ) { continue; }
                    props.set(prop, v);
                }
                if ( log !== undefined ) {
                    const out = Array.from(props)
                                     .map(a => `${a[0]}:${a[1]}`)
                                     .join(' ');
                    log(`uBO: fetch(${out})`);
                }
                proceed = needles.length === 0;
                for ( const { key, re } of needles ) {
                    if (
                        props.has(key) === false ||
                        re.test(props.get(key)) === false
                    ) {
                        proceed = true;
                        break;
                    }
                }
            } catch(ex) {
            }
            return proceed
                ? Reflect.apply(target, thisArg, args)
                : Promise.resolve(new Response());
        }
    });
})();


/// no-floc.js
//  https://github.com/uBlockOrigin/uBlock-issues/issues/1553
(function() {
    if ( Document instanceof Object === false ) { return; }
    if ( Document.prototype.interestCohort instanceof Function === false ) {
        return;
    }
    Document.prototype.interestCohort = new Proxy(
        Document.prototype.interestCohort,
        {
            apply: function() {
                return Promise.reject();
            }
        }
    );
})();


/// refresh-defuser.js
// https://www.reddit.com/r/uBlockOrigin/comments/q0frv0/while_reading_a_sports_article_i_was_redirected/hf7wo9v/
(function() {
    const arg1 = '{{1}}';
    const defuse = ( ) => {
        const meta = document.querySelector('meta[http-equiv="refresh" i][content]');
        if ( meta === null ) { return; }
        const s = arg1 === '' || arg1 === '{{1}}'
            ? meta.getAttribute('content')
            : arg1;
        const ms = Math.max(parseFloat(s) || 0, 0) * 1000;
        setTimeout(( ) => { window.stop(); }, ms);
    };
    if ( document.readyState === 'loading' ) {
        document.addEventListener('DOMContentLoaded', defuse, { once: true });
    } else {
        defuse();
    }
})();


/// remove-attr.js
/// alias ra.js
(function() {
    const token = '{{1}}';
    if ( token === '' || token === '{{1}}' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    let selector = '{{2}}';
    if ( selector === '' || selector === '{{2}}' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    let behavior = '{{3}}';
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
                }
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmattr, { timeout: 17 });
    };
    const start = ( ) => {
        rmattr();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    if ( document.readyState !== 'complete' && /\bcomplete\b/.test(behavior) ) {
        self.addEventListener('load', start, { once: true });
    } else if ( document.readyState !== 'loading' || /\basap\b/.test(behavior) ) {
        start();
    } else {
        self.addEventListener('DOMContentLoaded', start, { once: true });
    }
})();


/// remove-class.js
/// alias rc.js
(function() {
    const token = '{{1}}';
    if ( token === '' || token === '{{1}}' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    let selector = '{{2}}';
    if ( selector === '' || selector === '{{2}}' ) {
        selector = '.' + tokens.map(a => CSS.escape(a)).join(',.');
    }
    let behavior = '{{3}}';
    let timer;
    const rmclass = function() {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...tokens);
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmclass, { timeout: 67 });
    };
    const start = ( ) => {
        rmclass();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: [ 'class' ],
            childList: true,
            subtree: true,
        });
    };
    if ( document.readyState !== 'complete' && /\bcomplete\b/.test(behavior) ) {
        self.addEventListener('load', start, { once: true });
    } else if ( document.readyState === 'loading' ) {
        self.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
})();


/// no-requestAnimationFrame-if.js
/// alias norafif.js
(function() {
    let needle = '{{1}}';
    if ( needle === '{{1}}' ) { needle = ''; }
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( needle.startsWith('/') && needle.endsWith('/') ) {
        needle = needle.slice(1, -1);
    } else if ( needle !== '' ) {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const log = needleNot === false && needle === '' ? console.log : undefined;
    const reNeedle = new RegExp(needle);
    window.requestAnimationFrame = new Proxy(window.requestAnimationFrame, {
        apply: function(target, thisArg, args) {
            const a = String(args[0]);
            let defuse = false;
            if ( log !== undefined ) {
                log('uBO: requestAnimationFrame("%s")', a);
            } else {
                defuse = reNeedle.test(a) !== needleNot;
            }
            if ( defuse ) {
                args[0] = function(){};
            }
            return target.apply(thisArg, args);
        }
    });
})();


/// set-constant.js
/// alias set.js
(function() {
    const chain = '{{1}}';
    let cValue = '{{2}}';
    const thisScript = document.currentScript;
    if ( cValue === 'undefined' ) {
        cValue = undefined;
    } else if ( cValue === 'false' ) {
        cValue = false;
    } else if ( cValue === 'true' ) {
        cValue = true;
    } else if ( cValue === 'null' ) {
        cValue = null;
    } else if ( cValue === "''" ) {
        cValue = '';
    } else if ( cValue === '[]' ) {
        cValue = [];
    } else if ( cValue === '{}' ) {
        cValue = {};
    } else if ( cValue === 'noopFunc' ) {
        cValue = function(){};
    } else if ( cValue === 'trueFunc' ) {
        cValue = function(){ return true; };
    } else if ( cValue === 'falseFunc' ) {
        cValue = function(){ return false; };
    } else if ( /^\d+$/.test(cValue) ) {
        cValue = parseFloat(cValue);
        if ( isNaN(cValue) ) { return; }
        if ( Math.abs(cValue) > 0x7FFF ) { return; }
    } else {
        return;
    }
    let aborted = false;
    const mustAbort = function(v) {
        if ( aborted ) { return true; }
        aborted =
            (v !== undefined && v !== null) &&
            (cValue !== undefined && cValue !== null) &&
            (typeof v !== typeof cValue);
        return aborted;
    };
    // https://github.com/uBlockOrigin/uBlock-issues/issues/156
    //   Support multiple trappers for the same property.
    const trapProp = function(owner, prop, configurable, handler) {
        if ( handler.init(owner[prop]) === false ) { return; }
        const odesc = Object.getOwnPropertyDescriptor(owner, prop);
        let prevGetter, prevSetter;
        if ( odesc instanceof Object ) {
            owner[prop] = cValue;
            if ( odesc.get instanceof Function ) {
                prevGetter = odesc.get;
            }
            if ( odesc.set instanceof Function ) {
                prevSetter = odesc.set;
            }
        }
        try {
            Object.defineProperty(owner, prop, {
                configurable,
                get() {
                    if ( prevGetter !== undefined ) {
                        prevGetter();
                    }
                    return handler.getter(); // cValue
                },
                set(a) {
                    if ( prevSetter !== undefined ) {
                        prevSetter(a);
                    }
                    handler.setter(a);
                }
            });
        } catch(ex) {
        }
    };
    const trapChain = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            trapProp(owner, chain, false, {
                v: undefined,
                init: function(v) {
                    if ( mustAbort(v) ) { return false; }
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return document.currentScript === thisScript
                        ? this.v
                        : cValue;
                },
                setter: function(a) {
                    if ( mustAbort(a) === false ) { return; }
                    cValue = a;
                }
            });
            return;
        }
        const prop = chain.slice(0, pos);
        const v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v instanceof Object || typeof v === 'object' && v !== null ) {
            trapChain(v, chain);
            return;
        }
        trapProp(owner, prop, true, {
            v: undefined,
            init: function(v) {
                this.v = v;
                return true;
            },
            getter: function() {
                return this.v;
            },
            setter: function(a) {
                this.v = a;
                if ( a instanceof Object ) {
                    trapChain(a, chain);
                }
            }
        });
    };
    trapChain(window, chain);
})();


/// no-setInterval-if.js
/// alias nosiif.js
(function() {
    let needle = '{{1}}';
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    let delay = '{{2}}';
    if ( delay === '{{2}}' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    if ( needle === '' || needle === '{{1}}' ) {
        needle = '';
    } else if ( needle.startsWith('/') && needle.endsWith('/') ) {
        needle = needle.slice(1,-1);
    } else {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const log = needleNot === false && needle === '' && delay === undefined
        ? console.log
        : undefined;
    const reNeedle = new RegExp(needle);
    window.setInterval = new Proxy(window.setInterval, {
        apply: function(target, thisArg, args) {
            const a = String(args[0]);
            const b = args[1];
            if ( log !== undefined ) {
                log('uBO: setInterval("%s", %s)', a, b);
            } else {
                let defuse;
                if ( needle !== '' ) {
                    defuse = reNeedle.test(a) !== needleNot;
                }
                if ( defuse !== false && delay !== undefined ) {
                    defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
                }
                if ( defuse ) {
                    args[0] = function(){};
                }
            }
            return target.apply(thisArg, args);
        }
    });
})();


/// no-setTimeout-if.js
/// alias nostif.js
/// alias setTimeout-defuser.js
(function() {
    let needle = '{{1}}';
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    let delay = '{{2}}';
    if ( delay === '{{2}}' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    if ( needle === '' || needle === '{{1}}' ) {
        needle = '';
    } else if ( needle.startsWith('/') && needle.endsWith('/') ) {
        needle = needle.slice(1,-1);
    } else {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const log = needleNot === false && needle === '' && delay === undefined
        ? console.log
        : undefined;
    const reNeedle = new RegExp(needle);
    window.setTimeout = new Proxy(window.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = String(args[0]);
            const b = args[1];
            if ( log !== undefined ) {
                log('uBO: setTimeout("%s", %s)', a, b);
            } else {
                let defuse;
                if ( needle !== '' ) {
                    defuse = reNeedle.test(a) !== needleNot;
                }
                if ( defuse !== false && delay !== undefined ) {
                    defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
                }
                if ( defuse ) {
                    args[0] = function(){};
                }
            }
            return target.apply(thisArg, args);
        }
    });
})();


/// webrtc-if.js
(function() {
    let good = '{{1}}';
    if ( good.startsWith('/') && good.endsWith('/') ) {
        good = good.slice(1, -1);
    } else {
        good = good.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    let reGood;
    try {
        reGood = new RegExp(good);
    } catch(ex) {
        return;
    }
    const rtcName = window.RTCPeerConnection
        ? 'RTCPeerConnection'
        : (window.webkitRTCPeerConnection ? 'webkitRTCPeerConnection' : '');
    if ( rtcName === '' ) { return; }
    const log = console.log.bind(console);
    const neuteredPeerConnections = new WeakSet();
    const isGoodConfig = function(instance, config) {
        if ( neuteredPeerConnections.has(instance) ) { return false; }
        if ( config instanceof Object === false ) { return true; }
        if ( Array.isArray(config.iceServers) === false ) { return true; }
        for ( const server of config.iceServers ) {
            const urls = typeof server.urls === 'string'
                ? [ server.urls ]
                : server.urls;
            if ( Array.isArray(urls) ) {
                for ( const url of urls ) {
                    if ( reGood.test(url) ) { return true; }
                }
            }
            if ( typeof server.username === 'string' ) {
                if ( reGood.test(server.username) ) { return true; }
            }
            if ( typeof server.credential === 'string' ) {
                if ( reGood.test(server.credential) ) { return true; }
            }
        }
        neuteredPeerConnections.add(instance);
        return false;
    };
    const peerConnectionCtor = window[rtcName];
    const peerConnectionProto = peerConnectionCtor.prototype;
    peerConnectionProto.createDataChannel =
        new Proxy(peerConnectionProto.createDataChannel, {
            apply: function(target, thisArg, args) {
                if ( isGoodConfig(target, args[1]) === false ) {
                    log('uBO:', args[1]);
                    return Reflect.apply(target, thisArg, args.slice(0, 1));
                }
                return Reflect.apply(target, thisArg, args);
            },
        });
    window[rtcName] =
        new Proxy(peerConnectionCtor, {
            construct: function(target, args) {
                if ( isGoodConfig(target, args[0]) === false ) {
                    log('uBO:', args[0]);
                    return Reflect.construct(target);
                }
                return Reflect.construct(target, args);
            }
        });
})();


/// no-xhr-if.js
(function() {
    const xhrInstances = new WeakMap();
    let arg1 = '{{1}}';
    if ( arg1 === '{{1}}' ) { arg1 = ''; }
    const needles = [];
    for ( const condition of arg1.split(/\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        if ( value === '' ) {
            value = '^';
        } else if ( value.startsWith('/') && value.endsWith('/') ) {
            value = value.slice(1, -1);
        } else {
            value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        needles.push({ key, re: new RegExp(value) });
    }
    const log = needles.length === 0 ? console.log.bind(console) : undefined;
    self.XMLHttpRequest = class extends self.XMLHttpRequest {
        open(...args) {
            if ( log !== undefined ) {
                log(`uBO: xhr.open(${args.join(', ')})`);
            } else {
                const argNames = [ 'method', 'url' ];
                const haystack = new Map();
                for ( let i = 0; i < args.length && i < argNames.length; i++  ) {
                    haystack.set(argNames[i], args[i]);
                }
                if ( haystack.size !== 0 ) {
                    let matches = true;
                    for ( const { key, re } of needles ) {
                        matches = re.test(haystack.get(key) || '');
                        if ( matches === false ) { break; }
                    }
                    if ( matches ) {
                        xhrInstances.set(this, haystack);
                    }
                }
            }
            return super.open(...args);
        }
        send(...args) {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined ) {
                return super.send(...args);
            }
            Object.defineProperties(this, {
                readyState: { value: 4, writable: false },
                response: { value: '', writable: false },
                responseText: { value: '', writable: false },
                responseURL: { value: haystack.get('url'), writable: false },
                responseXML: { value: '', writable: false },
                status: { value: 200, writable: false },
                statusText: { value: 'OK', writable: false },
            });
            this.dispatchEvent(new Event('readystatechange'));
            this.dispatchEvent(new Event('load'));
            this.dispatchEvent(new Event('loadend'));
        }
    };
})();


// https://github.com/uBlockOrigin/uAssets/issues/10323#issuecomment-992312847
// https://github.com/AdguardTeam/Scriptlets/issues/158
/// window-close-if.js
(function() {
    const arg1 = '{{1}}';
    let reStr;
    if ( arg1 === '{{1}}' || arg1 === '' ) {
        reStr = '^';
    } else if ( arg1.startsWith('/') && arg1.endsWith('/') ) {
        reStr = arg1.slice(1, -1);
    } else {
        reStr = arg1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    try {
        const re = new RegExp(reStr);
        if ( re.test(`${window.location.pathname}${window.location.search}`) ) {
            window.close();
        }
    } catch(ex) {
        console.log(ex);
    }
})();


// https://github.com/gorhill/uBlock/issues/1228
/// window.name-defuser.js
(function() {
    if ( window === window.top ) {
        window.name = '';
    }
})();


// Experimental: Generic nuisance overlay buster.
// if this works well and proves to be useful, this may end up
// as a stock tool in uBO's popup panel.
/// overlay-buster.js
(function() {
    if ( window !== window.top ) {
        return;
    }
    var tstart;
    var ttl = 30000;
    var delay = 0;
    var delayStep = 50;
    var buster = function() {
        var docEl = document.documentElement,
            bodyEl = document.body,
            vw = Math.min(docEl.clientWidth, window.innerWidth),
            vh = Math.min(docEl.clientHeight, window.innerHeight),
            tol = Math.min(vw, vh) * 0.05,
            el = document.elementFromPoint(vw/2, vh/2),
            style, rect;
        for (;;) {
            if ( el === null || el.parentNode === null || el === bodyEl ) {
                break;
            }
            style = window.getComputedStyle(el);
            if ( parseInt(style.zIndex, 10) >= 1000 || style.position === 'fixed' ) {
                rect = el.getBoundingClientRect();
                if ( rect.left <= tol && rect.top <= tol && (vw - rect.right) <= tol && (vh - rect.bottom) < tol ) {
                    el.parentNode.removeChild(el);
                    tstart = Date.now();
                    el = document.elementFromPoint(vw/2, vh/2);
                    bodyEl.style.setProperty('overflow', 'auto', 'important');
                    docEl.style.setProperty('overflow', 'auto', 'important');
                    continue;
                }
            }
            el = el.parentNode;
        }
        if ( (Date.now() - tstart) < ttl ) {
            delay = Math.min(delay + delayStep, 1000);
            setTimeout(buster, delay);
        }
    };
    var domReady = function(ev) {
        if ( ev ) {
            document.removeEventListener(ev.type, domReady);
        }
        tstart = Date.now();
        setTimeout(buster, delay);
    };
    if ( document.readyState === 'loading' ) {
        document.addEventListener('DOMContentLoaded', domReady);
    } else {
        domReady();
    }
})();


// https://github.com/uBlockOrigin/uAssets/issues/8
/// alert-buster.js
(function() {
    window.alert = new Proxy(window.alert, {
        apply: function(a) {
            console.info(a);
        },
    });
})();


// https://github.com/uBlockOrigin/uAssets/issues/58
/// gpt-defuser.js
(function() {
    const noopfn = function() {
    };
    let props = '_resetGPT resetGPT resetAndLoadGPTRecovery _resetAndLoadGPTRecovery setupGPT setupGPTuo';
    props = props.split(/\s+/);
    while ( props.length ) {
        var prop = props.pop();
        if ( typeof window[prop] === 'function' ) {
            window[prop] = noopfn;
        } else {
            Object.defineProperty(window, prop, {
                get: function() { return noopfn; },
                set: noopfn
            });
        }
    }
})();


// Prevent web pages from using RTCPeerConnection(), and report attempts in console.
/// nowebrtc.js
(function() {
    var rtcName = window.RTCPeerConnection ? 'RTCPeerConnection' : (
        window.webkitRTCPeerConnection ? 'webkitRTCPeerConnection' : ''
    );
    if ( rtcName === '' ) { return; }
    var log = console.log.bind(console);
    var pc = function(cfg) {
        log('Document tried to create an RTCPeerConnection: %o', cfg);
    };
    const noop = function() {
    };
    pc.prototype = {
        close: noop,
        createDataChannel: noop,
        createOffer: noop,
        setRemoteDescription: noop,
        toString: function() {
            return '[object RTCPeerConnection]';
        }
    };
    var z = window[rtcName];
    window[rtcName] = pc.bind(window);
    if ( z.prototype ) {
        z.prototype.createDataChannel = function() {
            return {
                close: function() {},
                send: function() {}
            };
        }.bind(null);
    }
})();


// https://github.com/uBlockOrigin/uAssets/issues/88
/// golem.de.js
(function() {
    const rael = window.addEventListener;
    window.addEventListener = function(a, b) {
        rael(...arguments);
        let haystack;
        try {
            haystack = b.toString();
        } catch(ex) {
        }
        if (
            typeof haystack === 'string' &&
            /^\s*function\s*\(\)\s*\{\s*window\.clearTimeout\(r\)\s*\}\s*$/.test(haystack)
        ) {
            b();
        }
    }.bind(window);
})();


// https://forums.lanik.us/viewtopic.php?f=64&t=32278
// https://www.reddit.com/r/chrome/comments/58eix6/ublock_origin_not_working_on_certain_sites/
/// upmanager-defuser.js
(function() {
    var onerror = window.onerror;
    window.onerror = function(msg, source, lineno, colno, error) {
        if ( typeof msg === 'string' && msg.indexOf('upManager') !== -1 ) {
            return true;
        }
        if ( onerror instanceof Function ) {
            onerror.call(window, msg, source, lineno, colno, error);
        }
    };
    Object.defineProperty(window, 'upManager', { value: function() {} });
})();


// https://github.com/uBlockOrigin/uAssets/issues/110
/// smartadserver.com.js
(function() {
    Object.defineProperties(window, {
        SmartAdObject: { value: function(){} },
        SmartAdServerAjax: { value: function(){} },
        smartAd: { value: { LoadAds: function() {}, Register: function() {} } }
    });
})();


// https://github.com/reek/anti-adblock-killer/issues/3774#issuecomment-348536138
// https://github.com/uBlockOrigin/uAssets/issues/883
/// adfly-defuser.js
(function() {
    // Based on AdsBypasser
    // License:
    //   https://github.com/adsbypasser/adsbypasser/blob/master/LICENSE
    var isDigit = /^\d$/;
    var handler = function(encodedURL) {
        var var1 = "", var2 = "", i;
        for (i = 0; i < encodedURL.length; i++) {
            if (i % 2 === 0) {
                var1 = var1 + encodedURL.charAt(i);
            } else {
                var2 = encodedURL.charAt(i) + var2;
            }
        }
        var data = (var1 + var2).split("");
        for (i = 0; i < data.length; i++) {
            if (isDigit.test(data[i])) {
                for (var ii = i + 1; ii < data.length; ii++) {
                    if (isDigit.test(data[ii])) {
                        var temp = parseInt(data[i],10) ^ parseInt(data[ii],10);
                        if (temp < 10) {
                            data[i] = temp.toString();
                        }
                        i = ii;
                        break;
                    }
                }
            }
        }
        data = data.join("");
        var decodedURL = window.atob(data).slice(16, -16);
        window.stop();
        window.onbeforeunload = null;
        window.location.href = decodedURL;
    };
    try {
        var val;
        var flag = true;
        window.Object.defineProperty(window, "ysmm", {
            configurable: false,
            set: function(value) {
                if (flag) {
                    flag = false;
                    try {
                        if (typeof value === "string") {
                            handler(value);
                        }
                    } catch (err) { }
                }
                val = value;
            },
            get: function() {
                return val;
            }
        });
    } catch (err) {
        window.console.error("Failed to set up Adfly bypasser!");
    }
})();


// https://github.com/uBlockOrigin/uAssets/issues/913
/// disable-newtab-links.js
(function() {
    document.addEventListener('click', function(ev) {
        var target = ev.target;
        while ( target !== null ) {
            if ( target.localName === 'a' && target.hasAttribute('target') ) {
                ev.stopPropagation();
                ev.preventDefault();
                break;
            }
            target = target.parentNode;
        }
    });
})();


/// damoh-defuser.js
(function() {
    const handled = new WeakSet();
    let asyncTimer;
    const cleanVideo = function() {
        asyncTimer = undefined;
        const v = document.querySelector('video');
        if ( v === null ) { return; }
        if ( handled.has(v) ) { return; }
        handled.add(v);
        v.pause();
        v.controls = true;
        let el = v.querySelector('meta[itemprop="contentURL"][content]');
        if ( el === null ) { return; }
        v.src = el.getAttribute('content');
        el = v.querySelector('meta[itemprop="thumbnailUrl"][content]');
        if ( el !== null ) { v.poster = el.getAttribute('content'); }
    };
    const cleanVideoAsync = function() {
        if ( asyncTimer !== undefined ) { return; }
        asyncTimer = window.requestAnimationFrame(cleanVideo);
    };
    const observer = new MutationObserver(cleanVideoAsync);
    observer.observe(document, { childList: true, subtree: true });
})();


/// twitch-videoad.js
// https://github.com/uBlockOrigin/uAssets/issues/5184
// https://github.com/pixeltris/TwitchAdSolutions/commit/6be4c5313035
// https://github.com/pixeltris/TwitchAdSolutions/commit/3d2883ea9e3a
// https://github.com/pixeltris/TwitchAdSolutions/commit/7233b5fd2284
// https://github.com/pixeltris/TwitchAdSolutions/commit/aad8946dab2b
(function() {
    if ( /(^|\.)twitch\.tv$/.test(document.location.hostname) === false ) { return; }
    window.fetch = new Proxy(window.fetch, {
        apply: function(target, thisArg, args) {
            const [ url, init ] = args;
            if (
                typeof url === 'string' &&
                url.includes('gql') &&
                init instanceof Object &&
                init.headers instanceof Object &&
                typeof init.body === 'string' &&
                init.body.includes('PlaybackAccessToken') &&
                init.body.includes('"isVod":true') === false
            ) {
                const { headers } = init;
                if ( typeof headers['X-Device-Id'] === 'string' ) {
                    headers['X-Device-Id'] = 'twitch-web-wall-mason';
                }
                if ( typeof headers['Device-ID'] === 'string' ) {
                    headers['Device-ID'] = 'twitch-web-wall-mason';
                }
            }
            return Reflect.apply(target, thisArg, args);
        }
    });
})();


// https://github.com/NanoAdblocker/NanoFilters/issues/149
/// cookie-remover.js
(function() {
    const needle = '{{1}}';
    let reName = /./;
    if ( /^\/.+\/$/.test(needle) ) {
        reName = new RegExp(needle.slice(1,-1));
    } else if ( needle !== '' && needle !== '{{1}}' ) {
        reName = new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
    const removeCookie = function() {
        document.cookie.split(';').forEach(cookieStr => {
            let pos = cookieStr.indexOf('=');
            if ( pos === -1 ) { return; }
            let cookieName = cookieStr.slice(0, pos).trim();
            if ( !reName.test(cookieName) ) { return; }
            let part1 = cookieName + '=';
            let part2a = '; domain=' + document.location.hostname;
            let part2b = '; domain=.' + document.location.hostname;
            let part2c, part2d;
            let domain = document.domain;
            if ( domain ) {
                if ( domain !== document.location.hostname ) {
                    part2c = '; domain=.' + domain;
                }
                if ( domain.startsWith('www.') ) {
                    part2d = '; domain=' + domain.replace('www', '');
                }
            }
            let part3 = '; path=/';
            let part4 = '; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            document.cookie = part1 + part4;
            document.cookie = part1 + part2a + part4;
            document.cookie = part1 + part2b + part4;
            document.cookie = part1 + part3 + part4;
            document.cookie = part1 + part2a + part3 + part4;
            document.cookie = part1 + part2b + part3 + part4;
            if ( part2c !== undefined ) {
                document.cookie = part1 + part2c + part3 + part4;
            }
            if ( part2d !== undefined ) {
                document.cookie = part1 + part2d + part3 + part4;
            }
        });
    };
    removeCookie();
    window.addEventListener('beforeunload', removeCookie);
})();





// These lines below are skipped by the resource parser.
// <<<< end of private namespace
})();
