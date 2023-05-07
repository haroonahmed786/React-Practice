import React, { useState } from "react";
import card1 from "../../images/img_1.jpg";
import card2 from "../../images/img_2.jpg";
import card3 from "../../images/img_3.jpg";
import card4 from "../../images/img_4.jpg";
import card5 from "../../images/img_6.jpg";
import card6 from "../../images/img_7.jpg";
import leftside1 from "../../images/img_8.jpg";
import leftside2 from "../../images/img_9.jpg";
import Downloadcon from "../../images/img_11.png";
import subleft from "../../images/img_20.jpg";
import Img1 from "../../images/img_11.jpg";
import Img2 from "../../images/img_12.jpg";
import Img3 from "../../images/img_13.jpg";
import Img4 from "../../images/img_14.jpg";
import Img5 from "../../images/img_15.jpg";
import Moviescard1 from "../../images/gallery_1.jpg";
import Moviescard2 from "../../images/gallery_2.jpg";
import Moviescard3 from "../../images/gallery_3.jpg";
import Moviescard4 from "../../images/gallery_4.jpg";
import Moviescard5 from "../../images/gallery_5.jpg";
import Moviescard6 from "../../images/gallery_6.jpg";
import Moviescard7 from "../../images/gallery_7.jpg";
import Moviescard8 from "../../images/gallery_8.jpg";
import Moviescard9 from "../../images/gallery_9.jpg";
import Moviescard10 from "../../images/gallery_10.jpg";
import { InputField } from "../Common/InputField/InputField";
import { CheckBox } from "../Common/CheckBox/CheckBox";
export const HomePage = () => {
  const [name, setName] = useState("")
  console.log("name is", name)
  return (
    <div class="Main-Container">
      <div class="Header">
        <h1>THE MOVIES HOME</h1>
        <h3><i>Set back|relax|watch</i></h3>
      </div>
      <div class="Nav-Bar">
        <div class="Num1">
          <h2>Watch</h2>
        </div>
        <div class="Num2">
          <h2>Download</h2>
        </div>
        <div class="Num2">
          <h2>Gallery</h2>
        </div>
      </div>
      <div class="container1">
        <div class="left-side">
          <div class="card1">
            <img src={card1} alt="" />
            <h1>Fight Club</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
          </div>
          <div class="card2">
            <img src={card2} alt="" />
            <h1>The Jack Sparrow</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
          </div>
          <div class="card3">
            <img src={card3} alt="" />
            <h1>The Good The Bad And The Ugly</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliquatempor .</p>
          </div>
          <div class="card4">
            <img src={card4} alt="" />
            <h1>Sherlock Holmes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
          <div class="card5">
            <img src={card5} alt="" />
            <h1>The Joker</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
          </div>
          <div class="card6">
            <img src={card6} alt="" />
            <h1>Impossible Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem         ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt       ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
          </div>
          <div class="heading1"><h1>Watch Today</h1></div>
          <div class="watch-con1">
            <div class="left-side1">
              <img src={leftside1} alt="" />
            </div>

            <div class="right-side1">
              <div class="heading2">
                <h1>Baby Driver</h1>
              </div>
              <div class="list-items">
                <ul>
                  <li>2017</li>
                  <li>121min</li>
                  <li>action</li>
                  <li>7.7</li>
                  <li>8:30pm</li>
                </ul>
              </div>
              <div class="paragraph">
                <p>Baby Driver is a 2017 action crime film written and directly by Edgar Wright.
                  It stars Ansel Elgort,Kevin Spacey,Lily James,Eiza Gonzalez,Jon Hamm,
                  Jamie Foxx and Jon Benthal</p>
              </div>
              <p1><u>read more</u></p1>
            </div>
          </div>
          <div class="watch-con2">
            <div class="left-side2">
              <img src={leftside2} alt="" />
            </div>
            <div class="right-side2">
              <div class="heading3">
                <h1>Baby Driver</h1>
              </div>
              <div class="list-items">
                <ul>
                  <li>2017</li>
                  <li>121min</li>
                  <li>action</li>
                  <li>7.7</li>
                  <li>8:30pm</li>
                </ul>
              </div>
              <div class="paragraph">
                <p>Baby Driver is a 2017 action crime film written and directly by Edgar Wright.
                  It stars Ansel Elgort,Kevin Spacey,Lily James,Eiza Gonzalez,Jon Hamm,
                  Jamie Foxx and Jon Benthal</p>
              </div>
              <p1><u>read more</u></p1>
            </div>
          </div>
          <div class="Download"><h1>Download Now</h1></div>
          <div class="Download-con">
            <img src={Downloadcon} alt="" />
          </div>
          <div class="Download-con1">
            <div class="sub-left">
              <img src={subleft} alt="" />
            </div>
            <div class="sub-con">
              <div class="box1">
                <div class="Head">
                  <h3>Genre:</h3>
                </div>
                <div class="para">
                  <h4>adventure,romance,action,horror</h4>
                </div>
              </div>
              <div class="box2">
                <div class="Head1">
                  <h3>Cast:</h3>
                </div>
                <div class="Img">
                  <img src={Img1} alt="" />
                  <img src={Img2} alt="" />
                  <img src={Img3} alt="" />
                  <img src={Img4} alt="" />
                  <img src={Img5} alt="" />
                </div>
              </div>
            </div>
            <div class="sub-right">
              <h1>8.7</h1>
              <h4>(1200-rating)</h4>
              <h4>(6 second)</h4>
            </div>
          </div>
          <div class="Movies"><h1>Movies Gallery</h1></div>
          <div class="Movies-con">
            <div class="Movies-card1">
              <a href="images/gallery_1.jpg" data-lightbox="image">
                <img src={Moviescard1} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card2">
              <a href="images/gallery_2.jpg" data-lightbox="image">
                <img src={Moviescard2} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card3">
              <a href="images/gallery_3.jpg" data-lightbox="image">
                <img src={Moviescard3} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card4">
              <a href="images/gallery_4.jpg" data-lightbox="image">
                <img src={Moviescard4} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card5">
              <a href="images/gallery_5.jpg" data-lightbox="image">
                <img src={Moviescard5} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card6">
              <a href="images/gallery_6.jpg" data-lightbox="image">
                <img src={Moviescard6} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card7">
              <a href="images/gallery_7.jpg" data-lightbox="image">
                <img src={Moviescard7} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card8">
              <a href="images/gallery_8.jpg" data-lightbox="image">
                <img src={Moviescard8} alt="" height="300px" /> </a>
            </div>
            <div class="Movies-card9">
              <a href="images/gallery_9.jpg" data-lightbox="image">
                <img src={Moviescard9} alt="" height="300px" />  </a>
            </div>
            <div class="Movies-card10">
              <a href="images/gallery_10.jpg" data-lightbox="image">
                <img src={Moviescard10} alt="" height="300px" /> </a>
            </div>
          </div>
          <div className="Container">
          <div className="item1"><img src={Moviescard1} alt="" height="90px" width="100px" /></div>
          <div className="item2"><img src={Moviescard2} alt="" height="90px" width="100px" /></div>
          <div className="item3"><img src={Moviescard3} alt="" height="90px" width="100px" /></div>
          <div className="item4"><img src={Moviescard4} alt="" height="90px" width="100px" /></div>
          <div className="item1"><img src={Moviescard5} alt="" height="90px" width="100px" /></div>
          <div className="item2"><img src={Moviescard6} alt="" height="90px" width="100px" /></div>
          <div className="item2"><img src={Moviescard7} alt="" height="90px" width="100px" /></div>
          <div className="item2"><img src={Moviescard8} alt="" height="90px" width="100px" /></div>
        
          </div>
        </div>
        <div class="right-side">
          <div class="sub-right-con">
            <h2>Your's-Information</h2>
            <div class="sub-right-con1">

              <InputField label="Name:" placeholder="Your-Name" onChange={(value) => setName(value)} />
              <InputField label="F/N:" placeholder="Your-Address" /><br />
              <InputField label="Age:" placeholder="Your-Age" />
            </div>
          </div>
          <div class="sub-right-con2">
            <h2>Your's-Address</h2>
            <div class="sub-right-con3">
              <InputField label="Country:" placeholder="Your-Country" onChange={(value) => setName(value)} />
              <InputField label="City:" placeholder="Your-City" /><br />
              <InputField label="Town:" placeholder="Your-town" />
            </div>
          </div>
          <div class="sub-right-con4">
            <h2>Qualification</h2>
            <div class="sub-right-con5">
              <InputField label="Matric:" placeholder="Your-Matric-Marks" onChange={(value) => setName(value)} />
              <InputField label="FSC:" placeholder="Your-FSC-Marks" /><br />
              <InputField label="Becholr:" placeholder="Your-Becholr-GPA" />
            </div>
          </div>
          <div class="sub-right-con6">
            <h2>Contact-Me</h2>
            <div class="sub-right-con7">
              <InputField label="Your's Name:" placeholder="Your-Name" onChange={(value) => setName(value)} />
              <InputField label="Your's F/N:" placeholder="Your-Address" /><br />
              <InputField label="Your's Age:" placeholder="Your-Age" />
            </div>
          </div>
          <div class="sub-right-con8">
            <h2>Movies-Categories</h2>
            <div class="sub-right-con9">
              <CheckBox label="cricket" /><br />
              <CheckBox label="fishing" /><br />
              <CheckBox label="gym" />
            </div>
          </div>
          <div class="sub-right-con10">
            <h2>Login-Form</h2>
            <div class="sub-right-con11">
              <InputField label="Name:" placeholder="Your-Name" onChange={(value) => setName(value)} />
              <InputField label="F/N:" placeholder="Your-Address" /><br />
              <InputField label="Age:" placeholder="Your-Age" />
              <InputField label="Email:" placeholder="Your-Email" /><br /><br />
              <div className="check1">
                <CheckBox label="cricket" />
                <CheckBox label="fishing" />
                <CheckBox label="gym" /><br /><br /><br />
              </div>
              <label>Discription </label><textarea rows="8" cols="20"></textarea><br /><br />

            </div>

          </div>
          <div className="sub-right-con10">
            <di className="grid"><h4>Movies Gallery</h4></di>
             <div className="grid-container">
            <div className="grid-item">  <img src={card1} alt="" height="120px" width="200px" /></div>
            <div className="grid-item"> <img src={card2} alt="" height="120px" width="200px" /></div>
            <div className="grid-item"> <img src={card3} alt="" height="120px" width="200px" /></div>
            <div className="grid-item"> <img src={card4} alt=""  height="120px" width="200px" /></div>
            <div className="grid-item"> <img src={card5} alt=""  height="120px" width="200px"/></div>
            <div className="grid-item"> <img src={card6} alt=""  height="120px" width="200px"/></div>
          </div>
          </div>
          
        </div>
      </div>
      <div class="footer">
        Flex-box (challenge) Made by Haroon Ahmed!
      </div>


    </div>
  )



}