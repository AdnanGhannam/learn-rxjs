import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    providers: [MessageService]
})
export class AppComponent {
    constructor(private usersService: UsersService, private toastService: MessageService) {}

    ngOnInit() {
        this.usersService.getAll().subscribe(data => {
            this.users = data;
            this.loadingUsers = false;
        });
    }

    // Login
    name = "";
    password = "";
    loading = false;

    login() {
        this.loading = true;

        this.usersService.login(this.name, this.password).subscribe({
            next: data => {
                this.loading = false;
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("permission", data.permission);
                this.toastService.add({ severity: "success", summary: "Login success", detail: "Login success"});
                this.loading = false;
            },
            error: err => {
                this.toastService.add({ severity: "error", summary: "Login Failed", detail: err.error?.[0]});
                this.loading = false;
            },
            complete: () => {
                // this.loading = false;
            }
        });
    }

    // Display && Update Users
    loadingUsers = true;
    users!: any[];

    clonedUsers: { [s: string]: any } = {};

    permissions = [
        "User",
        "Moderator",
        "Admin"
    ];

    onRowEditInit(user: any) {
        this.clonedUsers[user.id as string] = { ...user };
    }

    onRowEditSave(user: any) {
        this.usersService.update(user.id, user.name, user.firstname, user.lastname, user.email).subscribe({
            next: _ => {
                this.toastService.add({ severity: "success", summary: "Update success", detail: "User update success"});
            },
            error: err => {
                this.toastService.add({ severity: "error", summary: "Update Failed", detail: err.error?.[0]});
            }
        });
        delete this.clonedUsers[user.id as string];
    }

    onRowEditCancel(user: any, index: number) {
        this.users[index] = this.clonedUsers[user.id as string];
        delete this.clonedUsers[user.id as string];
    }
}
