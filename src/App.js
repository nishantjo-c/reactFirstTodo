import Logo from './Logo';
import Form from './Form';
import Blogs from './Blogs'
import {useState, useEffect} from 'react';

let copyData = []

function App() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [arr, setArr] = useState([]);

    const handleChange = (props) =>{
      setTitle(props.target.value);
    }

    const handleChangeBody = (props) => {
      setBody(props.target.value);
    }


    const onSubmit = (props) => {
      let obj = {}
      let arr1 = []
      // console.log(arr);

      obj['title'] = title;
      obj['body'] = body;
      obj['id'] = copyData.length + 1;

      // arr1.push(obj)
      copyData.push(obj);
      // console.log(copyData);
      setArr(arr1);
    }

  return (
    <div className="App">
      <Logo />

        <div className="inputForm">
          <Form data={{title, body, handleChange, handleChangeBody, onSubmit}}/>
        </div>

        <div className="blogList">
          <Blogs data={copyData}/>
        </div>

    </div>
  );
}

export default App;
