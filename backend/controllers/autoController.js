const uuid = require('uuid')
const path = require('path');
const {Auto, AutoInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class AutoController {
    async create(req, res, next) {
        try {
            let {name, price, markId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const auto = await Auto.create({name, price, markId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    AutoInfo.create({
                        title: i.title,
                        description: i.description,
                        autoId: auto.id
                    })
                )
            }

            return res.json(auto)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {markId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let autos;
        if (!markId && !typeId) {
            autos = await Auto.findAndCountAll({limit, offset})
        }
        if (markId && !typeId) {
            autos = await Auto.findAndCountAll({where:{markId}, limit, offset})
        }
        if (!markId && typeId) {
            autos = await Auto.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (markId && typeId) {
            autos = await Auto.findAndCountAll({where:{typeId, markId}, limit, offset})
        }
        return res.json(autos)
    }

    async getOne(req, res) {
        const {id} = req.params
        const auto = await Auto.findOne(
            {
                where: {id},
                include: [{model: AutoInfo, as: 'info'}]
            },
        )
        return res.json(auto)
    }
}

module.exports = new AutoController()