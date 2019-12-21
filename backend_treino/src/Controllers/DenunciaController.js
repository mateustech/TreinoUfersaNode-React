const Denuncia = require('../Model/DenunciaModel');


class DenunciaController {

    async index(req,res){
        const denuncias = await Denuncia.find().sort('-createdAt');
        return res.status(200).json(denuncias);
    }

    async show (req,res) {
        const denuncia = await Denuncia.findById(req.params.id);
        return res.status(200).json(denuncia);
    }

    async store(req,res){
        const data = await Denuncia.create(req.body);
        return res.status(201).json(data);
    }

    async update(req,res){
        const {id} = req.params;
        const denuncia = await Denuncia.findByIdAndUpdate(id, req.body,{
            new: true
        });
        return res.json(denuncia);
    }

    async destroy (req,res){
        const {id} = req.params;
        await Denuncia.findByIdAndDelete(id);
        return res.status(204).send("Deletado");
    }

}

module.exports = new DenunciaController();


//TODO: index, show, store, update, destroy,