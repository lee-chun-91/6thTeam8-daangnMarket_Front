// import { normalizeUnits } from "moment";
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    width,
    height,
    margin,
    padding,
    size,
    bold,
    color,
    bg,
    border,
    children,
    // is_float,
    // text,
    _onClick,
    _value,
  } = props;

  const styles = {
    width,
    height,
    margin,
    padding,
    size,
    color,
    bg,
    border,
    bold,
  };

  // if (is_float) {
  //   return (
  //     <React.Fragment>
  //       <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
  //     </React.Fragment>
  //   );
  // }

  return (
    <React.Fragment>
      <BasicButton {...styles} onClick={_onClick} value={_value}>
        {children}
      </BasicButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  width: "50%",
  height: "10%",
  margin: false,
  padding: "15px 15px",
  size: "16px",
  color: "#fff",
  bg: "#298D49",
  border: null,
  children: null,
  text: false,
  bold: false,
};

const BasicButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  padding: ${(props) => props.padding};
  border: ${(props) => (props.border ? `${props.border};` : "1px solid #bbb")};
  border-radius: 3px;
  background-color: ${(props) => props.bg};

  //폰트
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  color: ${(props) => props.color};

  &:active {
    border: 1px solid #333333;
  }
`;

// const FloatButton = styled.button`
//   width: 50px;
//   height: 50px;
//   background-color: #ffd500;
//   color: #ffffff;
//   box-sizing: border-box;
//   font-size: 36px;
//   font-weight: 800;

//   //버튼 위치
//   position: fixed;
//   bottom: 50px;
//   right: 300px;

//   //+ 위치
//   text-align: center;
//   vertical-align: middle;
//   border: none;
//   border-radius: 50px;
// `;

export default Button;
