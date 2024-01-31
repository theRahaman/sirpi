import React from "react"
import styles from "./title.module.css"

export default function Title(props) {
  return (
    <div className={`${styles.common_title} ${props.servClass}`}>
      <span>{props.pageTitle.sub_title}</span>
      <h2>{props.pageTitle.title}</h2>
      <p>
       {props.pageTitle.description}
      </p>
    </div>
  );
}
