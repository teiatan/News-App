function e(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},t=s.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in a){var s=a[e];delete a[e];var t={id:e,exports:{}};return n[e]=t,s.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,s){a[e]=s},s.parcelRequired7c6=t);var i=t("7Y9D8"),r=t("3oIZ9"),l=t("ivQiK"),o=t("iyfrJ"),c=t("jV1Ao"),d=t("1FEMK"),g=(l=t("ivQiK"),t("krGWQ")),_=t("bnq7P"),p=t("dmjU2");function v(){if(!localStorage.getItem("favorite"))return;const e=JSON.parse(localStorage.getItem("favorite")).map((({id:e,category:s,wasRead:n,img:a,imgAlt:t,title:i,description:r,date:l,favorite:o,link:c})=>`\n <li class="news__item card" data-id=${e}>\n <p class="news__Already-read">Already read &#128504\n   <svg class="news__svg news_svg-alreagy-read>\n       <use href="/sprite.e70822e0.svg#Vector-1"></use>\n   </svg>\n </p>\n <div class="news__container">\n   <span class="news__read is-hidden"></span>\n   <div class="news__container-img">\n\n   <button class="news__favorite">Add to favorite\n   <svg class="news__svg news__svg-heart">\n       <use href="/sprite.e70822e0.svg#heartDisable"></use>\n   </svg>\n   <svg class="news__svg news__svg-heart" style="display:none">\n       <use href="/sprite.e70822e0.svg#heartActive"></use>\n   </svg>\n   </button>\n\n   <img src="${a}" alt="${t}" class="news__img"/>\n </div>\n\n <h3 class="news__title">${i}</h3>\n <p class="news__abstract">${r}</p>\n  \n <span class="news__date">${l}</span>\n <p class="news__category news__marker-search">${s}</p>\n <a href="${c}" class="news__link" target = "_blank">Read more</a></div>\n </li>\n `)).join("");g.refs.favouriteNewsContainer.innerHTML=e,(0,_.addNewsToFavoriteArrayInLocalStorage)(),(0,p.fillAbsentDataInNewsCard)()}const w=document.getElementById("pagination"),u=document.querySelector(".js-prev-page"),f=document.querySelector(".js-next-page");function m(e,s){let n,a="",t=s-1,i=s+1;s>1?(u.disabled=!1,u.addEventListener("click",(()=>{m(e,s-1)}))):u.disabled=!0,s>2&&(a+='<li class="pg-item"><a class="pg-link" data-page="1">1</a></li>',s>3&&(a+='<li class="dots"><span>...</span></li>')),s===e?t-=2:s===e-1&&(t-=1),1===s?i+=2:2===s&&(i+=1);for(let r=t;r<=i;r+=1)r>e||(0===r&&(r+=1),n=s===r?"active":"",a+=`<li class="pg-item ${n}"><a class="pg-link">${r}</a></li>`);s<e-1&&(s<e-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="pg-item"><a class="pg-link" data-page="${e}">${e}</a></li>`),s<e&&f.addEventListener("click",(()=>{m(e,s+1)})),s===e&&f.setAttribute("disbled",!0),w.innerHTML=a}g=t("krGWQ");const h=JSON.parse(localStorage.getItem("favorite")),y=document.getElementById("pagination"),b=Math.ceil(h.length/3);let $=[],L=[];y.addEventListener("click",(function(e){e.preventDefault();if(!e.target.classList.contains("pg-item"))return;const s=+e.target.textContent,n=3*(s-1),a=n+3;$=h.slice(n,a),console.log($),L.push($);const t=document.querySelector(".pg-item.active");t&&t.classList.remove("active");e.target.classList.add("active"),m(b,s),v()}));$=h.slice(3,6),L.push($);const k=$.map((({id:e,category:s,wasRead:n,img:a,imgAlt:t,title:i,description:r,date:l,favorite:o,link:c})=>`\n   <li class="news__item card" data-id=${e}>\n   <p class="news__Already-read">Already read &#128504\n     <svg class="news__svg news_svg-alreagy-read>\n         <use href="/News-App/sprite.e70822e0.svg#Vector-1"></use>\n     </svg>\n   </p>\n   <div class="news__container">\n     <span class="news__read is-hidden"></span>\n     <div class="news__container-img">\n   \n     <button class="news__favorite">Add to favorite\n     <svg class="news__svg news__svg-heart">\n         <use href="/News-App/sprite.e70822e0.svg#heartDisable"></use>\n     </svg>\n     <svg class="news__svg news__svg-heart" style="display:none">\n         <use href="/News-App/sprite.e70822e0.svg#heartActive"></use>\n     </svg>\n     </button>\n   \n     <img src="${a}" alt="${t}" class="news__img"/>\n   </div>\n   \n   <h3 class="news__title">${i}</h3>\n   <p class="news__abstract">${r}</p>\n     \n   <span class="news__date">${l}</span>\n   <p class="news__category news__marker-search">${s}</p>\n   <a href="${c}" class="news__link" target = "_blank">Read more</a></div>\n   </li>\n   `)).join("");g.refs.favouriteNewsContainer.innerHTML=k,L[0],m(b,1),t("1wH5c");d=t("1FEMK");e(i).Loading.pulse(),(0,o.defaultLocalStorage)(),(0,o.headerLogic)(),(0,c.addModalOpenListeners)(),v(),(0,d.addListenersForMobileHeader)(),(0,l.currentLinkUnderline)(),(0,d.viewportWidthCheck)(),(0,r.addEventListenerForBurgerBtn)(),(0,d.searchByForm)(),v(),window.setTimeout(e(i).Loading.remove(),5e3);
//# sourceMappingURL=favorite.f2fbc41f.js.map
