import express from "express";

const app = express();

//dissendo pro express que `e pra ele usar JSON.
app.use(express.json());
/* 
<!-- Express is used to create HTTP server applications. That means something that runs on a machine somewhere that responds to requests.

Axios is a HTTP client, which means it's used to make requests. It works both in Node and in the browser and exposes a Promise interface! --->

    Metodos http
    get, post, put, delete
     % get - buscar uma infromacao
     % post - criar uma informacao
     ----------- usa pelo Id do route pra vc atualizar ou deletar um usuario no caso do exemplo ---------
     % put - atualizar <editar> um informacao
     % delete- deletar uma informacao

    <~~ Params ~~>
    Query: enviados pela propria rota `?` - ou seja, BUSCA
        ex.: localhost:3333/users?search=thi

    Route: enviados para identificar algum recurso.
        ex.: localhost:3333/users/italianGuys
    
    Body: corpo da request, digamos que ele vem todos os dados para criar um usuario, ou consumir a API.
        ex.: localhost:3333/users
*/

app.post("/users/:id", (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);
  return response.json({ message: "Hello World" }); //Lembra quando vc consome uma APi o restorno do json `e sempre um Objeto.
});

app.listen(3333);

/* 


    Driver Nativo - A query deve ser escrita da msm maneira q ela for armazenada dentro do banco de dados. <mais proximo do banco de dados>
    Query Builder - construtor de query <intermidiario>
    ORM - class do JS que representa a tabela no banco de dados. <mais abstrato>


*/
