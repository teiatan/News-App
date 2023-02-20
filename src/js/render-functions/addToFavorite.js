class AddNewsToFavorite {
  constructor() {
    (this.key = news =
      {
        id: '100000008772688',
        category: 'Technology',
        wasRead: true,
        img: 'https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png',
        imgAlt: 'Altimg',
        title: 'A Conversation With Bing’s Chatbot Left Me Deeply Unsettled',
        description:
          'A very strange conversation with the chatbot built into Microsoft’s search engin...',
        date: '2023/02/17',
        favorite: 'true',
        link: 'https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html',
      }),
      this.button;
  }

  getData() {
    const dataInLocalStorage = localStorage.getItem(this.key);
    if (dataInLocalStorage !== null) {
      return JSON.parse(dataInLocalStorage);
    }
    return [];
  }

  addData(id) {
    let data = this.getData();
    let dataToAdd = false;
    const index = data.indexOf(id);

    if (index === -1) {
      data.push(id);
      dataToAdd = true;
    } else {
      data.splice(index, 1);
    }

    localStorage.setItem(this.key, JSON.stringify(data));

    return { dataToAdd, data };
  }
}

const addNewsToFavorite = new AddNewsToFavorite();

export function onAddNewsToFavorite() {
  document.querySelector('.news__item').addEventListener('click', event => {
    addNewsToFavorite.button =
      event.target.classlist.contains('news__favorite');
  });

  if (!addNewsToFavorite.button) {
    return;
  }

  addNewsToFavorite.addData(data);
}
