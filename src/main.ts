const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';
interface IData {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

type Data = IData[]

const getData = async <T extends Data> (url: string): Promise<T> => {
  return fetch(url)
    .then(data => {
      if (!data.ok) {
        throw new Error(data.statusText)
      }
      return data.json()
    })
}

getData(COMMENTS_URL)
  .then(data => {
    data.forEach(it => {
      console.log(`ID: ${it.id}, Email: ${it.email}`)
    })
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */