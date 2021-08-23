import Layout from '../components/Layout'
import { experiences, proyects, skills } from '../profile'
import Link from 'next/link'

const Index = () => (
  <Layout>

    {/* Header card */}

    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="ryan-ray-profile2.jpeg" alt="profile" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>David Hilera</h1>
              <h3>Developer Learning</h3>
              <p>Future web developer Back-end | Entering the world of programming | Technology lover</p>
              <Link href="/hireme">
                <a className="btn btn-outline-light" >Hire me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <section className="row py-2">

      <div className="col-md-4">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {
              skills.map(({ skill, percentage }, index) => (
                <div className="py-3" key={index}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1 className="card-title">Experience</h1>

            <ul>
              {/* List Item Experience */}
              {
                experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>{from} {to ? `- ${to}` : "- current"}</h5>
                    <p>{description}</p>
                  </li>
                ))
              }
            </ul>

            <Link href="/experiences">
              <a className="btn btn-outline-secondary">
                Know more!
              </a>
            </Link>

          </div>
        </div>
      </div>

    </section>

    {/* Portfolio */}

    <section>
      <div className="row">

        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>

              {
                proyects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img className="card-img-top" src={`./${image}`} alt={name} />
                      </div>

                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <Link href="/portfolio">
                          <a className="btn btn-outline-secondary" href="#!">Know more!</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }

              <div className="text-center mt-4">
                <Link href="/proyectos">
                  <a className="btn btn-outline-light">More Proyects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  </Layout>
)

export default Index;