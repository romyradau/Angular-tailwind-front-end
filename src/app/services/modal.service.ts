import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  isModalVisible(id: string): boolean{
    return Boolean(this.modals.find(element => element.id === id)?.visible)
    // return !!this.modals.find(element => element.id === id)?.visible
    //? is called optional chaining to prevent segfault so to say
    //beide varianten sind dafur da um boolean zu forcen
  }

  toggleModal(id: string){

    const modal = this.modals.find(element => element.id === id)
    if(modal)
    modal.visible = !modal.visible
  }
}
 