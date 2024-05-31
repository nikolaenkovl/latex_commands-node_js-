module.exports = (sequelize, Sequelize) => {
    var Command= sequelize.define(
        'command', // определяем имя таблицы
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
            description: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            example: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            category: {
                type: Sequelize.INTEGER(10),
                allowNull: false
            }
        });

    // Определяем связи таблицы user с другими таблицами
    Command.associate = (models) => {
        // Определение связи один-ко-многим с таблицей user_command. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны таблицы user_command)
        Command.hasMany(models.user_command, {
            foreignKey: 'command_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });
    };
    return Command;
};