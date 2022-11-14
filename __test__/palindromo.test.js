//TEST
const palindromo = require ("../utiles/palindromo")

test( "palindromo de fran", () =>{

const result = palindromo("fran")
expect (result).toBe("narf")})

test( "palindromo de fran", () =>{

    const result = palindromo("ana")
    expect (result).toBe("ana")

})




