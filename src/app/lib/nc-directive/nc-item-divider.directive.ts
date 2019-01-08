/**
 * Created by root on 1/8/19.
 */
import { Directive } from '@angular/core';

@Directive({
    selector: '[nc-item-divider]',
    host    : {
        '[class.nc-dropdown-item-divider]': 'true'
    }
})
export class NcItemDividerDirective {
}
