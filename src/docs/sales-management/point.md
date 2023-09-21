---
title: Punto de Venta
category: Documentation
star: 9
sticky: 9
article: true
---


## ¿Qué es un Punto de Venta?

Presupuestos, facturación, cobranza, retenciones, devoluciones parciales, el inventario y una venta electrónica son solo un inicio. El Punto de venta de ADempiere para tiendas es tu herramienta inteligente y agil para conectar todas las transacciones de ventas que mantienen a tu negocio.
![POS (1)](https://github.com/erpcya/docs/assets/9578152/7861fef2-2a3d-4c3e-a8e1-706aadca2411)

## ¿Qué Beneficio Traerá a Tu Empresa?

- Operación agil y eficiente
- Rapidez y seguridad
- Gestión multimonedas
- Gestión Tributaria
- Reportes Variados de Cierres
- Ofrecer más opciones de pago
- Obtener datos precisos de tus ventas
- Mejorar la experiencia del cliente

## ¿Qué ofrece ADempiere?

ADempiere ofrece una herramienta con la que tendrás acceso a tu tienda desde cualquier lugar.

- Controla las ventas de tus empleados.
- Además de informes en tiempo real, consulta informes diarios, semanales o mensuales.
- Consulta tus pedidos recibidos y por recibir.
- ¿Quieres ver cómo va tu negocio? ¡Hazlo desde cualquier lugar!
- Generar una factura de forma directa en cualquier moneda.
- Cobrar en diferentes metodos de pagos.
- Generación de IGTF.
- Carga de Comprobante de IVA.
- Devoluciones Totales y Parciales.
- Arqueo de Cajas.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una venta en ADempiere mediante su punto de venta, en su versión 3.9.4 para la localización Venezuela.

## ¿Qué Consideraciones Debe Tomar en Cuenta?

- El asesor debe estar configurado en el terminal.
  - Debe tener acceso a la organización.
  - Debe tener acceso al terminal.
- El Cajero debe estar configurado en el terminal.
  - Debe tener acceso a la organización.
  - Debe tener acceso al terminal.
- La tasa de cambio del día debe ser creada con antelación.
- El arqueo de caja del día anterior debe haberlo completado.
- El Cajero debe aperturar la caja con el dinero asignado como fondo de caja.


## Gestión de Asesor
La gestión del asesor se basa en brindar asesoramiento y asistencia a los clientes para maximizar la probabilidad de una venta. En el punto de venta será responsable de diferentes tareas relacionadas con la fuerza de ventas y con esto crea un entorno atractivo para los clientes.

Un asesor de ventas debe poder registrar un cliente, actualizar datos, cotizar, tomar un pedido y finalmente liberarlo para ser facturado en una caja asignada.

![asesorvpos](https://github.com/erpcya/docs/assets/9578152/21daab7f-b799-4af9-81e8-5c64baa3f345)

### Selección de Terminal Asignado
El primer paso para gestionar el terminal y comenzar a tomar pedidos es seleccionar el terminal que desea operar, para esto proceda de la siguiente manera:

1. Ingrese de manera habitual a la aplicación.

   ![image](https://github.com/erpcya/docs/assets/9578152/a3df6e68-4ced-4bcb-965a-fc3803300760)

2. Una vez dentro seleccione la opción **Punto de Venta**, ubicado en gestión de ventas.
 
   ![image](https://github.com/erpcya/docs/assets/9578152/55ad8715-7388-4af0-9f0e-e5c7a6e29f5e)

3. Estando en el Punto de venta vaya a la opción punto de venta.
 
  ![image](https://github.com/erpcya/docs/assets/9578152/018eb774-5f2c-4b2c-b1a2-b78e5446072a)

4. Seleccione el terminal con el que desea trabajar. 

  ![image](https://github.com/erpcya/docs/assets/9578152/556d9488-09e8-4d02-a56c-5e64e0671518)

5.  Una vez seleccionada la opción, la aplicación recargará las opciones de acuerdo a su permisología.

### Gestionar Clientes
El Asesor puede gestionar la información de sus clientes, en este sentido, podrá crear o actualizar la información de sus clientes.

#### Crear Nuevo Cliente
Si usted desea crear un nuevo cliente en el Punto de Venta deberá realizar la siguiente operación:
1. Vaya la opción **Socio de Negocio** del Punto de Venta

  ![image](https://github.com/erpcya/docs/assets/9578152/2cc6a2bf-3abb-4ef8-af84-262f8f96c88d)

2. Seleccione la opción Nuevo **Socio de Negocio**

  ![image](https://github.com/erpcya/docs/assets/9578152/b5119a45-ec7c-45b1-bc7c-50c683088774)

3. Se desplegará el siguiente formulario
 
  ![image](https://github.com/erpcya/docs/assets/9578152/0dfb0a2d-1996-4207-8bbb-2ab2565cfc0d)

4. A continuación indique el código del cliente (Cédula/RIF) en el campo **Código**.
 
  ![image](https://github.com/erpcya/docs/assets/9578152/5df9e4bd-6dcd-4007-8f3a-a8b84cd2c703)

::: info Nota

ADempiere actualiza de modo automático el campo **Número Identificación**, este campo es utilizado para reportes fiscales (Ejemplo:IGTF).

:::

5. A continuación indique el nombre o razón social del cliente en el campo **Nombre**.

  ![image](https://github.com/erpcya/docs/assets/9578152/9b6e832a-f525-46d3-9751-e0552b484838)

6. Si es persona jurídica seleccione si es contribuyente en el campo **Contribuyente**

  ![image](https://github.com/erpcya/docs/assets/9578152/499f3eb4-a1dd-4806-8fa9-8332da92b63e)

7. Si es persona jurídica seleccione el tipo de contribuyente
 
  ![image](https://github.com/erpcya/docs/assets/9578152/cf095e9a-cfba-483f-b0a6-1f1156e571e7)

8. Registre su correo electrónico en el campo **E-mail**
 
  ![image](https://github.com/erpcya/docs/assets/9578152/382a0b73-85dd-412f-bd43-64ed54e14bef)

9. Registre su teléfono en el campo **Teléfono**
 
  ![image](https://github.com/erpcya/docs/assets/9578152/5dd10b95-86d3-4e63-9cc0-0993c143f96c)

10.Registre el detalle de la dirección:
  1. Registre la referencia de la dirección en el campo **Referencia**
  2. Registre la país de la dirección en el campo **País**
  3. Registre la región de la dirección en el campo **Región**
  4. Registre la ciudad de la dirección en el campo **Ciudad**
  5. Registre el detalle de la dirección en el campo **Dirección 1**
 
  ![image](https://github.com/erpcya/docs/assets/9578152/a213662d-5198-480a-bcd1-a4aa9acf1332)

11. Seleccione la opción ok, y ya su cliente estará registrado y listo para ser usado.



#### Actualizar Cliente

1. Busqué el cliente en el campo socio del negocio, escribiendo su cédula o su nombre.

    ![image](https://github.com/erpcya/docs/assets/9578152/69d2c7da-d4db-47e2-bb2f-ba122e4141cd)

2. Seleccione la opción Actualiza Socio del Negocio.

    ![image](https://github.com/erpcya/docs/assets/9578152/1e899ae9-2bd9-4bdb-a7a8-50a70e1741ee)

3. Edite el dato que desea modificar.

  ![image](https://github.com/erpcya/docs/assets/9578152/d4f22f66-fccb-4c4c-adff-e110b92d4008)
 
4. Guarde en la opción ok.
   
### Registro de Nuevo Pedido
El pedido del punto de venta es un documento que se genera como compromiso de venta, seleccionando los items y luego es liberado para su posterior facturación, en esta herramienta un pedido puede ser de los siguientes tipos:

#### Documento por Cobrar

1. **Pedido Fiscal:** Genera una factura fiscal al cobrarlo, esta es impresa en impresora fiscal o forma libre, la misma tiene implicaciones fiscales.
2. **Pedido Nota de Entrega:** Genera una nota de entrega al cobrarlo, esto quiere decir que el documento no es fiscal, hasta que el usuario decida facturarlo.
3. **Pedido no Facturado:** No genera factura o nota de entrega al cobrarlo, lo que quiere decir que es un pedido cobrado como anticipo.
   
#### Entregas de Mercancia
1. **Pedido no entregado:** No genera entrega inmediatamente luego de cobrarlo, ideal para tiendas donde manejan un área de logistica y despacho de mercancía.
2. **Pedido Entregado:** Genera la salida de inventario autómaticamente luego de cobrar el pedido, ideal para tiendas tipo supermercados e hipermercados.

#### Presupuestos
1. **Cotizaciones o Presupuestos:** Son documentos solicitados por el cliente, este documento genera un formato para el cliente con un presuesto, este no reserva mercancia y puede ser convertido a una factura luego.


Ahora bien para este ejemplo vamos a tomar un pedido fiscal, sabiendo que el procedimiento es exactamente igual para todos los casos, los tipos de documentos y su comportamiento dependerán del paquete que sea instalado en su empresa, por lo que por cada documento varía el resultado. Ahora bien, para el ejemplo en cuestión porceda de la siguiente forma:

1. Seleccione la opción nueva orden.
   
   ![image](https://github.com/erpcya/docs/assets/9578152/13f510d7-0ed6-448b-ba78-11624f5b3bbe)

2. Seleccione el cliente.

   ![image](https://github.com/erpcya/docs/assets/9578152/8e30090e-9fd3-402d-bb9c-db8175dccf8d)

3. Seleccione los Items en productos.
   
![image](https://github.com/erpcya/docs/assets/9578152/f8caa3be-88d4-4198-9039-1e93a5355deb)

4. Al seleccionar el producto, el item se agrega al panel de items

![image](https://github.com/erpcya/docs/assets/9578152/bee7d5f9-cb89-46b8-8919-bd8f9eda993f)

  A continuación se detalla los campos que se presenta en el panel de items:
  
  1. **Producto:** Muestra la descripción del producto o servicio a facturar, no es editable.
  2. **Precio:** Muestra el precio del producto en la moneda con la que se gestiona el terminal, puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
  3. **Cantidad:** Muestra la cantidad, inicialmente al cargar el producto es uno, puede ser modificada por el usuario, o eliminar el item.
  4. **Unidad de Medida(UM):** Muestra la unidad de medida con la que compra el producto, si el producto tiene unidad mínima de venta tomará esta unidad de medida, caso contrario tomará la del producto, no es editable.
  5. **% Impuesto:** Muestra la tasa de impuesto que aplica al producto, sabiendo que esto dependerá de la legislación del país donde tiene la instalación, además de esto, si el documento que gestiona es del tipo **Pedido Nota de Entrega:**, será exento de forma autómatica, no es editable.
  6. **Impuesto:** Muestra el monto del impuesto que aplica al producto dependiendo de la tasa de impuesto, sabiendo que esto dependerá de la legislación del país donde tiene la instalación, además de esto, si el documento que gestiona es del tipo **Pedido Nota de Entrega:**, será exento de forma autómatica, no es editable.
  7. **Total:** Muestra el total a pagar por el item, es decir, **(precio unitario*cantidad)+impuesto**, no es editable.
  8. **Convertido:** Muestra el total a pagar por el item, convertido a la tasa de la moneda paralela con la que se maneja el terminal, es la tasa de cambio del día, no es editable.
  9. **Opciones:** Es una gama de opciones adicionales para gestionar cada item, a continuación se explica cada opción:
      1. **Información:** Muestra el detalle del producto, información relevante que es util para inducir una venta:
         
         ![image](https://github.com/erpcya/docs/assets/9578152/5ebc69af-e421-48c3-90b2-c00cabed2db9)

         1.  Imágenes del Producto.
         2.  Código.
         3.  Nombre.
         4.  Descripción.
         5.  Unidad de Medida de Venta.
         6.  Precio Base.
         7.  Precio.
         8.  Tasa de Impuesto.
         9.  Equivalencia de unidad de medida base a unidad de medida mínima de venta.
         10. Cantidad a Vender en el Item.
         11. Unidad de Medida de Venta.
         12. Cantidad en unidad de medida base.
             
      2. **Edición:** Permite editar las cantidades y algunos atributos del Item.
         
         ![image](https://github.com/erpcya/docs/assets/9578152/3e78f912-2b15-4dae-a911-2cdfbece1dee)

         1. **Equivalencia de unidad de medida base a unidad de medida mínima de venta:** Muestra a modo de refencia la equivalencia en cantidades.
         2. **Precio:** Muestra el precio del producto en la moneda con la que se gestiona el terminal, puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
         3. **Unidad de Medida de Venta:** Muestra la unidad de medida con la que compra el producto, si el producto tiene unidad mínima de venta tomará esta unidad de medida, permite cambiar a otra unidad siempre que tenga conversión el producto.
         4. **Cantidad a Vender en el Item:** Muestra la cantidad, inicialmente al cargar el producto es uno, puede ser modificada por el usuario, o eliminar el item.
         5. **Precio Base:** No es editable, muestra el precio en la unidad de medida base del producto.
         6. **Unidad de Medida Base:** No es editable, muestra la unidad de medida base del producto.
         7. **Cantidad Base:** No es editable, muestra la cantidad en la unidad de medida base del producto.
         8. **% Descuento:** Permite agregar un porcentaje de descuento al precio,puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
         9. **Almacén:** Permite modificar el almacén de la que venderá la mercancía, puede ser modificable,siempre y cuando su terminal tenga configurado más de un almacén.
         10. **Cantidad Disponible:** No es editable, muestra la cantidad disponible en el almacén seleccionado en la unidad de medida base del producto.
     
      3. **Eliminar Item:** Permite eliminar de manera directa un item.
         
         ![image](https://github.com/erpcya/docs/assets/9578152/35d4681e-8fb1-4fb1-b562-0826ef41672a)
        
5. Seleccione la opción **Liberar Pedido**, esto debe hacerlo cuando ya su pedido esté completo y listo para facturar o entregar.
   
   ![image](https://github.com/erpcya/docs/assets/9578152/86b19212-a3e8-4847-a416-4e5d2de00043)

6. Para imprimir el pedido debe proceder de la siguiente manera:
   
   1. Seleccione la opción **Orden de Venta** en **Opciones Rápidas del Punto de Ventas**
      
      ![image](https://github.com/erpcya/docs/assets/9578152/ef68956c-b283-46d6-8e83-ceae79611f19)

   2. Vaya a la opción **Ver Vista Previa**
      
      ![image](https://github.com/erpcya/docs/assets/9578152/90024641-20aa-4e0a-9f63-571ad146ce49)


### Consulta de Producto
La consulta de precios permite al asesor de ventas leer los códigos de sus productos desde un lector de barras o tipearlos, la aplicación le mostrara en pantalla la siguiente información:

![image](https://github.com/erpcya/docs/assets/9578152/04d836b6-a5b6-4568-8699-951f46121891)

1. Código
2. Nombre
3. Existencia
4. Disponibilidad
5. Precio
6. Precio Convertido
7. Total General

Para consultar los productos, proceda de la siguiente forma:
1. Seleccione la opción **Opciones Generales** en **Opciones Rápidas del Punto de Ventas**.

   ![image](https://github.com/erpcya/docs/assets/9578152/88ffbea5-d8c0-4b4c-bc29-8c125cbcf441)

2. Seleccione la opción **Consulta de Producto**.

  ![image](https://github.com/erpcya/docs/assets/9578152/9229f38a-fa1d-41c2-8eb8-e7d7c1cb6d68)
 
3. Ingrese el código o nombre del producto para ver la información.

  ![image](https://github.com/erpcya/docs/assets/9578152/ff679895-148a-4c03-82c6-846eba9432bf)
 

# Gestión de Cajero
La gestión del cajero es administrar todas las transacciones con los clientes de manera eficiente. Entre las responsabilidades de un cajero se incluyen abrir su caja, recibir pagos y emitir facturas o recibos, entregar los productos y realizar un seguimiento de todas las transacciones de efectivo y crédito hasta llegar a su arqueo de caja.

![CajeroPOS ](https://github.com/erpcya/docs/assets/9578152/15088f61-4d32-477f-b236-f2e2aa9dc1c3)


### Selección de Terminal Asignado
El primer paso para gestionar el terminal y comenzar a tomar pedidos es seleccionar el terminal que desea operar, para esto proceda de la siguiente manera:

1. Ingrese de manera habitual a la aplicación.
   
   ![image](https://github.com/erpcya/docs/assets/9578152/a3df6e68-4ced-4bcb-965a-fc3803300760)

2. Una vez dentro seleccione la opción **Punto de Venta**, ubicado en gestión de ventas.
   
   ![image](https://github.com/erpcya/docs/assets/9578152/55ad8715-7388-4af0-9f0e-e5c7a6e29f5e)

3. Estando en el Punto de venta vaya a la opción punto de venta.
   
  ![image](https://github.com/erpcya/docs/assets/9578152/7a615600-37f7-4cd7-92c0-969f89db1e91)

4. Seleccione el terminal con el que desea trabajar.
   
  ![image](https://github.com/erpcya/docs/assets/9578152/85c0507c-554d-4a11-9c6e-224eaacee627)

5. Una vez seleccionada la opción, la aplicación recargará las opciones de acuerdo a su permisología.

### Apertura de Caja
Antes de comenzar la jornada laboral, es importante revisar y por supuesto registrar en el terminal la cantidad de dinero en efectivo que tiene disponible en la caja, hazlo siempre antes de abrir el negocio, ya que podrían llegar clientes a comprar y esto podría afectar el proceso de arqueo de caja.

1. Seleccione la opción **Gestión de Caja** en **Opciones Rápidas del Punto de Ventas**.

   ![image](https://github.com/erpcya/docs/assets/9578152/a585f366-f338-41e7-a782-1488af6a35f5)

2. Seleccione la opción **Apertura**

   ![image](https://github.com/erpcya/docs/assets/9578152/91f73d87-3539-4b84-9052-c8253b0f546c)

3. Se desplegará el siguiente formulario donde tendrá dos opciones:

  1. **Apertura Desde un Fondo de Caja:** Al seleccionar esta opción, este proceso genera una salida de dinero desde una caja administrativa.
     
     1.Ingrese el dinero que recibe en el campo **Total del Pago**
     
       ![image](https://github.com/erpcya/docs/assets/9578152/6c4101f9-23dc-4cbc-8480-814acb267584)

     2. Seleccione el método de pago en el campo **Método de Pago**

       ![image](https://github.com/erpcya/docs/assets/9578152/ada60b8b-7377-4823-9e97-1ca4e00dc7e3)

     3. El campo **Moneda** no es editable, se establece autómaticamente al seleccionar el método de pago.

        ![image](https://github.com/erpcya/docs/assets/9578152/fbda24fd-d369-4657-845a-9befb2a0fc80)

     4. Seleccione la opción **Usar Fondo de Caja**
        
        ![image](https://github.com/erpcya/docs/assets/9578152/932177ce-35c0-4b09-8447-fc94816a651f)

     5. Seleccione la caja desde la cúal va a transferir los fondos.

        ![image](https://github.com/erpcya/docs/assets/9578152/476fa783-5cc8-49f3-a93e-5fc99fd4357a)

     6. Selecciona la opción agregar.

        ![image](https://github.com/erpcya/docs/assets/9578152/0eb6f273-eb0b-4859-8c75-96cc2b437e1e)

     7. Esta opción agrega un ingreso a su caja.

        ![image](https://github.com/erpcya/docs/assets/9578152/179256cc-3770-474c-b534-dda902c1ac14)

     8. Seleccione el responsable del dinero(Cajero) en el campo **Agente Cobrador**
    
        ![image](https://github.com/erpcya/docs/assets/9578152/5dee1c5b-73ba-4fa9-a309-ded012184833)

     9. Agregue la descripción de su preferencia.

         ![image](https://github.com/erpcya/docs/assets/9578152/03f53943-6a0c-4975-b0ae-33e2665190b5)

     10. Seleccione la opción ok para culminar la apertura.

         ![image](https://github.com/erpcya/docs/assets/9578152/e88910c8-5584-4e3e-9d5c-217d6a892645)

     11. Visualizará el siguiente mensaje de confirmación.

         ![image](https://github.com/erpcya/docs/assets/9578152/a14d9ad4-f4fc-4c9e-b2e5-4469d2849d8a)

  2. **Crear Fondo de Caja:** Al seleccionar esta opción, este proceso no genera una salida de dinero desde una caja administrativa, generalmente es un fondo de caja fijo y transitorio.
     1. Ingrese el dinero que recibe en el campo **Total del Pago**
     
       ![image](https://github.com/erpcya/docs/assets/9578152/6c4101f9-23dc-4cbc-8480-814acb267584)

     2. Seleccione el método de pago en el campo **Método de Pago**

       ![image](https://github.com/erpcya/docs/assets/9578152/ada60b8b-7377-4823-9e97-1ca4e00dc7e3)

     3. El campo **Moneda** no es editable, se establece autómaticamente al seleccionar el método de pago.

        ![image](https://github.com/erpcya/docs/assets/9578152/fbda24fd-d369-4657-845a-9befb2a0fc80)

     4. Selecciona la opción agregar.

        ![image](https://github.com/erpcya/docs/assets/9578152/0eb6f273-eb0b-4859-8c75-96cc2b437e1e)

     5. Esta opción agrega un ingreso a su caja.

        ![image](https://github.com/erpcya/docs/assets/9578152/179256cc-3770-474c-b534-dda902c1ac14)

     6. Seleccione el responsable del dinero(Cajero) en el campo **Agente Cobrador**
    
        ![image](https://github.com/erpcya/docs/assets/9578152/5dee1c5b-73ba-4fa9-a309-ded012184833)

     7. Agregue la descripción de su preferencia.

         ![image](https://github.com/erpcya/docs/assets/9578152/03f53943-6a0c-4975-b0ae-33e2665190b5)
        
     9. Seleccione la opción ok para culminar la apertura.

         ![image](https://github.com/erpcya/docs/assets/9578152/e88910c8-5584-4e3e-9d5c-217d6a892645)

     10. Visualizará el siguiente mensaje de confirmación.

         ![image](https://github.com/erpcya/docs/assets/9578152/a14d9ad4-f4fc-4c9e-b2e5-4469d2849d8a)
::: info Nota

Si el proceso de apertura no es realizado o concluido de manera correcto, los cobros no podrán ser ejecutados, la aplicación genera una alerta que indica **Caja no Aperturada**.

:::
 
### Selección de Pedido 
Una vez generado el pedido como se explica en el cápitulo anterior, se procede a la cobranza y facturación, para seleccionar un pedido liberado, proceda de la siguiente forma:

1. Seleccione la opción **Venta de Pasillo**

   ![image](https://github.com/erpcya/docs/assets/9578152/8e2c65b4-430e-478f-8921-7d6b277261a8)

2. Proceda a seleccionar el pedido a cobrar.

   ![image](https://github.com/erpcya/docs/assets/9578152/c96422e6-13bd-4230-9df2-155496ad7c9c)

4. Su pedido será precargado en pantalla de la siguiente forma.

   ![image](https://github.com/erpcya/docs/assets/9578152/1756b9b0-1ad6-4469-978b-5e94cbd448c7)

5. A continuación se detalla los campos que se presenta en el panel de items:
  
  1. **Producto:** Muestra la descripción del producto o servicio a facturar, no es editable.
  2. **Precio:** Muestra el precio del producto en la moneda con la que se gestiona el terminal, puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
  3. **Cantidad:** Muestra la cantidad, inicialmente al cargar el producto es uno, puede ser modificada por el usuario, o eliminar el item.
  4. **Unidad de Medida(UM):** Muestra la unidad de medida con la que compra el producto, si el producto tiene unidad mínima de venta tomará esta unidad de medida, caso contrario tomará la del producto, no es editable.
  5.**% Descuento:** Puede ingresar el porcentaje de descuento que aplicará al producto dependiendo del % límite o el monto límite, puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
  6. **Descuento:** Muestra el monto del descuento que aplica al producto dependiendo del porcentaje de descuento, puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
  7. **% Impuesto:** Muestra la tasa de impuesto que aplica al producto, sabiendo que esto dependerá de la legislación del país donde tiene la instalación, además de esto, si el documento que gestiona es del tipo **Pedido Nota de Entrega:**, será exento de forma autómatica, no es editable.
  8. **Impuesto:** Muestra el monto del impuesto que aplica al producto dependiendo de la tasa de impuesto, sabiendo que esto dependerá de la legislación del país donde tiene la instalación, además de esto, si el documento que gestiona es del tipo **Pedido Nota de Entrega:**, será exento de forma autómatica, no es editable.
  9. **Total:** Muestra el total a pagar por el item, es decir, **(precio unitario*cantidad)+impuesto**, no es editable.
  10. **Convertido:** Muestra el total a pagar por el item, convertido a la tasa de la moneda paralela con la que se maneja el terminal, es la tasa de cambio del día, no es editable.
  11. **Opciones:** Es una gama de opciones adicionales para gestionar cada item, a continuación se explica cada opción:
      1. **Información:** Muestra el detalle del producto, información relevante que es util para inducir una venta:
         
         ![image](https://github.com/erpcya/docs/assets/9578152/5ebc69af-e421-48c3-90b2-c00cabed2db9)

         1.  Imágenes del Producto.
         2.  Código.
         3.  Nombre.
         4.  Descripción.
         5.  Unidad de Medida de Venta.
         6.  Precio Base.
         7.  Precio.
         8.  Tasa de Impuesto.
         9.  Equivalencia de unidad de medida base a unidad de medida mínima de venta.
         10. Cantidad a Vender en el Item.
         11. Unidad de Medida de Venta.
         12. Cantidad en unidad de medida base.
             
      2. **Edición:** Permite editar las cantidades y algunos atributos del Item.
         
         ![image](https://github.com/erpcya/docs/assets/9578152/3e78f912-2b15-4dae-a911-2cdfbece1dee)

         1. **Equivalencia de unidad de medida base a unidad de medida mínima de venta:** Muestra a modo de refencia la equivalencia en cantidades.
         2. **Precio:** Muestra el precio del producto en la moneda con la que se gestiona el terminal, puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
         3. **Unidad de Medida de Venta:** Muestra la unidad de medida con la que compra el producto, si el producto tiene unidad mínima de venta tomará esta unidad de medida, permite cambiar a otra unidad siempre que tenga conversión el producto.
         4. **Cantidad a Vender en el Item:** Muestra la cantidad, inicialmente al cargar el producto es uno, puede ser modificada por el usuario, o eliminar el item.
         5. **Precio Base:** No es editable, muestra el precio en la unidad de medida base del producto.
         6. **Unidad de Medida Base:** No es editable, muestra la unidad de medida base del producto.
         7. **Cantidad Base:** No es editable, muestra la cantidad en la unidad de medida base del producto.
         8. **% Descuento:** Permite agregar un porcentaje de descuento al precio,puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
         9. **Almacén:** Permite modificar el almacén de la que venderá la mercancía, puede ser modificable,siempre y cuando su terminal tenga configurado más de un almacén.
         10. **Cantidad Disponible:** No es editable, muestra la cantidad disponible en el almacén seleccionado en la unidad de medida base del producto.
     
      3. **Eliminar Item:** Permite eliminar de manera directa un item.
         
         ![image](https://github.com/erpcya/docs/assets/9578152/35d4681e-8fb1-4fb1-b562-0826ef41672a)

   
## Cambios de Atributos
Esta opción permite a un cajero con autorización realiza cambios en los atributos del pedido, a continuación se detalla la implicación de cada atributo:

1. **Tipo de Documento:** El usuario puede cambiar el tipo de documento, seleccionando si desea que sea fiscal o no, este cambio tendrá implicaciones tributarias,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.

   ![image](https://github.com/erpcya/docs/assets/9578152/84aba9b3-81d0-4b73-9221-386615739cd0)

2.  **Almacén:**  El usuario puede cambiar el almacén del cuál desean egresar la mercancia,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.

   ![image](https://github.com/erpcya/docs/assets/9578152/4ec103c5-c4af-4006-a244-1326410b01e6)

3.  **Lista de Precios:**  El usuario puede cambiar la lista de precio del pedido, esto cambia y recalcula los precios del pedido,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.

   ![image](https://github.com/erpcya/docs/assets/9578152/12597245-9279-4116-bdf0-f9b8fdf35a10)

4.  **Campaña:**  El usuario puede cambiar la campaña del pedido, esto permite direccionar la venta a los canales correspondientes,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.

   ![image](https://github.com/erpcya/docs/assets/9578152/31299703-3290-43c8-af1f-36fa22590abb)

   
## Cobranza
### Efectivo
### Transferencia
### Tarjeta de Crédito
### Tarjeta de Débito
### Pago Móvil
### Tarjeta de Crédito
### Zelle
### Crédito
## Generación de IGTF
## Carga de Comprobante de IVA
## Consultas de Ventas
### Por Facturar
### Ventas de Pasillo
### A Crédito
### Por Entregar
### Solo Completas
### Propuestas
### Anuladas
### Cerradas
### Devoluciones
## Devoluciones
### Devolución Total
### Devolución Parcial
## Entrega de Producto
### Entrega Total
### Entrega Parcial
## Cierre de Caja
### Cierre Resumen
### Cierre Detalle

# Gestión de Supervisor de Turno
## Descuentos
### Descuentos en Lineas
### Descuentos en Monto General
## Asignar Vendedor
## Desasignar Vendedor
## Retiro de Caja
## Ingreso de Caja
## Ajustes de Facturas

# Reportes de Gestión de Ventas







Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Orden de Ventas**, por último seleccione la ventana **Punto de Venta**.

![Campo](/assets/img/docs/sales-management/sam-sales-image304.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Punto de Venta** en ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image305.png)

Imagen 2. Ventana Punto de Venta

Seleccione el icono **Nueva Orden**, ubicado en la barra de herramientas superior derecha.

![Campo](/assets/img/docs/sales-management/sam-sales-image306.png)

Imagen 3. Icono Registro Nueva Orden

Si desea relacionar su venta a un cliente fiscalmente, puede seleccionar un cliente existente o crear un nuevo cliente:

Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image307.png)

Imagen 4. Búsqueda de Cliente

Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image308.png)

Imagen 4. Nuevo Cliente

Seleccione la opción **Crear Nuevo Socio de Negocio**.

![Campo](/assets/img/docs/sales-management/sam-sales-image309.png)

Imagen 5. Opción Nuevo Cliente

A continuación Seleccione la opción **Crear Nuevo Socio de Negocio**, y se desplegará la siguiente ventana.

![Campo](/assets/img/docs/sales-management/sam-sales-image310.png)

Imagen 6. Ventana Crear Socio de Negocio

