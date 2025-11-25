import { useEffect } from "react";
import usePortfolioStore from "../stores/usePortfolioStore";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import styles from "../styles/ProjectsSection.module.css";
import pageStyles from "../styles/index.module.css";

export default function ProjectsPage() {
  const load = usePortfolioStore((s) => s.loadSampleData);
  const projects = usePortfolioStore((s) => s.projects);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.container}>
        <section className={pageStyles.hero}>
          <h1 className={pageStyles.heroTitle}>Projects</h1>
          <p className={pageStyles.heroSubtitle}>Koleksi proyek yang telah saya kerjakan dengan teknologi modern dan best practices.</p>
        </section>

        <ScrollReveal animation="gentleSlideUp" duration={500}>
          <section className={styles.section}>
            <div className={styles.grid}>
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
