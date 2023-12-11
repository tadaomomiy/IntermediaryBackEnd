import { Sequelize } from "sequelize";

const sequelize = new Sequelize (
    'lgpd_database',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        // port: 5432,
        define: {
            timestamps: false
        }
    }
);

sequelize.authenticate().then( () => {
    console.log('Connection has been established sucessfully.');
}).catch((error) => {
    console.log('Unable to connect to the database: ', error)
});

export default sequelize