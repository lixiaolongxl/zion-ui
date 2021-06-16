import { defineComponent, openBlock, createBlock, createVNode, renderSlot, resolveDirective, withDirectives } from 'vue';

var script$1 = defineComponent({
    name: 'z-button',
    props: {
        type: {
            type: String,
            default: 'default'
        }
    },
    setup() {
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["z-button", [`z-button-${_ctx.type}`]]
  }, [
    createVNode("span", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "packages/Button/src/index.vue";

// 为组件提供 install 安装方法，供按需引入
script$1.install = (Vue) => {
    Vue.component(script$1.name, script$1);
};

var magnifier = {
    mounted(el) {
        // console.log(el)
        const oImage = el;
        const oMagWrap = oImage.querySelector('.z-magbox');
        const oMagImg = oImage.querySelector('.mag-img');
        const imgWidth = parseInt(window.getComputedStyle(oImage, null)['width']);
        const imgHeight = parseInt(window.getComputedStyle(oImage, null)['height']);
        const magWidth = parseInt(window.getComputedStyle(oMagWrap, null)['width']);
        const magHeight = parseInt(window.getComputedStyle(oMagWrap, null)['height']);
        const imgX = oImage.offsetLeft;
        const imgY = oImage.offsetTop;
        console.log(imgX, imgY);
        const init = () => {
            bindEvent();
        };
        function bindEvent() {
            oImage.addEventListener('mouseover', function (event) {
                if (oMagWrap) {
                    oMagWrap.className += " show";
                }
                showMag(getXY(event).x, getXY(event).y, getXY(event).mouseX, getXY(event).mouseY);
                document.addEventListener('mousemove', handMouseMove, false);
            }, false);
            oImage.addEventListener('mouseout', handMouseOut, false);
        }
        function handMouseMove(event) {
            showMag(getXY(event).x, getXY(event).y, getXY(event).mouseX, getXY(event).mouseY);
        }
        function handMouseOut() {
            if (oMagWrap) {
                oMagWrap.className = 'z-magbox';
            }
            document.removeEventListener('mousemove', handMouseMove, false);
        }
        function showMag(x, y, mouseX, mouseY) {
            oMagWrap.style.left = x + 'px';
            oMagWrap.style.top = y + 'px';
            oMagImg.style.left = -x + 'px';
            oMagImg.style.top = -y + 'px';
            if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
                if (oMagWrap) {
                    oMagWrap.className = 'z-magbox';
                }
                document.removeEventListener('mousemove', handMouseMove, false);
            }
        }
        function getXY(e) {
            return {
                x: e.pageX - imgX - magWidth / 2,
                y: e.pageY - imgY - magHeight / 2,
                mouseX: e.pageX - imgX,
                mouseY: e.pageY - imgY,
            };
        }
        init();
        // console.log(oMagImg,imgWidth,imgHeight,magWidth,magHeight)
    }
};

var script = defineComponent({
    name: 'z-magnifier',
    directives: {
        magnifier,
    },
    props: {
        imgUrl: {
            type: String,
            default: '',
        },
        width: {
            type: Number,
            default: 200,
        },
        height: {
            type: Number,
            default: 200,
        },
        magWidth: {
            type: Number,
            default: 100,
        },
        magHeight: {
            type: Number,
            default: 100,
        }
    },
    emits: ["linkClick"],
    setup(prop, { emit }) {
        const HandClick = () => {
            emit('linkClick', prop.imgUrl);
        };
        return {
            HandClick
        };
    }
});

const _hoisted_1 = { class: "img-lk" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_magnifier = resolveDirective("magnifier");

  return withDirectives((openBlock(), createBlock("div", {
    class: "z-magnifier",
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.HandClick && _ctx.HandClick(...args))),
    style: {
        width:_ctx.width +'px',
        height:_ctx.height +'px'
    }
  }, [
    createVNode("div", {
      class: "z-magbox",
      style: {
            width:_ctx.magWidth +'px',
            height:_ctx.magHeight +'px'
        }
    }, [
      createVNode("img", {
        class: "mag-img",
        style: {
                width:_ctx.width +'px',
                height:_ctx.height +'px'
            },
        src: _ctx.imgUrl,
        alt: "图片"
      }, null, 12 /* STYLE, PROPS */, ["src"])
    ], 4 /* STYLE */),
    createVNode("div", _hoisted_1, [
      createVNode("img", {
        style: {
        width:_ctx.width +'px',
        height:_ctx.height +'px'
    },
        class: "static-img",
        src: _ctx.imgUrl,
        alt: "图片"
      }, null, 12 /* STYLE, PROPS */, ["src"])
    ])
  ], 4 /* STYLE */)), [
    [_directive_magnifier]
  ])
}

script.render = render;
script.__file = "packages/Magnifier/src/index.vue";

// 为组件提供 install 安装方法，供按需引入
script.install = (Vue) => {
    Vue.component(script.name, script);
};

// 导入button组件
// 组件列表
const components = [
    script$1,
    script
];
const install = (app) => {
    components.map(component => {
        app.component(component.name, component);
    });
};
// 判断是否是直接引入文件
// window.Vue = window.Vue || {};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
var index = {
    install
};

export default index;
export { script$1 as ZButton, script as ZMagnifier, install };
