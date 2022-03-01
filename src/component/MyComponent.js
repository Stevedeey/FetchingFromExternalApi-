import React, {Component} from 'react';

class MyComponent extends Component{

    componentDidMount(){
        const apiUrl = 'https://api.github.com/users/onyetech/repos';
    
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data));

    }

    render(){
        return(
            <div>
                <h1> my component has mounted <br/> check the browser console</h1>
                
            </div>
        )
    }
}
export default MyComponent;
