# Customizable Tic-Tac-Toe

## Overview

This is a customizable Tic-Tac-Toe game where users can define the grid size (n x n) and the win streak (m) needed to win the game. The game is designed to be responsive and can be played on both desktop and mobile devices.

## Features

- **Customizable Grid Size**: Users can define the grid size (n x n), where n is any integer between 3 and 10.
- **Customizable Win Streak**: Users can set the number of consecutive marks (m) required to win the game, where m is any integer between 3 and n.
- **Responsive Design**: The game adjusts for both desktop and mobile devices.
- **Game Logic**: Handles turn-taking, win detection, and draw scenarios.

## Setup and Usage

### Prerequisites

To run this game, you'll need a modern web browser.

### Running the Game

1. Clone the repository or download the source code.

    ```sh
    git clone https://github.com/AbhirajkarBajpai/Tic_Tac_Toe_Game.git
    ```

2. Open the `index.html` file in your web browser.

### How to Play

1. Open the game in your web browser.
2. Set the desired grid size (n x n) by entering a value between 3 and 10 in the "Grid Size" input field.
3. Set the win streak (m) by entering a value between 3 and the chosen grid size in the "Win Streak" input field.
4. Click the "Start Game" button to generate the game board.
5. Players take turns clicking on the grid cells to place their marks (X or O).
6. The game will check for a win or draw after each move and display the result.

### Game Rules

- Players alternate turns, starting with player 'X'.
- The first player to get the specified win streak (m) in a row (horizontally, vertically, or diagonally) wins the game.
- If all cells are filled without any player achieving the win streak, the game is a draw.

## Code Structure

- `index.html`: The main HTML file containing the structure of the game.
- `styles.css`: The CSS file for styling the game.
- `script.js`: The JavaScript file containing the game logic.

## Customization

- Modify the `styles.css` file to change the look and feel of the game.
- Update the `script.js` file to tweak the game logic or add new features.

## Screenshots

![Screenshot of the game setup](screenshots/setup.png)
![Screenshot of the game in progress](screenshots/gameplay.png)


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any questions or suggestions, please open an issue on the GitHub repository or contact me at 21IT3001@rgipt.ac.in.
