import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import {useNavigate} from 'react-router-dom';

const BlogDetails = () => {
    const { id }=useParams();
    const {data,isPending,error}=useFetch('http://localhost:8000/blogs/'+id);
    const navigate=useNavigate();
    const deleteHandle=()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/');
            console.log('deleted')

        })
    }
    
    return ( 
        <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data &&
        <div>
            <article>{data.title}</article>
            <p>Author:{data.author}</p>
            <p>Author:{data.author}</p>

            <label>{data.body}</label>
        </div>}
        <div>
            <button className="btn_add" onClick={deleteHandle}>Delete Blog</button>
        </div>


        </div>
     );
}
 
export default BlogDetails;