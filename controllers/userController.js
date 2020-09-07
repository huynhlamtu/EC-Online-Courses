let controller = {};
let models = require('../models');
let User = models.User
let bcrypt = require ('bcrypt');

controller.getUserByEmail = (inputemail) =>{
    return User.findOne({
        where: { email: inputemail}
    });
};

controller.createUser = (user) => {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    return User.create(user);
}

controller.comparePassword = (password, hash) => {
    console.log('Comparing password');
    return bcrypt.compareSync(password, hash);
};

controller.editUser = (user) => {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    return User.editUser(user);
}
module.exports = controller;