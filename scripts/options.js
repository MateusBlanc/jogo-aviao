document.addEventListener('DOMContentLoaded', () => {
    const volumeSlider = document.getElementById('volumeSlider');
    const saveButton = document.getElementById('saveOptions');

    
    const savedVolume = localStorage.getItem('volume');
    if (savedVolume !== null) {
        volumeSlider.value = savedVolume;
    }

    saveButton.addEventListener('click', () => {
        localStorage.setItem('volume', volumeSlider.value);
        alert('Configurações salvas!');

        window.location.href = 'menu.html';
    });
});
