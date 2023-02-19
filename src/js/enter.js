// Функція яка відслідковує натискання клавіші Enter на клавіатурі та викликає callback у разі натискання

function trackEnterKey(callback) {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      callback();
    }
  });
}

// Використовувати цю функцію можна наступним чином:

// trackEnterKey(дія() {
//   Виконати дії у разі натискання клавіші Enter
// });

// Передається анонімна функція як callback, яка буде викликана у разі натискання клавіші Enter

export default function trackEnterKey();