const db = require('../db/db');

async function create(object) {
    try {
        const [created] = await db('agentes').insert(object).returning("*");
        return created;
    } catch (error) {
        throw error;
    }
}

async function readById(id) {
    try {
        const result = await db('agentes').where({ id });
        return result[0];
    } catch (error) {
        throw error;
    }
}

async function readAll() {
    try {
        const result = await db('agentes').select("*");
        return result;
    } catch (error) {
        throw error;
    }
}

async function update(id, fieldsToUpdate) {
    try {
        const [updated] = await db('agentes')
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
        const deletedCount = await db('agentes').where({ id }).del();
        return deletedCount; // 0 se não deletou nada
    } catch (error) {
        throw error;
    }
}

module.exports = { create, readById, readAll, update, remove };