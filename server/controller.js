var connection = require('../database/db');
var client = require('./redis');

var getCompanies = (req, res) => {
    client.get('companies', (err, data) => {
        if(err) {
            console.log(err)
        } else if(data) {
            res.send(JSON.parse(data))
        } else {
            connection.query('select * from companies', (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    client.setex('companies', 3600, JSON.stringify(results.rows))
                    res.send(results.rows)
                }
            })
        }
    })
}


var getJobs = (req, res) => {
    var query = 'select jobs.id, jobs.title, jobs.city, jobs.state, jobs.salary, jobs.type, jobs.description, jobs.status, companies.company, companies.employees, companies.funding, companies.round from jobs inner join companies on jobs.company_id = companies.id'
    client.get('jobs', (err, data) => {
        if(err) {
            console.log(err)
        } else if(data) {
            res.send(JSON.parse(data).sort((a,b) => Number(a.id) - Number(b.id)))
        } else {
            connection.query(query, (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    client.setex('jobs', 3600, JSON.stringify(results.rows.sort((a,b) => a - b)));
                    res.send(results.rows.sort((a,b) => a - b));
                }
            })
        }
    })
}

var getLocations = (req, res) => {
    client.get('locations', (err, data) => {
        if(err) {
            console.log(err)
        } else if(data) {
            res.send(JSON.parse(data))
        } else {
            connection.query('select distinct city from jobs', (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    client.setex('locations', 3600, JSON.stringify(results.rows))
                    res.send(results.rows);
                }
            })
        }
    })
}

var getRounds = (req, res) => {
    client.get('rounds', (err, data) => {
        if(err) {
            console.log(err)
        } else if(data) {
            res.send(JSON.parse(data))
        } else {
            connection.query('select distinct round from companies', (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    client.setex('rounds', 3600, JSON.stringify(results.rows))
                    res.send(results.rows);
                }
            })
        }
    })
}

var getStatus = (req, res) => {
    client.get('status', (err, data) => {
        if(err) {
            console.log(err)
        } else if(data) {
            res.send(JSON.parse(data))
        } else {
            connection.query('select distinct status from jobs', (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    client.setex('status', 3600, JSON.stringify(results.rows))
                    res.send(results.rows);
                }
            })
        }
    })
}

var updateStatus = (req, res) => {
    connection.query(`update jobs set status = 'Applied' where id = '${req.body.id}'`, (error, results) => {
        if(error) {
            res.send(error)
        } else {
            client.del('jobs', (error, reply) => {
                if(!error) {
                    if(reply === 1) {
                        console.log(`Key is deleted`)
                        res.status(200).send('Status updated!')
                    } else {
                        console.log('Keys jobs does not exist')
                    }
                }
            });
        }
    })
}

module.exports = {
    getCompanies,
    getJobs,
    getLocations,
    updateStatus,
    getRounds,
    getStatus
};