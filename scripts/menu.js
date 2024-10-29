document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const optionsButton = document.getElementById('optionsButton');
    const exitButton = document.getElementById('exitButton');

    startButton.addEventListener('click', () => {
        console.log('Start clicked');
        //iniciar o jogo
    });

    optionsButton.addEventListener('click', () => {
        console.log('Options clicked');
        //opções
    });

    exitButton.addEventListener('click', () => {
        console.log('Exit clicked');
        //sair do jogo
    });
});