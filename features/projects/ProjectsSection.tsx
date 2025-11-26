"use client";
import usePortfolioStore from "../../stores/usePortfolioStore";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/ProjectsSection.module.css";

export default function ProjectsSection({ limit }: { limit?: number }) {
  const projects = usePortfolioStore((s) => s.projects);
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className={styles.grid}>
      {items.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

