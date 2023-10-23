
function ListItem({ title, description, src }) {
  return (
    <li className="list__item">
      <img className="list__img" src={src} alt="cat" />
      <h3 className="list__title">{title}</h3>
      <p className="list__desc">{description}</p>
    </li>

  )
}

export default ListItem