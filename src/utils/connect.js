import pg from "pg"

export const connect = () => {
    let db
    if (!db) {
        db = new pg.Pool({
            connectionString: process.env.DB_URL
        })
        return db
    }
    return db
}