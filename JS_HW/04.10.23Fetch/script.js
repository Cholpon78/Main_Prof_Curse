// Заданы ссылки на данные таблиц:
// https://jsonplaceholder.typicode.com/
// Решите список задач, используя конструкцию async/await.

// 1.  Напишите функцию getTodos(username), которая в качестве
// аргумента принимает никнейм пользователя (/users) и
// выводит список его задач (/todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя

// для решения первой задачи нужно сделать два запроса.
// В первом мы должны найти id пользователя для того чтобы объединить users и todos по id
async function getTodos(username) {
  let urlUsers = "https://jsonplaceholder.typicode.com/users";
  let responseUsers = await fetch(urlUsers);
  let dataUser = await responseUsers.json();
  let user = dataUser.find((elem) => elem.username === username);
  //   console.log(user.id);

  let urlTodos = "https://jsonplaceholder.typicode.com/todos";
  let resTodos = await fetch(urlTodos);
  let dataTodos = await resTodos.json();
  //  console.log(dataTodos);
  let result = dataTodos.filter((elem) => elem.userId === user.id);

  // console.log(result);
}
getTodos("Bret");

// этот способ не совсем поняла
// async function getTodos(username) {
//   let urlUsers = `https://jsonplaceholder.typicode.com/users?username=${username}`;
//   let responseUsers = await fetch(urlUsers);
//   let dataUser = await responseUsers.json();

//   //   console.log(user.id);

//   let urlTodos = `https://jsonplaceholder.typicode.com/todos?userId = ${dataUser[0].id}`;
//   let resTodos = await fetch(urlTodos);
//   let dataTodos = await resTodos.json();
//    console.log(dataTodos);
// }
// getTodos("Delphine");

// 2. Напишите функцию getСomments(title), которая в качестве аргумента принимает
//заголовок поста (/posts) и выводит список всех его комментариев (/comments).
// В качестве ответа в консоль выведите массив с комментариями.
//Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.

//  САМОСТОЯТЕЛЬНОЕ РЕШЕНИЕ

async function getPosts(title) {
  let urlPosts = "https://jsonplaceholder.typicode.com/posts";
  let responsePost = await fetch(urlPosts);
  let dataPost = await responsePost.json();
  let post = dataPost.find((elem) => elem.title === title);

  console.log(post.id);
  let urlComments = "https://jsonplaceholder.typicode.com/comments";
  let responseComments = await fetch(urlComments);
  let dataComments = await responseComments.json();
  let comments = dataComments.filter((elem) => elem.postId === post.id);

  console.log(comments);
}
getPosts("qui est esse");

// код 2 задачи через Promise.all
async function getPosts(title) {
  const urlPosts = "https://jsonplaceholder.typicode.com/posts";
  const urlComments = "https://jsonplaceholder.typicode.com/comments";

  try {
    const [postsResponse, commentsResponse] = await Promise.all([
      fetch(urlPosts),
      fetch(urlComments),
    ]);

    const [postData, commentsData] = await Promise.all([
      postsResponse.json(),
      commentsResponse.json(),
    ]);

    const post = postData.find((elem) => elem.title === title);

    if (post) {
      // console.log(post.id);
      const postComments = commentsData.filter(
        (elem) => elem.postId === post.id
      );
      // console.log(postComments);
    } else {
      console.log("Post not found.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getPosts("qui est esse");

//3. Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает
// никнейм пользователя (/users) и выводит все его фотографии (/photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

async function getPhotoByNickName(username) {
  const urlUsers = "https://jsonplaceholder.typicode.com/users";
  const urlAlbums = "https://jsonplaceholder.typicode.com/albums";
  const urlPhotos = "https://jsonplaceholder.typicode.com/photos";

  let userData = await fetch(urlUsers).then((res) => res.json());
  console.log(userData);
  let userId = userData.find((user) => user.username === username).id;

  let albumData = await fetch(urlAlbums).then((res) => res.json());
  let albumUserId = albumData
    .filter((album) => album.userId === userId)
    .map((elem) => elem.id);
  console.log(albumUserId);

  let photosData = await fetch(urlPhotos).then((res) => res.json());

  let result = photosData.filter((elem) => albumUserId.includes(elem.albumId));
  console.log(result);
}

getPhotoByNickName("Antonette");

//   try {
//     const [userRes, albumRes, photoRes] = await Promise.all([
//       fetch(urlUsers),
//       fetch(urlAlbums),
//       fetch(urlPhotos),
//     ]);
//     const [userData, albumData, photoData] = await Promise.all([
//       userRes.json(),
//       albumRes.json(),
//       photoRes.json(),
//     ]);
//     const users = userData.find((user) => user.username === username);

//     if (users) {
//       const albums = albumData.filter((album) => album.userId === users.id);

//       console.log(albums);
//       console.log(albums[0].id);
//       const photos = photoData.filter((photo) => photo.albumId === albums.id);
//       console.log(photos);

//       if (photos.length > 0) {
//         console.log(photos.url);
//       } else {
//         console.log("Photos does not found");
//       }
//     } else {
//       console.log("Album does not found ");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
// getPhotoByNickName("Antonette");
