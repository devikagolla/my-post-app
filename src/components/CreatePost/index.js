import React, {useState} from 'react'

const CreatePost = ({onCreate}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onCreate(title,description)
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Enter new post content'
        required
      />
      <textarea
        placeholder='Take a Note...'
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
        rows='6'
      />
      <button type='submit'>Create Post</button>
    </form>
  )
}

export default CreatePost
