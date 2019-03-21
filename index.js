
function theBeatlesPlay (musicians, instruments) {
  var musiciansPlay
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    musiciansPlay.push((musicians[i] + " plays " + instruments[i]);
  }
  return musiciansPlay;
}