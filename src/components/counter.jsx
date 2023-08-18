import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
        // count: this.props.value  // 注意這邊不是value77
    }
    handleIncrement = () => {
        this.setState({count:this.state.count +1});
    }
    render() {
        return (
        <div>
            <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
            <button className='btn btn-primary m-2' onClick={this.handleIncrement}>增加</button>
            <button 
            className='btn btn-danger m-2' 
            onClick={() =>{ this.props.onClick(this.props.order)}}>刪除</button>
        </div>
        );
    }
    
    getBadgeClasses(){
        let classes = "badge m-2 fs-3 fw-bold bg-";
        classes += this.state.count === 0 ? "warning" : "success";
        return classes
    }

    formatCount(){
        const { count } = this.state;
        return (count === 0) ? "Zero" : count;
    }
}

export default Counter;