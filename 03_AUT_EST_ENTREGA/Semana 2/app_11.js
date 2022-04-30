const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <head> <title>Curriculo incompleto de Daniel Quintao Davila</title></head> \
              <body> \
                <div id="main"> \
                       <h1>Daniel Quintao Davila - Curriculo (incompleto)</h1> \
                       <H2>Nivel de educacao: ensino medio completo, atualmente cursando Engenharia de Computacao no Inteli;</H2> </div> \
                       <H2>Experiencia de trabalho: padronizacao de planilhas Excel na Davila Arquitetura;</H2> </div> \
                       <H2>Outras informacoes uteis: fluente em ingles e portugues e sabe espanhol basico; possui capacidade significativamente acima da media de redigir textos;</H2> </div> \
                       <H2>Outras informacoes: possui resistencia fisica e mental de um superatleta; possui entendimento cultural elevado; possui facilidade de interagir socialmente com outros individuos e com grupos de individuos <blink>(no sentido Deleuziano do termo)</blink>.</H2> </div> \
              </body> \
           </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});