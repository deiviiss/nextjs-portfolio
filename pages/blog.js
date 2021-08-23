import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import { posts } from '../profile'
// import Link from 'next/link'

const blog = () => {
  return (
    <Layout footer={false} title="Blog" dark >
      <div className="row">
        {
          posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))
        }
      </div>
    </Layout>
  )
}


export default blog;