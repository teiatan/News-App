!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var a=o("6JpON"),s=o("gjDBM");o("4Nugj");var r=o("2Wl17"),c=o("81Ynm"),l=o("dq16L"),g=o("3GUxH"),d=(r=o("2Wl17"),o("3jSZ7")),h=o("4Nugj");const m=[{dateOfReading:"21.02.2023",readNews:[{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"},{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"},{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"}]},{dateOfReading:"20.02.2023",readNews:[{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"},{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"},{id:"100000008772688",category:"Technology",wasRead:!0,img:"https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",imgAlt:"Altimg",title:"A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",description:"A very strange conversation with the chatbot built into Microsoft’s search engin...",date:"2023/02/17",favorite:"true",link:"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"}]}];localStorage.setItem("read",JSON.stringify(m)),e(a).Loading.pulse(),(0,c.defaultLocalStorage)(),(0,l.addModalOpenListeners)(),(0,c.headerLogic)(),function(){if(""!==localStorage.read&&void 0!==localStorage.read&&null!==localStorage.read){console.log("gfhj");const e=m.map((({dateOfReading:e,readNews:t})=>(console.log(e),`\n        <li class="date__item">\n            <h3 date__title>${e}</h3>\n            <svg class="read-btn__icon--pointer" width="9px" height="15px">\n                <use href="/src/img/sprite.svg#icon-arrow-down"></use>\n            </svg>\n            <svg class="read-btn__icon--pointer" width="9px" height="15px">\n                <use href="/src/img/sprite.svg#icon-arrow-up"></use>\n            </svg>\n            <ul class="date__news-list render-container">${t.map((({id:e,category:t,wasRead:n,img:i,imgAlt:o,title:a,description:s,date:r,favorite:c,link:l})=>localStorage.getItem("news")?`\n                <li class="news__item card" data-id=${e}>\n                <span class="news__category is-hidden">${t}</span>\n                <span class="news__read is-hidden"></span>\n                <div class="news__container-img">\n                \n                <button class="news__favorite">Add to favorite</button>\n                <img src="${i}" alt="${o}" class="news__img"/>\n                </div>\n                <h3 class="news__title">${a}</h3>\n                <p class="news__abstract">${s}</p>\n                \n                <span class="news__date">${r.replaceAll("-","/")}</span>\n                <a href="${l}" class="news__link" target = "_blank">Read more</a>\n            </li>\n        `:alert("Not found news"))).join("")}\n        </ul>\n        </li>`))).join("");h.refs.renderContainerReadPage.innerHTML=e}}(),window.setTimeout(e(a).Loading.remove(),5e3),(0,g.addListenersForMobileHeader)(),(0,g.viewportWidthCheck)(),(0,r.currentLinkUnderline)(),(0,s.addEventListenerForBurgerBtn)(),(0,d.changeTheme)(),(0,d.addDarkClass)()}();
//# sourceMappingURL=read.e9401887.js.map
