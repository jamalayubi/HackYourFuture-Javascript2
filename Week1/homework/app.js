'use strict';
function main() {

  const books = {
    origin: {
      bookTitle: 'Origin',
      language: 'English',
      author: 'Dan Brown',
    },
    inferno: {
      bookTitle: 'Inferno',
      language: 'English',
      author: 'Dan Brown',

    },
    please_dont_be_sheep: {
      bookTitle: 'Please_dont_be_sheep',
      language: 'Persain',
      author: 'Mohammad Naamni ',
    },
    harry_potter: {
      bookTitle: 'Harry potter',
      language: 'English',
      author: 'J. K. Rowling',
    },
    the_holy_Quran: {
      bookTitle: 'The holy Quran',
      language: 'Arabic',
      author: 'Muhammad',
    },
    lord_of_the_rings: {
      bookTitle: 'Lord of the rings',
      language: 'English',
      author: 'J.R.R Tolkien',
    },
    Rumi: {
      bookTitle: 'Rumi',
      language: 'Persian',
      author: 'Jalal ad-Din Muhammad Rumi',
    },
    think_and_grow_rich: {
      bookTitle: 'Think and grow rich',
      language: 'English',
      author: 'Napoleon Hill',
    },
    the_little_prince: {
      bookTitle: 'The little Prince',
      language: 'Englisj',
      author: 'Antoine',
    },
    speak_to_win: {
      bookTitle: 'Speak to Win',
      language: 'English',
      author: 'Brain Tracy',
    },
  };

  let bookImages = {
    origin: 'images\\Origin.jpeg',
    inferno: 'images\\Inferno.jpg',
    please_dont_be_sheep: 'images\\please.jpg',
    harry_potter: 'images\\Harry potter.jpeg',
    the_holy_Quran: 'images\\The Holy Quran.gif',
    lord_of_the_rings: 'images\\lord of the ring.jpg',
    Rumi: 'images\\Rumi.jpg',
    think_and_grow_rich: 'images\\Think and grow rich.jpg',
    the_little_prince: 'images\\the lil prince.jpg',
    speak_to_win: 'images\\speak to win.jpg',
  };

  const pageHeader = document.createElement('h1');
  pageHeader.innerHTML = '10 books I have read!';
  const content = document.getElementById('book-list');
  content.appendChild(pageHeader);

  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'div-wrapper');
  content.appendChild(contentDiv);

  for (const key in books) {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', key);
    wrapper.setAttribute('class', 'wrapper');
    contentDiv.appendChild(wrapper);

    const header = document.createElement('h2');
    header.innerHTML = books[key]['bookTitle'];
    wrapper.appendChild(header);

    const list = document.createElement('ul');
    for (let i = 1; i < Object.keys(books[key]).length; i++) {
      list.innerHTML += '<li> ' + Object.keys(books[key])[i] + ' :\t' + Object.values(books[key])[i] + '</li>';
      wrapper.appendChild(list);
    }

    const image = document.createElement('img');
    image.src = getSource(key, bookImages);
    image.setAttribute('alt', 'book cover');
    wrapper.appendChild(image);
  }

}

function getSource(bookId, bookImages) {
  return bookImages[bookId]
}

window.addEventListener('load', main());
