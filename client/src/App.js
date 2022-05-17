import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import kep1 from './img/20190507PHT44968_original.jpg'
import {Eladas} from './components/Eladas';
import {Toplista} from './components/Toplista';
import {Stat} from './components/Stat'

function App() {
  return (
    <div className="container">
      <div className="jumbotron text-center bg-fej p-3">
        <h2>Európi Parlamaent</h2>
        <h3>Amit érdemes tudni a gépjárművek szén-dioxid-kibocsátásáról az EU-ban</h3>
      </div>
      <div className="row mt-2">
        <div className="col-md-8">
          <h2>
            <a target="blank" href="https://www.europarl.europa.eu/news/hu/headlines/society/20190313STO31218/
                    amit-erdemes-tudni-a-gepjarmuvek-szen-dioxid-kibocsatasarol-az-eu-ban#website-body"
            >Az autók a legfőbb szennyezők.</a>
          </h2>
          <p>
            A személyszállításból származó szén-dioxid-kibocsátás aránya jelentősen eltér az egyes közlekedési eszközöket tekintetében.
            A személygépjárművek a leginkább szennyezőek, az európai közúti közlekedésből adódó teljes szén-dioxid-kibocsátás 60,7 százalékáért felelősek.
            Az sem mindegy azonban, hogy hány utast szállít egy-egy autó: ha többet és nem egyedül utazik a sofőr, akkor a legkevésbé szennyező járművek közé tartozhat. Európában azonban átlagosan csupán
            <a href="https://core.ac.uk/download/pdf/82726264.pdf" target="blank">1,7 utast szállít egy autó</a>, így pedig más közlekedési eszközök, mint például a buszok, jelenleg kevésbé káros alternatívát jelentenek.
            Azt a kérdés viszont, hogy egy autó mennyi szén-dioxidot bocsájt ki, nemcsak használatuk közben kell feltennünk, hanem az előállításuk és szállításuk során is.
            Az elektromos autók előállítása és szállítása kevésbé környezetkímélő, mint a belsőégésű motorral rendelkező autóké, az elektromos gépjárművek
            szén-dioxid-kibocsátásának mértéke pedig annak megfelelően változik, hogyan állítják elő az elektromosságot.
            Ha azonban azt nézzük, hogy mennyi károsanyagot bocsátanak ki az autók a gyártásuktól a bontásukig, akkor az elektromos autók bizonyítottan környezetkímélőbbek,
            mint a benzinnel működők. Mivel a megújuló energiaforrásokból származó elektromosság használata várhatóan egyre növekszik a jövőben,
            az elektromos autók egyre kevésbé lesznek károsak a környezetre.
          </p>
        </div>
        <div className="col-md-4">
          <img src={kep1} alt="" />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-6">
        <Eladas />
        </div>
        <div className="col-md-6">
        <Toplista />
        </div>
      </div>

      <div className="row bg-info pb-3">
        <Stat />
      </div>
    </div>
  );
}

export default App;
