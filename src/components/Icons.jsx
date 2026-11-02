const Icons = ({
  icon: Icon,
  color,
  size = 24,
  strokeWidth = 1.5,
  opacity,
  className,
  ...props
}) => {
  return (
    <Icon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      opacity={opacity}
      className={className}
      {...props}
    />
  );
}

export default Icons;
