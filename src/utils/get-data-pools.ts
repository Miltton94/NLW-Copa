export async function getPoolCount() {
  const res = await fetch('http://192.168.2.159:3333/pools/count', {
    next: { revalidate: 60 * 60 * 24 * 30 },
  })
  return res.json()
}

export async function getGuessCount() {
  const res = await fetch('http://192.168.2.159:3333/guesses/count', {
    next: { revalidate: 60 },
  })
  return res.json()
}

export async function getUsersCount() {
  const res = await fetch('http://192.168.2.159:3333/users/count', {
    next: { revalidate: 60 * 60 * 24 * 30 },
  })
  return res.json()
}

// import { api } from '@/lib/axios'

// export const revalidate = 60 * 60 * 24 // 24 hours

// interface DataPools {
//   poolCount: number
//   guessCount: number
//   usersCount: number
// }

// export const getDataPools = async (): Promise<DataPools> => {
//   const [poolCountResponse, guessCountResponse, usersCountResponse] =
//     await Promise.all([
//       api.get('/pools/count'),
//       api.get('/guesses/count'),
//       api.get('/users/count'),
//     ])

//   return {
//     poolCount: poolCountResponse.data.count,
//     guessCount: guessCountResponse.data.count,
//     usersCount: usersCountResponse.data.count,
//   }
// }
