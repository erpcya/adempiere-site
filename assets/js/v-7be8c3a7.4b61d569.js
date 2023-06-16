"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[23178],{44777:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var r=t(78e3);const o=[(0,r.uE)('<h1 id="anticipo-a-proveedores-en-transito" tabindex="-1"><a class="header-anchor" href="#anticipo-a-proveedores-en-transito" aria-hidden="true">#</a> <strong>Anticipo a Proveedores en Tránsito</strong></h1><p>Un anticipo a proveedor es el pago de una parte o un porcentaje del monto total de una compra o venta, realizado por adelantado. El mismo tiene la finalidad de asegurar los productos o servicios que el comprador requiere y por los cuales el vendedor amerita un anticipo para cubrir diferentes gastos.</p><p>En ADempiere es posible reflejar los anticipos realizados a proveedores en tránsito, permitiendo por medio de este, el control de los saldos abiertos que tienen los proveedores.</p><p><strong>Carga de Anticipo</strong></p><ul><li><p>La transferencia representa un proceso en el cual se generan los pagos por concepto de anticipos al gestor(s), el mismo requiere conocimientos básicos en el proceso actual de tesorería en ADempiere.</p><p>Nota: Se requiere la definición de una caja intermediario para la liquidación de anticipo, para esto contacte a un consultor de <strong>E.R.P. Consultores y Asociados</strong>.</p></li><li><p>El traslado de fondo reflejará en la cuenta de banco un egreso por el anticipo (Pago a Conciliar) y genera un ingreso en la cuenta puente (Caja Intermediario _NumOrden_Proveedor) que será utilizado para gestionar los pagos de terceros, cuando a un gestor se le conceda un anticipo, el mismo se gestionará a través de la caja creada previamente.</p></li><li><p>En primer lugar se creará el anticipo gestionando un traslado de fondos mediante el proceso de transferencia a la caja (Caja Intermediario _NumOrden_Proveedor) y se paga desde el banco en el cual sale realmente el pago.</p></li><li><p>Para realizar tal procedimiento en ADempiere se debe realizar un transferencia, la transferencia bancaria es el proceso mediante el cual se realizan los traslados de fondos entre cuentas (Banco Real a Caja Intermediario _NumOrden_Proveedor), a continuación se define el proceso para realizar una transferencia bancaria en ADempiere.</p></li><li><p>Ubique y seleccione en el menú de ADempiere la carpeta &quot;<strong>Gestión de Saldos Pendientes</strong>&quot;, luego seleccione el proceso &quot;<strong>Transferencia Bancaria</strong>&quot;.</p></li></ul><p><img src="/assets/img/procedures/import/resources/menutransf.png" alt="Menú de ADempiere 11"></p><p>Imagen 1. Menú de ADempiere</p><p>Realizar una transferencia bancaria con las siguientes condiciones:</p><ul><li><p><strong>Banco Desde</strong>: Banco desde la cual se cancelará el anticipo</p></li><li><p><strong>Banco a Transferir</strong>: Cuenta caja de importación definida anteriormente.</p></li><li><p><strong>Socio del Negocio</strong>: Socio del Negocio al cual se le cancelará el anticipo.</p></li><li><p><strong>Moneda</strong>: Moneda en la cual se cancelará la transferencia</p></li><li><p><strong>Cargo</strong>: Cargo correspondiente al anticipo &quot;<strong>Anticipo a Tercero</strong>&quot;.</p></li><li><p><strong>Número del Documento</strong>: Referencia correspondiente a la transferencia bancaria.</p></li><li><p><strong>Monto</strong>: Monto del anticipo.</p></li><li><p><strong>Descripción</strong>: Breve descripción sobre la transferencia.</p></li><li><p><strong>Fecha de Estado de Cuenta</strong>: Fecha de la transferencia realizada.</p></li><li><p><strong>Fecha Contable</strong>: Fecha de la transferencia realizada.</p></li></ul><p>Resultados:</p><p><strong>Egreso</strong>:</p><ul><li><p><strong>Resultado</strong>: Se realiza un egreso en banco por el monto a cancelar.</p></li><li><p><strong>Resultado Contable</strong>: A continuación se presenta un ejemplo de un resultado contable.</p></li></ul><table><thead><tr><th>Organización</th><th>Cuenta</th><th>Débito Contabilizado</th><th>Crédito Contabilizado</th></tr></thead><tbody><tr><td>Organización</td><td>1.1.2.4.1.003 - TRANSITO ANTICIPO INTERMEDIARIOS</td><td>64.000.000,00</td><td>0,00</td></tr><tr><td>Organización</td><td>1.1.1.1.2.1.011.002 - TRANSITO BANESCO BANCO UNIVERSAL C.A.</td><td>0,00</td><td>64.000.000,00</td></tr><tr><td></td><td></td><td>64.000.000,00</td><td>64.000.000,00</td></tr></tbody></table><p><strong>Ingreso</strong>:</p><ul><li><p><strong>Resultado</strong>: Se realiza un ingreso en caja por el monto a cancelar</p></li><li><p><strong>Resultado Contable</strong>: A continuación se presenta un ejemplo de un resultado contable.</p></li></ul><table><thead><tr><th>Organización</th><th>Cuenta</th><th>Débito Contabilizado</th><th>Crédito Contabilizado</th></tr></thead><tbody><tr><td>Organización</td><td>1.1.2.4.1.002 - ANTICIPOS A INTERMEDIARIOS PENDIENTES POR CONCILIAR</td><td>64.000.000,00</td><td>0,00</td></tr><tr><td>Organización</td><td>1.1.2.4.1.003 - TRANSITO ANTICIPO INTERMEDIARIOS</td><td>0,00</td><td>64.000.000,00</td></tr><tr><td></td><td></td><td>64.000.000,00</td><td>64.000.000,00</td></tr></tbody></table><p>A continuación se presenta un ejemplo de la ventana &quot;<strong>Transferencia Bancaria</strong>&quot;.</p><p><img src="/assets/img/procedures/import/resources/transferencia.png" alt="Ejemplo de Transferencia Bancaria"></p><p>Imagen 2. Ejemplo de Transferencia Bancaria</p><h2 id="transferencia-bancaria" tabindex="-1"><a class="header-anchor" href="#transferencia-bancaria" aria-hidden="true">#</a> <strong>Transferencia Bancaria</strong></h2><ul><li>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Saldos Pendientes</strong>&quot;, luego seleccione el proceso &quot;<strong>Transferencia Bancaria</strong>&quot;.</li></ul><p><img src="/assets/img/procedures/import/resources/menutransf.png" alt="Menú de ADempiere 1"></p><p>Imagen 1. Menú de ADempiere</p><p>Realice el procedimiento regular de transferencia bancaria explicado en la <strong>&#39;&#39;Carga anticipo del documento&quot;</strong> en el documento <strong>&#39;&#39;Liquidación Anticipo Intermediario</strong>&quot;, para transferir desde un banco determinado de la empresa a la caja del proveedor en tránsito al cual se le aplicará el anticipo.</p><p>Para realizar el procedimiento se debe tomar en cuenta lo siguiente:</p><ul><li><p><strong>Cuenta Bancaria Desde</strong>: 0105-0000000000000000</p></li><li><p><strong>Cuenta Bancaria a Transferir</strong>: Proveedores en Tránsito - --_00000</p></li><li><p><strong>Socio del Negocio</strong>: Proveedor Estándar</p></li><li><p><strong>Moneda</strong>: VES</p></li><li><p><strong>Cargo</strong>: Anticipo Tercero</p></li><li><p><strong>No. del Documento</strong>: 0111245859</p></li><li><p><strong>Documento Destino</strong>: 0111245859</p></li><li><p><strong>Monto</strong>: 200.001.332,00</p></li><li><p><strong>Descripción</strong>: Transferencia de Anticipo a Proveedor en Tránsito</p></li><li><p><strong>Fecha de Estado de Cuenta</strong>: 03/01/2020</p></li><li><p><strong>Fecha Contable</strong>: 03/01/2020</p></li></ul><p>Quedando la ventana del proceso &quot;<strong>Transferencia Bancaria</strong>&quot;, de la siguiente manera:</p><p><img src="/assets/img/procedures/import/resources/transferencia.png" alt="Transferencia Bancaria"></p><p>Imagen 2. Transferencia Bancaria</p><p>Al seleccionar la opción &quot;<strong>OK</strong>, ADempiere realiza la transferencia en base a los datos ingresados en los campos de la ventana, generando un documento en &quot;<strong>Pago/Cobro</strong>&quot; que representa el egreso en el banco seleccionado y un documento en &quot;<strong>Caja</strong>&quot; que representa el ingreso en la caja seleccionada.</p><p><strong>Egreso</strong>:</p><ul><li><strong>Resultado</strong>: Se realiza un egreso en banco por el monto a cancelar.</li></ul><p><img src="/assets/img/procedures/import/resources/pagocobro1.png" alt="Documento Pago Cobro"></p><p>Imagen 3. Documento en Pago/Cobro</p><ul><li><strong>Resultado Contable</strong>: A continuación se presenta un ejemplo de un resultado contable.</li></ul><table><thead><tr><th>Organización</th><th>Cuenta</th><th>Débito Contabilizado</th><th>Crédito Contabilizado</th></tr></thead><tbody><tr><td>Organización</td><td>1.1.1.1.1.015 - EFECTIVO EN TRANSITO PROVEEDORES</td><td>200.001.332,00</td><td>0,00</td></tr><tr><td>Organización</td><td>1.1.1.1.2.1.005.002 - TRANSITO MERCANTIL C.A. BANCO</td><td>0,00</td><td>200.001.332,00</td></tr><tr><td></td><td></td><td>200.001.332,00</td><td>200.001.332,00</td></tr></tbody></table><p><strong>Ingreso</strong>:</p><ul><li><strong>Resultado</strong>: Se realiza un ingreso en caja por el monto a cancelar.</li></ul><p><img src="/assets/img/procedures/import/resources/docaja1.png" alt="Documento Caja"></p><p>Imagen 4. Documento en Caja</p><ul><li><strong>Resultado Contable</strong>: A continuación se presenta un ejemplo de un resultado contable.</li></ul><table><thead><tr><th>Organización</th><th>Cuenta</th><th>Débito Contabilizado</th><th>Crédito Contabilizado</th></tr></thead><tbody><tr><td>Organización</td><td>1.1.2.2.001 - ANTICIPOS A PROVEEDORES NACIONALES</td><td>200.001.332,00</td><td>0,00</td></tr><tr><td>Organización</td><td>1.1.1.1.1.015 - EFECTIVO EN TRANSITO PROVEEDORES</td><td>0,00</td><td>200.001.332,00</td></tr><tr><td></td><td></td><td>200.001.332,00</td><td>200.001.332,00</td></tr></tbody></table><p><strong>Cierre de Caja</strong></p><p>El cierre de caja es realizado para indicar a ADempiere que al socio del negocio &quot;<strong>Proveedor Estándar</strong>&quot;, se le realizó una transferencia bancaria como anticipo a su caja &quot;<strong>Proveedores en Tránsito - --_00000</strong>&quot;, por el monto de &quot;<strong>200.001.332,00</strong>&quot;.</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Saldos Pendientes</strong>&quot;, luego seleccione la carpeta &quot;<strong>Diario de Caja</strong>&quot;, por último seleccione la ventana &quot;<strong>Cierre de Caja</strong>&quot;.</p><p><img src="/assets/img/procedures/import/resources/menucierre1.png" alt="Menú de ADempiere 2"></p><p>Imagen 5. Menú de ADempiere</p><ul><li>Realice el procedimiento regular para generar el cierre de caja, explicado en la <strong>&#39;&#39;Cierre caja importación&#39;&#39;</strong> del documento &quot;<strong>Importación</strong>&quot;, seleccionando la caja proveedores en transito creada. Luego de completar el procedimiento podrá apreciar en el campo &quot;<strong>Saldo Final</strong>&quot;, el saldo abierto que posee el socio del negocio proveedor.</li></ul><p><img src="/assets/img/procedures/import/resources/cierrecaja3.png" alt="Cierre de Caja"></p><p>Imagen 6. Cierre de Caja</p>',50)],n={},i=(0,t(13860).Z)(n,[["render",function(e,a){return(0,r.wg)(),(0,r.iD)("div",null,o)}]])},99291:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-7be8c3a7","path":"/docs/lve/procedures/import/advance-payment-to-transit-providers.html","title":"Anticipo a Proveedores en Tránsito","lang":"es-ES","frontmatter":{"title":"Anticipo a Proveedores en Tránsito","icon":"app","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos","Gestión de Importación"],"article":false,"summary":"Anticipo a Proveedores en Tránsito ====================================== Un anticipo a proveedor es el pago de una parte o un porcentaje del monto total de una compra o venta, rea","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/import/advance-payment-to-transit-providers.html"}],["meta",{"property":"og:title","content":"Anticipo a Proveedores en Tránsito"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-16T21:23:43.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Importación"}],["meta",{"property":"article:modified_time","content":"2023-06-16T21:23:43.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Transferencia Bancaria","slug":"transferencia-bancaria","children":[]}],"git":{"createdTime":1686950623000,"updatedTime":1686950623000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.49,"words":1047},"filePathRelative":"docs/lve/procedures/import/advance-payment-to-transit-providers.md","localizedDate":"16 de junio de 2023"}')}}]);