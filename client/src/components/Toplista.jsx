import React, {useState,useEffect} from 'react';
import axios from 'axios';
import kep3 from '../img/europai-eladasok-tipus.png'

export const Toplista=()=>{
    const [tipusok,setTipusok]=useState([])
    const [selTipus,setSelTipus]=useState('0')
    const [selTipusok,setSelTipusok]=useState([])

    useEffect(()=>{
        const url="http://localhost:5000/toplista"
        fetchTipusok(url)
    },[])

    const fetchTipusok=async (url)=>{
        const resp=await axios.get(url)
        console.log(resp.data)
        setTipusok(resp.data)
    }
    const handleClick=()=>{
        console.log(selTipus)
        const url=`http://localhost:5000/toplista/${selTipus}`
        fetchSelTipusok(url)
    }
    const fetchSelTipusok=async (url)=>{
        const resp=await axios.get(url)
        console.log(resp.data)
        setSelTipusok(resp.data)
    }

    return(
        <>
        <div className="hatterszin p-3">
            <h2>Az európai piac toplistája</h2>
            <p>...A lista első helyét a Renault Zoe vette át. A francia kisautó frissített tartalommal, nagyobb aksival, DC villámtöltéssel 
            és vonzó árral szállt harcba, és kétszer annyi fogyott belőle, mint egy évvel korábban. Ár/hatótáv arányban, itthon is nehéz lett 
            volna jobb vételt ajánlani. A Zoénál jóval drágább, nagyobb és erősebb Tesla Model 3 egy helyet visszaesve a második lett tavaly. 
            A cég első, harmadik és negyedik negyedéves eladásai nagyjából hozták a 2019-es számokat, de a fremonti gyár koronavírus miatti 
            lezárása 40%-os csökkenést eredményezett a második negyedévben..."</p>
            <p>
            <img className="img-fluid border border-4 border-white-rounded" src={kep3} alt="" />
            </p>
            </div>
            <h3>Toplista</h3>
            <h6>Válassza ki, melyik jelentős szerepló adatiat szeretné látni:</h6>
            <select className="form-select" onChange={(e) => setSelTipus(e.target.value)}>
                <option value="0">Válasszon e-autó típust...</option>
                {tipusok.map(obj =>
                    <option key={obj.id} value={obj.id}>{obj.nev}</option>
                )}
            </select>
            <div className="btn btn-outline-secondary m-2" onClick={handleClick} >Adatok</div>
            {selTipusok.length>0 &&
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Név</th>
                        <th>Mennyiség</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selTipusok.map(obj=>
                            <tr>
                                <td>{obj.nev}</td>
                                <td>{obj.mennyiseg} db</td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            }
        </>
    )
}