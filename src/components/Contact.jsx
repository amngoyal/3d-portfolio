import { motion } from 'framer-motion';
import { contactLinks } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const contactEmail = 'amangoyal1198@gmail.com';

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 rounded-2xl border border-white/10 bg-tertiary/80 p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <p className="text-secondary text-lg">Let&apos;s build something meaningful</p>
          <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s talk.
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-secondary">
            I&apos;m currently open to new opportunities, freelance collaborations, and conversations around thoughtful digital experiences.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <span className="text-lg">✉️</span>
            <span>{contactEmail}</span>
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.imgSrc} alt={link.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 h-[350px] md:h-[550px] xl:h-auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, 'contact');

export default WrappedContact;
