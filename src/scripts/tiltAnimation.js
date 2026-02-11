const initTiltEffect = () => {
  if (typeof VanillaTilt === 'undefined') {
    console.warn('VanillaTilt is not loaded');
    return;
  }

  const tiltElements = document.querySelectorAll('.priority-card, .project-card');
  
  tiltElements.forEach((element) => {
    VanillaTilt.init(element, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    });
  });
};

export default initTiltEffect;
