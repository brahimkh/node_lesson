const jwt = require('jsonwebtoken')

const authenicate = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1]
        let decode = jwt.verify(token, 'helloworld')
        req.user = decode
        next()
    } catch (err) {
        if (err.name == 'TokenExpiredError') {
            return res.json({
                message: 'Session Expired'
            })
        } else {
            res.json({
                message: 'Authentication Failed'
            })
        }
    }
}
module.exports = authenicate