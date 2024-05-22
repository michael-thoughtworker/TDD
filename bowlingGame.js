function calculateBowlingScore(frames) {
    let score = 0;
    let rolls = frames.split(" ").join("").split("");
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
        if (rolls[rollIndex] === 'X') {  // Strike
            score += 10 + strikeBonus(rolls, rollIndex);
            rollIndex++;
        } else if (rolls[rollIndex + 1] === '/') {  // Spare
            score += 10 + spareBonus(rolls, rollIndex);
            rollIndex += 2;
        } else {  // Open frame
            score += openFrameScore(rolls, rollIndex);
            rollIndex += 2;
        }
    }

    return score;
}

function strikeBonus(rolls, index) {
    return (rolls[index + 1] === 'X' ? 10 : parseInt(rolls[index + 1])) +
           (rolls[index + 2] === 'X' ? 10 : (rolls[index + 2] === '/' ? 10 - parseInt(rolls[index + 1]) : parseInt(rolls[index + 2])));
}

function spareBonus(rolls, index) {
    return rolls[index + 2] === 'X' ? 10 : parseInt(rolls[index + 2]);
}

function openFrameScore(rolls, index) {
    return parseInt(rolls[index]) + parseInt(rolls[index + 1]);
}

module.exports = calculateBowlingScore;