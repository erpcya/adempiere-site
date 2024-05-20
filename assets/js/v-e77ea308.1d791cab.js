"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[27844],{57818:(e,a,r)=>{r.r(a),r.d(a,{default:()=>g});var n=r(78744);const o=(0,n.Fv)('<p><strong>Fecha de Liberación:</strong> 2021-07-21</p><h2 id="mejoras" tabindex="-1"><a class="header-anchor" href="#mejoras" aria-hidden="true">#</a> Mejoras</h2><pre><code>- Se agrega funcionalidad para permitir configurar conceptos de nómina en una moneda distina a la del proceso de nómina: De esta manera se puede configurar un concepto en USD y que se genere el resultado del cálculo en VES al momento de procesar la nómina\n- Se agrega funcionalidad para que las personalizaciones de Ventana, Proceso y Visores puedan agregarse como parte de la configuración de un rol\n- Se aumenta el tamaño del texto de la descripción a 16.000 caracteres en las siguientes entidades:\n\n    - Orden de Ventas\n    - Linea de Orden de Ventas\n    - Orden de Compras\n    - Linea de Orden de Compras\n    - Documento por Cobrar\n    - Linea de Documento por Cobrar\n    - Documento por Pagar\n    - Linea de Documento por Pagar\n</code></pre><h2 id="correciones" tabindex="-1"><a class="header-anchor" href="#correciones" aria-hidden="true">#</a> Correciones</h2><ul><li>Se corrige problemas con validación de inventario para productos que se encuentran reservados en la orden de venta <ul><li>Corrige valor en columna Cantidad de Movimiento de Recibo Express: esto ocasionaba que la recepción de materia prima no se hiciera por lo pesado en romana</li><li>Se corrige problema al intentar hacer match en el formulario de Verificación de Estado de Cuentas: De manera natural al llamar el formulario desde la ventana de Estado de Cuentas Bancario debería importar los movimientos que se encuentrasn por importar, sin embargo, no se estaba haciendo</li></ul></li></ul><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2>',6),i=(0,n.Lk)("p",null,"CST-STD: Add support to:",-1),t={href:"https://github.com/adempiere/adempiere/pull/3557",target:"_blank",rel:"noopener noreferrer"},l={href:"https://github.com/adempiere/adempiere/pull/3532",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/adempiere/adempiere/pull/3556",target:"_blank",rel:"noopener noreferrer"},s={href:"https://github.com/adempiere/adempiere/pull/3543",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Lk)("li",null,[(0,n.Lk)("p",null,"Point-Of-Sales-Improvements: Fixed error with validation for reserverd quantity")],-1),p=(0,n.Lk)("li",null,[(0,n.Lk)("p",null,"RawMaterialReceipt: Corregido error con la Cantidad de Movimiento en el recibo express")],-1),u=(0,n.Fv)('<h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>ADempiereBase: Versión de Liberación: 3.9.3-rs-4.3</li><li>CST-STD: Versión de Liberación: rs-23.4</li><li>Consigned-Material: 1.2.3</li><li>Exchange-Operation-System: 1.1.7</li><li>Cash-Management: 1.0.4</li><li>Currency-Convert-Documents: 1.0.5</li><li>Farmer-Assistance-Program: 1.1.6</li><li>RethinkDB-Replicator-Client: 1.1.2</li><li>Third-Party-Access: 1.0.2</li><li>FiscalPrinter: 1.3.2</li><li>RawMaterialReceipt: 1.0.6</li><li>Sales-Force-Management: 1.0.2</li><li>Delivery-Management-Service: 1.0.1</li><li>Travel-Agency-Management: 1.0.8</li><li>Withholding: 1.0.9</li><li>Additional-Reports: 1.0.2</li><li>Migration-Tools: 1.0.1</li><li>LVE: 1.3.4</li><li>Performance-Analysis: 1.0.2</li><li>Queue-Manager: 1.0.4</li><li>Notification-Queue: 1.0.4</li><li>Point-Of-Sales-Improvements: 1.0.4</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><ul><li><p>Aplicar binario de la aplicación</p></li><li><p>Aplicar los XML&#39;s:</p><ul><li>07970_Add_ASP_Access_by_Role.xml</li><li>08890_Add_support_to_converted_attributes.xml</li><li>09240_Enlarge_length_for_Description_on_Order_and_Invoice.xml</li></ul></li></ul>',4),m={},g=(0,r(73570).A)(m,[["render",function(e,a){const r=(0,n.g2)("ExternalLinkIcon");return(0,n.uX)(),(0,n.CE)("div",null,[o,(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[i,(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.eW)("Enlarge length for Description on Order and Invoice "),(0,n.Lk)("a",t,[(0,n.eW)("#3557"),(0,n.bF)(r)])]),(0,n.Lk)("li",null,[(0,n.eW)("Add support to ASP by role "),(0,n.Lk)("a",l,[(0,n.eW)("#3532"),(0,n.bF)(r)])]),(0,n.Lk)("li",null,[(0,n.eW)("Fixed error after press ok on Bank Statement Matcher "),(0,n.Lk)("a",d,[(0,n.eW)("#3556"),(0,n.bF)(r)])]),(0,n.Lk)("li",null,[(0,n.eW)("Add support to converted attributes for payroll "),(0,n.Lk)("a",s,[(0,n.eW)("#3543"),(0,n.bF)(r)])])])]),c,p]),u])}]])},97751:(e,a,r)=>{r.r(a),r.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-e77ea308","path":"/downloads/updates/rs-2.x/rs-23.x/rs-23.3.html","title":"rs-23.3","lang":"es-ES","frontmatter":{"title":"rs-23.3","icon":"app","category":"Actualizaciones","star":9,"sticky":9,"article":false,"description":"Fecha de Liberación: 2021-07-21 Mejoras - Se agrega funcionalidad para permitir configurar conceptos de nómina en una moneda distina a la del proceso de nómina: De esta manera se puede configurar un concepto en USD y que se genere el resultado del cálculo en VES al momento de procesar la nómina - Se agrega funcionalidad para que las personalizaciones de Ventana, Proceso y Visores puedan agregarse como parte de la configuración de un rol - Se aumenta el tamaño del texto de la descripción a 16.000 caracteres en las siguientes entidades: - Orden de Ventas - Linea de Orden de Ventas - Orden de Compras - Linea de Orden de Compras - Documento por Cobrar - Linea de Documento por Cobrar - Documento por Pagar - Linea de Documento por Pagar","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-2.x/rs-23.x/rs-23.3.html"}],["meta",{"property":"og:title","content":"rs-23.3"}],["meta",{"property":"og:description","content":"Fecha de Liberación: 2021-07-21 Mejoras - Se agrega funcionalidad para permitir configurar conceptos de nómina en una moneda distina a la del proceso de nómina: De esta manera se puede configurar un concepto en USD y que se genere el resultado del cálculo en VES al momento de procesar la nómina - Se agrega funcionalidad para que las personalizaciones de Ventana, Proceso y Visores puedan agregarse como parte de la configuración de un rol - Se aumenta el tamaño del texto de la descripción a 16.000 caracteres en las siguientes entidades: - Orden de Ventas - Linea de Orden de Ventas - Orden de Compras - Linea de Orden de Compras - Documento por Cobrar - Linea de Documento por Cobrar - Documento por Pagar - Linea de Documento por Pagar"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-06-09T21:08:14.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-06-09T21:08:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"rs-23.3\\",\\"description\\":\\"Fecha de Liberación: 2021-07-21 Mejoras - Se agrega funcionalidad para permitir configurar conceptos de nómina en una moneda distina a la del proceso de nómina: De esta manera se puede configurar un concepto en USD y que se genere el resultado del cálculo en VES al momento de procesar la nómina - Se agrega funcionalidad para que las personalizaciones de Ventana, Proceso y Visores puedan agregarse como parte de la configuración de un rol - Se aumenta el tamaño del texto de la descripción a 16.000 caracteres en las siguientes entidades: - Orden de Ventas - Linea de Orden de Ventas - Orden de Compras - Linea de Orden de Compras - Documento por Cobrar - Linea de Documento por Cobrar - Documento por Pagar - Linea de Documento por Pagar\\"}"]]},"headers":[{"level":2,"title":"Mejoras","slug":"mejoras","link":"#mejoras","children":[]},{"level":2,"title":"Correciones","slug":"correciones","link":"#correciones","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","link":"#detalle-tecnico","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","link":"#soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","link":"#requerimientos","children":[]}],"git":{"createdTime":1686344894000,"updatedTime":1686344894000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.34,"words":402},"filePathRelative":"downloads/updates/rs-2.x/rs-23.x/rs-23.3.md","localizedDate":"9 de junio de 2023","excerpt":"<p><strong>Fecha de Liberación:</strong> 2021-07-21</p>\\n<h2> Mejoras</h2>\\n<pre><code>- Se agrega funcionalidad para permitir configurar conceptos de nómina en una moneda distina a la del proceso de nómina: De esta manera se puede configurar un concepto en USD y que se genere el resultado del cálculo en VES al momento de procesar la nómina\\n- Se agrega funcionalidad para que las personalizaciones de Ventana, Proceso y Visores puedan agregarse como parte de la configuración de un rol\\n- Se aumenta el tamaño del texto de la descripción a 16.000 caracteres en las siguientes entidades:\\n\\n    - Orden de Ventas\\n    - Linea de Orden de Ventas\\n    - Orden de Compras\\n    - Linea de Orden de Compras\\n    - Documento por Cobrar\\n    - Linea de Documento por Cobrar\\n    - Documento por Pagar\\n    - Linea de Documento por Pagar\\n</code></pre>","autoDesc":true}')}}]);