// Função para verificar se a popup do Facebook já foi exibida
function verificarPopupFace() {
    const popupFace = localStorage.getItem('popupFace');

    // Se a popup do Facebook ainda não foi exibida, chame a função para carregar o SDK do Facebook
    if (!popupFace) {
        ConsoleLog('Popup do Facebook ainda não exibida, carregando pela primeira vez.');

        // Chame a função para carregar o SDK do Facebook
        carregarSDKFacebook();
    } else {
        ConsoleLog('Popup do Facebook já exibida');
            // Chama a função para carregar o conteúdo do YouTube apenas se a popup do Facebook não foi exibida
            verificarEExibirPopupYoutube();
    }
}

// Função para carregar o SDK do Facebook
function carregarSDKFacebook() {
    // Inicialize o SDK do Facebook
    window.fbAsyncInit = function () {
        ConsoleLog('SDK do Facebook inicializado');

        // Adicione este log para verificar se o elemento com ID 'popup' está presente
        ConsoleLog('Elemento da popup:', document.getElementById('popup'));

        // Chame a função para exibir a popup do Facebook
        exibirPopupFacebook();

        // Restante do seu código de inicialização do SDK, se houver
    };

    // Carregue o SDK do Facebook após a definição do window.fbAsyncInit
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}


function verificarEExibirPopupYoutube() {
    document.addEventListener('DOMContentLoaded', function () {

        const popupYoutube = localStorage.getItem('popupYoutube');
        if (!popupYoutube) {

            ConsoleLog('Exibindo popup do Youtube');

            // Exibe a sobreposição
            document.getElementById('overlay').style.display = 'block';

            // Exibe a popup
            var popupElement = document.getElementById('YoutubePopUp');
            popupElement.style.display = 'block';

            // Modifica a largura da popup
            popupElement.style.width = '250px';

            // Modifica a altura da popup
            popupElement.style.height = '100px';

            // Obtém a referência ao botão de inscrição
            var subscribeButton = document.getElementById('subscribeButton');

            // Adiciona um evento ao botão
            subscribeButton.addEventListener('click', function () {
                // Redireciona para a página de inscrição do canal em uma nova aba
                window.open('https://www.youtube.com/channel/UC4pgvW5sjPT4WB2ZT4xPoAQ?sub_confirmation=1', '_blank');
            });

            // Modifica a cor de fundo do botão para vermelho
            subscribeButton.style.backgroundColor = 'red';

            // Modifica a cor do texto do botão para branco
            subscribeButton.style.color = 'white';

            // Marca que a popup do Facebook foi exibida
            localStorage.setItem('popupYoutube', 'true');

        } else {

            ConsoleLog('PopUp Youtube já exibida');
            verificarEExibirPopupTwitter();

        }

    });

}

function verificarEExibirPopupTwitter() {


        const popupTwitter = localStorage.getItem('popupTwitter');
        if (!popupTwitter) {

            ConsoleLog('Exibindo popup do Twitter');

            // Exibe a sobreposição
            document.getElementById('overlay').style.display = 'block';

            // Exibe a popup
            var popupElement = document.getElementById('TwitterPopUp');
            popupElement.style.display = 'block';

            // Modifica a largura da popup
            popupElement.style.width = '250px';

            // Modifica a altura da popup
            popupElement.style.height = '100px';


            // Marca que a popup do Facebook foi exibida
            localStorage.setItem('popupTwitter', 'true');

        } else {

            ConsoleLog('PopUp Twitter já exibida');

        }

    };






// Função para exibir a popup do Facebook
function exibirPopupFacebook() {
    // console.log('Script iniciado');

    // Exibe a sobreposição
    document.getElementById('overlay').style.display = 'block';
    // Exibe a popup
    document.getElementById('popup').style.display = 'block';


    // Marca que a popup do Facebook foi exibida
    localStorage.setItem('popupFace', 'true');


}



// Função para fechar a popup
function fecharPopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('YoutubePopUp').style.display = 'none';
    document.getElementById('TwitterPopUp').style.display = 'none';
}

function ConsoleLog(mensagem) {
    // Adicione suas regras ou lógica aqui
    if (window.location.href.includes('8080')) {
      console.log(mensagem);
    } 
  }

// Chame a função para verificar se a popup do Facebook foi exibida
verificarPopupFace();
