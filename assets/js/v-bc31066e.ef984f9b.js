"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1377],{7677:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});var o=n(78e3);const p=[(0,o.uE)('<p>La configuración del terminal del punto de venta permite definir los parámetros con los que serán generados los egresos e ingresos de las cajas involucradas en el proceso de ventas.</p><p>Adicional a ello, se define la impresora, el tipo de conversión, la lista de precios, almacén y supervisor de la caja en la cual serán realizadas las operaciones.</p><p>A continuación se explica el procedimiento a seguir para configurar correctamente el terminal del punto de venta.</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Órdenes de Venta</strong>, por último seleccione la carpeta <strong>Punto de Venta</strong>, finalmente seleccione la ventana <strong>Terminal PDV</strong>.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image62.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Terminal PDV</strong> con diferentes campos que permiten una configuración de la caja, taquilla o auto-servicio en el cual se gestiona la orden, facturación y cobro de los productos por medio del punto de venta.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image63.png" alt="Campo"></p><p>Imagen 2. Ventana Terminal PDV</p><p>La ventana <strong>Terminal PDV</strong> cuenta con los siguientes campos que son necesarios para realizar el proceso del punto de venta:</p><p>Seleccione en el campo <strong>Organización</strong>, la organización en la cual trabaja el vendedor para el cual se esta configurando el terminal del punto de venta.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image64.png" alt="Campo"></p><p>Imagen 3. Campo Organización de la Ventana Terminal PDV</p><p>Introduzca en el campo <strong>Nombre</strong>, el nombre de la caja, taquilla o auto-servicio en el cual será realizada la gestión de orden, facturación y cobro de los productos.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image65.png" alt="Campo"></p><p>Imagen 4. Campo Nombre de la Ventana Terminal PDV</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción de la caja, taquilla o auto-servicio en el cual será realizada la gestión de orden, facturación y cobro de los productos.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image66.png" alt="Campo"></p><p>Imagen 5. Campo Descripción de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Agente Comercial</strong>, el socio del negocio vendedor para el cual se esta configurando el terminal PDV.</p><p>Este campo permite seleccionar el vendedor que realizará las operaciones de las ventas en la caja asociada al terminal PDV.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image67.png" alt="Campo"></p><p>Imagen 6. Campo Agente Comercial de la Ventana Terminal PDV</p><p>Introduzca en el campo <strong>Retraso de Cierre de Sesión Automático</strong>, el tiempo para el cierre de sesión automático cuando el terminal se encuentre inactivo.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image68.png" alt="Campo"></p><p>Imagen 7. Campo Retraso de Cierre de Sesión Automático de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios establecida para las ventas de la organización.</p><p>Este campo permite definir la lista de precios con la cual serán realizadas las operaciones de ventas en la caja asociada al terminal PDV.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image69.png" alt="Campo"></p><p>Imagen 8. Campo Lista de Precios de la Ventana Terminal PDV</p><p>Seleccione el check <strong>Modifique el Precio</strong>, para permitir que los precios de venta puedan ser modificados en la caja que se encuentra configurando.</p><p>La selección de este check, permite que el supervisor del vendedor asociado al terminal PDV pueda modificar los precios de los productos.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image70.png" alt="Campo"></p><p>Imagen 9. Check Modifique el Precio de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Caja Menor</strong>, la caja menor de la organización para registrar en ella las transacciones de caja chica.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image71.png" alt="Campo"></p><p>Imagen 10. Campo Caja Menor de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Plantilla Socio del Negocio</strong>, el socio del negocio creado para ser utilizado en el registro de los nuevos clientes de forma rápida.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image72.png" alt="Campo"></p><p>Imagen 11. Campo Plantilla Socio del Negocio de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Cuenta Bancaria</strong>, la cuenta caja creada para registrar las transacciones efectuadas por el vendedor, durante la gestión de orden, facturación y cobro de los productos.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image73.png" alt="Campo"></p><p>Imagen 12. Campo Cuenta Bancaria de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Transferir transacción de caja a banco</strong>, la cuenta a la cual serán transferidas todas las transacciones de la caja de ventas.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image74.png" alt="Campo"></p><p>Imagen 13. Campo Transferir Transacción de Caja a Banco de la Ventana Terminal PDV</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p>Este campo permite definir el tipo de documento con el cual serán generadas las ventas desde el punto de venta. De igual manera, el comportamiento que este tendrá al completar el proceso.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image75.png" alt="Campo"></p><p>Imagen 14. Campo Tipo de Documento de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Regla de Facturación</strong>, el método utilizado para generar las facturas a los clientes.</p><p>Este campo establece una condición para facturar la venta en base a lo que se defina en el terminal PDV, el mismo no es obligatorio ya que la facturación puede depender de las reglas del negocio.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image76.png" alt="Campo"></p><p>Imagen 15. Campo Regla de Facturación de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Almacén</strong>, el lugar de almacenamiento de los productos destinados para la venta.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image77.png" alt="Campo"></p><p>Imagen 16. Campo Almacén de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Regla de Entrega</strong>, el método utilizado para generar las entregas de productos al cliente.</p><p>Este campo establece una condición para entregar la venta en base a lo que se defina en el terminal PDV, el mismo no es obligatorio ya que la entrega puede depender de las reglas del negocio.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image78.png" alt="Campo"></p><p>Imagen 17. Campo Regla de Entrega de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>PDV Disposición de la Llave</strong>, la disposición de la llave para el funcionamiento del punto de venta.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image79.png" alt="Campo"></p><p>Imagen 18. Campo PDV Disposición de la Llave de la Ventana Terminal PDV</p><p>El check <strong>Habilitar Búsqueda de Productos POS</strong>, permite la búsqueda manual de los productos.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image80.png" alt="Campo"></p><p>Imagen 19. Check Habilitar Búsqueda de Productos POS de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Teclado en Pantalla</strong>, el diseño clave para utilizar el teclado en pantalla para campos de texto.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image81.png" alt="Campo"></p><p>Imagen 20. Campo Teclado en Pantalla de la Ventana Terminal PDV</p><p>Note</p><p>Si el campo se encuentra vacío, no se utilizará el teclado en pantalla.</p><p>Seleccione en el campo <strong>Teclado Numérico en Pantalla</strong>, el diseño clave para utilizar el teclado en pantalla para campos númericos.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image82.png" alt="Campo"></p><p>Imagen 21. Campo Teclado Numérico en Pantalla de la Ventana Terminal PDV</p><p>Note</p><p>Si el campo se encuentra vacío, no se utilizará el teclado en pantalla.</p><p>Introduzca en el campo <strong>Nombre Impresión</strong>, el nombre de la impresora asignada para el terminal que esta configurando.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image83.png" alt="Campo"></p><p>Imagen 22. Campo Nombre Impresión de la Ventana Terminal PDV</p><p>Note</p><p>Si el campo se encuentra vacío, se utiliza la impresora por defecto.</p><p>Introduzca en el campo <strong>Registradora</strong>, la registradora asignada para el terminal que esta configurando.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image84.png" alt="Campo"></p><p>Imagen 23. Campo Registradora de la Ventana Terminal PDV</p><p>Introduzca en el campo <strong>Peso Electrónico</strong>, la ruta para las balanzas electrónicas del dispositivo.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image85.png" alt="Campo"></p><p>Imagen 24. Campo Escalas Electrónicas de la Ventana Terminal PDV</p><p>Introduzca en el campo **Código de Solicitud de Medida, las medidas de balanzas electrónicas de dispositivos.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image86.png" alt="Campo"></p><p>Imagen 25. Campo Código de Solicitud de Medida de la Ventana Terminal PDV</p><p>Seleccione el checklist <strong>PIN POS Requerido</strong>, para indicar que un PIN de supervisor es obligatorio para ejecutar algunas tareas.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image87.png" alt="Campo"></p><p>Imagen 26. Campo PIN POS Requerido de la Ventana Terminal PDV</p><p>Introduzca en el campo <strong>Tiempo de Entrada de PIN</strong>, la cantidad de tiempo desde la visualización inicial hasta que el cuadro de diálogo de entrada de PIN se agota.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image88.png" alt="Campo"></p><p>Imagen 27. Campo Tiempo de Entrada de PIN de la Ventana Terminal PDV</p><p>Note</p><p>La cantidad de tiempo debe ser ingresada en milisegundos.</p><p>En el campo <strong>Clase Para Impresión de Ticket</strong>, se debe ingresar el nombre de la clase para la impresión del ticket.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image89.png" alt="Campo"></p><p>Imagen 28. Campo Clase Para Impresión de Ticket de la Ventana Terminal PDV</p><p>Note</p><p>La información correspondiente a este campo debe ser ingresada por los consultores de ERPyA.</p><p>Seleccione en el campo <strong>Tipo de Conversión</strong>, el tipo de conversión de moneda establecida para la lista de precios de venta seleccionada anteriormente.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image90.png" alt="Campo"></p><p>Imagen 29. Campo Tipo de Conversión de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Impresora Fiscal</strong>, la impresora fiscal asignada a la caja, taquilla o auto-servicio, para imprimir las diferentes facturas y notas de crédito emitidas por dicha caja.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image91.png" alt="Campo"></p><p>Imagen 30. Campo Impresora Fiscal de la Ventana Terminal PDV</p><p>Seleccione en el campo <strong>Tipo de Documento para Orden de Devolución</strong>, el tipo de documento establecido para generar la orden de devoluciones de los clientes y finalmente poder generar la nota de crédito a partir de la misma.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image92.png" alt="Campo"></p><p>Imagen 31. Campo Tipo de Documento para Orden de Devolución</p><p>Seleccione en el campo <strong>Supervisor</strong>, el supervisor del vendedor para el cual se esta configurando el terminal PDV.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image93.png" alt="Campo"></p><p>Imagen 32. Campo Supervisor de la Ventana Terminal PDV</p><p>Seleccione el checklist <strong>Vendedor de Pasillo</strong>, para indicar que el socio del negocio empleado es un vendedor de pasillo.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image94.png" alt="Campo"></p><p>Imagen 33. Checklist Vendedor de Pasillo de la Ventana Terminal PDV</p><p>Seleccione el checklist <strong>POS Compartido</strong>, para indicar que el punto de venta es compartido.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image95.png" alt="Campo"></p><p>Imagen 34. Checklist POS Compartido de la Ventana Terminal PDV</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere para guardar el registro de los campos de la ventana <strong>Terminal PDV</strong>.</p><p><img src="/assets/img/docs/pdv-management/pdm-pdv-image96.png" alt="Campo"></p><p>Imagen 35. Icono Guardar Cambios de la Ventana Terminal PDV</p>',125)],i={},s=(0,n(13860).Z)(i,[["render",function(e,a){return(0,o.wg)(),(0,o.iD)("div",null,p)}]])},67736:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-bc31066e","path":"/docs/pdv-management/configuration.html","title":"Configuración de Terminal PDV","lang":"es-ES","frontmatter":{"title":"Configuración de Terminal PDV","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"La configuración del terminal del punto de venta permite definir los parámetros con los que serán generados los egresos e ingresos de las cajas involucradas en el proceso de ventas","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/pdv-management/configuration.html"}],["meta",{"property":"og:title","content":"Configuración de Terminal PDV"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1678384676000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":6.2,"words":1860},"filePathRelative":"docs/pdv-management/configuration.md","localizedDate":"9 de marzo de 2023"}')}}]);