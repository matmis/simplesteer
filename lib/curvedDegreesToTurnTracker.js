const turf = require('@turf/turf');
const State = require('./state');
const DB = require('./db/Repo');
const Calc2 = require('./Calc2');
const isYoung = require('./isYoung');
const WheelPosition = require('./wheelPosition');

const CurveddegreesToTurnTracker = (function () {
  let historys = [];
  function update(currentLocation) {
    const antennaToFrontAxleDistance = DB.getSettings().machine.antennaToFrontAxleDistance;
    const { timeAheadSeconds, minimumDistance } = DB.getSettings().targetPoint;
    let driveBearing = State.driveBearing;
    let wheelToTargetPointDistance = State.currentSpeedKmh * 1000 / 60 / 60 * timeAheadSeconds;
    if (wheelToTargetPointDistance < minimumDistance) {
      wheelToTargetPointDistance = minimumDistance;
    }

    const targetPositionCorner = turf.rhumbDestination(currentLocation, antennaToFrontAxleDistance / 1000 + wheelToTargetPointDistance / 1000, driveBearing);
    const targetPoint = turf.nearestPointOnLine(turf.lineString(State.curvedLines.closestLine), targetPositionCorner);
    State.targetPointLocation = targetPoint.geometry.coordinates;
    const wheelToTargetBearing = turf.bearing(WheelPosition.getTurf(), targetPoint);

   
   
    State.degreesToTurn = Calc2.angleSignedDifference(driveBearing, wheelToTargetBearing);
    historys = historys.filter(isYoung);
    historys.push({ date: new Date(), value: State.degreesToTurn });
  }
  return {
    update,
    getHistorys: () => historys
  }
}());


module.exports = CurveddegreesToTurnTracker;