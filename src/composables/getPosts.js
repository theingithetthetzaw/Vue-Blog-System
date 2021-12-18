import { ref } from '@vue/reactivity'
import {db} from "../firebase/config"

let getPosts=()=>{
    let posts= ref([]);
    let error = ref("");
    let load= async()=>{
      try{

        // await new Promise((resolve, reject)=>{
        //   //resolve();
        //   setTimeout(resolve,2000)
        // })
        // let response= await fetch("http://localhost:3000/posts")
        
        // if(response.status===404){
        //   throw new Error("not found url");
        // }

        // let datas = await response.json()
        // //console.log(datas)

        // posts.value=datas

        // let res=await db.collection("posts").get()
        // console.log(res);

        let res=await db.collection("posts").get()
        posts.value=res.docs.map((doc)=>{
           return {id:doc.id,...doc.data()}
           // console.log(doc.id);
        })
        // console.log(res.docs)     

      }catch(err){
        //console.log(error.message)

        error.value = err.message;
      }

    }

    return {posts, error, load};
}

export default getPosts;