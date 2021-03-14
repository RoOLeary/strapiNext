import { CMS_NAME, CMS_URL } from '@/lib/constants'
import { useAppContext } from '../src/context/appcontext'

export default function Intro(props) {

  const ctx = useAppContext();
  

  const upgradeBoobs = event => {
    event.preventDefault();
    if (ctx[1].boobs == "fucking superb"){
      ctx[1].setBoobs('awesome');
    } else {
      ctx[1].setBoobs('fucking superb');
    }
  }

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {props.title ? props.title : 'Techfart.'}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        boobs are {ctx[1].boobs}
      </h4>
      <a onClick={upgradeBoobs}>Elevate Tits</a>
    </section>
  )
}
