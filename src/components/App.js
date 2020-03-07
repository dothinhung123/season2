import React from 'react';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component{
    state={lat:null,errorMessage:null}
    renderList(){
        window.navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({lat:position.coords.latitude})
        },(err)=>{this.setState({errorMessage:err.message})})
        if(this.state.lat && !this.state.errorMessage){
            return <div><SeasonDisplay latitude={this.state.lat}></SeasonDisplay></div>
        }
        else if(!this.state.lat && this.state.errorMessage){
            return <div>{this.state.errorMessage}</div>
        }
        else {
            return <div>Loading...</div>
        }
    }
    render(){
        
        return(
            <div>
                    {this.renderList()}
            </div>
        )
    }
}
export default App