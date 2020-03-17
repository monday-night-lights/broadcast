export class Announcer {
    announcerName: string;
    title: string;
    subtitle: string;
    
    constructor(name: string, title: string, subtitle: string) {
        this.announcerName = name;
        this.title = title;
        this.subtitle = subtitle;
    }
}