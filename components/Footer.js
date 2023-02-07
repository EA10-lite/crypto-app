import React from "react";
import Link from "next/link";
import styles from '@/styles/footer.module.css';


// icons
import {TbArrowUp } from 'react-icons/tb'

export default function Footer({ visible, handleClick }){
    return (
        <footer className={styles.container}>
            { visible && <div className={styles.iconContainer} id="scroll-icon">
                <TbArrowUp  onClick={handleClick} size={20} color="white" />
            </div> }
            <div>
                <Link href="/" className={styles.link}>
                    Coinsgrate
                </Link>
                <span> crypto tracker is fully supported by coinsgecko-api</span>
            </div>
        </footer>
    )
} 