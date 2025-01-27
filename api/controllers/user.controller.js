import db from '../libs/db.js'

export const user_info = async (req, res) => {

    const userId = req.user.id

    try {
        const user = await db.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                username: true,
                email: true,
                role: true
            }
        })

        if(!user) return res.status(404).json({error: "User not found"})

        res.status(200).json(user)
    }catch (err) {
        res.status(500).json({serverError: "Internal Server Error"})
    }
}

export const all_users = async (req, res) => {
    try {
        const users = await db.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                createdAt: true
            }
        })

        res.status(200).json(users)

    }catch (err) {
        res.status(500).json({serverError: "Internal Server Error"})
    }
}