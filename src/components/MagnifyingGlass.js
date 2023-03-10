import React from 'react';

const MagnifyingGlass = ({ color }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 581 581"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        xmlnsserif="http://www.serif.com/"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        fill={color}
      >
        <path
          d="M566.759,566.801c-17.93,17.803 -47.294,17.803 -65.223,-0l-141.312,-141.311c-38,25.178 -82.589,38.611 -128.174,38.611c-127.299,-0 -232.05,-104.752 -232.05,-232.051c-0,-127.299 104.751,-232.05 232.05,-232.05c127.299,0 232.051,104.751 232.051,232.05c-0,45.585 -13.433,90.174 -38.611,128.174l141.269,141.312c17.83,17.934 17.83,47.331 0,65.265Zm-264.766,-162.456c70.447,-28.472 116.806,-97.212 116.806,-173.195c0,-102.478 -84.327,-186.806 -186.805,-186.806c-102.479,0 -186.806,84.328 -186.806,186.806c0,102.479 84.327,186.806 186.806,186.806c0.01,-0 0.02,-0 0.03,-0c23.971,0.038 47.721,-4.585 69.927,-13.611l0.042,-0Z"
          fillRule="nonzero"
        />
      </svg>
    </>
  );
};

export default MagnifyingGlass;
