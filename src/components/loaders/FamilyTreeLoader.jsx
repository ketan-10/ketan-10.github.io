import React from 'react';
import ContentLoader from 'react-content-loader';

const FamilyTreeLoader = () => {
  const width = Math.min(window.innerWidth,600);
  const height = 300;
  return (
    <div className="map-container">
      <ContentLoader
        width={width}
        viewBox={`0 0 ${width} ${height}`}
        speed={2}
        backgroundColor="var(--green)"
      >
        <circle cx={0.4 * width} cy={height / 2} r="5" />
        <circle cx={0.5 * width} cy={height / 2} r="5" />
        <circle cx={0.6 * width} cy={height / 2} r="5" />
      </ContentLoader>
    </div>
  );
};

export default FamilyTreeLoader;
