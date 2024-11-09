document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const optionsButton = document.getElementById('optionsButton');
    const exitButton = document.getElementById('exitButton');

    let gameWindow;

    startButton.addEventListener('click', () => {
        console.log('Start clicked');
        gameWindow = window.open('game.html', '_blank');
    });

    optionsButton.addEventListener('click', () => {
        console.log('Options clicked');
        window.location.href = 'options.html';
    });

    exitButton.addEventListener('click', () => {
        console.log('Exit clicked');
        window.location.href = 'exit.html'; 
    });
});
