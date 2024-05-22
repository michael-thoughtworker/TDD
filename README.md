
Please design a program to calculate the total score of a bowling game. The scoring rules for bowling are as follows:

- Each game consists of ten frames. At the start of each frame, there are ten pins. The player can throw the ball twice per frame, with the goal of knocking down all the pins in as few throws as possible.
- If the player knocks down all the pins with the first throw, it is called a STRIKE, represented by an "X". The score for that frame is 10 points plus the number of pins knocked down in the next two throws.
- If the player does not knock down all the pins with the first throw, they will get a second throw. If they knock down the remaining pins with the second throw, it is called a SPARE, represented by a "/". The score for that frame is 10 points plus the number of pins knocked down in the next throw.
-  If the player fails to knock down all the pins with the second throw, the score for that frame is the total number of pins knocked down in both throws, with no bonus. The game then proceeds to the next frame. This process repeats for each frame.
- In the tenth frame, the player may have up to three throws. If a STRIKE or a SPARE occurs in the tenth frame, the player is allowed a third throw.
- The total score of the game is the sum of the scores from all ten frames.


To thoroughly test a program that calculates the total score of a bowling game based on the rules provided, you should consider the following test scenarios:

All Strikes: Test a game where the player hits a strike in every frame. This scenario checks the calculation of the bonus for strikes, especially in the sequence of strikes.
Input: X X X X X X X X X X X X
Expected Output: 300 (Maximum possible score)
All Spares: Test a game where the player hits a spare in every frame, with a specific number of pins knocked down in the first throw.
Input: 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5
Expected Output: 150
All Open Frames: Test a game with no strikes or spares. Each frame should have a specific combination of two throws that do not knock down all ten pins.
Input: 45 54 36 27 09 63 72 81 90 18
Expected Output: 90
Mixed Types: Test a game with a mix of strikes, spares, and open frames.
Input: X 7/ 9- X -8 8/ -6 X X 34 7/3
Expected Output: Calculate based on rules.
Tenth Frame Variations:
Scenario A: Tenth frame with three strikes.
Input: -- -- -- -- -- -- -- -- -- XXX
Expected Output: 30
Scenario B: Tenth frame with a spare followed by a strike.
Input: -- -- -- -- -- -- -- -- -- 2/X
Expected Output: 20
Scenario C: Tenth frame with no bonus throw.
Input: -- -- -- -- -- -- -- -- -- 45
Expected Output: 9
Perfect Game with Different Notations: Test the program's ability to handle different valid input formats for a perfect game.
Input Variations: X X X X X X X X X XXX, XXXXXXXXXXXX
Expected Output: 300
Edge Cases:
Zero Score Game: All throws hit no pins.
Input: -- -- -- -- -- -- -- -- -- --
Expected Output: 0
Invalid Inputs: Inputs that do not conform to the expected format or illegal pin counts.
Input: X X X X X X X X X X X X X
Expected Output: Error or specific handling message
Sequential Spares and Strikes:
Test sequences where spares and strikes occur back-to-back to ensure proper bonus calculations.
Input: X 7/ X 7/ X 7/ X 7/ X 7/X
Expected Output: Calculate based on rules.