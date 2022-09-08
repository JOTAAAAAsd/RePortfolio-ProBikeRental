

# Explicación
Este proyecto fue de un challenge el cual lo he realizado para la empresa Grow Pro, la cual nunca obtuve respuesta sobre este challenge, pero más allá de esa cuestión me gustó mucho realizarlo, fue muy entretenido.
El challenge consta de un rentado de bicicletas, donde el usuario interesado en adquirir una bicicleta va a tener que brindar sus datos personales, la cantidad de día que quiere alquilarla partiendo de la fecha que inicia el alquiler, ya que dependiendo de que si se está alquilando antes del 15 de cada mes su valor cambiará, también dependiendo de su modelo el precio de rentado se congelará por un período de días, el enunciado pedía que sean de 3 días para una bicicleta normal y 5 días para una bicicleta antigua, luego pasado este período se lo sumará con el valor de alquilar correspondiente.
Este proyecto lo he realizado con REDUX para centralizar los estados y hacerlo lo más prolijo posible, también se pedía el uso del localStorage para almacenar la información de la bicicleta y/o usuario, diseño responsivo y el uso de React Router Dom.
 
 
### Instalación:
- **npm install**

### Ejecución en el puerto 3000:
- **npm start** 

### Paquetes usados:
- **@redux-devtools/core** 
- **bootstrap** 
- **react-bootstrap** 
- **react-icons** 
- **react-redux** 
- **react-router-dom** 
- **redux-thunk** 

 
### Enunciado del Desafío:
Descripción del problema
Vamos a desarrollar una pequeña aplicación de alquiler de bicicletas, que tendrá 3 funcionalidades principales:

- Listar el inventario de bicicletas disponibles
- Calcular el precio de los alquileres
- Crear una solicitud de alquiler.

El precio de los alquileres se basa en el tipo de bicicleta alquilada y en el número de días de duración del alquiler. En el momento del alquiler, los clientes dicen por cuántos días quieren alquilar la bicicleta y en función de eso se calcula el precio para la solicitud.

La tienda ofrece tres tipos de bicicleta:
- Bicicletas eléctricas: El coste del alquiler será el precio base multiplicado por el número de días de alquiler.  
- Bicicletas normales: El coste del alquiler será el precio base por los primeros 3 días y después el precio base por cada día extra.
- Bicicletas antiguas: El coste del alquiler será el precio base por los primeros 5 días y después el precio base por cada día extra.


El precio base es de 10 USD al día, si el alquiler se inicia antes del día 15 de cada mes y de 12 USD al día si se inicia el día 15 o los días posteriores.
Descripción del proyecto
Crea y desarrolla un proyecto en React que permita al usuario realizar las siguientes funciones:
Listado de bicicletas en el que distinga perfectamente el tipo de bicicleta
  - En el listado se mostrará, además del tipo de bicicleta, al menos el nombre y una imagen
  - El listado se obtendría idealmente haciendo una llamada a un endpoint de una API Rest, pero para este ejercicio se pide usar un mock de esa llamada que devuelva un json con al menos 3 bicicletas de cada tipo.
  - Se puede usar un generador de imágenes aleatorias. 
  - Cada uno de los elementos del listado será clicable y al clicar llevará al usuario al formulario de solicitud de esa bicicleta.

Formulario de solicitud de bicicleta
  - En la página se mostrará en algún lugar de forma clara el tipo de bicicleta, el nombre y la imagen
  - El formulario incluirá al menos los siguientes campos: nombre del usuario, email del usuario, teléfono del usuario, fecha de inicio del alquiler, duración en días del alquiler
  - Al darle a enviar solicitud, aparecerá una ventana emergente o popup de confirmación en la que se mostrará el precio calculado para el alquiler que se está solicitando y que tendrá dos botones, uno para cancelar que simplemente cerrará la ventana emergente y otro de confirmar, que guardará los datos de la solicitud en local storage y mostrará un mensaje de confirmación de la solicitud.
