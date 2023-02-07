import React from "react";
import Link from "next/link";
import styles from '@/styles/footer.module.css';

export default function Footer(){
    return (
        <footer className={styles.container}>
            <div>
                <Link href="/" className={styles.link}>
                    Coinsgrate
                </Link>
                <span> crypto tracker is fully supported by coinsgecko-api</span>
            </div>
        </footer>
    )
} 