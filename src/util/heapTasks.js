const buildMaxHeap = (tasks) => {
  let i = Math.floor(tasks.length / 2 - 1);
  while (i >= 0) {
    heapify(tasks, i, tasks.length);
    i -= 1;
  }
}

const heapify = (heap, i, max) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;
    if (leftChild < max && heap[leftChild].delivery > heap[index].delivery) {
      index = leftChild;
    }
    if (rightChild < max && heap[rightChild].delivery > heap[index].delivery) {
      index = rightChild;
    }
    if (index === i) {
      return;
    }
    swap(heap, i, index);
    i = index;
  }
}

const swap = (tasks, firstItemIndex, lastItemIndex) => {
  const temp = tasks[firstItemIndex];
  tasks[firstItemIndex] = tasks[lastItemIndex];
  tasks[lastItemIndex] = temp;
}

const heapSort = (tasks) => {
  buildMaxHeap(tasks);
  var lastElement = tasks.length - 1;

  while (lastElement > 0) {
    swap(tasks, 0, lastElement);
    heapify(tasks, 0, lastElement);
    lastElement -= 1;
  }

  return tasks;
}
//TESTANDO ORDENAÇÃO
/* const tasks = [{
  name: 'estudar',
  delivery: 17,
  runtime: 2,
}, {
  name: 'cantar',
  delivery: 10,
  runtime: 4,
}, {
  name: 'tocar',
  delivery: 8,
  runtime: 4,
}, {
  name: 'programar',
  delivery: 1,
  runtime: 1,
},] */

//console.log(heapSort(tasks))
export default heapSort;