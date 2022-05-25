import artists from './artists.js';

const is = document.querySelectorAll('[data-artistid]');

for (let i of is) {
  for (const artist of artists) {
    if (artist.id == i.dataset.artistid) {
      i.addEventListener('click', function (e) {
        showNote(
          i,
          'center',
          `"${artist.artNameUkr}"<br>${artist.secondNameUkr} ${artist.firstNameUkr}, ${artist.age}`
        );
      });
    }
  }
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
  removeNotes();
}
/* experiment */
function removeNotes() {
  document.addEventListener('scroll', function (e) {
    const notes = document.querySelectorAll('.note');

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
