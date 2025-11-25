import styles from "../styles/index.module.css";
import aboutStyles from "../styles/AboutSection.module.css";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>About Me</h1>
          <p className={styles.heroSubtitle}>Mengenal lebih jauh tentang saya, passion, dan pengalaman saya sebagai developer.</p>
        </section>

        <ScrollReveal animation="gentleSlideInLeft" duration={500}>
          <section className={aboutStyles.about}>
            <h2 className={aboutStyles.heading}>Background</h2>
            <div className={aboutStyles.content}>
              <p>Saya adalah seorang Full-Stack Developer dengan pengalaman dalam pengembangan aplikasi web dan mobile. Selama menjalani studi dan masa magang, saya terbiasa mengerjakan proyek yang melibatkan berbagai teknologi modern, mulai dari PHP, JavaScript, Java, Dart, hingga Kotlin.</p>
              <p>Saya memiliki latar belakang di UI/UX design serta pengalaman membangun aplikasi end-to-end—mulai dari desain, pengembangan frontend dan backend, hingga integrasi sistem. Saya berorientasi pada kualitas, ketelitian, dan kemampuan untuk menyelesaikan tugas sesuai kebutuhan pengguna maupun standar perusahaan.</p>
              <p>Dengan pengalaman di bidang desain grafis, pengembangan website, aplikasi mobile, dan solusi digital lainnya, saya selalu berusaha menghasilkan produk yang fungsional, rapi, dan mudah digunakan. Bagi saya, setiap proyek adalah kesempatan untuk berkembang dan memberikan kontribusi terbaik.</p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="gentleSlideUp" duration={500} delay={100}>
          <section className={aboutStyles.about}>
            <h2 className={aboutStyles.heading}>Keahlian</h2>
            <div className={aboutStyles.content}>
              <p><strong>Frontend Web Development:</strong> Next.js, TypeScript, CSS, HTML, Vaadin (Java)</p>
              <p><strong>Frontend Mobile Development:</strong> Flutter (Dart), Kotlin</p>
              <p><strong>Backend Development:</strong> Node.js, Java (Quarkus), Laravel (PHP), Spring Boot(Java), Database (MongoDB, PostgreSQL, MySQL)</p>
              <p><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Figma, Inttelij IDEA, Postman</p>
              <p><strong>Soft Skills:</strong> Problem Solving, Teamwork, Effective communication, Discipline and ability to work within specified deadlines</p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="gentleScaleIn" duration={500} delay={200}>
          <section className={aboutStyles.about}>
            <h2 className={aboutStyles.heading}>Philosophy</h2>
            <div className={aboutStyles.content}>
              <p>Saya percaya bahwa kode yang baik bukan hanya code yang berfungsi, tetapi code yang mudah dipahami, dirawat, dan dikembangkan. Setiap project saya dikerjakan dengan perhatian terhadap detail, performance optimization, dan user-centered design principles.</p>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
