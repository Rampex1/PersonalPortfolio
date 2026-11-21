import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';

import resume from './assets/resume.pdf';
import cleartillImg from './assets/cleartill.png';
import polymarketImg from './assets/polymarket.png';
import arucoPaperImg from './assets/aruco-paper.png';
import stripeLogo from './assets/logos/stripe.png';
import awsLogo from './assets/logos/aws.png';
import streamingfastLogo from './assets/logos/streamingfast.png';
import nrcLogo from './assets/logos/nrc.jpg';
import mcgillLogo from './assets/logos/mcgill.svg';
import './App.scss';

const SECTIONS = ['about', 'experience', 'projects', 'publications'];

const ABOUT =
  'Making code run isn’t the only thing I’m good at - I can also run a half marathon under 1h20. Whether it’s spending my days out on the trail or my nights in front of a computer, there’s one thing I’m sure of: I am on the right track.';

const PERSONAL_BESTS = [
  ['1500m', '4:32'],
  ['5K', '16:34'],
  ['10K', '37:14'],
  ['Half marathon', '1:19:29'],
];

// Experience mirrors the resume (src/assets/resume.pdf), newest first. Update both together.
const EXPERIENCE = [
  {
    org: 'Stripe',
    logo: stripeLogo,
    role: 'Incoming Software Engineer Intern',
    dates: 'Jan – May 2027',
    bullets: [],
    tags: [],
  },
  {
    org: 'Amazon Web Services',
    logo: awsLogo,
    role: 'Software Development Engineer Intern',
    dates: 'May – Aug 2026',
    bullets: [
      'Owned a custom endpoint feature for IAM Identity Center, replacing system URLs with customer-owned domains',
      'Shipped 6 backend APIs integrating CloudFront and Route53, supporting up to 200,000 tenants per shared distribution',
      'Implemented latency-based failover with automated health checks, reducing regional outage recovery time to ~90s',
      "Engineered an async Step Function poller to track CloudFront's ~5 min edge propagation status with timeout",
    ],
    tags: ['IAM Identity Center', 'CloudFront', 'Route 53', 'Step Functions'],
  },
  {
    org: 'StreamingFast',
    logo: streamingfastLogo,
    role: 'Software Engineer Intern',
    dates: 'May – Aug 2025',
    bullets: [
      'Contributed to protocol infrastructure using Go, improving data streaming speed in distributed systems',
      'Optimized firehose tracing of transactions using concurrency, reducing real-time streaming latency by 40%',
      'Led migration of critical data pipelines from P2P architecture to gRPC, increasing syncing speed by 350%',
      'Reduced I/O latency by executing operations in RAM disk, increasing data throughput from 5MB/s to 200MB/s',
    ],
    tags: ['Go', 'gRPC', 'Distributed systems'],
  },
  {
    org: 'National Research Council',
    logo: nrcLogo,
    role: 'Research Assistant Intern',
    dates: 'May – Aug 2024',
    bullets: [
      'Developed computer vision systems for medical devices with a 0.05 mm error margin, improving surgical safety',
      'Automated performance testing infrastructure with Python and OpenCV, enabling 4x faster deployment cycles',
      'Implemented 3D object tracking functionality on Raspberry Pi, reducing hardware cost by $200 per unit',
    ],
    tags: ['Python', 'OpenCV', 'Raspberry Pi'],
  },
  {
    org: 'McGill University',
    logo: mcgillLogo,
    role: 'Bachelor of Software Engineering Co-op',
    dates: '2023 – Aug 2027',
    bullets: [],
    tags: [],
  },
];

const PROJECTS = [
  {
    title: 'Cleartill',
    description:
      'Payments platform, live: card API, hosted checkout, merchant dashboard and Python SDK on a double-entry ledger that Postgres keeps balanced, with concurrency-safe refunds and payouts and 1,087 tests.',
    href: 'https://cleartill.onrender.com',
    source: 'https://github.com/Rampex1/cleartill',
    img: cleartillImg,
  },
  {
    title: 'Polymarket Bot',
    description:
      'Autonomous prediction-market trader: 15% realized profit, screening 500,000+ real trades a day with per-algorithm worker isolation.',
    href: 'https://github.com/Rampex1/Polymarket',
    img: polymarketImg,
  },
];

const PUBLICATIONS = [
  {
    title: 'Determining the 3D Spatial Arrangement of ArUco Markers Using a Multi-Camera Tracking System',
    authors: ['David Zhou', 'Andras Lasso', 'Keiran Barr', 'Tamas Ungi', 'Gabor Fichtinger', 'Thomas Vaughan'],
    venue: 'National Research Council Canada and Queen\u2019s University · Aug 2024',
    description:
      'Multi-camera OpenCV system that maps hand-placed ArUco marker constellations for surgical tracking, with RMSE under 0.03 mm in simulation and repeatability within 1 mm on physical boards.',
    href: 'https://drive.google.com/file/d/1Ng8jDJ9zJ4P-GBBEIPn6u7euVDYeIN4f/view',
    img: arucoPaperImg,
  },
];

// Bold the measured results so a skim lands on them.
const NUM = /(?<![\w.])(~?\$?\d[\d,]*(?:\.\d+)?(?:%|x|\s?MB\/s|\s?mm|\s?min|s)?)(?!\w)/g;
const emphasize = (text) =>
  text.split(NUM).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

const LINKS = [
  { href: 'https://github.com/Rampex1', label: 'GitHub', Icon: FiGithub },
  { href: 'https://www.linkedin.com/in/david-zhou1/', label: 'LinkedIn', Icon: FiLinkedin },
  { href: 'mailto:david.zhou.0110@gmail.com', label: 'Email', Icon: FiMail },
];

const useActiveSection = () => {
  const [active, setActive] = useState(SECTIONS[0]);
  useEffect(() => {
    // Active = last section whose top has passed 40% of the viewport (the last one at page bottom).
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      const passed = SECTIONS.filter((id) => document.getElementById(id)?.getBoundingClientRect().top <= line);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? SECTIONS[SECTIONS.length - 1] : passed[passed.length - 1] || SECTIONS[0]);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
};

const Experience = () => (
  <ol className="exp">
    {EXPERIENCE.map(({ org, logo, role, dates, bullets, tags }) => {
      return (
        <li className="exp-item" key={org}>
          <div className="exp-meta">
            <img className="exp-logo" src={logo} alt="" width="40" height="40" />
            <p className="exp-dates">{dates}</p>
          </div>
          <div>
            <h3>
              {role} <span className="at">·</span> {org}
            </h3>
            {bullets.length > 0 && (
              <ul className="bullets">
                {bullets.map((b) => (
                  <li key={b}>{emphasize(b)}</li>
                ))}
              </ul>
            )}
            {tags.length > 0 && (
              <ul className="tags" aria-label="Technologies">
                {tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      );
    })}
  </ol>
);

const Projects = () => (
  <ul className="projects">
    {PROJECTS.map((p) => (
      <li className="project" key={p.title}>
        <img src={p.img} alt="" loading="lazy" width="120" height="80" />
        <div>
          <h3>
            <a href={p.href} target="_blank" rel="noreferrer">
              {p.title} <FiArrowUpRight aria-hidden="true" />
            </a>
          </h3>
          <p>{emphasize(p.description)}</p>
          {p.source && (
            <a className="project-source" href={p.source} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> Source
            </a>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const Publications = () => (
  <ul className="projects">
    {PUBLICATIONS.map((p) => (
      <li className="project" key={p.title}>
        <img src={p.img} alt="" loading="lazy" width="120" height="80" />
        <div>
          <h3>
            <a href={p.href} target="_blank" rel="noreferrer">
              {p.title} <FiArrowUpRight aria-hidden="true" />
            </a>
          </h3>
          <p className="pub-authors">
            {p.authors.map((a, i) => (
              <React.Fragment key={a}>
                {i > 0 && ', '}
                {a === 'David Zhou' ? <strong>{a}</strong> : a}
              </React.Fragment>
            ))}
          </p>
          <p className="pub-venue">{p.venue}</p>
          <p>{emphasize(p.description)}</p>
        </div>
      </li>
    ))}
  </ul>
);

const App = () => {
  const active = useActiveSection();

  return (
    <div className="layout">
      <a className="skip" href="#content">Skip to content</a>

      <header className="side">
        <div>
          <h1>David Zhou</h1>
          <p className="role">Software Engineer</p>
          <p className="pitch">
            I build backend systems that move data fast and keep running when things break.
          </p>
          <nav aria-label="Sections">
            <ul>
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined}>
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <ul className="links">
          <li>
            <a className="resume" href={resume} target="_blank" rel="noreferrer">
              <FiFileText aria-hidden="true" /> Resume
            </a>
          </li>
          {LINKS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </header>

      <main id="content">
        <section id="about" aria-label="About">
          <h2>About</h2>
          <p>{ABOUT}</p>
          <dl className="pbs" aria-label="Personal bests">
            {PERSONAL_BESTS.map(([distance, time]) => (
              <div key={distance}>
                <dt>{distance}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" aria-label="Experience">
          <h2>Experience</h2>
          <Experience />
          <a className="arrow-link" href={resume} target="_blank" rel="noreferrer">
            View full resume <FiArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <section id="projects" aria-label="Projects">
          <h2>Projects</h2>
          <Projects />
          <a className="arrow-link" href="https://github.com/Rampex1?tab=repositories" target="_blank" rel="noreferrer">
            All projects on GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <section id="publications" aria-label="Publications">
          <h2>Publications</h2>
          <Publications />
        </section>
      </main>
    </div>
  );
};

export default App;
