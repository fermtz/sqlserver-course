### Elementos de la sintaxis de T-SQL
- Directivas de proceso por lotes
- Comentarios
- Identificadores
- Tipos de datos
- Variables
- Funciones del sistema
- Operadores
- Expresiones
- Elementos del lenguaje de control de flujo
- Palabras clave reservadas

:-------------------------------------------------------------------------------

### Directivas de procesamiento por lotes

- `GO`

Envía lotes de instrucciones de Transact-SQL a las herramientas y utilidades. 
No se trata, realmente, de una instrucción de Transact-SQL; solamente es una instrucción de utilería para la ejecución del lote.

- `EXEC`

Ejecuta una función definida por el usuario, un procedimiento de sistema, un procedimiento almacenado definido por el usuario o un procedimiento almacenado extendido. 
Controla la ejecución de una cadena de caracteres dentro de un lote de Transact-SQL.

:-------------------------------------------------------------------------------

### Comentarios

- Comentarios de línea
```
SELECT  ProductName,
        (UnitsInStock - UnitsOnOrder), -- Calcula el inventario (comentario)
        SupplierID
FROM    Products;
```

- Comentarios de bloque

```
/* 
 Este código devuelve todas las filas de la tabla
 products y muestra el precio por unidad, el precio
 aumentado en un 10 por ciento y el nombre del producto. 
*/
SELECT  UnitPrice, (UnitPrice * 1.1), ProductName 
FROM    Products;
```

:-------------------------------------------------------------------------------

### Identificadores

Identificadores estándar

- El primer carácter debe ser un carácter alfabético
- Otros caracteres pueden incluir letras, números o símbolos
- Los identificadores que comienzan con un símbolo tienen usos especiales

Identificadores delimitados

- Se utilizan cuando los nombres contienen espacios incrustados
- Se utilizan cuando partes de los nombres incluyen palabras reservadas
- Deben encerrarse entre corchetes ([ ]) o dobles comillas (" ")

:-------------------------------------------------------------------------------

### Directrices de denominación para los identificadores

- Poner nombres cortos
- Utilizar nombres significativos cuando sea posible
- Utilizar una convención de denominación clara y sencilla
- Utilizar un identificador que distinga el tipo de objeto (vistas, procedimientos almacenados, etc)
- Hacer que los nombres de los objetos y de los usuarios sean únicos, por ejemplo: tblSales y fnSales

:-------------------------------------------------------------------------------

### Tipos de datos

- Números
- Fechas
- Caracteres
- Binario
- Identificadores únicos (GUID)
- Variaciones de SQL
- Texto e imagen
- Tablas
- Cursores
- Tipos de datos definidos por el usuario

:-------------------------------------------------------------------------------

### Variables

- Variable definida por el usuario en una instrucción `DECLARE`y anteponer `@` al nombre de la variable
- Valores asignados con una instrucción `SET` o `SELECT`
- Las variables tienen el ámbito local o global

:-------------------------------------------------------------------------------

### Operadores

- Tipos de operadores
- Aritmético
- Comparación
- Concatenación de cadenas
- Lógico

:-------------------------------------------------------------------------------

### Expresiones

- Combinación de símbolos y operadores
- Evaluación de valores escalares simples
- El tipo de datos del resultado depende de los elementos que forman la expresión

:-------------------------------------------------------------------------------

### Ejemplo: Elementos del lenguaje de control de flujo

```
DECLARE @n tinyint
SET @n = 5
IF (@n BETWEEN 4 and 6)
 BEGIN
  WHILE (@n > 0)
   BEGIN
    SELECT  @n AS 'Number'
      ,CASE
        WHEN (@n % 2) = 1
          THEN ‘ODD'
        ELSE ‘EVEN'
       END AS 'Type'
    SET @n = @n - 1
   END
 END
ELSE
 PRINT ‘NO ANALYSIS‘
GO
```