const dbmanager = require("../database/")

const getUser = async (email) => {
    const db = dbmanager.getDatabase().db();
    const user = await db.collection('users').findOne({ email: email });
    return user
}

module.exports = { getUser }