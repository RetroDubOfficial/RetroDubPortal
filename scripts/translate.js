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
        'Donate1': 'O RetroDub é um projeto sem fins lucrativos e totalmente gratuito. Porém temos o custo para manter o domínio (E no futuro também teremos o custo de hospedagem). Então caso deseje doar para ajudar o projeto, pode doar para a chave pix localizada abaixo.',
        'Donate2': 'Fazemos questão de não utilizar encurtadores de links repletos de propaganda que incomodam muito, todos os links para download serão diretos.',
        'Donate3': 'Chave pix: retrodubpix@gmail.com',
        'SubscribeButton': 'Inscreva-se',
        'TwitterMessage': 'Siga-nos no Twitter:',
        'DownloadGoofTroopDublado': 'Baixar Goof Troop Dublado',

        'Este é o conteúdo da sua página.': 'Este é o conteúdo da sua página.'
        
        // Adicione mais traduções para o português conforme necessário
    },
    'en': {
        'TitleSobre': 'ABOUT',
        'BAIXAR': 'DOWNLOAD',
        'INÍCIO': 'HOME',
        'APOIAR': 'SUPPORT',
        'TitleProjetos': 'PROJECTS',
        'NOVIDADES': 'NEWS',
        'INFORMAÇÕES': 'INFO',
        'VIDEOS': 'VÍDEOS',
        'CRÉDITOS': 'CREDITS',
        'Em Breve': 'Soon',
        'COMPARTILHE:': 'SHARE:',
        'MessageAbout': 'The project is non-profit, the goal is to provide a new experience when replaying classic games.',
        'Este é o conteúdo da sua página.': 'This is the content of your page.'
        // Adicione mais traduções para o inglês conforme necessário
    }
    // Adicione mais idiomas conforme necessário
};

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

// Obtenha o idioma armazenado no cookie (ou use um idioma padrão)
const idiomaAtual = document.cookie.replace(/(?:(?:^|.*;\s*)idioma\s*=\s*([^;]*).*$)|^.*$/, '$1') || 'pt-br';

// Chame a função para traduzir o conteúdo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    traduzirConteudo(idiomaAtual);
});

// Exemplo: Alterar idioma para inglês
function alterarIdiomaParaIngles() {
    document.cookie = 'idioma=en';
    traduzirConteudo('en');
}

// Exemplo: Alterar idioma para português
function alterarIdiomaParaPortugues() {
    document.cookie = 'idioma=pt-br';
    traduzirConteudo('pt-br');
}