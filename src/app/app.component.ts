import { Component } from '@angular/core';
import * as sethealth from '@sethealth/angular';

const MEDICAL_IMAGE = "https://public1-eu-sethealth.ams3.cdn.digitaloceanspaces.com/public/ankle.nrrd.gz";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading = false;
  error?: Error;
  workspace?: sethealth.WorkspaceState;

  async onClick() {
    this.loading = true;
    const result = await sethealth.med.loadFromSource({
      type: 'nrrd',
      input: MEDICAL_IMAGE,
    });
    if (result.error) {
      this.error = result.error;
    } else {
      const handler = result.value[0];
      const workspace = await sethealth.workspace.create(handler);
      this.workspace = workspace;
    }
    this.loading = false;
  }
}
