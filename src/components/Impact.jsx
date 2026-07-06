import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const useInViewOnce = (threshold = 0.35) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const useCountUp = (target, active, duration = 1100) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let rafId;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const nextValue = Math.round(progress * target);

      setValue(nextValue);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(rafId);
  }, [active, duration, target]);

  return value;
};

const StatCard = ({ stat, index }) => {
  const [ref, isVisible] = useInViewOnce();
  const count = useCountUp(stat.type === 'range' ? 0 : stat.target, isVisible);
  const rangeEnd = useCountUp(stat.type === 'range' ? stat.to : 0, isVisible);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn('up', 'spring', index * 0.12, 0.75)}
      className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black-200 p-6 shadow-card"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#915eff]/20 via-transparent to-transparent opacity-80" />
      <div className="relative">
        <p className="text-secondary text-sm uppercase tracking-[0.18em]">
          {stat.label}
        </p>
        <div className="mt-4 flex items-end gap-2">
          {stat.type === 'range' ? (
            <h3 className="font-black text-[36px] sm:text-[44px] text-white leading-none">
              {stat.from} <span className="text-[#915eff]">→</span> {rangeEnd}
            </h3>
          ) : (
            <h3 className="font-black text-[36px] sm:text-[44px] text-white leading-none">
              {count}
              {stat.suffix}
            </h3>
          )}
        </div>
        <p className="mt-3 text-[14px] leading-[24px] text-secondary">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
};

const Impact = () => {
  const stats = [
    {
      label: 'Years Experience',
      target: 7,
      suffix: '+',
      description: 'Senior frontend delivery across product and platform teams.',
    },
    {
      label: 'Engineers Led',
      target: 8,
      suffix: '',
      description: 'Leading sprint planning, reviews, and release execution.',
    },
    {
      label: 'Organic Clicks',
      target: 674,
      suffix: 'K+',
      description: 'Measured SEO impact on a high-traffic financial platform.',
    },
    {
      label: 'Google Search Impressions',
      target: 194,
      suffix: 'M+',
      description: 'Large-scale visibility from frontend and SEO improvements.',
    },
    {
      label: 'Next.js Migration',
      type: 'range',
      from: 12,
      to: 15,
      description: 'Zero-downtime migration with reduced technical debt.',
    },
    {
      label: 'Core Web Vitals',
      type: 'range',
      from: 20,
      to: 70,
      description: 'Performance uplift through focused frontend optimization.',
    },
  ];

  return (
    <div>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={styles.sectionSubText}>Impact at a glance</p>
        <h2 className={styles.sectionHeadText}>Highlights.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
};

const ImpactSection = SectionWrapper(Impact, 'impact');

export default ImpactSection;
