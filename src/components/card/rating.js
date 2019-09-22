import React from 'react'
import logo7 from '../../assets/star-regular.svg';
import logo8 from '../../assets/star-solid.svg';


const Rating = ({count, onChangeRating = () =>{}}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml.push(<span onClick={()=>{onChangeRating(i+1)}} key={i}><img src={logo8}/></span>)
        }
        else {
            starsHtml.push(<span onClick={()=>{onChangeRating(i+1)}} key={i}><img src={logo7}/></span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}

Rating.defaultProps={
    count: 4
}
export default Rating;




