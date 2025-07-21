
export const useFramerAppearAnimations = () => {
  const observerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const appearId = element.getAttribute('data-framer-appear-id');
            
            if (appearId) {
              if (appearId.includes('fade')) {
                element.classList.add('framer-appear-fade');
              } else {
                element.classList.add('framer-appear');
              }
              
              observer.unobserve(element);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elementsToObserve = document.querySelectorAll('[data-framer-appear-id]');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};

export const framerSpringConfig = {
  type: 'spring',
  stiffness: 100,
  damping: 10,
  mass: 1
};

export const framerEasing = {
  default: [0.44, 0, 0.56, 1],
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1]
};

export const framerTimings = {
  appearDelay: 0,
  appearDuration: 0.4,
  scrollDuration: 30,
  textScrollDuration: 20
};
