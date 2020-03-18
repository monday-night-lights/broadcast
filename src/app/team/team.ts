export class Team {
    teamName: string;
    logo: string;
    color: string;

    gamesWon: number;
    score: number;

    isHomeTeam: boolean;

    constructor (name: string, logo: string, color: string, gamesWon: number, score: number, isHomeTeam: boolean) {
        this.teamName = name;
        this.logo = logo;
        this.color = color;
        this.gamesWon = gamesWon;
        this.score = score;
        this.isHomeTeam = isHomeTeam;
    }
}