# Hooks de React utilizados

## useState

Permite declarar variables de estado dentro de un componente. En este caso, se utiliza la variable normal para leer su contenido y un setNombreVariable para actualizar el valor que contiene la variable. Los componentes internos pueden reaccionar dinamicamente al valor de esta variable y cambiar lo que muestran dependiendo del valor de la variable. Se declaran con un valor predefinido (useState):

``` 
const [estado, setEstado] = useState(valorInicial);
``` 

Se utilizó en:
  - **assignment.jsx**: para cambiar dinamicamente el estado de las tareas de pendiente a completado.
  - **create-assignment.jsx**: para crear un contador de los ID de las tareas autoincrementable y para resetear el input del titulo.
  - **filter-assignments.jsx**: para reaccionar al cambio de filtro entre "Todas las tareas", "Completadas" y "Pendientes".
  - **home.jsx**: para setear las tareas guardadas en el localStorage y reaccionar a las tareas agregadas en create-assignment.jsx. Tambien para filtrar las tareas y mostrar las que pide el usuario.


## useEffect

El useEffect se utiliza para reaccionar a cambios externos a React. En este caso puede ser una actualización en el backend, almacenamiento local, etc.

``` 
useEffect(() => {
  return () => {
  };
}, [dependencias]);

``` 

Se utilizó en:
  - **home.jsx**: para que cuando el usuario recargue la página, se obtenga del navegador el JSON que contiene las tareas previamente insertadas por medio de localStorage. En este caso la accion externa es cuando el usuario recargo la pagina y borro los datos anteriores.

# Cloudfront CDN

  - [Link para el CDN de Cloudfront](https://d30pux25v9f68b.cloudfront.net) 

