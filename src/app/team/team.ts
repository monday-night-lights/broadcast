export class Team {
    teamName: string;
    logo: string;
    color: string;

    gamesWon: number;
    score: number;

    isHomeTeam: boolean;
    playersOnIce: number;

    constructor (name: string, logo: string, color: string, gamesWon: number, score: number, isHomeTeam: boolean, playersOnIce: number) {
        this.teamName = name;
        this.logo = logo;
        this.color = color;
        this.gamesWon = gamesWon;
        this.score = score;
        this.isHomeTeam = isHomeTeam;
        this.playersOnIce = playersOnIce;
    }
}