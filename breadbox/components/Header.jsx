import styles from './Header.module.css';
import { Link } from "react-router";
import { useState } from 'react';
import SidebarMenu from './SidebarMenu';

export default function Header() {
    //Creates A State For The Sidebar Menu. Is False By Default.
    const [sidebarMenu, setSidebarMenu] = useState(false);

    //Function Responsible For Toggling On And Off The Sidebar Menu.
    function toggleSidebar() {
        //Sets The State Opposite Of Current State.
        setSidebarMenu(!sidebarMenu);

        console.log(sidebarMenu);
    }

    function clickedPage() {
        setSidebarMenu(false);
    }

    return (
        <header id={styles.headerContainer}>
            <div id={styles.header}>
                <div id={styles.logo}>
                    <svg width="35" height="35" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_23)">
                            <path d="M212.636 236.205H157.739C157.739 218.128 172.34 203.486 190.367 203.486H212.718C242.246 203.486 266.881 179.929 267.37 150.318C267.86 120.135 243.47 95.5137 213.533 95.5137C200.482 95.5137 187.92 100.258 178.132 108.847L106.675 173.303C93.2977 185.409 72.6602 184.264 60.5876 170.849L155.373 85.3709C155.7 85.0437 156.107 84.7165 156.434 84.3893L159.86 81.5264C175.113 69.4204 194.038 62.7948 213.533 62.7948C261.416 62.7948 300.244 101.976 299.999 149.991C299.754 197.842 260.274 236.205 212.636 236.205Z" fill="#A259FF"/>
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
                <nav id={styles.desktopNav}>
                    <ul id={styles.desktopNavList}>
                        <li className={styles.navItem}>Home</li>
                        <li className={styles.navItem}>About</li>
                        <li className={styles.navItem}>Reviews</li>
                        <li className={styles.navItem}>News</li>
                    </ul>
                </nav>
                <svg onClick={toggleSidebar} id={styles.mobileIcon} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path></svg>
            </div>
            <SidebarMenu sideMenuState={sidebarMenu} clickedPage={clickedPage} />
        </header>
    )
}