import { MapContainer, TileLayer } from "react-leaflet";

//Components
import Aside from "./../../components/Aside/index";

//Icons - styles
import { FiPlus } from "react-icons/fi";
import "./styles.css";
import CreateOrphanage from "./../../utils/onClickMark";

export default function OrphanagesMap() {
  return (
    <div id="page-create-orphanage">
      <Aside />
      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>
            <MapContainer
              center={[-16.7233712, -49.3376473]}
              zoom={15}
              style={{ width: "100%", height: 280 }}
              //Leaflet as update so... somethings is diferent, i try read documentacion and make my marke
              // but dont working - he is in utils. onClickMark.tsx
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
