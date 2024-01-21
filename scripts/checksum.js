// Lista de checksums permitidos
var checksumsPermitidos = {
    "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e": true,
    "3d4f2bf07dc1be38b20cd6e46949a107": true,
    // Adicione mais checksums conforme necessário
  };
  
  // Função para calcular o SHA-256 de um arquivo
  function calcularChecksumDoArquivo(conteudoDoArquivo) {
    return CryptoJS.SHA256(conteudoDoArquivo).toString();
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
  
        // Adicione a linha abaixo para imprimir o checksum no console
        console.log(`Checksum do arquivo ${nomeDoArquivo}: ${checksum}`);
  
        if (verificarChecksum(checksum)) {
          // O checksum está na lista permitida, permitir o download
          window.location.href = caminhoDoArquivo;
        } else {
          // O checksum não está na lista permitida, recusar o download
          // alert("O checksum do arquivo não é válido. O download foi recusado.");
        }
      })
      .catch(error => console.error("Erro ao fazer o download:", error));
  }
  