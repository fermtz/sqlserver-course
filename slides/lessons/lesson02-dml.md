### DML

Lenguaje de Manipulación de Datos (Data Manipulation Language, DML) es un idioma proporcionado por los sistemas gestores de bases de datos que permite a los usuarios de la misma
llevar a cabo las tareas de consulta o modificación de los datos contenidos en las Bases de Datos del Sistema Gestor de Bases de Datos.

El lenguaje de manipulación de datos más popular hoy día es SQL, usado para recuperar y manipular datos en una base de datos relacional.

:-------------------------------------------------------------------------------

### DML

El lenguaje de manipulación de datos utiliza principalmente verbos para llevar a cabo dicha manipulación. Estos verbos son:

- SELECT
- INSERT
- DELETE
- UPDATE

:-------------------------------------------------------------------------------

### SELECT

La sentencia select devuelve un conjunto de registros de una o más tablas.

Contiene un conjunto de cláusulas opcionales:

- WHERE: Especifica que registros deben obtenerse
- GROUP BY: Agrupa registros comunes.
- HAVING: Selecciona entre los grupos definidos del group by.
- ORDER BY: Ordena los registros
- AS: Provee un alias temporal para renombrar tablas o columnas.

:-------------------------------------------------------------------------------

### SELECT

```
SELECT Column1, ColumnN
FROM Table AS foo
WHERE column1 = ‘Value’
```

:-------------------------------------------------------------------------------

### UPDATE

La sentencia update, cambia o modifica los registros existentes en la tabla.
Si no se utiliza una condición (WHERE) el update afectará a todos los registros.

:-------------------------------------------------------------------------------

### UPDATE

```
UPDATE Table
SET Col1 = 1
WHERE Col2 = 'a'
```


:-------------------------------------------------------------------------------

### INSERT

La sentencia INSERT agrega uno o más registros en una tabla.

- Puede estar formada por valores fijos
- Puede insertar una tabla completa obtenida mediante un select.

:-------------------------------------------------------------------------------

### INSERT

```
INSERT INTO Table (Col1, Col2)
VALUES (‘Value', ‘Value');
```

:-------------------------------------------------------------------------------

### DELETE

La sentencia Delete  remueve o elimina uno o mas registros de una tabla.

- Si no se utiliza la cláusula WHERE, se eliminará todos los registros de la tabla.


:-------------------------------------------------------------------------------

### DELETE

```
DELETE FROM Table
WHERE column1=‘Value';
```
