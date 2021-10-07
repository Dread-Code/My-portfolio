import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { experience } from '../utils/experience'
import { projects } from '../utils/projects'
import { skills } from '../utils/skills'

const index = () => {
  return (
    <Layout>
      {/* header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://avatars.githubusercontent.com/u/60331479?v=4"
                  alt="lucas-ospina-jpg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Lucas Ospina A.</h1>
                <h3>Javascript Fullstack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod exercitationem ab,
                  praesentium eos blanditiis, quasi cumque reiciendis tempora consequa
                </p>
                <a href="/hireme">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Second section  */}
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, porcentage }) => (
                <div className="py-3" key={skill}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${porcentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>
              {experience.map(({ title, description, from, to }) => (
                <div>
                  <ul>
                    <li>
                      <h3>{title}</h3>
                      <h5>{`${from}-${to}`}</h5>
                      <p>{description}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Portolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="car card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ title, description, imagePath }) => (
                <div className="col-md-4 p-2" key={title}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${imagePath}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <a href="#!">Know more</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/portfolio">
                <a className="btn btn- outline-light">More Projects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
