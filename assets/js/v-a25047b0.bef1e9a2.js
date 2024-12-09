"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[43271],{63756:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var o=n(78744);const r=[(0,o.Fv)('<p>El procedimiento <strong>Tasa de Conversión Negociada</strong>, consiste en mantener una tasa de cambio para una compra determinada cuando la orden es realizada con moneda diferente a la moneda base de la compañía.</p><p>La configuración del proceso consiste en activar el check <strong>Generar Tipo de Conversión Automaticamente</strong> en el tipo de documento <strong>Orden de Compra</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image87.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 1. Check en el Tipo de Documento Orden de Compra</p><p>Al establecer la tasa negociada en la orden de compra y completar la misma, ADempiere crea un tipo de conversión con su respectiva tasa de cambio, donde el valor de la tasa es igual al valor ingresado en la orden. Adicionalmente, se reemplaza el valor del campo <strong>Tipo de Conversión</strong> de la pestaña <strong>Orden de Compra</strong>, asignando el tipo de conversión creado con la tasa negociada.</p><p>Para explicar de manera detallada el proceso indicado anteriormente, se procede a realizar el registro del encabezado y las líneas de la orden de compra <strong>OCN-11</strong>, este se realiza en las pestañas <strong>Orden de Compra</strong> y <strong>Línea Orden Compra</strong> de la ventana <strong>Órdenes de Compra</strong>. De no conocer dicho procedimiento, puede consultar el material Registro de Orden de Compra Directa, sin completar el documento. Es decir, que la orden debe estar en estado <strong>Borrador</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image88.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 1. Orden de Compra en Estado Borrador</p><p>Luego de tener el registro de las pestañas <strong>Orden de Compra</strong> y <strong>Línea Orden Compra</strong> de la ventana <strong>Órdenes de Compra</strong>, se procede a seleccionar la pestaña <strong>Conversión de Moneda de la Orden de Compra</strong> y llenar los campos correspondientes.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image89.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 2. Pestaña Conversión de Moneda de la Orden de Compra</p><p>En el campo <strong>Compañía</strong>, se puede visualizar el nombre de la compañía para la cual se esta realizando la orden de compra. Esta información viene cargada desde la pestaña <strong>Orden de Compra</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image90.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 3. Campo Compañía de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>En el campo <strong>Organización</strong>, se puede visualizar el nombre de la organización para la cual se esta realizando la orden de compra. Esta información viene cargada desde la pestaña <strong>Orden de Compra</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image91.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 4. Campo Organización de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>De igual manera, podrá visualizar en el campo <strong>Orden de Compra</strong>, el número de orden de compra establecido en la pestaña <strong>Orden de Compra</strong> al guardar el registro.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image92.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 5. Campo Orden de Compra de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>La fecha en la que fue realizado el registro de la orden de compra, es visualizado en el campo <strong>F. Documento</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image93.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 6. Campo F. Documento de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>En el campo <strong>Moneda</strong>, se puede visualizar la moneda de la negociación de la orden de compra.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image94.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 7. Campo Moneda de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>En el campo <strong>Tipo de Conversión</strong>, se debe seleccionar el tipo de conversión con el cual se realizó el encabezado de la orden de compra.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image95.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 8. Campo Tipo de Conversión de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>La fecha de la tasa de la negociación, se visualiza en el campo <strong>Fecha de Conversión Negociada</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image96.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 9. Campo Fecha de Conversión Negociada de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>Finalmente, la tasa cambio de la negociación se debe ingresar en el campo <strong>Tasa de Cambio Negociada</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image97.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 10. Campo Tasa de Cambio Negociada de la Pestaña Conversión de Moneda de la Orden de Compra</p><p>Note</p><p>Recuerde que debe guardar el registro de los campos, antes de posicionarse en cualquier otra pestaña de la ventana <strong>Órdenes de Compra</strong>.</p><p>Seleccione la pestaña principal <strong>Orden de Compra</strong> y proceda a completar el registro de la orden de manera regular como se indica en el material Registro de Orden de Compra Directa.</p><p>Una vez la orden se encuentre en estado <strong>Completo</strong>, se crea de manera automática el tipo de conversión con el número de la orden <strong>BCV - OCN-11</strong> y la tasa de cambio negociada previamente establecida en la pestaña <strong>Conversión de Moneda de la Orden de Compra</strong> y a su vez, se reemplaza el tipo de conversión de la orden de compra en el encabezado, por el nuevo tipo de conversión creado.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image998.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 11. Orden de Compra en Estado Completo con Tipo de Conversión de la Negociación</p><p>Adicionalmente, se reemplaza el tipo de conversión de la pestaña <strong>Conversión de Moneda de la Orden de Compra</strong> por el tipo de conversión de la negociación asignado de manera automática en el encabezado de la orden. Para el presente ejemplo, dicho tipo de conversión es <strong>BCV - OCN-11</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image98.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 12. Tipo de Conversión de la Negociación en Pestaña Conversión de Moneda de la Orden de Compra</p><p>Note</p><p>Al momento de realizar el documento por pagar correspondiente a la orden de compra previamente creada, ADempiere respeta el tipo de conversión y la tasa de cambio negociada que contiene dicha orden, generando el documento con los mismos valores en cuanto al tipo de conversión y la tasa de cambio.</p>',46)],i={},d=(0,n(73570).A)(i,[["render",function(e,a){return(0,o.uX)(),(0,o.CE)("div",null,r)}]])},35885:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-a25047b0","path":"/docs/purchase-management/conversion.html","title":"Tasa de Conversión Negociada","lang":"es-ES","frontmatter":{"title":"Tasa de Conversión Negociada","category":"Documentation","star":9,"sticky":9,"article":false,"description":"El procedimiento Tasa de Conversión Negociada, consiste en mantener una tasa de cambio para una compra determinada cuando la orden es realizada con moneda diferente a la moneda base de la compañía. La configuración del proceso consiste en activar el check Generar Tipo de Conversión Automaticamente en el tipo de documento Orden de Compra.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/purchase-management/conversion.html"}],["meta",{"property":"og:title","content":"Tasa de Conversión Negociada"}],["meta",{"property":"og:description","content":"El procedimiento Tasa de Conversión Negociada, consiste en mantener una tasa de cambio para una compra determinada cuando la orden es realizada con moneda diferente a la moneda base de la compañía. La configuración del proceso consiste en activar el check Generar Tipo de Conversión Automaticamente en el tipo de documento Orden de Compra."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-07-16T19:07:01.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2024-07-16T19:07:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Tasa de Conversión Negociada\\",\\"description\\":\\"El procedimiento Tasa de Conversión Negociada, consiste en mantener una tasa de cambio para una compra determinada cuando la orden es realizada con moneda diferente a la moneda base de la compañía. La configuración del proceso consiste en activar el check Generar Tipo de Conversión Automaticamente en el tipo de documento Orden de Compra.\\"}"]]},"headers":[],"git":{"createdTime":1679398095000,"updatedTime":1721156821000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":2},{"name":"jose alberto botero osuna","email":"33498993+jabo6311@users.noreply.github.com","commits":1},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":3.1,"words":930},"filePathRelative":"docs/purchase-management/conversion.md","localizedDate":"21 de marzo de 2023","excerpt":"<p>El procedimiento <strong>Tasa de Conversión Negociada</strong>, consiste en mantener una tasa de cambio para una compra determinada cuando la orden es realizada con moneda diferente a la moneda base de la compañía.</p>\\n<p>La configuración del proceso consiste en activar el check <strong>Generar Tipo de Conversión Automaticamente</strong> en el tipo de documento <strong>Orden de Compra</strong>.</p>","autoDesc":true}')}}]);