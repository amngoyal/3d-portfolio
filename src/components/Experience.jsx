import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const highlightTerms = [
  'Next.js',
  'Core Web Vitals',
  'SEO',
  'Leadership',
  'Migration',
  'SSG/SSR',
  'Component Library',
  'Mentoring',
  'React',
  'Redux',
  'Strapi',
  'Web3.js',
  'TypeScript',
  'Tailwind',
];

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightText = (text) => {
  const pattern = new RegExp(
    `(${highlightTerms.map(escapeRegex).join('|')})`,
    'gi'
  );

  return text.split(pattern).map((segment, index) => {
    const isMatch = highlightTerms.some(
      (term) => term.toLowerCase() === segment.toLowerCase()
    );

    if (!isMatch) {
      return segment;
    }

    return (
      <span key={`${segment}-${index}`} className="font-semibold text-white">
        {segment}
      </span>
    );
  });
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      >
        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-[24px] text-white">
                {experience.title}
              </h3>
              <p className="!m-0 font-semibold text-[16px] text-secondary">
                {experience.company_name}
              </p>
            </div>
            {/* <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-secondary">
              {experience.date}
            </p> */}
          </div>
        </div>
      {experience.clients && experience.clients.length ? (
        <div className="mt-5">
          {experience.clients.map((client, cIdx) => (
            <div key={`client-${cIdx}`} className="mb-6">
              <p className="!m-0 font-semibold text-[15px] text-white">{client.name}</p>
              <ul className="space-y-2 mt-3 ml-5 list-disc">
                {(client.points || []).map((point, index) => (
                  <li
                    key={`experience-point-${cIdx}-${index}`}
                    className="pl-1 text-[14px] text-white-100 tracking-wider leading-6"
                  >
                    {highlightText(point)}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {(client.chips || []).map((chip) => (
                  <span
                    key={`${chip}-${cIdx}`}
                    className="rounded-full border border-[#915eff]/30 bg-[#915eff]/10 px-3 py-1 text-[12px] font-medium text-[#cbb6ff]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <ul className="space-y-2 mt-5 ml-5 list-disc">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="pl-1 text-[14px] text-white-100 tracking-wider leading-6"
              >
                {highlightText(point)}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {experience.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#915eff]/30 bg-[#915eff]/10 px-3 py-1 text-[12px] font-medium text-[#cbb6ff]"
              >
                {chip}
              </span>
            ))}
          </div>
        </>
      )}
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        chips: PropTypes.arrayOf(PropTypes.string),
        points: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    points: PropTypes.arrayOf(PropTypes.string),
    chips: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={styles.sectionSubText}>Recent roles and impact</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="flex flex-wrap gap-7 mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const WrappedExperience = SectionWrapper(Experience, 'work');

export default WrappedExperience;
