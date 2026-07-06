import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { blogPosts, personalProjects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const actionIconFor = (label) => {
  if (label.toLowerCase().includes("github")) {
    return github;
  }

  return "/link.svg";
};

const ActionButton = ({ href, label }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#915eff]/60 hover:bg-[#915eff]/10"
    >
      <img
        src={actionIconFor(label)}
        alt=""
        className="h-4 w-4 object-contain"
      />
      {label}
    </a>
  );
};

ActionButton.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const TagList = ({ tags }) => (
  <div className="mt-4 flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag.name}
        className={`rounded-full border border-white/10 px-3 py-1 text-[12px] font-medium ${tag.color}`}
      >
        #{tag.name}
      </span>
    ))}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const ProjectCard = ({
  index,
  title,
  description,
  tags,
  image,
  liveLink,
  githubLink,
  caseStudyLink,
}) => {
  const actions = [
    { label: "Live Demo", href: liveLink },
    { label: "GitHub", href: githubLink },
    { label: "Case Study", href: caseStudyLink },
  ];

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.45, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.02,
          speed: 450,
        }}
        className="group h-full"
      >
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-tertiary p-5 shadow-card transition-transform duration-300 group-hover:-translate-y-1">
          {image && (
            <div className="mb-5 relative h-[240px] w-full overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e13]/80 via-transparent to-transparent" />
            </div>
          )}
          <div className="">
            <h3 className="text-[24px] font-bold text-white">{title}</h3>
            <p className="mt-2 text-[14px] leading-7 text-secondary">
              {description}
            </p>
          </div>

          <TagList tags={tags} />

          <div className="mt-5 flex flex-wrap gap-3">
            {actions.map((action) => (
              <ActionButton
                key={action.label}
                href={action.href}
                label={action.label}
              />
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  image: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
  caseStudyLink: PropTypes.string,
};

const BlogCard = ({
  index,
  title,
  description,
  tags,
  image,
  publishedAt,
  readTime,
  articleLink,
  actionLabel = "Read Article",
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.45, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.02,
          speed: 450,
        }}
        className="group h-full"
      >
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black-200 p-5 shadow-card transition-transform duration-300 group-hover:-translate-y-1">
          {image && (
            <div className=" mb-5 relative h-[220px] w-full overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e13]/85 via-transparent to-transparent" />
            </div>
          )}

          <div className=" flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-secondary">
            <span>{publishedAt}</span>
            <span className="text-white/25">•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="mt-3 text-[24px] font-bold text-white">{title}</h3>
          <p className="mt-2 text-[14px] leading-7 text-secondary">
            {description}
          </p>

          <TagList tags={tags} />

          <div className="mt-5">
            <ActionButton href={articleLink} label={actionLabel} />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  image: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
};

const Works = () => {
  return (
    <>
      <motion.div
        id="projects"
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        className="scroll-mt-32 pt-4"
      >
        <p className={styles.sectionSubText}>Built for clients</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] text-secondary leading-[30px]"
        >
          Live sites I&apos;ve built and shipped, with a focus on performance,
          clarity, and conversion.
        </motion.p>
      </div>
      <div className="grid gap-7 mt-12 md:grid-cols-2">
        {personalProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>

      <motion.div
        id="writing"
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        className="mt-24 scroll-mt-32 pt-4"
      >
        <p className={styles.sectionSubText}>Selected writing</p>
        <h2 className={styles.sectionHeadText}>Writing & Talks.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] text-secondary leading-[30px]"
        >
          A few talks and articles that reflect how I think about frontend
          architecture, performance, and the small UX details that make a big
          difference.
        </motion.p>
      </div>
      <div className="grid gap-7 mt-12 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.title} {...post} index={index} />
        ))}
      </div>
    </>
  );
};

const WorksWrapper = SectionWrapper(Works, "works");

export default WorksWrapper;
