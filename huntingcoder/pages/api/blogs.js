// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default function handler(req, res) {
  // console.log(res);
  fs.readdir("blogdata", (errr ,data)=>{
      // console.log(typeof data);
      console.log(data);
      res.status(200).json(data)
  })
}
