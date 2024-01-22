class heroi {
	constructor(nome, idade, tipo){
    	this.nomeHeroi = nome
    	this.idadeHeroi = idade
    	this.tipoHeroi = tipo
        this.ataque = ["espada","magia","shuriken","artes marciais"]
    }
      atacar(){
      	  console.log(`O heroi ${this.nomeHeroi} com idade ${this.idadeHeroi} anos do tipo `)
          if (this.tipoHeroi === "guerreiro")
              console.log(`${this.tipoHeroi} atacou usando ${this.ataque[0]}`)
          else if (this.tipoHeroi === "mago")
              console.log(`${this.tipoHeroi} atacou usando ${this.ataque[1]}`)
          else if (this.tipoHeroi === "ninja")
              console.log(`${this.tipoHeroi} atacou usando ${this.ataque[2]}`)
          else if (this.tipoHeroi === "monge")
              console.log(`${this.tipoHeroi} atacou usando ${this.ataque[3]}`)
      }
}

let heroiG = new heroi("Thaylan", 34, "monge")

heroiG.atacar()