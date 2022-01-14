class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
  return string.replace(/[^A-Za-z0-9-'" "]+/g, "");
  
  }  
  // 1.Break string up into serparate strings
  // 2.capitalize first letter of each string
  // 3. join strings back together
  static titleize(string){
  let words = string.split(" ");
  let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from', 'the']
  for (let i = 0; i < words.length; i++) {
    if(!array.includes(words[i].toLowerCase())){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  return words.join(" ")
}
}
