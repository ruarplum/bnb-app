import React from 'react'
import Bnb from './components/Bnb'
import image1 from './components/images/img1.jpg'
import image2 from './components/images/img2.jpg'
import image3 from './components/images/img3.jpeg'
import userImg1 from './components/images/userImg1.png'
import userImg2 from './components/images/userImg2.jpg'
import userImg3 from './components/images/userImg3.png'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <header className="App-header">
        <h1>Air BnB</h1>
        <Bnb username = "Cheryl" userLocation = "US" userImg = {userImg1} review = {5} img = {image1}/>
        <Bnb username = "Charlie" userLocation = "UK" userImg = {userImg2} review = {4} img = {image2}/>
        <Bnb username = "John Wayne" userLocation = "CA" userImg = {userImg3} review = {3} img = {image3}/>
        
      </header>
    </div>
  );
}

export default App
