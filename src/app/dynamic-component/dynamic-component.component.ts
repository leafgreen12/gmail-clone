import {AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponentContentComponent} from '../dynamic-component-content/dynamic-component-content.component';
import {DynamicFormComponent} from '../core/dynamic-control/dynamic-form/dynamic-form.component';
import {AdItem} from '../shared/adItem';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit, AfterViewInit {
  @Input() fields: any[];
  @ViewChild('container', {
    read: ViewContainerRef,
    static: true
  }) container: ViewContainerRef;

  componentRef: ComponentRef<DynamicComponentContentComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.renderComponent();
  }
  renderComponent() {
    const container = this.container;
    container.clear();
    const adItem = new AdItem(DynamicFormComponent, this.fields);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const componentRef = container.createComponent(componentFactory);
    this.componentRef = componentRef;
    componentRef.instance.fields = adItem.data;
    componentRef.changeDetectorRef.detectChanges();
  }
}
