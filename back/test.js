const dns = require('dns');
console.log('DNS Records for', 'somik.cf');

var domain = 'somik.cf';

dns.setServers([ '153.92.2.6' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('000webhost:', addresses);
});
dns.setServers([ '208.67.222.220' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Holtsville NY, United States:', addresses);
});
dns.setServers([ '202.46.32.187' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Shenzhen, China:', addresses);
});
dns.setServers([ '208.79.56.204']);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Brossard, Canada:', addresses);
});
dns.setServers([ '195.46.39.39' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Yekaterinburg, Russian Federation:', addresses);
});
dns.setServers([ '5.11.11.5' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Cullinan, South Africa:', addresses);
});
dns.setServers([ '193.239.186.71' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Dalfsen, Netherlands:', addresses);
});
dns.setServers([ '83.145.86.7' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Lille, France:', addresses);
});
dns.setServers([ '194.224.52.37' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Madrid, Spain:', addresses);
});
dns.setServers([ '194.209.157.109' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Zizers, Switzerland:', addresses);
});
dns.setServers([ '202.136.162.11' ]);
dns.resolve(domain, (err, addresses, family) => {
    console.log('Singapore:', addresses);
});










