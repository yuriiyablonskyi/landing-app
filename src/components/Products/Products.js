import ListItem from '../ProductsItem/ProductsItem'

function Products({ listItems }) {
  return (
    <section className="products">
      {listItems.map(({ id, ...item }) => {
        return (
          <ListItem key={id}  {...item} />
        )
      })}
    </section >
  )
}

export default Products


