import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

import Form from '@/components/Form'
import {
  getGuessCount,
  getPoolCount,
  getUsersCount,
} from '../utils/get-data-pools'

interface CountObjects {
  count: number
}

async function Home() {
  let pool: CountObjects, guess: CountObjects, users: CountObjects

  try {
    const poolData = getPoolCount()
    const guessData = getGuessCount()
    const usersData = getUsersCount()

    const [poolCount, guessCount, usersCount] = await Promise.all<CountObjects>(
      [poolData, guessData, usersData],
    )

    pool = poolCount
    guess = guessCount
    users = usersCount
  } catch (error) {
    console.error('Error fetching data:', error)
    // Definir valores padrão para as variáveis aqui
    pool = { count: 1000 }
    guess = { count: 5000 }
    users = { count: 500 }
  }

  return (
    <div className="mx-auto grid h-screen max-w-5xl grid-cols-1 items-center gap-28 p-6 lg:grid-cols-2 lg:p-0">
      <main>
        <Image src={logoImg} alt="NLW Copa" />

        <h1 className="mt-14 text-[45px] font-bold leading-tight text-white">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex flex-col items-center gap-2 xs:flex-row ">
          <Image
            src={usersAvatarExampleImg}
            alt="Avatar dos usuários"
            quality={100}
            width={147}
          />

          <strong className="text-xl text-gray-100">
            <span className="text-ignite-500">+{users?.count}</span> pessoas já
            estão usando
          </strong>
        </div>

        <Form />

        <p className="mt-4 text-sm leading-relaxed text-gray-300">
          Após criar seu bolão, você receberá um código único que {'\n'}
          poderá usar para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-gray-600 pt-10 text-gray-100 xs:grid-cols-2 xs:divide-x xs:divide-gray-600">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="Ícone de check" />

            <div className="flex items-center gap-2 xs:flex-col xs:gap-0 ">
              <strong className="text-2xl font-bold">+{pool?.count}</strong>
              <span>bolões criados</span>
            </div>
          </div>

          <div className="flex items-center gap-6 xs:justify-end">
            <Image src={iconCheckImg} alt="Ícone de check" />

            <div className="flex items-center gap-2 xs:flex-col xs:gap-0">
              <strong className="text-2xl font-bold">+{guess?.count}</strong>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo um bolão"
        quality={100}
        className="mx-auto"
      />
    </div>
  )
}

export default Home
