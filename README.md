# Exemplo de uma ELK Stack 

Neste repositório encontram-se os arquivos necessários para uma ELK Stack básica. Neste exemplo utilizamos contêiners Docker, portanto instale antes de tudo o Docker e o Docker Compose.

## Arquitetura
A ELK Stack consiste na utilização de 3 ferramentas: Elasticsearch, Logstash e Kibana. O Logstash tem o papel de consumir os logs de alguma fonte e enviá-los ao Elasticsearch. O Kibana é a ferramenta que permite a visualização desses dados através de gráficos.

No repositório temos uma aplicação Web escrita em Node.js que tem apenas o papel de produzir logs aleatórios a partir de uma chamada GET e salvá-los em um arquivo texto. O Logstash consegue ler esse arquivo texto, realizar o parsing dos dados e enviá-los ao Elasticsearch para que consigam ser lidos pelo Kibana.

## Execução
Com o Docker e o Docker Compose instalados, basta apenas digitar:

```
$ docker-compose up
Starting kibana ... 
Starting logstash ... 
Starting kibana
Starting elasticsearch ... 
Starting node-app ... 
Starting logstash
Starting node-app
Starting node-app ... done
```

Com todos os serviços no ar, realize algumas chamadas GET para localhost:3000 para que dados arbitrários sejam gerados:

```
$ curl -i localhost:3000
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Sun, 31 Dec 2017 15:44:27 GMT
Connection: keep-alive
```

Agora basta visualizar os dados no Kibana no endereço http://localhost:5601