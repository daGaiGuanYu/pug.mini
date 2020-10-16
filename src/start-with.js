var
  a = 'a'.charCodeAt(),
  z = 'z'.charCodeAt(),
  A = 'A'.charCodeAt(),
  Z = 'Z'.charCodeAt()

module.exports = {
  sharp: str => str.charAt(0) == '#',
  dot: str => str.charAt(0) == '.',
  letter: str => {
    var firstChar = str.charCodeAt(0)
    return (firstChar >= a && firstChar <= z) || (firstChar >= A && firstChar <= Z)    
  }
}