const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // ¡Escribe tu código debajo de esta línea!
   //* ¿Pueden agregar un solo número a una fila existente?
    arr[0].push(10)

   //  * ¿Pueden agregar una fila completa de números?
   arr.push([30,31,32,33,34,35,36,37,38,39])

  //  * ¿Pueden eliminar un solo número de una sola fila?
   arr[1].splice(0, 1)

  //  * ¿Pueden invertir una de las filas sin afectar a las demás?
   arr[3].reverse()

  console.log(arr)
  
  // ¡Escribe tu código encima de esta línea!