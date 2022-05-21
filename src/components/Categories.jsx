import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { setCategories } from "../redux/categoriesReducer"
const Categories = (props) => {

useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/categories').then(data => {
        console.log(data.data)
        props.setCategories(data.data)
    })
}, [])

    return (
        <div>
            <h1>Click any of them</h1>
            {props.categories.map(c => <div id ={c.id}><Link to="/cats">{c.name}</Link></div>)}
        </div>
    )
}

let mapStateToProps = state => ({
    categories: state.categories.categories
})

export default connect(mapStateToProps, {setCategories})(Categories)
