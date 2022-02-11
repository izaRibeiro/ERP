import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

export default (req, res, next) => {
    const auth = req.headers.authorization

    if (!auth) return res.status(401).send({ error: "O Token não foi fornecido" })

    const parts = auth.split(' ')
    if (parts.length !== 2) return res.status(401).send({ error: "Token mal formatado" })

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: "Token inválido" })
    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if (error) return res.status(401).send({ error: "Token inválido" })

        req.userId = decoded.id
        return next()
    })
}