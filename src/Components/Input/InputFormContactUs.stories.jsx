import React from 'react';
import InputFormContactUs from './InputFormContactUs';

export default {
    title: 'Component/Input',
    component: InputFormContactUs,
};

const Template = (args) => <InputFormContactUs {...args} />;

export const DefaultInputPageContactUs = Template.bind({});

DefaultInputPageContactUs.args = {
    input:"",
}

export const DisabledInputPageContactUs = Template.bind({});

DisabledInputPageContactUs.args = {
  input:"",
  disabled: true,
}

export const PlaceholderInputPageContactUs = Template.bind({});
PlaceholderInputPageContactUs.args = {
  input:"exemple",
  placeholder:"exemple",
}
