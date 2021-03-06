import Layout from '../components/Layout'
import Error from './_error'

const Github = ({ user, statusCode }) => {

  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <img src={user.avatar_url} alt={user.name} style={{ width: "100%;" }} />
            <h2 className="p-2">{user.name}</h2>
            <p className="p-2">{user.bio}</p>
            {/* <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">Blog</a> */}
            <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2">Go GitHub</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Github.proptypes = {};

// conecta con servidor API
export async function getServerSideProps() {

  const res = await fetch('https://api.github.com/users/deiviiss')
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode
    }
  }
}

export default Github;