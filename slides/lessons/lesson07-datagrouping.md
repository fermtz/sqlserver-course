### Agrupar y resumir datos

- Presentación de los primeros n valores con `TOP`
- Uso de funciones de agregado
- Agrupación mediante `GROUP BY`
- Generación de valores de agregado dentro de los conjuntos de resultados


:-------------------------------------------------------------------------------

### Selección con `TOP`

- Presenta sólo las *n* primeras filas de un conjunto de resultados
- Especifica si se desean recuperar los ultimos o primeros n elementos con `ORDER BY` (`ASC` y `DSC`)
 
 ```
 SELECT     TOP 5 
            OrderId, 
            ProductId, Quantity
 FROM       OrderDetails
 ORDER BY   Quantity DESC
 ```

:-------------------------------------------------------------------------------

### Funciones de agregado

- `AVG`: Promedio de un conjunto de datos
- `COUNT`: Número de valores dentro de un conjunto de datos
- `MAX`: Valor mas alto en el conjunto de datos
- `MIN`: Valor mas pequeño en un conjunto de datos
- `SUM`: Valor total de suma en un conjnuto numérico
- `STDEV`: Desviación estándar
- `STDEVP`: Desviación estándar poblacional
- `VAR`: Varianza estadística
- `VARP`: Varianza poblacional
 
