// Defina sua lista de tradução para cada idioma
const traducoes = {
    'pt-BR': {
        'TitleAbout': 'SOBRE',
        'TitleTutorial': 'TUTORIAL',
        'TitleDownload': 'BAIXAR',
        'TitleHome': 'INÍCIO',
        'TitleDonate': 'APOIAR',
        'TitleProjects': 'PROJETOS',
        'TitleNews': 'NOVIDADES',
        'ButtonInfo': 'INFORMAÇÕES',
        'ButtonCredits': 'CRÉDITOS',
        'ButtonVideos': 'VÍDEOS',
        'ButtonDownload': 'BAIXAR',
        'Soon': 'Em Breve',
        'InfoSize': 'Tamanho:',
        'InfoVersion': 'Versão:',
        'SHARE': 'COMPARTILHE:',     
        'ButtonDownloadRetroDub': 'BAIXAR O RETRODUB',
        'AboutTitle1' : 'O que é o RetroDub?',
        'AboutTitle2' : 'Quais as versões do Windows suportadas?',
        'AboutTitle3' : 'Funciona em quais emuladores?',
        'AboutTitle4' : 'O RetroDub é um mod?',
        'AboutTitle5' : 'O RetroDub funciona em outros sistemas operacionais além do Windows?',
        'AboutAnswer1': 'O RetroDub é uma aplicação que permite adicionar vozes (através de Voice Packs) em jogos (na maioria das vezes antigos) que originalmente não possuem vozes. Ele é compatível com várias plataformas, incluindo SNES, Mega Drive, Nintendo 64, PC, etc. O projeto não possui fins lucrativos, o objetivo é proporcionar uma nova experiência ao rejogar jogos clássicos.',
        'AboutAnswer2': 'O RetroDub funciona em Windows 7, 8.1, 10 e 11, tanto em x86 quanto x64.',
        'AboutAnswer3': 'O RetroDub é compatível com todos os emuladores no sistema operacional Windows.',
        'AboutAnswer4': 'O RetroDub não é exatamente um mod ou patch, pois não modifica nenhum arquivo do jogo. Toda a dublagem é executada por um programa externo, que é o RetroDub. Sempre que um VoicePack for criado para algum jogo, será necessário apenas instalar o VoicePack no RetroDub e jogar no emulador.',
        'AboutAnswer5': 'No momento o RetroDub funciona apenas em Windows. No entanto, existem planos para lançá-lo também em Android e sistemas baseados em Linux.',
        'TutorialTitle' : 'TUTORIAL DE UTILIZAÇÃO:',
        'TutorialTitle1' : 'Instalação do pacote de dublagem',
        'TutorialTitle2' : 'Inicialização e Configuração',
        'TutorialTitle3' : 'Inicialização do Emulador manualmente',
        'TutorialTitle4' : 'Inicialização do Emulador automaticamente',
        'TutorialTitle5' : 'Instalação do pacote de dublagem',
        'TutorialAnswer1-1' : 'Clique em "Arquivo" e depois em "Importar Arquivo". Selecione o arquivo da dublagem com a extensão .rd. Após a confirmação, a instalação será concluída em alguns segundos e uma mensagem de confirmação será exibida.',
        'TutorialAnswer1-2' : 'Após a instalação, o arquivo de dublagem estará na pasta VoicePacks do RetroDub.',
        'TutorialAnswer2' : 'Nessa opção configure o emulador no Menu Principal clicando com o botão direito no nome do jogo e escolhendo "Configurações". Salve as configurações e clique no botão de Play. Caso não deseje realizar alguma configuração, apenas dê um duplo clique no nome do jogo.',
        'TutorialAnswer3' : 'Configure os diretórios de até 10 emuladores em "Opções" e "Diretórios". Volte nas configurações do pacote, selecione ou digite o processo do emulador, certifique-se de que a opção "Abrir emulador pelo RetroDub" esteja habilitada e clique no botão de Play.',
        'TutorialAnswer4' : 'Clique em "Arquivo" e depois em "Importar Arquivo". Selecione o arquivo da dublagem com a extensão .rd. Após a confirmação, a instalação será concluída em alguns segundos e uma mensagem de confirmação será exibida. Após a instalação, o arquivo de dublagem estará na pasta VoicePacks do RetroDub.',
        'ShortcutsTitle' : 'ATALHOS:',
        'Shortcuts1' : 'Atalho de Inicialização: ',
        'Shortcuts2' : 'Atalho de Parar:',
        'ShortcutsAnswer1' : 'Ctrl + F9',
        'ShortcutsAnswer2' : 'Ctrl + F7',
        'ShortcutsAnswer3' : 'Caso a dublagem esteja em execução e o jogador altere de jogo ou feche o emulador, o RetroDub irá detectar automaticamente e encerrar a dublagem.',
        'ShortcutsAnswer4' : 'Você pode alterar as teclas de atalho nas configurações.',
        'PossibleErrosTitle' : 'POSSÍVEIS ERROS:',
        'PossibleErros1' : 'Estou executando a dublagem porém não está validando o jogo, ficando sempre a mensagem: "Validando jogo..."',
        'PossibleErros2' : 'Ao tentar executar o RetroDub ocorre o erro "A aplicação não pôde ser iniciada porque o .NET Framework 4.8 não foi encontrado no seu computador. "',
        'PossibleErros3' : 'O emulador que irei jogar não está na lista de emuladores.',
        'PossibleErros4' : 'A dublagem foi validada porém não está reproduzindo nenhuma voz.',
        'PossibleErros5' : 'Estou tentando abrir o RetroDub, porém é retornada a mensagem: "Já existe uma instância do RetroDub em execução".',
        'PossibleErrosAnswer1' : 'Em alguns pacotes de dublagens funcionarão em todas as versões de um jogo, já outros serão versões especificas, valide primeiramente se está executando uma versão suportada. Caso tenha confirmado que é uma versão suportada e mesmo assim não está validando o jogo, deixe o jogo executar por alguns segundos, em alguns jogos pode ser necessário chegar ao menos até a tela de título para o RetroDub realizar a validação.',
        'PossibleErrosAnswer2' : 'Nas versões mais antigas do Windows que antecedem o Windows 10, é necessário instalar o .NET Framework 4.8. Se estiver utilizando o Windows 7, precisará instalar o pacote de atualização do Windows chamado kb4474419 disponível nesse ',
        'PossibleErrosAnswer3' : 'Siga o tutorial de utilização na parte Inicialização do Emulador automaticamente.',
        'PossibleErrosAnswer4' : 'Isso tem alguns motivos, primeiramente valide se o pacote de dublagem está realmente dentro da pasta "VoicePacks" do RetroDub. Estando tudo certo é possível que o motivo seja a utilização de SaveStates. Faça o seguinte, feche o emulador e enquanto o RetroDub está realizando a validação reabra o emulador e inicie o jogo, provavelmente o jogo será validado corretamente e só depois que a validação for feita, carregue algum SaveState, esse problema pode acontecer em alguns emuladores como por exemplo o RetroArch. Estamos estudando as possibilidades de ajustar esse problema.',
        'PossibleErrosAnswer5' : 'Por questões de desempenho não é possível abrir mais de um RetroDub ao mesmo tempo, caso não tenha nenhum RetroDub aberto e mesmo assim é retornada essa mensagem, pode ser que aconteceu algum erro na última vez que o RetroDub foi encerrado. Vá no gerenciador de tarefas e na aba "Processos" localize o processo do RetroDub, encerre-o e tente abrir o RetroDub novamente.',
        'Donate1': 'O RetroDub é um projeto sem fins lucrativos e totalmente gratuito. Porém temos o custo para manter o domínio (E no futuro também teremos o custo de hospedagem). Então caso deseje doar para ajudar o projeto, pode doar para a chave pix ou o link do PayPal localizados abaixo.',
        'Donate2': 'Fazemos questão de não utilizar encurtadores de links repletos de propaganda que incomodam muito, todos os links para download serão diretos.',
        'Donate3': 'Chave pix: retrodubpix@gmail.com',
        'SubscribeButton': 'Inscreva-se',
        'TwitterMessage': 'Siga-nos no Twitter:',
        'DownloadGoofTroopDublado': 'Baixar Goof Troop Dublado',
        'BugReport': 'Encontrou algum bug? Envie um e-mail para contact.retrodub@gmail.com se possível com evidências para que o bug seja resolvido em futuras versões.'

    },
    'en': {
        'TitleAbout': 'ABOUT',
        'TitleTutorial': 'TUTORIAL',
        'TitleDownload': 'DOWNLOAD',
        'TitleHome': 'HOME',
        'TitleDonate': 'DONATE',
        'TitleProjects': 'PROJECTS',
        'TitleNews': 'NEWS',
        'ButtonInfo': 'INFORMATIONS',
        'ButtonCredits': 'CREDITS',
        'ButtonVideos': 'VIDEOS',
        'ButtonDownload': 'DOWNLOAD',
        'Soon': 'COMING SOON',
        'InfoSize': 'SIZE:',
        'InfoVersion': 'VERSION:',
        'SHARE': 'SHARE:',     
        'ButtonDownloadRetroDub': 'DOWNLOAD RETRODUB',
        'AboutTitle1' : 'What is RetroDub?',
        'AboutTitle2' : 'Which Windows versions are supported?',
        'AboutTitle3' : 'Does it work on any emulators?',
        'AboutTitle4' : 'Is RetroDub a mod?',
        'AboutTitle5' : 'Does RetroDub work on operating systems other than Windows?',
        'AboutAnswer1': 'RetroDub is an application that allows you to add voices (through Voice Packs) to games, mostly old ones, that originally do not have voices. It is compatible with multiple platforms, including SNES, Mega Drive, Nintendo 64, PC, etc. The project is non-profit, aiming to provide a new experience when replaying classic games.',
        'AboutAnswer2': 'RetroDub works on Windows7, 8.1, 10 and 11, supporting both x86 and x64.',
        'AboutAnswer3': 'RetroDub is compatible with all emulators on the Windows operating system.',
        'AboutAnswer4': 'RetroDub is not a mod or patch, as it does not modify any game files. All dubbing is performed by an external program, which is RetroDub. Whenever a Voice Pack is created for a game, it will only be necessary to install the Voice Pack on RetroDub and play on the emulator.',
        'AboutAnswer5': 'Currently, RetroDub only works on Windows. However, there are plans to release it on Android and Linux-based systems as well.',
        'TutorialTitle' : 'GUIDE:',
        'TutorialTitle1' : 'Voice Pack Installation',
        'TutorialTitle2' : 'Launch and Configuration',
        'TutorialTitle3' : 'Manual Emulator Launch',
        'TutorialTitle4' : 'Automatic Emulator Launch',
        'TutorialTitle5' : 'Voice Pack Installation',
        'TutorialAnswer1-1' : 'Click on "File" and then "Import File". Select the voice pack file with the .rd extension. After confirmation, the installation will be completed in a few seconds and a confirmation message will be displayed.',
        'TutorialAnswer1-2' : 'After installation, the voice pack file will be in the VoicePacks folder of RetroDub.',
        'TutorialAnswer2' : 'In this option, configure the emulator in the "Main Menu" by right-clicking on the game name and choosing "Settings". Save the settings and click the "Play" button. If you don\'t want to make any configuration, simply double-click on the game name.',
        'TutorialAnswer3' : 'Set up directories for up to 10 emulators in "Options" and "Directories". Go back to the package settings, select or enter the emulator process, ensure that the "Open Emulator by RetroDub" option is enabled and click the "Play" button.',
        'TutorialAnswer4' : 'Click on "File" and then "Import File". Select the voice pack file with the .rd extension. After confirmation, the installation will be completed in a few seconds and a confirmation message will be displayed. After installation, the voice pack file will be in the VoicePacks folder of RetroDub.',
        'ShortcutsTitle' : 'SHORTCUTS:',
        'Shortcuts1' : 'Play Shortcut: ',
        'Shortcuts2' : 'Stop Shortcut:',
        'ShortcutsAnswer1' : 'Ctrl + F9',
        'ShortcutsAnswer2' : 'Ctrl + F7',
        'ShortcutsAnswer3' : 'If the voice pack is running and the player change the game or closes the emulator, RetroDub will detect and automatically stop the dubbing.',
        'ShortcutsAnswer4' : 'You can change shortcut keys in the settings.',
        'PossibleErrosTitle' : 'POSSIBLE ERRORS:',
        'PossibleErros1' : 'I\'m running the voice pack, but it\'s not validating the game, always showing the message: "Validating game...:',
        'PossibleErros2' : 'When trying to run RetroDub, I get the error "The application could not be started because .NET Framework 4.8 was not found on your computer".',
        'PossibleErros3' : 'The emulator I want to play is not in the list of emulators.',
        'PossibleErros4' : 'The voice pack was validated, but it\'s not playing any voices.',
        'PossibleErros5' : 'I\'m trying to open RetroDub, but I get the message "An instance of RetroDub is already running".',
        'PossibleErrosAnswer1' : 'Some voice pack versions work with all game versions, while others are specific versions. First, confirm that you are running a supported version. If you have confirmed it\'s a supported version and the game is not validating, let the game run for a few seconds. In some games, it may be necessary to at least reach the title screen for RetroDub to validate.',
        'PossibleErrosAnswer2' : 'In older Windows versions predating Windows 10, you need to install .NET Framework 4.8. If you\'re using Windows 7, you\'ll need to install the Windows update package called kb4474419, available at this',
        'PossibleErrosAnswer3' : 'Follow the usage guide in the "Automatic Emulator Startup" section.',
        'PossibleErrosAnswer4' : 'There could be several reasons. First, check if the voice pack is in the "VoicePacks" folder of RetroDub. If everything is correct, the issue might be related to the use of "Save States". Close the emulator while RetroDub is validating, reopen the emulator and start the game. Probably, the game will be validated correctly. Only after validation, load any "Save State". This problem may occur in some emulators like RetroArch. We are exploring solutions for this issue.',
        'PossibleErrosAnswer5' : 'For performance reasons, you cannot open more than one RetroDub at a time. If you have no RetroDub open and still get this message, there might have been an error the last time RetroDub was closed. Go to the task manager, locate the RetroDub process in the "Processes" tab, end it and try opening RetroDub again.',
        'Donate1': 'RetroDub is a non-profit project. However, we have the cost of maintaining the domain, and in the future, the  cost of hosting. So, if you wish to donate to help the project, you can donate to the PayPal account located below.',
        'Donate2': 'We make a point of not using link shorteners full of annoying advertisements. All download links will be direct.',
        'Donate3': '-----------------------------------------',
        'SubscribeButton': 'Subscribe',
        'TwitterMessage': 'Follow us on Twitter:',
        'DownloadGoofTroopDublado': 'Download Goof Troop Dub',
        'BugReport': 'Found a bug? Send an e-mail to contact.retrodub@gmail.com with evidence, so the bug can be solved in future versions.'
    }

};


// Obtém o idioma do navegador
var idiomaNavegador = obterIdiomaNavegador();


// Verifica e define o idioma com base no navegador
if (idiomaNavegador.startsWith("pt")) {
    ConsoleLog(`Idioma do navegador: ${idiomaNavegador }:`);
} else if (idiomaNavegador.startsWith("en")) {
    ConsoleLog(`Idioma do navegador: ${idiomaNavegador }:`);
} else {
    ConsoleLog(`Idioma do navegador: ${idiomaNavegador }:`);
    ConsoleLog('Navegador não está nos idiomas da lista');
    idiomaNavegador = 'en';
}

// Obtenha o idioma armazenado no Local Storage, caso não tenha irá pegar o idioma do navegador.
const idiomaAtual = localStorage.getItem('idioma') || idiomaNavegador;

ConsoleLog(`Idioma utilizado:  ${idiomaAtual }:`);

// Chame a função para traduzir o conteúdo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    traduzirConteudo(idiomaAtual);
    verificarIdiomaECarregarPayPal();
});

// Função para obter o idioma do navegador
function obterIdiomaNavegador() {
    return navigator.language || navigator.userLanguage;
}

// Função para traduzir uma string com base no idioma atual
function traduzirString(str, idioma) {
    return traducoes[idioma] && traducoes[idioma][str] ? traducoes[idioma][str] : str;
}

// Função para percorrer elementos HTML e traduzir o conteúdo com base no idioma atual
function traduzirConteudo(idioma) {
    const elementosTraduziveis = document.querySelectorAll('[data-translate]');

    elementosTraduziveis.forEach(elemento => {
        const chave = elemento.dataset.translate;
        elemento.textContent = traduzirString(chave, idioma);
    });
}

// Função para definir o idioma
function definirIdioma(idioma) {
    localStorage.setItem('idioma', idioma);
}







// Exemplo: Alterar idioma para inglês
function alterarIdiomaParaIngles() {
    definirIdioma('en');
    traduzirConteudo('en');
    verificarIdiomaECarregarPayPal();
}

// Exemplo: Alterar idioma para português
function alterarIdiomaParaPortugues() {
    definirIdioma('pt-BR');
    traduzirConteudo('pt-BR');
    verificarIdiomaECarregarPayPal();
}


// Função para verificar o idioma e carregar/remover o elemento do PayPal conforme necessário
function verificarIdiomaECarregarPayPal() {
    const idiomaAtual = localStorage.getItem('idioma') || obterIdiomaNavegador();

    ConsoleLog(`Idioma utilizado: ${idiomaAtual}`);

    // Declare a variável fora do bloco condicional para torná-la acessível em ambos os blocos
    var elementoPayPal = document.getElementById('paypalButton'); // Substitua pelo ID do seu elemento PayPal

    // Verifique se o idioma é inglês (código 'en')
    if (idiomaAtual.startsWith("en")) {
        // Se for inglês e o elemento não existe, crie e adicione o elemento do PayPal
        if (!elementoPayPal) {
            elementoPayPal = document.createElement('a');
            elementoPayPal.id = 'paypalButton'; // Atribua um ID ao elemento
            elementoPayPal.href = 'https://www.paypal.com/donate/?hosted_button_id=WWGSRHBQSMSJS';
            elementoPayPal.target = '_blank';
            elementoPayPal.innerHTML = '<img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="Donate with PayPal">';

            // Encontre o elemento existente onde você deseja adicionar o botão do PayPal
            const localEspecifico = document.getElementById('PayPalElement'); // Substitua 'seuIdDoElemento' pelo ID do elemento desejado

            // Adicione o elemento do PayPal ao local específico na página
            if (localEspecifico) {
                localEspecifico.appendChild(elementoPayPal);
            } else {
                ConsoleLog('O elemento PayPal não está presente na página.');
            }
        }
    } else {
        // Se o idioma não for inglês e o elemento existir, remova o elemento do PayPal
        if (elementoPayPal) {
            elementoPayPal.remove();
        }
    }
}

function ConsoleLog(mensagem) {
    // Adicione suas regras ou lógica aqui
    if (window.location.href.includes('8080')) {
      console.log(mensagem);
    } 
  }
