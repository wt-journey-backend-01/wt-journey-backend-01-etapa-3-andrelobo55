const db = require('../db/db');

async function create(object) {
    try {
        const created = await db('casos').insert(object).returning("*");
        return created;
    } catch (error) {
        throw error;
    }
}

async function readById(id) {
    try {
        const result = await db('casos').where({ id: id });
        return result[0];
    } catch (error) {
        throw error;
    }
}

async function readAll() {
    try {
        const result = await db('casos').select(["*"]);
        return result;
    } catch (error) {
        throw error;
    }
}

async function update(id, fieldsToUpdate) {
    try {
        const updated = await db('casos').where({ id: id }).update(fieldsToUpdate).returning("*");
        return updated;
    } catch (error) {
        throw error;
    }
}

async function remove(id) {
    try {
        const deleted = await db('casos').where({ id: id }).del();
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = { create, readById, readAll, update, remove }