import React, { useEffect, useState } from 'react';
import styles from '@/styles/layout.module.css';
import { Footer, Navbar } from '@/components';

function Layout({ children }) {
  const [ visible, set_visible ] = useState(false);
  const handleClick = ()=> {
    window.scrollTo({
        top:10,
        behavior:'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 70){
        set_visible(true);
      } else {
        set_visible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.layout}>
        <Navbar />
        <main className={styles.main}>
            { children }
        </main>
        <Footer visible={visible} handleClick={handleClick} />
    </div>
  )
}

export default Layout;