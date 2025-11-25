"use client";
import { useState } from "react";
import usePortfolioStore from "../../stores/usePortfolioStore";
import styles from "../../styles/ContactSection.module.css";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const addNotification = usePortfolioStore((s) => s.addNotification);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed to send");
      addNotification("Message sent successfully! I'll get back to you soon.", "success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      addNotification("Failed to send message. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>Name</span>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className={styles.input}
            placeholder="Your name"
          />
        </label>
        <label className={styles.label}>
          <span>Email</span>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            required 
            className={styles.input}
            placeholder="your@email.com"
          />
        </label>
        <label className={styles.label}>
          <span>Message</span>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            className={styles.textarea}
            placeholder="Your message..."
          />
        </label>
        <div className={styles.actions}>
          <button 
            disabled={loading} 
            className={styles.button}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}
