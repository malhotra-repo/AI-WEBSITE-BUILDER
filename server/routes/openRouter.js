export const generateResponse = async (prompt) => {
 const res = await fetch(openRouterUrl, {
  method: 'POST'
 })



 if (!res.ok) {
  const err = await res.text()
  throw new Error(" openRoute err" + err)
 }

 const data = await res.json()
 return data.choices[0].message.content
}

