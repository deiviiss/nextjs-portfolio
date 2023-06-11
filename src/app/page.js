import Image from 'next/image'
import Layout from '../components/Layout'
import { experiences, proyects } from '../../profile'
import Link from 'next/link'

const Index = () => (
  <Layout>

    {/* Header card */}

    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <div className="image-container" >
                <Image fill src="/logo.png" alt="profile" className="img-fluid image" />
              </div>
            </div>
            <div className="col-md-8">
              <h1>David Hilera</h1>
              <h3>Developer Learning</h3>
              <p>Full Stack developer Backendend | Living the world of programming | Technology lover.</p>
              <Link href="mailto:david.hilera@hotmail.com" className="btn btn-outline-light">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <section className="row py-2">
      <div className="col-md-12 py-2">
        <div className="card bg-light animate__animated animate__fadeInUp">
          <div className="card-body">
            <h1 className="card-title">Experience</h1>

            <ul>
              {/* List Item Experience */}
              {
                experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>{from} {to ? `- ${to}` : '- current'}</h5>
                    <p>{description}</p>
                  </li>
                ))
              }
            </ul>

            <Link href="https://www.linkedin.com/in/davidhilera/" className="btn btn-outline-secondary" target="_blank">
              Know more!

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
                proyects.map(({ name, description, image, url }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">

                      <div className="card-body card-proyect">
                        <h3 className="card-title">{name}</h3>
                      </div>

                      <div className="overflow image-container">
                        <Image fill className="card-img-top image" src={`${image}`} alt={name} />
                      </div>

                      <div className="card-body card-proyect">
                        {/* <h3>{name}</h3> */}
                        <p>{description}</p>
                        <Link href={url} className="btn btn-outline-secondary" target="_blank">
                          Know more!
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }

              <div className="text-center mt-4">
                <Link href="https://github.com/deiviiss" className="btn btn-outline-light">
                  More Proyects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default Index
