export default function Contact({ data }) {
    const { address, email, telephone } = data;
    return(
        <div>
            <h1 style={{ fontSize: '24px'}}>{address}</h1>
            <p>Phone: {telephone}</p>
            <p>Email: {email}</p>
        </div>
    )
    
}