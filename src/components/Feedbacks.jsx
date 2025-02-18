import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
  >
    <p className="font-black text-[48px] text-white">{'"'}</p>

    <div className="mt-1">
      <p className="text-[18px] text-white tracking-wider">{testimonial}</p>

      <div className="flex justify-between items-center gap-1 mt-7">
        <div className="flex flex-col flex-1">
          <p className="font-medium text-[16px] text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-[12px] text-secondary">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>
    </div>
  </motion.div>
);

FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()} initial="hidden" whileInView="show">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 lg:grid-cols-2 gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const WrappedFeedbacks = SectionWrapper(Feedbacks, '');

export default WrappedFeedbacks;
