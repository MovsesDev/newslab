import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { catsAPI } from './api/api';
import { setCats } from './redux/catReducer';
import axios from 'axios';
import Categories from './components/Categories';

function App(props) {

const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=${pageSize}&page=1&category_ids=1`).then(res => {
      console.log(res.data.map(d => d.url))
      props.setCats(res.data.map(d => d.url))
    })
  },[pageSize])

  

  return (
    <div>
      {props.cats.map(cat => <div> <img src={cat}/> </div>)}
      <button onClick={() => setPageSize(pageSize + 10)}>Add pics</button>
    </div>
  );
}

let mapStateToProps = state => ({
  cats: state.cat.images
})


export default connect(mapStateToProps, {setCats})(App);
