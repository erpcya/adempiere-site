"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[76113],{11144:(e,a,o)=>{o.r(a),o.d(a,{default:()=>d});var n=o(78744);const t=(0,n.Lk)("h1",{id:"nomina-semanal",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#nomina-semanal","aria-hidden":"true"},"#"),(0,n.eW)(),(0,n.Lk)("strong",null,"Nómina Semanal")],-1),r=(0,n.Lk)("strong",null,"Nómina Semanal",-1),i={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},s=(0,n.Fv)('<p>Estatus del documento:</p><p>Seleccione <strong>Nómina Semanal</strong> en el campo &quot;<strong>Tipo de Documento</strong>&quot;.</p><p>El tipo de documento le permitirá definir la acción del documento que esté registrando en ADempiere.</p><p>Seleccione <strong>Nómina Semanal</strong> en el Campo &quot;<strong>Nómina</strong>&quot;</p><p>La nómina semanal define el comportamiento de la nómina, para este caso tiene las siguientes características:</p><p>Regla de Pago: Débito Directo<br> Contrato de Nómina: Contrato Semanal<br> Cargo: Sueldos y Salarios por Pagar</p><p>Seleccione el período semanal correspondiente a la nómina que se está ejecutando en el campo &quot;<strong>Período Nómina</strong>&quot;</p><p>El período de nómina define el período laborado que le está siendo cancelado al empleado, disponiendo de los períodos creados en la definición de nómina semanal.</p><p>Seleccione la fecha “Hasta” o el último día del período que seleccionó anteriormente en el campo &quot;<strong>Fecha Contable</strong>&quot;</p><p>A través de la fecha contable se determina contablemente la fecha de pago de la nómina semanal en ejecución, por tal motivo se recomienda colocar la fecha “<strong>Hasta</strong>” o el último día del período que seleccionó anteriormente.</p><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/semanal.png" alt="Nómina Semanal" tabindex="0" loading="lazy"><figcaption>Nómina Semanal</figcaption></figure><p>Imagen 1. Nómina Semanal</p><p>Incidencias:</p><p>Para esta nómina no son obligatorias las incidencias, pero en ADempiere se cuentan con las siguientes incidencias disponibles para la nómina semanal:</p><table><thead><tr><th><strong>INCIDENCIA</strong></th><th><strong>CÓDIGO</strong></th><th><strong>TIPO</strong></th></tr></thead><tbody><tr><td>Sábado Trabajado</td><td>(&quot;IN_ST&quot;)</td><td>Cantidad</td></tr><tr><td>Domingo Trabajado</td><td>(&quot;IN_DOT&quot;)</td><td>Cantidad</td></tr><tr><td>Feriado Trabajado</td><td>(&quot;IN_FT&quot;)</td><td>Cantidad</td></tr><tr><td>Horas Extras Diurnas</td><td>(&quot;IN_HED&quot;)</td><td>Cantidad</td></tr><tr><td>Horas Nocturnas Trabajadas</td><td>(&quot;IN_HNT&quot;)</td><td>Cantidad</td></tr><tr><td>Fecha de Inicio de Reposo Prenatal y Postnatal</td><td>(&quot;IN_FIRPP&quot;)</td><td>Fecha</td></tr><tr><td>Días de Permiso Reposo PreNatal y PostNatal</td><td>(&quot;IN_DRPPP&quot;)</td><td>Cantidad</td></tr><tr><td>Fecha de Reposo Convalidado por el IVSS</td><td>(&quot;IN_FREC&quot;)</td><td>Fecha</td></tr><tr><td>Días de Reposo Covalidado</td><td>(&quot;IN_DRC&quot;)</td><td>Cantidad</td></tr><tr><td>Otras Asignaciones</td><td>(&quot;IN_OA&quot;)</td><td>Monto</td></tr><tr><td>Ausencias Injustificadas</td><td>(&quot;IN_AI&quot;)</td><td>Cantidad</td></tr><tr><td>Faltas Injustificadas</td><td>(&quot;IN_FI&quot;)</td><td>Cantidad</td></tr><tr><td>Retardos</td><td>(&quot;IN_RE&quot;)</td><td>Cantidad</td></tr><tr><td>Otras Deducciones</td><td>(&quot;IN_FI&quot;)</td><td>Monto</td></tr></tbody></table><p>Resultados:</p><ul><li>&quot;<strong>Reportes</strong>&quot;</li></ul><p>Para visualizar los reportes de nóminas puede seguir los pasos que se encuentran en el documento &#39;&#39;Reporte de nómina&#39;&#39; con los datos adicionales que se indican a continuación para cada reporte</p><ul><li><p>&quot;<strong>Recibo de Pago</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Semanal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Nómina Regular</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/recibosemanal.png" alt="Recibo de Pago Nómina Semanal" tabindex="0" loading="lazy"><figcaption>Recibo de Pago Nómina Semanal</figcaption></figure><p>Imagen 2. Recibo de Pago Nómina Semanal</p><ul><li><p>&quot;<strong>Detalle de Pago</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Semanal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Nómina Regular</p></li><li><p><strong>Plantilla de Reporte de Nómina</strong>: Detalle de Pago</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/detallesemanal.png" alt="Detalle de Pago Nómina Semanal" tabindex="0" loading="lazy"><figcaption>Detalle de Pago Nómina Semanal</figcaption></figure><p>Imagen 3. Recibo de Pago Nómina Semanal</p><ul><li><p>&quot;<strong>Resumen de Pago</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Semanal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Nómina Regular</p></li><li><p><strong>Plantilla de Reporte de Nómina</strong>: Resumen de Pago</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/resumensemanal.png" alt="Resumen de Pago Nómina Semanal" tabindex="0" loading="lazy"><figcaption>Resumen de Pago Nómina Semanal</figcaption></figure><p>Imagen 4. Resumen de Pago Nómina Semanal</p><ul><li><p>&quot;<strong>Retenciones</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Semanal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Retenciones Parafiscales</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/retencionessemanal.png" alt="Retenciones Nómina Semanal" tabindex="0" loading="lazy"><figcaption>Retenciones Nómina Semanal</figcaption></figure><p>Imagen 5. Retenciones de Nómina Semanal</p><ul><li><p>&quot;<strong>Aportes</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Semanal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Aportes Parafiscales</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/aportessemanal.png" alt="Aportes Nómina Semanal" tabindex="0" loading="lazy"><figcaption>Aportes Nómina Semanal</figcaption></figure><p>Imagen 6. Aportes de Nómina Semanal</p><ul><li><p>&quot;<strong>Provisiones</strong>&quot;</p></li><li><p><strong>Nómina</strong>: Nómina Semanal</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Provisiones</p></li></ul><figure><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/provisionessemanal.png" alt="Provisiones Nómina Semanal" tabindex="0" loading="lazy"><figcaption>Provisiones Nómina Semanal</figcaption></figure><p>Imagen 7. Provisiones de Nómina Semanal</p><p>Cabe destacar que los reportes de Aportes, Retenciones, Provisiones se deben pasar al Departamento de Contabilidad</p>',37),l={},d=(0,o(73570).A)(l,[["render",function(e,a){const o=(0,n.g2)("RouterLink"),l=(0,n.g2)("ExternalLinkIcon");return(0,n.uX)(),(0,n.CE)("div",null,[t,(0,n.Lk)("p",null,[(0,n.eW)("Para procesar una “"),r,(0,n.eW)("” debemos realizar el proceso de nómina estándar mencionado en el documento "),(0,n.bF)(o,{to:"/docs/lve/procedures/payroll/procedure-to-process-payroll/"},{default:(0,n.k6)((()=>[(0,n.eW)("Procedimiento Para Procesar Nómina")])),_:1}),(0,n.eW)(" elaborado por "),(0,n.Lk)("a",i,[(0,n.eW)("ERPyA"),(0,n.bF)(l)]),(0,n.eW)(". En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo semanal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:")]),s])}]])},51971:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-78a75cca","path":"/docs/lve/procedures/payroll/procedure-to-process-payroll/weekly-payroll.html","title":"Nómina Semanal","lang":"es-ES","frontmatter":{"title":"Nómina Semanal","icon":"podcast","category":"Localización Venezuela","star":9,"sticky":9,"tag":["Procedimientos","Gestión de Nóminas","Procedimiento para Procesar Nómina"],"article":false,"description":"Nómina Semanal Para procesar una “Nómina Semanal” debemos realizar el proceso de nómina estándar mencionado en el documento Procedimiento Para Procesar Nómina elaborado por ERPyA. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo semanal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/payroll/procedure-to-process-payroll/weekly-payroll.html"}],["meta",{"property":"og:title","content":"Nómina Semanal"}],["meta",{"property":"og:description","content":"Nómina Semanal Para procesar una “Nómina Semanal” debemos realizar el proceso de nómina estándar mencionado en el documento Procedimiento Para Procesar Nómina elaborado por ERPyA. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo semanal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-06-12T20:17:53.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Nóminas"}],["meta",{"property":"article:tag","content":"Procedimiento para Procesar Nómina"}],["meta",{"property":"article:modified_time","content":"2024-06-12T20:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Nómina Semanal\\",\\"description\\":\\"Nómina Semanal Para procesar una “Nómina Semanal” debemos realizar el proceso de nómina estándar mencionado en el documento Procedimiento Para Procesar Nómina elaborado por ERPyA. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo semanal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:\\"}"]]},"headers":[],"git":{"createdTime":1686950623000,"updatedTime":1718223473000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":3},{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.25,"words":675},"filePathRelative":"docs/lve/procedures/payroll/procedure-to-process-payroll/weekly-payroll.md","localizedDate":"16 de junio de 2023","excerpt":"<h1> <strong>Nómina Semanal</strong></h1>\\n<p>Para procesar una “<strong>Nómina Semanal</strong>” debemos realizar el proceso de nómina estándar mencionado en el documento <a href=\\"/docs/lve/procedures/payroll/procedure-to-process-payroll/\\" target=\\"blank\\">Procedimiento Para Procesar Nómina</a> elaborado por <a href=\\"http://erpya.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ERPyA</a>. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de tipo semanal, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:</p>","autoDesc":true}')}}]);