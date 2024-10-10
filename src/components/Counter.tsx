import UserAuth from "./../viewmodels/UserAuth";
export default function Counter() {
  const { user, methods } = UserAuth();

  return (
    <div>
      <div>
        {/* To-Do Hacer que el Input funcione de forma normal que se pueda escribir y borrar 🐥 */}
        {/* Se espera poder escribir "🪼 molesta" y luego cambiar por "🔪🐧 pinguina molesta pero ya guardo cuchillo" */}
        <input
          type="text"
          value={user.signUp_name}
          onChange={methods.updateField("signUp_name")}
        />
        <input
          type="text"
          value={user.signUp_email}
          onChange={methods.updateField("signUp_email")}
        />
        <input
          type="text"
          value={user.signUp_phone}
          onChange={methods.updateField("signUp_phone")}
        />
        <input
          type="password"
          value={user.signUp_password}
          onChange={methods.updateField("signUp_password")}
        />
        <button aria-label="Decrement value" onClick={methods.sendSigUpForm}>
          SEND
        </button>
        {/* 
          Decrement
        </button>
        <span>{count}</span>
        <button aria-label="Increment value" onClick={}>
          Increment
        </button> */}
      </div>
    </div>
  );
}
