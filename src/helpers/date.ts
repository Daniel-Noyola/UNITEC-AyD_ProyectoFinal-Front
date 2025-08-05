// Formatea la fecha para que sea legible
const formatDate = (timestamp: string)=> {
    const date = new Date(timestamp).toLocaleDateString("es-MX", {
        day: 'numeric',
        month: "long",
        hour: "2-digit",
        minute: "2-digit"
    })

    return date
}

export default formatDate