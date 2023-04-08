import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit{

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()

  //chain operator
  ngAfterContentInit(): void{
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )

    //bang operator
    if (!activeTabs || activeTabs.length === 0){
      this.selectTab(this.tabs!.first)
    }
  }

  //sets every active tab to false
  selectTab(tab: TabComponent){
    this.tabs?.forEach(tab =>{
      tab.active = false
    })

    tab.active = true
    
    return false
  }

}
