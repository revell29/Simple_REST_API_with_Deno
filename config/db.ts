// Initialize the plugin
await init();
import { init, MongoClient } from "../deps.ts";

class DB {
  public client: MongoClient;
  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }
  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }
  get getDatabase() {
    return this.client.database(this.dbName);
  }
}

const dbName = Deno.env.get("DB_NAME") || "deno_demo";
const dbHostUrl = Deno.env.get("DB_HOST_URL") || "mongodb://localhost:27017";
const db = new DB(dbName, dbHostUrl);
db.connect();

export default db;
