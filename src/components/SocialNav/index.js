import React from 'react'

const SocialNav = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-gray-800 flex justify-between text-sm text-blue-900 uppercase font-mono">
      <a href="https://www.facebook.com/Bar-Restaurante-Exagonos-en-Parla-110192884641468" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300">
        <svg className="w-6 h-6 mb-2 mx-auto" fill="rgb(59, 89, 152)" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version={1.0} x="0px" y="0px" width={50} height={50} viewBox="0 0 50 50" style={{}}>    <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" /></svg>
        <p className="text-white">Facebook</p>
      </a>
      <a href="#" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <svg className="w-6 h-6 mb-2 mx-auto" fill="rgb(217, 50, 117)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="169.063px" height="169.063px" viewBox="0 0 169.063 169.063" style={{enableBackground: 'new 0 0 169.063 169.063'}} xmlSpace="preserve">
          <g>
            <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                        c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                        c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                        c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
            <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                        C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                        c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
            <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                        c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                        C135.661,29.421,132.821,28.251,129.921,28.251z" />
          </g>
        </svg>
        <p className="text-white">Instagram</p>
      </a>
      <a href="https://www.google.com/maps/place/Exagonos/@40.2339025,-3.7706801,17z/data=!3m1!4b1!4m5!3m4!1s0xd41f539668e5937:0x2fe7615b1cbb90fa!8m2!3d40.2339145!4d-3.7685063" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style={{msTransform: 'rotate(360deg)', WebkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)'}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path d="M25 0c-8.284 0-15 6.656-15 14.866c0 8.211 15 35.135 15 35.135s15-26.924 15-35.135C40 6.656 33.284 0 25 0zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588c0-2.535 2.072-4.589 4.629-4.589c2.559 0 4.631 2.054 4.631 4.589c0 2.533-2.072 4.588-4.631 4.588z" fill="tomato" /></svg>
        <p className="text-white">Google Maps</p>
      </a>
      <a href="tel:+34643435813" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style={{msTransform: 'rotate(360deg)', WebkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)'}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" fill="#626262" /><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" fill="#626262" /></svg>
        <p className="text-white">Llamanos</p>
      </a>
    </nav>
  )
}

export default SocialNav
