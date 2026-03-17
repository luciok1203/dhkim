// ── Interfaces ────────────────────────────────────────────────────────────────
interface Gpa {
  label: string;
  value: string;
}

interface Education {
  id: string;
  period: string;
  school: string;
  dept?: string;
  detail?: string;
  gpa?: Gpa[];
}

interface Project {
  id: string;
  period: string;
  org: string;
  title: string;
  role: string;
  bullets: string[];
  githubUrl?: string;
  colabUrl?: string;
  deployUrl?: string;
}

interface SkillGroup {
  id: string;
  group: string;
  tags: string[];
}

interface Award {
  id: string;
  year: string;
  title: string;
  org: string;
}

interface Activity {
  id: string;
  period: string;
  role: string;
  org: string;
}

interface Data {
  name: { en: string; ko: string };
  email: string;
  phone: string;
  github: string;
  tagline: string;
  interests: string[];
  education: Education[];
  projects: Project[];
  skills: SkillGroup[];
  awards: Award[];
  honors: Award[];
  activities: Activity[];
}

// ── Data ──────────────────────────────────────────────────────────────────────
export const DATA: Data = {
  name: { en: 'Donghyun Kim', ko: '김동현' },
  phone: '+82 10-2188-9221',
  email: 'luciok1203@snu.ac.kr',
  github: 'github.com/luciok1203',
  tagline:
    'Undergraduate student in ECE, SNU — interested in\nmachine learning, neural networks, and medical AI.',
  interests: ['Machine Learning', 'Neural Networks', 'Medical AI'],

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
    },
  ],

  projects: [
    {
      id: 'alisha',
      period: 'Dec. 2025 — Feb. 2026',
      org: 'WaffleStudio',
      title: 'Alisha',
      role: 'Frontend Developer',
      bullets: [
        'Unified campus announcement service for SNU',
        'Implemented user and post CRUD',
      ],
      githubUrl: 'https://github.com/wafflestudio/23-5-team2-web',
      deployUrl: 'https://d2sajtt7b5xbu6.cloudfront.net/',
    },
    {
      id: 'grade-prediction',
      period: 'Fall 2023',
      org: 'Sejong Science High School',
      title: 'Grade Prediction with Neural Networks',
      role: 'Team Leader',
      bullets: [
        'Built a grade prediction model using a 3-layer MLP with TensorFlow/Keras',
        'Identified limitations including small dataset size (n=32) and improper encoding of categorical features',
      ],
      colabUrl:
        'https://colab.research.google.com/drive/1kvJ_F5LQVfGzDLh-PCLI3FQ8DfPHxwGg?usp=sharing',
    },
  ],

  skills: [
    {
      id: 'lang',
      group: 'Programming Languages',
      tags: ['Python', 'C++', 'TypeScript'],
    },
    {
      id: 'framework',
      group: 'Frameworks & Libraries',
      tags: ['React', 'NumPy', 'TensorFlow'],
    },
    { id: 'tools', group: 'Tools', tags: ['Git', 'Linux'] },
  ],

  awards: [
    {
      id: 'seoul-science-exhibition-2023',
      year: 'Oct. 2023',
      title: 'Excellence Prize, 65th Seoul Science Exhibition Preliminary',
      org: 'Seoul Metropolitan Science Exhibition Hall',
    },
    {
      id: 'rne-2023',
      year: 'Dec. 2023',
      title:
        'Excellence Award, Science Gifted R&E Research Presentation Contest',
      org: 'Korea Foundation for the Advancement of Science and Creativity',
    },
  ],

  honors: [
    {
      id: 'merit-2026-1',
      year: 'Mar. 2026',
      title: 'Merit-Based Tuition Scholarship (90% tuition waiver)',
      org: 'Seoul National University',
    },
    {
      id: 'hanyongkyo-2026-1',
      year: 'Mar. 2026',
      title: 'Han Yong-Kyo Scholarship',
      org: 'Han Yong-Kyo Scholarship Foundation',
    },
  ],

  activities: [
    {
      id: 'waffle',
      period: 'Sep. 2025 — Present',
      role: 'Frontend Developer',
      org: 'WaffleStudio, SNU',
    },
  ],
};
