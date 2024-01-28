// Lista de checksums permitidos
var checksumsPermitidos = {
  "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e": true,
  "378071e554367848d358e86dcb9ef0846145fc87b82cde35d595b49bca1c1f1f": true,
  "3d4f2bf07dc1be38b20cd6e46949a107": true,
  "8f97850eae897ee5371bb9527786aee771178ef9d2cce6c0e2ef62ab0e1463b3": true,
  "3b61b354c46ebc0244b49106a0a70fa399ff87592e49a14d4d7309fca21577a0": true,
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855": true,
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
  var diretorioDesejado = "/files/retrodub/";
  var caminhoDoArquivo = diretorioDesejado + nomeDoArquivo;

  fetch(caminhoDoArquivo)
      .then(response => response.blob())
      .then(blob => {
          var checksum = calcularChecksumDoArquivo(new Uint8Array(blob));
          console.log(`Checksum do arquivo ${nomeDoArquivo}: ${checksum}`);

          if (verificarChecksum(checksum)) {
              // O checksum está na lista permitida, preparar o download
              var link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.target = '_blank';
              link.download = nomeDoArquivo;

              // Adiciona o link ao documento
              document.body.appendChild(link);

              // Simula um clique no link para iniciar o download
              link.click();

              // Remove o link do documento
              document.body.removeChild(link);
              window.URL.revokeObjectURL(link.href);
          } else {
              // O checksum não está na lista permitida, recusar o download
              console.error("O checksum do arquivo não é válido. O download foi recusado.");
          }
      })
      .catch(error => console.error("Erro ao fazer o download:", error));
}