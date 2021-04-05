import { CMS_NAME, CMS_URL } from '@/lib/constants'
export default function Intro(props) {

  return (
    <section className="bg-blue flex-col md:flex-row flex items-center md:justify-between mt-12 mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 container mx-auto text-gray-800 font-serif">
          {props ? props.title : "Isabel Vaz"}
      </h1>

    </section>
  )
}
