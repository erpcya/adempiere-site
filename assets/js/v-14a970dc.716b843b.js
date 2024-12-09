"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35259],{14224:(e,a,n)=>{n.r(a),n.d(a,{default:()=>o});var s=n(78744);const i=[(0,s.Fv)('<h2 id="configurar-la-aplicacion" tabindex="-1"><a class="header-anchor" href="#configurar-la-aplicacion" aria-hidden="true">#</a> Configurar la aplicación</h2><p>Se debe conocer en puerto COM se encuentra conectado la balanza, ademas de la estructura de la trama de datos que envia la balanza.</p><ol><li>Acceder al directorio de el Acceso Directo en el escritorio (Record-Weight-Sender-DotNet) resultante luego de instalar la apliciación, o en su defecto la siguiente ruta:</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">C</span><span class="token operator">:</span>\\Users\\<span class="token punctuation">(</span>Usuario de Windows<span class="token punctuation">)</span>\\AppData\\Local\\Record<span class="token operator">-</span>Weight<span class="token operator">-</span>Sender<span class="token operator">-</span>DotNet\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="/assets/img/about/other-services/devices/weight-sender-desktop-shortcut.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><figure><img src="/assets/img/about/other-services/devices/weight-sender-folder-go-to-folder.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><p>Si accedes usando el Acceso directo debes regresar una carpeta atrás, la ruta previamente mencionada debe existir la siguiente distribuición de directorios.</p><figure><img src="/assets/img/about/other-services/devices/weight-sender-folder-structure.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><p>Configurar parámetros de la aplicación en archivo scale.yaml</p><p>Para realizar este paso se debe acceder la carpeta resources.</p><figure><img src="/assets/img/about/other-services/devices/weight-sender-folder-config-files.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><p>Abrimos el siguiente archivo <strong>printer.yaml</strong> el cual tiene la siguiente estructura.</p><figure><img src="/assets/img/about/other-services/devices/weight-sender-folder-scale-yaml.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><p>Al modificar el archivo se deben respetar las identaciónes y espacios en blanco, ya que de no ser asi la aplicación no iniciara.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>\n    <span class="token key atrule">host</span><span class="token punctuation">:</span> 167.172.15.104\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">32686</span>\n    <span class="token key atrule">queue_name</span><span class="token punctuation">:</span> <span class="token string">&quot;Romana-1-test&quot;</span>\n    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">6000</span>\n<span class="token key atrule">client_name</span><span class="token punctuation">:</span> <span class="token string">&quot;Romana-1-test&quot;</span>\n<span class="token key atrule">scale</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;Romana-1-test&quot;</span>\n    <span class="token key atrule">folder</span><span class="token punctuation">:</span>  <span class="token string">&quot;/tmp&quot;</span>\n    <span class="token key atrule">port_name</span><span class="token punctuation">:</span> <span class="token string">&quot;COM10&quot;</span>\n    <span class="token key atrule">speed</span><span class="token punctuation">:</span> <span class="token number">2400</span>\n    <span class="token key atrule">data_bits</span><span class="token punctuation">:</span> <span class="token number">8</span>\n    <span class="token key atrule">stop_bits</span><span class="token punctuation">:</span> <span class="token string">&quot;One&quot;</span>\n    <span class="token key atrule">parity</span><span class="token punctuation">:</span> <span class="token string">&quot;None&quot;</span>\n    <span class="token key atrule">flow_control</span><span class="token punctuation">:</span> <span class="token string">&quot;None&quot;</span>\n    <span class="token key atrule">start_character</span><span class="token punctuation">:</span> <span class="token number">61</span>\n    <span class="token key atrule">end_character</span><span class="token punctuation">:</span> <span class="token number">13</span>\n    <span class="token key atrule">start_word</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>\n    <span class="token key atrule">end_word</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>\n    <span class="token key atrule">string_length</span><span class="token punctuation">:</span> <span class="token number">12</span>\n    <span class="token key atrule">start_cut_position</span><span class="token punctuation">:</span> <span class="token number">2</span>\n    <span class="token key atrule">end_cut_position</span><span class="token punctuation">:</span> <span class="token number">7</span>\n    <span class="token key atrule">start_cut_screen_position</span><span class="token punctuation">:</span> <span class="token number">2</span>\n    <span class="token key atrule">end_cut_screen_position</span><span class="token punctuation">:</span> <span class="token number">7</span>\n    <span class="token key atrule">waiting_time</span><span class="token punctuation">:</span> <span class="token number">5000</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A continuación se describe cada campo:</p><p>Sección server:</p><ul><li><strong>host</strong>: Dominio o Dirección IP donde se encuentra ejecutandose el servicio de cola de Kafka.</li><li><strong>port</strong>: Puerto por el cual responde el servicio de cola de Kafka, en este parametro no se deben colocar puntos ni comas.</li><li><strong>queue_name</strong>: Nombre del servicio de cola.</li><li><strong>timeout</strong>: Tiempo de espera de respuesta, esta expresado en ms</li><li><strong>client_name</strong>: Nombre de balanza dentro del servicio de cola (Se Recomienda colocar el mismo valor que <strong>queue_name</strong>)</li></ul><p>Sección scale:</p><ul><li><strong>name</strong>: Nombre con el que se identifica la balanza (Se Recomienda colocar el mismo valor que <strong>queue_name</strong>)</li><li><strong>folder</strong>: Ruta de creación archivos temporales (No modificar este parametro)</li><li><strong>port_name</strong>: Puerto COM donde esta conectada la balanza (Solo se usa con impresoras fiscales)</li><li><strong>speed</strong>: Velocidad en Baudios del puerto serial</li><li><strong>data_bits</strong>: Cantidad de bits de datos que contiene la trama de datos enviada por la balanza</li><li><strong>stop_bits</strong>: Bits de parada que usa la balanza puede tomar uno de los siguientes valores: <ul><li>None <ul><li>One</li><li>Two</li><li>OnePointFive</li></ul></li></ul></li><li><strong>parity</strong>: Tipo de paridad usada por la comunicación serial, puede tomar lo siguientes valores: <ul><li>None <ul><li>Odd</li><li>Even</li><li>Mark</li><li>Space</li></ul></li></ul></li><li><strong>flow_control</strong>: Flujo de Control de datos usado por la comunicación serial, toma los siguientes valores: <ul><li>None <ul><li>XOnXOff</li><li>RequestToSend</li><li>RequestToSendXOnXOff</li></ul></li></ul></li><li><strong>start_character</strong>: Caracter inicial de la trama.</li><li><strong>end_character</strong>: Caracter final de la trama.</li><li><strong>start_word</strong>: Palabra de inicio de trama o combinación de Caracteres con los que inicia la trama (Este parametro debe llenar solo cuando el la trama inicie con mas de un caracter).</li><li><strong>end_word</strong>: Palabra de finalización de trama o combinación de Caracteres con los que finaliza la trama (Este parametro debe llenar solo cuando el la trama finalice con mas de un caracter).</li><li><strong>string_length</strong>: Longuitud de Caracteres de la trama.</li><li><strong>start_cut_position</strong>: Posición de inicio de corte de trama, este valor corresponde al punto de la trama donde se inicia a recibir el primer dijito del pesaje.</li><li><strong>end_cut_position</strong>: Posición de finalización de corte de trama, este valor corresponde al punto de la trama donde se finaliza de recibir el ultimo dijito del pesaje.</li><li><strong>start_cut_screen_position</strong>: Posición de inicio de corte de trama en el visor de la balanza, este valor corresponde al punto de la trama donde se inicia a recibir el primer dijito del pesaje.</li><li><strong>end_cut_screen_position</strong>: Posición de finalización de corte de trama en el visor de la balanza, este valor corresponde al punto de la trama donde se finaliza de recibir el ultimo dijito del pesaje.</li><li><strong>waiting_time</strong>: Tiempo de espera para recibir datos.</li></ul><ol><li>Iniciar la aplicación para verificar la correcta configuración</li></ol><figure><img src="/assets/img/about/other-services/devices/weight-sender-desktop-shortcut.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><p>Si la apliciación esta correctamente configurada al iniciarla debe mostrar la siguiente consola de terminal.</p><figure><img src="/assets/img/about/other-services/devices/weight-sender-folder-start-app.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><p>Si por el contrario sucede uno de las siguiente casos:</p><ul><li>La consola se cierra inmediatamente al iniciar la aplicación, esto se debe que los parámetros no están configurados correctamente o no se respetó la estructura del archivo <code>printer.yaml</code></li></ul><p>Esto sucede debido a que hay un error en los datos de conexión verificar los parámetros <strong>host</strong> y <strong>port</strong>.</p><ol start="4"><li>Verificar que existe un Servicio de Windows con el Nombre de Record Weight EPRCYA</li></ol><figure><img src="/assets/img/about/other-services/devices/weight-sender-folder-service.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><figure><img src="/assets/img/about/other-services/devices/weight-sender-folder-service-properties.png" alt="0" tabindex="0" loading="lazy"><figcaption>0</figcaption></figure><ul><li><p>Parara verificar que el servicio funcione, abrir las Propiedades del servicio y presionar el boton iniciar el estado del servicio debe mantenerse <strong>En Ejecución</strong></p></li><li><p>Prueba de reinicio.</p><ul><li><p>Se debe reiniciar el equipo, al iniciar nuevamente automaticamente debe iniciar automaticamente el Servicio <strong>Record Weight EPRCYA</strong></p></li><li><p>De ser asi la aplicación esta Configurada y lista para su uso, en este punto se puede proceder a hacer la prueba de Lectura de Peso desde ADempiere.</p></li></ul></li></ul>',31)],t={},o=(0,n(73570).A)(t,[["render",function(e,a){return(0,s.uX)(),(0,s.CE)("div",null,i)}]])},98621:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-14a970dc","path":"/docs/devices/record-weight/config-record-weight-sender-windows.html","title":"Configuración Cliente de Lectura de Peso en Windows","lang":"es-ES","frontmatter":{"title":"Configuración Cliente de Lectura de Peso en Windows","category":"Otros Servicios","star":9,"sticky":9,"tag":["Nosotros","Servicios"],"article":false,"description":"Configurar la aplicación Se debe conocer en puerto COM se encuentra conectado la balanza, ademas de la estructura de la trama de datos que envia la balanza. Acceder al directorio de el Acceso Directo en el escritorio (Record-Weight-Sender-DotNet) resultante luego de instalar la apliciación, o en su defecto la siguiente ruta:","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/devices/record-weight/config-record-weight-sender-windows.html"}],["meta",{"property":"og:title","content":"Configuración Cliente de Lectura de Peso en Windows"}],["meta",{"property":"og:description","content":"Configurar la aplicación Se debe conocer en puerto COM se encuentra conectado la balanza, ademas de la estructura de la trama de datos que envia la balanza. Acceder al directorio de el Acceso Directo en el escritorio (Record-Weight-Sender-DotNet) resultante luego de instalar la apliciación, o en su defecto la siguiente ruta:"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-05-06T20:08:09.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:tag","content":"Nosotros"}],["meta",{"property":"article:tag","content":"Servicios"}],["meta",{"property":"article:modified_time","content":"2024-05-06T20:08:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Configuración Cliente de Lectura de Peso en Windows\\",\\"description\\":\\"Configurar la aplicación Se debe conocer en puerto COM se encuentra conectado la balanza, ademas de la estructura de la trama de datos que envia la balanza. Acceder al directorio de el Acceso Directo en el escritorio (Record-Weight-Sender-DotNet) resultante luego de instalar la apliciación, o en su defecto la siguiente ruta:\\"}"]]},"headers":[{"level":2,"title":"Configurar la aplicación","slug":"configurar-la-aplicacion","link":"#configurar-la-aplicacion","children":[]}],"git":{"createdTime":1715026089000,"updatedTime":1715026089000,"contributors":[{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.84,"words":851},"filePathRelative":"docs/devices/record-weight/config-record-weight-sender-windows.md","localizedDate":"6 de mayo de 2024","excerpt":"<h2> Configurar la aplicación</h2>\\n<p>Se debe conocer en puerto COM se encuentra conectado la balanza, ademas de la estructura de la trama de datos que envia la balanza.</p>\\n<ol>\\n<li>Acceder al directorio de el Acceso Directo en el escritorio (Record-Weight-Sender-DotNet) resultante luego de instalar la apliciación, o en su defecto la siguiente ruta:</li>\\n</ol>","autoDesc":true}')}}]);