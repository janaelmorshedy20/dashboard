import Link from "next/link";
import styles from './dashboard.module.css'; 

export default function Home() {
  return (
    <div className={styles.container1}>
      <h1>Welcome to the Home Page</h1>
      
      <Link href="/dashboard">
        <button className={styles.button}>Go to Dashboard</button>
      </Link>
    </div>
  );
}
