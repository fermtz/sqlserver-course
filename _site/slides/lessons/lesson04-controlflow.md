### Estructuras de control

Las instrucciones en un programa se ejecutan una después de otra (en sentido estricto, en un solo recurso).

Diferentes instrucciones permiten indicar que la siguiente instrucción a una anterior, al ejecutarse, tal vez no sea la siguiente secuencia

:-------------------------------------------------------------------------------

### Condicional

Las instrucciones de control condicional son tres:
- if
- if / else
- switch

:-------------------------------------------------------------------------------

### Condicional - if

La sentencia `if` es la mas básica estructura de control.

Esta sentencia le indica al programa que debe ejecutarse cierta porción de código siempre y cuando alguna condición evaluada sea verdadera.

:-------------------------------------------------------------------------------

### Condicional - if (sintaxis)

<div class="image">
  <img class="stretch no-border" data-src="img/if-else.png"/>
</div>

<hr class="breakline">

<div class="import-bs"></div>

```java
  if(condicion)
  {
    //sentences
  }
```

:-------------------------------------------------------------------------------

### Condicional - if (ejemplo)

```java
  if(a == b) {
  	System.out.println("A y B son iguales");
  }
```

:-------------------------------------------------------------------------------

### Condicional - if / else (sintaxis)

<div class="image">
  <img class="stretch no-border" data-src="img/if-else.png"/>
</div>

<hr class="breakline">

<div class="import-bs"></div>

```java
  if(condicion) {
  	//sentences
  }
  else {
  	//sentences
  }
```

:-------------------------------------------------------------------------------

### Condicional - if / else (ejemplo)

```java
  if(a == b) {
  	System.out.println("A y B son iguales");
  }
  else {
  	System.out.println("A y B no son iguales");
  }
```

:-------------------------------------------------------------------------------

### Condicional - Anidaciones if / else

```java
  if(a == b) {
  	System.out.println("A y B son iguales");
  }
  else {
    	if(a > b) {
    	   System.out.println("A es mayor a B");
      }
      else {
    	   System.out.println("A y B no son iguales");
    	}
  }
```

:-------------------------------------------------------------------------------

### Condicional - switch

En ocasiones se requerirá evaluar muchas condiciones a la vez y ésta última estará en función de una sola variable. En estos casos, es más óptimo elegir la instrucción `switch`.

:-------------------------------------------------------------------------------

### Condicional - switch (sintaxis)

<div class="image">
  <img class="stretch no-border" data-src="img/switch.png"/>
</div>

:-------------------------------------------------------------------------------

<hr class="breakline">

<div class="import-bs"></div>

```java
  switch(variable int o char){
  	case const1:
  		//sentences
  	break;
  	case const2:
  	 //sentences
  	break;
  	case const3:
  	 //sentences
  	break;
  	default:
  		//sentences
  };
```

:-------------------------------------------------------------------------------

### Condicional - switch (ejemplo)

```java
  switch(a)
  {
    case 1 : {
      System.out.println("El valor de a es 1");
    } break;

    case 2 : {
      System.out.println("El valor de a es 2");
    } break;

    case 3 : {
      System.out.println("El valor de a es 3");
    } break;

    default : {
      System.out.println("A tiene un valor mayor a 3");
    }
  }
```

:-------------------------------------------------------------------------------

### Condicional - switch (reglas)

- Solo se puede usar como variable de condición, una variable de tipo entero o de tipo char.
- Los valores a condicionar sobre las variables de tipo char, deben ir con comillas simples `'valor'`.

:-------------------------------------------------------------------------------

### Ciclos

Las estructuras de control de repetición, son un mecanismo para ejecutar una o mas veces un bloque de código en función de una condición.

- `for`
- `while`
- `do-while`

:-------------------------------------------------------------------------------

### Ciclos - while

La instrucción `while`, como su nombre lo indica, ejecuta un bloque de código **mientras** alguna condición **sea verdadera**.

Generalmente la utilizaremos cuando se desconozca la cantidad de iteraciones a producir.

Éste tipo de repetición requiere:
- Una variable de control
- El valor inicial de la variable de control
- El incremento (o decremento) con el que se modifica la variable de control cada vez que pasa por el ciclo.
- La condición de continuación del ciclo.

:-------------------------------------------------------------------------------

### Ciclos - while (sintaxis)

<div class="import-bs"></div>

```java
while (condición)
{
	//tasks
}
```

:-------------------------------------------------------------------------------

### Ciclos - while (ejemplo)

```java
  int a = 1;

  //Se evalua la condición
  while(a != 2013)
  {
    //Si es diferente al valor indicado, se imprime un mensaje
    System.out.println("Falta menos para llegar al 2013");

    //Se incrementa el valor de a
    a++;
  }
```

:-------------------------------------------------------------------------------

### Ciclos - for

Si se conoce la cantidad exacta de iteraciones (no solo en número, si no también conocida dentro de una variable) generalmente se utilizará ésta expresión.

:-------------------------------------------------------------------------------

### Ciclos - for (sintaxis)

<div class="import-bs"></div>

```java
  for (inicialización; condición; incremento)
  {
  	//sentences
  }
```

:-------------------------------------------------------------------------------

### Ciclos - for (ejemplo)

```java
  //Se inicializa la variable i en cero
  //Se evalúa la condición, si es verdadera se ejecutan las instrucciones entre llaves
  //Al terminar, se incrementa en uno
  //Se repite hasta que la condición i<10 sea falsa.
  //En ese momento el flujo del programa sigue su curso.
  for(int i = 0; i<10 ; i++)
  {
    System.out.println(i);
  }
```

:-------------------------------------------------------------------------------

### Ciclos - do-while

El `do-while` resulta muy similar al `while`, sin embargo, el `do-while` asegura que el bloque de código a repetir se ejecutará **por lo menos una vez**.

:-------------------------------------------------------------------------------

## Ciclos - do-while (sintaxis)

<div class="import-bs"></div>

```java
do {
	//sentences
} while(condicion);
```

:-------------------------------------------------------------------------------

### Ciclos - do-while (ejemplo)

```java
  int i = 0;

  do {
    System.out.println("El valor de i es: " + i);
    i++;
  } while(i <= 10);
//output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

:-------------------------------------------------------------------------------

### Flujo alterno

Existen instrucciones que nos servirán para establecer flujos que *rompen* con las reglas de las estructuras de control.

:-------------------------------------------------------------------------------

### Flujo alterno - break

Es utilizada cuando se requiere detener por completo un ciclo, o dicho de otra manera, cuando se requiere *romper* con la iteración actual.

:-------------------------------------------------------------------------------

### Flujo alterno - break (ejemplo)

```java
for(int i = 0; i < 10 ; i++) {
	System.out.println( i );
	if( i == 5)
	break;
}
//El for se detendrá cuando i sea igual a 5,
//dado que existe un condicional el cual si es verdadero
//se ejecuta una instrucción break
```



:-------------------------------------------------------------------------------

### Flujo alterno - continue

Es utilizada cuando solamente queremos dejar la iteración actual del ciclo y pasar a la siguiente itereación.

La iteración, es decir, las tareas dentro de ese bloque de código no necesitan estar completas antes de generar un `continue`.

:-------------------------------------------------------------------------------

### Flujo alterno - continue (ejemplo)

```java
  for(int i = 0; i<10 ; i++) {
    if( i == 5)
      continue;

    //Cuando i sea igual a 5 no se imprimirá el valor de i en la consola
    System.out.println(i);
  }
```

:-------------------------------------------------------------------------------

### Ejercicios
