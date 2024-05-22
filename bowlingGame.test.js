const calculateBowlingScore = require('./bowlingScoreCalculator'); // Assume this is your module

describe('Bowling Score Calculator', () => {
  test('Test All Gutter Balls', () => {
    const frames = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'];
    const expectedScore = 0;
    const actualScore = calculateBowlingScore(frames);
    expect(actualScore).toBe(expectedScore);
  });

  test('Test All Strikes', () => {
    const frames = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XXX'];
    const expectedScore = 300;
    const actualScore = calculateBowlingScore(frames);
    expect(actualScore).toBe(expectedScore);
});

test('Test All Spares', () => {
    const frames = ['5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/5'];
    const expectedScore = 150;
    const actualScore = calculateBowlingScore(frames);
    expect(actualScore).toBe(expectedScore);
});

test('Test Mixed Game', () => {
    const frames = ['X', '7/', '72', '--', 'X', 'X', '35', '5/', '8/', 'XXX'];
    const expectedScore = 163;  // Calculated expected score based on the rules
    const actualScore = calculateBowlingScore(frames);
    expect(actualScore).toBe(expectedScore);
});

});