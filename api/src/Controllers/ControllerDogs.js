const axios = require('axios')
const { Dog,Temperamento } = require('../db')
const {getAllDogs} = require('../Controllers/ControllerGeneral')

const getAlls = async (req, res, next) => {
    try {
        let dogsTotal = await getAllDogs();
        res.status(200).send(dogsTotal)
    } catch (error) {
        console.log(error)
        res.status(404).send('Error')
    }
}

const getDogName= async (req,res,next)=>{
    const nombre = req.query.name
    try {
        let dogsTotal = await getAllDogs();
            let dogName = dogsTotal.filter( el => el.nombre.toLowerCase().includes(nombre.toLowerCase()))
            dogName.length ? // se encontro algo en la linea de arriba?
            res.status(200).json(dogName) :
            res.status(404).send('No encontramos resultados que coincidan');

    } catch (error) {
        res.status(404).send('No encontramos resultados que coincidan');

    }
}


const dogCreate = async (req, res, next) => {
    const {
        id,
        nombre,
        altura_min,
        altura_max,
        peso_min,
        peso_max,
        AñosDeVida_max,
        AñosDeVida_min,
        criado_para,
        imagen,
        temperamento

    } = req.body
    console.log( id,
        nombre,
        altura_min,
        altura_max,
        peso_min,
        peso_max,
        AñosDeVida_max,
        AñosDeVida_min,
        criado_para,
        Temperamento)

    let dogCreated= await Dog.create({
        nombre,
        altura_min,
        altura_max,
        peso_min,
        peso_max,
        AñosDeVida_max,
        AñosDeVida_min,
        criado_para,
        imagen,
        temperamento
    })
     let temperamentoDb = await Temperamento.findAll({
         where: { nombre : temperamento}
     })
     console.log(temperamentoDb)
     dogCreated.addTemperamento(temperamentoDb) // metodo de SQL que lo que hace es traerme de la tabla lo que le pido por parametro
    res.send('Dog create')


}

const dogsId =  async (req, res, next) => {
    const id = req.params.id
        let dogsTotal = await getAllDogs();
    if (id){
        let dogName = dogsTotal.filter( el => el.id == id)
        dogName.length ? // se encontro algo en la linea de arriba?
        res.status(200).json(dogName) :
        res.status(404).send('No encontramos el Perro');
  
    }else{
        res.status(200).send(dogsTotal)
    }
}

const DeleteDogs = async (req, res)=>{
    const {id} = req.params
     if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)){
        const deleteDog = await Dog.destroy({
            where:{id:id}
        })
        res.send('Dog has been delete')
    }else{
        res.send('Cant remove dogs from api')
    }

}

module.exports = {
    getAlls,getDogName,dogsId, DeleteDogs, dogCreate
}