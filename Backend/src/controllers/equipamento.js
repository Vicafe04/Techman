const readAll = async (req, res) => {
    const equipamento = await prisma.equipamento.findMany({
        select: {
            id: true,
            nome: true,
            senha: true,
            comentarios: {
                select: {
                    id: true,
                    comentario: true,
                    equipId: true,
                }
            }
        }
    })

    res.status(200).json(equipamento).end()
}

module.exports = {
    readAll
}