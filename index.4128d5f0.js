!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o.register("kWKTA",(function(t,r){var i,n,a,l;i=t.exports,n="addNewsToFavoriteArrayInLocalStorage",a=function(){return c},Object.defineProperty(i,n,{get:a,set:l,enumerable:!0,configurable:!0});var d=o("6JpON"),s=o("4Nugj"),f=o("dq16L");function c(){s.refs.favouriteNewsContainer.addEventListener("click",u)}function u(t){if(console.log("клік працює"),"no"===localStorage.auth)return e(d).Notify.failure("Sorry, for using this opportunity you need to be signed in"),void(0,f.openAuthModal)();if("BUTTON"===t.target.nodeName){const e=t.target.closest("li"),r={id:e.dataset.id,category:e.lastElementChild.children[5].innerText,title:e.lastElementChild.children[2].innerText,img:e.lastElementChild.children[1].children[1].attributes.src.nodeValue,description:e.lastElementChild.children[3].innerText,date:e.lastElementChild.children[4].innerText,link:e.lastElementChild.children[6].attributes[0].value,favorite:!0,wasRead:""},i=localStorage.favorite;if(null==i||""===i||i===[]||i==={})localStorage.setItem("favorite",JSON.stringify(r)),t.target.textContent="Remove from favorite";else{const e=JSON.parse(localStorage.getItem("favorite"));if(e.id===r.id)localStorage.favorite="",t.target.textContent="Add to favorite";else if(Array.isArray(e)){const i=e.findIndex((e=>e.id===r.id));if(-1===i){const i=e;i.push(r),localStorage.setItem("favorite",JSON.stringify(i)),t.target.textContent="Remove from favorite"}else{const r=e;r.splice(i,1),localStorage.setItem("favorite",JSON.stringify(r)),t.target.textContent="Add to favorite"}}else{const t=[e,r];localStorage.setItem("favorite",JSON.stringify(t))}}}}}))}();
//# sourceMappingURL=index.4128d5f0.js.map