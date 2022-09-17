class UserController {
    register(req, res, next) {
        res.json('/register sucsess');
    }
}

module.exports = new UserController();