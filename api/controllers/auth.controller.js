import db from '../libs/db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {

    const {username, email, password} = req.body

    try {
        const checkExistingUserByUsername =  await db.user.findUnique({
            where: {username}
        })

        const checkExistingUserByEmail =  await db.user.findUnique({
            where: {email}
        })

        if(checkExistingUserByUsername || checkExistingUserByEmail) {
            return res.status(403).json({error: "User already existing"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        res.status(201).json({message: "User created successfully"})

    }catch (err) {
        res.status(500).json({serverError: "Internal Server Error"})
    }
}

export const login = async (req, res) => {

    const {email, password} = req.body

    try {
        const user = await db.user.findUnique({
            where: {email}
        })

        if(!user) return res.status(404).json({error: "Invalid Credentials!"})

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid) return res.status(404).json({error: "Invalid Credentials!"})

        const token = jwt.sign({id: user.id, role: user.role}, 'jwtSecret', {expiresIn: "7d"})

        res.cookie('_session', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 1000 * 60 * 60 * 24 * 7
        }).status(200).json({message: "Login Successful"})

    }catch (err) {
        res.status(500).json({serverError: "Internal Server Error"})
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('_session', {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        }).status(200).json({message: "Logout Successful"})
    }catch (err) {
        res.status(500).json({serverError: "Internal Server Error"})
    }
}