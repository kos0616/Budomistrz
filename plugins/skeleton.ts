// skeleton.ts
import { reactive, watchEffect, h, render, App } from 'vue';

const state = reactive({
  // 加载状态
  loading: false,
  // 使用了 v-skeleton-item 指令的节点保存在这里
  list: [] as HTMLElement[]
});

watchEffect(() => {
  if (process.server) return;
  // 创建 vnode
  const children = state.list.map((el: HTMLElement) =>
    h('div', {
      style: {
        position: 'absolute',
        top: el.getBoundingClientRect().top + 'px',
        left: el.getBoundingClientRect().left + 'px',
        width: el.getBoundingClientRect().width + 'px',
        height: el.getBoundingClientRect().height + 'px',
        background: '#e5e5e5',
        borderRadius: getComputedStyle(el).borderRadius
      }
    })
  );

  // 创建 div 容器
  const container = h('div', children);

  // 将 div容器 渲染到 body 中
  render(state.loading ? container : null, document.body);
});

const Skeleton = {
  mounted(el: HTMLElement, binding: { value: boolean }) {
    state.loading = binding.value;
  },
  updated(el: HTMLElement, binding: { value: boolean }) {
    state.loading = binding.value;
  },
  unmounted() {
    state.loading = false;
  }
};

const SkeletonItem = {
  mounted(el: HTMLElement, binding: { value: boolean }) {
    // 保存 el
    state.list.push(el);
  },
  unmounted(el: HTMLElement) {
    // 删除 el
    const i = state.list.indexOf(el);
    if (i == -1) return;
    state.list.splice(i, 1);
  }
};

// 注册这2个指令
// export default {
const install = {
  install: (app: App) => {
    app.directive('skeleton', Skeleton);
    app.directive('skeleton-item', SkeletonItem);
  }
};

// export { Skeleton, SkeletonItem };

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(install);
});
