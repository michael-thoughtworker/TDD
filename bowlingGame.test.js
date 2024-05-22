const calculateBowlingScore = require('./bowlingGame');

test('All Strikes - Perfect Game', () => {
    const frames = 'X X X X X X X X X XXX';
    const expectedScore = 300;
    const score = calculateBowlingScore(frames);
    expect(score).toBe(expectedScore);
});