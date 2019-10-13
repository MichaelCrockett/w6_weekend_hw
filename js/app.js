document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const versesListItem = createVersesListItem(event.target);
  const versesList = document.querySelector('#verses-list');
  versesList.appendChild(versesListItem);

  event.target.reset();
}

const createVersesListItem = function (form) {
  const versesListItem = document.createElement('li');
  versesListItem.classList.add('verses-list-item');

  const book = document.createElement('h2');
  book.textContent = form.book.value;
  versesListItem.appendChild(book);

  const chapter = document.createElement('h3');
  chapter.textContent = form.chapter.value;
  versesListItem.appendChild(chapter);

  const verse = document.createElement('h3');
  verse.textContent = form.verse.value;
  versesListItem.appendChild(verse);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  versesListItem.appendChild(category);

  return versesListItem;
}

const handleDeleteAllClick = function (event) {
  const versesList = document.querySelector('#verses-list');
  versesList.innerHTML = '';
}
