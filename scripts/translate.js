// Defina sua lista de tradução para cada idioma
const traducoes = {
    'pt-br': {
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
        'TutorialAnswer2' : 'Nessa opção configure o emulador no Menu Principal clicando com o botão direito no nome do jogo e escolhendo "Configurações". Salve as configurações e clique no botão de Play.         Caso não deseje realizar alguma configuração, apenas dê um duplo clique no nome do jogo.',
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
        'Donate1': 'O RetroDub é um projeto sem fins lucrativos e totalmente gratuito. Porém temos o custo para manter o domínio (E no futuro também teremos o custo de hospedagem). Então caso deseje doar para ajudar o projeto, pode doar para a chave pix localizada abaixo.',
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
        'ButtonInfo': 'INFO',
        'ButtonCredits': 'CREDITS',
        'ButtonVideos': 'VIDEOS',
        'ButtonDownload': 'DOWNLOAD',
        'Soon': 'Soon',
        'InfoSize': 'Size:',
        'InfoVersion': 'Version:',
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
        'TutorialAnswer2' : 'Nessa opção configure o emulador no Menu Principal clicando com o botão direito no nome do jogo e escolhendo "Configurações". Salve as configurações e clique no botão de Play.         Caso não deseje realizar alguma configuração, apenas dê um duplo clique no nome do jogo.',
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
        'Donate1': 'O RetroDub é um projeto sem fins lucrativos e totalmente gratuito. Porém temos o custo para manter o domínio (E no futuro também teremos o custo de hospedagem). Então caso deseje doar para ajudar o projeto, pode doar para a chave pix localizada abaixo.',
        'Donate2': 'Fazemos questão de não utilizar encurtadores de links repletos de propaganda que incomodam muito, todos os links para download serão diretos.',
        'Donate3': 'Chave pix: retrodubpix@gmail.com',
        'SubscribeButton': 'Inscreva-se',
        'TwitterMessage': 'Siga-nos no Twitter:',
        'DownloadGoofTroopDublado': 'Baixar Goof Troop Dublado',
        'BugReport': 'Encontrou algum bug? Envie um e-mail para contact.retrodub@gmail.com se possível com evidências para que o bug seja resolvido em futuras versões.'
    }

};


// Obtém o idioma do navegador
const idiomaNavegador = obterIdiomaNavegador();

// Verifica e define o idioma com base no navegador
if (idiomaNavegador.startsWith("pt")) {
    console.log('Idioma do navegador PT');
} else if (idiomaNavegador.startsWith("en")) {
    console.log('Idioma do navegador EN');
} else {
    console.log('Idioma do navegador não obtido, definido para EN');
}

// Obtenha o idioma armazenado no Local Storage, caso não tenha irá pegar o idioma do navegador.
const idiomaAtual = localStorage.getItem('idioma') || idiomaNavegador;

console.log(`Idioma utilizado:  ${idiomaAtual }:`);

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



// Chame a função para traduzir o conteúdo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    traduzirConteudo(idiomaAtual);
});



// Exemplo: Alterar idioma para inglês
function alterarIdiomaParaIngles() {
    definirIdioma('en');
    traduzirConteudo('en');
}

// Exemplo: Alterar idioma para português
function alterarIdiomaParaPortugues() {
    definirIdioma('pt-br');
    traduzirConteudo('pt-br');
}
