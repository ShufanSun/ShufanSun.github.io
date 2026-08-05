import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useIsDark } from "./ThemeToggle";
import Fireflies from './Fireflies';
import Tech from './Tech';
const ExperienceCard = ({ experience, isDark }) => (
    <VerticalTimelineElement
        contentStyle={
            isDark
                ? { background: 'rgba(1, 60, 2, 0.2)', color: '#fff' }
                : {
                      background: '#fff',
                      color: '#000',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      boxShadow: '0 3px 0 rgba(0, 0, 0, 0.08)',
                  }
        }
        contentArrowStyle={{ borderRight: isDark ? '7px solid #233225' : '7px solid #fff' }}
        date={experience.date}
        dateClassName="font-serif"  // Add this line
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[80%] h-[80%] object-contain'
                />
            </div>
        }
    >
        {/* Reliable one-time reveal (framer-motion), replacing the library's
            scroll-reveal which re-hid cards on every scroll and left the
            left-side cards rendering incompletely. */}
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div>
                <h3 className='font-serif text-black dark:text-white text-[20px] font-bold'>{experience.title}</h3>
                <p
                    className='font-serif text-black/80 dark:text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='font-serif text-black/80 dark:text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </motion.div>
    </VerticalTimelineElement>
)
const Experience = () => {
  const isDark = useIsDark();
  return (
      <>
          {/* Header — full-bleed green bar with fireflies, matching Publications.
              In light mode it reads as a distinct green band; in dark mode it
              blends into the green page (same behaviour as Publications). */}
          <div className='relative left-1/2 -translate-x-1/2 w-screen -mt-6 pt-16 pb-10 min-h-[170px] flex items-center justify-center bg-[#001005]'>
              <Fireflies />
              <h2 className={`${styles.sectionHeadText} text-center relative z-10`}>
                  Experiences
              </h2>
          </div>

          {/* White band: white in light mode, transparent (page green) in dark —
              same treatment as the Publications section. */}
          <div className='relative left-1/2 -translate-x-1/2 w-screen bg-white dark:bg-transparent text-black dark:text-white-100 mt-0 -mb-10 sm:-mb-16 py-12 flex-1 flex flex-col'>
              <div className='max-w-7xl mx-auto px-6 sm:px-16 w-full'>
                  <div className='mt-0 flex flex-col'>
                      <VerticalTimeline animate={false}>
                          {experiences.map((experience, index) => (
                              <ExperienceCard
                                  key={`experience-${index}`}
                                  experience={experience}
                                  isDark={isDark}
                              />
                          ))}
                      </VerticalTimeline>
                  </div>
              </div>
          </div>
      </>
  )
}

export default SectionWrapper(Experience, "work", "flex-1 flex flex-col");