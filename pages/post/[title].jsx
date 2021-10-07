import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import { posts } from '../../utils/posts'

export async function getServerSideProps({ params }) {
  const post = posts.filter(({ title: t }) => t === params.title)[0]

  // Pass data to the page via props
  return { props: { post } }
}

const post = ({ post }) => {
  return (
    <Layout title={post.title} footer={false}>
      <div className="text-center">
        <img src={post.imageURL} alt="" className="img-fluid" style={{ width: '50%' }} />
        <p>{post.content}</p>
      </div>
    </Layout>
  )
}

export default post
