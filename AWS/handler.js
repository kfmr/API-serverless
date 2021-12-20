'use strict';
const books = [{
    id: 1,
    title: "The beauty and the Beast"
  },
  {
    id: 2,
    title: "Coraline"
  },
  {
    id: 3,
    title: "The Glass Coffin"
  },
  {
    id: 4,
    title: "Little Red Riding Hood"
  }
]
module.exports.getBooks = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: books
      },
      null,
      2
    ),
  };
};


module.exports.getBook = async (event) => {
  const {
    booksId
  } = event.pathParameters
  const result = books.find(value => value.id === booksId)
  if (result === undefined) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: "Registro inexistente"
      }, null, 2),
    }
  } else {
    return {
      statusCode: 200,
      body: result
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result,
      null,
      2
    ),
  };
};