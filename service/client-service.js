const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido =
        `<tr>
            <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          </tr>`;
    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector("[data-table]");

//Abrir http (metodo, url)

//     CRUD   -> Create, Read, Update, Delete
// Metodos http -> Post, Get, Put/Patch, Delte

//Fetch API

const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());


listaClientes().then((data) => {
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un error"));
