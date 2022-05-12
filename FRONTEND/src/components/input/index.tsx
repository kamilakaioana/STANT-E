

import { useState } from "react";
// interface inputProps {

// }

function CustomInput () {
  const [value, SetValue] = useState<string>()
  return (
   <input placeholder='E-mail'/>
  )
}

export default CustomInput;