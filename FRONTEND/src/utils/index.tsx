
export const encodeFileBase64 = async (file : File | undefined) => {
  var reader = new FileReader();
  if (file) {
    await reader.readAsDataURL(file);
    reader.onload = () => {
      var Base64 = reader.result;
      return Base64 ?? '';
    };
   
    reader.onerror = (error) => {
      console.log("error: ", error);
    };

  }
  return reader.result as string ?? '';
};













// export const transformImg = (image: string) => {
//   var request = require('request').defaults({ encoding: null });

  // request.get(image, function (error, response, body) {
  // request.get(image, function () {

      // if (!error && response.statusCode == 200) {
      //     const data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
      //     console.log(data);
      //     return data
      // }
//   });
// }
// https://stackoverflow.com/questions/17124053/node-js-get-image-from-web-and-encode-with-base64

// await fetch(url).then(r => r.buffer()).then(buf => `data:image/${type};base64,`+buf.toString('base64'));