import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('');
    const[isPending,setisPending]=useState(false);
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        setisPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("Data Posted")
            setisPending(false);
            
            navigate('/');
        })

    }

    return ( 
        <div className="create">
        <h2>Add New Blogs</h2>
        <form onSubmit={handleSubmit}>
        <div className="col-6">
            <label>Blog Title</label>
            <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Blog Content</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        </div>
        <div>
            <label>Author</label>
            <select required value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value='saurabh'>Saurabh</option>
                <option value='micky'>Micky</option>
                <option value='virat'>Virat</option>
                <option value='yoshi'>Yoshi</option>
            </select>
        </div>
        <div >
            {!isPending && <button className="btn_add" >Add Blog</button>}
            {isPending && <button className="btn_add" disabled >Adding Blog.....</button>}
        </div>
        </form>
       

        </div>
     );
}
 
export default Create;