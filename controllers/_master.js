const { masterUser,createUser,Login,searchByUser, updateUser } = require("../model/_master");


exports.masterUser = async (req, res) => {
    let result = await masterUser()
    result
        ? res.send({ status: '200',
            data: result,
            msg: 'success'})
        : res.send({ status: '200',
        data: '',
        msg: 'not found'})
}

exports.createUser = async (req, res) => {
    if(!req.body.username) return res.status(400).send({ status: '400',data: "",msg: 'Undefine username'})
    if(!req.body.password) return res.status(400).send({ status: '400',data: "",msg: 'Undefine password'})
    // console.log(req.body.username)
    // console.log(req.body.password)
    let result = await createUser(req.body)
    result
        ? res.send({ status: '200',
            data: result,
            msg: 'Creaute User Success'})
        : res.send({ status: '200',
        data: '',
        msg: 'Username already use'})
}

exports.Login = async (req, res) => {
    let result = await Login(req.body)
    result
        ? res.send({ status: '200',
            data: result,
            msg: 'LogIn'})
        : res.send({ status: '200',
        data: false,
        msg: 'Invalid username or password'})
}
exports.searchByUser = async (req, res) => {
    let result = await searchByUser(req.body)
    result
        ? res.send({ status: '200',
            data: result,
            msg: 'Got it'})
        : res.send({ status: '200',
        data: false,
        msg: 'Error'})
}

exports.updateUser = async(req, res) => {
    let result = await updateUser(req.body)
    result
    ? res.send({ status: '200',
        data: result,
        msg: 'Update complete'})
    : res.send({ status: '200',
    data: false,
    msg: 'Error'})
}