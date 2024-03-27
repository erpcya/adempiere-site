"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[85737],{93197:(e,a,i)=>{i.r(a),i.d(a,{default:()=>o});var n=i(26440);const s=[(0,n.uE)('<p>Las estrategias de reabastecimiento son esenciales para optimizar los niveles de inventario y garantizar la satisfacción del cliente. ayudan a las empresas a evitar desabastecimientos, excesos de existencias y desperdicios, al tiempo que maximizan el rendimiento en la producción, ganancias y la eficiencia. Las estrategias de reabastecimiento pueden variar según el tipo de inventario, los patrones de demanda, los plazos de entrega y la distribución del almacén.</p><p>No existe una solución única para el reabastecimiento, sino más bien una variedad de métodos y políticas que pueden adaptarse a diferentes situaciones.En esta oportunidad ADempiere le brindará una solición basada en el reabastecimiento de empresas manufactureras, esta estrategia consiste en estimar cantidades necesarias para dar cumplimiento a un pronóstico de ventas en un periodo determinado.</p><h2 id="configuracion-esencial" tabindex="-1"><a class="header-anchor" href="#configuracion-esencial" aria-hidden="true">#</a> Configuración Esencial</h2><ul><li><p><strong>Almacén:</strong> Es necesario que exista al menos un almacén con el check <strong>Reabastecimiento desde Pronostico</strong> en estado <strong>verdadero</strong>, dicho(s) almacén es instrumento de evaluación en cantidades en compromiso de recibo, existencia, demanda y cantidad a reabastecer para el reabastecimiento</p></li><li><p><strong>Producto:</strong> Es necesario que los productos que van a ser evaluados contenga al menos una lista de materiales, con los productos de tipo insumos/matería prima para su producción.</p></li><li><p><strong>Lista de Materiales:</strong> Es necesario que exista al menos una lista de materiales en el producto a producir(Producto Terminado o Semielaborado) con el check <strong>Reabastecimiento desde Pronostico</strong> en estado <strong>verdadero</strong>, dicho registro es utilizado para calcular las cantidades y productos necesarios en base a demanda.</p></li><li><p><strong>Pronóstico de Ventas:</strong> La base de cálculo para la demanda en la cantidad estimada para la venta de producto terminado, por lo que es necesario un pronóstico valido dentro del período de ejecución del plan de reabastecimiento.</p></li></ul><h2 id="formulacion-de-demanda" tabindex="-1"><a class="header-anchor" href="#formulacion-de-demanda" aria-hidden="true">#</a> Formulación de Demanda</h2><ul><li><p><strong>Cantidad en Existencia:</strong> Cantidad existente de producto en almacenes con el check <strong>Reabastecimiento desde Pronostico</strong> en estado <strong>verdadero</strong>.</p></li><li><p><strong>Cantidad en Demanda:</strong> Cantidad resultante de la siguiente fórmula:</p><pre><code>          PRODUCTO TERMINADO=CANTIDAD NECESARIA(LDM)*CANTIDAD ESTIMADA PARA VENTA\n          PRODUUCTO SEMIELABORADO= \n</code></pre></li><li></li></ul><h2 id="ejecucion-de-plan-de-reabastecimiento-en-base-a-pronostico" tabindex="-1"><a class="header-anchor" href="#ejecucion-de-plan-de-reabastecimiento-en-base-a-pronostico" aria-hidden="true">#</a> Ejecución de Plan de Reabastecimiento en Base a Pronóstico</h2><ul><li><p>Vaya al menú <strong>Gestión de Materiales</strong>-&gt;<strong>Reabastecimiento desde Pronóstico</strong><br><img src="https://github.com/erpcya/docs/assets/9578152/8c1d321a-5c03-44e2-9360-6ea3e8ffa493" alt="image" loading="lazy"></p></li><li><p>Seleccione la opción <strong>Procesar Reabastecimiento(Basado en Pronóstico)</strong><br><img src="https://github.com/erpcya/docs/assets/9578152/8fcd0068-2107-4972-8c60-fc6c1c1257d4" alt="image" loading="lazy"></p></li><li><p>A continuación veremos la siguiente pantalla<br><img src="https://github.com/erpcya/docs/assets/9578152/22b21d38-41be-4e03-8f87-c737fe4fe385" alt="image" loading="lazy"></p></li><li><p>Indique el <strong>Calendario operacional</strong>, se refiere a la definición del calendario de planificación productiva en una empresa.<br><img src="https://github.com/erpcya/docs/assets/9578152/f09a52f9-bf73-46f2-8910-7a723fc36192" alt="image" loading="lazy"></p></li><li><p>Indique la <strong>Definición de período</strong>. se refiere a la forma en la que según la unidad (Trimestre, Mes, Año u otro) en la que puedo ver expresado los períodos,<br><img src="https://github.com/erpcya/docs/assets/9578152/455ce076-d9aa-465a-a407-c630346af083" alt="image" loading="lazy"></p></li><li><p>Seleccione el rango del <strong>Período operacional</strong>, dependerá de la definición, para este ejemplo por ser mensual podemos ver desde qué mes hasta qué mes se ejecutará el plan de reabastecimiento.<br><img src="https://github.com/erpcya/docs/assets/9578152/73034f78-a47e-4e0d-b667-f2e2278e0b29" alt="image" loading="lazy"></p></li><li><p>Seleccione la opción <strong>OK</strong> para ejecutar el proceso, si el resultado es satisfactorio, se visualizará la siguiente pantalla.<br><img src="https://github.com/erpcya/docs/assets/9578152/46ffe594-0c35-46ec-b241-aeaf2acd8c1f" alt="image" loading="lazy"></p></li></ul><h3 id="resultado-de-la-ejecucion" tabindex="-1"><a class="header-anchor" href="#resultado-de-la-ejecucion" aria-hidden="true">#</a> Resultado de la Ejecución</h3><ul><li><p>Para ver el resultado vaya a la ventana <strong>Plan de Reabastecimiento (Basado en Pronóstico)</strong>.<br><img src="https://github.com/erpcya/docs/assets/9578152/d928a10a-0410-4f4f-bc17-38d29a56a4a6" alt="image" loading="lazy"></p></li><li><p>Genera registros con los siguientes productos partes de la estimación:</p><ul><li>Materia Prima</li><li>Semielaborados</li><li>Producto Terminado</li></ul></li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',11)],t={},o=(0,i(71212).Z)(t,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,s)}]])},18742:(e,a,i)=>{i.r(a),i.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-61922822","path":"/docs/material-management/Replenishfromforecast.html","title":"Reabastecimiento desde Pronóstico de Venta","lang":"es-ES","frontmatter":{"title":"Reabastecimiento desde Pronóstico de Venta","category":"Documentation","star":9,"sticky":9,"article":false,"description":"Las estrategias de reabastecimiento son esenciales para optimizar los niveles de inventario y garantizar la satisfacción del cliente. ayudan a las empresas a evitar desabastecimientos, excesos de existencias y desperdicios, al tiempo que maximizan el rendimiento en la producción, ganancias y la eficiencia. Las estrategias de reabastecimiento pueden variar según el tipo de inventario, los patrones de demanda, los plazos de entrega y la distribución del almacén.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/material-management/Replenishfromforecast.html"}],["meta",{"property":"og:title","content":"Reabastecimiento desde Pronóstico de Venta"}],["meta",{"property":"og:description","content":"Las estrategias de reabastecimiento son esenciales para optimizar los niveles de inventario y garantizar la satisfacción del cliente. ayudan a las empresas a evitar desabastecimientos, excesos de existencias y desperdicios, al tiempo que maximizan el rendimiento en la producción, ganancias y la eficiencia. Las estrategias de reabastecimiento pueden variar según el tipo de inventario, los patrones de demanda, los plazos de entrega y la distribución del almacén."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-03-27T20:21:52.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2024-03-27T20:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Reabastecimiento desde Pronóstico de Venta\\",\\"description\\":\\"Las estrategias de reabastecimiento son esenciales para optimizar los niveles de inventario y garantizar la satisfacción del cliente. ayudan a las empresas a evitar desabastecimientos, excesos de existencias y desperdicios, al tiempo que maximizan el rendimiento en la producción, ganancias y la eficiencia. Las estrategias de reabastecimiento pueden variar según el tipo de inventario, los patrones de demanda, los plazos de entrega y la distribución del almacén.\\"}"]]},"headers":[{"level":2,"title":"Configuración Esencial","slug":"configuracion-esencial","link":"#configuracion-esencial","children":[]},{"level":2,"title":"Formulación de Demanda","slug":"formulacion-de-demanda","link":"#formulacion-de-demanda","children":[]},{"level":2,"title":"Ejecución de Plan de Reabastecimiento en Base a Pronóstico","slug":"ejecucion-de-plan-de-reabastecimiento-en-base-a-pronostico","link":"#ejecucion-de-plan-de-reabastecimiento-en-base-a-pronostico","children":[{"level":3,"title":"Resultado de la Ejecución","slug":"resultado-de-la-ejecucion","link":"#resultado-de-la-ejecucion","children":[]}]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1711487235000,"updatedTime":1711570912000,"contributors":[{"name":"Waditza","email":"wdtz@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":1.83,"words":549},"filePathRelative":"docs/material-management/Replenishfromforecast.md","localizedDate":"26 de marzo de 2024","excerpt":"<p>Las estrategias de reabastecimiento son esenciales para optimizar los niveles de inventario y garantizar la satisfacción del cliente. ayudan a las empresas a evitar desabastecimientos, excesos de existencias y desperdicios, al tiempo que maximizan el rendimiento en la producción, ganancias y la eficiencia. Las estrategias de reabastecimiento pueden variar según el tipo de inventario, los patrones de demanda, los plazos de entrega y la distribución del almacén.</p>","autoDesc":true}')}}]);