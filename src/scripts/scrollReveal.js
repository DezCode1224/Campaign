const initScrollReveal = (targetElements, defaultProps) => {
  if (typeof ScrollReveal === 'undefined') {
    console.warn('ScrollReveal is not loaded');
    return;
  }

  const sr = ScrollReveal({
    origin: defaultProps.origin,
    distance: defaultProps.distance,
    duration: defaultProps.duration,
    delay: defaultProps.delay,
    rotate: defaultProps.rotate,
    opacity: defaultProps.opacity,
    scale: defaultProps.scale,
    easing: defaultProps.easing,
    mobile: defaultProps.mobile,
    reset: defaultProps.reset,
    useDelay: defaultProps.useDelay,
    viewFactor: defaultProps.viewFactor,
    viewOffset: defaultProps.viewOffset
  });

  targetElements.forEach((element) => {
    sr.reveal(element, defaultProps);
  });
};

export default initScrollReveal;
