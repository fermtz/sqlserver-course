### DML

Las sentencias de manipulación de datos mas utilizadas son:

- `SELECT`
- `INSERT`
- `DELETE`
- `UPDATE`

<p class="annotation">
	[Ver todas las sentencias](https://msdn.microsoft.com/en-us/library/ff848766.aspx)
</p>

:-------------------------------------------------------------------------------

### SELECT

La sentencia `select` devuelve un conjunto de registros de una o más tablas:

```
SELECT 	column_1, column_2, column_3, column_n
FROM 	table AS 'alias'
WHERE 	column_X = 'value';
```

*La cláusula `where` es opcional*
:-------------------------------------------------------------------------------

### UPDATE

La sentencia `update`, cambia o modifica los registros existentes en alguna tabla.

```
UPDATE 	table
SET 	column_to_update = 'value to update'
WHERE 	column_condition = 'value';
```

*Si no se utiliza una condición (WHERE) el update afectará a todos los registros.*

:-------------------------------------------------------------------------------

### INSERT

La sentencia INSERT agrega uno o más registros en una tabla.

- Puede estar formada por valores fijos
- Puede insertar una tabla completa obtenida mediante un select.


```
INSERT INTO table
		(column_1, column_2)
VALUES 	
		('string value', 5);
```


:-------------------------------------------------------------------------------

### DELETE

La sentencia Delete  remueve o elimina uno o mas registros de una tabla.

- Si no se utiliza la cláusula WHERE, se eliminará todos los registros de la tabla.

```
DELETE
FROM 	table
WHERE 	column_x = 'value';
```

:-------------------------------------------------------------------------------

### Cláusulas

Cada una de las sentencias anteriores (excepto INSERT) puede combinarse con algunas cláusulas opcionales, por ejemplo:

- *WHERE*: Especifica que registros deben obtenerse
- *GROUP BY*: Agrupa registros comunes.
- *HAVING*: Selecciona entre los grupos definidos del group by.
- *ORDER BY*: Ordena los registros
