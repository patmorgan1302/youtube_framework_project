import React from 'react';
import ReactDOM from 'react-dom';
import App from './componants/App';

ReactDOM.render(<App />, document.querySelector('#root'))

import React from 'react'; 
import ReactDOM from 'react-dom';
import Search from './componants/Searchbar'
import CharacterList from './componants/character_list';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        characters: [],
        }
    }

    componentDidMount(){
        this.fetchedData();
    }

    fetchedData(){
        fetch('https://www.potterapi.com/v1/characters?key=$2a$10$DGbEmapYD7p3LyvAGF3zke0SKd.xPGOBPJTDsK4pOo82wI3FdcNPC')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                characters : data
            });
            console.log(data)
            })
            .catch(err => err.message('gayyo'))
            };
    
        
        render(){
            return(
            <ul className="bl">
                <Search onSubmit={this.onSearchSubmit}/>
                <CharacterList characters={this.state.characters}/>
            </ul>)}};

    
ReactDOM.render(<App />, document.querySelector('#root'))






