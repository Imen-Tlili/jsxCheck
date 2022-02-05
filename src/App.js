import "./style.css"
import mySourceImage from "./imageInSrc.jpg"
import './App.css';

function App() {
  return (
    <div className="App" style={{border:'solid 1px black', maxWidth:'100vw'}}>
    

      <h1 className="titleRed">Your name here</h1>

      <br/>
      <img src={mySourceImage} alt="mySourceImage" width= '500' className='image'/>
      

      <img src="/imageInPublic.jpg"  width= '500' alt="myPublicImage" className='image'/>
      <br/>   
  

<video width="800" height="400" controls>

<source src="myVideo.mp4" type="video/mp4"/>

</video>



</div>
  );
}

export default App;
