const swapThemeBtn = document.querySelector('.label');
const ballRef = document.querySelector('.ball');
swapThemeBtn.addEventListener('click', changeTheme);
addDarkClass();

function changeTheme() {
    if (localStorage.getItem('theme') !== 'dark') {
        localStorage.setItem('theme', 'dark');
  } else {
        localStorage.setItem('theme', 'light');
        swapThemeBtn.checked = false;
    }
    addDarkClass();
    }

function addDarkClass() {
    try {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('dark', '');
      swapThemeBtn.checked = true;
      swapThemeBtn.style.background = "#4b48db";
        swapThemeBtn.style.border = "1px solid #fff";
        swapThemeBtn.style.borderRadius = "20px";
        ballRef.style.backgroundColor = "#fff";
        ballRef.style.transform = "translate(20px)";
    } else {
        document.body.removeAttribute('dark');
        swapThemeBtn.style.background = "#fff";
        swapThemeBtn.style.border = "1px solid #000";
        swapThemeBtn.style.borderRadius = "20px";
        ballRef.style.backgroundColor = "#000";
        ballRef.style.transform = "translate(-20px)";
          }
    } catch (err) { }
}

export function addStylesForDarkThemeBtn() {
 
    if (localStorage.theme === 'dark') {
        console.log(ballRef);
        //swapThemeBtn.setAttribute(style = "background:#4b48db; border: 1px solid #fff; border-radius: 20px;");
        //ballRef.setAttribute(style = "background-color: #fff; transform: translate(20px);");

        swapThemeBtn.style.background = "#4b48db";
        swapThemeBtn.style.border = "1px solid #fff";
        swapThemeBtn.style.borderRadius = "20px";
        ballRef.style.backgroundColor = "#fff";
        ballRef.style.transform = "translate(20px)";
                }
}
   

// if (localStorage.getItem('theme') === 'dark') {
// 			swapThemeBtn.checked = true;
// 			setDarkTheme();
// };
// swapThemeBtn.addEventListener('click', onClick)
// function onClick() {
//     if (this.checked) {
//         setDarkTheme();
//     } else {
//         setLightTheme();
//     }
// };
// localStorage.setItem('theme', themeSwitch.checked ? 'dark' : 'light');

// function setLightTheme() {
// 			localStorage.setItem('light', '');
// 		}

// 		// функція для встановлення темної теми стилю
// 		function setDarkTheme() {
// 			 document.body.setAttribute('dark', '');
// 		}



// ======================================================