import { pool } from "../config/db.js";

export const addUserQueries = async ( nombre, balance ) => {
    try {
        const sql = {
            text: "INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) returning *",
            values: [nombre, balance]
        }
        const response = await pool.query(sql);
        if (response.rowCount > 0) {
            
            return response.rows[0]
            
        } else{
            return false
        }
       
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}

export const getUsersQueries = async () => {
    try {
        const sql = {
            text: "SELECT * FROM usuarios",
        }
        const response = await pool.query(sql);
        if (response.rowCount > 0) {
            return response.rows;
        } else {    
            return new Error("No se encontraron usuarios");
        }
    } catch (error) {
        console.log("Queries Error Code: ", error.code, "Message: ", error.message);
    }
}