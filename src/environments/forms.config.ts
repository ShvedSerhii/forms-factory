import { FormModel } from 'src/app/components/forms-list/form/form.model';

export const FormsConfig: Array<FormModel> = [
    {
        type: 'text',
        title: 'Test form #1',
        placeholder: 'Enter value',
        value: 'value',
        data: [
            {name: 'field1', value: 'value1'},
            {name: 'field2', value: 'value2'}
        ],
        required: true,
        pattern: ''
    }, {
        type: 'radio',
        title: 'Test form #2',
        placeholder: 'Enter value',
        value: 'value',
        data: [
            {name: 'field1', value: 'value1'},
            {name: 'field2', value: 'value2'}
        ],
        required: true,
        pattern: ''
    }, {
        type: 'datePicker',
        title: 'Test form #3',
        placeholder: 'Enter value',
        value: 'value',
        data: [
            {name: 'field1', value: 'value1'},
            {name: 'field2', value: 'value2'}
        ],
        required: true,
        pattern: ''
    },
    {
        type: 'select',
        title: 'Test form #4',
        placeholder: 'Enter value',
        value: 'value',
        data: [
            {name: 'field1', value: 'value1'},
            {name: 'field2', value: 'value2'}
        ],
        required: true,
        pattern: ''
    }, {
        type: 'slider',
        title: 'Test form #5',
        placeholder: 'Enter value',
        value: 'value',
        data: [
            {name: 'field1', value: 'value1'},
            {name: 'field2', value: 'value2'}
        ],
        required: false,
        pattern: ''
    }, {
        type: 'checkBox',
        title: 'Test form #6',
        placeholder: 'Enter value',
        value: 'value',
        data: [
            {name: 'field1', value: 'value1'},
            {name: 'field2', value: 'value2'}
        ],
        required: true,
        pattern: ''
    }, {
        type: 'sliderToggle',
        title: 'Test form #7',
        placeholder: 'Enter value',
        value: 'value',
        data: [
            {name: 'field1', value: 'value1'},
            {name: 'field2', value: 'value2'}
        ],
        required: false,
        pattern: ''
    }
];
