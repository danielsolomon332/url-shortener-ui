export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrls = ({long_url, title}) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({long_url: long_url, title: title})
  })
  .then(res => res.json())
  .then (data => console.log(data))
}
