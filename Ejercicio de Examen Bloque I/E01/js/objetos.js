class Arbol {
    _codigo;
    _tallaje;
    _especie;
    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }
    get tallaje() {
        return this._tallaje;
    }
    set tallaje(value) {
        this._tallaje = value;
    }
    get especie() {
        return this._especie;
    }
    set especie(value) {
        this._especie = value;
    }

    constructor(codigo, tallaje, especie) {
        this._codigo = codigo;
        this._tallaje = tallaje;
        this._especie = especie;
    }

    toHTMLRow() {

        let fila = "<tr>"
        for (let atributo of Object.values(this)) {
            fila += "<td>" + atributo +  "</td>";
        }

        return fila + "</tr>";
    }
}

class Vivero {
    _arboles;
    get arboles_1() {
        return this._arboles;
    }
    set arboles_1(value) {
        this._arboles = value;
    }

    constructor(arboles) {
        this._arboles = [];
    }

    altaArbol(oArbol) {

        for (const arbol of this.arboles_1) {
            if (arbol.codigo == oArbol.codigo) {
                return false;
            }
        }

        this.arboles_1.push(oArbol)
        return true;
    }

    tallajeArbol(codigo, talla) {
        console.log(codigo)
        console.log(talla)
        let obtenerArbol = null
        for (const arbol of this.arboles_1) {
            if(arbol.codigo == codigo ) {
                obtenerArbol = arbol
            }
        }

       if (obtenerArbol == null) {
            return "Árbol no registrado"
       }

       if (obtenerArbol.tallaje > talla) {
            return "Tallaje  inferior  al  registrado"
       }

       obtenerArbol.tallaje = talla;
       return "Correcto, tallaje actualizado" + obtenerArbol.constructor.name

       
    }
}

class Perenne extends Arbol {
    _frutal;

    constructor(codigo, tallaje, especie,frutal) {
        super(codigo, tallaje, especie)
        this._frutal = frutal
    }

}

class Caduco extends Arbol {
    _mesFloracion;

    constructor(codigo,tallaje, especie,mesFloracion) {
        super(codigo, tallaje, especie);
        this._mesFloracion = mesFloracion
    }

}