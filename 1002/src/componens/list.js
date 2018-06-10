import React from 'react' // 引入依赖
export default class ComponentList extends React.Component{
  render(){
    return (
      <div>
        <h2>这是列表页面{this.props.params.id}</h2>
      </div>
    )
  }
}