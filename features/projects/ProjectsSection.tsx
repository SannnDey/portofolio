"use client";
import usePortfolioStore from "../../stores/usePortfolioStore";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/ProjectsSection.module.css";

export default function ProjectsSection() {
  const projects = usePortfolioStore((s) => s.projects);

  return (
    <div className={styles.grid}>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

