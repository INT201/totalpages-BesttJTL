const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems==null || arrayItems==undefined ){
    return undefined
  }
  else if (rowsPerPage==false || rowsPerPage==null || rowsPerPage==undefined){
    return 1 
  }
  else {
    let y = arrayItems.length
    let x = y/rowsPerPage
    let a = Math.ceil(x)
    return a
  }
}
module.exports = totalPages
