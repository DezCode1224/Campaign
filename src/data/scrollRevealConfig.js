export const targetElements = [
  '.hero-section',
  '.about-section',
  '.priorities-section',
  '.priority-card',
  '.projects-section'
];

export const defaultProps = {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 100,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.6, 0, 0.2, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.2,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
};
