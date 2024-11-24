export function createIsVisible({ elementId, margin, callback }) {
  return function () {
    const windowHeight = window.innerHeight;
    const rect = document
      .getElementById(elementId)
      .getBoundingClientRect().bottom;
    if (windowHeight - rect - margin > 0 && callback) {
      callback(true);
    }
  };
}
