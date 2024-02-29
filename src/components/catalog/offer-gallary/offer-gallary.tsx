type OfferGallaryProps = {
  images: string[];
}

export default function OfferGallary({ images }: OfferGallaryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images && images.map((img) => (
          <div className="offer__image-wrapper" key={img}>
            <img className="offer__image" src={img} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
