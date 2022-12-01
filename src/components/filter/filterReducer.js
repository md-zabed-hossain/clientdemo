const filterReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_PAGE":
      const page = action.payload;
      return{
        ...state,
        page : page
      };
    case "LOAD_FILTER_DATA":
      return {
        ...state,

        //   filter_data: [...action.payload],
        //   all_data: [...action.payload],
        //   filters: { ...state.filters,},
      };

    case "UPDATE_FILTERS_VALUE":
      var {  name, value} = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,   
          [name]: value,
        },
      };

      case "UPDATE_CHECKED_FILTERS_VALUE":
        
        // eslint-disable-next-line no-redeclare
        var  { name,value ,checked} = action.payload;
        let checkData= []
        if (checked){
          if(name === "style"){
            checkData = [...state.filters.style,value]
          }else   if(name === "special"){
            checkData = [...state.filters.special,value]
          }else if(name === "clothing"){
            checkData = [...state.filters.clothing,value]
          }else if(name === "head"){
            checkData = [...state.filters.head,value]
          }else if(name === "hand"){
            checkData = [...state.filters.hand,value]
          }else if(name === "neck"){
            checkData = [...state.filters.neck,value]
          }else if(name === "face"){
            checkData = [...state.filters.face,value]
          }else if(name === "eyes"){
            checkData = [...state.filters.eyes,value]
          }else if(name === "ears"){
            checkData = [...state.filters.ears,value]
          }else if(name === "mouth"){
            checkData = [...state.filters.mouth,value]
          }else if(name === "background"){
            checkData = [...state.filters.background,value]
          }
        }else{
          if(name === "style"){
            checkData = [...state.filters.style.filter((e)=> e!== value)]
          }else  if(name === "special"){
            checkData = [...state.filters.special.filter((e)=> e!== value)]
          }else  if(name === "clothing"){
            checkData = [...state.filters.clothing.filter((e)=> e!== value)]
          }else  if(name === "head"){
            checkData = [...state.filters.head.filter((e)=> e!== value)]
          }else  if(name === "hand"){
            checkData = [...state.filters.hand.filter((e)=> e!== value)]
          }else  if(name === "neck"){
            checkData = [...state.filters.neck.filter((e)=> e!== value)]
          }else  if(name === "face"){
            checkData = [...state.filters.face.filter((e)=> e!== value)]
          }else  if(name === "eyes"){
            checkData = [...state.filters.eyes.filter((e)=> e!== value)]
          }else  if(name === "ears"){
            checkData = [...state.filters.ears.filter((e)=> e!== value)]
          }else  if(name === "mouth"){
            checkData = [...state.filters.mouth.filter((e)=> e!== value)]
          }else  if(name === "background"){
            checkData = [...state.filters.background.filter((e)=> e!== value)]
          } 
        }
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: checkData,
           
          },
        };
  

    case "FILTER_DATA":
      let { all_data } = state;
      let tempFilterData = [];      
      const { text,style,special,clothing,head,hand,neck,eyes,ears,face,mouth,background } = state.filters;
      if (text) {
        tempFilterData = [...all_data];
        tempFilterData = tempFilterData.filter((curElem) => {
            return curElem.id.toLowerCase()===text.toLowerCase();        
        
        });
      }
// filter for style
      if (style) {
        let checkData = style.map((curElem) => {
          return all_data.filter((item) => {
            return item.style.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for special
      if (special) {
        let checkData = special.map((curElem) => {
          return all_data.filter((item) => {
            return item.special.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for clothing
      if (clothing) {
        let checkData = clothing.map((curElem) => {
          return all_data.filter((item) => {
            return item.clothing.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for head
      if (head) {
        let checkData = head.map((curElem) => {
          return all_data.filter((item) => {
            return item.head.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for hand
      if (hand) {
        let checkData = hand.map((curElem) => {
          return all_data.filter((item) => {
            return item.hand.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for neck
      if (neck) {
        let checkData = neck.map((curElem) => {
          return all_data.filter((item) => {
            return item.neck.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for eyes
      if (eyes) {
        let checkData = eyes.map((curElem) => {
          return all_data.filter((item) => {
            return item.eyes.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for ears
      if (ears) {
        let checkData = ears.map((curElem) => {
          return all_data.filter((item) => {
            return item.ears.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for face
      if (face) {
        let checkData = face.map((curElem) => {
          return all_data.filter((item) => {
            return item.face.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for mouth
      if (mouth) {
        let checkData = mouth.map((curElem) => {
          return all_data.filter((item) => {
            return item.mouth.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      // filter for background
      if (background) {
        let checkData = background.map((curElem) => {
          return all_data.filter((item) => {
            return item.background.includes(curElem);
          });
        });
        checkData.map((curElem)=>{
       return curElem.map(item =>   tempFilterData=[...tempFilterData,item])
       })
        
      }
      tempFilterData.flat();
      return {
        ...state,
        filter_data: tempFilterData,
      };

    case "CLEAR_FILTERS":     
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          style: [],
          special: [],
          clothing: [],
          head: [],
          hand: [],
          neck: [],
          face: [],
          eyes: [],
          ears: [],
          mouth: [],
          background: [],
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
