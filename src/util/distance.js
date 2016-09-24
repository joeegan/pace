import kilometreDistances from './kilometre-distances';
import {
  paceToSeconds,
  secondsToPace,
  riegel,
} from './time';

function calculateDistances(pace, distance, algoName) {
  const paceSecondsPerK = paceToSeconds(pace) / distance;
  if (algoName === 'PROJECTED') {
    return Object.keys(kilometreDistances).map((d) => ({
      name: d,
      distance: kilometreDistances[d],
      pace: riegel(paceSecondsPerK, 1, kilometreDistances[d]),
    }));
  } else if (algoName === 'SAME') {
    return Object.keys(kilometreDistances).map((d) => ({
      name: d,
      distance: kilometreDistances[d],
      pace: secondsToPace(paceSecondsPerK * kilometreDistances[d]),
    }));
  }
}

module.exports = { calculateDistances };