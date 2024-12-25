# Game Board Project

This project is a simple game board application where numbers are dynamically generated on a grid. It includes a toggle for range-based number generation and a "free space" toggle for customizing the central grid cell.

---

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Running the Project](#running-the-project)

---

## Features

- **Random Number Generation**: Numbers are generated randomly for the grid.
- **Range-Based Number Filling**: Optional toggle to restrict numbers to specific ranges by column.
- **Free Space Toggle**: Toggles a "free space" for the center cell without modifying other cells.

---

## Setup

### Prerequisites

Ensure the following tools are installed on your system:
- Node.js (version 18+)
- npm (or yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/game-board.git
   cd game-board
   npm install
   ```

---

## Running the Project

### Development Mode

To run the project in development mode:
   ```bash
   npm start
   ```
The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

### Production Mode

To build the project for production:
   ```bash
   npm run build
   ```
The optimized production build will be created in the `build` folder.