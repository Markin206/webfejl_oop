class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor(){// most a tulajdonságott határozzuk meg, ha adnánk paramétert akkor csak a értéket határoznánk meg
        this.manolist = []; //létrehozzuk a manó lista tulajdonságot és azért üres mert nem tartozik hozzá még semmi manó
    }

    addmano(Companion){//csak azért kell egy paraméter mert a manolista már az osztályon belül van
        this.manolist.push(Companion);
    }
   }
   
   class Companion{
    // TODO 5
    // ID, Keresztnev, VezetekNev, Reszleg kötelező
    constructor(id, kernev, veznev, reszleg){
        this.id = id
        this.kernev = kernev
        this.veznev = veznev
        this.reszleg = reszleg
        this.productlist = [] //mivel nem szükséges a példány létrehozásáért emiatt nincs a paraméterben és amiatt üres mert még nincs elkészített termék
    }
    getname() {//amiatt van kivül mivel a metódus/függvény nem rakjuk konstruktorba||amiatt nem kell nekünk paraméterek mert az osztályon belüli tulajdonságokat használjuk
        return this.veznev + " " + this.kernev //return által össze vonjuk a kereszt- és vezetéknevet
    }
    addproduct(product){//ugyanaz mint az addmano függvény
        this.productlist.push(product);
    }
   }