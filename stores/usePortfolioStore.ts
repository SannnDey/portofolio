import { create } from "zustand";

export type NotificationType = "success" | "error" | "info" | "warning";

export type Notification = {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number;
};

type Project = {
  id: string;
  title: string;
  description: string;
  url?: string;
};

type State = {
  notifications: Notification[];
  addNotification: (message: string, type: NotificationType, duration?: number) => void;
  removeNotification: (id: string) => void;
  projects: Project[];
  loadSampleData: () => Promise<void>;
};

const usePortfolioStore = create<State>((set) => ({
  notifications: [],
  addNotification: (message, type, duration = 3000) => {
    const id = Date.now().toString();
    set((state) => ({
      notifications: [...state.notifications, { id, message, type, duration }],
    }));
    
    // Auto remove notification after duration
    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        }));
      }, duration);
    }
  },
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },
  projects: [],
  loadSampleData: async () => {
    try {
      const res = await fetch("/data/projects.json");
      if (!res.ok) throw new Error("Failed to fetch projects.json");
      const data = await res.json();
      set(() => ({ projects: data }));
    } catch (err) {
      // fallback sample data
      set(() => ({
        projects: [
          { id: "1", title: "Portfolio Website", description: "A personal portfolio built with Next.js and Tailwind.", url: "#" },
          { id: "2", title: "Blog Platform", description: "A small blog site with markdown support.", url: "#" },
        ],
      }));
    }
  },
}));

export default usePortfolioStore;
