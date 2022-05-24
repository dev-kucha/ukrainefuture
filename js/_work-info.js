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
