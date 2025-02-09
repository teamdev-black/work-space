import { getCurrentTetrimino } from './tetrimino.js';
import { field } from './board.js';
import { animationId, initGame, gameLoop } from './game.js';
import { PLAY_SCREEN_WIDTH } from './utils.js';


let score = 0;
let level = 1;
let linesCleared = 0;
let comboCount = -1; // combo数は-1で初期化
let beforeTetris = false;
let beforeTSpin = false;
let isTetris = false;
let isTspin = false;
export let DROP_SPEED = 1000;
let scoreElement = document.getElementById('score');
let levelElement = document.getElementById('level');
let line = document.querySelector("#line");

export let isGameOver = false;

export function getScore() {
    return score;
}

export function getLevel() {
    return level;
}

export function initScore(){
    score = 0;
    scoreElement.textContent = score;
};

export function initLevel(){
    level = 1;
    levelElement.textContent = level;
}

export function initLines(){
        linesCleared = 0;
        line.textContent = linesCleared
};

export function updateScore(clearedLines, tSpinFlag, isBackToBack) {

    const scoreIncrement = calculateScoreIncrement(clearedLines, tSpinFlag, isBackToBack);
    score += scoreIncrement;
    linesCleared += clearedLines;
    line.textContent = linesCleared //消したライン数をゲーム画面で表示

    checkLevelUp();
    updateScoreDisplay();
    updateLevelDisplay();
}

function calculateScoreIncrement(clearedLines, tSpinFlag, isBackToBack) {
    const baseScores = {
        0: 1,
        1: 100,  // Single
        2: 300,  // Double
        3: 500,  // Triple
        4: 800   // Tetris
    };

    const miniTspinScores = {
        0: 100, // no line
        1: 200, // Single
    }
    const TspinScores = {
        0: 400,  // no line
        1: 800,  // Single
        2: 1200,  // Double
        3: 1600,  // Triple
    };

    let baseScore = 0;
    switch (tSpinFlag) {
        case 0:
            baseScore = baseScores[clearedLines];
            break;
        case 1:
            baseScore = TspinScores[clearedLines];
            break;
        case 2:
            baseScore = miniTspinScores[clearedLines];
            break;
    }

    if (isBackToBack) {
        baseScore *= 1.5;
    }

    return baseScore * level;
}

function checkLevelUp() {
    const newLevel = Math.min(15, Math.floor(linesCleared / 10) + 1);
    if (newLevel > level) {
        level = newLevel;
        updateDropSpeed(level);
    }
}
function updateDropSpeed(level) {
    DROP_SPEED = Math.floor(1000 * Math.pow(0.8 - ((level - 1) * 0.007), level - 1));
}

function updateScoreDisplay() {
    if (scoreElement) {
        scoreElement.textContent = score;
    }
}

function updateLevelDisplay() {
    if (levelElement) {
        levelElement.textContent = level;
    }
}

export function checkGameOver() {
    const currentTetrimino = getCurrentTetrimino();
    if (!currentTetrimino) {
        return false;
    }

    // 新しいテトリミノが既存のブロックと重なるかチェック
    for (let row = 0; row < currentTetrimino.shape.length; row++) {
        for (let col = 0; col < currentTetrimino.shape[row].length; col++) {
            if (currentTetrimino.shape[row][col]) {
                const x = currentTetrimino.column + col;
                const y = currentTetrimino.row + row;
                if (y >= 0 && field[y][x]) {
                    return true; // ゲームオーバー
                }
            }
        }
    }

    // ブロックが完全に21段目以上に積み上がったかチェック
    for (let col = 0; col < PLAY_SCREEN_WIDTH; col++) {
        if (field[0][col] || field[1][col]) {
            return true; // ゲームオーバー
        }
    }

    return false;
}

export function handleGameOver() {
    isGameOver = true;
    cancelAnimationFrame(animationId); // アニメーションループを停止
    
    // ゲームオーバー画面を表示
    const gameOverScreen = document.getElementById('game-over');
    const finalScoreElement = document.getElementById('final-score');
    
    finalScoreElement.textContent = score; // 最終スコアを表示
    gameOverScreen.style.display = 'flex'; // ゲームオーバー画面を表示

    // リスタートボタンのイベントリスナーを設定
    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', restartGame);

    // クローズボタンのイベントリスナーを設定
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', closeGameOver);
}

function restartGame() {
    const gameOverScreen = document.getElementById('game-over');
    gameOverScreen.style.display = 'none'; // ゲームオーバー画面を非表示
    
    // ゲームをリセットして再開
    initGame();
    gameLoop();
}

function closeGameOver() {
    const gameOverScreen = document.getElementById('game-over');
    gameOverScreen.style.display = 'none'; // ゲームオーバー画面を非表示
}


// Combo数を取得
export function getComboCount(fullRows) {
    if (fullRows > 0) comboCount++;
    else comboCount = -1;
    return comboCount;
}

export function setIsTetris(b) {
    isTetris = b;
}

export function setIsTspin(b) {
    isTspin = b;
}

export function setBeforeTetrisAndTspin(b) {
    beforeTetris = isTetris;
    beforeTSpin = isTspin;
    isTetris = false;
    isTspin = false;
}

export function getIsBackToBack() {
    console.log(beforeTSpin, beforeTetris, isTspin, isTetris);
    return (beforeTSpin || beforeTetris) && (isTetris || isTspin);
}