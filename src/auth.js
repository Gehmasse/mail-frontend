export function login(token) {
  localStorage.setItem("token", token);
}

export function logout() {
  localStorage.clear();
}
