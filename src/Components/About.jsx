'use client'
import { useGetUserAllDetailsQuery } from '@/app/Store/Middleware/getUserApi'
import React from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter()

  const { data, error, isLoading } = useGetUserAllDetailsQuery({})
  console.log(router)
  return (
    <div>
      <h1>this is About page</h1>
      <button type="button" onClick={() => router.push('/page/home')}>
        Click
      </button>
    </div>
  )
}

export default About