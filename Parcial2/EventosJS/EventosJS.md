# Eventos JS

## **Captura**

El estándar de eventos del DOM describe 3 fases de la propagación de eventos:

1. Fase de captura – el evento desciende al elemento.

2. Fase de objetivo – el evento alcanza al elemento.
   
3. Fase de propagación – el evento se propaga hacia arriba del elemento.

Aquí está la imagen de un clic en td dentro de una tabla, tomada desde la especificación:

![Error](Imagenes/EjemploCaptura.png "Título alternativo")

Se explica así: por un clic en td el evento va primero a través de la cadena de ancestros hacia el elemento (fase de captura), luego alcanza el objetivo y se desencadena ahí (fase de objetivo), y por último va hacia arriba (fase de propagación), ejecutando los manejadores en su camino

Para atrapar un evento en la fase de captura, necesitamos preparar la opción capture como true en el manejador:

![Error](Imagenes/EjemploCaptura2.png "Título alternativo")

Hay dos posibles valores para la opción capture:

- Si es *false* (por defecto), entonces el manejador es preparado para la fase de propagación.
- Si es *true*, entonces el manejador es preparado para la fase de captura.

Es de notar que mientras formalmente hay 3 fases, la 2da fase (“la fase de objetivo”: el evento alcanzó el elemento) no es manejada de forma separada; los manejadores en ambas fases, la de captura y propagación, se disparan en esa fase.

## **Propagación**

Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.

### *Ejemplo*

Digamos que tenemos 3 elementos anidados FORM > DIV > P con un manejador en cada uno de ellos:

![Error](Imagenes/EjemploPropagacion.png "Título alternativo")

Un clic en el elemento del interior p primero ejecuta onclick:

1. En ese p.
   
2. Luego en el div de arriba.
   
3. Luego en el form de más arriba.
   
4. Y así sucesivamente hasta el objeto document.

![Error](Imagenes/EjemploPropagacion2.png "Título alternativo")

Así si hacemos clic en p, entonces veremos 3 alertas: p → div → form.

Este proceso se conoce como “propagación” porque los eventos “se propagan” desde el elemento más al interior, a través de los padres, como una burbuja en el agua.


**_Referencias:_**

https://es.javascript.info/bubbling-and-capturing

https://www.freecodecamp.org/espanol/news/propagacion-de-eventos-y-captura-de-eventos-en-javascript-y-react/