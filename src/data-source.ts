import "reflect-metadata"
import { DataSource } from "typeorm"
import { EP } from "./entity/EP"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ep30122003",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [EP],
    migrations: [],
    subscribers: [],
})
