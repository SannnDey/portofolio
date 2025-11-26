import type { AppProps } from "next/app";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import NotificationCenter from "../components/NotificationCenter";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;

          setScrollProgress(progress);

          // Detect scroll direction
          if (scrolled > lastScrollY.current) {
            setScrollDirection('down');
          } else {
            setScrollDirection('up');
          }
          lastScrollY.current = scrolled;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '4px',
          background: `linear-gradient(90deg, var(--accent), #9333ea)`,
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
      />

      {/* Scroll Direction Indicator */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 100,
          opacity: scrollProgress > 10 && scrollProgress < 90 ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          willChange: 'opacity',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, var(--accent), #9333ea)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            animation: scrollDirection === 'down' 
              ? 'bounceDown 1s ease-in-out infinite' 
              : 'bounceUp 1s ease-in-out infinite',
            boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
            willChange: 'transform',
          }}
        >
          {scrollDirection === 'down' ? '↓' : '↑'}
        </div>
      </div>

      <div className="min-h-screen flex flex-col text-foreground" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a1f35 50%, #1e1b4b 100%)' }}>
        <Header scrollDirection={scrollDirection} />

        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <NotificationCenter />
      </div>

      <style jsx>{`
        @keyframes bounceDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes bounceUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </>
  );
}
