import React from 'react'

const Context = React.createContext("Chinnu")
const Provider = Context.Provider
const Consumer = Context.Consumer

export {Provider, Consumer};
export default Context;