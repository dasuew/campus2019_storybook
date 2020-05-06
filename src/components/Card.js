import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'

const Card = ({ content, title }) => {
  const cardContent =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

  return (
    <section className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{cardContent}</div>
    </section>
  )
}

Card.defaultProps = {}

Card.propTypes = {
  /** The title of a card */
  title: PropTypes.string,
  /** The content of a card */
  content: PropTypes.string,
}

export default Card
