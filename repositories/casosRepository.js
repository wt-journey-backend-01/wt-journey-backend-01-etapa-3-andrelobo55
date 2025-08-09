const db = require('../db/db');

async function create(object) {
    try {
        const [created] = await db('casos').insert(object).returning("*");
        return created;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function readById(id) {
    try {
        const result = await db('casos').where({ id: id });
        if (result.length === 0) {
            return false;
        }
        return result[0];
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function readAll() {
    try {
        const result = await db('casos').select(["*"]);
        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function update(id, fieldsToUpdate) {
    try {
        const [updated] = await db('casos').where({ id: id }).update(fieldsToUpdate).returning("*");
        return updated;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function remove(id) {
    try {
        const deleted = await db('casos').where({ id: id }).del();
        if (!deleted) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = { create, readById, readAll, update, remove }