import React, {useState,useEffect} from 'react';
import axios from 'axios';
import kep2 from '../img/europai-eladasok.png'

export const Eladas=()=>{
    const [eladasok,setEladasok]=useState([])
    const [selEv,setSelEv]=useState(0)
    const [selEladas,setSelEladas]=useState({})


    useEffect(()=>{
        const url="http://localhost:5000/eladas"
        fetchEladasok(url)
    },[])

    const fetchEladasok=async (url)=>{
        const resp=await axios.get(url)
        console.log(resp.data)
        setEladasok(resp.data)
    }

    const handleClick=()=>{
        console.log(selEv)
        let newArr=eladasok.filter(obj=>obj.ev==selEv)
        console.log(newArr[0])
        setSelEladas({ev:newArr[0].ev,elektromos:newArr[0].elektromos,hagyomanyos:newArr[0].hagyomanyos,novekedes:newArr[0].novekedes})
    }


    return(
        <>
            <div className="hatterszin p-3">
                <h2>Európában 140%-ot nőttek a villanyautó eladások</h2>
                <p>Alapvetően nem volt rossz az előző évek növekedése, de 2020 mindenképpen kimagaslóan jónak számít.
                    A 142% növekedés azt jelenti, hogy praktikusan két és félszer annyi tölthető autó fogyott mint egy évvel korábban,
                    ami döbbenetesen jó szám. Az eladások bőven átlépték a milliós küszöböt, sőt, az 1,36 millió eladott konnektoros autó közül
                    a 9 legnépszerűbb modell, valamint az összes eladások 54%-a tisztán elektromos volt.
                    <a href="https://villanyautosok.hu/2021/02/04/europaban-140-ot-nottek-a-villanyauto-eladasok-2020-ban/" _target="">Eredeti cikk</a></p>
                <p>
                    <img className="img-fluid border border-4 border-white-rounded" src={kep2} alt="" />
                </p>
            </div>
            <h3>Villanyautó eladások Európában</h3>
            <h6>A kiválasztott európai adatok jelennek meg. </h6>
            <select className="form-select" onChange={(e) => setSelEv(e.target.value)}>
                <option value="0">Válassz egy évet...</option>
                {eladasok.map(obj =>
                    <option key={obj.ev} value={obj.ev}>{obj.ev}</option>
                )}
            </select>
            <div className="btn btn-outline-secondary m-2" onClick={handleClick} >Adatok</div>

            {selEv!=0 &&
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Dátum</th>
                        <th>Elektromos</th>
                        <th>Hagyományos</th>
                        <th>Növekedés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selEladas.ev}</td>
                            <td>{selEladas.elektromos}</td>
                            <td>{selEladas.hagyomanyos}</td>
                            <td>{selEladas.novekedes}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </>
    )
}