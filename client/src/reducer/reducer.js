const initialState = {
  dogs: [],
  temp: [],
  allDogs: [],
  detail: [],
  setDetail: [],
  page:1
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case "GET_TEMP":
      return {
        ...state,
        temp: action.payload,
      };
    case "ORDER_BY_nombre":
      let sortedArr =
        action.payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (a.nombre > b.nombre) {
                return 1;
              }
              if (b.nombre > a.nombre) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.nombre > b.nombre) {
                return -1;
              }
              if (b.nombre > a.nombre) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };

    // case "FILTER_TEMP":
    //   const dogs = state.allDogs;
    //   console.log(dogs);

    //   const temperamentsFilter2 = dogs.filter((e) =>
    //     e.Temperamento?.split(", ")
    //   );
    //   const temperamentsFilter = dogs.filter((e) => {
    //     e.Temperamento?.split(", ").includes(action.payload);
    //   });
    //   console.log(temperamentsFilter2, "filtroxd");
    //   return {
    //     ...state,
    //     dogs: temperamentsFilter,
    //   };

    case "GET_NAME_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "GET_ID":
      return {
        ...state,
        detail: action.payload,
      };

    case "SET_ID":
      return {
        ...state,
        detail: action.payload,
      };

   

    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload,
      };
      case "ORDER_BY_PESO":
        let sortWeight = action.payload === 'asc' ? 
        state.dogs.sort(function (a, b){  
        return b.peso_min - a.peso_min;
        }) :
        state.dogs.sort(function(a, b){
        return a.peso_min - b.peso_min;
        })
        return{
        ...state,
        dogs: sortWeight
        };
        case "FILTER_CREATED":
          let created = state.allDogs
          let filtrados = action.payload === 'created' ? created.filter(el=>el.createdInDb) : created.filter(el=> !el.createdInDb)
          return {
            ...state,
            dogs: filtrados
          };

    default:
      return state;
  }
}
export default rootReducer;
