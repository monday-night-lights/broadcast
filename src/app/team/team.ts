export class Team {
    name: string;
    logo: string;
    color: string;

    gamesWon: number;
    score: number;

    constructor (name: string, logo: string, color: string, gamesWon: number, score: number) {
        this.name = name;
        this.logo = logo;
        this.color = color;
        this.gamesWon = gamesWon;
        this.score = score;
    }
}