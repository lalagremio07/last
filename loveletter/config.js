window.LOVE_LETTER_CONFIG = {
  recipientName: "Blossom",
  title: "Hi!",
  // Write your message as an array of paragraphs.
  message: [
    "I hope the universe will give you all the good and genuine things that you deserve.",
    "I'm always here for you.",
    "Happy Valentine's Day!",
   
  ],
  signature: "— Buttercup <3",

  // Collapsed (peek) placeholder line count
  peekLineCount: 11,

  // Sound timing tweak: these paper samples have a bit of leading silence.
  // Increase to make the sound happen sooner; decrease if it feels too early.
  // (Seconds to skip from the start of the file.)
  sfx: {
    envelopeSeekSeconds: 2.0,
    letterSeekSeconds: 1.0,

    // Envelope close can use a different slice (usually shorter/snappier)
    envelopeCloseSeekSeconds: 2.1,

    // Trim the sound so it doesn't "trail" after the animation/click.
    // (Seconds to play, after seeking. Set to 0 to play the whole file.)
    envelopePlaySeconds: 0.65,
    letterPlaySeconds: 0.45,

    envelopeClosePlaySeconds: 0.45,
  },

  // Floating hearts background
  hearts: {
    enabled: true,
    max: 42,
    // Spawn interval range (ms)
    spawnMs: [260, 520],
    // Heart radius range (px)
    size: [32, 64],
    // Upward speed range (px/s)
    riseSpeed: [40, 95],

    pop: {
      enabled: true,
      sound: true,
    },
  },
};