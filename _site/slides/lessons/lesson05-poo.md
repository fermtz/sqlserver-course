### Introducción a la POO

- Clases, objetos y variables de instancia
- Declaración de Clases y Objetos
- Implementar comportamientos de una Clase
- Llamádas de métodos
- Diferencias entre variables
- Utilizar constructores
- Primitivos y referencia

:-------------------------------------------------------------------------------

### Programación orientada a objetos

La Programación Orientada a Objetos intenta hacer analogía del mundo real. En el mundo real, podemos identificar objetos, cada uno de estos objetos tiene comportamientos y características.

:-------------------------------------------------------------------------------

### Clases

Una clase es una especie de molde o prototipo para construir un objeto. Dicha clase podrá contener definiciones de comportamiento y características.

Todo esto se podrá utilizar a través de un objeto.

:-------------------------------------------------------------------------------

### Clases (sintaxis)

<div class="import-bs"></div>

```java
class NombreClase {

}
```

<hr class="breakline">

<div class="import-bs"></div>

```java
modificadorDeAcceso class NombreClase {
  //properties
  //methods
}
```

:-------------------------------------------------------------------------------

### Objetos

En general, decimos que un objeto es la instancia de una clase.

Ésto refiere a que, un objeto es una representación en un punto dado de dicha clase.

:-------------------------------------------------------------------------------

### Objetos (sintaxis)

<div class="import-bs"></div>

```java
  NombreDeClase objeto = new NombreDeClase();
```

<hr class="breakline">

<div class="import-bs"></div>

```java
NombreDeClase objeto = new NombreDeClase(param1, param2, …, paramN);
```

:-------------------------------------------------------------------------------

### Instanciamiento

El instanciamiento de una clase se produce cuando se hace uso de la palabra reservada `new`. Generalmente, en ese momento declaramos una variable del tipo de una clase que será la representación de nuestro objeto.

Al instanciar una clase, obtenemos una versión encapsulada, con cierto estado, de dicha clase.

A su vez, se encapsularán todos los comportamientos y características de dicha clase.

:-------------------------------------------------------------------------------

### Propiedades

Las propiedades (variables o atributos) de una clase, proveen al objeto (instancia de clase) de características particulares y éstas a su vez diferencian al objeto de otros, incluyendo si son de la misma clase.

:-------------------------------------------------------------------------------

### Propiedades (sintaxis)

<div class="import-bs"></div>

```java
  modificadorDeAcceso NombreClase {
    modificadorDeAcceso tipo nombre; //propiedad
  }
```

Con éste enfoque se provee al objeto de mayor flexibilidad: `objeto.propiedad`;

:-------------------------------------------------------------------------------

### Métodos

Un método es una operación para definir un comportamiento de una clase. Estos determinarán las acciones que pueden realizar los objetos.

:-------------------------------------------------------------------------------

## Métodos (sintaxis)

<div class="import-bs"></div>

```java
modificadorDeAcceso tipoRetorno nombreDeMetodo()
{
	//sentences
}
```

<hr class="breakline">

<div class="import-bs"></div>

```java
modificadorDeAcceso tipoRetorno nombreDeMetodo(param1, param2, …, paramN)
{
  //sentences
}
```

Al igual que las propiedades, los métodos pueden invocarse medinate un punto: `objeto.metodo()`;

:-------------------------------------------------------------------------------

### Modificadores de acceso

Los modificadores de acceso determinan que otras clases pueden usar una propiedad o método en particular.

| Modificador |	Class |	Package |	Subclass | World |
| ---|---| ---|---|---|
| public | Y | Y	| Y	 | Y |
| protected	| Y	| Y	| Y |	N |
| no modifier| Y |	Y | N	| N |
| private| Y | N | N | N |

:-------------------------------------------------------------------------------

### POO (ejemplo)

```java
  public class Libro{
    String nombre;
  }
```

<hr class="breakline">

```java
public static void main(String[] args) {
  Libro miLibro = new Libro();
  Libro tuLibro = new Libro();

  miLibro.nombre = "Cómo programar en JAVA";
  tuLibro.nombre = "Como programar en Scala";

  System.out.println("Te presto el libro de "
    + miLibro.nombre
    + ", y tu me prestas el de "
    + tuLibro.nombre);
}
```

:-------------------------------------------------------------------------------

### Métodos constructores

Un método constructor es un método que se encuentra dentro de un objeto y está diseñado especialmente para asegurar la correcta creación del objeto.

Al escribir la palabra reservada `new`, en tiempo de ejecución, se llama al constructor.

:-------------------------------------------------------------------------------

### Métodos constructores (ejemplo)

```java
  public class Usuario{
  	String correo;

  	public Usuario(string correo){
  			this.correo = correo;
  	}
  }
```

<hr class="breakline">

```java
Usuario usuario = new Usuario("mig.salazars@gmail.com");
```

:-------------------------------------------------------------------------------

### Métodos estáticos

En algunas ocasiones se necesitará, poseer el comportamiento de una clase sin tener que instanciarla. Los métodos estáticos nos proveen de ésta funcionalidad.

Para llamar un método estático de una clase, bastará con llamar a la clase seguida del método: `Clase.metodoEstatico()`.

:-------------------------------------------------------------------------------

### Métodos estáticos (ejemplo)

```java
  public class Usuario {

    public static void mensaje()  {
      return "Este mensaje será el mismo para todos los usuarios";
    }

  }
```

<hr class="breakline" >

```java
  Usuario.mensaje();
```

:-------------------------------------------------------------------------------

### Métodos get-set

A menudo, necesitaremos ocultar propiedades de las clases. Para esto, debemos tener métodos que nos permitan inicializar las propiedades ocultas.

No es necesario que estos métodos se les llame get y set. Sin embargo, por convención se utiliza de ésta manera.

:-------------------------------------------------------------------------------

### Métodos get-set (ejemplo)

```java
  public class Curso {
  	private String nombre;

  	public void setNombre(String nombre) {
  		this.nombre = nombre;
  	}

  	public String getNombre() {
  		return this.nombre;
  	}

  	public void toString() {
  		System.out.println("Bienvenido al CURSO: " + getNombre());
  	}
  }
```

:-------------------------------------------------------------------------------

### Sobrecarga de métodos

En ocasiones será funcional poseer métodos con el mismo nombre, en la misma clase.

Esto será posible siempre y cuando se tengan diferentes parámetros.

:-------------------------------------------------------------------------------

### Sobrecarga de métodos (ejemplo)

```java
  public class Operaciones
  {
    public int cuadrado(int n) {
      return n*n;
    }

    public float cuadrado(float n) {
      return n*n;
    }
  }
```

:-------------------------------------------------------------------------------

### Ejercicios

Pendiente
