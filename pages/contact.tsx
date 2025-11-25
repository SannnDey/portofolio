import styles from "../styles/index.module.css";
import ContactSection from "../features/contact/ContactSection";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Get In Touch</h1>
          <p className={styles.heroSubtitle}>Hubungi saya untuk diskusi tentang project, kolaborasi, atau sekadar berbincang tentang teknologi dan web development.</p>
        </section>

        <ScrollReveal animation="gentleSlideUp" duration={500}>
          <div style={{ marginTop: "2rem" }}>
            <ContactSection />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="gentleSlideInLeft" duration={500} delay={100}>
          <section style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--foreground)" }}>Cara Lain Menghubungi Saya</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gap: "1rem" }}>
              <div style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "8px", transition: "all 300ms ease", cursor: "pointer" }} 
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.1)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--foreground)" }}>Email</h3>
                <p style={{ margin: 0, color: "var(--accent)", textDecoration: "none" }}>
                  <a href="mailto:ihsanul.wahid10@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>ihsanul.wahid10@gmail.com</a>
                </p>
              </div>
              <div style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "8px", transition: "all 300ms ease", cursor: "pointer" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.1)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--foreground)" }}>LinkedIn</h3>
                <p style={{ margin: 0, color: "var(--accent)", textDecoration: "none" }}>
                  <a href="https://github.com/SannnDey" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Visit Profile →</a>
                </p>
              </div>
              <div style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "8px", transition: "all 300ms ease", cursor: "pointer" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.1)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--foreground)" }}>GitHub</h3>
                <p style={{ margin: 0, color: "var(--accent)", textDecoration: "none" }}>
                  <a href="https://github.com/SannnDey" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Follow Me →</a>
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
