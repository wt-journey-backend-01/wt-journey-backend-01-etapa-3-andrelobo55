const db = require('../db/db');

async function create(object) {
    try {
        const [created] = await db('casos').insert(object).returning("*");
        return created;
    } catch (error) {
        throw error;
    }
}

async function readById(id) {
    try {
        const result = await db('casos').where({ id });
        return result[0];
    } catch (error) {
        throw error;
    }
}

async function readAll() {
    try {
        const result = await db('casos').select("*");
        return result;
    } catch (error) {
        throw error;
    }
}

async function update(id, fieldsToUpdate) {
    try {
        const [updated] = await db('casos')
            .where({ id })
            .update(fieldsToUpdate)
            .returning("*");
        return updated;
    } catch (error) {
        throw error;
    }
}

async function remove(id) {
    try {
        const deletedCount = await db('casos').where({ id }).del();
        return deletedCount; // 0 se não deletou nada
    } catch (error) {
        throw error;
    }
}

module.exports = { create, readById, readAll, update, remove };