import { createContext, useContext } from "react"
import styles from "./Testimonial.module.css"

const TestimonialContext = createContext()

function Testimonial({ children, variant = "horizontal" }) {
  return (
    <TestimonialContext.Provider value={{ variant }}>
      <div className={`${styles.testimonial} ${styles[variant]}`}>
        {children}
      </div>
    </TestimonialContext.Provider>
  )
}

function Picture({ img, alt = "Profile picture" }) {
  const { variant } = useContext(TestimonialContext)

  const imgSrc = img?.startsWith('http') || img?.startsWith('/')
    ? img
    : `/src/assets/${img}.jpg`;

  return (
    <div className={`${styles.profilePic} ${styles[variant]}`}>
      <img src={imgSrc} alt={alt} />
    </div>
  )
}

function Content({ children, name, role }) {
  const { variant } = useContext(TestimonialContext)

  return (
    <div className={`${styles.content} ${styles[variant]}`}>
      <div className={styles.quote}>
        <img src="/src/assets/quote.png" alt="" />
      </div>
      <div className={styles.descp}>
        {children}
      </div>
      <footer>
        {name ? <div className={styles.name}>
          {name}
        </div> : null}
        {role ? <div className={styles.role}>
          {role}
        </div> : null}
      </footer>
    </div>
  )
}

Testimonial.Picture = Picture
Testimonial.Content = Content

export default Testimonial