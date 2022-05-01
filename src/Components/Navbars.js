import React from 'react'
import '../Css/Navbar.css'
import arrow from '../Assets/arrow.png'
import profile from "../Assets/profile.png"
import Vector from "../Assets/Vector.png"
import esg from "../Assets/Ellipse.png"
import sea from "../Assets/search-icon.png"
import divide from "../Assets/divider.png"
import vec from "../Assets/vec.png"
import shoe from "../Assets/sho.png"




export default function() {
  return (
    <>
      <span className='en'>EN </span><img className='arr' src={arrow}/> <p className='US'>USD</p><img className='arr2' src={arrow}/>
      <img className='pro' src={profile}/> <p className='my'>My profile</p><img className='cart' src={Vector}/> <img className='rou' src={esg}/>
    <p className='to'>2</p>
    <p className='it'>Items</p>
    <p className='oo'>
      $0.00
    </p>
    <img src={sea} className="se" ></img>
    <img src={divide} className="divi" />
    <div className='bg'></div>
    <img src={vec} className="tri" ></img>
    <div className='ecom'>E-Comm</div>
    <div className='ho'>Home</div>
    <div className='ba'>BAGS</div>
    <div className='sn'>SNEAKERS</div>
    <div className='be'>BELT</div>
    <div className="co1">CONTACT</div>
    <div className='li'></div>
    <div className='hd'>Home</div>
    <div className='sl'> / </div>
    <div className='dea'>Deals</div>
    <div className='hot'>
      <p className='hot1' >Hot Deals</p>
      <div className='lit'>
      <p>Nike</p>
      <p className='ari'>Arimax</p>
      <p>Nike</p>
      <p>Vans</p>
      <p className='aal'>All Stars</p>
      <p>Adidas</p></div>
      <div className='cou'>
        <div className='op'>
        <p>2</p></div>
        <p className='ari'>48</p>
        <div className='op'><p>14</p>
        <p>15</p>
        <p>23</p>
        <p>1</p>
        <p>95</p></div>
      </div>
    </div>
    <div className='pri'>
      <p className='PRI1'>PRICES</p>
      <p className="lit2">Ranger:</p>
      <p className='cou2'>$13.99 - $25.99</p>
    </div>
    <div>
<div className='slider'></div>
    <input type="range" min= "$10" max="$100"></input>
    <input type="range" min= "$10" max="$100"></input></div>
    <div className='colo'>
      <p className='co'>COLOR</p>
     <div className='blu'></div> 
    <p className='blue'></p>
    <p className='or'></p>
    <p className='bla'></p>
    <p className='yel'></p>
    <p className='ros'></p>
    <p className='gol'></p></div>
    <div className='but'>
      <button className='butto'>More</button>
    </div>

    <div className='adi'>
      <img src={shoe} className="shoe1"></img>
      <p className='adit'>Adidas Men Running<br/>
        Sneakers</p>
        <p className='per'>Performance and design. Taken right to the edge.
        </p>
        <p className='SHOP'>SHOP NOW</p>
        <div className='line'></div>
    </div>

    <div className='lis'>
      <p className='items13' >13 Items</p>
      <p className='sort'> Sort By</p>


    </div>



































































    </>
  )
}
