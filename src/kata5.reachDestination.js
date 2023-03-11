const reachDestination = (distance, speed) => {
  const arrivalTime = distance / speed;
  const timeRoundedUp = Math.round(arrivalTime * 2) / 2;
  return `I should be there in ${timeRoundedUp} hours.`;
}
module.exports = reachDestination;
