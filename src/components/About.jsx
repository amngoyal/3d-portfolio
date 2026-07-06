import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="w-full xs:w-[250px]"
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="shadow-card p-[1px] rounded-[20px] w-full green-pink-gradient"
    >
      <div className="flex flex-col justify-evenly items-center bg-tertiary px-12 py-5 rounded-[20px] min-h-[280px]">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="font-bold text-[20px] text-center text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] text-secondary leading-[30px]"
      >
        I build React and Next.js products with a focus on frontend
        architecture, performance, and SEO. My work usually lives at the
        intersection of clean UX, strong Core Web Vitals, and scalable
        component systems.
      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-4 max-w-3xl text-[17px] text-secondary leading-[30px]"
      >
        I&apos;ve led frontend teams through migrations, reusable library
        design, and product modernization. The goal is always the same: ship
        polished interfaces that are fast, maintainable, and easy for teams to
        extend.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, 'about');
export default AboutSection;
