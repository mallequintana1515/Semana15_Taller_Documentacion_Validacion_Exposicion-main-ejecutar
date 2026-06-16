# Guion de exposicion tecnica

## 1. Saludo e introduccion

Buenos dias/tardes. Mi proyecto se llama **Feria Rural Digital**. Es una pagina web creada para registrar visitantes interesados en una feria rural y mostrar la informacion guardada de forma organizada.

## 2. Objetivo del proyecto

El objetivo del proyecto es demostrar una aplicacion web funcional, validada y documentada. La pagina permite capturar datos de visitantes, guardarlos en una base local con JSON Server, mostrarlos en una tabla y resumirlos mediante un grafico.

## 3. Tecnologias utilizadas

- HTML: se uso para construir la estructura de la pagina.
- CSS: se uso para personalizar el diseno visual, los colores, tarjetas, botones y responsive.
- JavaScript: se uso para controlar el formulario, las validaciones, los eventos y la actualizacion de datos.
- Vite: se uso como servidor de desarrollo del proyecto.
- JSON Server: se uso como base de datos local para guardar y consultar registros.
- Bootstrap: se uso para la grilla, componentes y estilos base.
- Bootstrap Icons: se uso para agregar iconos a botones, menu y secciones.
- SweetAlert2: se uso para mostrar alertas visuales al usuario.
- Chart.js: se uso para crear el grafico de intereses registrados.

## 4. Demostracion funcional

Durante la demostracion voy a mostrar:

1. La pagina principal abierta en el navegador.
2. El formulario de registro de visitantes.
3. Una prueba enviando campos vacios para ver las validaciones.
4. Un registro correcto de un visitante.
5. La tabla actualizada con los datos guardados.
6. La ruta `http://localhost:3001/registros` mostrando la base local.
7. El grafico de intereses actualizado.
8. La vista responsive en una pantalla mas pequena.

## 5. Pruebas realizadas

Realice varias pruebas importantes:

1. Probe que la pagina abriera correctamente con Live Server.
2. Probe que JSON Server funcionara en `http://localhost:3001/registros`.
3. Probe que el formulario no permitiera guardar datos vacios.
4. Probe que el correo invalido fuera rechazado.
5. Probe que un registro correcto se guardara y apareciera en la tabla.
6. Probe que el grafico mostrara los intereses registrados.

## 6. Errores encontrados y correcciones

Uno de los errores encontrados fue que JSON Server no estaba activo, por eso aparecia el mensaje de advertencia y la ruta `/registros` no funcionaba. La correccion fue instalar las dependencias con `npm install` y ejecutar `npm run db`.

Otro problema fue que al abrir el proyecto con Live Server algunos recursos no cargaban igual que con Vite. Para corregirlo se ajustaron las rutas y se cargaron Bootstrap, SweetAlert2 y Chart.js desde CDN en el archivo `index.html`.

Tambien se mejoro el diseno visual porque la pagina inicial se veia sencilla. Se actualizaron colores, espaciados, botones, tarjetas, tabla, formulario y estilos responsive en `src/css/styles.css`.

## 7. Evidencias

Las evidencias se guardan en la carpeta `evidencias/`. Alli se pueden ubicar capturas del proyecto funcionando, consola, pruebas del formulario, base de datos local, vista responsive y comparacion antes/despues.

## 8. Aprendizaje final

Aprendi que un proyecto web no solo debe funcionar, sino que tambien debe estar validado, documentado y preparado para explicarse. La documentacion ayuda a que otras personas entiendan como instalar, ejecutar, probar y mantener el proyecto.

## 9. Mejora futura

En una siguiente version agregaria funciones para editar y eliminar registros, filtros de busqueda en la tabla y una validacion mas estricta para el telefono.
