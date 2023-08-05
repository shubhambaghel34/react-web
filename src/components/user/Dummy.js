useEffect(() => {
    // The arrow function inside useEffect is the effect function.
    // It will be executed after the component has been rendered.

    // Put your side effect logic here, such as API calls, subscriptions, or event listeners.

    // If you need to perform cleanup tasks when the component unmounts,
    // return a cleanup function from the effect function.

    return () => {
      // This cleanup function will be executed when the component is about to unmount.
      // Perform cleanup tasks here, like unsubscribing from subscriptions or removing event listeners.
    };
  }, []); // The second argument to useEffect is an array of dependencies.

  // If the array is empty (like in this example), the effect runs only once after the initial render.
  // If you want the effect to run whenever specific values change, list those values in the array.
