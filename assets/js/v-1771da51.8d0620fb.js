"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[62451],{30776:(e,a,o)=>{o.r(a),o.d(a,{default:()=>p});var t=o(78744);const i=(0,t.Fv)('<p>Posterior a la concesión del anticipo, será justificado el anticipo relacionando los gastos (Facturas) es entonces cuando se procede a liquidar los anticipos concedidos al gestor de importación.</p><p>La operación de anticipos a terceros está compuesta por cinco fases u operaciones las cuales no tienen porqué ser todas necesarias en el proceso de liquidación:</p><ul><li>Anticipo a terceros(Gestor)</li><li>Registrar justificantes(Carga de Facturas de Cuentas por Pagar)</li><li>Relación de Pasivos(Gestor)</li><li>Incremento de anticipo a terceros(Gestor)</li><li>Liquidación de Anticipos y CxP</li></ul><h2 id="factura-de-cuentas-por-pagar-de-costos-fob" tabindex="-1"><a class="header-anchor" href="#factura-de-cuentas-por-pagar-de-costos-fob" aria-hidden="true">#</a> <strong>Factura de Cuentas por Pagar de Costos FOB</strong></h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Compras</strong>&quot;, luego seleccione la ventana &quot;<strong>Documentos por Pagar</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/menufactura.png" alt="menu-adempiere2" tabindex="0" loading="lazy"><figcaption>menu-adempiere2</figcaption></figure><p>Imagen 3. Menú de ADempiere</p><p>Realice el procedimiento habitual para crear los documentos por pagar necesarios, explicado en el material Documento por Pagar elaborado por ERPyA. Para ejemplificar el registro se realizan tres facturas como relación entregada por el intermediario gestor de la importación.</p><div class="hint-container note"><p class="hint-container-title">Nota</p><p><strong>¡Importante!</strong><br> Seleccione el tipo de documento: <strong>Facturas Gastos Nacionales Importación</strong>, para que este documento no afecte la base del IVA.</p></div><p>Asigne el expediente creaado anteriormente en el campo <strong>Expediente Importación/Exportación</strong>.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png" alt="expediente-factura" tabindex="0" loading="lazy"><figcaption>expediente-factura</figcaption></figure><h2 id="conciliacion-de-liquidacion" tabindex="-1"><a class="header-anchor" href="#conciliacion-de-liquidacion" aria-hidden="true">#</a> <strong>Conciliación de Liquidación</strong></h2><ul><li>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Saldos Pendientes</strong>&quot;, luego seleccione la carpeta &quot;<strong>Diario de Caja</strong>&quot;, por último seleccione la ventana &quot;<strong>Cierre de Caja</strong>&quot;.</li></ul><figure><img src="/assets/img/docs/lve/procedures/import/resources/menucierre1.png" alt="Menú de ADempiere 4" tabindex="0" loading="lazy"><figcaption>Menú de ADempiere 4</figcaption></figure><p>Imagen 4. Expediente de Importación</p><p>Asigne la factura relacionada o factura de la mercacía creada anteriormente en el campo <strong>Factura Relacionada</strong>.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/facturarelacionimport.png" alt="Factura_Relacionada" tabindex="0" loading="lazy"><figcaption>Factura_Relacionada</figcaption></figure><p>Imagen 5. Factura Relacionada</p><p>Al colocar el expediente se establece el <strong>tipo de conversión negociado</strong>.</p><p>Factura &quot;<strong>1000020</strong>&quot;, con socio del negocio &quot;<strong>Bolivariana de Puertos (Bolipuertos) S A</strong>&quot; y moneda &quot;<strong>VES</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/doc1.png" alt="Documento Por Pagar 1" tabindex="0" loading="lazy"><figcaption>Documento Por Pagar 1</figcaption></figure><p>Imagen 6. Documento por Pagar</p><p>Podrá visualizar en la pestaña &quot;<strong>Línea de la Factura</strong>&quot;, el cargo &quot;<strong>Cargo de Gatos</strong>&quot; utilizado para generar el documento por pagar con el monto de &quot;<strong>1.550.000,00</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/linea1.png" alt="Pestaña Línea de la Factura 1" tabindex="0" loading="lazy"><figcaption>Pestaña Línea de la Factura 1</figcaption></figure><p>Imagen 7. Pestaña Línea de la Factura</p><p>Factura &quot;<strong>1000022</strong>&quot;, con socio del negocio &quot;<strong>Dhl Express Aduanas Venezuela C.A.</strong>&quot; y moneda &quot;<strong>VES</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/doc2.png" alt="Documento por Pagar 2" tabindex="0" loading="lazy"><figcaption>Documento por Pagar 2</figcaption></figure><p>Imagen 8. Documento por Pagar</p><p>Podrá visualizar en la pestaña &quot;<strong>Línea de la Factura</strong>&quot;, el cargo &quot;<strong>Flete Aduanales</strong>&quot; utilizado para generar el documento por pagar con el monto de &quot;<strong>2.400.000,00</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/linea2.png" alt="Pestaña Línea de la Factura 2" tabindex="0" loading="lazy"><figcaption>Pestaña Línea de la Factura 2</figcaption></figure><p>Imagen 9. Pestaña Línea de la Factura</p><p>Factura &quot;<strong>1000023</strong>&quot;, con socio del negocio &quot;<strong>Dhl Express Aduanas Venezuela C.A.</strong>&quot; y moneda &quot;<strong>VES</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/doc3.png" alt="Documento Por Pagar" tabindex="0" loading="lazy"><figcaption>Documento Por Pagar</figcaption></figure><p>Imagen 10. Documento por Pagar</p><p>Podrá visualizar en la pestaña &quot;<strong>Línea de la Factura</strong>&quot;, el cargo &quot;<strong>Honorarios Profesionales</strong>&quot; utilizado para generar el documento por pagar con el monto de &quot;<strong>27.000.000,00</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/linea3.png" alt="Pestaña Línea de la Factura 3" tabindex="0" loading="lazy"><figcaption>Pestaña Línea de la Factura 3</figcaption></figure><p>Imagen 11. Pestaña Línea de la Factura</p><div class="hint-container note"><p class="hint-container-title">Nota</p><p>Si ya se encuentra recepcionada la mercancía debe seguir el procedimiento de costos adicionales asociado a una recepción, de otro modo debe ser cargada de forma regular y ser reversada mediante un ajuste de crédito al recepcionar la mercancía, cargando un ajuste de débito con el procedimiento de costo adicional.</p></div><h2 id="cancelacion-o-cruce-de-anticipo-con-cuentas-por-pagar" tabindex="-1"><a class="header-anchor" href="#cancelacion-o-cruce-de-anticipo-con-cuentas-por-pagar" aria-hidden="true">#</a> Cancelación ó Cruce de Anticipo con Cuentas por Pagar</h2><p>La caja a definir funge en el procedimiento de anticipos a terceros como un puente para el registro y pago de los anticipos a proveedores intermediarios en el proceso de importación y para la posterior liquidación de las facturas entregadas en la relación de gastos o costos de nacionalización y cierre de los anticipos.</p><p>En la siguiente ventana de &quot;<strong>Caja</strong>&quot; se realizan todos los pagos de las facturas pendientes por cancelar, a continuación se define el proceso de caja en ADempiere.</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Saldos Pendientes</strong>&quot;, luego seleccione la carpeta &quot;<strong>Diario de Caja</strong>&quot;, por último seleccione la ventana &quot;<strong>Caja</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/menucaja.png" alt="Menú de ADempiere 3" tabindex="0" loading="lazy"><figcaption>Menú de ADempiere 3</figcaption></figure><p>Imagen 12. Menú de ADempiere</p><div class="hint-container note"><p class="hint-container-title">Nota</p><p>El requerimiento principal para realizar el proceso de gestión de caja de intermediario es tener una definición de caja creada.</p></div><p>Seleccione en el campo &quot;<strong>Organización</strong>&quot;, la organización para la cual esta realizando el documento &quot;<strong>Caja</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/org3.png" alt="Campo Organización 1" tabindex="0" loading="lazy"><figcaption>Campo Organización 1</figcaption></figure><p>Imagen 13. Campo Organización</p><p>Seleccione en el campo &quot;<strong>Cuenta Bancaria</strong>&quot; la cuenta caja correspondiente al documento que esta realizando. Para ejemplificar el registro es utilizada la opción &quot;<strong>Caja Intermediarios - --_OCI-1000024_Estandar</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/cuenta3.png" alt="Cuenta Bancaria" tabindex="0" loading="lazy"><figcaption>Cuenta Bancaria</figcaption></figure><p>Imagen 14. Campo Cuenta Bancaria</p>',51),r=(0,t.Lk)("strong",null,"Tipo de Documento",-1),n=(0,t.Lk)("strong",null,"Tipo de Documento",-1),c={href:"https://erpya.com",target:"_blank",rel:"noopener noreferrer"},s=(0,t.Lk)("strong",null,"Pago Nacional",-1),d=(0,t.Fv)('<figure><img src="/assets/img/docs/lve/procedures/import/resources/tipodoc3.png" alt="Campo Tipo de Documento 1" tabindex="0" loading="lazy"><figcaption>Campo Tipo de Documento 1</figcaption></figure><p>Imagen 15. Campo Tipo de Documento</p><p>Seleccione en el campo &quot;<strong>Factura</strong>&quot;, la factura que será reflejada en la caja que esta realizando. Para ejemplificar el registro es utilizada la factura &quot;<strong>1000023</strong>&quot; creada anteriormente.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/factura2.png" alt="Campo Factura 1" tabindex="0" loading="lazy"><figcaption>Campo Factura 1</figcaption></figure><p>Seleccione la opción &quot;<strong>Completar</strong>&quot;, ubicada en la parte inferior del documento.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/completar4.png" alt="Opción Completar 2" tabindex="0" loading="lazy"><figcaption>Opción Completar 2</figcaption></figure><p>Imagen 16. Opción Completar</p><p>Seleccione la acción &quot;<strong>Completar</strong>&quot; y la opción &quot;<strong>Ok</strong>&quot; para completar el documento &quot;<strong>Caja</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/accion1.png" alt="Acción Completar" tabindex="0" loading="lazy"><figcaption>Acción Completar</figcaption></figure><p>Imagen 17. Acción Completar</p><div class="hint-container note"><p class="hint-container-title">Nota</p><p>Repita el procedimiento con todos los documentos por pagar importación correspondientes a la relación entregada por el intermediario gestor de la importación.</p></div><p>Cuentas por pagar emite una &quot;<strong>Solicitud de Pago</strong>&quot; seleccionando la caja creada previamente y asociando todas las facturas de la relación entregada por el intermediario gestor de la importación.</p><p>Tesorería ejecuta el proceso de &quot;<strong>Imprimir/Exportar</strong>&quot; llamando la solicitud de pago creada previamente.</p><p>Resultados:</p><ul><li><p><strong>Egreso</strong>:</p><ul><li><strong>Resultado</strong>: Se genera un egreso en caja por el monto a cancelar.</li></ul></li><li><p><strong>Resultado Contable en Caja</strong>:</p></li></ul><table><thead><tr><th>Organización</th><th>Cuenta</th><th>Débito Contabilizado</th><th>Crédito Contabilizado</th></tr></thead><tbody><tr><td>Organización</td><td>2.1.4.1.3.002 - SELECCIÓN DE PAGOS</td><td>27.000.000,00</td><td>0,00</td></tr><tr><td>Organización</td><td>1.1.2.4.1.002 - ANTICIPOS A INTERMEDIARIOS PENDIENTES POR CONCILIAR</td><td>0,00</td><td>27.000.000,00</td></tr><tr><td></td><td></td><td>27.000.000,00</td><td>27.000.000,00</td></tr></tbody></table><ul><li><strong>Resultado Contable en Asignación entre Factura y Pago</strong>:</li></ul><table><thead><tr><th>Organización</th><th>Cuenta</th><th>Débito Contabilizado</th><th>Crédito Contabilizado</th></tr></thead><tbody><tr><td>Organización</td><td>2.1.1.1.1.001 - CUENTAS POR PAGAR PROVEEDORES NACIONALES</td><td>27.000.000,00</td><td>0,00</td></tr><tr><td>Organización</td><td>2.1.4.1.3.002 - SELECCIÓN DE PAGOS</td><td>0,00</td><td>27.000.000,00</td></tr><tr><td></td><td></td><td>27.000.000,00</td><td>27.000.000,00</td></tr></tbody></table><h2 id="conciliacion-de-liquidacion-1" tabindex="-1"><a class="header-anchor" href="#conciliacion-de-liquidacion-1" aria-hidden="true">#</a> Conciliación de Liquidación</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Saldos Pendientes</strong>&quot;, luego seleccione la carpeta &quot;<strong>Diario de Caja</strong>&quot;, por último seleccione la ventana &quot;<strong>Cierre de Caja</strong>&quot;.</p><figure><img src="/assets/img/docs/lve/procedures/import/resources/menucierre1.png" alt="Menú de ADempiere 4" tabindex="0" loading="lazy"><figcaption>Menú de ADempiere 4</figcaption></figure><p>Imagen 18. Menú de ADempiere</p><ul><li>Realice el procedimiento regular para generar el cierre de caja, explicado en cierre caja importación del documento &quot;<strong>Importación</strong>&quot;, seleccionando la caja intermediario creada. Luego de completar el procedimiento podrá apreciar en el campo &quot;<strong>Saldo Final</strong>&quot;, el saldo abierto que posee el gestor intermediario.</li></ul><figure><img src="/assets/img/docs/lve/procedures/import/resources/cierrecaja.png" alt="Cierre de Caja" tabindex="0" loading="lazy"><figcaption>Cierre de Caja</figcaption></figure><p>Imagen 19. Cierre de Caja</p><ul><li>Podrá apreciar en la pestaña &quot;<strong>Línea de Cierre de Caja</strong>&quot;, los diferentes registros creados desde el proceso &quot;<strong>Crear a Partir de Pagos</strong>&quot;.</li></ul><figure><img src="/assets/img/docs/lve/procedures/import/resources/linea4.png" alt="Pestaña Línea de Cierre de Caja" tabindex="0" loading="lazy"><figcaption>Pestaña Línea de Cierre de Caja</figcaption></figure><p>Imagen 20. Pestaña Línea de Cierre de Caja</p><ul><li>Para generar el reporte del balance de caja y visualizar los saldos abiertos que posee el gestor intermediario, seleccione en la ventana &quot;<strong>Cierre de Caja</strong>&quot; el icono &quot;<strong>Informe</strong>&quot;, que se encuentra ubicado en la barra de herramientas de ADempiere.</li></ul><figure><img src="/assets/img/docs/lve/procedures/import/resources/cierrecaja2.png" alt="Icono Informe" tabindex="0" loading="lazy"><figcaption>Icono Informe</figcaption></figure><p>Imagen 21. Icono Informe</p><ul><li>Podrá visualizar el balance de caja de la siguiente manera.</li></ul><figure><img src="/assets/img/docs/lve/procedures/import/resources/reporte.png" alt="Reporte de Balance" tabindex="0" loading="lazy"><figcaption>Reporte de Balance</figcaption></figure><p>Imagen 22. Reporte de Balance</p>',34),l={},p=(0,o(73570).A)(l,[["render",function(e,a){const o=(0,t.g2)("ExternalLinkIcon");return(0,t.uX)(),(0,t.CE)("div",null,[i,(0,t.Lk)("p",null,[(0,t.eW)('Seleccione el tipo de documento a generar en el campo "'),r,(0,t.eW)('", la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento '),n,(0,t.eW)(" elaborado por "),(0,t.Lk)("a",c,[(0,t.eW)("ERPyA"),(0,t.bF)(o)]),(0,t.eW)('. Para ejemplificar el registro es utilizada la opción "'),s,(0,t.eW)('".')]),d])}]])},78180:(e,a,o)=>{o.r(a),o.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-1771da51","path":"/docs/lve/procedures/import/intermediary-advance-settlement.html","title":"Liquidación Anticipo Intermediario","lang":"es-ES","frontmatter":{"title":"Liquidación Anticipo Intermediario","icon":"podcast","category":"Localización Venezuela","star":9,"sticky":9,"tag":["Procedimientos","Gestión de Importación"],"article":false,"description":"Posterior a la concesión del anticipo, será justificado el anticipo relacionando los gastos (Facturas) es entonces cuando se procede a liquidar los anticipos concedidos al gestor de importación. La operación de anticipos a terceros está compuesta por cinco fases u operaciones las cuales no tienen porqué ser todas necesarias en el proceso de liquidación:","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/import/intermediary-advance-settlement.html"}],["meta",{"property":"og:title","content":"Liquidación Anticipo Intermediario"}],["meta",{"property":"og:description","content":"Posterior a la concesión del anticipo, será justificado el anticipo relacionando los gastos (Facturas) es entonces cuando se procede a liquidar los anticipos concedidos al gestor de importación. La operación de anticipos a terceros está compuesta por cinco fases u operaciones las cuales no tienen porqué ser todas necesarias en el proceso de liquidación:"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-06-12T20:17:53.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Importación"}],["meta",{"property":"article:modified_time","content":"2024-06-12T20:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Liquidación Anticipo Intermediario\\",\\"description\\":\\"Posterior a la concesión del anticipo, será justificado el anticipo relacionando los gastos (Facturas) es entonces cuando se procede a liquidar los anticipos concedidos al gestor de importación. La operación de anticipos a terceros está compuesta por cinco fases u operaciones las cuales no tienen porqué ser todas necesarias en el proceso de liquidación:\\"}"]]},"headers":[{"level":2,"title":"Factura de Cuentas por Pagar de Costos FOB","slug":"factura-de-cuentas-por-pagar-de-costos-fob","link":"#factura-de-cuentas-por-pagar-de-costos-fob","children":[]},{"level":2,"title":"Conciliación de Liquidación","slug":"conciliacion-de-liquidacion","link":"#conciliacion-de-liquidacion","children":[]},{"level":2,"title":"Cancelación ó Cruce de Anticipo con Cuentas por Pagar","slug":"cancelacion-o-cruce-de-anticipo-con-cuentas-por-pagar","link":"#cancelacion-o-cruce-de-anticipo-con-cuentas-por-pagar","children":[]},{"level":2,"title":"Conciliación de Liquidación","slug":"conciliacion-de-liquidacion-1","link":"#conciliacion-de-liquidacion-1","children":[]}],"git":{"createdTime":1686950623000,"updatedTime":1718223473000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":2},{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.12,"words":1237},"filePathRelative":"docs/lve/procedures/import/intermediary-advance-settlement.md","localizedDate":"16 de junio de 2023","excerpt":"<p>Posterior a la concesión del anticipo, será justificado el anticipo relacionando los gastos (Facturas) es entonces cuando se procede a liquidar los anticipos concedidos al gestor de importación.</p>\\n<p>La operación de anticipos a terceros está compuesta por cinco fases u operaciones las cuales no tienen porqué ser todas necesarias en el proceso de liquidación:</p>","autoDesc":true}')}}]);