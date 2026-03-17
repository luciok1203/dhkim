import clsx from 'clsx';
import { type ReactNode, useEffect, useRef } from 'react';
import { DATA } from './data';
import './style.css';

const GithubIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ChainIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
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
          Dept. of Electrical and Computer Engineering ·<br />
          2nd Year Undergraduate
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
            {edu.gpa && (
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
              <div className="project-title">{project.title}</div>
              <div className="project-role">{project.role}</div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-badge"
                  >
                    GitHub
                    <GithubIcon />
                  </a>
                )}
                {project.colabUrl && (
                  <a
                    href={project.colabUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-badge"
                  >
                    Colab
                    <ChainIcon />
                  </a>
                )}
                {project.deployUrl && (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-badge"
                  >
                    Deploy
                    <ChainIcon />
                  </a>
                )}
              </div>
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
