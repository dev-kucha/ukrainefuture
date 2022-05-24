/* Artists */

const artists = [
  {
    id: 1,
    firstName: 'Yana',
    secondName: 'Shkiruk',
    age: '12',
    artName: 'Ornamented murals',
  },
  {
    id: 2,
    firstName: 'Olga',
    secondName: 'Oliynuk',
    age: '15',
    artName: 'My Ukraine is picturesque and hospitable',
  },
  {
    id: 3,
    firstName: 'Maria',
    secondName: 'Shchigorets',
    age: '12',
    artName: 'The sun of victory',
  },
  {
    id: 4,
    firstName: 'Oleksandra',
    secondName: 'Vitvitska',
    age: '17',
    artName: 'Native country',
  },

  {
    id: 5,
    firstName: 'Sofiya',
    secondName: 'Lukomskaya',
    age: '8',
    artName: 'Ukraine of hope',
  },

  {
    id: 6,
    firstName: 'Yuliya',
    secondName: 'Melnikovich',
    age: '17',
    artName: 'I and Ukraine',
  },
  {
    id: 7,
    firstName: 'Bohdan',
    secondName: 'Chubik',
    age: '9',
    artName: 'Free country',
  },
  {
    id: 8,
    firstName: 'Valentyna',
    secondName: 'Lukishchenko',
    age: '11',
    artName: 'Picturesque Ukraine',
  },
  {
    id: 9,
    firstName: 'Vira',
    secondName: 'Harchenko',
    age: '14',
    artName: 'Oh, my Ukraine!',
  },
  {
    id: 10,
    firstName: 'Sofia',
    secondName: 'Zaykova',
    age: '17',
    artName: 'My Krasnograd region after the war',
  },
  {
    id: 11,
    firstName: 'Vladyslav',
    secondName: 'Carpa',
    age: '8',
    artName: 'I believe in the Armed Forces',
  },
  {
    id: 12,
    firstName: 'Mykyta',
    secondName: 'Korobka',
    age: '11',
    artName: 'We will endure',
  },
  {
    id: 13,
    firstName: 'Oleksiy',
    secondName: 'Masanov',
    age: '15',
    artName: 'The enemy will not pass',
  },
  {
    id: 14,
    firstName: 'Maxim',
    secondName: 'Kozlovsky',
    age: '12',
    artName: 'Defender of Ukraine',
  },
  {
    id: 15,
    firstName: 'Orusya',
    secondName: 'Kyzmenko',
    age: '11',
    artName: 'War is a horror',
  },
  {
    id: 16,
    firstName: 'Marietta',
    secondName: 'Brutian',
    age: '15',
    artName: 'Heroes of today',
  },
  {
    id: 17,
    firstName: 'Kyrul',
    secondName: 'Krasnousov',
    age: '14',
    artName: 'Angels who save lives',
  },
  {
    id: 18,
    firstName: 'Iryna',
    secondName: 'Kuschova',
    age: '17',
    artName: 'Ukraine in my eyes',
  },
  {
    id: 19,
    firstName: 'Anastasia',
    secondName: 'Puhach',
    age: '10',
    artName: 'When darkness comes, he will always arrive',
  },
  {
    id: 20,
    firstName: 'Nadiya',
    secondName: 'Parchenko',
    age: '14',
    artName: 'Peaceful spring capital',
  },
  {
    id: 21,
    firstName: 'Oleksandr',
    secondName: 'Semisal',
    age: '13',
    artName: 'Kharkiv of the future',
  },
  {
    id: 22,
    firstName: 'Olga',
    secondName: 'Zolotukhina',
    age: '15',
    artName: 'Looking to the future',
  },
  {
    id: 23,
    firstName: 'Vira',
    secondName: 'Moskalenko',
    age: '11',
    artName: 'Happy animals in a free country',
  },
  {
    id: 24,
    firstName: 'Viktoria',
    secondName: 'Radychak',
    age: '8',
    artName: 'Ukraine of the future',
  },
  {
    id: 25,
    firstName: 'Kseniya',
    secondName: 'Chekulayeva',
    age: '11',
    artName: 'Prosperous Ukraine',
  },
  {
    id: 26,
    firstName: 'Maria',
    secondName: 'Ivannikova',
    age: '14',
    artName: 'Rebuilt Ukrainian street',
  },
  {
    id: 27,
    firstName: 'Mark',
    secondName: 'Semenyuk',
    age: '8',
    artName: 'Ukraine of the future',
  },
  {
    id: 28,
    firstName: 'Anastasia',
    secondName: 'Myronenko',
    age: '15',
    artName: 'Forward to a peaceful country',
  },
  {
    id: 29,
    firstName: 'Margarita',
    secondName: 'Baidyuk',
    age: '15',
    artName: 'Sightseeing of the native city',
  },
];

const is = document.querySelectorAll('[data-artistid]');
// console.log(is);

for (let i of is) {
  // console.log(i);
  // console.log(artists[0].id);

  for (const artist of artists) {
    // console.log(
    //   `is[i].dataset = ${i.dataset}, is[i].dataset.artistid = ${
    //     i.dataset.artistid
    //   }, ParseInt(is[i].dataset.artistid) = ${parseInt(i.dataset.artistid)}`
    // );

    // console.log(artist.id);

    if (artist.id == i.dataset.artistid) {
      i.addEventListener('click', function (e) {
        showNote(
          i,
          'center',
          `"${artist.artName}"<br>${artist.secondName} ${artist.firstName}, ${artist.age}`
        );
      });
    }
  }
}

/* робочий код без прив'язки до id */

// for (let i = 0; i < is.length; i += 1) {
//   console.log(i);
//   console.log(
//     `id=${artists[i].id}, El=${is[i]}, html="${artists[i].artName}"<br>${artists[i].secondName} ${artists[i].firstName}, ${artists[i].age}`
//   );
//   console.log(
//     `is[i].dataset = ${is[i].dataset}, is[i].dataset.artistid = ${
//       is[i].dataset.artistid
//     }, ParseInt(is[i].dataset.artistid) = ${parseInt(is[i].dataset.artistid)}`
//   );
//   console.log(`${artists[i].id}`);
//   is[i].addEventListener('click', function (e) {
//     showNote(
//       is[i],
//       'center',
//       `"${artists[i].artName}"<br>${artists[i].secondName} ${artists[i].firstName}, ${artists[i].age}`
//     );
//   });
// }

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
  removeNotes();
  /* experiment */
  //   remove(anchor);
  //   anchor.addEventListener('click', function (e) {
  // console.log(this);
  // note.remove();
  //   });
}
/* experiment */
function removeNotes() {
  document.addEventListener('scroll', function (e) {
    const notes = document.querySelectorAll('.note');
    // console.log(notes);
    for (const note of notes) {
      note.remove();
    }
  });
}
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

// let blockquote = document.querySelector('div[data-info="artist2"]');
// console.log(blockquote);

// showNote(blockquote, 'top-in', 'note top-in note top-in note<br>top-in note top-in note<br>top-in');
// showNote(blockquote, 'top-out', 'note top-out');
// showNote(blockquote, 'right-out', 'note right-out');
// showNote(blockquote, 'bottom-in', 'note bottom-in');
// showNote(blockquote, 'right-in', 'note bottom-in');
