import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'
import { useAppContext } from '../src/context/appcontext'
import { useRef } from 'react'
import Modal from './modal';

export default function Footer() {

  const ctx = useAppContext();

  console.log(ctx[0].state.modalData.title);

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
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with mer berls
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              onClick={toggleFooterModal}
              className="mx-3 font-bold hover:underline"
            >
              View on {ctx.website}
            </a>
          </div>
        </div>
        
      </Container>
      <Modal title="Footer" />
    </footer>
  )
}
