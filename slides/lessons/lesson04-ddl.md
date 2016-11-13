### T-SQL /	 DDL

Lenguaje de Definición de Datos (Data Definition Language): Es el conjunto de comandos y sentencias de SQL encargadas de la construcción y definición de estructuras en SQL Server. Las sentencias de definición de datos mas utilizadas son:

- CREATE
- ALTER
- DROP
- TRUNCATE TABLE

<p class="annotation">
[Ver todas las sentencias](https://msdn.microsoft.com/en-us/library/ff848799.aspx)
</p>

:-------------------------------------------------------------------------------

### CREATE

La sentencia CREATE se utiliza para definir nuevos objetos. Por ejemplo, para crear una tabla:

	CREATE TABLE [database_name].[schema_name].[table_name]
	(
		column_name_1 datatype,
		column_name_2 datatype,
		...
		column_name_n datatype,
	);

:-------------------------------------------------------------------------------

### CREATE - Ejemplo

Crear una nueva tabla:

	CREATE TABLE [RH].[dbo].[Empleados]
	(
		NumeroEmpleado INT,
		Nombre VARCHAR(100),
		Apellidos NVARCHAR(200),
		EsBase BIT,
	);

:-------------------------------------------------------------------------------

### ALTER

La sentencia ALTER se utiliza para modificar la definición de algun objeto.:

	--Agregar columna
	ALTER TABLE table_name
	ADD 		column_name datatype;

	--Eliminar columna
	ALTER TABLE 	table_name
	DROP COLUMN		column_name;

:-------------------------------------------------------------------------------

### ALTER / Ejemplo

Agregar una columna a una tabla:

	-- Agregar columna
	ALTER TABLE 	Empleados
	ADD 			Sueldo DECIMAL(5,2);

	-- Modificar columna
	ALTER TABLE 	Empleados
	ALTER COLUMN 	Sueldo MONEY;

	-- Eliminar columna
	ALTER TABLE 	Empleados
	DROP COLUMN 	Sueldo DECIMAL(5,2);
