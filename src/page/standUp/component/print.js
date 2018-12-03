import React from 'react';

class print extends React.Component {
    render() {
        if(this.props.temperature>=100){
            return (<h4>到达沸点，马上沸腾了。。。。</h4>)
        }else{
            return (<h4>还没到沸点呢，再等等吧。。。</h4>)
        }
    }
}

export default print;