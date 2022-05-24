const is = document.querySelectorAll('[data-info]');
console.log(is);

const artists = [
  {
    firstName: 'Yana',
    secondName: 'Shkiruk',
    age: '12',
    artName: 'Ornamented murals',
  },
  {
    firstName: 'Olga',
    secondName: 'Oliynuk',
    age: '',
    artName: 'My Ukraine is picturesque and hospitable',
  },
  {
    firstName: 'Maria',
    secondName: 'Shchigorets',
    age: '12',
    artName: 'The sun of victory',
  },
  {
    firstName: 'Oleksandra',
    secondName: 'Vitvitska',
    age: '17',
    artName: 'Native country',
  },

  {
    firstName: 'Sofiya',
    secondName: 'Lukomskaya',
    age: '8',
    artName: 'Ukraine of hope',
  },

  {
    firstName: 'Yuliya',
    secondName: 'Melnikovich',
    age: '17',
    artName: 'I and Ukraine',
  },
  {
    firstName: 'Bohdan',
    secondName: 'Chubik',
    age: '9',
    artName: 'Free country',
  },
  {
    firstName: 'Valentyna',
    secondName: 'Lukishchenko',
    age: '11',
    artName: 'Picturesque Ukraine',
  },
  {
    firstName: 'Vira',
    secondName: 'Harchenko',
    age: '',
    artName: 'Oh, my Ukraine!',
  },
  {
    firstName: 'Sofia',
    secondName: 'Zaykova',
    age: '17',
    artName: 'My Krasnograd region after the war',
  },
  {
    firstName: 'Vladyslav',
    secondName: 'Carpa',
    age: '8',
    artName: 'I believe in the Armed Forces',
  },
  {
    firstName: 'Mykyta',
    secondName: 'Korobka',
    age: '11',
    artName: 'We will endure',
  },
  {
    firstName: 'Oleksiy',
    secondName: 'Masanov',
    age: '15',
    artName: 'The enemy will not pass',
  },
  {
    firstName: 'Maxim',
    secondName: 'Kozlovsky',
    age: '12',
    artName: 'Defender of Ukraine',
  },
  {
    firstName: 'Orusya',
    secondName: 'Kyzmenko',
    age: '',
    artName: 'War is a horror',
  },
  {
    firstName: 'Marietta',
    secondName: 'Brutian',
    age: '15',
    artName: 'Heroes of today',
  },
  {
    firstName: 'Kyrul',
    secondName: 'Krasnousov',
    age: '14',
    artName: 'Angels who save lives',
  },
  {
    firstName: 'Iryna',
    secondName: 'Kuschova',
    age: '17',
    artName: 'Ukraine in my eyes',
  },
  {
    firstName: 'Anastasia',
    secondName: 'Puhach',
    age: '10',
    artName: 'When darkness comes, he will always arrive',
  },
  {
    firstName: 'Nadiya',
    secondName: 'Parchenko',
    age: '14',
    artName: 'Peaceful spring capital',
  },
  {
    firstName: 'Oleksandr',
    secondName: 'Semisal',
    age: '13',
    artName: 'Kharkiv of the future',
  },
  {
    firstName: 'Olga',
    secondName: 'Zolotukhina',
    age: '15',
    artName: 'Looking to the future',
  },
  {
    firstName: 'Vira',
    secondName: 'Moskalenko',
    age: '11',
    artName: 'Happy animals in a free country',
  },
  {
    firstName: 'Viktoria',
    secondName: 'Radychak',
    age: '',
    artName: 'Ukraine of the future',
  },
  {
    firstName: 'Kseniya',
    secondName: 'Chekulayeva',
    age: '11',
    artName: 'Prosperous Ukraine',
  },
  {
    firstName: 'Maria',
    secondName: 'Ivannikova',
    age: '14',
    artName: 'Rebuilt Ukrainian street',
  },
  {
    firstName: 'Mark',
    secondName: 'Semenyuk',
    age: '8',
    artName: 'Ukraine of the future',
  },
  {
    firstName: 'Anastasia',
    secondName: 'Myronenko',
    age: '',
    artName: 'Forward to a peaceful country',
  },
  {
    firstName: 'Margarita',
    secondName: 'Baidyuk',
    age: '15',
    artName: 'Sightseeing of the native city',
  },
];

// for (const i of is) {
//   i.addEventListener('click', function (e) {
//     console.log(i);
//     showNote(i, 'center', '"Ornamented murals"<br>Shkiruk Yana, 12');
//   });
// }

for (let i = 0; i < is.length; i += 1) {
  console.log(i);
  console.log(
    `"${artists[i].artName}"<br>${artists[i].secondName} ${artists[i].firstName}, ${artists[i].age}`
  );
  is[i].addEventListener('click', function (e) {
    showNote(
      is[i],
      'center',
      `"${artists[i].artName}"<br>${artists[i].secondName} ${artists[i].firstName}, ${artists[i].age}`
    );
  });
}

/* https://plnkr.co/edit/jCvISEdrCHYV0e5D?p=preview&preview */

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + scrollY,
    left: box.left + scrollX,
  };
}

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  note.addEventListener('click', function (e) {
    this.remove();
  });
  document.body.append(note);

  positionAt(anchor, position, note);

  //   remove(anchor);
  //   anchor.addEventListener('click', function (e) {
  // console.log(this);
  // note.remove();
  //   });
}
/*  */
// function remove(anchor) {
//   anchor.addEventListener('click', function (e) {
//     const notes = document.querySelectorAll('.note');
//     console.log(notes);
//     for (const note of notes) {
//       note.remove;
//     }
//   });
// }
/*  */
function positionAt(anchor, position, elem) {
  let anchorCoords = getCoords(anchor);

  switch (position) {
    case 'top-out':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      break;

    case 'right-out':
      elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'bottom-out':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px';
      break;

    case 'top-in':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'right-in':
      elem.style.width = '150px';
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'bottom-in':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + 'px';
      break;

    case 'center':
      elem.style.left = anchorCoords.left + anchor.offsetWidth / 2 - elem.offsetWidth / 2 + 'px';
      elem.style.top = anchorCoords.top + anchor.offsetHeight / 2 - elem.offsetHeight / 2 + 'px';
      break;
  }
}

let blockquote = document.querySelector('div[data-info="artist2"]');
console.log(blockquote);

// showNote(blockquote, 'top-in', 'note top-in note top-in note<br>top-in note top-in note<br>top-in');
// showNote(blockquote, 'top-out', 'note top-out');
// showNote(blockquote, 'right-out', 'note right-out');
// showNote(blockquote, 'bottom-in', 'note bottom-in');
// showNote(blockquote, 'right-in', 'note bottom-in');
