import styled from "styled-components";
import { Steps } from "antd";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSteps = styled(Steps)`
  .ant-steps-item {
    flex: unset;
  }

  .ant-steps-item-container {
    .ant-steps-item-icon {
      margin-left: 0;
      top: 0;
      width: 9px;
      height: 2px;
    }
  }

  .ant-steps-item-content {
    display: none;
  }

  .ant-steps-item-tail {
    width: 10px;
    margin: 0;
  }

  .ant-steps-item-tail {
    top: 7px;
    &:after {
      width: 9px;
      margin-left: 9px;
    }
  }

  .ant-steps-item-finish {
    .ant-steps-item-tail {
      &:after {
        background: #b2c200;
      }
    }

    .ant-steps-item-icon {
      path {
        fill: #b2c200;
      }
    }
  }

  .ant-steps-item-active {
    .ant-steps-item-icon {
      svg {
        border-radius: 50%;
        border-color: #f9f9f9;
        path {
          fill: #fff;
        }
      }
    }
  }
`;
