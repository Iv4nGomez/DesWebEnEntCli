class Cliente{
    _dniCliente;
    _nombre;
    _apellidos;
    _usuario;

    constructor(dni, nombre, apellidos) {
        this._dniCliente = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._usuario = procesarUsuario(nombre, apellidos, dni)
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get usuario() {
        return this._usuario;
    }
    set usuario(value) {
        this._usuario = value;
    }

    get dniCliente() {
        return this._dniCliente;
    }
    set dniCliente(value) {
        this._dniCliente = value;
    }

    toHTMLRow(this) {
        let salida = "<tr>";

        for (const valor of this.values) {
            salida += "<td>"+ valor + "</td>";
        }

        salida += "</tr>";
    }
}

class Alojamiento {

    _idAlojamiento;
    _numPersonas;

    constructor(idAlojamiento, numPersonas) {
        this._idAlojamiento = idAlojamiento;
        this._numPersonas = numPersonas;
    }

    get numPersonas() {
        return this._numPersonas;
    }
    set numPersonas(value) {
        this._numPersonas = value;
    }
    
    get idAlojamiento() {
        return this._idAlojamiento;
    }
    set idAlojamiento(value) {
        this._idAlojamiento = value;
    }

       toHTMLRow(this) {
        let salida = "<tr>";

        for (const valor of this.values) {
            salida += "<td>"+ valor + "</td>";
        }

        salida += "</tr>";
    }
    
}

class Habitacion extends Alojamiento {
    _desayuno;
    get desayuno() {
        return this._desayuno;
    }
    set desayuno(value) {
        this._desayuno = value;
    }
    

    constructor(idAlojamiento, numPersonas, desayuno) {
        super(idAlojamiento, numPersonas)
        this._desayno = desayuno;
    }
}

class Reserva {
    _idReserva;
    _cliente;
    _alojamientos;
    _fechaInicio;
    _fechaFin;

    constructor(idReserva, cliente, alojamientos,fechaInicio, fechaFin){
        this._idReserva = idReserva;
        this._cliente = cliente;
        this._alojamientos = alojamientos;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
    }
    get idReserva() {
        return this._idReserva;
    }
    set idReserva(value) {
        this._idReserva = value;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }
    get fechaInicio() {
        return this._fechaInicio;
    }
    set fechaInicio(value) {
        this._fechaInicio = value;
    }
    get fechaFin() {
        return this._fechaFin;
    }
    set fechaFin(value) {
        this._fechaFin = value;
    }


    toHTMLRow(this) {
        let salida = "<tr>";

        for (const valor of this.values) {
            salida += "<td>"+ valor + "</td>";
        }

        salida += "</tr>";
    }
}

class Agencia {
    _clientes;
    _reservas;
    _alojamientos;

    constructor(clientes, reservas, alojamientos) {
        this._clientes = clientes;
        this._reservas = reservas;
        this._alojamientos = alojamientos;
    }

    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }
    get reservas() {
        return this._reservas;
    }
    set reservas(value) {
        this._reservas = value;
    }
    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }
    
    altaCliente(oCliente) {
      if (this.clientes.find((c) => c.dniCliente == this.dniCliente) != undefined) {
        this.clientes.append(oCliente)
        return
      }

      console.log("El cliente ya existe en la agencia!")
    
    }
}

function procesarUsuario(nombre, apellidos, dni) {
    let inicialNombre = nombre[0];

    let apellidosSeparados = apellidos.split(" ");
    let primerApellido = apellidosSeparados[0].slice(0, 3);
    let segundoApellido = apellidosSeparados[1].slice(0,3);

    let tresUltimoDNI = dni.slice(0, 3);
    
    return inicialNombre + primerApellido + segundoApellido + tresUltimoDNI;


}