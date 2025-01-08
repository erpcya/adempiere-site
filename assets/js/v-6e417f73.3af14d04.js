"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[44903],{42995:(e,o,a)=>{a.r(o),a.d(o,{default:()=>c});var n=a(78744);const r=(0,n.Fv)('<h1 id="extracto-bancario-con-pagos-en-lotes" tabindex="-1"><a class="header-anchor" href="#extracto-bancario-con-pagos-en-lotes" aria-hidden="true">#</a> <strong>Extracto Bancario con Pagos en Lotes</strong></h1><p>ADempiere permite procesar pagos en lotes y generar su respectivo archivo &quot;<strong>.txt</strong>&quot; para ser cargado al banco requerido por el usuario. Para ello, es necesario contar con ciertos requerimientos y que se cumpla con los flujos de trabajo correctos.</p><p>Este proceso permite que se realice una gran cantidad de pagos a diferentes socios del negocio, en el cual la empresa u organización debe clasificar o agrupar mediante una selección de pago, todos los procesos de nómina o en su defecto, todas las facturas de cuentas por pagar a proveedores que requiere cancelar.</p><h2 id="configuracion-esencial" tabindex="-1"><a class="header-anchor" href="#configuracion-esencial" aria-hidden="true">#</a> Configuración Esencial</h2><p>Principalmente, el servicio de ADempiere debe contar con la siguiente configuración por socio del negocio, en la pestaña &quot;<strong>Cuenta Bancaria</strong>&quot; del registro del mismo. Esta configuración se debe cumplir de manera &quot;<strong>Obligatoria</strong>&quot; para los socios que cumplen los roles de proveedor y empleado.</p><p>Suponiendo que se tiene un socio del negocio llamado &quot;<strong>Estándar</strong>&quot;. Se debe realizar el registro del mismo como lo indica el procedimiento explicado en los documentos &#39;&#39;Socio Proveedor&#39;&#39; y &#39;&#39;Socio empleado&#39;&#39;, según sea el caso del socio.</p><p>Es necesario que todos los socios del negocio cuenten con el registro de los siguientes campos que contiene la pestaña &quot;<strong>Cuenta Bancaria</strong>&quot;, ya que con dicha información es creado el archivo &quot;<strong>.txt</strong>&quot; de cada banco soportado por ADempiere:</p><ul><li>&quot;<strong>Usuario</strong>&quot;: El usuario de acceso en ADempiere definido para el socio del negocio que se encuentra configurando. La selección de este campo permite que ADempiere tome el número de teléfono ingresado en el campo &quot;<strong>Teléfono</strong>&quot;, el usuario definido en el campo &quot;<strong>Código</strong>&quot; y el nombre ingresado en el campo &quot;<strong>Nombre</strong>&quot;, del registro de la pestaña &quot;<strong>Contacto (Usuario)</strong>&quot; del socio del negocio, cuando sea requerido en el construcción del archivo &quot;<strong>.txt</strong>&quot;. Un ejemplo de este campo puede ser &quot;<strong>02550000000</strong>&quot;, &quot;<strong>EstandarUsuario</strong>&quot; y &quot;<strong>Estandar Proveedor</strong>&quot;.</li></ul><figure><img src="/assets/img/docs/lve/procedures/treasury-management/resources/user-contact-tab.png" alt="pestaña contacto usuario" tabindex="0" loading="lazy"><figcaption>pestaña contacto usuario</figcaption></figure><p>Imagen 1. Configuración de Contacto Usuario de la Ventana Socio del Negocio</p><ul><li>&quot;<strong>Banco</strong>&quot;: Banco donde el socio del negocio posee una cuenta bancaria. Este puede ser &quot;<strong>BFC Banco Fondo Común, C.A. Banco Universal</strong>&quot;.</li><li>&quot;<strong>No. De Cuenta</strong>&quot;: Número de cuenta bancaria del socio del negocio en el banco indicado anteriormente. Un ejemplo de este campo puede ser &quot;<strong>01510000000000000000</strong>&quot;.</li><li>&quot;<strong>Nombre</strong>&quot;: Nombre del socio del negocio titular de la cuenta bancaria indicada anteriormente. Para este ejemplo se tiene como nombre &quot;<strong>Proveedor Estándar</strong>&quot;.</li><li>&quot;<strong>No. Seguro Social</strong>&quot;: Número de cédula de identidad o registro de información fiscal (RIF), del socio del negocio titular de la cuenta bancaria. Un ejemplo de este campo puede ser &quot;<strong>V00000000</strong>&quot;.</li><li>&quot;<strong>Cta. Correo Electrónico</strong>&quot;: La dirección de correo electrónico del titular de la cuenta bancaria indicada anteriormente.</li></ul><figure><img src="/assets/img/docs/lve/procedures/treasury-management/resources/bank-account-tab-of-the-business-partner-window.png" alt="pestaña cuenta bancaria de la ventana socio del negocio" tabindex="0" loading="lazy"><figcaption>pestaña cuenta bancaria de la ventana socio del negocio</figcaption></figure><p>Imagen 2. Configuración Bancaria de la Ventana Socio del Negocio</p><p>Si desconoce el procedimiento para cargar en ADempiere la información bancaria del socio del negocio, puede consultar los documentos &#39;&#39;Socio proveedor&#39;&#39; &#39;&#39;Socio Empleado&#39;&#39;.</p><p><strong>Generación de Archivo</strong></p><p>Para obtener un extracto bancario o archivo en formato &quot;<strong>.txt</strong>&quot;, debe existir un documento de &quot;<strong>Selección de Pago</strong>&quot; indicando la cuenta desde la cual se requiere ejecutar las transferencias bancarias. Para la elaboración de este documento se puede realizar el procedimiento explicado en el material &#39;&#39;Selección de pago&#39;&#39;, en el cual se incluyen todas las facturas de cuentas por pagar a proveedores que se van a cancelar desde la cuenta bancaria seleccionada. Adicional a ello, se puede realizar el procedimiento explicado en el material &#39;&#39;Seleccion pago de nómina&#39;&#39;, en el cual se incluyen todos procesos de nómina que se van a cancelar desde la cuenta bancaria seleccionada.</p><p>Continuando con el ejemplo expuesto anteriormente, se crea el documento de selección de pago número &quot;<strong>1000035</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/treasury-management/resources/payment-selection-window.png" alt="ventana selección de pagos" tabindex="0" loading="lazy"><figcaption>ventana selección de pagos</figcaption></figure><p>Imagen 3. Ventana Selección de Pagos</p><p>Documento en el cual se tiene asociada la factura por pagar número &quot;<strong>1000150</strong>&quot;, con monto de &quot;<strong>7.500.000,00</strong>&quot;. Factura en la cual se encuentra involucrado el socio del negocio &quot;<strong>Estándar</strong>&quot; como socio proveedor.</p><figure><img src="/assets/img/docs/lve/procedures/treasury-management/resources/payment-selection-line-tab.png" alt="pestaña línea selección de pagos" tabindex="0" loading="lazy"><figcaption>pestaña línea selección de pagos</figcaption></figure><p>Imagen 4. Pestaña Línea Selección de Pagos</p><p>Al momento de generar el archivo en formato &quot;<strong>.txt</strong>&quot;, ADempiere toma de la pestaña &quot;<strong>Cuenta Bancaria</strong>&quot; los datos de los socios del negocio involucrados en el documento seleccionado en el campo &quot;<strong>Selección de Pago</strong>&quot; de la ventana &quot;<strong>Imprimir/Exportar Pagos</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/treasury-management/resources/print-window-export-payments.png" alt="ventana imprimir exportar pagos" tabindex="0" loading="lazy"><figcaption>ventana imprimir exportar pagos</figcaption></figure><p>Imagen 5. Ventana Imprimir/Exportar Pagos</p><p>Si desconoce los procedimientos para registrar en ADempiere los pagos de nómina y los pagos a proveedores, puede consultar el documento &#39;&#39;Pago de nómina&#39;&#39;, para cancelar la nómina de los empleados. Adicional a ello, puede consultar los documentos &#39;&#39;Orden de pago desde orden, &#39;&#39;Orden de pago&#39;&#39;, &#39;&#39;Selección de pago&#39;&#39; y &#39;&#39;Imprimir Exportar&#39;&#39;, para cancelar las cuentas por pagar a proveedores.</p><p><strong>Resultado Obtenido</strong></p><p>Finalmente, se puede visualizar el archivo descargado automáticamente desde ADempiere para corroborar la información.</p><p>Un ejemplo del archivo generado en formato &quot;<strong>.txt</strong>&quot;, sin seleccionar el usuario en la pestaña &quot;<strong>Cuenta Bancaria</strong>&quot;, puede ser el siguiente:</p><pre><code>HDRBANESCO        ED  95BPAYMULP\n01SCV                                9  1000035                            20201008000000\n021000035                       J000000000       Compaa Estndar                     000000750000000VES 0134000000000000000               BANESCO    20201008\n0300000000                      000000750000000VES01510000000000000000          0151          V00000000        Proveedor Estndar                                                     estandar@ejmplo.com                                                                                                                                                                                      425\n06000000000000001000000000000001000000750000000\n</code></pre><p>Un ejemplo del archivo generado en formato &quot;<strong>.txt</strong>&quot;, seleccionando el usuario en la pestaña &quot;<strong>Cuenta Bancaria</strong>&quot;, puede ser el siguiente:</p><pre><code>HDRBANESCO        ED  95BPAYMULP\n01SCV                                9  1000039                            20201012000000\n021000039                       J000000000       Compaa Estndar                     000000464000000VES 01340000000000000000              BANESCO    20201012\n0300000000                      000000464000000VES01510000000000000000          0151          V00000000        Proveedor Estndar                                                     estandar@ejmplo.com                                                   02550000000              EstandarUsuario  Estandar Proveedor                                                                       425\n06000000000000001000000000000001000000464000000\n</code></pre><p>El archivo en formato &quot;<strong>.txt</strong>&quot; generado por ADempiere, debe ser cargado al banco desde el cual requiere que sean ejecutadas las transferencias bancarias.</p>',33),t={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},s={},c=(0,a(73570).A)(s,[["render",function(e,o){const a=(0,n.g2)("ExternalLinkIcon"),s=(0,n.g2)("RouterLink");return(0,n.uX)(),(0,n.CE)("div",null,[r,(0,n.Lk)("p",null,[(0,n.Lk)("a",t,[(0,n.eW)("ERPyA"),(0,n.bF)(a)]),(0,n.eW)(" pretende ofrecer una explicación eficiente a nuestros clientes del estándar de extracto bancario a través de una guía fácil y sencilla para así obtener resultados exitosos en la versión 3.9.2 de ADempiere en la localización Venezuela. A continuación se explica el estándar que se debe tener por banco para generar un extracto bancario desde ADempiere y poder cargar el mismo al banco requerido por el usuario.")]),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/bancaribe.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Bancaribe")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/banesco.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Banesco")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/banplus.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Banplus")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/bfc.html"},{default:(0,n.k6)((()=>[(0,n.eW)("BFC")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/bod.html"},{default:(0,n.k6)((()=>[(0,n.eW)("BOD")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/exterior.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Exterior")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/venezuela.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Venezuela")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/bnc.html"},{default:(0,n.k6)((()=>[(0,n.eW)("BNC")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/mercantil.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Mercantil")])),_:1})])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.bF)(s,{to:"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/provincial.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Provincial")])),_:1})])])])])}]])},71136:(e,o,a)=>{a.r(o),a.d(o,{data:()=>n});const n=JSON.parse('{"key":"v-6e417f73","path":"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/batch-payments.html","title":"Extracto Bancario con Pagos en Lotes","lang":"es-ES","frontmatter":{"title":"Extracto Bancario con Pagos en Lotes","icon":"podcast","category":"Localización Venezuela","star":9,"sticky":9,"tag":["Procedimientos"],"article":false,"description":"Extracto Bancario con Pagos en Lotes ADempiere permite procesar pagos en lotes y generar su respectivo archivo \\".txt\\" para ser cargado al banco requerido por el usuario. Para ello, es necesario contar con ciertos requerimientos y que se cumpla con los flujos de trabajo correctos.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/batch-payments.html"}],["meta",{"property":"og:title","content":"Extracto Bancario con Pagos en Lotes"}],["meta",{"property":"og:description","content":"Extracto Bancario con Pagos en Lotes ADempiere permite procesar pagos en lotes y generar su respectivo archivo \\".txt\\" para ser cargado al banco requerido por el usuario. Para ello, es necesario contar con ciertos requerimientos y que se cumpla con los flujos de trabajo correctos."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-06-12T20:17:53.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:modified_time","content":"2024-06-12T20:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Extracto Bancario con Pagos en Lotes\\",\\"description\\":\\"Extracto Bancario con Pagos en Lotes ADempiere permite procesar pagos en lotes y generar su respectivo archivo \\\\\\".txt\\\\\\" para ser cargado al banco requerido por el usuario. Para ello, es necesario contar con ciertos requerimientos y que se cumpla con los flujos de trabajo correctos.\\"}"]]},"headers":[{"level":2,"title":"Configuración Esencial","slug":"configuracion-esencial","link":"#configuracion-esencial","children":[]}],"git":{"createdTime":1687290742000,"updatedTime":1718223473000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":2},{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.46,"words":1039},"filePathRelative":"docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/batch-payments.md","localizedDate":"20 de junio de 2023","excerpt":"<h1> <strong>Extracto Bancario con Pagos en Lotes</strong></h1>\\n<p>ADempiere permite procesar pagos en lotes y generar su respectivo archivo \\"<strong>.txt</strong>\\" para ser cargado al banco requerido por el usuario. Para ello, es necesario contar con ciertos requerimientos y que se cumpla con los flujos de trabajo correctos.</p>","autoDesc":true}')}}]);