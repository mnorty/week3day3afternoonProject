import React,{Component} from 'react';

export default class Body extends Component{

  render(){
    return(
      <div className={'Mother-container'}>
        <div className={'App-header'}>
          <h3 className={'Home'}>home</h3>
        </div>
        <div className={'Info-box'}>
          <div className={'White-box'}>yo</div>
          <div className={'Links-bar'}>
            <button className={'Previous-button'}> {'< previous'}</button>
            <div className={'Edit-delete-new'}>
              <button className={'Button'} id={1}>edit</button>
              <button className={'Button'} id={2}>delete</button>
              <button className={'Button'} id={3}>edit</button>
            </div>
            <button className={'Next-button'}>{'next >'}</button>
          </div>
        </div>
      </div>
    )
  }
}