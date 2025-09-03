# Laboratorio de Arrays JS

## Requisitos previos

Editor de código (ej. VS Code).

Node.js instalado (para ejecutar programas en la terminal).

## Preparación

Clonar el respositorio
```bash
git clone sshurl
```
Moverse al repositorio clonado
```bash
cd nombreDelRepo
```

Instalar las dependencias
```bash
npm install
```
Abrir en vscode
```bash
code .
```
Ejecutar el archivo para ver lo que hace tu código
```bash
node --watch nombreArchivo
```
## Instrucciones
Los arrays son una estructura de datos simple usada en todas partes de la programación.  
Existen muchas formas de interactuar con arrays en JavaScript.

**Hoy, estarán explorando arrays y enseñándose a sí mismos diferentes métodos para manipularlos.**

Para cada una de estas tareas, escriban su código directamente en el archivo de la tarea – ¡los scripts de evaluación revisarán lo que hayan escrito!

## Tareas

1. Usen el método `arr.push()` para llenar un array vacío con los números del 1 al 20, en orden.

2. Usen el método `arr.reverse()` para invertir el orden del array dado.

3. Usen el método `arr.splice()` para insertar el número faltante en el array dado en la posición correcta.

4. Usen el método `arr.splice()` para eliminar uno de los dos números duplicados en el array dado.

## Tareas Extra

Si han completado las tareas anteriores, prueben las siguientes tareas extra como un reto adicional:

5. Usen `join()` en el array dado para imprimir una cadena de números separada solo por comas – ¡sin espacios!

6. Usen `concat()` para unir los dos arrays dados, arr1 y arr2, en orden, y luego impriman el nuevo array que se crea.

7. Una matriz es un array de arrays, que representa una cuadrícula con filas y columnas.  
   Usen esta tarea para experimentar con matrices:
   * ¿Pueden agregar un solo número a una fila existente?
   * ¿Pueden agregar una fila completa de números?
   * ¿Pueden eliminar un solo número de una fila específica?
   * ¿Pueden invertir una de las filas sin afectar a las demás?

## Test

Tus tareas deberán pasar los siguientes tests

1. task 1: Deberá tener los números del 1 al 20 en orden y el array debera tener un length de 20

2. task 2: Deberá tener los números del 1 al 16 en orden ascendente y un length de 16

3. task 3: Deberá tener el numero 8 en el indice 7 y un length de 12

4. task 4: No contiene ningun elemento duplicado

### Ejecutar test

```bash
npm run test
```

Si te dice que vitest no es reconocido aún después de haber instalado las dependencias

Instala manualmente vitest

```bash
npm i -D vitest
```
