import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthAdminContext } from "../context/AuthAdminProvider";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoginError, setLoginError] = useState(false);
  const { setAuthenticated } = useContext(AuthAdminContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthenticated(true);
        const user = userCredential.user;
        console.log("user", user);
        navigate("/admin");
      })
      .catch((error) => {
        console.log("une erreur du catch handleSubmit");
        setLoginError(true);
      });
  };
  return (
    <div className="auth-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Votre email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoginError && (
            <Form.Text className="text-danger">
              Vous n'êtes pas autorisé à accéder à cette interface
            </Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
}

export default Authentication;
