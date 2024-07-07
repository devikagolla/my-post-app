import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import PostsDisplay from './components/PostsDisplay'
import CreatePost from './components/CreatePost'

import './App.css'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      title: 'My first post',
      description: 'A high quality solution beautifully designed for startups',
    },
    {
      id: uuidv4(),
      title: 'My second post',
      description:
        'A high quality solution beautifully designed for startups and Bussiness schools',
    },
    {
      id: uuidv4(),
      title: 'My third post',
      description: 'A high quality solution beautifully designed for startups',
    },
    {
      id: uuidv4(),
      title: 'My fourth post',
      description:
        'A high quality solution beautifully designed for startups and Bussiness schools. ',
    },
    {
      id: uuidv4(),
      title: 'My fifth post',
      description: 'A high quality solution beautifully designed for startups',
    },
  ])

  const handleUpdate = (id, newContent) => {
    setPosts(
      posts.map(post =>
        post.id === id ? {...post, content: newContent} : post,
      ),
    )
  }

  const handleCreate = content => {
    const newPost = {id: posts.length + 1, title: content.title, description: content.description}
    setPosts([...posts, newPost])
  }

  return (
    <div className='app-container'>
      <h1 className='heading'>Posts App</h1>
      <CreatePost onCreate={handleCreate} />
      <PostsDisplay posts={posts} onUpdate={handleUpdate} />
    </div>
  )
}

export default App
