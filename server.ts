import { Application } from "./deps.ts";
import router from "./routes/index.ts";
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log(`Server running on port 8000`);
