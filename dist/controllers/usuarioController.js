"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.actualizarUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: 'Get users'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get user',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => {
    const { nombre } = req.body;
    res.json({
        msg: 'Post users',
        nombre
    });
};
exports.postUsuario = postUsuario;
const actualizarUsuario = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'update users'
    });
};
exports.actualizarUsuario = actualizarUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete users',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioController.js.map