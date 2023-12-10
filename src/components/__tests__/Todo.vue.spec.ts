import { mount } from '@vue/test-utils';
import Todo from '@/components/Todo.vue';
import { describe, it, expect } from  'vitest';


// github copilotの補完をもとに生成したテストコード
// 上で改行してgithub copilotが生成したテストコードブロックを展開してみる

// describe('Todo.vue', () => {
//   // given
//   const wrapper = mount(Todo);
//   const newTodo = 'Test Task';

//   // when
//   wrapper.setData({ newTodo });
//   wrapper.find('input').trigger('keyup.enter');

//   // then
//   expect(wrapper.text()).toContain(newTodo);
// });

// chatGPTが生成したテストコード
// describe('Todo.vue', () => {
//   it('renders todo items correctly', async () => {
//     const wrapper = mount(Todo);

//     // Add a new task
//     await wrapper.setData({ newTodo: 'Test Task' });
//     await wrapper.vm.$nextTick();
//     wrapper.find('input').trigger('keyup.enter');

//     // Check if the task is rendered
//     expect(wrapper.text()).toContain('Test Task');
//   });

//   it('does not render empty tasks', async () => {
//     const wrapper = mount(Todo);

//     // Add an empty task
//     await wrapper.setData({ newTodo: '' });
//     await wrapper.vm.$nextTick();
//     wrapper.find('input').trigger('keyup.enter');

//     // Check if the empty task is not rendered
//     expect(wrapper.text()).not.toContain('');
//   });
// });
