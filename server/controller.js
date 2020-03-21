var connection = require('../database/db');
// var redis = require('./redis');

var getCompanies = (req, res) => {
    var query = 'select * from companies'
    // redis.client.get('companies', (err, data) => {
    //     if(err) {
    //         console.log(err)
    //     } else if(data) {
    //         res.send(JSON.parse(data))
    //     } else {
            connection.query(query, (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    // redis.client.setex('companies', 3600, JSON.stringify(results.rows))
                    res.send(results.rows)
                }
            })
        // }
    // })
}


var getJobs = (req, res) => {
    var query = 'select jobs.id, jobs.title, jobs.city, jobs.state, jobs.salary, jobs.type, jobs.description, jobs.status, companies.company, companies.employees, companies.funding, companies.round from jobs inner join companies on jobs.company_id = companies.id'
    // redis.client.get('jobs', (err, data) => {
    //     if(err) {
    //         console.log(err)
    //     } else if(data) {
    //         res.send(JSON.parse(data).sort((a,b) => Number(a.id) - Number(b.id)))
    //     } else {
            connection.query(query, (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    // redis.client.setex('jobs', 3600, JSON.stringify(results.rows.sort((a,b) => a - b)));
                    res.send(results.rows.sort((a,b) => a - b));
                }
            })
        // }
    // })
}

var getEmployees = (req, res) => {
    var query = 'select employees.id, employees."2010", employees."2011", employees."2012", employees."2013", employees."2014", employees."2015", employees."2016", employees."2017", employees."2018", employees."2019", employees."2020", companies.company, companies.employees, companies.funding, companies.round from employees inner join companies on employees.company_id = companies.id'
    // redis.client.get('employees', (err, data) => {
    //     if(err) {
    //         console.log(err)
    //     } else if(data) {
    //         res.send(JSON.parse(data).sort((a,b) => Number(a.id) - Number(b.id)))
    //     } else {
            connection.query(query, (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    // redis.client.setex('employees', 3600, JSON.stringify(results.rows.sort((a,b) => a - b)));
                    res.send(results.rows.sort((a,b) => a - b));
                }
            })
        // }
    // })
}

var getLocations = (req, res) => {
    var query = 'select distinct city from jobs';
    // redis.client.get('locations', (err, data) => {
    //     if(err) {
    //         console.log(err)
    //     } else if(data) {
    //         res.send(JSON.parse(data))
    //     } else {
            connection.query(query, (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    // redis.client.setex('locations', 3600, JSON.stringify(results.rows))
                    res.send(results.rows);
                }
            })
        // }
    // })
}

var getRounds = (req, res) => {
    var query = 'select distinct round from companies';
    // redis.client.get('rounds', (err, data) => {
    //     if(err) {
    //         console.log(err)
    //     } else if(data) {
    //         res.send(JSON.parse(data))
    //     } else {
            connection.query(query, (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    // redis.client.setex('rounds', 3600, JSON.stringify(results.rows))
                    res.send(results.rows);
                }
            })
        // }
    // })
}

var getStatus = (req, res) => {
    var query = 'select distinct status from jobs';
    // redis.client.get('status', (err, data) => {
    //     if(err) {
    //         console.log(err)
    //     } else if(data) {
    //         res.send(JSON.parse(data))
    //     } else {
            connection.query(query, (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    // redis.client.setex('status', 3600, JSON.stringify(results.rows))
                    res.send(results.rows);
                }
            })
        // }
    // })
}

var updateStatus = (req, res) => {
    var query = `update jobs set status = 'Applied' where id = '${req.body.id}'`
    connection.query(query, (error, results) => {
        if(error) {
            res.send(error)
        } else {
            // redis.client.del('jobs', (error, reply) => {
                // if(!error) {
                    // if(reply === 1) {
                        // console.log(`Key is deleted`)
                        res.status(200).send('Status updated!')
                    // } else {
                        // console.log('Keys jobs does not exist')
                    // }
                // }
            // });
        }
    })
}

module.exports = {
    getCompanies,
    getJobs,
    getEmployees,
    getLocations,
    updateStatus,
    getRounds,
    getStatus
};