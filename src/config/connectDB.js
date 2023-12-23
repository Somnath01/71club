const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '95.216.7.15',
    user: 'ecssirco_daman',
    password: 'Somnath8509roy@',
    database: 'ecssirco_daman'
});


export default connection;
