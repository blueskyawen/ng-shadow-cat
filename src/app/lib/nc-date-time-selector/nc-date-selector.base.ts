

export class NcDateSelectorBase  {
    selectorType : string = 'single';
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    formatLabel : string;
    dateFormat : string = '/';
    timeFormat : string = ':';

    constructor() {}

    listenDocuClick() {
        if(this.selectorType == 'input') {
            document.addEventListener('click', (event) => {
                if (!this.isOverSelector) {
                    this.isHiddenSelector = true;
                }
                event.stopPropagation();
            });
        }
    }

    formatValue(value : number) {
        return value < 10 ? '0'+value : value.toString();
    }

    mouseover() {
        if(this.selectorType === 'input') {
            this.isOverSelector = true;
        }
    }

    mouseout() {
        if(this.selectorType === 'input') {
            this.isOverSelector = false;
        }
    }

    closeSelector() {
        if(this.selectorType === 'input') {
            this.isHiddenSelector = true;
        }
    }

    clearItems(items : any[]) {
        items.forEach((item) => {
            if(!item.disable) {
                item.active = false;
            }
        });
    }
}
