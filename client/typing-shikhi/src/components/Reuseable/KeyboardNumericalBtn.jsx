
function KeyboardNumericalBtn({ directKey, shiftKey, state }) {
  const areKeysEqual = state === directKey;
  const isBackspace = directKey === 'Backspace';

  return (
    <div
      className={`
        ${isBackspace ? 'w-24' : ''}
        ${areKeysEqual ? 'bg-black' : ''}
        relative bg-forground h-10 w-12 rounded leading-3 mx-[2px] flex flex-col justify-center items-center`}
    >
      <p className='text-sm'>{shiftKey}</p>
      <p>{directKey}</p>
    </div>
  );
}

export default KeyboardNumericalBtn;
