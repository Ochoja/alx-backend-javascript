export default function handleResponseFromAPI(promise) {
  promise.then(
    () => {
      return {
        status: 200,
        body: 'success',
      };
    },
    () => {
      return Error();
    }
  ).then(() => {
    console.log('Got a response from the API');
  });
}
