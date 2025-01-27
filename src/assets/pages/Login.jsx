import {useState} from 'react';

const Login = () => {
    const [Data, setData] = useState({ email: "", password: ""});
    const [mensaje, setMensaje] = useState("");

    const Cambio1 = (e) => {
        const { name, value } = e.target; 
        setData({ ...Data, [name]: value }); 
    };

    const Cambios2 = (e) => {
        e.preventDefault(); 
        const { email, password} = Data; 

        if (!email || !password) {
            setMensaje("Todos los campos son obligatorios.");
        } else if (password.length < 6) {
            setMensaje("La contraseña debe tener al menos 6 caracteres.");
        } else {
            setMensaje("inicio de sesión exitoso!");
        }
    };

  return (
    <div>
         <h2>Inicio de Sesión</h2>
            <form onSubmit={Cambios2}>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={Data.email}
                    onChange={Cambio1}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={Data.password}
                    onChange={Cambio1}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        
    </div>
  );
};

export default Login;