import usePortfolioStore from "../stores/usePortfolioStore";
import styles from "../styles/NotificationCenter.module.css";

export default function NotificationCenter() {
  const notifications = usePortfolioStore((s) => s.notifications);
  const removeNotification = usePortfolioStore((s) => s.removeNotification);

  return (
    <div className={styles.container}>
      {notifications.map((notification) => (
        <div key={notification.id} className={`${styles.notification} ${styles[notification.type]}`}>
          <div className={styles.content}>
            <span className={styles.icon}>
              {notification.type === "success" && "✓"}
              {notification.type === "error" && "✕"}
              {notification.type === "info" && "ℹ"}
              {notification.type === "warning" && "⚠"}
            </span>
            <p className={styles.message}>{notification.message}</p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => removeNotification(notification.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
