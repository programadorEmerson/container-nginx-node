# FullCycle - Módulo Docker - Desafio 2
## Container Nginx com Node.js

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. 
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js.
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

1. O retorno da aplicação node.js para o nginx deverá ser:
```
- Full Cycle Rocks!!
- Lista de nomes cadastrada no banco de dados.
```

2. Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

### Divirta-se!
---

## Para executar o container
```
docker-compose up -d 
```
