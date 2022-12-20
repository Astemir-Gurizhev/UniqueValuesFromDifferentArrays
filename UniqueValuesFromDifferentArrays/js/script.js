const a = [6,8,6,7,3]
const b = [2,5,8,7,3]
const c = []

const addC = () => {
      a.filter(item => b.includes(item) ? false : c.push(item))
      b.filter(item => a.includes(item) ? false : c.push(item))  
      const unique = c.filter((x, i) => c.indexOf(x) === i);
      console.log(unique);
}
addC()
