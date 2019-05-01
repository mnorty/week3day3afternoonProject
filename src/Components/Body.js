import React,{Component} from 'react';
import FunctionBox from './FunctionBox'

export default class Body extends Component{

  render(){
    return(
      <div className={'Mother-container'}>
        <div className={'App-header'}>
          <h3 className={'Home'}>home</h3>
        </div>
        <FunctionBox/>
      </div>
    )
  }
}