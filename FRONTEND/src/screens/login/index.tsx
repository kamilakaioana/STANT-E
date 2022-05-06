import React, { useState } from "react";

function Login() {
  const [teste, setTeste] = useState<string>('')

  return (
    <>
    <h1>
      Hello, {teste}
    </h1>
    <div>
      <input value={teste} onChange={(e) => setTeste(e.target.value)}/>
    </div>
    </>
 

  )
}

export default Login;