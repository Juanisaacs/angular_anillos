
const Anillo = require('/anillo.models')

const getAllAnillos = async (req, res, next) => {
    try {
        const anilloDB = await Anillo.find()
        res.status(200).json(anilloDB)
    } catch (error) {
        return next(setError(500, 'Aillo failed server'))
    }
}

module.exports = { 

    getAllAnillos

}