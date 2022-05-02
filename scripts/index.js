// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
//https://masai-mock-api.herokuapp.com/news?q=tesla

let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("search_input").value;
        searchnews(value).then((data)=>{
            let show=document.getElementById("results")
            show.innerHTML=null
            append(data,show);
            

        })
       
        

    }
}
document.getElementById("search_input").addEventListener("keydown" ,search);

let searchnews=async()=>{
    let query=document.getElementById("search_input").value;
   // console.log(query)
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data =await res.json();
        
       console.log(data);
        return data;


    }
    catch(err){
        console.log(err)
    }
    


}

//let show=document.getElementById("results")

let append =(data,show)=>{
    data.articles.forEach(({title,description,urlToImage}) =>{
        let image=document.createElement("img")
        image.src=urlToImage;
        let h2=document.createElement("h2")
        h2.innerText=title;
        let p=document.createElement("p")
        p.innerText=description;

       

    
        
       //var a= document.getElementById("results")
       show.append(image,h2,p);

    });
   
    
    
};
