function string




export default function UserCard() {
    const user = {
        username: "John Doe",
        email: "joen@gmail.com",
        phone: "1234567890",
        balance: 1000,
    };

    return ( 
        <Card>


        </Card>
        <div className="user-card">
            <h1>Name: {user.username}</h1>
            <h2>Email: {user.email}</h2>
            <h2>Phone: {user.phone}</h2>
            <img src="src/assets/Vamp.jpg" alt="User Avatar" />
            <p>Hello I am new here.</p>
        </div>
    );
}