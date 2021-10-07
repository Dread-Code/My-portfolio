import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { posts } from '../utils/posts'

const PostCard = post => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <img src={post.imageURL} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`} as={`/blog/${post.title}`}>
          <button className="btn btn-dark">Read</button>
        </Link>
      </div>
    </div>
  </div>
)

const blog = () => {
  console.log(posts)
  return (
    <Layout title="My Blog" footer={false} dark>
      <div className="row">
        {posts.map(post => (
          <PostCard {...post} />
        ))}
      </div>
    </Layout>
  )
}

export default blog
