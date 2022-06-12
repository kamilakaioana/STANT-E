// import { IResponse } from "../../../interfaces";
import { Label } from "./styles";

interface Props {
  setFile: (base64: string | ArrayBuffer | null) => void;
  // res: (value: IResponse) => void;
}

function CustomFileInput({ setFile }: Props) {
  const encodeFileBase64 = (files: FileList | null) => {
    var reader = new FileReader();
    if (files?.[0]) {
      reader.readAsDataURL(files?.[0]);
      reader.onload = () => {
        var Base64 = reader.result;
        setFile(Base64);
      };

      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
    return reader.result ?? "";
  };

  return (
    <div>
      <Label htmlFor="file">Enviar arquivo</Label>
      <input
        name="file"
        type="file"
        id="file"
        onChange={(e) => encodeFileBase64(e.target.files)}
        style={{
          display: "none",
        }}
        accept="image/png, image/jpeg"
      />
    </div>
  );
}

export default CustomFileInput;
