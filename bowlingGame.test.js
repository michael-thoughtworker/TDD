const calculateBowlingScore = require('./bowlingGame');

describe('Bowling Game Score Calculator', () => {
    test('All Strikes - Perfect Game', () => {
        const frames = 'X X X X X X X X X XXX';
        const expectedScore = 300;
        const score = calculateBowlingScore(frames);
        expect(score).toBe(expectedScore);
    });

    test('All Spares with first throw knocking down 5 pins each', () => {
        const frames = '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5';
        const expectedScore = 150;
        const score = calculateBowlingScore(frames);
        expect(score).toBe(expectedScore);
    });
});