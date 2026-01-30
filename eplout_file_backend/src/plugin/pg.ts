import pkg from "pg"
export const pool = new pkg.Pool({
    database:"files",
    host: "localhost",
    port:5432,
    user:"postgres",
    password:"aseda2008"
})

pool.connect().then(() => {
    console.log(`Server connected to DB`);
    
})