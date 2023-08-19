let themeSwitchContainer = document.getElementById('themeSwitch');

themeSwitchContainer.onclick = function() {
    themeSwitchContainer.children[0].classList.toggle('theme-switch-toggle');
    themeSwitchContainer.classList.toggle('theme-switch-container-light');
    background.classList.toggle('background-light');
    calcTitle.classList.toggle('calc-title-light');
    screen.classList.toggle('screen-container-light');
    screen.children[0].classList.toggle('screen-text-light')
    btnContainer.classList.toggle('buttons-container-light');
    screenTextAfter.classList.toggle('screen-text-after-light');
    document.querySelector('.fa-palette').classList.toggle('calc-title-light');
    document.querySelector('.fa-lightbulb').classList.toggle('fa-display-none');
    document.querySelector('.fa-moon').classList.toggle('fa-display-none');
    for (let btn of btns) {
        btn.classList.contains('unique-btn-dark') ?
            btn.classList.toggle('unique-btn-light') :
            btn.classList.contains('equals-light') ?
            btn.classList.toggle('equals-dark') :
            btn.classList.toggle('button-light');
    }
}