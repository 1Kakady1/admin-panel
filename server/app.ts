import express from 'express';
const path = require('path')
const app: express.Application = express();
const {db} = require('./db/db')
const cookieParser = require('cookie-parser');
var useragent = require('express-useragent');

//https://www.enterprisedb.com/postgres-tutorials/how-quickly-build-api-using-nodejs-postgresql
const jsonUseOption:any = {
  extended: true
}

app.use(express.json(jsonUseOption));
app.use(express.static(path.join(__dirname,"build","public")));
app.use(cookieParser());
app.use(useragent.express());

async function dbConnect(callback:Function|undefined=undefined):Promise<void>  {
	

  try{
      db.authenticate()
        .then(() => {

          if(callback !== undefined){
            callback();
          }
          console.log('connect....')
          
        })
        .catch((err:string) => console.log('Error: ' + err))

  } catch(e){
    console.log('Server Error', e.message)
    process.exit(1)
  }

}

dbConnect(()=>{
  app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
  });
})

app.use('/api/admin/auth', require('./router/admin/auth/auth'));
app.use('/api/admin/users', require('./router/admin/users/users'));
app.use('/api/admin/products', require('./router/admin/products/products'));

