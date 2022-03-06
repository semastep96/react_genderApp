const serverUrl = 'https://api.genderize.io';

async function checkGender(name) {
  const url = `${serverUrl}?name=${name}`;
  const response = await fetch(url)
  const info = await response.json()
  return info.gender
}

export default checkGender