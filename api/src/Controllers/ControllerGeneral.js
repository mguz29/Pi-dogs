const{API_KEY} = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const {Dog, Temperamento} = require('../db')



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => { 
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const apiInfo  = await response.data.map(d=>{
        return {
            id:d.id,
            nombre:d.name,
            altura_min: d.height.metric.split(" - ")[0] && d.height.metric.split(" - ")[0],
            altura_max:d.height.metric.split(" - ")[1] && d.height.metric.split(" - ")[1],
            peso_max: d.weight.metric.split(" - ")[1] && d.weight.metric.split(" - ")[1],
            peso_min: d.weight.metric.split(" - ")[0] && d.weight.metric.split(" - ")[0],
            añosDeVida: d.life_span,
            temperamento:d.temperament? d.temperament.split(', ') :["Temperament not found"],
            imagen:d.image.url,
            criado_para:d.bred_for
        }
    })
    return apiInfo


}

const getDbInfo = async () => {
  const todos = await Dog.findAll({include:Temperamento})
  const dogsDb = todos.map(el=>{
      return {
        id:el.id,
        nombre:el.nombre,
        altura_min:el.altura_min,
        altura_max:el.altura_max,
        peso_min:el.peso_min,
        peso_max:el.peso_max,
        añosDeVida:`${el.AñosDeVida_max} - ${el.AñosDeVida_min}`,
        criado_para:el.criado_para,
        imagen:el.imagen,
        temperamento:el.temperamentos?.map(e=>e.nombre),
        createdInDb:el.createdInDb
      }
        
  })
  return dogsDb
}


const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
}


module.exports = {
    getAllDogs
}