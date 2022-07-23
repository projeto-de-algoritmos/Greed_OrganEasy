import heapSort from "./heapTasks";

const scheduleTasks = (tasks) => {
  var ordered_tasks = heapSort(tasks);
  var time = 0;

  const scheduled_tasks = ordered_tasks.map(task => {
    let is_late = false;
    let end_task = time + task.runtime;
    end_task > task.delivery ? is_late = true : is_late = false;
    const scheduled_task = {
      ...task,
      start: time,
      end: end_task,
      is_late: is_late,
      delay: end_task - task.delivery // tempo entrege - tempo da entrega. 
      //Caso for negativo o valor signfica que nao atrasou pelo contrario, adiantou a tarefa
    }
    time = end_task;
    return scheduled_task;
  })

  return scheduled_tasks;
}

export default scheduleTasks;