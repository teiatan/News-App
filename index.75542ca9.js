!function(){const e=document.querySelector(".days"),t=document.querySelector(".current-date"),a=document.querySelectorAll(".calendar-icons span");let r=new Date,c=(r.getDate(),r.getMonth()),l=r.getFullYear();(()=>{const e={openModalBtn:document.querySelector(".input-form"),closeModalBtn:document.querySelector("body"),modal:document.querySelector(".calendar-wrapper"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hidden-wrapper"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(t){document.getElementById("input-picker").value;if(t.target.closest(".calendar-form"))return;e.input.classList.contains("isActive")&&(e.modal.classList.add("is-hidden-wrapper"),e.input.classList.remove("isActive"),e.arrow.classList.remove("switched"),e.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}))})();const n=["January","February","March","April","May","June","July","August","September","October","November","December"],o=a=>{let o=new Date(l,c,0).getDay(),d=new Date(l,c+1,0).getDate(),s=new Date(l,c,d).getDay(),i=new Date(l,c,0).getDate(),u="";for(let e=o;e>0;e--)u+=`<li class="inactive">${i-e+1}</li>`;for(let e=1;e<=d;e++){u+=`<li class="${e===r.getDate()&&c===(new Date).getMonth()&&l===(new Date).getFullYear()}">${e}</li>`}for(let e=s;e<7;e++)u+=`<li class="inactive">${e-s+1}</li>`;t.innerText=`${n[c]} ${l}`,e.innerHTML=u;document.querySelector(".days").addEventListener("click",(e=>{[...e.currentTarget.children].forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active");let t=e.target.textContent;if(e.target.textContent.length>10)return;let a=(c+1).toString();document.getElementById("input-picker").value=t.padStart(2,"0")+"/"+a.padStart(2,"0")+"/"+l,localStorage.setItem("VALUE",JSON.stringify(t));let r=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(r)),document.querySelector("[data-modal]").classList.add("is-hidden-wrapper"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}))};o();document.querySelector(".days");a.forEach((t=>{t.addEventListener("click",(()=>{c="prev"===t.id?c-1:c+1,c<0||c>11?(r=new Date(l,c,(new Date).getDate()),l=r.getFullYear(),c=r.getMonth()):r=new Date,o();let a=JSON.parse(localStorage.getItem("VALUE"));e.childNodes.forEach((e=>{e.textContent===a&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date");let d=document.querySelector(".calendar-input").value;console.log("Selected Date:",d)}();
//# sourceMappingURL=index.75542ca9.js.map
