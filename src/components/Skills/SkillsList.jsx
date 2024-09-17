const SkillsList = ({ key, src, skill }) => {
  return (
    <span id={key}>
        <img src={src} alt={`${skill} icon`} />
        <p>{skill}</p>
    </span>
  )
}

export default SkillsList