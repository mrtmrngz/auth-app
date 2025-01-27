import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mainRoutes from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(cookieParser())

app.use("/api", mainRoutes)

app.listen(PORT, () => {
    console.log(`Server running port on ${PORT}`)
})
