import { Label } from "./styles";

interface Props {
  setFile: (base64: string | ArrayBuffer | null) => void;
}

function CustomFileInput({ setFile }: Props) {
  const encodeFileBase64 = (files: FileList | null) => {
    var reader = new FileReader();
    if (files?.[0]) {
      reader.readAsDataURL(files?.[0]);
      reader.onload = () => {
        const base64 = reader.result;
        if (typeof base64 === "string") {
          const [_, base64Hash] = base64?.split(",");
          setFile(base64Hash);
        }
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
