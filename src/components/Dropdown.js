import React, { useState, useEffect, useRef } from 'react';
import { StyledDropdown } from './styles/Dropdown.styled';

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (scrollHeight === null) {
      if (content.scrollHeight !== 0) {
        setScrollHeight(content.scrollHeight);
      } else {
        return;
      }
    }
  }, [children]);

  const updateIsOpen = (openStatus) => {
    setIsOpen(!openStatus);
  };

  return (
    <StyledDropdown scrollHeight={scrollHeight}>
      <div ref={contentRef} className={`content ${isOpen ? 'isOpen' : ''}`}>
        {children}
      </div>
      <div className="toggler">
        <div onClick={() => updateIsOpen(isOpen)} className="button">
          <span>{isOpen ? 'Show less' : 'Show more'}</span>
          <span className={`${isOpen ? 'isOpen' : ''}`}></span>
        </div>
      </div>
    </StyledDropdown>
  );
};

export default Dropdown;
