
export default function logout(a) {
    localStorage.setItem("token", "");
     a(null);
}

