 // Função para obter a URL atual da página
        function getCurrentURL() {
            return window.location.href;
        }

        // Atualiza os links com a URL dinâmica
        document.getElementById('facebookLink').href = "//www.facebook.com/sharer/sharer.php?u=" + getCurrentURL();
        document.getElementById('twitterLink').href = "//twitter.com/intent/tweet?text=A+New+Page&url=" + getCurrentURL();

 // Obtém a primeira imagem do conteúdo da página
 var primeiraImagem = document.querySelector('img'); // Isso seleciona a primeira imagem, ajuste conforme necessário

     // Obtém o título da página
     var tituloPagina = document.title;

 if (primeiraImagem) {
    document.getElementById('pinterestLink').href = "https://pinterest.com/pin/create/button/?url=" + getCurrentURL() + "&media=" + encodeURIComponent(primeiraImagem.src) + "&description=" + encodeURIComponent(tituloPagina);
} else {
    // Lida com o caso em que não há imagens na página
    document.getElementById('pinterestLink').style.display = 'none'; // Esconde o link do Pinterest se não houver imagem
}
