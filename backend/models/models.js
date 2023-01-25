const sequelize = require('../db')
const {DataTypes} = require('sequelize')
//создание таблиц
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Favorites = sequelize.define('favorites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FavoritesAuto = sequelize.define('favorites_auto', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Auto = sequelize.define('auto', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING,allowNull: false}, 
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Mark = sequelize.define('mark', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const AutoInfo = sequelize.define('auto_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeMark = sequelize.define('type_mark',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
//связи таблиц
User.hasOne(Favorites)
Favorites.belongsTo(User)

Favorites.hasMany(FavoritesAuto)
FavoritesAuto.belongsTo(Favorites)

Type.hasMany(Auto)
Auto.belongsTo(Type)

Mark.hasMany(Auto)
Auto.belongsTo(Mark)

Auto.hasMany(FavoritesAuto)
FavoritesAuto.belongsTo(Auto)

Auto.hasMany(AutoInfo, {as: 'info'});
AutoInfo.belongsTo(Auto)

Type.belongsToMany(Mark, {through: TypeMark })
Mark.belongsToMany(Type, {through: TypeMark })

module.exports = {
    User, 
    Favorites,
    FavoritesAuto,
    Auto,
    Type,
    Mark,
    TypeMark,
    AutoInfo,                                                   
}




