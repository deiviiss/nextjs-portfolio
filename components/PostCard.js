// import Layout from './Layout'
import Link from 'next/link'

const PostCard = ({ post }) => (
  <div className="col-md-4 p-2">
    <div className="card">
      <div className="overflow">
        <img src={post.imageUrl} alt={post.title} className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`}>
          <button className="btn btn-outline-secondary">Read</button>
        </Link>
      </div>
    </div>
  </div>
)

export default PostCard;