import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

export default function Header() {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          My Portofolio
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${isActive("/") ? "active" : ""}`}>Home</Link>
          <Link href="/projects" className={`${styles.navLink} ${isActive("/projects") ? "active" : ""}`}>Projects</Link>
          <Link href="/about" className={`${styles.navLink} ${isActive("/about") ? "active" : ""}`}>About</Link>
          <Link href="/contact" className={`${styles.navLink} ${isActive("/contact") ? "active" : ""}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
