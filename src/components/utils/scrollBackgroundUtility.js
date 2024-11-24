export function createOnScroll({ elementId, callback }) {
  return function () {
    const initialRGB = [15, 23, 42];
    const desiredRGB = [21, 31, 51];

    const windowHeight = window.innerHeight;
    const rect = document.getElementById(elementId).getBoundingClientRect().top;

    const percentOfCardPosition = ((windowHeight - rect) * 100) / windowHeight;

    const red = Math.min(
      Math.max(
        initialRGB[0] +
          (percentOfCardPosition - 20) * (initialRGB[0] / desiredRGB[0] / 4),
        initialRGB[0],
      ),
      desiredRGB[0],
    );
    const green = Math.min(
      Math.max(
        initialRGB[1] +
          (percentOfCardPosition - 20) * (initialRGB[1] / desiredRGB[1] / 4),
        initialRGB[1],
      ),
      desiredRGB[1],
    );
    const blue = Math.min(
      Math.max(
        initialRGB[2] +
          (percentOfCardPosition - 20) * (initialRGB[2] / desiredRGB[2] / 4),
        initialRGB[2],
      ),
      desiredRGB[2],
    );
    const rgb = [red, green, blue];
    if (callback) {
      callback(rgb);
    }
  };
}
