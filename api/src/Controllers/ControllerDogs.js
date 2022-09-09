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
        altura,
        peso,
        añosDeVida,
        temperamento

    } = req.body

    let dogCreated= await Dog.create({
        id,
        nombre,
        altura,
        peso,
        añosDeVida
    })
     let temperamentoDb = await Temperamento.findAll({
         where: { name : temperamento}
     })
     dogCreated.addType(temperamentoDb) // metodo de SQL que lo que hace es traerme de la tabla lo que le pido por parametro
    res.send('Receta Dog correctamente')


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

module.exports = {
    getAlls,getDogName,dogsId
}