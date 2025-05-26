import { useEffect, useRef } from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-opacity duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I work with a variety of technologies to create robust and scalable
            applications. Here are some of the key skills in my toolkit:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={category.name}
              className="animate-on-scroll opacity-0 transition-opacity duration-700 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;