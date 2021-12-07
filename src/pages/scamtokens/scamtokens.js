import { useState } from 'react';

import data from './tokenlist.json';

function displayFav(id) {
  document.getElementById("like_" + id).style.display = "block";
}
function hideFav(id) {
  document.getElementById("like_" + id).style.display = "none";
}

function ScamTokens () {
  const [ certified, setCertified ] = useState(true);

  return (
    <div className="page-content">
      <div className="scamtokens">
        <div className="advert">
          <img src="/images/scamtoken/advert.jpg" alt="advert" />
        </div>
        <div class="input-group" style={{display: 'flex', alignItems: 'center'}}>
          <input type="text" placeholder="Token name and Contract address" class="form-control" id="inlineFormInputGroup" style={{backgroundColor: '#1f1f1f', width: '300px'}}/>
          <div class="input-group-prepend">
            <div class="input-group-text" style={{height: '34px', padding: '9px 4px', backgroundColor: '#d3d3d3'}}><i className="fa fa-search"></i></div>
          </div>
        </div>
        <ul className="coins-table-category" style={{marginBottom: 0, paddingInlineStart: 0, overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
          <li id="premium-click" className={certified ? "active" : ""} style={{'marginTop': '5px'}}> <a style={{'cursor': 'pointer'}} onClick={() => setCertified(true)}><i className="fas fa-star active"></i>Scamed Tokens</a></li>
          <li id="audit-click" style={{'marginTop': '5px'}} className={certified ? "" : "active"}><a id="a_audited_coins" style={{'cursor': 'pointer'}} onClick={() => setCertified(false)}><i className="fas fa-check"></i>Certified Tokens</a></li>
        </ul>
        <div className="premium-table" id="premium-coins-table" style={{display: "block"}}>
          <div className="coin-row info">
            <div className="coin-column info">

            </div>
            <div className="coin-column info">

            </div>
            <div className="coin-column-title info">
              Address
            </div>
            <div className="coin-column-title info">
              Since launch
            </div>
            <div className="coin-column info">
              Votes
            </div>

            <div className="coin-column info">
              Rank
            </div>
          </div>
          {certified ?
            data.scamed.map((item, index) => (
              <div key={index} className={index % 2 === 0 ? "coin-table-0 redirect-coin" : "coin-table-1 redirect-coin" }>
                <div className="redirect-coin app-hide" data-href="#">
                  <div className="app-hide">
                    <a onMouseOut={() => hideFav(index)} onMouseOver={() => displayFav(index)} id={"like_"+index} className="app-hide btn btn-primary btn-vote favorite-btn" style={{"display": "none", position: "absolute", minWidth: "30px", marginTop: "15px"}}>
                      <img className="app-hide" src='/images/scamtoken/empty_coeur.png' width="16px" height="16px" />
                    </a>
                  </div>
                </div>
                <div className="coin-row coin-row-s" onMouseOut={() => hideFav(index)} onMouseDown={() => displayFav(index)} onMouseOver={() => displayFav(index)}>
                  <div className="coin-column redirect-coin">
                    <a href="#">
                      <img style={{marginLeft: "-2px", height: "45px", width: "45px", margin: "auto"}} alt="DOGEDI" src={item.avatar} height="45" width="45" className="img-rounded logo-coin" />
                    </a>
                    <div></div>
                  </div>
                  <div className="coin-column redirect-coin" data-href="#">
                    <p className="titre-coin">
                      <a style={{color: "rgb(233 207 135) !important"}} href="#">{item.name}</a>
                    </p>
                  </div>
                            
                  <div className="coin-column-title redirect-coin" data-href="#">
                    {item.hash}
                  </div>

                  <div className="coin-column-title redirect-coin">
                    <a href="#">
                      <p>Launch Day</p>
                    </a>
                  </div>

                  <div className="coin-column">
                      <a href="#" className="btn btn-default btn-vote-twitter" style={{"width": "fit-content",
                        height: "fit-content",
                        padding: 0,
                        color:"#fff",
                        display: "inline-table",
                        marginLeft: "3px"}}><i className="fas fa-fire"></i> 0</a>
                  </div>
                  <div className="coin-column redirect-coin">
                    <img id="rang" className="star_highlight" alt="star" src="/images/scamtoken/star.png" height="30" width="30" style={{margin: 'auto'}}/>
                  </div>
                </div>
              </div>
            ) )
            : data.certificated.map((item, index) => (
              <div key={index} className={index % 2 === 0 ? "coin-table-0 redirect-coin" : "coin-table-1 redirect-coin" }>
                <div className="redirect-coin app-hide" data-href="#">
                  <div className="app-hide">
                    <a onMouseOut={() => hideFav(index)} onMouseOver={() => displayFav(index)} id={"like_"+index} className="app-hide btn btn-primary btn-vote favorite-btn" style={{"display": "none", position: "absolute", minWidth: "30px", marginTop: "15px"}}>
                      <img className="app-hide" src='/images/scamtoken/empty_coeur.png' width="16px" height="16px" />
                    </a>
                  </div>
                </div>
                <div className="coin-row coin-row-s" onMouseOut={() => hideFav(index)} onMouseDown={() => displayFav(index)} onMouseOver={() => displayFav(index)}>
                  <div className="coin-column redirect-coin">
                    <a href="#">
                      <img style={{marginLeft: "-2px", height: "45px", width: "45px", margin: "auto"}} alt="DOGEDI" src={item.avatar} height="45" width="45" className="img-rounded logo-coin" />
                    </a>
                    <div></div>
                  </div>
                  <div className="coin-column redirect-coin" data-href="#">
                    <p className="titre-coin">
                      <a style={{color: "rgb(233 207 135) !important"}} href="#">{item.name}</a>
                    </p>
                  </div>
                            
                  <div className="coin-column-title redirect-coin" data-href="#">
                    {item.hash}
                  </div>

                  <div className="coin-column-title redirect-coin">
                    <a href="#">
                      <p>Launch Day</p>
                    </a>
                  </div>

                  <div className="coin-column">
                      <a href="#" className="btn btn-default btn-vote-twitter" style={{"width": "fit-content", height: "fit-content", padding: 0, color:"#fff", display: "inline-table", marginLeft: "3px"}}><i className="fas fa-fire"></i> 0</a>
                  </div>
                  <div className="coin-column redirect-coin">
                    <img id="rang" className="star_highlight" alt="star" src="/images/scamtoken/star.png" height="30" width="30" style={{margin: 'auto'}}/>
                  </div>
                </div>
              </div>
            ) )
          }
        </div>
      </div>
      
    </div>
  )
}

export default ScamTokens;