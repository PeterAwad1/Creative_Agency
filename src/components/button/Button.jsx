function Button({ children, bgColor, textColor }) {
  return (
    <button
      className={`${bgColor} ${textColor} p-2 min-w-[120px] cursor-pointer rounded-md hover:scale-105 focus:outline-none`}
    >
      {children}
    </button>
  );
}

export default Button;
