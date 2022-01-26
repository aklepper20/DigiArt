import React from "react";

function PopUpCard({ name, img, description, price, nftSymbol, openSeaLink }) {
  return (
    <div id="popup1" className="overlay">
      <div className="popup">
        <h2>{name}</h2>
        <hr className="hr-1" />
        <div className="content">
          <div className="topImg">
            <img src={img} alt="" />
          </div>
          <div className="description">
            <div className="info-table">
              <div className="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Price</th>
                      <th>Symbol</th>
                      <th>OpeanSea</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    <tr>
                      <td>ETH: {price}</td>
                      <td>{`N/A` || `${nftSymbol}`}</td>
                      <td>
                        <a
                          rel="noreferrer"
                          href={`${openSeaLink}`}
                          target="_blank"
                        >
                          Make Offer
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="popup-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PopUpCard;
