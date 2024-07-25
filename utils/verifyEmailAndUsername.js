const verifyEmailAndUsername = (data) => {
  const { username, email } = data;
  if (email && username) return { email, username };
  else if (email) return { email };
  else if (username) return { username };
  else return null;
};
export default verifyEmailAndUsername;
