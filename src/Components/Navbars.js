import React from "react";
import "../Css/Navbar.css";
import arrow from "../Assets/arrow.png";
import profile from "../Assets/profile.png";
import Vector from "../Assets/Vector.png";
import esg from "../Assets/Ellipse.png";
import sea from "../Assets/search-icon.png";
import divide from "../Assets/divider.png";
import vec from "../Assets/vec.png";
import shoe from "../Assets/sho.png";
import { GiHamburgerMenu } from "react-icons/gi";
import imagep from "../Assets/image Product.png";
import { AiFillStar } from "react-icons/ai";
// import { Button } from 'bootstrap'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import switches from "../Assets/switch.png";
import bag1 from "../Assets/bg.png";
import blues from "../Assets/blueshow.png";
import blues2 from "../Assets/bluela.png";

import lo from "../Assets/lo.png";
import f from "../Assets/facebook.png";
import t from "../Assets/twitter.png";
import br from "../Assets/Brands.png";


export default function () {
  return (
    <div className="tam">
      <span className="en">EN </span>
      <img className="arr" src={arrow} /> <p className="US">USD</p>
      <img className="arr2" src={arrow} />
      <img className="pro" src={profile} /> <p className="my">My profile</p>
      <img className="cart" src={Vector} /> <img className="rou" src={esg} />
      <p className="to">2</p>
      <p className="it">Items</p>
      <p className="oo">$0.00</p>
      <img src={sea} className="se"></img>
      <img src={divide} className="divi" />
      <div className="bg"></div>
      <img src={vec} className="tri"></img>
      <div className="ecom">E-Comm</div>
      <div className="ho">Home</div>
      <div className="ba">BAGS</div>
      <div className="sn">SNEAKERS</div>
      <div className="be">BELT</div>
      <div className="co1">CONTACT</div>
      <div className="li"></div>
      <div className="hd">Home</div>
      <div className="sl"> / </div>
      <div className="dea">Deals</div>
      <div className="hot">
        <p className="hot1">Hot Deals</p>
        <div className="lit">
          <p>Nike</p>
          <p className="arib">Arimax</p>
          <p>Nike</p>

          <p>Vans</p>
          <p className="aal">All Stars</p>
          <p>Adidas</p>
        </div>
        <div className="cou">
          <div className="op">
            <p>2</p>
          </div>
          <p className="couadiarr">48</p>
          <div className="op">
                <p className="couadi">15</p>
            <p className="couall">23</p>
            <p className="couadiarr1">1</p>
            <p className="counik">95</p>
          </div>
        </div>
      </div>
      <div className="pri">
        <p className="PRI1">PRICES</p>
        <p className="lit2">Ranger:</p>
        <p className="cou2">$13.99 - $25.99</p>
      </div>
      <div>
        <div className="slider"></div>
        <input type="range" min="$10" max="$100"></input>
        <input type="range" min="$10" max="$100"></input>
      </div>
      <div className="colo">
        <p className="co">COLOR</p>
        <div className="blu"></div>
        <p className="blue"></p>
        <p className="or"></p>
        <p className="bla"></p>
        <p className="yel"></p>
        <p className="ros"></p>
        <p className="gol"></p>
      </div>
      <div className="hot231">
        <span>
          <p className="hot1">Brand</p>
          <p className="lit1">Nike</p>
          <p className="lite2">Nike</p>
          <p className="lit3">Adidas</p>
          <p className="lit4">Siemens</p>
        </span>

        <div className="coub1"> 99</div>
        <div className="coub2">
          <p>99</p>
        </div>
        <p className="coub3">99</p>
        <div className="coub4">
          <p>99</p>
          {/* <p>0001</p> */}
        </div>
      </div>
      <div className="but">
        <button className="butto">More</button>
      </div>
      <div className="adi">
        <img src={shoe} className="shoe1"></img>
        <p className="adit">Adidas Men Running</p>
        <p className="aditsa"> Sneakers</p>
        <p className="per">Performance and design. Taken right to the edge.</p>
        <p className="SHOP">SHOP NOW</p>
        <div className="line"></div>
      </div>
      <div className="lis">
        <p className="items13">13 Items</p>
        <p className="sort"> Sort By</p>
        <p className="naa">Name</p>
        <div className="na"></div> <img className="naar" src={arrow}></img>
        <div className="sho">Show</div>
        <div className="shna">
          <p className="twe"> 12 </p>
          <img className="twnaar" src={arrow}></img>
        </div>
        <img className="gih1" src={switches}></img>
        <div className="gih">
          <GiHamburgerMenu />
        </div>
        {/* ------ */}
        <img className="sh1" src={imagep}></img>
        <div className="hot31"><p className="hotp">HOT</p></div>
        <p className="nike">Nike Airmax 270 React</p>
        <div className="star">
          <AiFillStar />
          <span className="star1">
            <AiFillStar />
          </span>
          <span className="star2">
            <AiFillStar />
          </span>
          <span className="star3">
            <AiFillStar />
          </span>
          <span className="star4">
            <AiFillStar />
          </span>{" "}
        </div>
        <p className="rev">0 reviews</p>
        <p className="sub">Submit a review</p>
        <div className="imgline"></div>
        <div className="prip1">$299,43</div>
        <div className="prip2">$534,33</div>
        <div className="offer">24% Off</div>{" "}
      </div>
      <div>
        <p className="des1">
          Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
          mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
          leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl
          ut dolor ...
        </p>
        <div className="cart1"></div>
        <div className="a1">
          <AiOutlineShoppingCart />
        </div>
        <p className="a">Add To Cart</p>
        <div className="a2"></div>
        <p className="a3">
          <AiOutlineHeart />
        </p>
        <div className="img1l"></div>
        {/* 
   ----- */}
        <img className="bg1" src={bag1}></img>
        <div className="hot31sh2"><p className="hotpsh2">HOT</p></div>

        <p className="nike1">Nike Airmax 270 React</p>
        <div className="star2311">
          <AiFillStar />
          <span className="star11">
            <AiFillStar />
          </span>
          <span className="star23">
            <AiFillStar />
          </span>
          <span className="star34">
            <AiFillStar />
          </span>
          <span className="star45">
            <AiFillStar />
          </span>{" "}
        </div>
        <p className="rev1">0 reviews</p>
        <p className="sub1">Submit a review</p>
        <div className="imgline11"> </div>
        <div className="prip12">$299,43</div>
        <div className="prip23">$534,33</div>
        <div className="offer1198">24% Off</div>
        <div>
          <p className="des122">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
            mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
            nisl ut dolor ...
          </p>
          <div className="cart122"></div>{" "}
        </div>
        <div className="a122">
          <AiOutlineShoppingCart />
        </div>
        <p className="a111">Add To Cart</p>
        <div className="a233"></div>
        <p className="a344">
          <AiOutlineHeart />
        </p>
        <div className="img1l2"></div>
        <img className="bsho" src={blues}></img>
        <div className="hot31sh3"><p className="hotpsh3">HOT</p></div>

        <p className="nike1sho">Nike Airmax 270 React</p>
        <div className="star2311sh">
          <AiFillStar />
          <span className="star11sh">
            <AiFillStar />
          </span>
          <span className="star23sh">
            <AiFillStar />
          </span>
          <span className="star34sh">
            <AiFillStar />
          </span>
          <span className="star45sh">
            <AiFillStar />
          </span>{" "}
        </div>
        <p className="rev1sh">0 reviews</p>
        <p className="sub1sh">Submit a review</p>
        <div className="imgline11sh"> </div>
        <div className="prip12sh">$299,43</div>
        <div className="prip23sh">$534,33</div>
        <div className="offer1198sh">24% Off</div>
        <div>
          <p className="des122sh">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
            mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
            nisl ut dolor ...
          </p>
          <div className="cart122sh"></div>{" "}
        </div>
        <div className="a122sh">
          <AiOutlineShoppingCart />
        </div>
        <p className="a111sh">Add To Cart</p>
        <div className="a233sh"></div>
        <p className="a344sh">
          <AiOutlineHeart />
        </p>
        <div className="img1l2sh"></div>
        <img className="bshola" src={blues2}></img>
        <div className="hot31sh4"><p className="hotpsh3">HOT</p></div>

        <p className="nike1shola">Nike Airmax 270 React</p>
        <div className="starshl">
          <AiFillStar />
          <span className="star1shl">
            <AiFillStar />
          </span>
          <span className="star2shl">
            <AiFillStar />
          </span>
          <span className="star3shl">
            <AiFillStar />
          </span>
          <span className="star4shl">
            <AiFillStar />
          </span>
        </div>
        <p className="rev1shla">0 reviews</p>
        <p className="sub1shla">Submit a review</p>
        <div className="imgline11shla"> </div>
        <div className="prip12shla">$299,43</div>
        <div className="prip23sh">$534,33</div>
        <div className="offer1198sh">24% Off</div>
        <div>
          <p className="des122shla">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
            mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
            nisl ut dolor ...
          </p>
          <div className="cart122sh"></div>
        </div>
        <div className="cart122shla"></div>
      </div>
      <div className="a122shla">
        <AiOutlineShoppingCart />
      </div>
      <p className="a111shla">Add To Cart</p>
      <div className="a233shla"></div>
      <p className="a344shla">
        <AiOutlineHeart />
      </p>
      <div className="img1l2sh"></div>
      <div className="pagec"></div>
      <span className="pg">
        <p>1</p>{" "}
      </span>
      <p className="pg1">2</p>
      <p className="pgcl"></p>
      <p className="pg2">3</p>
      <p className="pg3">4</p>
      <p className="pg4">5</p>
      <div className="blueend">
        <img className="lo" src={lo}></img>
        <p className="lot">E-Comm</p>

        <p className="lop">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.Since the 1500s, when an unknown printer.
        </p>
        <p className="follo">Follow Us</p>
        <p className="folt">
          Since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <img className="fb" src={f}></img>
        <img className="tw" src={t}></img>
        <p className="con">Contact Us</p>

        <p className="cont">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>

        <p className="inf">Infomation</p>

        <p className="infd">
          About Us Infomation Privacy Policy Terms & Conditions
        </p>

        <p className="ser">Service</p>
        <p className="serd">About Us Infomation Privacy Policy Terms & Conditions</p>
      <p className="acc">My Account</p>
       <p className="serda">About Us Infomation Privacy Policy Terms & Conditions</p>
<p className="ouo">Our Offers</p>
<p className="ouod">About Us
Infomation 
Privacy Policy
Terms & Conditions</p>
<p className="lila"></p>


<p className="copy">© 2018 Ecommerce theme by www.bisenbaev.com</p>
<img className="br" src={br}></img>
      </div>
    </div>
  );
}



{/* <end></end> */}