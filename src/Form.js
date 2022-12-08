

const Form = (props) => {
  const title = props.data.title;
  const body = props.data.body;

  return (
    <div className="form">
      <div className="titleBar">
        <input className="title" type="text" placeholder="Title" onChange={props.data.handleChange} value={title}></input>
      </div>
      <div className="bodyArea">
        <input className="body" type="textarea" placeholder="What you have in mind..."
        onChange={props.data.handleChangeBody} value={body}></input>
      </div>
      <div className="submitBtn">
        <button type="submit" onClick={props.data.onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Form;
