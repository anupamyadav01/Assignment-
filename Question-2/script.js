const url = `https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby`;

function getUrlParameterValue(url, parameter) {
  const params = url.split("?")[1].split("&");

  for (const param of params) {
    const [key, value] = param.split("=");
    if (key === parameter) {
      return value;
    }
  }

  return null;
}

console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_source"));
console.log(getUrlParameterValue(url, "utm_campaign"));
