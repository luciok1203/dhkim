import clsx from 'clsx';
import { type ReactNode, useEffect, useRef } from 'react';
import { DATA } from './data';
import './style.css';

// ── Fade-in hook ──────────────────────────────────────────────────────────────
const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
};

// ── Shared ────────────────────────────────────────────────────────────────────
interface FadeSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeSection = ({ children, className }: FadeSectionProps) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={clsx('fade-in', className)}>
      {children}
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <div className="section-header">
    <h2 className="section-title">{title}</h2>
    <div className="section-line" />
  </div>
);

// ── Components ────────────────────────────────────────────────────────────────
const Nav = () => {
  const links = [
    { label: 'Education', href: '#education' },
    { label: 'Project Experiences', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Awards & Honors', href: '#awards' },
    { label: 'Activities', href: '#activities' },
  ];

  return (
    <nav>
      <a href="#top" className="nav-logo">
        {DATA.name.en}
      </a>
      <ul className="nav-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Hero = () => (
  <section id="top" className="hero" style={{ border: 'none' }}>
    <div className="hero-text fade-in visible">
      <h1 className="hero-name">
        {DATA.name.en.split(' ')[0]} <span>{DATA.name.en.split(' ')[1]}</span>
      </h1>
      <p className="hero-subtitle">{DATA.tagline}</p>
      <div className="hero-contacts">
        <a href={`mailto:${DATA.email}`} className="hero-contact-item">
          <span className="contact-dot" />
          {DATA.email}
        </a>
        <a
          href={`https://${DATA.github}`}
          target="_blank"
          rel="noreferrer"
          className="hero-contact-item"
        >
          <span className="contact-dot" />
          {DATA.github}
        </a>
        <span className="hero-contact-item">
          <span className="contact-dot" />
          {DATA.phone}
        </span>
      </div>
    </div>

    <div className="hero-right">
      <div
        className="hero-card fade-in visible"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="hero-card-label">Current Position</div>
        <div className="hero-card-value">Seoul National University</div>
        <div className="hero-card-sub">
          Dept. of Electrical and Computer Engineering · 2nd Year
        </div>
      </div>
      <div
        className="hero-card fade-in visible"
        style={{ animationDelay: '0.35s' }}
      >
        <div className="hero-card-label">Research Interests</div>
        <div className="interests-list">
          {DATA.interests.map((interest) => (
            <span key={interest} className="interest-tag">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education">
    <FadeSection>
      <SectionHeader title="Education" />
      <div className="edu-grid">
        {DATA.education.map((edu) => (
          <div key={edu.id} className="edu-card">
            <div className="edu-period">{edu.period}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-dept">
              {edu.dept}
              {edu.detail ? ` · ${edu.detail}` : ''}
            </div>
            {edu.gpa.length > 0 && (
              <div className="gpa-badges">
                {edu.gpa.map((g) => (
                  <span key={g.label} className="gpa-badge">
                    {g.label}: {g.value}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </FadeSection>
  </section>
);

const Projects = () => (
  <section id="projects">
    <FadeSection>
      <SectionHeader title="Project Experiences" />
      <div className="projects-list">
        {DATA.projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-meta">
              <div className="project-period">{project.period}</div>
              <span className="project-org">{project.org}</span>
            </div>
            <div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-title project-title-link"
                >
                  {project.title} ↗
                </a>
              ) : (
                <div className="project-title">{project.title}</div>
              )}
              <div className="project-role">{project.role}</div>
              {project.bullets.length > 0 && (
                <ul className="project-bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </FadeSection>
  </section>
);

const Skills = () => (
  <section id="skills">
    <FadeSection>
      <SectionHeader title="Skills" />
      <div className="skills-grid">
        {DATA.skills.map((skillGroup) => (
          <div key={skillGroup.id} className="skill-group">
            <div className="skill-group-title">{skillGroup.group}</div>
            <div className="skill-tags">
              {skillGroup.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FadeSection>
  </section>
);

interface AwardRowProps {
  entry: { id: string; year: string; title: string; org: string };
}

const AwardRow = ({ entry }: AwardRowProps) => (
  <div className="award-row">
    <div className="award-year">{entry.year}</div>
    <div className="award-content">
      <div className="award-title">{entry.title}</div>
      <div className="award-org">{entry.org}</div>
    </div>
  </div>
);

const Awards = () => (
  <section id="awards">
    <FadeSection>
      <SectionHeader title="Awards & Honors" />
      <div className="awards-cols">
        {DATA.awards.length > 0 && (
          <div>
            <div className="awards-subheader">Awards</div>
            {DATA.awards.map((award) => (
              <AwardRow key={award.id} entry={award} />
            ))}
          </div>
        )}
        <div>
          <div className="awards-subheader">Honors</div>
          {DATA.honors.map((honor) => (
            <AwardRow key={honor.id} entry={honor} />
          ))}
        </div>
      </div>
    </FadeSection>
  </section>
);

const Activities = () => {
  if (DATA.activities.length === 0) return null;
  return (
    <section id="activities">
      <FadeSection>
        <SectionHeader title="Activities" />
        <div className="extra-list">
          {DATA.activities.map((activity) => (
            <div key={activity.id} className="extra-item">
              <div className="extra-period">{activity.period}</div>
              <div>
                <div className="extra-role">{activity.org}</div>
                <div className="extra-org">{activity.role}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>
    </section>
  );
};

const Footer = () => (
  <footer>
    <div>
      <div className="footer-name">{DATA.name.en}</div>
      <div className="footer-email">{DATA.email}</div>
    </div>
    <div className="footer-copy">2026 {DATA.name.en}</div>
  </footer>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const Portfolio = () => (
  <>
    <Nav />
    <Hero />
    <Education />
    <Projects />
    <Skills />
    <Awards />
    <Activities />
    <Footer />
  </>
);

export default Portfolio;
