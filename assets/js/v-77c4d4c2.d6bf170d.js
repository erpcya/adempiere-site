"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[33601],{9868:(e,a,r)=>{r.r(a),r.d(a,{default:()=>l});var n=r(78e3);const o=[(0,n.uE)('<h1 id="generar-txt-de-banavih" tabindex="-1"><a class="header-anchor" href="#generar-txt-de-banavih" aria-hidden="true">#</a> <strong>Generar TXT de Banavih</strong></h1><p>El txt de Banavih es uno de los archivos que necesitamos subir al portal de FAOV en línea, el cual debe contener la información necesaria de la nómina procesada para el cálculo de los recursos a retener como aportes al fondo, en los siguientes pasos se mencionan el proceso que debemos seguir para generar este archivo desde ADempiere.</p><ul><li><p>Seleccione la ventana &quot;<strong>Reporte de Nómina</strong>&quot;, ubicado en el menú &quot;<strong>Gestión de Recursos Humanos</strong>&quot;, sub carpeta &quot;<strong>Reporte de Nómina</strong>&quot;</p></li><li><p>Para obtener el reporte debe seleccionar los siguientes item</p><ul><li><p>Seleccione en el campo <strong>Nómina</strong> la nómina que le va a generar el reporte (Semanal, Quincenal, Mensual)</p></li><li><p>Selecciones el rango de la fecha en que desees solicitar el archivo en el campo <strong>Fecha</strong></p></li><li><p>Seleccione en el campo <strong>Configuración Reporte de Nómina</strong> BANAVIH es el nombre del reporte configurado para obtener el archivo.</p></li><li><p>Posteriormente debe darle en el check list <strong>OK</strong></p></li></ul></li></ul><p><img src="/assets/img/procedures/payroll/payroll-report/resources/banavih.png" alt="Reporte"></p><p>Imagen 1. Parámetros para obtener archivo.</p><ul><li>Posteriormente puede ubicar en su carpeta de descarga, el archivo generado con el nombre que estará estructurado de la siguiente manera: la letra “<strong>N</strong>”, el número de cuenta nómina (<strong>20 dígitos</strong>), el mes de la nómina (<strong>en formato MM</strong>), el año de la nómina (<strong>en formato AAAA</strong>).</li></ul><p>Se presenta como ejemplo, un archivo que puede descargar en el enlace <a href="N01050000000000000001012021.txt">N01050000000000000001012021.txt</a>, para corroborar que coincida la estructura con el documento generado de ADempiere.</p><ul><li>Al descargar el mismo, se puede visualizar de la siguiente manera.</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    V,000000052,EMPLEADO,ESTANDAR ,UNO,,1259500010,19102020,\n    V,00000091,EMPLEADO,ESTANDAR ,UNO,NUEVO ,1259500010,01032020,\n    V,00000055,EMPLEADO,ESTANDAR ,OTRO,NUEVO ,1259500010,01102019,\n    V,00000032,EMPLEADO,ESTANDAR ,DOS,,1259500010,12022019,\n    V,00000054,EMPLEADO,ESTANDAR ,DOS,NUEVO ,1259500010,23012020,\n    V,00000032,EMPLEADO,ESTANDAR ,OTRO,DOS ,1259500010,01022020,\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Adicional a ello, se explica la extructura del mismo:</p><ul><li>Primeramente se muestra el tipo de persona del empleado, seguido de su número de identificación. Luego se muestra el nombre completo del empleado, seguido del salario integral mensual del mismo. Finalmente se muestra la fecha de ingreso del empleado a la organización y si posee fecha final o de salida, esta se refleja luego de la fecha de ingreso. Los valores anteriormente nombrados, son separados en el archivo con el signo &quot;<strong>,</strong>&quot;.</li></ul></li><li><p>Luego de verificar que su txt esté correctamente, puede proceder a subir el archivo al portal.</p></li></ul>',10)],t={},l=(0,r(13860).Z)(t,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,o)}]])},60902:(e,a,r)=>{r.r(a),r.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-77c4d4c2","path":"/docs/lve/procedures/payroll/payroll-report/generate-banavih-txt.html","title":"Generar TXT de Banavih","lang":"es-ES","frontmatter":{"title":"Generar TXT de Banavih","icon":"app","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos","Gestión de Nóminas","Reporte de Nóminas"],"article":false,"summary":"Generar TXT de Banavih ========================== El txt de Banavih es uno de los archivos que necesitamos subir al portal de FAOV en línea, el cual debe contener la información ne","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/payroll/payroll-report/generate-banavih-txt.html"}],["meta",{"property":"og:title","content":"Generar TXT de Banavih"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-16T21:23:43.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Nóminas"}],["meta",{"property":"article:tag","content":"Reporte de Nóminas"}],["meta",{"property":"article:modified_time","content":"2023-06-16T21:23:43.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1686950623000,"updatedTime":1686950623000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"docs/lve/procedures/payroll/payroll-report/generate-banavih-txt.md","localizedDate":"16 de junio de 2023"}')}}]);