export default function Contact({ address, email, telephone }) {
    
    return(
        <div>
            <h1 style={{ fontSize: '24px'}}>{address}</h1>
            <p>Phone: {telephone}</p>
            <p>Email: {email}</p>
        </div>
    )
    
}