export class marks {
  constructor(
    public ID:number,
    public NAME: string,
    public TESTNUM: number,
    public MARK: number
    
       
  ) {  }
}

export interface markk {
  users: mark[];
}

export interface mark {

     ID: number,
     NAME: string,
     TESTNUM: number,
     MARK: number
    
       
  
}
