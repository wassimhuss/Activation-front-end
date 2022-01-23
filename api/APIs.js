
import {Proxy} from './fetch';
import * as P from './fetch';
import { Item } from 'native-base';
import { Alert } from 'react-native';
import axios from 'axios';

let myProxy = new Proxy();

export async function Get_Table_By_OWNER_ID(id) {

  try{
    let oParams_Get_Table_By_OWNER_ID = new P.Params_Get_Table_By_OWNER_ID();
    oParams_Get_Table_By_OWNER_ID.OWNER_ID = id;
    //console.error(oParams_Get_Table_By_OWNER_ID);
    let result = await myProxy.Get_Table_By_OWNER_ID(
      oParams_Get_Table_By_OWNER_ID
      )
        // return {Tables :result}
  
         let c1Tables =[];
         let c2Tables =[];
        result.forEach(item => { 
          item.DEPO == 'c1' ? 
          c1Tables.push(item) :  c2Tables.push(item)
           
        });
         return {Tables : result, c1Tables: c1Tables, c2Tables: c2Tables }
        
  }catch(error){
    console.log(
      'my errorrrrr +   ' + error
    );
  }
  
} 


export async function Get_Product_By_Search(NAME) {
  // console.error(id)
  // console.error( 'ana honmnnnn' + result.My_Result)
  let oParams_Get_Product_By_Where = new P.Params_Get_Product_By_Where();
  oParams_Get_Product_By_Where.NAME = NAME;
  //alert(joParams_Get_Product_By_Where)
  let result = await myProxy.Get_Product_By_Where(
    oParams_Get_Product_By_Where
    )

     if (result?.My_Result) {
             return {products: result.My_Result}
      }else{
        alert('please check your internet connection')
      }
} 
export async function  Get_Adress_By_USER_ID(id) {
  let oParams_Get_Adress_By_USER_ID = new P.Params_Get_Adress_By_USER_ID();
  oParams_Get_Adress_By_USER_ID.USER_ID = id;
  let result = await myProxy.Get_Adress_By_USER_ID(oParams_Get_Adress_By_USER_ID)
     if (result?.My_Result) {
            return {userAdress : result.My_Result, error: result.ExceptionMsg}
      }
      else{
       alert('please try again')
      }
}
export async function  Edit_Table(data) {
  //console.warn(JSON.stringify(data));
  let result = await myProxy.Edit_Table(data);
     if (result.ExceptionMsg != null) {
       //alert(JSON.stringify(result))
       return {Tables: result.My_Table }
      }
      else{
        alert('not done')
       // return {error: true }
       // alert("please try again")
      }
}
export async function  CHECKNET(id) {
 // console.warn(JSON.stringify(data));
 let oParams_Get_Product_By_OWNER_ID = new P.Params_Get_Product_By_OWNER_ID();
 oParams_Get_Product_By_OWNER_ID.OWNER_ID = id;
 let result = await myProxy.Get_Product_By_Where(
   oParams_Get_Product_By_OWNER_ID
   )
     if (result?.My_Result) {
       //alert('done')
       return {error: false }
      }
      else{
        return {error: true }
       // alert("please try again")
      }
}
export async function Get_Authenticate(id , username , password) {
  
  try{
    let oParams_Authenticate = new P.Params_Authenticate();
    oParams_Authenticate.OWNER_ID = id;
    oParams_Authenticate.USERNAME = username;
    oParams_Authenticate.PASSWORD = password;
    let result = await myProxy.Authenticate(
      oParams_Authenticate
      )
       if (result?.My_Result != null && result?.My_Result != undefined) {
        //alert('login successful')
        return {userData : result.My_Result, Error:'',isAuth:true}
      } 
      else{
        alert(result.ExceptionMsg)
       return {userData : null, Error: result.ExceptionMsg,isAuth:false}
      }
  }catch(error){
        alert(error)
  }
  
  
    
}

      
  // console.log('my result  :  ' + result);
  // return result;
  
   
 
  // .then((data) => {
  //   console.warn(
  //     "my daaaaaaaaaaaaaaaaaaataaaaaaaaaaaaaaaaaaaaa is"+
  //     data); 
  //   // this.setState(data);
  // }).catch((error)=>{
  //    console.warn(
  //     "my daaaaaaaaaaaaaaaaaaataaaaaaaaaaaaaaaaaaaaa is"+ 
  //     error);
  //   //  alert(error.message);
  // });
  // //   let newres = result.My_Result;
  // console.log(   "my daaaaaaaaaaaaaaaaaaataaaaaaaaaaaaaaaaaaaaa is"+result)
 
  //let newRes = [];
  // console.log('all answers by owner id' + JSON.stringify(result));

  //   if (result?.My_Result) {
  //     // console.log(result.My_Result);
  //     result.My_Result.map(x =>
  //       newRes.push({
  //         QUESTION_ID: x.QUESTION_ID,
  //         answer: x.DESCRIPTION,
  //         TEACHER_ID: x.TEACHER_ID,
  //         question: x.My_Question.DESCRIPTION,
  //         STUDENT_ID: x.My_Question.STUDENT_ID,
  //         CATEGORY_ID: x.My_Question.CATEGORY_ID,
  //         ANSWER_ID: x.ANSWER_ID,
  //       }),
  //     );
  //   }


// export async function Get_Answer_Details(QUESTION_ID) {

//     let oParams_Get_Answer_Details = new P.Params_Get_Answer_Details();
//     oParams_Get_Answer_Details.QUESTION_ID = QUESTION_ID;
//     let result = await myProxy.Get_Answer_Details(oParams_Get_Answer_Details);

//     if (result?.My_Result) {
//         // console.log(result.My_Result);

//         return result.My_Result;
//     }
// };
// export async function Get_Category_By_OWNER_ID(OWNER_ID) {

//     let oParams_Get_Category_By_OWNER_ID = new P.Params_Get_Category_By_OWNER_ID();
//     oParams_Get_Category_By_OWNER_ID.OWNER_ID = OWNER_ID;
//     let result = await myProxy.Get_Category_By_OWNER_ID(oParams_Get_Category_By_OWNER_ID);

//     if (result?.My_Result) {
//         console.log(result.My_Result);

//         return result.My_Result;
//     }
//     return result;
// };
// export async function Get_Question_By_OWNER_ID(OWNER_ID) {

//     let oParams_Get_Question_By_OWNER_ID = new P.Params_Get_Question_By_OWNER_ID();
//     oParams_Get_Question_By_OWNER_ID.OWNER_ID = OWNER_ID;
//     let result = await myProxy.Get_Question_By_OWNER_ID(oParams_Get_Question_By_OWNER_ID);

//     if (result?.My_Result) {
//         console.log(result.My_Result);

//         return result.My_Result;
//     }
//     return result;
// };
