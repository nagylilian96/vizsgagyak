import React, { useState, useEffect } from 'react';
import axios from 'axios';
import kep4 from '../img/eu_world.png'

export const Stat = () => {
    const [osszadat,setOsszAdat]=useState({})
    const [reszladatok,setReszlAdatok]=useState([])

    useEffect(()=>{
        const url="http://localhost:5000/statisztika"
        fetchOsszadat(url)
    },[])

    const fetchOsszadat=async (url)=>{
        const resp=await axios.get(url)
        console.log(resp.data)
        setOsszAdat(resp.data)
    }

    const handleClick=()=>{
        const url="http://localhost:5000/reszletesadatok"
        fetchreszladatok(url)
    }

    const fetchreszladatok= async (url)=>{
        const resp=await axios.get(url)
        console.log(resp.data)
        setReszlAdatok(resp.data)
    }

    return (
        <>
            <h3 className="w-100 text-center">BEV és PHEV modellek aránya összes eladott személyautóhoz képest
                <div className="w-100">Európa - 2014-2020</div></h3>
            <div className="col-md-6">
                <img className="img-fluid border border-4 border-white-rounded" src={kep4} alt="" />
            </div>
            <div className="col-md-6">
                <ul className="list-group">
                    <li className="list-group-item">Európai összesen (e-autó): {osszadat.europai} db</li>
                    <li className="list-group-item">Világpiac összesen (hagyományos): {osszadat.vilagpiaci}</li>
                    <li className="list-group-item">Európai piac aránya: {osszadat.arany} %</li>
                    <li className="w-100 btn btn-primary" onClick={handleClick}>Részletes adatok</li>
                    {reszladatok.length > 0 &&
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Eladás éve</th>
                                    <th>Elektromos</th>
                                    <th>Hagyományos</th>
                                    <th>E-autók aránya</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reszladatok.map(obj =>
                                    <tr key={obj.ev}>
                                        <td>{obj.ev}</td>
                                        <td>{obj.elektromos} db</td>
                                        <td>{obj.hagyomanyos} db</td>
                                        <td>{obj.arany} %</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    }
                </ul>
            </div>
        </>
    )
}