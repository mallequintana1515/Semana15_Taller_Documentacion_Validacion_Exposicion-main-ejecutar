# Plantilla para descripcion de entrega en Moodle

Puedes usar esta plantilla para escribir el comentario de tu entrega.

## Comentario de entrega

Nombre del proyecto: Feria Rural Digital

Resumen breve:

Proyecto web para registrar visitantes interesados en una feria rural. La aplicacion permite validar datos del formulario, guardar registros en JSON Server, mostrarlos en una tabla y visualizar un grafico de intereses. Tambien incluye documentacion tecnica, bitacora de validacion, checklist de pruebas, decisiones tecnicas y guion de exposicion.

Archivos incluidos:

- Proyecto web completo
- README_ENTREGA.md
- Bitacora de validacion
- Checklist de pruebas
- Guion de exposicion
- Decisiones tecnicas
- Informe final
- Evidencias en capturas

Comandos para ejecutar:

```bash
npm install
npm run start
```

Si se abre con Live Server:

```bash
npm run db
```

Luego abrir `index.html` con Live Server.

Observaciones:

Para revisar los registros guardados se debe abrir `http://localhost:3001/registros` con JSON Server activo. No se debe incluir la carpeta `node_modules` en el ZIP final de Moodle.
