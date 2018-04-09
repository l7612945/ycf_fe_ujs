import './col.scss';
export default {
    name: 'ycol',
    data() {
        return {

        };
    },
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: Number,
        right: Number,
        left: Number,
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== 'y-row') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        }
    },
    render(h) {
        let classList = [];
        let style = {};

        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }

        ['span', 'offset','left', 'right'].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                classList.push(
                    prop !== 'span' ?
                    `y-col-${prop}--${this[prop]}` :
                    `y-col--${this[prop]}`
                );
            }
        });
        return h(this.tag, {
            class: ['y-col', classList],
            style
        }, this.$slots.default);
    }
};