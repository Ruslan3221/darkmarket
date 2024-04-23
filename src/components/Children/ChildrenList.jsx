import ChildrenCard from "./ChildrenCard";

import { useState, useEffect } from "react";

import Loading from "../Loading";
import Error from "../Error";


function ChildrenList(){

    const [childrens, setChildrens] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchChildren(){
            try{
                setIsLoading(true);
                const res = await fetch(
                    "https://66278bf6b625bf088c08c0b3.mockapi.io/childrenSaleApi/1/product"
                );
                const data = await res.json();

                setChildrens(data);


            } catch(e) {

                setIsError(true);

            } finally{
                setIsLoading(false)
            }
        }
        fetchChildren();
    }, []);



    return(
        <div className="container_my" id = 'cards'>
				<h2 className = 'afisha'>Choice your children!</h2>
				<hr/>
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{isLoading ? (
                        <Loading/>
                    ) : (childrens.map((children) => <ChildrenCard children={children} key={children.id} />))
                        
                    }
                    {isError && <Error/> }

				</div>
		</div>	
    );
}
export default ChildrenList