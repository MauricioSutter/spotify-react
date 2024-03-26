import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';



function App() {

  const [displayResults, setDisplayResults] = useState([])
  
  const [resultplaylist, setResultPlaylist] = useState('');
  const [resultartist, setResultArtist] = useState('');
  const [cardasoferta, setCardsOferta] = useState('');

  const buscaPorArtistas = (resultadoBusca) =>{

    if (resultadoBusca !== ""){

      const url = `http://localhost:3030/artists?name_like=${resultadoBusca}`;
      fetch(url)
      .then((response) => response.json())
      .then(  
        (result) => setDisplayResults(result),
        setResultPlaylist('none'),
        setResultArtist('block'),
        setCardsOferta('none')
        );
    } else {
      setResultPlaylist('block');
      setResultArtist('none');
      setCardsOferta('block')
    }  

  } 


  return (    
    <div>
      <Sidebar/>
      <Header cardsBusca={resultadoBusca => buscaPorArtistas(resultadoBusca)}/>
      <Main resultplaylist={resultplaylist} resultartist={resultartist} cardsoferta={cardasoferta} retornoArtistas={displayResults}/>      
      <Footer/>
    </div>
  );

}

export default App;
