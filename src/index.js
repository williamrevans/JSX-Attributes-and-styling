import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1502767705602-P34YV2BMBOWRXOKB7Z7W/ke17ZwdGBToddI8pDm48kKDKtHioz13A6gTD6cP2SJZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ooWhOa5cxQSJsU3rXf8luX33ZLveKUc0IfIDXzCtWBDa4GLkaq2lSHIaS7p2YxCXg/tacotown.jpg?format=2500w"
      ></img>
      <img
        className="food-img"
        src="https://bloximages.chicago2.vip.townnews.com/niagara-gazette.com/content/tncms/assets/v3/editorial/f/0b/f0b3e6f3-04ef-54d3-9821-c0bd0f78470a/53ed02ad06403.preview-620.jpg?crop=620%2C349%2C0%2C33&resize=1200%2C675&order=crop%2Cresize"
      ></img>
      <img
        className="food-img"
        src="https://cdn.cdkitchen.com/recipes/images/2016/05/5209-6233-mx.jpg"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
