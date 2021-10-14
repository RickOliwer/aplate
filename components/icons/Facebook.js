import * as React from "react";

function SvgFacebook(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#facebook_svg__pattern0)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="facebook_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#facebook_svg__image0" transform="scale(.0077)" />
        </pattern>
        <image
          id="facebook_svg__image0"
          width={130}
          height={130}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgFacebook;
