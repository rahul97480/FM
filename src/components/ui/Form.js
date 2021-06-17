import React,  {useState} from 'react'
import './form.css'

const Form = () => {
  const [img, setimg] = useState("")
  const [portrayed, setportrayed] = useState("")
  const [nickname, setnickname] = useState("")
  const [birthday, setbirthday] = useState("")
  const [status, setstatus] = useState("")

  function saveUser(){
    console.log({img,portrayed,nickname,birthday,status});
    let data = {img,portrayed,nickname,birthday,status}

    const mybasicfunction = () => {
      setimg("")
      setportrayed("")
      setnickname("")
      setbirthday("")
      setstatus("")
    }

    fetch("http://localhost/FamilyMan/post",{
      mode: 'no-cors',
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)

    }).then((result)=>{
      console.log("result",result);
    })
    mybasicfunction()
  }

    return (
      <div ><h1 className="center white">Add a New Caste</h1><br /><br />
          <label className ="white">Image</label>
          <input type="text" id="img" name="img" value={img} onChange={(e) => setimg(e.target.value)}/><br /><br />
          <label className ="white" >Portyared</label>
          <input type="text" id="portrayed" name="portrayed" value={portrayed} onChange={(e) => setportrayed(e.target.value)}/ ><br /><br />
          <label className ="white" >Nickname</label>
          <input type="text" id="nickname" name="nickname" value={nickname} onChange={(e) => setnickname(e.target.value)} / ><br /><br />
          <label className ="white" >Birthday</label>
          <input type="date" className="center" id="birthday" name="birthday" value={birthday} onChange={(e) => setbirthday(e.target.value)}  /><br /><br />
          <label className ="white">Staus</label>
          <input type="text" id="status" name="status" value={status} onChange={(e) => setstatus(e.target.value)}  /><br /><br />
          <input type="submit" name="submit" value="Submit" onClick={saveUser}></input>
        
      </div>
    )
  }

export default Form
