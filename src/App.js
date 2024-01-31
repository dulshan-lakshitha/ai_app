import logo from './logo.svg';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([])

  
  useEffect(() =>{
    //get api implement
    const url = "http://assessment.immensa.io/Assessline"
    fetch(url, {
      headers:{
        copanyId:'4235342523526236423'
      }
    })
    .then(response => response.json()).then(json => {
      console.log("jsonnn", json)
      setData(json)
    }).catch(e => {
      console.log("e", e)
    })
  }, [])

  const handleData = (e) => {
    console.log(e.target.value)
    setData(e.target.value)

  }
     //post
  const postPutEvent = () => {
    // const data = {
    //   id:'12123def',
    //   Description:'luluiu',
    //   part:'lelkcolkel'
    // }
    const url = "http://localhost:4000/Assessline"
    fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body:JSON.stringify(data)
    })
    .then(response => {
      console.log("response",response)
      if(response == 200) {
        alert("success")
      }else{
        alert("faild")
      }
    }).catch(e => {
      console.log("e", e)
    })
  }



  return (
  <div className="App">
    <header id="header-section">
      <nav class="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
      <div class="container">
        
        <img src={require('./image.png')} height={100} width={600}/>
        {/* <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="mdi mdi-menu navbar-toggler-icon"></span>
        </button>  */}
      
      {/* <div class="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
        
        </div> */}
      </div> 
      </nav>   
    </header>
  <div class="banne" >
    <div class="container ">
      <div style={{display: "grid", height: "80vh",}} class="basecontainer">
      <h1 class="font-weight-semibold text-white">AI ASSESSMENT<br/>Feedback System.</h1>
      {/* <h6 class="font-weight-normal text-muted pb-3">Simple is a simple template with a creative design that solves all your marketing and SEO queries.</h6> */}
 
      <input  type='text' class="text-center col-12" onChange={(e) => handleData(e)} placeholder='Enter the Description'></input>
     
      <div style={{paddingTop:"25px", paddingBottom: "75px"}}  class="row justify-content-around align-items-center">
        <button onClick={postPutEvent} class="btn btn-opacity-info btn-lg" >ACCESS</button>
      </div>

          

      {/* <img src="images/Group171.svg" alt="" class="img-fluid"> */}
    </div>
    </div>
  </div>
    </div>
  );
}

export default App;
