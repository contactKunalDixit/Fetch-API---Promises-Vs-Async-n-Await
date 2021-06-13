// ! FETCH API - https://www.youtube.com/watch?v=_9vgd9XKlDQ&t=111s

// ! This is promise .then() approach

const url = `https://jsonplaceholder.typicode.com/todos/1`
// // console.log(fetch(url))
// fetch(url)
//   .then((res) => {
//   return res.json()
//   })
//   .then((data) => {
//   console.log(data)
//   })
//   .catch((err) => {
//   console.error(err)
//   })


  // ! This is Async and Await approach




// const loadData = async () => {
//   try {
//     const url2 = `https://jsonplaceholder.typicode.com/todos/1`;
//     const res = await fetch(url2)
//     console.log(res)
//     console.log(res.ok)
//     const data = await res.json()
//     // console.log(data)
//    return data
//   } catch {
//     ((err) => {
//       console.error(err)
//     })
//   }
// }

// ! Async() also returns Promise, amd in order to retrive the 'returned' output, we can either do .then ()
// const data = loadData()
// console.log(data)


// loadData().then((data) => { console.log(data) });

// ! or another hack using IIFE functions, if you's like to just use Async Await

  // (async () => {
  //   const data = await loadData();
  //   console.log(data)
  // })()


// Promise.all can be used when there are multiple fetch requests being sought
const loadData2 = async () => {
  try{
  const url3 = `https://jsonplaceholder.typicode.com/todos/3`;
  const url4 = `https://jsonplaceholder.typicode.com/todos/4`;
  const url5 = `https://jsonplaceholder.typicode.com/todos/5`;

  const results = await Promise.all([
    fetch(url3),
    fetch(url4),
    fetch(url5)
  ])
  const groupRes =results.map((result) => {return result.json() })
  const groupData = await Promise.all(groupRes)
    return groupData
  } catch {
    (err) => { console.error(err)}
  }
}
// console.log(loadData2())
(async () => {
  const data = await loadData2()
  console.log(data)
})
()
