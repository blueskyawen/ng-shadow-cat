/**
 * Created by liuxuwen on 18-11-25.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-affix',
    templateUrl: './nc-affix.component.html',
    styleUrls: ['./nc-affix.component.css']
})
export class NcAffixComponent implements OnInit {
    @Input() navItems : any[] = [
        {id:'section-1',url:'#section-1',title:'哲学开始于仰望天穹'},
        {id:'section-2',url:'#section-2',title:'世界究竟是什么'},
        {id:'section-3',url:'#section-3',title:'世界有没有一个开端'},
        {id:'section-4',url:'#section-4',title:'先有鸡还是先有蛋'},
        {id:'section-5',url:'#section-5',title:'宇宙在空间上有没有边界'},
        {id:'section-6',url:'#section-6',title:'因果之间有必然联系吗'}
    ];
    @Input() parentId : string;
    @Input() offset : number = 30;
    @Input() isFloat : boolean = true;
    isShowEye: boolean = false;
    typeClasses : any = {};
    state : string = 'affix-top';
    scrollspy : any;
    scrollBoll : any;
    scrollEye : any;
    body : any;
    navs : any;

    timer : any = null;
    displayType : string;
    contentDom : any;
    isWindows : boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.navItems.forEach((item) => {
           item.isActive = false;
        });
        document.onscroll = () => {
            this.checkNavbarPosition();
            this.processNavbar();
        };
        this.scrollspy = document.getElementsByClassName('nc-affix')[0];
        this.scrollBoll = this.scrollspy.getElementsByClassName('nav-linkboll')[0];
        this.scrollEye = this.scrollspy.getElementsByClassName('nc-nav-eye')[0];
        this.navs = this.scrollspy.getElementsByClassName('nav')[0];
        this.body = document;
    }

    switchNavItems(type : any) {
        if(type === 'eye') {
            return this.isShowEye = true;
        }
        if(type === 'nav') {
            this.isShowEye = false;
            return this.processNavbar();
        }
    }

    checkNavbarPosition() {
        let newstate = this.getState();
        if(this.state === newstate) {
            return;
        }
        if(this.state === 'affix-top' && newstate === 'affix') {
            this.navs.classList.add('affix');
            this.scrollEye.classList.add('affix');
            return this.state = newstate;
        }
        if(this.state === 'affix' && newstate === 'affix-top') {
            this.navs.classList.remove('affix');
            this.scrollEye.classList.remove('affix');
            return this.state = newstate;
        }
        if(this.state === 'affix' && newstate === 'affix-bottom') {
            let tmpHeight = this.scrollspy.offsetHeight - this.navs.offsetHeight - this.offset;
            this.scrollspy.classList.add('spy-relative');
            this.navs.classList.remove('affix');
            this.navs.classList.add('affix-bottom');
            this.navs.style.top = 'auo';
            this.scrollEye.classList.remove('affix');
            this.scrollEye.classList.add('affix-bottom');
            this.scrollEye.style.top = 'auo';
            return this.state = newstate;
        }
        if(this.state === 'affix-bottom' && newstate === 'affix') {
            this.scrollspy.classList.remove('spy-relative');
            this.navs.classList.remove('affix-bottom');
            this.navs.classList.add('affix');
            this.navs.style.top = this.offset+'px';
            this.scrollEye.classList.remove('affix-bottom');
            this.scrollEye.classList.add('affix');
            this.scrollEye.style.top = this.offset+'px';
            return this.state = newstate;
        }
    }

    getState() {
        if(this.state === 'affix-top') {
            if((this.scrollspy.offsetTop - this.body.scrollTop) <= this.offset) {
                return 'affix';
            } else {
                return 'affix-top'
            }
        }
        if(this.state === 'affix') {
            if((this.scrollspy.offsetTop - this.body.scrollTop) > this.offset) {
                return 'affix-top'
            }
            if(this.body.scrollTop +
                this.navs.offsetHeight +
                this.offset >=
                this.body.getElementsByClassName('footer')[0].offsetTop) {
                return 'affix-bottom'
            }
            return 'affix'
        }
        if(this.state === 'affix-bottom') {
            if(this.body.scrollTop +
                this.navs.offsetHeight +
                this.offset >=
                this.body.getElementsByClassName('footer')[0].offsetTop) {
                return 'affix-bottom'
            } else {
                return 'affix'
            }
        }
    }

    processNavbar() {
        for(let item of this.navItems) {
            var targetTop = this.body.getElementById(item.id).offsetTop - this.body.scrollTop;
            if(targetTop < 20) {
                this.activeBar(item);
                break;
            }
        }
    }

    activeBar(item : any) {
        this.navItems.forEach((item1) => {item1.isActive = false;})
        item.isActive = true;
        let tmpTop = this.navItems.indexOf(item);
        let tempHeight = this.body.getElementsByClassName('nav-item')[0].offsetHeight;
        this.scrollBoll.style.top = (tmpTop * tempHeight + tempHeight/2) + 'px';
    }
}

