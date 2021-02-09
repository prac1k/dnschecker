const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//need to write here

//***test code***
// mock data to send to our frontend
let events =
    [
        {
            id: 1,
            name: 'Charity Ball',
            category: 'Fundraising',
            description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
            featuredImage: 'https://placekitten.com/500/500',
            images: [
                'https://placekitten.com/500/500',
                'https://placekitten.com/500/500',
                'https://placekitten.com/500/500',
            ],
            location: '1234 Fancy Ave',
            date: '12-25-2019',
            time: '11:30'
        },
        {
            id: 2,
            name: 'Rescue Center Goods Drive',
            category: 'Adoptions',
            description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
            featuredImage: 'https://placekitten.com/500/500',
            images: [
                'https://placekitten.com/500/500'
            ],
            location: '1234 Dog Alley',
            date: '11-21-2019',
            time: '12:00'
        }
    ];

//getting by ID
app.get('/dnspropagation/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(event => event.id === id);
    res.send(event);
});

// NEW -- get all events
app.get('/dnspropagation', (req, res) => {
    res.send(events);
});

//***end of test code***

//my code whcih need to work
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

//test request
app.get('/', (req, res) => {
    res.send(`Hi! Server is listening on port ${port}`)
});

// listen on the port
app.listen(port);