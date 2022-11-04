import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ShowcaseListItem from '../ShowCaseListItem';

const transition = {
  duration: 0.3,
};

const ShowcaseListContainerVariants = {
  initial: { opacity: 0, y: 50, transition },
  enter: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: 50, transition },
};

function ShowcaseList({ work }) {
  return (
    <div className="c-ShowcaseList">
      <div className="c-ShowcaseList--wrapper">
        <motion.div
          className="c-ShowcaseList--container"
          variants={ShowcaseListContainerVariants}
        >
          {work.map((project) => (
            <ShowcaseListItem
              key={project.name}
              data={project}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

ShowcaseList.propTypes = {
  work: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShowcaseList;
