import { CMS_NAME, CMS_URL } from '@/lib/constants'
export default function Intro(props) {

  return (
    <section className="bg-blue flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 container mx-auto text-white">
          {props ? props.title : "Ro Quarters"}
      </h1>

    </section>
  )
}
