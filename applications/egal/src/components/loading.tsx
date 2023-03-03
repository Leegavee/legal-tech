import React from 'react';
import { motion, Transition } from 'framer-motion';

const LoadingDot = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'black',
  borderRadius: '50%',
};

const LoadingContainer = {
  width: '3rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: '-70%',
  },
  animate: {
    y: '30%',
  },
};

const DotTransition: Transition = {
  duration: 0.5,
  repeatType: 'loop'
};

export interface ILoadingProps {
  isVisible: boolean;
}
export const Loading = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <motion.div
      style={LoadingContainer}
      variants={ContainerVariants}
      initial="active"
      animate="animate"
    >
      <motion.span
        style={LoadingDot}
        variants={DotVariants}
        transition={DotTransition}
      />
      <motion.span
        style={LoadingDot}
        variants={DotVariants}
        transition={DotTransition}
      />
      <motion.span
        style={LoadingDot}
        variants={DotVariants}
        transition={DotTransition}
      />
    </motion.div>
  </div>
);
