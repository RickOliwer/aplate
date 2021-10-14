import * as React from "react";

function SvgLinkedin(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#linkedin_svg__pattern0)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="linkedin_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#linkedin_svg__image0" transform="scale(.02941)" />
        </pattern>
        <image
          id="linkedin_svg__image0"
          width={34}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABSUlEQVRYCe1WjRGBMQx9IxjBKEawARswgg2MYAQjMIJN2IB7p6m00h+HnDvNnWuapsnz2qQfcJc5gAOAM4Br0GdhzW0gCCa3fq5gjgUQBMY1N7GYEBuPyk0kqTVe3FAE+i0QtLkezc9cVrJPMPz3PAphwrViPK/Af+eaAFgA2IUuza69B7ACMK1RU6oa2rVsOpof75s8FaW4Wx1U66UNrwJZVoDmOcjWk+ROeq6da4y0WNAxRWe8RGTBGrVjDYi1t8eW3Jnahm8DWesEnwZyAkD2ONZicy15RmrOGnDP0bBqtLBDS8e28iQvvOUgNh20BSShWW1sVVN0laTWGJ0C3ZYPba1PhtI+2qN0OTWAJGcdIz+UrhxdTgNIKL0HufeSLLE3jiZnpsYIe0nur+eRdW3M9ej0xmUdQDSL1AcjgxFW2kfKN6fSfX4D2bMuBL1beskAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

export default SvgLinkedin;
