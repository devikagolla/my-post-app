import React, {useState} from 'react'
import './index.css'

const PostItem = ({post, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(post.content)
  const {title, description} = post

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onUpdate(post.id, editContent)
    setIsEditing(false)
  }

  return (
    <div className='info-container'>
      <div className='post-details'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {isEditing ? (
        <input
          type='text'
          value={editContent}
          onChange={e => setEditContent(e.target.value)}
        />
      ) : (
        <p>{post.content}</p>
      )}
      <button
        onClick={isEditing ? handleSave : handleEdit}
        className='edit-button'
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  )
}

export default PostItem
