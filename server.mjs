import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('public');
http.createServer(async(req,res)=>{try{const path=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!path.startsWith(root+'/')&&!path.startsWith(root+'\\')&&path!==root)throw Error();const file=path===root?resolve(root,'index.html'):path;const data=await readFile(file);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml'})[extname(file)]||'application/octet-stream');res.end(data)}catch{res.statusCode=404;res.end('Introuvable')}}).listen(4173,'127.0.0.1',()=>console.log('http://127.0.0.1:4173'));
