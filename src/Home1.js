// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home1 = () => {

    const{data:blogs,isPending,error}=useFetch("http://localhost:8000/blogs");
    // const [name,setName]=useState('Anmol');
    // const [name1,setName1]=useState('Momo');


    
   
    return (
        
        <div className="home1"> 
        {error && <div> {error}</div>}
        {isPending&&<div>Loading....</div>}
           {blogs && <BlogList   blogs={blogs}  title="All Blogs" />}
            {/* <BlogList   blogs={blogs.filter((blog)=>blog.author==='Saurabh')}  title="Saurabh Blogs"/> */}
            {/* <button onClick={()=>setName('Rohan')}>Change Name</button>
            <p>{name}</p>
            <button onClick={()=>setName1('Samosa')}>Change Name2</button>
            {name1} */}

        </div>
        
      );
}
 
export default Home1;
