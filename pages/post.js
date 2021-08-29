// import Layout from '../components/Layout'
// import { useRouter } from 'next/router'
// import { posts } from '../profile'

// const Post = () => {

//   //trae el query de la url
//   const router = useRouter();
//   // console.log(router.query.title);

//   //filtra el post actual del query
//   const currentPost = posts.filter(post => post.title === router.query.title)[0]

//   return (
//     <Layout footer={false} title={currentPost.title}>
//       <div className="text-center">
//         <img src={currentPost.imageUrl} alt={currentPost.title} className="img-fluid" style={{ width: '50%' }} />
//         <p className="p-4">{currentPost.content}</p>
//       </div>
//     </Layout>
//   )
// }
// export default Post;