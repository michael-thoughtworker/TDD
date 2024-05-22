
Please design a program to calculate the total score of a bowling game. The scoring rules for bowling are as follows:

- Each game consists of ten frames. At the start of each frame, there are ten pins. The player can throw the ball twice per frame, with the goal of knocking down all the pins in as few throws as possible.
- If the player knocks down all the pins with the first throw, it is called a STRIKE, represented by an "X". The score for that frame is 10 points plus the number of pins knocked down in the next two throws.
- If the player does not knock down all the pins with the first throw, they will get a second throw. If they knock down the remaining pins with the second throw, it is called a SPARE, represented by a "/". The score for that frame is 10 points plus the number of pins knocked down in the next throw.
-  If the player fails to knock down all the pins with the second throw, the score for that frame is the total number of pins knocked down in both throws, with no bonus. The game then proceeds to the next frame. This process repeats for each frame.
- In the tenth frame, the player may have up to three throws. If a STRIKE or a SPARE occurs in the tenth frame, the player is allowed a third throw.
- The total score of the game is the sum of the scores from all ten frames.

Bowling Score Calculator - Test Cases
This document outlines the test cases for a Bowling Score Calculator. These tests ensure that the calculator accurately computes scores based on various bowling scenarios, adhering to standard bowling rules.

Test Cases Overview
Test All Gutter Balls
Description: All throws knock down 0 pins.
Input: ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--']
Expected Output: 0
Test All Strikes
Description: Every frame results in a strike.
Input: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XXX']
Expected Output: 300
Test All Spares
Description: Each frame ends with a spare, and the first throw of each frame knocks down 5 pins.
Input: ['5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/5']
Expected Output: 150
Test Mixed Game
Description: A game with a mix of strikes, spares, and open frames.
Input: ['X', '7/', '72', '--', 'X', 'X', '35', '5/', '8/', 'XXX']
Expected Output: Score based on rules
Test Final Frame Variations
Description: Variations in the final frame:
Strike followed by a spare
Input: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X5/']
Expected Output: Score based on rules
Spare followed by a strike
Input: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '5/X']
Expected Output: Score based on rules
Three strikes
Input: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XXX']
Expected Output: 300
Test Single Frame Scenarios
Description: Scenarios focusing on a single frame:
Single strike frame
Input: ['X', '--', '--', '--', '--', '--', '--', '--', '--', '--']
Expected Output: 10
Test Edge Cases
Description: Handling consecutive strikes and spares:
Consecutive strikes
Input: ['X', 'X', '--', '--', '--', '--', '--', '--', '--', '--']
Expected Output: Score based on rules
Consecutive spares
Input: ['5/', '5/', '--', '--', '--', '--', '--', '--', '--', '--']
Expected Output: Score based on rules
Spare in the 10th frame
Input: ['--', '--', '--', '--', '--', '--', '--', '--', '--', '5/5']
Expected Output: Score based on rules
Strike in the 10th frame
Input: ['--', '--', '--', '--', '--', '--', '--', '--', '--', 'XXX']
Expected Output: Score based on rules