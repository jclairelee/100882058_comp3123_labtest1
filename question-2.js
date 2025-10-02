// resolves after 500ms
function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "delayed success!" });
    }, 500);
  });
}

// rejects after 500ms
function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ error: "delayed exception!" });
    }, 500);
  });
}

// Call both promises
resolvedPromise()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

rejectedPromise()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
