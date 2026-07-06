import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { skillGroups } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const SkillTile = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-white/10 bg-black-100 shadow-card overflow-hidden">
        {skill.icon ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#915eff]/30 to-[#0f0e13] text-white font-bold text-[18px] tracking-wider">
            {skill.symbol}
          </div>
        )}
      </div>
      <p className="text-center text-[13px] font-medium text-secondary leading-5">
        {skill.name}
      </p>
    </motion.div>
  );
};

SkillTile.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

const TechGroup = ({ group }) => {
  return (
    <motion.div className="rounded-[28px] border border-white/10 bg-tertiary/60 p-5 sm:p-6 shadow-card backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-[22px]">{group.title}</h3>
          <p className="mt-1 text-sm text-secondary">{group.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 mt-5 sm:mt-6">
        {group.skills.map((skill) => (
          <SkillTile key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

TechGroup.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string,
        symbol: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

const Tech = () => {
  return (
    <div className="grid gap-7">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TechGroup group={group} />
        </motion.div>
      ))}
    </div>
  );
};

const TechWrapper = SectionWrapper(Tech, 'tech');

export default TechWrapper;
