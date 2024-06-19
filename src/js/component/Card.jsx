import React from "react";

function Card() {
    return  (<div className="card" style={{width: "18rem"}}>
                <img src="https://ih1.redbubble.net/image.5157302827.0256/st,small,845x845-pad,1000x1000,f8f8f8.jpg" class="card-img-top"></img>
                <div class="card-body">
                    <h5 class="card-title">Its a Drake Title</h5>
                    <p class="card-text">This a Drake Card in a Drake World</p>
                    <a href="#" class="btn btn-primary">Go Draking Somewhere</a>
                </div>
            </div>)
    }
export default Card;