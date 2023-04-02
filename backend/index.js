const cluster = require("cluster");
const OS = require("os")
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());


const { authMiddleware } = require("./middlewares/auth.middleware");

const authRouter = require("./routes/auth.routes");
app.use('/auth', authRouter);
const classRouter = require("./routes/class.routes");
app.use('/class', authMiddleware, classRouter);
const fileRouter = require("./routes/file.routes");
app.use('/file', authMiddleware, fileRouter);
const formRouter = require("./routes/form.routes");
app.use('/form', authMiddleware, formRouter);
const userRouter = require("./routes/user.routes");
app.use('/user', authMiddleware, userRouter);





// if (cluster.isMaster) {
//   const numCpus = OS.cpus().length;
//   for (let i = 0; i < numCpus; i++) {
//     cluster.fork();
//   }
// } else {
//   app.listen(process.env.PORT, (err) => {
//     if (err) console.error(err)
//     console.log(`Worker ${process.pid} is running on port `, process.env.PORT);
//     require("./configs/db.config")
//   });
// }

app.listen(process.env.PORT, (err) => {
    if (err) console.error(err)
    console.log(`server is running on port `, process.env.PORT);
    require("./configs/db.config");
});