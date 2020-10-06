function tugas12(){
  var namaBuahbuahan = ['Pisang','Jeruk','Apel','Mangga'];
  console.log(namaBuahbuahan);
  namaBuahbuahan.pop();
  console.log(namaBuahbuahan);
  shiftnamaBuahbuahan = namaBuahbuahan.shift();
  return namaBuahbuahan;
}

console.log(tugas12());
