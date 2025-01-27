import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    const token = req.cookies['_session']

    if(!token) return  res.status(401).json({error: "Not Authorized!"})

    jwt.verify(token, 'jwtSecret', (err, payload) => {
        if(err) {
            return res.status(403).json({error: "Invalid Token"})
        }

        req.user = payload

        next()
    })
}

export default verifyToken