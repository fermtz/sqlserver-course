### Identificadores

Los **identificadores** son nombres que representan a una variable, método, clase o interface de un programa.

Los identificadores siguen las siguientes reglas:

- Debe estar formado solo por letras, dígitos u otro caracter permitido (por ejemplo el símbolo "$" o el guión bajo "_" )
-  El primer caracter debe ser una letra o un signo.
-  No se puede usar una **palabra reservada** de Java para denotar un identificador.
-  Java es sensible a mayúsculas y minúsculas.

:-------------------------------------------------------------------------------

### Reglas

Ejemplos válidos:

`numero`  `$variable`  `numero_contador`  `_numero`

Ejemplos no válidos

`2numero`  `/variable`  `%total`

:-------------------------------------------------------------------------------

### Tipado

Java es un lenguaje de **tipado fuerte**, lo cual significa que no se permiten violaciones de los tipos de datos.

Es decir, dado el valor de una variable de un tipo en concreto, no se podrá usar el valor de dicha variable como otro tipo.

:-------------------------------------------------------------------------------

### Tipos de datos

- Enteros
- Coma flotante
- Caracter
- Booleano

:-------------------------------------------------------------------------------

### Tipos de datos - Enteros

| Typo de dato  | Tamaño (bytes)  | Rengo de valores  |
| ------------- |-----------------|-------------------|
| byte          | 1               | -128 a 127        |
| short         | 2               | -32768 a 32767    |
| int           | 4               | -2147483648 a 2147483647 |
| long          | 8               | -9223372036854775808 a 9223372036854775807 |

:-------------------------------------------------------------------------------

### Tipos de datos - Punto flotante

| Typo de dato  | Tamaño (bytes)  | Rengo de valores            |
| ------------- |-----------------|-----------------------------|
| float         | 4               | ± 3.4x10-38 a ± 3.4x1038    |
| double        | 5               | ± 1.8x10-308 a ± 1.8x10308  |

:-------------------------------------------------------------------------------

### Tipos de datos - Caracter

El tipo de datos especializado en caracteres es el `char`.

Java utiliza el código *Unicode* de 16 bits a diferencia de la mayor parte de lenguajes clásicos, como tal es el caso de C y C++, que utilizan *ASCII* de 8 bits.

:-------------------------------------------------------------------------------

### Tipos de datos - Boleano

Java contiene el tipo de dato **boolean**, en el cuál solo se pueden almacenar los valores `true` o `false`.
