
export class Store {
        Name: string;
        Logo:string;
        branches: string[];

        constructor(Name: string , Logo: string , branches: string[])
        {
            this.Name= Name;
            this.Logo= Logo;
            this.branches = branches
        }
   
}