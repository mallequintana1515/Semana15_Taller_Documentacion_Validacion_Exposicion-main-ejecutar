# Bitacora de validacion y correccion

| Fecha | Prueba realizada | Resultado esperado | Resultado obtenido | Error encontrado | Correccion aplicada | Archivo modificado | Evidencia |
|---|---|---|---|---|---|---|---|
| 2026-06-16 | Abrir la pagina principal con Live Server | La pagina debe cargar con estilos, iconos y contenido completo. | La pagina cargo correctamente con el nuevo diseno. | Al inicio algunos recursos dependian de Vite y no se veian igual en Live Server. | Se agregaron CDN y rutas relativas para que funcione desde Live Server. | index.html / src/js/main.js / src/js/charts.js | evidencias/antes-despues/ |
| 2026-06-16 | Abrir `http://localhost:3001/registros` | Se deben mostrar los registros guardados en formato JSON. | La ruta mostro los registros existentes. | Primero la ruta no respondia porque JSON Server no estaba activo y faltaban dependencias. | Se ejecuto `npm install` y luego `npm run db`. | package-lock.json / db.json | evidencias/pruebas/ |
| 2026-06-16 | Enviar el formulario vacio | El sistema debe mostrar errores y evitar guardar datos incompletos. | El formulario marco los campos invalidos. | No se encontro error critico en esta prueba. | Se comprobo que las validaciones se ejecutaran antes de guardar. | src/js/validaciones.js / src/js/main.js | evidencias/pruebas/ |
| 2026-06-16 | Escribir un correo con formato incorrecto | El sistema debe rechazar el correo invalido. | Se mostro un mensaje indicando que el correo debe tener formato valido. | No se encontro error critico en esta prueba. | Se mantuvo la expresion regular de validacion de correo. | src/js/validaciones.js | evidencias/pruebas/ |
| 2026-06-16 | Guardar un registro correcto | El registro debe guardarse en JSON Server y mostrarse en la tabla. | El registro se guardo y la tabla se actualizo. | No se encontro error critico en esta prueba. | Se verifico la conexion entre formulario, API y tabla. | src/js/api.js / src/js/ui.js / src/js/main.js | evidencias/pruebas/ |
| 2026-06-16 | Revisar el grafico de intereses | El grafico debe mostrar la cantidad de registros por interes. | El grafico cargo y mostro los datos consultados. | El grafico dependia de importacion compatible con Vite. | Se ajusto para usar Chart.js cargado desde el navegador. | src/js/charts.js / index.html | evidencias/pruebas/ |
| 2026-06-16 | Revisar vista responsive | La pagina debe adaptarse a pantallas pequenas. | El contenido se acomodo en columnas y botones de ancho completo en celular. | El diseno inicial se veia simple y necesitaba mejor organizacion visual. | Se mejoraron estilos, espaciados, tarjetas, botones y media queries. | src/css/styles.css | evidencias/responsive/ |

## Preguntas de reflexion

1. Cual fue el error mas importante que encontraste?

El error mas importante fue que la ruta `http://localhost:3001/registros` no funcionaba porque JSON Server no estaba activo y las dependencias no estaban instaladas. Sin esa base local, la pagina podia abrir, pero no podia cargar ni guardar registros.

2. Como comprobaste que la correccion funciono?

Lo comprobe ejecutando `npm install`, luego `npm run db` y abriendo la ruta `http://localhost:3001/registros`. Cuando aparecieron los datos en formato JSON, confirme que la base de datos local estaba funcionando.

3. Que prueba te parecio mas dificil y por que?

La prueba mas dificil fue la compatibilidad con Live Server, porque la pagina inicialmente dependia de recursos cargados por Vite. Fue necesario ajustar el HTML y los archivos JavaScript para que los estilos, alertas y grafico funcionaran tambien al abrir el proyecto con Live Server.

4. Que aprendiste sobre la importancia de registrar evidencias?

Aprendi que las evidencias ayudan a demostrar que el proyecto fue probado realmente. No basta con decir que funciona; las capturas y registros muestran que se reviso la pagina, el formulario, la base de datos, la consola y la vista responsive.
