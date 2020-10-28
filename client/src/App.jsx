import ContactList from "./components/ContactList/ContactList";
import styles from "./App.scss";

const App = () => {
    console.log(styles);
  return (
    <div className={ styles }>
      <header className="appHeader">
          <div className="logoWrapper">
              <div className="appLogo">DG</div>
          </div>
      </header>
      <main>
          <ContactList />
      </main>
    </div>
  );
};

export default App;
