export const phases = [
  // Format: { threshold: number, action: function, reset: function or null }
  { threshold: 25, action: 'kaboom', reset: 'resetKaboom' },
  { threshold: 20, action: 'seizure', reset: 'resetSeizure' },
  { threshold: 15, action: 'randomGlow', reset: 'resetRandomGlow' },
  { threshold: 10, action: 'buttonMove', reset: 'resetButtonMove' },
  { threshold: 5, action: 'secondMessages', reset: null },
  { threshold: 0, action: 'firstMessages', reset: null }
];
// Thresholds must be multiples of 5
// Each phase gets 5 presses (0,1,2,3,4) before moving to next threshold

export const MAX_PRESS_COUNT = phases.length * 5;