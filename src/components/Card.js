import React from 'react'

const Card = ({elem}) => {
    return (
        <div className="card">
            <div className="image-cropper">
                <img src={elem.image} alt="problem?" className="profile-pic"/>
            </div>
            <div>
                <p><strong>{elem.name}</strong></p>
                <p style={{color:"grey"}}>{elem.age}</p>
            </div>  
        </div>
    )
}

export default Card
