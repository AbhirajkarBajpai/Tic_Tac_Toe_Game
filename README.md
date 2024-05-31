# Customizable Tic-Tac-Toe

## Overview

The Tic-Tac-Toe game provided here is highly customisable, allowing to specify the size of the grid (n x n) as well as the win streak (m) for victory. The game has been designed to be responsive and can be played on both desktop and mobile devices.

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

1. Launch the online game in your browser.
2. Enter a value in the "Grid Size" input field between 3 and 10 to choose the appropriate grid size (n x n).
3. In the "Win Streak" input area, enter a value between 3 and the selected grid size to set the victory streak (m).
4. To create the game board, click the "Start Game" button.
5. Each player clicks on a grid cell in turn to place their mark (X or O).
6. After every move, the game will determine if it's a win or a draw and show the outcome.

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

## Live Deployment

You can also play the game live without setting it up locally. The game is deployed at the following URL:

[Play Customizable Tic-Tac-Toe Live](https://abhirajkarbajpai.github.io/Tic_Tac_Toe_Game/)


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any questions or suggestions, please open an issue on the GitHub repository or contact me at 21IT3001@rgipt.ac.in.
