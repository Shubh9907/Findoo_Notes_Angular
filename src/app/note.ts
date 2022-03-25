export class Note {
    id!: string;
    title!: string;
    noteBody!: string;
    inTrash!: boolean;
    inArchieve!: boolean;
    trashedDate!: Date;
    noteColor!: string;
    reminder!: Date;
    pined!: boolean;
}
