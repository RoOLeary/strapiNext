import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'
import { useAppContext } from '../src/context/appcontext'
import { useRef } from 'react'
import Modal from './modal';

export default function Footer() {

  const ctx = useAppContext();
  
  const toggleFooterModal = event => {
      event.preventDefault();
      ctx[0].handlers.setModalData({
        title: 'footer',
        content: '...my life got flipped, turned upside down...'
      })
      document.body.classList.toggle('body-modal-open');
      ctx[0].handlers.setIsModalOpen(!ctx[0].state.isModalOpen);
  }

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-gray-800 font-serif">
            Follow me on Social Media
          </h3>
          <div className="flex flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            
            <a href="https://www.instagram.com/isabelvazcellist/" className="flex items-start space-x-4 mr-1">
              <svg className="flex-none text-light-blue-400 w-12 h-12" id="instagram" viewBox="0 0 16 16">
                  <path d="M8,1.44144c2.1361,0,2.38911.00815,3.23268.04664a4.42649,4.42649,0,0,1,1.48549.27546A2.47861,2.47861,0,0,1,13.638,2.362a2.47851,2.47851,0,0,1,.59844.91986,4.42673,4.42673,0,0,1,.27546,1.48548c.03849.84358.04664,1.0966.04664,3.23269s-.00815,2.38911-.04664,3.23268a4.42675,4.42675,0,0,1-.27546,1.48549,2.6493,2.6493,0,0,1-1.51829,1.51829,4.42675,4.42675,0,0,1-1.48549.27546c-.84345.03849-1.09644.04664-3.23268.04664s-2.38923-.00815-3.23268-.04664a4.42675,4.42675,0,0,1-1.48549-.27546A2.47849,2.47849,0,0,1,2.362,13.638a2.47863,2.47863,0,0,1-.59844-.91986,4.42647,4.42647,0,0,1-.27546-1.48548C1.44959,10.38911,1.44144,10.1361,1.44144,8s.00815-2.38911.04664-3.23268a4.42649,4.42649,0,0,1,.27546-1.48549A2.47861,2.47861,0,0,1,2.362,2.362a2.47863,2.47863,0,0,1,.91986-.59844,4.42647,4.42647,0,0,1,1.48548-.27546C5.61089,1.44959,5.86391,1.44144,8,1.44144M8,0C5.82733,0,5.55489.0092,4.70161.04813A5.8719,5.8719,0,0,0,2.75969.42a3.92134,3.92134,0,0,0-1.417.92273A3.92134,3.92134,0,0,0,.42,2.75969,5.8719,5.8719,0,0,0,.04813,4.70161C.0092,5.55489,0,5.82732,0,8s.0092,2.4451.04813,3.29839A5.8719,5.8719,0,0,0,.42,13.24031a3.92142,3.92142,0,0,0,.92273,1.417,3.92134,3.92134,0,0,0,1.417.92273,5.8719,5.8719,0,0,0,1.94192.37186C5.55489,15.9908,5.82733,16,8,16s2.4451-.0092,3.29839-.04813A5.8719,5.8719,0,0,0,13.24031,15.58a4.09069,4.09069,0,0,0,2.3397-2.3397,5.8719,5.8719,0,0,0,.37186-1.94192C15.9908,10.4451,16,10.17267,16,8s-.0092-2.44511-.04813-3.29839A5.8719,5.8719,0,0,0,15.58,2.75969a3.92134,3.92134,0,0,0-.92273-1.417A3.92134,3.92134,0,0,0,13.24031.42,5.8719,5.8719,0,0,0,11.29839.04813C10.4451.0092,10.17267,0,8,0Z" fill="2a4365"></path>
                  <path d="M8,3.89189A4.10811,4.10811,0,1,0,12.10811,8,4.10811,4.10811,0,0,0,8,3.89189Zm0,6.77477A2.66667,2.66667,0,1,1,10.66667,8,2.66666,2.66666,0,0,1,8,10.66666Z" fill="2a4365"></path>
                  <circle cx="12.27042" cy="3.72958" r="0.96" fill="2a4365"></circle>
              </svg>
            </a>

            <a href="https://twitter.com/" className="flex items-start space-x-4 mr-1">
              <svg fill="#1ea1f1" className="flex-none text-light-blue-400 w-12 h-12">
                  <rect width="48" height="48" rx="12"></rect>
                  <path d="M37.127 15.989h-.001a11.04 11.04 0 01-3.093.836 5.336 5.336 0 002.37-2.932 10.815 10.815 0 01-3.421 1.284 5.42 5.42 0 00-3.933-1.679c-2.976 0-5.385 2.373-5.385 5.3-.003.406.044.812.138 1.207a15.351 15.351 0 01-11.102-5.54 5.235 5.235 0 00-.733 2.663c0 1.837.959 3.461 2.406 4.413a5.338 5.338 0 01-2.449-.662v.066c0 2.57 1.86 4.708 4.32 5.195a5.55 5.55 0 01-1.418.186c-.34 0-.68-.033-1.013-.099.684 2.106 2.676 3.637 5.034 3.68a10.918 10.918 0 01-6.69 2.269 11.21 11.21 0 01-1.285-.077 15.237 15.237 0 008.242 2.394c9.918 0 15.337-8.077 15.337-15.083 0-.23-.006-.459-.017-.683a10.864 10.864 0 002.686-2.746l.007.008z" fill="#fff" className="text-light-blue-50"></path>
                </svg>
            </a>

            <a href="https://www.youtube.com/channel/UCeuTiViHuER3trA8AXZXMLA" className="flex items-start space-x-4">
              <svg fill="rgba(239,68,68,1)" className="flex-none text-red-500 w-12 h-12">
                  <rect width="48" height="48" rx="12"></rect>
                  <path d="M36.83 18.556c0-2.285-1.681-4.124-3.758-4.124a184.713 184.713 0 00-8.615-.182h-.914c-2.925 0-5.799.05-8.612.183-2.072 0-3.753 1.848-3.753 4.133A75.6 75.6 0 0011 23.99a78.487 78.487 0 00.173 5.429c0 2.285 1.68 4.139 3.753 4.139 2.955.137 5.987.198 9.07.192 3.087.01 6.11-.054 9.069-.193 2.077 0 3.758-1.853 3.758-4.138.121-1.813.177-3.62.172-5.434a73.982 73.982 0 00-.165-5.428zM21.512 28.97v-9.979l7.363 4.987-7.363 4.992z" fill="#fff" className="text-red-50">
                  </path>
                </svg>
            </a>
          </div>
        </div>
        
      </Container>
    </footer>
  )
}
