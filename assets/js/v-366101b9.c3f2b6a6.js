"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83773],{317:(e,a,i)=>{i.r(a),i.d(a,{default:()=>s});var r=i(78e3);const t=[(0,r.uE)('<h2 id="title-punto-de-ventacategory-documentationstar-9sticky-9article-false" tabindex="-1"><a class="header-anchor" href="#title-punto-de-ventacategory-documentationstar-9sticky-9article-false" aria-hidden="true">#</a> title: Punto de Venta category: Documentation star: 9 sticky: 9 article: false</h2><h1 id="¿que-es-un-punto-de-venta" tabindex="-1"><a class="header-anchor" href="#¿que-es-un-punto-de-venta" aria-hidden="true">#</a> ¿Qué es un Punto de Venta?</h1><p>Presupuestos, facturación, cobranza, retenciones, devoluciones parciales, el inventario y una venta electrónica son solo un inicio. El Punto de venta de ADempiere para tiendas es tu herramienta inteligente y agil para conectar todas las transacciones de ventas que mantienen a tu negocio. <img src="https://github.com/erpcya/docs/assets/9578152/7861fef2-2a3d-4c3e-a8e1-706aadca2411" alt="POS (1)"></p><h1 id="¿que-beneficio-traera-a-tu-empresa" tabindex="-1"><a class="header-anchor" href="#¿que-beneficio-traera-a-tu-empresa" aria-hidden="true">#</a> ¿Qué Beneficio Traerá a Tu Empresa?</h1><ul><li>Operación agil y eficiente</li><li>Rapidez y seguridad</li><li>Gestión multimonedas</li><li>Gestión Tributaria</li><li>Reportes Variados de Cierres</li><li>Ofrecer más opciones de pago</li><li>Obtener datos precisos de tus ventas</li><li>Mejorar la experiencia del cliente</li></ul><h1 id="¿que-ofrece-adempiere" tabindex="-1"><a class="header-anchor" href="#¿que-ofrece-adempiere" aria-hidden="true">#</a> ¿Qué ofrece ADempiere?</h1><p>ADempiere ofrece una herramienta con la que tendrás acceso a tu tienda desde cualquier lugar.</p><ul><li>Controla las ventas de tus empleados.</li><li>Además de informes en tiempo real, consulta informes diarios, semanales o mensuales.</li><li>Consulta tus pedidos recibidos y por recibir.</li><li>¿Quieres ver cómo va tu negocio? ¡Hazlo desde cualquier lugar!</li><li>Generar una factura de forma directa en cualquier moneda.</li><li>Cobrar en diferentes metodos de pagos.</li><li>Generación de IGTF.</li><li>Carga de Comprobante de IVA.</li><li>Devoluciones Totales y Parciales.</li><li>Arqueo de Cajas.</li></ul><p>El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una venta en ADempiere mediante su punto de venta, en su versión 3.9.4 para la localización Venezuela.</p><h1 id="¿que-consideraciones-debe-tomar-en-cuenta" tabindex="-1"><a class="header-anchor" href="#¿que-consideraciones-debe-tomar-en-cuenta" aria-hidden="true">#</a> ¿Qué Consideraciones Debe Tomar en Cuenta?</h1><ul><li>El asesor debe estar configurado en el terminal. <ul><li>Debe tener acceso a la organización.</li><li>Debe tener acceso al terminal.</li></ul></li><li>El Cajero debe estar configurado en el terminal. <ul><li>Debe tener acceso a la organización.</li><li>Debe tener acceso al terminal.</li></ul></li><li>La tasa de cambio del día debe ser creada con antelación.</li><li>El arqueo de caja del día anterior debe haberlo completado.</li><li>El Cajero debe aperturar la caja con el dinero asignado como fondo de caja.</li></ul><h1 id="gestion-de-asesor" tabindex="-1"><a class="header-anchor" href="#gestion-de-asesor" aria-hidden="true">#</a> Gestión de Asesor</h1><p>La gestión del asesor se basa en brindar asesoramiento y asistencia a los clientes para maximizar la probabilidad de una venta. En el punto de venta será responsable de diferentes tareas relacionadas con la fuerza de ventas y con esto crea un entorno atractivo para los clientes.</p><p>Un asesor de ventas debe poder registrar un cliente, actualizar datos, cotizar, tomar un pedido y finalmente liberarlo para ser facturado en una caja asignada.</p><p><img src="https://github.com/erpcya/docs/assets/9578152/21daab7f-b799-4af9-81e8-5c64baa3f345" alt="asesorvpos"></p><h2 id="seleccion-de-terminal-asignado" tabindex="-1"><a class="header-anchor" href="#seleccion-de-terminal-asignado" aria-hidden="true">#</a> Selección de Terminal Asignado</h2><p>El primer paso para gestionar el terminal y comenzar a tomar pedidos es seleccionar el terminal que desea operar, para esto proceda de la siguiente manera:</p><ol><li><p>Ingrese de manera habitual a la aplicación. <img src="https://github.com/erpcya/docs/assets/9578152/a3df6e68-4ced-4bcb-965a-fc3803300760" alt="image"></p></li><li><p>Una vez dentro seleccione la opción <strong>Punto de Venta</strong>, ubicado en gestión de ventas. <img src="https://github.com/erpcya/docs/assets/9578152/55ad8715-7388-4af0-9f0e-e5c7a6e29f5e" alt="image"></p></li><li><p>Estando en el Punto de venta vaya a la opción punto de venta. <img src="https://github.com/erpcya/docs/assets/9578152/018eb774-5f2c-4b2c-b1a2-b78e5446072a" alt="image"></p></li><li><p>Seleccione el terminal con el que desea trabajar. <img src="https://github.com/erpcya/docs/assets/9578152/556d9488-09e8-4d02-a56c-5e64e0671518" alt="image"></p></li><li><p>Una vez seleccionada la opción, la aplicación recargará las opciones de acuerdo a su permisología.</p></li></ol><h2 id="gestionar-clientes" tabindex="-1"><a class="header-anchor" href="#gestionar-clientes" aria-hidden="true">#</a> Gestionar Clientes</h2><p>El Asesor puede gestionar la información de sus clientes, en este sentido, podrá crear o actualizar la información de sus clientes.</p><h3 id="crear-nuevo-cliente" tabindex="-1"><a class="header-anchor" href="#crear-nuevo-cliente" aria-hidden="true">#</a> Crear Nuevo Cliente</h3><p>Si usted desea crear un nuevo cliente en el Punto de Venta deberá realizar la siguiente operación:</p><ol><li><p>Vaya la opción <strong>Socio de Negocio</strong> del Punto de Venta <img src="https://github.com/erpcya/docs/assets/9578152/2cc6a2bf-3abb-4ef8-af84-262f8f96c88d" alt="image"></p></li><li><p>Seleccione la opción Nuevo <strong>Socio de Negocio</strong><img src="https://github.com/erpcya/docs/assets/9578152/b5119a45-ec7c-45b1-bc7c-50c683088774" alt="image"></p></li><li><p>Se desplegará el siguiente formulario <img src="https://github.com/erpcya/docs/assets/9578152/0dfb0a2d-1996-4207-8bbb-2ab2565cfc0d" alt="image"></p></li><li><p>A continuación indique el código del cliente (Cédula/RIF) en el campo <strong>Código</strong>. <img src="https://github.com/erpcya/docs/assets/9578152/5df9e4bd-6dcd-4007-8f3a-a8b84cd2c703" alt="image"></p></li></ol><div class="custom-container info"><p class="custom-container-title">Nota</p><p>ADempiere actualiza de modo automático el campo <strong>Número Identificación</strong>, este campo es utilizado para reportes fiscales (Ejemplo:IGTF).</p></div><ol start="5"><li><p>A continuación indique el nombre o razón social del cliente en el campo <strong>Nombre</strong>. <img src="https://github.com/erpcya/docs/assets/9578152/9b6e832a-f525-46d3-9751-e0552b484838" alt="image"></p></li><li><p>Si es persona jurídica seleccione si es contribuyente en el campo <strong>Contribuyente</strong><img src="https://github.com/erpcya/docs/assets/9578152/499f3eb4-a1dd-4806-8fa9-8332da92b63e" alt="image"></p></li><li><p>Si es persona jurídica seleccione el tipo de contribuyente <img src="https://github.com/erpcya/docs/assets/9578152/cf095e9a-cfba-483f-b0a6-1f1156e571e7" alt="image"></p></li><li><p>Registre su correo electrónico en el campo <strong>E-mail</strong><img src="https://github.com/erpcya/docs/assets/9578152/382a0b73-85dd-412f-bd43-64ed54e14bef" alt="image"></p></li><li><p>Registre su teléfono en el campo <strong>Teléfono</strong><img src="https://github.com/erpcya/docs/assets/9578152/5dd10b95-86d3-4e63-9cc0-0993c143f96c" alt="image"></p></li></ol><p>10.Registre el detalle de la dirección:</p><ol><li><p>Registre la referencia de la dirección en el campo <strong>Referencia</strong></p></li><li><p>Registre la país de la dirección en el campo <strong>País</strong></p></li><li><p>Registre la región de la dirección en el campo <strong>Región</strong></p></li><li><p>Registre la ciudad de la dirección en el campo <strong>Ciudad</strong></p></li><li><p>Registre el detalle de la dirección en el campo <strong>Dirección 1</strong><img src="https://github.com/erpcya/docs/assets/9578152/a213662d-5198-480a-bcd1-a4aa9acf1332" alt="image"></p></li><li><p>Seleccione la opción ok, y ya su cliente estará registrado y listo para ser usado.</p></li><li></li></ol><p>|Nombre Cliente|</p><p><img src="/assets/img/docs/sales-management/sam-sales-image312.png" alt="Campo"></p><p>Imagen 7. Nombre Socio de Negocio</p><h3 id="actualizar-cliente" tabindex="-1"><a class="header-anchor" href="#actualizar-cliente" aria-hidden="true">#</a> Actualizar Cliente</h3><h2 id="registro-de-nuevo-pedido" tabindex="-1"><a class="header-anchor" href="#registro-de-nuevo-pedido" aria-hidden="true">#</a> Registro de Nuevo Pedido</h2><h2 id="consulta-de-producto" tabindex="-1"><a class="header-anchor" href="#consulta-de-producto" aria-hidden="true">#</a> Consulta de Producto</h2><h1 id="gestion-de-cajero" tabindex="-1"><a class="header-anchor" href="#gestion-de-cajero" aria-hidden="true">#</a> Gestión de Cajero</h1><p>La gestión del cajero es administrar todas las transacciones con los clientes de manera eficiente. Entre las responsabilidades de un cajero se incluyen abrir su caja, recibir pagos y emitir facturas o recibos, entregar los productos y realizar un seguimiento de todas las transacciones de efectivo y crédito hasta llegar a su arqueo de caja.</p><p><img src="https://github.com/erpcya/docs/assets/9578152/15088f61-4d32-477f-b236-f2e2aa9dc1c3" alt="CajeroPOS "></p><h2 id="seleccion-de-terminal-asignado-1" tabindex="-1"><a class="header-anchor" href="#seleccion-de-terminal-asignado-1" aria-hidden="true">#</a> Selección de Terminal Asignado</h2><p>El primer paso para gestionar el terminal y comenzar a tomar pedidos es seleccionar el terminal que desea operar, para esto proceda de la siguiente manera:</p><ol><li><p>Ingrese de manera habitual a la aplicación. <img src="https://github.com/erpcya/docs/assets/9578152/a3df6e68-4ced-4bcb-965a-fc3803300760" alt="image"></p></li><li><p>Una vez dentro seleccione la opción <strong>Punto de Venta</strong>, ubicado en gestión de ventas. <img src="https://github.com/erpcya/docs/assets/9578152/55ad8715-7388-4af0-9f0e-e5c7a6e29f5e" alt="image"></p></li><li><p>Estando en el Punto de venta vaya a la opción punto de venta. <img src="https://github.com/erpcya/docs/assets/9578152/7a615600-37f7-4cd7-92c0-969f89db1e91" alt="image"></p></li><li><p>Seleccione el terminal con el que desea trabajar. <img src="https://github.com/erpcya/docs/assets/9578152/85c0507c-554d-4a11-9c6e-224eaacee627" alt="image"></p></li><li><p>Una vez seleccionada la opción, la aplicación recargará las opciones de acuerdo a su permisología.</p></li></ol><h2 id="apertura-de-caja" tabindex="-1"><a class="header-anchor" href="#apertura-de-caja" aria-hidden="true">#</a> Apertura de Caja</h2><h3 id="apertura-desde-un-fondo-de-caja" tabindex="-1"><a class="header-anchor" href="#apertura-desde-un-fondo-de-caja" aria-hidden="true">#</a> Apertura Desde un Fondo de Caja</h3><h3 id="crear-fondo-de-caja" tabindex="-1"><a class="header-anchor" href="#crear-fondo-de-caja" aria-hidden="true">#</a> Crear Fondo de Caja</h3><h2 id="seleccion-de-pedido" tabindex="-1"><a class="header-anchor" href="#seleccion-de-pedido" aria-hidden="true">#</a> Selección de Pedido</h2><h2 id="cambios-de-atributos" tabindex="-1"><a class="header-anchor" href="#cambios-de-atributos" aria-hidden="true">#</a> Cambios de Atributos</h2><h2 id="cobranza" tabindex="-1"><a class="header-anchor" href="#cobranza" aria-hidden="true">#</a> Cobranza</h2><h3 id="efectivo" tabindex="-1"><a class="header-anchor" href="#efectivo" aria-hidden="true">#</a> Efectivo</h3><h3 id="transferencia" tabindex="-1"><a class="header-anchor" href="#transferencia" aria-hidden="true">#</a> Transferencia</h3><h3 id="tarjeta-de-credito" tabindex="-1"><a class="header-anchor" href="#tarjeta-de-credito" aria-hidden="true">#</a> Tarjeta de Crédito</h3><h3 id="tarjeta-de-debito" tabindex="-1"><a class="header-anchor" href="#tarjeta-de-debito" aria-hidden="true">#</a> Tarjeta de Débito</h3><h3 id="pago-movil" tabindex="-1"><a class="header-anchor" href="#pago-movil" aria-hidden="true">#</a> Pago Móvil</h3><h3 id="tarjeta-de-credito-1" tabindex="-1"><a class="header-anchor" href="#tarjeta-de-credito-1" aria-hidden="true">#</a> Tarjeta de Crédito</h3><h3 id="zelle" tabindex="-1"><a class="header-anchor" href="#zelle" aria-hidden="true">#</a> Zelle</h3><h3 id="credito" tabindex="-1"><a class="header-anchor" href="#credito" aria-hidden="true">#</a> Crédito</h3><h2 id="generacion-de-igtf" tabindex="-1"><a class="header-anchor" href="#generacion-de-igtf" aria-hidden="true">#</a> Generación de IGTF</h2><h2 id="carga-de-comprobante-de-iva" tabindex="-1"><a class="header-anchor" href="#carga-de-comprobante-de-iva" aria-hidden="true">#</a> Carga de Comprobante de IVA</h2><h2 id="consultas-de-ventas" tabindex="-1"><a class="header-anchor" href="#consultas-de-ventas" aria-hidden="true">#</a> Consultas de Ventas</h2><h3 id="por-facturar" tabindex="-1"><a class="header-anchor" href="#por-facturar" aria-hidden="true">#</a> Por Facturar</h3><h3 id="ventas-de-pasillo" tabindex="-1"><a class="header-anchor" href="#ventas-de-pasillo" aria-hidden="true">#</a> Ventas de Pasillo</h3><h3 id="a-credito" tabindex="-1"><a class="header-anchor" href="#a-credito" aria-hidden="true">#</a> A Crédito</h3><h3 id="por-entregar" tabindex="-1"><a class="header-anchor" href="#por-entregar" aria-hidden="true">#</a> Por Entregar</h3><h3 id="solo-completas" tabindex="-1"><a class="header-anchor" href="#solo-completas" aria-hidden="true">#</a> Solo Completas</h3><h3 id="propuestas" tabindex="-1"><a class="header-anchor" href="#propuestas" aria-hidden="true">#</a> Propuestas</h3><h3 id="anuladas" tabindex="-1"><a class="header-anchor" href="#anuladas" aria-hidden="true">#</a> Anuladas</h3><h3 id="cerradas" tabindex="-1"><a class="header-anchor" href="#cerradas" aria-hidden="true">#</a> Cerradas</h3><h3 id="devoluciones" tabindex="-1"><a class="header-anchor" href="#devoluciones" aria-hidden="true">#</a> Devoluciones</h3><h2 id="devoluciones-1" tabindex="-1"><a class="header-anchor" href="#devoluciones-1" aria-hidden="true">#</a> Devoluciones</h2><h3 id="devolucion-total" tabindex="-1"><a class="header-anchor" href="#devolucion-total" aria-hidden="true">#</a> Devolución Total</h3><h3 id="devolucion-parcial" tabindex="-1"><a class="header-anchor" href="#devolucion-parcial" aria-hidden="true">#</a> Devolución Parcial</h3><h2 id="entrega-de-producto" tabindex="-1"><a class="header-anchor" href="#entrega-de-producto" aria-hidden="true">#</a> Entrega de Producto</h2><h3 id="entrega-total" tabindex="-1"><a class="header-anchor" href="#entrega-total" aria-hidden="true">#</a> Entrega Total</h3><h3 id="entrega-parcial" tabindex="-1"><a class="header-anchor" href="#entrega-parcial" aria-hidden="true">#</a> Entrega Parcial</h3><h2 id="cierre-de-caja" tabindex="-1"><a class="header-anchor" href="#cierre-de-caja" aria-hidden="true">#</a> Cierre de Caja</h2><h3 id="cierre-resumen" tabindex="-1"><a class="header-anchor" href="#cierre-resumen" aria-hidden="true">#</a> Cierre Resumen</h3><h3 id="cierre-detalle" tabindex="-1"><a class="header-anchor" href="#cierre-detalle" aria-hidden="true">#</a> Cierre Detalle</h3><h1 id="gestion-de-supervisor-de-turno" tabindex="-1"><a class="header-anchor" href="#gestion-de-supervisor-de-turno" aria-hidden="true">#</a> Gestión de Supervisor de Turno</h1><h2 id="descuentos" tabindex="-1"><a class="header-anchor" href="#descuentos" aria-hidden="true">#</a> Descuentos</h2><h3 id="descuentos-en-lineas" tabindex="-1"><a class="header-anchor" href="#descuentos-en-lineas" aria-hidden="true">#</a> Descuentos en Lineas</h3><h3 id="descuentos-en-monto-general" tabindex="-1"><a class="header-anchor" href="#descuentos-en-monto-general" aria-hidden="true">#</a> Descuentos en Monto General</h3><h2 id="asignar-vendedor" tabindex="-1"><a class="header-anchor" href="#asignar-vendedor" aria-hidden="true">#</a> Asignar Vendedor</h2><h2 id="desasignar-vendedor" tabindex="-1"><a class="header-anchor" href="#desasignar-vendedor" aria-hidden="true">#</a> Desasignar Vendedor</h2><h2 id="retiro-de-caja" tabindex="-1"><a class="header-anchor" href="#retiro-de-caja" aria-hidden="true">#</a> Retiro de Caja</h2><h2 id="ingreso-de-caja" tabindex="-1"><a class="header-anchor" href="#ingreso-de-caja" aria-hidden="true">#</a> Ingreso de Caja</h2><h2 id="ajustes-de-facturas" tabindex="-1"><a class="header-anchor" href="#ajustes-de-facturas" aria-hidden="true">#</a> Ajustes de Facturas</h2><h1 id="reportes-de-gestion-de-ventas" tabindex="-1"><a class="header-anchor" href="#reportes-de-gestion-de-ventas" aria-hidden="true">#</a> Reportes de Gestión de Ventas</h1><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Orden de Ventas</strong>, por último seleccione la ventana <strong>Punto de Venta</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image304.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Punto de Venta</strong> en ADempiere.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image305.png" alt="Campo"></p><p>Imagen 2. Ventana Punto de Venta</p><p>Seleccione el icono <strong>Nueva Orden</strong>, ubicado en la barra de herramientas superior derecha.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image306.png" alt="Campo"></p><p>Imagen 3. Icono Registro Nueva Orden</p><p>Si desea relacionar su venta a un cliente fiscalmente, puede seleccionar un cliente existente o crear un nuevo cliente:</p><p>Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image307.png" alt="Campo"></p><p>Imagen 4. Búsqueda de Cliente</p><p>Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image308.png" alt="Campo"></p><p>Imagen 4. Nuevo Cliente</p><p>Seleccione la opción <strong>Crear Nuevo Socio de Negocio</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image309.png" alt="Campo"></p><p>Imagen 5. Opción Nuevo Cliente</p><p>A continuación Seleccione la opción <strong>Crear Nuevo Socio de Negocio</strong>, y se desplegará la siguiente ventana.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image310.png" alt="Campo"></p><p>Imagen 6. Ventana Crear Socio de Negocio</p>',106)],n={},s=(0,i(13860).Z)(n,[["render",function(e,a){return(0,r.wg)(),(0,r.iD)("div",null,t)}]])},52655:(e,a,i)=>{i.r(a),i.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-366101b9","path":"/docs/sales-management/point.html","title":"¿Qué es un Punto de Venta?","lang":"es-ES","frontmatter":{"summary":"title: Punto de Venta category: Documentation star: 9 sticky: 9 article: false --- ¿Qué es un Punto de Venta? Presupuestos, facturación, cobranza, retenciones, devoluciones parcial","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/sales-management/point.html"}],["meta",{"property":"og:title","content":"¿Qué es un Punto de Venta?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-09-19T21:38:11.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-09-19T21:38:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"title: Punto de Ventacategory: Documentationstar: 9sticky: 9article: false","slug":"title-punto-de-ventacategory-documentationstar-9sticky-9article-false","children":[]},{"level":2,"title":"Selección de Terminal Asignado","slug":"seleccion-de-terminal-asignado","children":[]},{"level":2,"title":"Gestionar Clientes","slug":"gestionar-clientes","children":[{"level":3,"title":"Crear Nuevo Cliente","slug":"crear-nuevo-cliente","children":[]},{"level":3,"title":"Actualizar Cliente","slug":"actualizar-cliente","children":[]}]},{"level":2,"title":"Registro de Nuevo Pedido","slug":"registro-de-nuevo-pedido","children":[]},{"level":2,"title":"Consulta de Producto","slug":"consulta-de-producto","children":[]},{"level":2,"title":"Selección de Terminal Asignado","slug":"seleccion-de-terminal-asignado-1","children":[]},{"level":2,"title":"Apertura de Caja","slug":"apertura-de-caja","children":[{"level":3,"title":"Apertura Desde un Fondo de Caja","slug":"apertura-desde-un-fondo-de-caja","children":[]},{"level":3,"title":"Crear Fondo de Caja","slug":"crear-fondo-de-caja","children":[]}]},{"level":2,"title":"Selección de Pedido","slug":"seleccion-de-pedido","children":[]},{"level":2,"title":"Cambios de Atributos","slug":"cambios-de-atributos","children":[]},{"level":2,"title":"Cobranza","slug":"cobranza","children":[{"level":3,"title":"Efectivo","slug":"efectivo","children":[]},{"level":3,"title":"Transferencia","slug":"transferencia","children":[]},{"level":3,"title":"Tarjeta de Crédito","slug":"tarjeta-de-credito","children":[]},{"level":3,"title":"Tarjeta de Débito","slug":"tarjeta-de-debito","children":[]},{"level":3,"title":"Pago Móvil","slug":"pago-movil","children":[]},{"level":3,"title":"Tarjeta de Crédito","slug":"tarjeta-de-credito-1","children":[]},{"level":3,"title":"Zelle","slug":"zelle","children":[]},{"level":3,"title":"Crédito","slug":"credito","children":[]}]},{"level":2,"title":"Generación de IGTF","slug":"generacion-de-igtf","children":[]},{"level":2,"title":"Carga de Comprobante de IVA","slug":"carga-de-comprobante-de-iva","children":[]},{"level":2,"title":"Consultas de Ventas","slug":"consultas-de-ventas","children":[{"level":3,"title":"Por Facturar","slug":"por-facturar","children":[]},{"level":3,"title":"Ventas de Pasillo","slug":"ventas-de-pasillo","children":[]},{"level":3,"title":"A Crédito","slug":"a-credito","children":[]},{"level":3,"title":"Por Entregar","slug":"por-entregar","children":[]},{"level":3,"title":"Solo Completas","slug":"solo-completas","children":[]},{"level":3,"title":"Propuestas","slug":"propuestas","children":[]},{"level":3,"title":"Anuladas","slug":"anuladas","children":[]},{"level":3,"title":"Cerradas","slug":"cerradas","children":[]},{"level":3,"title":"Devoluciones","slug":"devoluciones","children":[]}]},{"level":2,"title":"Devoluciones","slug":"devoluciones-1","children":[{"level":3,"title":"Devolución Total","slug":"devolucion-total","children":[]},{"level":3,"title":"Devolución Parcial","slug":"devolucion-parcial","children":[]}]},{"level":2,"title":"Entrega de Producto","slug":"entrega-de-producto","children":[{"level":3,"title":"Entrega Total","slug":"entrega-total","children":[]},{"level":3,"title":"Entrega Parcial","slug":"entrega-parcial","children":[]}]},{"level":2,"title":"Cierre de Caja","slug":"cierre-de-caja","children":[{"level":3,"title":"Cierre Resumen","slug":"cierre-resumen","children":[]},{"level":3,"title":"Cierre Detalle","slug":"cierre-detalle","children":[]}]},{"level":2,"title":"Descuentos","slug":"descuentos","children":[{"level":3,"title":"Descuentos en Lineas","slug":"descuentos-en-lineas","children":[]},{"level":3,"title":"Descuentos en Monto General","slug":"descuentos-en-monto-general","children":[]}]},{"level":2,"title":"Asignar Vendedor","slug":"asignar-vendedor","children":[]},{"level":2,"title":"Desasignar Vendedor","slug":"desasignar-vendedor","children":[]},{"level":2,"title":"Retiro de Caja","slug":"retiro-de-caja","children":[]},{"level":2,"title":"Ingreso de Caja","slug":"ingreso-de-caja","children":[]},{"level":2,"title":"Ajustes de Facturas","slug":"ajustes-de-facturas","children":[]}],"git":{"createdTime":1678314887000,"updatedTime":1695159491000,"contributors":[{"name":"Waditza","email":"wdtz@users.noreply.github.com","commits":15},{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":4.95,"words":1484},"filePathRelative":"docs/sales-management/point.md","localizedDate":"8 de marzo de 2023"}')}}]);