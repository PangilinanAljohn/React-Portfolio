import React from 'react'

function ProjectsCard({ src, url, title }) {
  return (
    <a href={url} target='_blank'>
        <img className="hover" src={src} alt={`${title} logo`} />
        <h3>{title}</h3>
    </a>
  )
}

export default ProjectsCard