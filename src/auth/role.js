export const userRole = async (email) => {
  const url = `http://localhost:5000/user/${email}`;

  const response = await fetch(url);

  const user = await response.json();
  return user?.role;
};
