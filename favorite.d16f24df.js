function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var a=o("7Y9D8"),r=o("3oIZ9");o("krGWQ");var s=o("ivQiK"),l=o("iyfrJ"),c=o("jV1Ao"),d=o("1FEMK"),g=(s=o("ivQiK"),o("krGWQ"));const h=[{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"},{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"},{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"}];localStorage.setItem("news",JSON.stringify(h));localStorage.getItem("news");o("1wH5c"),e(a).Loading.pulse(),(0,l.defaultLocalStorage)(),(0,l.headerLogic)(),(0,c.addModalOpenListeners)(),function(){if(""!==localStorage.favorite&&void 0!==localStorage.favorite&&null!==localStorage.favorite){const e=h.map((({id:e,category:t,wasRead:n,img:i,imgAlt:o,title:a,description:r,date:s,favorite:l,link:c})=>localStorage.getItem("news")?`\n        <li class="news__item card" data-id=${e}>\n        <span class="news__category is-hidden">${t}</span>\n        <span class="news__read is-hidden"></span>\n        <div class="news__container-img">\n        \n        <button class="news__favorite">Add to favorite</button>\n        <img src="${i}" alt="${o}" class="news__img"/>\n        </div>\n        <h3 class="news__title">${a}</h3>\n        <p class="news__abstract">${r}</p>\n        \n        <span class="news__date">${s.replaceAll("-","/")}</span>\n        <a href="${c}" class="news__link" target = "_blank">Read more</a>\n    </li>\n`:alert("Not found news"))).join("");g.refs.favouriteNewsContainer.innerHTML=e}}(),window.setTimeout(e(a).Loading.remove(),5e3),(0,d.addListenersForMobileHeader)(),(0,s.currentLinkUnderline)(),(0,d.viewportWidthCheck)(),(0,r.addEventListenerForBurgerBtn)();
//# sourceMappingURL=favorite.d16f24df.js.map