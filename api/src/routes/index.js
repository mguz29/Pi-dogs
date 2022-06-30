const { Router } = require('express');
const{API_KEY} = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const {Dog, Temperamento} = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => { 
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const apiInfo  = await response.data.map(d=>{
        return {
            id:d.id,
            nombre:d.name,
            altura: d.height.metric,
            peso: d.weight.metric  ,
            añosDeVida: d.life_span,
            Temperamento:d.temperament,
            imagen:d.image.url
        }
    })
    return apiInfo


}


const getDbInfo = async () => {
  return await Dog.findAll({
      includes:{
          model:Temperamento,
          attributes:['name'],
          through:{attributes: [],}
      }
  })
}


const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
}




router.get('/dogs', async (req, res, next) => {
    const nombre = req.query.name
    try {
        let dogsTotal = await getAllDogs();
    if (nombre){
        let dogName = dogsTotal.filter( el => el.nombre.toLowerCase().includes(nombre.toLowerCase()))
        dogName.length ? // se encontro algo en la linea de arriba?
        res.status(200).json(dogName) :
        res.status(404).send('No encontramos resultados que coincidan');
    } else {
        res.status(200).send(dogsTotal)
    }
    } catch (error) {
        next(error)
    }
})



// //ruta para acceder a los temperamentos 

router.get('/temperament', async (req, res, next) => {
    const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
       let temperamentos = response.data.map((el) => el.temperament).join(",").split(",")
       temperamentos.forEach(e => {
         if (e) {
             Temperamento.findOrCreate({
               where:{nombre:e}
           })
         }
       });
       
//      const temperamento = response.data.map(e=> e.temperament)
//     let nuevostemperamentos = temperamentos.map((el) => el && el.split(",")).flat()
     
//     // ;
      const allTemperamentos = await Temperamento.findAll()
      res.send(allTemperamentos)
    
         
            
// //             // nuevostemperamentos.forEach((el) => {
// //             //     if(temperamentosfinal.indexOf(el) < 0) temperamentosfinal.push(el)
// //             // })
// //             // for (let i = 0; i < 100; i++) {
// //             //     await Temperamento.create({
// //             //         nombre: temperamentosfinal[i]
// //             //     }) 
// //             // }
// //         //    // res.send(temperamentosfinal.slice(0, 19))
// //         //    res.send(temperamentos)

  })




//ruta para crear nuestro Dog con el formulario

router.post('/dog', async (req, res, next) => {
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


})

router.get('/dogs/:id', async (req, res, next) => {
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
})


module.exports = router;
