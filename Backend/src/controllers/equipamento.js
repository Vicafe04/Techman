const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    var info = req.body;

    const equipamento = await prisma.equipamento.createMany({
        data: info
    })

    res.status(200).json(equipamento).end()
}

const readAll = async (req, res) => {
    const equipamento = await prisma.equipamento.findMany({
        select: {
            id: true,
            equipamento: true,
            imagem: true,
            descricao: true,
            ativo: true,
            data: true,
            comentarios: {
                select: {
                    comentario: true,
                    equipamento: true,
                    perfil: true,
                    data: true,
                    perfio: {
                        select: {
                            perfil: true
                        }
                    }
                }
            }
        }
    })

    res.status(200).json(equipamento).end()
}

const del = async (req, res) => {
    const equipamento = await prisma.equipamento.delete({
        where: {
            id: Number(req.params.id)
        },
    })

    res.status(200).json(equipamento).end()
}

module.exports = {
    create,
    readAll,
    del
}