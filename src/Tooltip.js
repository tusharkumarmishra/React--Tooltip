import React from 'react';



class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                Thanks for hovering 😊 !! 
            </div>
        )
    }
}


export default Tooltip;