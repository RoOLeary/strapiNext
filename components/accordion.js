import { useState } from 'react'; 

const Accordion = (d) => {
  const { title, content } = d.data;
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
};


const AccordionUnit = ( data ) => {
    const acc = data.data.accordion;
    return (
        <div className="wrapper">
             {acc.map((d, i) => {
                 return(
                     <Accordion key={i} data={d} />
                 );
            })} 
        </div>
    );
}

export default AccordionUnit;