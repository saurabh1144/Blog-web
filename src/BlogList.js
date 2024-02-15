import {Link} from 'react-router-dom';
const BlogList = ({ blogs, title }) => {
  // const blogs=props.blogs;
  // console.log(blogs);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="preview-blog" key={blog.id}>
        <Link to={`/detail/${blog.id}`}>
          <h3>{blog.title}</h3>
          <label> Written By: {blog.author}</label>
          <br></br>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
