// ── Interfaces ────────────────────────────────────────────────────────────────
interface GpaEntry {
  label: string;
  value: string;
}

interface Education {
  id: string;
  period: string;
  school: string;
  dept: string;
  detail: string;
  gpa: GpaEntry[];
}

interface Project {
  id: string;
  period: string;
  org: string;
  title: string;
  role: string;
  bullets: string[];
}

interface SkillGroup {
  id: string;
  group: string;
  tags: string[];
}

interface AwardEntry {
  id: string;
  year: string;
  title: string;
  org: string;
}

interface ExtraEntry {
  id: string;
  role: string;
  org: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
export const DATA = {
  name: { en: 'Donghyun Kim', ko: '김동현' },
  email: 'luciok1203@snu.ac.kr',
  github: 'github.com/luciok1203',
  tagline:
    'Undergraduate student in ECE, SNU — passionate about Machine Learning and Computer Vision.',
  interests: ['Machine Learning', 'Deep Learning', 'Computer Vision'],

  education: [
    {
      id: 'snu',
      period: 'Mar. 2025 — Present',
      school: 'Seoul National University',
      dept: 'Dept. of Electrical and Computer Engineering',
      detail: '2nd Year Undergraduate',
      gpa: [{ label: 'Avg. GPA (1st Year)', value: '4.09 / 4.30' }],
    },
    {
      id: 'sejong',
      period: 'Mar. 2023 — Feb. 2025',
      school: 'Sejong Science High School',
      dept: '16th cohort',
      detail: '',
      gpa: [],
    },
  ] satisfies Education[],

  projects: [
    {
      id: 'alisha',
      period: 'Dec. 2025 — Feb. 2026',
      org: 'Waffle Studio',
      title: 'Alisha',
      role: 'Frontend Developer',
      bullets: [],
    },
  ] satisfies Project[],

  skills: [
    { id: 'lang', group: 'Programming Languages', tags: ['Python', 'C++'] },
    {
      id: 'framework',
      group: 'Frameworks & Libraries',
      tags: ['React', 'TypeScript'],
    },
    { id: 'tools', group: 'Tools', tags: ['Git', 'Linux'] },
  ] satisfies SkillGroup[],

  awards: [] as AwardEntry[],

  scholarships: [
    {
      id: 'hanyonggyo-2026',
      year: '2026.03',
      title: 'Han Yong-gyo Scholarship',
      org: 'Han Yong-gyo Scholarship Foundation',
    },
  ] satisfies AwardEntry[],

  extracurricular: [] as ExtraEntry[],
};
