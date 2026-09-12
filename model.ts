// model.ts — the TypeTasks data model (the typed logic layer).
// This is the single source of truth for what a "task" is and what you can do with one.
// Everything in the UI (app.ts) is built on top of these types, so invalid data can't exist.

// A task can only ever be in ONE of these three states — nothing else.
export type TaskStatus = "todo" | "in-progress" | "done";

// Every task must have EXACTLY this shape. The compiler enforces it everywhere.
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Internal counter so every task gets a unique id.
let nextId = 1;

// Call once when loading saved tasks so new ids don't collide with old ones.
export function seedNextId(tasks: Task[]): void {
  nextId = tasks.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

// Add a new task. It always starts as "todo", and the return type guarantees a valid Task[].
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = { id: nextId++, title, status: "todo" };
  return [...tasks, newTask];
}

// Move a task one step forward: todo -> in-progress -> done.
export function advanceTask(tasks: Task[], id: number): Task[] {
  const next: Record<TaskStatus, TaskStatus> = {
    todo: "in-progress",
    "in-progress": "done",
    done: "done",
  };
  return tasks.map((t) => (t.id === id ? { ...t, status: next[t.status] } : t));
}

// Mark a task done outright.
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}

// Remove a task by id.
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((t) => t.id !== id);
}

// Return only the tasks matching a status. `status` MUST be a valid TaskStatus —
// pass anything outside the union and tsc rejects it before the app runs.
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((t) => t.status === status);
}

// Count tasks in a given status (handy for the header summary).
export function countByStatus(tasks: Task[], status: TaskStatus): number {
  return filterByStatus(tasks, status).length;
}
