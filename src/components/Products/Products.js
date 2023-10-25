import styles from './products.module.sass'
import ListItem from '../ProductsItem/ProductsItem'

function Products({ listItems }) {
  return (
    <section className={styles.products}>
      {listItems.map(({ id, ...item }) => {
        return (
          <ListItem key={id}  {...item} />
        )
      })}
    </section >
  )
}

export default Products


