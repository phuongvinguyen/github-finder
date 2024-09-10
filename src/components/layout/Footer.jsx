
function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
        <svg
          width='50'
          height='50'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          className='inline-block fill-current'
        >
          
        </svg>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer
