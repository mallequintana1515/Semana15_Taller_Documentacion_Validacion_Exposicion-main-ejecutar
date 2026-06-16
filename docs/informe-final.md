# Informe final de entrega

## 1. Datos generales

- Nombre del estudiante:
- Grupo:
- Fecha: 2026-06-16
- Nombre del proyecto: Feria Rural Digital

## 2. Resumen del trabajo realizado

Durante el taller se reviso y completo el proyecto Feria Rural Digital. Se mejoro el diseno de la pagina para que tuviera una apariencia mas profesional, se verifico el funcionamiento del formulario, se comprobo la conexion con JSON Server y se organizaron los documentos de entrega.

Tambien se completaron la documentacion tecnica, la bitacora de validacion, el checklist de pruebas, el guion de exposicion y las decisiones tecnicas del proyecto.

## 3. Funcionalidades revisadas

| Funcionalidad | Estado | Observacion |
|---|---|---|
| Formulario de registro | Funciona | Permite ingresar nombre, correo, telefono, interes y comentario. |
| Guardado en JSON Server | Funciona | Los registros se guardan en `db.json` mediante la ruta `/registros`. |
| Tabla de registros | Funciona | Muestra los datos consultados desde JSON Server. |
| Grafico de intereses | Funciona | Resume los intereses registrados usando Chart.js. |
| Diseno responsive | Funciona | La pagina se adapta a pantallas pequenas y mantiene el contenido ordenado. |

## 4. Correcciones aplicadas

Se aplicaron las siguientes correcciones:

1. Se instalaron las dependencias necesarias con `npm install`.
2. Se activo JSON Server con `npm run db` para que funcionara `http://localhost:3001/registros`.
3. Se ajusto la pagina para que pudiera verse correctamente con Live Server.
4. Se mejoro el diseno visual mediante cambios en `src/css/styles.css`.
5. Se completo la documentacion requerida para la entrega.

## 5. Evidencias entregadas

Las evidencias deben ubicarse en las siguientes carpetas:

1. `evidencias/consola/`: capturas de consola y comandos ejecutados.
2. `evidencias/pruebas/`: capturas del formulario, tabla, grafico y JSON Server.
3. `evidencias/responsive/`: capturas de la pagina en pantalla pequena.
4. `evidencias/antes-despues/`: comparacion del diseno antes y despues.
5. `evidencias/exposicion/`: material usado para la presentacion.

## 6. Conclusiones

Aprendi que entregar un proyecto web implica mas que mostrar una pagina en el navegador. Tambien es necesario documentar, validar, probar, corregir y preparar una explicacion clara del funcionamiento.

En una siguiente version mejoraria el proyecto agregando opciones para editar y eliminar registros, filtros de busqueda y una validacion mas estricta para el telefono.
