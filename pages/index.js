import styles from '../styles/Home.module.css';
import Footer from './components/Footer';
import MainContainer from './components/MainConatiner';
import Appbar from './components/Navbar';
import Particle from './components/Particle';

export default function Home() {
  return (
    <>
      <Particle />
      <div className={styles.pop}>
        <Appbar />
        <h1 align="center">Hello, this is a particles setup</h1>

        <br />
        <MainContainer />

        <br />
        <Footer />
      </div>
    </>
  );
}
