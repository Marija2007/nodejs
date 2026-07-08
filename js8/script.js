const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/home/imePrezimePol') {
    const ime = 'marija';
    const prezime = 'petkova';
    const pol = 'zenski';

    const formatiranoIme = ime.charAt(0).toUpperCase() + ime.slice(1);
    const formatiranoPrezime = prezime.charAt(0).toUpperCase() + prezime.slice(1);
    const formatiranPol = pol.charAt(0).toUpperCase() + pol.slice(1);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`${formatiranoIme} ${formatiranoPrezime} ${formatiranPol}`);
  } else if (req.url === '/home/title') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Naslov na rutata');
  } else if (req.url === '/home/header') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ova e header!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(8086, () => {
  console.log('Serverot e startuvan na http://localhost:8086');
});
