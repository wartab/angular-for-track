import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {SomethingComponent} from "./something.component";

export interface MyObject {
    id: string;
}

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, SomethingComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
    private nextCounter = 0;

    public myArray: MyObject[] = [];

    public constructor() {
        this.insertNext();
        this.insertNext();
        this.insertNext();
    }

    public insertNext() {
        this.myArray.push({id: `${this.nextCounter++}`});
    }

    public replaceByElementClone() {
        const value = prompt("Which to replace by clone?");

        if (value === null) {
            return;
        }

        const index = this.findIndexById(value);

        if (index === -1) {
            return;
        }

        this.myArray[index] = {...this.myArray[index]};
    }

    public changeId() {
        const firstValue = prompt("Which to change?");

        if (firstValue === null) {
            return;
        }

        const firstIndex = this.findIndexById(firstValue);

        if (firstIndex === -1) {
            return;
        }

        const secondValue = prompt("To what?");

        if (secondValue === null) {
            return;
        }

        this.myArray[firstIndex].id = parseInt(secondValue, 10) + "";
    }

    public shallowCloneList() {
        this.myArray = this.myArray.slice();
    }

    private findIndexById(id: string) {
        return this.myArray.findIndex(row => row.id === parseInt(id, 10) + "");
    }

    public reverseList() {
        this.myArray.reverse();
    }

    public deepCloneList() {
        this.myArray = this.myArray.map(row => ({...row}));
    }

    public swapObjects() {
        const firstValue = prompt("Which to swap?");

        if (firstValue === null) {
            return;
        }

        const firstIndex = this.findIndexById(firstValue);

        if (firstIndex === -1) {
            return;
        }

        const secondValue = prompt("With what?");

        if (secondValue === null) {
            return;
        }

        const secondIndex = this.findIndexById(secondValue);

        if (secondIndex === -1) {
            return;
        }

        const temp = this.myArray[firstIndex];
        this.myArray[firstIndex] = this.myArray[secondIndex];
        this.myArray[secondIndex] = temp;
    }

    public deleteItem() {
        const value = prompt("Which to delete?");
        if (value === null) {
            return;
        }

        const index = this.findIndexById(value);

        if (index === -1) {
            return;
        }

        this.myArray.splice(index, 1);
    }
}
