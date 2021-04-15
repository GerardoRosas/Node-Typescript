import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuario';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        //Se definen las rutas
        this.routes();
        
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //LEctura body
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server runnig on port ' + this.port);
        })
    }
}

export default Server;