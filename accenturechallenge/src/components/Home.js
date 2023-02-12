import React from 'react'
import { Header } from './Header'
import { Posts } from './Posts'

export const Home = ({ posts }) => {
  return (
    <div>
      <Header />
      <Posts posts={posts} />
    </div>
  )
}
