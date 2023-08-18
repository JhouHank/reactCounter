import React, { Component } from 'react';
import Counter from './counter';

class TwoCounters extends Component {
    state = {
        wtf:[
            {id : 1, value77 : 0},
            {id : 2, value77 : 1},
            {id : 3, value77 : 5},
            {id : 4, value77 : 8}
        ]
    }
    handleDelete = (abc) =>{
        // console.log("刪除！");
        let newState = {...this.state};
        newState.wtf.splice(abc,1);
        this.setState(newState);
    }
    render() {
        return (
        <div className='container text-center'>
        <h1>Components</h1>
        {
            this.state.wtf.map( 
                (aaa, zxc) => <Counter 
                key={aaa.id} 
                value={aaa.value77}
                order={zxc} 
                onClick={this.handleDelete}/>
            )
        }
        </div>
        );
    }
}

export default TwoCounters;