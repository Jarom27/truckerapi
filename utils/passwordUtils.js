const bcrypt = require('bcrypt');

// Número de rondas de hashing (10-12 es un buen balance entre seguridad y rendimiento)
const SALT_ROUNDS = 10;

/**
 * Hashea una contraseña.
 * @param {string} password - La contraseña en texto plano.
 * @returns {Promise<string>} - La contraseña hasheada.
 */
async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
}

/**
 * Compara una contraseña con su hash.
 * @param {string} password - La contraseña en texto plano.
 * @param {string} hashedPassword - El hash almacenado en la base de datos.
 * @returns {Promise<boolean>} - Retorna true si coinciden, false si no.
 */
async function comparePassword(password, hashedPassword) {
    console.log(password, hashedPassword)
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}

module.exports = { hashPassword, comparePassword };
