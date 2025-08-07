const db = require('../db/db');

async function create(object) {
    try {
        const created = await db('agentes').insert(object, ["*"]);
        if (!created) {
            return false;
        }
        return created[0];
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function readById(id) {
    try {
        const result = await db('agentes').where({ id: id });
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
        const result = await db('agentes').select(["*"]);
        if (result.length === 0) {
            return false;
        }
        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function update(id, fieldsToUpdate) {
    try {
        const updated = await db('agentes').where({ id: id }).update(fieldsToUpdate, ["*"]);
        if (!updated && update.length === 0) {
            return false;
        }
        return updated[0];
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function remove(id) {
    try {
        const deleted = await db('agentes').where({ id: id }).del();
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