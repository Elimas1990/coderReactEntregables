const Search = () =>{
    const handleEvent = (e) =>{
        
        //if(e.key === '-') e.preventDefault()  /// Para validar caracteres
        //if('AEIOUaeiou'.includes(e.key)) e.preventDefault()  /// Para validar caracteres previene ingreso de vocales
    }
    return (
        <>
            <input className="form-control" onKeyDown={handleEvent} />
        </>
    )
}
export default Search