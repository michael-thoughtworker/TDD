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

test('Test Final Frame Variations', () => {
    const game1 = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X5/']; // Strike followed by spare
    const expectedScore1 = 285; // Calculated expected score based on the rules
    const actualScore1 = calculateBowlingScore(game1);
    expect(actualScore1).toBe(expectedScore1);

    const game2 = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '5/X']; // Spare followed by strike
    const expectedScore2 = 275; // Calculated expected score based on the rules
    const actualScore2 = calculateBowlingScore(game2);
    expect(actualScore2).toBe(expectedScore2);

    const game3 = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XXX']; // Three strikes
    const expectedScore3 = 300; // Maximum score
    const actualScore3 = calculateBowlingScore(game3);
    expect(actualScore3).toBe(expectedScore3);
});

});