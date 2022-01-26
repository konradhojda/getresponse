import React from "react";
import Icon from "@ant-design/icons";

const WorkoutIcon = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 122.88 46.83"
    xmlSpace="preserve"
    width="24"
    height="14"
  >
    <g>
      <path
        fill="#b6b6b6"
        d="M122.88,35.96h-6.76V11.33h6.76V35.96L122.88,35.96z M24.61,20.29h73.56v6.26H24.61V20.29L24.61,20.29z M114.81,46.83h-12.69V0h12.69V46.83L114.81,46.83z M20.64,46.83H7.95V0h12.69V46.83L20.64,46.83z M6.63,35.96H0V11.33h6.63V35.96 L6.63,35.96z"
      />
    </g>
  </svg>
);

export default (props: any) => <Icon component={WorkoutIcon} {...props} />;
