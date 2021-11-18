const { addSyntheticLeadingComment } = require('typescript')
const db = require('../config/database')



exports.masterUser = async () => {
    return await db.query(`
    SELECT username, password, balance, win, lose FROM public."Account";
    `)
}

exports.Login = async (params) => {
    let result = await db.queryFindOneOrNull('SELECT username, password, balance, win, lose FROM public."Account" WHERE (username = $1) and (password = $2) ',[params.username,params.password])
    if (result){
        return result
    } else {
        return false
    }
}

exports.createUser = async(body) => {
    let result = await db.queryFindOneOrNull('SELECT * FROM public."Account" WHERE ( username = $1)',[body.username])
    if (result){
        return false
    } else {
        let sql = 'INSERT INTO public."Account"(username, password) VALUES($1,$2) RETURNING username;'
        let all = await db.queryFindOneOrNull(sql,[body.username,body.password])
        return await db.queryFindOneOrNull('SELECT * FROM public."Account" WHERE ( username = $1)',[all.username])
        
    }
}

exports.searchByUser = async(body) => {
    let result = await db.queryFindOneOrNull('SELECT balance, win, lose FROM public."Account" WHERE (username = $1)',[body.username])
    return result
}

exports.updateUser = async(body) => {
    let result = await db.queryFindOneOrNull('UPDATE public."Account" SET balance = $1, win = $2, lose = $3 WHERE username = $4 RETURNING username;',[body.balance, body.win, body.lose, body.username])
    if (result) {
        console.log(result)
        return await db.queryFindOneOrNull('SELECT * FROM public."Account" WHERE ( username = $1)',[result.username])
    }
}
































