import { useState } from 'react';

function SocialModal() {
  const [ show, setShow ] = useState(false);

  return (
    <>
      {
        show ? (
          <div id="custom-sidebar-right" className="app-hide-1">
            <a className="hidebtn-right" href="#" id="togglebtn-right" onClick={()=> setShow(false)}><span style={{fontSize: "23px"}} className="fa fa-minus-square" id="toggle-icon-right"></span></a>
            <h3 className="sidebar-content maintitle"><span className="title" style={{color: "#211f1f"}}>Join us!</span></h3>
            <p className="sidebar-content navbar-social">
              <a style={{color: "#129bd0"}} href="https://t.me/coinvotecc"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fab fa-telegram-plane fa-stack-1x fa-inverse"></i></span></a>
              <a style={{color: "#00acee"}} href="https://twitter.com/CoinvoteCC"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fab fa-twitter fa-stack-1x fa-inverse"></i></span></a>
              <a style={{color: "#82338e"}} href="https://www.instagram.com/coinvotecc"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fab fa-instagram fa-stack-1x fa-inverse"></i></span></a>
            </p>
          </div>
        ) : (
          <div id="custom-sidebar-right" className="app-hide-2">
            <a className="hidebtn-right" href="#" id="togglebtn-right" onClick={()=> setShow(true)}><span style={{fontSize: "23px"}} className="fa fa-plus-square" id="toggle-icon-right"></span></a>
          </div>
        )
      }
    </>
  )
}

export default SocialModal;