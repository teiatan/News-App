import { refs } from './refs';
import Notiflix from 'notiflix';
import { defaultLocalStorage, headerLogic } from './logicFor3pages';

export function checkUserRegistration(email, password) {
    const apiKey = 'AIzaSyCh4IOUhN3RY5RpYi3dFrDkgc69KqBpI3o';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
          email, password,
          returnSecureToken: true,
        })
      })
        .then(response => response.json())
        .catch();
  };
  
export function authWithEmailAndPassword() {
    const email = refs.authEmailInput.value;
    const password = refs.authPasswordInput.value;
  
    if(email === "" || password === "") {
        emptyInputWarning();
        return;
    };
      Notiflix.Loading.pulse();
      return checkUserRegistration(email, password)
        .then(data => {
          if (data.registered === true) {
              localStorage.auth = "yes";
              localStorage.authId = data.localId;
              return;
          };
          noUserWarning();     
        }).catch();     
  };

function noUserWarning() {
  if (localStorage.language === 'en') {
    Notiflix.Report.failure(
      'There is no such user',
      'Сheck email and password or sign up',
      'Okay',);
  } else if (localStorage.language === 'ua') {
    Notiflix.Report.failure(
      'Невірно веедені дані',
      'Перевірте правильність введення пошти та пароля або зареєструйтеся',
      'Ок',);
  } else {
    Notiflix.Report.failure(
      'There is no such user',
      'Сheck email and password or sign up',
      'Okay',);
  };
};

function emptyInputWarning() {
    if (localStorage.language === 'en') {
        Notiflix.Notify.warning('For signing in you need to enter both E-mail and Password');
    
    } else if (localStorage.language === 'ua') {
        Notiflix.Notify.warning('Для авторизації необхідно ввести логін та пароль');

    } else {
        Notiflix.Notify.warning('For signing in you need to enter both E-mail and Password');

    };
}

export async function authEntranceBtnHandler(e) {
  e.preventDefault();
  await authWithEmailAndPassword(email, password);
  Notiflix.Loading.remove();
  headerLogic();
};

export function signOutBtnHandler() {
  Notiflix.Loading.pulse();
  localStorage.auth = 'no';
  headerLogic();
  defaultLocalStorage();
  Notiflix.Loading.remove();
};