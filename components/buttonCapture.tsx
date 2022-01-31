const ButtonCapture = ({ ...props }) => {
  console.log(props)

  return (
    <button
      className={
        props.dataStyle
          ? 'flex h-10 w-10 items-center justify-center rounded-full text-lg text-white hover:bg-gray-400' +
            props.dataStyle
          : 'flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-lg text-white hover:bg-gray-400'
      }
      onClick={props.data}
    >
      {props.children}
    </button>
  )
}

export default ButtonCapture
