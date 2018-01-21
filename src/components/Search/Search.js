import React, {Component} from 'react';
import stateListData from './stateList.json'
import './Search.css';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedTypeAndState: {}
        }
        this.handleSelectedOptions = this.handleSelectedOptions.bind(this)
    }

    handleSelectedOptions() {
        console.log(this.selectedType.value, this.selectedState.value)
        this.selectedType.value && this.selectedState.value 
        ? 
        this.setState({
            selectedTypeAndState: {type: this.selectedType.value, state: this.selectedState.value}
        }) 
        : null
    }

  render() {
    var stateList = stateListData.map(e => {
        return (
                <option key={e.name} value={e.abbreviation}>{e.name}</option>
        )
    })

    return (
     <div>
        <div className='searchContainer'>
            <select ref={select => this.selectedType = select}>
                <option value=''>Select Type</option>
                <option value='Representatives' >Representative</option>
                <option value='Senators'>Senator</option>
            </select>
            <select ref={select => this.selectedState = select}>
                <option value=''>Select State</option>
                {stateList}
            </select>
            <button onClick={this.handleSelectedOptions}>Submit</button>
         </div>

      </div>
    );
  }
}