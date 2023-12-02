interface Iprops {
    imageURL: string
    alt: string
    className: string
}

export default function Image({imageURL, alt, className}: Iprops) {
    return (
        <img src={imageURL} alt={alt} className={className} />
    )
}
