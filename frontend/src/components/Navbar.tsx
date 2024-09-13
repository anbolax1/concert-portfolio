// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    let biographyUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/biography`;
    let concertsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/concerts`;
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Logo</Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href={biographyUrl}>Биография</Link>
                </li>
                <li>
                    <Link href={concertsUrl}>Концерты</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
