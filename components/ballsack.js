export default function Ballsack({ data }) {
    const { ballsack_title, ballsack_text } = data; 
   
    return(
        <div>
            <h1 style={{ fontSize: '24px'}}>{ballsack_title}</h1>
            <p>{ballsack_text ? ballsack_text : 'How long has it been?'}</p>
        </div>
    )
    
}