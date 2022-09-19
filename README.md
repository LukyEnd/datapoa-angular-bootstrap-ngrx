# Título do projeto

Consulta da API de Transportes (Ônibus e Lotação) de Porto Alegre. Com o resultado desta consulta, é criado 2 tabelas. Uma das tabelas terá os Ônibus e outra as Lotações. Cada transporte terá a opção de ser gerada sua rota em um Mapa através de coordenadas de latitude e longitude dadas pela própria API.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Um Editor ou IDE, como: 
  * [VSCode](https://code.visualstudio.com/download);
  * [intellij](https://www.jetbrains.com/pt-br/idea/download/#section=windows);
  * [Webstorm](https://www.jetbrains.com/webstorm/download/?source=google&medium=cpc&campaign=9641686251&term=webstorm&gclid=CjwKCAjwpqCZBhAbEiwAa7pXeS7DDLCEz2MetJy2zD2jhcLXXQ1lbeq-61EVRwdyPTmbH9UXICr7hBoCBlgQAvD_BwE#section=windows);

Instalar [NodeJS_LTS]: https://nodejs.org/en/download/

Instalar [Angular_CLI]: npm install -g @angular/cli

### 🔧 Instalação do Projeto

Nesta etapa, será explicado passo a passo o que deve ser feito para ter o ambiente de desenvolvimento em execução.
 
* 1- Clique no botão Verde que tá escrito "CODE" e copie o código HTTPS que aparecer;
* 2- Em sua máquina Crie uma pasta, de preferência no começo do disco. Exemplo: C:/;
* 3- Dentro da nova pasta criada, clique na aba locais anteriores e digite CMD;
* 4- Na aba que abriu digite "git clone (e adicione a url HTTPS que foi copiada, sem os parênteses)"
    Exemplo: "git clone https://github...";
* 5- Abra a nova pasta criada com o editor que foi instalado;
* 6- Abra o terminal do editor e digite "npm i" ou "npm install";
* 7- Após a instalação digite "npm run start" ou "ng server";
* 8- Abra o navegador, de preferência em aba anônima, e digite na url "http://localhost:4200/" ou observe qual porta do localhost foi disponibilizada no Terminal do Editor;
* 9- Após estes passos, o ambiente deverá estar funcionando perfeitamente.

Como já falado, este sistema faz consultas de uma API disponibilizada gratuitamente na internet a qual possui dados de todos os ônibus e lotações de Porto Alegre, podendo assim, consultar várias informações de cada transporte, como o ID, Código, Nome da Linha e qual rota ele realiza. Caso o usuário deseje ver a rota de um transporte em específico, é só clicar no botão "Ver rotas" localizado na Aba da tabela chamada "itinerário", assim será gerado um mapa automaticamente, utilizando MAPBOX (uma plataforma de geolocalização). Com isto, mostrará o mapa com a linha do percurso ao ser traçado. Possue a opção de clicar na coordenada desejada e ser redirecionado para o google maps a qual se pode ver com mais detalhes informações das ruas, utilizar a câmera por satélite ou ver fotos do lugar.

## ⚙️ Executando os testes

* Para testes unitários do Angular serão utilizados o Karma e o Jasmine. 
  * Execução: "npm run test"

* Também será utilizado o Cypress para testes visuais e responsividade. 
  * Execução: "npm run cypress:ope"

## 🛠️ Construído com

Ferramentas utilizadas para a criação deste projeto:

* [VsCode](https://code.visualstudio.com/download)- Editor de código de código aberto;
* [Angular_CLI](https://angular.io/cli)- O framework web usado;
* [Angular_Datatable](https://l-lin.github.io/angular-datatables/#/welcome)- Biblioteca Angular2+ para construir tabelas HTML;
* [NGRX](https://ngrx.io/)-  Grupo de bibliotecas angulares para extensões reativas e gerenciamento de estado;
* [MAPBOX](https://www.mapbox.com/)- Plataforma de geolocalização para a Criação do Mapa;
* [Cypress](https://www.cypress.io/)- Framework para automação de testes end-to-end;
* [Bootstrap](https://getbootstrap.com/)- Framework front-end que fornece estruturas de CSS para a criação de sites e aplicações;
* [Prettier](https://prettier.io/)- Formatador de código com suporte a diversos tipos de arquivos.

## 📌 Versão Utilizadas nesse Projeto

* [Angular_CLI] - 12.2.14;
* [Node] - 14.17.3;
* [npm] - 6.14.13;

Para verificar as versões manualmente, basta digitar no terminal do projeto "ng version" ou "ng -v" ou "ng --version";

## ✒️ Autor

Criado por [Lucas Sanches](https://github.com/LukyEnd) 😊
