import React, {useState}  from 'react'


export default function Form(props) {

    const upcase = () => {
        console.log('button clicked');
        let newtext = text.toUpperCase();
        setText(newtext);
    }


    const dcase = (e) => {
        console.log('down clicked');
        setText(e.target.value);
    }

const [text, setText] = useState('Enter Text Here')

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={dcase} id="mybox" rows="12"></textarea>
      </div>
      <button className="btn btn-primary bg-blue" onClick={upcase}>Convert to UpperCase</button>
    </div>
  )
}