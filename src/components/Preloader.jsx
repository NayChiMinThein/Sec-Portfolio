import { Circles } from 'react-loader-spinner'

const Preloader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Circles
        visible={true}
        height="80"
        width="80"
        color="#fff"
        ariaLabel="circles-loading"
      />
    </div>
  )
}

export default Preloader