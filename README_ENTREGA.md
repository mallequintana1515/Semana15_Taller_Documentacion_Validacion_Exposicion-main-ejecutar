# Documentacion tecnica del proyecto

## 1. Nombre del proyecto

Feria Rural Digital.

## 2. Descripcion general

Feria Rural Digital es una pagina web que permite registrar visitantes interesados en una feria rural. El usuario completa un formulario con su nombre, correo, telefono, interes principal y comentario. Luego la informacion se guarda en una base de datos local con JSON Server, se muestra en una tabla y se resume en un grafico.

## 3. Objetivo del proyecto

El objetivo del proyecto es demostrar el cierre profesional de una aplicacion web: funcionamiento, validacion de datos, conexion con una base local, documentacion tecnica, registro de pruebas y preparacion de una exposicion.

## 4. Tecnologias utilizadas

| Tecnologia | Uso dentro del proyecto |
|---|---|
| HTML | Define la estructura principal de la pagina, secciones, formulario, tabla y contenido. |
| CSS | Da estilo visual al proyecto, mejora la presentacion y adapta la pagina a diferentes pantallas. |
| JavaScript | Controla la logica del formulario, validaciones, eventos, conexion con la API y actualizacion de la interfaz. |
| Vite | Permite ejecutar el proyecto en modo de desarrollo. |
| JSON Server | Simula una base de datos local para guardar y consultar los registros. |
| Bootstrap | Aporta componentes, grilla responsive y estilos base. |
| SweetAlert2 | Muestra alertas visuales para errores, advertencias y confirmaciones. |
| Chart.js | Genera el grafico de intereses registrados. |

## 5. Instalacion

Para instalar las dependencias del proyecto se usa el siguiente comando:

```bash
npm install
```

## 6. Ejecucion

Para ejecutar la base de datos local:

```bash
npm run db
```

Para ejecutar el proyecto completo con Vite y JSON Server:

```bash
npm run start
```

Tambien se puede abrir `index.html` con Live Server, pero JSON Server debe estar activo con `npm run db` para que carguen los registros.

## 7. Estructura de carpetas

| Archivo o carpeta | Funcion |
|---|---|
| index.html | Contiene la estructura principal de la pagina web. |
| src/css/styles.css | Contiene los estilos personalizados del proyecto. |
| src/js/main.js | Controla el inicio de la aplicacion, el envio del formulario y la carga de datos. |
| src/js/api.js | Contiene las funciones para consultar y guardar datos en JSON Server. |
| src/js/validaciones.js | Contiene las reglas de validacion del formulario. |
| src/js/ui.js | Actualiza la tabla, el total de registros y el enfoque de errores. |
| src/js/charts.js | Genera el grafico de intereses usando Chart.js. |
| db.json | Archivo usado por JSON Server como base de datos local. |
| docs/ | Carpeta con documentos de apoyo, bitacora, checklist y guion de exposicion. |
| evidencias/ | Carpeta destinada a guardar capturas y pruebas del proyecto. |

## 8. Funcionalidades principales

1. Registrar visitantes interesados en la feria rural.
2. Validar los campos del formulario antes de guardar.
3. Guardar registros en JSON Server.
4. Mostrar los registros guardados en una tabla.
5. Mostrar un grafico con los intereses principales.
6. Recargar los datos desde la base local.

## 9. Validaciones implementadas

| Campo | Validacion aplicada |
|---|---|
| Nombre | Debe tener minimo 3 caracteres. |
| Correo | Debe tener formato valido de correo electronico. |
| Telefono | Se limpian caracteres no numericos y debe tener una cantidad valida de digitos. |
| Interes | Se debe seleccionar una opcion. |
| Comentario | Debe tener minimo 15 caracteres. |

## 10. Pruebas realizadas

| Prueba | Resultado |
|---|---|
| Abrir la pagina con Live Server | La pagina carga y se muestra con el diseno aplicado. |
| Abrir `http://localhost:3001/registros` | JSON Server muestra los datos guardados en formato JSON. |
| Enviar el formulario vacio | El sistema muestra errores en los campos obligatorios. |
| Escribir un correo invalido | El formulario no permite guardar y muestra mensaje de error. |
| Guardar un registro correcto | El registro se guarda y aparece en la tabla. |
| Recargar datos | La tabla y el grafico se actualizan con los datos de JSON Server. |

## 11. Errores encontrados y correcciones aplicadas

| Error encontrado | Correccion aplicada | Archivo modificado |
|---|---|---|
| Al abrir la pagina aparecia el aviso de que JSON Server no estaba activo. | Se ejecuto `npm run db` para activar la base de datos local. | package.json / db.json |
| La ruta `localhost:3001/registros` no funcionaba porque faltaban dependencias. | Se ejecuto `npm install` para instalar JSON Server y las demas dependencias. | package-lock.json |
| La pagina no se veia igual al abrirla con Live Server. | Se cargaron Bootstrap, iconos, SweetAlert2 y Chart.js desde CDN y se usaron rutas relativas. | index.html / src/js/main.js / src/js/charts.js |
| El diseno inicial se veia sencillo. | Se mejoraron colores, espaciados, tarjetas, botones, tabla, formulario y secciones. | src/css/styles.css |

## 12. Evidencias

| Evidencia | Ubicacion |
|---|---|
| Proyecto funcionando | evidencias/antes-despues/ |
| Consola sin errores | evidencias/consola/ |
| Formulario validando | evidencias/pruebas/ |
| Registro en JSON Server | evidencias/pruebas/ |
| Vista responsive | evidencias/responsive/ |

## 13. Conclusiones

En esta actividad aprendi que un proyecto web no solo debe abrir en el navegador, sino que tambien debe estar probado, validado, documentado y preparado para explicarse. Tambien comprendi la importancia de registrar evidencias y de verificar que la base de datos local funcione correctamente.

En una siguiente version mejoraria el proyecto agregando edicion y eliminacion de registros, filtros de busqueda y una validacion mas estricta para el telefono.

solucion

1. Nombre del proyecto
Feria Rural Digital

2. Descripción general
Feria Rural Digital es una aplicación web que permite registrar visitantes interesados en una feria rural. El usuario completa un formulario con su nombre, correo, teléfono, interés principal y comentario. Posteriormente, la información se almacena en una base de datos local mediante JSON Server, se muestra en una tabla y se resume a través de un gráfico estadístico.

3. Objetivo del proyecto
El objetivo del proyecto es demostrar el cierre profesional de una aplicación web mediante la implementación de funcionalidades completas, validación de datos, conexión con una base de datos local, documentación técnica, registro de pruebas y preparación para la exposición final.

4. Tecnologías utilizadas
TecnologíaUso dentro del proyectoHTMLDefine la estructura principal de la página, secciones, formulario, tabla y contenido.CSSProporciona el diseño visual y adapta la interfaz a diferentes tamaños de pantalla.JavaScriptGestiona la lógica del formulario, validaciones, eventos, conexión con la API y actualización de la interfaz.VitePermite ejecutar el proyecto en modo de desarrollo.JSON ServerSimula una base de datos local para guardar y consultar registros.BootstrapAporta componentes visuales, sistema de grillas y diseño responsive.SweetAlert2Muestra alertas visuales para errores, advertencias y confirmaciones.Chart.jsGenera el gráfico de intereses registrados.

5. Instalación
Para instalar las dependencias del proyecto se utiliza el siguiente comando:
npm install

6. Ejecución
Para ejecutar únicamente la base de datos local:
npm run db
Para ejecutar el proyecto completo con Vite y JSON Server:
npm run start
La aplicación se ejecuta en:
http://localhost:5173
La API local se encuentra disponible en:
http://localhost:3001/visitantes

7. Estructura de carpetas
Archivo o carpetaFunciónindex.htmlContiene la estructura principal de la página web.src/css/styles.cssContiene los estilos personalizados del proyecto.src/js/main.jsControla el inicio de la aplicación, el envío del formulario y la carga de datos.src/js/api.jsContiene las funciones para consultar y guardar datos en JSON Server.src/js/validation.jsContiene las reglas de validación del formulario.src/js/ui.jsActualiza la tabla, los indicadores y los mensajes de la interfaz.src/js/chart.jsGenera el gráfico de intereses utilizando Chart.js.db.jsonArchivo utilizado por JSON Server como base de datos local.docs/Carpeta con documentación técnica, bitácora, checklist y guion de exposición.evidencias/Carpeta destinada a almacenar capturas de pantalla y pruebas realizadas.

8. Funcionalidades principales


Registrar visitantes interesados en la feria rural.


Validar los campos del formulario antes de guardar la información.


Guardar registros en JSON Server.


Mostrar los registros almacenados en una tabla.


Generar un gráfico con los intereses principales.


Recargar y actualizar los datos desde la base local.


Buscar y filtrar registros según criterios definidos.



9. Validaciones implementadas
CampoValidación aplicadaNombreDebe tener mínimo 3 caracteres.CorreoDebe tener formato válido de correo electrónico.TeléfonoDebe contener 10 dígitos numéricos.InterésSe debe seleccionar una opción obligatoriamente.ComentarioDebe tener mínimo 10 caracteres.

10. Pruebas realizadas
PruebaResultadoAbrir la página con ViteLa aplicación carga correctamente.Abrir http://localhost:3001/visitantesJSON Server muestra los registros almacenados.Enviar el formulario vacíoEl sistema muestra errores en los campos obligatorios.Escribir un correo inválidoEl formulario impide el envío y muestra un mensaje de error.Ingresar un teléfono incorrectoEl sistema valida y muestra advertencia.Guardar un registro correctoEl registro se almacena y aparece en la tabla.Recargar datosLa tabla y el gráfico se actualizan correctamente.Visualización en dispositivos móvilesLa interfaz se adapta correctamente.

11. Errores encontrados y correcciones aplicadas
Error encontradoCorrección aplicadaArchivo modificadoAl abrir la página aparecía el aviso de que JSON Server no estaba activo.Se ejecutó npm run db para activar la base de datos local.package.json / db.jsonLa ruta de la API no respondía correctamente.Se verificó y corrigió la configuración de conexión.api.jsFaltaban dependencias para ejecutar el proyecto.Se ejecutó npm install para instalar todas las dependencias.package-lock.jsonLa página no se veía igual al abrirla en diferentes entornos.Se ajustaron rutas y recursos externos.index.htmlEl diseño inicial era muy básico.Se mejoraron colores, espacios, formularios, botones y tablas.styles.css

12. Evidencias
EvidenciaUbicaciónProyecto funcionandoevidencias/antes-despues/Consola sin erroresevidencias/consola/Formulario validandoevidencias/pruebas/Registro almacenado en JSON Serverevidencias/pruebas/Tabla actualizadaevidencias/pruebas/Gráfico funcionandoevidencias/pruebas/Vista responsive en computadorevidencias/responsive/Vista responsive en tabletevidencias/responsive/Vista responsive en celularevidencias/responsive/

13. Conclusiones
Durante el desarrollo de esta actividad aprendí que un proyecto web no solo debe funcionar correctamente, sino también estar validado, probado y documentado. Comprendí la importancia de utilizar una base de datos local para almacenar información y de registrar evidencias que permitan demostrar el funcionamiento del sistema.
Además, fortalecí conocimientos relacionados con HTML, CSS, JavaScript, Vite y JSON Server. También aprendí a organizar mejor la estructura de carpetas, documentar el proyecto mediante un README y realizar pruebas para verificar la calidad de la aplicación.
Como mejora futura, sería posible implementar edición y eliminación de registros, filtros de búsqueda más avanzados y validaciones adicionales para optimizar la experiencia del usuario.
