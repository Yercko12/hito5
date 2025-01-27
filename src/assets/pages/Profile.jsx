
const Profile = () => { 
    const profilePicUrl = "https://i.pinimg.com/236x/75/64/f9/7564f9200f95e3a1aaf9228c7b1a61d4.jpg";
    return (
        <div>
            <h1>Perfil</h1>
            <img src={profilePicUrl}
             alt="" 
             style={{ width: "150px", height: "150px"}}
             />
            <div className="usuario">
            <p>Nombre: Juanito Perez</p> 
            <p>Rut: 123456-7</p> 
            <p>Edad: xxx años</p>  
            <p>Correo: usuario@ejemplo.com</p>
            <p>Contraseña:**********</p>
            </div>

            <button onClick={() => alert("Sesión cerrada")}>Cerrar sesión</button>
        </div>
    );
};

export default Profile;
