
function KeyboardNumericalBtn({ directKey, shiftKey, isPressed }) {

  return (
    <div
      className={`
        ${directKey === "Backspace" ? 'w-24' : ''}
        ${isPressed? 'bg-light-text text-white':''}
        relative bg-forground  h-10 w-12 rounded leading-3 mx-[2px] flex flex-col justify-center items-center`}
    >
      <p className='text-sm'>{shiftKey}</p>
      <p>{directKey}</p>
    </div>
  );
}

export default KeyboardNumericalBtn;
