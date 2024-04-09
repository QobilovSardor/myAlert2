import React from 'react';
import { Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ButtonComponent = ({
  text,
  icon,
  rightIcon,
  to,
  colorScheme,
  width,
  size,
  color,
  bg,
  _hover,
  fontSize,
  height,
  variant,
}) => {
  return (
    <Link to={to}>
      <Button
        colorScheme={colorScheme}
        width={width}
        bg={bg}
        size={size}
        display='flex'
        alignItems='center'
        gap='6px'
        color={color}
        _hover={_hover}
        fontSize={fontSize}
        height={height}
        variant={variant}
      >
        {icon && <Image src={icon} />}
        <span>{text}</span>
        {rightIcon && <Image src={rightIcon} />}
      </Button>
    </Link>
  );
};
