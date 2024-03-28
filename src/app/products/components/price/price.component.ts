import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  ngOnInit(): void {
    console.log('Child Component OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Component OnChanges');
    console.log({changes});

  }

  ngOnDestroy(): void {
    console.log('Child Component OnDestroy');
  }

  @Input()
  public price: number = 0;

}
