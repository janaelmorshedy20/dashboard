
import Card from "../ui/dashboard/card/card";

import Chart from "../ui/dashboard/chart/chart";

import styles from "../dashboard.module.css";


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
         <Card/>
         <Card/>
         <Card/>

        </div>
        
        <Chart />
      </div>
      <div className={styles.side}>
        
      </div>
    </div>
  );
};

export default Dashboard;