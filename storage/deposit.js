const fs = require('fs');

const addSaldonya = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].balance += amount
fs.writeFileSync('./storage/saldo_user.json', JSON.stringify(_dir, null, 3))
} else {
var object_add = ({
id: userId,
balance: amount
})
_dir.push(object_add)
fs.writeFileSync('./storage/saldo_user.json', JSON.stringify(_dir, null, 3))
}
}

const kuranginSaldonya = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].balance -= amount
fs.writeFileSync('./storage/saldo_user.json', JSON.stringify(_dir, null, 3))
}}

const checkSaldonya = (userId, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
return _dir[position].balance
} else {
return 0
}}

module.exports = { 
addSaldonya,
kuranginSaldonya,
checkSaldonya
}