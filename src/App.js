import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import News from "./components/sections/News";
import News1 from "./components/sections/news/News1";
import News2 from "./components/sections/news/News2";
import News3 from "./components/sections/news/News3";
import News4 from "./components/sections/news/News4";
import Oliygohlar from "./components/sections/Oliygohlar";
import Grantlar from "./components/sections/Grantlar";
import Abituriyent from "./components/sections/Abituriyent";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact={true} path="/">
          <Section />
        </Route>
        <Route exact={true} path="/news">
          <News />
        </Route>
        <Route path="/news/news1">
          <News1 />
        </Route>
        <Route path="/news/news2">
          <News2 />
        </Route>
        <Route path="/news/news3">
          <News3 />
        </Route>
        <Route path="/news/news4">
          <News4 />
        </Route>
        <Route path="/oliygohlar">
          <Oliygohlar />
        </Route>
        <Route path="/grantlar">
          <Grantlar />
        </Route>
        <Route path="/abituriyent">
          <Abituriyent />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
