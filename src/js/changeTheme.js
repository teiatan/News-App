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
    };

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
        swapThemeBtn.style.border = "0.604701px solid #4B48DB";
        swapThemeBtn.style.borderRadius = "20px";
        ballRef.style.backgroundColor = "#4B48DB";
        ballRef.style.transform = "translate(0px)";
          }
    } catch (err) { }
}

