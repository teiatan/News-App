const e=document.getElementById("pagination"),a=document.querySelector(".js-prev-page"),l=document.querySelector(".js-next-page");!function s(t,i){let n,c="",d=i-1,p=i+1;i>1?(a.disabled=!1,a.addEventListener("click",(()=>{s(t,i-1)}))):a.disabled=!0,i>2&&(c+='<li class="pg-item"><a class="pg-link" data-page="1">1</a></li>',i>3&&(c+='<li class="dots"><span>...</span></li>')),i===t?d-=2:i===t-1&&(d-=1),1===i?p+=2:2===i&&(p+=1);for(let e=d;e<=p;e+=1)e>t||(0===e&&(e+=1),n=i===e?"active":"",c+=`<li class="pg-item ${n}"><a class="pg-link" data-page="${e}">${e}</a></li>`);i<t-1&&(i<t-2&&(c+='<li class="dots"><span>...</span></li>'),c+=`<li class="pg-item"><a class="pg-link" data-page="${t}">${t}</a></li>`),i<t&&l.addEventListener("click",(()=>{s(t,i+1)})),i===t&&l.setAttribute("disbled",!0),e.innerHTML=c}(20,5);
//# sourceMappingURL=favorite.27454d59.js.map