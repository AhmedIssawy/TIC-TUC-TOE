# Tic Tac Toe React

A simple Tic Tac Toe game built with React that demonstrates basic state management, conditional rendering, and custom CSS styling. The game alternates turns between two players, checks for winning conditions based on predefined combinations, and allows the game to be restarted.

![image](https://github.com/user-attachments/assets/0ee05c35-c9d0-49d1-bb35-817f9b7e9800)

## Features

- **3x3 Game Board:** A responsive grid where players can click to place their symbol.
- **Player Turns:** Alternates between "X" (Player 1) and "O" (Player 2).
- **Win Checking:** Uses a list of winning combinations to determine when a player has won.
- **Game Restart:** Resets the game state to allow a new game to be started.
- **Game Log:** (Optional) A log component that tracks each move.
- **Custom Styling:** Styled with CSS, including animations and responsive design.

## Project Structure

tic-tac-toe-react/ ├── public/ │ ├── index.html │ └── bg-pattern-dark.png 
# Background image referenced in the CSS
├── src/ │ ├── components/ │ │ ├── GameBourd.js 
# The game board component (note the file name "GameBourd" is used) 
 │ ├── Header.js # Header component │ │ ├── Log.js # Log component (for move history) │ │ └── Player.js
 # Player display component │ ├── winning_cominations.js # Exports WINNING_COMBINATIONS │ ├── App.js #
Main app component
│ ├── index.js 
#Application entry point │ └── index.css
# Global CSS styles ├── .gitignore ├── package.json └── README.md


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/tic-tac-toe-react.git
   cd tic-tac-toe-react
   npm i
   npm run dev

# LICENSE
  This project is licensed under the MIT License.
---

Feel free to modify the repository URL, license section, and any additional details to best reflect your project's specifics. Enjoy coding!
