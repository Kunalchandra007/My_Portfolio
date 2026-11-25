type Task = {
  read: () => void;
  write: () => void;
};

const tasks = new Set<Task>();
let queued = false;

const flush = () => {
  queued = false;
  tasks.forEach((task) => task.read());
  tasks.forEach((task) => task.write());
};

export const refreshScrollFrame = () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(flush);
};

const onScroll = () => refreshScrollFrame();

/** One scroll frame for the whole page: every read, then every write. */
export const bindScrollFrame = (read: () => void, write: () => void) => {
  const task = { read, write };
  tasks.add(task);
  if (tasks.size === 1) window.addEventListener('scroll', onScroll, { passive: true });
  refreshScrollFrame();
  return () => {
    tasks.delete(task);
    if (tasks.size === 0) window.removeEventListener('scroll', onScroll);
  };
};
