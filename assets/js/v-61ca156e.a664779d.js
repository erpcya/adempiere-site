"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[93342],{35684:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var o=n(78744);const t=(0,o.Fv)('<p><strong>Fecha de Liberación:</strong> 2024-08-30</p><h2 id="novedades" tabindex="-1"><a class="header-anchor" href="#novedades" aria-hidden="true">#</a> Novedades</h2><h3 id="reportes-financieros" tabindex="-1"><a class="header-anchor" href="#reportes-financieros" aria-hidden="true">#</a> Reportes Financieros</h3><p>Se agrega funcionalidad para crear las líneas de informes financieros desde el elemento contable. Esto es muy útil al momento de importar un elemento contable personalizado.</p><figure><img src="/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img1.png" alt="2.3.9" tabindex="0" loading="lazy"><figcaption>2.3.9</figcaption></figure><p>La funcionalidad inicial implementada es el reporte <strong>Balance de Comprobación</strong> haciendo coincidencia por los tipos de cuentas dentro del elemento contable.</p><p>Para lograr esto se agregaron dos columnas nuevas a las <strong>Líneas de Informe</strong></p><ul><li><strong>Tipo de Cuenta</strong>: Determina el tipo de cuenta, Activo, Pasivo, Capital entre otros</li><li><strong>Tipo de Cuenta Hija</strong>: Determina en detalle a qué pertenece el tipo, ejemplo: Dentro de <strong>Ingresos</strong> se tiene <strong>Otros Ingresos</strong>.</li></ul><figure><img src="/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img2.png" alt="2.3.9" tabindex="0" loading="lazy"><figcaption>2.3.9</figcaption></figure><p>Para hacer la búsqueda dentro del elemento contable se toman en cuenta las columnas nuevas dentro del mismo.</p><figure><img src="/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img3.png" alt="2.3.9" tabindex="0" loading="lazy"><figcaption>2.3.9</figcaption></figure><p>Para generar el fuente de cada linea del informe se toma como criterio lo siguiente:</p><ul><li><p>El <strong>Tipo de Cuenta</strong> de la línea del informe debe coincidir con el <strong>Tipo de Cuenta</strong> del <strong>Elemento Contable</strong></p></li><li><p>Si la linea de informe no tiene nada en el <strong>Tipo de Cuenta Hija</strong> entonces sólo buscará los elementos contables que coincidan con el <strong>Tipo de Cuenta</strong> y que no tengan padre asociado, es decir, que estén en el primer nivel del arbol.</p></li></ul><figure><img src="/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img4.png" alt="2.3.9" tabindex="0" loading="lazy"><figcaption>2.3.9</figcaption></figure><ul><li>Si la linea de informe tiene asociado un <strong>Tipo de Cuenta Hija</strong> entonces hará coincidencia con el tipo de cuenta hija también sin importar si tiene o no tiene padre relacionado en el elemento contable.</li></ul><figure><img src="/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img5.png" alt="2.3.9" tabindex="0" loading="lazy"><figcaption>2.3.9</figcaption></figure><ul><li>Adicional a lo anterior es obligatorio que el elemento a tomar esté marcado como <strong>Entidad Acumulada</strong></li></ul><figure><img src="/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img6.png" alt="2.3.9" tabindex="0" loading="lazy"><figcaption>2.3.9</figcaption></figure><h2 id="contexto" tabindex="-1"><a class="header-anchor" href="#contexto" aria-hidden="true">#</a> Contexto</h2><ul><li>La nueva función permite crear líneas de informes financieros desde elementos contables, facilitando la importación de reportes como el <strong>Balance de Comprobación</strong>.</li></ul><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2><ul><li>Se agregan las columnas <strong>Tipo de Cuenta y Tipo de Cuenta Hija</strong> en las líneas de informe, utilizando estos datos para coincidir con elementos contables y marcando entidades acumuladas.</li></ul><h2 id="enlaces-relacionados" tabindex="-1"><a class="header-anchor" href="#enlaces-relacionados" aria-hidden="true">#</a> Enlaces relacionados</h2>',23),i={href:"https://github.com/erpya/adempiere_patch_zk/releases/tag/2.3.9",target:"_blank",rel:"noopener noreferrer"},r=(0,o.Lk)("h2",{id:"requerimientos",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#requerimientos","aria-hidden":"true"},"#"),(0,o.eW)(" Requerimientos")],-1),s=(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"Se requieren procesos adicionales por aplicar")],-1),l={},d=(0,n(73570).A)(l,[["render",function(e,a){const n=(0,o.g2)("ExternalLinkIcon");return(0,o.uX)(),(0,o.CE)("div",null,[t,(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",i,[(0,o.eW)("ERPYA v2.3.9"),(0,o.bF)(n)])])]),r,s])}]])},24322:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-61ca156e","path":"/downloads/updates/adempiere-3.9.4/erpya-3.9.4-001-2.x.x/erpya-3.9.4-001-2.3.x/erpya-3.9.4-001-2.3.9.html","title":"erpya-3.9.4-001-2.3.9","lang":"es-ES","frontmatter":{"title":"erpya-3.9.4-001-2.3.9","icon":"podcast","category":"Actualizaciones","star":9,"sticky":9,"tag":["Actualizaciones","Versiones","erpya-3.9.4-001-2.3.9","2024-08-30","Noticias"],"article":true,"description":"Fecha de Liberación: 2024-08-30 Novedades Reportes Financieros Se agrega funcionalidad para crear las líneas de informes financieros desde el elemento contable. Esto es muy útil al momento de importar un elemento contable personalizado. 2.3.9","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/adempiere-3.9.4/erpya-3.9.4-001-2.x.x/erpya-3.9.4-001-2.3.x/erpya-3.9.4-001-2.3.9.html"}],["meta",{"property":"og:title","content":"erpya-3.9.4-001-2.3.9"}],["meta",{"property":"og:description","content":"Fecha de Liberación: 2024-08-30 Novedades Reportes Financieros Se agrega funcionalidad para crear las líneas de informes financieros desde el elemento contable. Esto es muy útil al momento de importar un elemento contable personalizado. 2.3.9"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-08-30T17:11:21.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"erpya-3.9.4-001-2.3.9"}],["meta",{"property":"article:tag","content":"2024-08-30"}],["meta",{"property":"article:tag","content":"Noticias"}],["meta",{"property":"article:modified_time","content":"2024-08-30T17:11:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"erpya-3.9.4-001-2.3.9\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T17:11:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ERP Consultores y Asociados, C.A.\\",\\"url\\":\\"https://erpya.com\\"}]}"]]},"headers":[{"level":2,"title":"Novedades","slug":"novedades","link":"#novedades","children":[{"level":3,"title":"Reportes Financieros","slug":"reportes-financieros","link":"#reportes-financieros","children":[]}]},{"level":2,"title":"Contexto","slug":"contexto","link":"#contexto","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","link":"#detalle-tecnico","children":[]},{"level":2,"title":"Enlaces relacionados","slug":"enlaces-relacionados","link":"#enlaces-relacionados","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","link":"#requerimientos","children":[]}],"git":{"createdTime":1725037881000,"updatedTime":1725037881000,"contributors":[{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.26,"words":379},"filePathRelative":"downloads/updates/adempiere-3.9.4/erpya-3.9.4-001-2.x.x/erpya-3.9.4-001-2.3.x/erpya-3.9.4-001-2.3.9.md","localizedDate":"30 de agosto de 2024","excerpt":"<p><strong>Fecha de Liberación:</strong> 2024-08-30</p>\\n<h2> Novedades</h2>\\n<h3> Reportes Financieros</h3>\\n<p>Se agrega funcionalidad para crear las líneas de informes financieros desde el elemento contable. Esto es muy útil al momento de importar un elemento contable personalizado.</p>\\n<figure><img src=\\"/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img1.png\\" alt=\\"2.3.9\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>2.3.9</figcaption></figure>","autoDesc":true}')}}]);