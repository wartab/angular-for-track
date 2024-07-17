import {JsonPipe} from "@angular/common";
import {Component, input, OnInit} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MyObject} from "./app.component";

const nextIds = new Map<string, number>();


@Component({
    templateUrl: "something.component.html",
    styleUrl: "something.component.scss",
    selector: "something",
    standalone: true,
    imports: [
        JsonPipe,
        FormsModule
    ]
})
export class SomethingComponent implements OnInit {
    public myObj = input.required<MyObject>();
    public type = input.required<string>();

    public internalId: number | undefined;

    public ngOnInit() {
        const type = this.type();
        const nextId = nextIds.get(type);

        if (nextId === undefined) {
            this.internalId = 0;
            nextIds.set(type, 1);
        } else {
            this.internalId = nextId;
            nextIds.set(type, nextId + 1);
        }
    }
}
