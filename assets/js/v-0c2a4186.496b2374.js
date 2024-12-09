"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[21335],{1418:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var n=o(78744);const i=[(0,n.Fv)('<p>El requerimiento principal para realizar el proceso de gestión de caja cobranza es tener una definición de caja creada, para esto contacte a un consultor de E.R.P. Consultores y Asociados. El procedimiento consta en reflejar en ADempiere el pago realizado por el socio del negocio cliente, por concepto de abono o anticipo de una orden de venta o factura de cuentas por cobrar. Dicho procedimiento se realiza registrando diariamente el cobro en caja y posteriormente el cierre de la misma.</p><p>Luego del cierre de caja, el departamento de tesorería realiza el depósito de las cajas en sus respectivos bancos correspondientes, para que caja pueda realizar su cierre y llevar el saldo inicial a cero (0) nuevamente.</p><p>El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para obtener un resultado exitoso al momento de realizar el proceso de caja cobranza en la versión 3.9.2 de ADempiere en la localización Venezuela.</p><p>A continuación se explica detalladamente el procedimiento que se debe realizar para obtener un resultado exitoso en caja cobranza.</p><ul><li>Registro de Caja Cobranza</li></ul><h2 id="registro-de-caja-cobranza" tabindex="-1"><a class="header-anchor" href="#registro-de-caja-cobranza" aria-hidden="true">#</a> Registro de Caja Cobranza</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione la carpeta <strong>Diario de Caja</strong>, por último seleccione la ventana <strong>Caja</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image36.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 1. Menú de ADempiere</p><p>Luego podrá visualizar la ventana <strong>Caja</strong>, donde debe seleccionar el icono <strong>Registro Nuevo</strong> ubicado en la barra de herramientas de ADempiere para crear un nuevo registro en caja.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image37.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 2. Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta realizando el documento <strong>Caja</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image38.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 3. Campo Organización</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA. Para ejemplificar el registro es utilizada la opción <strong>Cobro Nacional</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image39.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 4. Campo Tipo de Documento</p><p>Seleccione en el campo <strong>Cuenta</strong> la cuenta caja correspondiente al documento que esta realizando. Para ejemplificar el registro es utilizada la opción <strong>Caja Cobranza - –_Cobranza Nacional</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image40.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 5. Campo Cuenta</p><p>Note</p><p>Recuerde que para getionar el procedimiento de caja cobranza, debe tener creada la definición de caja cobranza.</p><p>Seleccione en el campo <strong>Orden de Venta</strong>, la orden de venta que será reflejada en la caja que esta realizando. Para ejemplificar el registro es utilizada la orden de venta <strong>OVN-28</strong> creada anteriormente.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image41.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 6. Campo Orden de Venta</p><p>Note</p><p>Al seleccionar la orden de venta, se cargan automáticamente los campos <strong>Socio del Negocio</strong> y <strong>Total de Caja</strong>, con la información contenida en la orden seleccionada. Adicional a ello, se tilda el checklist <strong>Anticipo</strong>.</p><p>Introduzca en el campo <strong>Total de Caja</strong> el monto total del pago realizado por el socio del negocio cliente, correspondiente al abono o anticipo del mismo. Para ejemplificar el registro el monto utilizado es <strong>90.000</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image42.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 7. Monto total del pago de abono o anticipo realizado por el socio del negocio cliente.</p><p>Seleccione en el campo <strong>Tipo de Pago</strong>, la forma de pago utilizada por el socio del negocio cliente. Para ejemplificar el registro es utilizada la opción <strong>Depósito Directo</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image43.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 8. Campo Tipo de Pago</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere.</p><p>Seleccione la opción <strong>Completar</strong>, ubicada en la parte inferior del documento.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image44.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 9. Opción Completar</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>Ok</strong> para completar el documento <strong>Caja</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image45.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 10. Acción Completar</p><p>Realice el procedimiento regular para generar un cierre de caja, explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA, seleccionando en el campo <strong>Tipo de Documento</strong> la opción <strong>Cierre de Caja Cobranza</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image46.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 11. Cierre de Caja Cobranza</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione la carpeta <strong>Diario de Caja</strong>, por último seleccione la ventana <strong>Depósito de Caja</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image47.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 12. Menú de ADempiere</p><p>Luego podrá visualizar la ventana de búsqueda inteligente <strong>Depósito de Caja</strong>, con diferentes campos o filtros para realizar la búsqueda de información en base a lo requerido por el usuario.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image48.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 13. Ventana de Búsqueda Inteligente Depósito de Caja</p><p>Seleccione en el campo <strong>Cuenta Bancaria</strong>, la caja cobranza seleccionada en el campo <strong>Cuenta</strong> de la ventana <strong>Caja</strong>. Para ejemplificar el registro es utilizada la cuenta bancaria <strong>Caja Cobranza - –_Cobranza Nacional</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image49.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 14. Campo Cuenta Bancaria</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para filtar búsqueda de la información en base a lo seleccionado.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image50.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 15. Opción Comenzar Búsqueda</p><p>Podrá visualizar la ventana de búsqueda inteligente <strong>Depósito de Caja</strong>, con los diferentes registros asociados a la cuenta bancaria seleccionada.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image51.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 16. Ventana de Búsqueda Inteligente Depósito de Caja</p><p>Seleccione en el campo <strong>Fecha de la Transacción</strong>, la fecha contable de la caja de la cual se va a realizar el depósito.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image52.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 17. Campo Fecha de la Transacción</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, la compañía para la cual realizó los documentos <strong>Caja</strong>, <strong>Cierre de Caja</strong> y para la cual va a realizar el <strong>Depósito de Caja</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image53.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 18. Campo Socio del Negocio</p><p>El checklist <strong>Dividir Depósitos</strong> destildado, permite visualizar el campo <strong>No. del Documento</strong> para ingresar el número de referencia del pago realizado por el socio del negocio y es utilizado cuando se tienen varios registros de caja con el mismo número de referencia, generando un (1) documento de egreso en <strong>Caja</strong> y un (1) documento de cobro en <strong>Pago/Cobro</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image54.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 19. Checklist Dividir Depósitos Destildado</p><p>Adicional a ello, al tildar el checklist <strong>Dividir Depósitos</strong> no puede ser visualizado el campo <strong>No. del Documento</strong>, esta acción permite que sea generado un (1) documento de egreso en <strong>Caja</strong>, con la sumatoria de todos los registros de documentos <strong>Caja</strong> que sean seleccionados en la ventana de búsqueda inteligente <strong>Depósito de Caja</strong> y un (1) documento de cobro en <strong>Pago/Cobro</strong>, por cada uno de los registros seleccionados en dicha ventana.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image55.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 20. Checklist Dividir Depósitos Tildado</p><p>Seleccione en el campo <strong>Tipo de Documento para Retiros</strong>, el tipo de documento que será generado en la ventana <strong>Caja</strong>. Para ejemplificar el registro, el tipo de documento para retiros utilizado es <strong>Egreso Caja</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image56.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 21. Campo Tipo de Documento para Retiros</p><p>Seleccione en el campo <strong>Cuenta Bancaria</strong>, la cuenta bancaria a la cual será realizado el depósito de caja.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image57.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 22. Campo Cuenta Bancaria</p><p>Introduzca en el campo <strong>No. del Documento</strong>, el número de referencia del pago realizado por el socio del negocio cliente.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image58.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 23. Campo Número del Documento</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo correspondiente al procedimiento que se esta realizando. Para ejemplificar el registro es utilizado el cargo <strong>Efectivo en Transito Cobranza</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image59.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 24. Campo Cargo</p><p>Seleccione en el campo <strong>Tipo de Documento para Depósitos</strong>, el tipo de documento que será generado en la ventana <strong>Pago/Cobro</strong>. Para ejemplificar el registro, el tipo de documento para depósito utilizado es <strong>Cobro Nacional</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image60.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 25. Campo Tipo de Documento para Depósito</p><p>Seleccione los diferentes registros de caja que pertenezcan a un mismo banco y la opción <strong>OK</strong> para ejecutar el proceso <strong>Depósito de Caja</strong> con la información ingresada en la ventana de búsqueda inteligente <strong>Depósito de Caja</strong>. Para ejemplificar el registro es seleccionado solo registro de caja <strong>CCxCN-41</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image61.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 26. Selección de Caja y Opción OK</p><p>Note</p><p>Se deben seleccionar solo los registros que se conozca que pertencen al banco seleccionado en el campo <strong>Cuenta Bancaria</strong>.</p><p>Podrá visualizar los números de documentos en la parte inferior izquierda de la ventana de búsqueda inteligente <strong>Depósito de Caja</strong>. Dichos números de documentos pueden ser utilizados para ubicar los documetos generados.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image62.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 27. Números de Documento Generados</p><p>Al consultar del documento de egreso generado en la ventana <strong>Caja</strong>, con ayuda del número de documento generado en la parte inferior izquierda de la ventana de búsqueda inteligente <strong>Depósito de Caja</strong>, se puede visualizar el registro de la siguiente manera.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image63.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 28. Documento de Egreso Generado en Caja</p><p>Al consultar del documento de cobro generado en la ventana <strong>Pago/Cobro</strong>, con ayuda del número de documento generado en la parte inferior izquierda de la ventana de búsqueda inteligente <strong>Depósito de Caja</strong>, se puede visualizar el registro de la siguiente manera.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image64.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 29. Documento de Cobro Generado en Pago/Cobro</p><p>Realice el procedimiento regular para generar un cierre de caja, explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA, seleccionando en el campo <strong>Tipo de Documento</strong> la opción <strong>Cierre de Caja Administrativo</strong>.</p><figure><img src="/assets/img/docs/balance-management/bam-balance-image65.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 30. Cierre de Caja Administrativo</p><p>Note</p><p>Para identificar los cobros sin registros en ADempiere, se debe realizar el procedimiento explicado en el proceso Pagos/Cobros sin Registros del documento <strong>Conciliaciones Automáticas</strong>.</p>',106)],r={},t=(0,o(73570).A)(r,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,i)}]])},37738:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-0c2a4186","path":"/docs/balance-management/collection-box.html","title":"Caja Cobranza","lang":"es-ES","frontmatter":{"title":"Caja Cobranza","category":"Documentation","star":9,"sticky":9,"article":false,"description":"El requerimiento principal para realizar el proceso de gestión de caja cobranza es tener una definición de caja creada, para esto contacte a un consultor de E.R.P. Consultores y Asociados. El procedimiento consta en reflejar en ADempiere el pago realizado por el socio del negocio cliente, por concepto de abono o anticipo de una orden de venta o factura de cuentas por cobrar. Dicho procedimiento se realiza registrando diariamente el cobro en caja y posteriormente el cierre de la misma.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/balance-management/collection-box.html"}],["meta",{"property":"og:title","content":"Caja Cobranza"}],["meta",{"property":"og:description","content":"El requerimiento principal para realizar el proceso de gestión de caja cobranza es tener una definición de caja creada, para esto contacte a un consultor de E.R.P. Consultores y Asociados. El procedimiento consta en reflejar en ADempiere el pago realizado por el socio del negocio cliente, por concepto de abono o anticipo de una orden de venta o factura de cuentas por cobrar. Dicho procedimiento se realiza registrando diariamente el cobro en caja y posteriormente el cierre de la misma."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Caja Cobranza\\",\\"description\\":\\"El requerimiento principal para realizar el proceso de gestión de caja cobranza es tener una definición de caja creada, para esto contacte a un consultor de E.R.P. Consultores y Asociados. El procedimiento consta en reflejar en ADempiere el pago realizado por el socio del negocio cliente, por concepto de abono o anticipo de una orden de venta o factura de cuentas por cobrar. Dicho procedimiento se realiza registrando diariamente el cobro en caja y posteriormente el cierre de la misma.\\"}"]]},"headers":[{"level":2,"title":"Registro de Caja Cobranza","slug":"registro-de-caja-cobranza","link":"#registro-de-caja-cobranza","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":5.4,"words":1619},"filePathRelative":"docs/balance-management/collection-box.md","localizedDate":"9 de marzo de 2023","excerpt":"<p>El requerimiento principal para realizar el proceso de gestión de caja cobranza es tener una definición de caja creada, para esto contacte a un consultor de E.R.P. Consultores y Asociados. El procedimiento consta en reflejar en ADempiere el pago realizado por el socio del negocio cliente, por concepto de abono o anticipo de una orden de venta o factura de cuentas por cobrar. Dicho procedimiento se realiza registrando diariamente el cobro en caja y posteriormente el cierre de la misma.</p>","autoDesc":true}')}}]);