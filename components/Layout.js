import React from 'react';
import styles from '@/styles/layout.module.css';
import { Footer, Navbar } from '@/components';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
        <Navbar />
        <main className={styles.main}>
            { children }
        </main>
        <Footer />
    </div>
  )
}

export default Layout;