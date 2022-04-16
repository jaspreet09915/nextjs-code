// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default async function handler(req, res) {
  // console.log(res);
     let data = await fs.promises.readdir('blogdata');
     let myfile;
     let allblogs = [];
     for (let index = 0; index < data.length; index++) {
       const items = data[index];
       console.log(items);
       myfile = await fs.promises.readFile(('blogdata/'+items),'utf-8')
       console.log(myfile)
       allblogs.push(JSON.parse(myfile));
      }
      console.log(data);
      res.status(200).json(allblogs)
}
