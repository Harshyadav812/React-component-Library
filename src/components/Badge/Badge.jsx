import { useState } from "react"
import clsx from 'clsx'
import styles from "./Badge.module.css"

const THEME_COLORS = ['green', 'red', 'blue', 'indigo', 'yellow', 'purple']

export default function Badge({ children, color, shape = "square", ...rest }) {

  const finalClassName = clsx(
    styles.badge,
    shape && styles[shape]
  )

  const dataColor = THEME_COLORS.includes(color) ? color : "green"
  return (
    <div
      className={finalClassName}
      data-color={dataColor}
      {...rest}
    >
      {children}
    </div >
  )
}