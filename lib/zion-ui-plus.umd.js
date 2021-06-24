(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['zion-ui-plus'] = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  var script$2 = vue.defineComponent({
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

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: ["z-button", [`z-button-${_ctx.type}`]]
    }, [
      vue.createVNode("span", null, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ], 2 /* CLASS */))
  }

  script$2.render = render$2;
  script$2.__file = "packages/Button/src/index.vue";

  // 为组件提供 install 安装方法，供按需引入
  script$2.install = (Vue) => {
      Vue.component(script$2.name, script$2);
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

  var script$1 = vue.defineComponent({
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

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_magnifier = vue.resolveDirective("magnifier");

    return vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
      class: "z-magnifier",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.HandClick && _ctx.HandClick(...args))),
      style: {
          width:_ctx.width +'px',
          height:_ctx.height +'px'
      }
    }, [
      vue.createVNode("div", {
        class: "z-magbox",
        style: {
              width:_ctx.magWidth +'px',
              height:_ctx.magHeight +'px'
          }
      }, [
        vue.createVNode("img", {
          class: "mag-img",
          style: {
                  width:_ctx.width +'px',
                  height:_ctx.height +'px'
              },
          src: _ctx.imgUrl,
          alt: "图片"
        }, null, 12 /* STYLE, PROPS */, ["src"])
      ], 4 /* STYLE */),
      vue.createVNode("div", _hoisted_1, [
        vue.createVNode("img", {
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

  script$1.render = render$1;
  script$1.__file = "packages/Magnifier/src/index.vue";

  // 为组件提供 install 安装方法，供按需引入
  script$1.install = (Vue) => {
      Vue.component(script$1.name, script$1);
  };

  /**生成字母数组**/
  const getAllLetter = () => {
      let letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
      return letterStr.split(",");
  };
  /**生成一个随机数**/
  const randomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
  };
  /**生成一个随机色**/
  const randomColor = (min, max) => {
      var r = randomNum(min, max);
      var g = randomNum(min, max);
      var b = randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
  };
  class GVerify {
      constructor(options) {
          this.version = '1.0.0';
          this.options = {
              id: options.id,
              canvasId: "verifyCanvas",
              width: options.width,
              height: options.height,
              type: options.blend || "blend",
              code: "",
              size: options.size || 4
          };
          this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
          this.options.letterArr = getAllLetter();
          this._init();
          this.refresh();
      }
      _init() {
          var con = document.getElementById(this.options.id);
          var canvas = document.createElement("canvas");
          // this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
          // this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";
          canvas.id = this.options.canvasId;
          canvas.width = this.options.width;
          canvas.height = this.options.height;
          canvas.style.cursor = "pointer";
          canvas.innerHTML = "您的浏览器版本不支持canvas";
          if (con) {
              con.appendChild(canvas);
          }
          // var parent = this;
          canvas.onclick = () => {
              this.refresh();
          };
      }
      refresh() {
          this.options.code = "";
          let canvas = document.getElementById(this.options.canvasId);
          if (canvas.getContext) {
              var ctx = canvas.getContext('2d');
          }
          else {
              return;
          }
          ctx.textBaseline = "middle";
          ctx.fillStyle = randomColor(180, 240);
          ctx.fillRect(0, 0, this.options.width, this.options.height);
          var txtArr;
          if (this.options.type == "blend") { //判断验证码类型
              txtArr = this.options.numArr.concat(this.options.letterArr);
          }
          else if (this.options.type == "number") {
              txtArr = this.options.numArr;
          }
          else {
              txtArr = this.options.letterArr;
          }
          // debugger;
          for (var i = 1; i <= this.options.size; i++) {
              var txt = txtArr[randomNum(0, txtArr.length)];
              this.options.code += txt;
              ctx.font = randomNum(this.options.height / 2, this.options.height) + 'px SimHei'; //随机生成字体大小
              ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色        
              ctx.shadowOffsetX = randomNum(-3, 3);
              ctx.shadowOffsetY = randomNum(-3, 3);
              ctx.shadowBlur = randomNum(-3, 3);
              ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
              var x = this.options.width / (this.options.size + 1) * i;
              var y = this.options.height / 2;
              var deg = randomNum(-10, 10);
              /**设置旋转角度和坐标原点**/
              ctx.translate(x, y);
              ctx.rotate(deg * Math.PI / 180);
              ctx.fillText(txt, 0, 0);
              /**恢复旋转角度和坐标原点**/
              ctx.rotate(-deg * Math.PI / 180);
              ctx.translate(-x, -y);
          }
          /**绘制干扰线**/
          if (this.options.iswire) {
              for (var i = 0; i < 3; i++) {
                  ctx.strokeStyle = randomColor(40, 180);
                  ctx.beginPath();
                  ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                  ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                  ctx.stroke();
              }
          }
          /**绘制干扰点**/
          if (this.options.isPoint) {
              for (var i = 0; i < this.options.width / 8; i++) {
                  ctx.fillStyle = randomColor(0, 255);
                  ctx.beginPath();
                  ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                  ctx.fill();
              }
          }
      }
      /**验证验证码**/
      validate(code) {
          var code = code.toLowerCase();
          var v_code = this.options.code.toLowerCase();
          if (code === v_code) {
              return true;
          }
          else {
              return false;
          }
      }
  }

  var script = vue.defineComponent({
      name: 'z-gverify',
      props: {
          width: {
              type: Number,
              default: 120
          },
          height: {
              type: Number,
              default: 30
          },
          size: {
              type: Number,
              default: 4
          },
          blend: {
              type: String,
              default: 'blend'
          },
          iswire: {
              type: Boolean,
              default: false
          },
          isPoint: {
              type: Boolean,
              default: false
          }
      },
      data() {
          return {
              verifyCode: null
          };
      },
      mounted() {
          this.verifyCode = new GVerify({
              id: 'z-gverify-img-code',
              size: this.size,
              width: this.width,
              height: this.height,
              blend: this.blend,
              iswire: this.iswire,
              isPoint: this.isPoint
          });
      },
      methods: {
          validate(value) {
              if (this.verifyCode) {
                  return this.verifyCode.validate(value);
              }
          }
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      id: "z-gverify-img-code",
      style: {width:_ctx.width+'px',height:_ctx.height+'px'},
      class: "z-gverify"
    }, null, 4 /* STYLE */))
  }

  script.render = render;
  script.__file = "packages/Gverify/src/index.vue";

  script.install = (Vue) => {
      Vue.component(script.name, script);
  };

  // 导入button组件
  // 组件列表
  const components = [
      script$2,
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

  exports.ZButton = script$2;
  exports.ZGverify = script;
  exports.ZMagnifier = script$1;
  exports.default = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
