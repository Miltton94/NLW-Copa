'use client'

import { api } from '@/lib/axios'
import { FormEvent, useRef } from 'react'

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleCreatePool(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const title = formData.get('title')

    if (!title) {
      return
    }

    try {
      const response = await api.post('/pools', { title })

      const { code } = response.data

      await navigator.clipboard.writeText(code)

      alert(
        'Bolão criado com sucesso, o código foi copiado para sua área de transferência.',
      )
    } catch (error) {
      console.log(error)
      alert('Erro ao criar bolão, tenta novamente.')
    } finally {
      if (formRef.current) {
        formRef.current.reset()
      }
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleCreatePool}
      className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-2"
    >
      <input
        type="text"
        name="title"
        required
        autoFocus
        placeholder="Qual nome do seu bolão?"
        className="flex-1 rounded border border-gray-600 bg-gray-800 px-6 py-4 text-sm text-gray-100 outline-none focus:ring-2 focus:ring-yellow-600"
      />

      <button className="rounded bg-yellow-500 px-6 py-4 text-sm font-bold uppercase text-gray-900 transition-colors hover:bg-yellow-600">
        CRIAR MEU BOLÃO
      </button>
    </form>
  )
}

export default Form
