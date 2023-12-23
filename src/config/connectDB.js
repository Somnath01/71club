const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '95.216.7.15',
    user: 'ecssirco_71clubt',
    password: 'Somnath8509roy@',
    database: 'ecssirco_71club'
});


export default connection;