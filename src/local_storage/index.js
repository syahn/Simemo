export function loadState() {
  try {
    const serializedState = localStorage.getItem('textState');
    if (serializedState === null) {
      return '';
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
