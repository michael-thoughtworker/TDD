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

    test('All Open Frames', () => {
        const frames = '45 54 36 27 09 63 72 81 90 18';
        const expectedScore = 90;
        const score = calculateBowlingScore(frames);
        expect(score).toBe(expectedScore);
    });
});