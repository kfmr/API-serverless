Tecnologias:
Node.js
[Serverless](https://www.serverless.com/)


Dependencias do projeto:

npm install serverless
npm install serverless-offline --save-dev (https://www.npmjs.com/package/serverless-offline)


Deploy na linha de comando:
aws lambda update-function-code —function-name zip-file fileb://deploy.zip


SLS = Serverless
Realizar deploy na linha de comando
Desenvolver a partir de um template:
provedor: aws
linguagem: nodejs
path: nome do projeto. cria um diretorio com estrutra base

API gatheway da AWS fica responsável por execução, criação e monitoramento de apis rest
api gatheway repassa a chamada para as lambdas
