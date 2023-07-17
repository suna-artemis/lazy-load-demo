export interface Delay {
  (callback: () => void, wait?: number): void;
}

export const delay: Delay = (callback, wait = 300) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, wait);
  }).then(() => {
    callback();
  });
