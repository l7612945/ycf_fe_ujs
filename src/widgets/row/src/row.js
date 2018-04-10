import './row.scss';
export default {
    name: 'y-row',
    data() {
        return {

        };
    },
    props: {
        tag: {
          type: String,
          default: 'div'
        },
        type: String,
        gutter: Number,
        justify: {
            type: String,
            default: 'start'
        },
        align: {
            type: String,
            default: 'start'
        },
    },
    computed: {
        style() {
            const ret = {};

            if (this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`;
                ret.marginRight = ret.marginLeft;
            }

            return ret;
        }
    },
    render(h) {
        return h(this.tag, {
            class: [
                'y-row',
                this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                this.align !== 'start' ? `is-align-${this.align}` : ''
            ],
            style: this.style
        }, this.$slots.default);
    }
};