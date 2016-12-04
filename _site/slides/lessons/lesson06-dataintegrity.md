### Integridad de datos


:-------------------------------------------------------------------------------

### Técnicas

<div class="image">
  <img class="stretch no-border" data-src="img/dataintegrity.png"/>
</div>

:-------------------------------------------------------------------------------

### Integridad en T-SQL

| Integridad  | Restricción en SQL  |
| ------------- |-----------------|
| Dominio       | `DEFAULT` , `CHECK` , |
| Entidad       | `PRIMARY KEY` , `UNIQUE` , |
| Referencial   | `FOREIGN KEY` , `CHECK` ,  |

:-------------------------------------------------------------------------------

### Restricciones - DEFAULT

- Solo se aplica a las restricciones `INSERT`
- Solo una restricción `DEFAULT` por columna
- No se puede utilizar con la propiedad `IDENTITY` o el tipo de datos rowversion
- Permite que se especifiquen algunos valores proporcionados por el sistema

```
ALTER TABLE dbo.Customers
ADD   CONSTRAINT DF_contactname DEFAULT 'UNKNOWN' 
FOR   ContactName 
```

:-------------------------------------------------------------------------------

### Restricciones - CHECK

- Se utilizan con las instrucciones `INSERT` y `UPDATE`
- Pueden hacer referencia a otras columnas en la misma tabla
- No pueden:
  * Utilizarse con el tipo de datos `rowversion`
  * Contener subconsultas

```
ALTER TABLE dbo.Employees
ADD   CONSTRAINT CK_birthdate
CHECK (BirthDate > '01-01-1900' AND BirthDate < getdate())
```

:-------------------------------------------------------------------------------

### Restricciones - PRIMARY KEY

- Sólo una restricción PRIMARY KEY por tabla
- Los valores deben ser exclusivos
- No se permiten valores nulos
- Crea un índice exclusivo en las columnas especificadas

```
ALTER TABLE dbo.Customers 
ADD   CONSTRAINT PK_Customers 
PRIMARY KEY NONCLUSTERED (CustomerID)
```

:-------------------------------------------------------------------------------

### Restricciones - UNIQUE

- Permite un valor nulo
- Permite varias restricciones UNIQUE en una tabla
- Definidas con una o más columnas
- Exigida con un índice único

```
ALTER TABLE dbo.Suppliers 
ADD   CONSTRAINT U_CompanyName UNIQUE NONCLUSTERED (CompanyName)
```

:-------------------------------------------------------------------------------

### Restricciones FOREIGN KEY

- Deben hacer referencia a una restricción PRIMARY KEY o UNIQUE
- Proporcionan integridad referencial de una o de varias columnas
- No crean índices automáticamente
- Los usuarios deben tener permisos SELECT o REFERENCES en las tablas a las que se hace referencia
- Usa sólo la cláusula REFERENCES en la tabla de ejemplo:

```
ALTER TABLE dbo.Orders 
ADD CONSTRAINT FK_Orders_Customers
FOREIGN KEY (CustomerID) 
REFERENCES dbo.Customers(CustomerID)
```
