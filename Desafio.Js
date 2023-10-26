class ProductManager{
    
    static #precioBaseGanancias=0.85

    constructor(){
        this.eventos=[]
    }



getEventosById(id){
    let indice=this.eventos.findIndex(evento=>evento.id===id)
    if(indice===-1){
        console.log("No existe el evento con id ${id}") 
        return
    }

    let indice1=this.eventos.findIndex(evento=>evento.id===id)
    let indice2=this.eventos.find(evento=>evento.id===id)

    console.log("findIndex",indice1)
    console.log("find",indice2)


    return this.eventos[indice]
}

agregarAsistente(id, nombre, email){
    let indice=this.eventos.findIndex(evento=>evento.id===id)
    if(indice===-1){
        console.log("No existe el evento con id ${id}") 
        return
    }

    let existe=this.eventos[indice].participantes.findIndex(participantes=>participantes.email===email)
    if(existe!==-1){
        console.log("El usuario con email ${email} ya esta registrado en el evento con id ${id}")
        return
    }

    this.eventos[indice].participantes.push({
        nombre, email
    })
}

ponerEnGira(id,lugar,fecha){
    let indice=this.eventos.findIndex(evento=>evento.id===id)
    if(indice===-1){
        console.log("No existe el evento con id ${id}") 
        return
    }
    let idNuevo=this.eventos[this.eventos.lenght-1].id + 1

    let eventoNuevo={
        ...this.eventos[indice],
        lugar,
        fecha,
        id: idNuevo,
        participantes:[]
    }

    this.eventos.push(eventoNuevo)
}
    
agregarEvento(nombre, lugar, precio, capacidad=50, fecha){

    let id=1
    if(this.eventos,legth>0){
        id=this.eventos[this.eventos.legth-1].id + 1
    }

    let nuevoEvento={
        id,
        nombre,lugar,
        precio:precio+precio*ProductManager.#precioBaseGanancias,
        capacidad,fecha,
        participantes:[]
    }

    this.eventos.push(nuevoEvento)
}
   
}

let tm= new ProductManager()
tm.agregarEvento("Land rober","Ituzaingo",40000,100, new Date("2023-10-30"))
tm.agregarEvento("Duster","Castelar",60000,300, new Date("2023-12-23"))

console.log(tm.getEventos())
console.log(tm.getEventosById(5))
console.log(tm.getEventosById(2))
tm.agregarAsistente(1, "Nicolas", "nretrive@test.com")
tm.agregarAsistente(2, "Nahuel", "nahu@test.com")
tm.agregarAsistente(3, "Mateo", "dopazo@test.com")
tm.agregarAsistente(4, "Juan", "gallo@test.com")

tm.ponerEnGira(1, "UnLam", new Date(2023-12-23))
tm.ponerEnGira(3,"Haeo", new Date("2023-12-18"))

console.log(JSON.stringify(tm.getEventos(),null,5))


