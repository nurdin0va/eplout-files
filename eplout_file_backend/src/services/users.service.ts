import { pool } from "../plugin/pg"

interface IBody {
  email: string
  avatar: string
}
// postUserServiee
export const postService = async (body: IBody) => {
  const response = await pool.query(
    `
    INSERT INTO usersfile (email, avatar)
    VALUES ($1, $2)
    RETURNING *
    `,
    [body.email, body.avatar]
  )
  return response.rows[0]
}
//getUserService
export const getService = async () => {
  const response = await pool.query(`SELECT * FROM usersfile`)
  return response.rows
}
//gitUserOneService
export const getOneService = async (id: number):Promise<IBody> => {
  const response = await pool.query(
    `SELECT * FROM usersfile WHERE id=$1`,
    [id]
  )
  if (!response.rows[0]) {
    throw new Error("User not found")
  }
  return response.rows[0]
}

export const deleteService = async (id: number) => {
  const response = await pool.query(
    `
    DELETE FROM usersfile
    WHERE id=$1
    RETURNING *
    `,
    [id]
  )
  if (!response.rows[0]) {
    throw new Error("ID not found")
  }
  return response.rows[0]
}
export const updateService = async (id: number, update: IBody) => {
  const response = await pool.query(
    `
    UPDATE usersfile
    SET email=$1, avatar=$2
    WHERE id=$3
    RETURNING *
    `,
    [update.email, update.avatar, id]
  );

  if (!response.rows[0]) {
    throw new Error("User not found");
  }

  return response.rows[0];
};

