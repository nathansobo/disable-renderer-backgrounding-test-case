'use strict'

function enableSilentAudioHack () {
  let context = new AudioContext()
  let source = context.createBufferSource()
  source.connect(context.destination)
  source.start(0)
}
enableSilentAudioHack()

function loopAnimationFrames () {
  let start = Date.now()
  requestAnimationFrame(function () {
    let delta = Date.now() - start
    if (delta > 1000) {
      console.log('Time since last animation frame exceeds 1s:', delta);
    }
    loopAnimationFrames()
  })
}

loopAnimationFrames()
