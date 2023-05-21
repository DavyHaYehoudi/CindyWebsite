import React from 'react';

function ImageParagraph({ imageSrc, imageAlt, imagePosition, paragraphText }) {
  return (
    <section className={`image-paragraph ${imagePosition}`}>
      <img src={imageSrc} alt={imageAlt} />
        <div className="cadre-paragraph containerText" dangerouslySetInnerHTML={{ __html: paragraphText }}></div>
    </section>
  );
}

export default ImageParagraph;
