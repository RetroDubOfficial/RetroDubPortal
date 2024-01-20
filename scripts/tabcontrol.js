function openTab(tabName) {
    // Oculta todos os conteúdos das abas
    var tabContents = document.querySelectorAll('.tab-content, .tab-content2');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove a classe 'selected' de todas as abas
    var tabs = document.querySelectorAll('.tabs .tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('selected');
    }

    // Exibe o conteúdo da aba clicada
    document.getElementById(tabName).style.display = 'block';

    // Adiciona a classe 'selected' à aba clicada
    document.querySelector('.tabs .tab[onclick="openTab(\'' + tabName + '\')"]').classList.add('selected');
}

document.addEventListener('DOMContentLoaded', function () {
    // Carregar a primeira aba assim que a página carregar
    openTab('tab1');
});