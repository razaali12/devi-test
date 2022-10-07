import React from "react";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import "./styles.scss";

const ButtonComponent = ({
  text = "",
  onClick,
  disabled,
  isLoading,
  className = "",
  isLink = false,
  link = "",
  icon,
  ...rest
}) => {
  const linkSec = () => (
    <>
      {isLink && !disabled ? (
        <Link to={link} className={`${className} btn-style `} {...rest}>
          {innerSec()}
        </Link>
      ) : (
        <button
          type="submit"
          disabled={disabled || isLoading}
          onClick={onClick}
          className={`${className} btn-style`}
          {...rest}
        >
          {innerSec()}
        </button>
      )}
    </>
  );
  const innerSec = () => (
    <>
      {isLoading ? (
        <BeatLoader size={8} color="#fff" />
      ) : (
        <>
          {icon && icon}
          {text}
        </>
      )}
    </>
  );
  return linkSec();
};

export default ButtonComponent;
