import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Layout'
import { posts } from '../utils/posts'

const post = () => {
  const {
    query: { title }
  } = useRouter()

  const post = posts.filter(({ title: t }) => t === title)[0]
  return (
    <Layout title={post.title}>
      <div className="text-center">
        <img src={post.imageURL} alt="" className="img-fluid" style={{ width: '50%' }} />
        <p>{post.content}</p>
      </div>
    </Layout>
  )
}

export default post
