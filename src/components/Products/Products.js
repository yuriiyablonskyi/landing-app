import styles from './Products.module.sass'
import ProductsItem from '../productsItem/ProductsItem'

function Products({ listItems }) {
  return (
    <section className={styles.products}>
      {listItems.map(({ id, ...item }) => {
        return (
          <ProductsItem key={id}  {...item} />
        )
      })}
    </section >
  )
}

export default Products


