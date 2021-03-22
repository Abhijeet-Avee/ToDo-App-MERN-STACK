const bcrypt = require('bcrypt');
const encryptOperations = {
    salt: 10,
    // encrypt the password
    encrypt(password){
        return bcrypt.hashSync(password,this.salt);
    },
    // compare input password with stored one for login validation
    compare(dbPassword,plainPassword){
       return bcrypt.compareSync(plainPassword,dbPassword);
    }
};
module.exports = encryptOperations; 