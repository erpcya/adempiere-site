"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[19825],{73417:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var n=o(78744);const r=[(0,n.Fv)('<p>El proceso cierre de caja del punto de venta consiste en ejecutar el mismo desde la ventana <strong>Punto de Venta</strong>. Su finalidad es completar el registro de cierre de caja creado con la cuenta <strong>Caja POS</strong> en la que fueron realizadas las transacciones de venta, dejando la cuenta en su saldo inicial. Para ello, es necesario que se realice el flujo de trabajo regular establecido para el punto de venta, es decir, se deben realizar los siguientes procesos:</p><p>La apertura de caja desde el proceso de punto de venta</p><p>La venta de los productos desde el punto de venta</p><p>El retiro de fondos desde el punto de venta</p><p>Cada uno de los procesos anteriormente nombrados, generan documentos que se asocian de manera automática a la línea de los registros creados en la ventana <strong>Cierre de Caja</strong>, con las cuentas <strong>Caja POS</strong> y <strong>Caja Administrativa</strong>.</p><p>Adicional a ello, al ejecutar el proceso cierre de caja del punto de venta, ADempiere deja el cierre de caja creado con la cuenta <strong>Caja Administrativa</strong>, en estado <strong>Borrador</strong>, para que este sea completado de forma manual.</p><p>Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso <strong>Cierre de Caja</strong>, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image26.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 1. Diagrama de Cierre de Caja POS</p><p>A continuación, se específica el procedimiento que se debe realizar para ejecutar correctamente el cierre de caja POS.</p><h2 id="ejecucion-del-proceso" tabindex="-1"><a class="header-anchor" href="#ejecucion-del-proceso" aria-hidden="true">#</a> Ejecución del Proceso</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Órdenes de Venta</strong>, por último seleccione la carpeta <strong>Punto de Venta</strong>. Para finalizar, seleccione la ventana <strong>Punto de Venta</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image27.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 2. Menú de ADempiere</p><p>Luego de realizar desde el punto de venta todas las tomas de pedido del día, seleccione la opción <strong>Cerrar Caja del Punto de Venta</strong>, ubicada en el menú desplegado por el icono <strong>Proceso</strong> de la barra de herramientas de la ventana <strong>Punto de Venta</strong>, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por ERPyA.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image28.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 3. Opción Cerrar Caja del Punto de Venta</p><p>Podrá visualizar la ventana <strong>Cerrar Caja del Punto de Venta</strong>, con diferentes campos que permiten filtrar la búsqueda de información según lo requerido por el socio del negocio vendedor que esta realizando el cierre de caja.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image29.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 4. Ventana Cierre de Caja del Punto de Venta</p><p>En el campo <strong>Terminal PDV</strong>, podrá visualizar el terminal configurado para el socio del negocio vendedor.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image30.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 5. Campo Terminal PDV del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta</p><p>En el campo <strong>Cuenta Bancaria</strong>, podrá visualizar la cuenta caja asociada al socio del negocio vendedor en la configuración del terminal PDV.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image31.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 6. Campo Cuenta Bancaria del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta</p><p>Seleccione en el campo <strong>Fecha de la Transacción</strong>, el rango de fecha en el cual fue realizada la toma de pedido por medio del punto de venta.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image32.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 7. Campo Fecha de la Transacción del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta</p><p>Seleccione en el campo <strong>Tipo de Licitación</strong>, el tipo de pago por el cual requiere filtrar las tomas de pedido realizadas.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image33.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 8. Campo Tipo de Licitación del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta</p><p>Indique en el campo <strong>Cobros</strong>, si las tomas de pedido realizadas fueron cobradas o no.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image34.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 9. Campo Cobros del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para realizar la búsqueda de todas las tomas de pedido realizadas por el socio del negocio vendedor, según lo seleccionado en los campos anteriormente explicados.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image35.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 10. Opción Comenzar Búsqueda para Filtrar la Búsqueda de la Ventana Cierre de Caja del Punto de Venta</p><p>Podrá visualizar el listado de todos los cobros realizados por las órdenes de ventas POS generadas desde el punto de venta. Así como también, las transacciones de apertura y retiros de fondos que se realicen en la caja durante el día, para realizar el cierre de caja debe seleccionar todos los registros de transacciones que contiene la misma.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image36.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 11. Listado de Todos los Cobros Realizados por las Órdenes de Ventas del Punto de Venta</p><p>En el grupo de campos <strong>Parámetros</strong>, podrá visualizar los siguientes campos:</p><p>En el campo <strong>Terminal PDV</strong>, podrá visualizar el terminal configurado para el socio del negocio vendedor.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image37.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 12. Campo Terminal PDV de la Ventana Cierre de Caja del Punto de Venta</p><p>En el campo <strong>Cuenta Bancaria</strong>, podrá visualizar la cuenta caja asociada al socio del negocio vendedor en la configuración del terminal PDV.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image38.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 13. Campo Cuenta Bancaria de la Ventana Cierre de Caja del Punto de Venta</p><p>En el campo <strong>Fecha de la Transacción</strong>, el rango de fecha en el cual fue realizada la toma de pedido por medio del punto de venta.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image39.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 14. Campo Fecha de la Ventana Cierre de Caja del Punto de Venta</p><p>Para calcular el valor correspondiente a los siguientes campos, ADempiere realiza la conversión de todos los montos de los pagos y cobros de la caja, a la moneda de la caja para luego realizar los respectivos cálculos y obtener el valor de cada uno.</p><p>En el campo <strong>Total de la Línea</strong>, la cantidad total de la línea con impuestos incluidos.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image40.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 15. Campo Total de la Línea de la Ventana Cierre de Caja del Punto de Venta</p><p>Note</p><p>El valor de este campo proviene de la sumatoria del gran total de todas las órdenes de venta.</p><p>En el campo <strong>Total Pagado</strong>, la monto total pagado de las órdenes de venta realizadas desde el punto de venta.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image41.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 16. Campo Total Pagado de la Ventana Cierre de Caja del Punto de Venta</p><p>Note</p><p>El valor de este campo proviene de la sumatoria de todos los cobros y pagos realizados en la caja, convertidos a la moneda de la caja, (Cobros Convertidos a la Moneda de la Caja + Pagos Convertidos a la Moneda de la Caja).</p><p>En el campo <strong>Total Abierto</strong>, el monto total abierto de las órdenes de venta realizadas desde el punto de venta.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image42.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 17. Campo Total Abierto de la Ventana Cierre de Caja del Punto de Venta</p><p>Note</p><p>Este valor proviene de la sumatoria de todos los montos pendientes por cobrar cuando las ordenes de ventas son a crédito.</p><p>En el campo <strong>Diferencia Monto</strong>, podrá visualizar el monto resultante de la sumatoria del monto total de la apertura más el resultado del total cobrado menos el total de los retiros.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image43.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 18. Campo Diferencia Monto de la Ventana Cierre de Caja del Punto de Venta</p><p>Note</p><p>El valor de este campo proviene de la sumatoria de todos los montos pendientes por cobrar de las órdenes de venta, para el cálculo del mismo se emplea la fórmula (Total de la Apertura + (Total de los Cobros - Total de los Retiros)).</p><p>El campo <strong>Diferencia Edo. de Cuenta</strong>, muestra el saldo que posee la cuenta caja en la que se encuentra realizando el proceso <strong>Cierre de Caja</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image44.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 19. Campo Diferencia Edo. de Cuenta</p><p>Tilde el checklist <strong>Sobre/Sub Pago</strong>, para indicar que existe un sobre pago (no contabilizado) o un sub pago (pago parcial).</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image45.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 20. Checklist Sobre/Sub Pago de la Ventana Cierre de Caja del Punto de Venta</p><p>Note</p><p>Si el punto de venta tuvo pagos de más (Sobre) o de menos (Sub), ADempiere calcula la diferencia. Para el caso expuesto en el presente material, no es necesario seleccionar el checklist.</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo correspondiente al cierre de caja que se encuentra realizando desde el punto de venta.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image46.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 21. Campo Cargo de la Ventana Cierre de Caja del Punto de Venta</p><p>Note</p><p>Cuando existen pagos de más (Sobre) o de menos (Sub), se selecciona un cargo y ADempiere genera una linea en el cierre contra el cargo seleccionado, permitiendo cuadrar la caja del día. Para el caso expuesto en el presente material, no es necesario seleccionar ningún cargo.</p><p>Seleccione la opción <strong>OK</strong>, para realizar el cierre de caja del punto de venta con los cobros seleccionados y generar el documento pertinente en la ventana <strong>Cierre de Caja</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image47.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 22. Opción OK de la Ventana Cierre de Caja del Punto de Venta</p><h2 id="consultar-registro-en-cierre-de-caja" tabindex="-1"><a class="header-anchor" href="#consultar-registro-en-cierre-de-caja" aria-hidden="true">#</a> Consultar Registro en Cierre de Caja</h2><p>Al ejecutar el proceso <strong>Cerrar de Caja del Punto de Venta</strong>, se completa el registro con la cuenta <strong>Caja 01</strong>, creado en la ventana <strong>Cierre de Caja</strong>, llevando la misma a cero (0) nuevamente.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image48.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 23. Cierre de Caja 01 Completada</p><p>Podrá visualizar en la pestaña <strong>Línea de Cierre de Caja</strong>, los registros que fueron creados automáticamente a lo largo del día según las transacciones que fueron realizadas en la caja. Basicamente estos son:</p><p>Apertura: Crea el registro de cierre de caja (Caja 01), asociando en la línea del mismo el documento de ingreso generado en caja.</p><p>Cobros: Crea en la línea de cierre de caja (Caja 01), un registro por cada documento de cobro generado en caja, asociando el documento a la línea.</p><p>Retiro de Fondos: Crea en la línea de cierre de caja (Caja 01), un registro por cada documento de egreso generado en caja, asociando el documento a la línea.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image49.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 24. Pestaña Línea de Cierre de Caja 01 Completada</p><h2 id="completar-registro-en-cierre-de-caja" tabindex="-1"><a class="header-anchor" href="#completar-registro-en-cierre-de-caja" aria-hidden="true">#</a> Completar Registro en Cierre de Caja</h2><p>Ubique el registro de la <strong>Caja Administrativa</strong> generado en la ventna <strong>Cierre de Caja</strong>, el cual se encuentra en estado <strong>Borrador</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image50.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 25. Cierre de Caja Administrativa en Estado Borrador</p><p>Al seleccionar la pestaña <strong>Línea de Cierre de Caja</strong>, podrá visualizar las líneas creadas con los registros asociados de apertura si fue utilizada la caja para realizar apertura y retiro si fueron realizados retiros en la moneda de la caja en la que se encuentra.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image51.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 26. Pestaña Línea de Cierre de Caja</p><p>Regrese a la pestaña principal <strong>Cierre de Caja</strong>, para ejecutar el cierre de la misma.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image52.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 27. Pestaña Principal Cierre de Caja</p><p>Seleccione la opción <strong>Completar</strong>, para completar el cierre de caja de la <strong>Caja Administrativa</strong>.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image53.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 28. Opción Completar del Cierre de Caja</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para completar el registro.</p><figure><img src="/assets/img/docs/pdv-management/pdm-pdv-image54.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 29. Acción Completar y Opción OK del Cierre de Caja</p>',114)],i={},t=(0,o(73570).A)(i,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,r)}]])},14540:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-16241049","path":"/docs/pdv-management/close-box.html","title":"Cierre de Caja del Punto de Venta","lang":"es-ES","frontmatter":{"title":"Cierre de Caja del Punto de Venta","category":"Documentation","star":9,"sticky":9,"article":false,"description":"El proceso cierre de caja del punto de venta consiste en ejecutar el mismo desde la ventana Punto de Venta. Su finalidad es completar el registro de cierre de caja creado con la cuenta Caja POS en la que fueron realizadas las transacciones de venta, dejando la cuenta en su saldo inicial. Para ello, es necesario que se realice el flujo de trabajo regular establecido para el punto de venta, es decir, se deben realizar los siguientes procesos:","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/pdv-management/close-box.html"}],["meta",{"property":"og:title","content":"Cierre de Caja del Punto de Venta"}],["meta",{"property":"og:description","content":"El proceso cierre de caja del punto de venta consiste en ejecutar el mismo desde la ventana Punto de Venta. Su finalidad es completar el registro de cierre de caja creado con la cuenta Caja POS en la que fueron realizadas las transacciones de venta, dejando la cuenta en su saldo inicial. Para ello, es necesario que se realice el flujo de trabajo regular establecido para el punto de venta, es decir, se deben realizar los siguientes procesos:"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Cierre de Caja del Punto de Venta\\",\\"description\\":\\"El proceso cierre de caja del punto de venta consiste en ejecutar el mismo desde la ventana Punto de Venta. Su finalidad es completar el registro de cierre de caja creado con la cuenta Caja POS en la que fueron realizadas las transacciones de venta, dejando la cuenta en su saldo inicial. Para ello, es necesario que se realice el flujo de trabajo regular establecido para el punto de venta, es decir, se deben realizar los siguientes procesos:\\"}"]]},"headers":[{"level":2,"title":"Ejecución del Proceso","slug":"ejecucion-del-proceso","link":"#ejecucion-del-proceso","children":[]},{"level":2,"title":"Consultar Registro en Cierre de Caja","slug":"consultar-registro-en-cierre-de-caja","link":"#consultar-registro-en-cierre-de-caja","children":[]},{"level":2,"title":"Completar Registro en Cierre de Caja","slug":"completar-registro-en-cierre-de-caja","link":"#completar-registro-en-cierre-de-caja","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":6.26,"words":1878},"filePathRelative":"docs/pdv-management/close-box.md","localizedDate":"9 de marzo de 2023","excerpt":"<p>El proceso cierre de caja del punto de venta consiste en ejecutar el mismo desde la ventana <strong>Punto de Venta</strong>. Su finalidad es completar el registro de cierre de caja creado con la cuenta <strong>Caja POS</strong> en la que fueron realizadas las transacciones de venta, dejando la cuenta en su saldo inicial. Para ello, es necesario que se realice el flujo de trabajo regular establecido para el punto de venta, es decir, se deben realizar los siguientes procesos:</p>","autoDesc":true}')}}]);