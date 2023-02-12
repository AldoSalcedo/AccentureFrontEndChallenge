import React from 'react'
import { Header } from './Header'
import { Posts } from './Posts'

export const Home = ({ posts }) => {
  return (
    <div>
      <Header
        title="Discovering the World"
        subtitle="[ Making your Life Easier ]"
        buttonLabels={[
          'All Posts',
          'Travel',
          'Lifestyle',
          'Business',
          'Food',
          'Work',
        ]}
      />
      <Posts posts={posts} />
    </div>
  )
}
