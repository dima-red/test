import ContactList from "./components/ContactList/ContactList";
import Button from "./components/Button/Button";
import styles from './App.module.scss';

const App = () => {
    const post = () => {
        fetch('http://127.0.0.1:3000/',

        {
                test: 'DDDDDDDDDDDDD'
            },
            {
                toast: 'SSSSSSSSSSSSSSSS'
            }
        )

    };

  return (
    <div className={ styles.app }>
      <header className={ styles.appHeader }>
          <div className={ styles.logoWrapper }>
              <div className={ styles.appLogo }>DG</div>
          </div>
      </header>
      <main>
          <div className={styles.container}>
              <ContactList />
              <Button text={'BoooM'} cb={()=>post()} />
          </div>
      </main>
    </div>
  );
};

export default App;
