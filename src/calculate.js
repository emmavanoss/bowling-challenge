function calculate (frames) {
  var totalScore = 0
  for (var i = 0; i < frames.length; i++) {
    totalScore += findFrameTotal(frames, i)
  }
  return totalScore
}

function findFrameTotal (frames, i) {
  var frameTotal = frames[i].reduce(function (acc, cur) {
    return acc + cur
  }, 0)
  if (frameTotal >= 10 && i < 9) {
    var bonus = calculateBonus(frames, i)
    frameTotal += bonus
  }
  console.log(frameTotal)
  return frameTotal
}

function calculateBonus (frames, i) {
  console.log('calculateBonus called', i)
  if (frames[i][0] === 10) {
    return frames[i + 1][0] + frames[i + 1][1]
  } else {
    return frames[i + 1][0]
  }
}
