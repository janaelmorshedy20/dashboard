import React from 'react'
import styles from "./card.module.css"
import { MdSupervisedUserCircle } from 'react-icons/md'

const card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size ={24}/>
      <div className={styles.texts}>
        <span className={styles.title}>total users</span>
        <span className={styles.number}>10</span>
        <span className={styles.details}>
        <span>
          <span className={styles.positive}>12%</span> more than previous
          </span>
        </span>


      </div>


    </div>
  )
}

export default card