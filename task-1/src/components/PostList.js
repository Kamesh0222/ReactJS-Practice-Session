import React from 'react';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div className="post-card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
        <p><strong>Likes:</strong> {post.reactions.likes} <strong>Dislikes:</strong> {post.reactions.dislikes} <strong>Views:</strong> {post.views}</p>
        {post.userId === 123 && (
          <div className="post-actions">
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        )}
      </div>
      ))}
    </div>
  );
}

export default PostList;
