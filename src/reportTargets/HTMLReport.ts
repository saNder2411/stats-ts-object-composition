import fs from 'fs';
import { OutputTarget } from './../Summary';


export class HTMLReport implements OutputTarget {

  print(report: string): void {
    const html = `
      <div>
        <h1>Analyses Output</h1>
        <p>${report}</p>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}