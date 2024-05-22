function calculateBowlingScore(frames) {
    let score = 0;
    let rolls = [];

    // Convert frames to a flat list of rolls
    frames.forEach(frame => {
        if (frame === 'XXX') {
            rolls.push(10, 10, 10);
        } else if (frame === 'X') {
            rolls.push(10);
        } else {
            frame.split('').forEach((char, index) => {
                if (char === 'X') rolls.push(10);
                else if (char === '/') rolls.push(10 - parseInt(frame[index - 1], 10));
                else if (char === '-') rolls.push(0);
                else rolls.push(parseInt(char, 10));
            });
        }
    });

    // Calculate the score
    for (let i = 0, frameIndex = 0; frameIndex < 10; frameIndex++) {
        if (rolls[i] === 10) { // Strike
            score += 10 + rolls[i + 1] + rolls[i + 2];
            i++;
        } else if (rolls[i] + rolls[i + 1] === 10) { // Spare
            score += 10 + rolls[i + 2];
            i += 2;
        } else {
            score += rolls[i] + rolls[i + 1];
            i += 2;
        }
    }

    return score;
}

module.exports = calculateBowlingScore;