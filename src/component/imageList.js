import React from 'react';
const ImageList = (props) => {
    const image = props.image.map(
        img => {
            return <img alt={img.description} key={img.id} src={img.urls.regular} />
        }
    )
    return (
        <div> {image}</div>
    )
}
export default ImageList