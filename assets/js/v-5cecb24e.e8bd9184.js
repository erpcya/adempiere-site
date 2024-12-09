"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6329],{24552:(e,a,o)=>{o.r(a),o.d(a,{default:()=>n});var t=o(78744);const i=(0,t.Fv)('<p>Representa a la última fecha de Inicio de Vacaciones de los empleados.</p><hr><p>Registre los datos de la siguiente manera:</p><ul><li><p>Registre los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna</p></li><li><p>Registre a todos los Empleados utilizando el proceso de Nómina de Vacaciones (NV)</p></li><li><p>El Valor correspondiente para este concepto será de Tipo “FECHA”, por lo tanto debe ingresar los datos en la Columna (“Fecha de Servicio”) con el Formato Año/Mes/Día.</p></li></ul><h3 id="consideraciones" tabindex="-1"><a class="header-anchor" href="#consideraciones" aria-hidden="true">#</a> Consideraciones</h3><ul><li><p><strong>Formato de Texto</strong>: Ésta columna es únicamente en formato texto y contiene el valor de la cédula de identidad del empleado sin espacios ni caracteres especiales. Los caracteres permitidos son <strong><code>V</code></strong>.</p></li><li><p><strong>Formato de Fecha</strong>:</p><ul><li>El formato de fecha debe contener únicamente como separador guión (<code>-</code>). Ejemplo: <strong>yyyy-mm-dd</strong> se colocaría de la siguiente manera <code>2023-11-29</code></li><li>No se permite el uso de símbolos, formatos u otro tipo como espacios en blanco.</li></ul></li><li><p>La estructura de datos es</p></li></ul><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>V00000000</td><td>2023-11-29</td></tr></tbody></table><hr><h2 id="exportar-desde-diferentes-plataformas" tabindex="-1"><a class="header-anchor" href="#exportar-desde-diferentes-plataformas" aria-hidden="true">#</a> Exportar desde diferentes plataformas</h2>',9),s=(0,t.Fv)('<h2 id="cargar-archivo-de-nomina" tabindex="-1"><a class="header-anchor" href="#cargar-archivo-de-nomina" aria-hidden="true">#</a> Cargar archivo de nómina</h2><ul><li>Dirigirse a <strong>Gestión del Sistema</strong> &gt; <strong>Datos</strong> &gt; <strong>Importar Datos</strong> &gt; <strong>Cargador de Archivos</strong></li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/c492d93d-d7b3-463b-91a6-fe1f54ca1b20" alt="cargador-de-archivos" tabindex="0" loading="lazy"><figcaption>cargador-de-archivos</figcaption></figure><p><strong>Imagen 2. Cargador de Archivos</strong></p><ul><li>Seleccionar el archivo a cargar</li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/788a5201-dab6-48b0-9304-c8cd52669c84" alt="seleccionar-archivo1" tabindex="0" loading="lazy"><figcaption>seleccionar-archivo1</figcaption></figure><p><strong>Imagen 3. Seleccionar el archivo</strong></p><ul><li>Se despliega la ventana para subir el archivo. Seleccionar <strong>Choose file</strong></li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/23296f33-5698-45e2-a2f4-ed76f985ddb7" alt="seleccionar-archivo" tabindex="0" loading="lazy"><figcaption>seleccionar-archivo</figcaption></figure><p><strong>Imagen 4. Ventana para subir archivo</strong></p><ul><li>Seleccionar el archivo y <strong>cargar archivo (upload)</strong></li></ul><figure><img src="https://github.com/erpcya/docs/assets/134967453/8d39e59c-cfa8-462c-adc2-228ecc2b854b" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p><strong>Imagen 5. Archivo a Importar</strong></p><ul><li><p>Seleccionar el formato que coincida con el archivo.<br><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/cb1fbe3f-7ef9-44b2-873d-3c9178bd9769" alt="seleccion-formato" loading="lazy"></p></li><li><p>Seleccionar próximo <strong>registro</strong></p></li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/f9a058b6-2ff4-450b-81c7-d9f90bd9b85d" alt="sig-registro" tabindex="0" loading="lazy"><figcaption>sig-registro</figcaption></figure><ul><li>Una vez seleccionado el próximo registro es fundamental verificar que coincidan los datos con el formato.</li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/54ebb58b-afb4-405f-88cd-7ac57a0bea5d" alt="verificar" tabindex="0" loading="lazy"><figcaption>verificar</figcaption></figure><ul><li>Luego de ser verificado y este todo los campos correctamente, seleccionar <strong>OK</strong> para cargar el archivo.</li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/592ca84a-768d-4147-9ac5-c81c189957b0" alt="ok" tabindex="0" loading="lazy"><figcaption>ok</figcaption></figure><ul><li><p>Para verificar que el archivo se cargó correctamente ir a:</p><ul><li><strong>Gestión del Sistema</strong> &gt; <strong>Datos</strong> &gt; <strong>Importar Datos</strong> &gt; <strong>Importar Movimientos de Nómina</strong> y buscar el archivo correspondiente.</li></ul></li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/14a25ebe-b100-41ff-a6b5-35ae1fa80819" alt="verificar-2" tabindex="0" loading="lazy"><figcaption>verificar-2</figcaption></figure><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/1a2d847a-880d-45a2-8846-7afee2464958" alt="ok2" tabindex="0" loading="lazy"><figcaption>ok2</figcaption></figure>',22),r={},n=(0,o(73570).A)(r,[["render",function(e,a){const o=(0,t.g2)("RouterLink");return(0,t.uX)(),(0,t.CE)("div",null,[i,(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.bF)(o,{to:"/docs/data-importation/payroll-importation/previous-vacation-date/export-files/"},{default:(0,t.k6)((()=>[(0,t.eW)("Haz click aquí")])),_:1})])]),s])}]])},11463:(e,a,o)=>{o.r(a),o.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-5cecb24e","path":"/docs/data-importation/payroll-importation/previous-vacation-date/","title":"Fecha de Vacaciones Anteriores","lang":"es-ES","frontmatter":{"title":"Fecha de Vacaciones Anteriores","category":"Importación","icon":"address-card","star":9,"sticky":9,"article":false,"description":"Representa a la última fecha de Inicio de Vacaciones de los empleados. Registre los datos de la siguiente manera: Registre los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna Registre a todos los Empleados utilizando el proceso de Nómina de Vacaciones (NV) El Valor correspondiente para este concepto será de Tipo “FECHA”, por lo tanto debe ingresar los datos en la Columna (“Fecha de Servicio”) con el Formato Año/Mes/Día.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/data-importation/payroll-importation/previous-vacation-date/"}],["meta",{"property":"og:title","content":"Fecha de Vacaciones Anteriores"}],["meta",{"property":"og:description","content":"Representa a la última fecha de Inicio de Vacaciones de los empleados. Registre los datos de la siguiente manera: Registre los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna Registre a todos los Empleados utilizando el proceso de Nómina de Vacaciones (NV) El Valor correspondiente para este concepto será de Tipo “FECHA”, por lo tanto debe ingresar los datos en la Columna (“Fecha de Servicio”) con el Formato Año/Mes/Día."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-09-09T15:56:48.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2024-09-09T15:56:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Fecha de Vacaciones Anteriores\\",\\"description\\":\\"Representa a la última fecha de Inicio de Vacaciones de los empleados. Registre los datos de la siguiente manera: Registre los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna Registre a todos los Empleados utilizando el proceso de Nómina de Vacaciones (NV) El Valor correspondiente para este concepto será de Tipo “FECHA”, por lo tanto debe ingresar los datos en la Columna (“Fecha de Servicio”) con el Formato Año/Mes/Día.\\"}"]]},"headers":[{"level":3,"title":"Consideraciones","slug":"consideraciones","link":"#consideraciones","children":[]},{"level":2,"title":"Exportar desde diferentes plataformas","slug":"exportar-desde-diferentes-plataformas","link":"#exportar-desde-diferentes-plataformas","children":[]},{"level":2,"title":"Cargar archivo de nómina","slug":"cargar-archivo-de-nomina","link":"#cargar-archivo-de-nomina","children":[]}],"git":{"createdTime":1725897408000,"updatedTime":1725897408000,"contributors":[{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.35,"words":406},"filePathRelative":"docs/data-importation/payroll-importation/previous-vacation-date/README.md","localizedDate":"9 de septiembre de 2024","excerpt":"<p>Representa a la última fecha de Inicio de Vacaciones de los empleados.</p>\\n<hr>\\n<p>Registre los datos de la siguiente manera:</p>\\n<ul>\\n<li>\\n<p>Registre los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna</p>\\n</li>\\n<li>\\n<p>Registre a todos los Empleados utilizando el proceso de Nómina de Vacaciones (NV)</p>\\n</li>\\n<li>\\n<p>El Valor correspondiente para este concepto será de Tipo “FECHA”, por lo tanto debe ingresar los datos en la Columna (“Fecha de Servicio”) con el Formato Año/Mes/Día.</p>\\n</li>\\n</ul>","autoDesc":true}')}}]);