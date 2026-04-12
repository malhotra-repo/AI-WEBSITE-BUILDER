import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import websiteRouter from "./routes/website.routes.js"

const app = express()
import connectDb from "./config/db.js"

import cors from "cors"
import cookieParser from "cookie-parser"

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/user",userRouter)
app.use("/api/website",websiteRouter)





const port = process.env.PORT

app.listen(port, () => {
    console.log(" server started wow ")
    connectDb()
})