import styles from "./Card.module.css"

function Card({ children }) {

  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}

function Icon({ children }) {
  return (
    <div className={styles.icon}>{children}</div>
  )
}

function Content({ children }) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

Card.Icon = Icon
Card.Content = Content

export default Card