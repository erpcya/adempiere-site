"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6157],{69539:(e,a,n)=>{n.r(a),n.d(a,{default:()=>i});var o=n(78744);const t=[(0,o.Fv)('<p>El proceso anular transacción de venta, permite realizar la devolución total de la venta, generando de manera automática y en estado <strong>Completo</strong>, los documentos <strong>Orden de Devolución</strong>, <strong>Devolución</strong> y <strong>Nota de Crédito</strong>.</p><p>Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso <strong>Anular Transacción de Venta</strong>, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image14.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 1. Diagrama de Anular Transacción de Venta POS</p><p>A continuación, se específica el procedimiento que se debe realizar para anular correctamente una transacción de venta de POS.</p><h2 id="ejecucion-del-proceso" tabindex="-1"><a class="header-anchor" href="#ejecucion-del-proceso" aria-hidden="true">#</a> Ejecución del Proceso</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Órdenes de Venta</strong>, por último seleccione la carpeta <strong>Punto de Venta</strong>. Para finalizar, seleccione la ventana <strong>Punto de Venta</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image15.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 2. Menú de ADempiere</p><p>La interfaz de la ventana <strong>Punto de Venta</strong>, se encuentra definida de forma específica en el documento Interfaz de Punto de Venta, elaborado por ERPyA. Realice cada uno de los procesos explicados a continuación para obtener un resultado exitoso en la anulación de la transacción de venta por el punto de venta.</p><p>Realice la búsqueda de registros de órdenes de venta generadas desde el punto de venta, seleccionando el icono <strong>Registros Históricos</strong> de la barra de herramientas de la ventana <strong>Punto de Venta</strong>, dicho proceso se encuentra explicado en el documento Barra de Herramientas del Punto de Venta, elaborado por ERPyA.</p><p>Seleccione en la ventana <strong>Orden de Venta</strong>, generada del icono <strong>Registros Históricos</strong>, la orden de venta que requiere anular.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image16.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 3. Selección de Orden de Venta a Anular</p><p>Por último, seleccione la opción <strong>OK</strong> para ubicar en la ventana <strong>Punto de Venta</strong>, el registro de la orden de venta realizada desde el punto de venta.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image17.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 4. Selección de la Opción OK de la Orden de Venta a Anular</p><p>Luego de ubicar la orden de venta que requiere anular, seleccione la opción <strong>Anular Transacción de Venta</strong>, ubicada en el menú desplegado por el icono <strong>Proceso</strong> de la barra de herramientas de la ventana <strong>Punto de Venta</strong>, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por ERPyA.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image18.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 5. Opción Anular Transacción de Venta del Icono Proceso de la Barra de Herramientas del Punto de Venta</p><p>Al seleccionar el proceso <strong>Anular Transacción de Venta</strong>, ADempiere muestra el mensaje para la confirmación de la ejecución del proceso, en el cual se debe seleccionar la opción <strong>OK</strong>, para ejecutar el mismo.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image19.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 6. Mensaje para Confirmación de Proceso</p><p>Luego de ejecutar la acción anteriormente explicada, ADempiere muestra un mensaje con el resultado del proceso.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image20.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 7. Resultado del Proceso Anular Transacción de Venta</p><p>Por último, se muestra el reporte del documento <strong>Nota de Crédito de CxC</strong> generada automáticamente desde el proceso <strong>Anular Transacción de Venta</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image21.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 8. Nota de Crédito de CxC Generada Automáticamente</p><h2 id="consulta-de-documentos-generados" tabindex="-1"><a class="header-anchor" href="#consulta-de-documentos-generados" aria-hidden="true">#</a> Consulta de Documentos Generados</h2><p>En la ventana <strong>Orden de Devolución (Cliente)</strong>, se puede visualizar el registro de la orden de devolución con ayuda del número de documento <strong>OPOS-36106</strong> generado en el reporte de la nota de crédito mostrada anteriormente.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image22.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 9. Consulta de Orden de Devolución Generada</p><p>De igual manera, se puede visualizar en la ventana <strong>Devolución Cliente</strong>, el registro generado desde el proceso anteriormente explicado.</p><p>Este documento se genera de manera automática, cuando existe un documento de entrega asociado a la venta.</p><p>Note</p><p>Recuerde que dicho documento de entrega se puede generar de manera automática según la configuración del tipo de documento, como se indica en el material Gestión PDV.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image23.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 10. Consulta de Devolución Generada</p><p>Finalmente, se puede visualizar en la ventana <strong>Documentos por Cobrar</strong>, el registro de la nota de crédito generado automáticamente desde el proceso anteriormente explicado.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image24.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 11. Consulta de Nota de Crédito Generada</p><p>Adicional a ello, se genera un egreso en caja con el tipo de documento <strong>Pago Nacional</strong>, para reflejar el movimiento de egreso realizado automáticamente al ejecutar el proceso <strong>Anular Transacción de Venta</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image25.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 12. Consulta de Pago Nacional Generado en Caja</p>',45)],r={},i=(0,n(73570).A)(r,[["render",function(e,a){return(0,o.uX)(),(0,o.CE)("div",null,t)}]])},24401:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-dbf1b38e","path":"/docs/pdv-management/cancel.html","title":"Anular Transacción de Venta","lang":"es-ES","frontmatter":{"title":"Anular Transacción de Venta","category":"Documentation","star":9,"sticky":9,"article":false,"description":"El proceso anular transacción de venta, permite realizar la devolución total de la venta, generando de manera automática y en estado Completo, los documentos Orden de Devolución, Devolución y Nota de Crédito. Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso Anular Transacción de Venta, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/pdv-management/cancel.html"}],["meta",{"property":"og:title","content":"Anular Transacción de Venta"}],["meta",{"property":"og:description","content":"El proceso anular transacción de venta, permite realizar la devolución total de la venta, generando de manera automática y en estado Completo, los documentos Orden de Devolución, Devolución y Nota de Crédito. Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso Anular Transacción de Venta, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Anular Transacción de Venta\\",\\"description\\":\\"El proceso anular transacción de venta, permite realizar la devolución total de la venta, generando de manera automática y en estado Completo, los documentos Orden de Devolución, Devolución y Nota de Crédito. Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso Anular Transacción de Venta, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.\\"}"]]},"headers":[{"level":2,"title":"Ejecución del Proceso","slug":"ejecucion-del-proceso","link":"#ejecucion-del-proceso","children":[]},{"level":2,"title":"Consulta de Documentos Generados","slug":"consulta-de-documentos-generados","link":"#consulta-de-documentos-generados","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":2.47,"words":741},"filePathRelative":"docs/pdv-management/cancel.md","localizedDate":"9 de marzo de 2023","excerpt":"<p>El proceso anular transacción de venta, permite realizar la devolución total de la venta, generando de manera automática y en estado <strong>Completo</strong>, los documentos <strong>Orden de Devolución</strong>, <strong>Devolución</strong> y <strong>Nota de Crédito</strong>.</p>\\n<p>Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso <strong>Anular Transacción de Venta</strong>, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.</p>","autoDesc":true}')}}]);