import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);

const host = '_mongodb._tcp.cluster0.jmdal4a.mongodb.net';

dns.resolveSrv(host, (err, addresses) => {
  if (err) {
    console.error('SRV Resolution failed:', err);
  } else {
    console.log('SRV Records found:', addresses);
  }
});

dns.resolveTxt('cluster0.jmdal4a.mongodb.net', (err, addresses) => {
    if (err) {
      console.error('TXT Resolution failed:', err);
    } else {
      console.log('TXT Records found:', addresses);
    }
  });
