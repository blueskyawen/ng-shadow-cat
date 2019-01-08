/**
 * Created by root on 1/8/19.
 */
import { Directive } from '@angular/core';

@Directive({
    selector: '[nc-sub-dropdown]',
    host    : {
        '[class.nc-sub-dropdown]': 'true'
    }
})
export class NcSubDropdownDirective {
}
