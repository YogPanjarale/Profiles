// enum themes{
//     ,
//     "dark"
// }
export interface ILink{
    title:string;
    url:string;
    style?:string;
};

export interface IProfile{
    title:string;
    theme?:"simple"|"dark";
    image?:string;
    links:Array<ILink>
}