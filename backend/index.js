import mongoose from 'mongoose'
import express from 'express'
import { ServerApiVersion } from 'mongodb'
import siswaRoute from './routes/siswaRoutes.js'
import adminRoute from './routes/adminRoutes.js'
import cors from "cors"

const url = "mongodb://martinilham15:martinus12345@ac-p1s5fuc-shard-00-00.aw1tteh.mongodb.net:27017,ac-p1s5fuc-shard-00-01.aw1tteh.mongodb.net:27017,ac-p1s5fuc-shard-00-02.aw1tteh.mongodb.net:27017/absensi?ssl=true&replicaSet=atlas-s1025i-shard-0&authSource=admin&retryWrites=true&w=majority";

const port = 5000

const app = express()
mongoose.connect(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

const db = mongoose.connection;
db.on('error', (error)=>(console.log(error)));
db.once('open',()=>(console.log("databases connected")))

app.use(cors());
app.use(express.json());
// app.use(siswaRoute);
app.use(adminRoute);

app.listen(port,()=>console.log(`web berjalan di port ${port}`))