import Layout from '../../components/Layout'
// import Error from './_error'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'GitHub',
}

// conecta con servidor API
async function getData () {
  const res = await fetch('https://api.github.com/users/deiviiss')

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()

  // const statusCode = res.status > 200 ? res.status : false
  // return {
  //   props: {
  //     user: data,
  //     statusCode
  //   }
  // }
}

const Github = async ({ user, statusCode }) => {
  const data = await getData()
  console.log(data)
  if (statusCode) {
    return '<Error statusCode={statusCode} />'
  }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <div className="image-container">
              <Image fill className="image" src={data.avatar_url} alt='user' />
            </div>
            <h2 className="p-2">{data.name}</h2>
            <p className="p-2">{data.bio}</p>
            <Link href={data.blog} target="_blank" className="btn btn-outline-secondary my-2">Blog</Link>
            <Link href={data.html_url} target="_blank" className="btn btn-outline-secondary my-2" rel="noreferrer">Go GitHub</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Github.proptypes = {}

export default Github
