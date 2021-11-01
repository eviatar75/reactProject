import React from 'react';
import TitlePageAbout from './TitlePageAbout';

export default {
    component: TitlePageAbout,
    title: 'Component/TitlePageAbout',
};

const Template = (args) => <TitlePageAbout {...args} />;

export const DefaultTitlePageAbout = Template.bind({});

DefaultTitlePageAbout.args = {
    text:"A propos de nous",
}

export const SmallTitlePageAbout = Template.bind({});

SmallTitlePageAbout.args = {
    text:"A propos de nous",
    size: "15px",
}

export const LargeTitlePageAbout = Template.bind({});

LargeTitlePageAbout.args = {
    text:"A propos de nous",
    size: "45px",
}

export const UnderlineTitlePageAbout = Template.bind({});

UnderlineTitlePageAbout.args = {
    text:"A propos de nous",
    underline:"underline"
}
