"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[18587],{57691:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var o=n(78744);const t=(0,o.Lk)("h1",{id:"nomina-quincenal",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#nomina-quincenal","aria-hidden":"true"},"#"),(0,o.eW)(),(0,o.Lk)("strong",null,"Nómina Quincenal")],-1),i=(0,o.Lk)("strong",null,"Nómina Quincenal",-1),r=(0,o.Lk)("strong",null,"ERPyA",-1),s=(0,o.Fv)('<ul><li><p>Estatus del documento:</p><ul><li>Seleccione <strong>Nómina Quincenal</strong> en el campo &quot;<strong>Tipo de Documento</strong>&quot;.</li></ul></li><li><p>El tipo de documento le permitirá definir la acción del documento que esté registrando en ADempiere.</p><ul><li>Seleccione <strong>Nómina Quincenal</strong> en el Campo &quot;<strong>Nómina</strong>&quot;</li></ul></li><li><p>La nómina quincenal define el comportamiento de la nómina, para este caso tiene las siguientes características:</p><ul><li>Regla de Pago: Débito Directo</li><li>Contrato de Nómina: Contrato Quincenal</li><li>Cargo: Sueldos y Salarios por Pagar</li></ul></li><li><p>Seleccione el período quincenal correspondiente a la nómina que se está ejecutando en el campo &quot;<strong>Período Nómina</strong>&quot;</p></li></ul><p>El período de nómina define el período laborado que le está siendo cancelado al empleado, disponiendo de los períodos creados en la definición de nómina quincenal.</p><ul><li><p>Seleccione la fecha “<strong>Hasta</strong>” o el último día del período que seleccionó anteriormente en el campo &quot;<strong>Fecha Contable</strong>&quot;</p></li><li><p>A través de la &quot;<strong>Fecha Contable</strong>&quot; se determina contablemente la fecha de pago de la nómina quincenal en ejecución, por tal motivo se recomienda colocar la fecha “Hasta” o el último día del período que seleccionó anteriormente.</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/quincenal1.png" alt="Nómina Quincenal" tabindex="0" loading="lazy"><figcaption>Nómina Quincenal</figcaption></figure><p>Imagen 1. Nómina Quincenal</p><p>Incidencias:<br> Para esta nómina no son obligatorias las incidencias, pero en ADempiere se cuentan con las siguientes incidencias disponibles para la Nómina Quincenal:</p><table><thead><tr><th><strong>INCIDENCIA</strong></th><th><strong>CÓDIGO</strong></th><th><strong>TIPO</strong></th></tr></thead><tbody><tr><td>Sábado Trabajado</td><td>(&quot;IN_ST&quot;)</td><td>Cantidad</td></tr><tr><td>Domingo Trabajado</td><td>(&quot;IN_DOT&quot;)</td><td>Cantidad</td></tr><tr><td>Feriado Trabajado</td><td>(&quot;IN_FT&quot;)</td><td>Cantidad</td></tr><tr><td>Horas Extras Diurnas</td><td>(&quot;IN_HED&quot;)</td><td>Cantidad</td></tr><tr><td>Horas Nocturnas Trabajadas</td><td>(&quot;IN_HNT&quot;)</td><td>Cantidad</td></tr><tr><td>Fecha de Inicio de Reposo Prenatal y Postnatal</td><td>(&quot;IN_FIRPP&quot;)</td><td>Fecha</td></tr><tr><td>Días de Permiso Reposo PreNatal y PostNatal</td><td>(&quot;IN_DRPPP&quot;)</td><td>Cantidad</td></tr><tr><td>Fecha de Reposo Convalidado por el IVSS</td><td>(&quot;IN_FREC&quot;)</td><td>Fecha</td></tr><tr><td>Días de Reposo Covalidado</td><td>(&quot;IN_DRC&quot;)</td><td>Cantidad</td></tr><tr><td>Otras Asignaciones</td><td>(&quot;IN_OA&quot;)</td><td>Monto</td></tr><tr><td>Ausencias Injustificadas</td><td>(&quot;IN_AI&quot;)</td><td>Cantidad</td></tr><tr><td>Faltas Injustificadas</td><td>(&quot;IN_FI&quot;)</td><td>Cantidad</td></tr><tr><td>Retardos</td><td>(&quot;IN_RE&quot;)</td><td>Cantidad</td></tr><tr><td>Otras Deducciones</td><td>(&quot;IN_FI&quot;)</td><td>Monto</td></tr></tbody></table><ul><li><p>Resultados:</p></li><li><p>&quot;<strong>Reportes</strong></p></li><li><p>&quot;<strong>Recibo de Pago</strong></p></li><li><p><strong>Nómina</strong>: Nómina Quincenal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Nómina Regular</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/reciboquincenal.png" alt="Recibo de Pago Nómina Quincenal" tabindex="0" loading="lazy"><figcaption>Recibo de Pago Nómina Quincenal</figcaption></figure><p>Imagen 2. Recibo de Pago Nómina Quincenal</p><ul><li><p>&quot;<strong>Detalle de Pago</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Quincenal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Nómina Regular</p></li><li><p><strong>Plantilla de Reporte de Nómina</strong>: Detalle de Pago</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/detallequincenal.png" alt="Detalle de Pago Nómina Quincenal" tabindex="0" loading="lazy"><figcaption>Detalle de Pago Nómina Quincenal</figcaption></figure><p>Imagen 3. Detalle de Pago Nómina Quincenal</p><ul><li><p>&quot;<strong>Resumen de Pago</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Quincenal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Nómina Regular</p></li><li><p><strong>Plantilla de Reporte de Nómina</strong>: Resumen de Pago</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/resumenquincenal.png" alt="Resumen de Pago Nómina Quincenal" tabindex="0" loading="lazy"><figcaption>Resumen de Pago Nómina Quincenal</figcaption></figure><p>Imagen 4. Resumen de Pago Nómina Quincenal</p><ul><li><p>&quot;<strong>Retenciones</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Quincenal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Retenciones Parafiscales</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/retencionesquincenal.png" alt="Retenciones Nómina Quincenal" tabindex="0" loading="lazy"><figcaption>Retenciones Nómina Quincenal</figcaption></figure><p>Imagen 5. Retenciones de Nómina Quincenal</p><ul><li>&quot;<strong>Aportes</strong></li></ul><p>-<strong>Nómina</strong>: Nómina Quincenal</p><p>-<strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p><p>-<strong>Configuración de Reporte de Nómina</strong>: Aportes Parafiscales</p><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/aportesquincenal.png" alt="Aportes Nómina Quincenal" tabindex="0" loading="lazy"><figcaption>Aportes Nómina Quincenal</figcaption></figure><p>Imagen 6. Aportes de Nómina Quincenal</p><ul><li><p>&quot;<strong>Provisiones</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Quincenal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Provisiones</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/provisionesquincenal.png" alt="Provisiones Nómina Quincenal" tabindex="0" loading="lazy"><figcaption>Provisiones Nómina Quincenal</figcaption></figure><p>Imagen 7. Provisiones de Nómina Quincenal</p><p><strong>Nota: Cabe destacar que los reportes de Aportes, Retenciones, Provisiones se deben pasar al Departamento de Contabilidad</strong></p>',29),l={},d=(0,n(73570).A)(l,[["render",function(e,a){const n=(0,o.g2)("RouterLink");return(0,o.uX)(),(0,o.CE)("div",null,[t,(0,o.Lk)("p",null,[(0,o.eW)("Para procesar una “"),i,(0,o.eW)("” debemos realizar el proceso de nómina estándar mencionado en el documento "),(0,o.bF)(n,{to:"/docs/lve/procedures/payroll/procedure-to-process-payroll/"},{default:(0,o.k6)((()=>[(0,o.eW)("Procedimiento Para Procesar Nómina")])),_:1}),(0,o.eW)(" elaborado por "),r,(0,o.eW)(". En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo quincenal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:")]),s])}]])},65860:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-53c3e2a3","path":"/docs/lve/procedures/payroll/procedure-to-process-payroll/biweekly-payroll.html","title":"Nómina Quincenal","lang":"es-ES","frontmatter":{"title":"Nómina Quincenal","icon":"podcast","category":"Localización Venezuela","star":9,"sticky":9,"tag":["Procedimientos","Gestión de Nóminas","Procedimiento para Procesar Nómina"],"article":false,"description":"Nómina Quincenal Para procesar una “Nómina Quincenal” debemos realizar el proceso de nómina estándar mencionado en el documento Procedimiento Para Procesar Nómina elaborado por ERPyA. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo quincenal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/payroll/procedure-to-process-payroll/biweekly-payroll.html"}],["meta",{"property":"og:title","content":"Nómina Quincenal"}],["meta",{"property":"og:description","content":"Nómina Quincenal Para procesar una “Nómina Quincenal” debemos realizar el proceso de nómina estándar mencionado en el documento Procedimiento Para Procesar Nómina elaborado por ERPyA. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo quincenal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-06-12T20:17:53.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Nóminas"}],["meta",{"property":"article:tag","content":"Procedimiento para Procesar Nómina"}],["meta",{"property":"article:modified_time","content":"2024-06-12T20:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Nómina Quincenal\\",\\"description\\":\\"Nómina Quincenal Para procesar una “Nómina Quincenal” debemos realizar el proceso de nómina estándar mencionado en el documento Procedimiento Para Procesar Nómina elaborado por ERPyA. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo quincenal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:\\"}"]]},"headers":[],"git":{"createdTime":1686950623000,"updatedTime":1718223473000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":2},{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"docs/lve/procedures/payroll/procedure-to-process-payroll/biweekly-payroll.md","localizedDate":"16 de junio de 2023","excerpt":"<h1> <strong>Nómina Quincenal</strong></h1>\\n<p>Para procesar una “<strong>Nómina Quincenal</strong>” debemos realizar el proceso de nómina estándar mencionado en el documento <a href=\\"/docs/lve/procedures/payroll/procedure-to-process-payroll/\\" target=\\"blank\\">Procedimiento Para Procesar Nómina</a> elaborado por <strong>ERPyA</strong>. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo quincenal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:</p>","autoDesc":true}')}}]);