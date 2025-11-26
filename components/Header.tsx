import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header({ scrollDirection }: { scrollDirection: 'up' | 'down' }) {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;
  const [open, setOpen] = useState(false);

  return (
    <header 
  className={`${styles.header} ${scrollDirection === "down" ? styles.hideHeader : styles.showHeader}`}
>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          My Portofolio
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${open ? styles.bar1 : ""}`}></span>
          <span className={`${styles.bar} ${open ? styles.bar2 : ""}`}></span>
          <span className={`${styles.bar} ${open ? styles.bar3 : ""}`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${isActive("/") ? "active" : ""}`}>Home</Link>
          <Link href="/projects" className={`${styles.navLink} ${isActive("/projects") ? "active" : ""}`}>Projects</Link>
          <Link href="/about" className={`${styles.navLink} ${isActive("/about") ? "active" : ""}`}>About</Link>
          <Link href="/contact" className={`${styles.navLink} ${isActive("/contact") ? "active" : ""}`}>Contact</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}>
        <Link href="/" className={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
        <Link href="/projects" className={styles.mobileLink} onClick={() => setOpen(false)}>Projects</Link>
        <Link href="/about" className={styles.mobileLink} onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" className={styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
