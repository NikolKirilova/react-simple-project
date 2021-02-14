const getOrigami = async (length) => {
    const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`)
    const origami = await promise.json()
    return origami
  }
  
  export default getOrigami