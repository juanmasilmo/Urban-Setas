import React from 'react';

const DiffComponent: React.FC = () => {
  return (
    <div className="diff aspect-video">
      <div className="diff-item-1">
        <img
          alt="mountains"
          src="https://cdn.flyonui.com/fy-assets/components/diff/image-1.png"
        />
      </div>
      <div className="diff-item-2">
        <img
          alt="flowers"
          src="https://cdn.flyonui.com/fy-assets/components/diff/image-2.png"
        />
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};

export default DiffComponent;
