!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return s[e]=r,n.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r);var t=r("6JpON"),i=r("gjDBM");r("4Nugj");var o=r("2Wl17"),l=r("81Ynm"),d=r("dq16L"),c=r("3GUxH"),g=(o=r("2Wl17"),r("4Nugj")),_=r("kWKTA");const v=JSON.parse(localStorage.getItem("favorite"));r("3jSZ7");c=r("3GUxH");e(t).Loading.pulse(),(0,l.defaultLocalStorage)(),(0,l.headerLogic)(),(0,d.addModalOpenListeners)(),window.setTimeout(e(t).Loading.remove(),5e3),(0,c.addListenersForMobileHeader)(),(0,o.currentLinkUnderline)(),(0,c.viewportWidthCheck)(),(0,i.addEventListenerForBurgerBtn)(),(0,c.searchByForm)(),function(){if(""!==localStorage.favorite&&void 0!==localStorage.favorite&&null!==localStorage.favorite){const e=v.map((({id:e,category:n,wasRead:s,img:a,imgAlt:r,title:t,description:i,date:o,favorite:l,link:d})=>localStorage.getItem("news")?`\n<li class="news__item card" data-id=${e}>\n<p class="news__Already-read is-hidden">Already read \n  <svg class="news__svg news_svg-alreagy-read>\n      <use href="/sprite.e70822e0.svg#Vector-1"></use>\n  </svg>\n</p>\n<div class="news__container">\n  <span class="news__read is-hidden"></span>\n  <div class="news__container-img">\n\n  <button class="news__favorite">Add to favorite\n  <svg class="news__svg news__svg-heart">\n      <use href="/sprite.e70822e0.svg#heartDisable"></use>\n  </svg>\n  <svg class="news__svg news__svg-heart" style="display:none">\n      <use href="/sprite.e70822e0.svg#heartActive"></use>\n  </svg>\n  </button>\n\n  <img src="${a}" alt="${r}" class="news__img"/>\n</div>\n\n<h3 class="news__title">${t}</h3>\n<p class="news__abstract">${i}</p>\n  \n<span class="news__date">${o}</span>\n<p class="news__category news__marker-search">${n}</p>\n<a href="${d}" class="news__link" target = "_blank">Read more</a></div>\n</li>\n`:alert("Not found news"))).join("");g.refs.favouriteNewsContainer.innerHTML=e,(0,_.addNewsToFavoriteArrayInLocalStorage)()}}()}();
//# sourceMappingURL=favorite.3ecf94ed.js.map
