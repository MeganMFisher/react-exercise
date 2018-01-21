import React, {Component} from 'react';
import stateListData from './stateList.json';
import ListOfReps from './ListOfReps/ListOfReps';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedTypeAndState: {}
        }
        
        this.handleSelectedOptions = this.handleSelectedOptions.bind(this)
    }

    handleSelectedOptions() {
        if(this.selectedType.value && this.selectedState.value){
            this.setState({
                selectedTypeAndState: {type: this.selectedType.value, state: this.selectedState.value}
            })
        }        
    }

  render() {
    var stateList = stateListData.map(e => <option key={e.name} value={e.abbreviation}>{e.name}</option>)

    return (
     <div>
        <div className='selectContainer'>
            <select ref={select => this.selectedType = select}>
                <option value=''>Select Type</option>
                <option value='Representatives' >Representative</option>
                <option value='Senators'>Senator</option>
            </select>
            <select ref={select => this.selectedState = select}>
                <option value=''>Select State</option>
                {stateList}
            </select>
            <div onClick={this.handleSelectedOptions}>Submit</div>
         </div>
        <ListOfReps options={this.state.selectedTypeAndState}/>
      </div>
    );
  }
}