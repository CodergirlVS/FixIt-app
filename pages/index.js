import { useState, useEffect } from 'react';
import fire from '../config/fire-config';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fire.firestore()
      .collection('Orders')
      .onSnapshot(snap => {
        const orders = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(orders);
      });
  }, []);
console.log(orders)


  return (
    <div>
      <h1 className={styles.mainHeader}>Let's start our FixIT</h1>
      <ul className={styles.listOrders}>
        {orders.map(order =>
        <li  key={order.id}>{order.Description}</li>
        )}
      </ul>
    </div>
  )
}

export default Home;