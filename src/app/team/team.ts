export class Team {
    teamName: string;
    logo: string;
    color: string;

    gamesWon: number;
    score: number;

    constructor (name: string, logo: string, color: string, gamesWon: number, score: number) {
        this.teamName = name;
        this.logo = logo;
        this.color = color;
        this.gamesWon = gamesWon;
        this.score = score;
    }
}