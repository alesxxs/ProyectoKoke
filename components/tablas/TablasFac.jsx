import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Table } from 'react-bootstrap';
import Fac from '../tablas/Fac';


const Tabla = () => {

    const DivGeneral = styled.div`
        margin-top: 18rem;
    `;

    const DivSegundo = styled.div`
        width: 60%;
        margin: auto;
    `;

    const [ resultados, guardarResultado ] = useState([]);


    useEffect(() => {
            
        const consumoDatos = async () => {
            const url = `http://localhost:4000/api/invoices`;
            const resultado = await axios.get(url);
            //guardarResultado(resultado.data);

            
                
                    guardarResultado(resultado.data);
                   
                
           
            
        
        }
        consumoDatos();
    }, [])

   
  

    return ( 
        <>
        <DivGeneral>
            <DivSegundo>
                <Fac 
                    resultados={resultados}
                />
            </DivSegundo>
        </DivGeneral>
        </>
     );
} 
 
export default Tabla;