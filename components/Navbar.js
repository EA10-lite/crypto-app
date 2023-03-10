import React from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

// hooks
import useFetch from '../hooks/useFetch';

// utils
import intToString from '../utils/converter';


const formater = new Intl.NumberFormat('en');

export default function Header(){
    const { data } = useFetch('https://api.coingecko.com/api/v3/global');

    return (
        <nav className={styles.container}>
           { data && <div className={styles.general}>
                <div className={styles.content}>
                    <div className={`${styles.flex} ${styles.flex1}`}>
                        <h4 className={styles.subtitle}>Cryptocurrencies:</h4>
                        <h4 className={styles.title}> { data?.data?.active_cryptocurrencies ? intToString(formater.format(data?.data?.active_cryptocurrencies)) : 0} </h4>
                    </div>
                    <div className={`${styles.flex} ${styles.flex6}`}>
                        <h4 className={styles.subtitle}>Exchanges:</h4>
                        <h4 className={styles.title}> { data?.data?.markets ? intToString(formater.format(data?.data?.markets)) : 0} </h4>
                    </div>
                    <div className={`${styles.flex} ${styles.flex2}`}>
                        <h4 className={styles.subtitle}>Market Cap: </h4>
                        <h4 className={styles.title}>${ data?.data?.total_market_cap.usd ? intToString(formater.format(data?.data?.total_market_cap.usd)) : 0 } </h4>
                    </div>
                    <div className={`${styles.flex} ${styles.flex3}`}>
                        <h4 className={styles.subtitle}> Market Cap change 24h %: </h4>
                        <h4 className={`${data?.data?.market_cap_change_percentage_24h_usd > 0 ? styles.increase 
                        : styles.decrease } ${styles.title}`}>{data?.data?.market_cap_change_percentage_24h_usd ? (formater.format(parseFloat(data?.data?.market_cap_change_percentage_24h_usd.toFixed(2)))) : 0}% </h4>
                    </div>
                    <div className={`${styles.flex} ${styles.flex4}`}>
                        <h4 className={styles.subtitle}> Dominance : </h4>
                        <h4 className={styles.title}> <span> BTC : </span>{ data?.data?.market_cap_percentage.btc ? (formater.format(parseFloat(data?.data?.market_cap_percentage.btc.toFixed(2)))) : 0 }% </h4>
                        
                        <h4 className={styles.title}> <span> ETH : </span>{ data?.data?.market_cap_percentage.eth ? (formater.format(parseFloat(data?.data?.market_cap_percentage.eth.toFixed(2)))) : 0 }% </h4>
                    </div>
                    <div className={`${styles.flex} ${styles.flex5}`}>
                        <h4 className={styles.subtitle}> Volume </h4>
                        <h4 className={styles.title}>${ data?.data?.total_volume.usd ? intToString(formater.format(data?.data?.total_volume.usd)) : 0} </h4>
                    </div>
                </div>
            </div> }

            {/* nav */}

            <div className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logo}> Coinsgrate </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}