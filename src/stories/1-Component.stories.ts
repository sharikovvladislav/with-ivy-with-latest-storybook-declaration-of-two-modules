import { SomeModule } from './../app/some/some.module';

export default {
  title: 'Component',
};

export const story = () => ({
  template: `
    <app-component></app-component>
  `,
  moduleMetadata: {
    imports: [ SomeModule ]
  },
  props: {
    text: '😀 😎 👍 💯',
  },
});
