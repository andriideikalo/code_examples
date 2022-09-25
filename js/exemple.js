
// function checkPassword(password) {
//     password = 2;
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//        // Change code below this line

//     // if (password === null) {
//     //   message = "Canceled by user!";
//     // } else if (password === ADMIN_PASSWORD) {
//     //   message = "Welcome!";
//     // } else {
//     //   message = "Access denied, wrong password!";
//     // }

//     switch (password) {
//         case null:
//             message = `Canceled by user!`;
//             break;
//         case ADMIN_PASSWORD:
//             message = `Welcome!`;
//             break;
//         default:
//             message = `Access denied, wrong password!`;

//     }

//     // Change code above this line
//     return message;
// }
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
  
//   let loc = user.location.city;
//   console.log(loc); // Объект location
  
//   const country = user.location.country;
//   console.log(country); // 'Jamaica'

//   const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book["title"];
//   console.log(bookTitle); // 'The Last Kingdom'
  
//   const bookGenres = book["genres"];
//   console.log(bookGenres); // ['historical prose', 'adventurs']
  
// book.author = "andrii";

//   const propKey = book["author"];
// //   const bookAuthor = book[propKey];
// console.log(propKey); // 'Bernard Cornwell'
// console.log(book);

// book.name = "free";
// console.log(book);

// // console.log(book.rating);
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.table(key);
//     // Значение свойства с таким ключом
//     console.table(book);
// }
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const dog = Object.create(book);
// dog.name = "kola";
  
//   for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (1 > 0) {
//       console.log(key);
        // console.log(dog.title);
        // console.log(dog.name);
    // }
  
    // Если это не собственное свойство - ничего не делаем
//   }


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смешного человека",
//       author: "Федор Достоевский",
//       rating: 7.75,
//     },
// ];




// let bookNames = 0;

// for (const book of books) {
//     bookNames += book.rating;
    
// }
// let total = (bookNames / books.length).toFixed(3);

// console.log(total);

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  apartment.owner = {
  name: "Henry",
  phone: "982-126-1588",
  email: "henry.carter@aptmail.com",
  };
  
console.log(apartment);



