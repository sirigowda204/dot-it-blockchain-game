# Dot-it Blockchain Game

This game is an engaging project on the **Polkadot blockchain** created for the **EasyA x Polkadot Harvard Hackathon**.

## Game Mechanics

### Initialization:
1. The player starts with `1000` points.
2. Multiple dots of varying sizes appear on the screen.

### Gameplay:
1. The player must click on the smallest dot.
2. Clicking the smallest dot results in `no points` lost.
3. Clicking a larger dot results in points lost, proportional to the dot's size.
4. If no dot is clicked within `5 seconds`, the player loses `10 points`.
5. After each click, new dots appear.

### End Condition:
1. The game ends when the player's points reach `zero`.
2. The `high score` is based on the `number of times` new dots appeared.

## Blockchain Integration

Using Polkadot, the game leverages blockchain for features like storing high scores, ensuring fair play, and possibly enabling rewards or in-game purchases.

### Smart Contracts:
1. **Ink!** (for smart contracts on Polkadot) is used to handle game logic on the blockchain.
2. The smart contracts store high scores and player data securely.

## Frontend

1. The game interface is developed using web technologies (HTML, CSS, JavaScript).
2. The Polkadot blockchain is connected using the Polkadot.js API.

## Getting Started

### Prerequisites
- Node.js (v16)
- npm
- Rust with `cargo-contract`

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/sirigowda204/dot-it-blockchain-game
    cd dot-game-frontend
    ```

2. **Install frontend dependencies:**
    ```sh
    cd frontend/dot-game-frontend
    npm install
    ```

3. **Build and deploy the smart contract:**
    ```sh
    cd ../../contract
    cargo +nightly contract build
    ```

### Running the Frontend

1. **Start the development server:**
    ```sh
    cd frontend/dot-game-frontend
    npm start
    ```

The development server should now be running at [http://localhost:3000](http://localhost:3000).
