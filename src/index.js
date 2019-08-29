import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom'


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {
                    name:"",
                    description:"",
                    forks:"",
                    owener:{
                        login:""
                    }
                }
            ],
        }
    }
    getData=()=>{
        // var api='https://api.github.com/search/repositories?q=stars:%3E=500&sort=stars&order=desc';
        var api='http://127.0.0.1:8080/about'       
        axios.get(api).then((response)=> {
            this.setState({
                list:response.data.items
            })
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <h1>axios获取数据</h1>
                <ul>
                    {
                        this.state.list.map( (value,key) =>{
                           return(
                           <li key={key}>{value.name}</li>
                           )
                        })
                    }
                </ul>
                <hr/>
            </div>
        )
    }
    componentDidMount() {
        this.getData();
    }
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
  