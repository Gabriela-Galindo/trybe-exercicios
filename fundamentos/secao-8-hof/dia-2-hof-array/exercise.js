const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // exercicio 1

  function authorBornIn1947(lista) {
    return lista.author.birthYear === 1947;
  }

  // console.log(books.find(authorBornIn1947).author.name);

  //exercicio 2

  function smallerName() {
    let nameBook;
    books.forEach((book) => {
      if(!nameBook || book.name.length < nameBook.length ) {
        nameBook = book.name;
      };
    });
    return nameBook;
  }

  // console.log(smallerName(books));

  //exercicio 3

  function getNamedBook() {
    return books.find((book) => book.name.length === 26);
  }

  // console.log(getNamedBook(books).name);

  //exercicio 4

  function booksOrderedByReleaseYearDesc() {
   return books.sort((a,b) => b.releaseYear - a.releaseYear);
  };

  // console.log(booksOrderedByReleaseYearDesc(books));

  //exercicio 5

  function everyoneWasBornOnSecXX() {
   return books.every((book) => book.author.birthYear < 2000 && book.author.birthYear > 1901);
  }

  // console.log(everyoneWasBornOnSecXX(books));

  //exercicio 6

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear < 1990 || book.releaseYear >= 1980);
}

// console.log(someBookWasReleaseOnThe80s(books));

//exercicio 7

const expectedResult = false;

function authorUnique() {
  return books.some((book) => book.author.birthYear !== book.author.birthYear && book.author.name !== book.author.name)
}

// console.log(authorUnique(books));