import React from 'react';

function ImageParagraph({ imageSrc, imageAlt, imagePosition, paragraphText }) {
  return (
    <div className={`image-paragraph ${imagePosition}`}>
      <img src={imageSrc} alt={imageAlt} />
        <div className="cadre-paragraph containerText" dangerouslySetInnerHTML={{ __html: paragraphText }}></div>
    </div>
  );
}

export default ImageParagraph;
