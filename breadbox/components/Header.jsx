import styles from './Header.module.css';

export default function Header() {
    return (
        <header id={styles.header}>
            <div id={styles.logo}>
                <svg width="35" height="35" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_23)">
                            <path d="M212.636 236.205H157.739C157.739 218.128 172.34 203.486 190.367 203.486H212.718C242.246 203.486 266.881 179.929 267.37 150.318C267.86 120.135 243.47 95.5137 213.533 95.5137C200.482 95.5137 187.92 100.258 178.132 108.847L106.675 173.303C93.2977 185.409 72.6602 184.264 60.5876 170.849L155.373 85.3709C155.7 85.0437 156.107 84.7165 156.434 84.3893L159.86 81.5264C175.113 69.4204 194.038 62.7948 213.533 62.7948C261.416 62.7948 300.244 101.976 299.999 149.991C299.754 197.842 260.274 236.205 212.636 236.205Z" fill="#FFF"/>
                            <path d="M85.467 236.205C37.5848 236.205 -1.24307 197.024 -0.998361 149.009C-0.753648 101.158 38.7268 62.7948 86.4458 62.7948H141.343C141.343 80.872 126.742 95.5137 108.715 95.5137H86.2827C56.754 95.5137 32.1195 119.071 31.6301 148.682C31.1406 178.865 55.5304 203.486 85.467 203.486C98.5184 203.486 111.08 198.742 120.869 190.153L192.325 125.697C205.703 113.591 226.34 114.736 238.413 128.151L139.385 217.474H139.141C123.887 229.58 105.044 236.205 85.467 236.205Z" fill="#FFF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_23">
                            <rect width="300" height="300" fill="white"/>
                        </clipPath>
                        </defs>
                </svg>
                <span>BREADBOX</span>
            </div>
            <ul id={styles.navOptions}>
                <li className={styles.navButton}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z"></path></svg>Home</li>
                <li className={styles.navButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M6 14h3.05l5-5q.225-.225.338-.513t.112-.562t-.125-.537t-.325-.488l-.9-.95q-.225-.225-.5-.337t-.575-.113q-.275 0-.562.113T11 5.95l-5 5zm7-6.075L12.075 7zM7.5 12.5v-.95l2.525-2.525l.5.45l.45.5L8.45 12.5zm3.025-3.025l.45.5l-.95-.95zm.65 4.525H18v-2h-4.825zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"></path></svg>Reviews</li>
                <li className={styles.navButton}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1-4 0V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h11M8 8h4m-4 4h4m-4 4h4"></path></svg>News</li>
                <li className={styles.navButton}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg>About</li>
            </ul>
        </header>
    )
}