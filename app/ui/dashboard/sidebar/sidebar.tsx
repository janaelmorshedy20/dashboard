import React from 'react'
import styles from "./sidebar.module.css";
import MenuLink from "./menulink/menulink";


import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";


  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        
      ],
    },
    
    
  ];
  const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
     
      </div>
      <div className={styles.userDetail}>
          <span className={styles.username}>jana</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      <ul>
        {menuItems.map((cat)=>(
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item=>(
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
          
        ))

        }

      </ul>
      

    
  
      </div>
  )
}

export default Sidebar