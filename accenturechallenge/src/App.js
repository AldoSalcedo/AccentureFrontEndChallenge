import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { PostDetails } from './components/PostDetails'
import fetcher from './fetcher'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher()
      setPosts(Array.isArray(data) ? data : [])
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home posts={posts} />}></Route>
          {posts.map((post) => (
            <Route
              path={`/posts/${post.id}`}
              element={<PostDetails post={post} />}
              key={post.id}
            />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App
