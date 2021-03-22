import '@/styles/index.css'
import { motion } from 'framer-motion';
import { AppWrapper } from '../src/context/appcontext'; // import based on where you put it
import { Provider } from 'next-auth/client'
import Modal from '@/components/modal';

function Application({ Component, pageProps, router }) {
  return(
    <Provider session={pageProps.session}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
      <AppWrapper>
        <Component {...pageProps} />
        <Modal />
      </AppWrapper>
    </motion.div>
  </Provider>
  );
}


export default Application
