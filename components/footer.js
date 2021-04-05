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
            
            <a href="https://www.instagram.com/" className="flex items-start space-x-4 mr-1">
              <svg fill="rgba(239,68,68,1)" class="flex-none text-red-500 w-12 h-12">
                  <rect width="48" height="48" rx="12"></rect>
                </svg>
            </a>

            <a href="https://twitter.com/" className="flex items-start space-x-4 mr-1">
              <svg fill="#1ea1f1" class="flex-none text-light-blue-400 w-12 h-12">
                  <rect width="48" height="48" rx="12"></rect>
                  <path d="M37.127 15.989h-.001a11.04 11.04 0 01-3.093.836 5.336 5.336 0 002.37-2.932 10.815 10.815 0 01-3.421 1.284 5.42 5.42 0 00-3.933-1.679c-2.976 0-5.385 2.373-5.385 5.3-.003.406.044.812.138 1.207a15.351 15.351 0 01-11.102-5.54 5.235 5.235 0 00-.733 2.663c0 1.837.959 3.461 2.406 4.413a5.338 5.338 0 01-2.449-.662v.066c0 2.57 1.86 4.708 4.32 5.195a5.55 5.55 0 01-1.418.186c-.34 0-.68-.033-1.013-.099.684 2.106 2.676 3.637 5.034 3.68a10.918 10.918 0 01-6.69 2.269 11.21 11.21 0 01-1.285-.077 15.237 15.237 0 008.242 2.394c9.918 0 15.337-8.077 15.337-15.083 0-.23-.006-.459-.017-.683a10.864 10.864 0 002.686-2.746l.007.008z" fill="#fff" class="text-light-blue-50"></path>
                </svg>
            </a>

            <a href="https://www.youtube.com/" className="flex items-start space-x-4">
              <svg fill="rgba(239,68,68,1)" class="flex-none text-red-500 w-12 h-12">
                  <rect width="48" height="48" rx="12"></rect>
                  <path d="M36.83 18.556c0-2.285-1.681-4.124-3.758-4.124a184.713 184.713 0 00-8.615-.182h-.914c-2.925 0-5.799.05-8.612.183-2.072 0-3.753 1.848-3.753 4.133A75.6 75.6 0 0011 23.99a78.487 78.487 0 00.173 5.429c0 2.285 1.68 4.139 3.753 4.139 2.955.137 5.987.198 9.07.192 3.087.01 6.11-.054 9.069-.193 2.077 0 3.758-1.853 3.758-4.138.121-1.813.177-3.62.172-5.434a73.982 73.982 0 00-.165-5.428zM21.512 28.97v-9.979l7.363 4.987-7.363 4.992z" fill="#fff" class="text-red-50">
                  </path>
                </svg>
            </a>
          </div>
        </div>
        
      </Container>
    </footer>
  )
}
