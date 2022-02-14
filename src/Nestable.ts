const defaults: Options = {
    listNodeName:    'ol',
    itemNodeName:    'li',
    rootClass:       'dd',
    listClass:       'dd-list',
    itemClass:       'dd-item',
    dragClass:       'dd-dragel',
    handleClass:     'dd-handle',
    collapsedClass:  'dd-collapsed',
    placeClass:      'dd-placeholder',
    noDragClass:     'dd-nodrag',
    emptyClass:      'dd-empty',
    expandBtnHTML:   '<button data-action="expand" type="button">Expand</button>',
    collapseBtnHTML: '<button data-action="collapse" type="button">Collapse</button>',
    group:           0,
    maxDepth:        5,
    threshold:       20,
};

export default class Nestable {
    w: Document;

    el: HTMLElement;

    options: Options;

    mouse = {
        offsetX:  0,
        offsetY:  0,
        startX:   0,
        startY:   0,
        lastX:    0,
        lastY:    0,
        nowX:     0,
        nowY:     0,
        distX:    0,
        distY:    0,
        dirAx:    0,
        dirX:     0,
        dirY:     0,
        lastDirX: 0,
        lastDirY: 0,
        distAxX:  0,
        distAxY:  0,
    };

    isTouch: boolean = false;

    moving: boolean = false;

    dragEl: HTMLElement | null = null;

    dragRootEl: HTMLElement | null = null;

    dragDepth: number = 0;

    hasNewRoot: boolean = false;

    pointEl: HTMLElement | null = null;

    constructor(element: HTMLElement, options: Options = {}) {
        this.w = document;
        this.el = element;
        this.options = { ...defaults, ...options };
        this.init();
    }

    init() {
        this.reset();

        this.el.dataset['nestable-group'] = this.options.group?.toString();
    }

    serialize() {
        // let data;
        // const depth = 0;
        // const list = this;

        // step = function (level, depth) {
        //     const array = [];
        //     const items = level.children(list.options.itemNodeName);

        //     items.each(function () {
        //         const li = $(this);
        //         const item = $.extend({}, li.data());
        //         const sub = li.children(list.options.listNodeName);

        //         if (sub.length) {
        //             item.children = step(sub, depth + 1);
        //         }

        //         array.push(item);
        //     });

        //     return array;
        // };
        // data = step(list.el.find(list.options.listNodeName).first(), depth);

        // return data;
    }

    reset() {
        this.mouse = {
            offsetX:  0,
            offsetY:  0,
            startX:   0,
            startY:   0,
            lastX:    0,
            lastY:    0,
            nowX:     0,
            nowY:     0,
            distX:    0,
            distY:    0,
            dirAx:    0,
            dirX:     0,
            dirY:     0,
            lastDirX: 0,
            lastDirY: 0,
            distAxX:  0,
            distAxY:  0,
        };
        this.isTouch = false;
        this.moving = false;
        this.dragEl = null;
        this.dragRootEl = null;
        this.dragDepth = 0;
        this.hasNewRoot = false;
        this.pointEl = null;
    }
}
