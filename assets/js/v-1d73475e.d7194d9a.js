"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5698],{37207:(e,i,a)=>{a.r(i),a.d(i,{default:()=>d});var l=a(78e3);const n=(0,l.uE)('<p><strong>Fecha de Liberación:</strong> 2022-07-19</p><h2 id="novedades" tabindex="-1"><a class="header-anchor" href="#novedades" aria-hidden="true">#</a> Novedades</h2><ul><li>Se corrige llamado recursivo de método para exportación de datos del e-Commerce</li><li>Se agrega bandera en tienda web para determinar cuales entidades se exportarán a la tienda web</li><li>Se agrega filtro por moneda en la definición y línea de comisiones. Esto permite que se pueda tener una comisión en una moneda y otra en una moneda distinta, tambien se puede tener una sola definición de comisiones con dos lineas aplicando filtro de distintas monedas</li></ul><p>Banderas que se agregaron a la tienda web se pueden ver a continuación:</p><p><img src="/assets/img/downloads/updates/resources/rs-47-1-store-setup.png" alt="Configuración de Tienda"></p><p>Con este release ahora se puede marcar una bandera en la comisión para que sólo busque los documentos que tienen la misma moneda de la definición de comisión. A continuación se puede ver dónde se configura dentro de la ventana de Definición de Comisiones:</p><p><img src="/assets/img/downloads/updates/resources/rs-47-1-commission-setup.png" alt="Configuración de Comisión"></p><p>Si se desea tener una sola definición de comisiones pero con reglas distintas dependiendo de la moneda entonces se puede seleccionar la moneda en la línea de la definición de comisiones y actuará como filtro, esto sólo es aplicable si la bandera que se encuentra en la definición de comisiones para hacer filtro por la misma moneda se encuentra deshabilitada.</p><p><img src="/assets/img/downloads/updates/resources/rs-47-1-commission-line-setup.png" alt="Configuración de Línea de Comisión"></p><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2><ul><li><p>Queue-Manager:</p><ul><li>Remove clear calling from default constructor for Queue Manager</li></ul></li><li><p>e-Commerce-Queue:</p><ul><li>Add support to selected export entities based on e-Commerce setup</li></ul></li><li><p>CST-STD:</p><ul><li>Add patch for new e-Commerce functionalidy based on selected tables to export</li><li>Add support to currency filter to commission and commission line definition</li></ul></li></ul><h2 id="reportes-relacionados" tabindex="-1"><a class="header-anchor" href="#reportes-relacionados" aria-hidden="true">#</a> Reportes relacionados</h2>',12),r={href:"https://github.com/erpcya/Control-PROSEIN/issues/237",target:"_blank",rel:"noopener noreferrer"},t=(0,l.Uk)("Error al activar Validador de Modelo"),o=(0,l.uE)('<h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>ADempiereBase: Versión de Liberación: 3.9.3-rs-4.3</li><li>CST-STD: Versión de Liberación: rs-34.9</li><li>Consigned-Material: 1.3.0</li><li>Exchange-Operation-System: 1.2.1</li><li>Cloud-Service-Management: 1.2.4</li><li>Cash-Management: 1.1.4</li><li>Currency-Convert-Documents: 1.0.9</li><li>Farmer-Assistance-Program: 1.4.5</li><li>RethinkDB-Replicator-Client: 1.1.5</li><li>Third-Party-Access: 1.0.6</li><li>Fiscal-Printer: 1.5.3</li><li>Sales-Force-Management: 1.0.6</li><li>Delivery-Management-Service: 1.1.9</li><li>Travel-Agency-Management: 1.1.9</li><li>Withholding: 1.2.2</li><li>Migration-Tools: 1.0.4</li><li>LVE: 1.8.4</li><li>Performance-Analysis: 1.1.3</li><li>Queue-Manager: 1.0.7</li><li>Notification-Queue: 1.1.6</li><li>Point-Of-Sales-Improvements: 1.4.4</li><li>Kafka-Replicator-Client: 1.0.9</li><li>Kafka-Util: 1.0.2</li><li>Core-Tools: 1.4.1</li><li>Get-Weight:1.2.4</li><li>Record-Weight: 1.0.7</li><li>Raw-Material-Receipt: 1.1.6</li><li>Additional-Reports: 1.2.4</li><li>adempiere-customer-backend: 1.2.1</li><li>Material-Management-Improvements: 1.1.6</li><li>Warehouse-Management-System-Improvements: 1.1.6</li><li>Import-Export-Management: 1.0.3</li><li>Update-Management: 1.1.9</li><li>Mini-Retail: 1.1.7</li><li>Print-Queue: 1.1.4</li><li>ERP-Payroll-Definition: 1.0.6</li><li>Internal-Store: 1.0.4</li><li>Telegram-Notifier: 1.0.5</li><li>Costing-Engine-Improvements: 1.1.1</li><li>Default-Attribute: 1.0.1</li><li>Financial-Report: 1.0.1</li><li>Json-Replicator-Client: 1.0.2</li><li>Kubernetes-Cluster: 1.0.7</li><li>ADempiere-Exporter: 1.0.5</li><li>ADempiere-TelegramBot</li><li>e-Commerce-Queue: 1.1.5</li><li>Vue-StoreFront-API: 1.0.9</li><li>Mercado-Libre-Venezuela-API: 1.0.8</li><li>Common-Functionalities: 1.0.0</li><li>FAP-Venezuela-Location: 1.0.4</li><li>LVE-AdditionalTax: 1.0.7</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><ul><li><p>Aplicar binario de la aplicación</p></li><li><p>Aplicar XML&#39;s:</p><ul><li><p>e-Commerce-Queue:</p><ul><li>10020_Add_Export_flags_definition.xml</li></ul></li><li><p>CST-STD:</p><ul><li>10270_Add_Currency_as_filter_to_Commission_Definition.xml</li></ul></li></ul></li></ul>',4),s={},d=(0,a(13860).Z)(s,[["render",function(e,i){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[n,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",r,[t,(0,l.Wm)(a)])])]),o])}]])},4753:(e,i,a)=>{a.r(i),a.d(i,{data:()=>l});const l=JSON.parse('{"key":"v-1d73475e","path":"/downloads/updates/rs-4x/rs-47.x/rs-47.1.html","title":"rs-47.1","lang":"es-ES","frontmatter":{"title":"rs-47.1","icon":"app","category":["Actualizaciones"],"star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-47.1","2022-07-19T00:00:00.000Z"],"article":false,"summary":"Fecha de Liberación: 2022-07-19 Novedades Se corrige llamado recursivo de método para exportación de datos del e-Commerce; Se agrega bandera en tienda web para determinar cuales en","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-4x/rs-47.x/rs-47.1.html"}],["meta",{"property":"og:title","content":"rs-47.1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-06T21:10:10.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-47.1"}],["meta",{"property":"article:tag","content":"2022-07-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-06T21:10:10.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Novedades","slug":"novedades","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","children":[]},{"level":2,"title":"Reportes relacionados","slug":"reportes-relacionados","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","children":[]}],"git":{"createdTime":1686085810000,"updatedTime":1686085810000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.71,"words":512},"filePathRelative":"downloads/updates/rs-4x/rs-47.x/rs-47.1.md","localizedDate":"6 de junio de 2023"}')}}]);