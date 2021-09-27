import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import './controllers';
import cors from 'cors';
import container from './config/inversify.config'

export class App {
  constructor(private port: number){
    this.createServer()
  }
  createServer(){
    let server: InversifyExpressServer = new InversifyExpressServer(container)
    const app = server.build()
    app.use(cors())
    app.listen(this.port)
  }
}