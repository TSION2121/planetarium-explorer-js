export async function fetchUserData() {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
}
