import ReactRoundedImage from "react-rounded-image";

function RoundedImage({photo, color, width, height, size, radius}) {
    return (
        <ReactRoundedImage image={photo} 
        roundedColor={color}
        imageWidth={width}
        imageHeight={height}
        roundedSize={size}
        borderRadius={radius}/>
    )
}

export default RoundedImage;