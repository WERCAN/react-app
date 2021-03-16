import "./App.css";
import User from "./components/User";
import NavBar from "./components/NavBar";
import State from "./components/State";
import Selamla from "./components/Selamla";
import Form from "./components/Form";
import Kimlik from './components/Kimlik';
import Tema from './components/Tema';
import Sayac from "./components/Sayac";
import FunctionalEventHandling from "./components/FunctionalEventHandling";
import ClassEventHandling from "./components/ClassEventHandling";
import BindEtme from "./components/BindEtme";
import Parent from "./components/Parent";
import KosulluRender from "./components/KosulluRender";
import KitapList from "./components/KitapList";
import BasitForm from "./components/BasitForm";

function App() {
  return (
    <div className="App">
      

      <Selamla />

      <Form  title="props in class Component"/>

      <Kimlik name="Memo" country=" No country for old men"/>

      <Kimlik><p>Bu bir children elementidir</p></Kimlik>

      <Tema/>

      <Sayac/>

      <FunctionalEventHandling/>
      <ClassEventHandling/>

      <BindEtme/>

      <Parent/>

      <KosulluRender/>

      <KitapList/>

      <BasitForm/>

      <h4>App Component</h4>

      <hr />

      <User name="Muslum" job="IT diolar" salary="5000 USD" />

      <hr />
      <NavBar title="navbar title" />
      <hr />
      <State />
    </div>
  );
}

export default App;
