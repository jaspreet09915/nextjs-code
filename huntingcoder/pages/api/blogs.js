// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default async function handler(req, res) {
    console.log(req.query.count);
     let data = await fs.promises.readdir('blogdata');
     data = data.slice(0 , parseInt(req.query.count))
     let myfile;
     let allblogs = [];
     for (let index = 0; index < data.length; index++) {
       const items = data[index];
       myfile = await fs.promises.readFile(('blogdata/'+items),'utf-8')
       allblogs.push(JSON.parse(myfile));
      }
      // console.log(data);
      res.status(200).json(allblogs)
}
