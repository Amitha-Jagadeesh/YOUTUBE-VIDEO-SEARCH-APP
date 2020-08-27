import React from 'react'
import App from '../../App'

class SearchBar extends React.Component{
    state={
        value:''
    }
    handleChange = (event)=>{
        this.setState({
            value:event.target.value
        })
    }
    hanldeSubmit = (event)=>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.value)

    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form className = 'ui form' onSubmit = {this.hanldeSubmit}>
                    <div className = "field" style={{float:'left', marginRight:'20px'}}>
                        <label style={{display:'block'}}>Video Search</label>
                        <input type='text' style={{display:'block',width:'300px'}} value = {this.state.value} onChange = {this.handleChange} name='text' placeholder='Search videos'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar