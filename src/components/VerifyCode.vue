<template>
  <div class="s-canvas">
    <canvas
      id="s-canvas"
      ref="can"
      :width="contentWidth"
      :height="contentHeight"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted, ref, nextTick } from "vue";
export default defineComponent({
  name: "VerifyCode",
  props: {
    identifyCode: {
      //默认注册码
      type: String,
      default: "1234",
    },
    fontSizeMin: {
      // 字体最小值
      type: Number,
      default: 25,
    },
    fontSizeMax: {
      // 字体最大值
      type: Number,
      default: 35,
    },
    backgroundColorMin: {
      // 验证码图片背景色最小值
      type: Number,
      default: 200,
    },
    backgroundColorMax: {
      // 验证码图片背景色最大值
      type: Number,
      default: 220,
    },
    dotColorMin: {
      // 背景干扰点最小值
      type: Number,
      default: 60,
    },
    dotColorMax: {
      // 背景干扰点最大值
      type: Number,
      default: 120,
    },
    contentWidth: {
      //容器宽度
      type: Number,
      default: 116,
    },
    contentHeight: {
      //容器高度
      type: Number,
      default: 38,
    },
  },
  setup(prop) {
    let can = ref();
    // 生成一个随机数
    const randomNum = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    // 生成一个随机的颜色
    const randomColor = (min: number, max: number) => {
      let r = randomNum(min, max);
      let g = randomNum(min, max);
      let b = randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    };
    const drawPic = (ctx: CanvasRenderingContext2D) => {
      ctx.textBaseline = "bottom";
      // 绘制背景
      ctx.fillStyle = randomColor(
        prop.backgroundColorMin,
        prop.backgroundColorMax
      );
      ctx.fillRect(0, 0, prop.contentWidth, prop.contentHeight);
      // 绘制文字
      for (let i = 0; i < prop.identifyCode.length; i++) {
        drawText(ctx, prop.identifyCode[i], i);
      }
      drawLine(ctx);
      drawDot(ctx);
    };
    const drawText = (
      ctx: CanvasRenderingContext2D,
      txt: string,
      i: number
    ) => {
      ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
      ctx.font = randomNum(prop.fontSizeMin, prop.fontSizeMax) + "px SimHei"; //随机生成字体大小
      let x = (i + 1) * (prop.contentWidth / (prop.identifyCode.length + 1));
      let y = randomNum(prop.fontSizeMax, prop.contentHeight - 5);
      var deg = randomNum(-30, 30);
      // 修改坐标原点和旋转角度
      ctx.translate(x, y);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.fillText(txt, 0, 0);
      // 恢复坐标原点和旋转角度
      ctx.rotate((-deg * Math.PI) / 180);
      ctx.translate(-x, -y);
    };
    const drawLine = (ctx: CanvasRenderingContext2D) => {
      // 绘制干扰线
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = randomColor(100, 200);
        ctx.beginPath();
        ctx.moveTo(
          randomNum(0, prop.contentWidth),
          randomNum(0, prop.contentHeight)
        );
        ctx.lineTo(
          randomNum(0, prop.contentWidth),
          randomNum(0, prop.contentHeight)
        );
        ctx.stroke();
      }
    };
    const drawDot = (ctx: CanvasRenderingContext2D) => {
      // 绘制干扰点
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          randomNum(0, prop.contentWidth),
          randomNum(0, prop.contentHeight),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    };
    watch(
      () => prop.identifyCode,
      () => {
        let ctx = can.value.getContext("2d") as CanvasRenderingContext2D;
        drawPic(ctx);
      }
    );
    onMounted(() => {
      console.log(prop);
      let ctx = can.value.getContext("2d") as CanvasRenderingContext2D;
      drawPic(ctx);
    });
    return { can };
  },
});
</script>

<style lang="scss" scoped></style>
