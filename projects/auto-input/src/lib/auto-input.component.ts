import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'J-Input',
  template: `
  <div  style="position:relative;display:inline-block;width:160px;">
  <table class="normal-table listDownTable" id = "tableList" 
  [class.showtable]="showtable" [ngClass]="{'noLimitHeight': (newItem!==undefined)&&newItem.length < 6}">
      <tbody>
          <tr *ngFor="let item of newItem" style="border:none;background-color:white" >
              <td style="border:none;background-color:white" (click)="selected(item)">{{item.name}}</td>
          </tr>
          <td *ngIf="newItem?.length==0" style="border:none;background-color:white">无结果</td>
      </tbody>
  </table>
  <input type="text" placeholder="请选择" [formControl]="form" AUTOCOMPLETE="OFF" 
  class="makeupCo normal-input" (focus)="showtable=true" (blur)="moveout()"  style="width:160px"> 
  <i class="fa fa-close clearBtn" (click)="clearInput($event)"></i>
</div>
  `,
  styles: ['./auto-input.component.scss']
})
export class AutoInputComponent implements OnInit, OnChanges {


  form: FormControl;
  newItem: Array<any>;
  showtable: boolean; // 是否显示下拉

  @Input() item: Array<any>;
  // @Input() defaultValue: any;

  @Output()
  inputSelect: EventEmitter<any> = new EventEmitter();


  constructor() {
    this.form = new FormControl();
  }

  ngOnChanges() {
    this.newItem = this.item;
    this.form.valueChanges.subscribe(d => {
      if (d) {
        this.newItem = this.item.filter(p => (p.name as string).toLowerCase().includes(d.toLowerCase()));
        console.log(this.newItem);
      } else {
        this.newItem = this.item;
      }
    });
  }

  ngOnInit() {
   }

  selected(item: any) {
    this.showtable = false;
    this.form.patchValue(item.name ? item.name : '');
    this.inputSelect.emit(item);
  }

  // 延时避免tr事件无法触发
  moveout() {
    setTimeout(() => {
      this.showtable = false;
    }, 200);
  }
  clearInput(e) {
    this.form.patchValue('');
    this.inputSelect.emit();
  }
}
