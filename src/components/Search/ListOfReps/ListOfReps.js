import React, {Component} from 'react';
import axios from 'axios';
import RepInfo from './RepInfo/RepInfo';


export default class ListOfReps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stateRepList: [],
            selectedInfo: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.options.type === 'Representatives'){
            axios.get(`http://localhost:3000/representatives/${nextProps.options.state}
            `).then(response => {
                this.setState({
                    stateRepList: response.data.results
                })
            })
        } else if(nextProps.options.type === 'Senators') {
            axios.get(`http://localhost:3000/senators/${nextProps.options.state}`).then(response => {
                this.setState({
                    stateRepList: response.data.results
                })
            })
        }

        this.setState({
            selectedInfo: []
        })
    }

    getSelectedInfo(index) {
        var info = this.state.stateRepList.filter((e, i) => {
             return i === index;
         })
         info[0].firstName = info[0].name.split(' ')[0]
         info[0].lastName = info[0].name.split(' ')[1]
         this.setState({
             selectedInfo: info[0]
         })
     }


  render() {
    const repList = this.state.stateRepList.map((e, i) => {
        return (
            <div key={i} onClick={() => this.getSelectedInfo(i)}>
                <p>{e.name}</p>
                <p>{e.party[0]}</p>
            </div>
        )
    })

    return (
        <div>
         <div>
            <h1>List / {this.props.options.type}</h1>
            <div>
                <p>Name</p>
                <p>Party</p>
            </div>
             {repList}
         </div>
         <RepInfo selectedInfo={this.state.selectedInfo}/>
      </div>
    );
  }
}