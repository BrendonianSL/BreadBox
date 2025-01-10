import styles from './SidebarMenu.module.css'
import { Link } from "react-router-dom";

export default function SidebarMenu({ sideMenuState, clickedPage }) {
    return (
        <>
            <div className={`${styles.sidebarMenu} ${sideMenuState ? styles.active : ""}`}>
                <div id={styles.container}>
                    <div id={styles['sidebarMenu-logo']}>
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
                        BREADBOX
                    </div>
                    <ul id={styles['sidebarMenu-list']}>
                        <li>
                            <Link onClick={clickedPage} className={styles['sideBarMenu-item']} to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"></path></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={clickedPage} className={styles['sideBarMenu-item']} to="/reviews">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M6 14h3.075l4.975-5q.225-.225.338-.513t.112-.562t-.112-.537t-.313-.488l-.925-.95q-.225-.225-.5-.337t-.575-.113q-.275 0-.55.113t-.5.337L6 10.925zm6.05-5.1l-.95-.925l.975-.975l.925.95zM11.2 14H18v-2h-4.8zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6z"></path></svg>
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link onClick={clickedPage} className={styles['sideBarMenu-item']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M16 3a2 2 0 0 1 1.995 1.85L18 5v5h1.5a1.5 1.5 0 0 1 1.493 1.356L21 11.5V19a3 3 0 0 1-2.824 2.995L18 22H5a2 2 0 0 1-1.995-1.85L3 20V5a2 2 0 0 1 1.85-1.995L5 3zm3 9h-1v8a1 1 0 0 0 1-1zm-8 1H8a1 1 0 0 0-.117 1.993L8 15h3a1 1 0 0 0 .117-1.993zm2-5H8a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2"></path></g></svg>
                                News
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id={styles['sidebarMenu-themeToggle']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 48 48"><defs><mask id="ipSDarkMode0"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={4}><path fill="#fff" stroke="#fff" d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456z"></path><path fill="#000" stroke="#000" d="M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13"></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDarkMode0)"></path></svg>
                    Toggle Theme
                </div>
            </div>
            <div onClick={clickedPage} style={sideMenuState? {display: 'block'} : {display: 'none'}} id={styles.clickOverlay}></div>
        </>
    )
}