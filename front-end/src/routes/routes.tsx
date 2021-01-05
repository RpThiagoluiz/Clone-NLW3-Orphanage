import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import Landing from "../pages/Landing";
import OrphanagesMap from "../pages/OrphanagesMaps";
import Orphanage from "../pages/Orpahanage";
import CreateOrphanage from "../pages/CreateOrphanage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
