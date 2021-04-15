import { Response, Request } from "express";


export const getUsuarios = (req: Request, res: Response) => {

    res.json({
        msg: 'Get users'
    })
}

export const getUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Get user',
        id
    })
}

export const postUsuario = (req: Request, res: Response) => {

    const { nombre } = req.body;

    res.json({
        msg: 'Post users',
        nombre
    })
}


export const actualizarUsuario = (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    res.json({
        msg: 'update users'
    })
}


export const deleteUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'delete users',
        id
    })
}

