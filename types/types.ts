enum themes{
    "simple",
    "dark"
}
export interface ILink{
    title:string;
    url:string;
    style?:string;
};

export interface IProfile{
    title:string;
    theme?:themes;
    links:Array<ILink>
}