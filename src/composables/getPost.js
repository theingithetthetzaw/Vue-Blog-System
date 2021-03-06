import { ref } from '@vue/reactivity'
import {db} from "../firebase/config"

let getPost=(id)=>{
    let post= ref(null);

    let error= ref("");
    let load=async()=>{
        try{
            // await new Promise((resolve, reject)=>{
            //     setTimeout(resolve,2000)
            // })

            // let response= await fetch("http://localhost:3000/posts/" +id);
            // if(response.status===404){
            //     throw new Error("Not found that exact url");
            // }
            // let datas= await response.json();
            // post.value = datas;

            let doc= await db.collection("posts").doc(id).get()
            post.value = {id:doc.id,...doc.data()}
        }catch(err){
            error.value=err.message;
        }
        
    }
    return {post, error, load}

}

export default getPost;