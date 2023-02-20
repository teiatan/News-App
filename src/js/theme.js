const swapThemeBtn = document.querySelector('.checkbox');
const bodyTheme = document.querySelector('body');
const themeWhiteEl = document.querySelector('.theme--white');
const themeBlackEl = document.querySelector('.theme--black');

swapThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  bodyTheme.classList.toggle('darkMode');
  themeBlackEl.classList.toggle('opacityForDark');
  themeWhiteEl.classList.toggle('opacityForDark');
  if (localStorage.getItem('theme') !== 'dark') {
      localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
}

function addDarkClass() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      bodyTheme.classList.add('darkMode');
      swapThemeBtn.checked = true;
    }
  } catch (err) {}
}

addDarkClass();