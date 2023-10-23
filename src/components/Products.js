import ListItem from './listItem'
import Container from './UI/Container'

function Products({ listItems }) {
  return (
    <section className="products">
      <Container>
        <ul className="list">
          {listItems.map(({ id, ...item }) => {
            return (
              <ListItem key={id}  {...item} />
            )
          })}
        </ul>
    </Container>
    </section >
  )
}

export default Products


