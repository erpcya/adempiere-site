"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[18373],{3004:(e,a,r)=>{r.r(a),r.d(a,{default:()=>n});var o=r(78744);const t=[(0,o.Fv)('<h2 id="mejoras" tabindex="-1"><a class="header-anchor" href="#mejoras" aria-hidden="true">#</a> Mejoras</h2><pre><code>- Se agrega soporte a registro de fecha y hora de impresión de documento fiscal en el documento de cuentas por pagar\n- Se implementa caché para ID de tablas cuando se buscan según su nombre\n- Se escribe la instancia de atributos en la orden de devolución desde la entrega o factura\n</code></pre><h2 id="correcciones" tabindex="-1"><a class="header-anchor" href="#correcciones" aria-hidden="true">#</a> Correcciones</h2><pre><code>- Corrección de número de documento cuando no se tiene respuesta de la impresora: antes se escribía así **Serie de Impresora**-**null** ahora sólo deja que se incremente el correlativo\n- Corrección de transacciones pendientes:\n\n    - 3037 | Select AD_Reference_ID FROM AD_Column WHERE AD_Column_ID=$1\n    - 3038 | Select AD_Reference_ID FROM AD_Column WHERE AD_Column_ID=$1\n</code></pre><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle técnico</h2><ul><li><p>FiscalPrinter:</p><ul><li>Cambio de tipo de columna de Fecha a Fecha más Hora en C_Invoice.FiscalPrintDate</li><li>Soporte a guardar la fecha y hora de impresión del documento fiscal</li><li>Corrección de número de documento &lt;Serie de Impresora&gt;-&lt;null&gt;</li></ul></li><li><p>FiscalPrinter-Server:</p><ul><li>Validación de error cuando no existe conexión al servidor RethinkDB</li></ul></li><li><p>CST-STD:</p><ul><li>Soporte a escribir fecha y hora de impresión de documento fiscal</li><li>Implementación de caché para id de tablas basado en el nombre</li><li>Corrección de nombres de transacciones cuando se POInfo y POInfoColumn</li></ul></li></ul><h2 id="nota-critica" tabindex="-1"><a class="header-anchor" href="#nota-critica" aria-hidden="true">#</a> Nota Crítica</h2><p>Es obligatorio aplicar los XML&#39;s antes del cambio puesto que se requieren para:</p><h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>Consigned-Material: 1.0.8</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><p>Antes de aplicar esta versión se debe aplicar los siguientes XML&#39;s</p><ul><li><p>FiscalPrinter:</p><ul><li>07000_Change_Column_Type_for_Fiscal_Print_Date.xml</li></ul></li><li><p>FiscalPrinter-Server:</p><ul><li>Montar el nuevo servicio de Impresión Fiscal</li></ul></li></ul>',13)],i={},n=(0,r(73570).A)(i,[["render",function(e,a){return(0,o.uX)(),(0,o.CE)("div",null,t)}]])},21963:(e,a,r)=>{r.r(a),r.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-130e9410","path":"/downloads/updates/rs-1.x/rs-14.x/rs-14.4.html","title":"rs-14.4","lang":"es-ES","frontmatter":{"title":"rs-14.4","icon":"podcast","category":"Actualizaciones","star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-14.4"],"article":false,"description":"Mejoras - Se agrega soporte a registro de fecha y hora de impresión de documento fiscal en el documento de cuentas por pagar - Se implementa caché para ID de tablas cuando se buscan según su nombre - Se escribe la instancia de atributos en la orden de devolución desde la entrega o factura","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-1.x/rs-14.x/rs-14.4.html"}],["meta",{"property":"og:title","content":"rs-14.4"}],["meta",{"property":"og:description","content":"Mejoras - Se agrega soporte a registro de fecha y hora de impresión de documento fiscal en el documento de cuentas por pagar - Se implementa caché para ID de tablas cuando se buscan según su nombre - Se escribe la instancia de atributos en la orden de devolución desde la entrega o factura"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-06-12T20:17:53.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-14.4"}],["meta",{"property":"article:modified_time","content":"2024-06-12T20:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"rs-14.4\\",\\"description\\":\\"Mejoras - Se agrega soporte a registro de fecha y hora de impresión de documento fiscal en el documento de cuentas por pagar - Se implementa caché para ID de tablas cuando se buscan según su nombre - Se escribe la instancia de atributos en la orden de devolución desde la entrega o factura\\"}"]]},"headers":[{"level":2,"title":"Mejoras","slug":"mejoras","link":"#mejoras","children":[]},{"level":2,"title":"Correcciones","slug":"correcciones","link":"#correcciones","children":[]},{"level":2,"title":"Detalle técnico","slug":"detalle-tecnico","link":"#detalle-tecnico","children":[]},{"level":2,"title":"Nota Crítica","slug":"nota-critica","link":"#nota-critica","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","link":"#soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","link":"#requerimientos","children":[]}],"git":{"createdTime":1686601608000,"updatedTime":1718223473000,"contributors":[{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1},{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"downloads/updates/rs-1.x/rs-14.x/rs-14.4.md","localizedDate":"12 de junio de 2023","excerpt":"<h2> Mejoras</h2>\\n<pre><code>- Se agrega soporte a registro de fecha y hora de impresión de documento fiscal en el documento de cuentas por pagar\\n- Se implementa caché para ID de tablas cuando se buscan según su nombre\\n- Se escribe la instancia de atributos en la orden de devolución desde la entrega o factura\\n</code></pre>","autoDesc":true}')}}]);