

const Blogs = (props) => {
// console.log(props.data);
  return (
      <ul className="blogList1">
        {props.data.map((todo) =>
          (<li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
            </li>)
        )}
      </ul>
  )
}

export default Blogs;
