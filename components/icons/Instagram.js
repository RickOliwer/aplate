import * as React from "react";

function SvgInstagram(props) {
  return (
    <svg
      fill="none"
      height={23}
      width={23}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <pattern
        id="instagram_svg__a"
        height={1}
        patternContentUnits="objectBoundingBox"
        width={1}
      >
        <image
          height={33}
          transform="matrix(.0303 0 0 .03067 0 -.006)"
          width={33}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAACYUlEQVRYCc2WjU0dMRCEpwRKSAnpgHQQOggdkA6gg9ABKSEdQAfQASWQDgjfiTmNffad33v3pKx08tnenR3vj2WpL98l3Up6lPQm6f2IDzvswQFvWL5Kej7C4QhJcMFfFRiPgJ2qg5+m3FUE/kq6l/RN0kXTYnsRO+zBAS/J/6zNCVEqPEn6UiudOAcP3PRTpCZrAMW9JZ0lEfxOchXsCNmeESAV7iw7BD9Tg39lLZC7PeV3HJA0OCL4cVrwX+QJ5ltCsd1IeohW5pTMWc8ipvjsjNF7+PH6lH6HK5V6RDjJawAYKEcI+cQ4hcgfSVPYP4FZtw3+5wmLa3Jd6RqkN6K/Jmk3RIKTpRGFhROfmJF5Fhz63m+RSbwCvKVM6DIF5NC5rfVZr1uwp3sQiSwuTtoDNSH2MyKLm/FT8SAS2WZbeTYR9OwE+5Z4n3FWniYN7ZfQWctxmqJnJ76kcn/h18o9Elv7NbjnW3bFfjExQoynRgL7lhR+i0lD+7+oiewObreR7shbeJfuwGmmhDdjjwjr7Du62PV0rcM4G0yTRjpYympHj5P+iBuRfeYZAfTWuol9f/MPC2uSvW/jtXHrTknb4nbrhc7kOFmmJoH8z/5aBMDCj/W5XYu7fvQ9QbHRNSbEyJz1rYPgc/GeOOfLyhGsx8XLKt+YFNaeb8zaOXPws4Dnx47DSp5osXNK3cKzLwrJhWIie0cEvCSAn0UBZ22gQMh+SbocLLb5RPFDkWIPTqYA/N5NWjz/UTzX1yXgA4zcBceSG7lDzGMaqVpSxJsxn2uHEMAOe3DmLii8fEz+AV44xGy2H1SFAAAAAElFTkSuQmCC"
        />
      </pattern>
      <path d="M0 0h22.905v22.629H0z" fill="url(#instagram_svg__a)" />
    </svg>
  );
}

export default SvgInstagram;
