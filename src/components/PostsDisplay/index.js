import React from 'react'
import PostItem from '../PostItem'

const PostsDisplay = ({posts, onUpdate}) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} onUpdate={onUpdate} />
      ))}
    </div>
  )
}

export default PostsDisplay
