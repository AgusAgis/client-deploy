import React from "react";
import "./Paginado.css";

export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumbers = []

    for (let i = 0; i<Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i+1)
        }
        return(
           <div>
                    <ul className="pagination">
                    {pageNumbers?.map((number)=>(
                        <li key={number}>
                            <button className="pageLink" to ="/home"
                           onClick={() => paginado(number)}>{number}
                           </button>
                        </li>
                    ))}
                </ul>
            
            </div>
        );
};