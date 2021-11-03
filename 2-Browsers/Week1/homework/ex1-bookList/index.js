//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  const ul = document.createElement('ul');
  const imagesSources = [
    {
      src: 'assets/the_design_of_everyday_things.jpg',
      alt: "The design of everyday things' cover",
    },
    {
      src: 'assets/the_most_human_human.jpg',
      alt: "The most human human's cover",
    },
    {
      src: 'assets/the_pragmatic_programmer.jpg',
      alt: "The pragmatic programmer's cover",
    },
  ];
  books.forEach((book, index) => {
    const li = document.createElement('li');
    const bgColor = book.alreadyRead
      ? 'rgba(91, 240, 131, 50%)'
      : 'rgba(219, 134, 142, 50%)';
    li.style.backgroundColor = bgColor;
    li.style.maxWidth = '30%';
    li.style.display = 'flex';
    li.style.flexDirection = 'column';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    const p = document.createElement('p');
    p.textContent = `${book.title}.  By: ${book.author}`;
    p.style.padding = '15px';
    p.style.textAlign = 'center';
    p.style.color = '#0a075c';
    const img = document.createElement('img');
    img.src = imagesSources[index].src;
    img.alt = imagesSources[index].alt;
    img.style.width = '90%';

    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });
  ul.style.listStyle = 'none';
  ul.style.display = 'flex';
  ul.style.justifyContent = 'space-around';

  return ul;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
