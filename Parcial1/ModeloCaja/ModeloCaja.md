Nombre: **Aldo Ezequiel Rodriguez Mendez**

N°Control: **19100243**

Materia: **Programación Web**


#MODELO DE CAJA DE HTML

El modelo de caja es la manera en que se representan todos los elementos html en una página. En CSS, en general, hay dos tipos de cajas: cajas en bloque y cajas en línea. Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página:

Si una caja se define como un **bloque**, se comportará de las maneras siguientes:

    -La caja fuerza un salto de línea al llegar al final de la línea.
   	-La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.
    -Se respetan las propiedades *width* y *height*.
    -El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.

Si una caja tiene una visualización externa de tipo **inline**, entonces:

    -La caja no fuerza ningún salto de línea al llegar al final de la línea.
    -Las propiedades width y height no se aplican.
    -Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
    -Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.

Sin embargo, las cajas también tienen un tipo de visualización interna, que determina cómo se disponen los elementos dentro de esa caja. De forma predeterminada, los elementos dentro de una caja se presentan en flujo normal, lo que significa que se comportan como otros elementos de tipo en bloque o en línea (como se explicó anteriormente).

![Image text](Modelo%20Caja.jpg)