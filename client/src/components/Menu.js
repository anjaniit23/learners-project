import React from 'react';

const Menu = ({items}) => {
    return (
        <div class = "row align-items-center justify-content-center row-cols-1 row-cols-md-2 g-4">
             {items.map((item) => {
                 const {id,title,img,desc,price}= item;
                 return (
                    <div class = "col">
                     <div class= "card mt-4">
                         <div class="row">
                            <div class = "col-md-5 ml-2">
                                <img src={img} class="img-fluid" alt={title} />
                            </div>
                            <div class = "col-md-7">
                                <div class="hea">
                                    <h5 class="card-title mt-2">{title}</h5>
                                     <h5 className="price">{price} </h5>
                                 </div>
                                 <p class="card-text">{desc}</p>  
                                 <div class="he"> 
                                <button type="button" class="btn btn-outline-primary">Order Now</button>
                                <button type="button" class="btn btn-outline-primary">Cart</button>
                                </div>
                             </div>
                        </div>
                    </div>
                    </div>
                 );
             })};
        </div>
        
    );
};

export default Menu;