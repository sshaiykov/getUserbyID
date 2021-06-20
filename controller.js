const { UserModel } = require('./model');

exports.saveUser = async function (req, res) {
    try {
        const user = req.body;

       const savedUser = await UserModel.create(user);

        res.status(200).json({
            message: 'Пользователь успешно создан!',
            user: savedUser
        });
    } catch (e) {
        console.log('Произошла ошибка при сохранении пользователя: ', e);
    }
};
exports.getUsers = async function(req, res) {
    try {
        res.status(200).json('Пользователи успешно получены!')
    } catch (e) {
        console.log('Произошла ошибка при запросе пользователей');
    }
};

exports.editUser = async function(req, res) {
    try {
        const userId  = req.params.id;
        const user = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(userId, user);

        res.status(200).json({
            message: 'Пользователь изменен!',
            user: updatedUser
        });

    } catch (e) {
        console.log('Произошла ошибка при изменении пользователя', e)
    }
};

exports.getOneUser = async function(req, res) {
    try {
        const userId = req.params.id;
        const user = req.body;

        const getUser = await UserModel.findById(userId, user);

        res.status(200).json({
            message: 'Пользователь успешно получен из БД!',
            user: getUser
        });

    } catch (e) {
        console.log('Произошла ошибка при запросе пользователя из БД', e)
    }
};
 exports.getAllUsers = async function(req, res) {
     try {
    
        const user = req.body;

        const getAllUsers = await UserModel.find(user);

        res.status(200).json({
            message: 'Пользователи успешно получены из БД!',
            user: getAllUsers
        });

    } catch (e) {
        console.log('Произошла ошибка при запросе пользователей из БД', e)
    }
};

exports.deleteOneUser = async function (req, res) {
    try {
        const userId = req.params.id;
        

        const deleteOneUser = await UserModel.findByIdAndDelete(userId)
        res.status(200).json({
            message: "Пользователь удалён.",
            user: deleteOneUser
        })

    } catch (e) {
        console.log('Произошло ошибка!');

    }
}

