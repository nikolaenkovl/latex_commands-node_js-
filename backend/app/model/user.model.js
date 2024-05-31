module.exports = (sequelize, Sequelize) => {
    var User = sequelize.define(
        'user', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            username: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            isAdmin:{
                type: Sequelize.BOOLEAN,
                allowNull: false
            }
        });

    // Определяем связи таблицы user с другими таблицами
    User.associate = (models) => {
        // Определение связи один-ко-многим с таблицей user_command. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны таблицы user_command)
        User.hasMany(models.user_command, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });
    };
    return User;
};