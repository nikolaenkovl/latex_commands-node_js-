module.exports = (sequelize, Sequelize) => {
    var User_command = sequelize.define(
        'user_command', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false
            },
            command_id:{
                type: Sequelize.INTEGER(10),
                allowNull: false
            }
        });

    // Определяем связи таблицы user_command с другими таблицами
    User_command.associate = (models) => {
        // Определение связи один-ко-многим с таблицей user. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны таблицы user)
        User_command.belongsTo(models.user, {
            foreignKey: 'user_id',
            //onDelete: 'CASCADE',
            //onUpdate: 'CASCADE',
            //sourceKey: 'id'
        });
        User_command.belongsTo(models.command, {
            foreignKey: 'command_id',
            //onDelete: 'CASCADE',
            //onUpdate: 'CASCADE',
            //sourceKey: 'id'
        });
    };
    return User_command;
};