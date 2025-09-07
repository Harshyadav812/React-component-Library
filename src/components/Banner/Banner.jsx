import styles from "./Banner.module.css"


const STATUS = ["success", "warning", "error", "neutral"]

export default function Banner({ status, title, text }) {

  const dataStatus = STATUS.includes(status) ? status : "success"


  return (
    <div className={styles.banner} data-color={dataStatus}>
      <div className={styles.title}>
        <img src={`/src/assets/${dataStatus}.png`} alt={`${dataStatus} icon`} />
        <h2>{title}</h2>
      </div>
      {text ? <p>{text}</p> : undefined}
    </div>
  )
}