export class Announcer {
    announcerName: string;
    title: string;
    subtitle: string;
    screenOrder: any;
    
    constructor(name: string, title: string, subtitle: string, screenOrder: number) {
        this.announcerName = name;
        this.title = title;
        this.subtitle = subtitle;
        this.screenOrder = screenOrder;
    }
}