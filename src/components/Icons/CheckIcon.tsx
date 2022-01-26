import React from "react";
import Icon from "@ant-design/icons";

const CheckIcon = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="8"
      viewBox="0 0 10 8"
    >
      <g>
        <g>
          <path
            fill="#ffdf50"
            d="M9.713.286a1.119 1.119 0 0 1 0 1.48l-5.398 5.92a.896.896 0 0 1-1.35 0L.268 4.726a1.119 1.119 0 0 1 0-1.48.896.896 0 0 1 1.35 0l2.024 2.22L8.364.286a.896.896 0 0 1 1.35 0z"
          />
          <path
            fill="#ff801a"
            d="M9.713.286a1.119 1.119 0 0 1 0 1.48l-5.398 5.92a.896.896 0 0 1-1.35 0L.268 4.726a1.119 1.119 0 0 1 0-1.48.896.896 0 0 1 1.35 0l2.024 2.22L8.364.286a.896.896 0 0 1 1.35 0z"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default (props: any) => <Icon component={CheckIcon} {...props} />;
