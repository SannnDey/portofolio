import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          © <span className={styles.year}>{new Date().getFullYear()}</span> Ihsan. Built with Next.js + Tailwind.
        </div>
      </div>
    </footer>
  );
}
