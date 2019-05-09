import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTool';
  list = [
    {

      name: `monthsale/calculate`, // 计算url
      report_url: `monthSale`,
      import_data_view_url: `monthsale/searchData`
  },
  {
      name: `dealerQuarterlySale/calculate`, // 计算url
      report_url: `quarterSale`,
      import_data_view_url: `dealerQuarterlySale/getDealerQuarterlySaleList`
  },

  ]
}
