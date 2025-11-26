import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";

type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  url?: string;
  image?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className={styles.link}>
      <article className={styles.card}>
        {project.image ? (
          <div className={styles.imageWrapper}>
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        ) : (
          <div className={styles.imageWrapper}>
            <div className="w-full h-full flex items-center justify-center text-sm text-zinc-400">No image</div>
          </div>
        )}

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.shortDescription || project.description}</p>
          <span className={styles.cta}>
            Lihat Detail
            <span className={styles.ctaArrow} aria-hidden> →</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
