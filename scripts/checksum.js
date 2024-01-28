// Lista de checksums permitidos
var checksumsPermitidos = {
  "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e": true,
  "378071e554367848d358e86dcb9ef0846145fc87b82cde35d595b49bca1c1f1f": true,
  "3d4f2bf07dc1be38b20cd6e46949a107": true,
  "8f97850eae897ee5371bb9527786aee771178ef9d2cce6c0e2ef62ab0e1463b3": true,
  "3b61b354c46ebc0244b49106a0a70fa399ff87592e49a14d4d7309fca21577a0": true,
  // Adicione mais checksums conforme necessário
};

// Função para calcular o SHA-256 de um array de bytes
function calcularChecksumDoArquivo(conteudoDoArquivo) {
  return CryptoJS.SHA256(CryptoJS.lib.WordArray.create(conteudoDoArquivo)).toString();
}

// Função para verificar se o checksum está na lista permitida
function verificarChecksum(checksum) {
  return checksumsPermitidos[checksum];
}

function fazerDownload(nomeDoArquivo) {
  // Defina a URL do diretório desejado antes de usá-la
  var diretorioDesejado = "/files/retrodub/";

  // Construa o caminho completo do arquivo
  var caminhoDoArquivo = diretorioDesejado + nomeDoArquivo;

  fetch(caminhoDoArquivo)
      .then(response => response.arrayBuffer())
      .then(buffer => {
          var conteudoDoArquivo = new Uint8Array(buffer);
          var checksum = calcularChecksumDoArquivo(conteudoDoArquivo);
          console.log(`Checksum do arquivo ${nomeDoArquivo}: ${checksum}`);

          if (verificarChecksum(checksum)) {
              // O checksum está na lista permitida, permitir o download
              var link = document.createElement('a');
              link.href = caminhoDoArquivo;
              link.download = nomeDoArquivo;
              link.rel = 'noopener noreferrer';
              link.click();
          } else {
              // O checksum não está na lista permitida, recusar o download
              console.error("O checksum do arquivo não é válido. O download foi recusado.");
          }
      })
      .catch(error => console.error("Erro ao fazer o download:", error));
}
