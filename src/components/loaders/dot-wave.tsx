import { motion } from 'framer-motion';

const LoadingContainer = {
  width: '10rem',
  height: '5rem',
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
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

const DotTransition = {
  duration: 1,
  repeat: Infinity,
  ease: 'easeInOut',
};

export function ThreeDotsWave() {
  return (
    <div className='pt-20 w-full flex items-center justify-center primary-100'>
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial='initial'
        animate='animate'
      >
        <motion.span
          className='block w-8 h-8 bg-primary-100 rounded-[50%]'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className='block w-8 h-8 bg-primary-100 rounded-[50%]'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className='block w-8 h-8 bg-primary-100 rounded-[50%]'
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
