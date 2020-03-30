export class EmailConfiguration {
    id: number = 0;
    host: string = '';
    port: number = 25;
    user: string = '';
    password: string = '';
    smtpAuth: boolean = true;
    enableTls: boolean = true;
}
