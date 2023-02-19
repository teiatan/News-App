const swapThemeBtn = document.querySelector('.label');

swapThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
    
  if (localStorage.getItem('theme') !== 'dark') {
      localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
    }
    addDarkClass();
    }

function addDarkClass() {
    try {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('dark', '')
      swapThemeBtn.checked = true;
    } else {
        {
        document.body.removeAttribute('dark');
        }
          }
  } catch (err) {}
}

