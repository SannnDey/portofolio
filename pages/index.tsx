import Link from "next/link";
import ProjectsSection from "../features/projects/ProjectsSection";
import AboutSection from "../features/about/AboutSection";
import ScrollReveal from "../components/ScrollReveal";
import { useEffect } from "react";
import usePortfolioStore from "../stores/usePortfolioStore";
import styles from "../styles/index.module.css";

export default function Home() {
  const load = usePortfolioStore((s) => s.loadSampleData);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Halo, saya Muhammad Ihsanul Wahid</h1>
          <p className={styles.heroSubtitle}>
            Saya seorang Web & Mobile Developer yang suka membangun aplikasi dengan desain modern, performa cepat, dan pengalaman pengguna yang mulus. Saya percaya aplikasi yang baik adalah aplikasi yang bermanfaat dan menyenangkan digunakan.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/projects" className={styles.buttonPrimary}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(59, 130, 246, 0.3)";
              }}>
              View My Work
            </Link>
            <Link href="/about" className={styles.buttonSecondary}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(59, 130, 246, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
              Learn About Me
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <ScrollReveal animation="gentleSlideUp" duration={500}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
              <Link href="/projects" className={styles.viewAllLink}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(6px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
                View All →
              </Link>
            </div>
            <ProjectsSection limit={3} />
          </section>
        </ScrollReveal>

        {/* About Section */}
        <ScrollReveal animation="gentleSlideInLeft" duration={500}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>About</h2>
              <Link href="/about" className={styles.viewAllLink}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(6px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
                Read More →
              </Link>
            </div>
            <AboutSection />
          </section>
        </ScrollReveal>

        {/* Call to Action Section */}
        <ScrollReveal animation="gentleScaleIn" duration={500}>
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Let's Talk</h2>
            <p className={styles.ctaText}>
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi saya melalui form contact atau social media saya. Saya selalu terbuka untuk opportunity baru.
            </p>
            <Link href="/contact" className={styles.buttonPrimary}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(59, 130, 246, 0.3)";
              }}>
              Send Me a Message
            </Link>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
