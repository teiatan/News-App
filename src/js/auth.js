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

export function addNewUser() {
  const email = refs.authEmailInput.value;
  const password = refs.authPasswordInput.value;
  if(email === "" || password === "") {
    if (localStorage.language === 'en') {
      Notiflix.Notify.warning('For signing up you need to enter both E-mail and Password');

    } else if (localStorage.language === 'ua') {
      Notiflix.Notify.warning('Для того, щоб підписатись, необхідно ввести логін та пароль');

    } else {
      Notiflix.Notify.warning('For signing up you need to enter both E-mail and Password');
      
    };
    return;
    
  };

  checkUserRegistration(email, password).then(data => {
      if(data.registered === true){

          if (localStorage.language === 'en') {
            Notiflix.Report.failure(
              'User with such data already exists',
              'Please, sign in with your password or sign up with another mail',
              'Okay',);

          } else if (localStorage.language === 'ua') {
            Notiflix.Report.failure(
              'Введені дані вже використовуються',
              'Будь ласка, авторизуйтесь або зареєструйтеся, використовуючи іншу пошту',
              'Ок',);

          } else {
            Notiflix.Report.failure(
              'User with such data already exists',
              'Please, sign in with your password or sign up with another mail',
              'Okay',);

          };
          return;
      }

      const apiKey = 'AIzaSyCh4IOUhN3RY5RpYi3dFrDkgc69KqBpI3o';

  fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    })
  })
    .then(response => response.json())
    .then(data => {
      localStorage.authId = data.localId;
      localStorage.auth = "yes";

          if (localStorage.language === 'en') {
            Notiflix.Report.success(
              'Successful registration ',
              'Welcome to more opportunities',
              'Let`s start',
              () => {
                      location.reload();
              },);
          } else if (localStorage.language === 'ua') {
            Notiflix.Report.success(
              'Реєстрація пройшла успішно ',
              'Ласкаво просимо до нових можливостей',
              'Почнімо',
              () => {
                      location.reload();
              },);
          } else {
            Notiflix.Report.success(
              'Successful registration ',
              'Welcome to more opportunities',
              'Let`s start',
              () => {
                      location.reload();
              },);
          };
    }).catch();
  });
}
  
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

export async function signUpBtnHandler(e) {
  e.preventDefault();
  await addNewUser();
  Notiflix.Loading.remove();
  headerLogic();
};
