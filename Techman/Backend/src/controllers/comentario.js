const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    var info = req.body;

    const comentario = await prisma.comentario.createMany({
        data: info
    })

    res.status(200).json(comentario).end()
}

const readAll = async (req, res) => {
    const comentario = await prisma.comentario.findMany({
        select: true
            
    })

    res.status(200).json(comentario).end()
}

const del = async (req, res) => {
    const comentario = await prisma.comentario.delete({
        where: {
            id: Number(req.params.id)
        },
    })

    res.status(200).json(comentario).end()
}

module.exports = {
    create,
    readAll,
    del
}