import { useRef, useEffect, useState, useCallback } from 'react';

const INSTAGRAM_LINK = 'https://www.instagram.com/artinc0000?psln=MWg3aWplNTBhMTg1Nw==';

const services = [
  'Audio Mixing & Mastering',
  'Custom Typography & Fonts',
  'AI Project Coding-Architecture',
  'Poster & Visual Design',
  'Video editing',
];

function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handlePush = useCallback(() => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Screen 1 - Hero */}
      <section className="section hero-section">
        <button
          className="btn-brutalist btn-push"
          onClick={handlePush}
          aria-label="Scroll to services"
        >
          JUST PUSH
        </button>
      </section>

      {/* Screen 2 - Services */}
      <section
        ref={servicesRef}
        className="section services-section"
      >
        <h1 className={`headline-services ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
          No portfolios here.<br />Just contact.
        </h1>

        <div className="services-stack">
          {services.map((service, index) => (
            <a
              key={service}
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-brutalist btn-service ${isVisible ? `animate-fade-in-up stagger-${index + 2}` : ''}`}
            >
              {service}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
