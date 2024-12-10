export function createHowMuchScreenCovers({ elementId, callback }) {
  return function () {
    const windowHeight = window.innerHeight;
    const rect = document.getElementById(elementId).getBoundingClientRect().top;

    const percentOfCardPosition = ((windowHeight - rect) * 100) / windowHeight;
    if (callback) {
      callback(percentOfCardPosition);
    }
  };
}
