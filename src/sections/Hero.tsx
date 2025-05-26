import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    heroElements?.forEach((el) => observer.observe(el));

    return () => {
      heroElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="text-teal-500 dark:text-teal-400 font-medium mb-4 animate-on-scroll opacity-0 transition-opacity duration-700 delay-300">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-on-scroll opacity-0 transition-opacity duration-700 delay-500">
            Jens Shumway.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-6 animate-on-scroll opacity-0 transition-opacity duration-700 delay-700">
            I build things for the web.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl animate-on-scroll opacity-0 transition-opacity duration-700 delay-900">
            I'm a software developer specializing in creating exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products using the latest web technologies.
          </p>
          <div className="animate-on-scroll opacity-0 transition-opacity duration-700 delay-1000">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors group"
            >
              View my work
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;