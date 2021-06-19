import './index.css'

const CardItem = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <div className={`${className} banner-card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={`${title}-img`} />
      </div>
    </div>
  )
}

export default CardItem
