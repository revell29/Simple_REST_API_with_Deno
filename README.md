# Simple REST API made with Deno & MongoDB

i'am trying to make a simple REST API with Deno, Oak module and MongoDB to learn about Deno. I hope this sample helping you to make a simple REST API with Deno.

## Third Party
- [oak](https://deno.land/x/oak) A middleware framework for Deno's http server, including a router middleware.
- [dejs](https://deno.land/x/dejs) ejs template engine for deno.
- [mongo](https://deno.land/x/mongo) Mongo Driver for Deno
- [denon](https://deno.land/x/denon) Denon aims to be the deno replacement for nodemon providing a feature packed and easy to use experience.

## run the app

if you are using denon, run command with `denon server.ts` this command will auto restarting & recompile deno 
application, but it you are not using denon, run with basic deno command `deno run -A --unstable server.ts`

## Sample Route of REST API

| Route                    | Description          |
| ------------------------ | -------------------- |
| GET /user                | return all the users |
| GET /user/:id            | return a user        |
| POST /user               | add a user           |
| PUT /user/:id            | update a user        |
| DELETE /user/:id         | delete a user        |
