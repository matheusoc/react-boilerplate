import React from "react";
import { StyledButton } from "./Button.styles";
import PropTypes from "prop-types";

export const Button = ({ primary, backgroundColor, label, ...props }) => {
  return (
    <StyledButton
      type="button"
      backgroundColor={backgroundColor}
      primary={primary}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  medium: true,
  onClick: undefined,
};
