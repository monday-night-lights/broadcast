export class Announcer {
    announcerName: string;
    title: string;
    subtitle: string;
    order: any;
    
    constructor(name: string, title: string, subtitle: string, order: number) {
        this.announcerName = name;
        this.title = title;
        this.subtitle = subtitle;
        this.order = order;
    }
}