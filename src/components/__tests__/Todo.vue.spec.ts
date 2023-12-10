import { mount } from '@vue/test-utils';
import Todo from '@/components/Todo.vue';

describe('Todo.vue', () => {
  it('renders todo items correctly', async () => {
    const wrapper = mount(Todo);

    // Add a new task
    await wrapper.setData({ newTodo: 'Test Task' });
    await wrapper.vm.$nextTick();
    wrapper.find('input').trigger('keyup.enter');

    // Check if the task is rendered
    expect(wrapper.text()).toContain('Test Task');
  });

  it('does not render empty tasks', async () => {
    const wrapper = mount(Todo);

    // Add an empty task
    await wrapper.setData({ newTodo: '' });
    await wrapper.vm.$nextTick();
    wrapper.find('input').trigger('keyup.enter');

    // Check if the empty task is not rendered
    expect(wrapper.text()).not.toContain('');
  });
});
