

function ChildrenCard({ children }){
    return(
        <div className="col">
            <div className="card_custom shadow-lg" id="card">
                <div className="img-custom">
                    <img className="my_img" src={children.image} height="240px" width="240px" alt="children"/>
                </div>
                <div className="card_name">
                    <p>
                        {children.name}
                    </p>
                    <span className="price">
                        {children.price}&#36;
                    </span>
                    <button id="Buy" className="butn"><i className="fa-solid fa-cart-shopping"></i></button>
                </div>	
            </div>
        </div>
    );
}
export default ChildrenCard