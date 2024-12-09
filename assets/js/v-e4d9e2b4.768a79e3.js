"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[90181],{84141:(t,e,d)=>{d.r(e),d.d(e,{default:()=>l});var a=d(78744);const o=(0,a.Lk)("h1",{id:"banco-de-venezuela",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#banco-de-venezuela","aria-hidden":"true"},"#"),(0,a.eW)(),(0,a.Lk)("strong",null,"Banco de Venezuela")],-1),r={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},n=(0,a.Lk)("a",{href:"/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/venezuela/FormatoDeArchivoPagoProveedores.pdf"},"Formato Archivo de Pago a Proveedores",-1),i=(0,a.Fv)('<p>Adicional a ello, cuenta con los documentos <a href="/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/venezuela/Venezuela_Verificaci%C3%B3n.xlsx">Registro y Formato de Cheques</a> y <a href="/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/venezuela/Venezuela.xlsx">Registro y Formato de Cheque</a>.</p><h2 id="archivo-para-pagos" tabindex="-1"><a class="header-anchor" href="#archivo-para-pagos" aria-hidden="true">#</a> <strong>Archivo para Pagos</strong></h2><p>Al ejecutar el proceso de selección de pago de las siguientes facturas en ADempiere:</p><ul><li>Factura &quot;<strong>1000162</strong>&quot; al socio del negocio &quot;<strong>Estándar</strong>&quot; por monto total de &quot;<strong>1.500.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000163</strong>&quot; al socio del negocio &quot;<strong>Estándar</strong>&quot; por monto total de &quot;<strong>2.500.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000164</strong>&quot; al socio del negocio &quot;<strong>Dhl Express Aduanas Venezuela C.A.</strong>&quot; por monto total de &quot;<strong>3.500.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000165</strong>&quot; al socio del negocio &quot;<strong>Bolivariana de Puertos ( Bolipuertos) S A</strong>&quot; por monto total de &quot;<strong>5.000.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000166</strong>&quot; al socio del negocio &quot;<strong>Servicio Nacional Integrado de Administración (SENIAT)</strong>&quot; por monto total de &quot;<strong>6.000.000,00</strong>&quot;.</li></ul><p>Se obtiene como resultado del proceso &quot;<strong>Imprimir /Exportar</strong>&quot;, un documento en formato &quot;<strong>.txt</strong>&quot; con los detalles de los pagos a ser realizados desde el banco de venezuela a terceros en el mismo banco, así como también a terceros en otros bancos, el mismo se puede descargar en el enlace <a href="/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/venezuela/Banco_de_Venezuela_SA_Banco_Universal_1000038.txt">Archivo de Pago a Proveedores del Banesco de Venezuela</a> y visualizar de la siguiente manera:</p><pre><code>HEADER  0100003800000102J00000000013/10/202013/10/2020\nDEBITO  00000000J000000000Compaa Estndar                     13/10/20200001020000000000000000000000004000000,00VES40\nCREDITO 00000000V000000000Proveedor Estndar             0001510000000000000000000000004000000,0000REPBVECA                                                             \nDEBITO  00000001J000000000Compaa Estndar                     13/10/20200001020000000000000000000000006000000,00VES40\nCREDITO 00000001G200003030Servicio Nacional Integrado de0001020000000000000000000000006000000,0010VZLAVECA                                                             \nDEBITO  00000002J000000000Compaa Estndar                     13/10/20200001020000000000000000000000005000000,00VES40\nCREDITO 00000002J297599070Bolivariana de Puertos  ( Boli0001340000000000000000000000005000000,0000UNIOVECA                                                             \nDEBITO  00000003J000000000Compaa Estndar                     13/10/20200001020000000000000000000000003500000,00VES40\nCREDITO 00000003J002443731Dhl Express Aduanas Venezuela 0001740000000000000000000000003500000,0000BEHRVECA                                                             \nTOTAL   0000100001000000018500000,00\n</code></pre><p><strong>Descripción del Archivo</strong></p><p><strong>Debe contener la etiqueta HEADER al inicio de la línea</strong></p><table><thead><tr><th>Número</th><th>Nombre del Campo</th><th>Longitud Máxima</th><th>Tipo</th><th>Decimal</th><th>Requerido</th><th>Descripción/Valor</th><th>Ejemplo</th></tr></thead><tbody><tr><td>1</td><td>IDENTIFICADOR REGISTRO</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Etiqueta de identificación para la línea que contiene la información del encabezado</td><td>HEADER</td></tr><tr><td>2</td><td>NÚMERO REFERENCIA LOTE</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Número del Lote</td><td>01000038</td></tr><tr><td>3</td><td>NÚMERO NEGOCIACIÓN</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Numero de la negociación para pago a proveedores</td><td>00000102</td></tr><tr><td>4</td><td>RIF/CI ORDENANTE</td><td>10</td><td>A</td><td>N/A</td><td>Sí</td><td>Letra Calificadora (J-Jurídico, G-Gobierno) + Número + Dígito verificador. Debe ser un número de Rif válido y debe ser el mismo Rif para todos los registros de débito de una orden de pago.</td><td>J000000000</td></tr><tr><td>5</td><td>FECHA DE LA ORDEN DE PAGO</td><td>10</td><td>A</td><td>N/A</td><td>Sí</td><td>Fecha en la que se hará efectivo el pago. Debe estar en formato dd/mm/yyyy</td><td>13/10/2020</td></tr><tr><td>6</td><td>FECHA DE ENVÍO</td><td>10</td><td>A</td><td>N/A</td><td>Sí</td><td>Fecha en que se esta enviando el archivo. Formato dd/mm/aaaa hh:mm:ss</td><td>13/10/2020</td></tr><tr><td><strong>Debe contener la etiqueta DEBITO al inicio de la línea</strong></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Número</td><td>Nombre del Campo</td><td>Longitud Máxima</td><td>Tipo</td><td>Decimal</td><td>Requerido</td><td>Descripción/Valor</td><td>Ejemplo</td></tr><tr><td>1</td><td>IDENTIFICADOR REGISTRO</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Etiqueta que identifica la línea de cada DÉBITO. Pueden haber tantos débitos como se requiera</td><td>DEBITO</td></tr><tr><td>2</td><td>NÚMERO REFERENCIA DÉBITO</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Número que identifica al débito</td><td>00000000</td></tr><tr><td>3</td><td>RIF/CI ORDENANTE</td><td>10</td><td>A</td><td>N/A</td><td>Sí</td><td>Letra Calificadora (J-Jurídico, G-Gobierno) + Número + Dígito verificador. Debe ser un número de Rif válido y debe ser el mismo Rif para todos los registros de débito de una orden de pago.</td><td>J000000000</td></tr><tr><td>4</td><td>NOMBRE ORDENANTE</td><td>35</td><td>A</td><td>N/A</td><td>Sí</td><td>Nombre de la empresa ordenante</td><td>Compaa Estándar</td></tr><tr><td>5</td><td>FECHA VALOR</td><td>10</td><td>A</td><td>N/A</td><td>Sí</td><td>Fecha en la que se aplicará el pago. Debe estar en formato dd/mm/aaaa</td><td>13/10/2020</td></tr><tr><td>6</td><td>TIPO DE CUENTA</td><td>2</td><td>A</td><td>N/A</td><td>Sí</td><td>Tipo de la cuenta desde donde se realizará el debito. Puede ser 00 (Corriente) ó 01 (Ahorro). Obligatorio para cuentas de 10 dígitos, para cuentas de 20 coloque 00</td><td>00</td></tr><tr><td>7</td><td>NÚMERO DE CUENTA</td><td>20</td><td>A</td><td>N/A</td><td>Sí</td><td>Numero de la cuenta desde donde se realizará el débito</td><td>01020000000000000000</td></tr><tr><td>8</td><td>MONTO</td><td>18</td><td>A</td><td>N/A</td><td>Sí</td><td>Monto a debitar. Los decimales deben venir estrictamente con coma</td><td>000000004000000,00</td></tr><tr><td>9</td><td>MONEDA</td><td>3</td><td>A</td><td>N/A</td><td>No</td><td>Código de la moneda del débito</td><td>VES</td></tr><tr><td>10</td><td>TIPO DE PAGO</td><td>3</td><td>A</td><td>N/A</td><td>Sí</td><td>Valores: 00 - Nómina Obreros, 10 - Nómina Empleados, 20 - Nómina Ejecutivos, 30 - Nómina Contratados y 40 - Proveedores</td><td>40</td></tr><tr><td><strong>Debe contener la etiqueta CREDITO al inicio de la línea</strong></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Número</td><td>Nombre del Campo</td><td>Longitud Máxima</td><td>Tipo</td><td>Decimal</td><td>Requerido</td><td>Descripción/Valor</td><td>Ejemplo</td></tr><tr><td>1</td><td>IDENTIFICADOR REGISTRO</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Etiqueta que identifica la línea de cada CRÉDITO. Pueden haber tantos débitos como se requiera</td><td>CREDITO</td></tr><tr><td>2</td><td>NÚMERO REFERENCIA CRÉDITO</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Número de referencia del crédito</td><td>00000000</td></tr><tr><td>3</td><td>RIF/CI ORDENANTE</td><td>10</td><td>A</td><td>N/A</td><td>Sí</td><td>Para el caso de CI: Letra Calificadora (V- Venezolano,E-Extranjero ó P-Pasaporte) + Número. Para el caso de RIF: Letra Calificadora (J-Jurídico, G-Gobierno) + Número + Dígito verificador.</td><td>V000000000</td></tr><tr><td>4</td><td>NOMBRE ORDENANTE</td><td>30</td><td>A</td><td>N/A</td><td>Sí</td><td>Nombre del beneficiario del crédito</td><td>Proveedor Estándar</td></tr><tr><td>5</td><td>TIPO DE CUENTA</td><td>2</td><td>A</td><td>N/A</td><td>Sí</td><td>Tipo de cuenta. Obligatorio para Abono y Swift. Obligatorio para cuentas de 10 dígitos.</td><td>00</td></tr><tr><td>6</td><td>NÚMERO DE CUENTA</td><td>20</td><td>A</td><td>N/A</td><td>Sí</td><td>Numero de la cuenta a la cual se le realizará el crédito</td><td>01510000000000000000</td></tr><tr><td>7</td><td>MONTO</td><td>18</td><td>A</td><td>N/A</td><td>Sí</td><td>Monto a acreditar. Los decimales deben venir estrictamente con coma</td><td>000000004000000,00</td></tr><tr><td>8</td><td>TIPO DE PAGO</td><td>2</td><td>A</td><td>N/A</td><td>Sí</td><td>Valores: 00 - Pagos a otros bancos y 10 - Pagos al mismo banco</td><td>00</td></tr><tr><td>9</td><td>CÓDIGO SWIFT</td><td>8</td><td>A</td><td>N/A</td><td>Sí</td><td>Código de las instituciones financieras venezolanas en Swift. Código Swift del banco</td><td>REPBVECA</td></tr><tr><td><strong>Debe contener la etiqueta TOTAL al inicio de la línea</strong></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Número</td><td>Nombre del Campo</td><td>Longitud Máxima</td><td>Tipo</td><td>Decimal</td><td>Requerido</td><td>Descripción/Valor</td><td>Ejemplo</td></tr><tr><td>1</td><td>IDENTIFICADOR REGISTRO</td><td>5</td><td>A</td><td>N/A</td><td>Sí</td><td>Etiqueta de identificación para la línea que contiene la información del total débito</td><td>TOTAL</td></tr><tr><td>2</td><td>CONSTANTE</td><td>5</td><td>A</td><td>N/A</td><td>Sí</td><td>Valor que siempre aparecerá en la línea del total</td><td>00001</td></tr><tr><td>3</td><td>CONSTANTE</td><td>5</td><td>A</td><td>N/A</td><td>Sí</td><td>Valor que siempre aparecerá en la línea del total</td><td>00001</td></tr><tr><td>4</td><td>TOTAL DEL PAGO</td><td>18</td><td>A</td><td>N/A</td><td>Sí</td><td>Sumatoria de todos los montos a debitar. Los decimales deben venir estrictamente con coma</td><td>000000018500000,00</td></tr></tbody></table>',9),s={},l=(0,d(73570).A)(s,[["render",function(t,e){const d=(0,a.g2)("ExternalLinkIcon");return(0,a.uX)(),(0,a.CE)("div",null,[o,(0,a.Lk)("p",null,[(0,a.eW)("Para la exportación de los archivos desde ADempiere al banco de venezuela, "),(0,a.Lk)("a",r,[(0,a.eW)("ERPyA"),(0,a.bF)(d)]),(0,a.eW)(" soporta el siguiente formato facilitado por el banco, que puede ser descargado. El documento "),n,(0,a.eW)(", explica el formato que sirve de ayuda para la construcción el archivo a cargar.")]),i])}]])},31293:(t,e,d)=>{d.r(e),d.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-e4d9e2b4","path":"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/venezuela.html","title":"Banco de Venezuela","lang":"es-ES","frontmatter":{"title":"Banco de Venezuela","icon":"podcast","category":"Localización Venezuela","star":9,"sticky":9,"tag":["Procedimientos","Gestión de Tesorería"],"article":false,"description":"Banco de Venezuela Para la exportación de los archivos desde ADempiere al banco de venezuela, ERPyA soporta el siguiente formato facilitado por el banco, que puede ser descargado. El documento Formato Archivo de Pago a Proveedores, explica el formato que sirve de ayuda para la construcción el archivo a cargar.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/venezuela.html"}],["meta",{"property":"og:title","content":"Banco de Venezuela"}],["meta",{"property":"og:description","content":"Banco de Venezuela Para la exportación de los archivos desde ADempiere al banco de venezuela, ERPyA soporta el siguiente formato facilitado por el banco, que puede ser descargado. El documento Formato Archivo de Pago a Proveedores, explica el formato que sirve de ayuda para la construcción el archivo a cargar."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-06-12T20:17:53.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Tesorería"}],["meta",{"property":"article:modified_time","content":"2024-06-12T20:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Banco de Venezuela\\",\\"description\\":\\"Banco de Venezuela Para la exportación de los archivos desde ADempiere al banco de venezuela, ERPyA soporta el siguiente formato facilitado por el banco, que puede ser descargado. El documento Formato Archivo de Pago a Proveedores, explica el formato que sirve de ayuda para la construcción el archivo a cargar.\\"}"]]},"headers":[{"level":2,"title":"Archivo para Pagos","slug":"archivo-para-pagos","link":"#archivo-para-pagos","children":[]}],"git":{"createdTime":1690986953000,"updatedTime":1718223473000,"contributors":[{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/venezuela.md","localizedDate":"2 de agosto de 2023","excerpt":"<h1> <strong>Banco de Venezuela</strong></h1>\\n<p>Para la exportación de los archivos desde ADempiere al banco de venezuela, <a href=\\"http://erpya.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ERPyA</a> soporta el siguiente formato facilitado por el banco, que puede ser descargado. El documento <a href=\\"/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/venezuela/FormatoDeArchivoPagoProveedores.pdf\\">Formato Archivo de Pago a Proveedores</a>, explica el formato que sirve de ayuda para la construcción el archivo a cargar.</p>","autoDesc":true}')}}]);