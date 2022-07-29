export const fetchData = (jsonData: any, option?: any) => {
  const keys: any[] = [];
  let welcome;
  if (option) {
    const options = option.split('-');
    let n = options.length;
    while (n !== 0) {
      jsonData = jsonData[options[options.length - n]];
      n--;
    }
  } else {
    welcome = 'Hi! This is your personal Assistant. Please choose from below services!';
  }
  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      if (typeof Object.values(key) === 'object') {
        keys.push(key);
      }
      if (key === 'response') {
        return jsonData[key];
      }
    }
  }
  const keynew = keys.join('<br/>');
  return welcome ? `${welcome} <br/> ${keynew}` : keynew;
};
