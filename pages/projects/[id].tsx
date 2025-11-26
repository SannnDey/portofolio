import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import usePortfolioStore from "../../stores/usePortfolioStore";
import styles from "../../styles/ProjectDetail.module.css";

type Project = {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    url: string;
    image: string;
    type: string;
    technologies: string[];
    features: string[];
    longDescription: string;
    challenge: string;
    solution: string;
    github: string;
    liveUrl: string | null;
    gallery: string[];
};

export default function ProjectDetail() {
    const router = useRouter();
    const { id } = router.query;
    const projects = usePortfolioStore((s) => s.projects);
    const load = usePortfolioStore((s) => s.loadSampleData);
    const [project, setProject] = useState<Project | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);


    useEffect(() => {
        if (!id) return;

        // If projects haven't been loaded yet, trigger loading.
        if (projects.length === 0) {
            load();
            return;
        }

        if (projects.length > 0) {
            const found = projects.find((p) => p.id === id);
            setProject((found as Project) || null);
        }
    }, [id, projects]);

    if (!router.isReady) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project tidak ditemukan</h1>
                <Link href="/projects">← Kembali ke Projects</Link>
            </div>
        );
    }

    return (
    <div className={styles.page}>
        <div className={styles.container}>
            {/* Back Button */}
            <Link href="/projects" className={styles.backButton}>
                ← Kembali ke Projects
            </Link>

            {/* Hero Section */}
            <ScrollReveal animation="gentleSlideUp" duration={500}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.subtitle}>{project.shortDescription}</p>
                        <div className={styles.meta}>
                            <span className={styles.type}>{project.type.toUpperCase()}</span>
                        </div>
                    </div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className={styles.heroImage}
                    />
                </section>
            </ScrollReveal>

            {/* Overview Section */}
            <ScrollReveal animation="gentleSlideInLeft" duration={500} delay={100}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Tentang Project</h2>
                    <p className={styles.description}>{project.longDescription}</p>
                </section>
            </ScrollReveal>

            {/* Technologies Section */}
            <ScrollReveal animation="gentleSlideUp" duration={500} delay={200}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Teknologi yang Digunakan</h2>
                    <div className={styles.techStack}>
                        {project.technologies.map((tech) => (
                            <span key={tech} className={styles.techBadge}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            {/* Features Section */}
            <ScrollReveal animation="gentleSlideUp" duration={500} delay={300}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Fitur Utama</h2>
                    <ul className={styles.featuresList}>
                        {project.features.map((feature, idx) => (
                            <li key={idx} className={styles.featureItem}>
                                <span className={styles.checkmark}>✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            </ScrollReveal>

            {/* Challenge & Solution */}
            <ScrollReveal animation="gentleScaleIn" duration={500} delay={400}>
                <section className={styles.section}>
                    <div className={styles.challengeSolution}>
                        <div className={styles.challengeBox}>
                            <h3 className={styles.boxTitle}>🎯 Tantangan</h3>
                            <p>{project.challenge}</p>
                        </div>
                        <div className={styles.solutionBox}>
                            <h3 className={styles.boxTitle}>💡 Solusi</h3>
                            <p>{project.solution}</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
                <ScrollReveal animation="gentleSlideUp" duration={500} delay={450}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Gallery</h2>
                        <div className={styles.galleryGrid}>
                            {project.gallery.map((img, index) => (
                                <div
                                    key={index}
                                    className={styles.galleryImageWrapper}
                                    onClick={() => setPreviewImage(img)}    // CLICK TO PREVIEW
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className={styles.galleryImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollReveal>
            )}

            {/* CTA Section */}
            <ScrollReveal animation="gentleSlideUp" duration={500} delay={500}>
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaButton + " " + styles.ctaGithub}
                            >
                                <span>★</span> View on GitHub
                            </a>
                        )}
                    </div>
                </section>
            </ScrollReveal>

            {/* 🔥 PREVIEW IMAGE MODAL */}
            {previewImage && (
                <div
                    className={styles.previewOverlay}
                    onClick={() => setPreviewImage(null)}
                >
                    <img src={previewImage} className={styles.previewImage} />
                </div>
            )}

        </div>
    </div>
);

}
