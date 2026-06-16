# Decisiones tecnicas del proyecto

## 1. Tecnologias usadas

| Tecnologia | Por que se uso? | Que aporta al proyecto? |
|---|---|---|
| Vite | Se uso para ejecutar el proyecto en un entorno de desarrollo moderno. | Permite levantar la pagina rapidamente y trabajar con modulos JavaScript. |
| JSON Server | Se uso para simular una base de datos local sin crear un backend completo. | Permite guardar, consultar y mostrar registros desde `db.json`. |
| Bootstrap | Se uso para facilitar la estructura responsive y algunos componentes visuales. | Aporta grilla, botones, formularios, tabla y componentes adaptables. |
| SweetAlert2 | Se uso para mostrar alertas mas claras y agradables al usuario. | Mejora la experiencia al mostrar avisos de errores, advertencias y registros guardados. |
| Chart.js | Se uso para crear el grafico de intereses registrados. | Permite visualizar la informacion de forma resumida y facil de entender. |

## 2. Estructura del proyecto

Es conveniente separar HTML, CSS, JavaScript, documentos y evidencias porque cada parte cumple una funcion diferente. El archivo HTML contiene la estructura de la pagina, el CSS controla el diseno visual, JavaScript maneja la logica y la conexion con la base de datos, los documentos explican el proyecto y las evidencias demuestran las pruebas realizadas.

Esta separacion ayuda a mantener el proyecto ordenado, facilita encontrar errores y permite que otra persona pueda entender mejor como esta construido. Tambien hace mas sencillo modificar una parte del proyecto sin afectar todo lo demas.

## 3. Validaciones

Validar formularios antes de guardar informacion es importante porque evita registrar datos incompletos o incorrectos. En este proyecto se valida el nombre, correo, telefono, interes y comentario para asegurar que la informacion tenga sentido antes de enviarla a JSON Server.

Las validaciones mejoran la calidad de los datos, ayudan al usuario a corregir errores y evitan que la tabla o el grafico trabajen con informacion mal escrita o vacia.

## 4. Evidencias

Las capturas ayudan a demostrar el funcionamiento del proyecto porque muestran pruebas reales de lo que se hizo. Por ejemplo, una captura puede evidenciar que la pagina abre correctamente, que el formulario valida campos vacios, que JSON Server muestra los registros y que el diseno funciona en pantalla pequena.

Estas evidencias son importantes para la entrega porque permiten comprobar que el proyecto fue probado y no solo escrito.

## 5. Mejoras realizadas

Las mejoras mas importantes aplicadas fueron:

1. Se mejoro el diseno visual de la pagina para que se viera mas profesional.
2. Se ajustaron estilos de botones, tarjetas, formulario, tabla, secciones y vista responsive.
3. Se configuro la pagina para que tambien pudiera verse correctamente con Live Server.
4. Se verifico que JSON Server funcionara en `http://localhost:3001/registros`.
5. Se completo la documentacion tecnica, bitacora, checklist y guion de exposicion.
