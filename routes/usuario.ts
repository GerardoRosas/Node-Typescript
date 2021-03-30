import { Router } from 'express';
import { getUsuarios, getUsuario, postUsuario, actualizarUsuario, deleteUsuario } from '../controllers/usuarioController';

const router = Router();


router.get('/', getUsuarios);

router.get('/:id', getUsuario);

router.post('/', postUsuario);

router.put('/:id', actualizarUsuario);

router.delete('/:id', deleteUsuario);



export default router;