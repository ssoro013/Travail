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
                    res.send(results.rows)
                    client.setex('companies', 3600, JSON.stringify(results.rows))
                }
            })
        }
    })
}

var getJobs = (req, res) => {
    client.get('jobs', (err, data) => {
        if(err) {
            console.log(err)
        } else if(data) {
            res.send(JSON.parse(data))
        } else {
            connection.query('select * from jobs', (error, results) => {
                if(error) {
                    res.send(error)
                } else {
                    res.send(results.rows);
                    client.setex('jobs', 3600, JSON.stringify(results.rows))
                }
            })
        }
    })
}

var getAll = (req, res) => {
    connection.query('select * from jobs inner join companies on jobs.company_id = companies.id', (error, results) => {
        if(error) {
            res.send(error)
        } else {
            res.send(results.rows);
        }
    })
}

// var updateStatus = (req, res) => {
//     connection.query(`update jobs set status = "${req.status}" where id = "${req.id}"`, (error, results) => {
//         if(error) {
//             res.send(error)
//         } else {
//             res.status(200).send('Status updated!')
//         }
//     })
// }

module.exports = {
    getCompanies,
    getJobs,
    getAll,
    // updateStatus
};