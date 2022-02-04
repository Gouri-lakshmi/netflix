
import './App.css';
import Row from './Row'
import requests  from './requests';
import Header from './Header';
import Banner from './Banner';
function App() {
  return (
    <div className="app">
     <Header/>
     <Banner/>
     <Row  isLargeRow={true}
     title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
     <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
     <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="TOPRATED MOVIES" fetchUrl={requests.fetchTopRated}/>
     <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrending}/>
     <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
     
    </div>
  );
}

export default App;
