class  Warrior{
    
    constructor(){
        this.speaker = true;
        this.study = false;
        this.scream = true;
	}
}
class Nurse{
    constructor(){
        this.speaker = true;
        this.study = true;
        this.scream = false;
	}
}
class Protoss extends Warrior () {
    
    constructor(speaker, study, scream) { 
        super();    
        this.speaker = speaker;
        this.study = study;
        this.scream = scream; 
        this.run = true;
        this.defend = true;
    }
}
class Terran extends Warrior {
    constructor(speaker, study, scream) { 
        super();    
        this.speaker = speaker;
        this.study = study;
        this.scream = scream; 
        this.atack = true;
        this.bewitch = true;
    }
}
class Zerg extends Warrior {
    constructor(speaker, study, scream) { 
        super();    
        this.speaker = speaker;
        this.study = study;
        this.scream = scream; 
        this.mental = true;
        this.fly = true;
    }
}
class Custom1 extends Nurse {
    constructor(speaker, study, scream) { 
        super();    
        this.speaker = speaker;
        this.study = study;
        this.scream = scream; 
        this.run = true;
        this.defend = true;
        this.atack = true;
    }
}
class Custom2 extends Nurse{
    constructor() { 
        super();
        this.speaker = speaker;
        this.study = study;
        this.scream = scream;
        this.bewitch = true;
        this.mental = true;
    }
}


(function() {
    protoss = new Protoss(true, false, true);
    terran = new Terran(true, false, true);
    zerg = new Zerg(true, false, true);
    custom1 = new Custom1(true, true, false);
    custom2 = new Custom2(true, true, false);
    
    console.log("Protos: "+ protoss.run());
})();