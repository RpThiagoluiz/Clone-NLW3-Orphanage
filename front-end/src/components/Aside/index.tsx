import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import mapMarkerImg from "../../assets/img/MapMarker.svg";

import "./style.css";

const Aside = () => {
  const { goBack } = useHistory();

  return (
    <aside className="app-asidebar">
      <img src={mapMarkerImg} alt="Happy" />
      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  );
};

export default Aside;
