import React from 'react'

export default function RecommendedCourse({ image }) {
    return (
        <div className="recommended">
            <img src={image} alt='recommend' />
            <div>
                <h4>UI/UX design</h4>
                <h2>Architecture II</h2>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
        </div>
    )
}
