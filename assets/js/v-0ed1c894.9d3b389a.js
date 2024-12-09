"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[30550],{18190:(e,a,i)=>{i.r(a),i.d(a,{default:()=>t});var o=i(78744);const n=[(0,o.Fv)('<p>En ADempiere el movimiento de inventario permite mover de una ubicación o almacén a otro, los diferentes productos que se encuentran almacenados en una determinada empresa.</p><p>Un movimiento de inventario puede ser realizado porque se requiere que sea distribuido algún material en los diferentes departamentos de la empresa, también puede realizarce porque no exista disponibilidad de un artículo, material o recurso que es indispensable o urgente para realizar alguna transacción de compra o venta.</p><p>El presente material elaborado por <strong>ERPyA</strong>, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar en ADempiere un movimiento de inventario, en su versión 3.9.2 para la localización Venezuela.</p><ul><li>Registro de Movimiento de Inventario</li><li>Consultar Reporte de Almacenamiento</li></ul><h3 id="registro-de-movimiento-de-inventario" tabindex="-1"><a class="header-anchor" href="#registro-de-movimiento-de-inventario" aria-hidden="true">#</a> Registro de Movimiento de Inventario</h3><p>Para ejemplificar el procedimiento es generado el reporte <strong>Detalle de Almacenamiento</strong> del producto <strong>Bolígrafo</strong> en el almacén <strong>Insumos de Oficina</strong>, el mismo es visualizado de la siguiente manera antes del movimiento de inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image19.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 1. Reporte Detalle Almacenamiento Antes del Movimiento</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Materiales</strong>, luego seleccione la ventana <strong>Movimiento de Inventario</strong>.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image20.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 2. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Movimiento de Inventario</strong> donde se encuentran los registros de los diferentes movimientos de inventarios realizados en la organización.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image21.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 3. Ventana Movimiento de Inventario</p><p>Seleccione el icono <strong>Registro Nuevo</strong>, ubicado en la barra de herramientas de ADempiere para crear un nuevo registro de movimiento inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image22.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 4. Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización desde la cual se esta realizando el movimiento de inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image23.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 5. Campo Organización</p><p>Seleccione en el campo <strong>Orden de Distribución</strong>, la orden de distribución asignada para el movimiento de los productos del inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image24.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 6. Campo Orden de Distribución</p><p>Note</p><p>Este campo debe ser llenado si el movimiento de inventario es realizado a consecuencia de una orden de distribución.</p><p>Seleccione en el campo <strong>Agente Comercial</strong>, el usuario que gestiona el movimiento de inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image25.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 7. Campo Agente Comercial</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción del movimiento de inventario que esta realizando.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image26.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 8. Campo Descripción</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por la empresa ERPyA.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image27.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 9. Campo Tipo de Documento</p><p>Introduzca en el campo <strong>Fecha de Movimiento</strong>, la fecha en la cual se esta realizando el movimiento de productos.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image28.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 10. Campo Fecha de Movimiento</p><p>Note</p><p>Recuerde guardar los cambios realizados en los campos de la pestaña <strong>Movimiento</strong>, seleccionando el icono <strong>Guardar Cambios</strong> ubicado en la barra de herramientas de ADempiere.</p><p>Seleccione la pestaña <strong>Línea del Movimiento</strong> y proceda al llenado de los campos correspondientes.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image29.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 11. Pestaña Línea de Movimiento</p><p>Seleccione en el campo <strong>Línea Orden Distribución</strong>, la línea de la orden de distribución en la cual se encuentra el producto involucrado en el movimiento de inventario que esta realizando.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image30.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 12. Campo Línea Orden Distribución</p><p>Note</p><p>Este campo debe ser llenado si el movimiento de inventario es realizado a consecuencia de una orden de distribución.</p><p>Seleccione en el campo <strong>Producto</strong>, el producto involucrado en el movimiento de inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image31.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 13. Campo Producto</p><p>Seleccione en el campo <strong>Ubicación</strong>, la ubicación exacta donde se encuentra localizado el producto.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image32.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 14. Campo Ubicación</p><p>Seleccione en el campo <strong>A Ubicación</strong>, la ubicación exacta donde será almacenado o donde va dirigido el producto.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image33.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 15. Campo A Ubicación</p><p>Seleccione en el campo <strong>Cantidad del Movimiento</strong>, la cantidad de productos involucrados en el movimiento de inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image34.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 16. Campo Cantidad del Movimiento</p><p>Note</p><p>Recuerde guardar los cambios realizados en los campos de la pestaña <strong>Línea del Movimiento</strong>, seleccionando el icono <strong>Guardar Cambios</strong> ubicado en la barra de herramientas de ADempiere.</p><p>Seleccione la pestaña principal <strong>Movimiento</strong>, luego seleccione la opción <strong>Completar</strong> ubicada en la parte inferior derecha de la ventana <strong>Movimiento de Inventario</strong>.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image35.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 17. Pestaña Movimiento y Opción Completar</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong> para completar el documento <strong>Movimiento de Inventario</strong>.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image36.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 18. Acción Completar y Opción OK</p><h3 id="consultar-reporte-de-almacenamiento" tabindex="-1"><a class="header-anchor" href="#consultar-reporte-de-almacenamiento" aria-hidden="true">#</a> Consultar Reporte de Almacenamiento</h3><p>Al generar el reporte <strong>Detalle de Almacenamiento</strong> del producto <strong>Bolígrafo</strong> en el almacén <strong>Insumos de Oficina</strong>, el mismo es visualizado de la siguiente manera después del movimiento de inventario.</p><figure><img src="/assets/img/docs/materials-management/mam-materials-image37.png" alt="Icono Guardar Cambios" tabindex="0" loading="lazy"><figcaption>Icono Guardar Cambios</figcaption></figure><p>Imagen 19. Reporte Detalle Almacenamiento Después del Movimiento</p>',71)],r={},t=(0,i(73570).A)(r,[["render",function(e,a){return(0,o.uX)(),(0,o.CE)("div",null,n)}]])},89473:(e,a,i)=>{i.r(a),i.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-0ed1c894","path":"/docs/material-management/inventory-move.html","title":"Movimiento de Inventario","lang":"es-ES","frontmatter":{"title":"Movimiento de Inventario","category":"Documentation","star":9,"sticky":9,"article":false,"description":"En ADempiere el movimiento de inventario permite mover de una ubicación o almacén a otro, los diferentes productos que se encuentran almacenados en una determinada empresa. Un movimiento de inventario puede ser realizado porque se requiere que sea distribuido algún material en los diferentes departamentos de la empresa, también puede realizarce porque no exista disponibilidad de un artículo, material o recurso que es indispensable o urgente para realizar alguna transacción de compra o venta.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/material-management/inventory-move.html"}],["meta",{"property":"og:title","content":"Movimiento de Inventario"}],["meta",{"property":"og:description","content":"En ADempiere el movimiento de inventario permite mover de una ubicación o almacén a otro, los diferentes productos que se encuentran almacenados en una determinada empresa. Un movimiento de inventario puede ser realizado porque se requiere que sea distribuido algún material en los diferentes departamentos de la empresa, también puede realizarce porque no exista disponibilidad de un artículo, material o recurso que es indispensable o urgente para realizar alguna transacción de compra o venta."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:21:37.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:21:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Movimiento de Inventario\\",\\"description\\":\\"En ADempiere el movimiento de inventario permite mover de una ubicación o almacén a otro, los diferentes productos que se encuentran almacenados en una determinada empresa. Un movimiento de inventario puede ser realizado porque se requiere que sea distribuido algún material en los diferentes departamentos de la empresa, también puede realizarce porque no exista disponibilidad de un artículo, material o recurso que es indispensable o urgente para realizar alguna transacción de compra o venta.\\"}"]]},"headers":[{"level":3,"title":"Registro de Movimiento de Inventario","slug":"registro-de-movimiento-de-inventario","link":"#registro-de-movimiento-de-inventario","children":[]},{"level":3,"title":"Consultar Reporte de Almacenamiento","slug":"consultar-reporte-de-almacenamiento","link":"#consultar-reporte-de-almacenamiento","children":[]}],"git":{"createdTime":1683130897000,"updatedTime":1683130897000,"contributors":[{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":2.9,"words":871},"filePathRelative":"docs/material-management/inventory-move.md","localizedDate":"3 de mayo de 2023","excerpt":"<p>En ADempiere el movimiento de inventario permite mover de una ubicación o almacén a otro, los diferentes productos que se encuentran almacenados en una determinada empresa.</p>\\n<p>Un movimiento de inventario puede ser realizado porque se requiere que sea distribuido algún material en los diferentes departamentos de la empresa, también puede realizarce porque no exista disponibilidad de un artículo, material o recurso que es indispensable o urgente para realizar alguna transacción de compra o venta.</p>","autoDesc":true}')}}]);